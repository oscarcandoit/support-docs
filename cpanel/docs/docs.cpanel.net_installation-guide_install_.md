---
url: "https://docs.cpanel.net/installation-guide/install/"
title: "Installation | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/installation-guide/install/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Installation Guide](https://docs.cpanel.net/installation-guide/)
3. Installation


[installation](https://docs.cpanel.net/tags/installation/) [dnsonly](https://docs.cpanel.net/tags/dnsonly/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Installation Steps

- [Installation](https://docs.cpanel.net/installation-guide/install/)
- [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/)
- [System Requirements for AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [System Requirements for CloudLinux](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- [System Requirements for Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
- [System Requirements for Ubuntu](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)
- [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/)
- [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/)
- [WHM](https://docs.cpanel.net/installation-guide/whm/)
- [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/)
- [Experimental Installation on Unsupported Operating Systems](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/)

Was this helpful?

[**Installation Steps**](https://docs.cpanel.net/installation-guide/install/#installation-toggle)

- [Installation](https://docs.cpanel.net/installation-guide/install/)
- [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements/)
- [System Requirements for AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/)
- [System Requirements for CloudLinux](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux/)
- [System Requirements for Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/)
- [System Requirements for Ubuntu](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/)
- [cPanel DNSOnly® Installation](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation/)
- [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/)
- [WHM](https://docs.cpanel.net/installation-guide/whm/)
- [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/)
- [Experimental Installation on Unsupported Operating Systems](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/)

## Installation Guide - Installation

* * *

To install cPanel & WHM on your server, run the following command:

```bash
cd /home && curl -o latest -L https://securedownloads.cpanel.net/latest && sh latest
```

This command changes your session to the home directory, downloads the latest version of cPanel & WHM, and runs the installation script.

Important:

- WebPros International, LLC designs software for commercial hosting. Therefore, we **only** license **publicly visible**, **static IP addresses with working DNS resolution**. We do **not** license dynamic, reserved, sticky, or internal IP addresses.
- We do **not** provide an uninstaller. If you wish to remove our software, you **must** reformat the server.
- **Only** install cPanel & WHM on a freshly-installed operating system.
- You **must** log in to the server as the `root` user in order to install cPanel & WHM. If you do **not** possess `root`-level access, contact your system administrator or hosting provider for assistance.
- We recommend that you use the [cPanel & WHM installer](https://securedownloads.cpanel.net/), which installs all of the services that it requires. If you install services **before or while** you install cPanel & WHM, you will encounter compatibility issues. If you install services that require cPanel & WHM while you are installing cPanel & WHM, the installation process will fail.
- New installations of cPanel & WHM default to the fast installation mode. To disable the fast installation mode, use the steps in our [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation) documentation.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×