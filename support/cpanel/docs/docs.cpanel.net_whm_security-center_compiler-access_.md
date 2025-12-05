---
url: "https://docs.cpanel.net/whm/security-center/compiler-access/"
title: "Compiler Access | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/compiler-access/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Security Center](https://docs.cpanel.net/whm/security-center/)
4. Compiler Access


[security](https://docs.cpanel.net/tags/security/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/compiler-access/#overview)

* * *

[Manage Compiler Group](https://docs.cpanel.net/whm/security-center/compiler-access/#manage-compiler-group)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/compiler-access/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/compiler-access/#overview)

* * *

[Manage Compiler Group](https://docs.cpanel.net/whm/security-center/compiler-access/#manage-compiler-group)

* * *

## Compiler Access

![](https://docs.cpanel.net/img/whm-icons/compiler_access.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/security-center/compiler-access/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface lets you manage your server’s [C and C++ compiler](https://en.wikipedia.org/wiki/Compiler) user access. This can help you protect your server from attacks that exploit compiler vulnerabilities.

- To enable the compilers for all users, click _Enable Compilers_.
- To disable compilers for all unprivileged users, click _Disable Compilers_.

By default, the system enables compiler access. The system also sets the `/usr/bin/gcc` file to the `0755` permissions and the file’s ownership to the `root` user. This allows **all** users access to compilers. For example, the system’s `/usr/bin/gcc` file might resemble the following entry:

```bash
-rwxr-xr-x 2 root root 768648 Aug 6 11:52 gcc
```

When you disable compiler access, the system changes the `/usr/bin/gcc` file to the `0750` permissions. The file also maintains the `root` ownership. However, the system updates the `/usr/bin/gcc` file to the `compiler` group. For example:

```bash
-rwxr-x--- 2 root compiler 768648 Aug 6 11:55 gcc
```

Disabling compiler access also creates a `compiler` group entry in the `/etc/group` file. The group entry contains the `cpanel` user, and any users that you add to the _Allow specific users to use the compilers_ list. For example:

```bash
compiler:x:989:cpanel,username
```

## Manage Compiler Group

When you disable compiler access, the system displays the _Allow specific users to use the compilers_ setting. When you select this, the system directs you to the _Manager Compiler Group_ interface. Use this interface to manage user access to the compilers.

To grant compiler access to specific users, perform the following steps:

1. Click _Allow specific users to use the compilers_.
2. Select the desired user from the _Add a user to the compiler group_ menu.
3. Click _Add to Group_.

To remove compiler access from a user, perform the following steps:

1. Select the user from the _Remove a user from the compiler group_ menu.
2. Click _Remove from Group_.

Warning:

- When you modify your system’s compiler access, make certain to review the list of users in the _Manager Compiler Group_ interface. The system does **not** automatically update this list.

- If the `compiler` group contains a user without a corresponding cPanel account, someone modified the `/etc/group` file to add that user.


#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Host Access Control](https://docs.cpanel.net/whm/security-center/host-access-control/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [Manage Sudo Group Users](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×