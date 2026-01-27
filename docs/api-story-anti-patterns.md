# API Story Anti-Patterns

Version: 1.1  
Status: aligned with API Story specification v1.1, designer’s guide v2.1, and templates v2

This document describes common failure modes when writing API Stories.
Each anti-pattern includes symptoms, why it is a problem, and how to correct it.

The goal is not to police style, but to protect intent, evolvability, and clarity.

---

## Treating resources as storage abstractions

### Symptoms

- Resources described as tables, rows, or documents
- Language focused on persistence rather than situation
- States named after database entities without context

### Why this is a problem

API Stories describe **observable situations**, not storage layouts.
Modeling storage directly collapses meaning and makes navigation brittle.

### Correction

Describe what it means to be in a state.
Focus on what is known, what matters, and what can happen next.

---

## Encoding workflows instead of navigation

### Symptoms

- Prescribed step-by-step sequences
- Implied mandatory order of actions
- “First do this, then do that” language

### Why this is a problem

Workflows freeze behavior and resist change.
API Stories are maps, not scripts.

### Correction

Define states and list available actions from each.
Let order emerge from constraints, not prescription.

---

## Conflating actions with protocol operations

### Symptoms

- Actions named after HTTP verbs
- References to endpoints, URLs, headers, or status codes
- Input sections that mirror request payloads

### Why this is a problem

Actions express **intent**, not invocation mechanics.
Protocol leakage ties the story to a specific implementation too early.

### Correction

Name actions after domain intent.
Defer protocol mapping to downstream artifacts.

---

## Conflating visibility and authority (new)

### Symptoms

- Roles declared only at the resource level
- Assumption that “can see” implies “can act”
- Authorization intent hidden in prose
- Different behavior for roles without explicit action constraints

### Why this is a problem

Visibility and authority answer different questions.
Conflating them creates accidental privilege escalation or hidden restrictions.

### Correction

- Declare roles once in a Roles section
- Apply roles to resources to express **visibility**
- Apply roles to actions to express **authority**
- Let action-level restrictions be authoritative

---

## Using roles as permission containers

### Symptoms

- Role names encode permissions (for example, `canDeleteUser`)
- Fine-grained or rapidly changing role lists
- Roles defined by implementation needs rather than domain meaning

### Why this is a problem

Roles should be stable, human-meaningful actors.
Permission logic belongs downstream.

### Correction

Define a small number of coarse-grained roles.
Constrain behavior at the action level.

---

## Hiding rules inside action descriptions

### Symptoms

- Eligibility conditions embedded in prose
- Constraints repeated across multiple actions
- Invariants implied but not stated

### Why this is a problem

Hidden rules are easy to miss, hard to test, and difficult to evolve.

### Correction

Extract cross-cutting constraints into explicit rules.
Write them as testable statements.

---

## Modeling derived values as data properties

### Symptoms

- Status fields that duplicate rule outcomes
- Computed totals stored as properties
- Redundant flags that can drift out of sync

### Why this is a problem

Derived values obscure true invariants and introduce inconsistency.

### Correction

Model the source properties and rules.
Let derived values emerge from interpretation.

---

## Over-specifying optional sections

### Symptoms

- Optional sections filled “for completeness”
- Authorization, errors, or performance sections with generic filler
- Repetition of information already expressed elsewhere

### Why this is a problem

Noise hides intent.
Optional sections exist to clarify decisions, not to satisfy checklists.

### Correction

Include optional sections only when they add new understanding.

---

## Treating the story as finished too early

### Symptoms

- Reluctance to add new states or actions
- Fear of changing wording once published
- Treating the story as a contract rather than a narrative

### Why this is a problem

API Stories are meant to evolve.
Freezing them prematurely discourages learning.

### Correction

Version the story.
Preserve meaning while allowing growth.

---

## Summary

If you avoid these anti-patterns, your API Story is more likely to:

- preserve intent over time
- support affordance-driven design
- evolve without rewriting
- map cleanly to downstream artifacts

Use this document alongside the designer’s guide, templates, and checklist during authoring and review.
