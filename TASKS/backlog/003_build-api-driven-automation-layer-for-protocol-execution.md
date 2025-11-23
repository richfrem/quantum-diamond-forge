# Task: Build API-Driven Automation Layer for Protocol Execution

**Status**: Backlog
**Created**: 2025-11-22
**Owner**: Antigravity
**Priority**: Medium

## Objective
Create an automated execution layer that uses LLM APIs (OpenAI, Anthropic, Google) to run the protocol workflow programmatically, eliminating manual copy-paste for users who prioritize speed over cost.

## Context
Currently, the protocol requires manual copy-paste between:
1. Reading prompts from `prompts/`
2. Pasting to Web LLMs (ChatGPT, Claude, Gemini)
3. Copying output
4. Saving to `docs/`

This is intentional (cost-effective, user control), but some users prefer **speed and automation** over **cost reduction and manual oversight**.

## User Personas

### Manual Mode (Current)
**Who**: Cost-conscious developers, those who want control
**Workflow**: Copy-paste between CLI and web LLMs
**Cost**: $0 (uses free web tiers)
**Time**: ~1-6 hours (depending on mode)

### API Mode (New)
**Who**: Time-sensitive developers, teams, agencies
**Workflow**: Run `./forge.sh run-protocol --mode=lean --idea="..."` → automated
**Cost**: $5-20 per run (API costs)
**Time**: ~10-30 minutes (fully automated)

## Scope

### Phase 1: CLI Automation
Build a Node.js CLI that:
- Reads prompts from `prompts/` or `prompts/lean/`
- Calls LLM APIs (OpenAI, Anthropic, Google) sequentially
- Saves outputs to `docs/`
- Provides progress feedback

**Commands**:
```bash
# Lean mode
./forge.sh run-protocol --mode=lean --idea="Build a polling app"

# Enterprise mode
./forge.sh run-protocol --mode=enterprise --idea="Build a SaaS platform"

# Single step
./forge.sh run-step 1 --mode=lean --input="My idea..."
```

### Phase 2: API Provider Support
Support multiple LLM providers:
- OpenAI (GPT-4, GPT-4 Turbo)
- Anthropic (Claude 3.5 Sonnet)
- Google (Gemini 1.5 Pro)

**Configuration**:
```bash
# .env
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_API_KEY=...

# Default provider
DEFAULT_PROVIDER=openai
```

### Phase 3: Cost Estimation & Tracking
- Estimate cost before running
- Track actual cost per run
- Save cost reports to `logs/`

**Example**:
```bash
$ ./forge.sh run-protocol --mode=lean --estimate
Estimated cost: $8.50 (5 steps × ~$1.70/step)
Proceed? (y/n)
```

## Implementation Steps

### Phase 1: CLI Automation
- [ ] Create `scripts/api_runner.js`
- [ ] Implement prompt loader (reads from `prompts/`)
- [ ] Implement LLM API client (OpenAI first)
- [ ] Implement output saver (writes to `docs/`)
- [ ] Add progress indicators
- [ ] Add error handling (retry logic, fallbacks)

### Phase 2: Multi-Provider Support
- [ ] Add Anthropic API client
- [ ] Add Google API client
- [ ] Add provider selection logic
- [ ] Add provider fallback (if primary fails)

### Phase 3: Cost Tracking
- [ ] Implement token counting
- [ ] Implement cost estimation
- [ ] Add cost tracking to logs
- [ ] Add cost summary report

## Technical Design

### Architecture
```
forge.sh run-protocol
  ↓
scripts/api_runner.js
  ↓
1. Load prompts from prompts/lean/ or prompts/
2. For each step:
   a. Read prompt
   b. Call LLM API (OpenAI/Anthropic/Google)
   c. Save output to docs/
   d. Log progress
3. Generate summary report
```

### API Client Interface
```javascript
class LLMClient {
  async generate(prompt, options) {
    // Returns: { content, tokens, cost }
  }
}

class OpenAIClient extends LLMClient { ... }
class AnthropicClient extends LLMClient { ... }
class GoogleClient extends LLMClient { ... }
```

## Success Criteria
- [ ] User can run full protocol with one command
- [ ] Supports Lean and Enterprise modes
- [ ] Supports OpenAI, Anthropic, Google
- [ ] Provides cost estimates before running
- [ ] Tracks actual costs
- [ ] Handles errors gracefully (retries, fallbacks)

## Out of Scope (Future)
- Streaming output (show LLM responses in real-time)
- Parallel execution (run multiple steps concurrently)
- Custom prompt templates
- Web UI for protocol execution

## Dependencies
- Node.js packages: `openai`, `@anthropic-ai/sdk`, `@google/generative-ai`
- User must provide API keys

## Risks
- API costs can add up quickly (need cost controls)
- API rate limits (need retry logic)
- API outages (need fallback providers)

## Notes
- This is **optional** - manual mode remains the default
- Target users: agencies, teams, time-sensitive projects
- Cost vs speed tradeoff should be clear in docs
