---
url: "https://vercel.com/kb/guide/using-custom-font"
title: "Using a custom font in your OG Image | Knowledge Base"
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

# Using a custom font in your OG Image

Learn how to use a custom font from the tile system in your OG images.

![](https://images.ctfassets.net/hjgychtc108g/5IATugIK0N0pgesanjn7ns/67fe07ac8eeb8d9e4fc6f84921889f37/CleanShot_2025-11-07_at_09.15.39_2x.png)DX Team

[Knowledge Base](https://vercel.com/kb)

2 min read

Copy page

Ask AI about this page

Last updatedNovember 11, 2025

You can use the following code sample to explore using parameters and different content types with [`next/og`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx). To learn more about OG Image Generation, see [Open Graph Image Generation](https://vercel.com/docs/og-image-generation).

Create an API route handler:

app/api/og/route.tsx

```ts
1import { ImageResponse } from 'next/og';

2// App router includes @vercel/og.

3// No need to install it.

4

5async function loadGoogleFont (font: string, text: string) {

6  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`

7  const css = await (await fetch(url)).text()

8  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

9

10  if (resource) {

11    const response = await fetch(resource[1])

12    if (response.status == 200) {

13      return await response.arrayBuffer()

14    }

15  }

16

17  throw new Error('failed to load font data')

18}

19

20export async function GET() {

21  const text = 'Hello world!'

22

23  return new ImageResponse(

24    (

25      <div

26        style={{

27          backgroundColor: 'white',

28          height: '100%',

29          width: '100%',

30          fontSize: 100,

31          fontFamily: 'Geist',

32          paddingTop: '100px',

33          paddingLeft: '50px',

34        }}

35      >

36        {text}

37      </div>

38    ),

39    {

40      width: 1200,

41      height: 630,

42      fonts: [\
\
43        {\
\
44          name: 'Geist',\
\
45          data: await loadGoogleFont('Geist', text),\
\
46          style: 'normal',\
\
47        },\
\
48      ],

49    },

50  );

51}
```

app/about/opengraph-image.jsx

```js
1import { ImageResponse } from 'next/og';

2// App router includes @vercel/og.

3// No need to install it.

4

5async function loadGoogleFont(font, text) {

6  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;

7  const css = await (await fetch(url)).text();

8  const resource = css.match(

9    /src: url\((.+)\) format\('(opentype|truetype)'\)/,

10  );

11

12  if (resource) {

13    const response = await fetch(resource[1]);

14    if (response.status == 200) {

15      return await response.arrayBuffer();

16    }

17  }

18

19  throw new Error('failed to load font data');

20}

21

22export async function GET() {

23  const text = 'Hello world!';

24

25  return new ImageResponse(

26    (

27      <div

28        style={{

29          backgroundColor: 'white',

30          height: '100%',

31          width: '100%',

32          fontSize: 100,

33          fontFamily: 'Geist',

34          paddingTop: '100px',

35          paddingLeft: '50px',

36        }}

37      >

38        {text}

39      </div>

40    ),

41    {

42      width: 1200,

43      height: 630,

44      fonts: [\
\
45        {\
\
46          name: 'Geist',\
\
47          data: await loadGoogleFont('Geist', text),\
\
48          style: 'normal',\
\
49        },\
\
50      ],

51    },

52  );

53}
```

If you're not using a framework, you must either add `"type": "module"` to your `package.json` or change your JavaScript Functions' file extensions from `.js` to `.mjs`

Preview the OG route locally by running the following command:

terminal

```bash
1pnpm dev
```

Then, browse to `http://localhost:3000/api/og`. You will see the following image:

![og-font.png](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhjgychtc108g%2F3pEylwj9Q2VDpfJ20fCPBW%2F5f99aff34caa6c26e4c4dbc5f0e101ed%2Fog-font.png&w=1200&q=75)

Image generated using the custom font typewriter

## [More resources](https://vercel.com/kb/guide/using-custom-font\#more-resources)

- [Consume the OG route](https://vercel.com/docs/og-image-generation#consume-the-og-route)
- [Getting started with OG image](https://vercel.com/docs/og-image-generation#usage)

Was this helpful?

supported.

Send

## Read related documentation

- [OG Image Generation](https://vercel.com/docs/og-image-generation)
- [Next.js](https://vercel.com/docs/frameworks/full-stack/nextjs)

## Explore more OG Image Generation guides

- [Using dynamic text as your OG Image](https://vercel.com/kb/guide/dynamic-text-as-image)
- [Encrypting parameters](https://vercel.com/kb/guide/encrypting-parameters)
- [Using an external image as OG image](https://vercel.com/kb/guide/using-an-external-dynamic-image)

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