---
url: "https://docs.cpanel.net/whm/scripts/the-restartsrv-script/"
title: "The restartsrv Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#main-content)

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
4. The restartsrv Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#options)

* * *

[Services](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#services)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#options)

* * *

[Services](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#services)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#example)

* * *

## The restartsrv Script

_Valid for versions 100 through the latest version_

#### Version:

#### [100](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/)

Last modified: _2024 July 9_

* * *

## Overview

The `/usr/local/cpanel/scripts/restartsrv` script restarts a service. If a service won’t restart from WHM, use this script to restart a service from the command line.

## Run the script

To run this script on the command line, use the following format, where `service` is the [service’s name](https://docs.cpanel.net/whm/scripts/the-restartsrv-script/#services):

```bash
/usr/local/cpanel/scripts/restartsrv_service
```

### Options

Important:

Some options my be unavailable for certain services.

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `check` | Checks whether the service is running. | `--check` |
| `graceful` | Gracefully restart the service. | `--graceful` |
| `hard` | Perform a hard stop and restart for the service. | `--hard` |
| `notconfigured-ok` | The unconfigured service will exit with a non-fatal error. | `--notconfigured-ok` |
| `reload` | Reload the service. | `--reload` |
| `restart` | Perform a soft restart for the service. | `--restart` |
| `start` | Start the service. | `--start` |
| `stop` | Stop the service. | `--stop` |
| `help` | Display the script’s help documentation. | `--help` |

### Services

This script restarts the following services:

- `apache` or `httpd` — The Apache® web server daemon.
- `apache_php_fpm` — The Apache PHP-FPM service.
- `bind` — The [Berkeley Internet Name Domain (BIND)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#berkeley-internet-name-domain-bind) nameserver daemon.
- `chkservd` or `tailwatch` — cPanel & WHM’s TailWatch log processing service.
- `clamd` — The ClamAV® antivirus daemon.
- `cpanalysticsd` — The [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics) daemon.
- `cpanellogd` — The cPanel log and bandwidth processor daemon.
- `cpanel_ccs` — The [cPanel Calendar and Contacts server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server) service.
- `cpanel_dovecot_solr` — The Apache Solr™ service.
- `cpanel_php_fpm` — The cPanel PHP-FPM service.
- `cpdavd` — cPanel & WHM’s [WebDAV](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#webdav) daemon.






Note:





In cPanel & WHM version 120 and later, this daemon also allows users to access and manage their calendars and contacts. For more information, read our [cpdavd Service Replaces CCS Plugin](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin) documentation.

- `cpgreylistd` — cPanel’s [Greylisting](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#greylisting).
- `cphulkd` — The [cPHulk](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#cphulk) service.
- `cpipv6` — Binds or rebinds the server’s IPv6 addresses.
- `cpsrvd` or `cpanel` — The cPanel server daemon.
- `crond` — The Cron daemon.






Note:





While Debian® systems (Ubuntu®) use the `cron` daemon, you can use `crond` as the service name when running the script.

- `dnsadmin` — The cPanel Domain Name System (DNS) admin cache service.
- `dovecot` — The [Dovecot](https://www.dovecot.org/) mail server.
- `exim` — The [Exim](https://www.exim.org/) mail exchanger.
- `ftpd`, `ftpd`, `ftpmagic`, or `ftpserver` — The configured FTP service (ProFTPD or Pure-FTPd).
- `imap`, `pop`, or `pop3` — The Dovecot [Internet Mail Access Protocol (IMAP)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#imap) daemon.
- `ipaliases` — The IP address aliasing software.
- `lmtp` — The Local Mail Transport Protocol (LMTP) service.
- `mailman` — The [Mailman](http://www.list.org/) service.
- `mysql` or `mysqld` — The [MySQL®](https://www.mysql.com/) service.
- `named` — The BIND nameserver daemon.
- `nscd` — The Name Service Cache service.
- `p0f` — The [passive OS fingerprinting](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#passive-os-fingerprinting-p0f) service.
- `pdns` or `powerdns` — The [PowerDNS](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns) service.
- `postgres` or `postgresql` — The [PostgreSQL®](https://www.postgresql.org/) database service.
- `proftpd` — The [ProFTP](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#proftpd) server daemon.
- `pureftpd` — The [Pure-FTPd](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#pure-ftpd) server daemon.
- `queueprocd` — The [TaskQueue](https://docs.cpanel.net/whm/server-status/task-queue-monitor) Processor daemon.
- `rsyslog` or `rsyslogd` — The system log service that monitors the web server and system activity.
- `spamd` — The Apache SpamAssassin™ daemon.
- `sshd` or `openssh` — The Secure Shell (SSH) daemon.
- `tailwatchd` or `chkservd` — cPanel’s [TailWatch](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch) log processing daemon.

For more information about these services, read our [cPanel & WHM Service Daemons](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-service-daemons) documentation.

### Example

To perform a hard restart for a service, use the `restart` and `hard` options. For example, to perform a hard restart for the `named` service:

```bash
/usr/local/cpanel/scripts/restartsrv_named --restart --hard
```

#### Additional Documentation

* * *

- [The find\_outdated\_services Script](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/)
- [The is\_script\_stuck Script](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/)
- [The servicedomains Script](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/)
- [The try-later Script](https://docs.cpanel.net/whm/scripts/the-try-later-script/)
- [WHM Scripts](https://docs.cpanel.net/whm/scripts/whm-scripts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×