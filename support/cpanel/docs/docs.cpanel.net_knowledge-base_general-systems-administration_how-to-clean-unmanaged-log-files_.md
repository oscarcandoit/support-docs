---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/"
title: "How to Clean Unmanaged Log Files | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#main-content)

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
4. How to Clean Unmanaged Log Files


[diskusage](https://docs.cpanel.net/tags/diskusage/) [logs](https://docs.cpanel.net/tags/logs/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#overview)

* * *

[Check disk space usage and compress old log files](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#check-disk-space-usage-and-compress-old-log-files)

* * *

[Delete log files in cPanel](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#delete-log-files-in-cpanel)

* * *

[Check the disk space from the command line](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#check-the-disk-space-from-the-command-line)

* * *

[Select the files or directories that you want to clear](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#select-the-files-or-directories-that-you-want-to-clear)

* * *

[Empty the files](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#empty-the-files)

* * *

[Log rotation](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#log-rotation)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#overview)

* * *

[Check disk space usage and compress old log files](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#check-disk-space-usage-and-compress-old-log-files)

* * *

[Delete log files in cPanel](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#delete-log-files-in-cpanel)

* * *

[Check the disk space from the command line](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#check-the-disk-space-from-the-command-line)

* * *

[Select the files or directories that you want to clear](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#select-the-files-or-directories-that-you-want-to-clear)

* * *

[Empty the files](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#empty-the-files)

* * *

[Log rotation](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#log-rotation)

* * *

## How to Clean Unmanaged Log Files

Last modified: _2020 September 28_

* * *

## Overview

Warning:

This document describes an unsupported workaround that is not guaranteed to work in the future.

- After these steps are performed on a server, it is the system administrator’s responsibility to manage and maintain the server’s database software.

- We recommend that only experienced system administrators attempt to perform these steps.

- We are **not** responsible for any data loss that is caused by an attempt to perform these steps.


This guide provides the steps to reduce the file size of the log files on your server that you do not manage through WHM’s [_cPanel Log Rotation Configuration_](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/) interface ( _WHM » Home » Service Configuration » cPanel Log Rotation Configuration_).

### Check disk space usage and compress old log files

cPanel & WHM creates and maintains log files. These log files allow you to examine errors and other occurrences on the system.

After an extended period of time, the log files grow to significant sizes on the system’s storage devices. cPanel & WHM archives log files with the `cpanellogd` daemon. However, this daemon does not archive all log files. To reduce the amount of disk space that the log files occupy, you should compress these log files.

## Delete log files in cPanel

### Check the disk space from the command line

Check the disk space from the command line
Before you begin, ensure that you are logged in to the terminal as the root user.

Use the `du` command to see which files and directories consume the most space inside of the `/var/log` directory.

```perl
du -h /var/log/
```

- The `du` command prints the estimated disk space usage of each file and directory for the path that you specified.

- The `-h` argument causes the command to print the information in a human-readable format. When you issue the command in the above example, the `du` utility prints the estimated disk space of each file and directory that the `/var/log` directory path contains.


The numbers in the left column of the output represent the file size of each file and directory that the specified directory path contains, in human-readable format.

[Click to view...](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#click-to-view---1764175697650441986)

The output of the `du` command should resemble the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>``` | ```go<br>root@host [~]# du -h /var/log/<br>24K    /var/log/cups<br>16K    /var/log/mail<br>36K    /var/log/prelink<br>19M    /var/log/audit<br>84K    /var/log/bandwidth/2011/Jun<br>128K   /var/log/bandwidth/2011/Jan<br>116K   /var/log/bandwidth/2011/Feb<br>712K   /var/log/bandwidth/2011<br>4.5M   /var/log/bandwidth<br>2.6G   /var/log/munin<br>8.0K   /var/log/conman.old<br>8.0K   /var/log/pm<br>8.0K   /var/log/conman<br>12K    /var/log/dcpumon/boot.1308161402<br>5.3M   /var/log/dcpumon<br>8.0K   /var/log/vbox<br>3.7G   /var/log/<br>``` |

Note:

It is possible that you may see more output from the utility than the example shows. Due to the size of the files and directories in the `/var/log` directory path, the `du` utility may require some time to produce an output.


### Select the files or directories that you want to clear

You can clear individual files within a directory.

[Click to view...](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#click-to-view---1764175697652104763)

The `/var/log/munin` directory uses 2.6 G of space, and is the second largest log on the list.

Use the `cd` command to move the prompt to the `/var/log/munin/` directory. Then, use the du `-h *` command to see the file sizes.

The output should resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```go<br>root@host [~]# cd /var/log/munin/<br>root@host [/var/log/munin]# du -h *<br>603M   munin-graph.log<br>385M   munin-html.log<br>67M    munin-limits.log<br>99M    munin-node.log<br>1.5G   munin-update.log<br>``` |

The `du -h` command, without the asterisk, shows the directory’s size.

The output should resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>root@host [/var/log/munin]# du -h<br>2.7 G.T<br>``` |

### Empty the files

Use the cat command (concatenate) to empty the log files or directories.

```perl
cat /dev/null > munin-update.log
```

- `/dev/null` is a non-existent file with no information.

- When you concatenate `/dev/null` to a log file, you empty the file data, but do not delete the file name.


[Click to view...](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-clean-unmanaged-log-files/#click-to-view---1764175697654615829)

The output from the previous example shows that the `munin-update.log` file occupies 1.5G of space in the drive.

To empty this file, use the `cat` command.

The output should resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>root@host [/var/log/munin]# cat /dev/null > munin-update.log<br>root@host [/var/log/munin]#<br>message<br>``` |

To confirm that you successfully emptied the file, use the `du -h *` command.

The output should resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```go<br>root@host [/var/log/munin]# cat /dev/null > munin-update.log<br>root@host [/var/log/munin]# du -h *<br>603M   munin-graph.log<br>385M   munin-html.log<br>67M    munin-limits.log<br>99M    munin-node.log<br>0M     munin-update.log<br>``` |

### Log rotation

cPanel & WHM’s log rotation system compresses and stores old log files in `/usr/local/cpanel/logs/archive/` directory. These actions also help you manage and reduce the amount of disk space that your hard drive uses.

Enable and configure log rotation in WHM’s [_cPanel Log Rotation Configuration_](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration/) interface ( _WHM » Home » Service Configuration » cPanel Log Rotation Configuration_).

The system stores the archived log files indefinitely, so you **must** remove them manually. Use the rm command to remove older log files.

#### Additional Documentation

* * *

- [Account Restore](https://docs.cpanel.net/whm/transfers/account-restore/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Daily Process Log](https://docs.cpanel.net/whm/server-status/daily-process-log/)
- [Disk Usage](https://docs.cpanel.net/cpanel/files/disk-usage/)
- [Email Disk Usage](https://docs.cpanel.net/cpanel/email/email-disk-usage/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×