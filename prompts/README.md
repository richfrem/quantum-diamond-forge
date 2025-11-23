# Quantum Diamond Forge Prompts

This directory contains the prompt protocols for the Quantum Diamond Forge.

## Directory Structure

```text
prompts/
├── 00_interactive_kickoff.md  <-- ENTRY POINT (Run ./forge.sh start)
├── ultra-lean/                <-- "Weekend Prototype" Mode (5 prompts)
├── lean/                      <-- "MVP / Startup" Mode (4 prompts)
├── enterprise/                <-- "Mission Critical" Mode (5 prompts)
└── modules/                   <-- Reusable prompt components
```

## How to Use

The recommended way to start is using the CLI:

```bash
./forge.sh start
```

This will copy the **Interactive Kickoff** prompt to your clipboard. Paste it into your LLM (Gemini, ChatGPT, Claude) to begin the interview process. The LLM will then guide you to the correct mode and next steps.

## Modes Explained

### ⚡ Ultra-Lean Mode
**Best for:** Hackathons, Weekend Projects, Proof of Concepts.
**Artifacts:**
1. `00_overview.md` - Product Overview
2. `01_features.md` - Core Features
3. `02_system.md` - System Diagram
4. `03_api.md` - API Sketch
5. `04_plan.md` - Build Plan

### 🏃 Lean Mode
**Best for:** MVPs, Solo Founders, Internal Tools.
**Artifacts:**
1. `01_requirements.md` - Requirements Analysis
2. `02_architecture.md` - Architecture Design
3. `04_testing.md` - Testing Strategy
4. `05_plan.md` - Implementation Plan
*(Note: Skips Security doc for speed)*

### 🏢 Enterprise Mode
**Best for:** Production Systems, Large Teams, Regulated Industries.
**Artifacts:**
1. `01_requirements.md` - Comprehensive Requirements
2. `02_architecture.md` - Technical Blueprint (C4 L1-L2)
3. `03_security.md` - Security & Compliance Strategy
4. `04_testing.md` - Master Test Strategy
5. `05_plan.md` - Detailed Implementation Plan
