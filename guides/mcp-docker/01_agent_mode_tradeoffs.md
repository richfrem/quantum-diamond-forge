# Agent Mode vs. Manual Mode: Choosing Your Workflow

Quantum Diamond Forge (v2.3+) offers two distinct execution paths for building your software. This guide helps you decide which mode fits your needs, budget, and environment.

## The Core Tradeoff: Cost vs. Convenience

| Feature | **Manual Mode** (Default) | **Agent Mode** (MCP Daemon) |
| :--- | :--- | :--- |
| **Primary Interaction** | Web Chat (Gemini/ChatGPT) | CLI (`forge agent`) |
| **Cost** | **Free** (if using free web tiers) | **Paid** (Requires API Keys) |
| **Effort** | **High** (Copy-Paste prompts & code) | **Low** (Fully Automated) |
| **Setup** | None (Just `git clone`) | **Medium** (Docker + API Keys) |
| **Control** | Granular (You paste every file) | High (Review diffs before commit) |
| **Speed** | Slower (Human latency) | Fast (Machine speed) |

---

## 1. Manual Mode (The "Vibe Coding" Plus)
*Best for: Zero-cost projects, learning the protocol, or environments without Docker.*

In Manual Mode, you act as the "human router."
1.  **Forge** generates a prompt (e.g., `prompts/ultra-lean/02_system.md`).
2.  **You** copy it to a web LLM (Gemini Advanced, ChatGPT Plus).
3.  **LLM** generates the artifact (Markdown/Code).
4.  **You** copy the result back into the project.

**Pros:**
*   Free (uses your existing web subscriptions).
*   No local infrastructure required.
*   Total visibility into every character generated.

**Cons:**
*   Tedious copy-pasting.
*   Prone to "drift" if you skip validation steps.

---

## 2. Agent Mode (The "Autopilot")
*Best for: Rapid prototyping, professional dev teams, and "getting it done."*

In Agent Mode, a local **Dockerized Daemon** acts as the router.
1.  **Forge** sends the prompt directly to the LLM API (Gemini Pro, GPT-4o).
2.  **Agent** receives the response, validates it, and applies it to the file system.
3.  **Agent** runs the validator and fixes issues automatically.
4.  **You** simply review the final PR/Diff.

**Pros:**
*   **Zero Friction:** "Idea -> Code" with one command.
*   **Higher Rigor:** Automated validation and lockfile synchronization.
*   **Scalable:** Can regenerate the entire project in minutes.

**Cons:**
*   **API Costs:** You pay per token. A full Ultra-Lean project might cost $0.50 - $2.00 depending on the model.
*   **Prerequisites:** Requires Docker Desktop and API Keys.

---

## Prerequisites for Agent Mode

To use Agent Mode, you must have:

1.  **Docker Desktop** (or a Docker engine) installed and running.
    *   *Why?* The agent runs in a sandboxed container to ensure it never accidentally damages your system outside the repo.
2.  **API Keys** for a supported provider:
    *   Google Gemini API Key
    *   OpenAI API Key
    *   Anthropic API Key

## How to Choose

When you run `./forge.sh start`, the kickoff wizard will ask:

```text
? Select Execution Mode:
> Manual (Copy-Paste Prompts) - Free, no setup
  Agent  (Automated Daemon)   - Requires Docker + API Keys
```

You can switch modes at any time. Manual mode is always available as a fallback.
