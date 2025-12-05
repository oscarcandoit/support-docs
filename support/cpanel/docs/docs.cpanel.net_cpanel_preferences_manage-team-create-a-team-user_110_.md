---
url: "https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/110/"
title: "Manage Team — Create a Team User | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/110/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Preferences](https://docs.cpanel.net/cpanel/preferences/)
4. Manage Team — Create a Team User


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [accounts](https://docs.cpanel.net/tags/accounts/) [manageteam](https://docs.cpanel.net/tags/manageteam/)

#### Table of Contents

- [Manage Team](https://docs.cpanel.net/cpanel/preferences/manage-team/)
- [Audit Log](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/)
- [Create a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/)
[Overview](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/110/#overview) [Create a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/110/#create-a-team-user) [MySQL® and team users](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/110/#mysql-and-team-users) - [Edit a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-edit-a-team-user/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/110/#installation-toggle)

- [Manage Team](https://docs.cpanel.net/cpanel/preferences/manage-team/)
- [Audit Log](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/)
- [Create a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/)
[Overview](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/110/#overview) [Create a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/110/#create-a-team-user) [MySQL® and team users](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/110/#mysql-and-team-users) - [Edit a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-edit-a-team-user/)

## Manage Team — Create a Team User

![](https://docs.cpanel.net/img/cpanel-icons/team_manager.svg)

_Valid for version 110_

#### Version:

#### [110](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/110/)

#### [112](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/112/)

#### [118](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/118/)

#### [130](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/)

Last modified: _2025 March 24_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Experimental:

_Manage Team_ is an experimental feature. We do **not** recommend using this feature in production environments. It is currently under development and is **only** available to a limited number of cPanel & WHM customers. It will be available for testing in future releases. For more information about the development of _Manage Team_, read our [Manage Team roadmap](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap).

To create a team user, click _Create Team User_ in the [_Manage Team_](https://docs.cpanel.net/cpanel/preferences/manage-team) interface ( _cPanel » Home » Preferences » Manage Team_). A new interface will appear. It displays the various settings for a team user, such as their username, password, role, and other settings.

## Create a Team User

To create a new team user, perform the following steps:

1. In the _Basic Information_ section, enter the username for the new team user in the _Username_ text box. The username will always precede the cPanel account’s primary domain (for example, `user@example.com`).
2. In the _Notes_ text box, enter any notes related to the team user. The text box can contain up to 100 characters. This text box is optional.
3. In the _Security Information_ section, select _The user will set the account password_ to send the team user an email to allow them to set their password. Or, select _Set the user’s password_ to set the team user’s password. For information on requirements for secure passwords, read our [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security/) documentation.

   - If desired, click _Generate_ to let the system create a secure password for you. The system will reveal this password. You can also click the more icon (![More](https://docs.cpanel.net/img/moreicon.png)) to select password complexity settings. The system will use these settings when it generates a new password.
4. Enter the team user’s email address in the _Contact Email_ text box.
5. In the _User Settings_ section, select the desired options from the menu to assign roles to a team user. Roles are a set of privileges, features, files, or tasks that a team user can use.



| Role | Description |
| --- | --- |
| _Administrator_ | This role enables a team user to access high-level tools and modify files in the team owner’s cPanel account. It includes all privileges connected to each of the other roles. |
| _Database_ | This role enables a team user to access tools and modify files related to database management for the team owner’s cPanel account, such as [MySQL Manager](https://docs.cpanel.net/cpanel/databases/mysql-manager/). |
| _Email_ | This role enables a team user to access tools and modify files related to email administration for the team owner’s cPanel account, such as [email routing](https://docs.cpanel.net/cpanel/email/email-routing/) and [mailing lists](https://docs.cpanel.net/cpanel/email/mailing-lists/). |
| _Web_ | This role enables a team user to access tools and modify files related to website functionality, such as [Wordpress Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/) and [bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/). |


Click _Create_ to create the new team user and return to the _Manage Team_ interface. The system will send an activation email to the new team user. You can click _Go Back_ to cancel this action and return to the _Manage Team_ interface.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×