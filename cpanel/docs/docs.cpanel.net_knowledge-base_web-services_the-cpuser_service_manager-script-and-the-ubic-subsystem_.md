---
url: "https://docs.cpanel.net/knowledge-base/web-services/the-cpuser_service_manager-script-and-the-ubic-subsystem/"
title: "The cpuser_service_manager Script and the Ubic Subsystem | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/the-cpuser_service_manager-script-and-the-ubic-subsystem/#main-content)

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
3. [Web Services](https://docs.cpanel.net/knowledge-base/web-services/)
4. The cpuser\_service\_manager Script and the Ubic Subsystem


[services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/the-cpuser_service_manager-script-and-the-ubic-subsystem/#overview)

* * *

[The cpuser\_service\_manager script](https://docs.cpanel.net/knowledge-base/web-services/the-cpuser_service_manager-script-and-the-ubic-subsystem/#the-cpuserservicemanager-script)

* * *

[Arguments](https://docs.cpanel.net/knowledge-base/web-services/the-cpuser_service_manager-script-and-the-ubic-subsystem/#arguments)

* * *

[The Ubic subsystem](https://docs.cpanel.net/knowledge-base/web-services/the-cpuser_service_manager-script-and-the-ubic-subsystem/#the-ubic-subsystem)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/the-cpuser_service_manager-script-and-the-ubic-subsystem/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/the-cpuser_service_manager-script-and-the-ubic-subsystem/#overview)

* * *

[The cpuser\_service\_manager script](https://docs.cpanel.net/knowledge-base/web-services/the-cpuser_service_manager-script-and-the-ubic-subsystem/#the-cpuserservicemanager-script)

* * *

[Arguments](https://docs.cpanel.net/knowledge-base/web-services/the-cpuser_service_manager-script-and-the-ubic-subsystem/#arguments)

* * *

[The Ubic subsystem](https://docs.cpanel.net/knowledge-base/web-services/the-cpuser_service_manager-script-and-the-ubic-subsystem/#the-ubic-subsystem)

* * *

## The cpuser\_service\_manager Script and the Ubic Subsystem

Last modified: _2024 July 9_

* * *

## Overview

Note:

This script is for cPanel users. It **only** configures services for the user that runs the script.


The `cpuser_service_manager` script adds and removes user-managed and monitored services for your cPanel account. User-managed services are programs that you want your server to run all the time, such as a web application that runs in either Apache Tomcat®, PSGI, Rails, or WSGI, among others. Use this script to manage services run as the user, rather than the `root` user.

This script also configures [the Ubic subsystem](https://metacpan.org/pod/Ubic) on your account, which allows you to easily manage your services, and adds a watchdog cron job to monitor your services.

Important:

You **must** possess terminal access to use this script and the Ubic subsystem. Your hosting provider controls this access in WHM’s [_Manage Shell Access_](https://docs.cpanel.net/whm/account-functions/manage-shell-access/) interface ( _WHM » Home » Account Functions » Manage Shell Access_).

## The cpuser\_service\_manager script

To use this script, run the following command on the command line:

```perl
/usr/local/cpanel/scripts/cpuser_service_manager [argument] [options]
```

### Arguments

Note:

When you run this script, it will also configure [the Ubic subsystem](https://metacpan.org/pod/Ubic) and add a watchdog cron job if necessary. A watchdog cron job monitors the status of your services.


The `/usr/local/cpanel/scripts/cpuser_service_manager` script accepts the following arguments, where `service_name` represents the name of a service and `path` represents a file path:

| Argument | Description | Example |
| --- | --- | --- |
| `add service_name --init-script=path` | Set up a user-managed and monitored service.<br>Note:<br>- If you use the `--init-script` option, your script **must** be a [Linux Standard Base (LSB)](http://refspecs.linuxbase.org/LSB_3.0.0/LSB-PDA/LSB-PDA/iniscrptact.html)-compliant script.<br>- If you use the `--ubic-service` option, your script **must** be a Ubic-compliant script.<br>- The `path` variable **must** use an absolute path. | `/usr/local/cpanel/scripts/cpuser_service_manager add my_psgi_app --init-script=/path/to/init.file` |
| `add service_name --ubic-service=path` | Set up a user-managed and monitored service.<br>Note:<br>- If you use the `--init-script` option, your script **must** be a Linux Standard Base (LSB)-compliant script.<br>- If you use the `--ubic-service` option, your script **must** be a Ubic-compliant script.<br>- The `path` variable **must** use an absolute path. | ` /usr/local/cpanel/scripts/cpuser_service_manager add my_psgi_app --ubic-service=/path/to/ubic.file` |
| `info` | Display information about how the script works and what it does. | `/usr/local/cpanel/scripts/cpuser_service_manager info` |
| `list` | Display a list of the user-managed and monitored services. | `/usr/local/cpanel/scripts/cpuser_service_manager list` |
| `remove service_name` | Remove a service. | `/usr/local/cpanel/scripts/cpuser_service_manager remove my_psgi_app` |
| `hint [argument]` | Display the abbreviated help information.<br>Note:<br>The `argument` is optional. If you specify an `argument`, only that argument’s abbreviated help information appears. | `/usr/local/cpanel/scripts/cpuser_service_manager hint add` |
| `help [argument]` | Display the script’s help information. <br>Note:<br>The `argument` is optional. If you specify an `argument`, only that argument’s abbreviated help information displays. | `/usr/local/cpanel/scripts/cpuser_service_manager help add` |

## The Ubic subsystem

The `/scripts/cpuser_service_manager` script configures [the Ubic subsystem](https://metacpan.org/pod/Ubic) if necessary, when you add a service to your cPanel account. This subsystem enables easy management of your system’s services on the command line. Use this subsystem to stop, start, restart, and see the status of your account’s services.

The Ubic subsystem configuration adds the following to your account:

- The `~/ubic` directory

- The `~/.ubic.cfg` file






Important:




Do **not** edit the the `~/.ubic.cfg` file or it will not function correctly.


- A cron job that includes a Ubic watchdog process to monitor the status of your service.


To use the Ubic subsystem, run the following command on the command line:

```perl
ubic [argument] [service_name]
```

Note:

If `ubic` does not exist in your PATH, you **must** add it to your configuration. For example, you might add the following line to your `.bashrc`file:

```perl
export PATH=$(dirname $(readlink /usr/local/cpanel/3rdparty/bin/perl)):$PATH
```

Important:

Jailshell users **cannot** see the status of their previously started Tomcat service. The default jailshell permissions **only** allow users to view their current session’s processes. If they attempt to restart a service that is already active with Ubic, the system launches a duplicate process.


You can use the following arguments to manage your services with Ubic, where `service_name` represents the name of the service that you wish to modify:

| Argument | Description | Example |
| --- | --- | --- |
| `status service_name` | Display the status of a service. | `ubic status my_psgi_app` |
| `start service_name` | Start a service. | `ubic start my_psgi_app` |
| `stop service_name` | Stop a service. | `ubic stop my_psgi_app` |
| `restart service_name` | Restart a service. | `ubic restart my_psgi_app` |

You can view other possible arguments with the `perldoc /usr/local/cpanel/3rdparty/perl/528/bin/ubic` command.

#### Additional Documentation

* * *

- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/)
- [Restart Services](https://docs.cpanel.net/whm/restart-services/restart-services/)
- [Server Information for cPanel](https://docs.cpanel.net/cpanel/the-cpanel-interface/server-information-for-cpanel/)
- [Service Manager](https://docs.cpanel.net/whm/service-configuration/service-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×