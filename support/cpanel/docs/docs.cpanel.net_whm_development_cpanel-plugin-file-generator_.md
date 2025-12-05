---
url: "https://docs.cpanel.net/whm/development/cpanel-plugin-file-generator/"
title: "cPanel Plugin File Generator | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/development/cpanel-plugin-file-generator/#main-content)

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
3. [Development](https://docs.cpanel.net/whm/development/)
4. cPanel Plugin File Generator


[whmui](https://docs.cpanel.net/tags/whmui/) [cpanelplugins](https://docs.cpanel.net/tags/cpanelplugins/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/development/cpanel-plugin-file-generator/#overview)

* * *

[Generate a plugin file](https://docs.cpanel.net/whm/development/cpanel-plugin-file-generator/#generate-a-plugin-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/development/cpanel-plugin-file-generator/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/development/cpanel-plugin-file-generator/#overview)

* * *

[Generate a plugin file](https://docs.cpanel.net/whm/development/cpanel-plugin-file-generator/#generate-a-plugin-file)

* * *

## cPanel Plugin File Generator

![](https://docs.cpanel.net/img/whm-icons/cpanel_plugin_file_generator.svg)

_Valid for versions 104 through the latest version_

#### Version:

#### [104](https://docs.cpanel.net/whm/development/cpanel-plugin-file-generator/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface generates a plugin installation file for the cPanel interface’s theme. The installation file automates the plugin installation process and stores the desired configuration for the plugin as a `.tar.gz` file in the `/var/cpanel/cpanel_plugin_generator/` directory.

In the cPanel interface, items function as links to particular interfaces (for example, _Email Accounts_ or _File Manager_). Each item must reside in a group (for example, _Files_ or _Databases_).

Note:

- You **must** log in as the `root` user in order to use this interface.
- For information about how to create plugins manually for the Jupiter Theme, read our [Guide to cPanel Plugins](https://api.docs.cpanel.net/guides/guide-to-cpanel-plugins/) documentation.
- For information about how to add icons and groups to plugins, read our [Guide to cPanel Plugins - Add Plugins](https://api.docs.cpanel.net/guides/guide-to-cpanel-plugins/guide-to-cpanel-plugins-add-plugins/) documentation.

## Generate a plugin file

Important:

This interface does **not** validate the input in the _Name_ and _URI_ text boxes. Make certain that anything that you enter **cannot** adversely affect your server.


To generate a plugin installation file, perform the following steps:

01. Enter the plugin’s unique identifier in the _Unique Identifier_ text box.







    Note:




    If the unique identifier that you enter already exists, a warning message and the _Overwrite existing cPanel item_ checkbox will appear. **Only** select the _Overwrite existing cPanel item_ checkbox if you wish to overwrite the existing plugin. To keep the existing plugin, you **must** enter a different Unique Identifier value.


02. Enter the display name in the _Name_ text box.

03. Select the _Feature Manager Support_ checkbox if you wish to control access to the plugin via WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_).

04. Select the group in which the plugin icon will appear from the _Group_ menu. To create a new group, click the add icon ( `+` ). Enter the new group name in the _New Group Name_ text box.

05. Enter a number between `1` and `99` in the _Priority_ text box. A plugin icon with a priority of `1` appears higher than an icon with a priority of `99`.

06. Enter the plugin location in the _URI_ text box.

07. Click _Browse_ to select an icon file for the plugin.






    Note:





- Icon files **must** use the SVG or PNG format.
- Icons **must** be 48x48 pixels. This interface does **not** resize icon files. As a result, larger images may render incorrectly.

08. Click _Add item_ to add your new item to the _New Plugin Information_ section of the interface.

09. Repeat steps 1 through 7 for all of the items that you wish to include in the plugin installation file.

10. Enter the plugin’s name in the _New Plugin Information_ text box and click _Generate_ to generate the new plugin installation file.






    Note:





- The plugin name can **only** contain lowercase letters, numbers, hyphens ( `-` ), and underscores ( `_` ).
- New plugins **cannot** use the same name as an existing plugin on the server.

To download the new plugin installation file, click the link in the the banner that appears at the top of the interface. The system saves the file in `.tar.gz` format in the `/var/cpanel/cpanel_plugin_generator/` directory.

Note:

This banner disappears when you start to create a new plugin or navigate away from the interface.


After you download the plugin installation file, use the `/usr/local/cpanel/scripts/install_plugin` script to install the plugin for the Jupiter theme.

Important:

Due to the permissions that the `/usr/local/cpanel/scripts/install_plugin` script requires in order to access the necessary files, **only** the `root` user can run this script successfully.


#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [Apps Managed by AppConfig](https://docs.cpanel.net/whm/development/apps-managed-by-appconfig/)
- [Manage API Tokens in WHM](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/)
- [Manage Hooks](https://docs.cpanel.net/whm/development/manage-hooks/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×