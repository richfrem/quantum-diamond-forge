# The Quantum Diamond Forge Guide

**Status:** v20 (The "Universal Base" Edition)
**Philosophy:** "Don't prompt the ocean; build the aqueduct."

---

## 1. Introduction: Beyond "Vibe Coding"

We live in the age of **"Vibe Coding"**—where a single prompt can generate a stunning, functional app in seconds. It's magical. It captures the *idea*.

**But what happens next?**

Most AI-generated apps are "Prototype Plus"—functional but fragile. They look great but often lack the rigor required for the real world:
*   **Security Gaps:** Missing rate limiting, weak input validation, permissive CORS.
*   **Operational Fragility:** No structured logging, basic health checks, no observability.
*   **Maintenance Nightmares:** Ad-hoc patterns, no testing strategy, no architectural documentation.

### The Antigravity Solution
The **Quantum Diamond Forge** is the answer to this fragility. Built upon the principles of the [Quantum Diamond Framework](https://medium.com/@rfremmer_30873/beyond-the-double-diamond-design-process-a-new-framework-for-the-ai-age-the-quantum-diamond-980fe3f89319), this protocol operationalizes "Rigour at Speed."

It is not just a set of prompts; it is a **Universal Base** for orchestrating multiple AI agents to build software that is **Secure by Design**, **Operationally Mature**, and **Production Ready** from Day 1.

It addresses the common critiques of AI code (like those found in an [Antigravity Audit](#)) by enforcing:
*   **Strict Contracts:** Zod schemas for every input.
*   **Defense in Depth:** Helmet, Rate Limiting, and RBAC baked in.
*   **Observability:** Structured logging with Correlation IDs.
*   **Testing Pyramids:** Unit, Integration, and E2E tests as first-class citizens.

---

## 2. The Mental Model

1.  **The General (You + Local Agent):** You operate *locally*, inside this repository.
2.  **The Specialists (Web AIs):** ChatGPT (o1/4o) and Gemini ( Pro) are your high-IQ consultants for "Precision Strikes".
3.  **The Expert Council:** A library of specialized personas (Architect, DevOps, Security) you can summon for deep-dive tasks.
4.  **The Shared Brain (The Repo):** This repository is the source of truth. It comes pre-loaded with **Governance** (ADRs), **Task Management**, and **Validation Scripts**.

---

## 3. Choose Your Mode

The Forge offers three tracks to match your project needs. Choose the one that fits your timeline and rigor requirements.

### ⚡ Ultra-Lean Mode (Rapid Prototypes)
**Best for**: Weekend projects, hackathons, quick experiments
- **Time to Spec**: ~30 minutes
- **Artifacts**: 5 docs
- **Start here**: `prompts/00_MASTER_PROTOCOL_ULTRA_LEAN.md`

### 🏃 Lean Mode (Solo Devs & MVPs)
**Best for**: Prototypes, MVPs, solo developers, small teams
- **Time to Spec**: ~1 hour
- **Artifacts**: ~10 docs
- **Start here**: `prompts/00_MASTER_PROTOCOL_LEAN.md`

### 🏢 Enterprise Mode (Production Apps)
**Best for**: Production apps, teams, compliance-heavy projects
- **Time to Spec**: ~4-6 hours
- **Artifacts**: 25+ docs
- **Start here**: `prompts/00_MASTER_PROTOCOL.md`

---

## 4. The Workflow

### Conceptual Overview
This is how the entire system works from a developer's perspective.

```mermaid
flowchart TB
    Start([Developer with Idea]) -->|Get Source| Clone[Clone Quantum Diamond Forge]
    Clone -->|Launch| IDE[Open in Antigravity IDE]

    %% --- Orchestration ---
    subgraph Orchestration [Orchestration - Human-in-the-Loop]
        IDE -->|execute script| Kickoff[Run ./forge.sh start]
        Kickoff -->|copy and paste<br>prompt into gemini llm web| Mode{"Choose Mode e.g. <br>Ultra-lean, <br>Lean,<br>Enterprise"}
        Mode -->|Start Iteration| Loop["Specification Loop"]
    end

    %% --- Web LLM ---
    subgraph WebTools [Web LLM - The Heavy Lifter]
        Gemini["Web LLM e.g. Gemini 3 Pro — Generates Specs"]
    end

    %% --- Local Execution ---
    subgraph LocalExecution [Local Project - The Build]
        Artifacts["docs/ Folder: Requirements, Architecture, Security, Testing, Implementation"]
        Agent["Antigravity Agent (The Builder)"]
        Code[Production Code]
    end

    %% Main Flow (parser-safe labels)
    Loop -->|Copy Prompts| Gemini
    Gemini -->|Generate Docs<br>and save in IDE project<br>docs folder| Artifacts

    Artifacts -->|Guide| Agent
    Agent -->|Write<br>generate<br>code| Code

    %% Feedback Loops
    Code -.->|Verify| Agent
    Agent -.->|Refine| Artifacts

    %% Final Output
    Code -->|Deploy| Done([Production-Ready Application])

    %% Styles
    style IDE fill:#dcfce7,stroke:#166534,stroke-width:3px
    style Done fill:#fef3c7,stroke:#d97706,stroke-width:3px
    style Artifacts fill:#dbeafe,stroke:#1e40af,stroke-width:2px
```

### High-Level Flow
This diagram shows the artifact generation pipeline and how the Expert Council integrates.

```mermaid
flowchart TB
    User["👤 You (Orchestrator)"] -- "1. Kickoff<br/>(./forge.sh start -> Paste to Gemini)" --> Mode{"Choose Mode"}
    Mode -- "Ultra-Lean" --> Ultra["⚡ 5 Artifacts"]
    Mode -- Lean --> Lean["🏃 10 Artifacts"]
    Mode -- Enterprise --> Ent["🏢 25+ Artifacts"]
    Ultra -- "2. Copy Prompts<br/>(./forge.sh prompt 1-5)" --> WebAI["🧠 Web LLM<br>Gemini 3/GPT5/Claude4.5/Grok4/etc"]
    Lean --> WebAI
    Ent --> WebAI
    WebAI -- "3. Generates" --> Docs["📂 docs/ + 🔐 locks/<br>1. Requirements<br>2. Architecture<br>3. Security<br>4. Testing<br>5. Plan"]
    Docs -- "4. Validate" --> Gate{"✅ Validator"}
    Gate -- Pass --> Agent["🤖 Antigravity Agent<br>(IDE)"]
    Gate -- Fail --> Docs
    Agent -- "5. Builds" --> Code["💻 Production Code"]
    Code -- Verify --> Tests{"✓ Tests"}
    Tests -- Pass --> Done["✅ Production Ready"]
    Tests -- Fail --> Agent

    style Docs fill:#dbeafe,stroke:#1e40af,stroke-width:2px
    style Gate fill:#fcd34d,stroke:#d97706,stroke-width:2px
    style Agent fill:#fef3c7,stroke:#d97706,stroke-width:2px
    style Done fill:#dcfce7,stroke:#166534,stroke-width:2px
```

### Detailed Sequence
This diagram shows the exact step-by-step interaction between you, the CLI, and the AIs.

```mermaid
sequenceDiagram
    autonumber
    actor User as 👤 You (Orchestrator)
    participant Agent as 🤖 Antigravity IDE<BR> Agent
    participant CLI as 🛠️ Forge CLI
    participant WebAI as 🧠 Web LLM<BR>(Gemini/Grok/<BR>ChatGPT/Claude)
    participant Repo as 📂 Local Repo<BR>(docs/)

    Note over User, Repo: Phase 1: The Specification Loop
    
    Note over User, Agent: Phase 0: Initialization
    
    User->>Agent: "I have an idea..."
    Agent-->>User: "Let's start. Run ./forge.sh start"
    
    User->>CLI: ./forge.sh start (Kickoff)
    CLI-->>User: Interactive Interview -> Mode Selection<br/>(Ultra-Lean / Lean / Enterprise)
    
    Note over User, Repo: Step 1: Requirements
    User->>CLI: ./forge.sh prompt 1 (Requirements)
    User->>WebAI: Paste Prompt + Idea
    WebAI-->>User: Generates Feature Catalog
    User->>Repo: Save docs/01_requirements_analysis.md
    User->>CLI: ./forge.sh lock requirements
    CLI-->>Repo: Generates requirements.lock.json
    
    Note over User, Repo: Step 2: Architecture
    User->>CLI: ./forge.sh prompt 2 (Architecture)
    User->>WebAI: Paste Prompt + Requirements Lock
    WebAI-->>User: Generates C4 Diagrams
    User->>Repo: Save docs/02_architecture_design.md
    User->>CLI: ./forge.sh lock architecture
    CLI-->>Repo: Generates architecture.lock.json
    
    Note over User, Repo: Step 3: Security
    User->>CLI: ./forge.sh prompt 3 (Security)
    User->>WebAI: Paste Prompt + Architecture Lock
    WebAI-->>User: Generates Threat Model
    User->>Repo: Save docs/03_security_compliance.md
    User->>CLI: ./forge.sh lock security
    CLI-->>Repo: Generates security.lock.json
    
    Note over User, Repo: Step 4: Testing
    User->>CLI: ./forge.sh prompt 4 (Testing)
    User->>WebAI: Paste Prompt + Context
    WebAI-->>User: Generates Test Strategy
    User->>Repo: Save docs/04_testing_strategy.md
    User->>CLI: ./forge.sh lock testing
    CLI-->>Repo: Generates testing.lock.json
    
    Note over User, Repo: Step 5: Plan
    User->>CLI: ./forge.sh prompt 5 (Plan)
    User->>WebAI: Paste Prompt + Context
    WebAI-->>User: Generates Implementation Plan
    User->>Repo: Save docs/05_implementation_plan.md
    User->>CLI: ./forge.sh lock implementation
    CLI-->>Repo: Generates implementation.lock.json
    
    Note over User, Agent: Phase 2: The Build Loop
    
    User->>CLI: ./forge.sh validate
    CLI-->>User: ✅ All Checks Passed
    
    User->>Agent: Point to docs/locks/implementation.lock.json
    loop Antigravity Build Cycle
        Agent->>Repo: Read Lockfiles
        Agent->>Repo: Write Code
        Agent->>Repo: Run Tests
        Repo-->>Agent: Pass/Fail
    end
```

---

## 4. The Protocol Steps

### Step 0: Kickoff (The "Strategy")
**[👉 View Guide](guides/00_kickoff.md)**
*   **Goal:** Initialize strategy and get a personalized roadmap.
*   **Action:** Run `./forge.sh start` -> Paste to Gemini.
    *   *Note:* This launches the **Interactive Antigravity Guide**, which will interview you about your idea and create a tailored plan.

### Step 1: Requirements Analysis (The "What")
**[👉 View Guide](guides/01_requirements_analysis.md)**
*   **Goal:** Define the Narrative, Audience, and Core Features.
*   **Action:** Run `./forge.sh prompt 1` -> Paste to ChatGPT -> Save `docs/01_requirements_analysis.md`.

### Step 2: Architecture Design (The "How")
**[👉 View Guide](guides/02_architecture_design.md)**
*   **Goal:** Define the Architecture, Stack, and Security.
*   **Action:** Run `./forge.sh prompt 2` -> Paste to ChatGPT (with Requirements) -> Save `docs/02_architecture_design.md`.

### Step 3: Security Compliance (The "Shield")
*   **Goal:** Define the Security Model and Compliance Requirements.
*   **Action:** Run `./forge.sh prompt 3` -> Paste to ChatGPT (with Architecture) -> Save `docs/03_security_compliance.md`.

### Step 4: Testing Strategy (The "Proof")
*   **Goal:** Define the Test Plan and Quality Gates.
*   **Action:** Run `./forge.sh prompt 4` -> Paste to ChatGPT (with Security) -> Save `docs/04_testing_strategy.md`.

### Step 5: Implementation Plan (The "Build")
*   **Goal:** Create the step-by-step build plan.
*   **Action:** Run `./forge.sh prompt 5` -> Paste to IDE Agent -> Save `docs/05_implementation_plan.md`.

---

## 5. Project Management Tools (Built-in)

The Forge comes with local tools to manage your project's governance.

### Tasks
Manage your backlog with structured markdown files.
```bash
./forge.sh task "Implement User Auth"
# Creates TASKS/backlog/001_implement_user_auth.md
```

### ADRs (Architectural Decision Records)
Document your technical decisions.
```bash
./forge.sh adr "Use Supabase for Auth"
# Creates docs/adr/0001-use-supabase-for-auth.md
```

### Code Snapshots
Capture your codebase context for the Expert Council.
```bash
# Capture everything (default)
./forge.sh snap output.txt

# Capture only code files (great for LLM context)
./forge.sh snap code_only.txt --mode code

# Capture specific folders (e.g., for a specific feature)
./forge.sh snap feature_context.txt --folders src/components,src/hooks
```

### Git Hooks (Automated Guardrails)
The Forge installs pre-configured Git hooks to keep your repo clean.
*   **Pre-commit:**
    *   Prevents commits to `main` branch.
    *   Blocks large files (>50MB).
    *   Runs `validate_drift.ts` (if present) to ensure code matches blueprint.
*   **Commit-msg:**
    *   Enforces [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat: add login`).

### CI/CD & Workflow Guides
Detailed guides for setting up your pipeline and mastering the git workflow.
*   **[CI/CD Overview](guides/cicd/overview.md):** The big picture of how code moves from laptop to production.
*   **[GitHub Setup](guides/cicd/github_setup.md):** How to configure your repo for security and automation.
*   **[Git Workflow](guides/cicd/git_workflow.md):** Quick reference for branches, aliases, and commands.
*   **[How to Commit](guides/cicd/how_to_commit.md):** Step-by-step guide to passing the pre-commit hooks.
*   **[Security Scanning](guides/cicd/security_scanning.md):** Understanding and fixing vulnerability alerts.

### The Inbox Workflow
The `INBOX/` folder is your "Drop Zone" for AI collaboration.
1.  **Drop:** Drag messy notes, drafts, or external docs into `INBOX/`.
2.  **Prompt:** Tell the Agent "Check the Inbox."
3.  **Process:** The Agent will refactor, format, and move the files to their correct location (e.g., `docs/`, `TASKS/`).

---

## 6. The Expert Council (Specialized Roles)

Use these roles when you need deep expertise in a specific domain.

### How to Use
Run `./forge.sh role <role_name>` to copy the prompt.

*   **System Architect** (`architect`): Use for defining directory structures, ADRs, and technical constraints.
*   **Backend Developer** (`backend`): Use for implementing complex API logic, database schemas, and microservices.
*   **DevOps Engineer** (`devops`): Use for setting up CI/CD pipelines, Dockerfiles, and Infrastructure as Code.
*   **QA Engineer** (`qa`): Use for defining test strategies and writing E2E test suites.
*   **Security Auditor** (`security`): Use for threat modeling and security reviews.

---

## 7. Repository Deep Dive

*   `forge.sh`: The CLI tool.
*   `prompts/`: Core protocol prompts.
    *   `roles/`: The Expert Council prompts.
*   `guides/`: Detailed sub-guides.
*   `scripts/`: Automation tools (`new_task.sh`, `new_adr.sh`, `capture_snapshot.js`).
*   `templates/`: Source templates for artifacts.
*   `TASKS/`: Your project backlog.
*   `docs/adr/`: Your decision log.
