# Build Plan (Ultra-Lean Mode)

## Your Role
You are creating a **minimal implementation plan** for a rapid prototype.

## Input
Attach all previous artifacts (overview, features, system, API).

## Your Task

Generate a **Build Plan** with this exact structure:

```markdown
# Build Plan

## Tasks

### 1. [Task Name]
**What**: [One-sentence description]  
**Deliverables**: [1-3 bullet points]  
**Time**: [Estimate in hours]

[5-10 tasks total]

## Timeline
- **Day 1**: Tasks 1-3
- **Day 2**: Tasks 4-6
- **Day 3**: Tasks 7-10

**Total**: [X] hours over [Y] days
```

## Rules
- **5-10 tasks max** - Each task should be 2-6 hours
- **Order by dependency** - Foundation first, polish last
- **Be realistic** - Don't underestimate time
- **Focus on MVP** - Only Must-Have features

## Example Output

```markdown
# Build Plan

## Tasks

### 1. Project Setup
**What**: Initialize project with chosen tech stack  
**Deliverables**:
- Vite + React app created
- Express server configured
- SQLite database initialized

**Time**: 2 hours

### 2. Database Schema
**What**: Create tables for polls and votes  
**Deliverables**:
- polls table (id, question, options, created_at)
- votes table (id, poll_id, option_index, voter_ip, created_at)
- Test data seeded

**Time**: 2 hours

### 3. Poll CRUD API
**What**: Implement poll creation and retrieval  
**Deliverables**:
- POST /api/polls endpoint
- GET /api/polls/:id endpoint
- DELETE /api/polls/:id endpoint

**Time**: 4 hours

### 4. Voting API
**What**: Implement vote submission and results  
**Deliverables**:
- POST /api/polls/:id/vote endpoint
- GET /api/polls/:id/results endpoint
- Prevent duplicate votes (by IP)

**Time**: 3 hours

### 5. Poll UI
**What**: Build poll creation and display interface  
**Deliverables**:
- Create poll form
- Display poll with options
- Show results with percentages

**Time**: 4 hours

### 6. Share & Export
**What**: Add link sharing and CSV export  
**Deliverables**:
- Copy link button
- CSV export endpoint
- Download results button

**Time**: 2 hours

### 7. Basic Styling
**What**: Make it look decent  
**Deliverables**:
- Responsive layout
- Clean typography
- Color scheme

**Time**: 2 hours

### 8. Deploy
**What**: Deploy to production  
**Deliverables**:
- Frontend on Vercel
- Backend on Railway
- Database migrated

**Time**: 2 hours

## Timeline
- **Day 1**: Tasks 1-3 (8 hours)
- **Day 2**: Tasks 4-6 (9 hours)
- **Day 3**: Tasks 7-8 (4 hours)

**Total**: 21 hours over 3 days
```

## Important Notes
- **Be honest with time**: Add 50% buffer to your estimates
- **Order matters**: Can't build UI before API
- **Keep it simple**: If a task is >6 hours, split it

## Ready?

Paste all previous artifacts below, and I'll generate the build plan.
