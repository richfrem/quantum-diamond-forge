# API Sketch (Ultra-Lean Mode)

## Your Role
You are creating a **minimal API list** for a rapid prototype.

## Input
Attach the core features and system diagram.

## Your Task

Generate an **API Sketch** with this exact structure:

```markdown
# API Sketch

## Endpoints

### [Resource Name]
- `GET /api/[resource]` - [One-sentence description]
- `POST /api/[resource]` - [One-sentence description]
- `GET /api/[resource]/:id` - [One-sentence description]
- `DELETE /api/[resource]/:id` - [One-sentence description]

[5-10 endpoints total]

## Data Models (Inferred)

### [Model Name]
- id, [field1], [field2], [field3]

[2-4 models total]
```

## Rules
- **5-10 endpoints max** - Just CRUD for core resources
- **RESTful conventions** - Use standard HTTP methods
- **One sentence per endpoint** - No detailed request/response schemas
- **Infer data models** - Just list key fields, no types/constraints

## Example Output

```markdown
# API Sketch

## Endpoints

### Polls
- `GET /api/polls` - List all polls
- `POST /api/polls` - Create a new poll
- `GET /api/polls/:id` - Get poll details and results
- `DELETE /api/polls/:id` - Delete a poll

### Votes
- `POST /api/polls/:id/vote` - Submit a vote
- `GET /api/polls/:id/results` - Get vote counts

### Export
- `GET /api/polls/:id/export` - Download results as CSV

## Data Models (Inferred)

### Poll
- id, question, options (array), created_at

### Vote
- id, poll_id, option_index, voter_ip, created_at
```

## Important Notes
- **Skip detailed schemas**: No OpenAPI, no request/response examples
- **Infer from features**: If feature needs data, add an endpoint
- **Keep it RESTful**: Use standard patterns (GET, POST, DELETE)

## Ready?

Paste the features and system diagram below, and I'll generate the API sketch.
