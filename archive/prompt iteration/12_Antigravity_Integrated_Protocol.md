# File: 12_Antigravity_Integrated_Protocol.md

**Status:** Iteration 12 (The "Visionary" Edition)
**Focus:** Combining the "Antigravity Audit" Rigor (Security, Observability, ADRs) with the "Visual Genius" of the Integrated Protocol (Design Systems, Page Specs).

---

## The Antigravity Workflow Visualization

```mermaid
sequenceDiagram
    autonumber
    participant Human as 🧑‍💻 Human Architect
    participant Chat as 🤖 Chat Interface (Genesis)
    participant Studio as 🧠 AI Studio (Scaffolder)
    participant IDE as 💻 IDE Agent (Antigravity)
    participant Repo as 📂 Repository

    Note over Human, Chat: Phase 1: The Genesis Cycle (Vision)

    Human->>Chat: 1. Input "Rough Idea" + Genesis Prompt
    activate Chat
    Chat-->>Chat: Analyze Personas, Vibe, Visuals, Page Specs
    Chat->>Human: 2. Output "High-Resolution Blueprint" (5 Parts)
    deactivate Chat
    Note right of Chat: Artifacts: PRODUCT_SPEC, DESIGN_SYSTEM, PAGE_SPECS

    Note over Human, Studio: Phase 2: The Engineering Cycle (Scaffolding)

    Human->>Studio: 3. Input "Blueprint" + Scaffolder Prompt
    activate Studio
    Studio-->>Studio: Generate Directory Structure (setup.sh)
    Studio-->>Studio: Generate Contracts (Zod/Types)
    Studio-->>Studio: Generate Security Harness (Helmet/Auth)
    Studio-->>Studio: Generate Contextual Docs (DESIGN_SYSTEM.md)
    Studio-->>Studio: Generate Smart Backlog (Feature Tasks)
    Studio-->>Studio: Generate Retroactive ADRs
    Studio->>Human: 4. Output "Repo Initializer Script"
    deactivate Studio

    Note over Human, Repo: Phase 3: Initialization

    Human->>Repo: 5. Run `sh setup.sh`
    activate Repo
    Repo-->>Repo: Create Directories (TASKS, ADRS, PROMPTS, REQUIREMENTS)
    Repo-->>Repo: Write Configs (package.json, tsconfig)
    Repo-->>Repo: Write Initial Backlog (TASKS/backlog/*)
    deactivate Repo

    Note over Human, IDE: Phase 4: The Antigravity Loop (Execution)

    Human->>IDE: 6. Open IDE & Drag Task 005 + PAGE_SPECS
    activate IDE
    IDE->>Repo: Read Task, Design System, & Page Specs
    IDE-->>IDE: Plan Implementation (Visual + Secure)
    IDE->>Repo: Write Code (src/...)
    IDE->>Repo: Write Tests (tests/...)
    IDE->>Repo: Run Tests (npm test)
    deactivate IDE
```

---

## Phase 1: The "Genesis Cycle" (Chat Interface)
**Goal:** Transform your rough idea into a High-Resolution Blueprint.
**Where:** ChatGPT (o1/4o) or Claude 3.5 Sonnet.

**Prompt (Copy/Paste):**
```markdown
Act as a Principal Product Manager and UI/UX Lead. I am initiating a "Genesis Discovery" for a new application.

**My Rough Idea:**
[INSERT YOUR IDEA/SCREENSHOT DETAILS HERE]

**Task:**
Execute a "Genesis Discovery" process. You must capture the specific visual and functional details required to build a differentiated product. Output the following 5 Artifacts in a single Markdown block:

### PART 1: STRATEGIC OVERVIEW (The "Why")
*Ref: App Concept Summary*
1.  **Elevator Pitch**: 1-sentence value prop.
2.  **The Problem**: The specific friction/pain point (e.g., "Generic maps lack vibe").
3.  **The Solution**: The functional and emotional fix (e.g., "Aesthetic-first discovery").
4.  **Differentiation**: List 3 "X-Factors" that separate this from competitors.

### PART 2: AUDIENCE & VIBE (The "Soul")
*Ref: Target Audience & Brand Feel*
1.  **Primary Personas**: Who are they? (e.g., Freelancers, Nomads).
2.  **Brand Personality**: 3 Adjectives (e.g., "Clean, Welcoming, Curated").
3.  **Design Implications**: How strictly does this affect the UI? (e.g., "No clutter, generous whitespace, rounded corners").

### PART 3: CORE FEATURE SCOPE (The "What")
*Ref: Core Features List*
1.  **MVP Feature List**: The 5-7 critical features.
2.  **Data Entities**: Define the `Workspace` object structure (must include differentiated fields like `vibeTags`, `wifiSpeed`, `noiseLevel`).

### PART 4: VISUAL DESIGN SYSTEM (The "Look")
*Ref: Design System Screenshot*
1.  **Palette**: Primary, Secondary, Background (Light/Dark mode specs).
2.  **Typography**: Font stack usage (Heading vs Body).
3.  **Spacing & Layout**: Grid rules (Masonry vs List) and Spacing scale (XS to XL).

### PART 5: PAGE-BY-PAGE ARCHITECTURE (The "Map")
*Ref: Page Structure Screenshot*
*For each screen (Home, Map, Detail, Profile), define:*
*   **Purpose**: What is the goal?
*   **Key Components**: (e.g., "Floating Search Bar," "Vibe Pill Filter").
*   **Data Needs**: What data is fetched here?
*   **States**: Empty, Loading, Error states.

Output this as a single cohesive response.
```

---

## Phase 2: The "Antigravity" Scaffolder (Google AI Studio)
**Goal:** Scaffold the Agent's Habitat *and* populate it with the specific details from Phase 1.
**Where:** Google AI Studio (Gemini 1.5 Pro).

**Prompt (Copy/Paste):**
```markdown
Role: You are a Principal Systems Architect and DevOps Engineer operating under the "Antigravity" protocol.

**The Mission:**
We are transitioning from "Vision" to "Execution." Scaffold a **Self-Documenting, Secure-by-Default Ecosystem** that is fully aware of the Product's Design and Page requirements.

**Critical Instruction:** Implement the following "Quantum Diamond" principles:
1.  **Contract-First**: Schemas (Zod) are the source of truth.
2.  **Defense in Depth**: Security is baked in (Helmet, Rate Limit).
3.  **Observability**: Correlation IDs and Golden Signals.
4.  **Visual Fidelity**: The backlog must reflect the specific Design System and Page Specs.

Inputs:
[PASTE THE ENTIRE OUTPUT FROM PHASE 1]

Task:
Generate the file contents for the following **Critical Foundation Artifacts**.

### 1. The Directory Structure (`setup.sh`)
Output a BASH script that creates:
- `src/{components,features,lib,hooks,types,middleware,utils}`
- `tests/{e2e,integration,unit}`
- `TASKS/{backlog,in-progress,done}`
- `ADRS/`, `REQUIREMENTS/`, `PROMPTS/`, `.github/workflows/`

### 2. The Contextual Brain (Documentation)
Generate these files using the specific details from the Input:
- **`REQUIREMENTS/PRODUCT_SPEC.md`**: Paste the "Strategic Overview" and "Audience" here.
- **`REQUIREMENTS/DESIGN_SYSTEM.md`**: Paste the "Visual Design System" here. *Crucial for the Agent to know colors/fonts.*
- **`REQUIREMENTS/PAGE_SPECS.md`**: Paste the "Page-by-Page Architecture" here.
- **`ARCHITECTURE.md`**: Define the Tech Stack (Next.js, Tailwind, Supabase, Zod) and Security Rules.

### 3. The "Contract" Harness (Code Generation)
Generate the actual code for:
- **`src/types/contracts.ts`**: TypeScript interfaces matching the "Data Entities" from Part 3.
- **`src/schemas/validation.ts`**: Zod schemas matching those interfaces.
- **`src/middleware/validation.ts`**: Middleware to enforce these schemas.

### 4. The Antigravity System Prompts
Generate the content for these specific system prompts (do not reference external files):
- **`PROMPTS/BUSINESS_ANALYST_PROMPT.md`**: System prompt for planning (Macro vs Micro workflow).
- **`TASKS/task_schema.md`**: Template for tasks (Status, Priority, Context, Test Plan).
- **`ADRS/adr_schema.md`**: Template for decisions (Status, Context, Consequences).

### 5. The Initial Backlog (Smart Generation)
Generate the first batch of task files in `TASKS/backlog/`.
*CRITICAL: Use the "Page-by-Page Architecture" to create specific Feature Tasks.*

- `001_scaffold_repo.md` (Setup script, dependencies).
- `002_implement_design_system.md` (Setup Tailwind config based on `DESIGN_SYSTEM.md`).
- `003_implement_contracts.md` (Setup Types and Zod schemas).
- `004_security_harness.md` (Setup Helmet, Rate Limit, Auth Middleware).
- `005_feature_shell_nav.md` (Build Layout based on App Overview).
- `006_feature_home_feed.md` (Build the Home Screen based on `PAGE_SPECS.md` - Home).
- `007_feature_workspace_detail.md` (Build Detail View based on `PAGE_SPECS.md` - Detail).

### 6. Retroactive ADRs (The "Antigravity" Audit)
Generate the initial ADRs for the decisions you just made:
- **`ADRS/001_use_zod_validation.md`**: Documenting the choice of Zod for runtime validation.
- **`ADRS/002_use_helmet_security.md`**: Documenting the choice of Helmet for HTTP headers.
- **`ADRS/003_use_correlation_ids.md`**: Documenting the choice of Request IDs for observability.

Output the files clearly using markdown code blocks.
```

---

## Phase 3: The Antigravity Loop (Execution)
**Goal:** The IDE Agent builds the specific features defined in your plan.

**The Workflow:**

1.  **Initialize:**
    *   Run `sh setup.sh`.
    *   Your repo now contains `REQUIREMENTS/DESIGN_SYSTEM.md` and `REQUIREMENTS/PAGE_SPECS.md`.

2.  **Execute Task 002 (Design System):**
    *   **User:** "Agent, execute Task 002. Configure `tailwind.config.js` to match the palette and typography defined in `REQUIREMENTS/DESIGN_SYSTEM.md`."
    *   **Result:** The Agent reads your specific hex codes and font choices and applies them.

3.  **Execute Task 006 (Home Feed):**
    *   **User:** "Agent, execute Task 006. Build the Home Feed. Refer to `REQUIREMENTS/PAGE_SPECS.md` for the component breakdown and `mockData.ts` for the Vibe Tags."
    *   **Result:** The Agent builds the Masonry Grid with the exact components you planned in your original screenshot.

---

### Why Version 12 is the Ultimate Protocol:
1.  **Visual Fidelity:** It explicitly captures `DESIGN_SYSTEM` and `PAGE_SPECS` in Phase 1 and injects them into the repo in Phase 2.
2.  **Structural Rigor:** It maintains the "Antigravity Audit" requirements: Zod Contracts, Security Harness, and Retroactive ADRs.
3.  **Smart Backlog:** The Scaffolder generates tasks *specific* to your pages (e.g., "Task 006: Home Feed"), bridging the gap between "Vibe" and "Code."
