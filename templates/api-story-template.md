# Api story template v2

This template reflects the current API Story specification and guidance.
It emphasizes the distinction between resources (states) and actions, and makes role usage explicit at both levels.

---

## Api story metadata

- **Title**:
- **Version**:
- **Author**:
- **Date**:
- **Status**: draft | reviewed | validated

---

## Purpose

A short, plain-language description of why this system exists and what problem it solves.
Avoid technical detail. One short paragraph is usually enough.

---

## Roles (optional but recommended)

Declare the named actors that appear in this story.
Roles are referenced by name from resources and actions.

- **<roleName>**
  One sentence describing who this actor is.

---

## Data properties

Declare the conceptual data elements the system must track.
These are domain properties, not transport fields.

### <ConceptName>

- **<propertyName>**
  Description: <what this property means>
  Type: <string | number | integer | boolean | date | datetime | uuid | enum | object | array>
  Constraints: <required | optional, plus other constraints>
  Notes: <optional>

---

## Resources or states

Resources represent stable, observable situations a client can navigate to and return to over time.
They are not storage abstractions.

Each resource defines:
- its purpose
- who may observe it
- what actions are available from it

### <resourceName>

Purpose:
One or two sentences describing what this state represents.

Allowed roles (visibility):
- <roleName>
- <roleName>

Representation notes:
- Includes: <key properties or summaries>
- May include: <optional properties>

Query expectations (for collection states):
- Filters: <property list or none>
- Sort: <property list or none>
- Pagination: <notes>

Actions available from this state:
- <actionName>
- <actionName>

Navigation notes:
- Typical transitions to: <other states>
- Entry points from: <other states>

---

## Actions

Actions describe what actors may attempt to do.
They represent intent, not protocol mechanics.

Each action defines:
- what it does
- who may attempt it
- what inputs it requires
- what state it returns

### <actionName>

Description:
Use this action to <clear statement of intent>.

Target resource:
<resourceName>

Allowed roles (authority):
- <roleName>
- <roleName>

Inputs:
- **<propertyName>** (required)
- **<propertyName>** (optional)

Returns:
<resourceName>

Action type:
Safe | Idempotent | Unsafe | Delete

Notes:
<optional clarifications>

---

## Rules

Rules are cross-cutting constraints and invariants.
They should be testable statements.

- **<RuleName>**
  Description of the rule.

---

## Optional sections

Include only when they add clarity.

### Authorization notes

Clarify role-related expectations that are not obvious from resource or action declarations.

### Error conditions

Describe meaningful failure cases by action.

#### <actionName>

- **<ErrorName>**
  Condition under which this error occurs.

### Observability notes

Describe events, audit expectations, or signals that should occur when actions are performed.
Do not specify logging formats or tools.

### Performance expectations

Describe scale, latency, or throughput expectations at a high level.

### Data classification

Describe sensitivity or handling expectations for specific data properties.

### Lifecycle notes

Describe retention, archival, replacement, or evolution expectations over time.

---

## Structural integrity check

Use this section during review.

- All resources are reachable from at least one entry point.
- All actions return a valid resource.
- All action inputs reference declared data properties.
- Roles referenced in resources or actions are declared.
- Visibility rules (resources) and authority rules (actions) are not conflated.
