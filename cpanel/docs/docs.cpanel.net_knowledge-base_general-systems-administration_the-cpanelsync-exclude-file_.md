---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/the-cpanelsync-exclude-file/"
title: "The cpanelsync.exclude File | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-cpanelsync-exclude-file/#main-content)

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
4. The cpanelsync.exclude File


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [updates](https://docs.cpanel.net/tags/updates/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-cpanelsync-exclude-file/#overview)

* * *

[Entries](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-cpanelsync-exclude-file/#entries)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-cpanelsync-exclude-file/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-cpanelsync-exclude-file/#overview)

* * *

[Entries](https://docs.cpanel.net/knowledge-base/general-systems-administration/the-cpanelsync-exclude-file/#entries)

* * *

## The cpanelsync.exclude File

Last modified: _2025 February 13_

* * *

## Overview

Use the `/etc/cpanelsync.exclude` file to prevent updates to cPanel-distributed files. This method causes fewer problems than other methods of update prevention (for example, the use of the `immutable` state).

Note:

- This method **only** prevents an update from the `cpanelsync` utility. It does **not** prevent updates that occur at application runtime.
- You **cannot** use the `cpanelsync.exclude` file to prevent modifications to configuration files, datastores, or similar types of files.
- You **cannot** block updates to package-managed files within the `/etc/cpanelsync.exclude` and `/etc/cpanelsync.no_chmod` files.
- For more information about custom cPanel packages, read our [How to Build and Install Custom RPMs on Red Hat Systems](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems) documentation.
- To determine whether a package manages a particular file, run the following command:


  - On Red-Hat servers:

```perl
rpm -qf /path/to/file
```

\- On Ubuntu® servers:


```perl
dpkg -S /path/to/file
```

## Entries

Each entry in the `/etc/cpanelsync.exclude` file **must** use an absolute path, with each path on its own line.

For example, you may wish to prevent an update to the following files:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>/usr/local/cpanel/scripts/pkgacct<br>/usr/local/cpanel/Cpanel/Logd.pm<br>``` |

Use the following commands to add the files’ path to the `/etc/cpanelsync.exclude` file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>echo "/usr/local/cpanel/scripts/pkgacct" >> /etc/cpanelsync.exclude<br>echo "/usr/local/cpanel/Cpanel/Logd.pm" >> /etc/cpanelsync.exclude<br>``` |

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×