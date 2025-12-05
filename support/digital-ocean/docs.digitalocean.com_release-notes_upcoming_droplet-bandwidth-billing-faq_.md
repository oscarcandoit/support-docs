---
url: "https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/"
title: "Droplet Bandwidth Billing Update Scheduled June 2018 | DigitalOcean Documentation"
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
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- Droplet Bandwidth Billing Update Scheduled June 2018

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Droplet Bandwidth Billing Update Scheduled June 2018

Validated on 26 Jun 2018 • Last edited on 8 May 2024

Below are answers to frequently asked questions about the differences between the previous system and the current system. To see charges for all DigitalOcean products with transfer limits, see [Bandwidth Billing](https://docs.digitalocean.com/platform/billing/bandwidth/).

## What Changed?

In June 2018, we made three major changes to bandwidth billing:

### More flexible transfer limits

To reduce the chance that you exceed your free transfer limits, we pooled the transfer allowance at the account level instead of the Droplet level.

For example, say you have two $5 Droplets (1000GB/month allowance) that run all month. One Droplet transfers 1500GB of outbound data and the other transfers 100GB.

- Under the old plan, you would pay for 500GB of overage.
- Under the new plan, you wouldn’t be charged at all.

By pooling the data transfer allowance at the account level, we aim to give you the greatest flexibility in how you use it.

### Reduced data transfer prices

[Starting in 2013](https://blog.digitalocean.com/bandwidth-pricing-introduced/), each Droplet was billed at $.02/GB for data transfer beyond its included allowance. We halved the price of excess data transfer from $.02/GB to $.01/GB.

For example, the cost of 1000GB of overage would be $20 under the old plan and is $10 under the new plan.

### Automated bandwidth billing

In the early days, we billed manually for excess transfer — and to be honest, it didn’t always happen. Now we can’t forget to bill for overage, but based on historical usage patterns, less than 1% of our users will exceed their pooled allowance.

## Frequently Asked Questions

### When will this pricing change go into effect?

Starting on 1 June 2018, outbound data transfer in excess of the pooled allowance will be tracked. Charges will appear on the 1 July invoice.

### How will this change my costs?

Based on our analysis of the historical usage patterns of our customers, less than one percent of users will exceed their pooled allowance.

To help you understand how this change may affect you, we will collect usage data and display projections about your transfer pool starting on 24 April and throughout the month of May on your account’s [Billing](https://cloud.digitalocean.com/settings/billing) page.

The first bandwidth bill under the new pricing will appear on the invoice for 1 July based on usage during the month of June.

### How does this affect Spaces data transfer?

[Spaces has its own allowance](https://docs.digitalocean.com/platform/billing/bandwidth/) separate from Droplets. Spaces transfer usage does not count towards Droplets transfer usage.

### Is there a way to buy more allowance in bulk to avoid the $0.01/GB additional charges?

We do not offer prepaid services specific to data transfer. However, if you add credit to your account using PayPal, that balance will be automatically used toward data transfer charges as needed.

### My account is part of the January 2013 grandfathering announcement. Are you changing this now?

No, all accounts grandfathered will continue to be treated as such.

### Will prices change again in the future? How often do you expect to adjust the price per GB?

While we do not have immediate plans to adjust prices, we do plan to continue offering the most cost-effective data transfer in the industry.

### I am a reseller and host several different clients within the same account. Is there a way to track bandwidth usage of individual Droplets separately so I can bill my customers accordingly?

We do not provide per-Droplet bandwidth usage metrics yet. In the meantime:

- Businesses should consult their DigitalOcean account managers with questions or concerns.

- DigitalOcean [team accounts](https://docs.digitalocean.com/platform/teams/) provide a dedicated invoice for the team’s resources and can be used to isolate client infrastructure. The data transfer pool for a team is based specifically on the Droplets in the team account and can be used to isolate clients.

- Application and infrastructure monitoring services like [New Relic](https://newrelic.com/) and command line tools like [vnStat](https://humdi.net/vnstat/) can provide insight on a per-server basis.


In this article...

- [What Changed?](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/#what-changed)
  - [More flexible transfer limits](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/#more-flexible-transfer-limits)
  - [Reduced data transfer prices](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/#reduced-data-transfer-prices)
  - [Automated bandwidth billing](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/#automated-bandwidth-billing)
- [Frequently Asked Questions](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/#frequently-asked-questions)
  - [When will this pricing change go into effect?](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/#when-will-this-pricing-change-go-into-effect)
  - [How will this change my costs?](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/#how-will-this-change-my-costs)
  - [How does this affect Spaces data transfer?](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/#how-does-this-affect-spaces-data-transfer)
  - [Is there a way to buy more allowance in bulk to avoid the $0.01/GB additional charges?](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/#is-there-a-way-to-buy-more-allowance-in-bulk-to-avoid-the-001gb-additional-charges)
  - [My account is part of the January 2013 grandfathering announcement. Are you changing this now?](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/#my-account-is-part-of-the-january-2013-grandfathering-announcement-are-you-changing-this-now)
  - [Will prices change again in the future? How often do you expect to adjust the price per GB?](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/#will-prices-change-again-in-the-future-how-often-do-you-expect-to-adjust-the-price-per-gb)
  - [I am a reseller and host several different clients within the same account. Is there a way to track bandwidth usage of individual Droplets separately so I can bill my customers accordingly?](https://docs.digitalocean.com/release-notes/upcoming/droplet-bandwidth-billing-faq/#i-am-a-reseller-and-host-several-different-clients-within-the-same-account-is-there-a-way-to-track-bandwidth-usage-of-individual-droplets-separately-so-i-can-bill-my-customers-accordingly)

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