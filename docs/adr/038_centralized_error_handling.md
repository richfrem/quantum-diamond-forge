# ADR-038: Centralized Error Handling Strategy

**Status:** accepted
**Date:** 2025-11-21
**Deciders:** Gemini 3 "Antigravity"
**Technical Story:** Production Hardening

---

## Context

The application lacked a consistent error handling strategy. Errors were often handled ad-hoc with `console.error` and inconsistent response formats. Unhandled exceptions could crash the server silently or leak stack traces in production.

## Decision

We will implement a **Centralized Error Handling** mechanism.

-   **AppError Class:** A custom `AppError` class extends the built-in `Error` to distinguish between operational (trusted) errors and programming bugs. It includes `statusCode` and `status` properties.
-   **Global Middleware:** A single middleware function in `packages/backend/api/middleware/errorMiddleware.js` handles all errors.
    -   **Development:** Returns full error details and stack traces.
    -   **Production:** Returns generic messages for unknown errors to prevent information leakage, but specific messages for operational `AppError`s.
-   **Async Wrapper:** A `catchAsync` utility wraps async route handlers to automatically catch promise rejections and pass them to the global error handler, eliminating `try/catch` boilerplate.
-   **Process Safety:** `uncaughtException` and `unhandledRejection` listeners in `start.js` ensure the process logs the error and exits gracefully (allowing a process manager to restart it).

## Consequences

### Positive
-   **Consistency:** All API errors follow a standard JSON format `{ status, message }`.
-   **Security:** Stack traces are hidden in production.
-   **Reliability:** The application fails fast and logs critical errors instead of hanging or continuing in an unstable state.
-   **Developer Experience:** Reduced boilerplate in controllers.

### Negative
-   **Learning Curve:** Developers must remember to use `next(new AppError(...))` or the `catchAsync` wrapper.

### Risks
-   **Process Exit:** Exiting on error requires a process manager (like PM2 or Kubernetes) to restart the service. This is standard practice but requires correct infrastructure configuration.
