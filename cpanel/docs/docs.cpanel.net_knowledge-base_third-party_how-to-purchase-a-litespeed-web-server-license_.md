---
url: "https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/"
title: "How to Purchase a LiteSpeed Web Server License | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#main-content)

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
4. How to Purchase a LiteSpeed Web Server License


[server](https://docs.cpanel.net/tags/server/) [apache](https://docs.cpanel.net/tags/apache/) [litespeed](https://docs.cpanel.net/tags/litespeed/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#overview)

* * *

[Choosing a license tier](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#choosing-a-license-tier)

* * *

[RAM limit](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#ram-limit)

* * *

[Worker process](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#worker-process)

* * *

[Purchase license](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#purchase-license)

* * *

[Purchase from WHM](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#purchase-from-whm)

* * *

[Purchase from the cPanel store](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#purchase-from-the-cpanel-store)

* * *

[Find your LiteSpeed Web Server serial number](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#find-your-litespeed-web-server-serial-number)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#overview)

* * *

[Choosing a license tier](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#choosing-a-license-tier)

* * *

[RAM limit](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#ram-limit)

* * *

[Worker process](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#worker-process)

* * *

[Purchase license](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#purchase-license)

* * *

[Purchase from WHM](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#purchase-from-whm)

* * *

[Purchase from the cPanel store](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#purchase-from-the-cpanel-store)

* * *

[Find your LiteSpeed Web Server serial number](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license/#find-your-litespeed-web-server-serial-number)

* * *

## How to Purchase a LiteSpeed Web Server License

Last modified: _2025 June 10_

* * *

## Overview

LiteSpeed Web Server is a drop-in replacement for Apache servers. LiteSpeed reads Apache configuration files directly and is compatible with the Apache `.htaccess` and `mod_security` rules. You can purchase a LiteSpeed Web Server license from the cPanel Store within WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).

Important:

- LiteSpeed Web Server uses the `lsphp` binary. It does **not** use the system’s PHP-FPM implementation in WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm) interface ( _WHM » Home » Software » MultiPHP Manager_).
- Hosting providers can disable the LiteSpeed Web Server banner for their licensed servers from Manage2’s [_Update Company Information_](https://docs.cpanel.net/manage2/company/update-company-information/) interface ( _Manage2 » Company » Update Company Information_).
- The LiteSpeed Web Server is **not** compatible with the [`mod_status` Apache module](https://httpd.apache.org/docs/2.4/mod/mod_status.html). When you install LiteSpeed Web Server, WHM’s [_Apache Status_](https://docs.cpanel.net/whm/server-status/apache-status/) interface ( _WHM » Home » Server Status » Apache Status_) will no longer function. Instead, use the _LiteSpeed Web Console_ interface to check the server’s status. Also, the system will report `file not found` errors for the `/var/www/html/whm-server-status` file in the Apache log file.
- The LiteSpeed Web Server is **not** currently compatible with [NGINX With Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy).

When you purchase LiteSpeed Web Server through the WHM interface, the following actions occur:

- You receive a LiteSpeed Web Server license.
- The system installs your new LiteSpeed Web Server and configures itself to use the LiteSpeed Web Server.
- The system switches from the Apache web server to LiteSpeed Web Server.
- LiteSpeed Web Server replaces Apache on ports 80 and 443, which replaces Apache on your system.

## Choosing a license tier

WebPros International, LLC offers the following two custom LiteSpeed Web Server license tiers:

- _LiteSpeed 8GB_ — Includes 8GB RAM limit and one worker process.
- _LiteSpeed Unlimited_ — Includes unlimited RAM and three worker processes.

### RAM limit

The RAM limit applies to the server or virtual private server (VPS). If your server’s physical memory is greater than 8GB, then you **must** use _LiteSpeed Unlimited_.

### Worker process

The number of workers determines how many processes LiteSpeed Web Server uses, limiting the CPU resource needs. There is one LiteSpeed Web Server process per worker.

## Purchase license

### Purchase from WHM

To purchase a LiteSpeed Web Server license and install LiteSpeed Web Server on your cPanel & WHM server, perform the following steps:

#### Initiate the license purchase process

On the server for which you wish to purchase a LiteSpeed Web Server license, perform the following steps:

1. Log in to WHM as the `root` user or as a reseller account with `root`-level privileges.
2. Navigate to WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_). The _LiteSpeed Web Server_ banner will appear at the top of the interface.
3. The interface will display a license offer appropriate for your server’s hardware:
   - _LiteSpeed Web Server - 8GB License_ — For Cloud-licensed servers with less than 8GB of RAM.
   - _LiteSpeed Web Server - Unlimited License_ — For Metal-licensed servers and Cloud-licensed servers with more than 8GB of RAM.
4. Click the license offer. A new interface will appear.

Important:

If the _LiteSpeed Web Server_ banner does **not** appear in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_), one of the following conditions exists on your server:

- You already own a LiteSpeed Web Server license in the cPanel Store.
- LiteSpeed Web Server is already installed on your server.
- Your hosting provider disabled LiteSpeed Web Server purchases.

#### Log in to the cPanel Store

If you have already logged in to your cPanel Store account, the system will request access to this account. Verify that the interface displays the correct cPanel Store username and server name, and then click _Allow Access_. A new interface will appear.

Note:

To log in as a different cPanel Store account, click _Sign In as a Different User_ and perform the necessary steps to log in to the desired cPanel Store account.

#### Verify and complete your purchase

When you buy a LiteSpeed Web Server license through the WHM interface, you **must** choose between a Metal or Cloud license type. Currently, you can **only** buy monthly licenses through the WHM interface. The system will automatically detect the IPv4 address to license. Verify your license order, accept the legal agreements, enter or select the desired payment information, and then click _Complete Order_.

- After the cPanel Store successfully processes your order, a confirmation message will appear. You will also receive an invoice email from the cPanel Store.
- If the cPanel Store experiences problems with your order, an error message will appear. Also, you may receive emails from cPanel Customer Service to help you resolve the issue.

#### Installation

After you complete the purchase, your server will automatically download and install LiteSpeed Web Server. The _LiteSpeed Web Server Installation_ interface will appear. This interface shows the installation’s progress. It also displays an administrator username and password.

Important:

You **must** record this username and password. The _LiteSpeed Web Console_ in the _LiteSpeed Plugin_ interface requires the username and password to log in.

When the installation finishes, click _Continue to LiteSpeed Plugin_ to access WHM’s _LiteSpeed Plugin_ interface ( _WHM » Home » Plugins » LiteSpeed Plugin_).

Important:

To switch between LiteSpeed Web Server and Apache, use the _LiteSpeed Web Server_ plugin interface ( _WHM » Home » Plugins » LiteSpeed Plugin_). For more information, read [LiteSpeed’s cPanel Plugin documentation](https://www.litespeedtech.com/products/litespeed-web-server/control-panel-plugins/cpanel).

After you successfully purchase a license, the _LiteSpeed Web Server_ banner will no longer appear in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).

### Purchase from the cPanel store

#### Log in to the cPanel Store

Log in to your cPanel Store account, and then navigate to the [_Extensions_](https://cpanel.net/extensions/) interface ( _Solutions » Extensions_).

#### Add LiteSpeed Web Server to your cPanel Store cart

You **must** add _LiteSpeed Web Server_ to your cart with selections for your license type and a valid IP address. To do this, perform the following steps:

1. In the _Extensions_ interface ( _Cart » Extensions_), click _Add LiteSpeed_ under the _LiteSpeed Web Server_ section. The _Configure_ interface ( _Cart » Configure_) will appear.
2. Enter your valid IP address in the _IP Address_ text box.
3. Click _Continue_. The _Review & Checkout_ interface ( _Cart » Review & Checkout_) will appear.
4. Review your order and click _Checkout_. The _Checkout_ interface ( _Cart » Checkout_) will appear.

#### Complete your purchase

Important:

To buy a monthly license, you **must** store a credit card on file **and** set a primary credit card. If you have not set a primary credit card, you can enter the credit card you want to use and select _Store Credit Card on File_ and _Set as Primary Credit Card_ from the cart. WebPros International, LLC will charge this card every month.

To complete your purchase, perform the following steps:

1. Accept the terms and conditions of the _EULA_.
2. Select one of the following payment options:
   - _Stored credit cards_ — Pay with a previously used card.
   - _Add a New Credit Card_ — Pay with a new card.
   - _PayPal_ — Pay with a PayPal® account.
3. Click _Complete Order_. The purchase will complete, and an invoice will appear.

#### Installation

After you complete the purchase, your server will automatically download and install LiteSpeed Web Server. The _LiteSpeed Web Server Installation_ interface will appear. This interface shows the installation’s progress. It also displays an administrator username and password.

Important:

You **must** record this username and password. The _LiteSpeed Web Console_ in the _LiteSpeed Plugin_ interface requires the username and password to log in.

When the installation finishes, click _Continue to LiteSpeed Plugin_ to access WHM’s _LiteSpeed Plugin_ interface ( _WHM » Home » Plugins » LiteSpeed Plugin_).

Important:

To switch between LiteSpeed Web Server and Apache, use the _LiteSpeed Web Server_ plugin interface ( _WHM » Home » Plugins » LiteSpeed Plugin_). For more information, read [LiteSpeed’s cPanel Plugin documentation](https://www.litespeedtech.com/products/litespeed-web-server/control-panel-plugins/cpanel).

After you successfully purchase a license, the _LiteSpeed Web Server_ banner will no longer appear in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).

## Find your LiteSpeed Web Server serial number

To find your LiteSpeed Web Server serial number, perform the following steps:

1. Navigate to the [cPanel Store](https://store.cpanel.net/).
2. Click _Account Log In_. The _Sign In_ interface will appear.
3. Log in to your cPanel Store account.
4. Click _Manage Licenses_. The _Manage Licenses_ interface will appear.
5. Scroll down to your LiteSpeed Web Server license.
6. Click the caret icon (![caret icon](https://docs.cpanel.net/img/caret.png)). The _Actions_ menu will appear.
7. Click _View Serial_. Your LiteSpeed Web Server serial number will appear.

#### Additional Documentation

* * *

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [How to Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×