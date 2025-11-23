# Build Plan (Ultra-Lean Mode)

You are an expert project planner creating a **minimal implementation plan** for a rapid prototype.

**Product:** Streakify - A personal habit tracker that helps users log daily habits and maintain streaks

**Timeline:** 2 days (weekend prototype)

**Context from Previous Steps:**
- **Core Features:** Create habits, log daily completions, view streak counts (3-5 features)
- **Tech Stack:** (Assume modern web stack - React/Node.js or similar)
- **API Endpoints:** (Assume 5-10 RESTful endpoints for habits and logs)
- **Data Models:** (Assume 2-4 simple models like Habit, DailyLog, User)

---

## Your Task

Generate a **Build Plan** for Streakify using the exact structure below.

**Rules:**
- **5-10 tasks max** - Each task should be 2-6 hours
- **Order by dependency** - Foundation first, polish last
- **Be realistic** - Don't underestimate time
- **Focus on MVP** - Only Must-Have features
- **Be honest with time**: Add 50% buffer to your estimates
- **Order matters**: Can't build UI before API
- **Keep it simple**: If a task is >6 hours, split it

---

## Output Structure

# Build Plan

## Tasks

### 1. [Task Name]
**What**: [One-sentence description]  
**Deliverables**:
- [Bullet point 1]
- [Bullet point 2]
- [Bullet point 3]

**Time**: [Estimate in hours]

[5-10 tasks total]

## Timeline
- **Day 1**: Tasks 1-3
- **Day 2**: Tasks 4-6

**Total**: [X] hours over [Y] days

---

## Example (for reference only)

==========START EXAMPLE============

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

==========END EXAMPLE============

---

**Generate the Build Plan for Streakify NOW.**

---

## After Generation

Once you've generated the Build Plan, tell the user:

> ✅ Build Plan complete!
> 
> 🎉 All 5 Ultra-Lean artifacts are now ready!
> 
> Next steps:
> 1. Click the "Copy response" button at the bottom
> 2. In Antigravity, create: docs/04_build_plan.md
> 3. Paste and save
> 4. Hand all artifacts to your IDE Agent with this prompt:
> 
> I have 5 specification documents for a weekend prototype called Streakify:
> - docs/00_product_overview.md
> - docs/01_core_features.md
> - docs/02_system_diagram.md
> - docs/03_api_sketch.md
> - docs/04_build_plan.md
> 
> Please read all 5 files and build the application according to the build plan.
> Start with Task 1 (Project Setup) and work through each task in order.
