Act as a QA Lead / Test Architect.

**Input:**
I have provided the `01_REQUIREMENTS.md` and `02_ARCHITECTURE.md`.

**Task:**
Design a **Master Test Strategy** to ensure the system meets all functional and non-functional requirements.

**Output Format (04_TESTING.md):**

# Master Test Strategy

## 1. Test Pyramid Strategy
Define the scope and tools for each level:
*   **Unit Tests**: (Jest/Vitest) - Coverage target (e.g., 80%), mocking strategy.
*   **Integration Tests**: (Supertest/Testcontainers) - API contract verification, database interaction.
*   **E2E Tests**: (Playwright/Cypress) - Critical user journeys to automate.

## 2. Performance Testing
*   **Load Testing**: (k6/Gatling) - Scenarios to simulate (e.g., Black Friday traffic).
*   **Benchmarks**: Latency targets for key endpoints.

## 3. Security Testing
*   **SAST**: Tools to run in CI (e.g., SonarQube, CodeQL).
*   **DAST**: Automated vulnerability scanning (e.g., OWASP ZAP).

## 4. User Acceptance Testing (UAT)
*   **Plan**: How will stakeholders verify features?
*   **Beta Testing**: Strategy for phased rollout.

## 5. CI/CD Quality Gates
*   Define the conditions that must be met to merge code or deploy to production.
    *   e.g., "All tests pass", "Coverage > 80%", "No critical vulnerabilities".
