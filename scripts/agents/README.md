# Agent Scripts

This directory contains the core logic for the MCP Agent Mode.

## Components
- `orchestrator.js`: Main control loop (decision tree, context management).
- `llm_adapter.js`: Interface to LLM providers (Gemini, OpenAI).
- `file_applier.js`: Handles file operations (diffs, patching, git safety).
- `validator_runner.js`: Runs validation checks and parses results.

## Usage
These scripts are intended to be called by the `forge agent` CLI command, not directly.
