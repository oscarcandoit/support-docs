---
url: "https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/"
title: "The EasyApache 4 Git Repository and Build Updates | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#main-content)

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
3. [Git Repositories](https://docs.cpanel.net/ea4/git-repositories/)
4. The EasyApache 4 Git Repository and Build Updates


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [ea4](https://docs.cpanel.net/tags/ea4/) [versioncontrol](https://docs.cpanel.net/tags/versioncontrol/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#overview)

* * *

[EasyApache 4 repositories](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#easyapache-4-repositories)

* * *

[EasyApache 4 build notifications](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#easyapache-4-build-notifications)

* * *

[Build an EasyApache 4 RPM](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#build-an-easyapache-4-rpm)

* * *

[Software collections](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#software-collections)

* * *

[Implement multiple repositories](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#implement-multiple-repositories)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#overview)

* * *

[EasyApache 4 repositories](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#easyapache-4-repositories)

* * *

[EasyApache 4 build notifications](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#easyapache-4-build-notifications)

* * *

[Build an EasyApache 4 RPM](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#build-an-easyapache-4-rpm)

* * *

[Software collections](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#software-collections)

* * *

[Implement multiple repositories](https://docs.cpanel.net/ea4/git-repositories/the-easyapache-4-git-repository-and-build-updates/#implement-multiple-repositories)

* * *

## The EasyApache 4 Git Repository and Build Updates

Last modified: _2025 February 13_

* * *

## Overview

This document explains how the EasyApache 4 build process works and how you can receive updates when we update the Git™ [repositories](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#repository).

## EasyApache 4 repositories

EasyApache 4 uses many Git repositories, which each include `main` and `production` branches.

- The `production` branch is the primary branch. It contains changes that are ready for the public to use.
- The `main` branch provides a preview of upcoming releases. It is useful to integrators who require time to adjust their own products.

When we merge a change into either the `main` or `production` branch of an EasyApache 4 repository, the system builds the change into a package. If the package builds successfully, the system then pushes the change upstream into the corresponding branch in [the GitHub® repository](https://github.com/cpanelinc). The system then sends a notification of the change to that branch’s mailing list.

## EasyApache 4 build notifications

We send notifications when we make changes to the EasyApache 4 repositories. The emails contain the following information:

- The commit message or messages.
- The updated package with a shortened [commit SHA](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits).

To receive notifications when we update a repository, subscribe to one of our notification mailing lists.

- [Main](mailto:ea4development-announce-subscribe@cpanel.net?subject=subscribe) — This list reports any changes to the `main` branch. These changes are not ready for public use.

- [Production](mailto:ea4production-announce-subscribe@cpanel.net?subject=subscribe) — This list reports any changes to the `production` branch.


Note:

These mailing lists generate a large amount of traffic. We strongly recommend that you keep the list in `digest` mode.

## Build an EasyApache 4 RPM

Important:

- Only attempt to create your own [RPM Package Manager (RPM)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#rpm-package-manager-rpm) if you are an experienced system administrator. An incorrect configuration can cause your system to become unstable.
- We do not provide support for custom RPMs or instructions on how to build them.
- You can also build your RPMs with the source RPMs that our OBS repository provides. We **strongly** recommend that you only use the GitHub RPMs.

EasyApache 4 allows custom-built RPMs. Most users will not build their own RPMs, but if you require a custom configuration, you can use this option.

After you customize an RPM, you can build it with one of the following tools:

- [rpmbuild](https://linux.die.net/man/8/rpmbuild)
- [Mock](https://fedoraproject.org/wiki/Mock)
- [OBS](https://en.opensuse.org/openSUSE:Build_Service_Tutorial)
- [Koji](https://fedoraproject.org/wiki/Koji)
- [mash](https://pagure.io/mash)

After you successfully build and package your RPM or [Software Collection (SCL)](https://docs.cpanel.net/knowledge-base/scripts-and-utilities/the-scl-utility), upload it to your own repository. For more information, read our [Package Manager Basics](https://docs.cpanel.net/ea4/basics/package-manager-basics) documentation.

### Software collections

Warning:

- You **must** package any software language RPMs as an SCL.
- You **cannot** create an Apache collection as an SCL.
- You **cannot** use SCLs on servers that run Ubuntu®.

An SCL is an alternate path inside the `/opt` file that the full file system a software requires. When you enable an SCL, it adds its alternate path within that environment. The following situations use an SCL’s alternate path to determine its software version:

- Commands that do not specify a path.
- Scripts that use the `/usr/bin/env` file to determine their path.

EasyApache 4’s MultiPHP system **requires** an `ea-` prefix on all SCLs **except** PHP SCLs, allowing the use of vendor-provided packages for PHP **only**. Read our [About PHP](https://docs.cpanel.net/ea4/php/about-php/) documentation to learn more about vendor-provided PHP SCLs.

Regardless of whether an SCL uses a PHP vendor-provided prefix or the standard `ea-` prefix, Software Collection standards determine the rest of the name. We **strongly** recommend that you use the same naming convention for Apache packages.

### Implement multiple repositories

If you wish to use cPanel EasyApache 4 repositories alongside a personal or third-party repository, you must adhere to the following restrictions:

- Do not modify or remove the `ea-profiles-cpanel` package. EasyApache 4 requires this package to function.
- You must name your packages with the `ea-profiles-vendor` syntax, where `vendor` represents a vendor’s name.
- The package must install your profiles in the `/etc/cpanel/ea4/profiles/vendor/vendorname` directory, where `vendorname` represents a vendor’s name.

#### Additional Documentation

* * *

- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Configure cPanel Cron Jobs](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/)
- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×