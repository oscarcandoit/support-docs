---
url: "https://docs.cpanel.net/cpanel/preferences/manage-team/112/"
title: "Manage Team | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#main-content)

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
4. Manage Team


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [accounts](https://docs.cpanel.net/tags/accounts/) [manageteam](https://docs.cpanel.net/tags/manageteam/)

#### Table of Contents

- [Manage Team](https://docs.cpanel.net/cpanel/preferences/manage-team/)
[Overview](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#overview) [Team users](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#team-users) [Roles](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#roles) [Services](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#services) [Team user preferences](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#team-user-preferences) [List team table](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#list-team-table) [View audit log](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#view-audit-log) - [Audit Log](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/)
- [Create a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/)
- [Edit a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-edit-a-team-user/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#installation-toggle)

- [Manage Team](https://docs.cpanel.net/cpanel/preferences/manage-team/)
[Overview](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#overview) [Team users](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#team-users) [Roles](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#roles) [Services](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#services) [Team user preferences](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#team-user-preferences) [List team table](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#list-team-table) [View audit log](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#view-audit-log) - [Audit Log](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/)
- [Create a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/)
- [Edit a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-edit-a-team-user/)

## Manage Team

![](https://docs.cpanel.net/img/cpanel-icons/team_manager.svg)

_Valid for versions 112 through 116_

#### Version:

#### [110](https://docs.cpanel.net/cpanel/preferences/manage-team/110/)

#### [112](https://docs.cpanel.net/cpanel/preferences/manage-team/112/)

#### [118](https://docs.cpanel.net/cpanel/preferences/manage-team/118/)

#### [130](https://docs.cpanel.net/cpanel/preferences/manage-team/)

Last modified: _2025 June 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Note:

- If the _Manage Team_ feature does **not** appear, ask your hosting provider to enable it in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM » Home » Packages » Feature Manager_).
- This feature is **only** available for [Premier](https://cpanel.net/pricing/), [Autoscale](https://support.cpanel.net/hc/en-us/articles/1500011418781-Autoscale-License-Packages), and [development](https://cpanel.net/developer-license-app/) cPanel licenses.

The _Manage Team_ interface ( _cPanel » Home » Preferences » Manage Team_) allows the team owner to create and manage team users as part of the _Manage Team_ feature.

## Team users

The team owner is the cPanel account that owns the team. A team user is a virtual account that operates under the team owner’s account. A team owner can create the following types of team user accounts:

| User | Description |
| --- | --- |
| Team user **without** [role](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#roles) | A team user without a role can:<br>- Log in to cPanel.<br>- Update their password.<br>- Change the default interface language.<br>- Update their contact information.<br>- Access [services](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#services) that the team owner assigns.<br> A team owner can create an **unlimited** number of team users without roles. |
| Team user **with** [role](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#roles) | A team user with roles can:<br>- Log in to cPanel.<br>- Update their password.<br>- Change the default interface language.<br>- Update their contact information.<br>- Access [services](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#services) that the team owner assigns.<br>- Perform the [role’s](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#roles) associated administrative functions.<br> A team owner can **only** assign roles to seven team users. |

The _Manage Team_ interface displays the number of current team users with roles and the maximum number of team users with roles you can create in the account-quota status box:

![example account-quota status box](https://docs.cpanel.net/img/manage-team-quota-status.png)

The default maximum number of team users **with** roles is seven. Only a `root` user can adjust this value to a lower number. For more information, read our documentation on WHM’s [_Edit a Package_](https://docs.cpanel.net/whm/packages/edit-a-package/) interface ( _WHM » Home » Packages » Edit a Package_).

### Roles

The _Roles_ column displays the roles assigned to the team user. Assigning a team user a role allows the team user to manage various aspects of the cPanel account. You can assign a team member multiple roles. You may **only** assign roles to a maximum of seven team users.

The following chart lists the features available for each team user role in cPanel. These options may vary depending on what features the hosting provider has enabled.

| Role | Description | Interfaces |
| --- | --- | --- |
| _Administrator_ | The administrator role includes **all** privileges of the other team user roles. | All interfaces **except** for the following:<br>- [_Calendars and Contacts Configuration_](https://docs.cpanel.net/webmail/calendars-and-contacts-in-webmail/)<br>- [_Calendars and Contacts Sharing_](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing)<br>- [_Calendars and Contacts Management_](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-management/)<br>- [_User Manager_](https://docs.cpanel.net/cpanel/preferences/user-manager)<br>- [_Manage Team_](https://docs.cpanel.net/cpanel/preferences/manage-team) |
| _Database_ | This role enables a team user to access tools and modify files related to database management for the team owner’s cPanel account. | - [_Backup_](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/)<br>- [_Backup Wizard_](https://docs.cpanel.net/cpanel/files/backup-wizard/)<br>- [_phpMyAdmin_](https://docs.cpanel.net/cpanel/databases/phpmyadmin)<br>- [_Manage My Databases_](https://docs.cpanel.net/cpanel/databases/manage-my-databases)<br>- [_Database Wizard_](https://docs.cpanel.net/cpanel/databases/database-wizard)<br>- [_Remote Database Access_](https://docs.cpanel.net/cpanel/databases/remote-database-access/)<br>- [_PHP PEAR Packages_](https://docs.cpanel.net/cpanel/software/php-pear-packages)<br>- [_MultiPHP Manager_](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)<br>- [_MultiPHP INI Editor_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/)<br>- [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security)<br>- [_Change Language_](https://docs.cpanel.net/cpanel/preferences/change-language)<br>- [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information) |
| _Email_ | This role enables a team user to access tools and modify files related to email administration for the team owner’s cPanel account, such as [email routing](https://docs.cpanel.net/cpanel/email/email-routing/) and [mailing lists](https://docs.cpanel.net/cpanel/email/mailing-lists/). | - All [_Email_](https://docs.cpanel.net/cpanel/email/) interfaces **except** for the [_Global Email Filters_](https://docs.cpanel.net/cpanel/email/global-email-filters/) and [_Email Filters_](https://docs.cpanel.net/cpanel/email/email-filters/) interfaces <br>- [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor)<br>- [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security)<br>- [_Change Language_](https://docs.cpanel.net/cpanel/preferences/change-language)<br>- [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information) |
| _Web_ | This role enables a team user to access tools and modify files related to website functionality, such as [Sitejet Builder](https://www.sitejet.io/en), [Wordpress Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/), and [bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/) usage. | - [_Backup_](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/)<br>- [_Backup Wizard_](https://docs.cpanel.net/cpanel/files/backup-wizard/)<br>- [_WP Toolkit_](https://docs.cpanel.net/cpanel/domains/wp-toolkit-for-cpanel/)<br>- [_Site Publisher_](https://docs.cpanel.net/cpanel/domains/site-publisher)<br>- [_Sitejet Builder_](https://docs.cpanel.net/cpanel/domains/sitejet-builder)<br>- [_Redirects_](https://docs.cpanel.net/cpanel/domains/redirects)<br>- [_Dynamic DNS_](https://docs.cpanel.net/cpanel/domains/dynamic-dns)<br>- [_Bandwidth_](https://docs.cpanel.net/cpanel/metrics/bandwidth)<br>- [_Raw Access_](https://docs.cpanel.net/cpanel/metrics/raw-access)<br>- [_Awstats_](https://docs.cpanel.net/cpanel/metrics/awstats)<br>- [_Analog Stats_](https://docs.cpanel.net/cpanel/metrics/analog-stats)<br>- [_Webalizer_](https://docs.cpanel.net/cpanel/metrics/webalizer)<br>- [_PHP PEAR Packages_](https://docs.cpanel.net/cpanel/software/php-pear-packages)<br>- [_MultiPHP Manager_](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)<br>- [_MultiPHP INI Editor_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel)<br>- [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security)<br>- [_Change Language_](https://docs.cpanel.net/cpanel/preferences/change-language)<br>- [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information) |

### Services

The _Services_ column displays the services assigned to the team user. Team owners can give team users access to the following services:

| Services | Description |
| --- | --- |
| [_Email_](https://docs.cpanel.net/cpanel/email/email-accounts/) | This service gives the team user access to email for the cPanel account. |
| [_FTP_](https://docs.cpanel.net/cpanel/files/ftp-accounts/) | This service gives the team user access to website files for the cPanel account. This service is **only** available if your hosting provider has enabled it. |
| [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk/) | This service allows the team user to manage and manipulate files on your server in multiple types of interfaces (for example, your computer, mobile device, or certain types of software). |

For more information, read our [_Create a Team User_](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/) interface ( _cPanel » Home » Preferences » Manage Team » Create a Team User_) documentation.

## Create a team user

To create a team user, click _Create Team User_. A new interface will appear. In the _Create a Team User_ interface ( _cPanel » Home » Preferences » Manage Team » Create a Team User_) you can create a new team user, and assign the new user [services](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#services) and [roles](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#roles).

For more information, read our [_Create a Team User_](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/) interface documentation.

## List team table

This table lists all of team users associated with your _Manage Team_ account. Click a column’s heading to sort the results of the table by that heading. The table will sort the list in ascending or descending order.

The table contains the following information:

| Item | Description |
| --- | --- |
| _Username_ | The team user’s login username. If the team user is suspended, the _Suspended_ ( ![Suspended warning](https://docs.cpanel.net/img/manage-team-warning-suspended.png) ) warning will appear next to the team user’s username. Click the _More_ (![More](https://docs.cpanel.net/img/columnmore.png)) icon to view more information about a team user account. This will display the [team user’s information](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#team-user-information). |
| [_Roles_](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#roles) | The team user’s assigned role(s) if applicable. |
| _Last Login Date_ | The last time the team user logged in to the account. |
| [_Services_](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#services-for-team-users) | The services available to the team user. |
| [_Actions_](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#actions) | The actions available to manage the team user. |

#### Team user information

| Item | Description |
| --- | --- |
| _Restriction Information_ | If the team user is suspended, the interface will display the date of the suspension and the reason for the suspension. If the team user is set to expire on a specific date, the interface will display the date of the expiration and the reason for the expiration. If the team owner does not provide a reason for suspension or expiration, these fields will be blank. |
| _Account Information_ | The team user’s login username, relevant notes about the team user, the last login date, and the creation date of the account. The interface will display the time and date according to the team owner’s [locale](https://docs.cpanel.net/knowledge-base/cpanel-product/how-we-determine-a-browser-locale/). |
| _Team Information_ | The roles assigned to the team user. |
| _Security Information_ | The contact email address for the team user. |

#### Actions

Each team user has the following actions available:

| Actions | Description |
| --- | --- |
| _Edit User_ | To edit an existing team user, click _Edit User_ in the _Actions_ section. A new interface will appear. A team owner can edit details such as password settings and [roles](https://docs.cpanel.net/cpanel/preferences/manage-team/112/#roles) for a team user. <br>For more information, read our [_Edit a Team User_](https://docs.cpanel.net/cpanel/preferences/manage-team-edit-a-team-user/) documentation. |
| _Suspend_ | To block a user from accessing the account, the team owner can **suspend** the team user.<br>Warning:<br>- Suspension will prevent that user from accessing anything from within the cPanel interface.<br>- You **cannot** change the password for a suspended team user.<br>- Suspended users **will count** towards the maximum allowed accounts for _Manage Team_ if they have a role assigned.<br>- To suspend a team user, click _Suspend_ in the _Actions_ section.<br>- To remove a team user from suspension, click _Unsuspend_ in the _Actions_ section. |
| _Delete_ | Deleting a team user will remove that user from the team. Deleted users **will not count** against the maximum number of accounts for _Manage Team_.<br>Warning:<br>You **cannot** undo this action.<br> To delete a team user, perform the following steps:<br>1. Locate the team user in the list and click _Delete_. A confirmation window will appear.<br>2. To confirm, click _Delete_. |

## View audit log

Note:

To view the _Audit Log_, your system administrator must select the _Enable cPanel API Log_ setting in the [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#logging) interface ( _WHM » Home » Server Configuration » Tweak Settings » Logging_).

The _Audit Log_ feature allows team owners to track team user actions that use cPanel’s API. The audit log table contains the following information:

| Item | Description |
| --- | --- |
| _Timestamp_ | The date and time when the user made the API call. |
| _Called By_ | The cPanel account or team user’s username. |
| _API Version_ | The version of the API used. |
| _Call_ | The API call made by the user. |
| _Origin_ | The API call’s origin in either the terminal or the user interface. |

For more information about how cPanel’s audit log, read our [_Audit Log_](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/) documentation.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×