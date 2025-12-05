---
url: "https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/"
title: "How to Clear a Full Partition | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/#main-content)

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
4. How to Clear a Full Partition


[diskusage](https://docs.cpanel.net/tags/diskusage/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/#overview)

* * *

[Clear a full partition](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/#clear-a-full-partition)

* * *

[Check the directory space from the command line.](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/#check-the-directory-space-from-the-command-line)

* * *

[Delete selected files and directories.](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/#delete-selected-files-and-directories)

* * *

[Restart the service.](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/#restart-the-service)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/#overview)

* * *

[Clear a full partition](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/#clear-a-full-partition)

* * *

[Check the directory space from the command line.](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/#check-the-directory-space-from-the-command-line)

* * *

[Delete selected files and directories.](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/#delete-selected-files-and-directories)

* * *

[Restart the service.](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-clear-a-full-partition/#restart-the-service)

* * *

## How to Clear a Full Partition

Last modified: _2025 February 13_

* * *

## Overview

This document provides the steps to clear a full partition. Usually, the `/var` directory fills up first, because it holds all of the system logs.

Note:

The `/usr` directory may also fill up quickly due to Apache.


## Clear a full partition

### Check the directory space from the command line.

To check the disk space from the command line, perform the following steps:

1. Log in to your server as the `root` user via SSH.
2. Examine your system to locate the directory or log that uses the most space. To do this, change to the `/var` directory and run the `du -sh` command.

   - The `du` utility prints the estimated disk space usage of each file and directory for the path that you specified.
   - The `-sh` argument causes the command to print the information in a human-readable format.
3. The output will resemble the following example:




|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>``` | ```go<br>      4.0K    ./cpanel/acllists<br>      0   ./cpanel/analytics/data<br>      0   ./cpanel/analytics/logs<br>      0   ./cpanel/analytics/run<br>      4.0K    ./cpanel/analytics<br>      24K ./cpanel/plugins/wordpress-instance-manager-plugin<br>      24K ./cpanel/plugins<br>      0   ./cpanel/passreset<br>      8.0K    ./cpanel/mailman/diskusage_cache<br>      8.0K    ./cpanel/mailman<br>      563M    ./cpanel<br>      4.0K    ./named/data<br>      0   ./named/dynamic<br>      0   ./named/slaves<br>      124K    ./named/cache<br>      236K    ./named<br>      44K ./www/html<br>      0   ./www/cgi-bin<br>      44K ./www<br>      0   ./cvs<br>      0   ./proftpd<br>      2.8G    .<br>    <br>``` |




The numbers in the left column of the output represent the file size of each file and directory that the specified directory path contains, in human-readable format.





Note:




Due to the number of files and directories in the `/var` directory, this example only shows partial output from the `du` utility.


4. Examine the output and determine which directories use the most space.

### Delete selected files and directories.

You can delete individual files within a directory and individual directories. To do this, perform the following steps:

1. Change to the directories that contain the most disk space.
2. Examine the size of each file in the directory. To do this, run the `du -h *` command.
3. The output will resemble the following example:





Note:




The following example displays the output for the `/var/www/html` directory.








|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```go<br>4.0K    400.shtml<br>4.0K    401.shtml<br>4.0K    403.shtml<br>4.0K    404.shtml<br>4.0K    413.shtml<br>4.0K    500.shtml<br>12K cp_errordocument.shtml<br>4.0K    index.html<br>``` |

4. Either delete the files or save the most recent entries.
   - To save the most recent entries, run the following commands:






     Note:





     In these commands, `filename` represents the file to delete, and `filename.new` represents the file to which to save the most recent entries.









     |     |     |
     | --- | --- |
     | ```<br>1<br>2<br>3<br>``` | ```go<br>tail -5000 filename > filename.new<br>mv filename.new filename<br>sync<br>``` |

   - To delete the files, run the following command:


     ```perl
     cat /dev/null > filename
     ```

### Restart the service.

After you delete the files and directories, restart the service that created the file. To do this, follow the directions in our [How to Restart Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/) documentation.

#### Additional Documentation

* * *

- [Disk Usage](https://docs.cpanel.net/cpanel/files/disk-usage/)
- [Email Disk Usage](https://docs.cpanel.net/cpanel/email/email-disk-usage/)
- [How to Manage Your Hard Drive Space](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-manage-your-hard-drive-space/)
- [Show Current Disk Usage](https://docs.cpanel.net/whm/system-health/show-current-disk-usage/)
- [View Reseller Usage and Manage Account Status](https://docs.cpanel.net/whm/resellers/view-reseller-usage-and-manage-account-status/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×