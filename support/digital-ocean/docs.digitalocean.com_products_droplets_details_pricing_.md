---
url: "https://docs.digitalocean.com/products/droplets/details/pricing/"
title: "Droplet Pricing | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/droplets.f4877fc574e6b07f8fb9608e252be4160ebecd65569acea11775a046b9370c6f.svg)Droplets](https://docs.digitalocean.com/products/droplets/)
- [Getting Started](https://docs.digitalocean.com/products/droplets/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/droplets/getting-started/quickstart/)
  - [Recommended Droplet Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/)
  - [Recommended GPU Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/)
- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
  - [Create Droplets](https://docs.digitalocean.com/products/droplets/how-to/create/)
  - [Use GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/)
  - [Provide User Data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/)
  - [Connect with SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/)
  - [Add SSH Keys to Droplets](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/)
  - [Connect with the Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/)
  - [Transfer Files with FileZilla](https://docs.digitalocean.com/products/droplets/how-to/transfer-files/)
  - [Tag Droplets](https://docs.digitalocean.com/products/droplets/how-to/tag/)
  - [Track Performance](https://docs.digitalocean.com/products/droplets/how-to/track-performance/)
  - [Resize Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/)
  - [Use Autoscale Pools](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/)
  - [Access Metadata](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/)
  - [Rebuild Droplets](https://docs.digitalocean.com/products/droplets/how-to/rebuild/)
  - [Manage the Droplet Agent](https://docs.digitalocean.com/products/droplets/how-to/manage-agent/)
  - [Manage the Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/)
  - [Recover Access or Data](https://docs.digitalocean.com/products/droplets/how-to/recovery/)
  - [Destroy Droplets](https://docs.digitalocean.com/products/droplets/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/droplets/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Droplets)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/)
- [Concepts](https://docs.digitalocean.com/products/droplets/concepts/)
  - [Choosing a Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/)
  - [Tips on Downsizing Droplets](https://docs.digitalocean.com/products/droplets/concepts/downsizing-considerations/)
  - [Autoscale Pools](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/)
  - [Glossary](https://docs.digitalocean.com/glossary/droplets/)
- [Details](https://docs.digitalocean.com/products/droplets/details/)
  - [Features](https://docs.digitalocean.com/products/droplets/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/droplets/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/droplets/details/availability/)
  - [Images](https://docs.digitalocean.com/products/droplets/details/images/)
  - [Limits](https://docs.digitalocean.com/products/droplets/details/limits/)
  - [Image Deprecation Policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/)
  - [Droplet Policies](https://docs.digitalocean.com/products/droplets/details/policies/)
  - [Live Migrations](https://docs.digitalocean.com/products/droplets/details/live-migration/)
  - [CPU Droplet SLA](https://www.digitalocean.com/sla/cpu-droplets)
  - [GPU Droplet SLA](https://www.digitalocean.com/sla/gpu-droplets)
  - [GPU Droplets](https://docs.digitalocean.com/products/gpu-droplets/)
- [Support](https://docs.digitalocean.com/products/droplets/support/)

- [Details](https://docs.digitalocean.com/products/droplets/details/)
- Pricing

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Droplet Pricing

Validated on 29 Jul 2025 • Last edited on 30 Sep 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

The base price of a Droplet depends on its plan. Droplets are billed hourly with a minimum charge of one hour. If you create a Droplet and destroy it less than an hour later, you are still charged the minimum charge of $0.01.

Note
Droplets will be billed per-second starting 1 January 2026, with a minimum charge of 60 seconds or $0.01, whichever is higher.

Billing for all Droplets begins when you create them and ends when you [destroy them](https://docs.digitalocean.com/products/droplets/how-to/destroy/). You are still billed for Droplets that are powered off because the compute resources for the Droplet stay reserved on the hypervisor, even when they are not in use. To end billing, [destroy the Droplet](https://docs.digitalocean.com/products/droplets/how-to/destroy/).

## CPU Droplet Pricing

You can view a full list of the CPU Droplet plans we offer and their prices on the CPU Droplets pricing page:

![](https://docs.digitalocean.com/images/icons/digitalocean.svg)

DigitalOcean CPU Droplet Pricing

Hourly and monthly pricing for DigitalOcean Droplets, including all plans and CPU options.

digitalocean.com

You can retrieve a list of available Droplet plans using the API endpoint [`/v2/sizes`](https://docs.digitalocean.com/reference/api/digitalocean/#operation/sizes_list) or the CLI command [`doctl compute size list`](https://docs.digitalocean.com/reference/doctl/reference/compute/size/).

## GPU Droplet Pricing

| GPU | Price |
| --- | --- |
| AMD MI300X | $1.99 per hour |
| AMD MI300X (8x) | $15.92 per hour |
| AMD MI325X (8x) | Per contract after [contacting sales](https://www.digitalocean.com/company/contact/sales) |
| NVIDIA H100 | $3.39 per hour |
| NVIDIA H100 (8x) | $23.92 per hour |
| NVIDIA L40s | $1.57 per hour |
| NVIDIA RTX 4000 | $0.76 per hour |
| NVIDIA RTX 6000 | $1.57 per hour |
| NVIDIA H200 | $3.44 per hour |
| NVIDIA H200 (8x) | $27.52 per hour |

If you are a newer DigitalOcean customer, we may charge your team’s primary payment method partway through the monthly billing cycle when you create GPU Droplets, but your total cost is not increased. This is a precautionary measure to prevent abuse of our platform.

## Bandwidth Billing

Each Droplet plan includes an amount of free outbound data transfer. Additional outbound transfer is billed at $0.01 per GiB. Inbound transfer to Droplets is free.

Transfer allowance and usage is pooled cumulatively across all Droplets at the team level, not individually per Droplet. Accrued transfer does not roll over between months and cannot be transferred between teams.

Any data transfer sent by a Droplet using a public network interface counts against the transfer pool for that Droplet’s team. All IPv6 traffic uses the public interface. Data transfer between Droplets over the [VPC network](https://docs.digitalocean.com/products/networking/vpc/) uses a private network interface. We do not bill for outbound data transfer that we determine is dropped by a DigitalOcean firewall rule.

In the **Droplet Transfer (Bandwidth) Overview** section of the [team billing page](https://cloud.digitalocean.com/account/billing), you can view usage data and projections about your team’s transfer pool, updated daily. We base projections on the assumption that your team maintains the same daily averages for both quantity of active Droplets and bandwidth usage through the end of the billing cycle.

You can calculate bandwidth costs using our [Droplet bandwidth calculator](https://www.digitalocean.com/community/tools/bandwidth).

For more details and examples of bandwidth billing for Droplets, see the [bandwidth billing page](https://docs.digitalocean.com/platform/billing/bandwidth/#details-and-examples).

In this article...

- [CPU Droplet Pricing](https://docs.digitalocean.com/products/droplets/details/pricing/#cpu-droplet-pricing)
- [GPU Droplet Pricing](https://docs.digitalocean.com/products/droplets/details/pricing/#gpu-droplet-pricing)
- [Bandwidth Billing](https://docs.digitalocean.com/products/droplets/details/pricing/#bandwidth-billing)

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