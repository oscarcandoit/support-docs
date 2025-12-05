---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-set-php-version-recommendations/"
title: "How to Set PHP Version Recommendations | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-php-version-recommendations/#main-content)

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
4. How to Set PHP Version Recommendations


[php](https://docs.cpanel.net/tags/php/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-php-version-recommendations/#overview)

* * *

[Configuration file](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-php-version-recommendations/#configuration-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-php-version-recommendations/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-php-version-recommendations/#overview)

* * *

[Configuration file](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-php-version-recommendations/#configuration-file)

* * *

## How to Set PHP Version Recommendations

Last modified: _2020 December 17_

* * *

## Overview

This document explains how to set PHP version recommendations that appear in cPanel’s [_MultiPHP Manager_](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/) interface ( _cPanel » Home » Software » MultiPHP Manager_).

## Configuration file

The cPanel & WHM server stores PHP version recommendations in the `/etc/cpanel/ea4/recommendations/custom_php_recommendation.json` JSON-formatted file. The file’s contents will resemble the following example:

```json
{"versions":[ "php54", "php72", "php74" ]}
```

The `versions` key is an array that contains strings that represent each recommended version. The example file recommends PHP 5.4, PHP 7.2, and PHP 7.4.

#### Additional Documentation

* * *

- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [MultiPHP INI Editor for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for WHM](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/)
- [MultiPHP Manager for WHM — System Settings](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm-system-settings/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×