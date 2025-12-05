---
url: "https://docs.digitalocean.com/products/networking/load-balancers/concepts/load-balancer-status/"
title: "Load Balancer Status | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/load-balancers.1b5f8a9d40bf92d2798a187032a28a29572afdd5e74855e5b1c1d30dfffc07ed.svg)Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/)
- [Getting Started](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/quickstart/)
  - [Manage Load Balancers with doctl](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/with-doctl/)
- [How-Tos](https://docs.digitalocean.com/products/networking/load-balancers/how-to/)
  - [Create Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/)
  - [Create Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create-global-load-balancer/)
  - [Manage Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/)
  - [Manage Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage-global-load-balancers/)
  - [Scale Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/)
  - [Configure SSL Passthrough](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-passthrough/)
  - [Balance TCP Traffic](https://docs.digitalocean.com/products/networking/load-balancers/how-to/tcp/)
  - [Configure Backend Droplets](https://docs.digitalocean.com/products/networking/load-balancers/how-to/configure-droplets-for-nlb/)
  - [Destroy Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/destroy/)
  - [Configure SSL Termination](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/)
- [Reference](https://docs.digitalocean.com/products/networking/load-balancers/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Load-Balancers)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/)
- [Concepts](https://docs.digitalocean.com/products/networking/load-balancers/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/)
  - [Load Balancer Status](https://docs.digitalocean.com/products/networking/load-balancers/concepts/load-balancer-status/)
- [Details](https://docs.digitalocean.com/products/networking/load-balancers/details/)
  - [Features](https://docs.digitalocean.com/products/networking/load-balancers/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/load-balancers/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/load-balancers/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/load-balancers/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/load-balancers/support/)

- [Concepts](https://docs.digitalocean.com/products/networking/load-balancers/concepts/)
- Load Balancer Status

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Load Balancer Status

Validated on 18 Aug 2022 • Last edited on 27 Sep 2023

DigitalOcean fully manages Regional Load Balancers and Global Load Balancers, ensuring they are highly available load balancing services. Load balancers distribute traffic to groups of backend resources in specific regions or across different regions, which prevents the health of a service from depending on the health of a single server, cluster, or region.

On DigitalOcean, load balancers for Droplets can have the following statuses:

- **Healthy**: All nodes in this load balancer have passed their latest health check.
- **Issue**: Only some nodes in this load balancer have passed their latest health check.
- **Down**: No nodes in this load balancer have passed their latest health check.
- **No Droplets**: This load balancer does not have any associated Droplets. See [how to add Droplets](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#manage-the-backend-nodes).

You can view a load balancer’s status in the [control panel](https://cloud.digitalocean.com/networking/load_balancers), in the **Networking** page and **Load Balancers** tab.

![The load balancer index page](https://docs.digitalocean.com/screenshots/load-balancers/index-page.4889e504051f28bd1f5938611b3eb60218117f751043ab0be682cdad501f62a3.png)

In this article...

[Load Balancer Status](https://docs.digitalocean.com/products/networking/load-balancers/concepts/load-balancer-status/)

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