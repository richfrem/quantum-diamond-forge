# ADR-039: CI/CD Pipeline Strategy

**Status:** accepted
**Date:** 2025-11-21
**Deciders:** Gemini 3 "Antigravity"
**Technical Story:** Production Hardening
**Related Documents:** `docs/ci-cd/README.md`, `.github/workflows/ci.yml`

---

## Context

The project lacked automated verification. Code quality relied on manual testing and individual developer discipline. There was no guarantee that the `main` branch was always in a deployable state. Additionally, there was no systematic approach to catching issues early in the development lifecycle.

## Decision

We will implement a **multi-layered CI/CD strategy** using GitHub Actions, following the "shift left" philosophy to catch issues as early as possible.

### Layer 1: Local Development (Shift Left)

Developers are encouraged to run verification steps **before pushing**:
-   **Linting:** `npm run lint` to catch style and syntax errors
-   **Unit Tests:** `npm run test:unit` to verify logic
-   **Security Scanning:** `npm audit` to identify vulnerable dependencies
-   **Manual Testing:** `npm run dev` for functional verification

**Rationale:** Catching issues locally is faster and cheaper than waiting for CI feedback. This reduces CI queue times and provides immediate feedback.

### Layer 2: Automated CI Pipeline (GitHub Actions)

-   **Workflow:** `.github/workflows/ci.yml` triggers on pushes to `main` and all Pull Requests.
-   **Jobs:**
    -   **Validate:** Runs on `ubuntu-latest`.
        -   Checkout code (actions/checkout@v4)
        -   Setup Node.js v20 with npm caching (actions/setup-node@v4)
        -   Install dependencies (`npm ci`)
        -   Run Linting (`npm run lint`)
        -   Run Unit Tests (`npm run test:unit`)
        -   Build Frontend (`npm run build`)

**Rationale for GitHub Actions:**
-   **Integration:** Tightly integrated with our repository hosting
-   **Simplicity:** No external service configuration required
-   **Cost:** Free tier sufficient for our scale
-   **Speed:** Fast execution with caching, parallelizable jobs (future optimization)

### Layer 3: Security Scanning (Planned - TASK-0067)

Automated security checks will run in parallel with CI:
-   **Dependabot:** Dependency vulnerability scanning
-   **CodeQL:** Static code analysis for security flaws
-   **Secret Scanning:** Detection of committed secrets

These are documented separately in ADR-040.

## Consequences

### Positive
-   **Quality Gate:** Code cannot be merged (with branch protection) without passing tests and linting
-   **Shift Left:** Issues are caught earlier in the development cycle
-   **Feedback Loop:** Developers get immediate feedback on their commits
-   **Confidence:** Reduces the risk of regressions reaching production
-   **Documentation:** Complete workflow documented in `docs/ci-cd/README.md` with Mermaid diagram

### Negative
-   **Developer Discipline Required:** Local verification is encouraged but not enforced
-   **Maintenance:** The workflow file needs to be maintained as tooling changes
-   **False Positives:** Flaky tests can block development (requires fixing the tests)
-   **Learning Curve:** Developers must understand the workflow and local tooling

### Risks
-   **Cost:** GitHub Actions has free tier limits (2,000 minutes/month for private repos)
-   **Mitigation:** Monitor usage, optimize workflow efficiency
-   **Skipped Local Checks:** Developers may skip local verification and rely solely on CI
-   **Mitigation:** Document best practices, consider pre-commit hooks (future enhancement)

## Alternatives Considered

1.  **Jenkins:** Self-hosted, more configuration overhead, requires infrastructure management
2.  **CircleCI:** External service, additional account management, similar features
3.  **GitLab CI:** Would require migrating repository hosting
4.  **No CI:** Rejected - unacceptable risk for production system

## Implementation Notes

-   **Branch Protection:** Should be enabled on `main` to require CI passing before merge
-   **Caching:** npm caching is enabled to speed up dependency installation
-   **Future Enhancements:**
    -   Add E2E tests to pipeline
    -   Implement CD (deployment) jobs
    -   Add pre-commit hooks for local enforcement
