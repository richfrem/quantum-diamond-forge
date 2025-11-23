# Task: Update Documentation for v2.2 Protocol

**Status:** Done | Active | Done]
**Assignee:** [Agent/User]
**Created:** 2025-11-23

## Objective
Update `GUIDE.md` and `README.md` to accurately reflect the v2.2 workflow steps and terminology.

## Context
The current documentation describes an older workflow (Product Spec -> Tech Blueprint -> UI Designer...). The actual v2.2 workflow is (Requirements -> Architecture -> Security -> Testing -> Implementation).

## Implementation Steps
1.  Update `README.md`:
    - Update the "Quick Start" or "Workflow" section to list the correct 5 steps.
    - Ensure the Mermaid diagrams match the new flow (if they are embedded as code).
2.  Update `GUIDE.md`:
    - Rewrite Section 4 "The Protocol Steps" to match the new files:
        - Step 1: Requirements Analysis
        - Step 2: Architecture Design
        - Step 3: Security Compliance
        - Step 4: Testing Strategy
        - Step 5: Implementation Plan
    - Update the "Detailed Sequence" Mermaid diagram if necessary.
3.  Ensure consistency between the CLI help text and the documentation.

## Acceptance Criteria
- `README.md` correctly lists the v2.2 steps.
- `GUIDE.md` correctly details the v2.2 steps and matches the `prompts/` file names.
- No references to the old "UI Designer" or "Scaffolder" steps remain in the main workflow description.

## Validation
*   [ ] Run `npm run validate:drift`
*   [ ] Run tests
