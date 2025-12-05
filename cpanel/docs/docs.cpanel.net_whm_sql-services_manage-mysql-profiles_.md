---
url: "https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/"
title: "Manage MySQL® Profiles | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#main-content)

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
4. Manage MySQL® Profiles


[databases](https://docs.cpanel.net/tags/databases/) [whmui](https://docs.cpanel.net/tags/whmui/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#overview)

* * *

[Feature requirements](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#feature-requirements)

* * *

[Amazon RDS servers](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#amazon-rds-servers)

* * *

[Remote MySQL server information](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#remote-mysql-server-information)

* * *

[MySQL profile information](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#mysql-profile-information)

* * *

[Add profile](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#add-profile)

* * *

[Edit profile](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#edit-profile)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#overview)

* * *

[Feature requirements](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#feature-requirements)

* * *

[Amazon RDS servers](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#amazon-rds-servers)

* * *

[Remote MySQL server information](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#remote-mysql-server-information)

* * *

[MySQL profile information](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#mysql-profile-information)

* * *

[Add profile](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#add-profile)

* * *

[Edit profile](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#edit-profile)

* * *

## Manage MySQL® Profiles

![](https://docs.cpanel.net/img/whm-icons/manage_mysql_profiles.svg)

_Valid for versions 102 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/)

Last modified: _2025 June 5_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to manage multiple MySQL® profiles. A profile defines the connection information for a local or remote MySQL server. The interface also allows you to set which profile is [active](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/#mysql-profile-information). The active profile determines how the `root` MySQL user connects to MySQL databases, as well as the location of newly-created MySQL users and databases.

Note:

In cPanel & WHM version 120 and later, we renamed this interface to [_Manage Database Profiles_](https://docs.cpanel.net/whm/database-services/manage-database-profiles) and its section in the WHM interface to [Database Services](https://docs.cpanel.net/whm/database-services).

You may wish to use a separate MySQL server if, for example, you manage particularly busy servers or servers with large databases. You can offload MySQL-related work to a remote MySQL server.

Remote MySQL servers include other cPanel & WHM servers that run MySQL, a dedicated MySQL server, and the Amazon Relational Database™ Service (RDS).

Warning:

If **both** of the following conditions are true, you may introduce a security vulnerability:

- The local server runs MySQL 5.7.
- The remote server runs MySQL 8.0 and later or Amazon RDS.

This will copy a profile for the `root` MySQL user to the remote server with the `%` host. This will allow the `root` MySQL user to connect from any IP address. Either of the following solutions will resolve the problem:

- Upgrade the local cPanel & WHM server to MySQL 8.0.
- Add a `root` user to the remote server that is **only** allowed to log in from the local server’s IP address.

If the remote server runs MySQL 8.0 installed from the community repository and you have authentication issues, read our [Troubleshoot MySQL® Profiles](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/) documentation.

## Feature requirements

This feature **only** allows active connections to servers that run the following database versions:

- MySQL versions 5.6, 5.7, and 8.0.
- MariaDB® versions 10.1, 10.2, 10.3, 10.5, and 10.6.

For more information about which database versions we support for your operating system, read our [Supported MySQL/MariaDB Versions](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/) documentation.

Additionally, a `/root/.my.cnf` file **must** exist on any remote MySQL servers, and this file **must** contain the MySQL `root` user and password.

### Amazon RDS servers

You can use MySQL versions 5.7 or 8.0 on Amazon RDS servers. We do **not** support MariaDB or Amazon Aurora (Aurora) on Amazon RDS servers.

Amazon RDS uses the plaintext MySQL protocol. For security and performance reasons, we **strongly** recommend that only you connect to an Amazon RDS from an EC2™ instance in the same availability zone.

When you suspend a cPanel account, the system will **not** suspend any of the account’s Amazon RDS remote databases.

## Remote MySQL server information

When you create a new MySQL database in cPanel & WHM, your server will use the current active MySQL profile to determine its connection information. For example, if you activate a profile named `user` that connects to host `example.com`, you will create new MySQL databases on the host `example.com` server.

This feature does not automatically transfer your MySQL databases or data if you change remote servers. For example, if you create an `example` database with the active `user` profile, the `example` database will **only** exist on the host `example.com` server. If you then activate a profile named `user2` that connects to the host `not.example.com` server, the `example` database will **not** automatically transfer or copy itself to the `not.example.com` server.

To connect an existing database to new servers, you **must** copy it manually and update your target server’s configuration files. For example, if you move an existing WordPress® database to a remote server, you must first copy the database to the remote server manually, then update the WordPress database server’s configuration files to use the new remote server.

Warning:

- We **strongly** recommend that you **only** connect one cPanel & WHM server to each remote MySQL server. If you connect multiple cPanel & WHM servers to one remote MySQL server, you may experience database and username conflicts.
- This feature does **not** automatically transfer your MySQL data.
- Do **not** use the `skip-name-resolve` option in your server’s MySQL configuration. This option can cause problems on **any** server. It will create **more** problems on remote MySQL servers, during account transfers and restorations, and with phpMyAdmin.

### MySQL profile information

The interface displays the following columns for each MySQL profile:

- _Profile_ — The name of the MySQL profile.

- _Host_ — The MySQL server’s IP address or hostname.

- _Port_ — The MySQL server’s port number.

- _User_ — The SSH or MySQL username that you will use to authenticate to this host.

- _Type_ — A description of the profile data.

- _Actions_ — Click one of the following icons to perform the appropriate action:
  - ![validate icon](https://docs.cpanel.net/img/managemysqlprofilesvalidate.png)_Validate_ — Test the profile’s MySQL server settings.
  - ![activate icon](https://docs.cpanel.net/img/managemysqlprofilesactivate.png)_Activate_ — Set this profile as the active profile. A green lightning bolt icon (![green lightning bolt icon](https://docs.cpanel.net/img/managemysqlprofilesbolt.png)) indicates the currently-active profile.





    Note:




    You may **only** select one active profile at a time.


  - ![delete icon](https://docs.cpanel.net/img/managemysqlprofilesdelete.png)_Delete_ — Delete the profile.





    Note:




    You cannot delete the active profile.


  - ![edit icon](https://docs.cpanel.net/img/managemysqlprofilesarrow.png) — Edit the profile.

## Add profile

Note:

If no active profile exists, the system uses the information in the `/root/.my.cnf` file to generate an active profile.


To create a new MySQL profile, perform the following steps:

1. Click _Add Profile_. A new interface will appear.

2. Enter the desired MySQL profile name in the _Profile Name_ text box.






Note:




After you save the MySQL profile name, you cannot change it.


3. Select a method to use to configure the new profile:
   - _Automatically create a MySQL superuser via SSH_ — Select this method to create the new profile manually.

   - _Manually enter an existing MySQL superuser’s credentials_ — Select this method to manually enter the new profile’s information.






     Important:





- You **must** select this option if you use Amazon RDS.

- To create a MySQL superuser, make certain that the user possesses the following privileges:



```bash
SELECT
ALTER
ALTER ROUTINE
CREATE
CREATE ROUTINE
CREATE TEMPORARY TABLES
CREATE USER
CREATE VIEW
DELETE
DROP
EXECUTE
EVENT
INDEX
INSERT
REFERENCES
RELOAD
UPDATE
SHOW DATABASES
SHOW VIEW
TRIGGER
LOCK TABLES
```

- Amazon RDS does **not** allow you to grant the Super privilege to users.


Note:

If you use Amazon RDS, enter the username and password that you configured when you deployed your Amazon RDS instance.
4. Enter the appropriate information for the configuration method that you selected.


- **Automatically create a MySQL superuser via SSH**
  - _Host_ — The MySQL server’s IP address or hostname.





    Warning:




    You can enter a public or private IP address. However, make certain that the MySQL server can resolve the cPanel & WHM server’s IP address to its fully-qualified hostname.


  - _SSH Port_ — The SSH service’s port number. You **must** enter a port number between `1` and `65535`.





    Note:




    If the server resides behind a firewall, you will need to configure the firewall to allow traffic through the port that you select. For more information, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) documentation.


  - _Username_ — The username for the SSH connection.
  - _Authentication Method_ — Select the desired authentication method.
  - _Password_ — Use a password to authenticate. Enter your SSH password in the _Password_ text box.
  - _SSH Key_ — Use an SSH key to authenticate. Enter your SSH key’s name in the _SSH Key_ text box.
  - _Password_ — The password for the SSH connection.





    Note:




    This setting **only** appears when you select the _Password for the Authentication Method_ setting.


  - _SSH Key_ — The name of the SSH key to use to log in to the remote server.






    Note:





- This setting only appears when you select the _SSH Key for the Authentication Method setting_.
- Use WHM’s [_Manage Root’s SSH Keys_](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys) interface ( _WHM » Home » Security » Manage Root’s SSH Keys_) to add SSH keys.
- A `/root/.my.cnf` file **must** exist on any remote MySQL servers, and this file **must** contain the MySQL `root` user and password.
- **Manually enter an existing MySQL superuser’s credentials**
  - _Host_ — The MySQL server’s IP address or hostname.





    Warning:




    You can enter a public or private IP address. However, make **certain** that the MySQL server can resolve the cPanel & WHM server’s IP address to its fully-qualified hostname.


  - _Port_ — The MySQL server’s port number. You **must** enter a port number between `1` and `65535`.





    Note:




    If the server resides behind a firewall, you will need to configure the firewall to allow traffic through the port that you select. For more information, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) documentation.


  - _Username_ — The MySQL superuser’s username.
  - _Password_ — The MySQL superuser’s password.

5. Click _Save_.

Remember:

For more information, read our [Troubleshoot MySQL® Profiles](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/) documentation.

## Edit profile

To edit a MySQL profile, perform the following steps:

1. Click the arrow icon next to the profile you wish to edit. A new interface will appear.






Note:




You **cannot** change the profile’s name. If you wish to use a different profile name for a connection, you **must** delete and recreate the profile with a new name.


2. If you wish to change the hostname, enter the new MySQL server’s IP address or hostname in the Host text box.






Warning:




You can enter a public or private IP address. However, make **certain** that the MySQL server can resolve the cPanel & WHM server’s IP address to its fully-qualified hostname.


3. If you wish to change the port number, enter the new port number in the _Port_ text box.






Note:




If the server resides behind a firewall, you will need to configure the firewall to allow traffic through the port that you select. For more information, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) documentation.


4. If you wish to change the MySQL superuser’s username for the connection, enter the new username in the _Username_ text box.

5. If you wish to change the MySQL superuser’s password for the connection, enter the new password in the _Password_ text box.

6. Click _Save_ to save your changes, or click _Cancel_ to cancel the changes.


#### Additional Documentation

* * *

- [Additional MySQL Access Hosts](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)
- [Change MySQL User Password](https://docs.cpanel.net/whm/sql-services/change-mysql-user-password/)
- [Database Map Tool](https://docs.cpanel.net/whm/sql-services/database-map-tool/)
- [MySQL Root Password](https://docs.cpanel.net/whm/sql-services/mysql-root-password/)
- [Repair a MySQL Database](https://docs.cpanel.net/whm/sql-services/repair-a-mysql-database/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×