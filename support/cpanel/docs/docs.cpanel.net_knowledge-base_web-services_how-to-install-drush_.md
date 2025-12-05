---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/"
title: "How to Install Drush | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/#main-content)

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
4. How to Install Drush


[apache](https://docs.cpanel.net/tags/apache/) [php](https://docs.cpanel.net/tags/php/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/#overview)

* * *

[Install Drush](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/#install-drush)

* * *

[Install Composer](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/#install-composer)

* * *

[Add Drush as a requirement to your composer.json file](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/#add-drush-as-a-requirement-to-your-composerjson-file)

* * *

[Install Drush](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/#install-drush)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/#overview)

* * *

[Install Drush](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/#install-drush)

* * *

[Install Composer](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/#install-composer)

* * *

[Add Drush as a requirement to your composer.json file](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/#add-drush-as-a-requirement-to-your-composerjson-file)

* * *

[Install Drush](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-drush/#install-drush)

* * *

## How to Install Drush

Last modified: _2019 August 20_

* * *

## Overview

This document describes how to install the Drush application, which allows you to manage Drupal, a popular content management system (CMS).

Important:

- You **must** add Drush on each project via the Composer application.

- We recommend that you **only** install Drush on servers with at **least** 4GB of memory or 2GB of memory with a 2GB swap space.

- cPanel accounts **must** possess access to SSH in order to use the Composer application.


## Install Drush

### Install Composer

To install Composer, read our [How to Set Up (PHP) Composer](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-php-composer/) document.

### Add Drush as a requirement to your composer.json file

If you have not yet added Drush as a requirement to your project’s composer.json file, run the following command:

```perl
composer require drush/drush
```

The system will return output similar to the following example:

```perl
- Installing drush/drush (9.3.0): Loading from cache
```

### Install Drush

To install Drush, run the following command:

```perl
composer install
```

The system will return output similar to the following example:

```perl
- Installing drush/drush (9.3.0): Loading from cache
```

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×