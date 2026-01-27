# Api Stories

![logo](logo.png)

This repository contains a small, practical standard for writing and reviewing API Stories.

## What is an API Story?

An API Story is a structured narrative that captures purpose, data, states, actions, and rules before you commit to interface details. It is designed to be readable by humans and stable enough to support downstream generation of ALPS, OpenAPI, documentation, tests, etc.

## Start here

Reading order:

1. [Why API Stories](docs/why-api-stories.md)
2. [API Story Specification](docs/api-story-specification.md)
3. [Designer's Guide](docs/api-story-designers-guide.md)
4. [Author's Checklist](docs/api-story-author-checklist.md)
5. [Anti-Patterns](docs/api-story-anti-patterns.md)
6. [Examples](examples/README.md)
7. [LLM Review Guidance](doc/api-story-llm-review-guidance.md)

If you want to write your first story right away, jump to templates/api-story-template.md.

## Repository layout

- docs/
  - Core documents, specification, guidance, checklist, anti-patterns, glossary
- templates/
  - Authoring template and review template
- examples/
  - Fully worked examples
- .github/
  - Lightweight validation for pull requests

## Write your first story in 10 minutes

1. Copy templates/api-story-template.md into a new file under examples/ or a stories/ folder you create.
2. Fill in Purpose, Data properties, Resources or states, Actions, and Rules.
3. Run the author checklist at docs/api-story-author-checklist.md.
4. During review, use templates/review-template.md.

## Using LLMs for review

You can paste a draft API Story along with the specification, designer’s guide, and author checklist into an LLM and ask for a structured review. 

Good prompts ask the model to:

 1. check structural integrity (reachable resources, reachable actions, valid return states) 
 2. check naming consistency across resources, actions, and rules, 
 3. check role usage (visibility on resources, authority on actions)
 4. flag protocol leakage or workflow language. 
 
Treat the output as advisory. The model may miss issues or invent details. Use the checklist and human judgment as the final authority. For details and examples of LLM interactions, see [LLM Review Guidance](doc/api-story-llm-review-guidance.md)


## Contributing

See CONTRIBUTING.md. Small improvements are welcome, especially clarifications, examples, and additional anti-patterns.

## License

See LICENSE.
