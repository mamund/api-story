# Api story specification v1.1

Version: 1.1  
Status: normative  
Supersedes: Api story specification v1.0

This document defines the normative structure and requirements for a conforming API Story.
It aligns with the designer’s guide v2.1, author template v2, review template v2, and author checklist v2.

---

## Purpose of this specification

An API Story is a structured narrative used to describe the intent, structure, and constraints of an API before interface and protocol decisions are made.

This specification defines:
- the required sections of an API Story
- the meaning of those sections
- the minimum requirements for conformance

This specification intentionally avoids implementation, transport, authorization mechanics, and policy engines.

---

## Conformance

A document conforms to this specification if:
- all required sections are present
- all required constraints described in this document are satisfied
- no prohibited content is introduced

Optional sections may be omitted unless otherwise stated.

---

## Required sections

A conforming API Story MUST include the following sections, in any order.

### Purpose

The Purpose section MUST:
- explain why the system exists
- be written in plain, non technical language
- avoid references to protocols, endpoints, or operations

---

### Data properties

The Data properties section defines the domain level data elements the system must track.

This section MUST:
- declare all data properties referenced elsewhere in the story
- assign a type to each property
- indicate whether each property is required or optional

This section MUST NOT:
- define transport fields
- describe storage schemas
- include derived or computed values as properties

---

### Resources or states

Resources represent stable, observable situations a client can encounter and return to over time.

A conforming API Story MUST:
- define resources as states, not storage abstractions
- assign a clear purpose to each resource

Each resource MAY include:
- representation notes
- query expectations for collection resources
- navigation notes

#### Roles on resources

Roles MAY be declared on resources.

When roles appear on a resource, they govern **visibility**.
They define which actors may observe or navigate to that state.

Resource level roles MUST NOT be used to describe mutation authority.

#### Actions on resources

Each resource SHOULD list the actions available from that state.
This listing expresses affordances and expected navigation.

---

### Actions

Actions describe what actors may attempt to do.
They represent intent, not protocol mechanics.

A conforming API Story MUST:
- define each action separately from resources
- assign a clear description to each action
- identify the target resource
- identify the resource returned by the action

Every action MUST return a resource.

#### Action types

Each action MUST be classified as one of the following:
- Safe
- Idempotent
- Unsafe
- Delete

The selected action type MUST match the described behavior.

#### Roles on actions

Roles MAY be declared on actions.

When roles appear on an action, they govern **authority**.
They define which actors may attempt that operation.

Action level role restrictions are authoritative and MAY further constrain what is visible or invokable from a resource.

---

### Rules

Rules define cross cutting constraints and invariants that must always hold.

The Rules section MUST:
- express rules as testable statements
- reference declared properties, resources, or actions by name

Rules MUST NOT:
- be hidden implicitly inside action descriptions
- contradict other declared rules

---

## Optional sections

Optional sections MAY be included when they add clarity.
They MUST NOT introduce protocol, transport, or enforcement mechanics.

Common optional sections include:
- Roles
- Authorization notes
- Error conditions
- Observability notes
- Performance expectations
- Data classification
- Lifecycle notes

---

## Structural integrity requirements

A conforming API Story MUST satisfy the following structural integrity requirements:

- all resources are reachable from at least one entry point
- all actions are reachable from at least one resource
- all actions return a valid resource
- all referenced roles are declared
- resource visibility and action authority are not conflated

Failure to meet these requirements indicates a design error.

---

## Prohibited content

An API Story MUST NOT:
- prescribe HTTP methods, URLs, headers, or status codes
- define authentication or authorization mechanisms
- encode workflow scripts or fixed execution order
- embed storage or database design
- require a specific implementation technology

---

## Versioning and evolution

API Stories are expected to evolve over time.

Changes SHOULD:
- preserve meaning of existing resources and actions
- introduce new affordances without breaking existing narratives
- record version changes explicitly

Breaking changes SHOULD be accompanied by clear explanation.

---

## Summary

An API Story is a design artifact.
It is evaluated by clarity of intent, structural integrity, and suitability for change, not by implementation completeness.

This specification defines the minimum structure required to achieve those goals.
