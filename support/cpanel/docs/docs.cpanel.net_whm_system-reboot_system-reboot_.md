---
url: "https://docs.cpanel.net/whm/system-reboot/system-reboot/"
title: "System Reboot | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/system-reboot/system-reboot/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. System Reboot


[whmui](https://docs.cpanel.net/tags/whmui/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Forceful Server Reboot](https://docs.cpanel.net/whm/system-reboot/system-reboot/#forceful-server-reboot)

* * *

[Graceful Server Reboot](https://docs.cpanel.net/whm/system-reboot/system-reboot/#graceful-server-reboot)

* * *

[Reboot from the Terminal](https://docs.cpanel.net/whm/system-reboot/system-reboot/#reboot-from-the-terminal)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/system-reboot/system-reboot/#table-of-contents-toggle)

[Forceful Server Reboot](https://docs.cpanel.net/whm/system-reboot/system-reboot/#forceful-server-reboot)

* * *

[Graceful Server Reboot](https://docs.cpanel.net/whm/system-reboot/system-reboot/#graceful-server-reboot)

* * *

[Reboot from the Terminal](https://docs.cpanel.net/whm/system-reboot/system-reboot/#reboot-from-the-terminal)

* * *

## System Reboot

![](https://docs.cpanel.net/img/whm-icons/graceful_server_reboot.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/system-reboot/system-reboot/)

Last modified: _2025 April 29_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

Important:

- We recommend that you upgrade your operating system to use KernelCare, a live kernel patching service that ensures your system runs the most up-to-date kernel. This service includes security patches and symlink protection. If your system supports KernelCare, you may receive an upgrade notification in this interface. For more information, read [KernelCare’s](https://www.kernelcare.com/update-kernel-linux/) documentation.
- We recommend that you only reboot your server to troubleshoot an issue that occurs when you start your server or when you disable SELinux.
- We **strongly** recommend that you use the _Graceful Reboot_ method rather than the _Forceful Reboot_ method, because a _Forceful Reboot_ **can cause data loss**.

## Forceful Server Reboot

Use the _Forceful Server Reboot_ interface to shut down your server regardless of any errors that the server encounters. To begin this process, navigate to the _Forceful Server Reboot_ interface and click _Proceed_.

Important:

- We recommend that you reboot your system with this method instead of with the physical reset switch (a hard reset).
- Use this method **only** if the Graceful Reboot function does not work.

## Graceful Server Reboot

Use the _Graceful Server Reboot_ interface to close any user-level processes and then store their data before the reboot. To begin this process, navigate to the _Graceful Server Reboot_ interface and click _Proceed_.

Important:

- This method does **not** result in data loss.
- We **strongly** recommend that you use this method whenever possible.

## Reboot from the Terminal

You can restart your server via the terminal with the `reboot` command. For more information about how to use the reboot command, run the command with the `--help` flag:

```bash
reboot --help
```

#### Additional Documentation

* * *

- [Background Process Killer](https://docs.cpanel.net/whm/system-health/background-process-killer/)
- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Configuration Cluster](https://docs.cpanel.net/whm/clusters/configuration-cluster/)
- [Link Server Nodes](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/)
- [Rebuild RPM Database](https://docs.cpanel.net/whm/software/rebuild-rpm-database/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×