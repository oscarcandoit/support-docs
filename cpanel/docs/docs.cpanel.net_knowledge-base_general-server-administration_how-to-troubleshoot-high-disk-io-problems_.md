---
url: "https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/"
title: "How to Troubleshoot High Disk I/O Problems | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#main-content)

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
4. How to Troubleshoot High Disk I/O Problems


[diskusage](https://docs.cpanel.net/tags/diskusage/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#overview)

* * *

[Symptoms of high disk IO](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#symptoms-of-high-disk-io)

* * *

[How to determine the disk IO wait on your server](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#how-to-determine-the-disk-io-wait-on-your-server)

* * *

[Use the top command to find the average wait time on your server](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#use-the-top-command-to-find-the-average-wait-time-on-your-server)

* * *

[Use the sar command to determine the history of your disk IO wait](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#use-the-sar-command-to-determine-the-history-of-your-disk-io-wait)

* * *

[How to resolve a problem with high disk IO](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#how-to-resolve-a-problem-with-high-disk-io)

* * *

[Direct Memory Access](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#direct-memory-access)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#overview)

* * *

[Symptoms of high disk IO](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#symptoms-of-high-disk-io)

* * *

[How to determine the disk IO wait on your server](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#how-to-determine-the-disk-io-wait-on-your-server)

* * *

[Use the top command to find the average wait time on your server](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#use-the-top-command-to-find-the-average-wait-time-on-your-server)

* * *

[Use the sar command to determine the history of your disk IO wait](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#use-the-sar-command-to-determine-the-history-of-your-disk-io-wait)

* * *

[How to resolve a problem with high disk IO](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#how-to-resolve-a-problem-with-high-disk-io)

* * *

[Direct Memory Access](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#direct-memory-access)

* * *

## How to Troubleshoot High Disk I/O Problems

Last modified: _2025 June 9_

* * *

## Overview

Disk I/O describes how long the read and write operations require on a hard disk. The speed at which your server can read and write information to disk directly affects your server’s performance and the performance of cPanel & WHM. Your server’s load will increase if the system experiences high disk I/O wait time.

## Symptoms of high disk IO

- High server load — The average system load exceeds `1`.

- `chkservd` notifications — You receive notifications about an offline service or that the system **cannot** restart a service.

- Slow hosted websites — Hosted websites may require more than a minute to load.

- Slow delivery of email — The Exim service performs slowly or does **not** respond. Exim contains a large outbound mail queue.

- Slow connection for email — The POP or IMAP services perform slowly or do **not** respond.

- Slow Webmail interfaces — The Webmail interfaces perform slowly or do **not** respond.

- Slow WHM or cPanel interfaces — The WHM or cPanel interfaces perform slowly when you add email accounts, databases, or other items.


## How to determine the disk IO wait on your server

### Use the top command to find the average wait time on your server

The `%wa` statistic at the top of the output indicates your server’s average disk wait.

![output of top command with the %wa statistic highlighted](https://docs.cpanel.net/img/troubleshoothighdiskio.png)

If the I/O wait percentage is greater than one divided by the number of your CPU cores, the CPU cores **must** wait to process data on hard disk. For example, if the system possesses four CPU cores and the server `%wa` statistic is `8.0`, then the actual `%wa` is `2.0`. Because the actual `%wa` is larger than `1.0`, the CPU cores **must** wait before they can process data on hard disk.

### Use the sar command to determine the history of your disk IO wait

The `sar` command provides you with the history of the server’s load averages. Use this command to determine the times when your server experiences high disk I/O.

[Click to view...](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-troubleshoot-high-disk-io-problems/#click-to-view---1764175697588162414)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>77<br>78<br>79<br>80<br>81<br>82<br>83<br>84<br>85<br>86<br>``` | ```go<br>root@server [~]# sar<br>Linux 2.6.32-431.29.2.el6.i686 (server.example.com)     10/17/2014  _i686_  (2 CPU)<br>12:00:01 AM     CPU     %user     %nice   %system   %iowait    %steal     %idle<br>12:10:01 AM     all      0.84      1.19      0.45      0.30      0.00     97.22<br>12:20:01 AM     all      0.65      1.06      0.41      0.31      0.00     97.58<br>12:30:01 AM     all      6.67      1.47      1.60      6.25      0.00     84.02<br>12:40:01 AM     all      0.63      1.08      0.40      0.33      0.00     97.56<br>12:50:01 AM     all      0.74      1.94      0.72      1.50      0.00     95.11<br>01:00:01 AM     all      0.58      1.51      0.41      0.24      0.00     97.25<br>01:10:01 AM     all      0.71      1.06      0.48      0.58      0.00     97.17<br>01:20:01 AM     all      0.54      1.06      0.37      0.22      0.00     97.81<br>01:30:01 AM     all      0.63      1.30      0.41      0.28      0.00     97.37<br>01:40:01 AM     all      0.58      1.06      0.39      0.21      0.00     97.76<br>01:50:01 AM     all      0.60      1.06      0.40      0.23      0.00     97.70<br>02:00:01 AM     all      0.54      1.28      0.39      0.23      0.00     97.55<br>02:10:01 AM     all      0.71      1.18      0.43      0.40      0.00     97.27<br>02:20:01 AM     all      0.78      1.08      0.49      0.46      0.00     97.19<br>02:30:01 AM     all      0.58      1.28      0.49      0.23      0.00     97.43<br>02:40:01 AM     all      0.64      1.06      0.54      0.31      0.00     97.45<br>02:50:02 AM     all      0.68      1.07      0.57      0.27      0.00     97.42<br>03:00:01 AM     all      0.66      1.52      0.55      0.26      0.00     97.00<br>03:10:01 AM     all      0.74      1.08      0.60      0.28      0.00     97.30<br>03:20:01 AM     all      0.67      1.06      0.53      0.31      0.00     97.43<br>03:30:01 AM     all      0.65      1.28      0.57      0.36      0.00     97.14<br>03:40:01 AM     all      0.61      1.12      0.64      0.70      0.00     96.93<br>03:50:01 AM     all      0.67      1.06      0.52      0.30      0.00     97.45<br>04:00:01 AM     all      0.63      1.31      0.51      0.29      0.00     97.26<br>04:10:01 AM     all      0.68      1.06      0.52      0.23      0.00     97.51<br>04:20:01 AM     all      0.70      1.20      0.58      0.28      0.00     97.25<br>04:30:01 AM     all      0.65      1.30      0.52      0.30      0.00     97.23<br>04:40:01 AM     all      0.74      1.06      0.54      0.33      0.00     97.32<br>04:50:01 AM     all      0.56      1.08      0.43      0.28      0.00     97.64<br>05:00:01 AM     all      0.59      1.52      0.47      0.29      0.00     97.13<br>05:10:01 AM     all      0.70      1.06      0.47      0.30      0.00     97.46<br>05:20:01 AM     all      0.62      1.07      0.44      0.30      0.00     97.57<br>05:30:01 AM     all      0.55      1.29      0.40      0.20      0.00     97.57<br>05:40:01 AM     all      0.56      1.09      0.39      0.25      0.00     97.71<br>05:50:01 AM     all      0.65      1.07      0.41      0.32      0.00     97.55<br>06:00:01 AM     all      0.74      1.29      0.43      0.33      0.00     97.21<br>06:10:01 AM     all      0.65      1.06      0.41      0.31      0.00     97.56<br>06:20:01 AM     all      0.72      1.19      0.43      0.28      0.00     97.38<br>06:30:01 AM     all      0.56      1.31      0.40      0.26      0.00     97.47<br>06:40:01 AM     all      0.61      1.06      0.40      0.29      0.00     97.63<br>06:50:01 AM     all      0.71      1.06      0.42      0.30      0.00     97.51<br>07:00:01 AM     all      0.52      1.51      0.39      0.22      0.00     97.35<br>07:10:01 AM     all      0.74      1.06      0.46      0.30      0.00     97.44<br>07:20:01 AM     all      0.63      1.23      0.52      0.49      0.00     97.12<br>07:30:01 AM     all      0.58      1.30      0.40      0.27      0.00     97.45<br>07:40:01 AM     all      0.56      1.06      0.39      0.19      0.00     97.80<br>07:50:01 AM     all      0.62      1.06      0.42      0.30      0.00     97.61<br>08:00:01 AM     all      0.67      1.28      0.41      0.30      0.00     97.33<br>08:10:01 AM     all      0.63      1.06      0.42      0.23      0.00     97.66<br>08:20:01 AM     all      0.56      1.20      0.39      0.26      0.00     97.58<br>08:30:01 AM     all      0.59      1.29      0.40      0.27      0.00     97.45<br>08:40:01 AM     all      0.59      1.06      0.38      0.26      0.00     97.71<br>08:50:01 AM     all      0.54      1.06      0.37      0.28      0.00     97.74<br>09:00:01 AM     all      0.60      1.52      0.41      0.23      0.00     97.25<br>09:10:01 AM     all      0.68      1.08      0.42      0.22      0.00     97.61<br>09:20:01 AM     all      0.51      1.06      0.37      0.23      0.00     97.83<br>09:30:01 AM     all      0.65      1.28      0.53      0.51      0.00     97.02<br>09:40:01 AM     all      0.61      1.06      0.39      0.37      0.00     97.56<br>09:50:01 AM     all      0.69      1.05      0.41      0.29      0.00     97.56<br>10:00:01 AM     all      0.61      1.31      0.40      0.27      0.00     97.41<br>10:10:01 AM     all      0.65      1.18      0.42      0.27      0.00     97.47<br>10:20:01 AM     all      0.60      1.06      0.40      0.25      0.00     97.69<br>10:30:01 AM     all      0.52      1.29      0.38      0.20      0.00     97.61<br>10:40:01 AM     all      0.62      1.06      0.40      0.27      0.00     97.65<br>10:50:01 AM     all      0.56      1.08      0.38      0.26      0.00     97.72<br>11:00:01 AM     all      0.61      1.50      0.41      0.28      0.00     97.20<br>11:10:01 AM     all      0.63      1.06      0.39      0.29      0.00     97.62<br>11:20:01 AM     all      0.61      1.06      0.39      0.29      0.00     97.64<br>11:30:01 AM     all      0.55      1.28      0.37      0.29      0.00     97.51<br>11:40:01 AM     all      0.60      1.08      0.40      0.29      0.00     97.64<br>11:50:01 AM     all      0.58      1.06      0.37      0.25      0.00     97.74<br>12:00:01 PM     all      0.55      1.28      0.38      0.22      0.00     97.57<br>12:10:01 PM     all      0.80      1.19      0.45      0.33      0.00     97.24<br>12:20:01 PM     all      0.68      1.06      0.40      0.29      0.00     97.56<br>12:30:01 PM     all      0.52      1.30      0.38      0.29      0.00     97.51<br>12:40:01 PM     all      0.65      1.06      0.39      0.33      0.00     97.57<br>12:50:01 PM     all      0.62      1.06      0.41      0.32      0.00     97.59<br>01:00:01 PM     all      0.55      1.51      0.40      0.26      0.00     97.28<br>01:10:01 PM     all      0.75      1.06      0.45      0.33      0.00     97.42<br>01:20:01 PM     all      0.52      1.08      0.39      0.25      0.00     97.77<br>01:30:01 PM     all      0.60      1.28      0.40      0.26      0.00     97.46<br>Average:        all      0.71      1.19      0.45      0.38      0.00     97.27<br>``` |

## How to resolve a problem with high disk IO

- Hard disk specifications with low RPM speed or slow interface technology — Upgrade the hard disk on your server or split the application load between separate hard disks.

- No bandwidth available on the hard disk — Upgrade the hard disk on your server or split the application load between separate hard disks.

- Write caching is disabled — [Enable write caching on the disk](https://www.linuxjournal.com/content/advanced-hard-drive-caching-techniques).

- Degraded RAID array — Check the Raid array for a hardware malfunction. You should test and verify the hardware.

- Software RAID array on the server reports busy; CPU uses slow parity calculation — Check the Raid array for a hardware malfunction. You should test and verify the hardware.

- Software processes slowly — Upgrade the hard disk on your server or split the application load between separate hard disks.


## Direct Memory Access

Direct Memory Access (DMA) improves hard drive and backup speeds. We **strongly** recommend that you enable DMA.

- To enable DMA for a hard drive, run the `hdparm -d1 /dev/hda` command.

- To disable DMA for a hard drive, run the `hdparm -d0 /dev/hda` command.

- To measure a hard drive’s transfer rate, run the `hdparm -Tt /dev/hda` command.

- To view a hard drive’s enabled options, run the `hdparm /dev/hda` command.

- To view more information about a hard drive, run the `hdparm -i /dev/hda` command.


Note:

Some older drives and motherboards have compatibility issues with DMA. Ask your data center, hard drive manufacturer, or motherboard manufacturer whether you can enable DMA on your drives.


#### Additional Documentation

* * *

- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Configuration Cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/)
- [How to Manage Your Hard Drive Space](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/)
- [Show Current Disk Usage](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×