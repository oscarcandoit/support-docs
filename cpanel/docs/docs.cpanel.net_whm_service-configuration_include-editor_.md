---
url: "https://docs.cpanel.net/whm/service-configuration/include-editor/"
title: "Include Editor | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/include-editor/#main-content)

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
4. Include Editor


[whmui](https://docs.cpanel.net/tags/whmui/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/include-editor/#overview)

* * *

[Edit the Apache configuration file](https://docs.cpanel.net/whm/service-configuration/include-editor/#edit-the-apache-configuration-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/include-editor/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/include-editor/#overview)

* * *

[Edit the Apache configuration file](https://docs.cpanel.net/whm/service-configuration/include-editor/#edit-the-apache-configuration-file)

* * *

## Include Editor

![](https://docs.cpanel.net/img/whm-icons/include_editor.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/service-configuration/include-editor/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to add other configuration files to your Apache configuration file (`httpd.conf`) through Apache’s `Include` directive. When you add other configuration files to existing configuration files, the system introduces new functionality.

Warning:

Any changes that you make to the httpd.conf file can affect the default Apache configurations globally or between virtual hosts.


## Edit the Apache configuration file

To add content to your Apache configuration file, perform the following steps:

1. Select one of the following options:
   - _Pre Main Include_ — Inserts your content at the beginning of the `httpd.conf` file before the main configuration section. Use this option if you do not wish to overwrite any part of the `httpd.conf` file.
   - _Pre VirtualHost Include_ — Inserts your content in the `httpd.conf` file before the first VirtualHost entry. Use this option to modify only a part of the `httpd.conf` file before the system configures virtual hosts.
   - _Post VirtualHost Include_ — Inserts your content in the `httpd.conf` file after the last VirtualHost entry. Use this option to permanently modify a piece of the `httpd.conf` file.
2. Use the _Select an Apache Version_ menu to select whether you wish to apply your `Include` content to all versions of Apache, or only to your current version.

   - Select the appropriate version number for the system to overwrite your `Include` content when Apache updates.





     Note:




     Use this option if you are unsure whether a future version of Apache will support your Include content.


   - _Select All Versions_ — Your `Include` content will apply to all of the future versions of Apache.
3. After you select a version, a text box will appear. Enter your `Include` content in the available text box and click _Update_.

   - If you specify a directory in your `Include` content, the systems scan the directory. If the scan finds any configuration files, the system includes that directory in the affected files. For example, if you enter `Include /etc/example.conf` or `Include /etc/example/` in the text box, the system includes those specific files in the directory.
4. Click _Update_.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Global Configuration](https://docs.cpanel.net/whm/service-configuration/global-configuration/)
- [Log Rotation](https://docs.cpanel.net/whm/service-configuration/log-rotation/)
- [Memory Usage Restrictions](https://docs.cpanel.net/whm/service-configuration/memory-usage-restrictions/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×