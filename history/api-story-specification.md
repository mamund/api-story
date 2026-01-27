# Api story specification and authoring guide

## Status of this document

This document defines the canonical structure, required sections, and authoring guidance for API Stories.
API Stories are design-time artifacts intended to be stable, reviewable inputs into an automated API design pipeline.

---

## 1. Purpose of an api story

An API Story captures what a system must do and how a consumer experiences it, without committing prematurely to transport, protocol details, or implementation choices.

An API Story is:
- narrative, but structured
- business-readable, but technically precise
- declarative, not procedural
- an input to ALPS, OpenAPI, documentation, and tests

An API Story is not:
- an OpenAPI document
- a workflow engine definition
- a UI specification
- an implementation plan

---

## 2. Required document sections

Every conforming API Story must contain the following sections, in the order listed.

### 2.1 Purpose

State why the system exists and what problem it solves.

```markdown
## Purpose
We need to track Task records to improve customer follow-up accuracy.
```

---

### 2.2 Data properties (ontology candidates)

Declare the conceptual data elements the system must track.

Each property must include:
- name
- description
- type
- constraints (if any)

```markdown
## Data Properties
- **id**: Unique identifier for each task [uuid]
- **title**: Short summary of the task [string]
- **status**: Current task state (active, completed) [enum]
```

---

### 2.3 Resources or states (taxonomy candidates)

Define the distinct application states a client can observe or navigate.

Each state must include:
- name
- description
- actions available in that state

```markdown
## Resources
- **Home**
  Entry point into the system.
  Actions: ListTasks, CreateNewTask

- **TaskItem**
  View of a single task record.
  Actions: UpdateStatusOfTask, DeleteTask
```

---

### 2.4 Actions (choreography candidates)

Describe the allowed operations in the system in a transport-agnostic way.

Each action must include:
- name
- description
- inputs
- required inputs
- returns (target state)
- type

Action types:
- Safe
- Idempotent
- Unsafe
- Delete

```markdown
## Actions

- **CreateNewTask**
  Inputs: id, title, status
  Required: id, title, status
  Returns: TaskCollection
  Type: Unsafe
```

---

### 2.5 Rules

Capture cross-cutting constraints and business rules.

```markdown
## Rules
- When creating a new task, the client must supply a globally unique `id`.
```

---

## 3. Structural integrity requirements

An API Story is valid if:
- Every action referenced in a state is defined
- Every action return value references a valid state
- Every input references a declared data property
- No duplicate names exist across sections
- All states are reachable, except entry states

---

## 4. Optional sections

Optional sections add clarity and reduce ambiguity. Include them when they influence design decisions.

---

### 4.1 Roles

Roles define who is allowed to perform actions.

```markdown
## Roles
- **user**: Standard authenticated user
- **admin**: Privileged system administrator
- **service**: Trusted automated process
```

Usage in actions:

```markdown
AllowedRoles: admin
```

---

### 4.2 Error conditions

Describe known failure modes in domain language.

```markdown
## Error Conditions

### CreateNewTask
- **DuplicateId**: The supplied id already exists
- **MissingRequiredField**: A required field was not provided
```

---

### 4.3 Observability notes

Identify what should be observable when actions occur.

```markdown
## Observability Notes
- Emit `task.created` events when tasks are created
- Audit all status changes
```

---

### 4.4 Authorization notes

Describe authorization expectations without procedural detail.

```markdown
## Authorization Notes
- Only admins may delete tasks
- Users may update tasks they created
```

---

### 4.5 Performance expectations

Capture scale and responsiveness assumptions.

```markdown
## Performance Expectations
- Support collections up to 10,000 tasks
- Status updates may be asynchronous under load
```

---

### 4.6 Data classification

Signal sensitivity and handling expectations.

```markdown
## Data Classification
- Task descriptions may contain user-provided content
- Audit records must not expose credentials
```

---

### 4.7 Lifecycle notes

Clarify long-term behavior and retention.

```markdown
## Lifecycle Notes
- Completed tasks may be archived after 90 days
- Task identifiers must never be reused
```

---

## 5. Canonical formats

API Stories may be authored in Markdown, YAML, or JSON.
A common approach is authoring in Markdown and compiling to YAML for validation.

---

## 6. Relationship to downstream specifications

A well-formed API Story enables generation of:
- ALPS profiles
- OpenAPI specifications
- HTML documentation
- Tests and mocks

The API Story is the root artifact. Everything else is derived.

---

## 7. Author checklist

Before considering an API Story complete, confirm:
- Purpose is clear and non-technical
- Every state has at least one action
- Every action leads somewhere meaningful
- All rules are explicit
- Naming is consistent throughout
