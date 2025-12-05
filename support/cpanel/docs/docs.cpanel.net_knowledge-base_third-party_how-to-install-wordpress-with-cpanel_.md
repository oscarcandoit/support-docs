---
url: "https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/"
title: "How to Install WordPress® With cPanel | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/#main-content)

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
3. [Third Party](https://docs.cpanel.net/knowledge-base/third-party/)
4. How to Install WordPress® With cPanel


[cpanelplugins](https://docs.cpanel.net/tags/cpanelplugins/) [cpaddons](https://docs.cpanel.net/tags/cpaddons/) [wordpress](https://docs.cpanel.net/tags/wordpress/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/#overview)

* * *

[Install WordPress](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/#install-wordpress)

* * *

[Install WordPress from WP Toolkit](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/#install-wordpress-from-wp-toolkit)

* * *

[Install WordPress manually](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/#install-wordpress-manually)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/#overview)

* * *

[Install WordPress](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/#install-wordpress)

* * *

[Install WordPress from WP Toolkit](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/#install-wordpress-from-wp-toolkit)

* * *

[Install WordPress manually](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/#install-wordpress-manually)

* * *

## How to Install WordPress® With cPanel

_Valid for versions 120 through the latest version_

#### Version:

#### [104](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/104/)

#### [120](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/)

Last modified: _2024 November 14_

* * *

## Overview

WordPress®, a web-based content management system, allows users to easily create a website or blog. This document describes how to install WordPress on your cPanel account.

Note:

The [_Onboarding Assistant_](https://docs.cpanel.net/knowledge-base/cpanel-product/onboarding-assistant) automatically creates a WordPress® website for the new cPanel account if the user selects the _WordPress_ option.

## Install WordPress

### Install WordPress from WP Toolkit

You can install WordPress in cPanel’s [WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/#install-wp-toolkit) interface ( _cPanel » Home » Domains » WP Toolkit_). For information on how to install, configure, and manage WordPress sites with WP Toolkit, read Plesk’s [WP Toolkit](https://docs.plesk.com/en-US/obsidian/administrator-guide/website-management/wp-toolkit.73391/#) documentation.

### Install WordPress manually

If your hosting provider does not offer WordPress, you can manually download WordPress from the [WordPress website](http://wordpress.org/) and install it on your site.

For more information, read [installation instructions from WordPress](https://wordpress.org/support/article/how-to-install-wordpress/) and [their cPanel-specific instructions on how to create a database for WordPress](https://wordpress.org/support/article/using-cpanel/).

Manual installations may encounter issues due to conflicting `.htaccess` files or database connection errors:

Note:

In the following examples, the following statements are true:

- `example.com` represents the domain name.

- `example` represents the account name.

- `subdomain` represents a subdomain’s directory.

- `addon.com` represents an addon domain name.


#### Document root issues

Due to potential conflicts in the `.htaccess` file, do **not** configure multiple WordPress installations to share a single document root. If you experience difficulties with WordPress, check the following requirements:

- Each cPanel account user can host **only** one installation of WordPress in the document root directory.
  - The following are examples of document root directories:
    - `/home/example/public_html/`
    - `/home/example/public_html/addon.com`
    - `/home/example/public_html/subdomain`
  - Each directory may **only** contain one WordPress installation.

  - If the subdirectories are not a document root, cPanel account users can install additional WordPress installations in subdirectories under the domain’s home/example/public\_html directory.
    - The following examples demonstrate installations that use the `wordpress` subdirectory:
      - Under the document root for the main domain: `/home/example/public_html/wordpress`

      - Under a subdomain: `/home/example/public_html/subdomain/wordpress`

      - Under an addon domain: `/home/example/public_html/addon.com/wordpress`

For more information, visit the [WordPress website](https://wordpress.org/).

##### Database connection errors

If WordPress returns a database connection error, ensure that the database’s name and password in the `wp-config.php` file are identical to the database credentials in your account.

For a document root installation, the `wp-config` file exists in the `/home/username/public_html` directory, where `username` represents the cPanel account name.

To change the database’s username or password, use cPanel’s [_Manage My Databases_](https://docs.cpanel.net/cpanel/databases/manage-my-databases/) interface ( _cPanel » Home » Databases » Manage My Databases_).

To test a username and password combination, run the following command (where `db_user` represents the database’s authorized username):

```perl
mysql -u db_user -p
```

After you enter the command, enter the user’s password. The system will respond with a success or failure message.

#### Additional Documentation

* * *

- [Apps Managed by AppConfig](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/)
- [How to Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/)
- [Install cPAddons Site Software](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/)
- [Manage cPAddons Site Software](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/)
- [The migrate\_legacy\_wordpress\_to\_modern\_wordpress Script](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×