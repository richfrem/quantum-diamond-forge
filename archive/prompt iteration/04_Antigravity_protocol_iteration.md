# File: 04_Antigravity_protocol_iteration.md

**Status:** Iteration 04
**Focus:** Integrating "Defense in Depth," CI/CD, and Audit Findings into the First Prompt.

---

### Phase 1: The Solution Architect (Chat Interface)
**Goal:** Define the Product *and* the Security/Operational posture.
**Where:** ChatGPT (o1/4o) or Claude 3.5 Sonnet.

**Prompt (Copy/Paste):**
```markdown
Act as a Principal Product Manager and Systems Architect. I have an idea for an application called "WorkSpot."

I need to generate two foundational documents to initialize an "Antigravity" Agentic Repo.

**My Rough Idea:**
[INSERT YOUR IDEA/SCREENSHOT DETAILS HERE]

**Task:**
Process this idea and output TWO distinct Markdown sections.

### PART 1: PRODUCT_SPEC.md
1.  **Narrative**: Problem vs. Solution.
2.  **Audience**: Detailed personas.
3.  **Differentiation**: The "X-Factors."
4.  **Core Feature Scope**: MVP features.
5.  **Design Vibe**: Visual language.

### PART 2: TECHNICAL_BLUEPRINT.md
1.  **Domain Architecture**: Entities and relationships.
2.  **Tech Stack**: Next.js, Tailwind, Supabase, Zod.
3.  **Security & Compliance (Shift Left)**:
    *   **Auth**: RLS policies and Middleware strategy.
    *   **Validation**: Strict Zod schemas for ALL inputs.
    *   **Rate Limiting**: Strategy for public APIs.
    *   **Headers**: Helmet/CSP configuration.
4.  **Operational Maturity**:
    *   **Observability**: Structured logging with Correlation IDs.
    *   **Health Checks**: Deep DB connectivity checks.
5.  **CI/CD Pipeline**:
    *   **Pre-commit**: Linting, Secret Scanning, Type Checking.
    *   **CI**: Vitest (Unit), Playwright (E2E), Audit (Dependencies).

Output this as a single cohesive response.
```

---

### Phase 2: The "Antigravity" Scaffolder (Google AI Studio)
**Goal:** Generate a **Production-Ready Skeleton** (not just a blank repo).
**Where:** Google AI Studio (Gemini 1.5 Pro).

**Prompt (Copy/Paste):**
```markdown
Role: You are a Principal DevOps Engineer and Expert Systems Architect.

Context:
We are initializing a high-quality, enterprise-grade software project based on the attached "PRODUCT_SPEC" and "TECHNICAL_BLUEPRINT."
Your goal is to scaffold a **Self-Documenting, Secure-by-Default Ecosystem**.

**Critical Instruction:** Apply the "Antigravity Audit" learnings immediately. Do not generate a fragile POC. Generate a hardened system.

Inputs:
[PASTE PRODUCT_SPEC]
[PASTE TECHNICAL_BLUEPRINT]

Task:
Generate the file contents for the following **Critical Foundation Artifacts**.

### 1. The Directory Structure (`setup.sh`)
Output a BASH script that creates:
- `src/{components,features,lib,hooks,types,middleware,utils}`
- `tests/{e2e,integration,unit}`
- `TASKS/{backlog,in-progress,done}`
- `ADRS/` (Architecture Decision Records)
- `REQUIREMENTS/` (Product Requirements)
- `PROMPTS/` (System Prompts)
- `.github/workflows/` (CI/CD)
- `.githooks/` (Pre-commit)

### 2. The "Defense in Depth" Harness (Code Generation)
Generate the actual code for these core security files:
- **`src/middleware/security.ts`**: Configure `helmet` and `express-rate-limit`.
- **`src/middleware/validation.ts`**: A generic Zod validation middleware.
- **`src/utils/logger.ts`**: A Winston/Pino logger configured to use **Correlation IDs**.
- **`src/api/health.ts`**: A health check endpoint that performs a **Real DB Query** (SELECT 1).

### 3. CI/CD & Quality Configuration
Generate:
- **`.github/workflows/ci.yml`**: A workflow that runs:
    1.  `npm ci`
    2.  `npm run lint`
    3.  `npm run typecheck`
    4.  `npm audit --audit-level=high` (Security Scan)
    5.  `npm run test:unit`
    6.  `npm run test:e2e`
- **`.githooks/pre-commit`**: A script to run `lint-staged` and check for secrets.
- **`package.json`**: Include `zod`, `helmet`, `winston`, `express-rate-limit`, `express-request-id`, `vitest`, `playwright`, `husky`.

### 4. Institutional Memory
Generate:
- **`ADRS/001_architecture_stack.md`**: Documenting the stack choices.
- **`ADRS/002_security_baseline.md`**: Documenting the decision to use Helmet, Rate Limiting, and Zod.
- **`TASKS/task_schema.md`** and **`ADRS/adr_schema.md`**.

### 5. The Initial Backlog (The Roadmap)
Generate the first 5 task files in `TASKS/backlog/`:
- `001_project_init.md` (Run setup.sh, install dependencies, verify CI).
- `002_security_verification.md` (Verify Rate Limiting and Headers are active).
- `003_database_schema.md` (Implement entities).
- `004_auth_scaffold.md` (Implement Auth with Zod Middleware).
- `005_core_feature_mvp.md` (Build the first UI feature).

Output the files clearly using markdown code blocks.
```

---

### Phase 3: The Execution (IDE / Antigravity)
**Goal:** The Agent enters a "Clean Room" environment where security is already active.

**The Workflow:**

1.  **Initialize:**
    *   Run `sh setup.sh`.
    *   The repo now has **CI/CD**, **Pre-commit hooks**, and **Security Middleware** pre-written.

2.  **The "Antigravity" Loop:**
    *   **User Prompt:** "Agent, execute Task 004 (Auth). Note that `src/middleware/validation.ts` already exists. Use it."
    *   **Agent Action:** The Agent doesn't need to "remember" to add validation. The scaffold forces it. It simply defines the Zod schema and plugs it into the existing middleware.

### Key Improvements from Audit:
1.  **Rate Limiting & Helmet**: Scaffolding these in `src/middleware/security.ts` ensures they are never forgotten.
2.  **Correlation IDs**: The `logger.ts` is pre-configured to use them, solving the observability issue from the start.
3.  **Health Check**: The scaffolded health check is "Deep" (DB connected) by default, not just a static 200 OK.
4.  **Shift Left**: The `.github/workflows/ci.yml` and `.githooks` ensure that bad code (secrets, vulnerabilities, type errors) is caught before it even enters the repo.
