---
url: "https://docs.cpanel.net/whm/security-center/ssh-password-authorization-tweak/"
title: "SSH Password Authorization Tweak | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/ssh-password-authorization-tweak/#main-content)

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
4. SSH Password Authorization Tweak


[whmui](https://docs.cpanel.net/tags/whmui/) [ssh](https://docs.cpanel.net/tags/ssh/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/ssh-password-authorization-tweak/#overview)

* * *

[How to manage SSH passwords](https://docs.cpanel.net/whm/security-center/ssh-password-authorization-tweak/#how-to-manage-ssh-passwords)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/ssh-password-authorization-tweak/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/ssh-password-authorization-tweak/#overview)

* * *

[How to manage SSH passwords](https://docs.cpanel.net/whm/security-center/ssh-password-authorization-tweak/#how-to-manage-ssh-passwords)

* * *

## SSH Password Authorization Tweak

![](https://docs.cpanel.net/img/whm-icons/ssh_password_authorization_tweak.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/security-center/ssh-password-authorization-tweak/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows you to enable or disable password authorization for SSH authentication. If you disable password authorization, the system will force users to use SSH keys when they access your server through SSH.

## How to manage SSH passwords

Click _Enable Password Auth_ to enable SSH passwords, or click _Disable Password Auth_ to disable them.

The system uses two keys in the SSH daemon configuration file (`/etc/ssh/sshd_config`) to store password authorization status:

| Password Authentication | PasswordAuthentication | ChallengeResponseAuthentication |
| --- | --- | --- |
| _enabled_ | `yes` | `yes` |
| _disabled_ | `no` | `no` |

Warning:

- _Password Authorization_ settings also apply to the `root` user. Use WHM’s [_Manage root’s SSH Keys_](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/) interface ( _WHM » Home » Security Center » Manage root’s SSH Keys_) to create the `root` user’s SSH keys.
- If you disable the _Password Authorization_ setting, your users **must** use SSH keys. Use WHM’s [_Manage root’s SSH Keys_](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/) interface ( _WHM » Home » Security Center » Manage root’s SSH Keys_) to create users’ SSH keys.

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Manage Sudo Group Users](https://docs.cpanel.net/whm/security-center/manage-sudo-group-users/)
- [Manage Wheel Group Users](https://docs.cpanel.net/whm/security-center/manage-wheel-group-users/)
- [Shell Fork Bomb Protection](https://docs.cpanel.net/whm/security-center/shell-fork-bomb-protection/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×