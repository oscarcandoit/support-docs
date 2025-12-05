---
url: "https://docs.cpanel.net/whm/account-functions/manage-shell-access/"
title: "Manage Shell Access | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-functions/manage-shell-access/#main-content)

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
3. [Account Functions](https://docs.cpanel.net/whm/account-functions/)
4. Manage Shell Access


[ssh](https://docs.cpanel.net/tags/ssh/) [jailedshell](https://docs.cpanel.net/tags/jailedshell/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-functions/manage-shell-access/#overview)

* * *

[Manage shell access](https://docs.cpanel.net/whm/account-functions/manage-shell-access/#manage-shell-access)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-functions/manage-shell-access/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-functions/manage-shell-access/#overview)

* * *

[Manage shell access](https://docs.cpanel.net/whm/account-functions/manage-shell-access/#manage-shell-access)

* * *

## Manage Shell Access

![](https://docs.cpanel.net/img/whm-icons/manage_shell_access.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/account-functions/manage-shell-access/)

Last modified: _2025 May 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to manage which of your accounts can access your server remotely from the command line.

Warning:

Many users want this type of access. However, before you grant complete shell access to users, make certain that you consider the security risks. We recommend that you **only** provide jailed shell (sometimes seen as jailshell) access to users, which prevents the execution of certain harmful commands.


## Manage shell access

To modify shell access for all of the accounts on your server, click the appropriate button at the top of the interface. To modify shell access for specific users, select the desired type of access in the row that corresponds to that account.

Note:

The account’s package determines whether the account has shell access. If you change the account’s permission to access a shell, the system will set the value for the account’s package to `undefined` in the account’s `userdata` file.


You can select the following types of shell access:

1. _Normal Shell_ — Select this option to grant the user access to the shell with no limitations.
2. _Jailed Shell_ — Select this option to grant the user access to a jailed shell, which limits the user’s ability to run certain commands that could harm your server. For more information, read our [VirtFS - Jailed Shell](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell) documentation.





Warning:




If you enable a jailed shell on a server runs CloudLinux™, you may cause a security vulnerability with symlinks to files outside of the caged directory. To solve this issue, you **must** enable link traversal protection. For more information, read CloudLinux’s [Link traversal protection](https://docs.cloudlinux.com/cloudlinuxos/cloudlinux_os_kernel/#securelinks-and-link-traversal-protection) documentation.


3. _Disabled Shell_ — Select this option to deny shell access to the user.






Note:




An account with a disabled shell may use SFTP if you enable it. To disable an account’s ability to use SFTP, you **must** set `/bin/false` as the user’s shell. To do this, run the following command as the `root` user, where `username` is the account for which you wish to disable SFTP:



```go
usermod -s /bin/false username
```


#### Additional Documentation

* * *

- [Change Site's IP Address](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [Email All Users](https://docs.cpanel.net/whm/account-functions/email-all-users/)
- [Force Password Change](https://docs.cpanel.net/whm/account-functions/force-password-change/)
- [Limit Bandwidth Usage](https://docs.cpanel.net/whm/account-functions/limit-bandwidth-usage/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×