---
url: "https://docs.cpanel.net/whm/themes/theme-manager/"
title: "Theme Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/themes/theme-manager/#main-content)

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
3. [Themes](https://docs.cpanel.net/whm/themes/)
4. Theme Manager


[branding](https://docs.cpanel.net/tags/branding/) [themes](https://docs.cpanel.net/tags/themes/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/themes/theme-manager/#overview)

* * *

[File dependencies](https://docs.cpanel.net/whm/themes/theme-manager/#file-dependencies)

* * *

[Theme Manager](https://docs.cpanel.net/whm/themes/theme-manager/#theme-manager)

* * *

[Manage Themes](https://docs.cpanel.net/whm/themes/theme-manager/#manage-themes)

* * *

[Preview a theme](https://docs.cpanel.net/whm/themes/theme-manager/#preview-a-theme)

* * *

[Clone a theme](https://docs.cpanel.net/whm/themes/theme-manager/#clone-a-theme)

* * *

[Download a theme](https://docs.cpanel.net/whm/themes/theme-manager/#download-a-theme)

* * *

[Delete a theme](https://docs.cpanel.net/whm/themes/theme-manager/#delete-a-theme)

* * *

[Upload and install a theme](https://docs.cpanel.net/whm/themes/theme-manager/#upload-and-install-a-theme)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/themes/theme-manager/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/themes/theme-manager/#overview)

* * *

[File dependencies](https://docs.cpanel.net/whm/themes/theme-manager/#file-dependencies)

* * *

[Theme Manager](https://docs.cpanel.net/whm/themes/theme-manager/#theme-manager)

* * *

[Manage Themes](https://docs.cpanel.net/whm/themes/theme-manager/#manage-themes)

* * *

[Preview a theme](https://docs.cpanel.net/whm/themes/theme-manager/#preview-a-theme)

* * *

[Clone a theme](https://docs.cpanel.net/whm/themes/theme-manager/#clone-a-theme)

* * *

[Download a theme](https://docs.cpanel.net/whm/themes/theme-manager/#download-a-theme)

* * *

[Delete a theme](https://docs.cpanel.net/whm/themes/theme-manager/#delete-a-theme)

* * *

[Upload and install a theme](https://docs.cpanel.net/whm/themes/theme-manager/#upload-and-install-a-theme)

* * *

## Theme Manager

![](https://docs.cpanel.net/img/whm-icons/theme_manager.svg)

_Valid for versions 108 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/whm/themes/theme-manager/)

Last modified: _2024 October 24_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Theme Manager_ interface allows you to install, preview, clone, download, and delete custom themes for the [_cPanel_](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface), [_Login_](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account), and [_Webmail_](https://docs.cpanel.net/webmail/the-webmail-interface) interfaces. The theme contains many elements, such as HTML and CSS.

Note:

- You **cannot** create custom themes or localization for WHM.
- You **cannot** use this interface to customize a theme. Use WHM’s [_Customization_](https://docs.cpanel.net/whm/cpanel/customization) interface ( _WHM » Home » cPanel » Customization_) to apply changes to this interface.

### File dependencies

When you create your own themes or use a theme that WebPros International, LLC does not provide, you **must** ensure that the following files exist:

- `/usr/local/cpanel/base/frontend/$theme/passwd/changepass.html`

- `/usr/local/cpanel/base/frontend/$theme/passwd/index.html`


These files control interfaces that the system uses whenever you change a cPanel user’s password. If you do not copy or create these interfaces, users **cannot** change their passwords if the following conditions are true:

- You used WHM’s [_Force Password Change_](https://docs.cpanel.net/whm/account-functions/force-password-change) interface ( _WHM » Home » Account Functions » Force Password Change_) to require the user to change the account’s password.

- The user’s password is too old or too weak, as you defined in WHM’s [_Configure Security Policies_](https://docs.cpanel.net/whm/security-center/configure-security-policies) interface ( _WHM » Home » Security Center » Configure Security Policies_).


## Theme Manager

The _Theme Manager_ interface allows you to install, preview, clone, download, and delete custom themes for the following interfaces:

- _Default cPanel Themes_ — When you click _Customize Themes_ under _Default cPanel Themes_, the system directs you to WHM’s [_Customization_](https://docs.cpanel.net/whm/cpanel/customization) interface ( _WHM » Home » cPanel » Customization_).

- _cPanel_ — A theme for the cPanel interface. Click [_Manage Themes_](https://docs.cpanel.net/whm/themes/theme-manager/#manage-themes) to install, preview, clone, download, and delete custom themes.

- _Login_ — The theme that appears on the cPanel login interface. Click [_Manage Themes_](https://docs.cpanel.net/whm/themes/theme-manager/#manage-themes) to install, preview, clone, download, and delete custom themes.

- _Webmail_ — The theme that appears on the cPanel webmail interface. Click [_Manage Themes_](https://docs.cpanel.net/whm/themes/theme-manager/#manage-themes) to install, preview, clone, download, and delete custom themes.


## Manage Themes

After you select a theme to manage, you can install, preview, clone, download, and delete a theme.

Note:

For the _cPanel_ and _Webmail_ options, you **must** upload and install a custom theme before you can preview, clone, download, or delete one.

### Preview a theme

To preview a theme, click the _view_ icon (![View](https://docs.cpanel.net/img/view.png)) that corresponds to the theme that you wish to view.

### Clone a theme

When you clone a theme, the system creates a copy of the theme. To clone a theme, perform the following steps:

1. Click the _clone_ icon (![Clone](https://docs.cpanel.net/img/clone.png)) that corresponds to the theme that you wish to edit. A new interface will appear.

2. Enter a name for the cloned theme in the text box.

3. Click _Submit_. The system will clone the theme and display it in the _Themes_ table.


### Download a theme

To download a theme, click the _Download_ icon (![Download](https://docs.cpanel.net/img/download.png)). Your browser will download the file.

### Delete a theme

To delete a theme, perform the following steps:

1. Click the _Delete_ icon (![Delete](https://docs.cpanel.net/img/delete.png)). The system will direct you to a confirmation interface.

2. Click _Yes_ to confirm that you wish to delete the theme or click _No_ to cancel.


### Upload and install a theme

To upload or install new themes, perform the following steps:

1. Click _Manage Themes_ for the desired interface.

2. Under the _Install Theme_ heading, click _Choose File_. Select the new theme’s file.

3. Click _Upload_. The new theme will appear in the _Themes_ table.


#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [Add a New IP Address](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [Customization](https://docs.cpanel.net/whm/cpanel/customization/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×