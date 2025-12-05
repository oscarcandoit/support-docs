---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/system-user-accounts/"
title: "System User Accounts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/system-user-accounts/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. System User Accounts


[services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/system-user-accounts/#overview)

* * *

[Accounts](https://docs.cpanel.net/knowledge-base/general-systems-administration/system-user-accounts/#accounts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/system-user-accounts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/system-user-accounts/#overview)

* * *

[Accounts](https://docs.cpanel.net/knowledge-base/general-systems-administration/system-user-accounts/#accounts)

* * *

## System User Accounts

Last modified: _2019 June 20_

* * *

## Overview

This document lists the various system user accounts that your cPanel & WHM server contains. These accounts perform various functions, such as managing services.

Note:

Third-party plugins and software may create additional user accounts. Check your software’s documentation for more information.


## Accounts

| Account | Description | OS user | Added by cPanel & WHM | Added by third-party program |
| --- | --- | --- | --- | --- |
| `clamav` | This user manages the ClamAV anti-virus plugin. |  |  | X |
| `cpanel` | This user manages various cPanel services. |  | X |  |
| `cpanelanalytics` | This user manages the cPanel Analytics service on the server. |  | X |  |
| `cpanelcabcache` | This user manages the local Certificate Authority (CA) cache for SSL. |  | X |  |
| `cpanelconnecttrack` | This user manages the Passive OS fingerprinting (`p0f`) system. |  | X |  |
| `cpanellogin` | This user manages logins to the cPanel interface. |  | X |  |
| `cpaneleximfilter` | This user manages the filtering of mail in the Exim mail server. |  | X |  |
| `cpaneleximscanner` | This user manages the scanning of outbound mail by Apache SpamAssassin. |  | X |  |
| `cpanelhorde` | This user manages Horde webmail processes. |  | X |  |
| `cpanelphpmyadmin` | This user manages PHPMyAdmin requests for MySQL® databases. |  | X |  |
| `cpanelphppgadmin` | This user manages PHPPgAdmin requests for PostgreSQL databases. |  | X |  |
| `cpanelroundcube` | This user manages RoundCube webmail processes. |  | X |  |
| `cpanelrrdtool` | This user manages Round Robin DNS requests. |  | X |  |
| `cpanelsolr` | This user manages Apache Solr™ requests. |  | X |  |
| `dovecot` | This user manages the Dovecot mail service. |  |  | X |
| `nobody` | This unprivileged user handles various script requests. | X |  |  |
| `root` | This is the root user for the operating system. | X |  |  |

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [Supported MySQL/MariaDB Versions](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×