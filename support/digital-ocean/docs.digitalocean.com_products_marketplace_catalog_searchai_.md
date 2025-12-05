---
url: "https://docs.digitalocean.com/products/marketplace/catalog/searchai/"
title: "SearchAI | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/marketplace.6eb4c8240f6fd707ebe2218018dc699d375e2e3e9885d7fb3e760a9fc120a68e.svg)Marketplace](https://docs.digitalocean.com/products/marketplace/)
- [Droplet 1-Click Apps](https://docs.digitalocean.com/products/marketplace/droplet-1-click-apps/)
- [Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/marketplace/kubernetes-1-click-apps/)
- [SaaS Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/)
- [1-Click Models](https://docs.digitalocean.com/products/marketplace/1-click-models/)
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/searchai/)
  - [Add-Ons](https://docs.digitalocean.com/products/marketplace/categories/add-ons/)
  - [Analytics](https://docs.digitalocean.com/products/marketplace/categories/analytics/)
  - [Blogs and Forums](https://docs.digitalocean.com/products/marketplace/categories/blogs-and-forums/)
  - [Business Apps](https://docs.digitalocean.com/products/marketplace/categories/business-apps/)
  - [Chat](https://docs.digitalocean.com/products/marketplace/categories/chat/)
  - [Data Science](https://docs.digitalocean.com/products/marketplace/categories/data-science/)
  - [Databases](https://docs.digitalocean.com/products/marketplace/categories/databases/)
  - [Developer Tools](https://docs.digitalocean.com/products/marketplace/categories/developer-tools/)
  - [eCommerce](https://docs.digitalocean.com/products/marketplace/categories/ecommerce/)
  - [eLearning](https://docs.digitalocean.com/products/marketplace/categories/elearning/)
  - [Email](https://docs.digitalocean.com/products/marketplace/categories/email/)
  - [Frameworks](https://docs.digitalocean.com/products/marketplace/categories/frameworks/)
  - [Functions](https://docs.digitalocean.com/products/marketplace/categories/functions/)
  - [Gaming](https://docs.digitalocean.com/products/marketplace/categories/gaming/)
  - [Kubernetes](https://docs.digitalocean.com/products/marketplace/categories/kubernetes/)
  - [Logging](https://docs.digitalocean.com/products/marketplace/categories/logging/)
  - [Media](https://docs.digitalocean.com/products/marketplace/categories/media/)
  - [Monitoring](https://docs.digitalocean.com/products/marketplace/categories/monitoring/)
  - [Network Tools](https://docs.digitalocean.com/products/marketplace/categories/network-tools/)
  - [Security](https://docs.digitalocean.com/products/marketplace/categories/security/)
  - [Storage](https://docs.digitalocean.com/products/marketplace/categories/storage/)
- [Glossary](https://docs.digitalocean.com/glossary/marketplace/)
- [Service-Level Agreement](https://www.digitalocean.com/sla/marketplace)

- SearchAI

[Give Feedback](https://ideas.digitalocean.com/documentation)

# SearchAI

Generated on 30 Dec 2024
from [the SearchAI catalog page](https://marketplace.digitalocean.com/apps/searchai)

[SearchAI](https://www.searchblox.com/searchai) is a comprehensive enterprise platform that revolutionizes how organizations harness their data through advanced retrieval-augmented generation ( [RAG](https://www.searchblox.com/what-is-retrieval-augmented-generation-rag)) technology. At its core, the platform seamlessly automates the entire RAG workflow, from connecting and processing various data sources to chunking, embedding, and retrieving relevant information. This automated approach ensures organizations can quickly deploy AI-powered solutions without getting bogged down in technical complexities or infrastructure setup. The platform stands out by offering a unified environment where enterprises can build and deploy various AI applications, including intelligent search systems, [chatbots](https://www.searchblox.com/chatbot-101), and specialized agents - all powered by their own data. What makes SearchAI particularly powerful is its [hybrid search](https://www.searchblox.com/products/searchai-hybrid-search) architecture, combining traditional keyword search with modern vector-based approaches, alongside a high-performance private LLM optimized specifically for RAG applications. The system automatically enhances content discoverability through AI-generated metadata, including titles, summaries, and topics, making even unstructured content like PDFs and images more accessible and searchable. With its straightforward, transparent pricing model available in both self-hosted and fully managed options, SearchAI removes the uncertainty and hidden costs typically associated with enterprise AI deployments. Highlights Create and deploy AI Search, [ChatBots](https://www.searchblox.com/products/searchai-chatbot), and [Agents](https://www.searchblox.com/products/searchai-agents) using your enterprise data securely on a single unified platform. Utilize Keyword, Vector, or Hybrid search to retrieve the most relevant information from across your enterprise content instantly. Improve search relevance with [AI-generated titles](https://www.searchblox.com/products/pretext-nlp), summaries, and topics from your data and documents, including unstructured content like PDFs and images. High-performance [private LLM](https://www.searchblox.com/products/private-llm) optimized for RAG. Process data, passages and conversations securely and at a fixed cost. Spend less to scale enterprise efficiency. fixed and transparent [pricing](https://www.searchblox.com/pricing). No external dependencies, APIs and pricing surprises to deal with. No more counting tokens for your LLM usage. Build out-of-the-box RAG solutions that automatically connect, process, chunk, embed, retrieve and augment your enterprise data. No need for complicated pipelines or vector stores.

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=searchblox-searchai)

## Creating an App using the API

In addition to creating a Droplet from the SearchAI 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB SearchAI Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"searchblox-searchai"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying SearchAI

Please go to https://:8443/console

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/searchai/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/searchai/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/searchai/#creating-an-app-using-the-api)
- [Getting Started After Deploying SearchAI](https://docs.digitalocean.com/products/marketplace/catalog/searchai/#getting-started-after-deploying-searchai)

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