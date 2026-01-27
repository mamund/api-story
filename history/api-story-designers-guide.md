# Api story designer’s guide

## Audience

This guide is for product owners, API designers, and business analysts who want to write effective API Story documents.

API Stories serve as the starting point for generating ALPS profiles, OpenAPI specifications, documentation, tests, and related artifacts. They are not an alternative to those specifications; they are the upstream design input that makes those specifications coherent.

---

## Purpose of an api story

An API Story defines what a system needs to do using plain, structured language.

It bridges business intent and technical modeling by making goals, states, actions, and constraints explicit before interface details are fixed. An API Story captures intent early, while change is still inexpensive, and preserves that intent as designs move toward implementation.

API Stories are inputs to an API design pipeline that may include ALPS, OpenAPI, documentation generation, and testing. They are written for humans first, but structured so they can be processed by tools later.

---

## Core principles

When writing an API Story:

- describe behavior before structure
- name states and actions explicitly
- use stable, domain-level language
- avoid transport, protocol, or framework detail
- prefer clarity over completeness

If a decision would normally surface during implementation or review, it likely belongs in the story.

---

## Required sections

Every API Story must include the following sections.

### 1. Purpose

Briefly explain what the system or API is intended to do.

```markdown
## Purpose
We need to track task records in order to improve customer follow-up accuracy.
```

Guidance:
- keep this short
- avoid technical language
- focus on outcomes, not solutions

---

### 2. Data properties (ontology candidates)

List all data elements the system must track.

Each property must include:
- name
- description
- type
- constraints, if any

```markdown
## Data Properties
- **id**: Unique identifier for each record [uuid]
- **title**: Title of the task [string]
- **status**: Task status (active, completed) [enum]
```

Guidance:
- use domain terms, not database names
- avoid derived or computed values
- keep descriptions precise but plain

---

### 3. Resources or states (taxonomy candidates)

List the resources that represent observable application states.

Each state must include:
- name
- short description
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

Guidance:
- think in terms of navigation, not storage
- every state should offer at least one next action
- name states as nouns, not verbs

---

### 4. Actions (choreography candidates)

Enumerate all operations the system supports.

Each action must include:
- action name
- inputs
- required fields
- return value (target state)
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

- **UpdateStatusOfTask**
  Inputs: id, status
  Required: id, status
  Returns: TaskItem
  Type: Idempotent
```

Guidance:
- use verb phrases for action names
- inputs must reference declared data properties
- every action must lead to a valid state
- avoid embedding protocol assumptions

---

### 5. Rules

Capture important business rules and constraints that apply across actions or states.

```markdown
## Rules
- When creating a new task, the client must supply a globally unique `id`.
```

Guidance:
- write rules as testable statements
- reference properties and actions by name
- avoid procedural language

---

## Best practices

- use consistent naming throughout the document
- ensure every state is reachable and useful
- confirm that all actions are intentional and necessary
- prefer fewer, clearer states over many subtle variants
- treat the story as a living design artifact

---

## Output expectations

A well-written API Story enables reliable generation of:

- ALPS profiles
- OpenAPI specifications
- human-readable documentation
- tests, mocks, and validation artifacts

The API Story is the root artifact. Everything else is derived from it.
