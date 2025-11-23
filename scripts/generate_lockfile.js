/**
 * Quantum Diamond Forge - Lockfile Generator
 * Version: 1.0
 * 
 * Purpose: Generate lockfiles from markdown artifacts to prevent spec drift.
 * Lockfiles are versioned, hashed, and track dependencies between artifacts.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// --- Configuration ---

const LOCKFILE_VERSION = '1.0.0';
const DOCS_DIR = path.join(process.cwd(), 'docs');
const LOCKS_DIR = path.join(process.cwd(), 'docs/locks');

// Artifact mappings
const ARTIFACTS = {
    requirements: {
        source: 'docs/01_requirements_analysis.md',
        lock: 'docs/locks/requirements.lock.json',
        dependencies: []
    },
    architecture: {
        source: 'docs/02_architecture_design.md',
        lock: 'docs/locks/architecture.lock.json',
        dependencies: ['requirements']
    },
    security: {
        source: 'docs/03_security_compliance.md',
        lock: 'docs/locks/security.lock.json',
        dependencies: ['requirements', 'architecture']
    },
    testing: {
        source: 'docs/04_testing_strategy.md',
        lock: 'docs/locks/testing.lock.json',
        dependencies: ['requirements', 'architecture']
    },
    implementation: {
        source: 'docs/05_implementation_plan.md',
        lock: 'docs/locks/implementation.lock.json',
        dependencies: ['requirements', 'architecture', 'security', 'testing']
    }
};

// --- Helper Functions ---

function ensureLocksDir() {
    if (!fs.existsSync(LOCKS_DIR)) {
        fs.mkdirSync(LOCKS_DIR, { recursive: true });
    }
}

function calculateHash(content) {
    return crypto.createHash('sha256').update(content).digest('hex');
}

function readArtifact(artifactPath) {
    if (!fs.existsSync(artifactPath)) {
        throw new Error(`Artifact not found: ${artifactPath}`);
    }
    return fs.readFileSync(artifactPath, 'utf8');
}

function parseRequirements(content) {
    // Extract structured data from requirements markdown
    const features = [];
    const userStories = [];
    const nfrs = {};

    // Simple regex-based parsing (can be improved)
    const featureMatches = content.match(/\*\*\[F-\d+\]\s+(.+?)\*\*:/g) || [];
    featureMatches.forEach(match => {
        const name = match.replace(/\*\*\[F-\d+\]\s+/, '').replace(/\*\*:/, '').trim();
        features.push(name);
    });

    const storyMatches = content.match(/\*\*US-\d+\*\*:\s+(.+)/g) || [];
    storyMatches.forEach(match => {
        const story = match.replace(/\*\*US-\d+\*\*:\s+/, '').trim();
        userStories.push(story);
    });

    return { features, userStories, nfrs };
}

function parseArchitecture(content) {
    // Extract API endpoints and data models
    const apis = [];
    const dataModels = [];

    // Extract API endpoints (simple pattern matching)
    const apiMatches = content.match(/`(GET|POST|PUT|PATCH|DELETE)\s+\/api\/[^`]+`/g) || [];
    apiMatches.forEach(match => {
        apis.push(match.replace(/`/g, ''));
    });

    // Extract table names from data models section
    const tableMatches = content.match(/###\s+Table:\s+(\w+)/g) || [];
    tableMatches.forEach(match => {
        const tableName = match.replace(/###\s+Table:\s+/, '').trim();
        dataModels.push(tableName);
    });

    return { apis, dataModels };
}

function generateLockfile(artifactName) {
    const artifact = ARTIFACTS[artifactName];
    if (!artifact) {
        throw new Error(`Unknown artifact: ${artifactName}`);
    }

    console.log(`📦 Generating lockfile for ${artifactName}...`);

    // Read source artifact
    const content = readArtifact(artifact.source);
    const hash = calculateHash(content);

    // Parse content based on artifact type
    let parsedContent = {};
    if (artifactName === 'requirements') {
        parsedContent = parseRequirements(content);
    } else if (artifactName === 'architecture') {
        parsedContent = parseArchitecture(content);
    }
    // Add more parsers for other artifact types

    // Generate lockfile
    const lockfile = {
        version: LOCKFILE_VERSION,
        generated: new Date().toISOString(),
        source: artifact.source,
        hash: hash,
        dependencies: artifact.dependencies,
        content: parsedContent
    };

    // Write lockfile
    ensureLocksDir();
    fs.writeFileSync(artifact.lock, JSON.stringify(lockfile, null, 2));

    console.log(`✅ Lockfile created: ${artifact.lock}`);
    console.log(`   Hash: ${hash.substring(0, 12)}...`);
    console.log(`   Dependencies: ${artifact.dependencies.join(', ') || 'none'}`);

    return lockfile;
}

function generateAllLockfiles() {
    console.log('🔒 Quantum Diamond Forge - Lockfile Generator\n');

    const results = [];
    for (const artifactName of Object.keys(ARTIFACTS)) {
        try {
            const lockfile = generateLockfile(artifactName);
            results.push({ artifact: artifactName, status: 'success', lockfile });
        } catch (error) {
            console.log(`⚠️  Skipping ${artifactName}: ${error.message}`);
            results.push({ artifact: artifactName, status: 'skipped', error: error.message });
        }
    }

    console.log('\n📊 Summary:');
    const successful = results.filter(r => r.status === 'success').length;
    const skipped = results.filter(r => r.status === 'skipped').length;
    console.log(`   ✅ Generated: ${successful}`);
    console.log(`   ⚠️  Skipped: ${skipped}`);

    return results;
}

// --- CLI Execution ---

const args = process.argv.slice(2);
const command = args[0];

if (command === 'all') {
    generateAllLockfiles();
} else if (command && ARTIFACTS[command]) {
    generateLockfile(command);
} else {
    console.log('Usage:');
    console.log('  node scripts/generate_lockfile.js all');
    console.log('  node scripts/generate_lockfile.js <artifact>');
    console.log('');
    console.log('Available artifacts:');
    Object.keys(ARTIFACTS).forEach(name => {
        console.log(`  - ${name}`);
    });
}
