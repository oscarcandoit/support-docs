---
url: "https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/"
title: "Troubleshoot MySQL® Profiles | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [SQL](https://docs.cpanel.net/knowledge-base/sql/)
4. Troubleshoot MySQL® Profiles


[mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#overview)

* * *

[Error messages](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#error-messages)

* * *

[Failed to connect to remote server](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#failed-to-connect-to-remote-server)

* * *

[Unable to connect to remote MySQL host IP, connection failed with error](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#unable-to-connect-to-remote-mysql-host-ip-connection-failed-with-error)

* * *

[Reverse DNS entry warning](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#reverse-dns-entry-warning)

* * *

[Remote MySQL root password](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#remote-mysql-root-password)

* * *

[MySQL 8.0 or higher running on a cPanel server](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#mysql-80-or-higher-running-on-a-cpanel-server)

* * *

[MySQL 8.0 or higher running on any other server](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#mysql-80-or-higher-running-on-any-other-server)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#overview)

* * *

[Error messages](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#error-messages)

* * *

[Failed to connect to remote server](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#failed-to-connect-to-remote-server)

* * *

[Unable to connect to remote MySQL host IP, connection failed with error](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#unable-to-connect-to-remote-mysql-host-ip-connection-failed-with-error)

* * *

[Reverse DNS entry warning](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#reverse-dns-entry-warning)

* * *

[Remote MySQL root password](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#remote-mysql-root-password)

* * *

[MySQL 8.0 or higher running on a cPanel server](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#mysql-80-or-higher-running-on-a-cpanel-server)

* * *

[MySQL 8.0 or higher running on any other server](https://docs.cpanel.net/knowledge-base/sql/troubleshoot-mysql-profiles/#mysql-80-or-higher-running-on-any-other-server)

* * *

## Troubleshoot MySQL® Profiles

Last modified: _2024 November 8_

* * *

## Overview

This document describes additional steps to follow if you experience problems when you attempt to connect to your remote MySQL® server.

Note:

If you see a _Can’t connect to local MySQL server through socket ‘/var/lib/mysql/mysql.sock’ (2) 0_ error, verify whether the `mysqld` daemon is functional.

- If the daemon is functional, verify the Unix socket. To do this, run the `netstat -ax | grep mysql` command.
- If you have one socket and an application points to the other socket, make a symbolic link to point it to the correct socket.

## Error messages

The following describes some errors that you may encounter, their possible causes, and the solutions we recommend:

### Failed to connect to remote server

#### DNS error: the server cannot resolve the hostname

Verify your DNS configuration settings.

#### Invalid IP address error: the IP address does not exist

1. Confirm the local server’s IP address network configuration. For more information, read our [Installation Guide - Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation).
2. Confirm the remote MySQL server’s IP address.
3. Ensure that the remote MySQL server is responsive.
4. Verify the local and remote server firewall configuration settings.

#### Incorrect SSH port

1. Confirm the SSH port on the remote MySQL server:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br># ss -pln | grep ssh<br>LISTEN     0      128                      :::22                      :::*      users:(("sshd",1163,4))<br>LISTEN     0      128                       *:22                       *:*      users:(("sshd",1163,3))<br>``` |

2. Enter the correct SSH port for the remote MySQL server. In the example, the correct port is 22.

#### Invalid SSH credentials

Verify you have the correct username and password to access the remote MySQL server.

### Unable to connect to remote MySQL host IP, connection failed with error

#### Host ‘hostname’ is not allowed to connect to this MySQL server

##### Insufficient MySQL permissions

Grant the user superuser access.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```bash<br># mysql mysql<br>-snip-<br>mysql> CREATE USER 'user'@'hostname' IDENTIFIED BY 'password';<br>Query OK, 0 rows affected (0.00 sec)<br>mysql> GRANT ALL PRIVILEGES ON *.* TO 'user'@'hostname' WITH GRANT OPTION;<br>Query OK, 0 rows affected (0.00 sec)<br>``` |

#### Lost connection to MySQL server at ‘handshake: waiting for initial communication packet’, system error: 110

##### Firewall error. The server cannot access the specified port on the remote MySQL server.

Verify your firewall configuration settings. For more information, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services) documentation.

Note:

The specific solution will depend on the configuration settings of the local server, remote server, and firewall utility.

#### Cannot connect to MySQL server on ‘IP’ (107)

##### MySQL is down on the remote MySQL server.

Restart MySQL on the remote MySQL server.

##### Incorrect MySQL port.

1. Confirm the MySQL port on the remote MySQL server:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br># ss -pln | grep mysql<br>LISTEN     0      50                        *:3306                     *:*      users:(("mysqld",3308,12))<br>``` |

2. Enter the correct MySQL port for the MySQL server. In the example, the correct port is 3306.

## Reverse DNS entry warning

Before you set up a remote MySQL server, ensure that the remote server can resolve your local server’s hostname to its IP address. To confirm this, log in to the remote server via SSH and run the following command, where `1.2.3.4` represents the IP address:

```bash
host 1.2.3.4
```

If you do **not** have a reverse DNS entry configured for your hostname, add an entry for your hostname to the `/etc/hosts` file on the remote server.

For more information, read our [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm) documentation.

## Remote MySQL `root` password

You can change the MySQL `root` password in WHM’s [_MySQL Root Password_](https://docs.cpanel.net/whm/sql-services/mysql-root-password) interface ( _WHM_ » _Home_ » _SQL Services_ » _MySQL Root Password_). If you use a remote MySQL server, you **must** choose whether you will change the local or the remote server’s `root` password. By default, the system selects the remote MySQL server.

Warning:

If you install MySQL 8.0 or higher on a remote server from the community repository, the server will enable its own levels of password validation by default. These may conflict with cPanel & WHM’s password validation.

- If you use the _Automatically create a MySQL superuser via SSH._ option to set up the remote MySQL profile, the system will automatically make an adjustment for these different validation schemes.

- If you use the _Manually enter an existing MySQL superuser’s credentials_ option to set up the remote MySQL profile, you will need to perform the following changes through the MySQL command line:


1. Open the `/etc/my.cnf` file with your preferred text editor.
2. Add the following lines to the file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```bash<br>validate-password.policy=0<br>validate-password.length=1<br>validate_password.special_char_count=0<br>validate_password.mixed_case_count=0<br>validate_password.number_count=0<br>``` |

### MySQL 8.0 or higher running on a cPanel server

When the remote MySQL server is also a cPanel & WHM server, you **must** perform additional steps:

- If you change the MySQL `root` password on the hosting server, you **must** update the remote MySQL server’s `/root/.my.cnf` configuration file.
- If you change the MySQL `root` password on the remote MySQL server, you **must** update the MySQL profile on the hosting server, and then reactivate the profile.

### MySQL 8.0 or higher running on any other server

When the remote MySQL server is running on any other server, you **must** turn off password caching. Perform the following steps to avoid an authentication error:

1. Open the `/etc/my.cnf` with your preferred text editor.
2. Delete the `default-authentication-plugin` setting.
3. Add the following lines to your file:



```bash
mysql_native_password=ON
authentication_policy=mysql_native_password
```

4. Log in to MySQL at the command line. Then, run the following command:



```bash
mysql> ALTER USER 'root'@'cpanel.server.host' IDENTIFIED WITH mysql_native_password BY '12345luggage';
```





Important:





Use a secure password. A secure password is **not** a dictionary word, and it contains uppercase and lowercase letters, numbers, and symbols.


#### Additional Documentation

* * *

- [Additional MySQL Access Hosts](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)
- [Change Database Root Password](https://docs.cpanel.net/whm/database-services/change-database-root-password/)
- [Change Database User Password](https://docs.cpanel.net/whm/database-services/change-database-user-password/)
- [Change MySQL User Password](https://docs.cpanel.net/whm/sql-services/change-mysql-user-password/)
- [The MysqlDump Stream](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×