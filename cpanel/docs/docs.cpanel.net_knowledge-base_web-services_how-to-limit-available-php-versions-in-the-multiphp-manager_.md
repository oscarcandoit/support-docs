---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-limit-available-php-versions-in-the-multiphp-manager/"
title: "How to Limit Available PHP Versions in the MultiPHP Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-limit-available-php-versions-in-the-multiphp-manager/#main-content)

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
3. [Web Services](https://docs.cpanel.net/knowledge-base/web-services/)
4. How to Limit Available PHP Versions in the MultiPHP Manager


[php](https://docs.cpanel.net/tags/php/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-limit-available-php-versions-in-the-multiphp-manager/#overview)

* * *

[How to set up restrictions](https://docs.cpanel.net/knowledge-base/web-services/how-to-limit-available-php-versions-in-the-multiphp-manager/#how-to-set-up-restrictions)

* * *

[Limitations](https://docs.cpanel.net/knowledge-base/web-services/how-to-limit-available-php-versions-in-the-multiphp-manager/#limitations)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-limit-available-php-versions-in-the-multiphp-manager/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-limit-available-php-versions-in-the-multiphp-manager/#overview)

* * *

[How to set up restrictions](https://docs.cpanel.net/knowledge-base/web-services/how-to-limit-available-php-versions-in-the-multiphp-manager/#how-to-set-up-restrictions)

* * *

[Limitations](https://docs.cpanel.net/knowledge-base/web-services/how-to-limit-available-php-versions-in-the-multiphp-manager/#limitations)

* * *

## How to Limit Available PHP Versions in the MultiPHP Manager

Last modified: _2024 February 21_

* * *

## Overview

cPanel & WHM has the ability to only display specific versions of PHP to a user. You may wish to limit an account’s visible PHP versions for a variety of reasons, including to limit access to legacy versions of PHP or to prevent an early upgrade to a newer version of PHP.

Important:

A user can bypass the the PHP version restrictions if they set the the PHP version manually in an `.htaccess` file. This feature only prevents the selection of a PHP version in cPanel’s [_MultiPHP Manager_](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/) interface ( _cPanel » Home » Software » MultiPHP Manager_). Bug bounties do **not** apply.

## How to set up restrictions

Limitations on an account’s PHP versions requires a Feature List, an account package, and installed PHP versions. When you install a PHP version on your system, all accounts can access the version by default. You **must** add a limitation if you do not wish to make the version visible to all users.

To create limitations for specific versions of PHP, perform the following steps:

1. Create a new feature list or modify an existing one in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_).

2. Deselect any PHP versions that you wish to limit visibility of for your users.






Note:





- When you install a new version of PHP on your server, all users can access it by default.
- Limitations apply to all PHP versions available in EasyApache 4, including custom PHP packages.

3. Either create a new package in WHM’s [_Add a Package_](https://docs.cpanel.net/whm/packages/add-a-package) interface ( _WHM » Home » Packages » Add a Package_), or modify an existing one in WHM’s [_Edit a Package_](https://docs.cpanel.net/whm/packages/edit-a-package) interface ( _WHM » Home » Packages » Edit a Package_).

4. Assign the feature list to your selected package.

5. Assign the package to the users for which you wish to limit PHP in WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account/) interface ( _WHM » Home » Account Functions » Modify an Account_).


### Limitations

If you set PHP limitations for a user’s account, the user **cannot** select the limited PHP versions in cPanel’s [_MultiPHP Manager_](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/) interface ( _cPanel » Home » Software » MultiPHP Manager_). A system administrator can still assign a user to a limited PHP version. This allows a user to remain on a legacy version of PHP, but not to revert to that version via the interface if they move to a different version of PHP.

#### Additional Documentation

* * *

- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [The rebuild\_phpconf Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×