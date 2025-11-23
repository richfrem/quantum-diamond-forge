# Threat Modeling Module

## Purpose
Generate a STRIDE threat model for the application.

## Input Required
- C4 diagrams
- Data models
- Feature catalog

## Output Format

```markdown
## Threat Model (STRIDE)

### Spoofing
| Threat | Attack Vector | Mitigation |
|--------|---------------|------------|
| [Threat description] | [How attacker could exploit] | [How we prevent it] |

### Tampering
| Threat | Attack Vector | Mitigation |
|--------|---------------|------------|
...

### Repudiation
...

### Information Disclosure
...

### Denial of Service
...

### Elevation of Privilege
...

## High-Priority Threats

1. **[Threat Name]** (Severity: High)
   - **Risk**: [Description]
   - **Mitigation**: [Action plan]
```

## Instructions for LLM

1. Identify 2-3 threats per STRIDE category
2. Focus on realistic, high-impact threats
3. Provide specific mitigations (not generic advice)
4. Highlight top 3-5 high-priority threats

## Example Output

```markdown
## Threat Model (STRIDE)

### Spoofing
| Threat | Attack Vector | Mitigation |
|--------|---------------|------------|
| User impersonation | Attacker steals session token | Use HTTP-only cookies, short session timeouts (15 min) |
| GitHub OAuth bypass | Attacker forges OAuth callback | Validate state parameter, verify token with GitHub |

### Tampering
| Threat | Attack Vector | Mitigation |
|--------|---------------|------------|
| Task data modification | Attacker modifies task via API | Validate user owns task before update, use CSRF tokens |
| SQL injection | Attacker injects SQL via task title | Use parameterized queries, input validation |

### Repudiation
| Threat | Attack Vector | Mitigation |
|--------|---------------|------------|
| Deny task deletion | User claims they didn't delete task | Log all delete operations with user ID and timestamp |

### Information Disclosure
| Threat | Attack Vector | Mitigation |
|--------|---------------|------------|
| Expose other users' tasks | Attacker guesses task IDs | Use UUIDs, enforce user ownership checks |
| Leak GitHub tokens | Token exposed in logs or errors | Never log tokens, use environment variables |

### Denial of Service
| Threat | Attack Vector | Mitigation |
|--------|---------------|------------|
| API rate limiting bypass | Attacker floods API with requests | Implement rate limiting (100 req/min per IP) |
| Database overload | Attacker creates millions of tasks | Limit tasks per user (1000 max) |

### Elevation of Privilege
| Threat | Attack Vector | Mitigation |
|--------|---------------|------------|
| Access admin endpoints | Attacker guesses admin routes | No admin routes in MVP, use role-based access later |

## High-Priority Threats

1. **SQL Injection** (Severity: High)
   - **Risk**: Attacker could read/modify all database data
   - **Mitigation**: Use ORM (Prisma) with parameterized queries, validate all inputs

2. **Session Hijacking** (Severity: High)
   - **Risk**: Attacker steals session token and impersonates user
   - **Mitigation**: HTTP-only cookies, HTTPS only, 15-minute session timeout

3. **Unauthorized Task Access** (Severity: Medium)
   - **Risk**: User A could view/modify User B's tasks
   - **Mitigation**: Enforce user ownership checks on all task operations
```

## Ready?

Paste the C4 diagrams, data models, and feature catalog below, and I'll generate the threat model.
