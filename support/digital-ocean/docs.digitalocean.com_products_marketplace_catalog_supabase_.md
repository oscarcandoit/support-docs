---
url: "https://docs.digitalocean.com/products/marketplace/catalog/supabase/"
title: "Supabase | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/supabase/)
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

- Supabase

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Supabase

Generated on 12 Dec 2023
from [the Supabase catalog page](https://marketplace.digitalocean.com/apps/supabase)

Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Supabase studio | 0.23.06 | [Apache 2](https://github.com/supabase/supabase/blob/master/LICENSE) |
| Kong | 2.8.1 | [Apache 2](https://github.com/Kong/kong/blob/master/LICENSE) |
| Supabase auth | 2.62.1 | [MIT](https://github.com/supabase/gotrue/blob/master/LICENSE) |
| Postgre | 11.1 | [MIT](https://github.com/PostgREST/postgrest/blob/main/LICENSE) |
| Realtime | 2.10.1 | [Apache 2](https://github.com/supabase/realtime/blob/main/LICENSE) |
| Storage | 0.40.4 | [Apache 2](https://github.com/supabase/storage-api/blob/master/LICENSE) |
| Postgres Meta | 0.66.3 | [Apache 2](https://github.com/supabase/postgres-meta/blob/master/LICENSE) |
| PostgreSQL | 15.1.0.90 | [Postgre](https://www.postgresql.org/about/licence/) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=supabase)

## Creating an App using the API

In addition to creating a Droplet from the Supabase 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Supabase Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"supabase"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Supabase

Please wait about 10 minutes after droplet is created, docker containers initialisation requires some time. After ssh is enabled droplet is ready to use.

On your first [SSH login to the droplet](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) or launch of the Droplet console of your Supabase Droplet 1-Click, you will be greeted by a Supabase setup script.

The first step is to enter your domain name. Make sure that your domain is pointing to the new droplet IP.

The DNS Host may be the same company you registered the domain with or another entity you designate. To connect your DNS hosting to DigitalOcean, check out [this guide](https://docs.digitalocean.com/tutorials/dns-registrars/).

Once your A record is set up, you are ready to enter your domain in the script.

Next, the script will ask your email.

The script will configure HTTPS automatically for your droplet. We highly recommend setting HTTPS since using a domain is useless without it.

Supabase will be available in a few minutes after. For accessing the supabase in your browser, use https://%YOUR\_DOMAIN%.

If you cancel entering domain, you can retry after next login. Before domain setup is complete, supabase application is accessible by IP - https://%DROPLET\_IP%

Supabase login and password are located in `/srv/supabase/supabase/docker/.env` file, last two lines. Login into droplet using ssh and check login & password

## Getting started with Supabase

Supabase documentation is great, spend some time to check out - [https://supabase.com/docs](https://supabase.com/docs), you can start from [https://supabase.com/docs/guides/getting-started](https://supabase.com/docs/guides/getting-started)

## Protect your Supabase data with SnapShooter

[SnapShooter](https://marketplace.digitalocean.com/add-ons/snapshooter), an offering from DigitalOcean, offers comprehensive backup solutions for all your cloud resources, including your Supabase application data. To access [SnapShooter](https://marketplace.digitalocean.com/add-ons/snapshooter), navigate to the left-hand navigation menu in your DigitalOcean cloud console. As part of the free tier, you can back up a single resource, such as your Supabase application data.

To back up your Supabase application, start by installing the SnapShooter add-on to your DigitalOcean account. Next, do a single sign-on to access the SnapShooter console, where you can add a target storage solution, such as Spaces, and create a new backup job. From there, select your Supabase application as the recipe, and choose your preferred backup policy. Follow our step-by-step [video](https://www.youtube.com/watch?v=9NYqzeWEnAY) or [blog tutorial](https://docs.digitalocean.com/developer-center/easy-web-application-back-ups-with-snapshooter/) to get this working today.

With SnapShooter, you can restore your Supabase application and its data to another server, whether it’s within DigitalOcean or another location, in case of a disaster or migration. Keep in mind that your Spaces/S3 usage will incur charges from your cloud provider.

Protect your Supabase data with SnapShooter’s reliable and straightforward backup solutions today.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/supabase/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/supabase/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/supabase/#creating-an-app-using-the-api)
- [Getting Started After Deploying Supabase](https://docs.digitalocean.com/products/marketplace/catalog/supabase/#getting-started-after-deploying-supabase)
- [Getting started with Supabase](https://docs.digitalocean.com/products/marketplace/catalog/supabase/#getting-started-with-supabase)
- [Protect your Supabase data with SnapShooter](https://docs.digitalocean.com/products/marketplace/catalog/supabase/#protect-your-supabase-data-with-snapshooter)

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