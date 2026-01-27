# Glossary

This glossary defines the key terms used across the API Story documents.

## Api story

A structured narrative that captures purpose, data, states, actions, and rules before interface details are fixed. It is written for humans first and designed to support downstream automation.

## Data property

A domain-level data element the system must track. Data properties are candidates for schema fields and shared vocabulary.

## Resource or state

A stable, observable situation a client can encounter and return to over time. States are navigable places in the system, not storage abstractions.

## Action

An allowed operation within the system expressed as intent. Actions are not HTTP calls; they are candidates for mapping into ALPS, OpenAPI operations, RPC methods, event handlers, etc.

## Rule

A testable constraint that must hold. Rules often represent cross-cutting domain constraints and invariants.

## Action type

A coarse classification of action behavior:

- Safe: read-only, no state change
- Idempotent: repeatable with the same effect
- Unsafe: creates or mutates state
- Delete: removes or retires state

## Role

A named capability boundary used for authorization reasoning. Roles should be coarse-grained and stable.

## Observability notes

Design-time expectations for what should be observable when actions occur, such as audit entries and domain events. This section expresses intent, not logging formats or tooling.

## Lifecycle notes

Design-time expectations about behavior over time, such as retention, archival, replacement, and immutability.
