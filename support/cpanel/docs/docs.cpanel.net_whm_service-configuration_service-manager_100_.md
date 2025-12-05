---
url: "https://docs.cpanel.net/whm/service-configuration/service-manager/100/"
title: "Service Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/service-configuration/service-manager/100/#main-content)

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
3. [Service Configuration](https://docs.cpanel.net/whm/service-configuration/)
4. Service Manager


[whmui](https://docs.cpanel.net/tags/whmui/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/service-configuration/service-manager/100/#overview)

* * *

[TailWatch Drivers in the tailwatchd module](https://docs.cpanel.net/whm/service-configuration/service-manager/100/#tailwatch-drivers-in-the-tailwatchd-module)

* * *

[Service daemons](https://docs.cpanel.net/whm/service-configuration/service-manager/100/#service-daemons)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/service-configuration/service-manager/100/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/service-configuration/service-manager/100/#overview)

* * *

[TailWatch Drivers in the tailwatchd module](https://docs.cpanel.net/whm/service-configuration/service-manager/100/#tailwatch-drivers-in-the-tailwatchd-module)

* * *

[Service daemons](https://docs.cpanel.net/whm/service-configuration/service-manager/100/#service-daemons)

* * *

## Service Manager

![](https://docs.cpanel.net/img/whm-icons/service_manager.svg)

_Valid for versions 100 through 118_

#### Version:

#### [100](https://docs.cpanel.net/whm/service-configuration/service-manager/100/)

#### [120](https://docs.cpanel.net/whm/service-configuration/service-manager/120/)

#### [126](https://docs.cpanel.net/whm/service-configuration/service-manager/126/)

#### [132](https://docs.cpanel.net/whm/service-configuration/service-manager/)

Last modified: _2025 March 14_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface lists your server’s services and allows you to enable and monitor them.

Important:

The server profile that you select in WHM’s [_Server Profile_](https://docs.cpanel.net/whm/server-configuration/server-profile) interface ( _WHM » Home » Server Configuration » Server Profile_) affects which services display in this interface. For more information, read our [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles) documentation.

Note:

Select the _Enabled_ checkbox to enable a specific service.

- Select the _Monitor_ checkbox to monitor a specific service in the [cPanel interface](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/).
- To monitor a service, you **must** first enable it.

## TailWatch Drivers in the tailwatchd module

| Driver | Description |
| --- | --- |
| APNSPush | This driver notifies iOS® devices when new mail arrives. |
| ChkServd | This driver monitors the services that you configure in the _Service Manager_ interface. <br>- The _ChkServd_ driver attempts to restart a service when it detects that the service fails.<br>- The _ChkServd_ driver sends alerts about service failure, recovery, and timeouts to the contact information that you provide in WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_). |
| Eximstats | This driver tracks Exim mail statistics. The _Eximstats_ driver maintains the email bandwidth logs, limits email usage, and populates data for the _Mail Delivery Reports_ system. |
| JailManager | This driver manages the jailshells that the _EXPERIMENTAL: Jail Apache Virtual Hosts using mod\_ruid2 and cPanel® jailshell_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_) uses. The _JailManager_ driver updates each user’s jailshell with the `root` filesystem. <br>Note:<br>If the _EXPERIMENTAL: Jail Apache Virtual Hosts using mod\_ruid2 and cPanel® jailshell_ setting is disabled, the system disables the _JailManager_ option. |
| MailHealth | This driver monitors the mail log for the Dovecot mail services’ memory status. The system administrator receives a message if Dovecot is out of memory. |
| ModSecLog | This driver parses the ModSecurity® audit log and stores the information in the `modsec` database. |
| RecentAuthedMailIpTracker | This driver tracks the IP addresses for recently-authenticated IMAP and POP3 sessions. |
| cPBandwd | This driver generates the bandwidth logs for the IMAP and POP3 mail services. |

## Service daemons

Note:

The server’s installed services and the server’s profile determine which daemons this interface displays.

- For more information about server profiles, read our [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/) documentation.
- For more information about service status, read our [_Service Status_](https://docs.cpanel.net/whm/server-status/service-status) documentation.

| Daemon | Description |
| --- | --- |
| ClamAV Daemon (`clamd`) | This daemon scans your server for malicious programs. <br>Note:<br>This service **only** appears if you install the _ClamAV for cPanel_ plugin in WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins) interface ( _WHM » Home » cPanel » Manage Plugins_). |
| Calendar and Contacts Server (CCS) Plugin (`cpanel-ccs`) | This daemon enables the Calendar and Contacts Server (CCS) plugin. The CCS plugin allows cPanel users to manage their CalDAV (calendar) and CardDAV (contacts) accounts from a cPanel & WHM server. CCS becomes the main calendar and contacts tool when a WHM user installs the plugin. For more information about the CCS plugin, read our [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server) documentation. <br>Note:<br>- This service **only** appears if you install the _Calendar and Contacts Server_ plugin in WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins) interface ( _WHM » Home » cPanel » Manage Plugins_).<br>- If this daemon stops, the [_Z-Push - ActiveSync Support_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/#z-push---activesync-support) plugin will also stop working. |
| `cpanel-dovecot-solr` | This daemon enables IMAP Full-Text Search (FTS) Indexing (powered by Apache Solr™), which provides fast search capabilities for IMAP mailboxes. For more information about this service, read our [The install\_dovecot\_fts Script](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script) documentation. <br>Note:<br>- This service **only** appears if you install the _Full Text Search Indexing for IMAP powered by Apache Solr™_ plugin in WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins) interface ( _WHM » Home » cPanel » Manage Plugins_).<br>- The _Database_ and _DNS_ server profiles **disable** this daemon. |
| PHP-FPM service for cPanel Daemons (`cpanel_php_fpm`) | This daemon improves the performance of PHP-based internal applications that ship with cPanel & WHM, such as: <br>- phpMyAdmin<br>- phpPgAdmin<br>- Webmail applications<br>- Any third-party PHP application that the user installs.<br>Note:<br>This daemon will accelerate a maximum of ten concurrent processes per user. |
| cPanel DAV Daemon (`cpdavd`) | This daemon enables a set of HTTP extensions that allow users to manage their websites remotely. <br>Important:<br>If you plan to host other people’s websites on your web server, do **not** disable this daemon.<br> <br>Note:<br>The _Database_ and _DNS_ server profiles **disable** this daemon. |
| cPanel Greylisting Daemon (`cpgreylistd`) | This daemon manages Greylisting, a service that protects your server against spam from sources that your server does not recognize. For more information, read our [Greylisting](https://docs.cpanel.net/whm/email/greylisting) documentation. <br>Note:<br>The _Database_ and _DNS_ server profiles **disable** this daemon. |
| cPHulk Daemon (`cphulkd`) | This daemon manages [cPHulk Brute Force Protection](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection), a service that provides protection for your server against brute force attacks. |
| Cron Daemon (`crond`) | This daemon manages cron job scheduling. For more information, read our [Cron Jobs](https://docs.cpanel.net/cpanel/advanced/cron-jobs) documentation. <br>Note:<br>On Debian® systems, such as Ubuntu®, `cron` is the daemon’s name. The `restartsrv` script’s `crond` service manages Ubuntu’s `cron` daemon. |
| cPanel DNS Admin Cache (`dnsadmin`) | This daemon runs as a standalone daemon. This improves speed, but increases it memory usage. Deselect this option if you wish to use multiple `dnsadmin` processes for zone-related actions. |
| Exim Mail Server (`exim`) | This daemon is the part of your mail server that sends and receives mail. We recommend that you monitor and enable this daemon for most servers. <br>Warning:<br>If you disable this daemon, the following settings do **not** appear in the _Mail_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_): <br>- _Discard FormMail-clone message with bcc:_<br>- _Email delivery retry time_<br>- _Track email origin via X-Source email headers_<br>- _Max hourly emails per domain_<br>- _The percentage of email messages (above the domain’s hourly maximum) to queue and retry for delivery._<br>- _Maximum percentage of failed or deferred messages a domain may send per hour_<br>- _Number of failed or deferred messages a domain may send before protections can be triggered_<br>- _Add X-PopBeforeSMTP header for mail sent via POP-before-SMTP_<br>- _Enable BoxTrapper spam trap_<br>- _Enable Email Archiving support_<br>- _Enable Apache SpamAssassin™ spam filter_ |
| Exim Mail Server (on another port) (`exim-altport`) | This daemon allows you to configure Exim to listen to an additional port. By default, Exim listens to the following ports: <br>- `25`<br>- `465`<br>- `587`<br>Note:<br>In the text box, enter the additional port number on which you wish to allow Exim to run. |
| FTP Server (`ftpd`) | This daemon runs your FTP server. <br>Important:<br>We **strongly** recommend that you monitor this daemon.<br> <br>Note:<br>- This service **only** appears if you select an FTP server in WHM’s [_FTP Server Selection_](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/) interface ( _WHM » Home » Service Configuration » FTP Server Selection_). We disable FTP services by default because the FTP protocol sends clear-text usernames and passwords over public networks. It also does not enforce encryption, so third parties can attack the transmitted data.<br>- The _Database_, _DNS_, and _Mail_ server profiles **disable** this daemon. |
| Apache Web Server (`httpd`) | This daemon processes HTTP requests from visitors. Enable this feature to host websites on your web server. <br>Note:<br>The _Database_, _DNS_, and _Mail_ server profiles **disable** this daemon. |
| IMAP Server (`imap`) | This daemon for Dovecot processes how your users download their mail. For more information, read our [IMAP vs. POP3](https://docs.cpanel.net/knowledge-base/email/imap-versus-pop3/) documentation. <br>Important:<br>We **strongly** recommend that you monitor this daemon.<br> <br>Note:<br>The _Database_ and _DNS_ server profiles **disable** this daemon. |
| IP Aliases (`ipaliases`) | This daemon allows you to add more than one IP address to your network adapter. The system stores IP addresses that you add in WHM’s [_Add a New IP Address_](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address) interface ( _WHM » Home » IP Functions » Add a New IP Address_) in the `/etc/ips` file. The `ipaliases` service activates those IP addresses when the server starts. Use this configuration to run multiple connections on a single network, where each connection serves an additional purpose. |
| LMTP Server (`lmtp`) | This daemon allows Exim to connect to the Dovecot mail server. |
| Mailman (`mailman`) | This daemon allows your users to create a single email address to send mail to multiple email addresses. For more information, read our [Mailing Lists](https://docs.cpanel.net/cpanel/email/mailing-lists) documentation. <br>Note:<br>- The _Database_ and _DNS_ server profiles **disable** this daemon.<br>- The system does **not** start the Mailman service until the server hosts at least one mailing list. |
| MySQL Server (`mysql`) | This daemon processes database queries. If you plan to host any content management systems or applications that require a database, enable this daemon or the _PostgreSQL Server_ daemon. <br>Important:<br>We recommend that you monitor this daemon. The system does **not** monitor this daemon by default.<br> <br>Note:<br>The _Mail_ server profile **disables** this daemon. |
| DNS Server (`named`) | This daemon runs the nameservers. <br>Note:<br>- You should **only** enable this daemon if you wish to use your own nameservers. For more information, read our [Nameserver Selection](https://docs.cpanel.net/whm/service-configuration/nameserver-selection) documentation.<br>- The _Database_ server profile **disables** this daemon. |
| Name Service Cache Daemon (`nscd`) | This daemon manages a cache for name service requests. <br>Important:<br>We **strongly** recommend that you **only** enable this daemon on servers with **at least** 1,000 MB of available memory. |
| Passive OS Fingerprinting Daemon (`p0f`) | This daemon reports the visitor’s operating system and other information for email notifications that the system administrator requests in WHM’s [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager) interface ( _WHM » Home » Server Contacts » Contact Manager_). This information helps a system administrator quickly identify visitors that trigger events that cause alerts. The spam prevention and cPHulk systems use this information to identify potential spammers and brute force attacks. For example, if a user logs in to a server from multiple locations and uses multiple operating systems, this may indicate that someone has compromised the user’s account. For more information about this daemon, read the [Passive OS Fingerprinting documentation at GitHub](https://github.com/p0f/p0f/blob/master/docs/README). <br>Note:<br>If you disable this daemon, the notification footers will no longer contain the visitor information. |
| POP3 Server (`pop`) | This daemon processes how your users will download their mail. <br>Warning:<br>We **strongly** recommend that you monitor this daemon. The system does **not** monitor this daemon by default.<br> <br>Note:<br>The _Database_ and _DNS_ server profiles **disable** this daemon. |
| PostgreSQL Server (`postgresql`) | This daemon processes database queries. If you plan to host any content management systems or applications that require a database, enable this feature or the _MySQL Server_ daemon. <br>Note:<br>- The _DNS_ and _Mail_ server profiles **disable** this daemon.<br>- This service **only** appears if you install PostgreSQL. For more information about how to install PostgreSQL, read our [Install or Update PostgreSQL on Your cPanel Server](https://docs.cpanel.net/knowledge-base/sql/install-or-update-postgresql-on-your-cpanel-server/) documentation. |
| Apache SpamAssassin™ (`spamd`) | This daemon attempts to filter spam messages. If you disable this daemon, make sure that you also disable it in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration »Tweak Settings_). <br>Note:<br>The _Database_ and _DNS_ server profile **disables** this daemon. |
| SSH Daemon (`sshd`) | This daemon allows users to connect to your server in a terminal session via SSH. |
| rsyslog System Logger Daemon (`rsyslogd`) | This daemon monitors your web server and logs the system activity. <br>Important:<br>We **strongly** recommend that you enable this daemon. |

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Exim Configuration Manager](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/)
- [Service Manager](https://docs.cpanel.net/whm/service-configuration/service-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×