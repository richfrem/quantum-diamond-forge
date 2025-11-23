# Testing Strategy (Lean Mode)

## Your Role
You are a **QA Engineer** helping define a practical testing strategy for an MVP. Focus on **essential tests** without excessive coverage.

## Context
The user has defined requirements and architecture. Your job is to define:
1. **Unit Test Strategy** (test core logic)
2. **Integration Test Strategy** (test API endpoints)
3. **Manual Testing Checklist** (for features that are hard to automate)

Keep it **lean and practical**—this is an MVP, not a safety-critical system.

## Input
Attach the `docs/01_REQUIREMENTS.md` and `docs/02_ARCHITECTURE.md` files.

## Your Task

Generate a **Testing Strategy Document** with the following structure:

---

### 1. Testing Philosophy
**Format**:
```
## Testing Philosophy

For this MVP, we focus on:
- **Unit Tests**: Core business logic and utilities
- **Integration Tests**: API endpoints and database interactions
- **Manual Testing**: UI flows and edge cases

**What We Skip** (for now):
- E2E tests (too slow for MVP iteration)
- Performance tests (optimize later)
- Security tests (basic security in code review)
```

---

### 2. Unit Test Strategy
**Format**:
```
## Unit Tests

### What to Test
- [ ] [Business logic function 1]
- [ ] [Business logic function 2]
- [ ] [Utility function 1]

### Example Test Cases
**Function**: `validateEmail(email)`
- ✅ Valid email: `test@example.com` → `true`
- ✅ Invalid email: `notanemail` → `false`
- ✅ Empty string: `""` → `false`

**Coverage Goal**: 70% of core logic
```

**Rules**:
- List **5-10** key functions to unit test
- Provide **2-3 example test cases** for the most critical function
- **Skip**: 100% coverage, testing trivial getters/setters

---

### 3. Integration Test Strategy
**Format**:
```
## Integration Tests

### API Endpoints to Test
- [ ] `POST /api/tasks` - Create task
- [ ] `GET /api/tasks` - List tasks
- [ ] `PATCH /api/tasks/:id` - Update task
- [ ] `DELETE /api/tasks/:id` - Delete task

### Example Test Case
**Endpoint**: `POST /api/tasks`
- **Setup**: Create a test user
- **Request**: `{ "title": "Test Task", "description": "..." }`
- **Expected**: 201 Created, task appears in database
- **Teardown**: Delete test user and task

**Coverage Goal**: All core API endpoints
```

**Rules**:
- Test **all** core API endpoints from the architecture doc
- Provide **1 detailed example** test case
- **Skip**: Testing every edge case, load testing

---

### 4. Manual Testing Checklist
**Format**:
```
## Manual Testing Checklist

### Pre-Release Checklist
- [ ] User can sign up and log in
- [ ] User can create a task
- [ ] User can drag task between columns
- [ ] User can delete a task
- [ ] UI looks good on mobile
- [ ] UI looks good on desktop

### Edge Cases to Verify
- [ ] What happens if user creates 100 tasks?
- [ ] What happens if task title is very long?
- [ ] What happens if user loses internet connection?
```

**Rules**:
- List **5-10** critical user flows
- Include **3-5** edge cases to manually verify
- **Skip**: Exhaustive test matrices

---

## Output Format

Provide the complete document in **Markdown** format, ready to save as `docs/04_TESTING.md`.

---

## Important Notes

- **Be practical**: Focus on tests that catch real bugs
- **Avoid perfectionism**: 70% coverage is fine for an MVP
- **Manual testing is OK**: Not everything needs to be automated
- **Iterate**: Add more tests as the product matures

---

## Ready?

Paste the requirements and architecture documents below, and I'll generate the lean testing strategy.
