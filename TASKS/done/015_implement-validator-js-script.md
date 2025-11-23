# Task: Implement validator.js script

**Status:** Done
**Assignee:** Agent
**Created:** 2025-11-23

## Objective
Implement a validation script (`scripts/validator.js`) to ensure cross-artifact consistency and integrity within the Quantum Diamond Forge protocol.

## Context
*   **Related ADRs:** N/A
*   **Dependencies:** `scripts/generate_lockfile.js`
*   **Goal:** Automate checks for hash integrity, API/Data Model consistency, and test coverage.

## Implementation Steps
1.  [x] Create `scripts/validator.js`
2.  [x] Implement `validateHashIntegrity` function
3.  [x] Implement `validateApiDataModels` function
4.  [x] Implement `validateRequirementsTests` function
5.  [x] Implement reporting and auto-fix logic

## Acceptance Criteria
*   [x] Script runs via `node scripts/validator.js`
*   [x] Detects missing lockfiles
*   [x] Detects hash mismatches
*   [x] Detects unused data models or missing API models
*   [x] Provides clear summary report

## Validation
*   [x] Run `node scripts/validator.js` and verify output
