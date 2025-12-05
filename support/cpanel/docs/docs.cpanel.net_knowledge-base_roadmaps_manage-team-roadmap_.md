---
url: "https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/"
title: "Manage Team Roadmap | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [Roadmaps](https://docs.cpanel.net/knowledge-base/roadmaps/)
4. Manage Team Roadmap


[accounts](https://docs.cpanel.net/tags/accounts/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [manageteam](https://docs.cpanel.net/tags/manageteam/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#overview)

* * *

[Feature Overview](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#feature-overview)

* * *

[Manage Team in WHM](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#manage-team-in-whm)

* * *

[Enabling Manage Team](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#enabling-manage-team)

* * *

[Manage Team in cPanel](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#manage-team-in-cpanel)

* * *

[Accessing Manage Team](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#accessing-manage-team)

* * *

[Using Manage Team](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#using-manage-team)

* * *

[Audit logging](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#audit-logging)

* * *

[Feedback](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#feedback)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#overview)

* * *

[Feature Overview](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#feature-overview)

* * *

[Manage Team in WHM](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#manage-team-in-whm)

* * *

[Enabling Manage Team](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#enabling-manage-team)

* * *

[Manage Team in cPanel](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#manage-team-in-cpanel)

* * *

[Accessing Manage Team](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#accessing-manage-team)

* * *

[Using Manage Team](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#using-manage-team)

* * *

[Audit logging](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#audit-logging)

* * *

[Feedback](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap/#feedback)

* * *

## Manage Team Roadmap

Last modified: _2024 May 31_

* * *

## Overview

In cPanel & WHM version 108, we introduced [_Manage Team_](https://docs.cpanel.net/cpanel/preferences/manage-team) as an [experimental](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#experimental) feature. We fully released the feature in version 112 for [Premier](https://support.cpanel.net/hc/en-us/articles/360045644554-License-type-for-a-dedicated-server), [Autoscale](https://support.cpanel.net/hc/en-us/articles/1500011418781-Autoscale-License-Packages), and [development](https://cpanel.net/developer-license-app/) cPanel licenses. cPanel account users can use _Manage Team_ to create team users that can log in and modify the cPanel account. Team users can share data and resources with the parent account in order to manage websites and update domains, email accounts, and databases.

#### Terminology

- **Team Owner** -This cPanel account is the parent account.
- **Team User** \- This virtual account exists under the team owner’s account.
- **Team** \- The team owner’s account with all its team users.
- **Team Member** \- A member of the team. A team member is either a team user or a team owner.
- **Role** \- A set of privileges, features, and files set by the team owner that a team user has permission to use, access, or modify.

## Feature Overview

After almost a decade of requests, cPanel is offering _Manage Team_. The new _Manage Team_ feature allows the creation of team user accounts so that multiple users can access, administer, and work on a single cPanel account without the security risk of sharing credentials.

With _Manage Team_, business owners can allow developers and administrators to manage websites for their businesses. Each team user will have a separate login and will share the same cPanel account resources. This allows for the division of responsibility and provides audit tracking for all accounts.

One goal of the _Manage Team_ feature is to allow multiple roles to provide access to specific features that the user will need. For example, if a business owner hired an email administrator, that team user would have the Email role. This role would give access to the _Email_ feature group in cPanel so that the team user has the tools they need to complete their job. Other people a business owner might hire may include a web designer, a web programmer, or a database administrator. All of these roles can have access to tools that will assist them with their work without using the business owner’s cPanel password.

## Manage Team in WHM

### Enabling Manage Team

The _Manage Team_ feature is [experimental](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#experimental) in cPanel & WHM versions 108 and 110. If you are upgrading to version 112, the system will automatically convert the _Manage Team_ configuration file from the older version to the newest version. If you are using versions 108 or 110, contact your system administrator or hosting provider to enable the feature.

#### Feature Manager settings

To enable the _Manage Team_ interface for a cPanel account, select the _Manage Team_ feature from the menu in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_).

You can also use WHM’s [_Add a Package_](https://docs.cpanel.net/whm/packages/add-a-package/) and [_Edit a Package_](https://docs.cpanel.net/whm/packages/edit-a-package/) interfaces to adjust the maximum number of team users that team owners may have.

## Manage Team in cPanel

### Accessing Manage Team

Once your hosting provider enables _Manage Team_ in WHM, you can access the [_Manage Team_](https://docs.cpanel.net/cpanel/preferences/manage-team) interface ( _cPanel » Home » Preferences » Manage Team_) in cPanel. To do so, you can type `Manage Team` into the Search text box at the top of the cPanel interface or scroll to the _Preferences_ section in the _Tools_ menu and select _Manage Team_.

### Using Manage Team

The _Manage Team_ feature uses existing cPanel tools for account management. The _Manage Team_ feature allows management via the following:

- **Creation** \- Creating the account so a team user can log in.
- **Authentication** \- Logging in.
- **Modification** \- Changing a team users tools, contact email, password reset, etc.
- **Suspension** \- Disabling logins for a team user.
- **Deletion** \- Removing an account entirely.

The _Manage Team_ interface shows a list of all existing users, both active and suspended, on the team. A team includes a maximum of seven team users and the team owner. Suspended accounts count toward the maximum.

When creating a new account, team owners will be able to set a new username, add a contact email, and select roles.

To set a new password, there are two options. Team owners can either set the new team user’s password or send an email with a login link for the team user to set their own password.

Only the team owner can modify team user accounts, except that team users can change their password, contact email, and two-factor authentication secret. You can configure the following items during team user creation:

- **Username** \- Set the user’s login username.
- **Notes** \- This setting is optional. You can choose to add notes regarding the user.
- **Password options** \- You can choose to send an email to let the user choose their own password (default), or you can set the password for the user. The team user can change their password after creation.
- **Contact email address** \- The contact email address for the team user. The team user can change their contact email address after creation.
- **Require two-factor authentication (2FA)** \- [Two-factor authentication](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#two-factor-authentication-2fa) adds extra security to a team user’s account. All team members either have 2FA or all do not. The entire team will have the 2FA status that the team owner has. If the team owner has 2FA, each team member must set up their 2FA before they can access their account. Each team member has their own device and 2FA secret, and they can change their 2FA secret after creation. The team owner cannot turn 2FA on or off for their team users. Only the WHM account owner can enable or disable 2FA for a team.
- **Roles** \- Roles are a set of privileges, features, files, or tasks that a team user can use.

## Audit logging

Since there will be many users sharing access to various features, files, and directories, tracking team user activity is a critical element of the _Manage Team_ feature. One way the system does this is by logging actions taken through the [_Audit Log_](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/) interface.

For more information about our audit logs, read our [The cPanel & WHM Log Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/) documentation.

## Feedback

WebPros International, LLC values our customers’ feedback. Join us on [Discord](https://go.cpanel.net/discord) to ask questions and to share your experience with this feature.

#### Additional Documentation

* * *

- [Manage Team](https://docs.cpanel.net/cpanel/preferences/manage-team/)
- [Manage Team — Audit Log](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/)
- [Manage Team — Create a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/)
- [Manage Team — Edit a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-edit-a-team-user/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×