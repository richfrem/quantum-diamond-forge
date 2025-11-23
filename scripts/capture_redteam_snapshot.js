/**
 * Quantum Diamond Forge - Red Team Snapshot Tool
 * Version: 1.0
 * 
 * Purpose: Captures Protocol v2.0 artifacts for external LLM red team analysis.
 * Focus: Documentation, prompts, and protocol design (not code implementation).
 */

const fs = require('fs');
const path = require('path');

// --- Configuration ---

const VERSION = "1.0";
const HEADER = `
================================================================================
QUANTUM DIAMOND FORGE - PROTOCOL v2.0 RED TEAM SNAPSHOT
Timestamp: ${new Date().toISOString()}
Purpose: Independent analysis and review by external LLMs
================================================================================
`;

// Files and folders to INCLUDE
const INCLUDE_PATTERNS = [
    'README.md',
    'GUIDE.md',
    'prompts/*.md',
    'diagrams/*.mermaid',
    'TASKS/done/001_harden-protocol-with-industry-benchmarks.md',
    'guides/cicd/*.md'
];

// Files and folders to EXCLUDE
const EXCLUDE_PATTERNS = [
    'prompts/BLITZY',
    'prompts/roles',
    '.git',
    'node_modules',
    'scripts',
    '.github'
];

// --- Logic ---

function shouldExclude(filePath) {
    return EXCLUDE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function matchesPattern(filePath, pattern) {
    const regex = new RegExp(pattern.replace(/\*/g, '.*').replace(/\//g, '\\/'));
    return regex.test(filePath);
}

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        const relativePath = path.relative(process.cwd(), fullPath);

        if (shouldExclude(fullPath)) {
            return;
        }

        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            // Check if file matches any include pattern
            const shouldInclude = INCLUDE_PATTERNS.some(pattern =>
                matchesPattern(relativePath, pattern)
            );

            if (shouldInclude) {
                arrayOfFiles.push(fullPath);
            }
        }
    });

    return arrayOfFiles;
}

function generateSnapshot(outputFile) {
    const files = getAllFiles(process.cwd(), []);

    let output = HEADER;
    output += `Total Files: ${files.length}\n`;
    output += `--------------------------------------------------------------------------------\n\n`;

    // Generate File Tree
    output += `## Project Structure\n\`\`\`\n`;
    files.forEach(file => {
        output += `${path.relative(process.cwd(), file)}\n`;
    });
    output += `\`\`\`\n\n`;

    // Generate File Contents
    files.forEach(file => {
        const relativePath = path.relative(process.cwd(), file);
        const content = fs.readFileSync(file, 'utf8');
        const ext = path.extname(file).slice(1); // Remove dot for markdown language

        output += `## File: ${relativePath}\n`;
        output += `\`\`\`${ext}\n`;
        output += content + '\n';
        output += `\`\`\`\n\n`;
    });

    fs.writeFileSync(outputFile, output);
    console.log(`✅ Red Team Snapshot created: ${outputFile}`);
    console.log(`   - Files included: ${files.length}`);
    console.log(`   - Focus: Protocol v2.0 design and documentation`);
}

// --- CLI Execution ---

const args = process.argv.slice(2);
const outputFile = args[0] || 'prompts/REDTEAM/redteam_snapshot_v2.txt';

console.log(`📸 Quantum Diamond Forge Red Team Snapshot Tool v${VERSION}`);
generateSnapshot(outputFile);
