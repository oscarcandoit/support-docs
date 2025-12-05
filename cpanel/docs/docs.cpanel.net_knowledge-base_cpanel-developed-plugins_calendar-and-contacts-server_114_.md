---
url: "https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/"
title: "Calendar and Contacts Server | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#main-content)

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
3. [cPanel Developed Plugins](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/)
4. Calendar and Contacts Server


[calendar](https://docs.cpanel.net/tags/calendar/) [dav](https://docs.cpanel.net/tags/dav/) [webmail](https://docs.cpanel.net/tags/webmail/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#overview)

* * *

[Install the Calendar and Contacts Server plugin](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#install-the-calendar-and-contacts-server-plugin)

* * *

[Uninstall the Calendar and Contacts Server plugin](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#uninstall-the-calendar-and-contacts-server-plugin)

* * *

[Connect the Calendar and Contacts Server plugin to other devices](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#connect-the-calendar-and-contacts-server-plugin-to-other-devices)

* * *

[Z-Push - ActiveSync Support](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#z-push-activesync-support)

* * *

[Requirements for Z-Push - ActiveSync Support](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#requirements-for-z-push-activesync-support)

* * *

[Uninstall the Z-Push - ActiveSync Support plugin](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#uninstall-the-z-push-activesync-support-plugin)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#overview)

* * *

[Install the Calendar and Contacts Server plugin](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#install-the-calendar-and-contacts-server-plugin)

* * *

[Uninstall the Calendar and Contacts Server plugin](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#uninstall-the-calendar-and-contacts-server-plugin)

* * *

[Connect the Calendar and Contacts Server plugin to other devices](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#connect-the-calendar-and-contacts-server-plugin-to-other-devices)

* * *

[Z-Push - ActiveSync Support](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#z-push-activesync-support)

* * *

[Requirements for Z-Push - ActiveSync Support](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#requirements-for-z-push-activesync-support)

* * *

[Uninstall the Z-Push - ActiveSync Support plugin](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/#uninstall-the-z-push-activesync-support-plugin)

* * *

## Calendar and Contacts Server

_Valid for version 114_

#### Version:

#### [108](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/108/)

#### [112](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/112/)

#### [114](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/114/)

#### [116](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/116/)

#### [118](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)

Last modified: _2024 September 24_

* * *

## Overview

The Calendar and Contacts Server (CCS) plugin allows your cPanel users to manage their CalDAV (calendar) and CardDAV (contacts) accounts from your cPanel & WHM server. When you install this plugin, CCS becomes the main calendar and contacts tool.

Warning:

- This plugin does **not** support the [Rocky Linux™ 9](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/) or [AlmaLinux OS 9](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/) operating systems.
- This plugin **requires** [PostgreSQL®](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#postgresql). If you remove PostgreSQL, you will also remove CCS.
- If your server resides on a [NAT-configured network](https://docs.cpanel.net/knowledge-base/general-systems-administration/1-1-nat/), it **must** support [loopback NAT](https://en.wikipedia.org/wiki/Network_address_translation#NAT_loopback). CCS **must** be able to connect to the server’s public IP address.

## Install the Calendar and Contacts Server plugin

To install the CCS plugin, perform the following steps:

1. Navigate to WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins/) interface ( _WHM » Home » cPanel » Manage Plugins_).
2. Click _Install_ _“Calendar and Contacts Server”_. A success message will appear when the installation process completes.

## Uninstall the Calendar and Contacts Server plugin

To uninstall the CCS plugin, perform the following steps:

1. Navigate to WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins) interface ( _WHM » Home » cPanel » Manage Plugins_).
2. Click _Uninstall “Calendar and Contacts Server”_. A success message will appear when the uninstallation process completes.

## Connect the Calendar and Contacts Server plugin to other devices

You can connect CCS to [Roundcube](https://www.roundcube.net/) or other applications. For more information, read our [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/) and [_Calendar Delegation_](https://docs.cpanel.net/cpanel/email/calendar-delegation/) documentation. As a system administrator, you can also directly access CCS data through port `2080`.

## Z-Push - ActiveSync Support

We offer Exchange ActiveSync (EAS) support for CCS through the bundled _Z-Push - ActiveSync Support_ plugin. [Z-Push](https://z-push.org/) is an implementation of the EAS protocol. It allows synchronization of calendars, contacts, and email on Android™ devices. This additional plugin automatically installs when you install the CCS plugin. You will only see this plugin if you have installed CCS.

Once you install this plugin, your cPanel users can set up their calendars, contacts, and email on their Android devices using EAS. For more information, read our [How to Sync Calendars, Contacts, and Email on Android™ Devices](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices) documentation.

The logs for the _Z-Push - ActiveSync Support_ plugin rotate on a regular basis if they grow excessively large. For more information about Z-Push log files, read our [The cPanel & WHM Log Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/) documentation.

If you do not need ActiveSync support for CCS, you can uninstall Z-Push while leaving CCS installed.

### Requirements for Z-Push - ActiveSync Support

- Z-Push **requires** the CCS plugin to function.
- You **must** use a feature list with the _Calendars and Contacts_ and _Exchange ActiveSync_ features enabled. Use WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_) to add these to a feature list.
- This plugin **requires** a minimum of 7 GB of RAM and 4 CPU cores.
- This plugin does **not** support [_Calendar Delegation_](https://docs.cpanel.net/cpanel/email/calendar-delegation/).

### Uninstall the Z-Push - ActiveSync Support plugin

To uninstall the _Z-Push - ActiveSync Support_ plugin, perform the following steps:

1. Navigate to WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins) interface ( _WHM » Home » cPanel » Manage Plugins_).
2. Click _Uninstall “Z-Push - ActiveSync Support”_. A success message will appear when the uninstallation process completes.

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