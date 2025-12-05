---
url: "https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/"
title: "The rpm.versions File | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#main-content)

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
4. The rpm.versions File


[rpms](https://docs.cpanel.net/tags/rpms/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#overview)

* * *

[install\_targets — Target components and dependencies](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#installtargets-target-components-and-dependencies)

* * *

[obsolete — Obsolete packages](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#obsolete-obsolete-packages)

* * *

[rpm\_groups — Package groups](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#rpmgroups-package-groups)

* * *

[rpm\_locations — Package file locations](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#rpmlocations-package-file-locations)

* * *

[srpm\_sub\_packages — Source package information](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#srpmsubpackages-source-package-information)

* * *

[srpm\_versions — Source package versions](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#srpmversions-source-package-versions)

* * *

[target\_settings — Target installation settings](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#targetsettings-target-installation-settings)

* * *

[unsupported\_rpms - Unsupported packages](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#unsupportedrpms-unsupported-packages)

* * *

[url\_templates — URL templates](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#urltemplates-url-templates)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#overview)

* * *

[install\_targets — Target components and dependencies](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#installtargets-target-components-and-dependencies)

* * *

[obsolete — Obsolete packages](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#obsolete-obsolete-packages)

* * *

[rpm\_groups — Package groups](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#rpmgroups-package-groups)

* * *

[rpm\_locations — Package file locations](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#rpmlocations-package-file-locations)

* * *

[srpm\_sub\_packages — Source package information](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#srpmsubpackages-source-package-information)

* * *

[srpm\_versions — Source package versions](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#srpmversions-source-package-versions)

* * *

[target\_settings — Target installation settings](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#targetsettings-target-installation-settings)

* * *

[unsupported\_rpms - Unsupported packages](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#unsupportedrpms-unsupported-packages)

* * *

[url\_templates — URL templates](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/#urltemplates-url-templates)

* * *

## The rpm.versions File

Last modified: _2024 April 17_

* * *

## Overview

The `/usr/local/cpanel/etc/rpm.versions` file contains all of the cPanel-provided settings for the rpm.versions system. We provide these settings based on the version of cPanel & WHM that your server runs. Your server automatically updates this file whenever cPanel & WHM updates.

The system stores the `/usr/local/cpanel/etc/rpm.versions` file in [YAML](https://yaml.org/) format. The sections below describe each of the file’s headers and their contents.

Warning:

We strongly recommend that you **never** directly edit this file, because you will lose your changes when you perform an upgrade. Instead, use the `/var/cpanel/rpm.versions.d/local.versions` file to make changes.

## install\_targets — Target components and dependencies

The `install_targets` section of the `/usr/local/cpanel/etc/rpm.versions` file lists each target with its component packages and dependencies.

Each target entry displays information in the following format:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```bash<br>package_target:<br>    components:<br>      - component_package_1<br>      - component_package_2<br>    dependencies:<br>      - dependency_1<br>      - dependency_2<br>``` |

This example uses the following variables:

- `package_target` is the name of the target.
- `component_package_1` and `component_package_2` are packages that are necessary for the `package_target` service to function properly.
- `dependency_1` and `dependency_2` are additional packages on which the component packages are dependent.

Note:

Instead of individual packages, the `components` and `dependencies` sections may also list the names of package groups, as the `rpm_groups` section of the `/usr/local/cpanel/etc/rpm.versions` file defines.

## obsolete — Obsolete packages

The `obsolete` section of the `/usr/local/cpanel/etc/rpm.versions` file lists packages that your version of cPanel & WHM no longer supports. If the package system detects any packages on this list, it will remove them from the system.

Each obsolete package entry appears in the following format:

```bash
compat-MySQL50-shared: 1
```

This example uses the following variables:

- `compat-MySQL50-shared` is the package’s name.
- `1` is a Boolean value that will _always_ equal `1`.

## rpm\_groups — Package groups

The `rpm_groups` section of the `/usr/local/cpanel/etc/rpm.versions` file lists groups of packages under their assigned group name. In the other sections of the file, this group name represents that list of packages, which eliminates the need for repetitive lists of frequently-used package names.

Each group entry appears in the following format:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>groupname:<br>    - grouped_package_1<br>    - grouped_package_2<br>``` |

This example uses the following variables:

- `groupname` is the name of the package group.
- `grouped_package_1` and `grouped_package_2` are the names of individual packages that are part of the group.

## rpm\_locations — Package file locations

The `rpm_locations` section of the `/usr/local/cpanel/etc/rpm.versions` file specifies which URL template the rpm.versions system uses to find that target’s packages.

Each file location entry appears in the following format:

```bash
package: template
```

This example uses the following variables:

- `package` is the package’s name.
- `template` is the name of the URL template, as the file’s `url_templates` section specifies.

## srpm\_sub\_packages — Source package information

The `srpm_sub_packages` section of the `/usr/local/cpanel/etc/rpm.versions` file specifies a list of source packages (formerly known as source RPMs, or SRPMs) for each package target.

Each source package entry appears in the following format:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>package_target:<br>    - srpm1<br>    - srpm2<br>    - srpm3<br>``` |

This example uses the following variables:

- `package_target` is the package target’s name.
- `srpm1`, `srpm2`, and `srpm3` are the names of the target’s source packages.

## srpm\_versions — Source package versions

The `srpm_versions` section of the `/usr/local/cpanel/etc/rpm.versions` file specifies the exact version number for each package target.

Each source package version entry appears in the following format:

```bash
package_target: version-revision.distribution
```

This example uses the following variables:

- `package_target` is the package target’s name.
- `version` is the exact version number.
- `revision` is the package’s revision number.
- `distribution` corresponds to the major version of cPanel & WHM with which we released this version.

For example, the source package version for the `cpanel-ng-whm-initial-setup-wizard` target appears similar to the following example:

```bash
cpanel-ng-whm-initial-setup-wizard: 118.16.16-1.cp11118
```

This example uses the following variables:

- The WHM version is `118.16.16`.
- The revision number is `1`.
- The version of cPanel & WHM is version 118.

## target\_settings — Target installation settings

The `target_settings` section of the `/usr/local/cpanel/etc/rpm.version` file specifies each package target’s default installation status.

For more information about package targets, read our [Target Settings](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/) documentation.

## unsupported\_rpms - Unsupported packages

The `unsupported_rpms` section of the `/usr/local/cpanel/etc/rpm.versions` file specifies packages that an operating system will not install.

The following example from cPanel & WHM version 118 demonstrates this section of the file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>redhat6:<br>  - cpanel-perl-536-linux-systemd<br>redhat8:<br>  - cpanel-perl-536-authen-libwrap<br>``` |

## url\_templates — URL templates

The `url_templates` section defines the template that the rpm.versions system uses to find specific package files. In the `/usr/local/cpanel/etc/rpm.versions` file, all of these templates point to locations on cPanel’s [httpupdate server](http://httpupdate.cpanel.net/RPM/).

Each URL template appears in one of the following formats:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>deb_default: 'http://[% httpupdate %]/ubuntu/pool/[% source_package %]/[% package %]_[% package_version %]-[% package_revision %]_amd64.deb'<br>deb_default-noarch: 'http://[% httpupdate %]/ubuntu/pool/[% source_package %]/[% package %]_[% package_version %]-[% package_revision %]_all.deb'<br>deb_ng: 'http://[% httpupdate %]/ubuntu/pool/[% source_package %]/[% package %]_[% package_version %]-[% package_revision %]_all.deb'<br>default: 'http://[% httpupdate %]/RPM/[% lowest_cpanel_version_supported %]/centos/[% dist_ver %]/[% arch %]/[% package %]-[% package_version %]-[% package_revision %].[% arch %].rpm'<br>default-noarch: 'http://[% httpupdate %]/RPM/[% lowest_cpanel_version_supported %]/centos/[% dist_ver %]/[% arch %]/[% package %]-[% package_version %]-[% package_revision %].noarch.rpm'<br>ng: 'http://[% httpupdate %]/RPM/ng/noarch/[% package %]-[% package_version %]-[% package_revision %].noarch.rpm'<br>``` |

This example uses the following variables:

- `deb_default`, `deb_default-noarch` and `deb_ng` are the names of package file location templates readable by Debian systems.
- `default`, `default-noarch`, and `ng` are the names of the RPM file location templates readable by Red-Hat® systems.
- `httpupdate` is the hostname at which to download the packages.
- `source_package` is the source package name.
- `version` is the cPanel & WHM major version that first contained that package target.
- `rpm_dist` is the name of the Red-Hat system’s OS distribution (for example, `centos`).
- `rpm_dist_ver` is the Red-Hat system’s OS distribution’s version number (for example, `5`).
- `rpm_arch` is the Red-Hat system’s OS architecture (for example, `i686`).
- `package` is the package’s name.
- `package_version` is the package’s version number.
- `package_revision` is the package’s revision number.

The presence or absence of `default-noarch` in the package’s location indicates differences in the package template, which changes how the rpm.versions system generates information, such as package filenames, for that package.

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