---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/"
title: "Full Disaster Recovery | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#main-content)

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
4. Full Disaster Recovery


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [backups](https://docs.cpanel.net/tags/backups/) [restore](https://docs.cpanel.net/tags/restore/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#overview)

* * *

[Prepare to restore your server](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#prepare-to-restore-your-server)

* * *

[Rebuild the server](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#rebuild-the-server)

* * *

[Manually provision the new hard drive](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#manually-provision-the-new-hard-drive)

* * *

[Request a new hard drive and image](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#request-a-new-hard-drive-and-image)

* * *

[Recover your files](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#recover-your-files)

* * *

[Restore your files](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#restore-your-files)

* * *

[Test the server](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#test-the-server)

* * *

[Reconnect to a tmux session](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#reconnect-to-a-tmux-session)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#overview)

* * *

[Prepare to restore your server](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#prepare-to-restore-your-server)

* * *

[Rebuild the server](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#rebuild-the-server)

* * *

[Manually provision the new hard drive](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#manually-provision-the-new-hard-drive)

* * *

[Request a new hard drive and image](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#request-a-new-hard-drive-and-image)

* * *

[Recover your files](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#recover-your-files)

* * *

[Restore your files](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#restore-your-files)

* * *

[Test the server](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#test-the-server)

* * *

[Reconnect to a tmux session](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#reconnect-to-a-tmux-session)

* * *

## Full Disaster Recovery

_Valid for versions 112 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/102/)

#### [112](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)

Last modified: _2024 September 26_

* * *

## Overview

Warning:

- **Only** experienced system administrators should use the procedures in this document.
- WebPros International, LLC **cannot** support failed hard drives or hard drive recovery. We are **not** responsible for any data loss.

In some circumstances, you may need to completely restore your server from a crashed or failed hard drive.

## Prepare to restore your server

If you have recent remote backups and can’t boot the failed hard drive, you can proceed to [rebuilding your server](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#rebuild-the-server).

Warning:

If you don’t have recent remote backups, we strongly recommend that you rework your backup strategy to store regularly-scheduled backups in a remote location.

If you **don’t** have recent remote backups but **can** boot the failed hard drive, perform one of the following actions:

- If you **can** access WHM from the failed hard drive, create a backup with WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_).
- If you **can’t** access WHM from the failed hard drive, run the [`/usr/local/cpanel/scripts/pkgacct`](https://docs.cpanel.net/whm/scripts/the-pkgacct-script) script.

After you complete the backup procedure, transfer the backup files to a remote location.

## Rebuild the server

Some data centers and hosting providers offer system restoration and imaging. Contact your hosting provider for more information.

Important:

- The replacement cPanel & WHM server should contain identical software to the original server. This includes MySQL® or MariaDB®, PHP, PHP extensions, Apache®, Apache extensions, and other software options. If you do not use the same version of MySQL or MariaDB on the new server, you may encounter serious errors.
- If you wish to update any of the software on the server, we **strongly** recommend that you perform the transfer or restoration first and then perform any updates.

### Manually provision the new hard drive

Important:

If you use an ISO, get it from the operating system’s official mirrors. Third-party drive images may cause unexpected problems.

To manually provision the new hard drive, perform the following steps:

1. Install a new hard drive as the primary hard drive and make the old hard drive the secondary hard drive.
2. Install the operating system. For more information, read our [Installation Guide](https://docs.cpanel.net/installation-guide/) documentation.
3. Install cPanel & WHM with the following commands:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>cd /home<br>curl -o latest -L https://securedownloads.cpanel.net/latest<br>sh latest<br>``` |


### Request a new hard drive and image

Make sure to request that the data center installs your old hard drive as a secondary drive. After they finish this, perform one of the following actions to update cPanel & WHM to the latest version:

- Run the [`/usr/local/cpanel/scripts/upcp`](https://docs.cpanel.net/whm/scripts/the-upcp-script) script.
- Use WHM’s [_Upgrade to Latest Version_](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version) interface ( _WHM » Home » cPanel » Upgrade to Latest Version_).

## Recover your files

If you don’t have a recent remote backup and can’t boot the failed hard drive on your server, you can proceed to [restoring your files](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#restore-your-files).

In all other scenarios, perform the following steps as the `root` user to recover your files:

01. Mount the secondary drive in a `chroot` environment. To do this, run the following commands, where `sdb1` represents the device name of your secondary drive:





    |     |     |
    | --- | --- |
    | ```<br>1<br>2<br>``` | ```bash<br>mkdir /mnt/chroot/<br>mount /dev/sdb1 /mnt/chroot/<br>``` |







    Important:





    You **must** mount the drive and partitions before you can bind mount the filesystems.

02. Mount the `proc`, `dev`, and `sys` filesystems in a `chroot` environment. To do this, run the following commands:





    |     |     |
    | --- | --- |
    | ```<br>1<br>2<br>3<br>``` | ```bash<br>mount --bind /proc /mnt/chroot/proc<br>mount --rbind /dev /mnt/chroot/dev<br>mount --bind /sys /mnt/chroot/sys<br>``` |







    Note:





    We use the `rbind` command instead of the `bind` command for the `dev` directory in order to ensure that we mount the `/dev/pts` partition properly.

03. Run the `grep chroot /etc/mtab` command to verify that the system properly mounted each filesystem. Your results should resemble the following output:





    |     |     |
    | --- | --- |
    | ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>/dev/sdb1 /mnt/chroot none rw,bind 0 0<br>/mnt/chroot/proc /proc none rw,bind 0 0<br>/mnt/chroot/dev /dev none rw,bind 0 0<br>/mnt/chroot/sys /sys none rw,bind 0 0<br>``` |

04. Run the [`tmux` command](https://man7.org/linux/man-pages/man1/tmux.1.html) to start a `tmux` session. This lets you use the `chroot` environment in a session that you can [reconnect to if you lose your connection](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/#reconnect-to-a-tmux-session). Disconnections from sessions with `chroot` environments can cause problems for services such as MySQL, which may experience InnoDB issues.
05. Run the following commands to let the system perform as if you booted into the crashed drive:





    |     |     |
    | --- | --- |
    | ```<br>1<br>2<br>``` | ```bash<br>chroot /mnt/chroot /bin/bash -l<br>export PS1="{chrooted}$PS1"<br>``` |





    Your results should resemble the following output:



    ```bash
    {chrooted}bash-4.1#
    ```

06. Run the `source /etc/environment && source /etc/profile` command to recover the cPanel & WHM environment.
07. To start required services from the old hard drive, run the necessary commands to start any services that the [`/usr/local/cpanel/scripts/pkgacct`](https://docs.cpanel.net/whm/scripts/the-pkgacct-script) script will require. For example, you will need the MySQL service for Webmail databases, or the PostgreSQL® service if you use that database service. To start MySQL, run the following command:



    ```bash
    /usr/sbin/mysqld --daemonize --user=mysql --pid-file=/var/run/mysqld/mysqld.pid ${MYSQLD_OPTS}
    ```

08. To start `dnsadmin`, run the following command:



    ```bash
    /usr/local/cpanel/libexec/dnsadmin-startup --start
    ```

09. To back up accounts from the old hard drive, run the following commands. These commands store the backups in the `/mnt/chroot/home` directory and also stores the feature lists and packages settings:





    |     |     |
    | --- | --- |
    | ```<br>1<br>2<br>``` | ```bash<br>cd /var/cpanel/users<br>for i in `ls -1 *`; do /scripts/pkgacct --skipdnszones $i; done<br>``` |







    Warning:





    We **strongly** recommend that you do **not** use the `rsync` command to back up accounts. This may cause issues with services such as MySQL.

10. To back up service configurations from the old hard drive, run the following commands:





    |     |     |
    | --- | --- |
    | ```<br>1<br>2<br>``` | ```bash<br>cd /usr/local/cpanel<br>bin/cpconftool --modules=cpanel::smtp::exim,cpanel::system::backups,cpanel::system::mysql,cpanel::system::whmconf,cpanel::easy::apache,cpanel::ui::themes --backup<br>``` |





    The results will resemble the following output:





    |     |     |
    | --- | --- |
    | ```<br>1<br>2<br>``` | ```bash<br>Backup Successful<br>/home/whm-config-backup-configuration__to__backup-10.550000-1452006507.tar.gz<br>``` |

11. Transfer backup files to remote storage. Use the `scp` command or the `rsync` command to copy the files to a remote storage location.






    Important:





    You can directly transfer the files from the old hard drive to the new hard drive. However, we **strongly** recommend that you transfer them to a remote location first. This protects your backup files from hardware issues that may have caused the hard drive to fail.

12. Run the following commands to stop all services in the `chroot` environment, unmount the filesystems, and exit the `chroot` environment:





    |     |     |
    | --- | --- |
    | ```<br>1<br>2<br>3<br>``` | ```bash<br>service mysql stop<br>umount {/proc,/dev,/sys}<br>exit<br>``` |

13. To close the `tmux` session, run the `detach` command. To end the `tmux` session, run the `kill-session` command.

## Restore your files

To restore the content from the backup files to your new hard drive in the server, perform the following steps as the `root` user:

1. Run the `scp` command or the `rsync` command to copy the files from the remote location to the new hard drive.
2. To restore feature lists to the server, run the following commands:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>cd /backups<br>tar -xzvf _var_cpanel.tar.gz var/cpanel/features tar -xzvf _var_cpanel.tar.gz var/cpanel/features<br>``` |

3. To restore accounts to the server, run the following commands, where `BACKUPDIRECTORY/TYPE/DATE/` represents your backup directory:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>cd BACKUPDIRECTORY/TYPE/DATE/accounts/<br>for archive in `ls`; do /scripts/restorepkg $archive; done<br>``` |







More:





For more information, read our [The `restorepkg` Script](https://docs.cpanel.net/whm/scripts/the-restorepkg-script) documentation.

4. Run the [`/usr/local/cpanel/bin/cpconftool`](https://docs.cpanel.net/whm/scripts/the-cpconftool-script) script to restore the configuration settings for Apache, backups, cPanel themes, Exim, MySQL, and WHM to the server.
5. If you run CloudLinux™, restore CloudLinux settings to the server.

## Test the server

Test the websites, applications, and services on the new server. Make certain that you have successfully restored the server’s data and configuration.

## Reconnect to a tmux session

To reconnect to a `tmux` session, perform the following steps as the `root` user:

1. Run the `tmux ls` command to list your active sessions. Your results should resemble the following output:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>example: 1 windows (created Thu Sep 26 11:37:29 2024) (attached)<br>example2: 1 windows (created Thu Sep 26 11:38:08 2024) (attached)<br>``` |

2. Run the `tmux a -t example` command to reconnect to the session, where `example` is the session’s name.

#### Additional Documentation

* * *

- [Backup for cPanel](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/)
- [Backup Restoration](https://docs.cpanel.net/whm/backup/backup-restoration/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Backup Wizard](https://docs.cpanel.net/cpanel/files/backup-wizard/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×