---
url: "https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-convert-from-centos-8-to-almalinux-os/"
title: "How to Convert from CentOS 8 to AlmaLinux OS | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-convert-from-centos-8-to-almalinux-os/#main-content)

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
4. How to Convert from CentOS 8 to AlmaLinux OS


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [installation](https://docs.cpanel.net/tags/installation/) [operatingsystems](https://docs.cpanel.net/tags/operatingsystems/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-convert-from-centos-8-to-almalinux-os/#overview)

* * *

[Convert your server to AlmaLinux OS](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-convert-from-centos-8-to-almalinux-os/#convert-your-server-to-almalinux-os)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-convert-from-centos-8-to-almalinux-os/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-convert-from-centos-8-to-almalinux-os/#overview)

* * *

[Convert your server to AlmaLinux OS](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-convert-from-centos-8-to-almalinux-os/#convert-your-server-to-almalinux-os)

* * *

## How to Convert from CentOS 8 to AlmaLinux OS

Last modified: _2025 February 13_

* * *

## Overview

This document explains how to convert a CentOS 8 server to an [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/) server. AlmaLinux OS is the CloudLinux™ fork of Red Hat® Enterprise Linux®.

Important:

CentOS 8 reached End-of-Life (EOL) on December 31, 2021. For more information about our EOL policies, read our [Third Party Software End of Life Policy](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy) and [cPanel Migration Services and Guides](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides) documentation.

## Convert your server to AlmaLinux OS

To convert your CentOS 8 server to use the AlmaLinux operating system, perform the following steps as the `root` user:

1. Ensure that the server has the latest packages available:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```perl<br>dnf clean all<br>dnf -y update<br>``` |

2. Reboot the server to make sure it boots the latest kernel:



```perl
reboot
```

3. Download the `almalinux-deploy` script to your server:



```perl
curl -O https://raw.githubusercontent.com/AlmaLinux/almalinux-deploy/master/almalinux-deploy.sh
```

4. Run the following command to convert your server to the AlmaLinux OS operating system:



```perl
bash almalinux-deploy.sh
```



When the process is complete, check the output for any errors. The output may resemble the following example:


```perl
Complete!
Run dnf distro-sync -y OK
Restoring of alternatives is done OK
Generating grub configuration file …
done
All Secure Boot related packages which were released by not AlmaLinux are reinstalled OK
Migration to AlmaLinux is completed
```

5. Run the following command to verify that the installation is complete:



```perl
cat /etc/redhat-release
```



Your results should resemble the following example:


```perl
AlmaLinux release 8.4 (Electric Cheetah)
```

6. Run the following command to verify that the system boots the AlmaLinux OS kernel by default:



```perl
sudo grubby –info DEFAULT | grep AlmaLinux
```



Your results should resemble the following example:


```perl
title="AlmaLinux (4.18.0-305.el8.x86_64) 8.4"
```


For more information about the conversion script, read the information in the [AlmaLinux GitHub](https://github.com/AlmaLinux/almalinux-deploy/) repository.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Configure cPanel Cron Jobs](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)
- [How to Manage Your Hard Drive Space](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×