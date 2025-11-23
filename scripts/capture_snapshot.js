/**
 * Quantum Diamond Forge - Code Snapshot Tool
 * Version: 2.0 (Antigravity Edition)
 * 
 * Purpose: Captures a context-aware snapshot of the codebase for AI ingestion.
 * Features:
 * - Smart filtering (ignores node_modules, .git, lockfiles)
 * - Mode selection (code, docs, all)
 * - Folder targeting (e.g., only src/components)
 * - Markdown formatting for optimal LLM readability
 */

const fs = require('fs');
const path = require('path');

// --- Configuration ---

const VERSION = "2.0";
const HEADER = `
================================================================================
QUANTUM DIAMOND FORGE SNAPSHOT (v${VERSION})
Timestamp: ${new Date().toISOString()}
================================================================================
`;

const IGNORE_PATTERNS = [
    'node_modules', 'prompts/BLITZY', '.git', '.next', 'dist', 'build', 'coverage',
    'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', '.DS_Store', '.env',
    '*.png', '*.jpg', '*.jpeg', '*.gif', '*.ico', '*.svg', '*.woff', '*.woff2', '*.ttf', '*.eot', '*.mp4', '*.webm', '*.mp3', '*.wav',
    'snapshot.txt', 'output.txt', // Ignore self-generated outputs
    'archive/prompt iteration'
];

// Default extensions for "code" mode
const CODE_EXTENSIONS = [
    '.ts', '.tsx', '.js', '.jsx', '.py', '.go', '.rs', '.java', '.c', '.cpp', '.h', '.hpp',
    '.css', '.scss', '.html', '.sql', '.sh', '.prisma', '.graphql'
];

// Default extensions for "docs" mode
const DOC_EXTENSIONS = ['.md', '.txt', '.json', '.yaml', '.yml', '.toml'];

// --- Logic ---

function shouldIgnore(filePath) {
    return IGNORE_PATTERNS.some(pattern => {
        if (pattern.startsWith('*')) {
            return filePath.endsWith(pattern.slice(1));
        }
        return filePath.includes(pattern);
    });
}

function getAllFiles(dirPath, arrayOfFiles, mode, specificFolders) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        const relativePath = path.relative(process.cwd(), fullPath);

        if (fs.statSync(fullPath).isDirectory()) {
            if (!shouldIgnore(fullPath)) {
                // If specific folders are requested, only traverse if we are inside one or it's a parent of one
                if (specificFolders.length > 0) {
                    const isRelevant = specificFolders.some(folder =>
                        relativePath.startsWith(folder) || folder.startsWith(relativePath)
                    );
                    if (isRelevant) {
                        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles, mode, specificFolders);
                    }
                } else {
                    arrayOfFiles = getAllFiles(fullPath, arrayOfFiles, mode, specificFolders);
                }
            }
        } else {
            if (!shouldIgnore(fullPath)) {
                // Filter by mode
                const ext = path.extname(file);
                let include = true;

                if (mode === 'code' && !CODE_EXTENSIONS.includes(ext)) include = false;
                if (mode === 'docs' && !DOC_EXTENSIONS.includes(ext)) include = false;

                // Filter by specific folders
                if (specificFolders.length > 0) {
                    const isInFolder = specificFolders.some(folder => relativePath.startsWith(folder));
                    if (!isInFolder) include = false;
                }

                if (include) {
                    arrayOfFiles.push(fullPath);
                }
            }
        }
    });

    return arrayOfFiles;
}

function generateSnapshot(outputFile, mode = 'all', folders = []) {
    const files = getAllFiles(process.cwd(), [], mode, folders);

    let output = HEADER;
    output += `Mode: ${mode}\n`;
    output += `Scope: ${folders.length > 0 ? folders.join(', ') : 'Full Project'}\n`;
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
    console.log(`✅ Snapshot created: ${outputFile}`);
    console.log(`   - Files included: ${files.length}`);
    console.log(`   - Mode: ${mode}`);
}

// --- CLI Execution ---

const args = process.argv.slice(2);
const outputFile = args[0] || 'snapshot.txt';
const modeIndex = args.indexOf('--mode');
const folderIndex = args.indexOf('--folders');

let mode = 'all';
if (modeIndex !== -1 && args[modeIndex + 1]) {
    mode = args[modeIndex + 1]; // 'code', 'docs', 'all'
}

let folders = [];
if (folderIndex !== -1 && args[folderIndex + 1]) {
    folders = args[folderIndex + 1].split(',');
}

console.log(`📸 Quantum Diamond Forge Snapshot Tool v${VERSION}`);
generateSnapshot(outputFile, mode, folders);
