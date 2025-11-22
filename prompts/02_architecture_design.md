Act as a Principal Software Architect.

**Input:**
I have provided the `01_REQUIREMENTS.md` for a new application.

**Task:**
Design the Technical Architecture for this product. Output a **Technical Blueprint** in Markdown.
Focus on scalability, security, and maintainability.

**Output Format (02_ARCHITECTURE.md):**

# Architecture Design

## 1. System Context (C4 Level 1)
*   **Diagram**: Mermaid diagram showing the system and its external dependencies (Users, External APIs, Legacy Systems).
*   **Description**: Narrative of the high-level interactions.

## 2. Container Architecture (C4 Level 2)
*   **Diagram**: Mermaid diagram showing the internal containers (Web App, API, Database, Worker, Cache).
*   **Technology Choices**:
    *   **Frontend**: (e.g., Next.js, React, Tailwind).
    *   **Backend**: (e.g., Node.js/NestJS, Python/FastAPI).
    *   **Database**: (e.g., PostgreSQL, MongoDB).
    *   **Infrastructure**: (e.g., AWS, Vercel, Docker).

## 3. Data Model
*   **ER Diagram**: Mermaid `erDiagram` showing entities and relationships.
*   **Schema Definition**: Brief description of key tables/collections and their purpose.

## 4. API Design
*   **Interface Definition**: High-level description of key API endpoints (REST or GraphQL).
    *   `GET /api/v1/resource`: Description.
    *   `POST /api/v1/resource`: Description.
*   **Integration Patterns**: How do services communicate? (Sync HTTP, Async Events/Kafka).

## 5. Cross-Cutting Concerns
*   **Observability**: Logging, Metrics, Tracing strategy.
*   **Error Handling**: Standardized error response format.
*   **Caching**: Strategy for read-heavy data (Redis, CDN).
