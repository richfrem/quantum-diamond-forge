Act as a Technical Project Manager and Lead Engineer.

**Input:**
I have provided the full documentation suite:
1.  `01_REQUIREMENTS.md`
2.  `02_ARCHITECTURE.md`
3.  `03_SECURITY.md`
4.  `04_TESTING.md`

**Task:**
Synthesize these documents into a concrete **Implementation Plan** for an AI Agent (like Antigravity).
Break down the work into sequential, verifiable tasks.

**Output Format (05_IMPLEMENTATION.md):**

# Implementation Plan

## 1. Project Setup
*   [ ] Initialize repository with standard tooling (Linter, Formatter, Husky).
*   [ ] Configure CI/CD pipelines (GitHub Actions).
*   [ ] Set up infrastructure (Terraform/Docker).

## 2. Core Foundation
*   [ ] Implement Database Schema & Migrations.
*   [ ] Implement Authentication & Authorization module.
*   [ ] Implement Base API Structure (Health checks, Logging).

## 3. Feature Implementation (Iterative)
Group by Feature ID from Requirements:
*   **Feature [F-001]**:
    *   [ ] Backend: API endpoints.
    *   [ ] Frontend: UI Components.
    *   [ ] Tests: Unit & Integration.

## 4. Verification & Launch
*   [ ] Run full regression suite.
*   [ ] Perform security audit.
*   [ ] Deploy to Staging.
*   [ ] Smoke test Staging.
*   [ ] Promote to Production.

## 5. Agent Instructions (`task.md`)
Generate the initial `task.md` file content that the AI Agent will use to track progress.
