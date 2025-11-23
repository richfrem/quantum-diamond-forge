# Security & Compliance Strategy (Enterprise Mode)

You are a Chief Information Security Officer (CISO). Your goal is to generate a **Comprehensive Security Strategy** for the system.

**Context:**
You have the requirements and architecture. Now you must identify threats and define controls to mitigate them.

---

## Your Task

Generate a **Security Strategy Document** using the exact structure below.
**DO NOT** ask clarifying questions.
**GENERATE THE DOCUMENT IMMEDIATELY.**

---

## Output Structure

# Security & Compliance Strategy

## 1. Threat Modeling (STRIDE)
- **Spoofing**: [Mitigation]
- **Tampering**: [Mitigation]
- **Repudiation**: [Mitigation]
- **Information Disclosure**: [Mitigation]
- **Denial of Service**: [Mitigation]
- **Elevation of Privilege**: [Mitigation]

## 2. Authentication & Authorization
- **Identity Provider**: [e.g. Auth0]
- **MFA Policy**: [Enforcement rules]
- **RBAC Model**: [Roles and Permissions]

## 3. Data Protection
- **Classification**: [Public/Confidential/Restricted]
- **Encryption at Rest**: [Strategy]
- **Encryption in Transit**: [Strategy]

## 4. Compliance Controls
- **[Standard, e.g. GDPR]**: [Controls]
- **[Standard, e.g. SOC2]**: [Controls]

## 5. Secure SDLC
- **SAST/DAST**: [Tools]
- **Secret Scanning**: [Strategy]
- **Dependency Management**: [Strategy]

---

## Example (for reference only)

==========START EXAMPLE============

# Security & Compliance Strategy

## 1. Threat Modeling (STRIDE)
- **Spoofing**: Enforce MFA for all admins; strict JWT validation.
- **Tampering**: Immutable audit logs; signed API requests.
- **Repudiation**: Centralized logging to Write-Once-Read-Many (WORM) storage.
- **Information Disclosure**: Client-side encryption; PII masking in logs.
- **Denial of Service**: Cloudflare WAF; API rate limiting per IP.
- **Elevation of Privilege**: Zero Trust architecture; strict RBAC.

## 2. Authentication & Authorization
- **Identity Provider**: Auth0 with OIDC.
- **MFA Policy**: Mandatory for all write access.
- **RBAC Model**:
  - `Viewer`: Read-only.
  - `Editor`: Create/Update files.
  - `Admin`: Manage users and policies.

## 3. Data Protection
- **Classification**:
  - `Public`: Marketing assets.
  - `Restricted`: User uploaded files (Highest sensitivity).
- **Encryption at Rest**: AES-256 via AWS KMS.
- **Encryption in Transit**: TLS 1.3 enforced.

## 4. Compliance Controls
- **GDPR**:
  - "Right to be Forgotten" API endpoint implemented.
  - Data residency controls (EU region pinning).
- **SOC2**:
  - Change management via PRs with mandatory reviews.
  - Quarterly access reviews.

## 5. Secure SDLC
- **SAST**: SonarQube in CI pipeline.
- **Secret Scanning**: GitGuardian pre-commit hooks.
- **Dependency Management**: Snyk daily scans.

==========END EXAMPLE============

---

## After Generation

Once you have generated the document, tell the user:

> ✅ **Security Strategy complete!**
>
> **Next steps:**
> 1. Click the "Copy response" button at the bottom
> 2. In Antigravity, create: `docs/03_security.md`
> 3. Paste and save
> 4. Run Step 4: `prompts/enterprise/04_testing_strategy.md`
