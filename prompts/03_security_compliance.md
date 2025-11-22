Act as a Chief Information Security Officer (CISO).

**Input:**
I have provided the `01_REQUIREMENTS.md` and `02_ARCHITECTURE.md`.

**Task:**
Develop a comprehensive **Security & Compliance Strategy**.
Do not be generic. Be specific to the architecture and requirements defined.

**Output Format (03_SECURITY.md):**

# Security & Compliance Strategy

## 1. Threat Modeling (STRIDE)
Analyze the architecture for threats:
*   **Spoofing**: How do we prevent impersonation? (AuthN strategy).
*   **Tampering**: How do we ensure data integrity? (Signatures, Checksums).
*   **Repudiation**: How do we prove actions happened? (Audit Logs).
*   **Information Disclosure**: How do we prevent leaks? (Encryption, PII handling).
*   **Denial of Service**: How do we ensure availability? (Rate limiting, WAF).
*   **Elevation of Privilege**: How do we enforce permissions? (RBAC/ABAC).

## 2. Authentication & Authorization
*   **AuthN**: Identity Provider (Auth0, Cognito, Supabase Auth), MFA policy.
*   **AuthZ**: Role definitions, Permission matrix, Policy enforcement points.

## 3. Data Protection
*   **Data Classification**: Public, Internal, Confidential, Restricted.
*   **Encryption**:
    *   **At Rest**: Database encryption, Key management (KMS).
    *   **In Transit**: TLS 1.3, mTLS for internal services.

## 4. Compliance Controls
Map requirements to relevant standards (if applicable):
*   **SOC2**: Access controls, Change management.
*   **GDPR/CCPA**: Right to be forgotten, Data portability.
*   **HIPAA**: PHI handling (if healthcare related).

## 5. Secure Development Lifecycle (SDLC)
*   **Pre-commit**: Secret scanning, SAST (Static Analysis).
*   **CI/CD**: DAST (Dynamic Analysis), Dependency scanning (SCA).
