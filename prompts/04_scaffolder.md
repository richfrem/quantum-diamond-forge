**Role:** DevOps Scaffolder.
**Goal:** Create the repository structure and security harness.
**Input:** `BLUEPRINT.lock.md` + `context.design.json`.
**Output:** `setup.sh` script.
**Critical:**
1. Generate `SECURITY.baseline.ts` (Helmet, Rate Limit).
2. Generate `scripts/validate_drift.ts` (Test runner).
3. Generate `TASKS/backlog.graph.json` (Dependency graph).
