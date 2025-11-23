# Spec Validator CLI Guide

## Overview
The **Spec Validator** (`./forge.sh validate`) is your automated quality assurance tool for the specification phase. It ensures that your artifacts (Requirements, Architecture, API, etc.) remain consistent, complete, and drift-free.

## Why Use It?
As your project grows, keeping 5+ markdown files in sync is hard. The validator automates this by checking:
- **Consistency**: Does the API match the Data Model?
- **Completeness**: Do all Requirements have Tests?
- **Integrity**: Have the source files changed without updating the lockfiles?

## Usage

### Basic Validation
Run this command to check all artifacts:
```bash
./forge.sh validate
```

**Example Output:**
```
🔍 Quantum Diamond Forge - Spec Validation Report

✅ Hash Integrity Check
⚠️  API ↔ Data Model Consistency
   🔸 Endpoint POST /api/users references undefined model 'UserProfile'
✅ Requirements ↔ Tests Coverage

📊 Summary:
   Errors: 0
   Warnings: 1
```

### Auto-Fixing Issues
The validator can automatically fix common issues, such as missing lockfiles.
```bash
./forge.sh validate --fix
```

### JSON Output (CI/CD)
Generate a machine-readable report for CI pipelines.
```bash
./forge.sh validate --report json
```

## Validation Rules

### 1. Hash Integrity Check
**What it checks**: Ensures that the markdown source files (`docs/*.md`) haven't changed since the last lockfile generation.
**Why**: Prevents "Spec Drift" where the IDE agent works off outdated specs.
**Fix**: Run `./forge.sh lock all` or use `./forge.sh validate --fix`.

### 2. API ↔ Data Model Consistency
**What it checks**:
- **Missing Models**: API endpoints referencing data models that don't exist.
- **Unused Models**: Data models defined but never used in any API.
**Why**: Ensures your architecture is coherent.

### 3. Requirements ↔ Tests Coverage
**What it checks**: Ensures that if you have defined features in `01_REQUIREMENTS.md`, you also have a testing strategy in `04_TESTING.md`.
**Why**: Prevents "Untested Features".

## Integration with Workflow

1. **Edit Specs**: You update `docs/01_REQUIREMENTS.md`.
2. **Validate**: Run `./forge.sh validate`.
   - It will fail the **Hash Integrity Check**.
3. **Fix**: Run `./forge.sh validate --fix` (or `./forge.sh lock requirements`).
   - This updates the lockfile.
4. **Re-Validate**: Run `./forge.sh validate`.
   - Now it checks for logical inconsistencies.
5. **Commit**: `git commit -am "Update specs"`

## Troubleshooting

**"Hash mismatch for..."**
- You edited a markdown file but didn't update the lockfile.
- **Fix**: Run `./forge.sh lock <artifact>` or `./forge.sh validate --fix`.

**"Endpoint ... references undefined model..."**
- Your API definition uses a model name that isn't in your Data Models section.
- **Fix**: Add the model to `docs/02_ARCHITECTURE.md` or correct the API definition.

**"Found X features but no testing lockfile..."**
- You defined requirements but haven't created `docs/04_TESTING.md` yet.
- **Fix**: Create the testing doc or run the Testing Strategy prompt.
