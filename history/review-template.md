# Api story review

Story: <title>
Reviewer: <name>
Date: <yyyy-mm-dd>

## Summary

<One paragraph summary of what the story is trying to accomplish and what the review focused on.>

## Findings

### Purpose and scope

- [ ] Purpose is clear and non-technical
- [ ] Scope is appropriate for one bounded context
- [ ] Assumptions are visible

### Vocabulary and data properties

- [ ] Properties have types and meaningful constraints
- [ ] Naming is consistent throughout
- [ ] Derived values are not modeled as properties

### States and navigation

- [ ] States are observable situations, not storage abstractions
- [ ] Each state has at least one outbound action
- [ ] Collection states describe filtering, sorting, and pagination expectations where relevant

### Actions and behavior

- [ ] Actions represent intent, not protocol mechanics
- [ ] Required inputs are explicit
- [ ] Return states are valid and meaningful
- [ ] Action types match behavior

### Rules and constraints

- [ ] Rules are testable statements
- [ ] Rules reference properties and actions by name
- [ ] No internal contradictions

### Optional sections

- [ ] Roles and authorization notes are present when behavior differs by actor
- [ ] Error conditions exist for meaningful failure modes
- [ ] Observability notes exist when accountability matters

## Required changes

- <Bullet list>

## Suggested improvements

- <Bullet list>

## Decision

- [ ] Approve
- [ ] Approve with changes
- [ ] Request changes
