---
url: "https://docs.digitalocean.com/platform/organizations/how-to/manage-organization/"
title: "How to Manage Organizations | DigitalOcean Documentation"
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
  - [Roles](https://docs.digitalocean.com/platform/organizations/roles/)
  - [How-Tos](https://docs.digitalocean.com/platform/organizations/how-to/)
    - [Create New Organizations](https://docs.digitalocean.com/platform/organizations/how-to/create/)
    - [Manage Organizations](https://docs.digitalocean.com/platform/organizations/how-to/manage-organization/)
    - [Delete Organizations](https://docs.digitalocean.com/platform/organizations/how-to/delete/)
  - [Limits](https://docs.digitalocean.com/platform/organizations/limits/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Organizations](https://docs.digitalocean.com/platform/organizations/)
- [How-Tos](https://docs.digitalocean.com/platform/organizations/how-to/)
- Manage Organizations

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage Organizations

Validated on 16 Sep 2025 • Last edited on 30 Sep 2025

Organization owners can invite new teams and members to an organization, resend or revoke organization invitations, change roles, and remove existing organization members.

There is no limit to the number of members who can have a given role on an organization. You can only invite members to an organization that have a [payment method](https://docs.digitalocean.com/platform/billing/manage-payment-methods/).

## Manage Organization Membership

To manage the membership of an organization, log in to the [control panel](https://cloud.digitalocean.com/). Click the profile icon in the top right to open the drop-down menu. Click **View Organizations** to open the organizations dashboard.

To invite a new member to the organization, in [the **Organization** tab](https://cloud.digitalocean.com/organizations/settings), click **Invite Organization Members**.

![Invite org member button](https://docs.digitalocean.com/screenshots/organizations/invite-org-member.1983519b0263f8427d820e884107613b0c22514909011402017f18be73ebfc8a.png)

On the **Invite Organization members** members page, select the [role for the member](https://docs.digitalocean.com/platform/organizations/roles/predefined/) you want to invite. Next, enter the member’s email address in the **Emails** field, then click **Send Invites**.

![Invite org member window](https://docs.digitalocean.com/screenshots/organizations/invite-org-members-window.a936f13a6024c699c8fe2d97af0cfae8eaf6008f3e56d3d0e06b795bb50b61eb.png)

Invited users receive an email invitation to join the organization. When they accept the invitation, they are added to the organization and can access the organization based on their [role](https://docs.digitalocean.com/platform/organizations/how-to/manage-organization/#roles). The **Status** column in the **Organization members** section of the organizations dashboard lists them as **Joined**.

![Org members table](https://docs.digitalocean.com/screenshots/organizations/org-members-table.d314c252f47ec434d811f4bef4006d3982660d6e3a83b61124223442f8873697.png)

You can change the organization role of a member or remove them from the organization. Click the **…** menu for the member and select **Change Role**. In the **Change Organization Role** window, select the role you want to assign to the member and click **Change Role**.

![Change org role](https://docs.digitalocean.com/screenshots/organizations/change-org-role.226f9803610e3a82a444f86eda1cce8c3b754e80a08182af1fae5f583ca998b4.png)

If you change a member’s role to owner, the original owner receives an email with a link to confirm the change. Once they confirm the change, the invited owner receives an email invitation to accept the new role.

To remove a member from the organization, select **Remove from Organization**. In the confirmation window, enter the name of the member to remove, then click **Remove from organization**.

When a user has not accepted their invitation to the organization, the **Status** column lists them as **Pending**. To resend the invitation to join the organization, click the **…** menu for a pending organization member, then click **Resend email**. To revoke the invitation, select **Cancel invite**.

## Add Existing Teams

To streamline billing and permissions management, you can add additional existing teams to an organization. A team can belong to only one organization at a time. Any team that has an overdue balance cannot be added to the organization before they settle their balance.

You can only add teams for which you are the team owner.

Warning

- Adding a team to an organization is permanent. You cannot remove it from the organization or move it to another organization.

- The payment methods, billing address, billing alerts, billing settings, tax ID, and tax location of the team are replaced by the corresponding settings of the organization. Billing-related custom roles in the team are removed. These changes cannot be reversed.

- Team discounts and credits are removed. You need to [contact support](https://cloudsupport.digitalocean.com/) to transfer them where applicable.

- API responses from the billing endpoints return organization-wide data instead of team-level billing details.


To add a team to the organization, in [the **Teams** tab](https://cloud.digitalocean.com/organizations/teams) of the organizations dashboard, click **Add Existing Team** to go to the **Add teams to your organization page** page.

In the **Select teams to invite** section, select the checkbox for the team you want to invite.

![Invite existing teams](https://docs.digitalocean.com/screenshots/organizations/invite-existing-teams.9465f203156b322bfa5019331d473d17099a6b29b7d1005a7ef5b73127b2ae7e.png)

Next, in the **Review Team Settings That Will Be Replaced** section, review the team settings that will be replaced by the organization settings and then click **Continue**. In the **Agree to proceed** section, select the checkboxes and then click **Add Team(s)**. The team is immediately added to the organization.

You can view all teams and team members in the organization in the **Teams** tab of the organizations dashboard.

![Teams tab](https://docs.digitalocean.com/screenshots/organizations/teams-tab.70498d87c9e6204c0945c00b78f2e6db210ac07783e9f8fbbf0257eeb5aa4ceb.png)

## Create a New Team

You can create a new team from within the organization and add it to the organization. You are the initial owner of any new teams you create within the organization. You can subsequently share or transfer the team ownership to another user after creation.

To create a new team in the organization, in [the **Teams** tab](https://cloud.digitalocean.com/organizations/teams) of the organizations dashboard, click **Create New Team** to open the **Create new team within your organization** page. The **Your Organization** field is prepopulated with the name of your organization. In the **Enter team name** field, specify the name of the new team. The team email address is prepopulated in the **Enter team email address** field and defaults to the email address of the user creating the team. This email address is used for sending team-related operational communication. Then, click **Continue**.

![Create New team page](https://docs.digitalocean.com/screenshots/organizations/create-new-team-within-org.cf4191f3d4c5741724a35bd306ab0de39f377fdb555c82f02fcb7d85ad5bd5a4.png)

You can optionally invite team members when creating the new team. Select the [role for the member](https://docs.digitalocean.com/platform/organizations/roles/predefined/) you want to invite in the **Role** dropdown. Next, enter the member’s email address in the **Emails** field. Then, click **Send Invites**.

![Invite new members page](https://docs.digitalocean.com/screenshots/organizations/invite-team-members-optional.1f7a0b7091d61658cfc55d391b2e4104c553e99d6f36627370a51e9c9cba4255.png)

You can view the new team and team members in the **Teams** tab of the organizations dashboard.

## Manage a Team

You can manage team invitations and memberships in [the **Teams** tab](https://cloud.digitalocean.com/organizations/teams) of the organizations dashboard.

The **Status** column in the **All teams** section lists teams as **Joined** or **Pending**. You can manage a team’s membership by clicking the **…** menu next to the team you want to manage. Select **Manage team membership** to go to the team settings page and [manage the team membership](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/).

To navigate to the selected team’s project page, click the **…** menu next to the team and click **Switch to team**

You can also view which teams a member belongs to. In the **All team members** section, click the **…** menu next to the member you want to view and select **View teams** to open the **Teams this member belongs to** window.

![Teams member belongs to](https://docs.digitalocean.com/screenshots/organizations/teams-member-belongs-to.9e7f575550ea60088f512537885e57df6a1a45cb35fd0f5536f5c80f25851fbb.png)

Only team owners can remove a team from an organization by deleting it, as described in [Delete Teams](https://docs.digitalocean.com/platform/teams/how-to/delete/). Organization owners can delete a team by [contacting support](https://cloudsupport.digitalocean.com/).

## Create API Token

You can generate an API token for your organization in the **API** tab of the organizations dashboard. You can use the generated token, for example, to call the billing endpoints and view the billing details for the organization.

Click **Generate New Token** to open the **New personal access token** window. For more information on how to create a personal access token, see [Create a Personal Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token/).

![Org API token](https://docs.digitalocean.com/screenshots/organizations/org-api-token.33942f133df68172785c8b4d38638441c1d1b76d73c6caa5808291ce264a8057.png)

## Create Support Tickets

You have the option to create a support ticket on behalf of the organization or for any team in the organization.

In the organizations dashboard, click **Create a ticket** on the top right to open the **My Tickets** page.

![Open org ticket](https://docs.digitalocean.com/screenshots/organizations/org-ticket-button.761ea76ceae26616f71695158865cb4a79a7bc3434d199bb109eb009522e6faf.png)

In this article...

- [Manage Organization Membership](https://docs.digitalocean.com/platform/organizations/how-to/manage-organization/#manage-organization-membership)
- [Add Existing Teams](https://docs.digitalocean.com/platform/organizations/how-to/manage-organization/#add-existing-teams)
- [Create a New Team](https://docs.digitalocean.com/platform/organizations/how-to/manage-organization/#create-a-new-team)
- [Manage a Team](https://docs.digitalocean.com/platform/organizations/how-to/manage-organization/#manage-a-team)
- [Create API Token](https://docs.digitalocean.com/platform/organizations/how-to/manage-organization/#create-api-token)
- [Create Support Tickets](https://docs.digitalocean.com/platform/organizations/how-to/manage-organization/#create-support-tickets)

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