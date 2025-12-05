---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/"
title: "How to Disable Disk Space Warnings with Files | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#main-content)

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
4. How to Disable Disk Space Warnings with Files


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#overview)

* * *

[The /var/cpanel/chkservd\_ignored\_mounts file](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#the-varcpanelchkservdignoredmounts-file)

* * *

[The /var/cpanel/disablediskfreecheck file](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#the-varcpaneldisablediskfreecheck-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#overview)

* * *

[The /var/cpanel/chkservd\_ignored\_mounts file](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#the-varcpanelchkservdignoredmounts-file)

* * *

[The /var/cpanel/disablediskfreecheck file](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#the-varcpaneldisablediskfreecheck-file)

* * *

## How to Disable Disk Space Warnings with Files

Last modified: _2025 January 14_

* * *

## Overview

This document explains how to disable disk space warnings with files. You can configure disk space warnings with files in the following ways:

- Use the [`/var/cpanel/chkservd_ignored_mounts`](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#the-varcpanelchkservdignoredmounts-file) file to disable disk space monitoring for selected mount points. This method will prevent disk space warnings from mount points that always report as full, such as the `snapd` service.
- Use the [`/var/cpanel/disablediskfreecheck`](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-disable-disk-space-warnings-with-files/#the-varcpaneldisablediskfreecheck-file) file to bypass disk space warnings. This method will allow users to perform functions that cPanel & WHM would otherwise prevent due to disk space constraints, like changing account settings in WHM.

## The /var/cpanel/chkservd\_ignored\_mounts file

Each line in the `/var/cpanel/chkservd_ignored_mounts` file **must** include a single mount point to ignore.

Important:

- Entries **must** contain alphanumeric, English language characters.
- Entries may also include the slash character (`/`).
- Separate each line with a newline (`\n`) character.
- You can **only** disable monitoring for an entire mount point (For example, `/var`). You **cannot** disable monitoring for the last segment of a mount point (for example, `/var/tmp`).

For example, to prevent disk space monitoring alerts for the `snap` and `tempbackup` mount points, add the following entries to the `/var/cpanel/chkservd_ignored_mounts` file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>snap<br>tempbackup<br>``` |

## The /var/cpanel/disablediskfreecheck file

To bypass disk space warnings, create the empty `/var/cpanel/disablediskfreecheck` file.

Warning:

Bypassing disk space warnings means that cPanel & WHM could run out of disk space. Running out of disk space can cause a variety of issues, including website failures.

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×