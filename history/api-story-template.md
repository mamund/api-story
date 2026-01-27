# Api story: <title>

## Purpose

<Why this system exists and what problem it solves. One short paragraph.>

---

## Data properties

<Declare the conceptual data elements the system must track. Include type and constraints.>

### <Object or concept name>

- **<propertyName>**
  Description: <meaning>
  Type: <string|number|integer|boolean|date|datetime|uuid|object|array|enum>
  Constraints: <required|optional, plus other constraints>

---

## Resources or states

<Define the stable, observable places in the system.>

### <StateName>

Purpose: <one or two sentences>

Representation notes:
- Includes: <fields>
- May include: <fields>

Query expectations:
- Optional filters: <fields>
- Optional sort: <fields>
- Pagination: <notes>

Expected navigation:
- <links to related states>

Actions:
- <ActionName>
- <ActionName>

Allowed roles:
- <role list, optional>

---

## Actions

<Describe client intent, inputs, required fields, return state, and action type.>

### <ActionName>

Description: <Use this action to...>
Inputs: <property list, include optional markers>
Required: <property list>
Returns: <StateName>
Type: Safe|Idempotent|Unsafe|Delete
Allowed roles: <role list, optional>

---

## Rules

<Cross-cutting constraints and invariants. Write testable statements.>

- <Rule statement>

---

## Optional sections

Include only when they clarify decisions.

### Roles

- **<role>**: <description>

### Authorization notes

- <Authorization expectation>

### Error conditions

#### <ActionName>

- **<ErrorName>**: <condition>

### Observability notes

- <Event or audit expectation>

### Performance expectations

- <Scale or responsiveness expectation>

### Data classification

- <Sensitivity guidance>

### Lifecycle notes

- <Retention or evolution guidance>

---

## Structural integrity check

- All states are reachable from the entry state.
- All actions return valid states.
- All inputs reference declared data properties or declared query inputs.
- All role references are defined when roles are used.
