---
url: "https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/"
title: "Third Party Software End of Life Policy | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#main-content)

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
4. Third Party Software End of Life Policy


#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#overview)

* * *

[Third-party Software](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#third-party-software)

* * *

[Operating Systems](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#operating-systems)

* * *

[What happens when an OS reaches EOL?](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#what-happens-when-an-os-reaches-eol)

* * *

[How long will cPanel support my chosen operating system?](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system)

* * *

[What should I do if my OS has reached its EOL date?](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#what-should-i-do-if-my-os-has-reached-its-eol-date)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#overview)

* * *

[Third-party Software](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#third-party-software)

* * *

[Operating Systems](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#operating-systems)

* * *

[What happens when an OS reaches EOL?](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#what-happens-when-an-os-reaches-eol)

* * *

[How long will cPanel support my chosen operating system?](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system)

* * *

[What should I do if my OS has reached its EOL date?](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#what-should-i-do-if-my-os-has-reached-its-eol-date)

* * *

## Third Party Software End of Life Policy

Last modified: _2025 October 20_

* * *

## Overview

WebPros International, LLC has established an End of Life (EOL) policy for third-party software and operating systems (OS). An EOL date indicates when we will cease to provide support for that version of the third-party software.

We will retain software without an explicit EOL policy as long as the demand and business need is present.

## Third-party Software

When a vendor no longer provides updates and patches for their software, we will remove the third-party software from cPanel & WHM. We also take the following actions:

- Send you notification of the pending removal from cPanel & WHM.
- cPanel Technical Support staff will no longer support the software. If possible, we recommend upgrading your software to a supported version.

## Operating Systems

A software vendor sets the EOL of an operating system. This is the period of time during which the vendor provides patches, fixes, and other updates.

We support operating systems for the lifetime of the OS. However, there may be circumstances when it is necessary for us to not support an OS for a **new** version of cPanel & WHM before the OS reaches EOL. cPanel & WHM will continue to support that OS on the current and previous versions of cPanel & WHM until that OS reaches EOL. We will announce these changes on the cPanel blog, Release Notes, and through other channels.

Servers that run Ubuntu have a slightly different support cycle. We support cPanel & WHM on LTS versions of Ubuntu. We add support for new versions of Ubuntu when we release a new cPanel & WHM LTS version. When we add support for the next version of Ubuntu, we **deprecate** support for the previous version.

An LTS cPanel & WHM version that coincides with a new Ubuntu release will support both versions of Ubuntu throughout its lifecycle. However, the older Ubuntu version will block upgrades to any newer versions of cPanel & WHM. For example, cPanel & WHM version 118 is the last version of cPanel in which we provide support for Ubuntu 20.04. If you want to upgrade past version 118, you **must** upgrade to Ubuntu 22.04 or later.

### What happens when an OS reaches EOL?

An OS that reaches EOL continues to function normally. Existing cPanel & WHM installations on systems that reach EOL also continue to function normally. We also support an OS whose end of life date overlaps with the **last** LTS version of cPanel & WHM supporting the OS. For example, because Ubuntu 20.04 has an EOL date of June 30, 2025, we support Ubuntu 20.04 through LTS version 118 **only**.

You will be unable to perform the following tasks on an operating system that reaches EOL:

- Fresh installations of cPanel & WHM — We prevent new installations after the OS reaches EOL.
- Upgrades to new versions of cPanel & WHM — We prevent upgrades after the OS reaches EOL.
- OS-specific fixes — We do not provide fixes, security or otherwise, after the OS reaches EOL.

### How long will cPanel support my chosen operating system?

For new installations of cPanel & WHM, we **strongly** recommend that you use an OS with the longest planned support.

| Operating System | EOL Date |
| --- | --- |
| [Red Hat Enterprise Linux 7](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#deprecated-and-removed-features)<br>[CloudLinux™ 6](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#deprecated-and-removed-features) | July 31st, 2024 <br>Note:<br>If you run one of these OSes on an existing server, we encourage you to use [cPanel ELevate](https://cpanel.github.io/elevate/) to upgrade to an AlmaLinux OS 8 server. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/) documentation. |
| [CentOS 7 - Extended Lifecycle Support (ELS) program](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#extended-lifecycle-support-els-program)<br>[CloudLinux 7 - Extended Lifecycle Support (ELS) program](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#extended-lifecycle-support-els-program) | Critical system updates will be available from July 1, 2024 to January 1, 2027 to allow administrators time to upgrade these systems to a supported OS. We recommend you update to a supported OS as soon as possible. |
| [AlmaLinux 8](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/) | March 1, 2029 |
| [AlmaLinux 9](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/) | May 31, 2032 |
| [AlmaLinux 10](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/) | May 31, 2035 |
| [CloudLinux 8](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/) | May 31, 2029 |
| [CloudLinux 9](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/) | May 31, 2032 |
| [Rocky Linux 8](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#deprecated-and-removed-features) | March 31, 2026 |
| [Rocky Linux 9](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#deprecated-and-removed-features) | March 31, 2026 |
| [Ubuntu 22.04 LTS](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/) | June 30, 2027 |
| [Ubuntu 24.04 LTS](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/) | April 2029 |

We will notify you of operating system EOL dates as they approach. We deliver notifications in cPanel & WHM through normal update procedures, and through product documentation that is available on the cPanel website.

### What should I do if my OS has reached its EOL date?

We recommend that you schedule an appropriate time to update the OS of your cPanel server. We also offer users [migration support for EOL OS systems](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/).

The OS update procedure will depend on your OS and operating environment. In some circumstances, an update to the base OS may be available through the OS vendor. In other cases, you may need to provision another cPanel server, migrate the accounts and service configurations onto the new server, and transfer the license.

For example, we do **not** support installations of cPanel & WHM on Amazon Linux 2. We recommend that you migrate all installations on Amazon that use Amazon Linux 1 to instances that use [the cPanel & WHM AWS Marketplace listing](https://go.cpanel.net/amazonAMI).

We will attempt to provide suggestions with EOL notifications.

- For more specific information, contact your technical support provider.
- If you are unsure who to contact, visit our [Support](https://cpanel.net/support/) page.

#### Additional Documentation

* * *

- [How to Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/)
- [How to Install WordPress® With cPanel](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/)
- [The Let's Encrypt Plugin](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×