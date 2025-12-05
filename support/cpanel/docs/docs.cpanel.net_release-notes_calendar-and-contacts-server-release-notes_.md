---
url: "https://docs.cpanel.net/release-notes/calendar-and-contacts-server-release-notes/"
title: "Calendar and Contacts Server Release Notes | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/release-notes/calendar-and-contacts-server-release-notes/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Release Notes](https://docs.cpanel.net/release-notes/)
3. [Additional Release Notes](https://docs.cpanel.net/release-notes/other/)
4. Calendar and Contacts Server Release Notes


[calendar](https://docs.cpanel.net/tags/calendar/) [dav](https://docs.cpanel.net/tags/dav/) [webmail](https://docs.cpanel.net/tags/webmail/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [releasenotes](https://docs.cpanel.net/tags/releasenotes/)

#### Table of Contents

[Calendars and Contacts Server version 3.1](https://docs.cpanel.net/release-notes/calendar-and-contacts-server-release-notes/#calendars-and-contacts-server-version-31)

* * *

[Calendars and Contacts Server version 3.0](https://docs.cpanel.net/release-notes/calendar-and-contacts-server-release-notes/#calendars-and-contacts-server-version-30)

* * *

[Calendar and Contacts Server version 2.0](https://docs.cpanel.net/release-notes/calendar-and-contacts-server-release-notes/#calendar-and-contacts-server-version-20)

* * *

[Calendar and Contacts Server version 1.0](https://docs.cpanel.net/release-notes/calendar-and-contacts-server-release-notes/#calendar-and-contacts-server-version-10)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/release-notes/calendar-and-contacts-server-release-notes/#table-of-contents-toggle)

[Calendars and Contacts Server version 3.1](https://docs.cpanel.net/release-notes/calendar-and-contacts-server-release-notes/#calendars-and-contacts-server-version-31)

* * *

[Calendars and Contacts Server version 3.0](https://docs.cpanel.net/release-notes/calendar-and-contacts-server-release-notes/#calendars-and-contacts-server-version-30)

* * *

[Calendar and Contacts Server version 2.0](https://docs.cpanel.net/release-notes/calendar-and-contacts-server-release-notes/#calendar-and-contacts-server-version-20)

* * *

[Calendar and Contacts Server version 1.0](https://docs.cpanel.net/release-notes/calendar-and-contacts-server-release-notes/#calendar-and-contacts-server-version-10)

* * *

## Calendar and Contacts Server Release Notes

Last modified: _2024 March 21_

* * *

Warning:

We **removed** the [Calendar and Contacts Server (CCS) plugin](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#deprecated-and-removed-features) in cPanel & WHM version 120. cPanel & WHM version 120 and later use the [`cpdavd` service](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/) for calendars and contacts management.

## Calendars and Contacts Server version 3.1

_Released April 2020_

- We added the ability for WHM users to monitor the [Calendar and Contacts Server (CCS) plugin](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server). CCS is now part of the `chksrvd` daemon and WHM users can monitor it through WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).

## Calendars and Contacts Server version 3.0

_Released December 2019_

- In Calendar and Contacts Server (CCS) version 3.0, we updated the configuration so that the CCS plugin now listens on ports `2079` and `2080`. These ports previously served [Horde’s](https://docs.cpanel.net/webmail/webmail-clients) calendar interface over the `cpdavd` daemon.
- New installations of the Calendar and Contacts Server 3.0 will perform the following imports. CCS will import all of the cPanel and Webmail users’ data.
  - A one-time import of calendar and event data from [Horde’s](https://docs.cpanel.net/webmail/webmail-clients) calendaring system.
  - A one-time import of contact data from [Horde’s](https://docs.cpanel.net/webmail/webmail-clients) contacts system.






    Note:





    CCS will perform this import **only** on new installations. Updates to CCS will **not** perform this action.
- CCS calendar information now appears in [Roundcube’s](https://docs.cpanel.net/webmail/webmail-clients) calendar.

## Calendar and Contacts Server version 2.0

_Released June 2019_

In Calendar and Contacts Server version 2.0, we updated the plugin to support [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication).

## Calendar and Contacts Server version 1.0

_Released March 2019_

In cPanel & WHM version 80, we released the [Calendar and Contacts Server plugin](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/). This plugin allows you to connect your CalDAV and CardDAV accounts to your cPanel accounts.

- CalDAV allows users to access calendar data. Users can also schedule events with internal and external users.
- CardDAV allows users to access and share contact data.

Important:

The CCS plugin is compatible CentOS 7, CloudLinux 7, and Red Hat® Enterprise Linux® 7. The plugin is not compatible with CentOS 6, CloudLinux 6, and Red Hat® Enterprise Linux® 6.

When you install this plugin, the Calendar and Contacts Server becomes the main calendar and contacts tool for your server. You can install the Calendar and Contacts Server plugin from WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins) interface ( _WHM » Home » cPanel » Manage Plugins_). Your server retains the information available in the calendar and contacts tool in [Horde’s](https://docs.cpanel.net/webmail/webmail-clients) _Calendar_ section. However, users will no longer be able to view the data on their Horde calendars or address book.

After you install the plugin, you can access the calendar’s web interface from port `8443`. For more information, read our [Calendar and Contacts Server Plugin](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/) documentation.

#### Additional Documentation

* * *

- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Calendar Delegation](https://docs.cpanel.net/cpanel/email/calendar-delegation/)
- [Calendars and Contacts Management](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-management/)
- [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/)
- [The ccs-check Script](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×