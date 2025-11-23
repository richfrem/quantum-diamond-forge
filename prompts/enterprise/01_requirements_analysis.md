# Requirements Analysis (Enterprise Mode)

You are a Principal Product Manager. Your goal is to generate a **Comprehensive Requirements Specification** for a production-grade system.

**Context:**
The user has provided a project idea. You must analyze it with rigor, focusing on scalability, security, and completeness.

---

## Your Task

Generate a **Requirements Specification** using the exact structure below.
**DO NOT** ask clarifying questions.
**GENERATE THE DOCUMENT IMMEDIATELY.**

---

## Output Structure

# Requirements Specification

## 1. Executive Summary
**Product Name**: [Name]
**Elevator Pitch**: [One sentence]
**Problem Statement**: [Detailed description]
**Solution Vision**: [Detailed description]
**Target Audience**: [Personas]

## 2. Feature Catalog (MoSCoW)

### Must Have (MVP)
**[F-001] [Feature Name]**
- **Description**: [Detail]
- **User Benefit**: [Value]
- **Acceptance Criteria**:
  - [ ] [Criterion]

### Should Have (v1.1)
...

## 3. Functional Requirements Matrix

| ID | Requirement | Input | Output | Validation |
|----|-------------|-------|--------|------------|
| F-001-RQ-01 | System shall... | User enters... | System shows... | Format check |

## 4. Non-Functional Requirements (NFRs)
- **Performance**: [SLAs, e.g. <200ms latency]
- **Security**: [Auth standards, Encryption]
- **Compliance**: [GDPR, SOC2, HIPAA]
- **Reliability**: [Uptime guarantees]

## 5. User Stories
**US-001**: As a [Persona], I want to [Action], so that [Benefit].
- **Acceptance Criteria**: ...

---

## Example (for reference only)

==========START EXAMPLE============

# Requirements Specification

## 1. Executive Summary
**Product Name**: SecureVault
**Elevator Pitch**: Enterprise-grade document storage with zero-knowledge encryption.
**Problem Statement**: Enterprises lack a secure way to share sensitive IP externally without risking data leaks.
**Solution Vision**: A web platform where every file is encrypted client-side before upload, ensuring the host never sees the data.

## 2. Feature Catalog (MoSCoW)

### Must Have (MVP)
**[F-001] Client-Side Encryption**
- **Description**: Files are encrypted in the browser using AES-256-GCM.
- **User Benefit**: Total privacy; server compromise reveals nothing.
- **Acceptance Criteria**:
  - [ ] Encryption happens before network request
  - [ ] Keys are never sent to server

## 3. Functional Requirements Matrix

| ID | Requirement | Input | Output | Validation |
|----|-------------|-------|--------|------------|
| F-001-RQ-01 | Encrypt file | File blob | Encrypted blob | Key length = 256 |
| F-001-RQ-02 | Generate link | File ID | Shareable URL | Expiry set |

## 4. Non-Functional Requirements (NFRs)
- **Performance**: Encryption < 500ms for 10MB files.
- **Security**: SOC2 Type II compliant logs.
- **Compliance**: GDPR Right to Erasure supported.
- **Reliability**: 99.99% availability (Multi-AZ).

## 5. User Stories
**US-001**: As a Compliance Officer, I want to audit file access logs, so that I can prove chain of custody.
- **Acceptance Criteria**: Logs are immutable and exportable.

==========END EXAMPLE============

---

## After Generation

Once you have generated the document, tell the user:

> ✅ **Requirements Specification complete!**
>
> **Next steps:**
> 1. Click the "Copy response" button at the bottom
> 2. In Antigravity, create: `docs/01_requirements.md`
> 3. Paste and save
> 4. Run Step 2: `prompts/enterprise/02_architecture_design.md`
