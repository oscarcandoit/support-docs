---
url: "https://vercel.com/kb/guide/using-a-headless-cms-with-vercel"
title: "Using a Headless CMS with Vercel | Knowledge Base"
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

# Using a Headless CMS with Vercel

Learn best practices for using databases in a serverless environment with Vercel

[![](https://images.ctfassets.net/hjgychtc108g/7mz9pMUZzFSxFBs6I8f7ap/49377fb6129c4befd0868bc823b75fa7/T0CAQ00TU-U02EYJSRBUL-237938c9162e-512.png)Rich Haines](https://x.com/studio_hungry)

[Knowledge Base](https://vercel.com/kb)

1 min read

Copy page

Ask AI about this page

Last updatedNovember 10, 2025

A [Content Management System (CMS)](https://en.wikipedia.org/wiki/Content_management_system) allows you to manage your data's creation and modification, which typically includes a database. For example, [WordPress](https://vercel.com/guides/wordpress-with-vercel) might use a MySQL database to store the content.

A [Headless CMS](https://www.sanity.io/blog/headless-cms-explained) provides the same rich collaboration and authoring experience as a traditional CMS while exposing your data as an API. Headless APIs decouple your data and presentational layers.

## [Features](https://vercel.com/kb/guide/using-a-headless-cms-with-vercel\#features)

A Headless CMS can help build content-oriented websites, such as blogs or marketing/sales sites. This can help with:

- Collaboration: Easily share draft content with non-technical stakeholders. For example, using [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode) with [Next.js](https://nextjs.org/docs/getting-started).
- Multi-Language: Create localized versions of your content for every region you support.
- Rich Content: Easily store and manage images, documents, and more.

## [CMS Providers](https://vercel.com/kb/guide/using-a-headless-cms-with-vercel\#cms-providers)

- [WordPress](https://vercel.com/templates/wordpress)
- [Sanity](https://vercel.com/templates/sanity)
- [Prismic](https://vercel.com/templates/prismic)
- [DatoCMS](https://github.com/vercel/next.js/blob/canary/examples/cms-datocms)
- [Contentful](https://vercel.com/templates/contentful)
- [Strapi](https://github.com/vercel/next.js/blob/canary/examples/cms-strapi)
- [Agility CMS](https://vercel.com/templates/agility)
- [Cosmic](https://github.com/vercel/next.js/blob/canary/examples/cms-cosmic)
- [ButterCMS](https://vercel.com/templates/buttercms)
- [Storyblok](https://vercel.com/templates/storyblok)
- [Hygraph](https://github.com/vercel/next.js/blob/canary/examples/cms-graphcms)
- [Sitecore](https://vercel.com/integrations/ordercloud)

View more [templates](https://vercel.com/templates).

Was this helpful?

supported.

Send

## Read related documentation

- [Next.js](https://vercel.com/docs/frameworks/full-stack/nextjs)

## Explore more Next.js guides

- [Building Next.js Apps with GraphQL Fragment Colocation and Sanity CMS](https://vercel.com/kb/guide/building-nextjs-apps-with-graphql-fragment-colocation-and-sanity-cms)
- [Adding a response header](https://vercel.com/kb/guide/add-response-header)
- [Encrypting parameters](https://vercel.com/kb/guide/encrypting-parameters)

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