# File: 11_Antigravity_Integrated_Protocol.md

**Status:** Iteration 11 (Final Integrated Version)
**Focus:** Merging "Visual Planning Details" (Screenshots) into "Antigravity Structural Rigor."

---

## Phase 1: The "Genesis Cycle" (Chat Interface)
**Goal:** Transform your rough idea into a High-Resolution Blueprint.
**Key Change:** This prompt now explicitly demands the **Page Architecture** and **Design System** details from your original plan.

**Prompt (Copy/Paste into ChatGPT/Claude):**
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
**Key Change:** The Scaffolder now creates a `DESIGN_SYSTEM.md` and generates detailed Task files based on the Page Architecture.

**Prompt (Copy/Paste into AI Studio):**
```markdown
Role: You are a Principal Systems Architect operating under the "Antigravity" protocol.

**The Mission:**
We are transitioning from "Vision" to "Execution." Scaffold a **Self-Documenting, Secure-by-Default Ecosystem** that is fully aware of the Product's Design and Page requirements.

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

### 3. The "Contract" Harness (Code)
Generate code for:
- **`src/types/contracts.ts`**: TypeScript interfaces matching the "Data Entities" from Part 3.
- **`src/schemas/validation.ts`**: Zod schemas matching those interfaces.

### 4. The Antigravity System Prompts
Generate:
- **`PROMPTS/BUSINESS_ANALYST_PROMPT.md`**: System prompt for planning.
- **`TASKS/task_schema.md`**: Template for tasks.
- **`ADRS/adr_schema.md`**: Template for decisions.

### 5. The Initial Backlog (Smart Generation)
Generate the first batch of task files in `TASKS/backlog/`.
*CRITICAL: Use the "Page-by-Page Architecture" to create specific Feature Tasks.*

- `001_scaffold_repo.md` (Setup script, dependencies).
- `002_implement_design_system.md` (Setup Tailwind config based on `DESIGN_SYSTEM.md`).
- `003_implement_contracts.md` (Setup Types and Zod schemas).
- `004_feature_shell_nav.md` (Build Layout based on App Overview).
- `005_feature_home_feed.md` (Build the Home Screen based on `PAGE_SPECS.md` - Home).
- `006_feature_workspace_detail.md` (Build Detail View based on `PAGE_SPECS.md` - Detail).

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

3.  **Execute Task 005 (Home Feed):**
    *   **User:** "Agent, execute Task 005. Build the Home Feed. Refer to `REQUIREMENTS/PAGE_SPECS.md` for the component breakdown and `mockData.ts` for the Vibe Tags."
    *   **Result:** The Agent builds the Masonry Grid with the exact components you planned in your original screenshot.

---

### Why File 11 is the Winner:
*   **It respects your planning:** It creates dedicated files (`PAGE_SPECS.md`, `DESIGN_SYSTEM.md`) for the deep details you gathered in Step 1.
*   **It keeps the Enterprise Rigor:** It still enforces Zod, Tests, and ADRs.
*   **It bridges the gap:** The "Scaffolder" prompt now specifically maps the *Visual Plan* to the *Task Backlog*, ensuring nothing gets lost in translation.