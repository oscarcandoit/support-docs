---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/"
title: "How to Fix Quotas | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#main-content)

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
4. How to Fix Quotas


[quotas](https://docs.cpanel.net/tags/quotas/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#overview)

* * *

[Verify whether your device uses quotas](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#verify-whether-your-device-uses-quotas)

* * *

[Run the mount command](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#run-the-mount-command)

* * *

[Examine the file system table contents](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#examine-the-file-system-table-contents)

* * *

[List the file systems in the /etc/mtab file with quota options enabled](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#list-the-file-systems-in-the-etcmtab-file-with-quota-options-enabled)

* * *

[Enable quotas on your devices](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#enable-quotas-on-your-devices)

* * *

[Verify that you enabled quota files](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#verify-that-you-enabled-quota-files)

* * *

[A note about Virtuozzo®](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#a-note-about-virtuozzo)

* * *

[How to fix quotas on Ubuntu](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#how-to-fix-quotas-on-ubuntu)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#overview)

* * *

[Verify whether your device uses quotas](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#verify-whether-your-device-uses-quotas)

* * *

[Run the mount command](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#run-the-mount-command)

* * *

[Examine the file system table contents](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#examine-the-file-system-table-contents)

* * *

[List the file systems in the /etc/mtab file with quota options enabled](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#list-the-file-systems-in-the-etcmtab-file-with-quota-options-enabled)

* * *

[Enable quotas on your devices](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#enable-quotas-on-your-devices)

* * *

[Verify that you enabled quota files](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#verify-that-you-enabled-quota-files)

* * *

[A note about Virtuozzo®](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#a-note-about-virtuozzo)

* * *

[How to fix quotas on Ubuntu](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#how-to-fix-quotas-on-ubuntu)

* * *

## How to Fix Quotas

Last modified: _2023 May 2_

* * *

## Overview

Warning:

- Quotas on some [Ubuntu®](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/) servers may not work unless you take [additional actions](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-fix-quotas/#how-to-fix-quotas-on-ubuntu).

- [CloudLinux™ 7](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/) updates may break quotas. For this reason, after each CloudLinux 7 update, you **must** run the `/usr/local/cpanel/scripts/fixquotas` script and then remount the file system.

- If you disable and then reenable quotas, servers that use the XFS® filesystem and run the CentOS 7, CloudLinux, [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/), or Red Hat® Enterprise Linux® (RHEL) 7 operating systems require one of the following additional actions for quotas to function properly:
  - Use WHM’s [_Initial Quota Setup_](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup) interface ( _WHM » Home » Server Configuration » Initial Quota Setup_) to configure quotas.

  - Use the command line interface to run the `/usr/local/cpanel/scripts/fixquotas` script and then remount the file system.

  - Perform the `/usr/local/cpanel/scripts/fixquotas` script’s actions manually. For more information, read the Red Hat [XFS](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/storage_administration_guide/ch-xfs) and [XFS Quota Management](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/storage_administration_guide/xfsquota) documentation.

This document describes how to confirm whether you properly configured the disk space quotas on your system’s devices. We enable quotas by default on new installations, but you **must** enable quotas for any device on which cPanel accounts exist.

## Verify whether your device uses quotas

To verify whether your devices use quotas, connect to your system via SSH as the `root` user and perform the following actions in your command line interface:

### Run the mount command

Run the `mount` command without any arguments to obtain basic information about **all** your currently-mounted [file systems](https://en.wikipedia.org/wiki/File_system).

Entries that contain the `usrquota` variable are quota-enabled.

For example, the following output from the `mount` command confirms that the `/dev/mapper/VolGroup00-LogVol00` device uses quotas because it contains a `usrquota` variable:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```go<br>/dev/mapper/VolGroup00-LogVol00 on / type ext3 (rw,usrquota)<br>proc on /proc type proc (rw)<br>sysfs on /sys type sysfs (rw)<br>devpts on /dev/pts type devpts (rw,gid=5,mode=620)<br>/dev/sda1 on /boot type ext3 (rw)<br>tmpfs on /dev/shm type tmpfs (rw)<br>none on /proc/sys/fs/binfmt_misc type binfmt_misc (rw)<br>/usr/tmpDSK on /tmp type ext3 (rw,noexec,nosuid,loop=/dev/loop0)<br>/tmp on /var/tmp type none (rw,noexec,nosuid,bind)<br>sunrpc on /var/lib/nfs/rpc_pipefs type rpc_pipefs (rw)<br>``` |

Note:

For more information about the `mount` command, visit the [`mount` command](https://linux.die.net/man/8/mount) documentation.

### Examine the file system table contents

Important:

The `/etc/fstab` file is **read-only**. You **cannot** configure quotas by editing this file, only see whether quotas are enabled using the `usrquota` variable.

The file system table (`/etc/fstab`) file maps devices to their respective mount points within a system, displaying configuration options in six columns. These options determine the purpose of each file system and how it should mount:

| Column | Description | Example |
| --- | --- | --- |
| _Device_ | The physical device that contains the data. | `/dev/sda5` |
| _Mountpoint_ | The filepath to the device’s data storage location. | `/backup` |
| _FStype_ | The type of file system. | `ext3` |
| _Options_ | The mount options for the file system. These options include the `usrquota` variable if quotas are enabled, as well as whether the system or users can execute programs on the device. | `defaults,noexec` |
| _Dump_ | The `dump` option. This option has **no** impact on whether quotas are enabled. The `dump` backup utility uses this option. | `0` |
| _Pass_ | The `fsck` option. This option has **no** impact on whether quotas are enabled. The `fsck` file checking utility uses this option. | `0` |

To display the contents of the `/etc/fstab` file, run the `cat /etc/fstab` command. The `/etc/fstab` file will resemble the following example, where entries that contain the `usrquota` variable are quota-enabled:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```go<br>/dev/sda5               /backup                 ext3    defaults,noexec 0 0<br>LABEL=/boot             /boot                   ext3    defaults,usrquota  1 2<br>tmpfs                   /dev/shm                tmpfs   defaults        0 0<br>devpts                  /dev/pts                devpts  gid=5,mode=620  0 0<br>sysfs                   /sys                    sysfs   defaults        0 0<br>proc                    /proc                   proc    defaults        0 0<br>/dev/sda5               /swap                   swap    defaults        0 0<br>/usr/tmpDSK             /tmp                    ext3    defaults,noauto        0 0<br>``` |

Note:

For more information about the `fstab` file, visit the [`fstab` command](https://linux.die.net/man/5/fstab) documentation, or connect to your system via SSH and run the `man fstab` command.

### List the file systems in the /etc/mtab file with quota options enabled

Run the following command to print all of the file systems that exist in the `/etc/mtab` file with read and write privileges and quota options enabled:

```perl
repquota -a
```

The output will resemble the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>``` | ```go<br>*** Report for user quotas on device /dev/vda1<br>Block grace time: 7days; Inode grace time: 7days<br>                        Block limits                File limits<br>User            used    soft    hard  grace    used  soft  hard  grace<br>----------------------------------------------------------------------<br>root      -- 7824884       0       0         218302     0     0       <br>bin       --   73740       0       0             51     0     0       <br>nobody    --       0       0       0              4     0     0       <br>polkitd   --       0       0       0              2     0     0       <br>rpc       --       0       0       0              2     0     0       <br>rpcuser   --       0       0       0              4     0     0       <br>postfix   --       4       0       0             27     0     0       <br>chrony    --       4       0       0              3     0     0       <br>centos    --   13680       0       0           1773     0     0       <br>tss       --       8       0       0              2     0     0       <br>named     --     120       0       0             20     0     0       <br>mailman   --   38888       0       0           2199     0     0       <br>cpanel    --      28       0       0             17     0     0       <br>``` |

## Enable quotas on your devices

After you verify which devices do not use quotas, connect to those devices via SSH as the `root` user and run the `/usr/local/cpanel/scripts/initquotas` script. This script adds the `usrquota` variable to the `Options` column in the `/etc/fstab` file.

### Verify that you enabled quota files

After you run the `/usr/local/cpanel/scripts/initquotas` script, use the `ls` command with a wildcard character to confirm the following:

- The quota files exist in the root directory (`/`).
- Each file is greater than 0 bytes.

For example, the following `ls -l /*.user` command lists the contacts of the root directory (`/`):

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>root@host [/]# ls -l /*.user<br>-rwxr--r-- 1 root root 13312 Apr 26 16:39 /aquota.user*<br>-rwxr--r-- 1 root root    32 Apr 19 16:26 /quota.user*<br>``` |

The `-l` flag in this example causes `ls` output to display in long-listing format. This format displays the following information:

- The file’s permissions.
- Which user owns the file.
- Which group owns the file.
- The size of the file in bytes.
- The file’s last modification date.

If there are no quota files in the root directory, run the `/usr/local/cpanel/scripts/initquotas` script again to create these files.

If quota files **do** exist, but quotas do not function, delete these quota files and then run the `/usr/local/cpanel/scripts/initquotas` or `/usr/local/cpanel/scripts/fixquotas` scripts.

## A note about Virtuozzo®

If you use Virtuozzo, you **must** perform the following actions:

- Enable second-level (per-user) quotas in addition to first-level (per-container) quotas.

- Enable second-level quotas from the parent node.


For more information, read our [Enable Quotas on a Virtuozzo VPS](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps) documentation.

## How to fix quotas on Ubuntu

Some servers that run the Ubuntu operating system do not have the `quota_v2` kernel module that enables quotas. If your server runs the Ubuntu operating system and quotas do not work, it may not have this module.

#### Check if your server has loaded its quota\_v2 module

Run this command to check if your server has loaded its `quota_v2` module:

```go
lsmod | grep quota_v2
```

If your server has loaded its `quota_v2` module, it will produce an output that resembles the following example:

```go
quota_v2               16384  1
quota_tree             20480  1 quota_v2
```

If your server produces a response that does not contain `quota_v2`, you must install the appropriate `quota_v2` module.

#### Install your server’s quota\_v2 module

To install your server’s appropriate `quota_v2` module, perform the following steps:

1. Check your server’s kernel [metapackage](https://askubuntu.com/questions/66257/what-is-the-difference-between-a-meta-package-and-a-package).

a. Run the following command to find the server’s current boot image:




```go
grep BOOT /proc/cmdline | cut -f1 -d' ' | cut -f2 -d'='
```



Your output may resemble the following example:



```go
/boot/vmlinuz-5.4.0-77-generic
```





b. Run the following command to find the kernel metapackage that corresponds to that boot image:




```go
dpkg -S /boot/vmlinuz-5.4.0-77-generic | cut -f1 -d:
```



Your output may resemble the following example:



```go
linux-image-5.4.0-77-generic
```





c. Run the following command to trace the package-dependency chain, where `$example` represents the kernel metapackage:




```go
apt-cache --installed rdepends $example
```





Run this command for each kernel metapackage name in the `Reverse Depends` value until you find the metapackage with an empty `Reverse Depends` value.

Your output may resemble the following example:





|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>``` | ```go<br>root@ubuntu:~# apt-cache --installed rdepends linux-image-5.4.0-77-generic<br>linux-image-5.4.0-77-generic<br>Reverse Depends:<br>  linux-image-virtual<br>root@ubuntu:~# apt-cache --installed rdepends linux-image-virtual<br>linux-image-virtual<br>Reverse Depends:<br>  linux-virtual<br>  linux-virtual<br>root@ubuntu:~# apt-cache --installed rdepends linux-virtual<br>linux-virtual<br>Reverse Depends:<br>``` |

2. Check which `quota_v2` module you must install for your server’s empty `Reverse Depends` kernel metapackage:



| Kernel metapackage | quota\_v2 package |
| --- | --- |
| `linux-aws` | `linux-modules-extra-aws` |
| `linux-aws-edge` | `linux-modules-extra-aws-edge` |
| `linux-aws-lts-20.04` | `linux-modules-extra-aws-lts-20.04` |
| `linux-azure` | `linux-modules-extra-azure` |
| `linux-azure-cvm` | `linux-modules-extra-azure-cvm` |
| `linux-azure-edge` | `linux-modules-extra-azure-edge` |
| `linux-azure-fde` | `linux-modules-extra-azure-fde` |
| `linux-azure-lts-20.04` | `linux-modules-extra-azure-lts-20.04` |
| `linux-gcp` | `linux-modules-extra-gcp` |
| `linux-gcp-edge` | `linux-modules-extra-gcp-edge` |
| `linux-gcp-lts-20.04` | `linux-modules-extra-gcp-lts-20.04` |
| `linux-gke` | `linux-modules-extra-gke` |
| `linux-gke-5.4` | `linux-modules-extra-gke-5.4` |
| `linux-gkeop` | `linux-modules-extra-gkeop` |
| `linux-gkeop-5.4` | `linux-modules-extra-gkeop-5.4` |
| `linux-ibm` | `linux-modules-extra-ibm` |
| `linux-ibm-lts-20.04` | `linux-modules-extra-ibm-lts-20.04` |
| `linux-virtual` | `linux-image-extra-virtual` |
| `linux-virtual-hwe-20.04` | `linux-image-extra-virtual-hwe-20.04` |
| `linux-virtual-hwe-20.04-edge` | `linux-image-extra-virtual-hwe-20.04-edge` |

3. Use the following command to install the appropriate `quota_v2` module for your server’s empty `Reverse Depends` kernel metapackage, where `$example` is the name of the appropriate `quote_v2` module:




```go
apt install $example
```





Note:




You may also run the `/usr/local/cpanel/scripts/fixquotas` script to automatically install the appropriate `quota_v2` packages for each kernel metapackage on your server.


4. Reboot your server.


#### Additional Documentation

* * *

- [Bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Disk Usage](https://docs.cpanel.net/cpanel/files/disk-usage/)
- [Email Disk Usage](https://docs.cpanel.net/cpanel/email/email-disk-usage/)
- [Enable Quotas on a Virtuozzo VPS](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×