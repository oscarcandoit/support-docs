---
url: "https://docs.cpanel.net/knowledge-base/security/additional-security-software/"
title: "Additional Security Software | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#main-content)

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
4. Additional Security Software


[security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#overview)

* * *

[APF Firewall](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#apf-firewall)

* * *

[Atomicorp](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#atomicorp)

* * *

[BitNinja](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#bitninja)

* * *

[chkrootkit](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#chkrootkit)

* * *

[CloudLinux](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#cloudlinux)

* * *

[ConfigServer Security & Firewall (CSF)](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#configserver-security--firewall-csf)

* * *

[ImunifyAV](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#imunifyav)

* * *

[Imunify360](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#imunify360)

* * *

[KernelCare](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#kernelcare)

* * *

[Linux Malware Detect](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#linux-malware-detect)

* * *

[Modify the Logwatch configuration file](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#modify-the-logwatch-configuration-file)

* * *

[Monarx](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#monarx)

* * *

[Patchman](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#patchman)

* * *

[RootKit Hunter](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#rootkit-hunter)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#overview)

* * *

[APF Firewall](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#apf-firewall)

* * *

[Atomicorp](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#atomicorp)

* * *

[BitNinja](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#bitninja)

* * *

[chkrootkit](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#chkrootkit)

* * *

[CloudLinux](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#cloudlinux)

* * *

[ConfigServer Security & Firewall (CSF)](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#configserver-security--firewall-csf)

* * *

[ImunifyAV](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#imunifyav)

* * *

[Imunify360](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#imunify360)

* * *

[KernelCare](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#kernelcare)

* * *

[Linux Malware Detect](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#linux-malware-detect)

* * *

[Modify the Logwatch configuration file](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#modify-the-logwatch-configuration-file)

* * *

[Monarx](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#monarx)

* * *

[Patchman](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#patchman)

* * *

[RootKit Hunter](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#rootkit-hunter)

* * *

## Additional Security Software

Last modified: _2025 September 2_

* * *

## Overview

This document lists third-party software and modifications that you can install to help secure your server.

Warning:

Some of these programs have not received updates in a long time and contain out-of-date malware libraries. We **strongly** recommend that you check the release date of any solution that you use.


Note:

Among the options that this document lists, cPanel Technical Support can **only** provide direct support for CloudLinux™, Imunify360, and KernelCare if you directly license them through WebPros International, LLC. Otherwise, contact the appropriate software developer or your system administrator for help.

## APF Firewall

Advanced Policy Firewall (APF) offers an advanced firewall for Linux systems. For more information about APF Firewall, visit the [APF Firewall website at r-Fx Networks](https://www.rfxn.com/projects/advanced-policy-firewall/).

Warning:

APF does **not** function with the `firewalld` utility. If you install APF, you **must** remove the `firewalld` utility. To do this, run the `yum remove firewalld` command.

## Atomicorp

Atomicop offers a hardened and secure shell for Linux servers. For more information about Atomicorp, visit the [Atomicorp website](https://atomicorp.com/).

## BitNinja

BitNinja offers a security suite that provides protection against multiple forms of attack. For more information about BitNinja, visit the [BitNinja website](https://bitninja.io/).

## chkrootkit

Important:

- WebPros International, LLC does not provide `chkrootkit`.
- You may experience false positives if you use `chkrootkit`. If you need assistance with `chkrootkit`, contact your system administrator.

The `chkrootkit` shell script examines your system’s binaries for rootkit installations. Rootkits allow a malicious user to gain undetected administrative access to the server.

To install the `chkrootkit` script, perform the following steps:

1. Log in to your server as the `root` user via SSH.

2. Run the `cd /root` command to change to the root directory.

3. Run the following command to download `chkrootkit`:




```go
wget ftp://ftp.chkrootkit.org/pub/seg/pac/chkrootkit.tar.gz
```

4. Run the `tar -xvzf chkrootkit.tar.gz` command to decompress the downloaded file.

5. Run the `cd chkrootkit-0.57` command to change directories.

6. To begin the `chkrootkit` installation, run the `make sense` command. The system will install the `chkrootkit` script on your server.


To run the `chkrootkit` script, run the following command:

```go
/root/chkrootkit-0.53/chkrootkit
```

Note:

We **strongly** recommend that you run the `chkrootkit` script often and [add a cron job](https://docs.cpanel.net/cpanel/advanced/cron-jobs/) that runs the above command.

For more information about the `chkrootkit` script, visit the [`chkrootkit` website](http://www.chkrootkit.org/).

## CloudLinux

CloudLinux offers a secure version of Linux that provides advanced functionality for shared hosting environments. CloudLinux integrates with cPanel & WHM, and it provides detailed resource management tools and other improvements to system management and stability.

You can purchase CloudLinux from the [cPanel Store](https://www.cpanel.net/products/add-ons/). For more information about CloudLinux, visit the [CloudLinux website](https://www.cloudlinux.com/).

## ConfigServer Security & Firewall (CSF)

ConfigServer Security & Firewall (CSF) is a free, third-party plugin that allows you to modify your server’s `iptables` rules in WHM. For information about how to install and configure CSF, read our [Additional Security Software](https://docs.cpanel.net/knowledge-base/security/additional-security-software/#configserver-security--firewall-csf) documentation.

Warning:

- As of August 31, 2025, the developers of CSF [no longer maintain or support it](https://configserver.com/). They have released CSF under the [GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html). New and existing CSF installations will continue to function as long as they use the [latest GPLv3 version](https://github.com/waytotheweb/scripts/tree/main/csf).
- CSF does **not** function with the `firewalld` utility. If you install CSF, you **must** remove the `firewalld` utility. To do this, run the `yum remove firewalld` command.

To install CSF, perform the following steps:

1. Log in to your server as the `root` user via SSH.
2. Run the `cd /root` command to change to the root directory.
3. Run the following command to download CSF:



```go
wget https://github.com/waytotheweb/scripts/raw/refs/heads/main/csf.tgz
```

4. Run the `tar -xzf csf.tgz` command to decompress the downloaded file.
5. Run the `cd csf` command to change to the `csf` directory.
6. Run the `./install.cpanel.sh` command to install CSF.

To configure CSF, use WHM’s _ConfigServer Security & Firewall_ interface ( _WHM_ » _Home_ » _Plugins_ » _ConfigServer Security & Firewall_). The installation script should enable the correct ports in CSF, but we recommend that you confirm this on your server.

After you configure CSF, you **must** disable testing mode. To take CSF out of testing mode, perform the following steps:

To use CSF, you **must** disable testing mode. Perform the following steps to take CSF out of testing mode:

1. Click _Firewall Configuration_.
2. Change the value of _Testing_ from `ON` to `OFF`.
3. Click _Change_.
4. Click _Restart csf+lfd_.
5. Click _Return_.

For more information about how to use CSF, read CSF’s [readme file](https://github.com/waytotheweb/scripts/blob/main/csf/readme.txt).

## ImunifyAV

ImunifyAV is free antivirus software that protects your server from malicious code. For more information about ImunifyAV, visit the [ImunifyAV website](https://www.imunify360.com/antivirus).

ImunifyAV+ builds on ImunifyAV’s antivirus protection. ImunifyAV+ not only detects threats but automatically cleans up infected files. It also includes email notifications.

You can purchase ImunifyAV+ from the [cPanel Store](https://www.cpanel.net/products/add-ons/). For more information about ImunifyAV+, read the [cPanel blog](https://blog.cpanel.com/imunifyav-plus-strengthen-your-site-security/).

## Imunify360

Imunify360 offers a security suite that protects servers against a wide range of attacks. It integrates with cPanel & WHM, and it provides reports to the system administrator on the server’s status.

You can purchase Imunify360 from the [cPanel Store](https://www.cpanel.net/products/add-ons/). For more information about Imunify360, visit the [Imunify360 website](https://www.imunify360.com/).

## KernelCare

KernelCare automatically updates your system’s Linux kernel without the need for a reboot. It also provides patches that secure vulnerabilities, such as the [symlink race condition](https://docs.cpanel.net/ea4/apache/symlink-race-condition-protection).

You can purchase KernelCare from the [cPanel Store](https://www.cpanel.net/products/add-ons/). For more information about KernelCare, visit the [KernelCare website](http://kernelcare.com/).

Important:

You can **only** install KernelCare on systems that run CentOS 7 and 8.

## Linux Malware Detect

Linux Malware Detect (LMD) offers a shareware malware protection scanner. For more information about LMD, visit the [LMD website at r-Fx Networks](https://www.rfxn.com/projects/linux-malware-detect/).

## Modify the Logwatch configuration file

The Logwatch customizable log analysis system parses your system’s log files for a given period of time. In addition, it creates a report that analyzes specified data. If your server does not include Logwatch, run the `yum -y install logwatch` command to install it and any dependences that Logwatch requires. The Logwatch configuration file exists in the `/usr/share/logwatch/default.conf/logwatch.conf` location.

We recommend that you use a text editor to change the following parameters:

- `MailTo = user@example.com` — Change the `user@example.com` address to the email address that you wish to receive Logwatch notifications.

- `Detail = 5` or `Detail = 10` — Change this parameter to set the detail in the log files.
  - `5` represents a medium level of detail.
  - `10` represents a high level of detail.

## Monarx

Monarx is a [daemon](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#daemon)-based behavior detection platform that detects, protects, and blocks malicious attacks without needing signatures. It also identifies and patches CVEs. It integrates directly with cPanel & WHM and offers free trials. For more information, visit the [Monarx website](https://monarx.com/).

## Patchman

Patchman detects vulnerabilities in software and sends notices to customers to teach them how to resolve the issue. If the customer does not resolve the vulnerability, Patchman can fix it automatically. Patchman integrates with cPanel & WHM, and it provides reports to the system administrator on the server’s status.

For more information about Patchman, visit the [Patchman website](https://www.patchman.co/).

## RootKit Hunter

The `rkhunter` script scans for rootkits and other exploits.

Important:

- WebPros International, LLC does not provide RootKit Hunter (`rkhunter`).
- The Rootkit Hunter project team no longer regularly updates `rkhunter`.
- You may experience false positives if you use `rkhunter`. If you need assistance with `rkhunter`, contact your system administrator.

To install the `rkhunter` script, perform the following steps:

Note:

In this section, `version` represents the Rootkit Hunter script’s version. You can download the latest version from [Rootkit Hunter project’s website](http://rkhunter.sourceforge.net/).

1. Log in to your server as the `root` user via SSH.

2. Run the `cd /root` command to change to the root directory.

3. Run the following command to download the `rkhunter` script:




```go
wget https://sourceforge.net/projects/rkhunter/files/rkhunter/version/rkhunter-version.tar.gz.asc/download
```

4. Run the `tar -xvzf rkhunter-version.tar.gz` command to decompress the downloaded file.

5. Run the `cd rkhunter-1version` command to change directories.

6. To begin the `rkhunter` script installation, run the `./installer.sh --layout default --install` command. The system will install the rkhunter script on your server.


To run the `rkhunter` script, run the following command:

```go
/root/rkhunter-version/files/rkhunter -c
```

For information about how to configure the `rkhunter` script, read the [rkhunter FAQ](https://sourceforge.net/p/rkhunter/rkh_code/ci/master/tree/files/FAQ).

Note:

We **strongly** recommend that you run the `rkhunter` script often and [add a cron job](https://docs.cpanel.net/cpanel/advanced/cron-jobs/) that runs the above command.

#### Additional Documentation

* * *

- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Wizard](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×