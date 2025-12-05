---
url: "https://docs.digitalocean.com/platform/teams/how-to/use-custom-roles/"
title: "How to Use Custom Roles | DigitalOcean Documentation"
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
- Use Custom Roles

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Use Custom Roles

Validated on 23 Jun 2025 • Last edited on 30 Jun 2025

A [custom role](https://docs.digitalocean.com/platform/teams/roles/custom/) is a new [role](https://docs.digitalocean.com/glossary/role/)
you can create on a team that includes only the [permissions](https://docs.digitalocean.com/glossary/permission/)
you choose.

After you create a custom role, you can assign team members to that role to grant them the role’s permissions. You can also [modify the permissions of a custom role](https://docs.digitalocean.com/platform/teams/how-to/use-custom-roles/#modify) after you create it.

## Create Custom Roles

To create a new custom role for a team, first switch to that team in the control panel. Click the team icon in the top right and, in the drop-down menu that opens, click **Switch Teams** and then click the team you want to use.

In the left menu, click **Settings** to go to the team settings page, then click [the **Role Access** tab](https://cloud.digitalocean.com/account/access).

![](https://docs.digitalocean.com/screenshots/teams/role-access-tab.7ae07bd7d0f28bbf060664c6248b1b98dc11a73cfe1110ac33fe0277dd2b04e5.png)

Click **Create Custom Role** to go to [the custom role creation page](https://cloud.digitalocean.com/account/access/role/create). Creating a custom role has three steps:

1. **Create new role**, where you define the role’s name, description, and permissions

2. **Related permissions**, where you can optionally add additional permisisons that we suggest based on

3. **Assign role**, where you optionally assign team members to the new custom role


### Create New Role

In the **Configure your custom role** section, enter a name and description for the custom role. These will both be visible to all team members.

In the **Permissions** section, choose the permissions you want the role to have. You can also view a full list of all permissions available to custom roles here:

![](https://docs.digitalocean.com/images/icons/teams.svg)

Permissions for Custom Roles

A list of all permissions available for custom roles.

When you select a non-read permission for a resource type, the read permission for that resource type is also required, so we automatically include it. Other required permissions are displayed under the **+** to the right of the requiring permission.

For example, when you select the permission to create Droplets (`droplet:create`), the permission to read SSH keys (`ssh_key:read`) is also required, and the permission to read Droplets (`droplets:read`) is automatically selected:

![](https://docs.digitalocean.com/screenshots/teams/required-permissions.80a86077df7206091e59e2bfe3304c51fd400c77e19e0f96dcbd4c9489246995.png)

The **Summary** section in the top right of the custom role create page lists the permissions you’ve chosen so far. Review the permissions and, when you’re ready, click **Continue**. If there are additional required permissions necessary, a window opens to confirm the addition of those permissoins.

### Related Permissions

In the **Related permissions** section, you can optionally add additional permissions that we suggest based on the existing permissions you chose for the role.

These permissions are not required, and you do not need to add any of them in order for the existing permissions to work.

Select any related permissions you want to add, then click **Continue**. Alternatively, to skip all remaining optional setup, click **Skip and save custom role** to save the role immediately and return to the **Role Access** tab.

### Assign Role

In the **Assign role** section, you can select existing team members to change their role to the new custom role once it’s created.

Select any team members you want to use this role, then click **Assign team members**. Alternatively, click **Skip and save custom role**.

After you create the custom role, you can assign custom roles to new and existing team members the same way you can assign predefined roles. For more detailed instructions, see [How to Manage Team Membership](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/).

## Edit and Delete Custom Roles

You can edit and delete custom roles on the **Role Access** tab. To the right of the custom role, click **…**. In the menu that opens, click either **Edit custom role** or **Delete**.

Editing a custom role brings you to a page with the same layout as the custom role creation page where you can change the role name, description, and permissions.

Deleting a custom role opens a window that prompts you to enter the custom role name to confirm the deletion.

In this article...

- [Create Custom Roles](https://docs.digitalocean.com/platform/teams/how-to/use-custom-roles/#create-custom-roles)
  - [Create New Role](https://docs.digitalocean.com/platform/teams/how-to/use-custom-roles/#create-new-role)
  - [Related Permissions](https://docs.digitalocean.com/platform/teams/how-to/use-custom-roles/#related-permissions)
  - [Assign Role](https://docs.digitalocean.com/platform/teams/how-to/use-custom-roles/#assign-role)
- [Edit and Delete Custom Roles](https://docs.digitalocean.com/platform/teams/how-to/use-custom-roles/#modify)

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