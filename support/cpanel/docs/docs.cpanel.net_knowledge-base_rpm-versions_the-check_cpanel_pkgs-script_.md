---
url: "https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/"
title: "The check_cpanel_pkgs Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#main-content)

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
4. The check\_cpanel\_pkgs Script


[rpms](https://docs.cpanel.net/tags/rpms/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#overview)

* * *

[Script functions](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#script-functions)

* * *

[Run the script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#options)

* * *

[Example](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#example)

* * *

[Checks performed](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#checks-performed)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#overview)

* * *

[Script functions](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#script-functions)

* * *

[Run the script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#options)

* * *

[Example](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#example)

* * *

[Checks performed](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/#checks-performed)

* * *

## The check\_cpanel\_pkgs Script

_Valid for versions 102 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/)

Last modified: _2024 February 20_

* * *

## Overview

The `/usr/local/cpanel/scripts/check_cpanel_pkgs` script scans every installed cPanel-managed package on your server for problems. This script can also reinstall any affected cPanel & WHM packages to repair them.

Note:

To run the `/usr/local/cpanel/scripts/check_cpanel_pkgs` script nightly, use the _Maintenance cPanel RPM Check_ and _Maintenance cPanel RPM Digest Check_ settings in the _Software_ section of WHM’s [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

## Script functions

The `/usr/local/cpanel/scripts/check_cpanel_pkgs` script performs four basic functions each time that it runs:

1. Discovers missing packages.
2. Tracks packages that are out-of-date and need updates.
3. Checks for any altered packages. Altered packages meet any of the following conditions:
   - Their mode has changed.
   - An MD5 checksum does not exist.
   - They are symlinks, and the file points to the wrong path.
   - They are missing.
4. Checks whether to uninstall any cPanel-managed package.

Note:

- The `/usr/local/cpanel/scripts/check_cpanel_pkgs` script runs for a few minutes. If it does not detect any problems, it will **not** produce any output and exit to the command prompt.
- The `/usr/local/cpanel/scripts/check_cpanel_pkgs` script does **not** check for problems with incorrect file permissions.

## Run the script

To run the `/usr/local/cpanel/scripts/check_cpanel_pkgs` script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/check_cpanel_pkgs [options]
```

### Options

You can use the following options with the `/usr/local/cpanel/scripts/check_cpanel_pkgs` script:

| Options | Description |
| --- | --- |
| `--download-only` | Downloads any missing packages to the `/usr/local/cpanel/tmp/rpm.versions` file, then exits.<br>- The script downloads a new copy of a package **only** if the package is missing.<br>- If the package already exists, the script lists the package name **only** and then exits. |
| `--fix` | Shows any problems and automatically corrects them. |
| `--list-only` | Lists altered packages and exits. |
| `--long-list` | Shows the altered packages and files in an easily-parsed format. |
| `--no-broken` | Installs missing packages and uninstalls unneeded packages. The script does not check for broken packages. |
| `--no-digest` | Skips file-digest checks. The script does not check for changes to the file contents. |
| `--nodir` | The script does not read the `/var/cpanel/rpm.versions.d` directory. |
| `--notify` | Sends a notification that lists any altered packages. Then, the script describes any actions that the system performed. |
| `--targets` | Filters packages based on provided targets (comma-delimited). |

### Example

For example, to use the `--fix` option, run the following command:

```bash
/usr/local/cpanel/scripts/check_cpanel_pkgs --fix
```

## Checks performed

The `/usr/local/cpanel/scripts/check_cpanel_pkgs` script runs a verification check on all cPanel-managed packages. This checks for changes in the files since their installation. The script does not check configuration and documentation files.

Note:

If the output indicates that only `Mode` or `mTime` have changed, the script will not report that as an altered package.

The output of the verification check lists the following changes:

| Check | Description |
| --- | --- |
| `S` | File size differs. |
| `M` | Mode differs. This includes permissions and file type. |
| `5` | MD5 sum differs. |
| `D` | Device major or minor number mismatch. |
| `L` | `readLink(2)` path mismatch. |
| `U` | User ownership differs. |
| `G` | Group ownership differs. |
| `T` | `mTime` differs. `mTime` refers to the last time the file was modified. |
| `P` | Capabilities differ. |

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [cPanel PHP](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/)
- [The find\_and\_fix\_rpm\_issues Script](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×