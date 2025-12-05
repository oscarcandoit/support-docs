---
url: "https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/"
title: "How to Manage Your Hard Drive Space | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#main-content)

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
4. How to Manage Your Hard Drive Space


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [diskusage](https://docs.cpanel.net/tags/diskusage/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#overview)

* * *

[Examine disk space usage](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#examine-disk-space-usage)

* * *

[Examine disk space usage by file and directory](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#examine-disk-space-usage-by-file-and-directory)

* * *

[Retain log entries](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#retain-log-entries)

* * *

[SMART errors](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#smart-errors)

* * *

[Monitor disk space usage](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#monitor-disk-space-usage)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#overview)

* * *

[Examine disk space usage](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#examine-disk-space-usage)

* * *

[Examine disk space usage by file and directory](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#examine-disk-space-usage-by-file-and-directory)

* * *

[Retain log entries](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#retain-log-entries)

* * *

[SMART errors](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#smart-errors)

* * *

[Monitor disk space usage](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/#monitor-disk-space-usage)

* * *

## How to Manage Your Hard Drive Space

_Valid for versions 94 through the latest version_

#### Version:

#### [94](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/)

Last modified: _2025 February 13_

* * *

## Overview

This document provides steps to help you to manage your server’s hard drive space.

Warning:

We **strongly** recommend that you keep at least 10% of your server’s available disk space free.

## Examine disk space usage

To examine your system’s disk space usage, run the following command:

```bash
df -h
```

The output will resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```go<br>Filesystem            Size  Used Avail Use% Mounted on<br>/dev/mapper/LogVol00  288G  189G   85G  70% /<br>/dev/sda1              99M   47M   48M  50% /boot<br>tmpfs                 252M     0  252M   0% /dev/shm<br>/usr/tmpDSK           485M   11M  449M   3% /tmp<br>``` |

This output indicates that the system’s main storage device (`/dev/mapper/LogVol00`) in the root (`/`) directory uses 70% of its available disk space and contains 85 GB of free space.

## Examine disk space usage by file and directory

If your system currently uses too much disk space, perform the following steps to identify files to delete:

1. To determine which files and directories consume most of your hard drive space, run the `du` command.
The output will resemble the following example:





|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>``` | ```go<br>372K   ~<br>107M   etc<br>113 G home<br>253M   lib<br>20K   LICENSE<br>2.6M   locale<br>16K   lost+found<br>64K   mbox_backup<br>8.0K   media<br>8.0K   mnt<br>418M   opt<br>0   proc<br>12M   pub<br>4.0K   pub-htaccess.txt<br>648K   templates<br>14K   tmp<br>64K   tools<br>5.4G   /var<br>``` |











Note:





- We recommend that you only run this command in off-peak hours to prevent additional load on your server.
- The numbers in the left column represent the sizes of the files and directories that the working directory contains, in human-readable format.

In this example, the `/home` directory, which generally contains the system’s cPanel account data, uses the most disk space (113 GB). Because in most cases you cannot delete your users’ data, examine the second largest directory (the `/var` directory) for disk usage data.

2. To examine the desired directory, run the following command:



```bash
du -sh /var/*
```



    The output will resemble the following example:





|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>``` | ```go<br>12K /var/account<br>4.0K    /var/aptitude<br>28K /var/aquota.user<br>938M    /var/cache<br>559M    /var/cpanel<br>4.0K    /var/cvs<br>24K /var/db<br>32K /var/empty<br>8.0K    /var/games<br>173M    /var/lib<br>8.0K    /var/local<br>36K /var/lock<br>3.7G    /var/log<br>0   /var/mail<br>10M /var/named<br>8.0K    /var/nis<br>8.0K    /var/opt<br>44K /var/portsentry<br>8.0K    /var/preserve<br>144K    /var/profiles<br>16K /var/proftpd<br>16K /var/proftpd.delay<br>4.0K    /var/proftpd.pid<br>4.0K    /var/proftpd.scoreboard<br>8.0K    /var/quota.user<br>8.0K    /var/racoon<br>1.2M    /var/run<br>16M /var/spool<br>4.0K    /var/state<br>14K /var/tmp<br>4.0K    /var/vzquota<br>44K /var/www<br>20K /var/yp<br>``` |





    This output indicates that the \`/var/logs/\` directory uses the most disk space.

3. Repeat this process until you locate files that you wish to remove.

4. To delete the desired files, run the following command, where `filename` represents the file to remove:



```bash
rm -f filename
```





Warning:





Exercise caution when you run the rm utility. You cannot recover files or directories that you delete.


### Retain log entries

Log files often use a large amount of disk space. To retain the system’s most recent log file entries when you remove excess log files, perform the following steps:

1. If you have not already located the specific files to remove from this directory, run the `du` command.
2. Examine the command’s output to determine the files to delete.
3. For each file, run the following commands, where filename represents the file’s name.


```bash
tail -5000 filename > filename.new
mv filename.new filename
sync
```

4. To release the file lock, [restart the service that created the file](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services).

## SMART errors

Warning:

Self-Monitoring, Analysis and Reporting Technology (SMART) errors may indicate hard disk failures or other problems. Only disable SMART errors if you understand these risks.

To disable SMART errors, run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>touch /var/cpanel/disablesmartcheck<br>/scripts/upcp<br>``` |

## Monitor disk space usage

To monitor disk space usage, enable the _System disk space usage warnings_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#notifications) interface ( _WHM » Home » Server Configruation » Tweak Settings_).

Note:

To disable notifications for specific mount points, add them to the [`/var/cpanel/chkservd_ignored_mounts`](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#the-varcpanelchecksrvd_ignored_mounts-file) file.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Configure cPanel Cron Jobs](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)
- [Disk Usage](https://docs.cpanel.net/cpanel/files/disk-usage/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×