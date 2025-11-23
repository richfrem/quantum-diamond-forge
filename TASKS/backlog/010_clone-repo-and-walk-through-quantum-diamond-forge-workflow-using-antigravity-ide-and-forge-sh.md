# Task: Clone repo and walk through Quantum Diamond Forge workflow using Antigravity IDE and forge.sh

**Status:** Backlog
**Assignee:** 
**Created:** 2025-11-22

## Objective
Walk through the end‑to‑end process of cloning the `quantum-diamond-forge` repository, opening it in the Antigravity IDE, and using the `forge.sh` script to execute the Quantum Diamond Forge workflow (mode selection, prompt generation, lockfile creation, validation, and build) to produce a production‑ready application.

## Context
- **Diagrams referenced:**
  - `diagrams/conceptual_overview(2.2).mermaid`
  - `diagrams/dependency_graph(2.2).mermaid`
  - `diagrams/high_level_flow(2.2).mermaid`
  - `diagrams/sequence_diagram(2.2).mermaid`
- **Guides:** `GUIDE.md` and `README.md` contain step‑by‑step instructions for the workflow.
- **Related ADRs:** (link to any Architecture Decision Records if applicable).
- **Dependencies:** Ensure Node.js (>=18), Git, and the Antigravity IDE are installed.

## Implementation Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/richfrem/quantum-diamond-forge.git
   cd quantum-diamond-forge
   ```
2. **Open the project in Antigravity IDE** (or your preferred editor). The IDE provides the interactive UI for the Forge.
3. **Run the interactive kickoff**
   ```bash
   ./forge.sh start
   ```
   - Follow the interview, select a mode (Ultra‑Lean, Lean, or Enterprise) as shown in `conceptual_overview(2.2).mermaid`.
4. **Generate each specification artifact** using the prompts:
   ```bash
   ./forge.sh prompt 1   # Requirements
   ./forge.sh prompt 2   # Architecture
   ./forge.sh prompt 3   # Security
   ./forge.sh prompt 4   # Testing
   ./forge.sh prompt 5   # Implementation Plan
   ```
5. **Create lockfiles** after each artifact to lock the spec state:
   ```bash
   ./forge.sh lock requirements
   ./forge.sh lock architecture
   ./forge.sh lock security
   ./forge.sh lock testing
   ./forge.sh lock implementation
   ```
6. **Validate the specification**
   ```bash
   ./forge.sh validate   # runs the Spec Validator CLI
   ```
   - Ensure the validator reports **All Checks Passed**.
7. **Build the production code** using the Antigravity Agent:
   ```bash
   ./forge.sh build   # triggers the Agent to read lockfiles and generate code
   ```
8. **Run tests** to confirm the build succeeded:
   ```bash
   ./forge.sh test
   ```
9. **Review the final output** – the `docs/` folder should contain all generated artifacts, lockfiles, and the `Code/` directory should contain the production‑ready application.

## Acceptance Criteria
- Repository cloned and opened in Antigravity IDE.
- All five specification artifacts are generated and saved in `docs/`.
- Corresponding lockfiles exist for each artifact.
- The validator reports no errors.
- The Antigravity Agent successfully builds the code.
- All tests pass.
- The final application is runnable and matches the design shown in the diagrams.

## Validation
- Run `./forge.sh validate` and confirm the output includes `✅ All Checks Passed`.
- Execute `./forge.sh test` and ensure a green test report.
- Compare generated artifacts against the expectations in the diagrams (`conceptual_overview`, `dependency_graph`, `high_level_flow`, `sequence_diagram`).
