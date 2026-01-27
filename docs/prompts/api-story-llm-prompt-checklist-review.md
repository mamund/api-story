# API story LLM prompt: checklist-driven review

Purpose: Use this prompt to have an LLM walk the author checklist as a structured self-review.

This prompt is useful late in authoring or before formal review.

---

## Prompt

```
Use the API Story author checklist as a review rubric.

Task:
- Walk through the checklist item by item.
- For each unchecked or partially satisfied item, explain why.
- Point to the exact section that needs attention.

Constraints:
- Do not assume intent beyond what is written.
- If intent is unclear, ask a question instead of proposing a fix.

Output:
- Checklist results with notes.
```

---

## Notes for authors

- Treat unanswered items as design questions, not failures.
- Use this output to guide revisions before human review.
- The checklist remains the authoritative standard.
