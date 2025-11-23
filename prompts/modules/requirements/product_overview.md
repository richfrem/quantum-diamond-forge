# Product Overview Module

## Purpose
Generate a concise executive summary of the product idea.

## Input Required
- Brief description of the product idea
- Target users (if known)
- Problem being solved

## Output Format

```markdown
## Product Overview

**Name**: [Product Name]
**Tagline**: [One-sentence value proposition]

**The Problem**: [2-3 sentences describing the pain point]

**The Solution**: [2-3 sentences describing how the product solves it]

**Target Audience**:
- **Primary**: [Main user persona]
- **Secondary**: [Additional user personas]
```

## Instructions for LLM

1. Keep the product name short and memorable
2. Tagline should be under 10 words
3. Problem and Solution should each be 2-3 sentences max
4. Identify 1 primary and 1-2 secondary personas

## Example Output

```markdown
## Product Overview

**Name**: TaskFlow
**Tagline**: Simple task management for solo developers

**The Problem**: Developers need a lightweight way to track tasks without the complexity of enterprise project management tools. Existing solutions like Jira are overkill for solo projects, while simple to-do apps lack developer-specific features like GitHub integration and markdown support.

**The Solution**: TaskFlow provides a minimal Kanban board with drag-and-drop, markdown task descriptions, and one-click GitHub issue import. It's designed for developers who want just enough structure without the overhead.

**Target Audience**:
- **Primary**: Solo developers and freelancers managing personal projects
- **Secondary**: Small development teams (2-5 people) working on side projects
```

## Ready?

Paste the product idea below, and I'll generate the product overview.
