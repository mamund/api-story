# API story LLM review prompts

This folder contains **conservative, review-oriented prompts** for using large language models (LLMs) as assistants when working with API Stories.

These prompts are designed to help authors and reviewers **question, verify, and refine** an API Story without inventing new behavior or overriding human judgment.

They are intentionally not generative prompts.

---

## Purpose

API Stories are written for humans, but their structure allows LLMs to assist with review tasks such as:

- spotting omissions
- identifying inconsistencies
- checking structural integrity
- improving clarity without changing intent

The prompts in this folder are designed to:
- reduce accidental invention
- bias toward questions over answers
- preserve the author’s domain intent
- reinforce the API Story specification, guide, and checklist as authoritative

---

## How these prompts should be used

Each prompt assumes you will provide the model with:

- the draft API Story
- the API Story specification
- the designer’s guide
- the author checklist  
- optionally, the review template

This mirrors how a careful human reviewer would approach the work.

LLM output should always be treated as **advisory**, never authoritative.

---

## Prompt files

### `api-story-llm-prompt-structural-review.md`

Use this prompt early and often.

It focuses on:
- structural integrity
- reachability of resources and actions
- actions returning valid resources
- naming and reference consistency
- correct application of roles (visibility vs authority)

This prompt is best used once the basic shape of the story exists.

---

### `api-story-llm-prompt-clarity-review.md`

Use this prompt to improve readability and design hygiene.

It focuses on:
- resources drifting into storage abstractions
- actions drifting into protocol or workflow language
- constraints hidden in prose instead of rules
- optional sections adding noise rather than clarity

This prompt should not be used to change behavior, only to sharpen expression.

---

### `api-story-llm-prompt-checklist-review.md`

Use this prompt near the end of authoring.

It walks the author checklist item by item and explains:
- which items are satisfied
- which items are unclear or incomplete
- where attention is still needed

This prompt is useful before formal human review.

---

## What these prompts deliberately avoid

These prompts explicitly avoid asking the model to:

- invent new resources, actions, roles, or rules
- resolve domain ambiguity on its own
- rewrite the story wholesale
- act as a compliance or validation engine

If the model proposes new domain behavior, treat it as a **question**, not a fix.

---

## Recommended workflow

A typical flow looks like this:

1. Draft the API Story by hand
2. Run the structural review prompt
3. Address missing or inconsistent elements
4. Run the clarity review prompt
5. Improve wording without changing meaning
6. Run the checklist-driven review prompt
7. Perform human review using the checklist and review template

The checklist and specification remain the final authority.

---

## Notes

These prompts are designed to work across different LLMs.
Results will vary by model and context.

When in doubt, prefer:
- explicit questions
- minimal corrections
- human judgment

The goal is better thinking, not automated design.
