---
url: "https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/110/"
title: "Manage Team — Audit Log | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/110/#main-content)

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
4. Manage Team — Audit Log


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [logs](https://docs.cpanel.net/tags/logs/) [manageteam](https://docs.cpanel.net/tags/manageteam/)

#### Table of Contents

- [Manage Team](https://docs.cpanel.net/cpanel/preferences/manage-team/)
- [Audit Log](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/)
[Overview](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/110/#overview) [Search text box](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/110/#search-text-box) [Audit Log table](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/110/#audit-log-table) - [Create a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/)
- [Edit a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-edit-a-team-user/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/110/#installation-toggle)

- [Manage Team](https://docs.cpanel.net/cpanel/preferences/manage-team/)
- [Audit Log](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/)
[Overview](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/110/#overview) [Search text box](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/110/#search-text-box) [Audit Log table](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/110/#audit-log-table) - [Create a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-create-a-team-user/)
- [Edit a Team User](https://docs.cpanel.net/cpanel/preferences/manage-team-edit-a-team-user/)

## Manage Team — Audit Log

![](https://docs.cpanel.net/img/cpanel-icons/team_manager.svg)

_Valid for version 110_

#### Version:

#### [110](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/110/)

#### [112](https://docs.cpanel.net/cpanel/preferences/manage-team-audit-log/)

Last modified: _2025 March 24_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Experimental:

_Manage Team_ is an experimental feature. We do **not** recommend using this feature in production environments. It is currently under development and is **only** available to a limited number of cPanel & WHM customers. It will be available for testing in future releases. For more information about the development of _Manage Team_, read our [Manage Team roadmap](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap).

Note:

To view the _Audit Log_, your system administrator must set the _Enable cPanel API Log_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#logging) interface ( _WHM » Home » Server Configuration » Tweak Settings » Logging_).

The _Audit Log_ interface allows team owners to track team user actions that use the [cPanel UAPI](https://api.docs.cpanel.net/cpanel/introduction).
It is part of our [_Manage Team_](https://docs.cpanel.net/cpanel/preferences/manage-team) interface ( _cPanel » Home » Preferences » Manage Team_).

This interface shows API function calls made by different team users. Actions that do not use an API are not shown in this interface. For more information about our audit log, read our [cPanel & WHM Log Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/) documentation.

This interface consists of the following elements:

1. The _Search_ text box.
2. The _Audit Log_ table.

## Search text box

The interface contains a _Search_ text box that you can use to search for specific audit log entries. Use the navigation controls to the right of the box to page through the list of entries.

## Audit Log table

The interface contains an audit log table that displays information about the activities of your team users. Click a column’s heading to sort the results of the table by that heading. The table will sort the list in ascending or descending order.

| Item | Description |
| --- | --- |
| _Timestamp_ | The date and time when the user made the API call. |
| _Called By_ | The cPanel account or team user that made the API call. |
| _API Version_ | The version of the API used. |
| _Call_ | The API call made by the user. |
| _Origin_ | The API call’s origin in either the terminal or the user interface. |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×