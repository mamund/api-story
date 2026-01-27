# Api story author checklist v2

This checklist reflects the current API Story specification, template v2, and review guidance.
Use it while authoring and again before submitting a story for review.

---

## Purpose and scope

- [ ] The purpose is written in plain language
- [ ] The purpose explains why the system exists, not how it is implemented
- [ ] The scope fits a single coherent domain or bounded context
- [ ] Explicit non-goals or exclusions are noted when helpful

---

## Roles

- [ ] A Roles section exists when more than one actor is involved
- [ ] Roles are named, coarse-grained, and stable
- [ ] Each role has a one-sentence description
- [ ] Roles describe actors, not permissions
- [ ] Every role referenced elsewhere is declared in the Roles section

---

## Data properties and vocabulary

- [ ] All domain data elements are declared as data properties
- [ ] Each property has a clear meaning
- [ ] Each property has a type
- [ ] Required vs optional is explicit
- [ ] Constraints are stated where relevant
- [ ] Derived or computed values are not modeled as properties
- [ ] Property names are used consistently across the document

---

## Resources or states

For each resource or state:

- [ ] The resource represents a stable, observable situation
- [ ] The resource has a clear purpose
- [ ] The resource is not described as a database table or storage abstraction
- [ ] Allowed roles on the resource describe **visibility only**
- [ ] Visibility rules are intentional and easy to explain
- [ ] Representation notes describe what is typically present
- [ ] Collection resources describe filtering, sorting, and pagination expectations when applicable
- [ ] Available actions are listed for the resource
- [ ] Navigation to and from other resources is understandable

---

## Actions

For each action:

- [ ] The action represents domain intent, not protocol mechanics
- [ ] The action has a clear description of what it does
- [ ] The target resource is identified
- [ ] Required and optional inputs are listed
- [ ] Inputs reference declared data properties
- [ ] The returned resource is explicitly named
- [ ] The action type (Safe, Idempotent, Unsafe, Delete) matches behavior
- [ ] Allowed roles on the action describe **authority to act**
- [ ] Action-level role restrictions are equal to or stricter than resource visibility

---

## Rules and constraints

- [ ] Rules are written as testable statements
- [ ] Rules reference declared properties, resources, or actions
- [ ] Rules capture cross-cutting constraints
- [ ] Rules are not embedded implicitly in action descriptions
- [ ] No rules contradict each other

---

## Optional sections

Include optional sections only when they add clarity.

### Authorization notes

- [ ] Clarify intent without redefining role semantics
- [ ] Do not introduce enforcement mechanisms

### Error conditions

- [ ] Meaningful failure cases are documented
- [ ] Errors are associated with specific actions
- [ ] Errors describe conditions, not protocol responses

### Observability notes

- [ ] Important actions emit observable signals
- [ ] Audit expectations are explicit where accountability matters
- [ ] No tooling or logging formats are prescribed

### Performance expectations

- [ ] Performance notes reflect domain needs
- [ ] No speculative implementation details are included

### Data classification

- [ ] Sensitive data is identified when applicable
- [ ] Handling expectations are clear

### Lifecycle notes

- [ ] Retention and archival behavior is explicit when relevant
- [ ] Replacement or evolution rules are described when applicable

---

## Structural integrity check

Before finalizing:

- [ ] All resources are reachable from at least one entry point
- [ ] All actions are reachable from at least one resource
- [ ] All actions return valid resources
- [ ] All role references are declared
- [ ] Resource visibility and action authority are not conflated
- [ ] No orphaned resources, actions, or rules exist

---

## Final author check

- [ ] The story can be read start to finish without guessing missing behavior
- [ ] Another author could extend this story without rewriting it
- [ ] The story supports downstream mapping to ALPS or OpenAPI without invention
