---
url: "https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/"
title: "DigitalOcean Gradient™ AI Platform Pricing | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/gradient-ai-platform.d44093369d163f66a792e27c3d48418be24ba1c7d9e216e99032e5cd6c166096.svg)Gradient AI Platform](https://docs.digitalocean.com/products/gradient-ai-platform/)
- [Getting Started](https://docs.digitalocean.com/products/gradient-ai-platform/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/gradient-ai-platform/getting-started/quickstart/)
  - [Test and Compare Models](https://docs.digitalocean.com/products/gradient-ai-platform/getting-started/use-model-playground/)
- [How-Tos](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/)
  - [Use Serverless Inference](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/)
  - [Manage Partner Provider Model Keys](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-model-provider-keys/)
  - [Manage Workspaces](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-workspaces/)
  - [Create Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-agents/)
  - [Configure Model Settings](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/configure-models/)
  - [Use Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-agents/)
  - [Test Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/test-agents/)
  - [Evaluate Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/evaluate-agents/)
  - [Create Evaluation Dataset](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-evaluation-datasets/)
  - [View Agent Insights and Logs](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/view-agent-observability/)
  - [Trace Agent Responses](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/trace-agents/)
  - [Route to Multiple Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/route-agents/)
  - [Route Functions in Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/route-agent-functions/)
  - [Manage Agent Versions](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-agent-versions/)
  - [Create and Manage Knowledge Bases](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/)
  - [Attach and Detach Agent Knowledge Bases](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/attach-agent-knowledge-bases/)
  - [Manage Agent Guardrails](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-agent-guardrails/)
  - [Destroy Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/destroy-agents/)
- [Reference](https://docs.digitalocean.com/products/gradient-ai-platform/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GradientAI-Platform)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/genai/)
  - [Python SDK Reference](https://gradientai-sdk.digitalocean.com/api/python)
  - [Agent Evaluation Metrics](https://docs.digitalocean.com/products/gradient-ai-platform/reference/agent-evaluation-metrics/)
  - [Agent Tracing Data](https://docs.digitalocean.com/products/gradient-ai-platform/reference/agent-tracing-metrics/)
- [Concepts](https://docs.digitalocean.com/products/gradient-ai-platform/concepts/)
  - [Context Management Best Practices](https://docs.digitalocean.com/products/gradient-ai-platform/concepts/context-management/)
  - [Agent Instructions Best Practices](https://docs.digitalocean.com/products/gradient-ai-platform/concepts/agent-instructions/)
  - [Function Instructions Best Practices](https://docs.digitalocean.com/products/gradient-ai-platform/concepts/function-instructions/)
  - [Prompt Writing Best Practices](https://docs.digitalocean.com/products/gradient-ai-platform/concepts/prompts/)
  - [Effectively Use Workspaces](https://docs.digitalocean.com/products/gradient-ai-platform/concepts/workspaces/)
- [Details](https://docs.digitalocean.com/products/gradient-ai-platform/details/)
  - [Features](https://docs.digitalocean.com/products/gradient-ai-platform/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/gradient-ai-platform/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/gradient-ai-platform/details/limits/)
  - [Available Models](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/)
  - [Data Privacy](https://docs.digitalocean.com/products/gradient-ai-platform/details/data-privacy/)
- [Support](https://docs.digitalocean.com/products/gradient-ai-platform/support/)

- [Details](https://docs.digitalocean.com/products/gradient-ai-platform/details/)
- Pricing

[Give Feedback](https://ideas.digitalocean.com/documentation)

# DigitalOcean Gradient™ AI Platform Pricing

Validated on 31 Oct 2025 • Last edited on 10 Nov 2025

DigitalOcean Gradient™ AI Platform lets you build fully-managed AI agents with knowledge bases for retrieval-augmented generation, multi-agent routing, guardrails, and more, or use serverless inference to make direct requests to popular foundation models.

Gradient AI Platform has a usage-based pricing model, so costs scale with your actual usage. We charge for model usage and for additional features like knowledge bases, guardrails, and log stream insights. We display prices per million tokens and bill per thousand tokens for accuracy.

Serverless inference (direct API calls) is billed by DigitalOcean for both open-source and commercial models. Prices on this page align with each provider’s published rates for transparency.

Agents are billed by DigitalOcean for open-source models. When you use commercial models in agents or evaluations with your own provider API keys (for example, OpenAI, Anthropic), billing is handled directly by the model provider and DigitalOcean does not charge you for that model usage.

[Agent creation](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-agents/) is free. You are charged for all input and output tokens processed by the agent. Token usage depends on factors such as input length, agent instructions, attached knowledge bases, and configuration settings. To optimize usage, [test your agents](https://docs.digitalocean.com/products/gradient-ai-platform/getting-started/use-model-playground/) and adjust their parameters.

[Serverless inference](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/) lets you call models directly through the API without creating an agent. All usage is billed per input and output token through your DigitalOcean account.

## Foundation Model Usage

The following shows pricing for open-source and commercial models for serverless inference and agent usage.

Alibaba

| Model | Serverless Inference (Direct API Usage) | Agent Usage |
| --- | --- | --- |
| Qwen3-32B | $0.25 per 1,000,000 input tokens <br> $0.55 per 1,000,000 output tokens | Not available |

Anthropic

Note
For serverless inference, billing is handled by DigitalOcean and aligns with Anthropic’s published rates.

For agents, when you use your own Anthropic API key, billing is handled directly by Anthropic.

| Model | Serverless Inference (Direct API Usage) | Agent Usage |
| --- | --- | --- |
| [Claude Sonnet 4](https://www.anthropic.com/claude/sonnet)<br>[Claude 3.7 Sonnet](https://www.anthropic.com/news/claude-3-7-sonnet)<br>[Claude 3.5 Sonnet](https://www.anthropic.com/news/claude-3-5-sonnet)<br>[Claude Opus 4](https://www.anthropic.com/claude/opus)<br>[Claude 3 Opus](https://www.anthropic.com/news/claude-3-family)<br>[Claude 3.5 Haiku](https://www.anthropic.com/claude/haiku) | Billed by DigitalOcean (provider-aligned rates). | Billed directly by provider (your API key). |

DeepSeek

| Model | Serverless Inference (Direct API Usage) | Agent Usage |
| --- | --- | --- |
| DeepSeek-R1 distill-llama-70B | Same as Agent Usage | $0.99 per 1,000,000 input tokens<br>$0.99 per 1,000,000 output tokens |

Fal

Note
These models are currently in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview). Serverless usage is billed by DigitalOcean as shown.

| Model | Serverless Inference (Direct API Usage) | Agent Usage |
| --- | --- | --- |
| Fast SDXL | $0.0011 per compute second | Not available |
| Flux Schnell | $0.0030 per megapixel | Not available |
| Stable Audio 2.5 (Text-to-Audio) | $0.00058 per compute second | Not available |
| Multilingual TTS v2 | $0.10 per 1000 characters | Not available |

Meta

| Model | Serverless Inference (Direct API Usage) | Agent Usage |
| --- | --- | --- |
| Llama 3.1 8B | Same as Agent Usage | $0.198 per 1,000,000 input tokens<br>$0.198 per 1,000,000 output tokens |
| Llama 3.3 70B | Same as Agent Usage | $0.65 per 1,000,000 input tokens<br>$0.65 per 1,000,000 output tokens |

Mistral

| Model | Serverless Inference (Direct API Usage) | Agent Usage |
| --- | --- | --- |
| NeMo | Same as Agent Usage | $0.30 per 1,000,000 input tokens<br>$0.30 per 1,000,000 output tokens |

OpenAI

Note
Billing for most OpenAI commercial models through DigitalOcean is not available. When using OpenAI models with your own API key, billing is handled directly by OpenAI.

| Model | Serverless Inference (Direct API Usage) | Agent Usage |
| --- | --- | --- |
| OpenAI gpt-oss-120b | Same as Agent Usage | $0.10 per 1,000,000 input tokens<br>$0.70 per 1,000,000 output tokens |
| OpenAI gpt-oss-20b | Same as Agent Usage | $0.05 per 1,000,000 input tokens<br>$0.45 per 1,000,000 output tokens |
| [GPT-5](https://platform.openai.com/docs/models/gpt-5)<br>[GPT-5 mini](https://platform.openai.com/docs/models/gpt-5-mini)<br>[GPT-5 nano](https://platform.openai.com/docs/models/gpt-5-nano)<br>[GPT-4.1](https://platform.openai.com/docs/models/gpt-4.1)<br>[GPT-4o](https://platform.openai.com/docs/models/gpt-4o)<br>[GPT-4o mini](https://platform.openai.com/docs/models/gpt-4o-mini)<br>[o1](https://platform.openai.com/docs/models/o1)<br>[o3](https://platform.openai.com/docs/models/o3)<br>[o3-mini](https://platform.openai.com/docs/models/o3-mini)<br>[GPT-image-1](https://platform.openai.com/docs/models/gpt-image-1) | Billed directly by provider (your API key). | Billed directly by provider (your API key). |

## Knowledge Bases

Knowledge bases are billed for both indexing and storage:

- **Indexing tokens**: We charge for tokens required to generate embeddings. Pricing is the same for manual and auto-indexing. Charges apply only when changes are detected (new, updated, or deleted files/URLs). If auto-indexing is paused or no changes are found, there are no charges.

For example, a 10 MB dataset is about 3 million tokens, and a 1 GB dataset is about 250 million tokens.

Actual costs depend on the embedding model:



| Model | Price |
| --- | --- |
| `all-mini-lm-l6-v2` | $0.009 per 1,000,000 input tokens |
| `multi-qa-mpnet-base-dot-v1` | $0.009 per 1,000,000 input tokens |
| `gte-large-en-v1.5` | $0.09 per 1,000,000 input tokens |


_One token is roughly four characters (approximately 75 words per 100 tokens). Non-Latin scripts, emojis, or binary data may increase token counts._

- **Storage**: Embeddings are stored in OpenSearch. See [OpenSearch pricing](https://docs.digitalocean.com/products/databases/opensearch/details/pricing/).


## Guardrails

Charges apply for all tokens processed through guardrails:

| Guardrail | Price |
| --- | --- |
| Content Moderation | $0.20 per 1,000,000 tokens |
| Jailbreak Detection | $0.20 per 1,000,000 tokens |
| Sensitive Data Detection | $0.34 per 1,000,000 tokens |

Costs are per token. Creating, editing, or duplicating guardrails has no additional cost.

## Functions

If you attach [DigitalOcean Functions](https://docs.digitalocean.com/products/functions/) to your agent, you are billed at [functions pricing](https://docs.digitalocean.com/products/functions/details/pricing/).

## Agent Evaluations

Agent evaluations are charged by token usage at the same rates as [model usage](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/#foundation-model-usage).

## Log Stream Insights

Log Stream Insights uses a third-party model to analyze agent trace data. You are charged per token:

| Tokens | Price |
| --- | --- |
| Input | $4.00 per 1,000,000 tokens |
| Output | $20.00 per 1,000,000 tokens |

In this article...

- [Foundation Model Usage](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/#foundation-model-usage)
- [Knowledge Bases](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/#knowledge-bases)
- [Guardrails](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/#guardrails)
- [Functions](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/#functions)
- [Agent Evaluations](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/#agent-evaluations)
- [Log Stream Insights](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/#log-stream-insights)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices