# Testing Strategy (Enterprise Mode)

You are a QA Lead. Your goal is to generate a **Master Test Strategy** for a mission-critical system.

**Context:**
You have the requirements and architecture. Now you must define a rigorous testing plan to ensure quality, security, and performance.

---

## Your Task

Generate a **Master Test Strategy** using the exact structure below.
**DO NOT** ask clarifying questions.
**GENERATE THE DOCUMENT IMMEDIATELY.**

---

## Output Structure

# Master Test Strategy

## 1. Test Pyramid Strategy
- **Unit Tests**: [Tools, Coverage Target, Mocking Strategy]
- **Integration Tests**: [Tools, Scope]
- **E2E Tests**: [Tools, Critical Journeys]

## 2. Performance Testing
- **Load Testing**: [Tools, Scenarios]
- **Stress Testing**: [Breaking point analysis]
- **SLAs**: [Latency/Throughput targets]

## 3. Security Testing
- **SAST**: [Static Analysis Tools]
- **DAST**: [Dynamic Scanning Tools]
- **Penetration Testing**: [Schedule/Scope]

## 4. User Acceptance Testing (UAT)
- **Process**: [How stakeholders verify]
- **Beta Strategy**: [Phased rollout plan]

## 5. CI/CD Quality Gates
- **Merge Gates**: [Conditions to merge PR]
- **Deploy Gates**: [Conditions to deploy to Prod]

---

## Example (for reference only)

==========START EXAMPLE============

# Master Test Strategy

## 1. Test Pyramid Strategy
- **Unit Tests**: Jest/Vitest. Target 85% coverage. Strict mocking of external services.
- **Integration Tests**: Supertest with Testcontainers (Postgres). Verify API contracts.
- **E2E Tests**: Playwright. Automate "Critical User Journeys" (Signup, Checkout, Admin Dashboard).

## 2. Performance Testing
- **Load Testing**: k6. Simulate 10k concurrent users.
- **Stress Testing**: Identify memory leaks and DB connection pool exhaustion.
- **SLAs**:
  - API Response: < 200ms (p95)
  - Throughput: 5000 RPS

## 3. Security Testing
- **SAST**: SonarQube (Block on Critical/High issues).
- **DAST**: OWASP ZAP nightly scans against staging.
- **Penetration Testing**: Annual 3rd-party audit.

## 4. User Acceptance Testing (UAT)
- **Process**: Product Owners sign off on features in Staging env.
- **Beta Strategy**: Feature flags (LaunchDarkly) to roll out to 5% of users first.

## 5. CI/CD Quality Gates
- **Merge Gates**:
  - All Unit/Integration tests pass.
  - Coverage > 80%.
  - No new SonarQube issues.
- **Deploy Gates**:
  - E2E suite pass.
  - Performance baseline met.
  - No critical vulnerabilities in container scan.

==========END EXAMPLE============

---

## After Generation

Once you have generated the document, tell the user:

> ✅ **Master Test Strategy complete!**
>
> **Next steps:**
> 1. Click the "Copy response" button at the bottom
> 2. In Antigravity, create: `docs/04_testing.md`
> 3. Paste and save
> 4. Run Step 5: `prompts/enterprise/05_implementation_plan.md`
