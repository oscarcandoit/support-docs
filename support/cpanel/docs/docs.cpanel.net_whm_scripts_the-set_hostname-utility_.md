---
url: "https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/"
title: "The set_hostname Utility | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/#main-content)

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
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The set\_hostname Utility


[hostname](https://docs.cpanel.net/tags/hostname/) [networking](https://docs.cpanel.net/tags/networking/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/#run-the-script)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/#run-the-script)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/#example)

* * *

## The set\_hostname Utility

_Valid for versions 90 through the latest version_

#### Version:

#### [90](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility/)

Last modified: _2022 July 28_

* * *

## Overview

The `/usr/local/cpanel/bin/set_hostname` utility updates the server’s hostname and performs all of the necessary actions to apply this change throughout the system. You can use this utility to change the server’s hostname during a process that requires you to call the binary (for example, automated cloning processes).

You can also use the following methods to change the server’s hostname:

- Use WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname/) interface ( _WHM » Home » Networking Setup » Change Hostname_).

- Use WHM API 1’s [`sethostname`](https://api.docs.cpanel.net/openapi/whm/operation/sethostname/) function.


If you use either of these methods, you do **not** need to run this utility.

Important:

- Do **not** select a hostname that begins with `www` or a number, or a hostname that ends with a hyphen (`-`).

- You **must** use a [fully-qualified domain name (FQDN)](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) that uniquely identifies the server (for example, `hostname.example.com` or `hostname.example.co.uk`).

- Do **not** choose a hostname that a cPanel account on your server will use.

- Do **not** choose a potential service subdomain as a hostname (for example, `cpanel.example.com` or `whm.example.com`).

- Do **not** select a socially-unacceptable hostname. The hostname will appear in mail headers.

- Only use lowercase, Latin-script letters in hostnames.


Note:

If your server currently uses a subdomain of `cprapid.com` as a hostname, we **strongly** encourage you to replace it with an existing domain or purchase a new domain to generate a hostname. Using your own domain name and hostname will help establish your company’s brand. For more information, read our [Automatically-Issued Hostnames](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/) documentation.


## Run the script

To use the `/usr/local/cpanel/bin/set_hostname` utility, run the following command as the `root` user, where `newhostname.example.com` represents your new hostname:

```bash
/usr/local/cpanel/bin/set_hostname newhostname.example.com [option]
```

You can specify the following option for the `/usr/local/cpanel/bin/set_hostname` utility:

- `--help` — View utility information on the command line.

When you run this command, the `set_hostname` utility performs the following actions:

- It updates the hostname in the `/etc/sysconfig/network` file, and in the kernel.
- It updates the domain.
- It updates the server’s Apache® configuration.
- It updates the cPanel license.
- It updates cPHulk.
- It restarts MySQL®.
- It rebuilds cPanel & WHM’s global cache.
- It updates the FTP, Exim, Dovecot, and cPanel SSL certificates.

### Example

To change the server’s hostname to `hostname.example.com`, run the following command:

```bash
/usr/local/cpanel/bin/set_hostname hostname.example.com
```

If the update succeeds, the utility produces the following output:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>``` | ```bash<br>Changing hostname to hostname.example.com...Success!<br>Hostname set to: hostname.example.com<br>Output during rename:<br>Altered hostname in /etc/sysconfig/network<br>Stopping MySQL during hostname change<br>Changing hostname in kernel to hostname.example.com<br>Updating Apache configuration<br>Updating cPanel license...Done. Update succeeded.<br>Building global cache for cpanel...Done<br>Self Signed SSL Certificate for ftp does not match current hostname! ([oldhostname.example.com] != hostname.example.com).<br>Creating new Certificate and Key for ftp....Done<br>Self Signed SSL Certificate for exim does not match current hostname! ([oldhostname.example.com] != hostname.example.com).<br>Creating new Certificate and Key for exim....Done<br>Self Signed SSL Certificate for dovecot does not match current hostname! ([oldhostname.example.com] != hostname.example.com).<br>Creating new Certificate and Key for dovecot....Done<br>Self Signed SSL Certificate for cpanel does not match current hostname! ([oldhostname.example.com] != hostname.example.com).<br>Creating new Certificate and Key for cpanel....Done<br>Updating cPHulkd<br>hulkdsetup: database schema is up to date.<br>Waiting for "mysql" to start ......waiting for "mysql" to initialize ......<br>...finished.<br>Startup Log<br>    Starting MySQL...[  OK  ]<br>Log Messages<br>    150123  9:53:45 [Note] /usr/sbin/mysqld: ready for connections.<br>    150123 09:53:43 mysqld_safe Starting mysqld daemon with databases from /var/lib/mysql<br>    150122 22:36:53 mysqld_safe mysqld from pid file /var/lib/mysql/hostname.example.com.pid ended<br>    150122 22:36:53 [Note] /usr/sbin/mysqld: Shutdown complete<br>    150122 22:36:51 [Note] /usr/sbin/mysqld: Normal shutdown<br>    150122 22:29:00 [Note] /usr/sbin/mysqld: ready for connections.<br>    150122 22:28:59 mysqld_safe Starting mysqld daemon with databases from /var/lib/mysql<br>    150122 22:28:58 mysqld_safe mysqld from pid file /var/lib/mysql/hostname.example.com.pid ended<br>    150122 22:28:58 [Note] /usr/sbin/mysqld: Shutdown complete<br>    150122 22:28:57 [Note] /usr/sbin/mysqld: Normal shutdown<br>    150122 22:28:44 [Note] /usr/sbin/mysqld: ready for connections.<br>    150122 22:28:43 mysqld_safe Starting mysqld daemon with databases from /var/lib/mysql<br>    150122 22:28:42 mysqld_safe mysqld from pid file /var/lib/mysql/hostname.example.com.pid ended<br>    150122 22:28:42 [Note] /usr/sbin/mysqld: Shutdown complete<br>    150122 22:28:41 [Note] /usr/sbin/mysqld: Normal shutdown<br>    150122 22:27:38 [Note] /usr/sbin/mysqld: ready for connections.<br>    150122 22:27:37 mysqld_safe Starting mysqld daemon with databases from /var/lib/mysql<br>    150122 22:27:36 mysqld_safe mysqld from pid file /var/lib/mysql/hostname.example.com.pid ended<br>    150122 22:27:36 [Note] /usr/sbin/mysqld: Shutdown complete<br>    150122 22:27:34 [Note] /usr/sbin/mysqld: Normal shutdown<br>    150122 22:23:19 [Note] /usr/sbin/mysqld: ready for connections.<br>    150122 22:23:18 mysqld_safe Starting mysqld daemon with databases from /var/lib/mysql<br>    150122 22:23:17 mysqld_safe mysqld from pid file /var/lib/mysql/hostname.example.com.pid ended<br>    150122 22:23:17 [Note] /usr/sbin/mysqld: Shutdown complete<br>mysql started successfully.<br>``` |

#### Additional Documentation

* * *

- [Add an A Entry for Your Hostname](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/)
- [Change Hostname](https://docs.cpanel.net/whm/networking-setup/change-hostname/)
- [Resolver Configuration](https://docs.cpanel.net/whm/networking-setup/resolver-configuration/)
- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×