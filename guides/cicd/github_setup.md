# GitHub Repository Configuration Guide

This guide documents how to configure the PlumbingPOC GitHub repository to enable CI/CD pipelines, security scanning, and automated workflows.

## Prerequisites

- Admin access to the GitHub repository
- Repository: `https://github.com/richfrem/PlumbingPoC`

## Step 1: Enable GitHub Actions (done)

GitHub Actions should be enabled by default, but verify:

1. Go to **Settings** → **Actions** → **General**
2. Under "Actions permissions", select:
   - ✅ **Allow all actions and reusable workflows**
3. Under "Workflow permissions", select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

## Step 2: Verify Workflows Are Detected (done)

After pushing workflow files to `.github/workflows/`, GitHub should automatically detect them:

1. Go to **Actions** tab
2. You should see:
   - **CI Pipeline** (`ci.yml`) - Runs on push/PR to `main`
   - **CodeQL Security Analysis** (`codeql.yml`) - Runs on push/PR to `main` + weekly schedule

**If workflows don't appear:**
- Ensure files are committed and pushed to the repository
- Check that files are in `.github/workflows/` directory
- Verify YAML syntax is valid (use `npx js-yaml <file>` locally)

## Step 3: Enable GitHub Advanced Security Features

### 3.1 Dependabot

Dependabot should be automatically enabled once `.github/dependabot.yml` is pushed.

**Verify:**
1. Go to **Security** → **Code security and analysis**
2. Under "Dependabot", you should see:
   - ✅ **Dependabot alerts** - Enabled
   - ✅ **Dependabot security updates** - Enabled
   - ✅ **Dependabot version updates** - Enabled (configured via `dependabot.yml`)

**Expected behavior:**
- Scans npm dependencies weekly (Mondays at 9:00 AM)
- Opens PRs for vulnerable or outdated packages
- Groups minor/patch updates to reduce PR noise

### 3.2 CodeQL Analysis

**⚠️ REQUIRES GITHUB ADVANCED SECURITY LICENSE FOR PRIVATE REPOS**

CodeQL is only available for:
- **Public repositories** (free)
- **Private repositories with GitHub Advanced Security (GHAS)** license

**Current Status:** Disabled (workflow exists but is disabled in GitHub UI)

**If you have a public repo or GHAS license:**
1. Enable the workflow in **Actions** → **CodeQL Security Analysis** → **Enable workflow**
2. Verify it runs successfully on push/PR to `main` and weekly on Mondays
3. View results in **Security** → **Code scanning**

**Alternative for private repos without GHAS:**
- Rely on local pre-commit hooks for basic code quality
- Use ESLint with security plugins
- Consider making the repo public if possible

### 3.3 Secret Scanning

**⚠️ REQUIRES GITHUB ADVANCED SECURITY LICENSE FOR PRIVATE REPOS**

Secret Scanning is only available for:
- **Public repositories** (free, enabled by default)
- **Private repositories with GitHub Advanced Security (GHAS)** license

**Current Status:** Not available (private repo without GHAS license)

**If you have a public repo or GHAS license:**
1. Go to **Settings** → **Code security and analysis**
2. Under "Secret scanning":
   - Click **Enable** for "Secret scanning"
   - Click **Enable** for "Push protection" (recommended)

**Alternative for private repos without GHAS:**
- **Local pre-commit hooks** (already configured) - Primary defense
- Hooks scan for secrets before commits reach GitHub
- See `.githooks/pre-commit` for implementation

**Test it:**
```bash
# Try to commit a test secret (should be blocked by local pre-commit hook)
echo "OPENAI_API_KEY=<REDACTED>" > test.txt
git add test.txt
git commit -m "test: secret detection"
# Should be blocked locally before even reaching GitHub
```

## Step 4: Configure Branch Protection Rules

⚠️ **Important:** Branch protection rules are **not enforced** on private repositories with free GitHub accounts. They will only activate if you:
- Upgrade to GitHub Team or Enterprise
- Make the repository public
- However, it's still recommended to configure them now so they're ready when/if you upgrade.

### For Solo Developers (Recommended Setup)

Use a simplified two-tier workflow: `dev` → `main`

#### 4.1 Protect `main` Branch

1. Go to **Settings** → **Branches**
2. Click **Add branch protection rule**
3. **Branch name pattern:** `main`
4. Enable:
   - ✅ **Require a pull request before merging** (forces you to review changes before production)
   - ❌ **Require approvals** - UNCHECK (not needed for solo dev)
   - ✅ **Require status checks to pass before merging**
     - ✅ **Require branches to be up to date before merging**
     - **Add required status checks:**
       - `Validate (Lint, Test, Build)` (from CI Pipeline)
       - `CodeQL` (from CodeQL workflow)
   - ✅ **Require conversation resolution before merging** (optional but good practice)
   - ✅ **Do not allow bypassing the above settings**
5. Click **Create**

**Result:** All changes to `main` must:
- Go through a PR (gives you a chance to review)
- Pass CI pipeline (linting, tests, build)
- Pass CodeQL security analysis
- Get a Netlify Deploy Preview for testing

#### 4.2 Protect `dev` Branch

1. Click **Add branch protection rule** again
2. **Branch name pattern:** `dev`
3. Enable:
   - ❌ **Require a pull request before merging** - UNCHECK (allows direct pushes for rapid iteration)
   - ✅ **Require status checks to pass before merging**
     - ✅ **Require branches to be up to date before merging**
     - **Add required status checks:**
       - `Validate (Lint, Test, Build)`
       - `CodeQL`
4. Click **Create**

**Result:** Changes to `dev`:
- Can be pushed directly (no PR needed)
- Must still pass CI and security checks
- Gives you flexibility for rapid development

#### 4.3 Optional: `test` Branch

Only create a `test` branch if you:
- Have multiple developers
- Need a dedicated staging environment
- Want to batch features before production

For solo development, `dev` → `main` is sufficient.

### For Team Development

If you have multiple developers, use a three-tier workflow: `feature/*` → `dev` → `test` → `main`

Configure `test` branch the same as `dev`, and add PR approval requirements to `main` (set "Require approvals" to 1 or 2).

## Step 5: Configure Notifications

Set up notifications for security alerts:

1. Go to **Settings** → **Notifications**
2. Under "Dependabot alerts":
   - ✅ **Email** - Receive email for new vulnerabilities
3. Under "Secret scanning alerts":
   - ✅ **Email** - Receive email for detected secrets

## Step 6: Verify Everything Works

### 6.1 Test CI Pipeline

```bash
# Create a test branch
git checkout -b test/ci-pipeline

# Make a small change
echo "# Test" >> README.md

# Commit and push
git add README.md
git commit -m "test: verify CI pipeline"
git push origin test/ci-pipeline

# Create a PR on GitHub: test/ci-pipeline -> main
# Verify CI pipeline runs and passes
```

### 6.2 Test CodeQL

CodeQL runs automatically with the CI pipeline. Check the **Security** tab after the workflow completes.

### 6.3 Test Dependabot

Dependabot runs weekly, but you can trigger it manually:

1. Go to **Insights** → **Dependency graph** → **Dependabot**
2. Click **Check for updates**

### 6.4 Test Secret Scanning

If enabled, try pushing a test secret:

```bash
# This should be blocked by local pre-commit hook
echo "API_KEY=test123" > secret.txt
git add secret.txt
git commit -m "test: secret scanning"
# Blocked locally!

# If you bypass local hook with --no-verify, GitHub will block the push
```

## Workflow Files Reference

### `.github/workflows/ci.yml`

**Purpose:** Continuous Integration pipeline

**Triggers:**
- Push to `main` branch
- Pull requests to `main` branch

**Jobs:**
1. **Validate** - Runs linting, unit tests, and frontend build

**Steps:**
- Checkout code
- Setup Node.js 20
- Install dependencies (`npm ci`)
- Run ESLint (`npm run lint`)
- Run unit tests (`npm run test:unit`)
- Build frontend (`npm run build`)

### `.github/workflows/codeql.yml`

**Status:** ⚠️ **DISABLED** (requires GitHub Advanced Security license for private repos)

**Purpose:** Security vulnerability scanning

**Triggers:**
- Push to `main` branch
- Pull requests to `main` branch
- Weekly schedule (Mondays at 6:00 AM UTC)

**Jobs:**
1. **Analyze** - Scans JavaScript/TypeScript code for security issues

**Steps:**
- Checkout code
- Initialize CodeQL (security-extended query suite)
- Setup Node.js 20
- Install dependencies (`npm ci`)
- Perform CodeQL analysis
- Upload results to GitHub Security tab

**Note:** This workflow file exists but is disabled in the GitHub UI. It will fail if enabled without a GHAS license.

### `.github/dependabot.yml`

**Purpose:** Automated dependency updates

**Configuration:**
- **npm ecosystem:** Scans package.json and package-lock.json
  - Schedule: Weekly on Mondays at 9:00 AM
  - Groups minor/patch updates for dev and production dependencies
  - Opens up to 10 PRs at a time
  - Labels: `dependencies`, `security`
  - Commit message prefix: `chore(deps):`

- **GitHub Actions ecosystem:** Scans workflow files
  - Schedule: Weekly on Mondays at 9:00 AM
  - Labels: `dependencies`, `github-actions`
  - Commit message prefix: `ci:`

## Troubleshooting

### Workflows Not Appearing in Actions Tab

**Symptoms:** Actions tab shows "Get started with GitHub Actions" instead of workflows

**Causes:**
1. Workflow files not committed/pushed
2. Workflow files in wrong directory
3. YAML syntax errors
4. GitHub Actions disabled in repo settings

**Solutions:**
```bash
# 1. Verify files are committed
git ls-files .github/workflows/

# 2. Verify files are pushed
git log --oneline --name-only | grep workflows

# 3. Validate YAML syntax
npx js-yaml .github/workflows/ci.yml
npx js-yaml .github/workflows/codeql.yml

# 4. Check repo settings
# Go to Settings → Actions → General → Verify "Allow all actions" is selected
```

### CI Pipeline Fails

**Common issues:**
- **Linting errors:** Run `npm run lint` locally to fix
- **Test failures:** Run `npm run test:unit` locally to debug
- **Build failures:** Run `npm run build` locally to reproduce

### CodeQL Fails

**Common issues:**
- **Out of memory:** CodeQL requires significant memory for large codebases
- **Dependency installation fails:** Check `npm ci` step logs

### Dependabot Not Opening PRs

**Possible causes:**
- Configuration file has syntax errors
- No outdated/vulnerable dependencies found
- PR limit reached (default: 10)

**Verify:**
```bash
# Validate dependabot.yml
npx js-yaml .github/dependabot.yml

# Check for outdated dependencies locally
npm outdated

# Check for vulnerabilities locally
npm audit
```

## Security Best Practices

1. **Enable all security features:**
   - ✅ Dependabot alerts
   - ✅ Secret scanning
   - ✅ CodeQL analysis
   - ✅ Push protection

2. **Protect main branch:**
   - Require PR reviews
   - Require status checks to pass
   - Prevent force pushes

3. **Review security alerts promptly:**
   - Check Security tab weekly
   - Prioritize high/critical vulnerabilities
   - Update dependencies regularly

4. **Use local pre-commit hooks:**
   - Catch secrets before pushing
   - Enforce code quality locally
   - Faster feedback loop

## Related Documentation

- [CI/CD Pipeline Documentation](./overview.md)
- [Git Workflow Guide](./git_workflow.md)
- [How to Commit Guide](./how_to_commit.md)
- [ADR-039: CI/CD Pipeline Strategy](../../docs/adr/039_ci_cd_pipeline.md)
- [ADR-040: Security Scanning Strategy](../../docs/adr/040_security_scanning_strategy.md)
- [Manual Setup Guide](../../TASKS/active/0067_MANUAL_SETUP_GUIDE.md)

## External Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [CodeQL Documentation](https://codeql.github.com/docs/)
- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)
- [Secret Scanning Documentation](https://docs.github.com/en/code-security/secret-scanning)
