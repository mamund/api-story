# Api story author checklist

Use this checklist before marking an API Story as complete or ready for review.

---

## Purpose and scope

- The purpose clearly explains why the system exists.
- The purpose avoids technical or implementation detail.
- The scope feels appropriate for a single bounded context.
- A non-expert can read the purpose and explain it back accurately.

---

## Vocabulary and data properties

- All important domain terms are defined as data properties.
- Property names use stable, domain-level language.
- No property represents a derived or computed value.
- Constraints are stated where they materially affect behavior.
- The same term is not used to mean different things.

---

## States and navigation

- All states represent observable situations, not storage concepts.
- State names are nouns, not actions.
- Every state has at least one outbound action.
- All states are reachable from at least one other state, except entry states.
- States feel distinct, not minor variations of the same view.

---

## Actions and behavior

- Every action represents clear intent from the client’s perspective.
- Action names are verb phrases and read naturally.
- All inputs reference declared data properties.
- Required inputs are explicitly listed.
- Each action returns a valid state.
- Action types accurately reflect behavior (Safe, Idempotent, Unsafe, Delete).
- No action encodes protocol or transport assumptions.

---

## Rules and constraints

- All important business rules are stated explicitly.
- Rules are written as testable statements.
- Rules reference actions or properties by name.
- No rule contradicts another rule.
- Rules do not depend on undocumented behavior.

---

## Optional sections

When optional sections are present:

- Roles are coarse-grained and stable.
- Authorization expectations are clear but non-procedural.
- Error conditions describe domain failures, not HTTP mechanics.
- Observability notes describe events or audits, not logging formats.
- Performance expectations reflect real constraints.
- Lifecycle notes clarify long-term behavior and retention.

---

## Structural integrity

- Every referenced state, action, property, and role is defined.
- There are no duplicate names across sections.
- Naming conventions are consistent throughout the document.
- The story reads coherently from top to bottom.

---

## Design quality check

- The story can be read and debated without code.
- The story surfaces decisions early rather than hiding them.
- The story would meaningfully guide ALPS or OpenAPI generation.
- The story reduces ambiguity rather than relocating it.

---

## Final question

- If this story were handed to a different team, would they build the same system?

If the answer is yes, the story is ready.
