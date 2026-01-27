# API Story Glossary

Version: 1.1  
Status: aligned with API Story specification v1.1, designer’s guide v2.1, and templates v2

This glossary defines the canonical meanings of key terms used across the API Story documents.
Terms are written to reduce ambiguity and prevent drift between specification, guidance, and practice.

---

## API story

A structured design narrative that captures purpose, data, states, actions, and rules before interface or protocol details are chosen.

An API Story is written for humans first and is intended to support downstream artifacts such as ALPS, OpenAPI, documentation, tests, and mocks without requiring invention.

---

## Purpose

A plain-language explanation of why a system exists and what problem it solves.

The Purpose section focuses on intent and context, not features or implementation details.

---

## Data property

A domain-level data element the system must track.

Data properties:
- have clear meaning and type
- may be required or optional
- are referenced by name across resources, actions, and rules

Data properties are not transport fields, storage columns, or computed values.

---

## Resource or state

A stable, observable situation a client can encounter and return to over time.

A resource:
- represents a place in the system, not a storage abstraction
- has a clear purpose
- may expose different affordances to different roles
- may be navigated to, revisited, and reasoned about independently

Resources define **where you are**, not **what you do**.

---

## Collection resource

A resource representing a bounded set of related items.

Collection resources typically:
- expose summary representations
- support filtering, sorting, and pagination
- provide navigation to item-level resources

---

## Action

An expression of intent that describes what an actor may attempt to do from a resource.

An action:
- represents behavior, not protocol mechanics
- requires declared inputs
- always returns a resource
- is classified by action type (Safe, Idempotent, Unsafe, Delete)

Actions define **what you can do**, not **how it is invoked**.

---

## Action type

A coarse-grained classification of an action’s behavior:

- **Safe**: read-only, no state change
- **Idempotent**: repeatable with the same effect
- **Unsafe**: creates or mutates state
- **Delete**: removes or retires state

Action types describe semantics, not HTTP methods.

---

## Role

A named actor or capability boundary within the system.

Roles:
- are declared once in a Roles section
- are coarse-grained and stable
- describe who participates, not what permissions exist

The meaning of a role depends on where it is applied.

### Roles on resources

When applied to a resource, roles govern **visibility**.

They define which actors may observe or navigate to that state.
Visibility does not imply authority to act.

### Roles on actions

When applied to an action, roles govern **authority**.

They define which actors may attempt that operation.
Action-level role restrictions are authoritative and may further constrain visible affordances.

---

## Rule

A testable statement describing a constraint or invariant that must always hold.

Rules:
- capture cross-cutting domain constraints
- reference declared properties, resources, or actions
- are evaluated independently of protocol or implementation

Rules define **what must be true**, not **how it is enforced**.

---

## Observability notes

Design-time expectations about what should be observable when actions occur.

Observability notes may describe:
- audit requirements
- domain events
- accountability signals

They do not prescribe logging formats, tools, or telemetry systems.

---

## Lifecycle notes

Design-time expectations about how things change over time.

Lifecycle notes may describe:
- retention and archival
- replacement or deprecation
- immutability or append-only behavior

They clarify evolution without freezing implementation choices.

---

## Structural integrity

A property of a well-formed API Story.

An API Story has structural integrity when:
- all resources are reachable
- all actions are reachable
- all actions return valid resources
- all role references are declared
- visibility and authority are not conflated

Structural integrity failures indicate design errors, not formatting issues.

---

## Affordance

A possibility for action perceived by an actor in a given state.

In an API Story, affordances are expressed by:
- the actions listed on a resource
- the roles allowed to invoke those actions

Affordances describe what is possible, not what is required.

---

## Navigation

The ability to move between resources by following available actions or links.

Navigation expresses possibility and discovery, not fixed workflows or scripts.

---

## Workflow (anti-pattern)

A fixed, prescribed sequence of actions encoded into the design.

API Stories avoid workflows in favor of navigable states and discoverable affordances.

---

## Implementation detail (anti-pattern)

Any protocol, transport, storage, or tooling concern embedded in an API Story.

Implementation details belong downstream of the story.

---

## Summary

These definitions are normative within the API Story collection.
When in doubt, prefer these meanings over informal or domain-specific interpretations.
