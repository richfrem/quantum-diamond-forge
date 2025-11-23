# Task: Update all prompts with generative pattern and next-step instructions

**Status:** Done
**Assignee:** Agent
**Created:** 2025-11-23

## Objective
Update all prompt files (ultra-lean, lean, enterprise) to follow the generative pattern established in `ultra-lean/00_overview.md` and `ultra-lean/01_features.md`.

## Context
*   **Related ADRs:** N/A
*   **Dependencies:** Walkthrough test findings
*   **Issue:** Current prompts are meta-instructional (ask for input) instead of generative (produce output immediately). They also don't tell users what to do after generation.

## Implementation Steps

### Ultra-Lean Prompts (Priority 1)
1.  [x] `00_overview.md` - DONE
2.  [x] `01_features.md` - DONE
3.  [x] `02_system.md` - Embed context, add "Generate NOW", add next-step instructions
4.  [x] `03_api.md` - Embed context, add "Generate NOW", add next-step instructions
5.  [x] `04_plan.md` - Embed context, add "Generate NOW", add next-step instructions (final step: hand to IDE Agent)

### Lean Prompts (Priority 2)
6.  [x] `lean/01_requirements_analysis.md`
7.  [x] `lean/02_architecture_design.md`
8.  [x] `lean/04_testing_strategy.md`
9.  [x] `lean/05_implementation_plan.md`

### Enterprise Prompts (Priority 3)
10. [x] `01_requirements_analysis.md`
11. [x] `02_architecture_design.md`
12. [x] `03_security_compliance.md`
13. [x] `04_testing_strategy.md`
14. [x] `05_implementation_plan.md`

## Pattern to Follow

Each prompt should:
1. **Embed context** from kickoff (product idea, timeline, mode)
2. **Embed context** from previous steps (e.g., features prompt includes overview summary)
3. **Use imperative command**: "Generate [Artifact Name] NOW."
4. **Include "After Generation" section** with specific next steps:
   - File name to create (e.g., `docs/02_system_diagram.md`)
   - Next prompt to paste (e.g., `prompts/ultra-lean/03_api.md`)

## Acceptance Criteria
*   [x] All ultra-lean prompts (00-04) updated and tested
*   [x] All lean prompts (01, 02, 04, 05) updated
*   [x] All enterprise prompts (01-05) updated
*   [x] Each prompt has unique "After Generation" instructions
*   [x] Walkthrough test completes successfully end-to-end

## Validation
*   [x] Test ultra-lean workflow with fresh Gemini chat
*   [x] Verify each prompt generates artifact immediately
*   [x] Verify Gemini provides correct next-step instructions
