---
url: "https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/"
title: "How to Install KernelCare | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#main-content)

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
4. How to Install KernelCare


[server](https://docs.cpanel.net/tags/server/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#overview)

* * *

[Install KernelCare](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#install-kernelcare)

* * *

[Check for compatible kernels](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#check-for-compatible-kernels)

* * *

[Choose and run your preferred command](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#choose-and-run-your-preferred-command)

* * *

[Register the license key](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#register-the-license-key)

* * *

[Check for applied patches](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#check-for-applied-patches)

* * *

[Manually check for patch updates](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#manually-check-for-patch-updates)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#overview)

* * *

[Install KernelCare](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#install-kernelcare)

* * *

[Check for compatible kernels](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#check-for-compatible-kernels)

* * *

[Choose and run your preferred command](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#choose-and-run-your-preferred-command)

* * *

[Register the license key](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#register-the-license-key)

* * *

[Check for applied patches](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#check-for-applied-patches)

* * *

[Manually check for patch updates](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-kernelcare/#manually-check-for-patch-updates)

* * *

## How to Install KernelCare

Last modified: _2022 July 19_

* * *

## Overview

This document describes how to install the KernelCare software via the command line. KernelCare automatically updates your system’s Linux® kernel without the need for a reboot.

Note:

To automatically install KernelCare through WHM, read the Purchase from WHM section of our [How to Purchase a KernelCare License](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/) documentation.

## Install KernelCare

Important:

- You **must** run these commands as the `root` user.
- To install and run KernelCare, you **must** disable Secure Boot if you enabled Secure Boot previously.

### Check for compatible kernels

Before you purchase and install KernelCare, make certain that your system possesses a compatible kernel. To do this, read the [KernelCare documentation](https://patches.kernelcare.com/).

### Choose and run your preferred command

You can choose between two different SSH commands to begin the KernelCare installation process. To begin the KernelCare installation process, run **one** of the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>curl -s https://repo.cloudlinux.com/kernelcare/kernelcare_install.sh | bash<br>wget -qq -O - https://repo.cloudlinux.com/kernelcare/kernelcare_install.sh | bash<br>``` |

### Register the license key

Important:

You can skip this step if you purchased a KernelCare license from the cPanel Store. KernelCare licenses use IP-based licensing, which you don’t need to register.

The KernelCare license key deploys and registers your server. To register your key, run the following command:

```perl
/usr/bin/kcarectl --register $kc_key
```

### Check for applied patches

After you register KernelCare, you will need to check for applied patches. This ensures that the automated kernel security updates ran properly on your server. To check for applied patches, run the following command:

```perl
/usr/bin/kcarectl --info
```

### Manually check for patch updates

KernelCare will automatically check for new patches every four hours. If you want to check for new patches yourself, run the following command:

```perl
/usr/bin/kcarectl --update
```

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