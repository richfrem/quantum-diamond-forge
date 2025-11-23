# Test Pyramid Module

## Purpose
Generate a test strategy following the test pyramid pattern.

## Input Required
- Feature catalog
- Data models
- API endpoints (if available)

## Output Format

```markdown
## Test Strategy (Test Pyramid)

### Unit Tests (70% of tests)
**What to Test**:
- Business logic functions
- Utility functions
- Data validation

**Example Test Cases**:
- `validateEmail()`: Valid email → true, Invalid email → false
- `calculateTaskPosition()`: Returns correct position based on column

**Coverage Goal**: 80% of business logic

---

### Integration Tests (20% of tests)
**What to Test**:
- API endpoints
- Database operations
- External service integrations

**Example Test Cases**:
- `POST /api/tasks`: Creates task and returns 201
- `GET /api/tasks`: Returns user's tasks only
- GitHub API integration: Fetches issues successfully

**Coverage Goal**: All API endpoints

---

### E2E Tests (10% of tests)
**What to Test**:
- Critical user flows
- Multi-step interactions

**Example Test Cases**:
- User signup → login → create task → drag task → logout
- Import GitHub issues → verify tasks appear → delete tasks

**Coverage Goal**: Top 3-5 user flows
```

## Instructions for LLM

1. Follow the 70/20/10 ratio (Unit/Integration/E2E)
2. Provide 3-5 example test cases per level
3. Focus on Must-Have features
4. Keep coverage goals realistic

## Example Output

```markdown
## Test Strategy (Test Pyramid)

### Unit Tests (70% of tests)
**What to Test**:
- Task validation logic
- Position calculation
- Status transitions
- Input sanitization

**Example Test Cases**:
- `validateTaskTitle()`: 
  - Valid title (1-255 chars) → true
  - Empty title → false
  - Title > 255 chars → false
- `calculateTaskPosition()`:
  - First task in column → position = 0
  - Task between two others → position = average
- `sanitizeMarkdown()`:
  - Removes script tags
  - Preserves safe markdown

**Coverage Goal**: 80% of business logic

---

### Integration Tests (20% of tests)
**What to Test**:
- Task CRUD API endpoints
- User authentication
- GitHub API integration
- Database transactions

**Example Test Cases**:
- `POST /api/tasks`:
  - Valid request → 201 Created
  - Missing title → 400 Bad Request
  - Unauthorized → 401 Unauthorized
- `GET /api/tasks`:
  - Returns only current user's tasks
  - Filters by status if provided
  - Returns empty array if no tasks
- `POST /api/github/import`:
  - Valid repo → imports issues
  - Invalid repo → 404 Not Found
  - Rate limit exceeded → 429 Too Many Requests

**Coverage Goal**: All API endpoints

---

### E2E Tests (10% of tests)
**What to Test**:
- Complete user journeys
- Cross-browser compatibility
- Mobile responsiveness

**Example Test Cases**:
- **Happy Path**: 
  - User signs up → verifies email → logs in → creates task → drags to "Done" → logs out
- **GitHub Import Flow**:
  - User connects GitHub → selects repo → imports issues → verifies tasks created
- **Error Handling**:
  - User loses connection mid-drag → task reverts → error message shown

**Coverage Goal**: Top 5 user flows

## Test Tools

- **Unit**: Jest, Vitest
- **Integration**: Supertest, Playwright
- **E2E**: Playwright, Cypress
```

## Ready?

Paste the feature catalog and data models below, and I'll generate the test strategy.
