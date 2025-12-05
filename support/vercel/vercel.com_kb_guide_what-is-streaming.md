---
url: "https://vercel.com/kb/guide/what-is-streaming"
title: "Streaming in web applications | Knowledge Base"
---

Your Privacy

This site uses tracking technologies. You may opt in or opt out of the use of these technologies.

Essential
On

Essential cookies and services are used to enable core website features, such as ensuring the security of the website.

* * *

Marketing
Off

Marketing cookies and services are used to deliver personalized advertisements, promotions, and offers. These technologies enable targeted advertising and marketing campaigns by collecting information about users' interests, preferences, and online activities.

* * *

Analytics
Off

Analytics cookies and services are used for collecting statistical information about how visitors interact with a website. These technologies provide insights into website usage, visitor behavior, and site performance to understand and improve the site and enhance user experience.

* * *

Functional
Off

Functional cookies and services are used to offer enhanced and personalized functionalities. These technologies provide additional features and improved user experiences, such as remembering your language preferences, font sizes, region selections, and customized layouts. Opting out of these cookies may render certain services or functionality of the website unavailable.

SaveDenyAccept all

[Privacy Policy](https://vercel.com/legal/privacy-policy)

Your Privacy

This site uses tracking technologies. You may opt in or opt out of the use of these technologies.

DenyAccept all

Consent Settings

[Privacy Policy](https://vercel.com/legal/privacy-policy)

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

# Streaming in web applications

Learn how streaming works in web applications. Explore benefits, use cases, and implementation details with Vercel Functions and the Web Streams API

![](https://images.ctfassets.net/hjgychtc108g/5IATugIK0N0pgesanjn7ns/67fe07ac8eeb8d9e4fc6f84921889f37/CleanShot_2025-11-07_at_09.15.39_2x.png)DX Team

[Knowledge Base](https://vercel.com/kb)

4 min read

Copy page

Ask AI about this page

Last updatedNovember 11, 2025

Streaming sends data to the client in small pieces, called chunks, as soon as they're ready. Unlike traditional methods that wait for the entire response, streaming lets users start seeing and using content sooner. For example, a server can send the first part of an HTML page immediately, then stream in additional content as it's generated.

Vercel Functions support streaming responses, so you can render and display parts of the UI as soon as they are ready. This approach reduces perceived wait times and allows users to interact with your app before the entire page loads.

Common use-cases include:

- Ecommerce: Render the most important product and account data early, letting customers shop sooner
- AI applications: Streaming responses from AIs powered by LLMs lets you display response text as it arrives rather than waiting for the full result

## [How web streams work](https://vercel.com/kb/guide/what-is-streaming\#how-web-streams-work)

HTTP responses typically send the entire payload to the client all at once. This approach can lead to noticeable delays for users, especially when handling large datasets or complex computations.

![basic-chunk-top-split-light.png](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhjgychtc108g%2F2pPbRT8aFdVAJENXezzDRf%2F19553c9b85c404980ee7ac217af6bb1b%2Fbasic-chunk-top-split-light.png&w=3840&q=75)![basic-chunk-top-split-light.png](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhjgychtc108g%2F4ct81goz5BGXpYNuQ4OOnP%2F7cfe9ab20a3acf0805559c630754ebb9%2Fbasic-chunk-top-split-dark.png&w=3840&q=75)

How responses and requests typically flow between client and server, with the response sent in one large batch.

With the Web Streams API, the server generates data and splits it into chunks. Each chunk is sent to the client as soon as it's ready. The client processes each chunk on arrival, so users can start seeing and interacting with content immediately. It is supported in [most major web browsers](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API#browser_compatibility) and popular runtimes, such as [Node.js](https://nodejs.org/api/webstreams.html#web-streams-api) and [Deno](https://deno.com/blog/deploy-streams).

The Web Streams API helps you:

- [Break large data into chunks](https://vercel.com/kb/guide/what-is-streaming#understanding-chunks): Chunks are portions of data sent over time
- [Handle backpressure](https://vercel.com/kb/guide/what-is-streaming#understanding-backpressure): Backpressure occurs when chunks are streamed from the server faster than they can be processed in the client, causing a backup of data
- Build more responsive apps: Rendering your UI progressively as data chunks arrive can improve your users' perception of your app's performance

### [Understanding chunks](https://vercel.com/kb/guide/what-is-streaming\#understanding-chunks)

Chunks in web streams are fundamental data units that can be of various types, such as strings, ArrayBuffers, or typed arrays, depending on the content (for example, `String` for text or `Uint8Array` for binary data).

Standard function responses contain full payloads of data, while chunks are pieces of the payload that get streamed to the client as they're available.

For example, imagine you want to create an AI chat app that uses a Large Language Model to generate replies. Due to their large data sets, replies from language models can generate slowly.

Standard function responses require you send the full reply to the client when it's done, but streaming enables you to show each word of the reply as the model generates it, improving users' perception of your chat app's speed.

![basic-chunk-bottom-split-light.png](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhjgychtc108g%2FxUK1Kbced5TeFqtCfeOWL%2F69b30784b5051fe036310388e217bdba%2Fbasic-chunk-bottom-split-light.png&w=3840&q=75)![basic-chunk-bottom-split-light.png](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhjgychtc108g%2F5U2E0g5ULqoD4bgZPhKCKf%2F16b5ec65b29b73b5366642fac551debd%2Fbasic-chunk-bottom-split-dark.png&w=3840&q=75)

How streamed responses typically work, with data sent continuously in small chunks.

Chunk sizes can be out of your control, so it's important that your code can handle chunks of any size. Chunks sizes are influenced by the following factors:

- Data source: Sometimes the original data is already broken up. For example, OpenAI's language models produce responses in [tokens](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them), or chunks of words
- Stream implementation: The server could be configured to stream small chunks quickly or large chunks at a lower pace
- Network: Factors like a network's Maximum Transmission Unit setting, or its geographical distance from the client, can cause chunk fragmentation and limit chunk size
  - In local development, chunk sizes won't be impacted by network conditions, as no network transmission is happening

For an example function that processes chunks, see [streaming](https://vercel.com/docs/functions/streaming-functions).

Once you understand how to deal with chunks of different sizes, you must understand how to deal with chunks arriving faster than you can process them in the client.

### [Understanding backpressure](https://vercel.com/kb/guide/what-is-streaming\#understanding-backpressure)

When the server streams data faster than the client can process it, excess data will queue up in the client's memory. This issue is called backpressure, and it can lead to memory overflow errors, or data loss when the client's memory reaches capacity.

For example, popular social media users can receive hundreds of notifications streamed to their web client per second. If their web client can't render the notifications fast enough, some may be lost, or the client may crash if its memory overflows.

![back-pressure-light.png](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhjgychtc108g%2FKKkW3PcmjsMoUbzaeVI0D%2F2b7cae58c783b4fedf453e635bfabb9d%2Fback-pressure-light.png&w=3840&q=75)![back-pressure-light.png](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhjgychtc108g%2F4pHkXPxLX1EMPiwpxgQSAB%2Fc160094d78b9ae722aced7ccac519f1b%2Fbackpressure-dark.png&w=3840&q=75)

A diagram of backpressure.

#### [Resolving backpressure](https://vercel.com/kb/guide/what-is-streaming\#resolving-backpressure)

You can handle backpressure with flow control. This technique manages data transfer rates between sender and receiver, often by pausing the stream or buffering data until the client is ready to process more.

## [More resources](https://vercel.com/kb/guide/what-is-streaming\#more-resources)

- [Vercel Functions](https://vercel.com/docs/functions): Learn about functions on Vercel.
- [Streaming functions](https://vercel.com/docs/functions/streaming-functions): Learn how Vercel enables streaming function responses over time for ecommerce, AI, and more.
- [Vercel AI SDK](https://sdk.vercel.ai/docs): Use Vercel's AI SDK to power your streaming AI applications.

Was this helpful?

supported.

Send

## Read related documentation

- [Vercel Functions](https://vercel.com/docs/functions)

## Explore more Vercel Functions guides

- [What is Vercel's policy regarding load testing deployments?](https://vercel.com/kb/guide/what-s-vercel-s-policy-regarding-load-testing-deployments)
- [Adding a response header](https://vercel.com/kb/guide/add-response-header)
- [Set cache control headers for functions](https://vercel.com/kb/guide/set-cache-control-headers)

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