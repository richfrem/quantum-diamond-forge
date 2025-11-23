# Red Team Analysis Package - Usage Instructions

## What You Have

1. **`prompts/REDTEAM/redteam_snapshot_v2.txt`** - Complete Protocol v2.0 snapshot (20 files)
2. **`prompts/REDTEAM/redteam_v2_analysis.md`** - Red team analysis prompt

## How to Use

### Step 1: Prepare the Package
The snapshot and prompt are already generated. You can find them at:
- Snapshot: `prompts/REDTEAM/redteam_snapshot_v2.txt`
- Prompt: `prompts/REDTEAM/redteam_v2_analysis.md`

### Step 2: Submit to External LLM

**Option A: Copy-Paste Method**
1. Open `prompts/redteam_v2_analysis.md`
2. Copy the entire prompt
3. Open your LLM of choice (Grok, GPT-4, Claude)
4. Paste the prompt
5. Attach or paste the contents of `redteam_snapshot_v2.txt`
6. Submit

**Option B: Combined File Method**
Create a single file with both:
```bash
cat prompts/redteam_v2_analysis.md redteam_snapshot_v2.txt > redteam_package.txt
```
Then paste `redteam_package.txt` into the LLM.

### Step 3: Recommended LLMs

**Best for Protocol Analysis:**
- **Claude 3.5 Sonnet** - Excellent at structured analysis
- **GPT-4** - Strong at identifying edge cases
- **Grok** - Good for unconventional perspectives

**Tip:** Submit to multiple LLMs to get diverse perspectives.

### Step 4: Process Feedback

**Save LLM Responses:**
1. Save each LLM's response to the `INBOX/` folder
   - Example: `INBOX/grok_redteam_feedback.md`
   - Example: `INBOX/claude_redteam_feedback.md`

2. Tell Antigravity: "Check the INBOX for red team feedback"

3. Antigravity will:
   - Review the feedback
   - Identify actionable improvements
   - Create follow-up tasks if needed
   - Request clarification if needed

4. After addressing feedback, the INBOX file will be deleted or archived

## Regenerating the Snapshot

If you make changes to Protocol v2.0 and want a fresh snapshot:

```bash
node scripts/capture_redteam_snapshot.js redteam_snapshot_v2.txt
```

This will regenerate the snapshot with the latest files.
