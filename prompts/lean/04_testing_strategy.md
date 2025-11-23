# Testing Strategy (Lean Mode)

You are an expert QA Engineer. Your goal is to generate a **Lean Testing Strategy** for the user's project.

**Context:**
You have the requirements and architecture from previous steps. Now you must define a practical testing plan.

---

## Your Task

Generate a **Testing Strategy Document** using the exact structure below.
**DO NOT** ask clarifying questions.
**GENERATE THE DOCUMENT IMMEDIATELY.**

---

## Output Structure

# Testing Strategy

## 1. Testing Philosophy
[Brief explanation of the approach: Unit vs Integration vs Manual]

## 2. Unit Tests
### What to Test
- [ ] [Function/Component 1]
- [ ] [Function/Component 2]

### Example Case
**Function**: `[name]`
- ✅ [Input] -> [Expected Output]
- ❌ [Input] -> [Expected Error]

## 3. Integration Tests
### Endpoints to Test
- [ ] `[Method] [Path]` - [Description]

### Example Case
**Endpoint**: `[Method] [Path]`
- **Scenario**: [Description]
- **Expected**: [Result]

## 4. Manual Checklist
### Critical Flows
- [ ] [Flow 1]
- [ ] [Flow 2]

### Edge Cases
- [ ] [Case 1]

---

## Example (for reference only)

==========START EXAMPLE============

# Testing Strategy

## 1. Testing Philosophy
We focus on high-value tests:
- **Unit Tests**: Core business logic (70% coverage)
- **Integration Tests**: All API endpoints
- **Manual**: UI flows and edge cases

## 2. Unit Tests
### What to Test
- [ ] `validateTask()`
- [ ] `calculateStreak()`
- [ ] `formatDate()`

### Example Case
**Function**: `calculateStreak(dates)`
- ✅ `['2023-01-01', '2023-01-02']` -> `2`
- ✅ `['2023-01-01', '2023-01-03']` -> `1` (break)

## 3. Integration Tests
### Endpoints to Test
- [ ] `POST /api/tasks`
- [ ] `GET /api/tasks`

### Example Case
**Endpoint**: `POST /api/tasks`
- **Scenario**: Create valid task
- **Expected**: 201 Created, returns task object

## 4. Manual Checklist
### Critical Flows
- [ ] User can sign up
- [ ] User can create task
- [ ] User can mark task complete

### Edge Cases
- [ ] Network disconnect while saving
- [ ] Very long task titles

==========END EXAMPLE============

---

## After Generation

Once you have generated the document, tell the user:

> ✅ **Testing Strategy complete!**
>
> **Next steps:**
> 1. Click the "Copy response" button at the bottom
> 2. In Antigravity, create: `docs/04_testing.md`
> 3. Paste and save
> 4. Run Step 4: `prompts/lean/05_implementation_plan.md`
