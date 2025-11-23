# Task: Design and Implement Lockfile System for Spec Synchronization

**Status**: Done  
**Created**: 2025-11-22  
**Owner**: Antigravity  
**Priority**: Critical (Highest)  
**Source**: Red Team v2.1 Feedback (GPT-5, Grok 4)

## Objective
Implement a lockfile system to prevent spec drift between artifacts (requirements, architecture, API, data models, security, testing).

## Context
**Problem**: Currently, artifacts can diverge as projects evolve. Requirements change, but architecture/API/data models don't update accordingly. This creates inconsistencies that break builds.

**Red Team Feedback**:
- GPT-5 v2.1: "No automated sync between artifacts... drift problem persists."
- Grok 4 v2.1: "Even reduced, artifacts like separate MD/JSON files invite staleness without auto-sync."

**Both reviewers** called this the #1 critical gap in v2.1.

## Scope

### Lockfile Format
Create JSON lockfiles for each phase:
```
docs/locks/requirements.lock.json
docs/locks/architecture.lock.json
docs/locks/api.lock.json
docs/locks/data.lock.json
docs/locks/security.lock.json
docs/locks/testing.lock.json
```

### Lockfile Structure
```json
{
  "version": "1.0.0",
  "generated": "2025-11-22T19:00:00Z",
  "source": "docs/01_REQUIREMENTS.md",
  "hash": "sha256:abc123...",
  "dependencies": [],
  "content": {
    "features": [...],
    "user_stories": [...],
    "nfrs": {...}
  }
}
```

### Key Features
1. **Versioning** - Semantic versioning for lockfiles
2. **Hashing** - Detect changes in source artifacts
3. **Dependencies** - Track which lockfiles depend on others
4. **Validation** - Cross-check consistency between lockfiles

## Implementation Steps

### Phase 1: Lockfile Generator
- [ ] Create `scripts/generate_lockfile.js`
- [ ] Parse MD artifacts → extract structured data
- [ ] Generate JSON lockfiles with version/hash
- [ ] Add CLI command: `./forge.sh lock <phase>`

### Phase 2: Lockfile Validator
- [ ] Create `scripts/validate_lockfiles.js`
- [ ] Check cross-references (e.g., API endpoints match architecture)
- [ ] Detect drift (hash mismatches)
- [ ] Add CLI command: `./forge.sh validate`

### Phase 3: IDE Agent Integration
- [ ] Update prompts to reference lockfiles
- [ ] IDE agent reads lockfiles instead of raw MD
- [ ] Add lockfile update step to workflow

### Phase 4: Diff & Sync Tools
- [ ] Create `./forge.sh diff <lockfile1> <lockfile2>`
- [ ] Create `./forge.sh sync` to update dependent lockfiles
- [ ] Generate "breaking changes" reports

## Success Criteria
- [ ] Lockfiles generated for all 5 phases
- [ ] Validator catches common inconsistencies (API ≠ data model)
- [ ] IDE agent can consume lockfiles
- [ ] Drift detection works (hash comparison)
- [ ] Documentation updated with lockfile workflow

## Out of Scope (Future)
- Automatic lockfile updates (manual for now)
- Git hooks for lockfile validation
- Lockfile merge conflict resolution

## Dependencies
- None (can start immediately)

## Risks
- Lockfile format may need iteration
- Parsing MD → JSON may be fragile
- Adoption barrier if workflow changes significantly

## Notes
- This solves the #1 gap from red team feedback
- Inspired by package-lock.json, Cargo.lock, etc.
- Should work with both Lean and Enterprise modes
