---
url: "https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/"
title: "Symlink Race Condition Protection | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [EasyApache4](https://docs.cpanel.net/ea4/)
3. [Apache](https://docs.cpanel.net/ea4/apache/)
4. Symlink Race Condition Protection


[apache](https://docs.cpanel.net/tags/apache/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#overview)

* * *

[The symlink race condition vulnerability](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#the-symlink-race-condition-vulnerability)

* * *

[Ways to address the vulnerability](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#ways-to-address-the-vulnerability)

* * *

[KernelCare patch sets](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#kernelcare-patch-sets)

* * *

[cagefs](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#cagefs)

* * *

[CloudLinux SecureLinks](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#cloudlinux-securelinks)

* * *

[The Bluehost patch with cPanel modifications](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#the-bluehost-patch-with-cpanel-modifications)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#overview)

* * *

[The symlink race condition vulnerability](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#the-symlink-race-condition-vulnerability)

* * *

[Ways to address the vulnerability](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#ways-to-address-the-vulnerability)

* * *

[KernelCare patch sets](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#kernelcare-patch-sets)

* * *

[cagefs](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#cagefs)

* * *

[CloudLinux SecureLinks](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#cloudlinux-securelinks)

* * *

[The Bluehost patch with cPanel modifications](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#the-bluehost-patch-with-cpanel-modifications)

* * *

## Symlink Race Condition Protection

Last modified: _2024 September 12_

* * *

## Overview

This document explains how to implement symlink race condition protection on systems that run EasyApache 4.

## The symlink race condition vulnerability

WHM’s [_Global Configuration_](https://docs.cpanel.net/whm/service-configuration/global-configuration/) interface ( _WHM » Home » Service Configuration » Apache Configuration » Global Configuration_) allows you to configure various Apache® options that reside in the root (`/`) directory.

- The _FollowSymlinks_ option exposes Apache to a symlink security vulnerability. This symlink vulnerability allows a malicious user to serve files from anywhere on a server that strict operating system-level permissions do not protect.
- The _SymLinksIfOwnerMatch_ option exposes Apache to a race condition through symlinks. This vulnerability allows a malicious user to change a symlink multiple times during the interval between when Apache checks for a file’s presence and creates the file. This action allows the malicious user to inject malicious content that links to a user-owned file.

For more information about symlink races, read Wikipedia’s [Symlink race](https://wikipedia.org/wiki/Symlink_race) article.

## Ways to address the vulnerability

- [KernelCare patch sets](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#kernelcare-patch-sets)
- [cagefs](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#cagefs)
- [CloudLinux SecureLinks](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#cloudlinux-securelinks)
- [The Bluehost patch with cPanel modifications](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection/#the-bluehost-patch-with-cpanel-modifications)

### KernelCare patch sets

Note:

- We **only** offer these options for systems that run on CentOS 7, [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/), or [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/) kernels.
- For more information about KernelCare and its symlink protection options, read KernelCare [Installation](https://docs.kernelcare.com/installation/) documentation.

KernelCare provides two patches that offer symlink protection for systems that run CentOS 7, Rocky Linux, or AlmaLinux kernels:

| Type | Description |
| --- | --- |
| **Extra** | If you purchase and install KernelCare, you can also install the KernelCare “Extra” Patchset, which includes KernelCare Symlink Protection. |
| **Free** | If you do **not** install KernelCare, you can install KernelCare’s Free Patch Set, which includes KernelCare Free Symlink Protection. If you install the Free Patch Set and then later purchase and install KernelCare, the “Extra” Patchset will replace the Free Patch Set. |

If you install either option, disable the _Symlink Protection_ option in the [_Global Configuration_](https://docs.cpanel.net/whm/service-configuration/global-configuration/) section of WHM’s [_Apache Configuration_](https://docs.cpanel.net/whm/service-configuration/apache-configuration/) interface ( _WHM » Home » Service Configuration » Apache Configuration_).

- We offer both of these options via WHM’s [_Security Advisor_](https://docs.cpanel.net/whm/security-center/security-advisor/) interface ( _WHM » Home » Security Center » Security Advisor_).
- Both of these options install the KernelCare Client, which automatically manages KernelCare software updates.

### cagefs

We **strongly** recommend that you use this option to address the race condition vulnerability. We support this option on **all** cPanel & WHM platforms that run on CloudLinux™. If you change your `cagefs` configuration settings, you **must** run the `cagefsctl --update` command to implement these changes on your system.

For more information, read CloudLinux’s [CageFS](https://docs.cloudlinux.com/legacy/cloudlinux_os_components/#cagefs) documentation.

Warning:

If you enable `cagefs` on a server runs CloudLinux, you may cause a security vulnerability with symlinks to files outside of the caged directory. To solve this issue, you **must** enable link traversal protection. For more information, read CloudLinux’s [Link traversal protection](https://docs.cloudlinux.com/legacy/cloudlinux_os_kernel/#securelinks-and-link-traversal-protection) documentation.


### CloudLinux SecureLinks

CloudLinux SecureLinks provides a safe option to address the race condition vulnerability. This option prevents symlink attacks at the kernel level. CloudLinux installs this option by default, but it does not affect virtual hosts that do not specify a user ID.

For more information, read CloudLinux’s [SecureLinks](https://cloudlinux.com/getting-started-with-cloudlinux-os/41-security-features/933-activating-securelink/) documentation.

### The Bluehost patch with cPanel modifications

Important:

We recommend that you only use this patch if you **cannot** implement any of the other options. Malicious users could circumvent this patch.

cPanel & WHM only provides the [Bluehost.com-provided patch](http://bluehost.com/) with some modifications. We provide this patch with EasyApache 4, but it does **not** provide as reliable of protection as kernel or file-system level solutions. This patch can slow the performance of high-traffic servers and is **not** compatible with Mailman or CGI Center applications.

#### About the Bluehost patch

The Bluehost patch improves Apache’s ability to detect a race condition. The Bluehost patch modifies Apache and the Apache Portable Runtime (APR) library so that Apache cannot access certain files. The patch helps to ensure that the system can **only** access files that the domain’s owner owns. However, the Bluehost patch **only** affects requests for static files such as `.html` and image files. The Bluehost patch does **not** affect requests that the system processes with application content handlers such as the `mod_ruid2`, `mod_cgi`, and `mod_suphp` Apache modules.

If your system does not handle requests on a per-user basis, then the system serves requests as the `nobody` user. When an application creates files that the `nobody` user owns, the file’s owner does **not** match the domain’s owner. Because the patch prevents access to static content that does not match the owner, the user **cannot** view these files.

#### Enable the symlink race condition patch with EasyApache 4

To use the symlink protection patch, select _On_ for the _Symlink Protection_ option in the [_Global Configuration_](https://docs.cpanel.net/whm/service-configuration/global-configuration/) section of WHM’s [_Apache Configuration_](https://docs.cpanel.net/whm/service-configuration/apache-configuration/) interface ( _WHM » Home » Service Configuration » Apache Configuration_ » _Global Configuration_).

To enable the patch manually, set the following directives:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>SymlinkProtect On|Off<br>SymlinkProtectRoot /var/www/html<br>``` |

Warning:

- EasyApache 4 does **not** apply this patch by default.
- This patch may slow the performance of high-traffic servers.
- If you already use a custom patch for the race condition (such as the `FollowSymLinks_to_OwnerMatch.patch`), you **must** either remove your custom patch or not enable the _Symlink Protection_ option.

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