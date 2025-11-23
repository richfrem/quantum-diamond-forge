# Task: Implement generate_lockfile.js script

**Status:** Done
**Assignee:** Agent
**Created:** 2025-11-23

## Objective
Implement a script (`scripts/generate_lockfile.js`) to generate versioned, hashed lockfiles from markdown artifacts to prevent specification drift.

## Context
*   **Related ADRs:** N/A
*   **Dependencies:** None
*   **Goal:** Create a "source of truth" for requirements, architecture, security, testing, and implementation plans.

## Implementation Steps
1.  [x] Create `scripts/generate_lockfile.js`
2.  [x] Define artifact mappings (Source -> Lockfile)
3.  [x] Implement hash calculation (SHA-256)
4.  [x] Implement content parsing (Requirements, Architecture)
5.  [x] Implement CLI interface (`all` or specific artifact)

## Acceptance Criteria
*   [x] Script runs via `node scripts/generate_lockfile.js`
*   [x] Generates JSON lockfiles in `docs/locks/`
*   [x] Calculates correct hashes for source files
*   [x] Handles missing source files gracefully (skips with warning)

## Validation
*   [x] Run `node scripts/generate_lockfile.js all` and verify output
