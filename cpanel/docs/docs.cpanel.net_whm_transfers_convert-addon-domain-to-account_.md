---
url: "https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/"
title: "Convert Addon Domain to Account | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#main-content)

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
4. Convert Addon Domain to Account


[domains](https://docs.cpanel.net/tags/domains/) [accounts](https://docs.cpanel.net/tags/accounts/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#overview)

* * *

[Select addon domain](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#select-addon-domain)

* * *

[Account Settings](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#account-settings)

* * *

[Selection Details](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#selection-details)

* * *

[Subaccounts](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#subaccounts)

* * *

[Start Conversion](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#start-conversion)

* * *

[Conversion History](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#conversion-history)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#overview)

* * *

[Select addon domain](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#select-addon-domain)

* * *

[Account Settings](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#account-settings)

* * *

[Selection Details](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#selection-details)

* * *

[Subaccounts](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#subaccounts)

* * *

[Start Conversion](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#start-conversion)

* * *

[Conversion History](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/#conversion-history)

* * *

## Convert Addon Domain to Account

![](https://docs.cpanel.net/img/whm-icons/convert_addon_domain_to_account.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to convert an existing addon domain into a full cPanel account. When you convert an addon domain into a stand-alone cPanel account, you gain more control over the domain’s resources, such as databases, FTP accounts, and SSH access. For more information, read our [Domains](https://docs.cpanel.net/cpanel/domains/domains) documentation.

Important:

- You **must** have the `rearrange-accts` ACL to convert an addon domain into a cPanel account. For more information, read our [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) documentation.
- The addon domain’s data remains on the source account after this process completes. Due to this, converting an addon domain to a full cPanel account requires a large amount of disk space.
  - We recommend that your server has triple the space that the new domain needs before you begin this process.
  - After the process completes, you **must** remove the data from the source account. This reduces your account’s data usage.
- We **strongly** recommend you perform a backup of the original account that owns the addon domain before you begin the conversion.
- You **must** delete the subdomains of the addon domain before you convert it to a cPanel account. If you do **not** perform this action, the conversion process will fail.

Note:

This interface does not display addon domains for cPanel accounts set as a [linked](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/) mail node.

## Select addon domain

This section of the interface lists all of the available addon domains and their owners. Enter a domain or owner in the _Search_ text box to filter this list.

To convert an addon domain into an account, click _Convert_ in the _Action_ column for that domain. A new interface will appear with the following sections:

### Account Settings

This section of the interface allows you to set the basic information for the account.

- _Username_ — The username for the account that you will create. By default, the system generates a username using the addon domain name.
- _Contact Email_ (optional) — The main contact email address for the new account, to which the system will send notifications.
- _Package_ (optional) — The package for the new account.
- _Preserve Account Ownership_ — Select this checkbox to ensure that the reseller account that owned the addon domain will also own the new account.






Note:





This setting is only available to users with `root`-level privileges.


### Selection Details

This section of the interface displays settings for the items that the conversion can move.

#### Website Configuration

These settings allow you to copy the contents of the addon domain’s document root and VirtualHost include files to the new account.

To copy the website configuration settings, perform the following steps:

1. Click _Configure on the Website Configuration_ section heading.
2. Select the checkboxes for the items you want to copy:
   - _Copy contents of document root directory_ — Copy the contents of the addon domain’s document root.
   - _Copy custom VirtualHost include files_ — Copy the contents of custom VirtualHost include files.
   - _Copy the installed SSL certificate_ — Copy the addon domain’s SSL certificate.






     Note:





- The _Copy the installed SSL certificate_ checkbox is not available if the domain does not have an installed SSL certificate.
- The system selects these checkboxes by default.
3. Click _Save Selections_.

#### Custom DNS Records

This setting allows you to copy the addon domain’s custom DNS records to the new account.

To copy custom DNS records, perform the following steps:

1. Click _Configure_ in the _Custom DNS Records_ section.
2. Select the _Move custom DNS records_ checkbox.






Note:





- The system selects this checkbox by default.
- If you deselect this checkbox, your domain’s DNS records will revert to the default values on the server. For more information about the default values, read our [Edit Zone Templates](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates) documentation.

3. Click _Save Selections_.

#### Email

These settings allow you to copy the addon domain’s email accounts, forwarders, and autoresponders to the new account.

To copy the email accounts and other features to the new account, perform the following steps:

1. Click _Configure_ in the _Email_ section heading.
2. Select the checkboxes for the items you want to copy:
   - _Copy email accounts_ — Copy the addon domain’s email accounts.
   - _Move email forwarders_ — Move email forwarders with the addon domain.
   - _Copy autoresponders_ — Copy the addon domain’s autoresponders.
   - _Copy webmail data_ — Copy the addon domain’s email accounts’ Webmail data.






     Note:





     The system selects these checkboxes by default.
3. Click _Save Selections_.

Note:

- Each checkbox applies to **all** items of that type. For example, you cannot choose to copy only some of the email accounts.
- The conversion process moves the addon domain’s mailing lists and Roundcube webmail data even if you do not copy any email data.
- The addon domain’s new account will inherit the mailbox storage account of the original account. For example, if the parent account uses the maildir format, then the addon domain’s new account will use the maildir format.

#### MySQL Databases

This setting allows you to copy or move the addon domain’s MySQL® or MariaDB databases to the new account.

Note:

If you choose to _Copy_ the MySQL databases, ensure that you have enough available disk space in the new location.

To copy the addon domain’s MySQL databases to the new account, perform the following steps:

1. Click _Configure_ in the _MySQL Database_ section.
2. Click _Copy_ in the _How do you want to transfer your MySQL Databases?_ section.
3. Select the checkbox next to each database that you want to copy, or select the checkbox in the table heading to select them all.






Note:





The system deselects these checkboxes by default.

4. Enter a new name for each selected database. If prefixing is enabled on the server, the new database name will automatically begin with the `username*` prefix.

   - **MySQL** limits the database username to 16 characters. The system includes the database prefix (the first eight characters of the cPanel account’s username and an underscore ( _\__) character) in the character count for the username. For example:

     - A MySQL database with the `db*` prefix allows usernames that contain up to 13 characters.
     - A MySQL database with the `example*` prefix allows usernames that contain up to eight characters.
   - **MariaDB** limits the database username to 47 characters. The system includes the database prefix (all of the cPanel account’s username and an underscore character) in the character count for the username. For example:

     - A MariaDB database with the `db*` prefix allows usernames that contain up to 44 characters.
     - A MariaDB database with the `example*` prefix allows usernames that contain up to 39 characters.
5. Click _Save Selection_.

To move the addon domain’s MySQL databases to the new account, perform the following steps:

1. Click _Configure_ in the _MySQL Database_ section.

2. Click _Move_ in the _How do you want to transfer your MySQL Databases?_ section.

3. Select the checkbox next to each database that you want to move, or select the checkbox in the table heading to select them all.







Note:





When you move a database, the following permission changes will occur:



- The addon domain owner will lose access to the database.
- The newly-created cPanel account will gain full access to the database.

4. Select the checkbox next to each database user that you want to move, or select the checkbox in the table heading to select them all.







Note:





If you move a database user and **not** the database to which they have access, the user will lose all access to that database.

5. Click _Save Selection_.


### Subaccounts

This setting allows you to copy the addon domain’s subaccounts to the new account. The system selects these checkboxes by default.

To copy the subaccounts, perform the following steps:

1. Click _Configure_ in the _Subaccounts_ section.
2. Select the checkboxes for the items you want to copy:
   - _Copy FTP accounts_ — Copy the FTP accounts for copied subaccounts.
   - _Copy Web Disk accounts_ — Copy the Web Disk accounts for copied subaccounts.






     Note:





     The system selects these checkboxes by default.
3. Click _Save Selections_.

### Start Conversion

After you configure these settings:

- Click _Start Conversion_ to begin the process and view to the _Conversion History_ table.
- Click _Cancel_ to return to the _Select addon domain_ section of the interface.

For more details about how conversion affects the addon domain data, read our [Addon Domain Conversion List](https://docs.cpanel.net/knowledge-base/accounts/addon-domain-conversion-list/) documentation.

## Conversion History

The _Conversion History_ table displays completed and in-progress addon domain conversions. Click _View Conversion History_ in the top-right corner of the main _Convert Addon Domain to Account_ interface to view to the _Conversion History_ table.

The _Conversion History_ table lists the following information about converted addon domains:

- _Domain_ — The name of the addon domain you converted into an account.
- _Status_ — The current status of the conversion ( _Done_, _In Progress_, or _Failed_).
- _Start Time_ — The time when the conversion process began.
- _End Time_ — The time when the conversion process finished, if it is complete.
- _Actions_ — Click _Details_ to view additional information about the conversion process.

Click _View Addon Domains_ to return to the main _Convert Addon Domain to Account_ interface.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [Change Multiple Sites' IP Addresses](https://docs.cpanel.net/whm/multi-account-functions/change-multiple-sites-ip-addresses/)
- [Change Ownership of Multiple Accounts](https://docs.cpanel.net/whm/resellers/change-ownership-of-multiple-accounts/)
- [Change Site's IP Address](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)