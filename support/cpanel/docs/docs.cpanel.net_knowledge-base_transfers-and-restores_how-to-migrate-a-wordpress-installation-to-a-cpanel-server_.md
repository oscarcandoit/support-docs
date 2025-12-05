---
url: "https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/"
title: "How to Migrate a WordPress® Installation to a cPanel & WHM Server | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#main-content)

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
3. [Transfers and Restores](https://docs.cpanel.net/knowledge-base/transfers-and-restores/)
4. How to Migrate a WordPress® Installation to a cPanel & WHM Server


[migrations](https://docs.cpanel.net/tags/migrations/) [wordpress](https://docs.cpanel.net/tags/wordpress/) [transfers](https://docs.cpanel.net/tags/transfers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#overview)

* * *

[Migrate your WordPress installation](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#migrate-your-wordpress-installation)

* * *

[Pre-migration requirements](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#pre-migration-requirements)

* * *

[Export the WordPress database](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#export-the-wordpress-database)

* * *

[Upload the files to the new server](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#upload-the-files-to-the-new-server)

* * *

[Create a MySQL database](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#create-a-mysql-database)

* * *

[Import the Wordpress database to cPanel](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#import-the-wordpress-database-to-cpanel)

* * *

[Change the website URL](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#change-the-website-url)

* * *

[Configure the WordPress database settings](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#configure-the-wordpress-database-settings)

* * *

[Update links and images](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#update-links-and-images)

* * *

[Save the changes in WordPress interface](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#save-the-changes-in-wordpress-interface)

* * *

[Delete your macOS website](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#delete-your-macos-website)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#overview)

* * *

[Migrate your WordPress installation](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#migrate-your-wordpress-installation)

* * *

[Pre-migration requirements](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#pre-migration-requirements)

* * *

[Export the WordPress database](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#export-the-wordpress-database)

* * *

[Upload the files to the new server](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#upload-the-files-to-the-new-server)

* * *

[Create a MySQL database](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#create-a-mysql-database)

* * *

[Import the Wordpress database to cPanel](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#import-the-wordpress-database-to-cpanel)

* * *

[Change the website URL](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#change-the-website-url)

* * *

[Configure the WordPress database settings](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#configure-the-wordpress-database-settings)

* * *

[Update links and images](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#update-links-and-images)

* * *

[Save the changes in WordPress interface](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#save-the-changes-in-wordpress-interface)

* * *

[Delete your macOS website](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-migrate-a-wordpress-installation-to-a-cpanel-server/#delete-your-macos-website)

* * *

## How to Migrate a WordPress® Installation to a cPanel & WHM Server

Last modified: _2024 March 4_

* * *

## Overview

This tutorial explains how to migrate a macOS® server-hosted WordPress® installation to a cPanel & WHM server. This is useful, for example, If you develop your website on a locally-hosted server and wish to deploy your work to a public-facing server.

Warning:

- Your website will likely experience downtime during this process.
- Because WebPros International, LLC doesn’t develop WordPress itself, cPanel Technical Support can’t help you perform the migration.

Note:

As of Fall 2018, Apple® will **no longer** support website hosting on macOS servers. For more information, read Apple Support’s [Prepare for changes to macOS Server](https://support.apple.com/en-us/HT208312) documentation.

## Migrate your WordPress installation

### Pre-migration requirements

Before you begin, make **certain** that you possess the following:

- A domain that exists on a cPanel & WHM server.
- A [File Transfer Protocol (FTP)](https://docs.cpanel.net/cpanel/files/ftp-accounts) client and account.

### Export the WordPress database

Export your WordPress installation’s database with the phpMyAdmin tool. To do this, perform the following steps:

1. Navigate to `localexample.com/phpmyadmin`, where localexample represents your locally-hosted domain. The phpMyAdmin interface will appear.

2. Click _Export_ in the toolbar. A new interface will appear.

3. Under the _Export Methods:_ heading, select either of the following export methods:
   - _Quick_ (recommended) — This method displays the minimum settings.
   - _Custom_ — This method displays all possible settings.
4. Select the database’s format from the _Format:_ menu. This setting defaults to _SQL_.

5. Click _Go_. The system will create a download file that contains your database information.


### Upload the files to the new server

Connect to your web hosting account via your preferred FTP client and upload your WordPress files to your web host account’s `public_html` directory.

### Create a MySQL database

Create a MySQL® database to which to import the WordPress database in one of the following interfaces:

- In cPanel & WHM version 118 and earlier, cPanel’s [_MySQL® Databases_](https://docs.cpanel.net/cpanel/databases/mysql-databases/) interface ( _cPanel » Home » Databases » MySQL® Databases_).
- In cPanel & WHM version 120 and later, cPanel’s [_Manage My Databases_](https://docs.cpanel.net/cpanel/databases/manage-my-databases/) interface ( _cPanel » Home » Databases » Manage My Databases_).

### Import the Wordpress database to cPanel

Import your WordPress database backup file to cPanel & WHM. To do this, perform the following steps:

1. Navigate to cPanel’s _phpMyAdmin_ interface ( _cPanel » Home » Databases » phpMyAdmin_).
2. Click _Databases_ in the toolbar and then click the database that you created in the previous step.
3. Click _Import_ in the toolbar. A new interface will appear.
4. Click _Choose File_ and select the database backup file that you created in Step 1.
5. Click _Go_. The system will import your WordPress database.

### Change the website URL

You **must** change the website URL in your database so that the database connects with your WordPress site. To do this, perform the following steps in cPanel’s _phpMyAdmin_ interface ( _cPanel » Home » Databases » phpMyAdmin_):

1. Locate the _wp\_options_ table and click _Browse_.
2. Under the _option\_name_ column, locate the _siteurl_ entry and click _Edit_.
3. In the _option\_value_ column, enter your website’s new URL in the text box and click _Go_.
4. Locate the home entry and click _Edit_.
5. In the _setting\_value_ column, enter your website’s new URL in the text box and click _Go_.

### Configure the WordPress database settings

You **must** configure your WordPress database settings to use the information for the database that you created in step 3. To do this, perform the following steps:

1. Navigate to cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_).

2. Open the `public_html` directory and locate the `wp-config.php` file.

3. Right-click the `wp-config.php` file and click _Edit_. A pop-up window will appear.

4. Click _Edit_ in the pop-up window. The editor will appear in a new browser tab.

5. Edit the `DB_NAME`, `DB_USER`, and `DB_PASSWORD` lines to match the information for the database that you created in step 3. This will resemble the following example:





|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>``` | ```go<br>  // ** MySQL settings ** //<br>  /** The name of the database for WordPress */<br>  define( 'DB_NAME', 'mrfrogor_wp' );<br>  /** MySQL database username */<br>  define( 'DB_USER', 'mrfrogor_wp' );<br>  /** MySQL database password */<br>  define( 'DB_PASSWORD', 'zQWDu1CdqbVx' );<br>  /** MySQL hostname */<br>  define( 'DB_HOST', 'localhost' );<br>``` |

6. After make your changes, click _Save Changes_


### Update links and images

Your website may contain broken links and broken images after you migrate your website. To update the links and images to use your new website’s URL, perform the following steps:

1. Navigate to cPanel’s _phpMyAdmin_ interface ( _cPanel » Home » Databases » phpMyAdmin_).

2. Click _Databases_ in the toolbar and then click the database that you created in step 3.

3. Click _SQL_ in the toolbar.

4. In the text box, enter an SQL query to update your URLs. For example:




```perl
UPDATE wp_posts SET post_content = REPLACE(post_content, 'localexample.com/, www.mrfrog.com/')
```

5. Click _Go_ to run the query.


### Save the changes in WordPress interface

After you updates your links and images, save the changes in the WordPress dashboard to update the URL. To do this, perform the following steps:

1. Log in to the WordPress dashboard.

2. Navigate to the _General_ interface ( _Main » Settings » General_).

3. Click _Save_ at the bottom of the interface.

4. Navigate to the _Permalink_ interface ( _Main » Settings » Permalink_).

5. Click _Save_ at the bottom of the interface.


### Delete your macOS website

After you complete your website’s migration to a cPanel & WHM server, delete the website that remains on your macOS server.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [How to Move All cPanel Accounts from One Server to Another](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/)
- [How to Restore Your cPanel Account - A Guide for New System Administrators](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/)
- [How to Transfer Accounts and Configurations Between cPanel & WHM Servers](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-transfer-accounts-and-configurations-between-cpanel-servers/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×