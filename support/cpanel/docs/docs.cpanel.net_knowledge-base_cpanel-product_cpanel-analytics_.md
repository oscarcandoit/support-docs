---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/"
title: "cPanel Analytics | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#main-content)

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
3. [cPanel Product](https://docs.cpanel.net/knowledge-base/cpanel-product/)
4. cPanel Analytics


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [webmail](https://docs.cpanel.net/tags/webmail/) [analytics](https://docs.cpanel.net/tags/analytics/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#overview)

* * *

[Interface Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#interface-analytics)

* * *

[cPanel & WHM version 110 and versions 126 and later](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#cpanel--whm-version-110-and-versions-126-and-later)

* * *

[cPanel & WHM version 118 and earlier](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#cpanel--whm-version-118-and-earlier)

* * *

[Configuration Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#configuration-analytics)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#overview)

* * *

[Interface Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#interface-analytics)

* * *

[cPanel & WHM version 110 and versions 126 and later](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#cpanel--whm-version-110-and-versions-126-and-later)

* * *

[cPanel & WHM version 118 and earlier](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#cpanel--whm-version-118-and-earlier)

* * *

[Configuration Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#configuration-analytics)

* * *

## cPanel Analytics

Last modified: _2025 September 8_

* * *

## Overview

The cPanel Analytics system contains two features that collect data about how users use the cPanel, Webmail, and WHM products. These features are [Interface Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#interface-analytics) and [Configuration Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics/#configuration-analytics). We use information from these features to improve product interfaces for our users, which improves the user experience.

At WebPros International, LLC, we take your privacy **seriously**. We have taken precautions to ensure that the data we collect is secure and does not contain private, personal, or security information. We retain cPanel Analytics data for 26 months and then destroy it.

Important:

To respect user privacy, we **strongly** recommend that plugin developers do not collect private, personal, or security information.

To learn more about the data we collect, read our [cPanel Analytics - The Data We Use](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/) documentation.

## Interface Analytics

Interface Analytics allows us to collect data about how users navigate cPanel, WHM, and Webmail from within the interface.

Note:

We do **not** track the content that exists on cPanel accounts. Additionally, the system removes URL-query parameters before WebPros International, LLC receives the data.

### cPanel & WHM version 110 and versions 126 and later

In cPanel & WHM version 110 and versions 126 and later, we have removed personal, private, and security information from every step of analytics collection. Unless we cannot retrieve a user’s analytics configuration, we automatically install and enable the Interface Analytics plugin and disable the Interface Analytics interface options.

To learn how to disable the Interface Analytics plugin and reenable Interface Analytics interface options, read our [How to Allow Users to Manage Interface Analytics](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/) documentation.

### cPanel & WHM version 118 and earlier

Note:

This information applies to all versions of cPanel & WHM version 118 and earlier, except cPanel & WHM version 110.

Interface Analytics for individual users, besides the `root` user on trial licenses, is **optional**.

We collect behavioral data only with the consent of individual users.

We automatically install the Interface Analytics plugin by default but do **not** enable it. The server owner **and** individual users **must** enable the Interface Analytics plugin before it begins to collect data.
Data collection depends on the selections made at the server and account levels as follows:

| Server level | Account level | Interface Analytics |
| --- | --- | --- |
| Yes | Yes | Enabled |
| Yes | No | Disabled |
| No | Yes | Disabled |
| No | No | Disabled |

#### Enable or disable Interface Analytics at the server level

Note:

You can **only** perform these steps if you allow users to manage Interface Analytics. To learn how to disable the Interface Analytics plugin and reenable Interface Analytics interface options, read our [How to Allow Users to Manage Interface Analytics](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-allow-users-to-manage-interface-analytics/) documentation.

To enable or disable Interface Analytics at the server level, use the [`participate_in_analytics`](https://api.docs.cpanel.net/openapi/whm/operation/participate_in_analytics/) API function or WHM’s [_Configure cPanel Analytics_](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-analytics/) interface ( _WHM » Home » Server Configuration » Configure cPanel Analytics_).

#### Enable or disable Interface Analytics at the account level

Individual users can enable or disable Interface Analytics at the account level at any time. Interface Analytics also **doesn’t** collect data about specific accounts’ use until that user enables data collection at the account level.

To enable or disable cPanel Analytics’ Interface Analytics for the current account, perform the following steps:

1. Navigate to cPanel’s [_Account Preferences_](https://docs.cpanel.net/cpanel/preferences/account-preferences/) interface ( _cPanel » Home » Preferences » Account Preferences_).
2. To enable Interface Analytics, select the _Allow Tracking_ checkbox. To disable it, deselect the checkbox.
3. Click _Save Changes_.

Note:

- If a user does **not** set the account type and/or analytics consent settings, the system will continue to prompt the user for them after login until the user saves the settings.
- Under data protection laws, individuals may request that the holder of their personal data delete or provide access to that data. We call these requests Data Subject Access Requests (DSAR). Use your _User Analytics ID_ when filing a DSAR.
For more information, read our [Privacy Policy](https://cpanel.net/privacy-policy/).

## Configuration Analytics

Important:

- Configuration Analytics participation is **required**. We have classed this data as operational data that WebPros International, LLC requires in order to make vital business decisions.
- Configuration Analytics does **not** enable Interface Analytics. It does **not** change your selection for Interface Analytics.

Configuration Analytics gathers your server’s update logs and sends them to WebPros International, LLC for analysis. Whenever the `/usr/local/cpanel/scripts/upcp` script runs, it creates a tarball file to send. This tarball contains the update log data that the system stored since your last update.

- The [`gather_update_log_stats`](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/) script sends this data.
- For more information, read our [cPanel Analytics - The Data We Use](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/) documentation.

#### Additional Documentation

* * *

- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/)
- [The export\_horde\_calendars\_to\_ics Script](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/)
- [The export\_horde\_contacts\_to\_vcf Script](https://docs.cpanel.net/whm/scripts/the-export_horde_contacts_to_vcf-script/)
- [The gather\_update\_log\_stats Script](https://docs.cpanel.net/whm/scripts/the-gather_update_log_stats-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×