---
url: "https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/"
title: "How to Troubleshoot Jailshell Problems on a Virtuozzo or OpenVZ VPS | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/#main-content)

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
4. How to Troubleshoot Jailshell Problems on a Virtuozzo or OpenVZ VPS


[virtualization](https://docs.cpanel.net/tags/virtualization/) [jailedshell](https://docs.cpanel.net/tags/jailedshell/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/#overview)

* * *

[User and mount limits](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/#user-and-mount-limits)

* * *

[Full /proc mount for jailed shell users](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/#full-proc-mount-for-jailed-shell-users)

* * *

[Unable to set uids error](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/#unable-to-set-uids-error)

* * *

[MySQL® connection errors](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/#mysql-connection-errors)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/#overview)

* * *

[User and mount limits](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/#user-and-mount-limits)

* * *

[Full /proc mount for jailed shell users](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/#full-proc-mount-for-jailed-shell-users)

* * *

[Unable to set uids error](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/#unable-to-set-uids-error)

* * *

[MySQL® connection errors](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/#mysql-connection-errors)

* * *

## How to Troubleshoot Jailshell Problems on a Virtuozzo or OpenVZ VPS

Last modified: _2024 February 22_

* * *

## Overview

This document explains common problems that occur on systems that use a jailed shell environment on a Virtuozzo or OpenVZ virtual private server (VPS).

## User and mount limits

Some customers have reported performance and connection issues when they attempt to mount more than 4000 targets in a Virtuozzo environment. If you encounter this limit and still require a large number of jailshelled users, you should consider a different virtualization platform.

## Full /proc mount for jailed shell users

Users on a server may have a full, rather than limited, `/proc` mount, even though you select a limited `/proc` option for the Jailed `/proc` mount method in the System section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_). This issue allows jailed shell users to view the complete process list on the server.

To verify whether this problem exists on your server, perform the following steps:

1. SSH in to the server as a jailed shell user.
2. Run the `ps axu` command.

If the command returns the complete process list for the server, the user has a full `/proc` mount.

This problem occurs because the `clone()` system call did not accept the `CLONE_NEWPID` flag. You **must** set the `sys_admin` capability to on for the `clone()` system call to handle this flag correctly.

Warning:

Parallels support does **not** recommend that you set the `sys_admin` capability to on on production servers. This setting may result in stability issues, but namespace management **requires** it. Namespace management in containers can lead to crashed nodes. Therefore, the related functionality is restricted in the kernel to improve stability. WebPros International, LLC is **not responsible** for problems that result from this workaround.


To set the `sys_admin` capability to on, run the following command:

```perl
vzctl set CTID –save –capability sys_admin:on
```

## Unable to set uids error

The system may return the following error when users attempt to access the jailed shell environment:

```perl
Unable to set uids
```

This problem generally occurs due to a conflict with custom `hard nproc` settings in the `/etc/security/limits.conf` file. Custom values for these settings may also cause problems with account creation.

To resolve this issue, revert the `hard nproc` settings to their default values.

## MySQL® connection errors

Sites may return MySQL connection errors when you enable the _Jail Apache Virtual Hosts using mod\_ruid2 and cPanel® jailshell_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

This problem generally occurs due to a restriction of the loop device limit within OpenVZ.

To resolve this issue, perform the following steps to increase the loop device limit:

1. In the `/etc/grub.conf` file, add `max_loop=256` as a kernel parameter.

2. Reboot the server.

3. Run the following command:



```perl
/sbin/MAKEDEV -v /dev/loop
```

4. Repeat these steps for the VPS node and VPS container.


#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Enable Quotas on a Virtuozzo VPS](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/)
- [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)
- [Hotlink Protection](https://docs.cpanel.net/cpanel/security/hotlink-protection/)
- [How to Configure MySQL SSL Connections](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×