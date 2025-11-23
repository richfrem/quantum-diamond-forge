# Data Models Module

## Purpose
Generate database schema with tables, columns, and relationships.

## Input Required
- Feature catalog
- User stories
- OR brief product description

## Output Format

```markdown
## Data Models

### Table: [table_name]
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| [column] | [type] | [constraints] |
...

**Indexes**:
- `idx_[table]_[column]` on `[column]`

---

### Table: [table_name]
...

## Relationships

\`\`\`mermaid
erDiagram
    TABLE1 ||--o{ TABLE2 : "relationship"
    TABLE2 }o--|| TABLE3 : "relationship"
\`\`\`

**Relationship Details**:
- `table1.id` → `table2.table1_id` (one-to-many)
- `table2.table3_id` → `table3.id` (many-to-one)
```

## Instructions for LLM

1. Define all tables needed for Must-Have features
2. Include primary keys, foreign keys, and essential indexes
3. Use standard SQL types (UUID, VARCHAR, INTEGER, TIMESTAMP, etc.)
4. Show relationships in both diagram and text

## Example Output

```markdown
## Data Models

### Table: users
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| email | VARCHAR(255) | UNIQUE, NOT NULL |
| password_hash | VARCHAR(255) | NOT NULL |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

**Indexes**:
- `idx_users_email` on `email`

---

### Table: tasks
| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PRIMARY KEY |
| user_id | UUID | FOREIGN KEY (users.id), NOT NULL |
| title | VARCHAR(255) | NOT NULL |
| description | TEXT | |
| status | VARCHAR(50) | CHECK (status IN ('todo', 'in_progress', 'done')) |
| position | INTEGER | NOT NULL |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

**Indexes**:
- `idx_tasks_user_id` on `user_id`
- `idx_tasks_status` on `status`

## Relationships

\`\`\`mermaid
erDiagram
    users ||--o{ tasks : "owns"
\`\`\`

**Relationship Details**:
- `users.id` → `tasks.user_id` (one-to-many): A user can have many tasks
```

## Ready?

Paste the feature catalog and user stories below, and I'll generate the data models.
