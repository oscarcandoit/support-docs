---
url: "https://docs.cpanel.net/whm/server-configuration/server-profile/"
title: "Server Profile | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/server-profile/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Server Configuration](https://docs.cpanel.net/whm/server-configuration/)
4. Server Profile


[whmui](https://docs.cpanel.net/tags/whmui/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-configuration/server-profile/#overview)

* * *

[The Server Profile interface](https://docs.cpanel.net/whm/server-configuration/server-profile/#the-server-profile-interface)

* * *

[Select Profile](https://docs.cpanel.net/whm/server-configuration/server-profile/#select-profile)

* * *

[Select Options](https://docs.cpanel.net/whm/server-configuration/server-profile/#select-options)

* * *

[Review Changes](https://docs.cpanel.net/whm/server-configuration/server-profile/#review-changes)

* * *

[Activating Profile](https://docs.cpanel.net/whm/server-configuration/server-profile/#activating-profile)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/server-profile/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-configuration/server-profile/#overview)

* * *

[The Server Profile interface](https://docs.cpanel.net/whm/server-configuration/server-profile/#the-server-profile-interface)

* * *

[Select Profile](https://docs.cpanel.net/whm/server-configuration/server-profile/#select-profile)

* * *

[Select Options](https://docs.cpanel.net/whm/server-configuration/server-profile/#select-options)

* * *

[Review Changes](https://docs.cpanel.net/whm/server-configuration/server-profile/#review-changes)

* * *

[Activating Profile](https://docs.cpanel.net/whm/server-configuration/server-profile/#activating-profile)

* * *

## Server Profile

![](https://docs.cpanel.net/img/whm-icons/server_profile.svg)

_Valid for versions 96 through the latest version_

#### Version:

#### [96](https://docs.cpanel.net/whm/server-configuration/server-profile/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Server Profile_ interface allows you to select a server’s profile, based on the service that you want your server to provide. This allows you to manage specific services to reduce the resource load of a server. You can also configure optional roles for certain profiles.

Note:

This interface **only** displays for users with `root`-level privileges.

## The Server Profile interface

This interface lets you configure your server profile. The system will guide you through the process.

Important:

- Your cPanel license may limit some of the functions in this interface.

- Your cPanel license determines the available server profiles. If you want to change a server’s profile, you **must** upgrade your license.


### Select Profile

Use this interface to select a server profile. The star icon (![Default](https://docs.cpanel.net/img/default.png)) represents the server’s current profile. You can click the info icon (![Info](https://docs.cpanel.net/img/info.png)) by a profile’s description to display which roles that profile affects.

Important:

- Some profile settings **disable** features in the WHM and cPanel interfaces. For more information about each profile and role, read our [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles) documentation.

- If a server profile enables a service, the system will **also** enable service monitoring. To disable a service’s monitoring, use WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).

- You **must** install PostgreSQL to enable the optional _PostgreSQL_ role.


Select a server profile, then click _Continue_. The [_Select Options_](https://docs.cpanel.net/whm/server-configuration/server-profile/#select-options) interface will appear.

You can select from the following server profiles:

#### Standard

This profile provides all services and has access to all cPanel features.

- **Enabled roles** — All.

- **Disabled roles** — None.

- **Optional roles** — None.


#### DNS

This profile only provides services and cPanel features that allow the system to serve Domain Name System (DNS) zones.

- **Enabled roles** — _DNS_, _Local Mail_, _Send Mail_

- **Disabled roles** — _Calendars and Contacts_, _File Storage_, _FTP_, _PostgreSQL_, _Receive Mail_, _Spam Filter_, _Web Disk_, _Webmail_, _Web Server_

- **Optional roles** — _MySQL/MariaDB_, _Relay Mail_


#### Mail

Important:

- Do **not** make changes directly to userdata files on a linked mail child node server. Any change could cause the servers to become out of sync, which we do **not** support.

- You **must** manually update system settings on a linked mail child node (for example, Tweak Settings or Exim configuration settings).

- You **cannot** enable IPv6 on a cPanel account if you want to distribute that account to a mail node. For more information on mail child node restrictions, read our [cPanel Linked Nodes Guide](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#child-node-restrictions) documentation.


This profile that only provides services and cPanel features that allow the system to serve mail.

- **Enabled roles** — _Calendars and Contacts_, _Local Mail_, _Receive Mail_, _Relay Mail_, _Send Mail_, _Webmail_

- **Disabled roles** — _File Storage_, _FTP_, _Web Disk_, _Web Server_

- **Optional roles** — _DNS_, _MySQL/MariaDB_, _PostgreSQL_, _Spam Filter_


#### Database

Important:

This profile is experimental.

This profile only provides services and cPanel features that allow the system to serve databases.

- **Enabled roles** — _MySQL/MariaDB_, _Local Mail_, _Send Mail_

- **Disabled roles** — _Calendars and Contacts_, _DNS_, _File Storage_, _FTP_, _Receive Mail_, _Relay Mail_, _Spam Filter_, _Web Disk_, _Webmail_, _Web Server_

- **Optional roles** — _PostgreSQL_


## Select Options

Note:

- This interface is **only** available for the _Database_, _DNS_, and _Mail_ profiles.

- If you select the _Database_ profile, the server **must** have PostgreSQL® installed to view this interface.


This interface lets you select optional server roles. Set the toggle to enable or disable the roles you want, then click _Continue_. The _Review Changes_ interface will appear.

## Review Changes

This interface displays the server profile’s current role configuration. Use it to review the status of each role, whether enabled, disabled, or unaffected by your changes.

Note:

The system will **not** let you proceed if there is no change in the profile’s configuration. You **must** select a new configuration to proceed.

Click _Set Profile_ to activate the profile. The _Activating Profile_ interface will appear. To change your profile configuration, click _Cancel_ to return to the previous interface.

## Activating Profile

The _Activating Profile_ interface activates the profile. Click _Show Details_ to display the activation log in real-time. You can also use the system directory link provided in the interface to view the log.

Note:

The profile activation process does **not** terminate if you close the browser window.

The system notifies you when it completes the profile activation. Click _Go Back_ to return to the _Select Profile_ interface.

#### Additional Documentation

* * *

- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Change Root Password](https://docs.cpanel.net/whm/server-configuration/change-root-password/)
- [Link Server Nodes](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/)
- [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×