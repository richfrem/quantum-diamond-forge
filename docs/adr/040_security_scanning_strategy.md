# ADR-040: Security Scanning Strategy (Shift Left Security)

**Status:** proposed
**Date:** 2025-11-21
**Deciders:** Gemini 3 "Antigravity"
**Technical Story:** Production Hardening - TASK-0067
**Related Documents:** `docs/ci-cd/README.md`, `adrs/039_ci_cd_pipeline.md`

---

## Context

Modern applications face constant security threats from vulnerable dependencies, code vulnerabilities, and accidentally committed secrets. Traditional security approaches that only scan at deployment time are too late - issues are expensive to fix and may have already been exposed.

We need a **shift-left security** approach that catches vulnerabilities as early as possible in the development lifecycle, ideally before code is even committed.

## Decision

We will implement a **multi-layered security scanning strategy** integrated into our development workflow:

### Layer 1: Local Development (Pre-Commit)

**Tools:**
-   **npm audit:** Check for known vulnerabilities in dependencies
-   **git-secrets (optional):** Prevent committing secrets locally

**Integration:**
-   Documented in developer workflow (`docs/ci-cd/README.md`)
-   Encouraged but not enforced (developer discipline)
-   Future: Consider pre-commit hooks for enforcement

**Rationale:** Catching security issues locally is the fastest feedback loop and prevents them from ever entering the codebase.

### Layer 2: GitHub Advanced Security (Automated)

**Tools:**

1.  **Dependabot**
    -   **Purpose:** Automated dependency vulnerability scanning and updates
    -   **Configuration:** `.github/dependabot.yml`
    -   **Behavior:**
        -   Scans npm dependencies weekly
        -   Opens PRs for vulnerable or outdated packages
        -   Provides severity ratings and remediation advice
    -   **Rationale:** Keeps dependencies up-to-date and secure with minimal manual effort

2.  **Secret Scanning**
    -   **Purpose:** Detect committed secrets (API keys, tokens, passwords)
    -   **Configuration:** Enabled in repository settings
    -   **Behavior:**
        -   Scans all commits for known secret patterns
        -   Alerts in PR interface and Security tab
        -   Optional: Push protection to block commits with secrets
    -   **Rationale:** Prevents credential leaks that could lead to unauthorized access

3.  **CodeQL**
    -   **Purpose:** Static code analysis for security vulnerabilities
    -   **Configuration:** `.github/workflows/codeql.yml`
    -   **Languages:** JavaScript, TypeScript
    -   **Behavior:**
        -   Runs on PRs and pushes to `main`
        -   Detects common vulnerabilities (SQL injection, XSS, etc.)
        -   Reports results in PR checks and Security tab
    -   **Rationale:** Catches code-level security flaws that manual review might miss

### Integration with CI/CD

As documented in `docs/ci-cd/README.md`, security scans run **in parallel** with the CI pipeline:
-   CI Pipeline: Linting, Testing, Building
-   Security Checks: Dependabot, Secret Scanning, CodeQL

Both must pass before a PR can be merged (with branch protection enabled).

## Consequences

### Positive
-   **Early Detection:** Security issues caught before reaching production
-   **Automated Updates:** Dependabot reduces manual dependency management
-   **Compliance:** Demonstrates security due diligence for audits
-   **Developer Awareness:** Security feedback in PR interface educates developers
-   **Reduced Risk:** Multiple layers of defense against common vulnerabilities

### Negative
-   **Alert Fatigue:** May generate many alerts, especially initially
-   **False Positives:** Some alerts may not be relevant to our context
-   **Maintenance Overhead:** Dependabot PRs require review and testing
-   **License Cost:** CodeQL and Secret Scanning may require GitHub Advanced Security license for private repos

### Risks
-   **Ignored Alerts:** Developers may ignore security warnings if overwhelmed
    -   **Mitigation:** Triage alerts, document response process, set SLAs
-   **Breaking Changes:** Dependabot updates may introduce breaking changes
    -   **Mitigation:** Automated tests catch issues, staged rollout
-   **Secret Scanning Gaps:** May not catch all secret formats
    -   **Mitigation:** Combine with local tooling, developer education

## Alternatives Considered

1.  **Snyk:** Third-party security scanning service
    -   **Pros:** More comprehensive, better UI
    -   **Cons:** Additional cost, external dependency
    -   **Decision:** GitHub Advanced Security is sufficient for our current needs

2.  **SonarQube:** Self-hosted code quality and security platform
    -   **Pros:** Comprehensive analysis, customizable rules
    -   **Cons:** Infrastructure overhead, maintenance burden
    -   **Decision:** GitHub Actions integration is simpler

3.  **Manual Security Reviews:** Rely on code review for security
    -   **Pros:** No tooling cost
    -   **Cons:** Inconsistent, doesn't scale, misses known vulnerabilities
    -   **Decision:** Automated scanning is essential baseline

4.  **No Secret Scanning:** Rely on developer discipline
    -   **Pros:** No configuration needed
    -   **Cons:** High risk of credential leaks
    -   **Decision:** Unacceptable risk for production system

## Implementation Plan

See TASK-0067 for detailed implementation steps.

## Success Metrics

-   **Coverage:** All PRs scanned before merge
-   **Response Time:** Security alerts triaged within 48 hours
-   **Vulnerability Age:** No high/critical vulnerabilities older than 30 days
-   **Secret Leaks:** Zero secrets committed to main branch
-   **Developer Adoption:** >80% of developers run `npm audit` locally

## References

-   [GitHub Advanced Security Documentation](https://docs.github.com/en/code-security)
-   [OWASP Top 10](https://owasp.org/www-project-top-ten/)
-   [Shift Left Security Principles](https://www.devsecops.org/)
