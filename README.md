# Quantum Diamond Forge 💎

**The Universal Base for AI-Native Development.**

[![CI](https://github.com/richfrem/quantum-diamond-forge/actions/workflows/ci.yml/badge.svg)](https://github.com/richfrem/quantum-diamond-forge/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> "Don't prompt the ocean; build the aqueduct."

The **Quantum Diamond Forge** is a protocol and scaffolding engine designed to operationalize "Rigour at Speed." It orchestrates AI agents (ChatGPT, Gemini, Claude) to build software that is **Secure by Design**, **Operationally Mature**, and **Production Ready** from Day 1.

## 🚀 Why?

Most AI-generated code is "Prototype Plus"—functional but fragile. It lacks:
*   **Security:** Rate limiting, input validation, headers.
*   **Ops:** Logging, health checks, Dockerfiles.
*   **Structure:** Consistent architecture and testing patterns.

The Forge solves this by providing a **Universal Base** of prompts, templates, and validation scripts that enforce quality gates at every step.

## 🛠️ Features

*   **Protocol-Driven Workflow:** A 5-step granular process (Spec → Blueprint → Design → Scaffold → Code).
*   **Expert Council:** Specialized AI personas (Architect, DevOps, Security) for deep-dive tasks.
*   **Automated Governance:** Built-in ADRs, Task Management, and Git Hooks.
*   **Defense in Depth:** Pre-configured security headers, Zod validation, and drift detection.

## ⚡ Quick Start

1.  **Clone the Forge:**
    ```bash
    git clone https://github.com/richfrem/quantum-diamond-forge.git
    cd quantum-diamond-forge
    ```

2.  **Initialize a New Project:**
    ```bash
    ./forge.sh init my-new-app
    cd my-new-app
    ```

3.  **Start the Protocol:**
    ```bash
    ./forge.sh start
    ```
    *This copies the "Interactive Kickoff" prompt to your clipboard. Paste it into Gemini 1.5 Pro to begin.*

## 📚 Documentation

*   **[The Guide (Start Here)](GUIDE.md)**: The complete manual for the protocol.
*   **[CI/CD & Workflow](guides/cicd/overview.md)**: How to ship code securely.
*   **[Expert Roles](prompts/roles/)**: Browse the specialized personas.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
