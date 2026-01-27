# Api story anti-patterns

This document describes common anti-patterns encountered when writing API Stories.
Each anti-pattern reduces clarity, increases ambiguity, or pushes critical decisions downstream where they are more expensive to correct.

Use this document as a companion to the API Story Specification and Author Checklist.

---

## Treating the story as documentation

**Symptom**

The API Story reads like a summary of an already-designed API.

**Why it is a problem**

API Stories are design instruments, not retrospective documentation. Writing the story after decisions are finalized removes its ability to guide discussion, exploration, and change.

**Correction**

Write the story before schemas, endpoints, and contracts are locked in. Use the story to surface decisions, not justify them.

---

## Encoding HTTP or transport details

**Symptom**

Actions reference HTTP methods, status codes, headers, or URI structures.

**Why it is a problem**

Transport details prematurely constrain the design and make the story harder to reason about. They also reduce reuse across different protocols or interaction styles.

**Correction**

Describe intent and outcomes only. Leave protocol mapping to downstream specifications such as OpenAPI.

---

## Using states as storage abstractions

**Symptom**

States are named after tables, collections, or persistence concepts.

**Why it is a problem**

States describe what a client can observe and do, not how data is stored. Storage-oriented states leak implementation detail and obscure navigation.

**Correction**

Name states as observable situations or views from the client’s perspective.

---

## Overloading actions with workflow logic

**Symptom**

Single actions attempt to encode multi-step workflows or conditional branching logic.

**Why it is a problem**

This hides decision points and makes the system harder to evolve. It also prevents clear mapping to affordances and navigation.

**Correction**

Break behavior into smaller, intent-focused actions. Use states and rules to express progression, not hidden logic.

---

## Vague or implied rules

**Symptom**

Important constraints are implied in prose or left unstated.

**Why it is a problem**

Implied rules surface later as bugs, inconsistencies, or policy debates. They are difficult to test and easy to misinterpret.

**Correction**

State rules explicitly and write them as testable statements.

---

## Inconsistent naming

**Symptom**

The same concept is referred to by different names across sections.

**Why it is a problem**

Inconsistent naming erodes shared understanding and breaks automated tooling.

**Correction**

Choose a single term for each concept and use it consistently throughout the story.

---

## Treating optional sections as decorative

**Symptom**

Optional sections are filled with generic statements that do not affect design.

**Why it is a problem**

This adds noise without value and gives a false sense of completeness.

**Correction**

Include optional sections only when they influence decisions or clarify constraints.

---

## Hiding uncertainty

**Symptom**

The story presents speculative or undecided behavior as settled fact.

**Why it is a problem**

This locks in assumptions prematurely and discourages discussion.

**Correction**

Surface uncertainty explicitly. An open question is more valuable than a false decision.

---

## Designing for a single client

**Symptom**

The story assumes one specific UI, workflow, or consumer.

**Why it is a problem**

This narrows the design and reduces adaptability. APIs outlive their first clients.

**Correction**

Write the story from a general client perspective. Avoid embedding UI flow or screen assumptions.

---

## Over-specifying edge cases

**Symptom**

The story is dominated by rare scenarios and exceptional behavior.

**Why it is a problem**

This obscures the main intent and makes the story harder to read and discuss.

**Correction**

Focus on core behavior first. Capture edge cases only when they materially affect design.

---

## Final warning sign

If readers argue about what the system does after reading the story, the problem is not the reader.
It is the story.

A good API Story reduces ambiguity. A bad one relocates it.
