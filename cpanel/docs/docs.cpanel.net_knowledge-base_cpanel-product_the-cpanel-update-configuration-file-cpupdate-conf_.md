---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf/"
title: "The cPanel & WHM Update Configuration File - cpupdate.conf | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf/#main-content)

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
4. The cPanel & WHM Update Configuration File - cpupdate.conf


[spamassassin](https://docs.cpanel.net/tags/spamassassin/) [rpms](https://docs.cpanel.net/tags/rpms/) [updates](https://docs.cpanel.net/tags/updates/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf/#overview)

* * *

[How to edit the configuration file](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf/#how-to-edit-the-configuration-file)

* * *

[File format](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf/#file-format)

* * *

[Configuration values](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf/#configuration-values)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf/#overview)

* * *

[How to edit the configuration file](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf/#how-to-edit-the-configuration-file)

* * *

[File format](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf/#file-format)

* * *

[Configuration values](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf/#configuration-values)

* * *

## The cPanel & WHM Update Configuration File - cpupdate.conf

Last modified: _2024 February 19_

* * *

## Overview

The `/etc/cpupdate.conf` file on your server determines how cPanel & WHM updates the following system components:

- cPanel & WHM itself.
- Installed packages (Package Manager files).
- Apache SpamAssassin™ rules.

## How to edit the configuration file

Each line of the `/etc/cpupdate.conf` file determines how cPanel & WHM updates the specified system component. You can edit this file with your preferred text editor.

### File format

The `/etc/cpupdate.conf` file’s format is similar to the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```text<br>CPANEL=release<br>RPMUP=daily<br>SARULESUP=daily<br>STAGING_DIR=/usr/local/cpanel<br>UPDATES=daily<br>``` |

Notes:

- Each `KEY=value` pair is on a separate line.
- A single equals sign (=) separates the uppercase `KEY` and lowercase `value`.
- The file **must not** contain spaces.
- In the example above, `/usr/local/cpanel` is the default staging directory for the `/etc/cpupdate.conf` file.

### Configuration values

The following keys and values determine how to update specified components of the system:

##### CPANEL

This setting determines the server’s release tier or product version. The `CPANEL` setting appears in WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences) interface ( _WHM » Home » Server Configuration » Update Preferences_) as the _Release Tier_ setting.

You can specify either of the following value types:

- A release tier name (`edge`, `current`, `release`, `stable`, or `lts`), to ensure that your server always uses the appropriate version for that tier.
- A cPanel & WHM version number, to specify an exact version (for example, `118`, `11.118`, or `118.123.45`)






Warning:





You **must** enter supported version number. Specifying an unsupported version number will cause the installation to **fail**. For more information, read our [Product Versions and the Release Process](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/) documentation.


For example:

```text
CPANEL=release
```

For the latest information on cPanel & WHM version numbers and tiers, see the _Latest cPanel & WHM Builds (All Architectures)_ table in the [cPanel Downloads](http://httpupdate.cpanel.net/) page.

##### RPMUP

This setting determines how to update the operating system’s packages. The `/usr/local/cpanel/scripts/update-packages` script uses this value.

You can specify one of the following values:

- `daily` — Update packages daily.
- `manual` — Update packages manually (for example, via the command line).
- `never` — Prevent both automatic and manual updates to packages.

For example:

```text
RPMUP=daily
```

##### SARULESUP

This setting determines how to update Apache SpamAssassin™ rules. The `/usr/local/cpanel/scripts/sa-update_wrapper` script uses this value.

You can specify one of the following values:

- `daily` — Update rules daily.
- `manual` — Update rules manually (for example, via the command line).
- `never` — Prevent both automatic and manual updates to rules.

For example:

```text
SARULESUP=daily
```

##### STAGING\_DIR

This setting determines the location of the staging directory for the update files. The default staging directory value is `/usr/local/cpanel`.

The `STAGING_DIR` setting appears in WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences) interface ( _WHM » Home » Server Configuration » Update Preferences_) as the _Staging Directory_ setting.

You can specify any valid path. In this example, `/valid/path` stands for the valid path that you wish to use.

```text
STAGING_DIR=/valid/path
```

##### UPDATES

This setting determines how to update cPanel & WHM when updates become available. The `/usr/local/cpanel/scripts/upcp` script uses this value.

You can specify one of the following values:

- `daily` — Update cPanel & WHM daily.
- `manual` — Update cPanel & WHM manually (for example, via the command line).

For example:

```text
UPDATES=daily
```

#### Additional Documentation

* * *

- [Rebuild RPM Database](https://docs.cpanel.net/whm/software/rebuild-rpm-database/)
- [System Update](https://docs.cpanel.net/whm/software/system-update/)
- [The check\_cpanel\_pkgs Script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script/)
- [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/)
- [The find\_and\_fix\_rpm\_issues Script](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×