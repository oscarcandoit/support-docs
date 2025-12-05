---
url: "https://docs.cpanel.net/knowledge-base/accounts/how-to-disable-filesystem-quotas/"
title: "How to Disable Filesystem Quotas | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/how-to-disable-filesystem-quotas/#main-content)

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
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. How to Disable Filesystem Quotas


[quotas](https://docs.cpanel.net/tags/quotas/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/how-to-disable-filesystem-quotas/#overview)

* * *

[Disable for the root XFS filesystem](https://docs.cpanel.net/knowledge-base/accounts/how-to-disable-filesystem-quotas/#disable-for-the-root-xfs-filesystem)

* * *

[Disable for non-root XFS filesystems](https://docs.cpanel.net/knowledge-base/accounts/how-to-disable-filesystem-quotas/#disable-for-non-root-xfs-filesystems)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/how-to-disable-filesystem-quotas/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/how-to-disable-filesystem-quotas/#overview)

* * *

[Disable for the root XFS filesystem](https://docs.cpanel.net/knowledge-base/accounts/how-to-disable-filesystem-quotas/#disable-for-the-root-xfs-filesystem)

* * *

[Disable for non-root XFS filesystems](https://docs.cpanel.net/knowledge-base/accounts/how-to-disable-filesystem-quotas/#disable-for-non-root-xfs-filesystems)

* * *

## How to Disable Filesystem Quotas

Last modified: _2024 February 19_

* * *

## Overview

Filesystem quotas allow server owners to limit the amount of disk space that an account uses. For most hosting providers, this is an integral part of how they manage cPanel accounts. However, in some circumstances, you may wish to disable filesystem quotas in order to improve your server’s performance.

The cPanel & WHM installation process enables quotas by default. You **must** wait until after installation to disable quotas.

You can enable quotas in WHM’s [_Initial Quota Setup_](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup) interface ( _WHM » Home » Server Configuration » Initial Quota Setup_) or via the `/usr/local/cpanel/scripts/fixquotas` script.

## Disable for the root XFS filesystem

To disable filesystem quotas for the `root` XFS filesystem:

1. Use SSH to connect to your server as the `root` user.

2. Open the `/etc/default/grub` file and remove the following line:


```perl
`rootflags=uquota`
```

3. Save and close the file.

4. Run the following command to update the GRUB bootloader:


```perl
grub2-mkconfig --output=/boot/grub2/grub.cfg
```

5. Run the following command to disable quotas:

```perl
xfs_quota -x -c 'off' -c 'remove' /
```

6. Use your preferred method to reboot your server.

7. Run the following command to confirm your changes:


```perl
mount | grep ' / '
```

The output should resemble the following example:


```perl
/dev/vda1 on / type xfs (rw,relatime,attr2,inode64,noquota)
```

## Disable for non-root XFS filesystems

To disable filesystem quotas for non-`root` filesystems:

1. Use SSH to connect to to your server as the `root` user.

2. Open the `/etc/fstab` file and remove the `uquota` entry for your mount or filesystem.

3. Save and close the file.

4. Run the following command to disable quotas:


```perl
xfs_quota -x -c 'off' -c 'remove' path_to_mount
```

5. Run the following command to remount the filesystem, where `path_to_mount` represents the absolute path to your mount point:

```perl
mount -o remount path_to_mount
```

Note:

It is **not** necessary to reboot the server when you disable quotas for `non-root` filesystems. However, you can reboot the server as an alternative to this step.

#### Additional Documentation

* * *

- [Apparent Discrepancies in Bandwidth Usage Statistics](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/)
- [Bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/)
- [Disk Usage](https://docs.cpanel.net/cpanel/files/disk-usage/)
- [Email Disk Usage](https://docs.cpanel.net/cpanel/email/email-disk-usage/)
- [Enable Quotas on a Virtuozzo VPS](https://docs.cpanel.net/whm/server-configuration/enable-quotas-on-a-virtuozzo-vps/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×