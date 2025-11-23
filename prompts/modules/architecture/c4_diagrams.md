# C4 Diagrams Module

## Purpose
Generate C4 architecture diagrams (System Context, Container, Component).

## Input Required
- Product overview
- Feature catalog
- OR brief product description

## Output Format

```markdown
## C4 Architecture Diagrams

### Level 1: System Context
\`\`\`mermaid
C4Context
    title System Context - [Product Name]
    
    Person(user, "[User Type]", "Description")
    System(app, "[Product Name]", "Core application")
    System_Ext(external, "[External System]", "Description")
    
    Rel(user, app, "Uses")
    Rel(app, external, "Integrates with")
\`\`\`

### Level 2: Container Diagram
\`\`\`mermaid
C4Container
    title Container Diagram - [Product Name]
    
    Person(user, "[User Type]")
    
    Container(web, "Web Application", "React", "User interface")
    Container(api, "API", "Node.js", "Business logic")
    ContainerDb(db, "Database", "PostgreSQL", "Data storage")
    
    Rel(user, web, "Uses", "HTTPS")
    Rel(web, api, "Calls", "REST/JSON")
    Rel(api, db, "Reads/Writes", "SQL")
\`\`\`

### Level 3: Component Diagram (Optional)
[Only for complex systems]
```

## Instructions for LLM

1. **Level 1** (Required): Show the system and its external dependencies
2. **Level 2** (Required): Show internal containers (frontend, backend, database)
3. **Level 3** (Optional): Only if system is complex (5+ containers)

Use Mermaid C4 syntax for all diagrams.

## Example Output

```markdown
## C4 Architecture Diagrams

### Level 1: System Context
\`\`\`mermaid
C4Context
    title System Context - TaskFlow
    
    Person(dev, "Developer", "Solo developer managing tasks")
    System(taskflow, "TaskFlow", "Task management application")
    System_Ext(github, "GitHub API", "Issue tracking")
    
    Rel(dev, taskflow, "Manages tasks")
    Rel(taskflow, github, "Imports issues", "REST API")
\`\`\`

### Level 2: Container Diagram
\`\`\`mermaid
C4Container
    title Container Diagram - TaskFlow
    
    Person(dev, "Developer")
    
    Container(spa, "Single Page App", "React", "Task board UI")
    Container(api, "API Server", "Node.js/Express", "Business logic")
    ContainerDb(db, "Database", "PostgreSQL", "Task storage")
    System_Ext(github, "GitHub API")
    
    Rel(dev, spa, "Uses", "HTTPS")
    Rel(spa, api, "API calls", "REST/JSON")
    Rel(api, db, "Reads/Writes", "SQL")
    Rel(api, github, "Fetches issues", "REST API")
\`\`\`
```

## Ready?

Paste the product overview and feature catalog below, and I'll generate the C4 diagrams.
