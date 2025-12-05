---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/"
title: "How to Restart Services | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#main-content)

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
4. How to Restart Services


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#overview)

* * *

[Restart services in the WHM interface](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#restart-services-in-the-whm-interface)

* * *

[Restart services from the command line](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#restart-services-from-the-command-line)

* * *

[Use the restartsrv script](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#use-the-restartsrv-script)

* * *

[Direct service restart](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#direct-service-restart)

* * *

[Service error logs](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#service-error-logs)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#overview)

* * *

[Restart services in the WHM interface](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#restart-services-in-the-whm-interface)

* * *

[Restart services from the command line](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#restart-services-from-the-command-line)

* * *

[Use the restartsrv script](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#use-the-restartsrv-script)

* * *

[Direct service restart](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#direct-service-restart)

* * *

[Service error logs](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/#service-error-logs)

* * *

## How to Restart Services

Last modified: _2025 February 13_

* * *

## Overview

This document describes several methods to restart the services (often daemons) on your server. Daemons are small processes that run in the background of your server. You may wish to restart a service if, for example, you changed a service’s configuration, or if the service experiences problems.

Important:

- If you update your hostname in cPanel & WHM version 120 and later, the system temporarily blocks user access to the _Calendars and Contacts Configuration_ interface ( _cPanel » Home » Email » Calendars and Contacts Configuration_).

- If you update your hostname in cPanel & WHM version 118 and earlier, the system temporarily blocks user access to the _Calendars and Contacts_ interface ( _cPanel » Home » Email » Calendars and Contacts_).


The system restores access to this interface after the hostname update finishes. For more information, read our [Interface Lock Scripts](https://docs.cpanel.net/knowledge-base/cpanel-product/interface-lock-scripts) documentation.

Note:

- Whenever you change the server’s hostname, you must use one of the following methods to ensure that all of the necessary system and service changes occur:
  - Use WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname) interface ( _WHM » Home » Networking Setup » Change Hostname_).
  - Call WHM API 1’s [`sethostname`](https://api.docs.cpanel.net/openapi/whm/operation/sethostname/) function.
  - Run the [`/usr/local/cpanel/scripts/set_hostname`](https://docs.cpanel.net/whm/scripts/the-set_hostname-utility) utility as the `root` user.
- If your cPanel & WHM server uses a cloud-based hosting provider, read our [Cloud-Hosted Hostname Solution](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/cloud-hosted-hostname-solution/) documentation.


## Restart services in the WHM interface

Unless problems prevent this, you can restart most services in WHM’s [_Restart Services_](https://docs.cpanel.net/whm/restart-services/restart-services) interface ( _WHM » Home » Restart Services_).

## Restart services from the command line

Important:

If you use IPv6, the service network restart command will remove the IPv6 addresses from the network device. To restart your IPv6 configuration after you run the service network restart command, you must run the `/usr/local/cpanel/scripts/restartsrv_cpipv6` command after you restart the network service.

### Use the restartsrv script

If a service will not restart from WHM, use the `/usr/local/cpanel/scripts/restartsrv_*` command to attempt to restart the service from the command line.

When you run this command, replace `*` with the correct value for that service.
For more information, read our [The `restartsrv` Script](https://docs.cpanel.net/whm/scripts/the-restartsrv-script) documentation.

### Direct service restart

If the `/usr/local/cpanel/scripts/restartsrv_*` script does not restart the service, you can attempt to restart the service directly.

For servers that run CentOS, [CloudLinux 7 and later](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/), [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/), Red Hat® Enterprise Linux® (RHEL), or [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/), run the following command, where `service-name` is the service that you wish to restart:

```bash
systemctl restart service-name.service
```

### Service error logs

If the restart fails, check the service’s error log for help to diagnose the issue. Because each service logs its errors differently, check the service’s documentation to find the error log’s location.

The following list contains common locations for some service’s error logs:

- Apache web server — `/var/log/apache2/error_log`

- BIND nameserver, ProFTP FTP server, Pure-FTP FTP server — `/var/log/messages`

- Exim mail transfer agent (MTA) — `/var/log/exim_mainlog`, `/var/log/exim_rejectlog`, `/var/log/exim_paniclog`



Warning:





If the `/var/log/exim_paniclog` file isn’t empty, Exim has serious problems and will not run on some distributions.

- Dovecot mail server — `/var/log/maillog`

- MySQL database server — `/var/lib/mysql/hostname.err`



Note:





Substitute `hostname` with your server’s hostname.

- OpenSSH secure shell service — `/var/log/messages`, `/var/log/secure`, `/var/log/auth`


For more information about these files, read our [The cPanel & WHM Log Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files) documentation.

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [Supported MySQL/MariaDB Versions](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×