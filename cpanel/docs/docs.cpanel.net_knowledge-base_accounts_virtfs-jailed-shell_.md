---
url: "https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/"
title: "VirtFS Jailed Shell | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#main-content)

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
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. VirtFS Jailed Shell


[ssh](https://docs.cpanel.net/tags/ssh/) [accounts](https://docs.cpanel.net/tags/accounts/) [jailedshell](https://docs.cpanel.net/tags/jailedshell/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#overview)

* * *

[The virtfs directory](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#the-virtfs-directory)

* * *

[Enable a jailed shell environment](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#enable-a-jailed-shell-environment)

* * *

[Exim and VirtFS](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#exim-and-virtfs)

* * *

[CSF or LFD alerts](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#csf-or-lfd-alerts)

* * *

[Disable or remove a jailed shell environment](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#disable-or-remove-a-jailed-shell-environment)

* * *

[Disable the jailed shell environment](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#disable-the-jailed-shell-environment)

* * *

[Remove a user’s jailed shell environment](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#remove-a-users-jailed-shell-environment)

* * *

[The clear orphaned VirtFS mounts script](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#the-clear-orphaned-virtfs-mounts-script)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#overview)

* * *

[The virtfs directory](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#the-virtfs-directory)

* * *

[Enable a jailed shell environment](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#enable-a-jailed-shell-environment)

* * *

[Exim and VirtFS](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#exim-and-virtfs)

* * *

[CSF or LFD alerts](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#csf-or-lfd-alerts)

* * *

[Disable or remove a jailed shell environment](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#disable-or-remove-a-jailed-shell-environment)

* * *

[Disable the jailed shell environment](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#disable-the-jailed-shell-environment)

* * *

[Remove a user’s jailed shell environment](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#remove-a-users-jailed-shell-environment)

* * *

[The clear orphaned VirtFS mounts script](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#the-clear-orphaned-virtfs-mounts-script)

* * *

## VirtFS Jailed Shell

Last modified: _2025 February 13_

* * *

## Overview

cPanel & WHM uses VirtFS to provide a jailed shell environment for users who connect to a server via SSH. The jailed shell acts as a container for the user, and does not allow the user to access other users’ home directories on the server.

- Unlike a normal shell environment, a jailed shell environment increases security for a server’s other users.

- Users in a jailed shell environment can run otherwise-unavailable commands (for example, `crontab` and `passwd`).


Important:

- Your servers may experience performance and connection issues if you attempt to mount more than 4000 targets in a Virtuozzo environment. Your servers may also experience these kinds of issues if you enable the _EXPERIMENTAL: Jail Apache Virtual Hosts using mod\_ruid2 and cPanel® jailshell_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_) on servers with more than 500 accounts.

- If you enable a jailed shell on a server that runs CloudLinux™, you may cause a security vulnerability with symlinks to files outside of the caged directory. To solve this issue, you **must** enable link traversal protection. For more information, read CloudLinux’s [Link traversal protection](https://docs.cloudlinux.com/cloudlinux_os_kernel/#link-traversal-protection) documentation.


## The virtfs directory

Warning:

Do **not** use the `rm` command to remove any mounted file or directory within the `/home/virtfs/` directory. If you run this on any mounted file or directory within the `/home/virtfs/` directory, you will also delete all of the files in the directory to which it is mounted. This action **will** render your server **nonfunctional**.

When a user logs in to a jailed shell environment via SSH or SFTP for the first time, the system creates the `/home/virtfs/` directory. This directory contains configuration files, utilities, and BIND mounts.

- You **cannot** prevent the creation of this directory or disable it.

- This directory does **not** use any disk space. However, because it is a virtual mount point, some commands (for example, `du`) report that the directory uses disk space.

- BIND mounts create a virtual link between two locations on the file system. For example, if a user views the contents of the `/home/virtfs/username/usr/bin/` directory, the user actually sees the contents of the `/usr/bin/` directory. For more information about BIND mounts, run the `man 8 mount` command.


Note:

- Servers that run the CentOS 7, [CloudLinux™ 7 or higher](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux), [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/), [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/), Red Hat® Enterprise Linux® (RHEL) 7, or [Ubuntu®](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/) operating systems may use additional mount points for common system paths (for example, `/usr/bin`). Do **not** unmount these mount points.

- On servers that run the CentOS 7, CloudLinux 7 or higher, AlmaLinux, Rocky Linux, RHEL 7, or Ubuntu operating systems, the `/etc/mtab` symlink points to the `/proc/self/mounts` file.


## Enable a jailed shell environment

WHM includes two options to activate a jailed shell environment. The option that you use depends on the type of users for whom you wish to enable jailed shells.

To enable a jailed shell environment for all new and modified users, use the _Use cPanel® jailshell by default_ option in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Tweak Settings_).

- This option allows you to force the use of a jailed shell for new accounts and accounts that you subsequently edit in the following interfaces:
  - WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account/) interface ( _WHM_ » _Home_ » _Account Functions_ » _Modify An Account_).

  - WHM’s [_Upgrade/Downgrade an Account_](https://docs.cpanel.net/whm/account-functions/upgrade-downgrade-an-account/) interface ( _WHM_ » _Home_ » _Account Functions_ » _Upgrade/Downgrade An Account_).
- This option does **not** affect accounts that already exist on the server but that you have not edited in these interfaces.


To enable a jailed shell environment for a specific user, use WHM’s [_Manage Shell Access_](https://docs.cpanel.net/whm/account-functions/manage-shell-access/) interface ( _WHM_ » _Home_ » _Account Functions_ » _Manage Shell Access_).

Note:

When you enable jailed shell access for a user, the system sets the user’s shell to the `/usr/local/cpanel/bin/jailshell` location.

### Exim and VirtFS

When a user’s shell location is `/usr/local/cpanel/bin/jailshell` (jailed shell is enabled) or `/usr/local/cpanel/bin/noshell` (all shells are disabled), Exim runs any process from alias or filter files inside VirtFS. This action provides extra security because Exim commands run in a jailed shell and do not affect other users.

### CSF or LFD alerts

If you use a utility that monitors system changes (for example, CSF or LFD), you may see an alert that resembles the following example after you upgrade:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```text<br>The following list of files have FAILED the md5sum comparison test. This means that the file has been changed in some way.<br>This could be a result of an OS update or application upgrade. If the change is unexpected it should be investigated:<br>/bin/crontab: FAILED<br>/bin/passwd: FAILED<br>``` |

This is a false positive warning. cPanel & WHM uses the `/bin/crontab` and `/bin/passwd` symlinks to link to files in the `/usr/bin` directory. These symlinks allow jailed shell environments to access the `crontab` and `passwd` commands.

## Disable or remove a jailed shell environment

Warning:

You **cannot** completely remove the jailed shell system (VirtFS). The directions below remove a jailed shell environment, but **cannot** prevent the recreation of the jailed shell environment. The following processes may recreate the jailed shell environment:

- Exim processing filters.

- Piped email addresses.

- Cron jobs.

- Jailed Apache virtual hosts that use the `mod_ruid2` module via the _EXPERIMENTAL: Jail Apache Virtual Hosts using mod\_ruid2 and cPanel® jailshell_ option in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).


### Disable the jailed shell environment

Warning:

You **cannot** disable the `/home/virtfs/` directory for your users, even if you disable jailed shell access. For more information about the `/home/virtfs/` directory, read the [The `/home/virtfs/` directory](https://docs.cpanel.net/knowledge-base/accounts/virtfs-jailed-shell/#the-virtfs-directory) section above.


To disable the jailed shell environment for a specific user, use WHM’s [_Manage Shell Access_](https://docs.cpanel.net/whm/account-functions/manage-shell-access/) interface ( _Home_ » _Account Functions_ » _Manage Shell Access_).

To disable the jailed shell environment for all of the users on your server, perform the following steps:

1. Disable the _Use cPanel® jailshell by default_ option in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Tweak Settings_).

2. Select _Disabled Shell_ for all of the server’s accounts in WHM’s [_Manage Shell Access_](https://docs.cpanel.net/whm/account-functions/manage-shell-access/) interface ( _WHM_ » _Home_ » _Account Functions_ » _Manage Shell Access_).


Note:

When you disable jailed shell access, the system sets the users’ shells to the `/usr/local/cpanel/bin/noshell` location. With this location, the user retains access to SFTP in a non-jailed environment.

### Remove a user’s jailed shell environment

To remove a jailed shell environment, perform the following steps:

1. Disable the jailed shell environment for the user in WHM’s [_Manage Shell Access_](https://docs.cpanel.net/whm/account-functions/manage-shell-access/) interface ( _WHM_ » _Home_ » _Account Functions_ » _Manage Shell Access_).

2. To unmount the VirtFS BIND mounts, run the following command, where `username` is the desired account username:




```text
umount /home/virtfs/username/usr/bin
```


### The clear orphaned VirtFS mounts script

You can run the `/usr/local/cpanel/scripts/clear_orphaned_virtfs_mounts` script to unmount the BIND mounts for users who no longer exist or who no longer use a jailed shell environment. This script removes the `/home/virtfs/username/` directory and its contents.

To force the removal of a single user’s VirtFS mount points, run the following command, where `username` is an account’s username:

```text
/usr/local/cpanel/scripts/clear_orphaned_virtfs_mounts --user=username
```

To force the removal of **all** VirtFS mount points, run the following command:

```text
/usr/local/cpanel/scripts/clear_orphaned_virtfs_mounts --clearall
```

To check your system for VirtFS mount points, run the following command, where `username` is the desired account username:

```text
grep -i username /proc/mounts
```

#### Additional Documentation

* * *

- [How to Create a Demo cPanel Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-demo-cpanel-account/)
- [How to Create a WHM Reseller Without an Associated Domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [Manage Shell Access](https://docs.cpanel.net/whm/account-functions/manage-shell-access/)
- [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×