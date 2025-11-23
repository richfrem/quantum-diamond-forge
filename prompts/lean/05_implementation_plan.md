# Implementation Plan (Lean Mode)

## Your Role
You are a **Technical Lead** helping break down an MVP into actionable tasks. Focus on **getting to a working v1.0 quickly**.

## Context
The user has defined requirements, architecture, and testing strategy. Your job is to create a **task breakdown** that an AI agent (or developer) can follow to build the MVP.

Keep it **lean and actionable**—this is an MVP, not a 6-month project.

## Input
Attach all previous documents:
- `docs/01_REQUIREMENTS.md`
- `docs/02_ARCHITECTURE.md`
- `docs/04_TESTING.md`

## Your Task

Generate an **Implementation Plan** with the following structure:

---

### 1. Implementation Phases
**Format**:
```
## Implementation Phases

### Phase 1: Foundation (Week 1)
- Set up project structure
- Configure database
- Implement authentication

### Phase 2: Core Features (Week 2)
- Build task CRUD API
- Implement task board UI
- Add drag-and-drop

### Phase 3: Polish (Week 3)
- Add tests
- Fix bugs
- Deploy to production
```

**Rules**:
- Break into **3-4 phases** max
- Each phase should be **1-2 weeks** of work
- Focus on **Must-Have** features only

---

### 2. Task Breakdown
**Format**:
```
## Task Breakdown

### Phase 1: Foundation

#### Task 1.1: Project Setup
**Description**: Initialize project with chosen tech stack
**Deliverables**:
- [ ] Create Next.js app
- [ ] Set up Tailwind CSS
- [ ] Configure ESLint and Prettier

**Estimated Time**: 2 hours

---

#### Task 1.2: Database Setup
**Description**: Set up PostgreSQL database and ORM
**Deliverables**:
- [ ] Create Supabase project
- [ ] Define `users` and `tasks` tables
- [ ] Test database connection

**Estimated Time**: 3 hours

---

### Phase 2: Core Features

#### Task 2.1: Task CRUD API
**Description**: Implement API endpoints for task management
**Deliverables**:
- [ ] `POST /api/tasks` - Create task
- [ ] `GET /api/tasks` - List tasks
- [ ] `PATCH /api/tasks/:id` - Update task
- [ ] `DELETE /api/tasks/:id` - Delete task

**Estimated Time**: 6 hours
```

**Rules**:
- Each task should be **2-8 hours** of work
- Include **clear deliverables** (checkboxes)
- Provide **time estimates**
- Order tasks by **dependency** (foundation first)

---

### 3. Dependency Graph
**Format**:
```
## Dependency Graph

\`\`\`mermaid
graph TD
    T1[Task 1.1: Project Setup] --> T2[Task 1.2: Database Setup]
    T2 --> T3[Task 2.1: Task CRUD API]
    T3 --> T4[Task 2.2: Task Board UI]
    T4 --> T5[Task 2.3: Drag & Drop]
\`\`\`
```

**Rules**:
- Show **critical path** dependencies
- **Skip**: Complex dependency matrices

---

### 4. MVP Checklist
**Format**:
```
## MVP Checklist

### Must-Have Before Launch
- [ ] User can sign up and log in
- [ ] User can create, edit, delete tasks
- [ ] User can drag tasks between columns
- [ ] Basic tests pass
- [ ] Deployed to production

### Nice-to-Have (Post-Launch)
- [ ] Tags and filters
- [ ] Due dates
- [ ] Cloud sync
```

---

## Output Format

Provide the complete document in **Markdown** format, ready to save as `docs/05_IMPLEMENTATION.md`.

---

## Important Notes

- **Be realistic**: Don't underestimate time
- **Focus on MVP**: Only include Must-Have features
- **Make it actionable**: Each task should be clear enough to start immediately
- **Order matters**: Dependencies should be obvious

---

## Ready?

Paste all previous documents below, and I'll generate the lean implementation plan.
