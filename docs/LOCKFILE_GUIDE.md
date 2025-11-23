# Lockfile System Guide

## Overview
Lockfiles prevent spec drift by creating versioned, hashed snapshots of your artifacts. The IDE agent reads lockfiles instead of raw markdown, ensuring consistency.

## Why Lockfiles?

**Problem**: As projects evolve, artifacts diverge:
- Requirements change, but architecture doesn't update
- API spec contradicts data models
- Security model references non-existent endpoints

**Solution**: Lockfiles act as a "single source of truth" that:
- Track changes via hashing
- Enforce dependencies between artifacts
- Enable validation before building

## Lockfile Structure

```json
{
  "version": "1.0.0",
  "generated": "2025-11-22T19:00:00Z",
  "source": "docs/01_REQUIREMENTS.md",
  "hash": "sha256:abc123...",
  "dependencies": [],
  "content": {
    "features": ["Feature 1", "Feature 2"],
    "userStories": ["US-001: ...", "US-002: ..."],
    "nfrs": {}
  }
}
```

## Usage

### Generate Lockfiles

```bash
# Generate all lockfiles
node scripts/generate_lockfile.js all

# Generate single lockfile
node scripts/generate_lockfile.js requirements
node scripts/generate_lockfile.js architecture
```

### Validate Lockfiles

```bash
# Validate all lockfiles
node scripts/validate_lockfiles.js
```

**Checks performed**:
- ✅ Hash integrity (detect if source changed)
- ✅ API ↔ Data Model consistency
- ✅ Requirements ↔ Tests coverage
- ✅ Security ↔ Endpoints mapping (future)

### Workflow Integration

**After generating specs**:
1. Generate lockfiles: `node scripts/generate_lockfile.js all`
2. Validate: `node scripts/validate_lockfiles.js`
3. If validation passes, proceed to IDE agent
4. IDE agent reads lockfiles from `docs/locks/`

**When specs change**:
1. Update markdown artifact
2. Regenerate lockfile: `node scripts/generate_lockfile.js <artifact>`
3. Validate again
4. Commit both markdown and lockfile

## Lockfile Locations

```
docs/locks/
├── requirements.lock.json
├── architecture.lock.json
├── security.lock.json
├── testing.lock.json
└── implementation.lock.json
```

## Dependencies

Lockfiles track dependencies:
- `requirements` → no dependencies
- `architecture` → depends on `requirements`
- `security` → depends on `requirements`, `architecture`
- `testing` → depends on `requirements`, `architecture`
- `implementation` → depends on all above

## Example Validation Output

```
🔍 Quantum Diamond Forge - Lockfile Validator

📋 Checking hash integrity...
✅ requirements: OK
✅ architecture: OK
❌ security: Hash mismatch - source file changed

📋 Checking API ↔ Data Model consistency...
⚠️  Warnings:
   - API endpoint POST /api/users may not have corresponding data model
   - Data model 'Task' is defined but not used in any API

📋 Checking Requirements ↔ Tests coverage...
✅ Requirements ↔ Tests: OK

📊 Summary:
   Errors: 1
   Warnings: 2

❌ Validation failed. Fix errors before proceeding.
```

## Best Practices

1. **Generate lockfiles after every spec change**
2. **Commit lockfiles with markdown** (both should be in sync)
3. **Run validation before starting implementation**
4. **Fix errors immediately** (don't ignore validation failures)
5. **Review warnings** (they may indicate real issues)

## Future Enhancements

- Auto-generate lockfiles on save (watch mode)
- Git pre-commit hook integration
- Diff tool to compare lockfile versions
- Auto-fix capabilities for common issues
