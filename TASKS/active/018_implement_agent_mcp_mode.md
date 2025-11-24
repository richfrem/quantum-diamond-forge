# Task: Implement MCP Agent Mode (agent-mode)

**Reference snapshot:** `snapshot.txt`

**Owner:** Gemini 3 Pro (Antimatter IDE agent)
**Priority:** High
**Estimate:** 5–12 story points (split across subtasks)
**Status:** Backlog
**Created:** 2025-11-23

---

## Summary

Create an **MCP Agent Mode** for Quantum Diamond Forge (QDF) that automates the spec → lock → validate → code → test → commit pipeline by orchestrating LLM calls (Gemini/ChatGPT) through a local **Dockerized Daemon**. This mode must be opt-in, respect user token budgets, preserve existing manual workflows, and integrate with QDF's lockfile and git-safety rules.

## Goals / Acceptance Criteria

* **Kickoff Choice:** `forge.sh start` must prompt for **Execution Mode**:
    *   *Manual:* Generate prompts for user copy-paste (Default).
    *   *Agent:* Spin up Docker daemon for automated execution.
* **Agent Daemon (Docker):** Long-running process hosting the MCP runtime, orchestrator, and LLM adapter.
* **Agent Mode CLI:** `forge.sh agent start|stop|status` to manage the daemon and `forge.sh agent run` to trigger workflows.
* **Zero-surprises token UX:** show pre-run cost estimates and enforce `--max-cost` stopping behavior.
* **Safe Git workflow:** agent creates ephemeral branch `agent/mcp/<timestamp>`, commits atomically, and opens a PR (or presents diffs) for review.
* **Lockfile-aware automation:** agent reads existing lockfiles and only generates missing or drifted lockfiles based on `tier` policy.
* **Validator integration:** run existing `scripts/validator.js` and `scripts/validate_lockfiles.js`.
* **Telemetry + logs:** agent logs actions, LLM calls, and validation results to `logs/agent-mode/*.log`.

---

## Subtasks

1. **Design & Spec (Gemini)**
   * Create `templates/agent_mode.schema.json` (config schema).
   * Define MCP API contract for the daemon.

2. **Documentation & Guides**
   * Create `guides/mcp-docker/01_agent_mode_tradeoffs.md` (Cost vs. Effort, Docker reqs).
6. **File Applier & Git Safety**
   * Implement AST-aware patching and git operations inside the container.
   * Enforce `.agent/git_safety_rules.md`.

7. **Validation & Hardening**
   * Integrate existing validators into the daemon workflow.

8. **Tests & CI**
   * Unit tests for daemon logic.
   * Integration test: `forge agent run --dry-run` on snapshot.

9. **Docs**
   * Add `guides/agent-mode.md` explaining the Docker architecture.

---

## Implementation Notes & Constraints

* **Respect manual mode**: agent mode must never remove the manual workflow; manual remains fully supported.
* **Token-budget safety**: default to conservative estimates. Enforce `--max-cost` and stop before write if budget exceeded.
* **Minimal permissions**: avoid auto-pushing to protected branches; default to PR creation in user’s fork or present patch.
* **Prompt strategy**: use contract-driven prompts (structured JSON) and lockfile context to minimize tokens.
* **Security**: secrets must never be sent to LLMs. Use `scripts/sanitize_input.ts` prior to any snapshot upload.

---

## Files to create / modify (suggested)

* `scripts/agents/orchestrator.js` (new)
* `scripts/agents/llm_adapter.js` (new)
* `scripts/agents/file_applier.js` (new)
* `scripts/agents/validator_runner.js` (new)
* `templates/agent_mode.schema.json` (new)
* `forge.sh` (add agent command) (modify)
* `prompts/agent-mode/` (new folder with compact prompts/templates)
* `guides/agent-mode.md` (new)
* `validators/thresholds.json` (new)

---

## Testing Scenarios (minimum)

* `forge agent --dry-run --tier quick` on snapshot `snapshot.txt` — verify expected patches.
* `forge agent --max-cost 0.50` with a moderately sized spec — ensure agent stops before budget exceed and logs reason.
* `forge agent --ask-every-call` — ensure human approval gate works for writes.
* CI: run `node scripts/agents/orchestrator.js --test-mode` to simulate deterministic sequence.
