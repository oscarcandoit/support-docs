---
url: "https://vercel.com/kb/guide/cloudflare-with-vercel"
title: "Should I use Cloudflare in front of Vercel? | Knowledge Base"
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

# Should I use Cloudflare in front of Vercel?

Information on using Cloudflare together with Vercel.

![](https://images.ctfassets.net/hjgychtc108g/3LK8uvmLquTjM3zt8tg8cn/06da7f02b6cf88f2b9f53b179ab21661/T0CAQ00TU-U05F1R13XCZ-2249aba4e2a2-512.jpg)Justin Vitale

[Knowledge Base](https://vercel.com/kb)

2 min read

Copy page

Ask AI about this page

Last updatedNovember 10, 2025

Using reverse proxies like Cloudflare will limit Vercel's traffic visibility for security measures, introduce latency that degrades performance, and create cache management issues that may affect reliability. We [do not recommend](https://vercel.com/guides/can-i-use-a-proxy-on-top-of-my-vercel-deployment) using a reverse proxy in front of Vercel.

![When a reverse proxy is detected, a warning will be shown on the project page and Firewall overview.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhjgychtc108g%2F7dMAw5puVfBCyaIotUvTA1%2F016bb3007fe30b9ce365998dd4d0f72b%2FCleanShot_2025-01-28_at_20.32.02_2x.png&w=1920&q=75)![When a reverse proxy is detected, a warning will be shown on the project page and Firewall overview.](https://vercel.com/vc-ap-vercel-docs/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhjgychtc108g%2F7lMxMmob3b2qD2l9zEN5xg%2Fa4b8ecb8faf7204b80bb32ff4e7453bc%2FCleanShot_2025-01-28_at_20.31.52_2x.png&w=1920&q=75)

## [DNS](https://vercel.com/kb/guide/cloudflare-with-vercel\#dns)

We recommend moving to Vercel as your DNS provider. [Learn more](https://vercel.com/docs/projects/domains/managing-dns-records).

## [Bot Protection](https://vercel.com/kb/guide/cloudflare-with-vercel\#bot-protection)

We discourage using reverse proxies (e.g. Cloudflare, Azure, or other CDNs) in front of Vercel when [Bot Protection](https://vercel.com/docs/bot-management#bot-protection-managed-ruleset) is enabled. This setup significantly degrades detection accuracy and performance, resulting in a poor end-user experience.

Reverse proxies interfere with Vercel's ability to reliably identify bots:

- Obscured detection signals – Legitimate users may be incorrectly challenged because the proxy masks signals that Bot Protection relies on.
- Frequent re-challenges – Some proxies rotate their exit node IPs frequently, forcing Vercel to re-initiate the challenge on every IP change.

## [Reverse Proxies](https://vercel.com/kb/guide/cloudflare-with-vercel\#reverse-proxies)

Vercel offers [native support for using a reverse proxy](https://vercel.com/guides/vercel-reverse-proxy-rewrites-external) through rewrites and our Edge Network is both a Content Delivery Network (CDN) and a globally distributed platform for running compute in regions around the globe.

While it is possible to stack an external proxy or load balancer in front of Vercel, we do not recommend this approach. The biggest disadvantage is that Vercel no longer has full traffic visibility, which prevents the Vercel Firewall and our threat intelligence products from working to their full potential. This includes our ability to automatically challenge requests, prevent DDoS attacks, and more.

Learn more about [reverse proxies with Vercel](https://vercel.com/guides/can-i-use-a-proxy-on-top-of-my-vercel-deployment).

## [Wildcard Domains](https://vercel.com/kb/guide/cloudflare-with-vercel\#wildcard-domains)

Vercel offers native support for wildcard domains.

Enterprise plan customers can issue a [Cloudflare Origin CA certificate](https://developers.cloudflare.com/ssl/origin-configuration/origin-ca/) with a wildcard SAN (Subject Alternative Name) and [upload it on Vercel](https://vercel.com/docs/projects/domains/custom-SSL-certificate), if required to use Cloudflare.

Was this helpful?

supported.

Send

## Read related documentation

- [Domain Name Server (DNS)](https://vercel.com/docs/domains/working-with-dns)
- [Firewall](https://vercel.com/docs/vercel-firewall)
- [Rewrites](https://vercel.com/docs/rewrites)

## Explore more Domain Name Server (DNS) guides

- [Transferring Domains to Vercel](https://vercel.com/kb/guide/transferring-domains-to-vercel)
- [How long will it take for my Vercel DNS records to update?](https://vercel.com/kb/guide/how-long-to-update-dns-records)
- [Does using Vercel's Nameserver's lock you in?](https://vercel.com/kb/guide/does-using-vercel-s-nameserver-s-lock-you-in)

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