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
2. Under the **Advanced Security** section, **Enable** the following:
   - **Dependency graph** (Should be enabled by default)
   - **Dependabot alerts**
   - **Dependabot security updates**
     - *Optional:* Enable **Grouped security updates** to reduce noise.
   - **Secret Protection** -> **Push protection** (Block commits that contain supported secrets).
   - **Private vulnerability reporting** (Optional).

## Step 3: Configure CodeQL Analysis

**Eligibility:**
- **Public repositories:** Free for everyone.
- **Private repositories:** Requires GitHub Advanced Security (GHAS) license.

**Setup Instructions:**
1. Still in **Code security and analysis**, scroll down to **Code scanning** / **CodeQL analysis**.
2. Click **Set up** (or "Configure").
3. Choose **Default** setup (Recommended).
   - GitHub will automatically detect languages (JavaScript/TypeScript, Python, etc.).
   - It will create a dynamic workflow without you needing to commit a YAML file.
   - Click **Enable CodeQL**.

*(If "Default" is not available, choose "Advanced" and it will generate a `codeql.yml` file for you to commit).*

## Step 4: Configure Branch Protection Rules

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
