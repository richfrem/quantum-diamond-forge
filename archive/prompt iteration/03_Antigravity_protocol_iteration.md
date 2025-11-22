# File: 03_Antigravity_protocol_iteration.md

### Phase 1: The Solution Architect (Chat Interface)
**Goal:** Create the *Intellectual Property* (The Product & Technical definitions) that will feed the ecosystem.
**Where:** ChatGPT (o1/4o) or Claude 3.5 Sonnet.

**Prompt (Copy/Paste):**
```markdown
Act as a Principal Product Manager and Systems Architect. I have an idea for an application called "WorkSpot" (A workspace finder based on vibe/aesthetics).

I need to generate two foundational documents to initialize an "Antigravity" Agentic Repo.

**My Rough Idea:**
[INSERT YOUR IDEA/SCREENSHOT DETAILS HERE]

**Task:**
Process this idea and output TWO distinct Markdown sections.

### PART 1: PRODUCT_SPEC.md
1.  **Narrative**: Problem (Isolation) vs. Solution (Vibe-based discovery).
2.  **Audience**: detailed personas (e.g., "The Deep Worker" vs "The Social Creative").
3.  **Differentiation**: List the 3 "X-Factors" (e.g., Aesthetic-first, Remote-first).
4.  **Core Feature Scope**: The 5-7 MVP features with specific requirements (e.g., "Map View must handle clustering").
5.  **Design Vibe**: Adjectives and visual translations (e.g., "Energetic = Bold Gradients").

### PART 2: TECHNICAL_BLUEPRINT.md
1.  **Domain Architecture**: Define the core entities (User, Workspace, Review, VibeTag) and their relationships.
2.  **Tech Stack**: Next.js (App Router), Tailwind, Shadcn/UI, Supabase (or similar), Zod (Validation), Zustand (State).
3.  **Security Strategy**: Define Auth flow, RLS policies, and Zod Middleware requirements.
4.  **Testing Strategy**: Unit (Vitest) vs Integration (Playwright).
5.  **API Schema**: Define the shape of the key JSON objects.

Output this as a single cohesive response.
```

---

### Phase 2: The "Antigravity" Scaffolder (Google AI Studio)
**Goal:** Generate the **File System** that acts as the Agent's Brain.
**Where:** Google AI Studio (Gemini 1.5 Pro).
**Why:** The context window allows it to hold the Spec + Blueprint and output massive script files.

**Prompt (Copy/Paste):**
```markdown
Role: You are a Principal DevOps Engineer and Expert Systems Architect.

Context:
We are initializing a high-quality, enterprise-grade software project based on the attached "PRODUCT_SPEC" and "TECHNICAL_BLUEPRINT."
Your goal is NOT to write feature code yet. Your goal is to scaffold a **Self-Documenting, Agent-Friendly Ecosystem** that an advanced AI Agent can inhabit and build upon.

Inputs:
[PASTE PRODUCT_SPEC FROM PHASE 1]
[PASTE TECHNICAL_BLUEPRINT FROM PHASE 1]

Task:
Generate the file contents for the following **Critical Foundation Artifacts**.

### 1. The Directory Structure (`setup.sh`)
Output a BASH script that creates this exact structure:
- `src/{components,features,lib,hooks,types}`
- `tests/{e2e,integration,unit}`
- `TASKS/{backlog,in-progress,done}`
- `ADRS/` (Architecture Decision Records)
- `REQUIREMENTS/` (Product Requirements)
- `PROMPTS/` (System Prompts for the Agent)
- `tools/scaffolds/` (Automation scripts)

### 2. Institutional Memory Templates
Generate the content for:
- **`ADRS/000_template.md`**: Header includes Status (Proposed/Accepted), Date, Context, Decision, Consequences.
- **`TASKS/000_task_template.md`**: Header includes Role (Frontend/Backend), Goal, Context, Definition of Done, Test Plan.
- **`PROMPTS/AGENT_PERSONA.md`**: A system prompt defining the Agent's role ("You are a Senior Engineer. You always write tests before code. You always update ADRs...").

### 3. The "Defense in Depth" Harness
Generate the content for:
- **`package.json`**: Include React, Tailwind, Lucide, PLUS `zod` (Validation), `helmet` (Security), `vitest`, `playwright`.
- **`tsconfig.json`**: Strict mode enabled.

### 4. Agent Automation Tools (Python)
Generate simple scripts:
- **`tools/scaffolds/new_task.py`**: Creates a new numbered file in `TASKS/backlog` based on the template.
- **`tools/scaffolds/new_adr.py`**: Creates a new numbered ADR.

### 5. The Initial Backlog (The Roadmap)
Based on the "PRODUCT_SPEC," generate the first 5 task files in `TASKS/backlog/`:
- `001_project_init.md` (Setup CI/CD, Linting, Pre-commit hooks)
- `002_database_schema.md` (Implement the entities defined in Technical Blueprint)
- `003_auth_implementation.md` (Setup Auth + Zod Middleware)
- `004_core_layout.md` (Scaffold the App Shell/Nav)
- `005_feature_discover_feed.md` (The "Aesthetic Grid" view)

Output the files clearly using markdown code blocks (e.g., `## File: setup.sh`).
```

---

### Phase 3: The Execution (IDE / Antigravity)
**Goal:** The Agent performs the work autonomously.

**The Workflow:**

1.  **Initialize:**
    *   Run `sh setup.sh` (Created in Phase 2).
    *   Run `npm install`.
    *   You now have a repo with `TASKS/backlog` populated.

2.  **The "Antigravity" Loop:**
    *   Open your IDE (Cursor/VS Code with Agent).
    *   **User Action:** Drag `TASKS/backlog/001_project_init.md` and `TECHNICAL_BLUEPRINT.md` into the chat context.
    *   **User Prompt:** "Agent, execute Task 001. Move the file to `TASKS/in-progress` when you start, and `TASKS/done` when you finish. Ensure all 'Definition of Done' criteria are met."

3.  **The Result:**
    *   The Agent reads the specific task requirements.
    *   It implements the code.
    *   It runs the tests (because the task template requires it).
    *   It moves the file to `done`.

### Why this addresses your feedback:

1.  **No Monolithic Context:** By splitting `TASKS.md` into individual files, the Agent focuses only on the specific feature (e.g., "005_feature_discover_feed.md") without getting confused by the rest of the backlog.
2.  **Self-Correction:** If the Agent makes a major architectural choice, you can tell it: "Create an ADR for this." It uses the `tools/scaffolds/new_adr.py` script to generate the file, forcing it to document *why* it did what it did.
3.  **Security First:** Because Phase 2 scaffolds `zod` and `helmet` into `package.json` and creates a Task 003 specifically for Auth/Security, you ensure the app is secure before the first UI component is built.