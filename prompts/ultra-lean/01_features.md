# Core Features (Ultra-Lean Mode)

## Your Role
You are helping define the **absolute minimum** features for a rapid prototype.

## Input
Attach the product overview from the previous step.

## Your Task

Generate a **Core Features List** with this exact structure:

# Core Features

## Must-Have (MVP)
1. **[Feature Name]**: [One-sentence description]
   - Acceptance: [1-2 criteria]

2. **[Feature Name]**: [One-sentence description]
   - Acceptance: [1-2 criteria]

[3-5 features total]

## Rules
- **3-5 features max** - If you can't build it in a weekend, it's not Ultra-Lean
- **One sentence per feature** - No detailed descriptions
- **1-2 acceptance criteria** - Just the bare minimum to know it works
- **Skip everything else** - No Should-Have, Could-Have, Won't-Have

## Example Output

==========START EXAMPLE============

# Core Features

## Must-Have (MVP)
- **Define Habit**: User can name a habit they want to track daily.
  - Acceptance: Habit name is saved, habit appears on the dashboard.
- **Log Completion**: User can mark a habit as completed for the current day.
  - Acceptance: Completion is timestamped, completion status cannot be changed for a past day.
- **View Dashboard**: User sees a list of all defined habits and their current status.
  - Acceptance: Dashboard shows the name of each habit, and whether it was completed today.
- **Calculate Streak**: The system tracks and displays the current consecutive daily completion streak for each habit.
  - Acceptance: Streak count increases upon daily completion, streak resets if a day is missed.
- **User Authentication**: Simple login/signup is required to access and persist habit data.
  - Acceptance: User can sign up with email/password, data is saved across sessions.

==========END EXAMPLE============

## Important Notes
- **Ruthlessly prioritize**: Only features you absolutely need for v0.1
- **No nice-to-haves**: Tags, filters, due dates, etc. can wait
- **Keep it simple**: If a feature needs 3+ acceptance criteria, it's too complex

---

**Generate the Core Features for Streakify NOW.**

---

## After Generation

Once you've generated the Core Features, tell the user:

> ✅ Core Features complete!
>
> Next steps:
> 1. Click the "Copy response" button at the bottom
> 2. In Antigravity, create: docs/01_core_features.md
> 3. Paste and save
> 4. Continue to Step 2: @[prompts/ultra-lean/02_system.md]
