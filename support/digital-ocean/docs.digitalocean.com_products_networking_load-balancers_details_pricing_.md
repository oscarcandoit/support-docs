---
url: "https://docs.digitalocean.com/products/networking/load-balancers/details/pricing/"
title: "Load Balancers Pricing | DigitalOcean Documentation"
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

- [Details](https://docs.digitalocean.com/products/networking/load-balancers/details/)
- Pricing

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Load Balancers Pricing

Validated on 27 Feb 2025 • Last edited on 28 Feb 2025

DigitalOcean fully manages Regional Load Balancers and Global Load Balancers, ensuring they are highly available load balancing services. Load balancers distribute traffic to groups of backend resources in specific regions or across different regions, which prevents the health of a service from depending on the health of a single server, cluster, or region.

DigitalOcean offers two different types of load balancers: regional and global. Each type of load balancer has different pricing and inclusions.

## Global Load Balancers

Global load balancers cost $15.00 per month and include the following:

- 25 million HTTP/HTTPS requests per month. Each additional million requests costs an additional $0.70.
- 1 TB of data transfer per month. Additional data transfer costs $0.02 per GB.
- Up to 5 connected domains. Each additional domain costs an additional $0.14 per month.

## Regional Load Balancers

Regional HTTP load balancers cost $12.00 per month per node.

Regional network load balancers cost $15.00 per month per node.

Each additional regional HTTP load balancer node increases the load balancer’s maximum:

- Requests per second, up to 10,000
- Simultaneous connections, up to 10,000
- New SSL connections per second by 250 (or 50 for certificates using 4096-bit RSA keys)

Each additional regional network load balancer node increases the load balancer’s maximum:

- Ingress throughput by 50 Mbps
- There is no defined upper limit on connections or requests per second for network load balancers.

You can add up to 200 nodes to a load balancer if your account limits allow it. To request a limit increase, contact support.

You can [scale regional load balancers up or down at any time](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/) to meet your performance needs. The more nodes a load balancer has, the more simultaneous connections and requests per second (RPS) it can maintain. We prorate the load balancer’s costs by the number of hours it runs at each size. Your invoice displays the number of hours the load balancer runs at each size on a separate line. You can resize a load balancer only once per minute.

Performance may vary depending on the load balancer’s workload. Using different protocols and package management settings produce different results. Therefore, we cannot provide specific performance metrics for each load balancer size, and we strongly recommend that you run your own benchmarks to see what size works for your application’s specific needs.

There is no additional cost to use Let’s Encrypt with load balancers.

The maximum number of new SSL connections does not apply to load balancers [configured for SSL passthrough](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-passthrough/).

### Bandwidth

DigitalOcean Load Balancers themselves don’t generate bandwidth charges. The public outbound traffic that originates from your resources and passes through the load balancer counts towards your bandwidth limit. In this scenario, the aggregated bandwidth is reported as part of the load balancer and not attributed to the individual resources behind it.

In this article...

- [Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/details/pricing/#global-load-balancers)
- [Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/details/pricing/#regional-load-balancers)
  - [Bandwidth](https://docs.digitalocean.com/products/networking/load-balancers/details/pricing/#bandwidth)

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