---
url: "https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/"
title: "How to Build and Install Custom RPMs on Red-Hat Systems | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/#main-content)

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
4. How to Build and Install Custom RPMs on Red-Hat Systems


[rpms](https://docs.cpanel.net/tags/rpms/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/#overview)

* * *

[Before you begin](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/#before-you-begin)

* * *

[Build and install custom RPMs](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/#build-and-install-custom-rpms)

* * *

[Return to the cPanel & WHM version of an RPM](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/#return-to-the-cpanel--whm-version-of-an-rpm)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/#overview)

* * *

[Before you begin](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/#before-you-begin)

* * *

[Build and install custom RPMs](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/#build-and-install-custom-rpms)

* * *

[Return to the cPanel & WHM version of an RPM](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/#return-to-the-cpanel--whm-version-of-an-rpm)

* * *

## How to Build and Install Custom RPMs on Red-Hat Systems

_Valid for versions 100 through the latest version_

#### Version:

#### [100](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/)

Last modified: _2025 February 13_

* * *

## Overview

WebPros International, LLC ships many of cPanel & WHM’s third-party dependencies as RPMs. In order to customize these dependencies on your Red-Hat®-based system, you **must** custom-build the RPM and then reinstall it. For example, use this method to build and install Roundcube customizations.

Note:

- RPMs work for Red-Hat systems **only**. Read our [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements) for information on the Red-Hat systems we support.
- You **must** log in through SSH as the `root` user to install an RPM.

## Before you begin

Perform the following steps to ensure your system’s readiness to build and install an RPM:

1. Install the `rpm-build` package.

Use the following command to install the rpm-build package on your system:



```bash
yum install rpm-build
```

2. Enable the `devel` target for cPanel & WHM.

Run the `update_local_rpm_versions` and `check_cpanel_pkgs` scripts before you install a custom RPM. These scripts ensure that the `devel` target is enabled and up-to-date. The `devel` target installs the `devel` versions of RPMs, which cPanel & WHM uses to compile SRPMs locally.

To do this, run the following commands:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>/scripts/update_local_rpm_versions --edit target_settings.cpanel-devel installed<br>/scripts/check_cpanel_pkgs --targets cpanel-devel --fix<br>``` |







Note:




To rebuild some cPanel-provided RPMs, you may need to install additional RPMs that cPanel & WHM does **not** include in default installations. These additional RPMs contain files that the system only needs to rebuild, but not run, the cPanel-provided RPMs.


3. Install additional prerequisites.

Before you can build and install a custom-built RPM, you **must** install all of the RPM’s prerequisites. You can find all of an RPM’s prerequisites, and the required version numbers, in its `.spec` file.


   - Lines in the `.spec` file that begin with `BuildRequires:` indicate a prerequisite that the RPM requires for the build process.
   - Lines in the `.spec` file that begin with `Requires:` indicate a prerequisite that the RPM requires for installation.

For example, `BuildRequires: cpanel-mysql >= 8.0.20` indicates that the RPM requires the `cpanel-mysql` RPM of MySQL® version 8.0.20 or higher.

4. Ensure that you have installed all necessary RPMs.

Run the `/scripts/sysup` script to ensure that you have installed all of the prerequisite RPMs.
   - If all of these RPMs exist on your server, you will receive the following message: `All Needed RPMS are installed.`
   - If you receive an error message, correct those installation problems first to avoid additional errors when you build and install your custom RPM.

## Build and install custom RPMs

Perform the following steps to build and install Roundcube customizations in cPanel & WHM version 58 and later:

1. Create the `.rpmmacros` file.

Use your preferred text editor to create the `.rpmmacros` file in the `/root/` directory.

Add the following contents to the file:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>%_topdir /root/rpmbuild<br># enable debug RPM package by commenting this out.<br>%debug_package %{nil}<br>``` |

2. Create the directories to rebuild the RPM.

If not present on your server, create the following directories:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>/root/rpmbuild/BUILD<br>/root/rpmbuild/SPECS<br>/root/rpmbuild/SOURCES<br>/root/rpmbuild/BUILDROOT<br>/root/rpmbuild/RPMS<br>/root/rpmbuild/SRPMS<br>``` |







Run the following command to create these directories:


```bash
mkdir -p /root/rpmbuild/BUILD /root/rpmbuild/SPECS /root/rpmbuild/SOURCES /root/rpmbuild/BUILDROOT /root/rpmbuild/RPMS /root/rpmbuild/SRPMS
```

Important:

You **must** use these names for the BUILD, SPECS, SOURCES, BUILDROOT, RPMS, and SRPMS directories. You must capitalize the entire name for each of these directories.


3. Install the source RPM.

Use the `rpm` command to install the source RPM (SRPM).


   - The `.spec` file will install to the `/root/rpmbuild/SPECS/` directory.
   - The source tarball, patches, and any additional files for the RPM will install to the `/root/rpmbuild/SOURCES/` directory.

Note:

You can find the correct SRPM for your version of cPanel & WHM on our [httpupdate server](http://httpupdate.cpanel.net/RPM/). Click your server’s version of cPanel & WHM, and then click the `src/` directory to view a list of all available SRPMs for that version.


Your command will resemble the following example:

```bash
rpm -Uvh http://httpupdate.cpanel.net/RPM/11.42/src/cpanel-php54-5.4.23-4.cp1142.src.rpm
```

When the installation finishes, you will see a message that resembles the following example:


```bash
Retrieving http://httpupdate.cpanel.net/RPM/11.42/src/cpanel-php54-5.4.23-4.cp1142.src.rpm 1:cpanel-php54 ########################################### [100%]
```

4. Edit the `.spec` file.

Use your preferred text editor to modify the `.spec` file in the `/root/rpmbuild/SPECS/` directory. Add the desired configuration settings for your RPM.



Note:




To change any of the sources that ship with the SRPM, modify the files in the `/root/rpmbuild/SOURCES/` directory.




The following example section of a `.spec` file includes the SOAP protocol:



```bash
%configure --prefix=%{_prefix} \ --with-libdir=%{_lib} \ --verbose \ --enable-static \ --with-mcrypt=%{_3rdparty_prefix} \ --with-iconv --enable-mbstring \ --with-gd \ --enable-soap \ --enable-mbregex \ --with-imap-ssl --with-imap=%{_3rdparty_libdir}/imap/ \
```

5. Rebuild the RPM.

Run the `rpmbuild` command on the modified `.spec` file to build the new RPM locally. Your command should resemble the following example:



```bash
rpmbuild -bb /root/rpmbuild/SPECS/php.spec
```



The `rpmbuild` tool writes the RPM and any subpackages to the `/root/rpmbuild/RPMS/` directory.



Note:




The system may report dependencies issues when you run this command. If so, install these dependencies with yum before you continue.


6. Update your RPM with the `force` option.

Navigate to the `/root/rpmbuild/RPMS/` directory and run the `rpm` command to install your new custom-built RPM.

Your command will resemble the following example, where `cpanel-php54-5.4.23-4.cp1142.x86_64.rpm` represents the RPM that you wish to update:



```bash
rpm -Uvh cpanel-php54-5.4.23-4.cp1142.x86_64.rpm --force
```

7. Prevent unintentional updates.







Warning:




This step is **optional** and may freeze updates to this RPM and prevent future cPanel & WHM upgrades. However, if you do not perform this step, cPanel & WHM may overwrite your custom RPM on its next update or upgrade.






To prevent unintentional updates, add your custom RPM to the list of local RPMs in the `/scripts/update_local_rpm_versions` script. Your command will resemble the following example:



```bash
/scripts/update_local_rpm_versions --add srpm_versions.cpanel-php54 5.4.23-4.cp1142
```



To verify your custom RPM’s configuration, view the `/var/cpanel/rpm.versions.d/local.versions` file.

The contents of the `local.versions` file should resemble the following example:



```bash
   --- file_format:   version: 2 srpm_versions:   cpanel-php54: 5.4.23-4.cp1142
```


## Return to the cPanel & WHM version of an RPM

Perform the following steps if you wish to return to the cPanel & WHM version of an RPM:

1. Run the following command to remove the custom RPM from the `local.versions` file:



```bash
/scripts/update_local_rpm_versions --del srpm_versions.cpanel-php54
```

2. Run the following script to reinstall the cPanel & WHM version of the RPM:



```bash
/scripts/check_cpanel_pkgs
```


#### Additional Documentation

* * *

- [Install Distro Packages](https://docs.cpanel.net/whm/software/install-distro-packages/)
- [Rebuild RPM Database](https://docs.cpanel.net/whm/software/rebuild-rpm-database/)
- [System Update](https://docs.cpanel.net/whm/software/system-update/)
- [The check\_cpanel\_pkgs Script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/)
- [The find\_and\_fix\_rpm\_issues Script](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×