# Escape Hatches & Flexibility Guide

## Philosophy
The Quantum Diamond Forge protocol is designed for rigor, but **real projects need flexibility**. This guide shows you when and how to skip steps, iterate quickly, or adapt the protocol to your needs.

## When to Use Escape Hatches

✅ **Use escape hatches when:**
- You're prototyping and need speed over completeness
- Requirements change mid-implementation
- You're working solo and don't need full documentation
- You already know the domain well
- Time/budget constraints require shortcuts

❌ **Don't use escape hatches when:**
- Building production systems with compliance requirements
- Working in regulated industries (healthcare, finance)
- Multiple teams need to coordinate
- You're new to the domain

## Escape Hatches by Phase

### Phase 1: Requirements Analysis

**Skip if:**
- You have existing requirements docs
- Building a clone of an existing app
- Requirements are trivial (e.g., "Todo app")

**Lightweight alternative:**
- Use Ultra-Lean mode (5 artifacts, 30 min)
- Just list 3-5 Must-Have features
- Skip user stories and NFRs

**How to skip:**
```
Skip to Phase 2 with a simple feature list:
1. Feature A
2. Feature B
3. Feature C
```

### Phase 2: Architecture Design

**Skip if:**
- Using a standard stack (e.g., Next.js + Supabase)
- Building a simple CRUD app
- Architecture is obvious

**Lightweight alternative:**
- Just draw C4 Level 1 (system context)
- List 5-10 API endpoints
- Skip detailed data models (let IDE agent infer)

**How to skip:**
```
Provide minimal architecture:
- Frontend: React
- Backend: Node.js/Express
- Database: PostgreSQL
- Hosting: Vercel + Railway
```

### Phase 3: Security & Compliance

**Skip if:**
- Internal tool (no external users)
- Prototype/hackathon project
- No sensitive data

**Lightweight alternative:**
- Use basic security checklist (HTTPS, auth, input validation)
- Skip full STRIDE threat modeling
- Skip compliance mapping

**How to skip:**
```
Basic security:
- Use Auth0 for authentication
- HTTPS only
- Validate all inputs
- No PII storage
```

### Phase 4: Testing Strategy

**Skip if:**
- Rapid prototype
- Solo developer who will manually test
- Time-constrained hackathon

**Lightweight alternative:**
- Just list critical paths to test
- Skip test pyramid
- Skip performance testing

**How to skip:**
```
Critical tests:
1. User can sign up
2. User can create item
3. User can view items
```

### Phase 5: Implementation Plan

**Skip if:**
- You're the only developer
- Project is <1 week
- You prefer to work iteratively

**Lightweight alternative:**
- Just list 5-10 tasks
- Skip time estimates
- Skip dependency mapping

**How to skip:**
```
Quick plan:
1. Setup project
2. Build auth
3. Build core features
4. Deploy
```

## Iteration Support

### How to Revise Specs Mid-Build

**Scenario**: Requirements changed after you started building.

**Solution**:
1. Update the relevant markdown artifact (e.g., `docs/01_REQUIREMENTS.md`)
2. Regenerate lockfile: `./forge.sh lock requirements`
3. Validate: `./forge.sh validate`
4. Tell IDE agent: "Requirements changed, see updated lockfile"

**Example**:
```
You: "We need to add a new feature: Export to PDF"

Steps:
1. Add to docs/01_REQUIREMENTS.md:
   **[F-006] Export to PDF**
   - Description: Users can export data as PDF
   - Acceptance: PDF downloads with all data

2. ./forge.sh lock requirements
3. ./forge.sh validate
4. Tell IDE agent: "New feature F-006 added, update implementation plan"
```

### How to Change Architecture Mid-Build

**Scenario**: Realized you need a different database.

**Solution**:
1. Update `docs/02_ARCHITECTURE.md`
2. Regenerate lockfile: `./forge.sh lock architecture`
3. Check for breaking changes: `./forge.sh validate`
4. Update dependent artifacts (API, data models)

## Mode Switching

### Upgrading from Ultra-Lean → Lean

**When**: Prototype succeeded, now building MVP.

**How**:
1. Keep existing 5 artifacts
2. Add missing Lean artifacts:
   - User stories
   - Basic security checklist
   - Test plan
3. Generate lockfiles

### Upgrading from Lean → Enterprise

**When**: MVP succeeded, now scaling to production.

**How**:
1. Keep existing ~10 artifacts
2. Add Enterprise artifacts:
   - C4 Level 2-3 diagrams
   - Full STRIDE threat model
   - Compliance mapping
   - Detailed test pyramid
3. Generate lockfiles

### Downgrading Enterprise → Lean

**When**: Over-engineered, need to simplify.

**How**:
1. Archive detailed artifacts
2. Keep only core 10 artifacts
3. Regenerate lockfiles

## Assumptions & Limitations

### Documented Assumptions

**The protocol assumes:**
1. **Stable LLM access**: Web LLMs (Gemini, Claude, GPT) are available
2. **Human oversight**: You review all LLM outputs before using
3. **Markdown proficiency**: You can read/edit markdown files
4. **Git knowledge**: Basic git commands for versioning
5. **Node.js installed**: For lockfile scripts (optional)

**If assumptions don't hold:**
- No LLM access → Use templates as starting point, fill manually
- No human review → Don't use this protocol (too risky)
- No markdown skills → Use a markdown editor with preview
- No git → Use file versioning (copy files with timestamps)
- No Node.js → Skip lockfile system, manage drift manually

### Known Limitations

1. **LLM variability**: Different LLMs produce different outputs
2. **Context limits**: Very large projects may exceed LLM context
3. **Spec drift**: Without lockfiles, artifacts can diverge
4. **Manual workflow**: Copy-paste is tedious (API automation optional)
5. **Learning curve**: First project takes longer

## Quick Reference

**I want to...**
- **Ship this weekend** → Use Ultra-Lean mode (5 artifacts, 30 min)
- **Build an MVP** → Use Lean mode (10 artifacts, 1 hour)
- **Build for production** → Use Enterprise mode (25+ artifacts, 4-6 hours)
- **Skip a phase** → See "Escape Hatches by Phase" above
- **Change specs mid-build** → See "Iteration Support" above
- **Switch modes** → See "Mode Switching" above

**I'm stuck because...**
- **LLM output is wrong** → Regenerate with more specific prompt
- **Artifacts conflict** → Run `./forge.sh validate` to find issues
- **Too much ceremony** → Switch to lighter mode
- **Not enough detail** → Switch to heavier mode or add verbosity

## Getting Help

If you're unsure whether to use an escape hatch:
1. Ask yourself: "What's the worst that could happen if I skip this?"
2. If answer is "minor inconvenience" → Skip it
3. If answer is "security breach" or "system failure" → Don't skip

**Remember**: The protocol is a tool, not a religion. Use what works for your project.
