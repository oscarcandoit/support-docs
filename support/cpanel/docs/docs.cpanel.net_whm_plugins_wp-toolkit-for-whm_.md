---
url: "https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/"
title: "WP Toolkit for WHM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/#main-content)

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
3. [Plugins](https://docs.cpanel.net/whm/plugins/)
4. WP Toolkit for WHM


[wordpress](https://docs.cpanel.net/tags/wordpress/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/#overview)

* * *

[Account access](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/#account-access)

* * *

[Install, configure, and manage WordPress sites](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/#install-configure-and-manage-wordpress-sites)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/#overview)

* * *

[Account access](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/#account-access)

* * *

[Install, configure, and manage WordPress sites](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/#install-configure-and-manage-wordpress-sites)

* * *

## WP Toolkit for WHM

![](https://docs.cpanel.net/img/whm-icons/wp-toolkit.png)

_Valid for versions 102 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/)

Last modified: _2025 April 30_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _WP Toolkit_ interface allows you to easily install, configure, and manage WordPress® sites on your server.

_WP Toolkit_ is also available in a _Deluxe_ version. To view the differences between _WP Toolkit_ and _WP Toolkit Deluxe_, read our [WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/#feature-comparison) documentation.

The system automatically installs the _PHP-FPM Service for cPanel Daemons_ when the _WP Toolkit_ is installed. If _WP Toolkit_ shows as installed, updated, or removed from the server, the system will set the _PHP-FPM service for cPanel Daemons_ to be _Enabled_.

Important:

- You **must** install the _PHP-FPM Service for cPanel Daemons_, which must **remain** enabled to use the _WP Toolkit_.
- To install WordPress with the _WP Toolkit_, you **must** disable the _Allow WordPress sites to send notification emails after installation_ setting in the _WP Toolkit Settings_ menu if your server uses PHP 8 and you have disabled PHP’s [`mail()`](https://www.php.net/manual/en/function.mail.php) function.

## Account access

You _must_ enable the following features in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/#selectable-features) interface ( _WHM » Home » Packages » Feature Manager » Feature Lists_) for users to run _WP Toolkit_:

- _WP Toolkit_
- _MySQL_
- _Subdomains_
- _MIME Types_
- _Cronjobs_
- _Directory Privacy_
- _Password & Security_
- _File Manager_
- _Redirects_

## Install, configure, and manage WordPress sites

For information about how to install, configure, and manage WordPress sites with _WP Toolkit_, read Plesk’s [WP Toolkit](https://docs.plesk.com/en-US/obsidian/administrator-guide/website-management/wp-toolkit.73391/#) documentation.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [Add a New IP Address](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [Configure ClamAV Scanner](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×