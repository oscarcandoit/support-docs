---
url: "https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/"
title: "How to Manage Paperspace Personal Accounts | DigitalOcean Documentation"
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
- Manage Accounts

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage Paperspace Personal Accounts

Validated on 14 Dec 2023 • Last edited on 23 Jan 2025

On your [Account Settings page](https://console.paperspace.com/account/settings), you can edit account information and settings, like your name, email address, password, and two-factor authentication.

## Account Settings

To access your account settings, click the profile icon in the top right of the console and then click Your Account from the drop-down.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/console-settings-drop-down.83bb933644a2a61b32bf2a6ae98fdb27308a6b20941215df0e9fa2406b70110b.png)

### Updating Your Name & Email Address

On the [**Profile** tab](https://console.paperspace.com/account/settings/profile), there are fields for your first and last name as well as your email address. To update your info, enter new details, then your password, and click **Save**.

### Changing Your Password

On the [**Security** tab](https://console.paperspace.com/account/settings/security), you can update your password.

You must enter your current password in order to update it. If you don’t remember your current password, you can [reset it](https://console.paperspace.com/forgot).

## Your Profile

Click the profile icon in the top right of the console and then click Team Settings from the drop-down. From here you can manage your profile.

### Profile Photo, Bio, Location, & Website

We recommend completing your profile when collaborating people within Paperspace (using teams) and when sharing resources with people external to Paperspace (such as a Gradient Notebook).

### Username (Namespace)

Your username (also referred to as namespace) is a unique string that must meet the following criteria:

- May only contain lowercase alphanumeric characters or hyphens.
- Cannot have multiple consecutive hyphens.
- Cannot begin or end with a hyphen.
- Must be a maximum of 39 characters.

### Your Account ID

In addition to your username, your personal account also has a permanent ID. Since your username, email, and other profile settings can be changed, the ID is useful, for example, when sharing info about your account to the Paperspace Support team. This ID can be found under the Profile tab of your Private Workspace.

![](https://docs.digitalocean.com/screenshots/paperspace/account-handle.041c524d08bedd7171a939793812d5a1fe8fa88af83e4718bb3544383ade62be.png)

## Authentication

### GitHub & Google Authentication

Paperspace offers several options for authentication such as email and password, SAML-based [Single Sign-On (SSO)](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/enable-sso/) for businesses, and OAuth with GitHub and Google. The email address of your account on GitHub or Google is used within Paperspace. If you use GitHub or Google, we strongly recommend that you enable two-factor authentication on the GitHub or Google account you use to log in to Paperspace.

### Linking your GitHub Account

In order to use certain features such as the Gradient Workflows GitHub integration, you must authenticate your GitHub account. You can configure this option on Linked Accounts section of the [**Profile** tab](https://console.paperspace.com/account/settings/profile).

### Two-Factor Authentication

Paperspace supports two-factor authentication (2FA) for accounts in the form of a security code that you use in addition to your password when you log in. You can receive the code via an authenticator app like Google Authenticator, Authy, 1Password, and Duo.

To enable 2FA, navigate to the [**Account Settings** page](https://console.paperspace.com/account/settings) in the console. Enter your account password and select the “enable 2FA” option. This generates a unique QR code. Scan the provided QR code using the authenticator app on your phone.

Follow the directions in your specific authenticator app to enter the code, then enter the PIN that the app gives you in the space provided. Once you’ve entered the PIN, the app links with your Paperspace account.

Once your Paperspace account and 2FA app are linked, when you log in to Paperspace, you need to open the app and enter the code provided in the console to finish logging in.

## Team Management

### Accept Team Invites

When you are invited to a team, an email notification is sent to your inbox.

![](https://docs.digitalocean.com/screenshots/paperspace/team-accept-invite-email.0134ce49423dafea52f7862bd986bc63d5e1d0cdb873002c232e4779c913c463.png)

If you’ve received an invite but don’t have a Paperspace account yet, welcome! Click the link in your invitation email or go to [Paperspace.com](https://console.paperspace.com/signup) to sign up. Create your account and confirm your email address.

If you’re already a Paperspace user, an email is sent to your inbox prompting you to sign in and accept your invitation. Log in to your Paperspace account, and click the [**Manage Teams**](https://console.paperspace.com/teams).

![](https://docs.digitalocean.com/screenshots/paperspace/teams-drop-down.60833c736d1320a2658a0994553d88a20ac4a574cd15daa52b18933d5c42e4d0.png)

Any team invitations that is not accepted is listed under the **Pending Team Invitations**. Once you’ve accepted the invite, you may [switch to that team](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#switch-between-teams).

### Switch Between Teams

Your current workspace is visible at the top of the console at all times. Clicking the workspace drop-down reveals all available teams you are a member of, including your private workspace. There is a checkbox indicating your current workspace.

To switch teams, select a different team from the drop-down.

![](https://docs.digitalocean.com/screenshots/paperspace/account-team-drop-down.578ca446dda9ee5fe863e5f867c9d37bdba0fc4792980eac378e8d63b67aef4f.png)

### Leave a Team

If you want to leave a Paperspace Team, click the **Teams Settings** menu by clicking your profile icon, and select the **Members** tab and click the **Leave Team** button.

![](https://docs.digitalocean.com/screenshots/paperspace/team-leave.c78bfff14ef9d09b802d5245d6923e7a64749bb88f8594e5e2de2872b9d6b517.png)

## Deactivate Account

Click the profile icon in the top right of the console and then click Your Account from the drop-down. At the bottom of the Profile tab there is a section called Deactivate Account. Click deactivate and follow the prompts to cancel your account.

In this article...

- [Account Settings](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#account-settings)
  - [Updating Your Name & Email Address](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#updating-your-name--email-address)
  - [Changing Your Password](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#changing-your-password)
- [Your Profile](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#your-profile)
  - [Profile Photo, Bio, Location, & Website](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#profile-photo-bio-location--website)
  - [Username (Namespace)](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#username-namespace)
  - [Your Account ID](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#your-account-id)
- [Authentication](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#authentication)
  - [GitHub & Google Authentication](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#github--google-authentication)
  - [Linking your GitHub Account](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#linking-your-github-account)
  - [Two-Factor Authentication](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#two-factor-authentication)
- [Team Management](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#team-management)
  - [Accept Team Invites](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#accept-team-invites)
  - [Switch Between Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#switch-between-teams)
  - [Leave a Team](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#leave-a-team)
- [Deactivate Account](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/#deactivate-account)

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