# Task: Implement Build and Test Commands in forge.sh

**Status:** Done | Active | Done]
**Assignee:** [Agent/User]
**Created:** 2025-11-23

## Objective
Add `build` and `test` commands to the `forge.sh` CLI to support the full v2.2 workflow.

## Context
The v2.2 workflow requires a build step (where the Agent reads lockfiles and generates code) and a test step. These commands are currently missing from `forge.sh`.

## Implementation Steps
1.  Add a `build` case to the main `case` statement in `forge.sh`.
    - This command should trigger the Antigravity Agent. Since we can't directly "trigger" the agent from bash in this context, it should print a clear instruction to the user: "🚀 Ready to Build! Please instruct the Antigravity Agent to: 'Build the application based on the lockfiles in docs/'".
    - Optionally, it could run a validation check first.
2.  Add a `test` case to the main `case` statement in `forge.sh`.
    - This command should run the project's test suite.
    - It should detect if `npm` or `yarn` or `pnpm` is being used and run the appropriate test command (e.g., `npm test`).
    - If no test script is found, it should print a helpful message.
3.  Update the `show_help` function to include these new commands.

## Acceptance Criteria
- `./forge.sh build` prints instructions for the user to engage the Agent.
- `./forge.sh test` attempts to run the project's tests.
- Both commands are listed in `./forge.sh help`.

## Validation
*   [ ] Run `npm run validate:drift`
*   [ ] Run tests
