# Phase 2: The "Antigravity Repo Initializer" (Iterated Prompt)

**Role:** You are a Principal DevOps Engineer and Expert Systems Architect.

**Context:**
We are initializing a high-quality, enterprise-grade software project based on the attached "Product Spec" and "Technical Blueprint."
Your goal is NOT to write feature code yet. Your goal is to scaffold a **Self-Documenting, Agent-Friendly Ecosystem** that an advanced AI Agent (using the Antigravity protocol) can inhabit and build upon.

**Inputs:**
[PASTE PRODUCT SPEC]
[PASTE TECHNICAL BLUEPRINT]

**Task:**
Generate the file contents and directory creation scripts for the following **Critical Foundation Artifacts**.

### 1. The "Antigravity" Directory Structure (`setup.sh`)
Create a shell script that initializes the following structure:
- `src/` (Features, Components, Lib, etc. as per Blueprint)
- `tests/e2e/` (Playwright)
- `tests/integration/`
- `tests/unit/`
- `TASKS/` (backlog, in-progress, done)
- `ADRS/` (Architecture Decision Records)
- `REQUIREMENTS/` (Product Requirements)
- `PROMPTS/` (System Prompts for the Agent)
- `tools/scaffolds/` (Automation scripts)

### 2. Institutional Memory & Standards
- **`ADRS/adr_schema.md`**: A template for documenting architectural decisions.
- **`REQUIREMENTS/requirement_schema.md`**: A template for product requirements.
- **`TASKS/task_schema.md`**: A template for engineering tasks.
- **`PROMPTS/PROJECT_PROMPT_TEMPLATE.md`**: A template for defining macro project goals.
- **`PROMPTS/ISSUE_PROMPT_TEMPLATE.md`**: A template for defining micro issues.
- **`PROMPTS/BUSINESS_ANALYST_PROMPT.md`**: A system prompt that teaches the Agent how to act as a PM/BA.

### 3. The "Brain" & Context
- **`ARCHITECTURE.md`**: Paste the Technical Blueprint here.
- **`.cursorrules` or `prompts/context.md`**: A system instruction file summarizing the Design System, Coding Standards, and "Defense in Depth" security rules (e.g., "All inputs must use Zod," "Auth middleware required on API routes").

### 4. Security & Quality Harness
- **`package.json`**: Include ALL dependencies defined in the Tech Stack, PLUS:
    - `zod` (Validation)
    - `helmet` (Security Headers)
    - `express-rate-limit` (DoS Protection)
    - `vitest` (Unit Testing)
    - `playwright` (E2E Testing)
- **`tsconfig.json`**: Strict mode enabled.

### 5. Automation Tooling
Generate simple Python scripts to manage the workflow:
- **`tools/scaffolds/get_next_task_number.py`**: Scans `TASKS/` and returns the next ID.
- **`tools/scaffolds/get_next_adr_number.py`**: Scans `ADRS/` and returns the next ID.

### 6. The Initial Backlog
Instead of a single `TASKS.md`, generate the first set of **Task Files** in `TASKS/backlog/`:
- `TASKS/backlog/001_initialize_repo.md` (Setup CI/CD, Linting)
- `TASKS/backlog/002_setup_database.md` (Schema migration)
- `TASKS/backlog/003_implement_auth_scaffold.md` (Auth middleware & Zod schemas)
- `TASKS/backlog/004_build_app_shell.md` (Navigation & Layout)

**Output Format:**
Provide the content for each file clearly, starting with the filename (e.g., `**File: setup.sh**`).
