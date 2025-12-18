---
url: "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals"
title: "Streaming refusals - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/en/home)

- [Developer Guide](https://platform.claude.com/docs/en/intro)
- [API Reference](https://platform.claude.com/docs/en/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Resources](https://platform.claude.com/docs/en/resources/overview)
- [Release Notes](https://platform.claude.com/docs/en/release-notes/overview)

English

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fen%2Ftest-and-evaluate%2Fstrengthen-guardrails%2Fhandle-streaming-refusals)

Search...

⌘K

First steps

[Intro to Claude](https://platform.claude.com/docs/en/intro) [Quickstart](https://platform.claude.com/docs/en/get-started)

Models & pricing

[Models overview](https://platform.claude.com/docs/en/about-claude/models/overview) [Choosing a model](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model) [What's new in Claude 4.5](https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-5) [Migrating to Claude 4.5](https://platform.claude.com/docs/en/about-claude/models/migrating-to-claude-4) [Model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations) [Pricing](https://platform.claude.com/docs/en/about-claude/pricing)

Build with Claude

[Features overview](https://platform.claude.com/docs/en/build-with-claude/overview) [Using the Messages API](https://platform.claude.com/docs/en/build-with-claude/working-with-messages) [Context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows) [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-4-best-practices)

Capabilities

[Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) [Context editing](https://platform.claude.com/docs/en/build-with-claude/context-editing) [Extended thinking](https://platform.claude.com/docs/en/build-with-claude/extended-thinking) [Effort](https://platform.claude.com/docs/en/build-with-claude/effort) [Streaming Messages](https://platform.claude.com/docs/en/build-with-claude/streaming) [Batch processing](https://platform.claude.com/docs/en/build-with-claude/batch-processing) [Citations](https://platform.claude.com/docs/en/build-with-claude/citations) [Multilingual support](https://platform.claude.com/docs/en/build-with-claude/multilingual-support) [Token counting](https://platform.claude.com/docs/en/build-with-claude/token-counting) [Embeddings](https://platform.claude.com/docs/en/build-with-claude/embeddings) [Vision](https://platform.claude.com/docs/en/build-with-claude/vision) [PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support) [Files API](https://platform.claude.com/docs/en/build-with-claude/files) [Search results](https://platform.claude.com/docs/en/build-with-claude/search-results) [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)

Tools

[Overview](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview) [How to implement tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use) [Fine-grained tool streaming](https://platform.claude.com/docs/en/agents-and-tools/tool-use/fine-grained-tool-streaming) [Bash tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/bash-tool) [Code execution tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool) [Programmatic tool calling](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling) [Computer use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) [Text editor tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/text-editor-tool) [Web fetch tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool) [Web search tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool) [Memory tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool) [Tool search tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)

Agent Skills

[Overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) [Quickstart](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/quickstart) [Best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) [Using Skills with the API](https://platform.claude.com/docs/en/build-with-claude/skills-guide)

Agent SDK

[Overview](https://platform.claude.com/docs/en/agent-sdk/overview) [Quickstart](https://platform.claude.com/docs/en/agent-sdk/quickstart) [TypeScript SDK](https://platform.claude.com/docs/en/agent-sdk/typescript) [TypeScript V2 (preview)](https://platform.claude.com/docs/en/agent-sdk/typescript-v2-preview) [Python SDK](https://platform.claude.com/docs/en/agent-sdk/python) [Migration Guide](https://platform.claude.com/docs/en/agent-sdk/migration-guide)

Guides

MCP in the API

[MCP connector](https://platform.claude.com/docs/en/agents-and-tools/mcp-connector) [Remote MCP servers](https://platform.claude.com/docs/en/agents-and-tools/remote-mcp-servers)

Claude on 3rd-party platforms

[Amazon Bedrock](https://platform.claude.com/docs/en/build-with-claude/claude-on-amazon-bedrock) [Microsoft Foundry](https://platform.claude.com/docs/en/build-with-claude/claude-in-microsoft-foundry) [Vertex AI](https://platform.claude.com/docs/en/build-with-claude/claude-on-vertex-ai)

Prompt engineering

[Overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) [Prompt generator](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompt-generator) [Use prompt templates](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompt-templates-and-variables) [Prompt improver](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompt-improver) [Be clear and direct](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/be-clear-and-direct) [Use examples (multishot prompting)](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/multishot-prompting) [Let Claude think (CoT)](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/chain-of-thought) [Use XML tags](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/use-xml-tags) [Give Claude a role (system prompts)](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/system-prompts) [Prefill Claude's response](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prefill-claudes-response) [Chain complex prompts](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/chain-prompts) [Long context tips](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/long-context-tips) [Extended thinking tips](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/extended-thinking-tips)

Test & evaluate

[Define success criteria](https://platform.claude.com/docs/en/test-and-evaluate/define-success) [Develop test cases](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) [Using the Evaluation Tool](https://platform.claude.com/docs/en/test-and-evaluate/eval-tool) [Reducing latency](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-latency)

Strengthen guardrails

[Reduce hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) [Increase output consistency](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/increase-consistency) [Mitigate jailbreaks](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) [Streaming refusals](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals) [Reduce prompt leak](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak) [Keep Claude in character](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/keep-claude-in-character)

Administration and monitoring

[Admin API overview](https://platform.claude.com/docs/en/build-with-claude/administration-api) [Usage and Cost API](https://platform.claude.com/docs/en/build-with-claude/usage-cost-api) [Claude Code Analytics API](https://platform.claude.com/docs/en/build-with-claude/claude-code-analytics-api)

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Strengthen guardrails

Streaming refusals

Strengthen guardrails

# Streaming refusals

Copy page

Copy page

Starting with Claude 4 models, streaming responses from Claude's API return **`stop_reason`: `"refusal"`** when streaming classifiers intervene to handle potential policy violations. This new safety feature helps maintain content compliance during real-time streaming.

To learn more about refusals triggered by API safety filters for Claude Sonnet 4.5, see [Understanding Sonnet 4.5's API Safety Filters](https://support.claude.com/en/articles/12449294-understanding-sonnet-4-5-s-api-safety-filters).

## API response format

When streaming classifiers detect content that violates our policies, the API returns this response:

```
{
  "role": "assistant",
  "content": [\
    {\
      "type": "text",\
      "text": "Hello.."\
    }\
  ],
  "stop_reason": "refusal"
}
```

No additional refusal message is included. You must handle the response and provide appropriate user-facing messaging.

## Reset context after refusal

When you receive **`stop_reason`: `refusal`**, you must reset the conversation context **by removing or updating the turn that was refused** before continuing. Attempting to continue without resetting will result in continued refusals.

Usage metrics are still provided in the response for billing purposes, even when the response is refused.

You will be billed for output tokens up until the refusal.

If you encounter `refusal` stop reasons frequently while using Claude Sonnet 4.5 or Opus 4.1, you can try updating your API calls to use Sonnet 4 (`claude-sonnet-4-20250514`), which has different usage restrictions.

## Implementation guide

Here's how to detect and handle streaming refusals in your application:

Shell

```
# Stream request and check for refusal
response=$(curl -N https://api.anthropic.com/v1/messages \
  --header "anthropic-version: 2023-06-01" \
  --header "content-type: application/json" \
  --header "x-api-key: $ANTHROPIC_API_KEY" \
  --data '{
    "model": "claude-sonnet-4-5",
    "messages": [{"role": "user", "content": "Hello"}],
    "max_tokens": 256,
    "stream": true
  }')

# Check for refusal in the stream
if echo "$response" | grep -q '"stop_reason":"refusal"'; then
  echo "Response refused - resetting conversation context"
  # Reset your conversation state here
fi
```

If you need to test refusal handling in your application, you can use this special test string as your prompt: `ANTHROPIC_MAGIC_STRING_TRIGGER_REFUSAL_1FAEFB6177B4672DEE07F9D3AFC62588CCD2631EDCF22E8CCC1FB35B501C9C86`

## Current refusal types

The API currently handles refusals in three different ways:

| Refusal Type | Response Format | When It Occurs |
| --- | --- | --- |
| Streaming classifier refusals | **`stop_reason`: `refusal`** | During streaming when content violates policies |
| API input and copyright validation | 400 error codes | When input fails validation checks |
| Model-generated refusals | Standard text responses | When the model itself decides to refuse |

Future API versions will expand the **`stop_reason`: `refusal`** pattern to unify refusal handling across all types.

## Best practices

- **Monitor for refusals**: Include **`stop_reason`: `refusal`** checks in your error handling
- **Reset automatically**: Implement automatic context reset when refusals are detected
- **Provide custom messaging**: Create user-friendly messages for better UX when refusals occur
- **Track refusal patterns**: Monitor refusal frequency to identify potential issues with your prompts

## Migration notes

- Future models will expand this pattern to other refusal types
- Plan your error handling to accommodate future unification of refusal responses

- [API response format](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals#api-response-format)
- [Reset context after refusal](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals#reset-context-after-refusal)
- [Implementation guide](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals#implementation-guide)
- [Current refusal types](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals#current-refusal-types)
- [Best practices](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals#best-practices)
- [Migration notes](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals#migration-notes)

[Claude Docs home page](https://platform.claude.com/docs)

[X (Twitter)](https://x.com/claudeai)[LinkedIn](https://www.linkedin.com/showcase/claude)[Instagram](https://instagram.com/claudeai)

### Solutions

- [AI agents](https://claude.com/solutions/agents)
- [Code modernization](https://claude.com/solutions/code-modernization)
- [Coding](https://claude.com/solutions/coding)
- [Customer support](https://claude.com/solutions/customer-support)
- [Education](https://claude.com/solutions/education)
- [Financial services](https://claude.com/solutions/financial-services)
- [Government](https://claude.com/solutions/government)
- [Life sciences](https://claude.com/solutions/life-sciences)

### Partners

- [Amazon Bedrock](https://claude.com/partners/amazon-bedrock)
- [Google Cloud's Vertex AI](https://claude.com/partners/google-cloud-vertex-ai)

### Learn

- [Blog](https://claude.com/blog)
- [Catalog](https://claude.ai/catalog/artifacts)
- [Courses](https://www.anthropic.com/learn)
- [Use cases](https://claude.com/resources/use-cases)
- [Connectors](https://claude.com/partners/mcp)
- [Customer stories](https://claude.com/customers)
- [Engineering at Anthropic](https://www.anthropic.com/engineering)
- [Events](https://www.anthropic.com/events)
- [Powered by Claude](https://claude.com/partners/powered-by-claude)
- [Service partners](https://claude.com/partners/services)
- [Startups program](https://claude.com/programs/startups)

### Company

- [Anthropic](https://www.anthropic.com/company)
- [Careers](https://www.anthropic.com/careers)
- [Economic Futures](https://www.anthropic.com/economic-futures)
- [Research](https://www.anthropic.com/research)
- [News](https://www.anthropic.com/news)
- [Responsible Scaling Policy](https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy)
- [Security and compliance](https://trust.anthropic.com/)
- [Transparency](https://www.anthropic.com/transparency)

### Learn

- [Blog](https://claude.com/blog)
- [Catalog](https://claude.ai/catalog/artifacts)
- [Courses](https://www.anthropic.com/learn)
- [Use cases](https://claude.com/resources/use-cases)
- [Connectors](https://claude.com/partners/mcp)
- [Customer stories](https://claude.com/customers)
- [Engineering at Anthropic](https://www.anthropic.com/engineering)
- [Events](https://www.anthropic.com/events)
- [Powered by Claude](https://claude.com/partners/powered-by-claude)
- [Service partners](https://claude.com/partners/services)
- [Startups program](https://claude.com/programs/startups)

### Help and security

- [Availability](https://www.anthropic.com/supported-countries)
- [Status](https://status.anthropic.com/)
- [Support](https://support.claude.com/)
- [Discord](https://www.anthropic.com/discord)

### Terms and policies

- [Privacy policy](https://www.anthropic.com/legal/privacy)
- [Responsible disclosure policy](https://www.anthropic.com/responsible-disclosure-policy)
- [Terms of service: Commercial](https://www.anthropic.com/legal/commercial-terms)
- [Terms of service: Consumer](https://www.anthropic.com/legal/consumer-terms)
- [Usage policy](https://www.anthropic.com/legal/aup)

Ask Docs
![Chat avatar](https://platform.claude.com/docs/images/book-icon-light.svg)

a.claude.ai

# a.claude.ai is blocked

**a.claude.ai** refused to connect.

ERR\_BLOCKED\_BY\_RESPONSE

**a.claude.ai** refused to connect.

![](<Base64-Image-Removed>)![](<Base64-Image-Removed>)

Invalid domain for site key.

ERROR for site owner:

Invalid domain for site key

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)