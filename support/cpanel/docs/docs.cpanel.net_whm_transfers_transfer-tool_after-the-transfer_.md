---
url: "https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/"
title: "Transfer Tool — After The Transfer | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/#main-content)

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
3. [Transfers](https://docs.cpanel.net/whm/transfers/)
4. Transfer Tool — After The Transfer


[whmui](https://docs.cpanel.net/tags/whmui/) [transfers](https://docs.cpanel.net/tags/transfers/)

#### Table of Contents

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
- [Prepare The Source Server](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/)
- [Select What to Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/)
- [The Transfer Process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/)
- [After The Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/)
[Overview](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/#overview) [Restore the PHP-FPM .yaml configuration file](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/#restore-the-php-fpm--yaml-configuration-file) - [Only Transfer IP Address](https://docs.cpanel.net/whm/transfers/transfer-tool/only-transfer-ip-address/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/#installation-toggle)

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
- [Prepare The Source Server](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/)
- [Select What to Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/)
- [The Transfer Process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/)
- [After The Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/)
[Overview](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/#overview) [Restore the PHP-FPM .yaml configuration file](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/#restore-the-php-fpm--yaml-configuration-file) - [Only Transfer IP Address](https://docs.cpanel.net/whm/transfers/transfer-tool/only-transfer-ip-address/)

## Transfer Tool — After The Transfer

![](https://docs.cpanel.net/img/whm-icons/transfer_tool.svg)

_Valid for versions 124 through the latest version_

#### Version:

#### [124](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/)

Last modified: _2024 October 22_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

After you transfer a cPanel account with the [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool), you must restore some configurations manually.

## Restore the PHP-FPM .yaml configuration file

MultiPHP users’ PHP-FPM settings do **not** transfer. Instead, the system transfers the PHP-FPM `.yaml` configuration file to the `filename.php-fpm.yaml.transferred` file. This file is located in the the `/var/cpanel/userdata/username` directory, where `username` is the cPanel account’s username.

To restore the PHP-FPM `.yaml` configuration file manually, rename the file to the `filename.php-fpm.yaml` file.

```bash
/scripts/php_fpm_config --rebuild
```

The system restores your account’s PHP-FPM `.yaml` configuration file.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×