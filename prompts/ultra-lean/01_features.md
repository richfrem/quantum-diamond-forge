# Core Features (Ultra-Lean Mode)

## Your Role
You are helping define the **absolute minimum** features for a rapid prototype.

## Input
Attach the product overview from the previous step.

## Your Task

Generate a **Core Features List** with this exact structure:

```markdown
# Core Features

## Must-Have (MVP)
1. **[Feature Name]**: [One-sentence description]
   - Acceptance: [1-2 criteria]

2. **[Feature Name]**: [One-sentence description]
   - Acceptance: [1-2 criteria]

[3-5 features total]
```

## Rules
- **3-5 features max** - If you can't build it in a weekend, it's not Ultra-Lean
- **One sentence per feature** - No detailed descriptions
- **1-2 acceptance criteria** - Just the bare minimum to know it works
- **Skip everything else** - No Should-Have, Could-Have, Won't-Have

## Example Output

```markdown
# Core Features

## Must-Have (MVP)
1. **Create Poll**: User can create a poll with a question and 2-5 options
   - Acceptance: Poll has unique URL, options are saved

2. **Vote**: Anyone with the link can vote once
   - Acceptance: Vote is recorded, user can't vote twice

3. **View Results**: See real-time vote counts
   - Acceptance: Results update without refresh, show percentages

4. **Share Link**: Copy poll URL to clipboard
   - Acceptance: URL works in any browser, no login required

5. **Export Results**: Download results as CSV
   - Acceptance: CSV includes question, options, vote counts
```

## Important Notes
- **Ruthlessly prioritize**: Only features you absolutely need for v0.1
- **No nice-to-haves**: Tags, filters, due dates, etc. can wait
- **Keep it simple**: If a feature needs 3+ acceptance criteria, it's too complex

## Ready?

Paste the product overview below, and I'll generate the core features.
