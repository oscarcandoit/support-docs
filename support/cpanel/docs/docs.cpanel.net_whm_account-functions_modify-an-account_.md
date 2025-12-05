---
url: "https://docs.cpanel.net/whm/account-functions/modify-an-account/"
title: "Modify an Account | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-functions/modify-an-account/#main-content)

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
4. Modify an Account


[accounts](https://docs.cpanel.net/tags/accounts/) [jupiter](https://docs.cpanel.net/tags/jupiter/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-functions/modify-an-account/#overview)

* * *

[Modify an account](https://docs.cpanel.net/whm/account-functions/modify-an-account/#modify-an-account)

* * *

[Basic information](https://docs.cpanel.net/whm/account-functions/modify-an-account/#basic-information)

* * *

[Linked Server Nodes](https://docs.cpanel.net/whm/account-functions/modify-an-account/#linked-server-nodes)

* * *

[Resource Limits](https://docs.cpanel.net/whm/account-functions/modify-an-account/#resource-limits)

* * *

[Account Enhancements](https://docs.cpanel.net/whm/account-functions/modify-an-account/#account-enhancements)

* * *

[Privileges](https://docs.cpanel.net/whm/account-functions/modify-an-account/#privileges)

* * *

[DNS Settings](https://docs.cpanel.net/whm/account-functions/modify-an-account/#dns-settings)

* * *

[Package Extensions](https://docs.cpanel.net/whm/account-functions/modify-an-account/#package-extensions)

* * *

[Package Conflict Resolution](https://docs.cpanel.net/whm/account-functions/modify-an-account/#package-conflict-resolution)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-functions/modify-an-account/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-functions/modify-an-account/#overview)

* * *

[Modify an account](https://docs.cpanel.net/whm/account-functions/modify-an-account/#modify-an-account)

* * *

[Basic information](https://docs.cpanel.net/whm/account-functions/modify-an-account/#basic-information)

* * *

[Linked Server Nodes](https://docs.cpanel.net/whm/account-functions/modify-an-account/#linked-server-nodes)

* * *

[Resource Limits](https://docs.cpanel.net/whm/account-functions/modify-an-account/#resource-limits)

* * *

[Account Enhancements](https://docs.cpanel.net/whm/account-functions/modify-an-account/#account-enhancements)

* * *

[Privileges](https://docs.cpanel.net/whm/account-functions/modify-an-account/#privileges)

* * *

[DNS Settings](https://docs.cpanel.net/whm/account-functions/modify-an-account/#dns-settings)

* * *

[Package Extensions](https://docs.cpanel.net/whm/account-functions/modify-an-account/#package-extensions)

* * *

[Package Conflict Resolution](https://docs.cpanel.net/whm/account-functions/modify-an-account/#package-conflict-resolution)

* * *

## Modify an Account

![](https://docs.cpanel.net/img/whm-icons/modify_an_account.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/whm/account-functions/modify-an-account/106/)

#### [124](https://docs.cpanel.net/whm/account-functions/modify-an-account/124/)

#### [130](https://docs.cpanel.net/whm/account-functions/modify-an-account/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Modify an Account_ interface allows you to make changes to an existing account.

## Modify an account

To modify an account, perform the following steps:

1. Select the desired account and click _Modify_.

2. Make changes to the settings in the sections below.

3. Click _Save_. The account will update to use the modified data.


Note:

- If you make changes to the _Resource Limits_, _Privileges_, _DNS Settings_, or _Package Extensions_ sections, the [_Package Conflict Resolution_](https://docs.cpanel.net/whm/account-functions/modify-an-account/#package-conflict-resolution) dialog box appears.

- By default, the system makes the necessary changes to the server’s firewall when you modify an account. To disable this behavior, enable the _Do not make changes to the firewall during account modification._ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).


### Basic information

This section allows you to edit the following settings:

- _Primary Domain_ — Enter a new primary domain. The primary domain’s details appear in the _General Information_ section of [the cPanel interface](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/#general-information). The primary domain is the domain associated with the cPanel username, and typically has its [document root](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#document-root) in the `public_html` directory. cPanel users **cannot** modify their primary domain’s [document root](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/#new-document-root) or [delete the domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/#remove-the-domain). If the account uses a [temporary domain](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain), select the _Replace with a registered domain_ option to update the account to use a [registered domain](https://docs.cpanel.net/whm/account-functions/modify-an-account/#registered-and-temporary-domains).






Note:




Changing the primary domain will also update usernames for any email, FTP, or Web Disk accounts that contain the primary domain, and will update the server’s DNS records to map the primary domain’s IP address to the new domain name. The account’s files and home directories for FTP and Web Disk service accounts will **not** change.


- _Username_ — Enter a username. The new username must meet the following requirements:
  - You **must** choose a unique username that contains 16 characters or fewer.
  - The username **must** contain only letters and numbers.
  - The username **cannot** start with a number or the string `test`.
  - If you plan to use MySQL or PostgreSQL as a database engine, the first eight characters **must** be unique on the system to prevent issues with database prefixing and account transfers. However, this restriction does **not** apply to servers that run MariaDB.






    Note:





- You can disable database prefixing with the _Add prefix to names of new databases and database users_ setting in the SQL section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).
- Only the `root` user can rename a self-owned reseller account.
- For more information about username restrictions, read our [Reserved, Invalid, and Misconfigured Usernames](https://docs.cpanel.net/knowledge-base/accounts/reserved-invalid-and-misconfigured-username) documentation.

Warning:

- If you **must** change the account username, we recommend that the new name be the same length or shorter. A longer name may cause MySQL® to truncate the account’s database names and database usernames, which causes problems.
- If you change the username of an account, the following problems may occur:
  - You **cannot** use the associated websites and databases while the data transfers to the new username.
  - The system renames the user’s home directory.
  - Make certain to verify the account’s integrity after the transfer finishes.
- _Rename prefixed databases and database users_ — The system selects the _Rename prefixed databases and database users_ checkbox by default. Deselect this checkbox to rename only the cPanel account itself.
  - If database prefixing is active on the server, this function changes the names of associated database objects (databases and database users) to use the first eight characters of the new username as a database prefix. For example, if you change the `example` username to `example1`, the system will rename the `example_db` database to `example1_db` and the `fred_db1` user to `example1_db1`, but name of the `steve` database will not change.







    Important:





- When you rename an account, you can rename the account’s databases and database users to preserve the visual correspondence between database names and the username. However, this causes errors in applications that depend on the previous names.

- If you do not rename the prefixed databases and database users, PostgreSQL® users **cannot** log in until they reset their passwords.


  - MySQL does **not** allow you to rename a database. When cPanel & WHM “renames” a database, the system performs the following steps:
    1. The system creates a new database.
    2. The system moves data from the old database to the new database.
    3. The system recreates grants and stored code in the new database.
    4. The system deletes the old database and its grants.






       Warning:





- If **any** of the first three steps fail, the system returns an error and attempts to restore the database’s original state. If the restoration process fails, the API function’s error response describes these additional failures.
- In rare cases, the system creates the second database successfully, but fails to delete the old database or grants. The system treats the rename action as a success; however, the API function returns warnings that describe the failure to delete the old database or grants.
- _Account Owner_ — Select a new account owner from the list of resellers.

- _Contact Email_ — Enter a new contact email for the account’s owner.

- _Default Locale_ — Select a new default locale.

- _cPanel Theme_ — Select a theme from the menu. To modify the theme and associated style for multiple accounts, use the `/scripts/modify_accounts` script.

- _Mail child node_ — Displays the currently linked mail child node server. The linked server performs the mail tasks for the cPanel account. For more information, read our [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles) documentation.

- _Enable Apache SpamAssassin™_ — Enable or disable Apache SpamAssassin’s [_Spam Filters_](https://docs.cpanel.net/cpanel/email/spam-filters) for the account.







Note:





You **cannot** modify this setting if you enable the _Apache SpamAssassin™: Forced Global ON_ setting in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).


#### Registered and temporary domains

You can create new cPanel accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain) to allow users to collaborate on design and testing without affecting a website’s SEO or search ranking.

However, you **cannot** modify accounts to use temporary domains, **only** registered domains.

When you update from a temporary domain to a registered domain, the cPanel account will gain all email services and DNS editing privileges that its package provides.

### Linked Server Nodes

Note:

- This feature only appears if your server has a [linked cPanel & WHM server node](https://docs.cpanel.net/whm/server-configuration/link-server-nodes). You can **only** link server nodes that shares the same cPanel & WHM [major value](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#version-numbers).

- Only users with `root`-level privileges can select which server handles a cPanel account’s mail functionality.


This section allows you to offload specific tasks to a [linked node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#linked-node). Select whether to use the local server or a remote child node to handle mail functionality. You can select from the following settings:

- _Use only this server._ — The cPanel account’s mail functionality will only exist on the local server.
- _Mail child node_ — Select a linked [_mail child node_](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/#mail-node) server to handle the cPanel account’s mail functionality.






Note:





Do not select mail child node if IPv6 is, or will be, enabled on the cPanel account.


Warning:

- If you [dedistribute](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#dedistribution) a mail account back to a parent node, the system will overwrite any mail that may be on the parent node for that account. We **strongly** recommend that you use the [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account) interface ( _WHM » Home » Account Functions » Modify an Account_) for the **entire** distribution process to avoid any issues with moving email to the child node.
- When you dedistribute an account, the source server creates an archive of the account you are dedistributing. This archive may be larger than the email account’s current size. **Ensure** that the target server has enough free disk space to move the archive **before** you begin the process.

### Resource Limits

Remember:

cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):

- Editing DNS
- Email services
- Search Engine Optimization

This section allows you to edit the following settings:

- _Package_ — Select a hosting plan, which defines the limitations of the account. Click _Change_ to navigate to the [_Upgrade/Downgrade an Account_](https://docs.cpanel.net/whm/account-functions/upgrade-downgrade-an-account) interface ( _WHM » Home » Account Functions » Upgrade/Downgrade an Account_).

- _Disk Space Quota (MB)_ — Enter the amount of space on the server’s hard drive for the new account, in Megabytes (MB).

- _Monthly Bandwidth Limit (MB)_ — Enter the maximum amount of data that the new account can transfer each month, in Megabytes (MB).

- _Max FTP Accounts_ — Enter the maximum number of the account’s FTP accounts.

- _Max Email Accounts_ — Enter the maximum number of the account’s email accounts.

- _Mail Quota per Email Address (MB)_ — Enter maximum size that the account can define when it creates an email account, in Megabytes (MB).







Note:





- When you adjust this value it does **not** affect existing email accounts.
- This value must be a positive integer. Use `0` for unlimited or maximum allowed quota “based on `MAX_EMAILACCT_QUOTA` for account”. For more information, read our [The `update_existing_mail_quotas_for_account` Script](https://docs.cpanel.net/whm/scripts/the-update_existing_mail_quotas_for_account-script) documentation.

  - Select the _Update all existing email accounts_ checkbox to change all email account quotas to the _Max Quota per Email Address_ value you enter.
- _Max Mailing Lists_ — Enter the maximum number of the account’s mailing lists.







Note:





The Mailman application handles mailing lists. For more information, read Mailman’s [overview](http://www.gnu.org/software/mailman/docs.html) documentation.

- _Max SQL Databases_ — Enter the maximum number of each available type of SQL database. For example, if you set this value to `5` and allow MySQL® and PostgreSQL databases, the account can create up to five MySQL databases and up to five PostgreSQL databases.

- _Max Subdomains_ — Enter the maximum number of the account’s subdomains.

- _Max Parked Domains_ — Enter the maximum number of the account’s parked domains (aliases).

- _Max Addon Domains_ — Enter the maximum number of the account’s addon domains.

- _Max Passenger Applications_ — Enter the maximum number of the account’s Passenger applications.

- _Maximum Hourly Email by Domain Relayed_ — Enter the maximum number of emails that a domain can send per hour. This value defaults to _Unlimited_. You can also set this value to `0` to allow unlimited outbound emails.







Note:





- This setting sets the same limit for every domain on the account.
- To set different limits for each domain, read our [How to Set Email Send Limits](https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits) documentation. If you set different limits for each domain, _default_ displays the limit that you set for the account’s **primary** domain.

- _Maximum percentage of failed or deferred messages a domain may send per hour_ — Defines the maximum percentage of failed or deferred messages that a domain sends before your server temporarily blocks outgoing mail from that domain.
  - This value defaults to _Unlimited_.
  - The system examines outgoing and local mail over the previous hour to determine whether the domain exceeds the limit.
  - When a domain exceeds the limit, it cannot send mail until the domain no longer exceeds the limit.

### Account Enhancements

[Account Enhancements](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#account-enhancements) allow you to control whether a cPanel account can access a third-party application, without modifying the account’s [package](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#package) settings. Select the checkbox for each Account Enhancement that you wish to enable for the cPanel account.

Note:

- This section will **only** appear if there are third-party applications that use Account Enhancements.

- To configure a third-party application to use Account Enhancements, you must [add account enhancements](https://api.docs.cpanel.net/guides/guide-to-cpanel-plugins/guide-to-cpanel-plugins-add-plugins/#add-account-enhancements) during the installation process.

- Account Enhancements may only be managed through the parent server when an account is on a child node.


### Privileges

This section allows you to edit the following settings:

- _Reseller Privileges_ — Select this checkbox to grant reseller privileges to the account.

- _CGI Privilege_ — Select this checkbox to grant the ability to serve CGI files to the account.

- _Shell Access_ — Select this checkbox to enable SSH access for the account.


### DNS Settings

This section allows you to edit the following settings:

- _Enable DKIM on this account_ — Select this checkbox to create DKIM records for all of the account’s zones.







Important:





If you disable DKIM, the system will **delete** any existing DKIM records on the account.

- _Enable SPF on this account_ — Select this checkbox to create SPF records for all of the account’s zones.







Warning:





If you disable SPF, the system will **delete** any existing SPF records on the account.







Note:





- cPanel & WHM uses `v=spf +a +mx+ipv4:local_address ?all` as the default SPF record. Add a custom SPF record to the appropriate DNS zone template to override this setting.
- If the account’s owner has also enabled SPF, the system automatically rewrites this record when you use WHM’s [_Assign IPv6 Address_](https://docs.cpanel.net/whm/ip-functions/assign-ipv6-address) interface ( _WHM » Home » IP Functions » Assign IPv6 Address_) to assign an IPv6 address.

- _Enable DMARC on this account._ — Select this checkbox to create default DMARC records for all of the account’s zones.







Important:





- DMARC **requires** valid SPF and DKIM records. You **must** enable DKIM and SPF to enable DMARC.
- cPanel & WHM uses `v=DMARC1; p=none;` as the default DMARC record. You can customize the DMARC record in WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_) or in cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home» Domains » Zone Editor_).
- If you deselect this checkbox, the system will **delete** any default DMARC records on the account.
- This setting will override the server-wide DMARC setting that you set in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

Note:

The `/scripts/enable_spf_dkim_globally` script allows you to enable SPF and DKIM for accounts that exist on the server, and to create the appropriate DNS records for their domains. For more information, read our [The `enable_spf_dkim_globally` Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script) documentation.

### Package Extensions

If you included any package extensions with the account or its package, a Package Extensions section displays at the bottom of the interface. Some extensions may include variables that you can edit. Any settings or settings that you can edit appear below the extension name.

Note:

- **Only** package extensions that you included in the chosen package appear in this section. To learn more about extension settings and how to change them, consult the extension’s documentation.
- You **cannot** use the WHM interface to add or remove installed extensions from an existing package.
- To use a different set of extensions, use the [_Add a Package_](https://docs.cpanel.net/whm/packages/add-a-package) interface ( _WHM » Home » Packages » Add a Package_) or use API calls to modify package extension data.
- To change the account’s package, use the [_Upgrade/Downgrade an Account_](https://docs.cpanel.net/whm/account-functions/upgrade-downgrade-an-account) interface ( _WHM » Home » Account Functions » Upgrade/Downgrade an Account_).

#### Remove missing extensions from package

If any of the account’s extensions are not currently installed on the server, a warning message appears.

Warning:

You **must** install the missing extensions before you can edit their values.

If you do not wish to install the missing extensions, perform the following steps to remove them from the account’s chosen package:

1. Select the _Remove missing extensions from package_ checkbox.

2. Click _Save Changes_ to remove the extensions from the package.

3. The _Package Conflict Resolution_ dialog box appears. Select the desired setting and click _Proceed_.


### Package Conflict Resolution

The _Package Conflict Resolution_ dialog box appears if you attempt to save settings that do not match the account’s assigned package. If this dialog box appears, select the desired setting and then click _Proceed_. You can choose one of the following settings:

- _Upgrade/downgrade the account to a package that matches the new properties_ — Changes the account’s package to a package that matches your chosen settings. This setting only appears if one or more packages that match exist. Select the desired package from the menu.

- _Create a new package with this name_ — Creates a new package with your chosen settings.
  - The system upgrades or downgrades the account to this package.
  - The default name for the new package follows the `oldpackagename_accountname` format, where `oldpackagename` represents the name of the account’s previous package, and `accountname` represents the account’s name. You can also enter a new package name.
- _Update package (package name) with these new values_ — Updates the current package to the chosen settings.







Warning:





If you choose this setting, the system applies the new settings to **all** of the accounts that use this package.

- _Set this account to have no package_ — Dissassociates the account from a package.







Note:





If you choose this setting, the system continues to associate the account with the current package extensions, because the system stores package extension data in the account’s `userdata` file.

- _Keep this account on package (package name) (not recommended)_ — Continues to associate the account with its current package, but the settings in the account’s userdata file do not match the settings in the package file.







Warning:





We do **not** recommend that you use this setting, because the system could easily overwrite the chosen account settings with the package settings.


#### Additional Documentation

* * *

- [Change Site's IP Address](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [Email All Users](https://docs.cpanel.net/whm/account-functions/email-all-users/)
- [Manage Account Suspension](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/)
- [Modify/Upgrade Multiple Accounts](https://docs.cpanel.net/whm/multi-account-functions/modify-upgrade-multiple-accounts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×