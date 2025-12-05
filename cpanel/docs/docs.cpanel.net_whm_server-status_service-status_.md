---
url: "https://docs.cpanel.net/whm/server-status/service-status/"
title: "Service Status | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-status/service-status/#main-content)

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
3. [Server Status](https://docs.cpanel.net/whm/server-status/)
4. Service Status


[whmui](https://docs.cpanel.net/tags/whmui/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-status/service-status/#overview)

* * *

[Service Information](https://docs.cpanel.net/whm/server-status/service-status/#service-information)

* * *

[System Information](https://docs.cpanel.net/whm/server-status/service-status/#system-information)

* * *

[Disk Information](https://docs.cpanel.net/whm/server-status/service-status/#disk-information)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-status/service-status/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-status/service-status/#overview)

* * *

[Service Information](https://docs.cpanel.net/whm/server-status/service-status/#service-information)

* * *

[System Information](https://docs.cpanel.net/whm/server-status/service-status/#system-information)

* * *

[Disk Information](https://docs.cpanel.net/whm/server-status/service-status/#disk-information)

* * *

## Service Status

![](https://docs.cpanel.net/img/whm-icons/service_status.svg)

_Valid for versions 100 through the latest version_

#### Version:

#### [100](https://docs.cpanel.net/whm/server-status/service-status/)

Last modified: _2025 January 14_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface displays a list of services that WHM monitors to ensure that they are functional.

Note:

The current server profile in WHM’s [_Server Profile_](https://docs.cpanel.net/whm/server-configuration/server-profile/) interface ( _WHM » Home » Server Configuration » Server Profile_) determines which services appear in this cPanel interface.

## Service Information

The _Service Information_ table will display one of the following statuses for each service:

- _up_ — The service is operational. This status displays a checkmark icon (![](https://docs.cpanel.net/img/servicestatuscheck.png)).
- _down_ — The service is non-operational. This status displays a triangle warning icon (![](https://docs.cpanel.net/img/warn.png)).
- _pending_ — WHM has suspended monitoring for the service, though it has **not** suspended the service itself. cPanel & WHM uses this status during service restarts or installations. After, the system will automatically restart monitoring. This status displays a triangle warning icon (![](https://docs.cpanel.net/img/warn.png)).

Select the tab that matches your cPanel & WHM server:

- [cPanel & WHM](https://docs.cpanel.net/whm/server-status/service-status/#tab-title-1)
- [cPanel DNSOnly®](https://docs.cpanel.net/whm/server-status/service-status/#tab-title-2)

cPanel & WHM servers monitor the following services by default:

- _cpanellogd_
- _cpdavd_
- _cpsrvd_
- _crond_
- _dnsadmin_
- _exim_
- _ftpd_
- _httpd_
- _imap_
- _ipaliases_
- _lmtp_
- _mailman_
- _mysql_
- _named_
- _nscd_
- _pop_
- _queueprocd_
- _rsyslogd_
- _spamd_
- _sshd_

cPanel DNSOnly® servers monitor the following services by default:

- _cPHulk Daemon_
- _Cron daemon_
- _cPanel DNS Admin Cache_
- _Exim Mail server_
- _Exim Mail Server (on another port)_
- _IP Aliases_
- _LMTP Server_
- _MySQL Server_
- _DNS Server_
- _Name Service Cache Daemon_
- _SSH Daemon_
- _rsyslog System Logger Daemon_

## System Information

This section lists the server’s load, the current memory used, the current swap space used, and the status for these items. The status can be as follows:

| Status icon | Icon description | Status meaning |
| --- | --- | --- |
| ![](https://docs.cpanel.net/img/servicestatuscheck.png) | A checkmark icon. | You are using less than 80% of the available resource. |
| ![](https://docs.cpanel.net/img/warn.png) | A triangle warning icon. | You are using between 80% and 89% of the available resource. |
| ![](https://docs.cpanel.net/img/xicon.png) | An _X_ icon. | You are using 90% or more of the available resource. |

## Disk Information

This section lists the disk devices, their mount points, their current usage, and their status. The status can be as follows:

| Status icon | Icon description | Status meaning |
| --- | --- | --- |
| ![](https://docs.cpanel.net/img/servicestatuscheck.png) | A checkmark icon. | You are using less than 80% of the disk device’s space. |
| ![](https://docs.cpanel.net/img/warn.png) | A triangle warning icon. | You are using between 80% and 89% of the disk device’s space. |
| ![](https://docs.cpanel.net/img/xicon.png) | An _X_ icon. | You are using 90% or more of the disk device’s space. |

Note:

- To monitor disk space usage, you **must** enable the _System disk space usage warnings_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#notifications) interface ( _WHM » Home » Server Configruation » Tweak Settings_).
- To disable notifications for specific mount points, add them to WHM’s [`/var/cpanel/chkservd_ignored_mounts`](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#the-varcpanelchecksrvd_ignored_mounts-file) file.

#### Additional Documentation

* * *

- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [Daily Process Log](https://docs.cpanel.net/whm/server-status/daily-process-log/)
- [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/)
- [Restart Services](https://docs.cpanel.net/whm/restart-services/restart-services/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×