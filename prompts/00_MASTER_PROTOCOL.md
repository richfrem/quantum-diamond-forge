# Quantum Diamond Forge: Master Protocol (v2.0)

**Objective:**
Generate "Enterprise Benchmark" quality software specifications and code by orchestrating a "Human-in-the-Loop" workflow with high-end LLMs (Gemini 1.5 Pro, Claude 3.5 Sonnet, or Grok).

**The Concept:**
Instead of relying on a swarm of autonomous agents, **YOU + ANTIGRAVITY** are the orchestrator.
*   **You (The User):** Provide the vision and strategic decisions.
*   **Web LLM (Gemini/Claude):** The "Heavy Lifter" that generates rigorous specs from our prompts.
*   **Antigravity (IDE Agent):** The "Builder" that implements the code based on those specs.

This "Human-in-the-Loop" workflow ensures enterprise-grade quality without losing control.

---

## Phase 1: The Specification Loop

**Goal:** Create a "Gold Standard" documentation suite (`docs/`) that leaves no ambiguity for implementation.

### Step 1: Requirements Analysis
1.  Open `prompts/01_requirements_analysis.md`.
2.  Fill in your "Rough Idea" at the top.
3.  Paste the entire file into your Web LLM.
4.  **Review the Output:** Ensure it has a Feature Catalog (MoSCoW), Functional Requirements, and User Stories.
5.  **Save:** Create `docs/01_REQUIREMENTS.md` and paste the output there.

### Step 2: Architecture Design
1.  Open `prompts/02_architecture_design.md`.
2.  Paste it into the Web LLM (attach `docs/01_REQUIREMENTS.md` as context).
3.  **Review the Output:** Ensure it has C4 Diagrams (Mermaid), API Definitions, and Data Models.
4.  **Save:** Create `docs/02_ARCHITECTURE.md` and paste the output there.

### Step 3: Security & Compliance
1.  Open `prompts/03_security_compliance.md`.
2.  Paste it into the Web LLM (attach `docs/01_REQUIREMENTS.md` and `docs/02_ARCHITECTURE.md`).
3.  **Review the Output:** Ensure it has Threat Models (STRIDE) and AuthZ matrices.
4.  **Save:** Create `docs/03_SECURITY.md` and paste the output there.

### Step 4: Testing Strategy
1.  Open `prompts/04_testing_strategy.md`.
2.  Paste it into the Web LLM (attach previous docs).
3.  **Save:** Create `docs/04_TESTING.md`.

### Step 5: Implementation Plan
1.  Open `prompts/05_implementation_plan.md`.
2.  Paste it into the Web LLM (attach all 4 docs).
3.  **Save:** Create `docs/05_IMPLEMENTATION.md`.
4.  **Action:** This file will contain a `task.md` section. Copy that into your IDE's `task.md` to start coding!

---

## Phase 2: The Build Loop

**Goal:** Implement the spec using the Antigravity Agent (in your IDE).

1.  **Initialize:**
    *   Ensure `task.md` is populated from Step 5.
    *   Ensure `docs/` folder contains all 5 artifacts.

2.  **Execute:**
    *   Point your IDE Agent to the `task.md`.
    *   The Agent will read the `docs/` to understand *exactly* what to build.
    *   Iterate through the tasks until completion.

---

## Pro Tips
*   **Iterate:** If the LLM output isn't detailed enough, ask it to "Critique and Refine" before saving.
*   **Diagrams:** Use the Mermaid diagrams in `02_ARCHITECTURE.md` to visualize the system. You can render them in GitHub or your IDE.
*   **Context:** Always provide the previous documents as context for the next step. This ensures consistency.
