---
url: "https://docs.digitalocean.com/platform/billing/late-payments/"
title: "Late Payments | DigitalOcean Documentation"
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
- Late Payments

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Late Payments

Validated on 3 Feb 2020 • Last edited on 17 Jun 2025

DigitalOcean has a monthly billing cycle. On the first calendar day of each month, we [invoice](https://docs.digitalocean.com/platform/billing/invoices/) and charge accounts for the previous month’s resource usage, applying [promo code credit](https://docs.digitalocean.com/platform/billing/promo-codes/) and [taxes](https://docs.digitalocean.com/platform/billing/taxes/) when applicable.

When we charge accounts on the first of the month, we first apply any [PayPal pre-payments](https://docs.digitalocean.com/platform/billing/pay-bills/#prepay) to the balance.

If there is a balance remaining after pre-payments, we charge the account’s default [credit or debit card](https://docs.digitalocean.com/platform/billing/manage-payment-methods/). If the default payment method fails, we try charging other payment methods on file.

## Past Due Accounts

If there are no valid payment methods on file to cover an outstanding balance, the account is [past due](https://docs.digitalocean.com/platform/billing/late-payments/), at which point:

- We email the account owner.
- We place the account on hold, which prevents creating new resources.
- The account’s existing resources continue to run.
- In certain cases, any [Spaces](https://docs.digitalocean.com/products/spaces/) on the account cannot be accessed.

To restore a past due account, the account owner needs to log in and [pay the balance](https://docs.digitalocean.com/platform/billing/pay-bills/).

## Suspended Accounts

If an account continues to remain past due, we email the account owner and the account is suspended, at which point:

- We power down the account’s resources.
- We redirect logins to the payment page.

To restore a suspended account, the account owner needs to log in and [pay the balance](https://docs.digitalocean.com/platform/billing/pay-bills/).

If an account remains suspended for 14 days, all of the account’s resources are permanently deleted and cannot be recovered. The account owner can still pay the balance to access the account, but the resources remain irreversibly deleted, and the account owner can optionally recreate the resources

## Help with Payments

For help with payments, see the following support articles:

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I have a refund?

We do not offer refunds.

![](https://docs.digitalocean.com/images/icons/support.svg)

What if I'm unable to pay my invoice?

We do not offer extensions, but we can help you find other solutions.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why was my card declined?

Your card may be declined for a number of reasons, including banking restrictions, unavailable funds, or trying to use a prepaid card.

![](https://docs.digitalocean.com/images/icons/support.svg)

I've paid my bill so why aren't my services online?

Once you pay a past-due balance, you need to manually turn your resources (like Droplets) back on using the control panel.

In this article...

- [Past Due Accounts](https://docs.digitalocean.com/platform/billing/late-payments/#past-due-accounts)
- [Suspended Accounts](https://docs.digitalocean.com/platform/billing/late-payments/#suspended-accounts)
- [Help with Payments](https://docs.digitalocean.com/platform/billing/late-payments/#help-with-payments)

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