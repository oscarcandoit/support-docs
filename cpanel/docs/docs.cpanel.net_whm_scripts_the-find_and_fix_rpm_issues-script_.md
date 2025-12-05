---
url: "https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/"
title: "The find_and_fix_rpm_issues Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/#main-content)

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
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The find\_and\_fix\_rpm\_issues Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [rpms](https://docs.cpanel.net/tags/rpms/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/#example)

* * *

[Output](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/#output)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/#options)

* * *

[Example](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/#example)

* * *

[Output](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/#output)

* * *

## The find\_and\_fix\_rpm\_issues Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/)

Last modified: _2025 February 13_

* * *

## Overview

The `/usr/local/cpanel/scripts/find_and_fix_rpm_issues` script detects issues with your server’s RPM database and rebuilds the database if problems exist. This script also detects duplicate cPanel RPMs, removes them, and then re-installs them if necessary. You can use this script if you experience failures when you install RPMs.

Note:

- You **must** run this script as the `root` user.
- You can also rebuild the RPM database in WHM’s _Rebuild RPM Database_ interface ( _WHM » Home » Software » Rebuild RPM Database_).
- For a list of common RPM installation issues, read our [RPM Installation Failures](https://docs.cpanel.net/knowledge-base/package-management/rpm-installation-failures) documentation.
- This script does **not** support [Ubuntu](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#ubuntu) operating systems.

## Run the script

To run this script on the command line, use the following format:

```perl
/usr/local/cpanel/scripts/find_and_fix_rpm_issues [option]
```

### Options

Use the following options with this script:

Important:

You can only pass **one** option when you run the script.


| Options | Description | Example |
| --- | --- | --- |
| `--findonly` | Detect and report any RPM problems, but do not make any changes. | `--findonly` |
| `--rebuildonly` | Unconditionally rebuild the RPM database. | `--rebuildonly` |

### Example

For example, to check for RPM database issues but not rebuild the database, run the following command:

```perl
/usr/local/cpanel/scripts/find_and_fix_rpm_issues --findonly
```

### Output

The output will display any issues that the system finds with the RPM database.

The script’s output could resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```go<br>Checking that the RPM DB is OK...<br>glibc-2.17-222.el7.x86_64<br>OK: RPM DB is responding to queries<br>Testing if rpm_is_working RPM is installed<br>package rpm_is_working is not installed<br>Testing if it's possible to install a simple RPM<br>Preparing...                          ########################################<br>Updating / installing...<br>rpm_is_working-1.0-0                  ########################################<br>``` |

If you pass the `--rebuildonly` option, the script does not return output.

#### Additional Documentation

* * *

- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The backup Script](https://docs.cpanel.net/whm/scripts/the-backup-script/)
- [The backup\_restore\_manager Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script/)
- [The backups\_clean\_metadata\_for\_missing\_backups Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×