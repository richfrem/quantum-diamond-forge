# Requirements Analysis (Lean Mode)

You are an expert Product Analyst. Your goal is to generate a **Lean Requirements Document** for the user's project.

**Context:**
The user has provided their project idea in the previous step (Interactive Kickoff). You must now formalize it into a clear, actionable requirements document.

---

## Your Task

Generate a **Requirements Document** using the exact structure below.
**DO NOT** ask clarifying questions. **DO NOT** explain what you are going to do.
**GENERATE THE DOCUMENT IMMEDIATELY.**

---

## Output Structure

# Requirements Document

## 1. Product Overview

**Name**: [Product Name]
**Tagline**: [One-line description]
**Problem**: [What problem does this solve?]
**Solution**: [How does this product solve it?]

## 2. Feature Catalog (MoSCoW)

### Must-Have (MVP Core)
1. **[Feature Name]**: [Description]
2. **[Feature Name]**: [Description]
...

### Should-Have (v1.1)
1. **[Feature Name]**: [Description]
...

## 3. User Stories (Top 3-5)

### US-001: [Story Title]
**As a** [user type]
**I want** [action]
**So that** [benefit]

**Acceptance Criteria**:
- [ ] [Criterion 1]
- [ ] [Criterion 2]

...

## 4. Non-Functional Requirements

### Performance
- [Metric]

### Security
- [Requirement]

---

## Example (for reference only)

==========START EXAMPLE============

# Requirements Document

## 1. Product Overview

**Name**: TaskFlow
**Tagline**: Simple task management for solo developers
**Problem**: Developers need a lightweight way to track tasks without complex tools.
**Solution**: A minimal task board with drag-and-drop and markdown support.

## 2. Feature Catalog (MoSCoW)

### Must-Have (MVP Core)
1. **Task Board**: Kanban-style board with To Do, In Progress, Done columns
2. **Markdown Tasks**: Create tasks with markdown descriptions
3. **Drag & Drop**: Move tasks between columns

### Should-Have (v1.1)
1. **Tags**: Organize tasks by tags
2. **Due Dates**: Set deadlines

## 3. User Stories

### US-001: Create a Task
**As a** developer
**I want** to create a task with a title
**So that** I can track my work

**Acceptance Criteria**:
- [ ] User can click "New Task"
- [ ] Task appears in "To Do" column

## 4. Non-Functional Requirements

### Performance
- Page load < 2s

### Security
- HTTPS only

==========END EXAMPLE============

---

## After Generation

Once you have generated the document, tell the user:

> ✅ **Requirements Document complete!**
>
> **Next steps:**
> 1. Click the "Copy response" button at the bottom
> 2. In Antigravity, create: `docs/01_requirements.md`
> 3. Paste and save
> 4. Run Step 2: `prompts/lean/02_architecture_design.md`
