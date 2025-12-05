---
url: "https://docs.cpanel.net/whm/restart-services/restart-services/"
title: "Restart Services | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/restart-services/restart-services/#main-content)

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
3. Restart Services


[whmui](https://docs.cpanel.net/tags/whmui/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/restart-services/restart-services/#overview)

* * *

[Services](https://docs.cpanel.net/whm/restart-services/restart-services/#services)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/restart-services/restart-services/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/restart-services/restart-services/#overview)

* * *

[Services](https://docs.cpanel.net/whm/restart-services/restart-services/#services)

* * *

## Restart Services

![](https://docs.cpanel.net/img/whm-icons/group_restart_services.svg)

_Valid for versions 106 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/whm/restart-services/restart-services/)

Last modified: _2025 June 9_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

You can use the _Restart Services_ interfaces to restart services within the WHM interface.

Note:

- To view these interfaces, you **must** log in as the `root` user or your host **must** enable _Restart Services_.
- You **cannot** restart a stopped service. To start or stop services, use WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).
- If these interfaces fail to restart a service, the service may have additional problems. For additional methods to restart services and troubleshoot service issues, read our [How to Restart Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services) documentation.

## Services

You can restart the following services:

| Services | Icon | Description |
| --- | --- | --- |
| _DNS Server_ | ![DNS server icon](http://localhost:1313/img/whm-icons/dns_server.svg) | Use this interface to restart BIND or PowerDNS. |
| _FTP Server (ProFTPD/Pure-FTPd)_ | ![FTP server icon](http://localhost:1313/img/whm-icons/ftp_server_proftpd_pureftpd.svg) | Use this interface to restart the server’s FTP service. |
| _HTTP Server (Apache)_ | ![HTTP server icon](http://localhost:1313/img/whm-icons/http_server_apache.svg) | Use this interface to restart Apache®. |
| _IMAP Server_ | ![IMAP server icon](http://localhost:1313/img/whm-icons/imap_server.svg) | Use this interface to restart Dovecot. |
| _Mail Server (Exim)_ | ![mail server icon](http://localhost:1313/img/whm-icons/mail_server_exim.svg) | Use this interface to restart Exim. |
| _Mailing List Manager (Mailman)_ | ![mailing list server icon](http://localhost:1313/img/whm-icons/mailing_list_manager_mailman.svg) | Use this interface to restart Mailman. |
| _PHP-FPM Service for Apache_ | ![PHP-FPM service icon](http://localhost:1313/img/whm-icons/php_fpm_service_for_apache.svg) | Use this interface to restart the PHP-FPM service for Apache. |
| _SQL Server (MySQL)_ | ![MySQL server icon](http://localhost:1313/img/whm-icons/sql_server_mysql.svg) | Use this interface to restart MySQL®. |
| _SQL Server (PgSQL)_ | ![PgSQL server icon](http://localhost:1313/img/whm-icons/sql_server_mysql.svg) | Use this interface to restart PostgreSQL®. |
| _SSH Server (OpenSSH)_ | ![SSH server icon](http://localhost:1313/img/whm-icons/ssh_server_openssh.svg) | Use this interface to restart OpenSSH. |

When the system prompts you for confirmation on these interfaces, click _Yes_.

#### Additional Documentation

* * *

- [API Shell for WHM](https://docs.cpanel.net/whm/development/api-shell-for-whm/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/)
- [Service Manager](https://docs.cpanel.net/whm/service-configuration/service-manager/)
- [Service Status](https://docs.cpanel.net/whm/server-status/service-status/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×