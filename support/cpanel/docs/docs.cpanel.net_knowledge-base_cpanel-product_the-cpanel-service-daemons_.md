---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-service-daemons/"
title: "The cPanel & WHM Service Daemons | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-service-daemons/#main-content)

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
3. [cPanel Product](https://docs.cpanel.net/knowledge-base/cpanel-product/)
4. The cPanel & WHM Service Daemons


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-service-daemons/#overview)

* * *

[Services](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-service-daemons/#services)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-service-daemons/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-service-daemons/#overview)

* * *

[Services](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-service-daemons/#services)

* * *

## The cPanel & WHM Service Daemons

Last modified: _2024 July 9_

* * *

## Overview

This document lists the services (daemons) that exist on cPanel & WHM servers. A daemon is a program that runs as a background process, rather than under a user’s control.

- To view a complete list of daemons on your server, run the WHM API 1 [`servicestatus`](https://api.docs.cpanel.net/openapi/whm/operation/servicestatus/) function.

- To view a list of daemons that you can enable and monitor via the interface, use WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).


### Services

Note:

Certain server profile configurations affect a service’s availability. For more information, read our [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles) documentation.

#### `apache_php_fpm`— PHP-FPM service for Apache

This daemon improves the performance of EasyApache 4’s [PHP-based internal applications](https://docs.cpanel.net/ea4/php/php-options/).

Important:

- This option is **only** available on systems that run EasyApache 4.
- You cannot install or remove the PHP-FPM daemon in this interface. You must use the [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_).

Note:

The _Database_, _DNS_, and _Mail_ server profiles **disable** this service.

#### `clamd` — ClamAV Daemon

This daemon scans your server for malicious programs.

Note:

To install or uninstall ClamAV, use WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins) interface ( _WHM » Home » cPanel » Manage Plugins_).

#### `cpanel-dovecot-solr` — IMAP Full-Text Search (FTS) Indexing (Powered by Apache Solr™).

This daemon provides fast search capabilities for IMAP mailboxes.

Note:

- To install or uninstall IMAP Full-Text Search (Powered by Apache Solr™), use WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins) interface ( _WHM » Home » cPanel » Manage Plugins_).

- The _Database_ and _DNS_ server profiles **disable** this service.


#### `cpanel_php_fpm` — PHP-FPM service for cPanel Daemons

This daemon improves the performance of PHP-based internal applications that ship with cPanel & WHM, such as:

- phpMyAdmin
- phpPgAdmin
- Webmail applications
- Any third-party PHP application that the user installs.

Note:

This service will accelerate a maximum of ten concurrent processes per user.

#### `cpanellogd` — cPanel Log and Bandwidth Processor

This daemon compresses and archives cPanel & WHM log files at the end of each month into a single file for each type. For more information, read our [cPanel Log Rotation Configuration](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration) and [The cPanel & WHM Log Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/) documentation.

#### `cpdavd` — cPanel DAV Daemon

This daemon enables a set of extensions that allow users to manage their websites remotely.

In cPanel & WHM version 120 and later, this daemon also allows users to access and manage their calendars and contacts. For more information, read our [cpdavd Service Replaces CCS Plugin](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin) documentation.

Important:

- If you plan to host other people’s websites or email on your web server, do **not** disable this daemon.
- The _Database_ and _DNS_ server profiles **disable** this service.

#### `cpgreylistd` — cPanel Greylisting Daemon

This daemon manages Greylisting, a service that protects your server against spam from sources that your server does not recognize. For more information, read our [Greylisting](https://docs.cpanel.net/whm/email/greylisting) documentation.

Note:

In The _Database_ and _DNS_ server profiles **disable** this service.

#### `cphulkd` — cPHulk Daemon

This daemon manages [cPHulk Brute Force Protection](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection), a service that provides protection for your server against brute force attacks.

#### `cpsrvd` — cPanel Server Daemon

This daemon is the application server for cPanel, WHM, and Webmail services.

Note:

When you disable the Web Server role, this daemon listens on ports 80 and 443. For more information, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) documentation.

#### `crond` — Cron Daemon

The cron scheduling daemon. For more information, read our [Cron Jobs](https://docs.cpanel.net/cpanel/advanced/cron-jobs) documentation.

Note:

In Debian® systems (Ubuntu®), `cron` is the daemon’s name. The `restartsrv` script’s `crond` service manages Ubuntu’s `cron` daemon.

#### `dnsadmin` — cPanel DNS (Domain Name System) Admin Cache

The `dnsadmin` daemon runs as a standalone daemon. This improves speed, but increases its memory usage. Deselect this option if you wish to use multiple `dnsadmin` daemon processes for zone-related actions.

#### `exim` — Exim Mail Server

The SMTP mail server daemon is the part of your mail server that sends and receives mail. We recommend that you monitor and enable this feature for most servers.

Warning:

If you disable this service, the following options do not appear in the Mail section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_):

- _Discard FormMail-clone message with bcc:_
- _Email delivery retry time_
- _Track email origin via X-Source email headers_
- _Max hourly emails per domain_
- _The percentage of email messages (above the domain’s hourly maximum) to queue and retry for delivery._
- _Maximum percentage of failed or deferred messages a domain may send per hour_
- _Number of failed or deferred messages a domain may send before protections can be triggered_
- _Add X-PopBeforeSMTP header for mail sent via POP-before-SMTP_
- _Enable BoxTrapper spam trap_
- _Enable Email Archiving support_
- _Enable Apache SpamAssassin™ spam filter_

#### `exim-altport` — Exim Mail Server (on another port)

By default, Exim listens to the following ports:

- `25`
- `465`
- `587`

This option allows you to configure Exim to listen to an additional port.

Note:

In the text box, enter the additional port number on which you wish to allow Exim to run.

#### `ftpd` — FTP (File Transfer Protocol) Server

The FTP server daemon runs your FTP server. Enable this feature if you plan to host other people’s websites on your web server.

Important:

- We **strongly** recommend that you monitor this feature.
- The _Database_, _DNS_, and _Mail_ profiles **disable** this service.

#### `httpd` — Web Server

The web server daemon processes HTTP requests from visitors. Enable this feature to host websites with your web server.

Note:

- When you disable this daemon, the `cpsrvd` daemon takes over HTTP on the `80` and `443` ports.
- The _Database_, _DNS_, and _Mail_ server profiles **disable** this service.

#### `imap` — IMAP (Internet Mail Access Protocol) Server

The IMAP daemon for Dovecot processes how your users download their mail.

For more information, read our [IMAP vs. POP3](https://docs.cpanel.net/knowledge-base/email/imap-versus-pop3/) documentation.

Important:

- We **strongly** recommend that you monitor this daemon.
- The _Database_ and _DNS_ server profiles **disable** this service.

#### `ipaliases` — IP (Internet Protocol) Aliases

The IP Aliases daemon allows you to add more than one IP address to your network adapter. The system stores IP addresses that you add in WHM’s [_Add a New IP Address_](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address) interface ( _WHM » Home » IP Functions » Add a New IP Address_) in the `/etc/ips` file. The `ipaliases` service activates those IP addresses when the server starts.

Use this configuration to run multiple connections on a single network, where each connection serves an additional purpose.

#### `lmtp` — LMTP (Local Mail Transport Protocol) Server

The Local Mail Transport Protocol (LMTP) server allows Exim to connect to the Dovecot mail server.

#### `mailman` — Mailman

The Mailman mailing list manager allows your users to create a single email address to send mail to multiple email addresses. For more information, read our [Mailing Lists](https://docs.cpanel.net/cpanel/email/mailing-lists) documentation.

Note:

- In The _Database_ and _DNS_ server profiles **disable** this service.
- The system does **not** start the Mailman service until the server hosts at least one mailing list.

#### `mysql` — MySQL® or MariaDB® Server

The MySQL® database server processes database queries. If you plan to host any content management systems or applications that require a database, enable this feature or the postgresql server.

Important:

- The system monitors this daemon by default.
- The _Mail_ profile **disables** this service.

#### `named` — DNS (Domain Name System) Server

The Berkeley Internet Name Domain (BIND), PowerDNS, MyDNS, or NSD daemon runs the nameservers.

Note:

- You should **only** enable this daemon if you wish to use your own nameservers. For more information, read our [Nameserver Selection](https://docs.cpanel.net/whm/service-configuration/nameserver-selection) documentation.
- The _Database_ server profile **disables** this service.

#### `nscd` — Name Service Cache Daemon

This daemon manages a cache for name service requests.

Important:

We **strongly** recommend that you **only** enable this service on servers with **at least** 1,000 MB of available memory.

#### `p0f` — Passive OS (Operating System) Fingerprinting Daemon

The Passive OS Fingerprinting daemon (`p0f`) reports the visitor’s operating system and other information for email notifications that the system administrator requests in the [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager) interface ( _WHM » Home » Server Contacts » Contact Manager_). This information helps a system administrator quickly identify visitors that trigger events that cause alerts. The spam prevention and cPHulk systems use this information to identify potential spammers and brute force attacks.

For example, if a user logs in to a server from multiple locations and uses multiple operating systems, this may indicate that someone has compromised the user’s account.

For more information about this daemon, read the [Passive OS Fingerprinting](https://github.com/p0f/p0f/blob/master/docs/README) documentation at GitHub.

Note:

If you disable this daemon, the notification footers will no longer contain the visitor information.

#### `pop` — POP3 (Post Office Protocol 3) Server

The POP3 daemon processes how your users will download their mail.

Warning:

- We **strongly** recommend that you monitor this daemon. The system does **not** monitor this daemon by default.
- The _Database_ and _DNS_ server profiles **disable** this service.

#### `postgresql` — PostgresSQL® Server

The PostgreSQL® database server processes database queries. If you plan to host any content management systems or applications that require a database, enable this feature or the `mysqld` server.

Note:

The _Mail_ profile **disables** this service.

#### `queueprocd` — TaskQueue Processor

The TaskQueue Processor processes the task queue periodically and resides in the `/usr/local/cpanel/libexec` directory. For more information, read our [Task Queue Monitor](https://docs.cpanel.net/whm/server-status/task-queue-monitor) documentation.

#### `rsyslogd` — System Logger Daemon

The system log daemon monitors your web server and logs the system activity.

Important:

We **strongly** recommend that you enable this daemon.

#### `spamd` — Apache SpamAssassin™

The Apache SpamAssassin daemon attempts to filter spam messages. If you disable this daemon, make sure that you also disable it in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration »Tweak Settings_).

Note:

The _Database_ and _DNS_ server profiles **disable** this service.

#### `sshd` — SSH (Secure Shell) Daemon

The secure shell (SSH) daemon allows users to connect to your server in a terminal session via SSH.

#### `syslogd` — syslog System Logger Daemon

The system log daemon. This daemon handles your web server’s monitoring and logging system information.

#### `tailwatchd` — TailWatch Daemon

The TailWatch daemon monitors a log file for certain activities and then performs an action based on the activity. For more information, read our [TailWatch](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/) documentation.

#### Additional Documentation

* * *

- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [Supported MySQL/MariaDB Versions](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/)
- [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/)
- [The find\_outdated\_services Script](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/)
- [The is\_script\_stuck Script](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×