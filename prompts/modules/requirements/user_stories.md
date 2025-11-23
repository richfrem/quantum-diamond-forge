# User Stories Module

## Purpose
Generate user stories with acceptance criteria for Must-Have features.

## Input Required
- Feature catalog (from previous module)
- OR list of Must-Have features

## Output Format

```markdown
## User Stories

### US-001: [Story Title]
**As a** [user type]
**I want** [action]
**So that** [benefit]

**Acceptance Criteria**:
- [ ] [Specific, testable criterion]
- [ ] [Specific, testable criterion]
- [ ] [Specific, testable criterion]

---

### US-002: [Story Title]
...
```

## Instructions for LLM

1. Create **1 user story per Must-Have feature**
2. Each story should have **3-5 acceptance criteria**
3. Acceptance criteria must be **specific and testable**
4. Use checkboxes for acceptance criteria

## Example Output

```markdown
## User Stories

### US-001: Create a Task
**As a** developer
**I want** to create a task with a title and markdown description
**So that** I can track what I need to do

**Acceptance Criteria**:
- [ ] User can click "New Task" button
- [ ] User can enter a task title (required field)
- [ ] User can enter a markdown description (optional field)
- [ ] Task appears in "To Do" column after creation
- [ ] Task has a unique ID and timestamp

---

### US-002: Move Tasks Between Columns
**As a** developer
**I want** to drag tasks between columns
**So that** I can update task status visually

**Acceptance Criteria**:
- [ ] User can click and drag a task card
- [ ] Task can be dropped into any column
- [ ] Task position updates immediately (no page refresh)
- [ ] Changes persist in local storage
- [ ] Dragging is smooth and responsive (< 100ms)

---

### US-003: Import GitHub Issues
**As a** developer
**I want** to import issues from my GitHub repo
**So that** I don't have to manually recreate tasks

**Acceptance Criteria**:
- [ ] User can enter a GitHub repo URL
- [ ] System validates the URL format
- [ ] System fetches open issues via GitHub API
- [ ] Issues appear as tasks in "To Do" column
- [ ] Issue title and description are preserved
```

## Ready?

Paste the feature catalog (or Must-Have features) below, and I'll generate the user stories.
