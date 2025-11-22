# GitHub Repository Configuration Guide

This guide documents how to configure the **Quantum Diamond Forge** GitHub repository to enable CI/CD pipelines, security scanning, and automated workflows.

## Prerequisites

- Admin access to the GitHub repository
- Repository: `https://github.com/richfrem/quantum-diamond-forge`

## Step 1: Enable GitHub Actions (done)

GitHub Actions should be enabled by default, but verify:

1. Go to **Settings** → **Actions** → **General**
2. Under "Actions permissions", select:
   - ✅ **Allow all actions and reusable workflows**
3. Under "Workflow permissions", select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

## Step 2: Enable Security Features

1. Go to **Settings** → **Code security and analysis** (Sidebar under "Security").
2. Under the **Advanced Security** section, you will see several options.
3. **Enable** the following features:
   - **Private vulnerability reporting** (Optional)
   - **Dependency graph** (Should be enabled by default)
   - **Dependabot alerts**
   - **Dependabot security updates**
     - *Optional:* Enable **Grouped security updates** to reduce noise.
   - **Secret Protection** -> **Push protection** (Block commits that contain supported secrets).

*(Note: Code scanning / CodeQL analysis requires further setup and is covered in Step 4)*

## Step 3: Verify Workflows Are Detected (done)

After pushing workflow files to `.github/workflows/`, GitHub should automatically detect them:

1. Go to **Actions** tab
2. You should see:
   - **CI** (`ci.yml`) - Runs on push/PR to `main`
   - **Shellcheck** (inside `ci.yml`) - Lints shell scripts
   - **Test CLI Init** (inside `ci.yml`) - Verifies the Forge CLI works

**If workflows don't appear:**
- Ensure files are committed and pushed to the repository
- Check that files are in `.github/workflows/` directory
- Verify YAML syntax is valid (use `npx js-yaml <file>` locally)

## Step 4: Enable GitHub Advanced Security Features (Optional)

### 4.1 Dependabot

Dependabot should be automatically enabled once `.github/dependabot.yml` is pushed.

**Verify:**
1. Go to **Settings** → **Code security and analysis**
2. Under "Dependabot", you should see:
   - ✅ **Dependabot alerts** - Enabled
   - ✅ **Dependabot security updates** - Enabled
   - ✅ **Dependabot version updates** - Enabled (configured via `dependabot.yml`)

**Expected behavior:**
- Scans GitHub Actions dependencies weekly
- Opens PRs for vulnerable or outdated actions
- Groups updates to reduce PR noise

### 4.2 CodeQL Analysis

**Eligibility:**
- **Public repositories:** Free for everyone.
- **Private repositories:** Requires GitHub Advanced Security (GHAS) license.

**Setup Instructions:**
1. Go to **Settings** → **Code security and analysis**.
2. Scroll down to **Code scanning** / **CodeQL analysis`.
3. Click **Set up** (or "Configure").
4. Choose **Default** setup (Recommended).
   - GitHub will automatically detect languages (JavaScript/TypeScript, Python, etc.).
   - It will create a dynamic workflow without you needing to commit a YAML file.
   - Click **Enable CodeQL**.

*(If "Default" is not available, choose "Advanced" and it will generate a `codeql.yml` file for you to commit).*

### 4.3 Secret Scanning

**⚠️ REQUIRES GITHUB ADVANCED SECURITY LICENSE FOR PRIVATE REPOS**

Secret Scanning is only available for:
- **Public repositories** (free, enabled by default)
- **Private repositories with GitHub Advanced Security (GHAS)** license

**If you have a public repo or GHAS license:**
1. Go to **Settings** → **Code security and analysis**
2. Under "Secret scanning":
   - Click **Enable** for "Secret scanning"
   - Click **Enable** for "Push protection" (recommended)

**Alternative for private repos without GHAS:**
- **Local pre-commit hooks** (already configured) - Primary defense
- Hooks scan for secrets before commits reach GitHub
- See `.git/hooks/pre-commit` for implementation

**Test it:**
```bash
# Try to commit a test secret (should be blocked by local pre-commit hook)
echo "OPENAI_API_KEY=<REDACTED>" > test.txt
git add test.txt
git commit -m "test: secret detection"
# Should be blocked locally before even reaching GitHub
```

## Step 5: Configure Branch Protection Rules

1. Go to **Settings** → **Branches**
2. Click **Add branch protection rule**
3. **Branch name pattern:** `main`
4. Enable:
   - ✅ **Require a pull request before merging** (forces you to review changes before production)
   - ❌ **Require approvals** - UNCHECK (not needed for solo dev, check for teams)
   - ✅ **Require status checks to pass before merging**
     - ✅ **Require branches to be up to date before merging**
     - **Add required status checks:**
       - `Test CLI Init` (from CI Pipeline)
       - `Shellcheck` (from CI Pipeline)
   - ✅ **Require conversation resolution before merging** (optional but good practice)
   - ✅ **Do not allow bypassing the above settings**
5. Click **Create**

**Result:** All changes to `main` must:
- Go through a PR (gives you a chance to review)
- Pass CI pipeline (linting, tests)

## Step 6: Configure Notifications

Set up notifications for security alerts:

1. Go to **Settings** → **Notifications**
2. Under "Dependabot alerts":
   - ✅ **Email** - Receive email for new vulnerabilities
3. Under "Secret scanning alerts":
   - ✅ **Email** - Receive email for detected secrets

## Step 7: Verify Everything Works

### 7.1 Test CI Pipeline

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

### 7.2 Test Dependabot

Dependabot runs weekly, but you can trigger it manually:

1. Go to **Insights** → **Dependency graph** → **Dependabot**
2. Click **Check for updates**

### 7.3 Test Secret Scanning

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
1. **Shellcheck** - Lints shell scripts
2. **Test CLI Init** - Verifies the Forge CLI works

### `.github/dependabot.yml`

**Purpose:** Automated dependency updates

**Configuration:**
- **GitHub Actions ecosystem:** Scans workflow files
  - Schedule: Weekly
  - Groups updates

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

# 4. Check repo settings
# Go to Settings → Actions → General → Verify "Allow all actions" is selected
```

## Security Best Practices

1. **Enable all security features:**
   - ✅ Dependabot alerts
   - ✅ Secret scanning
   - ✅ Push protection

2. **Protect main branch:**
   - Require PR reviews
   - Require status checks to pass
   - Prevent force pushes

3. **Use local pre-commit hooks:**
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
- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)
- [Secret Scanning Documentation](https://docs.github.com/en/code-security/secret-scanning)
