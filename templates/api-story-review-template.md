# Api story review template v2

This review template aligns with the current API Story specification and template v2.
It explicitly distinguishes between resource-level visibility and action-level authority.

---

## Review metadata

- **Api story title**:
- **Story version**:
- **Reviewer**:
- **Review date**:
- **Decision**: approve | approve with changes | request changes

---

## Review summary

One short paragraph describing:
- what the story is trying to model
- what the review focused on
- overall assessment

---

## Purpose and scope

- [ ] Purpose is clear, plain-language, and non-technical
- [ ] Scope represents a single coherent domain or bounded context
- [ ] Assumptions and exclusions are visible
- [ ] Purpose aligns with examples and rules

Comments:

---

## Roles

- [ ] Roles are explicitly declared in a top-level Roles section
- [ ] Roles are coarse-grained and stable
- [ ] No permissions or mechanics are encoded in role definitions
- [ ] Every role referenced elsewhere is declared

Comments:

---

## Data properties and vocabulary

- [ ] All referenced data properties are declared
- [ ] Properties have clear meaning and appropriate types
- [ ] Required vs optional properties are explicit
- [ ] Derived or computed values are not modeled as properties
- [ ] Naming is consistent across resources, actions, and rules

Comments:

---

## Resources or states

Evaluate each resource as a navigable, observable state.

- [ ] Each resource has a clear purpose
- [ ] Resources represent states, not storage abstractions
- [ ] Allowed roles on resources describe visibility only
- [ ] Visibility rules are reasonable and intentional
- [ ] Collection resources describe filtering, sorting, and pagination when applicable
- [ ] Each resource lists available actions
- [ ] Navigation between resources is understandable

Comments:

---

## Actions

Evaluate actions as expressions of intent.

- [ ] Actions represent domain intent, not protocol mechanics
- [ ] Each action identifies its target resource
- [ ] Each action lists required and optional inputs
- [ ] Inputs reference declared data properties
- [ ] Each action returns a valid resource
- [ ] Action types (Safe, Idempotent, Unsafe, Delete) match behavior
- [ ] Allowed roles on actions describe authority to act
- [ ] Action-level role restrictions are stricter or equal to resource visibility

Comments:

---

## Rules and constraints

- [ ] Rules are written as testable statements
- [ ] Rules reference declared properties, resources, or actions
- [ ] Rules do not contradict each other
- [ ] Cross-cutting constraints are captured here, not hidden in actions

Comments:

---

## Optional sections

Evaluate only when present.

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

- [ ] Performance notes reflect domain needs, not implementation guesses

### Data classification

- [ ] Sensitive data is identified
- [ ] Handling expectations are reasonable

### Lifecycle notes

- [ ] Retention and archival behavior is explicit when relevant
- [ ] Replacement or evolution rules are clear

Comments:

---

## Structural integrity check

- [ ] All resources are reachable from at least one entry point
- [ ] All actions are reachable from at least one resource
- [ ] All actions return valid resources
- [ ] All role references are declared
- [ ] Resource visibility and action authority are not conflated
- [ ] No orphaned rules, actions, or resources exist

Comments:

---

## Required changes

List changes that must be made before approval.

- 

---

## Suggested improvements

Optional improvements that would strengthen the story.

- 

---

## Final decision

- [ ] Approve
- [ ] Approve with changes
- [ ] Request changes

Reviewer notes:
