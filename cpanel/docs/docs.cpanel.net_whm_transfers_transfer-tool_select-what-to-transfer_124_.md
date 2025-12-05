---
url: "https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/"
title: "Transfer Tool — Select What to Transfer | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#main-content)

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
3. [Transfers](https://docs.cpanel.net/whm/transfers/)
4. Transfer Tool — Select What to Transfer


[whmui](https://docs.cpanel.net/tags/whmui/) [transfers](https://docs.cpanel.net/tags/transfers/)

#### Table of Contents

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
- [Prepare The Source Server](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/)
- [Select What to Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/)
[Overview](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#overview) [Accounts](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#accounts) [How to copy accounts](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#how-to-copy-accounts) [Packages](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#packages) [How to copy packages](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#how-to-copy-packages) [Package and feature list naming](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#package-and-feature-list-naming) [Service Configurations](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#service-configurations) - [The Transfer Process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/)
- [After The Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/)
- [Only Transfer IP Address](https://docs.cpanel.net/whm/transfers/transfer-tool/only-transfer-ip-address/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#installation-toggle)

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
- [Prepare The Source Server](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/)
- [Select What to Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/)
[Overview](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#overview) [Accounts](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#accounts) [How to copy accounts](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#how-to-copy-accounts) [Packages](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#packages) [How to copy packages](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#how-to-copy-packages) [Package and feature list naming](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#package-and-feature-list-naming) [Service Configurations](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/#service-configurations) - [The Transfer Process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/)
- [After The Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/)
- [Only Transfer IP Address](https://docs.cpanel.net/whm/transfers/transfer-tool/only-transfer-ip-address/)

## Transfer Tool — Select What to Transfer

![](https://docs.cpanel.net/img/whm-icons/transfer_tool.svg)

_Valid for versions 124 through 128_

#### Version:

#### [124](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/124/)

#### [130](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/)

Last modified: _2025 September 3_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Once you have prepared a source server in WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool) interface ( _WHM » Home » Transfers » Transfer Tool_), this section will appear to allow you to select which configurations, packages, and accounts you want to transfer to the destination server.

## Accounts

You can view this tab after you [prepare a source server](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server) to use WHM’s _Transfer Tool_ interface ( _WHM » Home » Transfers » Transfer Tool_). This tab allows you to transfer cPanel accounts to this server.

### How to copy accounts

To copy accounts, perform the following steps:

1. Select the checkbox for each cPanel account that you wish to transfer.
   - To copy all of the accounts that the interface currently displays, select the checkbox at the top of the column in the table header.
   - Use the _Search_ text box to filter the list of accounts.
   - Click a column header to sort the accounts by that column.
2. By default, the system adopts the username from the source server. To specify a new username, enter the new username in the _User_ text box.






Note:





The _User_ text boxes display the following colors as warning indicators:



- A red highlight indicates that the username or domain already exists on this server. The account will fail to transfer if you do not change the username, select _Overwrite_, or select _Overwrite with delete_. You cannot transfer an account that uses the same domain.
- A green checkmark (![checkmark](https://docs.cpanel.net/img/green-checkmark-transfer.png)) indicates that the account does not already exist.

3. Select the accounts to which the system will assign dedicated IP addresses under the _Dedicated IP Address_ heading. The interface will select the _Dedicated IP_ checkbox for accounts that currently use a dedicated IP address.






Warning:





You can **only** assign available dedicated IP addresses from your server. If your server doesn’t have the required number of available IP addresses, the transfer will fail.

4. Click _Default_ to show the _What to Transfer_ section. The following settings will appear:

   - _Home Directory_ — Transfer the account’s home directory. When you transfer the home directory, the system checks whether it can run the [`rsync`](https://en.wikipedia.org/wiki/Rsync) command. If the system does not find an error, it will `rsync` the home directory when the system completes the transfer.
   - _Reseller Privileges_ — Retain the account’s reseller privileges.
   - _Databases_ — Transfer the account’s databases. If the destination server contains a database with the **same name** as a database on your source server, the Transfer Tool will **rename** the source server’s database during the transfer. This prevents corruption problems. To avoid this issue, rename or remove the database on the destination server before transfer.
   - _Bandwidth Data_ — Transfer the account’s bandwidth data.
   - _Integration Links_ — Transfer the account’s integration links.
5. Click _Default_ to show the _Live Transfer_ section.






Note:





For more information, read our [Live Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/#live-transfer) documentation.

6. If your server uses a [linked node](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles), click _Default_ to show the _Linked Node Options_ section. The following settings will appear:

   - _Use only this server. Transfer or restore locally._ — Transfer the account to the local server.
   - The alias and hostname of an existing cPanel & WHM server node. For example, _mailserver (mailnode.example.com)_. — Transfer the account’s mail services to the selected linked node.
7. Click _Apply_ to save the _What to Transfer_ and _Linked Node Options_ settings for this account. You can click _Apply to other selected accounts_ to apply these settings to all currently selected accounts. To apply the default settings for this account, click _Reset_.
8. The _Overwrite_ column displays a menu that allows you to overwrite local data for the transfer.

   - _Do Not Overwrite_ — Do **not** perform an overwrite.
   - _Overwrite_ — Overwrite the home directory on the destination server with the contents of the source server. Do **not** delete any other files or directories on the destination server.
   - _Overwrite with Delete_ — Overwrite the home directory on the destination server with the contents of the source server. **Delete** all files and directories on the destination server that don’t exist on the source server.






     Warning:





     This setting will overwrite or delete **all** files on the destination server for the cPanel account. You **cannot** reverse this action. We **strongly** recommend that you first create a backup of the account.
9. Click _Copy_. The transfer will begin, and the [_Account Transfer_](https://docs.cpanel.net/whm/transfers/account-transfer/) interface will appear.

#### SNI information

Important:

To transfer SNI information, you **must** select the _Home Directory_ setting.

If you do **not** select the _Home Directory_ setting, the system will **not** add the necessary SNI information to Dovecot’s configuration files. To manually configure SNI information in Dovecot’s configuration files after an alternative transfer of home directories, run the following command:

```bash
/usr/local/cpanel/scripts/build_mail_sni --rebuild_dovecot_sni_conf --restartsrvs
```

Accounts will retain their mailbox format settings from the source server. For example, if an account uses the maildir format on the source server, it will use the maildir format on the destination server.

## Packages

In this section of the _Account List_ interface, select the packages on the source server to copy to your destination server.

### How to copy packages

Note:

the Transfer Tool feature transfers feature lists for the packages that you select.

To copy a package, perform the following steps:

1. Select the packages that you wish to copy.
   - Select the checkbox in the table header to select all of the packages from the source server.
   - Use the _Search_ text box to filter the list of packages.
   - Use the navigation controls to page through the list of packages.
   - Click a column header to sort the packages by that column.
2. Click _Copy_. The transfer will begin. This will also transfer any accounts that you select in the _Accounts_ tab.






Warning:





- The system will overwrite any packages or feature lists with the same name that exist on the destination server.
- If the transfer fails to create a new package or feature list, it will assign the default package or feature list to the account.

### Package and feature list naming

The Transfer Tool feature performs the following actions during package transfers:

- The restore system attempts to extract the package information from the `cpmove` file. If the package does not already exist on the destination system, the system creates the package and assigns it to the account. If the system cannot create the package, the system assigns the default package to the account.
- If the feature list for the account exists on the destination system, the system assigns it to the account. If the feature list does not exist, the system assigns the default feature list to the account.
- You can transfer a new package and feature list with the same name as a package that already exists on the destination server. This package will override the previous package’s settings.

## Service Configurations

In this section of the _Account List_ interface, select the configuration settings on the source server that you wish to copy to a destination server.

You can transfer the following configurations:

- AutoSSL Options






Note:





This module does not modify the SSL provider. To update your SSL provider, use WHM’s [_Manage AutoSSL_](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) interface ( _WHM » Home » SSL/TLS » Manage AutoSSL_).

- Backups
- cPanel & WHM (`whmconf`)






Note:





This configuration includes WHM’s common settings that aren’t user-specific. For example, the settings from WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_) and WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_).

- Database Server






Note:





When you transfer remote MySQL databases, the Transfer Tool feature includes any comments associated with the remote MySQL server. For more information about remote MySQL comments, read our [Remote Database Access](https://docs.cpanel.net/cpanel/databases/remote-database-access/) documentation.

- EasyApache
- Exim
- GreyList
- Hulk






Note:





- The Transfer Tool feature does **not** copy history reports.
- The Transfer Tool feature **appends** whitelist- and blacklist-management configuration settings. It does not replace these configuration settings.

- ModSecurity®





Note:




The _EasyApache_ service configuration also contains some ModSecurity settings. Use the ModSecurity service configuration to affect only the ModSecurity settings.


- User Interface Themes

For more information about the files that the system transfers for each configuration, read [the `cpconftool` script](https://docs.cpanel.net/whm/scripts/the-cpconftool-script) documentation.

To select your desired configurations, perform the following steps:

1. The _Configuration Name_ and _Analysis_ columns display the available configurations and versions. You may need to click _Show_ for the available configurations to appear.
2. Select the configurations that you wish to transfer to your local server.






Note:





- The system displays warning messages in yellow and blocker messages in red text.
- If you receive a blocker message, the system disables the _EasyApache_ setting.

3. Click _Copy_. The transfer will begin, and the system will display the progress interface. This will also transfer any accounts that you select in the _Accounts_ tab.






Note:





- You **cannot** click _Copy_ until you select a configuration to transfer.
- The _Transfer_ column displays the status of all configurations from the source server.
- The _Restore_ column displays the status of all configurations to the destination server.
- The system displays any error messages in yellow and warning messages in red text.

The summary bar displays the transferred or restored configurations.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×