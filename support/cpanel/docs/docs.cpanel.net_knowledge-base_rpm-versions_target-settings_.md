---
url: "https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/"
title: "Target Settings | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#main-content)

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
4. Target Settings


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [rpms](https://docs.cpanel.net/tags/rpms/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#overview)

* * *

[What is a target setting?](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#what-is-a-target-setting)

* * *

[Target states](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#target-states)

* * *

[Legacy packages](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#legacy-packages)

* * *

[Configuration file settings](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#configuration-file-settings)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#overview)

* * *

[What is a target setting?](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#what-is-a-target-setting)

* * *

[Target states](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#target-states)

* * *

[Legacy packages](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#legacy-packages)

* * *

[Configuration file settings](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#configuration-file-settings)

* * *

## Target Settings

Last modified: _2025 February 13_

* * *

## Overview

A target represents the group of packages that must exist on the server for a specific service to function properly. Packages can consist of RPMs for Red-Hat® systems (like [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux), CentOS, [CloudLinux™](https://docs.cpanel.net/installation-guide/system-requirements-cloudlinux), or [Rocky Linux](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux)) or `.deb` packages for Debian® systems (like [Ubuntu®](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu)).

## What is a target setting?

The rpm.versions system uses the target setting to determine whether to install or uninstall that target’s specific packages. The `target_settings` section of the `/usr/local/cpanel/etc/rpm.versions` file contains the cPanel-provided default status for each target.

To override the cPanel-provided default statuses for each target presented in the `/usr/local/cpanel/etc/rpm.versions` file, update the target setting in the `/var/cpanel/rpm.versions.d/local.versions` file.

For example, to override the cPanel-provided default `clamav` package target, enter `clamav:TARGET_STATE` into the `target_settings` section of the `/var/cpanel/rpm.versions.d/local.versions` file. `TARGET_STATE` represents the [target state](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/#target-states) of the package.

More:

For more information about the `/usr/local/cpanel/etc/rpm.versions` file, read our [The `rpm.versions` File](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file) documentation.

## Target states

The targets on your server may exist in any of the following states:

- `installed` — The rpm.versions system ensures that the packages for that target are installed and functional.
- `uninstalled` — The rpm.versions system ensures that the packages for that target are uninstalled.
- `unmanaged` — The rpm.versions system ignores the packages for that target, regardless of whether they are installed on the server.

Warning:

You may experience problems with certain services if cPanel & WHM does not manage them:

- The rpm.versions system does not update unmanaged packages. These packages require manual upgrades and maintenance.
- If you upgrade a server with unmanaged FTP targets, problems may occur in cPanel’s FTP-related interfaces. For more information, read our [How to Restore Missing FTP Interfaces in cPanel](https://docs.cpanel.net/knowledge-base/ftp/how-to-restore-missing-ftp-interfaces-in-cpanel/) documentation.
- Unmanaged package targets may become upgrade blockers for a future version of cPanel & WHM.
- If a MySQL® package target is unmanaged, the system also blocks MariaDB® on the server. To successfully use a cPanel-managed installation of either MySQL or MariaDB, the rpm.versions system must manage both package targets.

For more information, read our [How to Set or Unset Package Management](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management) documentation.

## Legacy packages

The packages that WebPros International, LLC provided prior to the implementation of the rpm.versions system are now legacy packages. The settings in the `/var/cpanel/cpanel.config` file control these legacy packages.

- The system stores these settings in the `/usr/local/cpanel/etc/rpm.versions` file.
- The files in the `/var/cpanel/rpm.versions.d/` directory can override the `target_settings` configuration.

## Configuration file settings

The following list shows the settings in the `/var/cpanel/cpanel.config` file that control the actions of legacy packages:

- `ftpserver` — `pure-ftpd`, `proftpd`, `disabled`
- `local_nameserver_type` — `bind`, `powerdns`
- `mailserver` — `dovecot`
- `mysql-version` — For more information about the available version number for your OS, read our [Supported MySQL/MariaDB versions](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions) documentation.

More:

For more information, read our [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file) documentation.

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