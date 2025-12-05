---
url: "https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/"
title: "How to Manage Paperspace Teams | DigitalOcean Documentation"
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

- [Accounts & Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/)
- Manage Teams

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage Paperspace Teams

Validated on 14 Dec 2023 • Last edited on 23 Jan 2025

## Create a Team

To start building a team, log in to your Paperspace account. If you haven’t already added a Team, you’re signed in to your Private Workspace by default.

Click the team drop-down at the top of the console and click “Manage teams.”

![](https://docs.digitalocean.com/screenshots/paperspace/teams-create.022f8ed99aa8528ba11244784a5e6c7be1c1a8a1ba22184818e4bfddd4935a8e.png)

Click the Create Team button, and give your new Team a name and namespace:

![](https://docs.digitalocean.com/screenshots/paperspace/teams-drop-down.60833c736d1320a2658a0994553d88a20ac4a574cd15daa52b18933d5c42e4d0.png)

Like personal accounts, each team has a unique namespace. All resources belonging to this team is organized under this namespace. Among other things, namespaces allows you to share a link to a Core or Gradient resource that is directed to the appropriate team and resource.

Your team namespace is a unique string that must meet the following structure:

- May only contain lowercase alphanumeric characters or hyphens.
- Cannot have multiple consecutive hyphens.
- Cannot begin or end with a hyphen.
- Must be a maximum of 39 characters.

Under the Profile tab, you can manage your team namespace, profile photo, bio, location, and website. Other than your namespace, these fields are optional.

## Invite Users

Team admins can invite new members to a team.

1. Click the profile icon in the top right of the console and then click **Team Settings** from the drop-down.
2. Navigate to the Members tab
3. Click the **invite a user** button in the upper right.
4. Enter the email addresses of the members you want to invite, then click **invite**.

The status of each invited member is listed in the Members section. There is no limit to the number of members a team can have.

Note
Teams that have Single Sign-On configured should reference this [article](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/enable-sso/).

## Modify Team Roles

Team admins can change the roles of other team members.

1. Click the profile icon in the top right of the console and then click **Team Settings** from the drop-down.
2. Navigate to the Members tab
3. In the Members section, click the member you want to modify, then click to toggle make admin or revoke admin.

![](https://docs.digitalocean.com/screenshots/paperspace/team-admin-toggle.9e66f0619a32e60c8fdd48083af8f969b09607f8a2567de23de58526b4580f53.png)

The role of each team member is listed in the Members section.

Note
Removing a member from a team removes their access to the console and API but does not remove their access to machines via SSH keys or other credentials. This is because Paperspace does not manage the contents of machines after creation. You must revoke credentials from multi-user machines independently.

## Remove Users

Team admins can remove members from a team.

1. Click the profile icon in the top right of the console and then click **Team Settings** from the drop-down.
2. Navigate to the Members tab
3. Select the user you want to remove.
4. Click “Delete member” and the following confirmation message.

## Deactivate a Team

Click the profile icon in the top right of the console and then click **Team Settings** from the drop-down. At the bottom of the Profile tab there is a section called Deactivate Account. Click **deactivate** and follow the prompts to delete the current team.

In this article...

- [Create a Team](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/#create-a-team)
- [Invite Users](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/#invite-users)
- [Modify Team Roles](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/#modify-team-roles)
- [Remove Users](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/#remove-users)
- [Deactivate a Team](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/#deactivate-a-team)

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