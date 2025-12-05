---
url: "https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/"
title: "Introduction to the rpm.versions System | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/#main-content)

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
3. [The rpm.versions System](https://docs.cpanel.net/knowledge-base/rpm-versions/)
4. Introduction to the rpm.versions System


[rpms](https://docs.cpanel.net/tags/rpms/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/#overview)

* * *

[What is an RPM?](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/#what-is-an-rpm)

* * *

[What is a source package?](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/#what-is-a-source-package)

* * *

[Files](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/#files)

* * *

[Customization options](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/#customization-options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/#overview)

* * *

[What is an RPM?](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/#what-is-an-rpm)

* * *

[What is a source package?](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/#what-is-a-source-package)

* * *

[Files](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/#files)

* * *

[Customization options](https://docs.cpanel.net/knowledge-base/rpm-versions/introduction-to-the-rpm-versions-system/#customization-options)

* * *

## Introduction to the rpm.versions System

Last modified: _2025 February 13_

* * *

## Overview

The rpm.versions system manages many of the packages on your cPanel & WHM server.

The packages that the rpm.versions system manages may include the following types of packages:

- cPanel-provided packages.
- Third-party software packages.
- Custom packages that system administrators choose to install.

Important:

The rpm.versions system does **not** manage the packages for your operating system’s distribution. To install these packages, use WHM’s _Install Distro Packages_ interface ( _WHM » Home » Software » Install Distro Packages_). To change how your server handles updates for these packages, use the _Operating System Package Updates_ section of WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences) interface ( _WHM » Home » Server Configuration » Update Preferences_).

## What is an RPM?

RPMs are packages that you use to install software on Red Hat-based servers. RPMs contain the compiled code for each package on your system.

For more information about RPMs, visit the [RPM website](http://rpm.org/).

### What is a source package?

Source packages (SRPMs) contain the source code for each package on your system. Source packages are not compiled. For more information, read our [The rpm.versions File](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file) documentation.

## Files

The rpm.versions system manages packages based on the settings that it finds in several YAML files on your server. These files use the following priority:

1. The `/var/cpanel/rpm.versions.d/local.versions` file contains settings that system administrators set locally. These settings override all other rpm.versions system settings on the server.
2. Third-party developers can create other `.versions` files in the `/var/cpanel/rpm.versions.d/` directory, which override the cPanel-provided defaults.
3. The `/usr/local/cpanel/etc/rpm.versions` file contains cPanel-provided settings, based on your server’s version of cPanel & WHM. All local `.versions` files override these settings.

For more information, read our [The rpm.versions File](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file), [Target Settings](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings), and [How to Override the rpm.versions System](https://docs.cpanel.net/knowledge-base/rpm-versions/how-to-override-the-rpm-versions-system) documentation.

Warning:

Do **not** modify the `/usr/local/cpanel/etc/rpm.versions` file for any reason.


## Customization options

In addition to the ability to override settings on a server, you can create and install your own custom packages, and modify the package installation process. If you wish to modify and replace cPanel-provided packages, read our [How to Build and Install Custom RPMs on Red Hat Systems](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/) documentation.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [cPanel PHP](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/)
- [The check\_cpanel\_pkgs Script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/)
- [The find\_and\_fix\_rpm\_issues Script](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×