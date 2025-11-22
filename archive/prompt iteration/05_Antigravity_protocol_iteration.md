# File: 05_Antigravity_protocol_iteration.md

**Status:** Iteration 05
**Focus:** Integrating the "Quantum Diamond Framework" (Genesis & Engineering Cycles) into the Antigravity Protocol.

---

### Phase 1: The "Genesis Cycle" (Chat Interface)
**Goal:** To explore the "Quantum Realm" of possibilities and collapse them into a **Validated Vision Prototype** and **Initial Contract**.
**Where:** ChatGPT (o1/4o) or Claude 3.5 Sonnet.
**Reference:** `PROMPTS/01_playbook-genesis-cycle.md`

**Prompt (Copy/Paste):**
```markdown
Act as a Principal Product Manager and Service Designer. I am initiating the "Genesis Cycle" for a new application called "WorkSpot."

**My Rough Idea:**
[INSERT YOUR IDEA/SCREENSHOT DETAILS HERE]

**Task:**
Execute the "Genesis Cycle" discovery process and output the **Validated Vision Artifacts**.

### PART 1: PROBLEM FRAMING (The "Why")
1.  **User Personas**: Generate 3 distinct personas with "How Might We" statements.
2.  **Pain Points**: Extract the core friction points from the user's perspective.
3.  **The "Vibe"**: Define the emotional resonance (e.g., "Calm," "Urgent," "Playful").

### PART 2: SOLUTION PROTOTYPING (The "What")
1.  **Core User Journey**: The "Happy Path" flow.
2.  **Key Features**: The MVP scope that addresses the Pain Points.
3.  **Differentiation**: Why this is better than the status quo.

### PART 3: THE INITIAL CONTRACT (The "How")
*This is the input for the Engineering Cycle.*
1.  **Domain Entities**: User, Workspace, Review.
2.  **Key Data Contracts**: JSON schema for the primary entity (e.g., `Workspace`).
3.  **Success Metrics**: How we measure if the "Vibe" is working.

Output this as a single cohesive response.
```

---

### Phase 2: The "Engineering Cycle" Scaffolder (Google AI Studio)
**Goal:** To take the "Validated Vision" and enter the **Engineering Cycle** (Stage 0 & 1).
**Where:** Google AI Studio (Gemini 1.5 Pro).
**Reference:** `PROMPTS/02_playbook-engineering-cycle.md`

**Prompt (Copy/Paste):**
```markdown
Role: You are a Principal Systems Architect and DevOps Engineer.

Context:
We are transitioning from the "Genesis Cycle" (Vision) to the "Engineering Cycle" (Execution).
Your goal is to scaffold the **Stage 1: Scaffolding & Contracts** for an enterprise-grade repository.

**Critical Instruction:** Implement the "Quantum Diamond" principles:
1.  **Contract-First**: Schemas (Zod) are the source of truth.
2.  **Defense in Depth**: Security is baked in (Helmet, Rate Limit).
3.  **Observability**: Correlation IDs and Golden Signals.

Inputs:
[PASTE GENESIS CYCLE OUTPUT]

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

### 2. The "Contract" Harness (Code Generation)
Generate the actual code for:
- **`src/types/contracts.ts`**: TypeScript interfaces for the Domain Entities defined in the Genesis Cycle.
- **`src/schemas/validation.ts`**: Zod schemas matching the contracts.
- **`src/middleware/validation.ts`**: Middleware to enforce these schemas.

### 3. The "Engineering Cycle" Playbook Integration
Generate:
- **`ADRS/001_engineering_strategy.md`**: Documenting the move to the Engineering Cycle.
- **`TASKS/task_schema.md`**: Updated to include "Validation Strategy" in the template.
- **`PROMPTS/PROJECT_PROMPT_TEMPLATE.md`**: The standard project template.
- **`PROMPTS/BUSINESS_ANALYST_PROMPT.md`**: The "Expert Analyst" prompt to help the agent maintain the cycle.

### 4. The Initial Backlog (Stage 2: Implementation)
Generate the first 5 task files in `TASKS/backlog/`:
- `001_scaffold_repo.md` (Run setup.sh, install dependencies).
- `002_implement_contracts.md` (Commit the Types and Schemas).
- `003_security_harness.md` (Setup Helmet, Rate Limit, Auth).
- `004_observability_setup.md` (Setup Logger with Correlation IDs).
- `005_core_feature_prototype.md` (Build the first UI based on the Genesis Vision).

Output the files clearly using markdown code blocks.
```

---

### Phase 3: The Execution (IDE / Antigravity)
**Goal:** The Agent executes **Stage 2 (Implementation)** and **Stage 3 (Validation)**.

**The Workflow:**

1.  **Initialize:**
    *   Run `sh setup.sh`.
    *   The repo is now in **Stage 1 (Scaffolding)**.

2.  **The "Antigravity" Loop:**
    *   **User Prompt:** "Agent, we are in Stage 2. Execute Task 002 (Implement Contracts). Ensure the Zod schemas match the 'Initial Contract' from the Genesis Cycle."
    *   **Agent Action:** The Agent implements the contracts.
    *   **Validation (Stage 3):** The Agent runs `npm run test:unit` to verify the schemas handle malformed data (as per the Engineering Cycle playbook).

### Key Integrations:
1.  **Genesis to Engineering Handoff**: The prompt explicitly frames the transition, ensuring the "Vibe" isn't lost but is "collapsed" into a rigorous schema.
2.  **Contract-First Design**: Phase 2 focuses heavily on `src/types/contracts.ts` and `src/schemas/validation.ts`, enforcing the "Connective Tissue" principle.
3.  **Business Analyst Integration**: By scaffolding `PROMPTS/BUSINESS_ANALYST_PROMPT.md`, we give the IDE Agent the ability to "think" like a PM if the requirements get fuzzy.
4.  **Project Template**: The `PROJECT_PROMPT_TEMPLATE.md` is included to ensure future large features follow the standard format.
