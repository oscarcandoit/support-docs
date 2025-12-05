---
url: "https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/"
title: "Manage Team — Create a Team User | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/#main-content)

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
[Overview](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/#overview) [Create a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/#create-a-team-user) [MySQL® and team users](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/#mysql-and-team-users) - [Edit a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-edit-a-team-user/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/#installation-toggle)

- [Manage Team](https://docs.cpanel.net/cpanel/preferences/manage-team/)
- [Audit Log](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/)
- [Create a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/)
[Overview](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/#overview) [Create a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/#create-a-team-user) [MySQL® and team users](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/#mysql-and-team-users) - [Edit a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-edit-a-team-user/)

## Manage Team — Create a Team User

![](https://docs.cpanel.net/img/cpanel-icons/team_manager.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/110/)

#### [112](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/112/)

#### [118](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/118/)

#### [130](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

To create a team user, click _Create Team User_ in the [_Manage Team_](https://docs.cpanel.net/cpanel/preferences/manage-team) interface ( _cPanel » Home » Preferences » Manage Team_). A new interface will appear. It displays the various settings for a team user, such as their username, password, role, and other settings.

## Create a Team User

To create a new team user, perform the following steps:

1. Enter the username for the new team user in the _Username_ text box. The username will always precede the cPanel account’s primary domain (for example, `user@example.com`).
2. In the _Password_ section, select _The user will set the account password_ to send the team user an email to allow them to set their password. Or, select _Set the user’s password_ to set the team user’s password. For information on requirements for secure passwords and password generation, read our [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security/) documentation.
3. Enter the team user’s email address in the _Contact Email_ text box.
4. Select the desired options from the [_Roles_](https://docs.cpanel.net/cpanel/preferences/manage-team/#roles) menu to assign roles to a team user. If you do not assign roles to a team user, that team user will **only** be able to edit their personal account preferences.





Important:




You cannot use email services or edit DNS for [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain). Contact your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) to replace your temporary domain with a registered domain.


5. Select the _I have read and understood the security risk warning._ checkbox.





Warning:





This feature enables account level functionality. **Only** grant this permission to users that you trust to access and modify your account.

6. In the _Notes_ text box, enter any notes related to the team user. The text box can contain up to 100 characters. This text box is optional.
7. Select the desired options from the [_Services_](https://docs.cpanel.net/cpanel/preferences/manage-team/#services) menu to enable or disable the [_Email_](https://docs.cpanel.net/cpanel/email/email-accounts/), [_File Transfer Protocol (FTP)_](https://docs.cpanel.net/cpanel/files/ftp-accounts/), and [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk/) services for the team user.
8. In the _Security Settings_ section, you can enter expiration information for the new team user. The expiration setting [suspends](https://docs.cpanel.net/cpanel/preferences/manage-team/#suspend-a-team-user) the account on the specified date in the future.

   - If desired, select a date from the _Expire On_ menu.
   - In the _Expire Reason_ text box, enter a reason for the expiration. The text box can contain up to 100 characters. This text box is optional.

Click _Create_ to create the new team user and return to the _Manage Team_ interface. The system will send an activation email to the new team user. You can click _Go Back_ to cancel this action and return to the _Manage Team_ interface.

### MySQL® and team users

When a team owner creates a team user account, the system creates a virtual [MySQL](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#mysql) user account for that team user. Each MySQL user account will have the username format `team-owner_team-user`. For example, if team owner Jane creates team user John, then John’s MySQL user account name would be `jane_john`.

The status of each MySQL user account will correspond to the status of the team user account. If a team owner deletes, suspends, or reinstates a team user, then the system will delete, suspend, or reinstate the associated MySQL user account.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×