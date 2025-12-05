---
url: "https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/"
title: "MultiPHP Manager for WHM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/#main-content)

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
4. MultiPHP Manager for WHM


[whmui](https://docs.cpanel.net/tags/whmui/) [phphandlers](https://docs.cpanel.net/tags/phphandlers/) [php](https://docs.cpanel.net/tags/php/) [fpm](https://docs.cpanel.net/tags/fpm/)

#### Table of Contents

- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
[Overview](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/#overview) [System Settings tab](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/#system-settings-tab) [User Domain Settings tab](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/#user-domain-settings-tab) - [System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/#installation-toggle)

- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
[Overview](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/#overview) [System Settings tab](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/#system-settings-tab) [User Domain Settings tab](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/#user-domain-settings-tab) - [System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [User Domain Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/)

## MultiPHP Manager for WHM

![](https://docs.cpanel.net/img/whm-icons/multiphp_manager.svg)

_Valid for versions 98 through the latest version_

#### Version:

#### [98](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)

Last modified: _2025 March 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to easily manage the PHP and PHP FastCGI Process Manager (PHP-FPM) configurations of your system and your cPanel accounts.

Important:

If an active LiteSpeed Web Server installation exists on your server, you **cannot** edit these settings. The system will set your PHP handler settings to [`lsphp`](https://docs.cpanel.net/ea4/php/easyapache4-and-the-ea-php-cli-package/#what-is-lsphp).

Note:

To remove the CloudLinux™ promotions, log in to your [Manage2](https://manage2.cpanel.net/) account and navigate to the [_Update Company Information_](https://docs.cpanel.net/manage2/company/update-company-information/) section ( _Manage2 » Company » Update Company Information_). Then, select _Disabled_ next to the _Purchase CloudLinux Url_. You can **only** disable this option if you possess a Partner account.

## System Settings tab

The [_System Settings_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/) tab contains **global** PHP and PHP-FPM settings. Changes to these settings apply to **all** new accounts’ PHP and PHP-FPM configurations, but will **not** change existing accounts’ configurations **unless** you set those accounts to [inherit](https://docs.cpanel.net/ea4/php/php-inheritance/) global settings.

## User Domain Settings tab

The [_User Domain Settings_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-user-domain-settings/) tab contains **domain-specific** PHP and PHP-FPM settings. Changes to these settings apply to specific domains.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×