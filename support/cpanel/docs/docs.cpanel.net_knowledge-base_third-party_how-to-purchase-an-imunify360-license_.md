---
url: "https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/"
title: "How to Purchase an Imunify360 License | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#main-content)

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
4. How to Purchase an Imunify360 License


[server](https://docs.cpanel.net/tags/server/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#overview)

* * *

[Feature comparison](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#feature-comparison)

* * *

[Purchase license](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#purchase-license)

* * *

[Purchase from WHM](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#purchase-from-whm)

* * *

[Purchase from Manage2](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#purchase-from-manage2)

* * *

[Purchase from the cPanel Store](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#purchase-from-the-cpanel-store)

* * *

[Uninstall Imunify360](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#uninstall-imunify360)

* * *

[Configure Imunify360](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#configure-imunify360)

* * *

[File locations](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#file-locations)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#overview)

* * *

[Feature comparison](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#feature-comparison)

* * *

[Purchase license](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#purchase-license)

* * *

[Purchase from WHM](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#purchase-from-whm)

* * *

[Purchase from Manage2](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#purchase-from-manage2)

* * *

[Purchase from the cPanel Store](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#purchase-from-the-cpanel-store)

* * *

[Uninstall Imunify360](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#uninstall-imunify360)

* * *

[Configure Imunify360](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#configure-imunify360)

* * *

[File locations](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/#file-locations)

* * *

## How to Purchase an Imunify360 License

Last modified: _2024 May 2_

* * *

## Overview

[Imunify360](https://www.imunify360.com/) provides additional security for your server. It is a suite of products that includes [KernelCare](https://www.kernelcare.com/) and [ImunifyAV+](https://blog.cpanel.com/imunifyav-plus-strengthen-your-site-security/). cPanel & WHM servers allow you to buy a license for Imunify360 from WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_).

For more information about how to use Imunify360, visit Imunify’s official [Imunify360 documentation](https://docs.imunify360.com/) page.

Note:

- Hosting providers can disable alerts for Imunify360 for their licensed servers from Manage2’s [_Update Company Information_](https://docs.cpanel.net/manage2/company/update-company-information/) interface ( _Manage2 » Company » Update Company Information_).
- If your server already has an ImunifyAV+ or KernelCare license, Imunify360 will replace it. You do **not** need to manually cancel those licenses.

## Feature comparison

The following table lists the features in each Imunify product:

| Product Name | Detection | Cleanup/Trim |
| --- | --- | --- |
| ImunifyAV | ![](https://docs.cpanel.net/img/checkbox.png) |  |
| ImunifyAV+ | ![](https://docs.cpanel.net/img/checkbox.png) | Manual Trim |
| Imunify360 | ![](https://docs.cpanel.net/img/checkbox.png) | Auto Trim by default |

## Purchase license

### Purchase from WHM

#### Initiate the license purchase process

On the server for which you wish to buy an Imunify360 license, perform the following steps:

1. Log in to WHM as the `root` user or as a reseller account with `root`-level privileges.

2. Navigate to WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_).

3. In the _Use Imunify360 for complete protection against attacks on your servers_ alert, click _Get Imunify360 for $_, where _$_ represents the monthly price of the Imunify360 license. The cPanel Store will appear.


Important:

If the _Imunify360_ alert does **not** appear in the list of security alerts, one of the following conditions exists on your server:

- Your server does not support Imunify360.
- Your hosting provider has disabled Imunify360 purchases.
- Your server could not connect to the cPanel Store.
- You are using a trial account.
- You are not a `root` user or a reseller account with `root`-level privileges.

#### Log in to the cPanel Store

If you have already logged in to your cPanel Store account, the system will request access to this account. Verify that the interface displays the correct cPanel Store username and server name. Then, click _Allow Access_. A new interface will appear.

Note:

To log in as a different cPanel Store account, click _Sign In as a Different User_.

#### Verify and complete your purchase

When you buy Imunify360 through the WHM interface, the system automatically selects the appropriate license type for your server. It also detects the IPv4 address to license. Verify your license order, read and accept the legal agreements. Enter or select the desired payment information, and then click _Pay Now_.

- After the cPanel Store processes your order, a confirmation message will appear. You will also receive an invoice via email from the cPanel Store.
- If the cPanel Store experiences problems with your order, an error message will appear. You may receive email from cPanel Customer Service to help you resolve the issue.

#### Installation

Your server will automatically download and install Imunify360. To verify this, navigate to WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_). The Imunify360 notice will confirm that the installation succeeded.

### Purchase from Manage2

Important:

To buy an Imunify360 license through Manage2, you **must** be a cPanel Partner.

#### Log in to Manage2 and activate the Imunify360 package

Note:

- If this is your first time to log in to your [Manage2](https://manage2.cpanel.net/) account, the system may prompt you to agree to the _Imunify360 Partner Product Terms of Use_.
- If you have already agreed to the _Imunify360 Partner Product Terms of Use_ agreement, proceed to the next section to enter the required license information.

Log in to your Manage2 account. Perform the following steps to add the Imunify360 package:

1. In Manage2’s _Dashboard_ interface, under the _Licenses_ section, click _Imunify360 Activation_. _The Imunify360 Partner Product Terms of Use_ agreement will appear.
2. In the _Agreed to on by (Full name)_ text box, enter your name and click _I Agree_. A confirmation message will appear and display your _Activated package_ name.

#### Enter the required license information

Navigate to Manage2’s [_Add License_](https://docs.cpanel.net/manage2/licenses/add-license/) interface ( _Dashboard » Licenses » Add License_). Use the available text boxes and menus to specify the server’s _IP address_, _Group_, and _Package_. Then, click _Add License_. A confirmation message will appear.

#### Install Imunify360

Imunify360 is now ready to install. To install Imunify360, use Imunify’s [installation](https://docs.imunify360.com/installation/) documentation. After you install Imunify360, navigate to WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_). The Imunify360 notice will confirm that the installation was successful.

### Purchase from the cPanel Store

#### Log in to the cPanel Store

Log in to your cPanel Store account, and then navigate to the [_Extensions_](https://cpanel.net/extensions/) interface ( _Solutions » Extensions_).

#### Add Imunify360 to your cPanel Store cart

You **must** add Imunify360 to your cart with selections for your license type and a valid IP address. To do this, perform the following steps:

1. In the _Extensions_ interface ( _Cart » Extensions_), click _Add Imunify360_ under the _Imunify360_ section. The _Configure_ interface ( _Cart » Configure_) will appear.
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

#### Install Imunify360

Imunify360 is now ready to install. To install Imunify360, use Imunify’s [installation](https://docs.imunify360.com/installation/) documentation. After you install Imunify360, navigate to WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_). The Imunify360 notice will confirm that the installation succeeded.

## Uninstall Imunify360

To uninstall Imunify360, refer to Imunify’s [uninstall](https://docs.imunify360.com/uninstall/) documentation.

## Configure Imunify360

To configure Imunify360, click the gear icon in the upper-right corner of the interface.

- To configure Imunify360 to trim files instead of remove them, select the _Trim file instead of remove_ checkbox.
- To configure Imunify360 to remove files instead of trim them, deselect the _Trim file instead of remove_ checkbox.
- To manage Imunify360’s file retention period, enter the number of days in the _Keep original files for_ text box.

## File locations

Imunify360 stores files in the following locations:

- Backups of trimmed files: `/var/imunify360/cleanup_storage/`

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [How to Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×