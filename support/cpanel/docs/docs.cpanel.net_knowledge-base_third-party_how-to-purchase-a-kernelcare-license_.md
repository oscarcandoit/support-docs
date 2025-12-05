---
url: "https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/"
title: "How to Purchase a KernelCare License | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/#main-content)

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
4. How to Purchase a KernelCare License


[server](https://docs.cpanel.net/tags/server/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/#overview)

* * *

[Purchase license](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/#purchase-license)

* * *

[Purchase from WHM](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/#purchase-from-whm)

* * *

[Purchase from Manage2](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/#purchase-from-manage2)

* * *

[Purchase from the cPanel Store](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/#purchase-from-the-cpanel-store)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/#overview)

* * *

[Purchase license](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/#purchase-license)

* * *

[Purchase from WHM](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/#purchase-from-whm)

* * *

[Purchase from Manage2](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/#purchase-from-manage2)

* * *

[Purchase from the cPanel Store](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/#purchase-from-the-cpanel-store)

* * *

## How to Purchase a KernelCare License

Last modified: _2025 January 15_

* * *

## Overview

KernelCare automatically updates your system’s Linux® kernel without the need for a reboot. cPanel & WHM servers allow you to purchase a license for KernelCare from WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_).

Important:

- Before you purchase and install KernelCare, make certain that your system possesses a compatible kernel. To do this, read the [KernelCare](https://patches.kernelcare.com/) documentation.
- To install and run KernelCare, you **must** disable Secure Boot if you enabled Secure Boot previously.
- You can **only** install KernelCare on systems that run one of the following operating systems:

  - CentOS 7.
  - Red Hat® Enterprise Linux® (RHEL) 7.
  - CloudLinux™.
  - AlmaLinux.
  - Rocky Linux™.
  - Ubuntu®.

For the latest information about the operating systems that WebPros International, LLC supports, read our [Installation Guide](https://docs.cpanel.net/installation-guide/) documentation.

Note:

Hosting providers can configure whether this option sends the purchaser to the provider’s custom URL, an email address, or the cPanel Store. They can also disable the banner for their licensed servers from Manage2’s [_Update Company Information_](https://docs.cpanel.net/manage2/company/update-company-information/) interface ( _Manage2 » Company » Update Company Information_).

## Purchase license

### Purchase from WHM

#### Initiate the license purchase process.

On the server for which you wish to purchase a KernelCare license, perform the following steps:

1. Log in to WHM as the `root` user or as a reseller account with `root`-level privileges.
2. Navigate to WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_).
3. In the _Upgrade to KernelCare_ alert, click _Get KernelCare for $_, where _$_ represents the monthly price of the KernelCare license. The cPanel Store will appear.

Important:

If the _KernelCare Security_ alert does **not** appear in the list of security alerts, one of the following conditions exists on your server:

- Your virtual server does not support KernelCare, because the host node controls the kernel. For example, if your virtual machine is on an OpenVZ or Virtuozzo platform.
- Your system’s kernel is unsupported.
- You enabled Secure Boot.
- Your hosting provider has disabled KernelCare purchases.
- A KernelCare trial license currently exists on your server.

#### Log in to the cPanel Store.

If you have already logged in to your [cPanel Store](https://store.cpanel.net/) account, the system will request access to this account. Verify that the interface displays the correct cPanel Store username and server name, and then click _Allow Access_. A new interface will appear.

Note:

To log in as a different cPanel Store account, click _Sign In as a Different User_. Then, perform the necessary steps to log in to the desired cPanel Store account.

#### Verify and complete your purchase.

When you buy a KernelCare license through the WHM interface, the system automatically selects the appropriate license type for your server. It also detects the IPv4 address to license. Currently, you can **only** purchase monthly licenses through the WHM interface. Verify your license order, accept the legal agreements, enter or select the desired payment information, and then click _Pay Now_.

- After the cPanel Store processes your order, a confirmation message will appear. You will receive an invoice email from the cPanel Store. After you successfully purchase a license, the _KernelCare License_ banner will no longer display in the WHM interface.
- If the cPanel Store experiences problems with your order, an error message will appear. You may receive emails from cPanel Customer Service to help you resolve the issue.

#### Installation

Your server will automatically download and install KernelCare. To verify this, navigate to WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_) again and the KernelCare notice will confirm that the installation succeeded.

### Purchase from Manage2

Important:

**Only** cPanel Partners may purchase a KernelCare licenses through Manage2.

#### Log in to Manage2.

Log in to your [Manage2](https://manage2.cpanel.net/) account, and then navigate to the [_Add License_](https://docs.cpanel.net/manage2/licenses/add-license/) interface ( _Dashboard » Licenses » Add License_).

#### Enter the required license information.

In Manage2’s [_Add License_](https://docs.cpanel.net/manage2/licenses/add-license/) interface ( _Dashboard » Licenses » Add License_), use the available text boxes and menus to specify the server’s IP address, group, license type and term. Then, click _Add License_. A confirmation message will appear.

#### Invoice and installation

KernelCare is now ready to install. For instructions on how to install KernelCare, read our [How to Install KernelCare documentation](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/).

### Purchase from the cPanel Store

#### Log in to the cPanel Store.

Log in to your [cPanel Store](https://store.cpanel.net/) account and navigate to the [_Extensions_](https://store.cpanel.net/store/extensions) interface ( _Store » Extensions_).

#### Add KernelCare to your cart.

You **must** add KernelCare to your cart with selections for your license type and valid IP address. To do this, perform the following steps:

1. In the _Extensions_ interface ( _Store » Extensions_), click _Order Now_ on the _KernelCare_ card. The _Configure_ interface ( _Cart » Configure_) will appear.
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

#### Installation.

After you complete your purchase, you will get a confirmation email. The email will include KernelCare’s installation instructions. Follow the instructions in the email or read our [How to Install KernelCare documentation](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/).

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