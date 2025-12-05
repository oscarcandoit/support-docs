---
url: "https://docs.cpanel.net/whm/database-services/change-database-root-password/"
title: "Change Database Root Password | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/database-services/change-database-root-password/#main-content)

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
3. [Database Services](https://docs.cpanel.net/whm/database-services/)
4. Change Database Root Password


[databases](https://docs.cpanel.net/tags/databases/) [whmui](https://docs.cpanel.net/tags/whmui/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/database-services/change-database-root-password/#overview)

* * *

[Create password](https://docs.cpanel.net/whm/database-services/change-database-root-password/#create-password)

* * *

[Remote MySQL or MariaDB](https://docs.cpanel.net/whm/database-services/change-database-root-password/#remote-mysql-or-mariadb)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/database-services/change-database-root-password/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/database-services/change-database-root-password/#overview)

* * *

[Create password](https://docs.cpanel.net/whm/database-services/change-database-root-password/#create-password)

* * *

[Remote MySQL or MariaDB](https://docs.cpanel.net/whm/database-services/change-database-root-password/#remote-mysql-or-mariadb)

* * *

## Change Database Root Password

![](https://docs.cpanel.net/img/whm-icons/mysql_root_password.svg)

_Valid for versions 120 through the latest version_

#### Version:

#### [120](https://docs.cpanel.net/whm/database-services/change-database-root-password/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to set a server’s MySQL® or MariaDB® `root` account password.

Warning:

- Ensure that you set a complex password. If an attacker were to compromise this password, they would have access to any of your server’s databases.

- By default, cPanel & WHM’s implementation of MySQL and MariaDB stores the MariaDB and MySQL `root` account password in the `/root/.my.cnf` configuration file. Do **not** edit this file manually.


Note:

- In cPanel & WHM version 118 and earlier, we titled this interface [_MySQL Root Password_](https://docs.cpanel.net/whm/sql-services/mysql-root-password) and its section in the WHM interface [SQL Services](https://docs.cpanel.net/whm/sql-services/).
- You do **not** need to remember the database server’s `root` account password unless you plan to log in to MySQL or MariaDB as the database `root` user.

## Create password

To set the MySQL or MariaDB `root` account password, perform the following steps:

1. Enter and confirm the new password in the appropriate text boxes.






Note:





- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.
- Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.
- Click _Password Generator_ to generate a strong password. For more information, read our [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security) documentation.

Warning:

Do **not** use asterisks ( `*` ), periods ( `.` ), or any other special characters in your database `root` password. If you do, phpMyAdmin will not function. If you use the _Password Generator_ feature, select the _Numbers_ button under _advanced_.


2. Click _Change Password_.


## Remote MySQL or MariaDB

If you use a remote MySQL or MariaDB server, you **must** choose whether you change the local or the remote server’s `root` database account password. By default, the system selects the remote MySQL server.

Note:

When the remote server is also a cPanel & WHM server, you **must** perform additional steps:

- If you change the remote MySQL or MariaDB `root` password on the hosting server, you **must** update the remote server’s `/root/.my.cnf` configuration file.

- If you change the remote database `root` password on the remote server, you **must** update the profile on the hosting server, and then reactivate the profile.


More:

For more information, read our [Troubleshoot MySQL® Profiles](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/) documentation.

#### Additional Documentation

* * *

- [Change Database User Password](https://docs.cpanel.net/whm/database-services/change-database-user-password/)
- [Database Map Tool](https://docs.cpanel.net/whm/database-services/database-map-tool/)
- [Manage Database Access Hosts](https://docs.cpanel.net/whm/database-services/manage-database-access-hosts/)
- [Manage Database Profiles](https://docs.cpanel.net/whm/database-services/manage-database-profiles/)
- [Repair Databases](https://docs.cpanel.net/whm/database-services/repair-databases/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×