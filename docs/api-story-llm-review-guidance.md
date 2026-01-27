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

- [](api-story-llm-prompt-structural-review.md)
- []pi-story-llm-prompt-clarity-review.md)
- []pi-story-llm-prompt-checklist-review.md)

---

## How to use the results

- Treat LLM feedback as advisory
- Resolve disagreements in favor of the specification, guide, and checklist
- Prefer clarifying questions over invented fixes
- Use human review as the final authority

Used carefully, LLMs function like tireless junior reviewers: good at spotting gaps and inconsistencies, but not responsible for design decisions.
