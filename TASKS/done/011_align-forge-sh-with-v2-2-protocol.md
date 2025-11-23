# Task: Align forge.sh with v2.2 Protocol

**Status:** Done | Active | Done]
**Assignee:** [Agent/User]
**Created:** 2025-11-23

## Objective
Update `forge.sh` to correctly map the CLI commands to the actual v2.2 prompt files located in the `prompts/` directory.

## Context
The current `forge.sh` script references outdated file names (e.g., `01_product_spec.md`) that do not exist in the `prompts/` folder. The `prompts/` folder contains the new v2.2 protocol files (e.g., `01_requirements_analysis.md`).

## Implementation Steps
1.  Modify the `copy_prompt` function in `forge.sh`.
2.  Update the `case` statement to map the step numbers to the correct filenames:
    - Step 1 -> `01_requirements_analysis.md`
    - Step 2 -> `02_architecture_design.md`
    - Step 3 -> `03_security_compliance.md`
    - Step 4 -> `04_testing_strategy.md`
    - Step 5 -> `05_implementation_plan.md`
3.  Verify that the `copy_prompt` function correctly copies the content of these files to the clipboard.

## Acceptance Criteria
- Running `./forge.sh prompt 1` copies `prompts/01_requirements_analysis.md`.
- Running `./forge.sh prompt 2` copies `prompts/02_architecture_design.md`.
- Running `./forge.sh prompt 3` copies `prompts/03_security_compliance.md`.
- Running `./forge.sh prompt 4` copies `prompts/04_testing_strategy.md`.
- Running `./forge.sh prompt 5` copies `prompts/05_implementation_plan.md`.

## Validation
*   [ ] Run `npm run validate:drift`
*   [ ] Run tests
