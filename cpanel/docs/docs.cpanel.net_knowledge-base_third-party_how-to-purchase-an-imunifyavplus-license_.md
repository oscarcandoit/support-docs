---
url: "https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/"
title: "How to Purchase an ImunifyAV+ License | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#main-content)

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
4. How to Purchase an ImunifyAV+ License


[server](https://docs.cpanel.net/tags/server/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#overview)

* * *

[Feature comparison](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#feature-comparison)

* * *

[Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#install-imunifyav)

* * *

[How to purchase a license](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#how-to-purchase-a-license)

* * *

[Purchase from WHM](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#purchase-from-whm)

* * *

[Purchase from Manage2](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#purchase-from-manage2)

* * *

[Purchase from the cPanel Store](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#purchase-from-the-cpanel-store)

* * *

[How to uninstall](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#how-to-uninstall)

* * *

[Configure ImunifyAV+](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#configure-imunifyav+)

* * *

[File location](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#file-location)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#overview)

* * *

[Feature comparison](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#feature-comparison)

* * *

[Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#install-imunifyav)

* * *

[How to purchase a license](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#how-to-purchase-a-license)

* * *

[Purchase from WHM](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#purchase-from-whm)

* * *

[Purchase from Manage2](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#purchase-from-manage2)

* * *

[Purchase from the cPanel Store](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#purchase-from-the-cpanel-store)

* * *

[How to uninstall](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#how-to-uninstall)

* * *

[Configure ImunifyAV+](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#configure-imunifyav+)

* * *

[File location](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license/#file-location)

* * *

## How to Purchase an ImunifyAV+ License

Last modified: _2024 May 2_

* * *

## Overview

ImunifyAV provides additional security by scanning for malware on your server. If ImunifyAV finds any malware, it notifies the user in the _Files_ tab of the _ImunifyAV_ interface ( _WHM » Home » Plugins » ImunifyAV_). Upgrading to ImunifyAV+ provides one-click cleanup and allows you to set up email notifications and automatic malware removal. You can install ImunifyAV for free from WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_). You can also buy a license for ImunifyAV+ from WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_) or the _ImunifyAV_ interface ( _WHM » Home » Plugins » ImunifyAV_).

To learn more about ImunifyAV+, visit Imunify’s official [product](https://www.imunify360.com/antivirus/) and [documentation](https://docs.imunifyav.com/imunifyav/) pages.

Note:

Hosting providers can disable the alert to buy ImunifyAV+ for their licensed servers from Manage2’s [_Update Company Information_](https://docs.cpanel.net/manage2/company/update-company-information/) interface ( _Manage2 » Company » Update Company Information_).

## Feature comparison

The following table lists the features in each Imunify product:

| Product Name | Detection | Cleanup/Trim |
| --- | --- | --- |
| ImunifyAV | ![](https://docs.cpanel.net/img/checkbox.png) |  |
| ImunifyAV+ | ![](https://docs.cpanel.net/img/checkbox.png) | Manual Trim |
| Imunify360 | ![](https://docs.cpanel.net/img/checkbox.png) | Auto Trim by default |

## Install ImunifyAV

ImunifyAV+ builds on the malware protection of ImunifyAV. Before purchasing an ImunifyAV+ license, [install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav) on your server.

Important:

You will be unable to install ImunifyAV or ImunifyAV+ if any of these conditions apply:

- Your server does not support ImunifyAV.
- You are using a trial account.
- You are **not** a `root` user or a reseller account with `root`-level privileges.

## How to purchase a license

### Purchase from WHM

Going through WHM is the quickest and easiest way to buy and install ImunifyAV+ for your server.

#### Initiate the license purchase process

On the server for which you wish to buy an ImunifyAV+ license, perform the following steps:

1. Log in to WHM as the `root` user or as a reseller account with `root`-level privileges.

2. Navigate to the ImunifyAV interface ( _WHM » Home » Plugins » ImunifyAV_).

3. Click _Upgrade to ImunifyAV+_. The cPanel Store will appear.


#### Log in to the cPanel Store

If you have already logged in to your cPanel Store account, the system will request access to this account. Verify that the interface displays the correct cPanel Store username and server name. Then, click _Allow Access_. A new interface will appear.

Note:

To log in under a different cPanel Store account, click _Sign In as a Different User_.

#### Verify and complete your purchase

When you buy an ImunifyAV+ license through the WHM interface, the system automatically detects the IPv4 address to license.

1. Verify your license order, including your IP address.
2. Review and accept the legal agreements.
3. Enter or select the desired payment information and click _Pay Now_.
4. A confirmation message will appear after the cPanel Store processes your order. You will also receive an invoice via email from the cPanel Store.
5. If the cPanel Store experiences problems with your order, an error message will appear. You may receive email from cPanel Customer Service to help you resolve the issue.

#### Installation

After purchasing the license, your browser will return to the WHM interface and will automatically install ImunifyAV+. Once WHM displays a success message, perform the following steps:

1. Navigate to the _ImunifyAV_ interface.
2. The ImunifyAV logo will change to an ImunifyAV+ logo.
3. Accept the ImunifyAV license agreement, if present.
4. ImunifyAV+ is set up and ready to help protect your server.

### Purchase from Manage2

Important:

To buy an ImunifyAV+ license through Manage2, you **must** be a cPanel Partner.

#### Log in to Manage2 and activate the ImunifyAV+ package

Note:

- If this is your first time logging in to your [Manage2](https://manage2.cpanel.net/) account, the system may prompt you to agree to the _ImunifyAV+ Partner Product Terms of Use_.
- If you have already agreed to the _ImunifyAV+ Partner Product Terms of Use_ agreement, proceed to the next section to enter the required license information.

Log in to your Manage2 account. Perform the following steps to add the ImunifyAV+ package:

1. In Manage2’s _Dashboard_ interface, under the _Licenses_ section, click _ImunifyAV+ Activation_.
2. The _ImunifyAV+ Partner Product Terms of Use_ agreement will appear.
3. In the _Agreed to on by (Full name)_ text box, enter your name and click _I Agree_. A confirmation message will appear and display your _Activated package_ name.
4. Navigate to Manage2’s [_Add License_](https://docs.cpanel.net/manage2/licenses/add-license/) interface ( _Dashboard » Licenses » Add License_).
5. Use the available text boxes and menus to specify the server’s _IP address_, _Group_, and _Package_.
6. Then, click _Add License_. A confirmation message will appear.

#### Install

ImunifyAV+ is now ready to install. Run the following command:

```
imunify-antivirus register IPL
```

To confirm your ImunifyAV+ installation, navigate to the _ImunifyAV_ interface ( _WHM » Home » Plugins » ImunifyAV_). The ImunifyAV+ logo will display in place of the ImunifyAV logo.

### Purchase from the cPanel Store

#### Log in to the cPanel Store

Log in to your cPanel Store account, and then navigate to the [_Extensions_](https://cpanel.net/extensions/) interface ( _Solutions » Extensions_).

#### Add ImunifyAV+ to your cPanel Store cart

You **must** add ImunifyAV+ to your cart with a valid IP address. To do this, perform the following steps:

1. In the _Extensions_ interface ( _Cart » Extensions_), click _Add ImunifyAV+_ under the _ImunifyAV+_ section. The _Configure_ interface ( _Cart » Configure_) will appear.
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

#### Install ImunifyAV+

ImunifyAV+ is now ready to install. Run the following command:

```
imunify-antivirus register IPL
```

To confirm your ImunifyAV+ installation, navigate to the _ImunifyAV_ interface ( _WHM » Home » Plugins » ImunifyAV_). The ImunifyAV+ logo will display in place of the ImunifyAV logo.

## How to uninstall

To uninstall ImunifyAV+, use Imunify’s [uninstall](https://docs.imunifyav.com/imunifyav/#uninstall) documentation.

## Configure ImunifyAV+

To configure ImunifyAV+, click the gear icon in the upper-right corner of the interface.

- To configure ImunifyAV+ to trim files instead of remove them, select the _Trim file instead of remove_ checkbox.

- To configure ImunifyAV+ to remove files instead of trim them, deselect the _Trim file instead of remove_ checkbox.

- To manage ImunifyAV+’s file retention period, enter the number of days in the _Keep original files for_ text box.


## File location

ImunifyAV+ stores trimmed files in the `/var/imunify/cleanup_storage/` directory.

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