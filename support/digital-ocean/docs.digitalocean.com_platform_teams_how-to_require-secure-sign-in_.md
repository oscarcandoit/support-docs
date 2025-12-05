---
url: "https://docs.digitalocean.com/platform/teams/how-to/require-secure-sign-in/"
title: "How to Require Secure Sign In for Teams | DigitalOcean Documentation"
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
  - [Roles](https://docs.digitalocean.com/platform/teams/roles/)
  - [Settings](https://docs.digitalocean.com/platform/teams/settings/)
  - [How-Tos](https://docs.digitalocean.com/platform/teams/how-to/)
    - [Create New Teams](https://docs.digitalocean.com/platform/teams/how-to/create/)
    - [Manage Team Membership](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/)
    - [Use Custom Roles](https://docs.digitalocean.com/platform/teams/how-to/use-custom-roles/)
    - [Require Secure Sign-In](https://docs.digitalocean.com/platform/teams/how-to/require-secure-sign-in/)
    - [Manage SSH Keys on Teams](https://docs.digitalocean.com/platform/teams/how-to/upload-ssh-keys/)
    - [Manage SSL Certificates](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/)
    - [View Security History](https://docs.digitalocean.com/platform/teams/how-to/view-security-history/)
    - [Refer Others to DigitalOcean](https://docs.digitalocean.com/platform/teams/how-to/refer-others/)
    - [Delete Teams](https://docs.digitalocean.com/platform/teams/how-to/delete/)
    - [Configure SSO](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/)
  - [Limits](https://docs.digitalocean.com/platform/teams/limits/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Teams](https://docs.digitalocean.com/platform/teams/)
- [How-Tos](https://docs.digitalocean.com/platform/teams/how-to/)
- Require Secure Sign-In

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Require Secure Sign In for Teams

Validated on 14 May 2024 • Last edited on 18 Mar 2025

Owners can require all team members to use a secure sign-in method.

When a team requires secure sign-in, only team members who log in to DigitalOcean via [Google or GitHub](https://docs.digitalocean.com/platform/accounts/settings/#sign-in-method) or [a DigitalOcean account with two-factor authentication (2FA)](https://docs.digitalocean.com/platform/accounts/2fa/) can access the team.

Any owner can require secure sign-in for existing teams at any time. You can also enable secure sign-in [during team creation](https://docs.digitalocean.com/platform/teams/how-to/create/).

## Require Secure Sign-In

To require secure sign-in for a team, first switch to the team in the [control panel](https://cloud.digitalocean.com/). Click the profile icon in the top right to open the drop-down menu, click **Switch Teams**, then click the name of team you want to update.

![](https://docs.digitalocean.com/screenshots/accounts/profile-icon-menu.d9516ea95d5d74421e062e35c0036b1cc93671e20207676320f4a03c7ccac58f.png)

Next, in the left menu of the control panel, click **Settings** to go to the [team settings page](https://cloud.digitalocean.com/account/team). In the **Secure sign-in** section, click **Enable**.

![The Secure sign-in section opened with the Require secure sign-in box visible](https://docs.digitalocean.com/screenshots/teams/require-secure-sign-in.fb265678617ff383c872b21dd8406be2357506f56638fa8e63cae264afc34c5e.png)

In the window that opens, click **Enable Secure Sign-In**. This notifies all team members via email that secure sign-in is now required.

If your DigitalOcean account doesn’t use a secure sign-in, you are then prompted to [update your sign-in method](https://docs.digitalocean.com/platform/accounts/settings/#sign-in-method).

Similarly, when a team member without an accepted sign-in method tries to access the team, they are prompted to update their sign-in method to regain access to the team. This prevents team members from accessing the team until they switch to [Google or GitHub](https://docs.digitalocean.com/platform/accounts/settings/#sign-in-method) or [enable 2FA on their DigitalOcean account](https://docs.digitalocean.com/platform/accounts/2fa/).

## Stop Requiring Secure Sign-In

Owners can stop requiring secure sign-in for a team on the team page.

On the [team settings page](https://cloud.digitalocean.com/account/team), in the **Secure Sign-In** section, click **Disable**. In the window that opens, confirm by clicking **Yes, Disable Secure Sign-In**.

This allows team members who log in using a DigitalOcean account without 2FA to access the team.

In this article...

- [Require Secure Sign-In](https://docs.digitalocean.com/platform/teams/how-to/require-secure-sign-in/#require-secure-sign-in)
- [Stop Requiring Secure Sign-In](https://docs.digitalocean.com/platform/teams/how-to/require-secure-sign-in/#stop-requiring-secure-sign-in)

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