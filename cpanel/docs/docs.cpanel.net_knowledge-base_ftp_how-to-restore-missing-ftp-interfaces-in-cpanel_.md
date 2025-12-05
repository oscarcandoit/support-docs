---
url: "https://docs.cpanel.net/knowledge-base/ftp/how-to-restore-missing-ftp-interfaces-in-cpanel/"
title: "How to Restore Missing FTP Interfaces in cPanel | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/ftp/how-to-restore-missing-ftp-interfaces-in-cpanel/#main-content)

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
3. [FTP](https://docs.cpanel.net/knowledge-base/ftp/)
4. How to Restore Missing FTP Interfaces in cPanel


[ftp](https://docs.cpanel.net/tags/ftp/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/ftp/how-to-restore-missing-ftp-interfaces-in-cpanel/#overview)

* * *

[Resolve the touch file problem](https://docs.cpanel.net/knowledge-base/ftp/how-to-restore-missing-ftp-interfaces-in-cpanel/#resolve-the-touch-file-problem)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/ftp/how-to-restore-missing-ftp-interfaces-in-cpanel/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/ftp/how-to-restore-missing-ftp-interfaces-in-cpanel/#overview)

* * *

[Resolve the touch file problem](https://docs.cpanel.net/knowledge-base/ftp/how-to-restore-missing-ftp-interfaces-in-cpanel/#resolve-the-touch-file-problem)

* * *

## How to Restore Missing FTP Interfaces in cPanel

Last modified: _2025 February 13_

* * *

## Overview

Warning:

This document describes an unsupported workaround. We do **not** guarantee that it will work in the future. We **strongly** recommend that you [return FTP services to a managed state](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management#return-a-target-to-managed).


Remember:

Your server’s package-based services may use the `unmanaged` setting, even if you did not change the package’s target settings. For more information, read the _Why is my target set to unmanaged_ section in our [How to Set or Unset Package Management](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management#why-is-my-target-set-to-unmanaged) documentation.


If you set your server’s FTP service to use the `unmanaged` setting, you may experience problems with cPanel’s FTP-related interfaces. cPanel uses a `touch` file to determine whether cPanel displays FTP interfaces. Also, cPanel only displays FTP-related interfaces if a system administrator enables FTP for the user.

## Resolve the touch file problem

Use the `touch` command to create the `/var/cpanel/dynamicui/ftp` file. The file determines whether cPanel will display FTP interfaces.

To do this, run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>mkdir -p /var/cpanel/dynamicui/<br>touch /var/cpanel/dynamicui/ftp<br>``` |

Remember:

The unmanaged FTP package may delete the touch file during an upgrade. If this issue recurs on your server, always run this command **after** any updates or upgrades.


#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/)
- [FTP Connections](https://docs.cpanel.net/cpanel/files/ftp-connections/)
- [FTP Server Configuration](https://docs.cpanel.net/whm/service-configuration/ftp-server-configuration/)
- [FTP Server Selection](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×