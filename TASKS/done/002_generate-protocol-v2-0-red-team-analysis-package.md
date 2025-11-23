# Task: Generate Protocol v2.0 Red Team Analysis Package

**Status**: Active
**Created**: 2025-11-22
**Owner**: Antigravity

## Objective
Create a comprehensive snapshot of Protocol v2.0 and a red team analysis prompt that can be used with external LLMs (Grok, GPT-4, Claude) to get independent review and feedback on our approach.

## Context
We've just completed the Protocol v2.0 upgrade, which introduced:
- New 5-step prompting workflow (Requirements → Architecture → Security → Testing → Implementation)
- "Human-in-the-Loop" orchestration model
- Industry benchmark-inspired rigor

We need external validation to identify blind spots, weaknesses, and improvement opportunities.

## Requirements

### 1. Create Specialized Snapshot Script
**File**: `scripts/capture_redteam_snapshot.js`

Based on `capture_snapshot.js`, create a specialized version that:
- **Includes**: All Protocol v2.0 prompts (`prompts/*.md`)
- **Includes**: All documentation (`README.md`, `GUIDE.md`, diagrams)
- **Includes**: Task file showing what was done (`TASKS/done/001_harden-protocol-with-industry-benchmarks.md`)
- **Excludes**: Code implementation (scripts, workflows)
- **Excludes**: BLITZY folder (already gitignored)
- **Format**: Single markdown file optimized for LLM ingestion

### 2. Create Red Team Prompt
**File**: `prompts/redteam_v2_analysis.md`

A structured prompt that:
- Explains the context (upgrading from v1 to v2)
- Asks the LLM to act as a "Protocol Auditor"
- Requests specific analysis on:
  - **Completeness**: Are there gaps in the workflow?
  - **Usability**: Is it too complex for solo developers?
  - **Rigor**: Does it match enterprise standards?
  - **Practicality**: Will the "Human-in-the-Loop" model work?
  - **Blind Spots**: What are we missing?

### 3. Generate the Package
Run the script to create:
- `redteam_snapshot_v2.txt`: The full Protocol v2.0 snapshot
- Combine with the prompt for easy copy-paste to external LLMs

## Implementation Steps
- [x] Create `scripts/capture_redteam_snapshot.js`
- [x] Test the script to ensure it captures the right files (19 files captured)
- [x] Create `prompts/redteam_v2_analysis.md`
- [x] Generate `redteam_snapshot_v2.txt`
- [x] Create usage instructions (`REDTEAM_USAGE.md`)

## Success Criteria
- [x] Snapshot includes all Protocol v2.0 artifacts
- [x] Snapshot is under 100k tokens (19 files, focused on docs)
- [x] Red team prompt is clear and actionable
- [x] User can copy-paste to Grok/GPT-4/Claude for analysis

## Notes
- Keep the snapshot focused on **protocol design**, not implementation details
- The goal is to get strategic feedback, not code review

## Red Team Feedback Workflow
1. User submits snapshot + prompt to external LLMs (Grok, GPT-4, Claude)
2. User saves LLM responses to `INBOX/` folder
3. Antigravity reviews feedback and:
   - Identifies actionable improvements
   - Creates follow-up tasks if needed
   - Requests clarification from user if needed
4. After addressing feedback, delete the INBOX file or request additional input
