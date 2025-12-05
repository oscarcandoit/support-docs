---
url: "https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/"
title: "How to Install ImunifyAV | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/#main-content)

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
4. How to Install ImunifyAV


[server](https://docs.cpanel.net/tags/server/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/#overview)

* * *

[Feature comparison](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/#feature-comparison)

* * *

[How to install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/#how-to-install-imunifyav)

* * *

[How to uninstall ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/#how-to-uninstall-imunifyav)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/#overview)

* * *

[Feature comparison](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/#feature-comparison)

* * *

[How to install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/#how-to-install-imunifyav)

* * *

[How to uninstall ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/#how-to-uninstall-imunifyav)

* * *

## How to Install ImunifyAV

_Valid for versions 88 through the latest version_

#### Version:

#### [88](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/)

Last modified: _2023 December 7_

* * *

## Overview

ImunifyAV provides additional security by scanning for malware on your server. If ImunifyAV finds any malware, it notifies the user in the _Files_ tab of the _ImunifyAV_ interface ( _WHM » Home » Plugins » ImunifyAV_). Your server will automatically install ImunifyAV for free when you [install cPanel & WHM](https://docs.cpanel.net/installation-guide/install/). Additionally, you can install ImunifyAV for free from WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_). You can also buy a license for [ImunifyAV+](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunifyavplus-license) or [Imunify360](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license) for even more advanced security features.

To learn more about ImunifyAV, visit Imunify’s official [product](https://www.imunify360.com/antivirus/) and [documentation](https://docs.imunifyav.com/imunifyav/) pages.

## Feature comparison

The following table lists the features in each Imunify product:

| Product Name | Detection | Cleanup/Trim |
| --- | --- | --- |
| ImunifyAV | ![](https://docs.cpanel.net/img/checkbox.png) |  |
| ImunifyAV+ | ![](https://docs.cpanel.net/img/checkbox.png) | Manual Trim |
| Imunify360 | ![](https://docs.cpanel.net/img/checkbox.png) | Auto Trim by default |

## How to install ImunifyAV

On the server where you want to install ImunifyAV, perform the following steps:

1. Log in to WHM as the `root` user or as a reseller account with `root`-level privileges.

2. Navigate to WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor) interface ( _WHM » Home » Security Center » Security Advisor_).

3. In the _Install ImunifyAV to scan your websites for malware_ alert, click _Install ImunifyAV_.







Important:





If the _ImunifyAV_ alert does **not** appear in the list of security alerts, one of the following conditions exists on your server:



- Your server does **not** support ImunifyAV.
- You are using a trial account.
- You are **not** a `root` user or a reseller account with `root`-level privileges.

4. A new tab will open to show you the installation status. This installation may take a few minutes.

5. After the installation is complete, you will see a success message. You can either click _Go back_ or close the tab.


You can access ImunifyAV from the [_Plugins_](https://docs.cpanel.net/whm/plugins/) interface ( _WHM » Home » Plugins_).

## How to uninstall ImunifyAV

To uninstall ImunifyAV, refer to Imunify’s [uninstall](https://docs.imunify360.com/imunifyav/#how-to-uninstall-imunifyav) documentation.

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configuration Cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×