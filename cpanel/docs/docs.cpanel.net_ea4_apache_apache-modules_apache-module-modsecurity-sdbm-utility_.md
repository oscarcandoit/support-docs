---
url: "https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/"
title: "Apache Module — ModSecurity® SDBM Utility | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [EasyApache4](https://docs.cpanel.net/ea4/)
3. [Apache](https://docs.cpanel.net/ea4/apache/)
4. [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/)
5. Apache Module — ModSecurity® SDBM Utility


[ea4](https://docs.cpanel.net/tags/ea4/) [modsecurity](https://docs.cpanel.net/tags/modsecurity/)

#### Table of Contents

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
[Install the SDBM utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/#install-the-sdbm-utility) [Run the SDBM utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/#run-the-sdbm-utility) [Run the utility manually](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/#run-the-utility-manually) - [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/#installation-toggle)

- [Apache Modules](https://docs.cpanel.net/ea4/apache/apache-modules/apache-modules/)
- [Brotli](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-brotli/)
- [cPanel](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-cpanel/)
- [Evasive](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-evasive/)
- [FCGId](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-fcgid/)
- [HTTP2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2/)
- [Lua](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-lua/)
- [ModSecurity®](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity/)
- [ModSecurity® SDBM Utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/)
[Install the SDBM utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/#install-the-sdbm-utility) [Run the SDBM utility](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/#run-the-sdbm-utility) [Run the utility manually](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-modsecurity-sdbm-utility/#run-the-utility-manually) - [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/)
- [Ruid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/)

## Apache Module — ModSecurity® SDBM Utility

Last modified: _2025 February 19_

* * *

cPanel & WHM provides the ModSecurity SDBM utility to purge expired entries from the /`var/cpanel/secdatadir/ip.pag` cache file. ModSecurity stores variables in this file, but does **not** automatically clean up the file when the variables expire. We provide this utility **only** as a package for EasyApache 4 systems.

## Install the SDBM utility

To install the ModSecurity SDBM utility, run the following command:

| Operating System | Command |
| --- | --- |
| CentOS 7 | `yum install ea-modsec-sdbm-util` |
| AlmaLinux OS and Rocky Linux™ | `dnf install ea-modsec-sdbm-util` |
| Ubuntu® | `apt install --purge ea-modsec-sdbm-util` |

This package installs the `/usr/sbin/modsec-sdbm-util` binary.

## Run the SDBM utility

The `/scripts/maintenance` script calls the SDBM utility if the utility exists on the system. We **strongly** recommend that you allow the maintenance script to run the utility.

### Run the utility manually

Use the `/scripts/shrink_modsec_ip_database` script to run the SDBM utility. This script serves as a wrapper for the `/usr/sbin/modsec-sdbm-util` binary. This wrapper **only** functions when the utility exists on the system. To execute the script and purge expired entries from the `/var/cpanel/secdatadir/ip.pag` cache file, run the following command:

```perl
/scripts/shrink_modsec_ip_database -x
```

You can also run the following commands in a shell to purge the cache file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>/usr/sbin/modsec-sdbm-util -D /var/cpanel/secdatadir -v -n /var/cpanel/secdatadir/ip.pag &&\<br>  rm /var/cpanel/secdatadir/ip.pag &&\<br>  rm /var/cpanel/secdatadir/ip.dir &&\<br>  mv /var/cpanel/secdatadir/new_db.pag /var/cpanel/secdatadir/ip.pag &&\<br>  mv /var/cpanel/secdatadir/new_db.dir /var/cpanel/secdatadir/ip.dir<br>``` |

Important:

- If you execute the utility manually, you **must** run the `/scripts/restartsrv_httpd` command after the utility completes.
- Typical cPanel & WHM installations do **not** require that you run the script manually.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×