---
url: "https://docs.digitalocean.com/products/paperspace/accounts-and-teams/"
title: "Paperspace Accounts and Teams | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [Products](https://docs.digitalocean.com/products/paperspace/#products)
  - [![](https://docs.digitalocean.com/images/icons/machines.4f455a935c3878c20e9d35654c24e34c18f052727b612061b52fbe7c0467d808.svg)Machines](https://docs.digitalocean.com/products/paperspace/machines/)
  - [![](https://docs.digitalocean.com/images/icons/notebooks.32e19af09a55fd5cd33aebcce8d997fae35ad696d0312f02ea32fbd1031df490.svg)Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
  - [![](https://docs.digitalocean.com/images/icons/deployments.3b7f4d8d82c236b51d91c8becee94bb424055a671131be322532b5d1cd26cc20.svg)Deployments](https://docs.digitalocean.com/products/paperspace/deployments/)
  - [![](https://docs.digitalocean.com/images/icons/workflows.3b7ab56ba05e74ff45c932896583f0781174b87ebd9e2feb4560ab9be20c2bb9.svg)Workflowsprivate](https://docs.digitalocean.com/products/paperspace/workflows/)
- [Accounts & Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/)
  - [Manage Accounts](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/)
  - [Add SSH Keys](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/)
  - [Use Secrets](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/)
  - [Manage Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/)
  - [Enable SSO](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/enable-sso/)
- [Pricing](https://docs.digitalocean.com/products/paperspace/pricing/)
- [Developer Tools](https://docs.digitalocean.com/products/paperspace/reference/)
  - [API Keys](https://docs.digitalocean.com/reference/paperspace/api-keys/)
  - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
  - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
  - [Legacy Tools](https://docs.digitalocean.com/products/paperspace/reference/legacy/)

- Accounts & Teams

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Paperspace Accounts and Teams

Validated on 14 Dec 2023 • Last edited on 17 Apr 2025

## Personal Accounts

Every Paperspace user has a Private Workspace with a unique namespace (your [username](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#username-namespace)). The Private Workspace is yours for your own Core and Gradient resources.

![](https://docs.digitalocean.com/images/icons/default.svg)

How to Manage Paperspace Personal Accounts

The Accounts Settings section lets you view and edit your account information, like changing your name, enabling 2FA, changing your email address, and deactivating your account.

### Account Security

All aspects of the Paperspace platform are designed with security as the primary consideration, from the application layer all the way down to our data centers (for our hosted offerings).

- All Paperspace traffic is secured over a fully encrypted channel (SSL/TLS) independent of platform — web, desktop, or mobile.
- Traffic between our database, web servers, API, and internal networks is also encrypted (SSL/TLS)
- Our databases are secured with 256-bit AES or higher.
- We use 2048 bit public keys in our certificates and support only high-strength symmetric ciphers.
- We monitor in real time for threats that could potentially impact our customer’s machine resources, and multiple password reset attempts locks your account.
- We employ a cloud operations team that monitors all aspects of security 24/7/365.

![](https://docs.digitalocean.com/images/icons/default.svg)

How to Upload SSH Keys to Paperspace Personal Accounts

SSH keys provide a secure way to remotely access your Linux-based machines.

![](https://docs.digitalocean.com/images/icons/default.svg)

How to Use and Manage Paperspace Secrets

Use secrets to keep private keys secure while using Gradient.

## Teams

Teams let you collaborate with people inside and outside of your organization. Teams are available at no cost and can be created and deactivated directly in the console. As a user, you can be a member of an unlimited number of teams.

![](https://docs.digitalocean.com/images/icons/default.svg)

How to Manage Paperspace Teams

Create a team and manage team membership and roles.

![](https://docs.digitalocean.com/images/icons/default.svg)

How to Enable Single Sign-On (SSO) for Paperspace Teams

SAML support can be enabled for Paperspace Teams to allow users to use the same credentials across many websites including Paperspace.

### Team Roles

Team members can have one of two roles: admin or member. Roles determine a user’s level of access to a team’s shared resources, billing information, and settings.

| Role | Machines | Add-ons | Gradient Projects | Gradient Workloads | Billing Information | Team Settings |
| --- | --- | --- | --- | --- | --- | --- |
| **Admin** | Full access | Full access | Full access | Full access | Full access | Full access |
| **Member** | By assignment | No access | By assignment | Full access | No access | No access |

API keys are unique to the members who generated them. They can be generated by individual members, regardless of their role, but can be revoked by a team administrator.

### Team Emails

Emails that are sent exclusively to the team admins include:

- Operational alerts and maintenance notices
- Resource alerts, like billing alert policy notifications
- Emergency migration or reboot notices
- Receipts for upfront charges
- Invoices

Additionally, some team emails are sent only to specific members:

- Machine password emails are sent to the member that created the related machine.
- Support ticket emails are sent to members who participated in the support ticket.
- Quota increase approvals

### Team Quota (Service Limits)

Certain items within Paperspace are governed by **Service Limits**. These limits are visible on the **Billing** tab of the console.

If you need to increase a Service Limit, please submit a [support ticket](https://docs.digitalocean.com/products/paperspace/machines/support/) and select **User Experience Increase** from the **Account Topic** drop-down. This opens the **User Experience Issues** drop-down menu. Select **Account Limits** option from the drop-down menu and fill out the rest of the ticket accordingly.

![](https://docs.digitalocean.com/screenshots/paperspace/account-service-limit.55eed8a1df46252263e5c304116ed36efb1ebe7d27ff86a6a8241eae46d015f3.png)

Tell us how you’re using Paperspace and how many machines you require so we can process your request effectively.

Note
When creating Core machines, you may be asked to **verify** your account which is distinct from Service Limits. Learn more about verification in the [Paperspace machines limits documentation](https://docs.digitalocean.com/products/paperspace/machines/details/limits/).

In this article...

- [Personal Accounts](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/#personal-accounts)
  - [Account Security](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/#account-security)
- [Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/#teams)
  - [Team Roles](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/#team-roles)
  - [Team Emails](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/#team-emails)
  - [Team Quota (Service Limits)](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/#team-quota-service-limits)

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