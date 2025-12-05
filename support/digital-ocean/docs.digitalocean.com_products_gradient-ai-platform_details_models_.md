---
url: "https://docs.digitalocean.com/products/gradient-ai-platform/details/models/"
title: "Available Foundation and Embedding Models for DigitalOcean Gradient™ AI Platform | DigitalOcean Documentation"
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
- Available Models

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Available Foundation and Embedding Models for DigitalOcean Gradient™ AI Platform

Validated on 29 Sep 2025 • Last edited on 6 Nov 2025

DigitalOcean Gradient™ AI Platform lets you build fully-managed AI agents with knowledge bases for retrieval-augmented generation, multi-agent routing, guardrails, and more, or use serverless inference to make direct requests to popular foundation models.

The following foundation and embedding models are available for Gradient AI Platform. For pricing, see [Gradient AI Platform’s pricing page](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/).

## Foundation Models

Gradient AI Platform supports both open source and commercial foundation models. You can use these models for [serverless inference](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/), [in agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-agents/), or to test configurations in the [Agent Playground](https://docs.digitalocean.com/products/gradient-ai-platform/getting-started/use-model-playground/).

_Open source models_ are generally published by research labs, available under open licenses, and offered using DigitalOcean API access keys. _Commercial models_ are proprietary and require the provider’s API keys to access, such as [OpenAI API keys](https://platform.openai.com/api-keys) and [Anthropic API keys](https://docs.anthropic.com/en/api/admin-api/apikeys/get-api-key).

We offer the following foundation models:

Alibaba

| Model | Model ID | Parameters | Max Output Tokens | Usage Notes |
| --- | --- | --- | --- | --- |
| [Qwen3-32B](https://huggingface.co/Qwen/Qwen3-32B) | `alibaba-qwen3-32b` | 32 billion | 40,960 | Only for [serverless inference](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/). |

Anthropic

All Anthropic models available on the Gradient AI Platform support [tool (function) calling](https://docs.digitalocean.com/products/gradient-ai-platform/details/features/#tool-function-calling). Refer to provider documentation for other supported features.

| Model | Model ID | Parameters | Max Tokens |
| --- | --- | --- | --- |
| [Claude Sonnet 4](https://www.anthropic.com/claude/sonnet) | `anthropic-claude-sonnet-4` | Not published | 64,000 |
| [Claude 3.7 Sonnet](https://www.anthropic.com/news/claude-3-7-sonnet) | `anthropic-claude-3.7-sonnet` | Not published | 128,000 |
| [Claude 3.5 Sonnet](https://www.anthropic.com/news/claude-3-5-sonnet) | `anthropic-claude-3.5-sonnet` | Not published | 8,192 |
| [Claude 3.5 Haiku](https://www.anthropic.com/claude/haiku) | `anthropic-claude-3.5-haiku` | Not published | 8,000 |
| [Claude Opus 4](https://www.anthropic.com/claude/opus) | `anthropic-claude-opus-4` | Not published | 32,000 |
| [Claude 3 Opus](https://www.anthropic.com/news/claude-3-family) | `anthropic-claude-3-opus` | Not published | 4,096 |

DeepSeek

| Model | Model ID | Parameters | Max Tokens | Usage Notes |
| --- | --- | --- | --- | --- |
| [DeepSeek R1 Distill Llama 70B](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Llama-70B) | `deepseek-r1-distill-llama-70b` | 70 billion | 32,768 | When using DeepSeek models in a user-facing agent, we strongly recommend adding all available [guardrails](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-agent-guardrails/#attach) for a safer conversational experience. |

Fal

Note
These models are currently in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview).

| Model | Model ID | Type | Usage Notes |
| --- | --- | --- | --- |
| Fast SDXL | `fal-ai/fast-sdxl` | Image generation | Multimodal and generative model, only for [serverless inference](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/). |
| Flux Schnell | `fal-ai/flux/schnell` | Image generation | Multimodal and generative model, only for [serverless inference](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/). |
| Stable Audio 2.5 (Text-to-Audio) | `fal-ai/stable-audio-25/text-to-audio` | Text-to-audio | Multimodal and generative model, only for [serverless inference](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/). |
| Multilingual TTS v2 | `fal-ai/elevenlabs/tts/multilingual-v2` | Text-to-speech | Multimodal and generative model, only for [serverless inference](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/). |

Meta

| Model | Model ID | Parameters | Max Tokens |
| --- | --- | --- | --- |
| [Llama 3.3 Instruct-70B](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) | `llama3.3-70b-instruct` | 70 billion | 128,000 |
| [Llama 3.1 Instruct-8B](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | `llama3-8b-instruct` | 8 billion | 128,000 |

Mistral

| Model | Model ID | Parameters | Max Tokens |
| --- | --- | --- | --- |
| [NeMo](https://mistral.ai/news/mistral-nemo/) | `mistral-nemo-instruct-2407` | 12 billion | 128,000 |

OpenAI

All OpenAI models available on the Gradient AI Platform, except `gpt-oss-120b` and `gpt-oss-20b`, support [tool (function) calling](https://docs.digitalocean.com/products/gradient-ai-platform/details/features/#tool-function-calling). Refer to provider documentation for other supported features.

| Model | Model ID | Parameters | Max Tokens |
| --- | --- | --- | --- |
| [gpt-oss-120b](https://platform.openai.com/docs/models/gpt-oss-120b) | `openai-gpt-oss-120b` | 117 billion | 131,072 |
| [gpt-oss-20b](https://platform.openai.com/docs/models/gpt-oss-20b) | `openai-gpt-oss-20b` | 21 billion | 131,072 |
| [GPT-5](https://platform.openai.com/docs/models/gpt-5) | `openai-gpt-5` | Not published | Not published |
| [GPT-5 mini](https://platform.openai.com/docs/models/gpt-5-mini) | `openai-gpt-5-mini` | Not published | Not published |
| [GPT-5 nano](https://platform.openai.com/docs/models/gpt-5-nano) | `openai-gpt-5-nano` | Not published | Not published |
| [GPT-4.1](https://platform.openai.com/docs/models/gpt-4.1) | `openai-gpt-4.1` | Not published | Not published |
| [GPT-4o](https://platform.openai.com/docs/models/gpt-4o) | `openai-gpt-4o` | Not published | Not published |
| [GPT-4o mini](https://platform.openai.com/docs/models/gpt-4o-mini) | `openai-gpt-4o-mini` | Not published | Not published |
| [o1](https://platform.openai.com/docs/models/o1) | `openai-o1` | Not published | Not published |
| [o3](https://platform.openai.com/docs/models/o3) | `openai-o3` | Not published | Not published |
| [o3-mini](https://platform.openai.com/docs/models/o3-mini) | `openai-o3-mini` | Not published | Not published |
| [GPT-image-1](https://platform.openai.com/docs/models/gpt-image-1) | `openai-gpt-image-1` | Not published | Not published |

## Embedding Models

An embedding model converts data into vector embeddings. Gradient AI Platform stores vector embeddings in an OpenSearch database cluster for use with [agent knowledge bases](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/). We offer the following embedding models:

| Provider | Type | Model and Version | Parameters |
| --- | --- | --- | --- |
| [Tongyi Lab, Alibaba](https://github.com/Alibaba-NLP) | General text embeddings (GTE) | [Alibaba-NLP/gte-large-en-v1.5](https://huggingface.co/Alibaba-NLP/gte-large-en-v1.5) | 434 million |
| [UKP Lab, Technical University of Darmstadt](https://www.informatik.tu-darmstadt.de/ukp/ukp_home/index.en.jsp) | Sentence Transformer ( [SBERT](https://www.sbert.net/)) | [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | 22.7 million |
| [UKP Lab, Technical University of Darmstadt](https://www.informatik.tu-darmstadt.de/ukp/ukp_home/index.en.jsp) | Sentence Transformer ( [SBERT](https://www.sbert.net/)) | [sentence-transformers/multi-qa-mpnet-base-dot-v1](https://huggingface.co/sentence-transformers/multi-qa-mpnet-base-dot-v1) | 109 million |

In this article...

- [Foundation Models](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/#foundation-models)
- [Embedding Models](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/#embedding-models)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)