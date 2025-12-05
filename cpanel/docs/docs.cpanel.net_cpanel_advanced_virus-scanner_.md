---
url: "https://docs.cpanel.net/cpanel/advanced/virus-scanner/"
title: "Virus Scanner | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/advanced/virus-scanner/#main-content)

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
3. [Advanced](https://docs.cpanel.net/cpanel/advanced/)
4. Virus Scanner


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [security](https://docs.cpanel.net/tags/security/) [clamav](https://docs.cpanel.net/tags/clamav/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/advanced/virus-scanner/#overview)

* * *

[Scan a service](https://docs.cpanel.net/cpanel/advanced/virus-scanner/#scan-a-service)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/advanced/virus-scanner/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/advanced/virus-scanner/#overview)

* * *

[Scan a service](https://docs.cpanel.net/cpanel/advanced/virus-scanner/#scan-a-service)

* * *

## Virus Scanner

![](https://docs.cpanel.net/img/cpanel-icons/clam_av.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/advanced/virus-scanner/)

Last modified: _2024 May 16_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _Virus Scanner_ interface scans your cPanel account for security threats. If ClamAV® Virus Scanner identifies a security threat, the system prompts you to perform an action.

Important:

Hosting providers **must** install the following services for this interface to appear:

- The _ClamAV Scanner_ plugin in WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins) interface ( _WHM » Home » cPanel » Manage Plugins_).
- The _Exim Mail Server_ service on the server in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).

## Scan a service

To begin a scan on your account, perform the following steps:

1. Select the service to scan.
   - _Scan Mail_ — This setting scans all of your account’s mail folders.
   - _Scan Entire Home Directory_ — This setting scans your account’s home directory.
   - _Scan Public FTP Space_ — This setting scans all of the folders that you can publicly access through FTP services.
   - _Scan Public Web Space_ — This setting scans all of the folders that you can publicly access through the web.
2. Click _Scan Now_. During the scan a new interface will appear with the following information:
   - _File_ — This displays the number of files that the system has scanned. It also displays the total number of files to scan.
   - _Data_ — This displays the amount of data that the system has scanned. It also displays the total amount of data to scan.
   - _Scanner Progress_ — This displays the scan’s progress.
   - _Infected Files_ — This lists files in which the scan detects malicious software.

The system may require several minutes to complete the scan. After the system completes the scan, it will return you to the _Virus Scanner_ interface.

#### Additional Documentation

* * *

- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [API Shell for cPanel](https://docs.cpanel.net/cpanel/advanced/api-shell-for-cpanel/)
- [Cron Jobs](https://docs.cpanel.net/cpanel/advanced/cron-jobs/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [Error Pages](https://docs.cpanel.net/cpanel/advanced/error-pages/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×