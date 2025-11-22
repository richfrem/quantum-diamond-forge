# Blitzy "Enterprise Benchmark" Prompt

**Objective:**
use blitzy to generate a "Gold Standard" implementation plan for a complex, mission-critical application to serve as a benchmark for the Quantum Diamond Forge protocol. It will be used to audit the Quantum Diamond Forge protocol and generate ideas to harden our own protocol.

**The Application Concept:**
**"Helix: Global Pharmaceutical Supply Chain & Verification Platform"**

**Core Functionality:**
*   **Track & Trace:** Real-time serialization and tracking of drug units from manufacturing to patient dispensing (fighting counterfeits).
*   **IoT Integration:** Ingestion of telemetry (temp/humidity) from cold-chain logistics containers.
*   **Regulatory Reporting:** Automated compliance generation for FDA (DSCSA) and EMA (FMD).
*   **Vendor Portal:** Secure access for thousands of suppliers, distributors, and pharmacies.

**Target Technical Stack:**
*   **Deployment:** Hybrid Cloud.
    *   **Core:** AWS (EKS for compute, Aurora Global Database for transactional data).
    *   **Edge:** On-Premise OpenShift clusters at manufacturing sites (low latency).
*   **Data:**
    *   **Transactional:** PostgreSQL (Aurora) with heavy partitioning.
    *   **Analytics:** ClickHouse or Snowflake for massive event logs.
    *   **Event Bus:** Kafka (MSK) for high-throughput event streaming.
*   **Backend:** Node.js/TypeScript (NestJS) microservices.
*   **Frontend:** Next.js (React) with Module Federation for micro-frontends.


