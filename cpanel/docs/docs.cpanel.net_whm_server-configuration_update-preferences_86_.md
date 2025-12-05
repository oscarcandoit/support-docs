---
url: "https://docs.cpanel.net/whm/server-configuration/update-preferences/86/"
title: "Update Preferences | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/#main-content)

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
3. [Server Configuration](https://docs.cpanel.net/whm/server-configuration/)
4. Update Preferences


[updates](https://docs.cpanel.net/tags/updates/) [server](https://docs.cpanel.net/tags/server/) [versions](https://docs.cpanel.net/tags/versions/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/#overview)

* * *

[Release Tier](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/#release-tier)

* * *

[Automatic update delay](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/#automatic-update-delay)

* * *

[Staging Directory](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/#staging-directory)

* * *

[Send my settings to all configuration cluster servers](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/#send-my-settings-to-all-configuration-cluster-servers)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/#overview)

* * *

[Release Tier](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/#release-tier)

* * *

[Automatic update delay](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/#automatic-update-delay)

* * *

[Staging Directory](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/#staging-directory)

* * *

[Send my settings to all configuration cluster servers](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/#send-my-settings-to-all-configuration-cluster-servers)

* * *

## Update Preferences

![](https://docs.cpanel.net/img/whm-icons/update_preferences.svg)

_Valid for versions 86 through 116_

#### Version:

#### [86](https://docs.cpanel.net/whm/server-configuration/update-preferences/86/)

#### [118](https://docs.cpanel.net/whm/server-configuration/update-preferences/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Use this interface to define how your server performs software updates and upgrades.

Warning:

- Before upgrading your server’s cPanel & WHM version, make sure that the new version is compatible with your system. We recommend staging the upgrade on a test system before upgrading your production system.

- After you upgrade to a new major version of cPanel & WHM, you **cannot** downgrade to a previous major version. An icon appears next to the description if the tier represents a downgrade.

- If you are upgrading from a very old version of cPanel & WHM, you may experience problems.
  - To resolve this issue, manually upgrade to an intermediate version using the [`/etc/cpupdate.conf`](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf) file. Then, you can proceed to the final target version.
  - If you need assistance, contact [cPanel Technical Support](http://tickets.cpanel.net/).
- cPanel & WHM installs the at daemon (`atd`) during the update process. This daemon validates the system’s health after each update. If the update analysis process encounters errors, the at daemon emails a report to you.

- A warning message will appear if automatic updates are disabled. To reenable updates, click _Enable automatic updates_.


## Release Tier

Use this section of the interface to select a release tier and control how system updates. It also displays important update information. The release tier controls when the system upgrades cPanel & WHM.

- If your update includes more than one major cPanel & WHM version, the system upgrades your server to each intermediate version.
- For more information about update requirements, read our [Upgrade Blockers](https://docs.cpanel.net/knowledge-base/cpanel-product/upgrade-blockers) documentation.
- For more information about releases and release tiers, read our [Product Versions and the Release Process](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/) documentation.

Select a cPanel & WHM tier that matches your requirements.

Note:

If you specify a cPanel & WHM build number in the [`/etc/cpupdate.conf`](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf) file instead of a tier name, you will see a _Custom_ row in the _Release Tier_ table.

- This is **not** a named release tier.

- We **strongly** recommend that you update your server to a cPanel-provided release tier. Custom version numbers often become out-of-date.


You can select from the following cPanel & WHM release tiers:

| Release Tier | Description |
| --- | --- |
| LTS | Long-Term Support (LTS). Use this tier to select a single cPanel & WHM version for the year during which WebPros International, LLC supports it. We only ship **one** LTS version per year. |
| STABLE | This version has received considerable public exposure, testing, and verification. We publish this tier less often than RELEASE. |
| RELEASE | This version is feature-complete and we have tested it thoroughly. It contains all intended features and functionality. We publish this tier more often than STABLE. <br>Note:<br>New installations default to this tier. |
| CURRENT | We have tested and verified this version. However, it may not contain the proposed functionality of the release. We publish this tier more often than RELEASE. |
| EDGE | We only perform rudimentary testing on this version. We may significantly change these features in future releases. We publish this tier often (up to several times per week). <br>Warning:<br>Due to the dynamic nature of EDGE builds, **only use EDGE for testing in a controlled environment**. We do **not** recommend this tier for production servers. |

### Automatic update delay

To ensure the best quality support, automatic upgrades to subsequent major versions of cPanel & WHM do not always occur immediately. If your server uses the RELEASE, STABLE, or LTS tiers, the system applies a delay of several business days before your automatic upgrade occurs. The system randomly selects the length of your delay.

The system applies a delay if **all** of the following statements are true:

- You use the **RELEASE, STABLE, or LTS** tiers.







Note:





Servers on the EDGE or CURRENT tiers, or that use a specific build or version instead of a named tier, won’t experience delays.

- You don’t run the upgrade manually.

- Upgrading will only update the server by one major version (for example, from version 78 to version 80).

- You do not run the upgrade with either:
  - The `--force` option when you run the `/scripts/upcp` script.
  - The _Force_ setting in WHM’s [_Upgrade to Latest Version_](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version) interface ( _WHM » Home » cPanel » Upgrade to Latest Version_).

When we release a major version, you may perform any of the following actions:

- Use either of the following methods to update immediately:
  - The `--force` option when you run the `/scripts/upcp` script.
  - The _Force_ setting in WHM’s [_Upgrade to Latest Version_](https://docs.cpanel.net/whm/cpanel/upgrade-to-latest-version) interface ( _WHM » Home » cPanel » Upgrade to Latest Version_).
- Do nothing to allow the automatic upgrade to occur.
- To prevent future delayed upgrades, change your release tier.

## Staging Directory

The upgrade process stages necessary update files before it applies the update. This setting determines where the system places the staging files.

Note:

If this directory doesn’t have enough disk space, the system selects a different directory for the next attempt.

To select the staging directory, perform either of the following actions:

- Enter a new directory in the _Directory_ text box. If it doesn’t exist, the system creates the `.cpanel__HOSTNAME__upcp_staging` subdirectory, where `HOSTNAME` is server’s hostname.

- Select a partition in the _Available Partitions_ table. The path to the selected partition will appear in the _Directory_ text box.


### Send my settings to all configuration cluster servers

Select this checkbox to send your _Update Preferences_ settings to all of the servers that currently exist in your configuration cluster.

Note:

The interface only displays the _Send my settings to all configuration cluster servers_ checkbox if you have already added additional servers to the configuration cluster with WHM’s [_Configuration Cluster_](https://docs.cpanel.net/whm/clusters/configuration-cluster) interface ( _WHM » Home » Clusters » Configuration Cluster_).

When you select this option, the interface may require several seconds to load when you click _Save_, and will then display a confirmation message.

- Click _Show Details_ to view the status of each server in the configuration cluster.
- An error icon (![Error Icon](https://docs.cpanel.net/img/error.png)) in the _Status_ column indicates that the server **failed** to receive the settings.
- The _Message_ column displays additional information about servers that failed.

#### Additional Documentation

* * *

- [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/)
- [Change Log](https://docs.cpanel.net/whm/cpanel/change-log/)
- [Rebuild RPM Database](https://docs.cpanel.net/whm/software/rebuild-rpm-database/)
- [System Update](https://docs.cpanel.net/whm/software/system-update/)
- [Update Preferences](https://docs.cpanel.net/whm/server-configuration/update-preferences/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×