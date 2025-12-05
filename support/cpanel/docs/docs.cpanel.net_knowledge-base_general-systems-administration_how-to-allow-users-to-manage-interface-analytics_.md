---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/"
title: "How to Allow Users to Manage Interface Analytics | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. How to Allow Users to Manage Interface Analytics


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [analytics](https://docs.cpanel.net/tags/analytics/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/#overview)

* * *

[Effects of enabling user management](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/#effects-of-enabling-user-management)

* * *

[Allow users to manage Interface Analytics](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/#allow-users-to-manage-interface-analytics)

* * *

[Check whether users can manage Interface Analytics](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/#check-whether-users-can-manage-interface-analytics)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/#overview)

* * *

[Effects of enabling user management](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/#effects-of-enabling-user-management)

* * *

[Allow users to manage Interface Analytics](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/#allow-users-to-manage-interface-analytics)

* * *

[Check whether users can manage Interface Analytics](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/#check-whether-users-can-manage-interface-analytics)

* * *

## How to Allow Users to Manage Interface Analytics

Last modified: _2025 October 1_

* * *

## Overview

This document describes how to use the `/var/cpanel/panel.ini` file to allow cPanel users to manage [Interface Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics).

Note:

- The process in this document is only valid for cPanel & WHM version 110 and versions 126 and later.
- If cPanel cannot retrieve a user’s analytics configuration, it will automatically allow users to manage their Interface Analytics.

Interface Analytics allows WebPros International, LLC to [collect data](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#interface-analytics) about how users navigate cPanel, WHM, and Webmail from within the interface.

## Effects of enabling user management

The table provides a detailed comparison of cPanel & WHM interface and function availability based on whether users can [manage Interface Analytics](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/#allow-users-to-manage-interface-analytics):

| Component | Users can manage Interface Analytics | Users cannot manage Interface Analytics |
| --- | --- | --- |
| WHM’s [_Configure cPanel Analytics_](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-analytics/) interface ( _WHM » Home » Server Configuration » Configure cPanel Analytics_) | ![a checkmark icon](https://docs.cpanel.net/img/green-check-icon.png) | ![a X icon](https://docs.cpanel.net/img/red-x.png) |
| The cPanel [_Account Preferences_](https://docs.cpanel.net/cpanel/preferences/account-preferences/#consent-and-privacy) interface’s _Consent and Privacy_ section ( _cPanel » Home » Preferences » Account Preferences_) | ![a checkmark icon](https://docs.cpanel.net/img/green-check-icon.png) | ![a X icon](https://docs.cpanel.net/img/red-x.png) |
| The Webmail interface’s [_Consent and Privacy_](https://docs.cpanel.net/webmail/the-webmail-interface/#cpanel-analytics) form | ![a checkmark icon](https://docs.cpanel.net/img/green-check-icon.png) | ![a X icon](https://docs.cpanel.net/img/red-x.png) |
| WHM’s [`participate_in_analytics`](https://api.docs.cpanel.net/openapi/whm/operation/participate_in_analytics/) function | Affects Interface Analytics. | Does **not** affect Interface Analytics. |

If users can manage Interface Analytics, the server owner **and** individual users **must** enable the plugin before it begins to collect data.

These selections are made at the server and account levels as follows:

| Server level | Account level | Interface Analytics |
| --- | --- | --- |
| Yes | Yes | Enabled |
| Yes | No | Disabled |
| No | Yes | Disabled |
| No | No | Disabled |

For more information about cPanel Analytics, read our [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/) documentation.

## Allow users to manage Interface Analytics

To allow users to manage Interface Analytics, perform the following steps:

1. Navigate to WHM’s [_Terminal_](https://docs.cpanel.net/whm/server-configuration/terminal-in-whm/) interface ( _WHM » Home » Server Configuration » Terminal_).
2. Open the `/var/cpanel/panel.ini` file with your preferred text editor.
3. Set the `analytics_consent.enable` setting’s value to `true`.
4. Save your changes and close the file.

Once users can manage Interface Analytics, they will be able to see Interface Analytics [interface options](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/#effects-of-enabling-user-management), and **must** enable Interface Analytics on both the server and account level for it to collect data.

### Check whether users can manage Interface Analytics

The `analytics_consent.enable` setting tells you whether users can manage Interface Analytics. If the value is `true`, users can manage Interface Analytics. If it is `false`, they cannot. You check whether users can access Interface Analytics interface options with one of the following methods:

- Open the `/var/cpanel/panel.ini` file and review the `analytics_consent.enable` setting’s value.
- Use UAPI’s [`Leika::leika_get_config`](https://api.docs.cpanel.net/openapi/cpanel/operation/leika_get_config/) API.
- Use WHM API 1’s [`leika_get_config`](https://api.docs.cpanel.net/openapi/whm/operation/leika_get_config/) API.

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×