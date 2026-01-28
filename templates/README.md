## Templates

This folder contains two closely related templates used when working with API Stories.

### API Story template

The API Story template is the starting point. It is used to describe a system from scratch, focusing on purpose, roles, resources as observable states, and actions as expressions of intent.

The structure is intentionally lightweight. It encourages plain language, clear boundaries, and explicit distinctions between visibility (what can be seen) and authority (what can be done). The goal is to capture intent and constraints early, before committing to protocols, schemas, or implementation details.

Use this template when exploring a new idea, a new domain, or a small slice of functionality you want to reason about clearly.

See the [designer's guide](../docs/api-story-designers-guide.md) and the [API Story specification](../docs/api-story-specification.md) for additional details.


### API Story review template

The API Story review template is used after a story has been drafted. It provides a structured checklist for evaluating clarity, consistency, and internal integrity.

The review focuses on questions like whether roles are stable and well-scoped, whether resources represent navigable states rather than storage abstractions, whether actions express intent rather than mechanics, and whether rules are visible and testable.

This template is designed to support peer review, self-review, or design validation before moving downstream into specifications or code.

See the [author checklist](../docs/api-story-author-checklist.md) for additionl details.

### How to use these templates

A typical flow is simple. Start with the API Story template. Keep it small. Revise it once or twice. Then run it through the review template to surface gaps, ambiguities, or hidden assumptions.

These templates are working tools. They are meant to lower the cost of thinking, not to produce polished artifacts. Use them early, use them lightly, and move on when they have done their job.

