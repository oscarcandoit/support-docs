---
url: "https://platform.openai.com/docs/actions/getting-started"
title: "Getting started with GPT Actions"
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

# Getting started with GPT Actions

Set up and test GPT Actions from scratch.

Copy page

## Weather.gov example

The NSW (National Weather Service) maintains a [public API](https://www.weather.gov/documentation/services-web-api) that users can query to receive a weather forecast for any lat-long point. To retrieve a forecast, there’s 2 steps:

1. A user provides a lat-long to the api.weather.gov/points API and receives back a WFO (weather forecast office), grid-X, and grid-Y coordinates
2. Those 3 elements feed into the api.weather.gov/forecast API to retrieve a forecast for that coordinate

For the purpose of this exercise, let’s build a Custom GPT where a user writes a city, landmark, or lat-long coordinates, and the Custom GPT answers questions about a weather forecast in that location.

## Step 1: Write and test Open API schema (using Actions GPT)

A GPT Action requires an [Open API schema](https://swagger.io/specification/) to describe the parameters of the API call, which is a standard for describing APIs.

OpenAI released a public [Actions GPT](https://chatgpt.com/g/g-TYEliDU6A-actionsgpt) to help developers write this schema. For example, go to the Actions GPT and ask: _“Go to [https://www.weather.gov/documentation/services-web-api](https://www.weather.gov/documentation/services-web-api) and read the documentation on that page. Build an Open API Schema for the /points/{latitude},{longitude} and /gridpoints/{office}/{gridX},{gridY}/forecast” API calls”_

![The above Actions GPT request](https://cdn.openai.com/API/images/guides/actions_action_gpt.png)

Deep dive

See Full Open API Schema

ChatGPT uses the **info** at the top (including the description in particular) to determine if this action is relevant for the user query.

```
1
2
3
4
info:
  title: NWS Weather API
  description: Access to weather data including forecasts, alerts, and observations.
  version: 1.0.0
```

Then the **parameters** below further define each part of the schema. For example, we're informing ChatGPT that the _office_ parameter refers to the Weather Forecast Office (WFO).

```
1
2
3
4
5
6
7
8
9
10
11
/gridpoints/{office}/{gridX},{gridY}/forecast:
  get:
    operationId: getGridpointForecast
    summary: Get forecast for a given grid point
    parameters:
      - name: office
        in: path
        required: true
        schema:
          type: string
        description: Weather Forecast Office ID
```

**Key:** Pay special attention to the **schema names** and **descriptions** that you use in this Open API schema. ChatGPT uses those names and descriptions to understand (a) which API action should be called and (b) which parameter should be used. If a field is restricted to only certain values, you can also provide an "enum" with descriptive category names.

While you can just try the Open API schema directly in a GPT Action, debugging directly in ChatGPT can be a challenge. We recommend using a 3rd party service, like [Postman](https://www.postman.com/), to test that your API call is working properly. Postman is free to sign up, verbose in its error-handling, and comprehensive in its authentication options. It even gives you the option of importing Open API schemas directly (see below).

![Choosing to import your API with Postman](https://cdn.openai.com/API/images/guides/actions_import.png)

## Step 2: Identify authentication requirements

This Weather 3rd party service does not require authentication, so you can skip that step for this Custom GPT. For other GPT Actions that do require authentication, there are 2 options: API Key or OAuth. Asking ChatGPT can help you get started for most common applications. For example, if I needed to use OAuth to authenticate to Google Cloud, I can provide a screenshot and ask for details: _“I’m building a connection to Google Cloud via OAuth. Please provide instructions for how to fill out each of these boxes.”_

![The above ChatGPT request](https://cdn.openai.com/API/images/guides/actions_oauth_panel.png)

Often, ChatGPT provides the correct directions on all 5 elements. Once you have those basics ready, try testing and debugging the authentication in Postman or another similar service. If you encounter an error, provide the error to ChatGPT, and it can usually help you debug from there.

## Step 3: Create the GPT Action and test

Now is the time to create your Custom GPT. If you've never created a Custom GPT before, start at our [Creating a GPT guide](https://help.openai.com/en/articles/8554397-creating-a-gpt).

1. Provide a name, description, and image to describe your Custom GPT
2. Go to the Action section and paste in your Open API schema. Take a note of the Action names and json parameters when writing your instructions.
3. Add in your authentication settings
4. Go back to the main page and add in instructions

Deep dive

Guidance on Writing Instructions

### Test the GPT Action

Next to each action, you'll see a **Test** button. Click on that for each action. In the test, you can see the detailed input and output of each API call.

![Available actions](https://cdn.openai.com/API/images/guides/actions_available_action.png)

If your API call is working in a 3rd party tool like Postman and not in ChatGPT, there are a few possible culprits:

- The parameters in ChatGPT are wrong or missing
- An authentication issue in ChatGPT
- Your instructions are incomplete or unclear
- The descriptions in the Open API schema are unclear

![A preview response from testing the weather API call](https://cdn.openai.com/API/images/guides/actions_test_action.png)

## Step 4: Set up callback URL in the 3rd party app

If your GPT Action uses OAuth Authentication, you’ll need to set up the callback URL in your 3rd party application. Once you set up a GPT Action with OAuth, ChatGPT provides you with a callback URL (this will update any time you update one of the OAuth parameters). Copy that callback URL and add it to the appropriate place in your application.

![Setting up a callback URL](https://cdn.openai.com/API/images/guides/actions_bq_callback.png)

## Step 5: Evaluate the Custom GPT

Even though you tested the GPT Action in the step above, you still need to evaluate if the Instructions and GPT Action function in the way users expect. Try to come up with at least 5-10 representative questions (the more, the better) of an **“evaluation set”** of questions to ask your Custom GPT.

**Key:** Test that the Custom GPT handles each one of your questions as you expect.

An example question: _“What should I pack for a trip to the White House this weekend?”_ tests the Custom GPT’s ability to: (1) convert a landmark to a lat-long, (2) run both GPT Actions, and (3) answer the user’s question.

![The response to the above ChatGPT request, including weather data](https://cdn.openai.com/API/images/guides/actions_prompt_2_actions.png)![A continuation of the response above](https://cdn.openai.com/API/images/guides/actions_output.png)

## Common Debugging Steps

_Challenge:_ The GPT Action is calling the wrong API call (or not calling it at all)

- _Solution:_ Make sure the descriptions of the Actions are clear - and refer to the Action names in your Custom GPT Instructions

_Challenge:_ The GPT Action is calling the right API call but not using the parameters correctly

- _Solution:_ Add or modify the descriptions of the parameters in the GPT Action

_Challenge:_ The Custom GPT is not working but I am not getting a clear error

- _Solution:_ Make sure to test the Action - there are more robust logs in the test window. If that is still unclear, use Postman or another 3rd party service to better diagnose.

_Challenge:_ The Custom GPT is giving an authentication error

- _Solution:_ Make sure your callback URL is set up correctly. Try testing the exact same authentication settings in Postman or another 3rd party service

_Challenge:_ The Custom GPT cannot handle more difficult / ambiguous questions

- _Solution:_ Try to prompt engineer your instructions in the Custom GPT. See examples in our [prompt engineering guide](https://platform.openai.com/docs/guides/prompt-engineering)

This concludes the guide to building a Custom GPT. Good luck building and leveraging the [OpenAI developer forum](https://community.openai.com/) if you have additional questions.