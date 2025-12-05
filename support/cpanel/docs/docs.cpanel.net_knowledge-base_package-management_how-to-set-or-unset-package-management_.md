---
url: "https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/"
title: "How to Set or Unset Package Management | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#main-content)

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
3. [Package Management](https://docs.cpanel.net/knowledge-base/package-management/)
4. How to Set or Unset Package Management


[rpms](https://docs.cpanel.net/tags/rpms/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#overview)

* * *

[Common unmanaged package problems](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#common-unmanaged-package-problems)

* * *

[Why is my target set to unmanaged?](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#why-is-my-target-set-to-unmanaged)

* * *

[What is an rpm.versions target?](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#what-is-an-rpmversions-target)

* * *

[List of targets](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#list-of-targets)

* * *

[Set a target to unmanaged](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#set-a-target-to-unmanaged)

* * *

[Return a target to managed](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#return-a-target-to-managed)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#overview)

* * *

[Common unmanaged package problems](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#common-unmanaged-package-problems)

* * *

[Why is my target set to unmanaged?](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#why-is-my-target-set-to-unmanaged)

* * *

[What is an rpm.versions target?](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#what-is-an-rpmversions-target)

* * *

[List of targets](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#list-of-targets)

* * *

[Set a target to unmanaged](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#set-a-target-to-unmanaged)

* * *

[Return a target to managed](https://docs.cpanel.net/knowledge-base/package-management/how-to-set-or-unset-package-management/#return-a-target-to-managed)

* * *

## How to Set or Unset Package Management

Last modified: _2025 September 24_

* * *

Note:

This document was previously titled _How to Set or Unset RPM Management_. Beginning in version 98, we added `.deb` packages to our codebase to allow cPanel & WHM installations on Ubuntu® systems.

## Overview

If you do **not** want cPanel & WHM’s rpm.versions system to manage a package, you can set its target to an unmanaged state. This document provides steps for how to set targets to both the `managed` and `unmanaged` states.

## Common unmanaged package problems

Warning:

We **strongly** recommend that you allow the rpm.versions system to manage **all** targets.

You may experience problems with certain services if cPanel & WHM does not manage them:

- The rpm.versions system does **not** update unmanaged packages. These packages require manual upgrades and maintenance.
- If you upgrade a server with unmanaged FTP targets, problems may occur in cPanel’s FTP-related interfaces. For more information, read our [How to Restore Missing FTP Interfaces in cPanel](https://docs.cpanel.net/knowledge-base/ftp/how-to-restore-missing-ftp-interfaces-in-cpanel) documentation.
- Unmanaged targets may become [upgrade blockers](https://docs.cpanel.net/knowledge-base/cpanel-product/upgrade-blockers) for a future version of cPanel & WHM.

### Why is my target set to unmanaged?

The targets for the following services may be in the `unmanaged` state, even if you did not change them:

- **FTP** — `proftpd` and `pure-ftpd`
- **NSD** — `nsd`


Warning:





We **removed** the NSD nameserver in cPanel & WHM version 106 and this target in cPanel & WHM version 112. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan).


## What is an rpm.versions target?

The rpm.versions system uses target settings. This determines whether the system will install or uninstall a target’s specific packages. The `/usr/local/cpanel/etc/rpm.versions` file contains the `target_settings` section. This contains the cPanel-provided default status for each target.

For example, cPanel provides a distribution of [Clam AntiVirus Scanner (ClamAV®)](https://www.clamav.net/). This consists of the following packages:

- `cpanel-clamav`

- `cpanel-clamav-virusdefs`

- `cpanel-perl-123-file-scan-clamav`



Note:





`123` represents the server’s cPanel Perl version.


In this example, the `/usr/local/cpanel/etc/rpm.versions` file’s setting for the `clamav` target controls the ClamAV packages. It also determines how the rpm.versions system manages these components. For more information, read our [rpm.versions file](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file) documentation.

### List of targets

This lists the associated targets for cPanel & WHM services:

- **Third-party software** — `3rdparty`


Warning:





**Never** set this target to `unmanaged`. It could cause **serious problems** on your server.

- **Analog Stats** — `analog`
- **AWStats** — `awstats`
- **ClamAV Scanner** — `clamav`
- **Composer** — `composer`


Warning:





We **removed** this target in cPanel & WHM version 130. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan).

- **cPanel** — `cpanel`


Warning:





**Never** set this target to the `unmanaged` state. This can cause **serious problems** on your server.

- **cPanel Developer Tools** — `cpanel-devel`


Note:





This controls the files that allow you to rebuild certain packages provided by cPanel.

- **cPanel privilege management** — `cpanel-wrap`


Warning:





**Never** set this target to `unmanaged`. It could cause **serious problems** on your server.

- **Exim** — `exim`


Warning:





Only experienced users should set this target to `unmanaged`. If you do not understand the effects of the change, it can cause **serious problems** on your server.

- **FTP** — `proftpd` or `pure-ftpd`
- **Git** — `git`
- **Mailman** — `mailman`
- **Munin** — `munin`
- **MyDNS** — `mydns`


Warning:





We **removed** the MyDNS nameserver in cPanel & WHM version 106 and this target in cPanel & WHM version 112. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan).

- **NSD** — `nsd`


Warning:





We **removed** the NSD nameserver in cPanel & WHM version 106 and this target in cPanel & WHM version 112. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan).

- **Obsolete services** — `obsolete`
- **Passive OS Fingerprinting** — `p0f`
- **PHPMyAdmin** — `phpmy`
- **Pluggable Authentication Modules** — `pam`
- **Perl 5.32** — `perl532`


Warning:





- **Never** set this target to the `unmanaged` state. This can cause **serious problems** on your server.
- We **removed** this target in cPanel & WHM version 112.

- **Perl 5.36** — `perl536`


Warning:





**Never** set this target to the `unmanaged` state. This can cause **serious problems** on your server.

- **Perl 5.42** — `perl542`


Warning:





**Never** set this target to the `unmanaged` state. This can cause **serious problems** on your server.

- **PHP** — `cpanel-php81`, `cpanel-php83` , `cpanel-php84`


Note:





- We added the `cpanel-php84` target in cPanel & WHM version 130.
- We added the `cpanel-php83` target in cPanel & WHM version 120.
- We added the `cpanel-php81` target in cPanel & WHM version 110.

- **PowerDNS** — `powerdns`
- **Roundcube Webmail** — `roundcube`
- **cPanel Site Publisher** — `sitepublisher`
- **SQLite** — `sqlite`
- **cPanel user interface** — `userinterface`
- **Webalizer** — `webalizer`

## Set a target to unmanaged

To set a target to the `unmanaged` state, perform the following steps:

1. Run the following command. In this example, `service` represents the name of the service that you want to set to the `unmanaged` state:




```bash
/usr/local/cpanel/scripts/update_local_rpm_versions --edit target_settings.service unmanaged
```





Note:





To set FTP services to the `unmanaged` state, you **must** run this command for **both** the `pure-ftpd` and `proftpd` targets.

2. Confirm that the target is now unmanaged. Open the following file in your preferred text editor:




```bash
/var/cpanel/rpm.versions.d/local.versions
```



Notice the target’s `unmanaged` value. For example, if you use the `roundcube` target, this file might look like the following example:





|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```bash<br>file_format:<br>version: 2<br>install_targets: {}<br>rpm_groups: {}<br>rpm_locations: {}<br>srpm_sub_packages: {}<br>srpm_versions: {}<br>target_settings:<br>cpanel-devel: installed<br>roundcube: unmanaged<br>url_templates: {}<br>``` |


## Return a target to managed

To return an unmanaged target to the `managed` state, perform the following steps:

1. Run the following command. In this example, `target` represents the name of the target that you want to set to the managed state:




```bash
/usr/local/cpanel/scripts/update_local_rpm_versions --del target_settings.service
```





Note:





- This script’s `--del` option returns a target to its default managed state. This can be either an installed **or** uninstalled state.
- To set FTP services to the `managed` state, you **must** run this command for **both** the `pure-ftpd` and `proftpd` targets.

2. Confirm that the target is no longer unmanaged. Open the following file in your preferred text editor:




```bash
/var/cpanel/rpm.versions.d/local.versions
```



Notice that the file no longer lists the target in the `target_settings` hash. For example, if you use the `roundcube` target, this file might look like the following example:





|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```bash<br>file_format:<br>  version: 2<br>install_targets: {}<br>rpm_groups: {}<br>rpm_locations: {}<br>srpm_sub_packages: {}<br>srpm_versions: {}<br>target_settings:<br>  cpanel-devel: installed<br>url_templates: {}<br>``` |


#### Additional Documentation

* * *

- [How to Build and Install Custom RPMs on Red-Hat Systems](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/)
- [Install Distro Packages](https://docs.cpanel.net/whm/software/install-distro-packages/)
- [Rebuild RPM Database](https://docs.cpanel.net/whm/software/rebuild-rpm-database/)
- [System Update](https://docs.cpanel.net/whm/software/system-update/)
- [The check\_cpanel\_pkgs Script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×