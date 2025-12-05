---
url: "https://docs.digitalocean.com/platform/teams/how-to/manage-membership/"
title: "How to Manage Team Membership | DigitalOcean Documentation"
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
- Manage Team Membership

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage Team Membership

Validated on 14 May 2024 • Last edited on 30 Sep 2025

Owners can invite new people to a team, resend or revoke team invitations, change roles, and remove existing team members.

![](https://docs.digitalocean.com/images/icons/teams.svg)

Team Roles

Each team member has a role which determines their permissions on the team. Permissions grant varying levels of access to the team’s shared resources, billing information, and settings.

There is no limit to the number of people on a team or the number of people who can have a given role. You can only invite additional members to a team that has a [payment method](https://docs.digitalocean.com/platform/billing/manage-payment-methods/).

## View Team Membership

To manage the membership of a team, log in to the [control panel](https://cloud.digitalocean.com/). If you’re not already working within the team you want to use, click the profile icon in the top right to open the drop-down menu. Click **Switch Teams**, then click the team you want to use.

In the left menu, click **Settings** to go to the [**Team Settings**](https://cloud.digitalocean.com/account/team) page. In the **Team Members** section, the team page lists the team’s current membership:

![Team membership roles and settings](https://docs.digitalocean.com/screenshots/teams/members.ceb598ec4075bc939956e0b1f157f6f633473b9e56fac89a2c5be0498c7f22b0.png)

Everyone on a team can see the membership table, which lists the entire team’s current [roles](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/#team-roles) and the status of their invitations to the team (joined or pending).

Owners can additionally see each team member’s sign-in method (email, email + 2FA, Google, or GitHub).

## Invite New Members

To invite more people to a team, on the **Team Settings** page, click the **Invite Members** button to go to the [**Invite team members** page](https://cloud.digitalocean.com/account/team/invite).

Here, enter the email addresses of the people you want to invite, choose the role you want them to have when they first join the team, and optionally [require secure sign-in](https://docs.digitalocean.com/platform/teams/how-to/require-secure-sign-in/) if it isn’t already enabled for your team.

![The Invite Members page](https://docs.digitalocean.com/screenshots/teams/invite-member.26063d4e401b106fb8eac51c32ffe61a80cb5643bb01d7824dc9cd2e0bf4b1d0.png)

Click **Send Invites** to send the invitation emails.

## Modify Existing Members

When someone has not accepted their invitation to the team, the **Status** column lists them as pending. The **…** menu for pending team members has two options:

- **Resend email** sends the invitation to join the team again.

- **Cancel invite** revokes the invitation to join the team.


When someone accepts their invitation to the team, the **Status** column lists them as joined. The **…** menu for joined team members has two options:

- **Change roles** lets you change their [team role](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/#team-roles).

- **Remove member** removes them from the team, which removes their control panel and API access.


When an owner changes someone else’s role to owner, the original owner receives an email with a link to confirm the change. Once they confirm the change, the invited owner receives an email invitation to accept the new role.

In this article...

- [View Team Membership](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/#view-team-membership)
- [Invite New Members](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/#invite-new-members)
- [Modify Existing Members](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/#modify-existing-members)

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