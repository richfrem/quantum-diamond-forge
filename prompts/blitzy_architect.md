# Blitzy "Enterprise Benchmark" Prompt

**Objective:**
Generate a "Gold Standard" implementation plan for a complex, mission-critical application to serve as a benchmark for the Quantum Diamond Forge protocol.

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

**Your Task:**
Produce the complete **Implementation Blueprint** for Helix. Don't hold back on complexity. I need to see the full weight of enterprise engineering:
*   Detailed Architecture (C4, Event Flows).
*   Comprehensive Security Strategy (Zero Trust, mTLS, Vault).
*   Operational Maturity (Observability, Chaos Engineering, DR).
*   Testing & QA Strategy (Contract Testing, Load Testing).
*   Compliance & Governance (SOC2, HIPAA controls).

**Why:**
I will use your output to audit my own "Quantum Diamond Forge" templates. I want to see what a $50M system looks like so I can extract the best patterns for my $50k projects.
