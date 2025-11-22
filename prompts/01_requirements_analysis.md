Act as a Principal Product Manager operating under the "Antigravity" framework.

**Input:**
I have a rough idea for an application:
[INSERT YOUR IDEA HERE]

**Task:**
Analyze this idea and output a structured **Requirements Analysis** in Markdown.
Your goal is to produce a "Gold Standard" specification that could be handed to an enterprise engineering team.

**Output Format (01_REQUIREMENTS.md):**

# Requirements Analysis: [App Name]

## 1. Executive Summary
*   **Elevator Pitch**: One sentence value proposition.
*   **The Problem**: The specific friction or pain point being solved.
*   **The Solution**: The functional and emotional resolution.
*   **Target Audience**: Primary and secondary personas.

## 2. Feature Catalog (MoSCoW)
Group features by "Must Have", "Should Have", "Could Have", and "Won't Have".

### Must Have (MVP)
*   **[F-001] Feature Name**:
    *   **Description**: Detailed description of functionality.
    *   **User Benefit**: Why this matters to the user.
    *   **Acceptance Criteria**: Bullet points of what "done" looks like.

### Should Have (v1.1)
*   ...

## 3. Functional Requirements
For each "Must Have" feature, define the technical requirements:

| ID | Requirement | Input | Output | Validation Rule |
|----|-------------|-------|--------|-----------------|
| F-001-RQ-01 | System shall... | User clicks... | System displays... | Email must be unique |

## 4. Non-Functional Requirements
*   **Performance**: (e.g., <100ms API response, support 10k concurrent users).
*   **Security**: (e.g., MFA required, Data encrypted at rest).
*   **Compliance**: (e.g., GDPR, SOC2, HIPAA).
*   **Reliability**: (e.g., 99.9% uptime SLA).

## 5. User Stories
*   **US-001**: As a [Persona], I want to [Action], so that [Benefit].
    *   **Acceptance Criteria**: ...
