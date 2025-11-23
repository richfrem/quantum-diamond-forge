# Antigravity Git Safety Rules

This file defines strict rules for Git operations to prevent data loss, unnecessary branching, and workflow confusion.

## 1. Branch Management
*   **NO Panic Branching:** Never create a new branch just because a push to `main` or another branch failed.
*   **Single Source of Truth:** Always use the existing feature branch for the current task. Do not create `feature/foo-complete` or `feature/foo-final`.
*   **Clean Up:** Delete feature branches only AFTER they have been successfully merged and verified.

## 2. Destructive Commands
*   **NO Reckless Resets:** Never run `git reset --hard` unless:
    1.  You have explicitly verified that all valuable changes are pushed to a remote branch.
    2.  You have user permission.
*   **NO Force Pushes:** Do not use `git push --force` or `-f` on shared branches.

## 3. Workflow
*   **Protected Branches:** Assume `main` and `master` are protected. Always use a Pull Request workflow.
*   **Status Checks:** Always run `git status` before and after complex operations to confirm state.
*   **Context Awareness:** Before running a command, verify:
    *   Which branch am I on?
    *   What is the state of the remote?
    *   Will this command destroy uncommitted or unpushed work?

## 4. Error Handling
*   If a Git command fails, **STOP**. Analyze the error. Do not blindly try a different command or create a new branch.
*   Ask the user for guidance if the path forward involves potential data loss.

## 5. Sequential Workflow (The "Finish It" Rule)
*   **One Thing at a Time:** Do NOT start new work, create new files, or push new commits if a Pull Request is active and pending merge.
*   **Complete the Cycle:** The workflow is: `Feature Branch` -> `PR` -> `Merge` -> `Cleanup (Delete Local AND Remote Branch)` -> `Pull Main`. Only THEN can new work begin.
*   **No "Ride-Along" Commits:** Do not add unrelated changes (like documentation updates or rule files) to a feature branch that is already under review or ready for PR. Create a new branch *after* the current one is merged.
