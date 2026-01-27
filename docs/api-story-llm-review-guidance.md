# Using LLMs as an API story review assistant

Status: guidance  
Applies to: API Story specification v1.1 and related documents

This document describes how large language models (LLMs) may be used as review assistants when working with API Stories.
It is intentionally conservative and is designed to preserve human judgment and design intent.

---

## Purpose

API Stories are written for humans first, but they are structured enough that LLMs can assist with review and quality checks when given the correct constraints.

LLMs are well suited for:
- spotting omissions
- identifying inconsistencies
- checking structural integrity
- flagging clarity issues

They are not a substitute for human authorship or review.

---

## What to provide to the model

For reliable results, provide the model with all of the following:

- the draft API Story being reviewed
- the API Story specification
- the designer’s guide
- the author checklist
- optionally, the review template

This mirrors how a human reviewer would evaluate an API Story.

---

## What LLMs are good at

When properly constrained, an LLM can:

- identify missing required sections
- flag actions that do not return a resource
- detect unreachable resources or orphan actions
- find references to undeclared roles, resources, actions, or data properties
- detect naming inconsistencies across sections
- check role usage (visibility on resources vs authority on actions)
- flag protocol leakage and workflow language
- suggest clarity improvements that preserve intent

These are review tasks, not design decisions.

---

## What LLMs should not be trusted to do

LLMs should not be relied on to:

- invent missing domain behavior
- resolve ambiguity without asking questions
- decide whether a rule is correct for the domain
- act as a conformance or validation authority

If a model proposes new resources, actions, roles, or rules, treat that as a question to the author, not a fix.

---

## Recommended prompt patterns

The following prompts bias toward questions, minimal edits, and intent preservation.

### Prompt 1: structural and consistency review

```
You are acting as a review assistant for an API Story.

Inputs:
- Draft API Story
- API Story specification
- Designer’s guide
- Author checklist

Task:
1. Check structural integrity:
   - unreachable resources
   - unreachable actions
   - actions that do not return a resource
   - referenced but undeclared roles, resources, actions, or data properties

2. Check consistency:
   - naming consistency across sections
   - consistent use of roles
   - consistent terminology for resources and actions

3. Check role usage:
   - roles on resources used only for visibility
   - roles on actions used only for authority
   - action-level role restrictions not weaker than resource visibility

Constraints:
- Do not invent new resources, actions, rules, or roles.
- If something is missing, list questions first.
- Propose only minimal corrections that preserve the author’s intent.

Output:
- A list of issues, grouped by category.
- For each issue, cite the section where it appears.
```

---

### Prompt 2: clarity and design hygiene review

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

### Prompt 3: checklist-driven self-review

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

## How to use the results

- Treat LLM feedback as advisory
- Resolve disagreements in favor of the specification, guide, and checklist
- Prefer clarifying questions over invented fixes
- Use human review as the final authority

Used carefully, LLMs function like tireless junior reviewers: good at spotting gaps and inconsistencies, but not responsible for design decisions.
