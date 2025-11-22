# ADR-041: Git Workflow Automation Strategy

**Status:** accepted
**Date:** 2025-11-21
**Deciders:** Gemini 3 "Antigravity"
**Technical Story:** Production Hardening - CI/CD Enhancement
**Related Documents:** `adrs/039_ci_cd_pipeline.md`, `docs/ci-cd/README.md`

---

## Context

During the implementation of GitHub Advanced Security (TASK-0067), the question arose: should we automate git operations (staging, committing, pushing) via scripts to streamline the developer workflow?

This is a common question in modern development, especially when dealing with:
- Multiple files to stage across different directories
- Standardized commit message formats
- Repetitive git workflows
- CI/CD pipeline configurations

## Decision

We will **NOT** automate git commits and pushes via scripts. Instead, we will adopt modern git workflow best practices:

### 1. Pre-commit Hooks (Validation, Not Automation)

**What we use:**
- `.githooks/pre-commit` - Already implemented for secret detection
- Validates staged files before commit
- Blocks commits with security issues

**What we won't do:**
- Auto-stage files
- Auto-generate commit messages
- Auto-push to remote

**Rationale:** Pre-commit hooks should validate, not automate. They ensure quality without removing developer control.

### 2. Git Aliases for Common Workflows

**Recommended aliases** (developers add to `~/.gitconfig`):

```gitconfig
[alias]
    # Quick status
    st = status -sb

    # Stage all changes
    aa = add --all

    # Commit with conventional commit format
    cm = commit -m

    # Commit and push in one step (with confirmation)
    cap = "!f() { git add -A && git commit -m \"$1\" && git push; }; f"

    # Amend last commit
    amend = commit --amend --no-edit

    # Pretty log
    lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit

    # Show what would be committed
    staged = diff --cached
```

**Usage:**
```bash
# Instead of: git add . && git commit -m "feat: add feature" && git push
git cap "feat: add feature"
```

**Rationale:** Aliases provide shortcuts without sacrificing control or visibility.

### 3. Conventional Commits Standard

**Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks (dependencies, build config)
- `ci:` - CI/CD changes
- `perf:` - Performance improvements
- `revert:` - Revert a previous commit

**Examples:**
```bash
git commit -m "feat(auth): add OAuth2 authentication"
git commit -m "fix(api): handle null response from Supabase"
git commit -m "docs(ci-cd): add security scanning guide"
git commit -m "chore(deps): update dependencies via Dependabot"
```

**Rationale:** Standardized commit messages improve git history readability and enable automated changelog generation.

### 4. IDE Git Integration

**Recommended approach:**
- Use Visual Studio Code's built-in Git UI
- Use JetBrains IDE git integration
- Use GitHub Desktop for visual git management

**Benefits:**
- Visual diff review before staging
- Interactive staging (stage specific lines)
- Commit message templates
- Branch visualization
- Conflict resolution tools

**Rationale:** Modern IDEs provide excellent git UIs that are faster and safer than CLI scripts.

### 5. Husky + lint-staged (Future Enhancement)

**What it does:**
- Runs linters/formatters only on staged files
- Executes before commit (via git hooks)
- Automatically fixes formatting issues

**Example configuration:**
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  }
}
```

**Status:** Not implemented yet (tracked in backlog)

**Rationale:** Automates code quality checks without automating git operations.

## Consequences

### Positive

- **Developer control** - Developers review changes before committing
- **Better commit messages** - Thoughtful, contextual messages
- **Safer workflow** - Less risk of committing sensitive data
- **Clean git history** - Meaningful, well-structured commits
- **Flexibility** - Developers can adapt workflow to their needs
- **Learning** - Developers understand git operations

### Negative

- **More manual steps** - Developers must run git commands manually
- **Inconsistent commit messages** - Without enforcement, messages may vary
- **Slower for repetitive tasks** - No one-command solution for complex workflows

### Risks

- **Developers skip validation** - May use `git commit --no-verify` to bypass hooks
  - **Mitigation:** Document importance of pre-commit hooks, enable server-side validation
- **Inconsistent workflows** - Different developers use different approaches
  - **Mitigation:** Document recommended workflow in `docs/ci-cd/README.md`
- **Forgotten steps** - Developers may forget to run tests before pushing
  - **Mitigation:** CI pipeline catches issues, provide git alias shortcuts

## Alternatives Considered

### 1. Automated Commit/Push Scripts

**Example:**
```bash
#!/bin/bash
# auto-commit.sh
git add .
git commit -m "chore: automated commit"
git push
```

**Rejected because:**
- No review of changes before commit
- Generic commit messages lack context
- High risk of committing sensitive data
- Bypasses pre-commit hooks
- Creates messy git history

### 2. Makefile Targets

**Example:**
```makefile
commit:
	git add .
	git commit -m "$(MSG)"
	git push

# Usage: make commit MSG="feat: add feature"
```

**Rejected because:**
- Still automates staging (no review)
- Requires learning Make syntax
- Not cross-platform (Windows compatibility issues)
- Adds dependency on Make

### 3. npm Scripts for Git Operations

**Example:**
```json
{
  "scripts": {
    "commit": "git add . && git commit -m",
    "push": "git push"
  }
}
```

**Rejected because:**
- Mixes package management with version control
- Confuses npm's purpose
- Still requires manual commit message
- No advantage over git aliases

### 4. Git GUI Tools (GitHub Desktop, GitKraken)

**Considered but not mandated:**
- Excellent for visual learners
- Great for conflict resolution
- Some developers prefer CLI

**Decision:** Recommend but don't require. Developers choose their preferred tool.

## Implementation

### Developer Workflow (Recommended)

**For routine commits:**
```bash
# 1. Review changes
git status

# 2. Stage specific files (or use git add -A for all)
git add .github/dependabot.yml
git add .github/workflows/codeql.yml
git add docs/ci-cd/README.md

# 3. Review staged changes
git diff --cached

# 4. Commit with conventional commit format
git commit -m "feat(security): configure GitHub Advanced Security

- Add Dependabot for dependency scanning
- Add CodeQL for security analysis
- Update CI/CD docs with security guide

Refs: TASK-0067, ADR-040"

# 5. Push to remote
git push origin main
```

**For quick fixes (using alias):**
```bash
# Add alias to ~/.gitconfig first
git cap "fix(typo): correct documentation typo"
```

### Pre-commit Hook Enhancement (Future)

Consider adding to `.githooks/pre-commit`:
- ESLint check on staged files
- Prettier formatting check
- Unit test execution (optional, may be slow)
- Commit message format validation

### Documentation Updates

Add to `docs/ci-cd/GIT_WORKFLOW.md` and reference in `docs/ci-cd/README.md`:
- Recommended git aliases
- Conventional commit examples
- Pre-commit hook usage
- IDE git integration tips

## Success Metrics

- **Commit message quality** - 80%+ of commits follow conventional format
- **Pre-commit hook compliance** - 95%+ of commits pass validation
- **Developer satisfaction** - Positive feedback on workflow efficiency
- **Git history clarity** - Readable, meaningful commit history

## References

- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [Git Hooks Documentation](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- `docs/ci-cd/GIT_WORKFLOW.md` - Git workflow quick reference guide
- `docs/ci-cd/README.md` - CI/CD pipeline documentation

## Review Schedule

Review this decision in 3 months to assess:
- Developer workflow efficiency
- Commit message quality
- Pre-commit hook effectiveness
- Need for additional automation (e.g., Husky + lint-staged)
