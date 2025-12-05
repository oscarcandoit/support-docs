---
url: "https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/"
title: "Additional MySQL Access Hosts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/#main-content)

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
3. [SQL Services](https://docs.cpanel.net/whm/sql-services/)
4. Additional MySQL Access Hosts


[whmui](https://docs.cpanel.net/tags/whmui/) [databases](https://docs.cpanel.net/tags/databases/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/#overview)

* * *

[Configure remote access to MySQL](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/#configure-remote-access-to-mysql)

* * *

[Troubleshooting](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/#troubleshooting)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/#overview)

* * *

[Configure remote access to MySQL](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/#configure-remote-access-to-mysql)

* * *

[Troubleshooting](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/#troubleshooting)

* * *

## Additional MySQL Access Hosts

![](https://docs.cpanel.net/img/whm-icons/additional_mysql_access_hosts.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to permit remote hosts (servers) to access MySQL® databases on your server, or to access a remote MySQL server that you configured via WHM’s [_Manage MySQL Profiles_](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/) interface ( _WHM » Home » SQL Services » Manage MySQL Profiles_). The system applies this list of servers to every cPanel user and every MySQL user that a cPanel user owns.

Note:

- In cPanel & WHM version 120 and later, we renamed this interface to [_Manage Database Access Hosts_](https://docs.cpanel.net/whm/database-services/manage-database-access-hosts) and its section in the WHM interface to [Database Services](https://docs.cpanel.net/whm/database-services).
- cPanel users **cannot** permanently remove remote hosts that you add through this interface. cPanel accounts can temporarily remove these remote hosts via cPanel’s [_Remote MySQL®_](https://docs.cpanel.net/cpanel/databases/remote-mysql/) interface ( _cPanel » Home » Databases » Remote MySQL®_). However, the system restores these remote hosts when the user accesses cPanel’s [_MySQL® Databases_](https://docs.cpanel.net/cpanel/databases/mysql-databases/) interface ( _cPanel » Home » Databases » MySQL Databases_) or the system administrator clicks the _click here_ link in the _Additional MySQL Access Hosts_ interface.

  - cPanel accounts can add more remote hosts to their account and their MySQL users via cPanel’s [_Remote MySQL®_](https://docs.cpanel.net/cpanel/databases/remote-mysql/) interface ( _cPanel » Home » Databases » Remote MySQL®_).
  - The system does **not** allow system accounts and `root`-level users that are not cPanel accounts to use this functionality.

## Configure remote access to MySQL

To configure the list of remote hosts with access to your MySQL databases, perform the following steps:

1. In the text box, enter the hostnames of remote hosts that you wish to access your server’s MySQL databases.
   - You may enter the hostnames as fully qualified domain names (FQDNs) or IP addresses (for example, `host.example.com` or `192.168.0.20`).






     Warning:





     You **must** specify FQDNs in lowercase letters.
2. Click _Save_.

To add the hostnames to each user’s access list, perform one of the following actions:

- Click _click here_ to automatically add the hostnames to each cPanel user’s access list.
- Ask your cPanel users to access cPanel’s [_Remote Database Access_](https://docs.cpanel.net/cpanel/databases/remote-database-access/) interface ( _cPanel » Home » Databases » Remote Database Access_) to add the hosts.

## Troubleshooting

If you experience issues when you attempt to add additional remote hosts that can access MySQL databases on your server, read our [Troubleshoot MySQL Profiles](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/) documentation.

#### Additional Documentation

* * *

- [Change MySQL User Password](https://docs.cpanel.net/whm/sql-services/change-mysql-user-password/)
- [Database Map Tool](https://docs.cpanel.net/whm/sql-services/database-map-tool/)
- [Manage MySQL® Profiles](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/)
- [MySQL Root Password](https://docs.cpanel.net/whm/sql-services/mysql-root-password/)
- [Repair a MySQL Database](https://docs.cpanel.net/whm/sql-services/repair-a-mysql-database/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×