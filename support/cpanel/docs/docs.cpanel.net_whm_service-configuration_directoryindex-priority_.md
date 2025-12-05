---
url: "https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/"
title: "DirectoryIndex Priority | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/#main-content)

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
3. [Service Configuration](https://docs.cpanel.net/whm/service-configuration/)
4. DirectoryIndex Priority


[files](https://docs.cpanel.net/tags/files/) [whmui](https://docs.cpanel.net/tags/whmui/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/#overview)

* * *

[Add a new filename](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/#add-a-new-filename)

* * *

[Remove a filename](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/#remove-a-filename)

* * *

[Set index page name priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/#set-index-page-name-priority)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/#overview)

* * *

[Add a new filename](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/#add-a-new-filename)

* * *

[Remove a filename](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/#remove-a-filename)

* * *

[Set index page name priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/#set-index-page-name-priority)

* * *

## DirectoryIndex Priority

![](https://docs.cpanel.net/img/whm-icons/directoryindex_priority.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Visitors see the index page by default when they access a directory (for example, `index.html`). The _DirectoryIndex Priority_ interface allows you to specify the filenames that Apache recognizes and displays as index pages. You can also set the priority in which Apache selects an index page if more than one of these filenames appears in a directory.

To perform these actions, the system modifies the `/usr/local/apache/conf/httpd.conf` file. For example, if you configure the system to display the `index.php` file, the system adds the following line:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```bash<br>DirectoryIndex index.php<br>``` |

## Add a new filename

To add a new filename to the list of index pages that Apache recognizes, perform the following steps:

1. Click _Add_.
2. Enter the name of the index file that you wish to add (for example, `index.nick`).
3. Click _OK_.
4. Click _Save_.
5. Click _Rebuild Configuration and Restart Apache to configure Apache_ to use the new DirectoryIndex settings.

   - To restart Apache later, use WHM’s _HTTP Server (Apache)_ interface ( _WHM » Home » Restart Services » HTTP Server (Apache)_) or run the `/scripts/restartsrv_httpd` command via SSH as the `root` user.

## Remove a filename

To remove filenames from the list of index pages that Apache recognizes, perform the following steps:

1. In the available menu, select the index file or files that you wish to remove.
2. Click _Remove_.
3. Click _Save_.
4. Click _Rebuild Configuration and Restart Apache_ to configure Apache to use the new DirectoryIndex settings.

   - To restart Apache later, use WHM’s _HTTP Server (Apache)_ interface ( _WHM » Home » Restart Services » HTTP Server (Apache)_) or run the `/scripts/restartsrv_httpd` command via SSH as the `root` user.

## Set index page name priority

Filenames that the interface displays higher in the menu have a higher priority than names that are lower in the menu.

To reorder the priority of index page names that Apache recognizes, perform the following steps:

1. In the available menu, select the index file that you wish to move up or down in priority.
2. Click _Move Up_ or _Move Down_ to change the filename’s order.

   - For example, if you want `index.html` to appear instead of `index.php`, select `index.html` from the menu and click _Move Up_ until `index.html` is higher in the menu than the `index.php` entry.
3. Click _Save_.
4. Click _Rebuild Configuration and Restart Apache_ to configure Apache to use the new DirectoryIndex settings.

   - To restart Apache later, use WHM’s _HTTP Server (Apache)_ interface ( _WHM » Home » Restart Services » HTTP Server (Apache)_) or run the `/scripts/restartsrv_httpd` command via SSH as the `root` user.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Global Configuration](https://docs.cpanel.net/whm/service-configuration/global-configuration/)
- [Include Editor](https://docs.cpanel.net/whm/service-configuration/include-editor/)
- [Log Rotation](https://docs.cpanel.net/whm/service-configuration/log-rotation/)
- [Memory Usage Restrictions](https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×