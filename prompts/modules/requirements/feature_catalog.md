# Feature Catalog Module

## Purpose
Generate a prioritized list of features using MoSCoW method.

## Input Required
- Product overview (from previous module)
- OR brief product description

## Output Format

```markdown
## Feature Catalog (MoSCoW)

### Must Have (MVP Core)
1. **[Feature Name]**: [1-sentence description]
2. **[Feature Name]**: [1-sentence description]
...

### Should Have (Post-MVP)
1. **[Feature Name]**: [1-sentence description]
...

### Could Have (Future)
1. **[Feature Name]**: [1-sentence description]
...

### Won't Have (Out of Scope)
1. **[Feature Name]**: [1-sentence reason why not]
...
```

## Instructions for LLM

1. **Must Have**: 5-10 features that are absolutely required for MVP
2. **Should Have**: 5-8 features that would be nice for v1.1
3. **Could Have**: 3-5 features for future consideration
4. **Won't Have**: 2-3 features explicitly out of scope

Keep each description to ONE sentence.

## Example Output

```markdown
## Feature Catalog (MoSCoW)

### Must Have (MVP Core)
1. **Task Board**: Kanban-style board with To Do, In Progress, Done columns
2. **Create Tasks**: Add tasks with title and markdown description
3. **Drag & Drop**: Move tasks between columns with drag-and-drop
4. **Local Storage**: Save tasks in browser (no backend required)
5. **GitHub Import**: One-click import of GitHub issues as tasks

### Should Have (Post-MVP)
1. **Tags & Filters**: Organize and filter tasks by custom tags
2. **Due Dates**: Set and track task deadlines
3. **Cloud Sync**: Save tasks to backend for multi-device access
4. **Keyboard Shortcuts**: Power-user shortcuts for common actions

### Could Have (Future)
1. **Time Tracking**: Track time spent on each task
2. **Subtasks**: Break down tasks into smaller subtasks
3. **Team Collaboration**: Share boards with team members

### Won't Have (Out of Scope)
1. **Gantt Charts**: Too complex for the target audience
2. **Resource Management**: Not needed for solo developers
3. **Billing/Invoicing**: Out of scope for a task management tool
```

## Ready?

Paste the product overview (or idea) below, and I'll generate the feature catalog.
