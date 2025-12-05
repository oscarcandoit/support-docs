---
url: "https://docs.cpanel.net/whm/email/spamd-startup-configuration/"
title: "Spamd Startup Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/email/spamd-startup-configuration/#main-content)

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
3. [Email](https://docs.cpanel.net/whm/email/)
4. Spamd Startup Configuration


[spamassassin](https://docs.cpanel.net/tags/spamassassin/) [spam](https://docs.cpanel.net/tags/spam/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/email/spamd-startup-configuration/#overview)

* * *

[Enable or disable Apache SpamAssassin](https://docs.cpanel.net/whm/email/spamd-startup-configuration/#enable-or-disable-apache-spamassassin)

* * *

[Spamd configuration options](https://docs.cpanel.net/whm/email/spamd-startup-configuration/#spamd-configuration-options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/email/spamd-startup-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/email/spamd-startup-configuration/#overview)

* * *

[Enable or disable Apache SpamAssassin](https://docs.cpanel.net/whm/email/spamd-startup-configuration/#enable-or-disable-apache-spamassassin)

* * *

[Spamd configuration options](https://docs.cpanel.net/whm/email/spamd-startup-configuration/#spamd-configuration-options)

* * *

## Spamd Startup Configuration

![](https://docs.cpanel.net/img/whm-icons/spamd_startup_configuration.svg)

_Valid for versions 92 through the latest version_

#### Version:

#### [92](https://docs.cpanel.net/whm/email/spamd-startup-configuration/)

Last modified: _2025 June 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Spamd Startup Configuration_ interface allows you to configure the startup options for the Apache SpamAssassin™ daemon (`spamd`).

Apache SpamAssassin is a spam filter utility that examines incoming email and tests for spam characteristics. If you [enable Apache SpamAssassin](https://docs.cpanel.net/whm/email/spamd-startup-configuration/#enable-or-disable-apache-spam-assassin) on your server, the Apache SpamAssassin daemon provides the Apache SpamAssassin service to your mail server.

## Enable or disable Apache SpamAssassin

To enable or disable Apache SpamAssassin, use the _Enable Apache SpamAssassin™_ spam filter setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

To enable or disable the `spamd` daemon from the command line, run either of the following series of commands:

- Enable `spamd`





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>rm -f /etc/spamddisable<br>touch /etc/spamdenable<br>find /etc/chkserv.d/spamd -exec rm -v {} \;<br>/usr/local/cpanel/scripts/restartsrv_tailwatchd<br>/usr/local/cpanel/scripts/restartsrv_spamd<br>``` |

- Disable `spamd`:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>rm -f /etc/spamdenable<br>touch /etc/spamddisable<br>find /etc/chkserv.d/spamd -exec rm -v {} \;<br>/usr/local/cpanel/scripts/restartsrv_tailwatchd<br>/usr/local/cpanel/scripts/restartsrv_spamd<br>``` |


To enable or disable dormant mode for the `spamd` daemon, use the _Dormant services_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

For more information on Apache SpamAssassin, read our [Spam Filters](https://docs.cpanel.net/cpanel/email/spam-filters/) documentation.

## Spamd configuration options

To configure the options that the `spamd` daemon uses at startup, perform the following steps:

1. Enter the desired value for the option that you wish to change.
2. Click _Save_.

The following table describes the available options:

| Option | Description | Default value | Minimum value |
| --- | --- | --- | --- |
| _Allowed IPs_ | To only allow connections from specific IP addresses to access the `spamd` daemon, enter a comma-separated list of IP addresses in the _Allowed IPs_ text box. If you do not enter a value, the `spamd` daemon allows connections from any IP address.<br>Warning:<br>If you restrict access to the `spamd` daemon, you **must** include the local IPv4 address (`127.0.0.1`) to ensure that the `chkservd` daemon can access the spamd daemon. Also, if you use IPv6 on your server, you **must** also include the local IPv6 address (`::1`). If you do not include these IP addresses in the _Allowed IPs_ list, the `spamd` daemon will fail. | `127.0.0.1,::1` |  |
| _Maximum Connections per Child_ | Defines the maximum number of connections that a `spamd` child process may have. After a `spamd` child process reaches the maximum number of connections, the `spamd` daemon will abandon the child process. | `200` | `1` |
| _Maximum Children_ | Defines the maximum number of child processes that a `spamd` process can spawn at startup. | The `/usr/local/cpanel/scripts/vps_optimizer` script optimizes this value for the amount of memory on your server. | `1` |
| _TCP Timeout_ | Defines the amount of time, in seconds, that the `spamd` daemon waits before it abandons a TCP connection. If you set the value to `0`, the `spamd` daemon will not abandon TCP connections. | `30` | `1` |
| TCP Child Timeout | Defines the amount of time, in seconds that a child process waits before it abandons a TCP connection. If you set the value to `0`, the `spamd` daemon child processes will not abandon TCP connections. | `300` | `1` |

#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Filter Incoming Emails by Country](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/)
- [Filter Incoming Emails by Domain](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/)
- [Spam Filters](https://docs.cpanel.net/cpanel/email/spam-filters/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×