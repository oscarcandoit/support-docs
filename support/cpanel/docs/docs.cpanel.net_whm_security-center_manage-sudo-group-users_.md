---
url: "https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/"
title: "Manage Sudo Group Users | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/#main-content)

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
4. Manage Sudo Group Users


[authentication](https://docs.cpanel.net/tags/authentication/) [security](https://docs.cpanel.net/tags/security/) [whmui](https://docs.cpanel.net/tags/whmui/) [ssh](https://docs.cpanel.net/tags/ssh/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/#overview)

* * *

[Manage sudo group users](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/#manage-sudo-group-users)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/#overview)

* * *

[Manage sudo group users](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/#manage-sudo-group-users)

* * *

## Manage Sudo Group Users

![](https://docs.cpanel.net/img/whm-icons/manage_wheel_group_users.svg)

_Valid for versions 100 through the latest version_

#### Version:

#### [100](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to manage the sudo group’s membership. The system grants users in the sudo group the permission to execute the `su` command, which allows a user to gain `root` or superuser access.

Important:

- This interface does **not** grant users permission to run the `sudo` command. To grant users permission to execute the `sudo` command, open the `/etc/sudoers` file and uncomment the following line:



```perl
%sudo ALL=(ALL:ALL) ALL
```

- We **strongly** suggest that you use the `visudo` command to open the `/etc/sudoers` file. The `visudo` command opens the `/etc/sudoers` file in a text editor and validates the file’s syntax when you save your changes. For more information about the `visudo` command, read [sudo.ws’s Visudo Manual](http://www.sudo.ws/man/1.8.13/visudo.man.html) documentation.


Note:

This interface changes to [_Manage Wheel Group Users_](https://docs.cpanel.net/whm/security-center/manage-wheel-group-users/) for any server **not** using Ubuntu for its operating system.

## Manage sudo group users

Warning:

Exercise **extreme** caution when you add users to the sudo group.


To add a user to the sudo group, perform the following steps:

1. Select the desired user from the _Add a user to the sudo group_ menu.

2. Click _Add to Group_.


To remove a user from the sudo group, perform the following steps:

1. Select the appropriate user from the _Remove a user from the sudo group_ menu.

2. Click _Remove from Group_.


#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [Manage Wheel Group Users](https://docs.cpanel.net/whm/security-center/manage-wheel-group-users/)
- [Shell Fork Bomb Protection](https://docs.cpanel.net/whm/security-center/shell-fork-bomb-protection/)
- [Two-Factor Authentication for WHM](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×