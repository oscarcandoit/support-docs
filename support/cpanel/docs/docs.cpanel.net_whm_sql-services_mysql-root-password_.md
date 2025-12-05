---
url: "https://docs.cpanel.net/whm/sql-services/mysql-root-password/"
title: "MySQL Root Password | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/sql-services/mysql-root-password/#main-content)

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
4. MySQL Root Password


[databases](https://docs.cpanel.net/tags/databases/) [whmui](https://docs.cpanel.net/tags/whmui/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/sql-services/mysql-root-password/#overview)

* * *

[Create password](https://docs.cpanel.net/whm/sql-services/mysql-root-password/#create-password)

* * *

[Remote MySQL](https://docs.cpanel.net/whm/sql-services/mysql-root-password/#remote-mysql)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/sql-services/mysql-root-password/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/sql-services/mysql-root-password/#overview)

* * *

[Create password](https://docs.cpanel.net/whm/sql-services/mysql-root-password/#create-password)

* * *

[Remote MySQL](https://docs.cpanel.net/whm/sql-services/mysql-root-password/#remote-mysql)

* * *

## MySQL Root Password

![](https://docs.cpanel.net/img/whm-icons/mysql_root_password.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/sql-services/mysql-root-password/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to set the MySQL® `root` password.

Warning:

- Ensure that you set a complex password. If an attacker were to compromise this password, they would have access to any of your server’s databases.

- By default, cPanel & WHM’s implementation of MySQL stores the MySQL `root` account password in the `/root/.my.cnf` configuration file. Do **not** edit this file manually.


Note:

- You do **not** need to remember this password unless you plan to log in to MySQL as the `root` user.
- In cPanel & WHM version 120 and later, we renamed this interface to [_Change Database Root Password_](https://docs.cpanel.net/whm/database-services/change-database-root-password) and its section in the WHM interface to [Database Services](https://docs.cpanel.net/whm/database-services/).

## Create password

To set the MySQL `root` password, perform the following steps:

1. Enter and confirm the new password in the appropriate text boxes.






Note:





- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.
- Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.
- Click _Password Generator_ to generate a strong password. For more information, read our [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security) documentation.

Warning:

Do **not** use asterisks ( `*` ), periods ( `.` ), or any other special characters in your MySQL `root` password. If you do, phpMyAdmin will not function. If you use the _Password Generator_ feature, select the _Numbers_ button under _advanced_.


2. Click _Change Password_.


## Remote MySQL

If you use a remote MySQL server, you **must** choose whether you change the local or the remote server’s `root` password. By default, the system selects the remote MySQL server.

Note:

When the remote MySQL server is also a cPanel & WHM server, you **must** perform additional steps:

- If you change the remote MySQL `root` password on the hosting server, you **must** update the remote MySQL server’s `/root/.my.cnf` configuration file.

- If you change the remote MySQL `root` password on the remote MySQL server, you **must** update the MySQL profile on the hosting server, and then reactivate the profile.


More:

For more information, read our [Troubleshoot MySQL® Profiles](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/) documentation.

#### Additional Documentation

* * *

- [Additional MySQL Access Hosts](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)
- [Change MySQL User Password](https://docs.cpanel.net/whm/sql-services/change-mysql-user-password/)
- [Database Map Tool](https://docs.cpanel.net/whm/sql-services/database-map-tool/)
- [Manage MySQL® Profiles](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/)
- [Repair a MySQL Database](https://docs.cpanel.net/whm/sql-services/repair-a-mysql-database/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×