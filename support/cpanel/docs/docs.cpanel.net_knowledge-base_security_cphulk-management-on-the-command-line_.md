---
url: "https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/"
title: "cPHulk Management on the Command Line | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#main-content)

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
3. [Security](https://docs.cpanel.net/knowledge-base/security/)
4. cPHulk Management on the Command Line


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [cphulk](https://docs.cpanel.net/tags/cphulk/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#overview)

* * *

[Manage cPHulk](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#manage-cphulk)

* * *

[Enable cPHulk](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#enable-cphulk)

* * *

[Enable and disable debug mode](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#enable-and-disable-debug-mode)

* * *

[Check cPHulk’s status](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#check-cphulks-status)

* * *

[Restart cPHulk](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#restart-cphulk)

* * *

[Disable cPHulk](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#disable-cphulk)

* * *

[Log files](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#log-files)

* * *

[IP address management](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#ip-address-management)

* * *

[Whitelist an IP address](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#whitelist-an-ip-address)

* * *

[Blacklist an IP address](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#blacklist-an-ip-address)

* * *

[Remove lockouts](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#remove-lockouts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#overview)

* * *

[Manage cPHulk](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#manage-cphulk)

* * *

[Enable cPHulk](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#enable-cphulk)

* * *

[Enable and disable debug mode](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#enable-and-disable-debug-mode)

* * *

[Check cPHulk’s status](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#check-cphulks-status)

* * *

[Restart cPHulk](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#restart-cphulk)

* * *

[Disable cPHulk](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#disable-cphulk)

* * *

[Log files](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#log-files)

* * *

[IP address management](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#ip-address-management)

* * *

[Whitelist an IP address](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#whitelist-an-ip-address)

* * *

[Blacklist an IP address](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#blacklist-an-ip-address)

* * *

[Remove lockouts](https://docs.cpanel.net/knowledge-base/security/cphulk-management-on-the-command-line/#remove-lockouts)

* * *

## cPHulk Management on the Command Line

Last modified: _2024 February 20_

* * *

## Overview

This document describes how to manage cPHulk from the command line. You can also manage cPHulk with WHM’s [_cPHulk Brute Force Protection_](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) interface ( _WHM » Home » Security Center » cPHulk Brute Force Protection_).

Note:

- This feature requires that you use SSH to access your server as the `root` user.
- cPHulk uses an SQLite database.
- You can use cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel) interface ( _cPanel » Home » Advanced » Terminal_) or WHM’s [_Terminal_](https://docs.cpanel.net/whm/server-configuration/terminal-in-whm) interface ( _WHM » Home » Advanced » Terminal_) to access the command line from within the interface.
- cPHulk uses GeoLite2 data created by [MaxMind](https://www.maxmind.com/).

## Manage cPHulk

Use the following methods to manage the cPHulk service (`cphulkd`) on your server.

### Enable cPHulk

To enable cPHulk, you can use the following methods:

- WHM’s [_cPHulk Brute Force Protection_](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) interface ( _WHM » Home » Security Center » cPHulk Brute Force Protection_).

- From the command line, run the WHM API 1 [enable\_cphulk](https://api.docs.cpanel.net/openapi/whm/operation/enable_cphulk/) command:



```perl
whmapi1 enable_cphulk
```


### Enable and disable debug mode

To enable debug mode, perform the following steps:

1. Create the `debug` touch file in the `/var/cpanel/hulkd` directory:




```bash
echo 3 > /var/cpanel/hulkd/debug
```

2. Restart cPHulk:




```bash
/usr/local/cpanel/scripts/restartsrv_cphulkd
```


To disable debug mode, perform the following steps:

1. Remove the `debug` touch file:




```bash
rm /var/cpanel/hulkd/debug
```

2. Restart cPHulk:




```bash
/usr/local/cpanel/scripts/restartsrv_cphulkd
```


### Check cPHulk’s status

To check the status of cPHulk, perform one of the following actions:

- Call WHM API 1’s [`cphulk_status`](https://api.docs.cpanel.net/openapi/whm/operation/cphulk_status/) function.

- Run the following command:




```bash
ps aux | grep -i cphulk
```



The system will return output that resembles the following example:



```bash
root 1501 0.0 0.4 34816 5076 ? S 07:58 0:00 cPhulkd - processor
```



In this example, the output indicates that cPHulk is enabled.


### Restart cPHulk

To restart cPHulk, perform one of the following actions:

- Call WHM API 1’s [`configureservice`](https://api.docs.cpanel.net/openapi/whm/operation/configureservice/) function. This also rebuilds and restarts Dovecot. To do this, run the following commands:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>whmapi1 configureservice service=cphulkd enabled=0 monitored=0<br>whmapi1 configureservice service=cphulkd enabled=1 monitored=1<br>``` |

- Perform a soft restart. Then, rebuild and then restart Dovecot. To do this, run the following scripts:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>/usr/local/cpanel/scripts/restartsrv_cphulkd<br>/usr/local/cpanel/scripts/builddovecotconf<br>/usr/local/cpanel/scripts/restartsrv_dovecot<br>``` |

- Perform a hard restart and force the system to flush the service’s memory. Then, rebuild and restart Dovecot. To do this, run the following commands:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>/usr/local/cpanel/scripts/restartsrv_cphulkd --stop; /scripts/restartsrv_cphulkd --start<br>/usr/local/cpanel/scripts/builddovecotconf<br>/usr/local/cpanel/scripts/restartsrv_dovecot<br>``` |


### Disable cPHulk

To disable cPHulk, perform one of the following actions:

- Call WHM API 1’s [`disable_cphulk`](https://api.docs.cpanel.net/openapi/whm/operation/disable_cphulk/) function.

- Call WHM API 1’s [`configureservice`](https://api.docs.cpanel.net/openapi/whm/operation/configureservice/) function. For example:




```bash
whmapi1 configureservice service=cphulkd enabled=0 monitored=0
```

- Run the following commands:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>/usr/local/cpanel/etc/init/stopcphulkd<br>/usr/local/cpanel/bin/cphulk_pam_ctl --disable<br>``` |


#### Keep cPHulk offline

To disable cPHulk so that it remains offline, even after a restart of cPanel & WHM, perform the following steps:

1. Remove the `enabled` touch file:




```bash
rm /var/cpanel/hulkd/enabled
```

2. Edit the `/etc/dovecot/dovecot.conf` file to remove the following line:




```bash
auth_policy_server_url = http://127.0.0.1:579/dovecot-auth-policy
```

3. Rebuild Dovecot’s configuration file. To do this, run the following script:




```bash
/usr/local/cpanel/scripts/builddovecotconf
```

4. Restart Dovecot. To do this, run the following script:




```bash
/usr/local/cpanel/scripts/restartsrv_dovecot
```


## Log files

cPHulk stores its logs in the following files:

- `/usr/local/cpanel/logs/cphulkd.log`

- `/usr/local/cpanel/logs/cphulkd_errors.log`


## IP address management

You can use the following commands to add an IP address to cPHulk’s whitelist and blacklist:

Note:

- If an IP address exists on **both** lists, the system will override the blacklist entry.

- An IP address block in the `iptables` application will override an IP address on the whitelist. To unblock an IP address, call WHM API 1’s [`flush_cphulk_login_history_for_ips`](https://api.docs.cpanel.net/openapi/whm/operation/flush_cphulk_login_history_for_ips/) function.


### Whitelist an IP address

To add an IP address to the whitelist, run the following script. In this example, `192.0.2.0` represents an IP address or IP address range:

```bash
/usr/local/cpanel/scripts/cphulkdwhitelist 192.0.2.0
```

### Blacklist an IP address

To add an IP address to the blacklist, run the following script. In this example, `192.0.2.0` represents an IP address or IP address range:

```bash
/usr/local/cpanel/scripts/cphulkdblacklist 192.0.2.0
```

## Remove lockouts

If cPHulk locks you out of your cPanel account, perform the following steps:

1. Log in to WHM.

2. Append the following string to the WHM URL:




```bash
/scripts2/doautofixer?autofix=disable_cphulkd
```



The resulting URL may resemble the following example. In this example, `www.example.com` is your server’s hostname:



```bash
https://www.example.com:2087/scripts2/doautofixer?autofix=disable_cphulkd
```


If you enabled the following settings in WHM’s [_cPHulk Brute Force Protection_](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) interface ( _WHM » Home » Security Center » cPHulk Brute Force Protection_), you must remove the `iptables` rule that the system created:

- _Block IP addresses at the firewall level if they trigger brute force protection_
- _Block IP addresses at the firewall level if they trigger a one-day block_

To do this, run the following command:

```bash
iptables -F cphulk && /usr/local/cpanel/3rdparty/bin/sqlite3 /var/cpanel/hulkd/cphulk.sqlite "DELETE FROM login_track;"
```

Note:

These commands remove **all** of cPHulk’s lockouts. To remove the lockout for a specific IP address, call WHM API 1’s [`flush_cphulk_login_history_for_ips`](https://docs.cpanel.net/api.docs.cpanel.net/openapi/whm/operation/flush_cphulk_login_history_for_ips/) function.

#### Additional Documentation

* * *

- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [Manage root's SSH Keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×