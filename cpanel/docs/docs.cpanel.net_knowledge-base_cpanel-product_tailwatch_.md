---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/"
title: "TailWatch | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#main-content)

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
4. TailWatch


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [logs](https://docs.cpanel.net/tags/logs/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#overview)

* * *

[The chkservd driver](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#the-chkservd-driver)

* * *

[Add a new monitor](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#add-a-new-monitor)

* * *

[Common errors](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#common-errors)

* * *

[Other drivers](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#other-drivers)

* * *

[Process control and status](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#process-control-and-status)

* * *

[Custom functionality](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#custom-functionality)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#overview)

* * *

[The chkservd driver](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#the-chkservd-driver)

* * *

[Add a new monitor](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#add-a-new-monitor)

* * *

[Common errors](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#common-errors)

* * *

[Other drivers](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#other-drivers)

* * *

[Process control and status](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#process-control-and-status)

* * *

[Custom functionality](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#custom-functionality)

* * *

## TailWatch

Last modified: _2024 February 19_

* * *

## Overview

The TailWatch driver monitors a log file for certain activities, and then performs actions for the activity. Driver modules monitor specific services and contain instructions for which actions to perform (for example, which log to monitor and what to do with the information).

We ship the following stock drivers:

- `chkservd`
- `cpbandwd`
- `eximstats`
- `jailmanager`
- `modseclog`
- `recentauthedmailiptracker`

You can enable or disable TailWatch drivers in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).

## The chkservd driver

The `chkservd` driver determines whether a process is online and whether to restart the process via either of the following actions:

- Connection-based monitoring — The `chkservd` driver attempts to connect to a service’s specified port, issues a command, and waits for a response. If the driver receives a response, the driver reports the service online. This action uses [the `restartsrv` script](https://docs.cpanel.net/whm/scripts/the-restartsrv-script) with the `--check` option.

- Process-based monitoring — The `chkservd` driver checks for a specific process and determines the connection status.


You can set a service’s monitor process in that service’s configuration file. For more information, read the [Add a new monitor](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#add-a-new-monitor) section below.

By default, the `chkservd` driver checks each service every five minutes to determine the service’s status.

- If a service is online, the `chkservd` driver will check the next service.

- If a service is offline, the `chkservd` driver will use one of [the `restartsrv` script](https://docs.cpanel.net/whm/scripts/the-restartsrv-script) to attempt to restart the service.


You can view the results of the `chkservd` checks in any of the following formats:

- The `/var/log/chkservd.log` log file contains the results from each check that it performs.

- WHM’s [_Server Information_](https://docs.cpanel.net/whm/server-status/server-information) interface ( _WHM » Home » Server Status » Server Information_) displays the results from each check.


Note:

- You can configure the system to email you the results from each check.

- To choose which services the `chkservd` driver will monitor, use WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).

- To modify the `chkservd` driver’s configuration options, use the _System_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).


### Add a new monitor

To add a service that you wish for the `chkservd` driver to monitor, perform the following steps:

1. Open the `/etc/chkserv.d/chkservd.conf` file with a text editor.

2. Add the service that you want to monitor to the file, a colon (`:`), and a `1` or a `0` to indicate whether the system should monitor the new service. In the following example, `ftpd` represents the new service:








[Click to view...](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/#click-to-view---1764175697020783221)









|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>``` | ```go<br>clamd:1<br>cpanel_php_fpm:1<br>cpanellogd:1<br>cpdavd:1<br>cphulkd:0<br>cpsrvd:1<br>crond:1<br>dnsadmin:1<br>csf:1<br>exim:0<br>ftpd:1<br>httpd:1<br>imap:1<br>ipaliases:1<br>mysql:1<br>named:1<br>nginx:1<br>pop:1<br>queueprocd:1<br>rsyslogd:1<br>spamd:0<br>sshd:1<br>``` |

3. Create the configuration file for the new service in the `/etc/chkserv.d` directory.

4. Open the file and add a line that resembles either of the following examples:
   - Connection-based monitoring:



     ```perl
      service[ftpd]=21,QUIT,220,/usr/local/cpanel/scripts/restartsrv_ftpserver
     ```





     Note:





     This example contains the following values:



- `ftpd` represents the service to monitor.

- `21` represents the port through which the `chkservd` driver will attempt to connect to the service.

- `QUIT` represents the command that the `chkservd` driver will send to check the service’s connection.

- `220` represents the server’s expected response to the command.

- `/usr/local/cpanel/scripts/restartsrv_ftpserver` represents the service’s restart command.


   - Process-based monitoring:



     ```perl
     service[ftpd]=x,x,x,/usr/local/cpanel/scripts/restartsrv_ftpserver.service,ftpd,root
     ```





     Note:





     This example contains the following values:



- `ftpd` represents the service to monitor.

- `x,x,x` directs the system to use process-based tracking.

- `/usr/local/cpanel/scripts/restartsrv/ftpserver` represents the service’s restart command. To enter more than one restart command, separate each command with a semicolon (`;`) in the order that the `chkservd` driver will execute them.

- `ftpd` represents the service to restart.

- `root` represents the user who owns the monitor process.

- Make **certain** to separate multiple users with a pipe (`|`) character.


   - Combined connection-based and process-based monitoring:



     ```perl
     service[ftpd]=21,QUIT,220,/usr/local/cpanel/scripts/restartsrv_ftpserver,ftpd,root
     ```





     Note:





     This example contains the following values:



- `ftpd` represents the service to monitor.

- `21` represents the port through which the `chkservd` driver will attempt to connect to the service.

- `QUIT` represents the command that the `chkservd` driver will send to check the service’s connection.

- `220` represents the server’s expected response to the command.

- `/usr/local/cpanel/scripts/restartsrv_ftpserver` represents the service’s restart command.

- `ftpd` represents the service to restart.

- `root` represents the user who owns the monitor process. Make **certain** to separate multiple users with a pipe (`|`) character.
5. After you enter the service’s configuration information, restart the `chkservd` driver. To do this, run the following command:



```perl
/etc/init.d/chkservd restart
```

6. Confirm that the service appears in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).


### Common errors

One common `chkservd` driver error occurs when an unmonitored, enabled service appears as offline in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). To fix this error, perform the following steps, where `service` represents the name of the service with which you experience problems:

1. To remove the run file, run the following command:



```perl
rm -f /var/run/chkservd/service
```

2. To remove the `chkservd` configuration file, run the following command:



```perl
rm -f /etc/chkserv.d/service
```

3. Open the `/etc/chkserv.d/chkservd.conf` configuration file with a text editor and delete the service’s line.

4. To restart the `chkservd` driver, run the following command:



```perl
/scripts/restartsrv_chkservd
```

5. Navigate to WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).

6. Click _Save_ at the bottom of the interface without any additional changes.


## Other drivers

Unlike the `chkservd` driver, these other TailWatch drivers do **not** possess their own log files or configuration:

- `antirelayd`
- `eximstats`
- `jailmanager`
- `cpbandwd`
- `modseclog`

Note:

The system records these drivers’ activities in the main `/usr/local/cpanel/logs/tailwatchd_log` log file.

## Process control and status

To control the TailWatch process, pass command line flags to the `/usr/local/cpanel/libexec/tailwatchd` file.

For a full list of available flags, run the following command:

```perl
/usr/local/cpanel/libexec/tailwatchd --help
```

## Custom functionality

To add custom functionality to TailWatch, add a new driver. The PerlDoc for the TailWatch Module contains full documentation and examples for customizations.

To access this documentation, run the following command:

```perl
/usr/local/cpanel/libexec/tailwatchd --perldoc
```

Place your new drivers in the `/usr/local/cpanel/Cpanel/TailWatch` directory, then restart TailWatch to load the new drivers.

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