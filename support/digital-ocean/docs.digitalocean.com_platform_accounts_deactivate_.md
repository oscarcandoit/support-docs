---
url: "https://docs.digitalocean.com/platform/accounts/deactivate/"
title: "How to Deactivate DigitalOcean Accounts and Purge Account Data | DigitalOcean Documentation"
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
  - [Manage Account Settings](https://docs.digitalocean.com/platform/accounts/settings/)
  - [Manage 2FA](https://docs.digitalocean.com/platform/accounts/2fa/)
  - [Deactivate Accounts](https://docs.digitalocean.com/platform/accounts/deactivate/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Accounts](https://docs.digitalocean.com/platform/accounts/)
- Deactivate Accounts

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Deactivate DigitalOcean Accounts and Purge Account Data

Validated on 15 May 2024 • Last edited on 18 Mar 2025

Deactivating an account stops billing and prohibits future resource creation. You can choose to reactivate the account in the future with the same account history, resource limits, and verification status.

When you deactivate an account, you have the option to permanently remove the account’s data from DigitalOcean, including email and billing information. Purging this data means you cannot reactivate the account in the future, so you would need to create and verify a new account to use DigitalOcean again.

## Resolving Team Memberships

Before you deactivate your account, you must resolve your team memberships:

- **If you are the sole owner of any teams with additional members**, you must either [delete the teams](https://docs.digitalocean.com/platform/teams/how-to/delete/) or [assign a different team owner](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/#modify-existing-members).

- **If you are an owner of a team with that has at least one additional owner**, you are automatically removed from the team when you deactivate your account.

- **If you are the only member of a team**, the team is automatically deleted when you deactivate your account.


When you delete a team, you must destroy all resources on the team. The payment method associated with the team is be charged for the team’s final balance.

## Deactivating an Account

You can deactivate your account from the [**My Account** page](https://cloud.digitalocean.com/account/profile).

From the control panel, click the profile icon in the top right:

![](https://docs.digitalocean.com/screenshots/accounts/profile-icon-menu.d9516ea95d5d74421e062e35c0036b1cc93671e20207676320f4a03c7ccac58f.png)

In the menu that opens, click **My Account** to go to your [**My Account** page](https://cloud.digitalocean.com/account/profile), then scroll to the **Deactivate account** section.

![The Deactivate Account section of the account settings page.](https://docs.digitalocean.com/screenshots/accounts/profile/deactivate-account-section.9c7b816fc3407a2e01ef31820f167d13ab360a853fa5ba679a7a127d4697cdf7.png)

Click **Deactivate Account**.

If you are the sole owner of any teams with additional members, this takes you to the **Before You Deactivate** page. This page lists the steps you must take before you can deactivate your account, like deleting team resources and deleting or transferring ownership of teams.

![The Before You Can Deactivate page](https://docs.digitalocean.com/screenshots/accounts/before-you-can-deactivate.21b8f32056b470435ab3e1c9f121c9444ab0b682dc5d92b9cc947798eddd73c7.png)

As you resolve issues, you can click the **Refresh** button to see your progress.

Once your account is ready for deactivation, the **Refresh** button changes to **Deactivate My Account**.

![The Account Deactivation page](https://docs.digitalocean.com/screenshots/accounts/deactivate-account.25bec1a7ca18003ba2b4c8a157d9b011ef27c6990dc868cfd1311741ce00d707.png)

You also have the option to permanently remove a deactivated account’s data from DigitalOcean:

- If you do not check the box next to **Purge all of my account data**, you can reactivate the same account in the future. This keeps the account history and resource limits.

- If you check the box next to **Purge all of my account data**, you lose this data permanently. To use DigitalOcean again, you need to create a new account and go through the verification process again.


Select your option, then click **Deactivate Account**, which deactivates your account and takes you either to the account reactivation page (if you didn’t purge your data) or to the login page (if you did purge your data). On this page, there is a link to a survey to tell us how we could have served you better, which we use to improve the platform.

In this article...

- [Resolving Team Memberships](https://docs.digitalocean.com/platform/accounts/deactivate/#resolving-team-memberships)
- [Deactivating an Account](https://docs.digitalocean.com/platform/accounts/deactivate/#deactivating-an-account)

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