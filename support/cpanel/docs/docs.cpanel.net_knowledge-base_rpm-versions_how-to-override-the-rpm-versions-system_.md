---
url: "https://docs.cpanel.net/knowledge-base/rpm-versions/how-to-override-the-rpm-versions-system/"
title: "How to Override the rpm.versions System | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/rpm-versions/how-to-override-the-rpm-versions-system/#main-content)

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
4. How to Override the rpm.versions System


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [rpms](https://docs.cpanel.net/tags/rpms/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/rpm-versions/how-to-override-the-rpm-versions-system/#overview)

* * *

[Files](https://docs.cpanel.net/knowledge-base/rpm-versions/how-to-override-the-rpm-versions-system/#files)

* * *

[Third-party conflicts](https://docs.cpanel.net/knowledge-base/rpm-versions/how-to-override-the-rpm-versions-system/#third-party-conflicts)

* * *

[File format](https://docs.cpanel.net/knowledge-base/rpm-versions/how-to-override-the-rpm-versions-system/#file-format)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/rpm-versions/how-to-override-the-rpm-versions-system/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/rpm-versions/how-to-override-the-rpm-versions-system/#overview)

* * *

[Files](https://docs.cpanel.net/knowledge-base/rpm-versions/how-to-override-the-rpm-versions-system/#files)

* * *

[Third-party conflicts](https://docs.cpanel.net/knowledge-base/rpm-versions/how-to-override-the-rpm-versions-system/#third-party-conflicts)

* * *

[File format](https://docs.cpanel.net/knowledge-base/rpm-versions/how-to-override-the-rpm-versions-system/#file-format)

* * *

## How to Override the rpm.versions System

Last modified: _2024 February 22_

* * *

## Overview

This document explains the files in the `/var/cpanel/rpm.versions.d/` directory, which system administrators and third-party developers can use to modify cPanel-provided package management.

Note:

- All of the rpm.versions system’s `.versions` files are stored in
[the YAML format](https://www.yaml.org/).
- Because YAML is space-sensitive, misspelled words are common when system administrators edit a file manually. For this reason, we encourage system administrators to use the `/scripts/update_local_rpm_versions` script to edit the `/var/cpanel/rpm.versions.d/local.versions` file. For more information, read our [The update\_local\_rpm\_versions Script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-update_local_rpm_versions-script) documentation.

## Files

The `/usr/local/cpanel/etc/rpm.versions` file contains cPanel-provided settings for the rpm.versions system, based on the version of cPanel & WHM that your server runs. However, the rpm.versions system allows any `.versions` files in the `/var/cpanel/rpm.versions.d` directory to override these settings.

The following table lists information about the files from which the rpm.versions system retrieves information:

| Source of changes | Location | Description |
| --- | --- | --- |
| WebPros International, LLC | `/usr/local/cpanel/etc/rpm.versions` | WebPros International, LLC provides these settings based on the version of cPanel & WHM that your server runs. You should **never** directly edit this file, because you will lose your changes when you perform an upgrade. |
| Third-party developers | `/var/cpanel/rpm.versions.d/*.versions` | We encourage third-party developers who wish to override the `/usr/local/cpanel/etc/rpm.versions` file to create their own `*.versions` files in the `/var/cpanel/rpm.versions.d/` directory. These settings override the cPanel-provided settings. If multiple `*.versions` files on a server list a package target, conflicts may occur. For more information, read the Third-party conflicts section below. |
| System administrators | `/var/cpanel/rpm.versions.d/local.versions` | These settings override **all** other settings. |

### Third-party conflicts

If a conflict exists between two or more third-party files in the `/var/cpanel/rpm.versions.d/` directory, no package updates will take place.

A conflict can occur if two vendors modify the same setting in a file. You can resolve a conflict in either of the following ways:

1. If the `/var/cpanel/rpm.versions.d/local.versions` file contains a modification to the same setting that caused the conflict between the vendor files, the setting that the `/var/cpanel/rpm.versions.d/local.versions` file specifies will override the conflict.
2. The vendors can resolve the conflict through changes to their respective files in the `/var/cpanel/rpm.versions.d/` directory.

## File format

The files in the `/var/cpanel/rpm.versions.d/` directory use the YAML format, and follow a structure that resembles the `/usr/local/cpanel/etc/rpm.versions` file. However, these files should only contain the values that you wish to specifically override in the rpm.versions system.

More:

For more information about this file format, read our [The rpm.versions File](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file) documentation.

A file in the `/var/cpanel/rpm.versions.d/` directory that overrides only one target will appear similar to the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>``` | ```go<br>file_format:<br>  version: 2<br>install_targets: {}<br>rpm_groups: {}<br>deferred_settings: {}<br>deferred_optional: {}<br>rpm_locations: {}<br>srpm_sub_packages: {}<br>srpm_versions: {}<br>target_settings:<br>  pure-ftpd: unmanaged<br>url_templates: {}<br>``` |

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