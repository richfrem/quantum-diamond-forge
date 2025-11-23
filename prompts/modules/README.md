# Modular Prompt Architecture Guide

## Overview
Instead of using monolithic prompts (like `01_requirements_analysis.md`), you can compose custom workflows using **prompt modules**.

## Why Modular?
- **Shorter prompts** = fewer LLM hallucinations
- **Easier to maintain** = update one module, not entire prompt
- **Flexible** = mix and match modules for your needs
- **Robust** = smaller prompts are more reliable

## How to Use

### Option 1: Use the Forge CLI (Recommended)

The easiest way to use these prompts is via the CLI:

```bash
./forge.sh start
```

This starts the Interactive Kickoff which will guide you to the right prompts (Ultra-Lean, Lean, or Enterprise).

### Option 2: Manual Usage

If you prefer to pick prompts manually:
- **Enterprise**: `prompts/enterprise/01_requirements_analysis.md`
- **Lean**: `prompts/lean/01_requirements_analysis.md`
- **Ultra-Lean**: `prompts/ultra-lean/00_overview.md`

### Option 3: Compose Your Own
Pick and choose modules based on your needs:

**Example: Lightweight Requirements**
```
Use modules:
- prompts/modules/requirements/product_overview.md
- prompts/modules/requirements/feature_catalog.md
- prompts/modules/requirements/user_stories.md

Skip:
- Functional requirements table
- Non-functional requirements
```

**Example: Security-Focused Architecture**
```
Use modules:
- prompts/modules/architecture/c4_diagrams.md
- prompts/modules/architecture/data_models.md
- prompts/modules/security/threat_modeling.md
- prompts/modules/security/authz.md

Skip:
- API design
- Technology stack
```

## Module Directory Structure

```
prompts/modules/
├── requirements/
│   ├── product_overview.md
│   ├── feature_catalog.md
│   ├── functional_requirements.md
│   ├── nonfunctional_requirements.md
│   └── user_stories.md
├── architecture/
│   ├── c4_diagrams.md
│   ├── technology_stack.md
│   ├── api_design.md
│   └── data_models.md
├── security/
│   ├── threat_modeling.md
│   ├── authz.md
│   └── compliance.md
└── testing/
    ├── test_pyramid.md
    ├── performance_testing.md
    └── security_testing.md
```

## Module Format

Each module is self-contained and follows this structure:

```markdown
# [Module Name]

## Purpose
[What this module generates]

## Input Required
[What context the LLM needs]

## Output Format
[Exact structure to generate]

## Example
[Sample output]
```

## Composing Modules

### Method 1: Sequential (Recommended)
Run modules one at a time, feeding output to the next:

1. Run `product_overview.md` → save output
2. Run `feature_catalog.md` + attach previous output → save
3. Run `user_stories.md` + attach all previous outputs → save

### Method 2: Single Prompt
Combine multiple modules into one prompt:

```
I need you to generate:
1. [Copy content from product_overview.md]
2. [Copy content from feature_catalog.md]
3. [Copy content from user_stories.md]
```

**Warning**: This defeats the purpose of modularity. Only use for 2-3 small modules.

## Benefits by Use Case

### Solo Developer (MVP)
**Use**: 3-5 modules only
- Product overview
- Feature catalog (Must-Have only)
- User stories (top 3)
- C4 Level 1
- Data models

**Skip**: Everything else

### Small Team (Production)
**Use**: 8-12 modules
- All requirements modules
- C4 Level 1-2
- API design
- Data models
- Basic threat modeling
- Test pyramid

**Skip**: Compliance, detailed security

### Enterprise Team
**Use**: All modules (15+)
- Full requirements
- C4 Level 1-3
- Full security (STRIDE, compliance)
- Full testing (pyramid + perf + security)

## Migration Guide

### From Monolithic to Modular

**Before** (Monolithic):
```bash
# Copy entire 01_requirements_analysis.md
# Paste to LLM
# Get 5-page output
```

**After** (Modular):
```bash
# Copy product_overview.md
# Paste to LLM → get 1 paragraph

# Copy feature_catalog.md
# Paste to LLM + attach overview → get feature list

# Copy user_stories.md
# Paste to LLM + attach features → get stories
```

**Result**: Same output, but in 3 focused steps instead of 1 giant prompt.

## Tips

1. **Start small**: Use 2-3 modules first, add more as needed
2. **Feed forward**: Always attach previous outputs as context
3. **Iterate**: If output is wrong, re-run just that module
4. **Combine for speed**: If modules are small (<500 words), combine 2-3

## Next Steps

1. Browse `prompts/modules/` to see available modules
2. Pick modules for your use case
3. Run them sequentially
4. Combine outputs into final document
