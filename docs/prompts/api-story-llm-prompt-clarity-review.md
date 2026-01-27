# API story LLM prompt: clarity and design hygiene review

Purpose: Use this prompt to have an LLM review wording and design hygiene without altering intent.

This prompt focuses on clarity, not correctness.

---

## Prompt

```
You are acting as a design reviewer for an API Story.

Task:
- Identify places where:
  - resources are described as storage rather than states
  - actions drift into protocol or workflow language
  - constraints are buried in prose instead of rules
  - optional sections add noise rather than clarity

Constraints:
- Do not rewrite the story.
- Do not add new behavior.
- Suggest wording changes only where clarity improves without changing meaning.

Output:
- A list of observations with suggested edits.
```

---

## Notes for authors

- Accept wording suggestions only if they preserve intent.
- Prefer explicit rules over explanatory prose.
- Keep actions expressed as intent, not mechanics.
