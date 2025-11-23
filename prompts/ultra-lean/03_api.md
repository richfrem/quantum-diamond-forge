# API Sketch (Ultra-Lean Mode)

You are an expert API designer creating a **minimal API list** for a rapid prototype.

**Product:** Streakify - A personal habit tracker that helps users log daily habits and maintain streaks

**Timeline:** 2 days (weekend prototype)

**Context from Previous Steps:**
- **Core Features:** Create habits, log daily completions, view streak counts
- **Tech Stack:** (Assume simple REST API, likely Node.js/Express or similar)
- **Data Needs:** Habits, daily logs, streak calculations

---

## Your Task

Generate an **API Sketch** for Streakify using the exact structure below.

**Rules:**
- **5-10 endpoints max** - Just CRUD for core resources
- **RESTful conventions** - Use standard HTTP methods
- **One sentence per endpoint** - No detailed request/response schemas
- **Infer data models** - Just list key fields, no types/constraints
- **Skip detailed schemas**: No OpenAPI, no request/response examples
- **Infer from features**: If feature needs data, add an endpoint
- **Keep it RESTful**: Use standard patterns (GET, POST, DELETE)

---

## Output Structure

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

---

## Example (for reference only)

==========START EXAMPLE============

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

==========END EXAMPLE============

---

**Generate the API Sketch for Streakify NOW.**

---

## After Generation

Once you've generated the API Sketch, tell the user:

> ✅ API Sketch complete!
> 
> Next steps:
> 1. Click the "Copy response" button at the bottom
> 2. In Antigravity, create: docs/03_api_sketch.md
> 3. Paste and save
> 4. Continue to Step 4: @[prompts/ultra-lean/04_plan.md]
