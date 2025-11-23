# Quantum Diamond Forge - Ultra-Lean Mode

## Before You Start: Choose Your Mode

**You are viewing: Ultra-Lean Mode** (5 artifacts, ~30 min)

**Other modes available:**
- **Lean Mode**: ~10 artifacts, ~1 hour → `prompts/00_MASTER_PROTOCOL_LEAN.md`
- **Enterprise Mode**: 25+ artifacts, 4-6 hours → `prompts/00_MASTER_PROTOCOL.md`

**Use Ultra-Lean Mode if:**
- Weekend project or hackathon
- Rapid prototype
- Time budget: ~30 minutes
- You know the domain well

**Consider a different mode if:**
- Need more structure → Lean
- Need full rigor → Enterprise

---

## Philosophy
**"Ship it this weekend."**

Ultra-Lean mode is for rapid prototypes, hackathons, and quick experiments where speed matters more than completeness. You'll generate just enough spec to start building—everything else gets inferred by the IDE agent.

## When to Use Ultra-Lean

✅ **Use Ultra-Lean when:**
- Weekend projects or hackathons
- Quick proof-of-concepts
- Testing an idea before committing
- Solo developer, tight deadline
- You know the domain well

❌ **Don't use Ultra-Lean when:**
- Production applications
- Team projects (use Lean or Enterprise)
- Compliance requirements
- Complex integrations
- You need detailed documentation

## The Ultra-Lean Workflow

**Total Time**: ~30 minutes  
**Total Artifacts**: 5

### Step 1: Product Overview (5 min)
**Prompt**: `prompts/ultra-lean/00_overview.md`  
**Output**: `docs/00_OVERVIEW.md`

Defines: Name, tagline, problem, solution, target users

### Step 2: Core Features (5 min)
**Prompt**: `prompts/ultra-lean/01_features.md`  
**Output**: `docs/01_FEATURES.md`

Defines: 3-5 Must-Have features with minimal acceptance criteria

### Step 3: System Diagram (5 min)
**Prompt**: `prompts/ultra-lean/02_system.md`  
**Output**: `docs/02_SYSTEM.md`

Defines: C4 Level 1 diagram + suggested tech stack

### Step 4: API Sketch (10 min)
**Prompt**: `prompts/ultra-lean/03_api.md`  
**Output**: `docs/03_API.md`

Defines: 5-10 endpoints + inferred data models

### Step 5: Build Plan (5 min)
**Prompt**: `prompts/ultra-lean/04_plan.md`  
**Output**: `docs/04_PLAN.md`

Defines: 5-10 implementation tasks with time estimates

## What Gets Auto-Generated

The IDE agent will infer and generate:
- Detailed data models (from API endpoints)
- Test cases (basic templates)
- Security checklist (standard template)
- Error handling patterns
- Validation rules

## Mode Comparison

| Mode | Artifacts | Time | Best For |
|------|-----------|------|----------|
| **Ultra-Lean** | 5 | ~30 min | Rapid prototypes, hackathons |
| **Lean** | ~10 | ~1 hour | MVPs, solo devs |
| **Enterprise** | 25+ | 4-6 hours | Production apps, teams |

## Example: QuickPoll

**Idea**: "Simple polling app for teams"

**Ultra-Lean Spec** (30 minutes):
1. Overview: Problem, solution, users
2. Features: Create poll, vote, view results, share link, export CSV
3. System: Web app → API → SQLite
4. API: 7 endpoints (polls CRUD, vote, results, export)
5. Plan: 8 tasks, 21 hours over 3 days

**Result**: Enough to start building immediately.

## Tips for Success

1. **Be ruthless**: Only include what you absolutely need
2. **Trust the agent**: Let it infer details from context
3. **Iterate fast**: Build first, refine later
4. **Keep it simple**: Boring tech wins for prototypes
5. **Time-box it**: If a step takes >10 min, you're overthinking

## Upgrading Later

You can always upgrade from Ultra-Lean to Lean or Enterprise:
- Add more features → Lean mode
- Add security/compliance → Enterprise mode
- Add detailed architecture → Enterprise mode

## Ready?

Start with `prompts/ultra-lean/00_overview.md` and work through the 5 steps sequentially.
