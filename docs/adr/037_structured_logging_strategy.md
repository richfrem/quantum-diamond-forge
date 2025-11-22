# ADR-037: Structured Logging Strategy

**Status:** accepted
**Date:** 2025-11-21
**Deciders:** Gemini 3 "Antigravity"
**Technical Story:** Production Hardening

---

## Context

The application relied on ad-hoc `console.log`, `console.error`, and a simple wrapper in `src/lib/logger.js`. This resulted in unstructured text logs that are hard to parse, filter, and monitor in a production environment. There was no standard for log levels or formats.

## Decision

We will use **Winston** as the standard logging library for the backend.

-   **Library:** `winston`
-   **Format:** JSON in production (for ingestion), Colorized/Simple in development (for readability).
-   **Location:** Canonical logger instance in `packages/backend/api/utils/logger.js`.
-   **Legacy Support:** `packages/backend/src/lib/logger.js` is retained as a wrapper to support existing code without massive refactoring, mapping `.log()` to `.info()`.

## Consequences

### Positive
-   **Observability:** Logs are now structured JSON, including timestamps and severity levels.
-   **Consistency:** All parts of the app use the same logger configuration.
-   **Flexibility:** Transports can be easily added (e.g., to Datadog, CloudWatch) without changing application code.

### Negative
-   **Complexity:** Slightly more complex than `console.log`.
-   **Dependency:** Adds `winston` as a runtime dependency.

### Risks
-   **Performance:** Excessive logging can impact performance, but Winston is generally performant.
-   **Mitigation:** Use appropriate log levels (INFO/ERROR) and avoid logging sensitive data.
