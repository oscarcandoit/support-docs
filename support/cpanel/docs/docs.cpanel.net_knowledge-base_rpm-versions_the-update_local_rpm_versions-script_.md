---
url: "https://docs.cpanel.net/knowledge-base/rpm-versions/the-update_local_rpm_versions-script/"
title: "The update_local_rpm_versions Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/rpm-versions/the-update_local_rpm_versions-script/#main-content)

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
4. The update\_local\_rpm\_versions Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [rpms](https://docs.cpanel.net/tags/rpms/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/rpm-versions/the-update_local_rpm_versions-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-update_local_rpm_versions-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/knowledge-base/rpm-versions/the-update_local_rpm_versions-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/rpm-versions/the-update_local_rpm_versions-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/rpm-versions/the-update_local_rpm_versions-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-update_local_rpm_versions-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/knowledge-base/rpm-versions/the-update_local_rpm_versions-script/#options)

* * *

## The update\_local\_rpm\_versions Script

Last modified: _2022 July 13_

* * *

## Overview

Use the `/usr/local/cpanel/scripts/update_local_rpm_versions` script to update the `/var/cpanel/rpm.versions.d/local.versions` file. These updates override the `/usr/local/cpanel/etc/rpm.versions` file and change how the rpm.versions system manages packages. You must run this script as the `root` user.

For more information about how files in the `/var/cpanel/rpm.versions.d/` directory override the `/usr/local/cpanel/etc/rpm.versions` file, read our [Target Settings](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings) documentation.

Note:

- Because [YAML](http://www.yaml.org/) is space-sensitive, misspelled words are common when system administrators edit a file manually. For this reason, we encourage system administrators to use this script to edit the `/var/cpanel/rpm.versions.d/local.versions` file.
- Do **not** use this script to change your server’s MySQL® version.

## Run the script

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/update_local_rpm_versions [options]
```

### Options

Use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--add` | Use this option to add a package target to the `/var/cpanel/rpm.versions.d/local.versions` file. | `--add target_settings.target state` |
| `--edit` | Use this option to edit a package target in the `/var/cpanel/rpm.versions.d/local.versions` file. | `--edit target_settings.target state` |
| `--del` | Use this option to remove a package target in the `/var/cpanel/rpm.versions.d/local.versions` file. | `--del target_settings.target` |

#### Override management of a target

To use the `/usr/local/cpanel/scripts/update_local_rpm_versions` script to override the rpm.versions system’s management of a package target, perform the following steps:

1. Run the following command, where `target` represents the name of the target and `state` represents `installed`, `uninstalled`, or `unmanaged`:




```bash
/usr/local/cpanel/scripts/update_local_rpm_versions --edit target_settings.target state
```





For example, to set the `pure-ftpd` target to the `unmanaged` state, run the following command:




```bash
/usr/local/cpanel/scripts/update_local_rpm_versions --edit target_settings.pure-ftpd unmanaged
```

2. To confirm that the target now uses the desired state, run the following command:




```bash
cat /var/cpanel/rpm.versions.d/local.versions
```





The system displays the current state next to the target name. If, for example, you set the `pure-ftpd` target to `unmanaged`, the `/var/cpanel/rpm.versions.d/local.versions` file will resemble the following example:






|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>``` | ```bash<br>file_format:<br>  version: 2<br>install_targets: {}<br>rpm_groups: {}<br>rpm_locations: {}<br>srpm_sub_packages: {}<br>srpm_versions: {}<br>target_settings:<br>  pure-ftpd: unmanaged<br>url_templates: {} <br>``` |

3. Run the following command to apply your changes to the rpm.versions system:




```bash
/usr/local/cpanel/scripts/check_cpanel_pkgs --fix
```





Important:





You **must** run this command to apply the changes to the rpm.versions system.


Note:

To set FTP services to `unmanaged`, run these commands for both the `pure-ftpd` and `proftpd` targets.

#### Return a target to the cPanel-provided behavior

To return a package target to the default behavior in the `/usr/local/cpanel/etc/rpm.versions` file, perform the following steps:

1. Run the following command, where `target` represents the name of the target:




```bash
/usr/local/cpanel/scripts/update_local_rpm_versions --del target_settings.target
```



For example, to return the `pure-ftpd` target to the cPanel-provided settings, run the following command:



```bash
/usr/local/cpanel/scripts/update_local_rpm_versions --del target_settings.pure-ftpd
```





Note:





When you use this command, you return that target to its default value in the `/usr/local/cpanel/etc/rpm.versions` file (either `installed` or `uninstalled`).

2. To confirm that the settings in the `/var/cpanel/rpm.versions.d/local.versions` file no longer override the cPanel-provided defaults for the target, run the following command:




```bash
cat /var/cpanel/rpm.versions.d/local.versions
```





The `/var/cpanel/rpm.versions.d/local.versions` file will no longer list that target.

3. Run the following command to apply your changes to the rpm.versions system:




```bash
/usr/local/cpanel/scripts/check_cpanel_pkgs --fix
```





Important:





You must run this command to apply the changes to the rpm.versions system.


Note:

To return FTP services to the `managed` state, run these commands for both the `pure-ftpd` and `proftpd` targets.

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