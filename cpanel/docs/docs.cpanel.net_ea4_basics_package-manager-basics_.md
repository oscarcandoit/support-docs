---
url: "https://docs.cpanel.net/ea4/basics/package-manager-basics/"
title: "Package Manager Basics | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/basics/package-manager-basics/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [EasyApache4](https://docs.cpanel.net/ea4/)
3. [Basics](https://docs.cpanel.net/ea4/basics/)
4. Package Manager Basics


[rpms](https://docs.cpanel.net/tags/rpms/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/) [yum](https://docs.cpanel.net/tags/yum/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/basics/package-manager-basics/#overview)

* * *

[How package managers use their directories](https://docs.cpanel.net/ea4/basics/package-manager-basics/#how-package-managers-use-their-directories)

* * *

[Package manager by operating system](https://docs.cpanel.net/ea4/basics/package-manager-basics/#package-manager-by-operating-system)

* * *

[CentOS repositories](https://docs.cpanel.net/ea4/basics/package-manager-basics/#centos-repositories)

* * *

[AlmaLinux OS and Rocky Linux repositories](https://docs.cpanel.net/ea4/basics/package-manager-basics/#almalinux-os-and-rocky-linux-repositories)

* * *

[Ubuntu repositories](https://docs.cpanel.net/ea4/basics/package-manager-basics/#ubuntu-repositories)

* * *

[Package management in EasyApache 4](https://docs.cpanel.net/ea4/basics/package-manager-basics/#package-management-in-easyapache-4)

* * *

[Manage packages on CentOS systems](https://docs.cpanel.net/ea4/basics/package-manager-basics/#manage-packages-on-centos-systems)

* * *

[Manage packages on AlmaLinux and Rocky Linux systems](https://docs.cpanel.net/ea4/basics/package-manager-basics/#manage-packages-on-almalinux-and-rocky-linux-systems)

* * *

[Manage packages on Ubuntu systems](https://docs.cpanel.net/ea4/basics/package-manager-basics/#manage-packages-on-ubuntu-systems)

* * *

[Software collections](https://docs.cpanel.net/ea4/basics/package-manager-basics/#software-collections)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/basics/package-manager-basics/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/basics/package-manager-basics/#overview)

* * *

[How package managers use their directories](https://docs.cpanel.net/ea4/basics/package-manager-basics/#how-package-managers-use-their-directories)

* * *

[Package manager by operating system](https://docs.cpanel.net/ea4/basics/package-manager-basics/#package-manager-by-operating-system)

* * *

[CentOS repositories](https://docs.cpanel.net/ea4/basics/package-manager-basics/#centos-repositories)

* * *

[AlmaLinux OS and Rocky Linux repositories](https://docs.cpanel.net/ea4/basics/package-manager-basics/#almalinux-os-and-rocky-linux-repositories)

* * *

[Ubuntu repositories](https://docs.cpanel.net/ea4/basics/package-manager-basics/#ubuntu-repositories)

* * *

[Package management in EasyApache 4](https://docs.cpanel.net/ea4/basics/package-manager-basics/#package-management-in-easyapache-4)

* * *

[Manage packages on CentOS systems](https://docs.cpanel.net/ea4/basics/package-manager-basics/#manage-packages-on-centos-systems)

* * *

[Manage packages on AlmaLinux and Rocky Linux systems](https://docs.cpanel.net/ea4/basics/package-manager-basics/#manage-packages-on-almalinux-and-rocky-linux-systems)

* * *

[Manage packages on Ubuntu systems](https://docs.cpanel.net/ea4/basics/package-manager-basics/#manage-packages-on-ubuntu-systems)

* * *

[Software collections](https://docs.cpanel.net/ea4/basics/package-manager-basics/#software-collections)

* * *

## Package Manager Basics

Last modified: _2025 February 13_

* * *

## Overview

Package managers allow you to easily update, install, and remove software packages on your system. Package managers use [repositories](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#repository) to manage the packages that you install or uninstall. They also handle any dependencies for packages that you wish to use. If you set your package manager to automatically update your system’s packages, you will not need to run the updates manually.

You can configure your system’s update schedule in WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences/) interface ( _WHM » Home » Server Configuration » Update Preferences_).

cPanel & WHM ensures that installed packages **do not** conflict with one another.

## How package managers use their directories

Usually, each package manager’s directory owns a file that contains one or more configuration blocks. These blocks define the package manager’s available repositories and ensure that they allow third-party software. You do **not** need to edit this file.

## Package manager by operating system

Different operating systems use different package managers to manage their repositories.

| Operating System | Package Manager |
| --- | --- |
| CentOS | [`yum`](http://yum.baseurl.org/) |
| AlmaLinux OS | [`dnf`](https://dnf.readthedocs.io/en/latest/) |
| Rocky Linux™ | [`dnf`](https://dnf.readthedocs.io/en/latest/) |
| Ubuntu® | [`apt`](https://manpages.ubuntu.com/manpages/xenial/man8/apt.8.html) |

### CentOS repositories

CentOS uses `yum` to manage the packages in its repositories.

The following preconfigured repositories exist on CentOS systems:

- `base`
- `updates`
- `extras`

The system stores `yum` repositories in the `/etc/yum.repos.d/` directory.

To access a new repository, download the `.repo` file from the desired third-party to the `/etc/yum.repos.d/` directory and then run the `yum update` command.

### AlmaLinux OS and Rocky Linux repositories

[AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/) and [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/) use `dnf` to manage the packages in their repositories.

The following preconfigured repositories exist on AlmaLinux systems:

- `baseos`
- `appstream`
- `extras`

The following preconfigured repositories exist on Rocky Linux systems:

- `baseos`
- `appstream`
- `extras`

The system stores `dnf` repositories in the `/etc/yum.repos.d/` directory.

To access a new repository, download the `.repo` file from the desired third-party repository to the `/etc/yum.repos.d/` directory and then run the `dnf upgrade` command.

### Ubuntu repositories

[Ubuntu®](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/) uses `apt` to manage the packages in its repositories.

The following preconfigured repositories exist on Ubuntu systems:

- `main`
- `universe`
- `multiverse`
- `restricted`
- `partner`

To access any other repositories, download the `.list` file to the `/etc/apt/sources.list.d/` directory and then run the `apt update` command.

## Package management in EasyApache 4

EasyApache 4 packages conform to the following rules:

- In the EasyApache 4 repositories, cPanel & WHM-provided packages use the `ea-` prefix or namespace.
- EasyApache 4 provides packages in both RPM and `.deb` format.

### Manage packages on CentOS systems

To manage packages on a CentOS system, use the `yum` command.

Note:

In the following table, `example` represents the name of the package that you wish to install.

| Command | Description |
| --- | --- |
| `yum install example` | Install the `example` package from a repository to your system. |
| `yum erase example` or `yum remove example` | Uninstall the `example` package and any dependencies. |
| `yum update` | Update all of the packages on your system. |
| `yum update example` | Update the `example` package on your system. |
| `yum upgrade` | Upgrade the packages on your system.<br>Note:<br>This command also removes any obsolete packages on your system. |

For more information about the `yum` command, read the [`yum` documentation](http://yum.baseurl.org/wiki/YumCommands.html).

### Manage packages on AlmaLinux and Rocky Linux systems

To manage packages on an AlmaLinux or Rocky Linux system, use the `dnf` command.

Note:

In the following table, `example` represents the name of the package that you wish to install.

| Command | Description |
| --- | --- |
| `dnf install example` | Install the `example` package from a repository to your system. |
| `dnf remove example` | Uninstall the `example` package and any dependencies. |
| `dnf upgrade` | Update all of the packages on your system. <br>Note:<br>This command replaces `dnf update` and also removes any obsolete packages from your system. |
| `dnf upgrade example` | Update the `example` package on your system. |

For more information about the `dnf` command, read the [`dnf` documentation](https://dnf.readthedocs.io/en/latest/command_ref.html).

### Manage packages on Ubuntu systems

To manage packages on an Ubuntu system, use the `apt` command.

Note:

In the following table, `example` represents the name of the package that you wish to install.

| Command | Description |
| --- | --- |
| `apt install --purge example` | Install the `example` package from a repository to your system. |
| `apt purge example` | Uninstall the `example` package, all configuration files, and any dependencies. |
| `apt update` | Download the package information from all configured repositories. |
| `apt upgrade --purge` | Install any available upgrades for packages on your system. |

The `--purge` option ensures that the system removes any unneeded package dependencies and any non-binary files that the package owns. If you run the `install` or `upgrade` commands **without** the `--purge` option, then `apt` will **not** remove these files, and errors may occur.

Warning:

Do **not** [`hold`](http://manpages.ubuntu.com/manpages/bionic/man8/apt-mark.8.html#prevent%20changes%20for%20a%20package) any EasyApache 4 packages on Ubuntu systems. When you `hold` a package, it prevents the system from updating it. If you `hold` an EasyApache 4 package, you must manually resolve any error messages.

For more information about the `apt` command, read the [`apt` documentation](https://manpages.ubuntu.com/manpages/xenial/man8/apt.8.html).

## Software collections

We use the Software Collections Library (SCL) on non-Ubuntu systems to maintain packages that support multiple versions of software, which are primarily PHP packages.

Each Software Collection area uses its own package namespace. Because of this, two package namespaces will exist for each version of PHP. For example, to install the `-soap` extension for PHP 7.4, you **must** install the `ea-php74-php-soap` package. You **cannot** install only the `php-soap` package.

For more information, read Princeton University’s [Software Collections](https://csguide.cs.princeton.edu/software/scl) documentation and our [The scl Utility](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/the-scl-utility/) documentation.

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