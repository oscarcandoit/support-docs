---
url: "https://docs.digitalocean.com/products/marketplace/catalog/bluesky-social-pds/"
title: "BlueSky Social PDS | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/bluesky-social-pds/)
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

- BlueSky Social PDS

[Give Feedback](https://ideas.digitalocean.com/documentation)

# BlueSky Social PDS

Generated on 10 Sep 2025
from [the BlueSky Social PDS catalog page](https://marketplace.digitalocean.com/apps/bluesky-social-pds)

Social media is too important to be controlled by a few corporations. We’re building an open foundation for the social internet so that we can all shape its future.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| BlueSky PDS | 0.4 | [MIT license](https://github.com/bluesky-social/pds/blob/main/LICENSE-MIT.txt) |
| caddy | 2.7.6 | [Apache License 2.0](https://github.com/caddyserver/caddy/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=blueskysocialpds)

## Creating an App using the API

In addition to creating a Droplet from the BlueSky Social PDS 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB BlueSky Social PDS Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"blueskysocialpds"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying BlueSky Social PDS

The AT Protocol is a networking technology created to power the next generation of social applications. The initial reference application, bsky.app, provides a global-scale microblogging experience.

Self-hosting a Bluesky PDS means running your own Personal Data Server that is capable of federating with the wider Bluesky social network.

This application creates a PDS in a droplet.

_We recommend you don’t change the order of this flow to make your BlueSky PDS work._

**BlueSky PDS configuration instructions:**

- First and foremost, a domain or subdomain is required. Ensure it’s not too long; the handle (username + hostname) should be no longer than 30 characters, with the username being at least 3 characters long. Do not forget about dots in the domain/subdomain name, dots are included in the total length.

- Select the BlueSky app in the DigitalOcean marketplace, and create a droplet from it. It’s ok to start with the smallest droplet size, but migrating to a bigger droplet will be a hard task (see the link in Useful links section).

- Wait for the droplet creation process to complete.

- Once the droplet is created, copy its IP address from the droplet page.

Configure your DNS for wildcard usage by using the IP from the previous step. Refer to the docs. Without a wildcard, the BlueSky handle won’t function correctly. Check links in Useful links section for additional information.

- SSH into the droplet to complete the installation process. Use your domain/subdomain as the public DNS address and create an account with the PDS hostname, with the username as a prefix. For instance, if your PDS hostname is bsky.mydomain.com, you prefer scott as the username, enter as handle: scott.bsky.mydomain.com. Save the output in a secure location; the password won’t be displayed again, but you can reset it using pdsadmin.

- After installation is complete you can use your handle. For example, visit bsky.app, choose “Sign in,” select Custom as the Hosting provider, and input your handle as the Server address. Enter the email and password for the newly created account.


**Useful links:**

- [About BlueSky](https://bsky.social/about)
- [The AT Protocol](https://atproto.com/)
- [PDS](https://docs.bsky.app/docs/advanced-guides/entryway)
- [Bluesky social PDS ReadMe](https://github.com/bluesky-social/pds)
- [Configure DNS with wildcard](https://docs.digitalocean.com/glossary/wildcard-record/), [Second link](https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/#a-records)
- [PDS Migration](https://github.com/bluesky-social/pds/blob/main/ACCOUNT_MIGRATION.md)
- [Debug your handle](https://bsky-debug.app/handle)
- [Check your handle in crawler response](https://morel.us-east.host.bsky.network/xrpc/com.atproto.identity.resolveHandle?handle=YOUR_HANDLE)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/bluesky-social-pds/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/bluesky-social-pds/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/bluesky-social-pds/#creating-an-app-using-the-api)
- [Getting Started After Deploying BlueSky Social PDS](https://docs.digitalocean.com/products/marketplace/catalog/bluesky-social-pds/#getting-started-after-deploying-bluesky-social-pds)

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