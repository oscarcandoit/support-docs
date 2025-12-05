---
url: "https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk"
title: "How to build AI Agents with Vercel and the AI SDK | Knowledge Base"
---

- Products


- ##### [AI Cloud](https://vercel.com/ai)


  - [AI SDK\\
    \\
    The AI Toolkit for TypeScript](https://sdk.vercel.ai/)
  - [AI Gateway\\
    \\
    One endpoint, all your models](https://vercel.com/ai-gateway)
  - [Vercel Agent\\
    \\
    An agent that knows your stack](https://vercel.com/agent)
- ##### Core Platform


  - [CI/CD\\
    \\
    Helping teams ship 6× faster](https://vercel.com/products/previews)
  - [Content Delivery\\
    \\
    Fast, scalable, and reliable](https://vercel.com/products/rendering)
  - [Fluid Compute\\
    \\
    Servers, in serverless form](https://vercel.com/fluid)
  - [Observability\\
    \\
    Trace every step](https://vercel.com/products/observability)
- ##### [Security](https://vercel.com/security)


  - [Bot Management\\
    \\
    Scalable bot protection](https://vercel.com/security/bot-management)
  - [BotID\\
    \\
    Invisible CAPTCHA](https://vercel.com/botid)
  - [Platform Security\\
    \\
    DDoS Protection, Firewall](https://vercel.com/security)
  - [Web Application Firewall\\
    \\
    Granular, custom protection](https://vercel.com/security/web-application-firewall)

- Resources


- ##### Company


  - [Customers\\
    \\
    Trusted by the best teams](https://vercel.com/customers)
  - [Blog\\
    \\
    The latest posts and changes](https://vercel.com/blog)
  - [Changelog\\
    \\
    See what shipped](https://vercel.com/changelog)
  - [Press\\
    \\
    Read the latest news](https://vercel.com/press)
  - [Events\\
    \\
    Join us at an event](https://vercel.com/events)
- ##### Open Source


  - [Next.js\\
    \\
    The native Next.js platform](https://vercel.com/frameworks/nextjs)
  - [Nuxt\\
    \\
    The progressive web framework](https://nuxt.com/)
  - [Svelte\\
    \\
    The web's efficient UI framework](https://svelte.dev/)
  - [Turborepo\\
    \\
    Speed with Enterprise scale](https://vercel.com/solutions/turborepo)
- ##### Tools


  - [Academy\\
    \\
    Learn the ins and outs of Vercel](https://vercel.com/academy)
  - [Marketplace\\
    \\
    Extend and automate workflows](https://vercel.com/marketplace)
  - [Templates\\
    \\
    Jumpstart app development](https://vercel.com/templates)
  - [Knowledge Base\\
    \\
    Find help quickly](https://vercel.com/kb)
  - [Partner Finder\\
    \\
    Get help from solution partners](https://vercel.com/partners/solution-partners)

- Solutions


- ##### Use Cases


  - [AI Apps\\
    \\
    Deploy at the speed of AI](https://vercel.com/solutions/ai-apps)
  - [Composable Commerce\\
    \\
    Power storefronts that convert](https://vercel.com/solutions/composable-commerce)
  - [Marketing Sites\\
    \\
    Launch campaigns fast](https://vercel.com/solutions/marketing-sites)
  - [Multi-tenant Platforms\\
    \\
    Scale apps with one codebase](https://vercel.com/solutions/multi-tenant-saas)
  - [Web Apps\\
    \\
    Ship features, not infrastructure](https://vercel.com/solutions/web-apps)
- ##### Users


  - [Platform Engineers\\
    \\
    Automate away repetition](https://vercel.com/solutions/platform-engineering)
  - [Design Engineers\\
    \\
    Deploy for every idea](https://vercel.com/solutions/design-engineering)

- [Enterprise](https://vercel.com/enterprise)
- [Docs](https://vercel.com/docs)
- [Pricing](https://vercel.com/pricing)

Search Knowledge BaseSearch `⌘ K`

Ask AI

Search Knowledge BaseSearch `⌘ K`

Ask AI

# How to build AI Agents with Vercel and the AI SDK

Learn how to build, deploy, and scale AI agents on Vercel using the AI SDK. This guide covers calling LLMs, defining tools, creating multi-step agents, and monitoring performance.

[![](https://images.ctfassets.net/hjgychtc108g/7mz9pMUZzFSxFBs6I8f7ap/49377fb6129c4befd0868bc823b75fa7/T0CAQ00TU-U02EYJSRBUL-237938c9162e-512.png)Rich Haines](https://x.com/studio_hungry)

[Knowledge Base](https://vercel.com/kb)/ [AI](https://vercel.com/kb/ai)

8 min read

Copy page

Ask AI about this page

Last updatedNovember 10, 2025

AI agents are systems that observe their environment, make decisions, and take actions to achieve goals. You can think of an agent as a loop that interprets inputs using a large language model (LLM), selects a tool, executes it, and then updates its context before the next decision. Vercel provides the infrastructure, tools, and SDKs to build, deploy, and scale these agents.

This guide will walk you through the process of building an agent using the AI SDK. You will learn how to [call an LLM](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk#calling-an-llm), [define tools](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk#using-tools), and [create an agent](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk#creating-an-agent) that can perform tasks based on user input.

## [Prerequisites](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#prerequisites)

Before you begin, make sure you have:

- A Vercel account.
- Basic knowledge of TypeScript and Next.js.
- An AI Gateway key created from your dashboard. See [step three in the AI Gateway getting started guide](https://vercel.com/docs/ai-gateway/getting-started#set-up-your-api-key).
- The `ai` and `zod` packages installed in your project.
- The Vercel CLI installed (optional for deployment from the command line).

## [Calling an LLM](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#calling-an-llm)

The first step in building an agent is to call an LLM. The AI SDK provides an API for generating text using various models. The following example uses OpenAI, but you can also use [Anthropic, Google, Mistral, and other providers](https://ai-sdk.dev/docs/providers)..

You can use the [`generateText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/generate-text#generatetext) function to call an LLM and get a response. The function takes a prompt and returns the generated text.

lib/agents.ts

```typescript
1import { generateText } from 'ai';

2

3export async function getWeather({location}: string) {

4  const { text } = await generateText({

5    model: 'openai/gpt-5',

6    prompt: `What is the weather like today in ${location}?`,

7  });

8

9  console.log(text);

10}
```

Because you are using the AI Gateway with the AI SDK, you do not need to install and import the `openai` package; instead, you can define the model using only a string. See the [AI Gateway](https://vercel.com/docs/ai-gateway) documentation to learn more.

This basic example demonstrates a single LLM call, but it can't yet take actions or use tools.

## [Using tools](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#using-tools)

Tools are functions that the model can call to perform specific tasks. An agent can use tools to extend its capabilities and perform actions based on the context of the conversation. For example, a tool could be a function that queries an external API, performs calculations, or triggers an action.

### [How tools work](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#how-tools-work)

When you provide tools to the model, it can decide to use them based on the user's input. If the model chooses to use a tool, it will return a structured response indicating which tool to call and the necessary arguments, which are inferred from the context:

```json
1{

2  "tool": "weather",

3  "arguments": { "location": "San Francisco" }

4}
```

The AI SDK automatically handles:

- Extracting the tool call from the model output
- Validating the arguments against the tool schema
- Executing the function
- Storing both the call and the result in the conversation history

### [Defining tools](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#defining-tools)

The AI SDK provides a way to define tools using the [`tool`](https://ai-sdk.dev/docs/reference/ai-sdk-core/tools-and-tool-calling#tool) function. This function takes a `description`, `inputSchema` (defined with [`zod`](https://zod.dev/)), and an `execute` function that performs the action.

lib/agents.ts

```typescript
1import { generateText, tool } from 'ai';

2import { z } from 'zod';

3

4export async function getWeather({location}: string) {

5  const { text } = await generateText({

6    model: 'openai/gpt-5',

7    prompt: `What is the weather in ${location}?`,

8    tools: {

9      weather: tool({

10        description: 'Get the weather in a location',

11        inputSchema: z.object({

12          location: z.string().describe('The location to get the weather for'),

13        }),

14        execute: async ({ location }) => ({

15          location,

16          temperature: 72 + Math.floor(Math.random() * 21) - 10,

17        }),

18      }),

19      activities: tool({

20        description: 'Get the activities in a location',

21        inputSchema: z.object({

22          location: z

23            .string()

24            .describe('The location to get the activities for'),

25        }),

26        execute: async ({ location }) => ({

27          location,

28          activities: ['hiking', 'swimming', 'sightseeing'],

29        }),

30      }),

31    },

32  });

33  console.log(text);

34}
```

In this example, the AI SDK:

- Extracts the tool call from the model output.
- Validates the arguments against the tool schema (defined in the `inputSchema`).
- Executes the function, and stores both the call and its result in [`toolCalls`](https://ai-sdk.dev/docs/reference/ai-sdk-core/generate-text#tool-calls) and [`toolResults`](https://ai-sdk.dev/docs/reference/ai-sdk-core/generate-text#tool-results), which are also added to the message history.

### [Why tool descriptions matter](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#why-tool-descriptions-matter)

The `description` field is crucial as it tells the model when and how to use the tool. Write clear, specific descriptions that include:

- What the tool does.
- When it should be used.
- What kind of results it returns.

The more specific your descriptions, the better the model will be at choosing the right tool for the task.

## [Creating an agent](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#creating-an-agent)

At the moment, your agent only consists of a single call to the LLM and then stops. Because the AI SDK [defaults](https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling#multi-step-calls-using-maxsteps) the number of steps used to 1, the model will make a decision based on the user's input to decide:

- If it should directly return a text response.
- If it should call a tool, and if so, which one.

Either way, once the model has completed its generation, that step is complete. To continue generating results, whether that involves using additional tools or responding to the user with the tool's results, you need to trigger another request.

### [Using `stopWhen` and `stepCountIs` for multi-step reasoning](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#using-stopwhen-and-stepcountis-for-multi-step-reasoning)

This can be done by configuring a loop using the [`stopWhen`](https://ai-sdk.dev/docs/reference/ai-sdk-core/generate-text#stop-when) and [`stepCountIs`](https://ai-sdk.dev/docs/reference/ai-sdk-core/step-count-is#stepcountis) parameters to specify the maximum number of steps the agent can take before stopping.
The AI SDK automatically handles orchestration by appending each response to the conversation history, executing tool calls, and triggering additional generations until either the maximum number of steps is reached or a text response is received.

### [The agent loop](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#the-agent-loop)

A typical agent flow looks like this:

1. You (the developer) send a prompt to the LLM.
2. The LLM decides to either generate text or call a tool (returning the tool name and arguments).
3. If a tool is called, the AI SDK executes the tool and receives the result.
4. The AI SDK appends the tool call and result to the conversation history.
5. The AI SDK automatically triggers a new generation based on the updated conversation history.
6. Steps 2-5 repeat until either reaching the maximum number of steps (defined by `stopWhen`) or receiving a text response without a tool call.
7. The final text response is returned.

lib/agents.ts

```typescript
1import { generateText, tool, stepCountIs } from 'ai';

2import { z } from 'zod';

3

4export async function getWeather({location}: string) {

5  const { text } = await generateText({

6    model: 'openai/gpt-5',

7    prompt: `What is the weather in ${location}?`,

8    stopWhen: stepCountIs(5), // Allow up to 5 steps

9    tools: {

10      weather: tool({

11        description: 'Get the weather in a location',

12        parameters: z.object({

13          location: z.string().describe('The location to get the weather for'),

14        }),

15        execute: async ({ location }) => ({

16          location,

17          temperature: 72 + Math.floor(Math.random() * 21) - 10,

18        }),

19      }),

20      activities: tool({

21        description: 'Get the activities in a location',

22        parameters: z.object({

23          location: z

24            .string()

25            .describe('The location to get the activities for'),

26        }),

27        execute: async ({ location }) => ({

28          location,

29          activities: ['hiking', 'swimming', 'sightseeing'],

30        }),

31      }),

32    },

33  });

34  console.log(text);

35}
```

## [Deploying AI agents on Vercel](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#deploying-ai-agents-on-vercel)

To deploy your agent on Vercel, create an API route with the following code. The agent will loop through the steps until it reaches a stopping condition, which is when it receives a text response.
Once deployed, your API route will be using [Fluid compute](https://vercel.com/docs/fluid-compute), which is ideal for AI agents because it:

- Minimizes cold starts for faster response times.
- Allows tasks to run in the background after responding to users.
- Enables considerably longer function durations, perfect for agents that run for extended periods.
- Supports concurrent workloads without the typical timeouts of traditional serverless environments.
- Automatically scales with increased usage.

Depending on your plan, the [default maximum duration](https://vercel.com/docs/functions/limitations#max-duration) will be between 60 and 800 seconds. You can also set a custom maximum duration for your agent by using the [\`maxDuration\`](https://vercel.com/docs/functions/configuring-functions/duration#maximum-duration-for-different-runtimes) variable in your API route. This will allow you to specify how long the agent can run before timing out.

lib/agents.ts

```typescript
1import { generateText, tool, stepCountIs } from 'ai';

2import { z } from 'zod';

3

4// Set the maximum duration for this function

5export const maxDuration = 60; // 60 seconds

6

7export async function POST(request: Request) {

8  const { prompt }: { prompt?: string } = await request.json();

9

10  if (!prompt) {

11    return new Response('Prompt is required', { status: 400 });

12  }

13

14  const result = await generateText({

15    model: 'openai/gpt-5',

16    prompt,

17    stopWhen: stepCountIs(5),

18    tools: {

19      weather: tool({

20        description: 'Get the weather in a location',

21        inputSchema: z.object({

22          location: z.string().describe('The location to get the weather for'),

23        }),

24        execute: async ({ location }) => ({

25          location,

26          temperature: 72 + Math.floor(Math.random() * 21) - 10,

27        }),

28      }),

29      activities: tool({

30        description: 'Get the activities in a location',

31        inputSchema: z.object({

32          location: z

33            .string()

34            .describe('The location to get the activities for'),

35        }),

36        execute: async ({ location }) => ({

37          location,

38          activities: ['hiking', 'swimming', 'sightseeing'],

39        }),

40      }),

41    },

42  });

43

44  return Response.json({

45    steps: result.steps,

46    finalAnswer: result.text,

47  });

48}
```

### [Understanding maxDuration](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#understanding-maxduration)

Depending on your plan, the [default maximum duration](https://vercel.com/docs/functions/limitations#max-duration) will be between 300 and 800 seconds. You can set a custom maximum duration for your agent by using the [`maxDuration`](https://vercel.com/docs/functions/configuring-functions/duration#maximum-duration-for-different-runtimes) variable in your API route. This allows you to specify how long the agent can run before timing out.

Choose a duration based on your agent's complexity:

- Simple agents (1-3 tool calls): 30-60 seconds
- Moderate agents (multiple sequential operations): 60-180 seconds
- Complex agents (extensive reasoning chains): 180-900 seconds

With Fluid compute, you have significantly more time for your agent to complete complex multi-step workflows.

### [Deploy to Vercel](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#deploy-to-vercel)

Deply your agent using the [Vercel CLI](https://vercel.com/docs/cli):

```bash
1vercel deploy
```

## [Testing your agent](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#testing-your-agent)

Once deployed, you can test your agent using `curl`:

```bash
1curl -X POST https://your-project.vercel.app/api/agent \

2  -H "Content-Type: application/json" \

3  -d '{"prompt":"What is the weather in Tokyo?"}'
```

The response will include both the steps of the agent and the final answer:

Response

```json
1{

2  "steps": [\
\
3    {\
\
4      "stepType": "initial",\
\
5      "toolCalls": [\
\
6        {\
\
7          "type": "tool-call",\
\
8          "toolCallId": "call_7QGq6MRbq0L3lLwpN23OMDKm",\
\
9          "toolName": "weather",\
\
10          "args": { "location": "Tokyo" }\
\
11        }\
\
12      ],\
\
13      "toolResults": [\
\
14        {\
\
15          "type": "tool-result",\
\
16          "toolCallId": "call_7QGq6MRbq0L3lLwpN23OMDKm",\
\
17          "toolName": "weather",\
\
18          "result": {\
\
19            "location": "Tokyo",\
\
20            "temperature": 77,\
\
21            "condition": "cloudy"\
\
22          }\
\
23        }\
\
24      ]\
\
25    },\
\
26    {\
\
27      "stepType": "tool-result",\
\
28      "text": "The weather in Tokyo is currently cloudy with a temperature of 77°F."\
\
29    }\
\
30  ],

31  "finalAnswer": "The weather in Tokyo is currently cloudy with a temperature of 77°F."

32}
```

## [Observing your agent](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#observing-your-agent)

Once deployed, you can observe your agent's behavior using the [Observability](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fobservability&title=Try+Observability) and [Logs](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Flogs&title=Logs+tab) tabs in the Vercel dashboard.

### [Observability tab](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#observability-tab)

The Observability tab provides insights into:

- The number of requests over time.
- Response times and latency metrics.
- Error rates and patterns
- Performance trends

### [Logs tab](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#logs-tab)

If you've added logging to your agent (using `console.log`, `console.error`, etc.), you can view the logs in the Logs tab. This is helpful for:

- Debugging tool execution
- Understanding the agent's decision making process
- Tracking token usage
- Identifying errors and edge cases


## [More resources](https://vercel.com/kb/guide/how-to-build-ai-agents-with-vercel-and-the-ai-sdk\#more-resources)

To learn more about building AI agents, see the following resources:

- AI SDK [documentation](https://ai-sdk.dev/)
- AI SDK [examples](https://github.com/vercel/ai/tree/main/examples)
- AI SDK [cookbook](https://ai-sdk.dev/cookbook)
- Fluid compute [documentation](https://vercel.com/docs/fluid-compute)

Was this helpful?

supported.

Send

## Read related documentation

- [AI SDK](https://vercel.com/docs/ai-sdk)
- [AI Gateway](https://vercel.com/docs/ai-gateway)
- [Next.js](https://vercel.com/docs/frameworks/full-stack/nextjs)

## Explore more AI SDK guides

- [How to safely run AI generated code in your application](https://vercel.com/kb/guide/running-ai-generated-code-sandbox)
- [Streaming responses from LLMs](https://vercel.com/kb/guide/streaming-from-llm)
- [Build an AI Chat Agent with Weather API Tool Calling](https://vercel.com/kb/guide/build-ai-agent-weather-api)

## Products

- [AI](https://vercel.com/ai)
- [Enterprise](https://vercel.com/enterprise)
- [Fluid Compute](https://vercel.com/fluid)
- [Next.js](https://vercel.com/solutions/nextjs)
- [Observability](https://vercel.com/products/observability)
- [Previews](https://vercel.com/products/previews)
- [Rendering](https://vercel.com/products/rendering)
- [Security](https://vercel.com/security)
- [Turbo](https://vercel.com/solutions/turborepo)
- [Domains](https://vercel.com/domains)
- [v0](https://v0.app/)

## Resources

- [Community](https://community.vercel.com/)
- [Docs](https://vercel.com/docs)
- [Knowledge Base](https://vercel.com/kb)
- [Academy](https://vercel.com/academy)
- [Help](https://vercel.com/help)
- [Integrations](https://vercel.com/integrations)
- [Pricing](https://vercel.com/pricing)
- [Resources](https://vercel.com/resources)
- [Solution Partners](https://vercel.com/partners/solution-partners)
- [Startups](https://vercel.com/startups)
- [Templates](https://vercel.com/templates)
- SDKs by Vercel
  - [AI SDK](https://sdk.vercel.ai/)
  - [Workflow DevKit](https://useworkflow.dev/)
  - [Flags SDK](https://flags-sdk.dev/)
  - [Chat SDK](https://chat-sdk.dev/)
  - [Streamdown AI](https://streamdown.ai/)

## Company

- [About](https://vercel.com/about)
- [Blog](https://vercel.com/blog)
- [Careers](https://vercel.com/careers)
- [Changelog](https://vercel.com/changelog)
- [Contact Us](https://vercel.com/contact)
- [Customers](https://vercel.com/customers)
- [Events](https://vercel.com/events)
- [Partners](https://vercel.com/partners)
- [Shipped](https://vercel.com/shipped)
- [Privacy Policy](https://vercel.com/legal/privacy-policy)
- Legal

## Social

- [GitHub](https://github.com/vercel)
- [LinkedIn](https://linkedin.com/company/vercel)
- [Twitter](https://x.com/vercel)
- [YouTube](https://youtube.com/@VercelHQ)

[All systems normal.](https://vercel-status.com/) Select a display theme:systemlightdark

## Ask AI

What is Vercel?What can I deploy with Vercel?What is Fluid Compute?How much does Vercel cost?

Tip: You can open and close chat with `Ctrl`  `I`