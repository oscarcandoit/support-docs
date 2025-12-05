---
url: "https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/"
title: "The Delayed Repository | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [EasyApache4](https://docs.cpanel.net/ea4/)
3. [Git Repositories](https://docs.cpanel.net/ea4/git-repositories/)
4. The Delayed Repository


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#overview)

* * *

[Install the Delayed repository](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#install-the-delayed-repository)

* * *

[Uninstall the Delayed repository](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#uninstall-the-delayed-repository)

* * *

[Change Log](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#change-log)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#overview)

* * *

[Install the Delayed repository](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#install-the-delayed-repository)

* * *

[Uninstall the Delayed repository](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#uninstall-the-delayed-repository)

* * *

[Change Log](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#change-log)

* * *

## The Delayed Repository

Last modified: _2024 September 16_

* * *

## Overview

The Delayed [repository](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#repository) provides a delayed update schedule for packages in EasyApache 4.

This repository aims to reduce the chance of unscheduled package updates. It receives updates one week (7 days) after [EasyApache 4’s Production repository](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/). Sometimes a package will contain a bug from the upstream source. When this happens, we release an update with the bug fix. If you use the Delayed repository, you will only receive the most recent update to a package. This repository **replaces** the Production repository as your primary EasyApache 4 repository.

cPanel & WHM, L.L.C, retains the right to push some packages immediately to the Delayed repository. These packages will usually contain security updates. We may also update other packages at our discretion.

## Install the Delayed repository

Important:

When you switch to the Delayed repository, some of the packages on your system may be more recent than those available in the repository. This issue will resolve itself the next time the Delayed repository receives updates.

To install the Delayed repository and no longer use the Production repository, run the following commands:

- [AlmaLinux OS/Rocky Linux™](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#alma)
- [CentOS](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#centos)
- [Ubuntu®](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#ubuntu)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>yum install -y ea4-delayed<br>yum clean all<br>yum makecache<br>``` |

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>dnf install -y ea4-delayed<br>dnf clean all<br>dnf makecache<br>``` |

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>apt install -y ea4-delayed<br>apt autoclean<br>apt update<br>apt-cache gencaches<br>``` |

## Uninstall the Delayed repository

To uninstall the Delayed repository and switch back to the Production repository, run the following commands:

- [AlmaLinux/Rocky Linux](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#alma1)
- [CentOS](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#centos1)
- [Ubuntu](https://docs.cpanel.net/ea4/git-repositories/the-delayed-repository/#ubuntu1)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>yum erase -y ea4-delayed<br>yum clean all<br>yum makecache<br>yum update<br>``` |

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>dnf erase -y ea4-delayed<br>dnf clean all<br>dnf makecache<br>dnf update<br>``` |

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>apt purge -y ea4-delayed<br>apt autoclean<br>apt update<br>apt upgrade<br>``` |

## Change Log

The delayed repository follows the [EasyApache 4 Change Log](https://docs.cpanel.net/changelogs/experimental-repository-change-log), but its updates are delayed by a week.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Configure cPanel Cron Jobs](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)
- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×