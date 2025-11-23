# Lean Mode Test Scenario

## Test Idea
**Product**: "QuickPoll" - A simple polling app for teams

**Description**: 
A lightweight polling tool where users can create quick polls, share them with their team, and see real-time results. Think Strawpoll but for internal teams.

**Target Users**: Small teams (5-20 people) who need quick decision-making

**Key Problems**: 
- Email threads for simple yes/no questions are slow
- Existing tools (Slack polls, etc.) lack persistence
- Need something dead simple with no setup

---

## Expected Lean Mode Output

### Step 1: Requirements (~10 min)
**Expected Artifacts**:
- Feature catalog: 5-7 Must-Have features (create poll, vote, view results, share link, basic auth)
- 3-5 user stories
- Basic NFRs (page load < 2s, HTTPS, 100 concurrent users)

**Success Criteria**: 
- ✅ Output is concise (< 2 pages)
- ✅ Focuses only on MVP features
- ✅ No extensive compliance requirements

---

### Step 2: Architecture (~15 min)
**Expected Artifacts**:
- C4 Level 1 diagram (QuickPoll app + external auth provider)
- Simple API endpoint list (5-10 endpoints)
- 2-3 database tables (users, polls, votes)

**Success Criteria**:
- ✅ No C4 Level 2-3 diagrams
- ✅ No detailed OpenAPI spec
- ✅ Simple tech stack (e.g., Next.js + Supabase)

---

### Step 3: Security (~10 min)
**Expected Artifacts**:
- AuthN/AuthZ strategy (OAuth or email/password)
- Basic encryption (HTTPS, password hashing)
- Input validation checklist

**Success Criteria**:
- ✅ No full STRIDE tables
- ✅ No SOC2/HIPAA compliance mapping
- ✅ Practical security only

---

### Step 4: Testing (~10 min)
**Expected Artifacts**:
- Unit test strategy (5-10 key functions)
- Integration test strategy (all API endpoints)
- Manual testing checklist (5-10 flows)

**Success Criteria**:
- ✅ No E2E tests
- ✅ No performance/security testing
- ✅ 70% coverage goal (not 100%)

---

### Step 5: Implementation Plan (~10 min)
**Expected Artifacts**:
- 3 phases (Foundation, Core Features, Polish)
- 10-15 tasks with time estimates
- Simple dependency graph

**Success Criteria**:
- ✅ Tasks are 2-8 hours each
- ✅ Focus on Must-Have features only
- ✅ Total MVP timeline: 2-3 weeks

---

## Validation Checklist

### Prompt Quality
- [ ] Prompts are clear and easy to follow
- [ ] Examples are helpful and relevant
- [ ] Instructions are concise (not walls of text)
- [ ] Output format is well-defined

### Workflow Efficiency
- [ ] Total time to complete all 5 steps: ~1 hour
- [ ] Each step builds on the previous one
- [ ] No redundant information requested
- [ ] Easy to copy-paste between steps

### Output Quality
- [ ] Artifacts are actionable (can start building immediately)
- [ ] No over-engineering (appropriate for MVP)
- [ ] Consistent naming and structure
- [ ] Clear enough for an AI agent to implement

---

## Next Steps After Validation

If test passes:
1. ✅ Lean mode is ready for use
2. Continue with Phase 2 (Modular Prompts)
3. Add GUIDE.md mode selector

If test fails:
1. Identify issues in prompts
2. Refine unclear sections
3. Re-test before proceeding
