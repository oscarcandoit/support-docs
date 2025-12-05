---
url: "https://docs.cpanel.net/whm/software/system-update/"
title: "System Update | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/software/system-update/#main-content)

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
3. [Software](https://docs.cpanel.net/whm/software/)
4. System Update


[updates](https://docs.cpanel.net/tags/updates/) [server](https://docs.cpanel.net/tags/server/) [versions](https://docs.cpanel.net/tags/versions/) [rpms](https://docs.cpanel.net/tags/rpms/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/software/system-update/#overview)

* * *

[System Update](https://docs.cpanel.net/whm/software/system-update/#system-update)

* * *

[Update a single package](https://docs.cpanel.net/whm/software/system-update/#update-a-single-package)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/software/system-update/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/software/system-update/#overview)

* * *

[System Update](https://docs.cpanel.net/whm/software/system-update/#system-update)

* * *

[Update a single package](https://docs.cpanel.net/whm/software/system-update/#update-a-single-package)

* * *

## System Update

![](https://docs.cpanel.net/img/whm-icons/system_update.svg)

_Valid for versions 98 through the latest version_

#### Version:

#### [98](https://docs.cpanel.net/whm/software/system-update/)

Last modified: _2024 October 24_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Use the _System Update_ interface to update **all** of your server’s packages. For more information about packages, visit the [RPM website](http://rpm.org/).

## System Update

To update **all** of your system’s packages, perform the following steps:

1. Select the _Include kernel packages_ checkbox to update your system’s kernel packages. When you update your server’s kernel packages, the server may require a reboot to complete the upgrade.

2. Click _Proceed_. All RPM packages will update.


## Update a single package

To update a single package **without** updating all others, use the [`package_manager_submit_actions`](https://api.docs.cpanel.net/openapi/whm/operation/package_manager_submit_actions/) WHM API 1 function.

#### Additional Documentation

* * *

- [Change Log](https://docs.cpanel.net/whm/cpanel/change-log/)
- [Install Distro Packages](https://docs.cpanel.net/whm/software/install-distro-packages/)
- [Rebuild RPM Database](https://docs.cpanel.net/whm/software/rebuild-rpm-database/)
- [Update Preferences](https://docs.cpanel.net/whm/server-configuration/update-preferences/)
- [Update Server Software](https://docs.cpanel.net/whm/software/update-server-software/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×