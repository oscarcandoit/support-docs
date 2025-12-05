---
url: "https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/"
title: "Experimental Installation on Unsupported Operating Systems | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/#main-content)

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
3. Experimental Installation on Unsupported Operating Systems


[installation](https://docs.cpanel.net/tags/installation/)

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
[Overview](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/#overview) [Installation procedure](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/#installation-procedure)

Was this helpful?

[**Installation Steps**](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/#installation-toggle)

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
[Overview](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/#overview) [Installation procedure](https://docs.cpanel.net/installation-guide/experimental-installation-on-unsupported-operating-systems/#installation-procedure)

## Installation Guide - Experimental Installation on Unsupported Operating Systems

* * *

## Overview

This document describes how to install cPanel & WHM on an unsupported operating system. This method disables most cPanel OS detection and assumes the distribution version you provide at installation. We added this feature in cPanel & WHM version 102.

Important:

We do **not** recommend using unsupported operating systems. This is an experimental feature and may result in cPanel & WHM behaving in unexpected ways. We do **not** provide support for experimental operating systems.

## Installation procedure

To install cPanel & WHM on an unsupported operating system, run the following command, where `operatingsystem` is one of cPanel & WHM’s [supported operating systems](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system):

```bash
sh latest --experimental-os=operatingsystem
```

For example, the following command forces the system to assume the operating system in use is [AlmaLinux OS version 8](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system):

```bash
sh latest --experimental-os=almalinux-8.4
```

Warning:

If you attempt to use CloudLinux, the attempt **will** fail.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×