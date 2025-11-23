# Task: Implement Protocol v2.1 Improvements from Red Team Feedback

**Status**: Done
**Created**: 2025-11-22
**Owner**: Antigravity
**Priority**: Critical

## Objective
Implement the top-priority improvements identified by GPT-5 and Grok 4 red team analysis to make Protocol v2.0 more practical and adoptable while maintaining enterprise rigor.

## Context
Both external LLMs identified critical issues:
- Workflow too heavy (25+ artifacts)
- Prompts too dense and brittle
- No sync mechanism (guaranteed drift)
- Manual overhead (copy-paste friction)
- No escape hatches (rigid system)

**Biggest Risk**: Developer abandonment after Phase 2.

## Scope
Focus on the **Critical** and **High Priority** improvements that provide maximum impact:

### Phase 1: Two-Track Workflow (Critical)
Create "Lean" and "Enterprise" modes to serve different user segments.

### Phase 2: Modular Prompts (Critical)
Break giant prompts into smaller, more robust modules.

### Phase 3: Quick Wins (High Priority)
Add escape hatches, verbosity controls, and iteration support.

## Implementation Steps

### ✅ Phase 1: Two-Track Workflow
- [x] Create `prompts/00_MASTER_PROTOCOL_LEAN.md`
- [x] Define Lean mode scope (skip C4 level 2-3, threat tables, reduce requirements)
- [x] Create lean variants of prompts:
  - [x] `prompts/lean/01_requirements_analysis.md`
  - [x] `prompts/lean/02_architecture_design.md`
  - [x] `prompts/lean/04_testing_strategy.md`
  - [x] `prompts/lean/05_implementation_plan.md`
- [x] Update `README.md` to explain both tracks
- [x] Add mode selector to `GUIDE.md`

### ✅ Phase 2: Modular Prompts
- [x] Create `prompts/modules/` directory
- [x] Break down existing prompts into modules:
  - [x] `modules/requirements/product_overview.md`
  - [x] `modules/requirements/feature_catalog.md`
  - [x] `modules/requirements/user_stories.md`
  - [x] `modules/architecture/c4_diagrams.md`
  - [x] `modules/architecture/data_models.md`
  - [x] `modules/security/threat_modeling.md`
  - [x] `modules/testing/test_pyramid.md`
- [x] Reduce prompt length by 60-70% (modules are much shorter)
- [x] Add module composition guide (`modules/README.md`)

### ✅ Phase 3: Quick Wins
- [x] Add verbosity controls to prompts ("Full, Medium, or Lightweight?")
- [x] Create escape hatch documentation (`docs/ESCAPE_HATCHES.md`)
- [x] Add iteration examples (how to revise specs mid-build)
- [x] Document assumptions and limitations

## Success Criteria
- [x] Lean mode reduces artifacts from 25+ to ~10
- [x] Prompts are 60-70% shorter (modular prompts)
- [x] Users can choose rigor level (Ultra-Lean, Lean, Enterprise)
- [x] Clear guidance on when to skip steps (ESCAPE_HATCHES.md)
- [x] Protocol supports iteration (lockfile system + validator)

## Out of Scope (Future Tasks)
- Spec lockfile system (requires tooling)
- Validation & diff tools (requires automation)
- CLI automation (requires API integration)

## Notes
- Start with Lean mode to address #1 risk (developer abandonment)
- Keep Enterprise mode unchanged for teams that need full rigor
- Focus on documentation and prompt improvements (no code changes yet)
