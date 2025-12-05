---
url: "https://docs.digitalocean.com/platform/billing/bandwidth/"
title: "Bandwidth Billing | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/release-notes.5fbb164636ab961df9e08f892a39623e2bf7848be659fb300d6b0bab87a060dd.svg)Release Notes](https://docs.digitalocean.com/release-notes/)
- [![](https://docs.digitalocean.com/images/icons/regional-availability.32459447c00bfdb1c07abebcc0fdd721a4cbd93143cb616b0fbe5c629e4a938c.svg)Regional Availability](https://docs.digitalocean.com/platform/regional-availability/)
- [![](https://docs.digitalocean.com/images/icons/accounts.7c3a46a4e139957c37b1ba530846464f3b7432b7bc00793db0d8e788940ddf69.svg)Accounts](https://docs.digitalocean.com/platform/accounts/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
  - [Paying Your Bill](https://docs.digitalocean.com/platform/billing/pay-bills/)
  - [Manage Payment Methods](https://docs.digitalocean.com/platform/billing/manage-payment-methods/)
  - [Late Payments](https://docs.digitalocean.com/platform/billing/late-payments/)
  - [Billing Alerts](https://docs.digitalocean.com/platform/billing/billing-alerts/)
  - [Invoices](https://docs.digitalocean.com/platform/billing/invoices/)
  - [Promo Codes](https://docs.digitalocean.com/platform/billing/promo-codes/)
  - [Taxes by Country](https://docs.digitalocean.com/platform/billing/taxes/)
  - [Bandwidth](https://docs.digitalocean.com/platform/billing/bandwidth/)
  - [Pricing Overview](https://www.digitalocean.com/pricing)
  - [API & CLI Reference](https://docs.digitalocean.com/platform/billing/reference/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Billing](https://docs.digitalocean.com/platform/billing/)
- Bandwidth

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Bandwidth Billing

Validated on 20 May 2025 • Last edited on 17 Jun 2025

Details on bandwidth billing for DigitalOcean products are included on each product’s pricing page. This page summarizes the same information for products that charge for bandwidth. There are no regional variations on bandwidth pricing.

Bandwidth billing is automated and you can view charges on [your invoice](https://docs.digitalocean.com/platform/billing/invoices/). Now in beta, you can additionally request a CSV file that has the details of your team’s bandwidth usage across Droplets, load balancers, and Kubernetes clusters. To request this file, on the **Billing** page, in the **Droplet Transfer (Bandwidth) Overview** section, click **Bandwidth Detail CSV (Beta)**.

## Droplets

Each Droplet plan includes an amount of free outbound data transfer. Additional outbound transfer is billed at $0.01 per GiB. Inbound transfer to Droplets is free.

Transfer allowance and usage is pooled cumulatively across all Droplets at the team level, not individually per Droplet. Accrued transfer does not roll over between months and cannot be transferred between teams.

Any data transfer sent by a Droplet using a public network interface counts against the transfer pool for that Droplet’s team. All IPv6 traffic uses the public interface. Data transfer between Droplets over the [VPC network](https://docs.digitalocean.com/products/networking/vpc/) uses a private network interface. We do not bill for outbound data transfer that we determine is dropped by a DigitalOcean firewall rule.

In the **Droplet Transfer (Bandwidth) Overview** section of the [team billing page](https://cloud.digitalocean.com/account/billing), you can view usage data and projections about your team’s transfer pool, updated daily. We base projections on the assumption that your team maintains the same daily averages for both quantity of active Droplets and bandwidth usage through the end of the billing cycle.

You can calculate bandwidth costs using our [Droplet bandwidth calculator](https://www.digitalocean.com/community/tools/bandwidth).

### Details and Examples

We bill Droplets for each hour they exist, rounded to the nearest hour, up to a maximum of 672 hours (28 days multiplied by 24 hours) per monthly billing cycle. For every hour a Droplet exists, it accrues 1/672 of its total transfer allowance towards the team’s transfer pool, up to the maximum included with its plan.

For example, if a Droplet’s plan includes 1,000 GB of transfer allowance, the Droplet accrues 1,000 GB / 672 hours ≈ 1.5 GB of transfer allowance per hour towards the team’s transfer pool. If the team runs two such Droplets for an entire billing cycle, those Droplets accrue 2,000 GB of transfer allowance into the team’s transfer pool.

If the first Droplet uses 1,500 GB of outbound data transfer (which is more than it contributed to the pool) and the second Droplet uses 100 GB, they cumulatively used 1,600 GB of the team’s 2,000 GB transfer pool, so no overage fees apply.

## App Platform

Each App Platform plan includes an amount of [free outbound data transfer](https://docs.digitalocean.com/products/app-platform/details/pricing/#current-plans). Additional outbound transfer is billed at $0.02 per GiB. Inbound transfer to App Platform is free.

Transfer allowance and usage is pooled cumulatively across all apps at the team level, not individually per app or component. Accrued transfer does not roll over between months and cannot be transferred between teams.

You can [view ingress bandwidth](https://docs.digitalocean.com/products/app-platform/how-to/view-insights/) for individual apps, but you cannot currently view the accrued transfer allowance or cumulative usage for App Platform.

### Details and Examples

We bill apps for each second they exist, up to a maximum of 2,419,200 seconds (28 days) per monthly billing cycle. For each second an app exists, it accrues 1/2,419,200 of its total transfer allowance towards the team’s transfer pool, up to the maximum included with its plan.

For example, if an app’s plan includes 500 GB of transfer allowance, the app accrues 500 GB / 2,419,200 seconds ≈ 0.0002 GB of transfer allowance per second towards the team’s transfer pool. If the team runs two such apps for an entire billing cycle, those apps accrue 1,000 GB of transfer allowance into the team’s transfer pool.

If the first app uses 800 GB of outbound data transfer (which is more than it contributed to the pool) and the second app uses 100 GB, they cumulatively used 900 GB of the team’s 1,000 GB transfer pool, so no overage fees apply.

## Spaces

Spaces subscriptions include 1,024 GiB of outbound data transfer (from Spaces buckets to the internet), which is shared between all buckets. Additional outbound transfer is $0.01 per GiB. Outbound data transfer is free in the following cases:

- From Spaces in NYC3 to Droplets in NYC1, NYC2, and NYC3
- From Spaces in SGP1 to Droplets in SGP1
- From Spaces in SFO2 to Droplets in SFO1, SFO2, and SFO3
- From Spaces in SFO3 to Droplets in SFO1, SFO2, and SFO3
- From Spaces in AMS3 to Droplets in AMS2 and AMS3
- From Spaces in FRA1 to Droplets in FRA1
- From Spaces in SYD1 to Droplets in SYD1
- From Spaces in BLR1 to Droplets in BLR1

Inbound bandwidth to Spaces never counts against your Spaces transfer allowance.

Droplets have their own transfer allowance, independent of Spaces. Traffic from Droplets to Spaces does not count against your Spaces transfer allowance (because inbound bandwidth to Spaces is free), but does currently count against your Droplets’ outbound transfer allowance.

Invoices include a breakdown of bandwidth usage and cost per Spaces bucket. If you have 100 or more Spaces buckets, you can only view this breakdown in the CSV version of the invoice. To view or download invoices, see our [Invoices billing page](https://docs.digitalocean.com/platform/billing/invoices/).

## Kubernetes Worker Nodes

DOKS clusters accrue free bandwidth based on the worker pool’s largest sizes within 28 days of usage.

For example, if your worker pool has Droplets with a monthly bandwidth quota of 5TB, then you accrue free bandwidth at the rate of `5TiB/(24*28) * worker_pool_size = 7.44 GiB/hr * worker_pool_size`. For autoscaling clusters, the size of the worker pools vary.

In this article...

- [Droplets](https://docs.digitalocean.com/platform/billing/bandwidth/#droplets)
  - [Details and Examples](https://docs.digitalocean.com/platform/billing/bandwidth/#droplet-details)
- [App Platform](https://docs.digitalocean.com/platform/billing/bandwidth/#app-platform)
  - [Details and Examples](https://docs.digitalocean.com/platform/billing/bandwidth/#app-platform-details)
- [Spaces](https://docs.digitalocean.com/platform/billing/bandwidth/#spaces)
- [Kubernetes Worker Nodes](https://docs.digitalocean.com/platform/billing/bandwidth/#kubernetes-worker-nodes)

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