# API Story Designer’s Guide

Version: 2.1  
Status: aligned with templates v2, review template v2, and author checklist v2

This guide explains how to think while designing an API Story. It is not a checklist and not a specification. Its purpose is to help you make good design decisions before and during authoring.

---

## What an api story is for

An API Story captures **intent, structure, and constraints** before interface details are chosen.

It is meant to:

- describe a system in terms humans can reason about
- surface affordances instead of prescribing workflows
- preserve meaning over time, even as implementations change
- support downstream artifacts such as ALPS, OpenAPI, documentation, mocks, and tests

An API Story is not an API description. It is a **design narrative with structure**.

---

## Start with purpose, not features

Every good story starts by answering one question:

Why does this system exist?

Write the Purpose section as if you were explaining the system to a domain expert who does not care about technology. Avoid endpoints, verbs, payloads, and formats.

If you cannot explain the purpose without listing operations, the design is not ready yet.

---

## Think in states, not storage

Resources in an API Story represent **observable situations**, not data containers.

A good resource answers questions like:

- Where am I in the system?
- What do I know at this point?
- What can I do next?

Avoid framing resources as tables, records, or collections for their own sake. Instead, describe what it means to be in that state.

Example mental shift:

- Weak: “This resource stores task records.”
- Strong: “This state represents a task that has been created but not yet completed.”

---

## Resources are places, actions are moves

This distinction is now explicit in the templates and should guide all design decisions.

### Resources

Resources are places you can return to. They are stable enough to observe, bookmark, revisit, or reason about later.

For each resource, define:

- its purpose
- who may observe it (allowed roles for visibility)
- what actions are available from it
- how it connects to other resources

Resources should not describe behavior. They describe **situation**.

### Actions

Actions are moves you can make from a resource. They express **intent**.

For each action, define:

- what it does
- who may attempt it (allowed roles for authority)
- what inputs it requires
- what resource it returns

Actions should not hide their outcome. Every action returns a resource.

This separation prevents accidental workflows and supports affordance-driven navigation.

---

## Designing navigable states

API Stories are not workflows. They are maps.

When defining resources:

- list the actions available from that state
- explain how a client might arrive there
- explain where a client typically goes next

This does not prescribe order. It makes **possibility visible**.

If a state has no actions and no navigation, ask why it exists.

---

## Roles: visibility versus authority

Roles are named actors in the system. They are declared once and referenced elsewhere.

Roles serve two different purposes depending on where they appear.

### Roles on resources

When roles appear on a resource, they describe **visibility**.

They answer:

- Who may see or navigate to this state?

They do not imply mutation rights.

A role may see a resource and still be unable to act.

### Roles on actions

When roles appear on an action, they describe **authority**.

They answer:

- Who may attempt this operation?

Action-level role restrictions are authoritative and may further limit what a visible state allows.

This distinction is critical. Do not collapse it.

---

## Let constraints live in rules

Rules capture cross-cutting constraints that must always hold.

Use rules to describe:

- eligibility conditions
- invariants
- mutual exclusions
- lifecycle constraints

Rules should be written as testable statements and should reference named properties, resources, or actions.

Do not bury important constraints inside action prose.

---

## Optional sections are design signals

Optional sections exist to surface intent, not to increase completeness.

Include them when they answer real questions:

- Authorization notes clarify intent that roles alone do not capture.
- Error conditions describe meaningful failure cases, not protocol responses.
- Observability notes explain what must be visible for accountability or trust.
- Lifecycle notes explain how things change or persist over time.

If an optional section adds no new understanding, leave it out.

---

## Structural integrity is design hygiene

Structural integrity checks are not paperwork. They are design safeguards.

Before finalizing a story, ensure that:

- every resource is reachable
- every action is reachable
- every action returns a valid resource
- every role reference is declared
- visibility and authority are not conflated

If these checks fail, the design has blind spots.

---

## Design for change, not perfection

API Stories are meant to evolve.

A good story:

- can be extended without rewriting existing sections
- preserves meaning as new actions and states appear
- resists over-specification

Leave room for growth. Make decisions explicit. Avoid locking in implementation details too early.

---

## Final guidance

If you remember only three things:

1. Resources are places, actions are moves.
2. Visibility lives on resources, authority lives on actions.
3. Stories are maps, not scripts.

If your story supports those ideas, the rest will follow.
