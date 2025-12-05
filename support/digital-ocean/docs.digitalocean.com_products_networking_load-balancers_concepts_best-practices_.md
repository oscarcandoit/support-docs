---
url: "https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/"
title: "Best Practices for Performance on DigitalOcean Load Balancers | DigitalOcean Documentation"
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
- Best Practices

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Best Practices for Performance on DigitalOcean Load Balancers

Validated on 9 Nov 2021 • Last edited on 14 Jul 2025

DigitalOcean fully manages Regional Load Balancers and Global Load Balancers, ensuring they are highly available load balancing services. Load balancers distribute traffic to groups of backend resources in specific regions or across different regions, which prevents the health of a service from depending on the health of a single server, cluster, or region.

Here are some recommendations on how to get the best performance from your load balancers based on your use case and application architecture.

## Use HTTP/2

### When Should I Do This?

In most production workloads, HTTP/2 outperforms HTTP and HTTPS due to its pipelining and connection handling. We recommend using it unless there is a clear case for HTTP or HTTPS.

### How Does This Improve Performance?

HTTP/2 is a major update to the older HTTP/1.x protocol. It was designed primarily to reduce page load time and resource usage.

Its major features offer significant performance improvements; for example, HTTP/2 is binary (instead of text) and fully multiplexed, uses header compression, and has a prioritization mechanism for delivering files.

The [IETF](https://www.ietf.org/) HTTP Working Group’s [documentation on HTTP/2](https://http2.github.io/) is a good resource to learn more.

### How Do I Implement This?

You can use HTTP/2 by [setting your load balancer’s forwarding rules in the control panel](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/). Additionally, load balancers can [terminate](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/) HTTP/2 client connections, allowing them to function as gateways for HTTP/2 clients and HTTP/1.x applications. In other words, you can transition your existing applications without upgrading the backed apps on your Droplets from HTTP/1.x to HTTP/2.

## Monitor the Performance of Your Droplets

### When Should I Do This?

Monitoring provides critical performance insights and should be part of any production setups.

### How Does This Improve Performance?

Often times, performance issues are caused by a lack of resources on the backend rather than the load balancer itself or its configuration. Monitoring enables you to identify the bottlenecks affecting your infrastructure’s performance, including when your workload is overloading your Droplets, so you can implement the most impactful changes.

### How Do I Implement This?

There are a number of ways to monitor performance. One place to start is with [DigitalOcean Monitoring](https://docs.digitalocean.com/products/monitoring/), a free, opt-in service that gives you information on your infrastructure’s resource usage.

You can start by [looking at the default Droplet Graphs](https://docs.digitalocean.com/products/droplets/how-to/track-performance/) and [setting up the DigitalOcean Agent](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install) to get more information on CPU, memory, and disk utilization. If you find that you don’t have enough resources for your workload, you can [scale your Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/).

## Scale Droplets Horizontally or Vertically

### When Should I Do This?

If your backend Droplets don’t have enough resources to keep up with your workload, you should consider scaling up or out.

### How Does This Improve Performance?

It doesn’t matter how your load balancer distributes work among your Droplets if the total workload is too large for them to handle, so verify that your backend Droplet pool has sufficient resources.

There are two ways to scale: horizontally, which distributes work over more servers, and vertically, which increases the resources available to existing servers. Although load balancers facilitate horizontal scaling, both kinds of scaling improve performance.

### How Do I Implement This?

To scale horizontally, you can [add more Droplets to your load balancer](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/) by navigating to a particular load balancer’s page in the control panel and clicking the Add Droplets button.

The kind of Droplets you use [impacts performance](https://blog.digitalocean.com/a-practical-droplet-performance-comparison/) as well, so make sure you [choose the right Droplet for your application](https://docs.digitalocean.com/products/droplets/details/pricing/). For example, [CPU-Optimized Droplets](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/#dedicated-cpu-cpu-optimized-droplet) work best for computationally intensive workloads, like CI/CD and high performance application servers.

To scale vertically, you can [resize your existing Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/) to give them more RAM and CPU.

## Scale the Load Balancer

If you determine that your load balancer cannot maintain enough connections or distribute traffic quick enough, you can scale the load balancer so that it can manage more connections at once.

### When Should I Do This?

If your load balancer’s connections or requests per second is close to reaching its maximum limit. You can [monitor the load balancer’s traffic patterns](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#graphs) using the **Graphs** tab.

You may also want to increase the load balancer’s number of nodes if you are expecting an increase in traffic.

### How Do I Implement This?

You can [change the number of nodes](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/) your load balancer contains in the **Scaling Configuration** section of its **Settings** tab.

In this article...

- [Use HTTP/2](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#use-http2)
  - [When Should I Do This?](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#when-should-i-do-this)
  - [How Does This Improve Performance?](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#how-does-this-improve-performance)
  - [How Do I Implement This?](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#how-do-i-implement-this)
- [Monitor the Performance of Your Droplets](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#monitor-the-performance-of-your-droplets)
  - [When Should I Do This?](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#when-should-i-do-this-1)
  - [How Does This Improve Performance?](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#how-does-this-improve-performance-1)
  - [How Do I Implement This?](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#how-do-i-implement-this-1)
- [Scale Droplets Horizontally or Vertically](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#scale-droplets-horizontally-or-vertically)
  - [When Should I Do This?](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#when-should-i-do-this-2)
  - [How Does This Improve Performance?](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#how-does-this-improve-performance-2)
  - [How Do I Implement This?](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#how-do-i-implement-this-2)
- [Scale the Load Balancer](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#scale-the-load-balancer)
  - [When Should I Do This?](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#when-should-i-do-this-3)
  - [How Do I Implement This?](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/#how-do-i-implement-this-3)

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