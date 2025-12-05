---
url: "https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/"
title: "Linux Containers | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#main-content)

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
3. [General Server Administration](https://docs.cpanel.net/knowledge-base/general-server-administration/)
4. Linux Containers


[installation](https://docs.cpanel.net/tags/installation/) [dnsonly](https://docs.cpanel.net/tags/dnsonly/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#overview)

* * *

[Run in a Linux Container](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#run-in-a-linux-container)

* * *

[Host](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#host)

* * *

[Guest](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#guest)

* * *

[Privileged vs unprivileged containers](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#privileged-vs-unprivileged-containers)

* * *

[Required changes for CentOS 7 or RHEL 7](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#required-changes-for-centos-7-or-rhel-7)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#overview)

* * *

[Run in a Linux Container](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#run-in-a-linux-container)

* * *

[Host](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#host)

* * *

[Guest](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#guest)

* * *

[Privileged vs unprivileged containers](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#privileged-vs-unprivileged-containers)

* * *

[Required changes for CentOS 7 or RHEL 7](https://docs.cpanel.net/knowledge-base/general-server-administration/linux-containers/#required-changes-for-centos-7-or-rhel-7)

* * *

## Linux Containers

Last modified: _2025 February 13_

* * *

### Overview

Warning:

WebPros International, LLC recommends that **only** experienced system administrators attempt to perform the steps in this document.
WebPros International, LLC is **not** responsible for any data loss that an attempt to perform these steps causes.

WebPros International, LLC supports the use of cPanel & WHM inside of a Linux Container (LXC). An LXC container provides an environment that resembles a standard Linux installation, but does **not** require a separate kernel. For more information about LXC containers, read the [Linux Containers](https://linuxcontainers.org/) documentation.

## Run in a Linux Container

To run cPanel & WHM inside an LXC container, we **strongly** recommend that you use the following settings:

### Host

We **strongly** recommend that you use Red Hat® Enterprise Linux® (RHEL) 7 or CentOS 7 as your server’s LXC host. This configuration ensures the best compatibility with cPanel & WHM. While other Linux distributions may work, they require that the system administrator perform additional steps that we do **not** support.

Warning:

We have **not** tested LXC on [CloudLinux 8 or higher](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/), [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/), or [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/) servers.

### Guest

A CentOS 7 or an RHEL 7 installation require additional steps to use as a guest.

### Privileged vs unprivileged containers

cPanel & WHM functions in both privileged and unprivileged containers. We **strongly** recommend that you run cPanel & WHM in a privileged container, because it expects unrestricted access to the system.

The following limitations are inherent to an unprivileged container:

- The host operating system treats the `root` user as a non-`root` user.

- You **cannot** raise the hard limit of a process if you previously lowered it. This action could cause EasyApache 4 to fail.

- Subtle behavior differences may occur.


### Required changes for CentOS 7 or RHEL 7

You **must** make the following configuration changes to run cPanel & WHM inside an LXC container:

1. After you create the LXC container, change the `lxc.include` line in the `lxc.conf` file to the following line:




```bash
lxc.include = /usr/share/lxc/config/fedora.common.conf
```

2. Edit the `lxc.conf` file to drop `setfcap` and `setpcap` capabilities. To do this, comment out the following lines:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```text<br># lxc.cap.drop = setpcap<br># lxc.cap.drop = setfcap<br>``` |


Note:

Some system configurations will **not** run properly with cron inside an LXC container. Individual cron jobs fail to execute even though the cron daemon is active. This issue is a direct result of the incompatibility between the container environment and the `pam_loginuid` module.

To resolve this conflict, disable the `pam_loginuid` module for cron with the following comment in the `/etc/pam.d/crond` directory:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```text<br>#<br># The PAM configuration file for the cron daemon<br>#<br>#<br># No PAM authentication called, auth modules not needed<br>account     required    pam_access.so<br>account     include     password-auth<br>#session    required    pam_loginuid.so<br>session     include     password-auth<br>auth        include     password-auth<br>``` |

Updates to your cron package may cause the service to reactivate. Inspect this file for changes after each system update.

#### AppArmor

If your system uses [AppArmor](https://ubuntu.com/server/docs/security-apparmor), you **must** also uncomment the following line in the `lxc.conf` file:

**AppArmor version 2.0 and earlier**

```bash
lxc.aa_profile = unconfined
```

**AppArmor version 2.1 and later**

```bash
lxc.apparmor.profile = unconfined
```

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)
- [How to Manage Your Hard Drive Space](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×