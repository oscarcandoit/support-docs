---
url: "https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/"
title: "How to Configure MySQL SSL Connections | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#main-content)

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
3. [Security](https://docs.cpanel.net/knowledge-base/security/)
4. How to Configure MySQL SSL Connections


[ssl](https://docs.cpanel.net/tags/ssl/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#overview)

* * *

[Configure MySQL SSL connections](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#configure-mysql-ssl-connections)

* * *

[Create the directory to store the SSL keys](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#create-the-directory-to-store-the-ssl-keys)

* * *

[Create the SSL keys](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#create-the-ssl-keys)

* * *

[Edit the MySQL configuration](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#edit-the-mysql-configuration)

* * *

[Test the SSL configuration](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#test-the-ssl-configuration)

* * *

[Create a user and allow remote access](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#create-a-user-and-allow-remote-access)

* * *

[Test the remote MySQL connection](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#test-the-remote-mysql-connection)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#overview)

* * *

[Configure MySQL SSL connections](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#configure-mysql-ssl-connections)

* * *

[Create the directory to store the SSL keys](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#create-the-directory-to-store-the-ssl-keys)

* * *

[Create the SSL keys](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#create-the-ssl-keys)

* * *

[Edit the MySQL configuration](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#edit-the-mysql-configuration)

* * *

[Test the SSL configuration](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#test-the-ssl-configuration)

* * *

[Create a user and allow remote access](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#create-a-user-and-allow-remote-access)

* * *

[Test the remote MySQL connection](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/#test-the-remote-mysql-connection)

* * *

## How to Configure MySQL SSL Connections

_Valid for versions 88 through 118_

#### Version:

#### [88](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/88/)

#### [120](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/120/)

#### [124](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/124/)

#### [132](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/)

Last modified: _2024 February 16_

* * *

## Overview

This document describes how to configure your server to use SSL for MySQL® database connections. After you secure your MySQL connections, malicious users cannot intercept your MySQL traffic. You **must** possess `root` access to the client and host servers to complete this tutorial.

Note:

For information about using SSL with MariaDB®, read MariaDB’s [Securing Connections for Client and Server](https://mariadb.com/kb/en/securing-connections-for-client-and-server/) documentation.

## Configure MySQL SSL connections

### Create the directory to store the SSL keys

To create the directory that will contain the SSL keys, perform the following steps:

1. Log in to your server via SSH. For more information, read our [_SSH Access_](https://docs.cpanel.net/cpanel/security/ssh-access/) documentation.

2. Create an SSL key storage directory that MySQL can access. For example, run the `mkdir /mysql_keys` command to create a `mysql_keys` directory.


### Create the SSL keys

Note:

- In the following examples, `/mysql_keys` represents the key storage directory.

- The Common Name of the certificates and keys for the client and server **must** be different from the Common Name of the CA certificate. Identical Common Names will fail with an error similar to:

`ERROR 2026 (HY000): SSL connection error: error:00000001:lib(0):func(0):reason(1)`


To create the SSL keys, perform the following steps:

1. Run the following commands to create the Certificate Authority (CA) keys:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>openssl genrsa 2048 > /mysql_keys/ca-key.pem<br>openssl req -new -x509 -nodes -days 3650 -key /mysql_keys/ca-key.pem > /mysql_keys/ca-cert.pem<br>``` |

2. Run the following commands to create the server SSL key and certificate:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>openssl req -newkey rsa:2048 -days 3650 -nodes -keyout /mysql_keys/server-key.pem > /mysql_keys/server-req.pem<br>openssl x509 -req -in /mysql_keys/server-req.pem -days 3650 -CA /mysql_keys/ca-cert.pem -CAkey /mysql_keys/ca-key.pem -set_serial 01 > /mysql_keys/server-cert.pem<br>openssl rsa -in /mysql_keys/server-key.pem -out /mysql_keys/server-key.pem<br>``` |

3. Run the following commands to create the client SSL key and certificate:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>openssl req -newkey rsa:2048 -days 3650 -nodes -keyout /mysql_keys/client-key.pem > /mysql_keys/client-req.pem<br>openssl x509 -req -in /mysql_keys/client-req.pem -days 3650 -CA /mysql_keys/ca-cert.pem -CAkey /mysql_keys/ca-key.pem -set_serial 01 > /mysql_keys/client-cert.pem<br>openssl rsa -in /mysql_keys/client-key.pem -out /mysql_keys/client-key.pem<br>``` |


### Edit the MySQL configuration

To edit the MySQL configuration, perform the following steps:

1. Open the `/etc/my.cnf` file with your preferred text editor.

2. Insert the following lines in the `[mysqld]` section of the `my.cnf` file:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>ssl<br>ssl-cipher=DHE-RSA-AES256-SHA<br>ssl-ca=/mysql_keys/ca-cert.pem<br>ssl-cert=/mysql_keys/server-cert.pem<br>ssl-key=/mysql_keys/server-key.pem<br>``` |

3. Insert the following lines in the `[client]` section of the `my.cnf` file:






Note:




If the `[client]` section does not exist, you **must** add a `[client]` section.








|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>[client]<br>    ssl-mode=REQUIRED<br>    ssl-cert=/mysql_keys/client-cert.pem<br>    ssl-key=/mysql_keys/client-key.pem<br>``` |




Your updated `my.cnf` file should resemble the following example:




|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>``` | ```go<br>[mysqld]<br>    max_connections=500<br>    log-slow-queries<br>    max_allowed_packet=268435456<br>    open_files_limit=10000<br>    default-storage-engine=MyISAM<br>    innodb_file_per_table=1<br>    performance-schema=0<br>    ssl<br>    ssl-cipher=DHE-RSA-AES256-SHA<br>    ssl-ca=/mysql_keys/ca-cert.pem<br>    ssl-cert=/mysql_keys/server-cert.pem<br>    ssl-key=/mysql_keys/server-key.pem<br>[client]<br>    ssl-mode=REQUIRED<br>    ssl-cert=/mysql_keys/client-cert.pem<br>    ssl-key=/mysql_keys/client-key.pem<br>    <br>``` |







Note:





- The `ssl-mode=REQUIRED` setting will create an encrypted connection if the server supports encrypted connections. If the server cannot create an encrypted connection, the connection will fail. For more information about additional options for the `ssl-mode` setting, read MySQL’s [ssl-mode](https://dev.mysql.com/doc/refman/8.0/en/connection-options.html#option_general_ssl-mode) documentation.

- MySQL introduced the `ssl-mode` setting in MySQL 5.7. If you run MySQL 5.6 or older, replace `ssl-mode=REQUIRED` with `ssl`.


4. Save your changes to the `/etc/my.cnf` file and exit your text editor.

5. Run the following command to update the file permissions of the `/mysql_keys` directory and its files:



```perl
chown -Rf mysql. /mysql_keys
```

6. Run the `/scripts/restartsrv_mysql` script to restart MySQL.


### Test the SSL configuration

To test the SSL configuration, perform the following steps:

1. To view MySQL’s active SSL configuration, run the following command:



```perl
mysql -e "show variables like '%ssl%';"
```


The output will resemble the following example:




|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```go<br>+---------------+------------------------+<br>    | Variable_name | Value                  |<br>    +---------------+------------------------+<br>    | have_openssl  | YES                    |<br>    | have_ssl      | YES                    |<br>    | ssl_ca        | /mysql_keys/ca-cert.pem |<br>    | ssl_capath    |                        |<br>    | ssl_cert      | /mysql_keys/server-cert.pem |<br>    | ssl_cipher    | DHE-RSA-AES256-SHA     |<br>    | ssl_key       | /mysql_keys/server-key.pem  |<br>    +---------------+------------------------+<br>``` |

2. To check a local connection to MySQL, run the following command, where example represents the cPanel account username:



```perl
mysql -u example -p
```

3. When the system prompts you, enter the MySQL user account password.

4. After you connect, run the `status` command. The output will resemble the following example:





|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>``` | ```go<br>mysql> status<br>    --------------<br>    mysql  Ver 14.14 Distrib 5.5.42, for Linux (x86_64) using readline 5.1<br>    Connection id:        19<br>    Current database:  <br>    Current user:        example@localhost<br>    SSL:            Cipher in use is DHE-RSA-AES256-SHA<br>    Current pager:        stdout<br>    Using outfile:        ''<br>    Using delimiter:    ;<br>    Server version:        5.5.42-cll MySQL Community Server (GPL)<br>    Protocol version:    10<br>    Connection:        Localhost via UNIX socket<br>    Server characterset:    latin1<br>    Db     characterset:    latin1<br>    Client characterset:    utf8<br>    Conn.  characterset:    utf8<br>    UNIX socket:        /var/lib/mysql/mysql.sock<br>    Uptime:            4 min 36 sec<br>    Threads: 1  Questions: 67  Slow queries: 0  Opens: 34  Flush tables: 1  Open tables: 27  Queries per second avg: 0.242<br>    --------------<br>``` |


### Create a user and allow remote access

Note:

This step is **optional**.


To create a user and allow remote access, perform the following steps:

1. Navigate to cPanel’s [_MySQL® Databases_](https://docs.cpanel.net/cpanel/databases/mysql-databases/) interface ( _cPanel » Home » Databases » MySQL® Databases_) and create your database user.

2. Add the remote server’s IP address to cPanel’s [_Remote MySQL®_](https://docs.cpanel.net/cpanel/databases/remote-mysql/) interface ( _cPanel » Home » Databases » Remote MySQL®_).

3. On the remote MySQL server, create an SSL key storage directory that MySQL can access. For example, use the `mkdir /mysql_keys` command to create a `mysql_keys` directory.






Note:




You can skip this step if you have already created the `/mysql_keys` directory on the remote MySQL server.


4. Copy the client SSL certificate to the remote MySQL server’s `/mysql` directory.

5. On the remote MySQL server, open the `/etc/my.cnf` file with your preferred text editor.

6. Insert the following lines in the `[client]` section of the `my.cnf` file:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>[client]<br>  ssl-mode=REQUIRED<br>  ssl-cert=/mysql_keys/client-cert.pem<br>  ssl-key=/mysql_keys/client-key.pem<br>``` |







Note:




If the `[client]` section does not exist, you **must** add the section.



    Your updated /`etc/my.cnf` file should resemble the following example:




|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>``` | ```go<br>[mysqld]<br>    max_connections=500<br>    log-slow-queries<br>    max_allowed_packet=268435456<br>    open_files_limit=10000<br>    default-storage-engine=MyISAM<br>    innodb_file_per_table=1<br>    performance-schema=0<br>[client]<br>    ssl-mode=REQUIRED<br>    ssl-cert=/mysql_keys/client-cert.pem<br>    ssl-key=/mysql_keys/client-key.pem<br>``` |







Note:





- The `ssl-mode=REQUIRED` setting will create an encrypted connection if the server supports encrypted connections. If the server cannot create an encrypted connection, the connection will fail. For more information about additional options for the `ssl-mode` setting, read MySQL’s [ssl-mode](https://dev.mysql.com/doc/refman/8.0/en/connection-options.html#option_general_ssl-mode) documentation.

- MySQL introduced the `ssl-mode` setting in MySQL 5.7. If you run MySQL 5.6 or older, replace `ssl-mode=REQUIRED` with `ssl`.


7. Save your changes to the `/etc/my.cnf` file and exit your text editor.

8. Run the following command to update the permissions for the `/mysql_keys` directory and its files:



```perl
chown -Rf mysql. /mysql_keys
```

9. Restart the MySQL server.


Note:

If the remote MySQL server runs cPanel & WHM, use the `/scripts/restartsrv_mysql` script to restart MySQL.


### Test the remote MySQL connection

To test the remote MySQL connection, perform the following steps:

1. Log in to the remote MySQL server via SSH. For more information, read our [_SSH Access_](https://docs.cpanel.net/cpanel/security/ssh-access/) documentation.

2. Use the `mysql` command to remotely connect to the MySQL server. The following example uses the IP address `192.168.0.1` for the destination MySQL server and `example` for the MySQL user:



```perl
mysql -u example -h 192.168.0.1 -p
```


The `mysql` command will connect you to the remote MySQL server and request the MySQL user password.

3. After you connect to the remote MySQL server, enter the `status` command. The output will resemble the following example:





|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>``` | ```go<br>mysql> status<br>--------------<br>mysql  Ver 14.14 Distrib 5.5.42, for Linux (x86_64) using readline 5.1<br>Connection id:        19<br>Current database:  <br>Current user:        example@localhost<br>SSL:            Cipher in use is DHE-RSA-AES256-SHA<br>Current pager:        stdout<br>Using outfile:        ''<br>Using delimiter:    ;<br>Server version:        5.5.42-cll MySQL Community Server (GPL)<br>Protocol version:    10<br>Connection:        Localhost via UNIX socket<br>Server characterset:    latin1<br>Db     characterset:    latin1<br>Client characterset:    utf8<br>Conn.  characterset:    utf8<br>UNIX socket:        /var/lib/mysql/mysql.sock<br>Uptime:            4 min 36 sec<br>Threads: 1  Questions: 67  Slow queries: 0  Opens: 34  Flush tables: 1  Open tables: 27  Queries per second avg: 0.242<br>--------------<br>``` |


#### Additional Documentation

* * *

- [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)
- [How to Configure MySQL SSL Connections](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Key Types](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/)
- [SSL/TLS Status](https://docs.cpanel.net/cpanel/security/ssl-tls-status/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×