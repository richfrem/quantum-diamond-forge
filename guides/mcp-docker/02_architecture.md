# Agent Mode Architecture: The Autonomous Daemon

This document details the technical architecture of the Quantum Diamond Forge (QDF) Agent Mode. Unlike the manual workflow, Agent Mode relies on a long-running, Dockerized daemon that acts as an autonomous developer.

## High-Level Overview

The architecture is designed around **isolation**, **persistence**, and **safety**.

*   **Docker Container:** The entire agent runtime lives inside a container. This ensures it has a consistent environment and cannot accidentally modify files outside the mounted repository.
*   **MCP Protocol:** We use the Model Context Protocol (MCP) to standardize communication between the CLI (User) and the Daemon (Agent).
*   **"The Brain" Loop:** The core logic is an event loop that decides when to call the LLM and when to execute local tools (file I/O, git).

![Architecture Diagram](../../diagrams/agent_mode_architecture.mermaid)

---

## Component Breakdown

### 1. The Docker Container (Autonomous Daemon)
The container is the boundary of the agent's world. It mounts your project repository as a volume, giving it read/write access to your code but nothing else on your machine.

### 2. MCP Server ("The Front Door")
*   **Role:** Network Listener (Node.js/Express).
*   **Responsibility:** Receives commands from the `forge` CLI (e.g., "Implement this feature"). It does *not* make decisions; it simply passes the intent to the Brain.
*   **Interface:** HTTP / MCP over WebSocket.

### 3. MCP Host/Client ("The Brain")
*   **Role:** Orchestrator.
*   **Responsibility:** This is the main loop.
    1.  **Observe:** Reads the current state of the repo (lockfiles, code).
    2.  **Orient:** Consults the LLM (via Adapter) to understand what needs to be done.
    3.  **Decide:** Chooses the next tool to run (e.g., "Read file", "Generate Code", "Run Validator").
    4.  **Act:** Executes the tool via the Tool Execution module.
*   **Why "Host/Client"?** It acts as a *Client* to the Gemini API (asking for help) and a *Host* to the internal tools (executing them).

### 4. LLM Adapter
*   **Role:** Translator & Optimizer.
*   **Responsibility:**
    *   Manages API keys (Gemini, OpenAI).
    *   Tracks token usage and enforces the `--max-cost` budget.
    *   Optimizes prompts (compressing context) before sending them to the provider.

### 5. Tool Execution (File I/O)
*   **Role:** The Hands.
*   **Responsibility:**
    *   **AST Patching:** intelligently updates code files without breaking syntax.
    *   **Git Safety:** Enforces the rules in `.agent/git_safety_rules.md`. It creates ephemeral branches for every task and never pushes to `main` directly.

---

## Data Flow

1.  **Developer** runs `forge agent run "Fix bug #123"`.
2.  **CLI** sends the command to the **MCP Server** port.
3.  **MCP Server** wakes up **The Brain**.
4.  **The Brain** reads the `snapshot.txt` and `docs/locks/*.json` from the **Repo Volume**.
5.  **The Brain** sends a context-rich prompt to **Gemini** via the **LLM Adapter**.
6.  **Gemini** responds with a plan or code.
7.  **The Brain** instructs **Tool Execution** to apply changes.
8.  **Tool Execution** writes to a new git branch in the **Repo Volume**.

## Security & Safety

*   **Sandboxing:** The agent cannot see your personal files, SSH keys (unless explicitly mounted), or other system processes.
*   **Budget Cap:** The LLM Adapter hard-stops execution if the session cost exceeds your limit.
*   **Human-in-the-Loop:** In `--ask-every-call` mode, the Brain pauses and waits for your approval before every write operation.
