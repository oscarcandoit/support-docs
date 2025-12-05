---
url: "https://docs.cpanel.net/whm/packages/edit-a-package/108/"
title: "Edit a Package | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/packages/edit-a-package/108/#main-content)

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
3. [Packages](https://docs.cpanel.net/whm/packages/)
4. Edit a Package


[extensions](https://docs.cpanel.net/tags/extensions/) [packages](https://docs.cpanel.net/tags/packages/) [feature-list](https://docs.cpanel.net/tags/feature-list/) [whmui](https://docs.cpanel.net/tags/whmui/) [jupiter](https://docs.cpanel.net/tags/jupiter/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/packages/edit-a-package/108/#overview)

* * *

[Edit a package](https://docs.cpanel.net/whm/packages/edit-a-package/108/#edit-a-package)

* * *

[Resource options](https://docs.cpanel.net/whm/packages/edit-a-package/108/#resource-options)

* * *

[Settings options](https://docs.cpanel.net/whm/packages/edit-a-package/108/#settings-options)

* * *

[Package Extensions options](https://docs.cpanel.net/whm/packages/edit-a-package/108/#package-extensions-options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/packages/edit-a-package/108/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/packages/edit-a-package/108/#overview)

* * *

[Edit a package](https://docs.cpanel.net/whm/packages/edit-a-package/108/#edit-a-package)

* * *

[Resource options](https://docs.cpanel.net/whm/packages/edit-a-package/108/#resource-options)

* * *

[Settings options](https://docs.cpanel.net/whm/packages/edit-a-package/108/#settings-options)

* * *

[Package Extensions options](https://docs.cpanel.net/whm/packages/edit-a-package/108/#package-extensions-options)

* * *

## Edit a Package

![](https://docs.cpanel.net/img/whm-icons/edit_a_package.svg)

_Valid for versions 108 through 116_

#### Version:

#### [108](https://docs.cpanel.net/whm/packages/edit-a-package/108/)

#### [118](https://docs.cpanel.net/whm/packages/edit-a-package/)

Last modified: _2025 April 28_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature allows you to edit existing packages.

Note:

You **cannot** modify package names. Instead, create a new package with the desired name, and then assign accounts to it.

## Edit a package

To edit an existing package, perform the following steps:

1. Select the package that you wish to edit from the _Package_ menu.

2. Click _Edit_.

3. Make the desired changes.

4. Click _Save Changes_ to save your changes, or _Reset_ to return to the existing values.


## Resource options

Each package includes resource options. If a resource has an _Unlimited_ option, you can select that to give a user an unlimited amount of that resource. You can also select the default value text box and enter a custom resource value. Packages can include the following resource options:

- _Disk Space Quota (MB)_ — The maximum amount of space on the server’s hard drive that the account can use, measured in megabytes (MB).







Note:





Consider the type of content that your users intend to host, because this greatly affects the amount of disk space that they need.

- _Monthly Bandwidth Limit (MB)_ — The amount of information that the account can transfer each month, measured in megabytes (MB).







Note:





Consider the type of content that your users intend to host, because this greatly affects the amount of bandwidth that they need.

- _Max FTP Accounts_ — The maximum number of FTP accounts for the cPanel account.

- _Max Email Accounts_ — The maximum number of email accounts for the cPanel account.

- _Max Mailing Lists_ — The maximum number of Mailman mailing lists for the account. For more information, read our [Mailing Lists](https://docs.cpanel.net/cpanel/email/mailing-lists) documentation.

- _Max SQL Databases_ — The maximum number of each available type of SQL database. For example, if you set this value to 5 and allow MySQL® and PostgreSQL® databases, the account can create up to five MySQL databases and up to five PostgreSQL databases.

- _Max Sub Domains_ — The maximum number of subdomains for the account.

- _Max Parked Domains_ — The maximum number of parked domains (aliases) for the account.

- _Max Addon Domains_ — The maximum number of addon domains for the account.

- _Max Passenger Applications_ — Enter the maximum number of the account’s Passenger applications.

- _Maximum Hourly Email by Domain Relayed_ — The maximum number of emails that any domain on the account can send per hour. This value defaults to _Unlimited_.



Note:





- A value of _0_ will have the same behavior as setting this option to _Unlimited_.
- You **cannot** set this value higher than the _Max hourly emails per domain_ [tweak setting](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail), but you **can** set it lower.

- _Maximum Percentage of Failed or Deferred Messages a Domain May Send Per Hour_ — The maximum percentage of failed or deferred messages that a domain on the account can send before your server temporarily blocks outgoing mail from that domain.
  - The system examines outgoing and local mail over the previous hour to determine whether the domain exceeds the limit.

  - When a domain exceeds the limit, it cannot send mail until the domain no longer exceeds the limit.

  - The default value is _Unlimited_.
- _Max Quota per Email Address (MB)_ — The maximum size that the account can define when it creates an email account, in megabytes (MB). This value defaults to _Unlimited_.







Note:





When you adjust this value it does not affect **existing** email accounts.

- _Max Team Users_ \- The maximum number of team users for the account. For more information, read our [Manage Team](https://docs.cpanel.net/cpanel/preferences/manage-team) documentation.


## Settings options

Packages can include the following setting options:

- _Dedicated IP_ — A static IP address that the account will not share with other accounts unless the user specifies an account with which to share an IP address.







Note:





- You **cannot** edit this option after package creation. To change this setting, you **must** create a new package.
- We recommend this setting for packages that you will apply to reseller accounts.

- _Shell Access_ — Allows the user to access the server through a command line interface.







Note:





We recommend that you provide jailshell user environments if you grant your users shell access. For more information, read our [VirtFS - Jailed Shell](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/) documentation.

- _CGI Access_ — Allows the account to execute CGI scripts.

- _Digest Authentication at account creation_ — Enables Digest Authentication support for Web Disk access over a clear text or unencrypted connection. Users with Microsoft® Windows Vista®, Windows® 7 , and Windows® 8 operating systems require this support.







Note:





This setting is **required** if your server does not have an SSL certificate that a recognized certificate authority has signed.

- _cPanel Theme_ — Select a theme from the menu.

- _Feature List_ — Select a feature list from the menu. Feature lists define which cPanel features your users can access. To view or edit the currently-selected feature, click _View_ to navigate to WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM » Home » Packages » Feature Manager_).







Warning:





The _disabled_ feature list is **not** intended for use with a cPanel account or a package. Instead, assign a cPanel account or package the _default_ feature list, but define the feature you do **not** want available on the server in the _disabled_ feature list.

- _Locale_ \- Select a locale from the menu.


### Package Extensions options

Warning:

You **cannot** use the WHM interface to add or remove installed extensions from an existing package. To use a different set of extensions, use WHM’s [_Add a Package_](https://docs.cpanel.net/whm/packages/add-a-package) interface ( _WHM » Home » Packages » Add a Package_) or [use API calls to modify package extension data](https://api.docs.cpanel.net/guides/guide-to-package-extensions/guide-to-package-extensions-data-behavior-and-changes/).

If any package extensions are installed on your server or are included in the package, the _Package Extensions_ section appears at the bottom of the interface.

Some extensions may include variables that you can edit. Editable options or settings appear below the extension name.

Note:

- Only package extensions that you chose to include in this package display in this section.
- For more information about extension options, consult the extension’s documentation.
- For more information, read our [Guide to Package Extensions](https://api.docs.cpanel.net/guides/guide-to-package-extensions/) documentation.

#### Remove uninstalled extensions

If any of the package’s extensions are not currently installed on the server, a warning message appears. You **must** install the missing extensions before you can edit their values.

If you do not wish to install the missing extensions, perform the following steps:

1. Select the _Remove missing extensions_ from package checkbox.

2. Click _Save Changes_ to remove the extensions from the package.


#### Additional Documentation

* * *

- [Add a Package](https://docs.cpanel.net/whm/packages/add-a-package/)
- [Delete a Package](https://docs.cpanel.net/whm/packages/delete-a-package/)
- [Edit a Package](https://docs.cpanel.net/whm/packages/edit-a-package/)
- [Feature Manager](https://docs.cpanel.net/whm/packages/feature-manager/)
- [Modify/Upgrade Multiple Accounts](https://docs.cpanel.net/whm/multi-account-functions/modify-upgrade-multiple-accounts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×