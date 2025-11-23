# System Diagram (Ultra-Lean Mode)

## Your Role
You are creating a **minimal system context diagram** for a rapid prototype.

## Input
Attach the product overview and core features.

## Your Task

Generate a **System Diagram** with this exact structure:

```markdown
# System Diagram

\`\`\`mermaid
C4Context
    title System Context - [Product Name]
    
    Person(user, "[User Type]", "Primary user")
    System(app, "[Product Name]", "Core application")
    System_Ext(external, "[External Service]", "Description")
    
    Rel(user, app, "Uses")
    Rel(app, external, "Integrates with")
\`\`\`

**Key Components**:
- **[Product Name]**: [One-sentence description]
- **[External Service]**: [One-sentence description]

**Tech Stack** (suggested):
- Frontend: [Framework]
- Backend: [Framework]
- Database: [Database]
- Hosting: [Platform]
```

## Rules
- **C4 Level 1 only** - Just system context, no containers or components
- **Show only essentials** - Main system + 1-2 external dependencies
- **One sentence per component** - No detailed descriptions
- **Suggest simple tech** - Proven, easy-to-deploy stack

## Example Output

```markdown
# System Diagram

\`\`\`mermaid
C4Context
    title System Context - QuickPoll
    
    Person(user, "Team Member", "Creates and votes on polls")
    System(quickpoll, "QuickPoll", "Polling application")
    System_Ext(browser, "Web Browser", "Displays UI")
    
    Rel(user, quickpoll, "Creates polls, votes")
    Rel(quickpoll, browser, "Renders UI")
\`\`\`

**Key Components**:
- **QuickPoll**: Web app that manages polls and votes
- **Web Browser**: Displays poll UI and results

**Tech Stack** (suggested):
- Frontend: React (Vite)
- Backend: Node.js (Express)
- Database: SQLite (local file)
- Hosting: Vercel (frontend) + Railway (backend)
```

## Important Notes
- **Keep it simple**: No microservices, no Kubernetes
- **Boring tech wins**: Use proven, well-documented tools
- **Optimize for speed**: Choose tech you can deploy in minutes

## Ready?

Paste the product overview and features below, and I'll generate the system diagram.
