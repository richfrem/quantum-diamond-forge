# Future Application Development Workflow & Prompt Strategy

**Status:** Draft
**Date:** 2025-11-22
**Context:** Feedback for refining the "Gemini Web" application generation workflow to align with the "Antigravity" Agentic Protocol.

---

## Overview
This document captures the feedback and strategy for upgrading the "Repo Initializer" workflow proposed by Gemini Web. The goal is to move from a standard project scaffold to an **Agent-Native Ecosystem** that supports autonomous development, rigorous documentation, and "Defense in Depth" security from Day 1.

## Feedback for Gemini Web: The "Antigravity" Upgrade

"This is a brilliant workflow. I love the separation of the 'Architect' and the 'Builder.'

However, I am working with an advanced IDE Agent (Antigravity protocol), and I want to refine **Phase 2 (The Repo Initializer)** to be 'Agent-Native' from Day 1.

Instead of just a standard project structure, I want the Initializer to scaffold a **Self-Documenting, Agent-Friendly Ecosystem**.

Here is my specific feedback to upgrade the 'Repo Initializer' prompt:

### 1. Upgrade the Task System (The 'Antigravity' Standard)
Instead of a single `TASKS.md` file (which gets messy), the Initializer should scaffold a **`TASKS/` directory structure**:
*   `TASKS/backlog/`
*   `TASKS/in-progress/`
*   `TASKS/done/`
*   `TASKS/task_schema.md` (Template for the agent to follow)
*   **Why:** This allows my IDE agent to pick up one file, work on it, and move it to 'done' without rewriting a massive list every time.

### 2. Institutional Memory (ADRs & Requirements)
The Initializer must create:
*   **`ADRS/` folder**: With an `adr_schema.md`. We want to document decisions (like 'Use Zod') from the very start.
*   **`REQUIREMENTS/` folder**: With a `requirement_schema.md`. The 'Product Spec' from Phase 1 should theoretically be parsed into individual requirement files here.

### 3. Agent Intelligence Bootstrapping (`PROMPTS/`)
The most critical missing piece is the **`PROMPTS/` folder**. The Initializer should create:
*   `PROMPTS/PROJECT_PROMPT_TEMPLATE.md`: For defining macro goals.
*   `PROMPTS/ISSUE_PROMPT_TEMPLATE.md`: For defining micro tasks.
*   `PROMPTS/BUSINESS_ANALYST_PROMPT.md`: A system prompt that teaches the IDE Agent how to *be* the PM if I get stuck.
*   **Why:** This embeds the 'Brain' into the repo. When I open the project, I can point my agent to these prompts and it immediately knows how to behave.

### 4. Security & Quality Scaffolding (Defense in Depth)
The `package.json` and `src` scaffold shouldn't just include the libraries; it should scaffold the **Security Harness**:
*   **`tests/e2e/`**: Initialize Playwright immediately.
*   **`tests/integration/`**: Create the folder structure.
*   **Security Middleware**: The `server.js` (or equivalent) scaffold should *already* have placeholders for Helmet, Rate Limiting, and Zod Middleware. Don't make security a 'Task' for later; make it the default state.

### 5. Automation Tooling (`tools/scaffolds/`)
Ideally, it should generate simple Python/Shell scripts to manage this structure:
*   `tools/scaffolds/get_next_task_number.py`
*   `tools/scaffolds/get_next_adr_number.py`
*   **Why:** This allows the agent to autonomously create new tasks/ADRs with correct numbering without asking me.

**Can you rewrite the 'Phase 2: Repo Initializer' prompt to output this advanced 'Antigravity' structure?** I want the result to be a project that is not just a codebase, but a fully managed *system* ready for an AI agent to inhabit."
