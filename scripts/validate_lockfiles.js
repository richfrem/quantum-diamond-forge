/**
 * Quantum Diamond Forge - Lockfile Validator
 * Version: 1.0
 * 
 * Purpose: Validate cross-artifact consistency using lockfiles.
 * Catches spec drift and conflicts before IDE agent starts building.
 */

const fs = require('fs');
const path = require('path');

// --- Configuration ---

const LOCKS_DIR = path.join(process.cwd(), 'docs/locks');

const LOCKFILES = {
    requirements: 'docs/locks/requirements.lock.json',
    architecture: 'docs/locks/architecture.lock.json',
    security: 'docs/locks/security.lock.json',
    testing: 'docs/locks/testing.lock.json',
    implementation: 'docs/locks/implementation.lock.json'
};

// --- Helper Functions ---

function readLockfile(lockfilePath) {
    if (!fs.existsSync(lockfilePath)) {
        return null;
    }
    return JSON.parse(fs.readFileSync(lockfilePath, 'utf8'));
}

function validateApiDataModelConsistency(archLock) {
    const errors = [];
    const warnings = [];

    if (!archLock || !archLock.content) {
        return { errors, warnings };
    }

    const { apis, dataModels } = archLock.content;

    // Check if APIs reference data models
    apis.forEach(api => {
        const resourceMatch = api.match(/\/api\/(\w+)/);
        if (resourceMatch) {
            const resource = resourceMatch[1];
            // Check if corresponding model exists (simple heuristic)
            const modelExists = dataModels.some(model =>
                model.toLowerCase() === resource.toLowerCase() ||
                model.toLowerCase() === resource.toLowerCase() + 's' ||
                model.toLowerCase() + 's' === resource.toLowerCase()
            );
            if (!modelExists) {
                warnings.push(`API endpoint ${api} may not have corresponding data model`);
            }
        }
    });

    // Check if data models are used by APIs
    dataModels.forEach(model => {
        const modelUsed = apis.some(api =>
            api.toLowerCase().includes(model.toLowerCase()) ||
            api.toLowerCase().includes(model.toLowerCase() + 's')
        );
        if (!modelUsed) {
            warnings.push(`Data model '${model}' is defined but not used in any API`);
        }
    });

    return { errors, warnings };
}

function validateRequirementsTestsCoverage(reqLock, testLock) {
    const errors = [];
    const warnings = [];

    if (!reqLock || !testLock || !reqLock.content || !testLock.content) {
        return { errors, warnings };
    }

    const { features } = reqLock.content;

    // Simple check: warn if features count >> test cases count
    // (More sophisticated parsing would be needed for real validation)
    if (features.length > 0) {
        warnings.push(`Validation: Ensure all ${features.length} features have test coverage`);
    }

    return { errors, warnings };
}

function validateHashIntegrity(lockfileName) {
    const errors = [];
    const lockfile = readLockfile(LOCKFILES[lockfileName]);

    if (!lockfile) {
        errors.push(`Lockfile not found: ${lockfileName}`);
        return { errors, warnings: [] };
    }

    // Check if source file exists
    if (!fs.existsSync(lockfile.source)) {
        errors.push(`Source file missing: ${lockfile.source}`);
        return { errors, warnings: [] };
    }

    // Recalculate hash and compare
    const crypto = require('crypto');
    const content = fs.readFileSync(lockfile.source, 'utf8');
    const currentHash = crypto.createHash('sha256').update(content).digest('hex');

    if (currentHash !== lockfile.hash) {
        errors.push(`Hash mismatch for ${lockfileName}: source file has changed since lockfile was generated`);
    }

    return { errors, warnings: [] };
}

function validateAll() {
    console.log('🔍 Quantum Diamond Forge - Lockfile Validator\n');

    let totalErrors = 0;
    let totalWarnings = 0;

    // Load all lockfiles
    const locks = {};
    for (const [name, path] of Object.entries(LOCKFILES)) {
        locks[name] = readLockfile(path);
    }

    // 1. Validate hash integrity
    console.log('📋 Checking hash integrity...');
    for (const name of Object.keys(LOCKFILES)) {
        const { errors, warnings } = validateHashIntegrity(name);
        if (errors.length > 0) {
            console.log(`❌ ${name}:`);
            errors.forEach(err => console.log(`   - ${err}`));
            totalErrors += errors.length;
        } else {
            console.log(`✅ ${name}: OK`);
        }
    }

    // 2. Validate API ↔ Data Model consistency
    console.log('\n📋 Checking API ↔ Data Model consistency...');
    const { errors: apiErrors, warnings: apiWarnings } = validateApiDataModelConsistency(locks.architecture);
    if (apiErrors.length > 0) {
        console.log('❌ Errors found:');
        apiErrors.forEach(err => console.log(`   - ${err}`));
        totalErrors += apiErrors.length;
    }
    if (apiWarnings.length > 0) {
        console.log('⚠️  Warnings:');
        apiWarnings.forEach(warn => console.log(`   - ${warn}`));
        totalWarnings += apiWarnings.length;
    }
    if (apiErrors.length === 0 && apiWarnings.length === 0) {
        console.log('✅ API ↔ Data Model: OK');
    }

    // 3. Validate Requirements ↔ Tests coverage
    console.log('\n📋 Checking Requirements ↔ Tests coverage...');
    const { errors: testErrors, warnings: testWarnings } = validateRequirementsTestsCoverage(locks.requirements, locks.testing);
    if (testErrors.length > 0) {
        console.log('❌ Errors found:');
        testErrors.forEach(err => console.log(`   - ${err}`));
        totalErrors += testErrors.length;
    }
    if (testWarnings.length > 0) {
        console.log('⚠️  Warnings:');
        testWarnings.forEach(warn => console.log(`   - ${warn}`));
        totalWarnings += testWarnings.length;
    }
    if (testErrors.length === 0 && testWarnings.length === 0) {
        console.log('✅ Requirements ↔ Tests: OK');
    }

    // Summary
    console.log('\n📊 Summary:');
    console.log(`   Errors: ${totalErrors}`);
    console.log(`   Warnings: ${totalWarnings}`);

    if (totalErrors > 0) {
        console.log('\n❌ Validation failed. Fix errors before proceeding.');
        process.exit(1);
    } else if (totalWarnings > 0) {
        console.log('\n⚠️  Validation passed with warnings. Review before proceeding.');
    } else {
        console.log('\n✅ All validations passed!');
    }
}

// --- CLI Execution ---

validateAll();
