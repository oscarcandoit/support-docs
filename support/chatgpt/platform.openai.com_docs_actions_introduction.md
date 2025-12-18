---
url: "https://platform.openai.com/docs/actions/introduction"
title: "GPT Actions"
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

# GPT Actions

Customize ChatGPT with GPT Actions and API integrations.

Copy page

GPT Actions are stored in [Custom GPTs](https://openai.com/blog/introducing-gpts), which enable users to customize ChatGPT for specific use cases by providing instructions, attaching documents as knowledge, and connecting to 3rd party services.

GPT Actions empower ChatGPT users to interact with external applications via RESTful APIs calls outside of ChatGPT simply by using natural language. They convert natural language text into the json schema required for an API call. GPT Actions are usually either used to do [data retrieval](https://platform.openai.com/docs/actions/data-retrieval) to ChatGPT (e.g. query a Data Warehouse) or take action in another application (e.g. file a JIRA ticket).

## How GPT Actions work

At their core, GPT Actions leverage [Function Calling](https://platform.openai.com/docs/guides/function-calling) to execute API calls.

Similar to ChatGPT's Data Analysis capability (which generates Python code and then executes it), they leverage Function Calling to (1) decide which API call is relevant to the user's question and (2) generate the json input necessary for the API call. Then finally, the GPT Action executes the API call using that json input.

Developers can even specify the authentication mechanism of an action, and the Custom GPT will execute the API call using the third party app’s authentication. GPT Actions obfuscates the complexity of the API call to the end user: they simply ask a question in natural language, and ChatGPT provides the output in natural language as well.

## The Power of GPT Actions

APIs allow for **interoperability** to enable your organization to access other applications. However, enabling users to access the right information from 3rd-party APIs can require significant overhead from developers.

GPT Actions provide a viable alternative: developers can now simply describe the schema of an API call, configure authentication, and add in some instructions to the GPT, and ChatGPT provides the bridge between the user's natural language questions and the API layer.

## Simplified example

The [getting started guide](https://platform.openai.com/docs/actions/getting-started) walks through an example using two API calls from [weather.gov](https://platform.openai.com/docs/actions/introduction) to generate a forecast:

- /points/{latitude},{longitude} inputs lat-long coordinates and outputs forecast office (wfo) and x-y coordinates
- /gridpoints/{office}/{gridX},{gridY}/forecast inputs wfo,x,y coordinates and outputs a forecast

Once a developer has encoded the json schema required to populate both of those API calls in a GPT Action, a user can simply ask "What I should pack on a trip to Washington DC this weekend?" The GPT Action will then figure out the lat-long of that location, execute both API calls in order, and respond with a packing list based on the weekend forecast it receives back.

In this example, GPT Actions will supply api.weather.gov with two API inputs:

/points API call:

```
1
2
3
4
{
  "latitude": 38.9072,
  "longitude": -77.0369
}
```

/forecast API call:

```
1
2
3
4
5
{
  "wfo": "LWX",
  "x": 97,
  "y": 71
}
```

## Get started on building

Check out the [getting started guide](https://platform.openai.com/docs/actions/getting-started) for a deeper dive on this weather example and our [actions library](https://platform.openai.com/docs/actions/actions-library) for pre-built example GPT Actions of the most common 3rd party apps.

## Additional information

- Familiarize yourself with our [GPT policies](https://openai.com/policies/usage-policies#:~:text=or%20educational%20purposes.-,Building%20with%20ChatGPT,-Shared%20GPTs%20allow)
- Check out the [GPT data privacy FAQs](https://help.openai.com/en/articles/8554402-gpts-data-privacy-faqs)
- Find answers to [common GPT questions](https://help.openai.com/en/articles/8554407-gpts-faq)

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all