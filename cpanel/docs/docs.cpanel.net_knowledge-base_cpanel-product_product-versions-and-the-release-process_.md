---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/"
title: "Product Versions and the Release Process | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#main-content)

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
3. [cPanel Product](https://docs.cpanel.net/knowledge-base/cpanel-product/)
4. Product Versions and the Release Process


[tiers](https://docs.cpanel.net/tags/tiers/) [updates](https://docs.cpanel.net/tags/updates/) [versions](https://docs.cpanel.net/tags/versions/) [dnsonly](https://docs.cpanel.net/tags/dnsonly/) [lts](https://docs.cpanel.net/tags/lts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#overview)

* * *

[Version numbers](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#version-numbers)

* * *

[Releases](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#releases)

* * *

[Release tiers](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#release-tiers)

* * *

[LTS](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#lts)

* * *

[Extended Lifecycle Support (ELS) program](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#extended-lifecycle-support-els-program)

* * *

[STABLE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#stable)

* * *

[RELEASE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#release)

* * *

[CURRENT](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#current)

* * *

[EDGE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#edge)

* * *

[Production release process](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#production-release-process)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#overview)

* * *

[Version numbers](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#version-numbers)

* * *

[Releases](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#releases)

* * *

[Release tiers](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#release-tiers)

* * *

[LTS](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#lts)

* * *

[Extended Lifecycle Support (ELS) program](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#extended-lifecycle-support-els-program)

* * *

[STABLE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#stable)

* * *

[RELEASE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#release)

* * *

[CURRENT](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#current)

* * *

[EDGE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#edge)

* * *

[Production release process](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#production-release-process)

* * *

## Product Versions and the Release Process

Last modified: _2025 September 29_

* * *

## Overview

To make decisions about updating your server, you must understand cPanel & WHM’s versions and releases.

Important:

You **can’t** downgrade a cPanel & WHM installation between major versions **or** release tiers.

## Version numbers

A cPanel & WHM version number consists of three or four incremented integer values. Periods (`.`) separate each value.

![Version Numbers](https://docs.cpanel.net/img/foursegmentversionnumbers.png)

This version number contains the following parts:

| Value | Description |
| --- | --- |
| Parent Value | The parent value is from our previous version numbering system and indicates a large group of major versions. <br>- We deprecated this part of our numbering system in cPanel & WHM version 11.52.<br>- In most cases, this value is optional.<br> You will usually only see this in configuration files, API function output, and package files. |
| Major Value | Each major value indicates a new set of features. We often refer to the builds in this as a release or the major version. <br>- **Odd** major values are development releases that appear on the [EDGE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#edge) release tier. For more information, read the [LTS](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#lts) section below.<br>- **Even** major values are production releases that appear in **all** release tiers. |
| Minor Value | The minor value is always `0` for cPanel & WHM installations. |
| Build Value | The build value indicates a unique build of cPanel & WHM. <br>Note:<br>Some references to version numbers may omit the build value. |

## Releases

We release versions of cPanel & WHM across several architectures. We also may publish several versions across different tiers on the same day.

The following table contains the most recent cPanel & WHM release versions:

| cPanel & WHM Version | Approximate Release Date | Approximate End of Life Date |
| --- | --- | --- |
| 110 (LTS) | March 2023 | December 2026 |
| 118 (LTS) | January 2024 | October 2025 |
| 126 (LTS) | January 2025 | August 2026 |
| 130 | June 2025 | December 2025 |
| 132 | September 2025 | March 2026 |

Note:

- If your server uses the [RELEASE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#release), [STABLE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#stable), or [LTS](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#lts) tiers, the system applies a delay of several business days before your automatic upgrade occurs. For more information, read our [Update Preferences](https://docs.cpanel.net/whm/server-configuration/update-preferences) documentation.
- The LTS tier uses the most recently released LTS version. Servers that use the LTS tier update to the next version of LTS when it comes available. This may happen **before** their current version reaches End of Life (EOL).
- Whenever possible, we do **not** release new versions on international holidays and weekends (Thursday evening through Sunday afternoon).

## Release tiers

We release cPanel & WHM through five publicly-available tiers. This allows server owners to select their preferred update frequency as we develop and publish new versions of cPanel & WHM.

- Use WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences) interface ( _WHM » Home » Server Configuration » Update Preferences_) to select a release tier.
- When a release of cPanel & WHM no longer exists in any tier and reaches EOL, it becomes unsupported. Unsupported versions **don’t** receive security updates or bug fixes.
- When a version of cPanel & WHM is about to reach its EOL, you will receive an email notification about it. However, previous versions of cPanel & WHM are **not** EOL until the upcoming version reaches [RELEASE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#release) tier.

You can choose from the following release tiers:

### LTS

Use this tier to select a single cPanel & WHM version for the year during which WebPros International, LLC supports it. We only ship **one** LTS version per year.

- Over the lifespan of an LTS release, WebPros International, LLC will provide security and other critical updates. We won’t add new features to LTS releases unless they’re critical. We also provide updates for compatibility with later versions.
- Only one release each year qualifies for LTS. Other versions will **only** receive updates in the [STABLE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#stable), [RELEASE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#release), [CURRENT](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#current), or [EDGE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#edge) tiers.

#### LTS support

We follow these guidelines to provide LTS support:

- In general, the lifespan of each release ends 6 months after the most recent LTS release is promoted to the RELEASE tier.






Note:




As an exception, the lifespan of cPanel & WHM version 110 extends through **January 1, 2027** under the [Extended Lifecycle Support program](https://cpanel.net/blog/announcements/extended-lifecycle-support-oses-update/).


- WebPros International, LLC may extend a version’s LTS period at our discretion.
- Development releases of cPanel & WHM do **not** qualify for LTS. We don’t use their publication dates to calculate an LTS version’s lifespan.

#### LTS updates for other applications

We provide LTS updates for the following applications:

##### Third-party applications

cPanel & WHM provides various third-party applications. For supported LTS releases, we provide critical updates for third-party applications. We may provide them as backported patches instead of upgrades.

##### EasyApache

WebPros International, LLC releases EasyApache separately from cPanel & WHM’s release schedule. We provide EasyApache updates for an LTS release until the LTS release reaches EOL.

- If the LTS version **doesn’t** meet EasyApache’s requirements, EasyApache will update. However, we can’t support that update.
- EasyApache 4 adheres to the [php.net supported versions timeline](https://php.net/supported-versions.php). The profiles that we supply in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_) **only** provide PHP versions that [php.net](https://www.php.net/) currently supports.
Packages for unsupported versions of PHP will remain on the WebPros International, LLC mirrors and servers. We will **not** provide any further updates.

##### cPAddons and WHM plugins

We release updates for cPAddons and WHM plugins throughout the LTS release’s lifetime.

### Extended Lifecycle Support (ELS) program

All CentOS 7 and CloudLinux 7 servers on cPanel version 110 are enrolled in the ELS program. These servers will continue to receive critical security updates from July 1, 2024 through January 1, 2027 to minimize risks to the hosting environment. cPanel & WHM servers that qualify will receive critical security updates for the operating system. These servers will also receive critical security updates and technical support for cPanel & WHM version 110.

We recommend updating these servers to a [supported operating system](https://docs.cpanel.net/installation-guide/system-requirements) as soon as possible. To upgrade, you can use our [Migration Tools](https://docs.cpanel.net/whm/transfers/transfer-tool) or the cPanel [ELevate](https://cpanel.github.io/elevate/) tool.

### STABLE

This version has undergone public exposure, testing, and verification. We publish this tier less often than [RELEASE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#release).

### RELEASE

Important:

New installations default to this tier.

This version is feature-complete and we have tested it thoroughly. It contains all intended features and functionality. We publish this tier more often than [STABLE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#stable).

### CURRENT

This version has received verification and testing. We publish this tier more often than [RELEASE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#release).

- Some of this version’s features may still be in development.
- This tier represents the “Release Candidate” tier that other publication schedules use.

### EDGE

Warning:

Due to the dynamic nature of EDGE builds, **only use EDGE for testing in a controlled environment**. We do **not** recommend this tier for production servers.

This version has **only** received **rudimentary** testing. We publish this tier most often (up to several times per week).

- This version contains features that we plan to change further.
- This version may not include all features or official public documentation.

## Production release process

We use the following process to develop and manage production releases:

1. We complete development and testing of the production release.
2. We publish the release to the development and EDGE tiers.
3. We publish the release to the [CURRENT](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#current) tier. At this point, we stop developing or publishing non-critical changes to those releases.
4. After the release enters the [RELEASE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#release) tier, we assess any immediate maintenance needs.
5. After we resolve those maintenance needs, we publish to the [STABLE](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#stable) and, annually, [LTS](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#lts) tiers.

Note:

In addition to everything in the previous production release, **development** releases of cPanel & WHM include changes from the next planned production release. We publish **all** development release changes to the **EDGE** tier.

#### Additional Documentation

* * *

- [Change Log](https://docs.cpanel.net/whm/cpanel/change-log/)
- [Rebuild RPM Database](https://docs.cpanel.net/whm/software/rebuild-rpm-database/)
- [System Update](https://docs.cpanel.net/whm/software/system-update/)
- [Update Preferences](https://docs.cpanel.net/whm/server-configuration/update-preferences/)
- [Upgrade to Latest Version](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×