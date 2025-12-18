---
url: "https://platform.openai.com/docs/actions/actions-library"
title: "GPT Actions library"
---

[DocsDocs](https://platform.openai.com/docs) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

Log in [Sign up](https://platform.openai.com/signup)

Search`` `K`

Get started

[Overview](https://platform.openai.com/docs/overview)

[Quickstart](https://platform.openai.com/docs/quickstart)

[Models](https://platform.openai.com/docs/models)

[Pricing](https://platform.openai.com/docs/pricing)

[Libraries](https://platform.openai.com/docs/libraries)

[Latest: GPT-5.2](https://platform.openai.com/docs/guides/latest-model)

Core concepts

[Text generation](https://platform.openai.com/docs/guides/text)

[Code generation](https://platform.openai.com/docs/guides/code-generation)

[Images and vision](https://platform.openai.com/docs/guides/images-vision)

[Audio and speech](https://platform.openai.com/docs/guides/audio)

[Structured output](https://platform.openai.com/docs/guides/structured-outputs)

[Function calling](https://platform.openai.com/docs/guides/function-calling)

[Responses API](https://platform.openai.com/docs/guides/migrate-to-responses)

Agents

[Overview](https://platform.openai.com/docs/guides/agents)

Build agents

Deploy in your product

Optimize

[Voice agents](https://platform.openai.com/docs/guides/voice-agents)

Tools

[Using tools](https://platform.openai.com/docs/guides/tools)

[Connectors and MCP](https://platform.openai.com/docs/guides/tools-connectors-mcp)

[Web search](https://platform.openai.com/docs/guides/tools-web-search)

[Code interpreter](https://platform.openai.com/docs/guides/tools-code-interpreter)

File search and retrieval

More tools

Run and scale

[Conversation state](https://platform.openai.com/docs/guides/conversation-state)

[Background mode](https://platform.openai.com/docs/guides/background)

[Streaming](https://platform.openai.com/docs/guides/streaming-responses)

[Webhooks](https://platform.openai.com/docs/guides/webhooks)

[File inputs](https://platform.openai.com/docs/guides/pdf-files)

Prompting

Reasoning

Evaluation

[Getting started](https://platform.openai.com/docs/guides/evaluation-getting-started)

[Working with evals](https://platform.openai.com/docs/guides/evals)

[Prompt optimizer](https://platform.openai.com/docs/guides/prompt-optimizer)

[External models](https://platform.openai.com/docs/guides/external-models)

[Best practices](https://platform.openai.com/docs/guides/evaluation-best-practices)

Realtime API

[Overview](https://platform.openai.com/docs/guides/realtime)

Connect

Usage

Model optimization

[Optimization cycle](https://platform.openai.com/docs/guides/model-optimization)

Fine-tuning

[Graders](https://platform.openai.com/docs/guides/graders)

Specialized models

[Image generation](https://platform.openai.com/docs/guides/image-generation)

[Video generation](https://platform.openai.com/docs/guides/video-generation)

[Text to speech](https://platform.openai.com/docs/guides/text-to-speech)

[Speech to text](https://platform.openai.com/docs/guides/speech-to-text)

[Deep research](https://platform.openai.com/docs/guides/deep-research)

[Embeddings](https://platform.openai.com/docs/guides/embeddings)

[Moderation](https://platform.openai.com/docs/guides/moderation)

Coding agents

[Codex cloud](https://developers.openai.com/codex/cloud)

[Agent internet access](https://developers.openai.com/codex/cloud/agent-internet)

[Codex CLI](https://developers.openai.com/codex/cli)

[Codex IDE](https://developers.openai.com/codex/ide)

[Codex changelog](https://developers.openai.com/codex/changelog)

Going live

[Production best practices](https://platform.openai.com/docs/guides/production-best-practices)

Latency optimization

Cost optimization

[Accuracy optimization](https://platform.openai.com/docs/guides/optimizing-llm-accuracy)

Safety

Specialized APIs

Assistants API

Resources

[Terms and policies](https://openai.com/policies)

[Changelog](https://platform.openai.com/docs/changelog)

[Your data](https://platform.openai.com/docs/guides/your-data)

[Permissions](https://platform.openai.com/docs/guides/rbac)

[Rate limits](https://platform.openai.com/docs/guides/rate-limits)

[Deprecations](https://platform.openai.com/docs/deprecations)

[MCP for deep research](https://platform.openai.com/docs/mcp)

[Developer mode](https://platform.openai.com/docs/guides/developer-mode)

ChatGPT Actions

[Introduction](https://platform.openai.com/docs/actions/introduction)

[Getting started](https://platform.openai.com/docs/actions/getting-started)

[Actions library](https://platform.openai.com/docs/actions/actions-library)

[Authentication](https://platform.openai.com/docs/actions/authentication)

[Production](https://platform.openai.com/docs/actions/production)

[Data retrieval](https://platform.openai.com/docs/actions/data-retrieval)

[Sending files](https://platform.openai.com/docs/actions/sending-files)

[Cookbook](https://cookbook.openai.com/) [Forum](https://community.openai.com/categories)

# GPT Actions library

Build and integrate GPT Actions for common applications.

Copy page

## Purpose

While GPT Actions should be significantly less work for an API developer to set up than an entire application using those APIs from scratch, there’s still some set up required to get GPT Actions up and running. A Library of GPT Actions is meant to provide guidance for building GPT Actions on common applications.

## Getting started

If you’ve never built an action before, start by reading the [getting started guide](https://platform.openai.com/docs/actions/getting-started) first to understand better how actions work.

Generally, this guide is meant for people with familiarity and comfort with calling API calls. For debugging help, try to explain your issues to ChatGPT - and include screenshots.

## How to access

[The OpenAI Cookbook](https://cookbook.openai.com/) has a [directory](https://cookbook.openai.com/topic/chatgpt) of 3rd party applications and middleware application.

### 3rd party Actions cookbook

GPT Actions can integrate with HTTP services directly. GPT Actions leveraging SaaS API directly will authenticate and request resources directly from SaaS providers, such as [Google Drive](https://cookbook.openai.com/examples/chatgpt/gpt_actions_library/gpt_action_google_drive) or [Snowflake](https://cookbook.openai.com/examples/chatgpt/gpt_actions_library/gpt_action_snowflake_direct).

### Middleware Actions cookbook

GPT Actions can benefit from having a middleware. It allows pre-processing, data formatting, data filtering or even connection to endpoints not exposed through HTTP (e.g: databases). Multiple middleware cookbooks are available describing an example implementation path, such as [Azure](https://cookbook.openai.com/examples/chatgpt/gpt_actions_library/gpt_middleware_azure_function), [GCP](https://cookbook.openai.com/examples/chatgpt/gpt_actions_library/gpt_middleware_google_cloud_function) and [AWS](https://cookbook.openai.com/examples/chatgpt/gpt_actions_library/gpt_middleware_aws_function).

## Give us feedback

Are there integrations that you’d like us to prioritize? Are there errors in our integrations? File a PR or issue on the cookbook page's github, and we’ll take a look.

## Contribute to our library

If you’re interested in contributing to our library, please follow the below guidelines, then submit a PR in github for us to review. In general, follow the template similar to [this example GPT Action](https://cookbook.openai.com/examples/chatgpt/gpt_actions_library/gpt_action_bigquery).

Guidelines - include the following sections:

- Application Information - describe the 3rd party application, and include a link to app website and API docs
- Custom GPT Instructions - include the exact instructions to be included in a Custom GPT
- OpenAPI Schema - include the exact OpenAPI schema to be included in the GPT Action
- Authentication Instructions - for OAuth, include the exact set of items (authorization URL, token URL, scope, etc.); also include instructions on how to write the callback URL in the application (as well as any other steps)
- FAQ and Troubleshooting - what are common pitfalls that users may encounter? Write them here and workarounds

## Disclaimers

This action library is meant to be a guide for interacting with 3rd parties that OpenAI have no control over. These 3rd parties may change their API settings or configurations, and OpenAI cannot guarantee these Actions will work in perpetuity. Please see them as a starting point.

This guide is meant for developers and people with comfort writing API calls. Non-technical users will likely find these steps challenging.