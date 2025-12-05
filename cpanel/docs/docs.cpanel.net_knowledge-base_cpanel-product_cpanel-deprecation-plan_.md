---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/"
title: "cPanel Deprecation Plan | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#main-content)

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
4. cPanel Deprecation Plan


[tiers](https://docs.cpanel.net/tags/tiers/) [versions](https://docs.cpanel.net/tags/versions/) [dnsonly](https://docs.cpanel.net/tags/dnsonly/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#overview)

* * *

[Planned deprecations and removals](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#planned-deprecations-and-removals)

* * *

[Deprecated and removed features](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#deprecated-and-removed-features)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#overview)

* * *

[Planned deprecations and removals](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#planned-deprecations-and-removals)

* * *

[Deprecated and removed features](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#deprecated-and-removed-features)

* * *

## cPanel Deprecation Plan

Last modified: _2025 November 19_

* * *

## Overview

To improve our ability to support our customers and provide the best possible experience, we sometimes remove features from cPanel & WHM. When possible, we attempt to provide advance notice of any deprecations or removals. Check this document often for updates.

We use the following terminology to describe features that we plan to remove from cPanel & WHM:

- **Deprecated** — We no longer recommend the feature and, in most cases, plan to remove it from cPanel & WHM soon.
  - Because we ceased active development on the feature, we are unlikely to provide future bug fixes.
  - Update any customizations on your server that use or depend on the feature **as soon as possible**.
- **Removed** — We have removed the feature from the cPanel & WHM codebase.
  - We will **not** fix bugs.
  - In most cases, you **cannot** use the feature.
  - Any customizations on your server that continue to use or depend on the feature **will** experience problems.

## Planned deprecations and removals

We currently plan to deprecate or remove the following features in future cPanel & WHM versions:

| Feature | Recommended action | Deprecation | Removal |
| --- | --- | --- | --- |
| Rocky Linux 8 | Migrate to Almalinux. We plan to provide a process to migrate via [cPanel® ELevate](https://cpanel.github.io/elevate/). We will provide an update when cPanel® ELevate is ready to support the migration. | cPanel & WHM version 134 | cPanel & WHM version 136 |
| Rocky Linux 9 | Migrate to Almalinux. We plan to provide a process to migrate via [cPanel® ELevate](https://cpanel.github.io/elevate/). We will provide an update when cPanel® ELevate is ready to support the migration. | cPanel & WHM version 134 | cPanel & WHM version 136 |
| _Site Publisher_ | Use cPanel’s [_Sitejet Builder_](https://docs.cpanel.net/cpanel/domains/sitejet-builder/) interface. | cPanel & WHM version 132 | cPanel & WHM version 134 |
| Ubuntu® 22.04 LTS | Upgrade to [Ubuntu 24.04 LTS](https://releases.ubuntu.com/noble/). | cPanel & WHM version 132 | cPanel & WHM version 136 |
| _ConfigServer Security & Firewall_ (CSF) plugin | Use the [latest GPLv3 version](https://github.com/waytotheweb/scripts/tree/main/csf) of CSF. Older versions of CSF will no longer function. | 31 August 2025 | TBD |
| _Change Language_ interface | Use the [_Account Preferences_](https://docs.cpanel.net/cpanel/preferences/account-preferences) interface to change the language of your cPanel interface. | cPanel & WHM version 128 | TBD |
| Roundcube with MySQL® database backend | Convert Roundcube to use an [SQLite database backend](https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite/). | cPanel & WHM version 120 | TBD |
| Z-Push - ActiveSync Support plugin | Use the third-party [DAVx5 client for Android™](https://www.davx5.com/). | cPanel & WHM version 118 | TBD |
| MySQL 5.7 | MySQL 5.7 reached End of Life in October 2023. You can no longer select MySQL 5.7 for new installations. [Update your local MySQL servers](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/) and [your remote MySQL servers](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/) to use [a supported version](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/). | cPanel & WHM version 118 | TBD |
| MariaDB® 10.3 | MariaDB 10.3 reached End of Life in May 2023. You can no longer select MariaDB 10.3 for new installations. [Update your local MariaDB servers](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/) and [your remote MariaDB servers](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/) to use [a supported version](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/). | cPanel & WHM version 118 | TBD |
| Legacy locales | [Switch](https://docs.cpanel.net/cpanel/preferences/change-language/) to a supported language. cPanel & WHM officially supports the following languages:<br>- English<br>- German<br>- Indonesian<br>- Japanese<br>- Portuguese<br>- Russian<br>- Spanish<br>- Turkish<br>Note:<br>New translations will replace legacy locales as they become available. | cPanel & WHM version 106 | TBD |
| cPAddons | Install WHMCS [manually](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#install-whmcs-manually). Install WP Toolkit with one of our [supported methods](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/#install-wp-toolkit). | cPanel & WHM version 104 | TBD |
| _Install cPAddons Site Software_ | Install WHMCS [manually](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#install-whmcs-manually). Install WP Toolkit with one of our [supported methods](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/#install-wp-toolkit). | cPanel & WHM version 104 | TBD |
| _Site Software_ | Install WHMCS [manually](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#install-whmcs-manually). Install WP Toolkit with one of our [supported methods](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/#install-wp-toolkit). | cPanel & WHM version 104 | TBD |
| _Manage cPAddons Site Software_ | Install WHMCS [manually](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#install-whmcs-manually). Install WP Toolkit with one of our [supported methods](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/#install-wp-toolkit). | cPanel & WHM version 104 | TBD |
| MariaDB 10.2 | MariaDB 10.2 reached End of Life on May 23, 2022. You can no longer select MariaDB 10.2 for new installations. [Update your local MariaDB servers](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/) and [your remote MariaDB servers](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/) to use [a supported version](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/). | cPanel & WHM version 106 | TBD |
| MariaDB 10.1 | MariaDB 10.1 reached End of Life on October 17, 2020. You can no longer select MariaDB 10.1 for new installations. [Update your local MariaDB servers](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/) and [your remote MariaDB servers](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/) to use [a supported version](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/). | cPanel & WHM version 90 | TBD |
| MariaDB 10.0 | MariaDB 10.0 reached End of Life on March 31, 2019. You can no longer select MariaDB 10.0 for new installations. [Update your local MariaDB servers](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/) and [your remote MariaDB servers](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/) to use [a supported version](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/). | cPanel & WHM version 88 | TBD |
| MySQL 5.6 | MySQL 5.6 reached End of Life in February 2021. You can no longer select MySQL 5.6 for new installations, and cannot upgrade servers running MySQL 5.6 to use [cPanel & WHM version 132 or later](https://docs.cpanel.net/knowledge-base/cpanel-product/upgrade-blockers/). [Update your local MySQL servers](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/) and [your remote MySQL servers](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/) to use [a supported version](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/). | cPanel & WHM version 88 | TBD |
| _Ruby Gem Installer_ | Read our [How to Create Ruby Web Applications](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/) documentation for information on working with Ruby Gems. | cPanel & WHM version 66 | TBD |
| _Ruby on Rails®_ | Read our [How to Create Ruby Web Applications](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/) documentation for information on creating and deploying a Ruby on Rails application. | cPanel & WHM version 66 | TBD |
| _RubyGems_ | Read our [How to Create Ruby Web Applications](https://docs.cpanel.net/knowledge-base/web-services/how-to-create-ruby-web-applications/) documentation for information on working with Ruby Gems. | cPanel & WHM version 66 | TBD |
| cPanel & WHM’s Mongrel Ruby code base | Use cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager/) interface ( _cPanel » Home » Software » Application Manager_) to manage Phusion Passenger™ Ruby applications. | cPanel & WHM version 64 | TBD |
| MySQL 5.5 | MySQL 5.5 reached End of Life on December 31, 2018. You can no longer select MySQL 5.5 for new installations, and cannot upgrade servers running MySQL 5.5 to use [cPanel & WHM version 132 or later](https://docs.cpanel.net/knowledge-base/cpanel-product/upgrade-blockers/). [Update your local MySQL servers](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/) and [your remote MySQL servers](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/) to use [a supported version](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/). | cPanel & WHM version 11.52 | TBD |

## Deprecated and removed features

We have completed the deprecation or removal of the following features in recent cPanel & WHM versions:

| Feature | Recommended action | Deprecation | Removal |
| --- | --- | --- | --- |
| PHP Composer | Install [Composer](https://getcomposer.org/download/) manually. | cPanel & WHM version 130 | cPanel & WHM version 130 |
| Apple® Push Notifications | None. cPanel & WHM no longer supports iOS Mail push notifications due to the following upstream changes:<br>- Apple [no longer supports](https://developer.apple.com/news/?id=11042019a) the Apple Push Notification service (APNs) legacy API for sending push notifications.<br>- Apple has [discontinued macOS Server](https://support.apple.com/en-us/HT208312). | cPanel & WHM version 126 | cPanel & WHM version 126 |
| Python 2 | Verify that all Python scripts and commands use the OS-provided version of Python 3. This includes any plugins or applications that use the `cpsrvd` daemon.<br>Note:<br>New installations of cPanel & WHM will **not** automatically install Python 2 packages. | cPanel & WHM version 126 | cPanel & WHM version 126 |
| WHM’s _Tomcat Manager_ interface | Use Tomcat 10.1 with [containers](https://docs.cpanel.net/ea4/containers/tomcat-via-containers). | cPanel & WHM version 122 | cPanel & WHM version 122 |
| Calendar and Contacts Server (CCS) plugin | Use the [`cpdavd` service](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin) for CalDAV (calendars) and CardDAV (contacts). During the upgrade to cPanel & WHM version 120, servers that use the CCS plugin will automatically migrate all CCS data to a format compatible with the `cpdavd` service. | cPanel & WHM version 120 | cPanel & WHM version 120 |
| Z-Push - ActiveSync Support plugin | Use the third-party [DAVx5 application](https://www.davx5.com/) for Android™. For more information, read our [How to Synchronize Calendars and Contacts on Android Devices](https://docs.cpanel.net/knowledge-base/webmail/how-to-synchronize-calendars-and-contacts-on-android-devices/) documentation. | cPanel & WHM version 120 | cPanel & WHM version 120 |
| _Larry_ Roundcube theme | Use the _Elastic_ theme. The _Elastic_ theme is now the only available theme in Roundcube.<br>Note:<br>Roundcube [removed the _Larry_ theme](https://github.com/roundcube/roundcubemail/releases/tag/1.6-beta) in version 1.6. | cPanel & WHM version 120 | cPanel & WHM version 120 |
| Ability to add or delegate calendars in Roundcube | Use Webmail’s [_Calendars and Contacts Management_](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-management/) interface ( _Webmail » Calendars and Contacts Management_) to add calendars and Webmail’s [_Calendars and Contacts Sharing_](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/) interface ( _Webmail » Calendars and Contacts Sharing_) to share them. | cPanel & WHM version 120 | cPanel & WHM version 120 |
| Sectigo® AutoSSL provider | Use the [Let’s Encrypt™](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/#autossl-provider) provider.<br>Note:<br>- We automatically switched Sectigo AutoSSL users to Let's Encrypt in November 2024.<br>- As of December 31, 2024, the Sectigo AutoSSL provider no longer runs on **any** version of cPanel & WHM. | cPanel & WHM version 118 | cPanel & WHM version 120 |
| Ubuntu 20.04 LTS | Upgrade to [Ubuntu 22.04 LTS](https://ubuntu.com/server/docs/installation). | cPanel & WHM version 118 | cPanel & WHM version 120 |
| Internal PHP version 8.1 | Verify that all third-party plugins function with [internal PHP version 8.3](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/). | cPanel & WHM version 118 | cPanel & WHM version 118 |
| _Skeleton Directory_ interface | We have removed this interface in version 116 and later, but you can [still create and administer skeleton directories](https://docs.cpanel.net/whm/account-functions/skeleton-directory/#create-a-skeleton-directory) in cPanel & WHM. | N/A | cPanel & WHM version 116 |
| CentOS 7 and CloudLinux™ 7 | Migrate to an [AlmaLinux OS 8](https://cpanel.github.io/elevate/) server.<br>Note:<br>We **block** new cPanel & WHM installations and upgrades on CentOS 7 and CloudLinux 7 in cPanel & WHM version 112. We will support **existing** CentOS 7 and CloudLinux 7 servers running cPanel & WHM version 110 in our Extended Lifecycle Support program until January 1, 2027. For more information, read our [Extended Lifecycle Support OSes Update](https://cpanel.net/blog/announcements/extended-lifecycle-support-oses-update/) blog post. | cPanel & WHM version 106 | cPanel & WHM version 112 |
| Red Hat® Enterprise Linux® (RHEL) 7 | [Migrate](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/) to a [supported operating system](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system).<br>Note:<br>We **block** new cPanel & WHM installations on RHEL 7 in cPanel & WHM version 112 and have removed support for existing servers running this OS, as it has [reached its EOL (End of Life)](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system). | cPanel & WHM version 106 | cPanel & WHM version 112 |
| CloudLinux 6 | [Migrate](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/) to a [supported operating system](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system).<br>Note:<br>We **block** new cPanel & WHM installations on CloudLinux 6, and have removed support for existing servers running this OS, as it has [reached its EOL (End of Life)](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system). | cPanel & WHM version 106 | cPanel & WHM version 110 |
| HTML Editor | - cPanel & WHM versions 110 and 118: Use the Edit feature in cPanel’s [File Manager](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_).<br>- cPanel & WHM versions 126 and later: Use the experimental [HTML Editor](https://docs.cpanel.net/cpanel/files/html-editor). | cPanel & WHM version 110 | cPanel & WHM version 110 |
| Internal PHP version 7.4 | Verify that all third-party plugins function with internal PHP version 8.1.<br>Note:<br>This includes the removal of all PHP modules that Horde provides. For more information, read the _Horde webmail interface_ entry in this document. | cPanel & WHM version 110 | cPanel & WHM version 110 |
| Internal PHP version 7.3 | Verify that all third-party plugins function with [internal PHP version 8.1](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-php/110). | cPanel & WHM version 102 | cPanel & WHM version 110 |
| Horde webmail interface | Horde relies on PHP 7.4, which reached End-of-Life on November 28, 2022. Because of this, we have removed the Horde webmail interface. Use [Roundcube](https://docs.cpanel.net/webmail/webmail-clients/#roundcube) for Webmail. <br>Note:<br>The system will automatically [migrate all Horde calendars and contacts to Roundcube](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube) when the server updates to cPanel & WHM version 108. | cPanel & WHM version 108 | cPanel & WHM version 108 |
| PHP Version | Use the [_MultiPHP Manager for cPanel_](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/) interface to find your installed PHP versions. | cPanel & WHM version 108 | cPanel & WHM version 108 |
| CentOS 8 | CentOS 8 reached End of Life on December 31, 2021. Because of this, we blocked new installations of cPanel & WHM on CentOS 8 as of December 15, 2021. For more information, read our [What should I do if my OS has reached its EOL date?](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#what-should-i-do-if-my-os-has-reached-its-eol-date) documentation. | New installs blocked. | New installs blocked. |
| _Paper Lantern_ theme and all related styles | Use the [_Jupiter_](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/) theme. <br>Note:<br>When the server updates to version 108, the system will automatically assign all accounts set to `paper_lantern` to `jupiter`. | cPanel & WHM version 100 | cPanel & WHM version 108 |
| _Change Style_ interface | None. _Jupiter_ does not support custom styles. | cPanel & WHM version 100 | cPanel & WHM version 108 |
| _Addon Domains_, _Subdomains_, and _Aliases_ interfaces in the _Jupiter_ theme | Use the [_Domains_](https://docs.cpanel.net/cpanel/domains/domains) interface for addon domain, subdomain, and alias management. | cPanel & WHM version 100 | cPanel & WHM version 106 |
| MyDNS and NSD nameservers | Select _PowerDNS_ or _BIND_ in WHM’s [_Nameserver Selection_](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/) interface ( _WHM » Home » Service Configuration » Nameserver Selection_). Servers that still use MyDNS or NSD will automatically update to PowerDNS. | cPanel & WHM version 78 | cPanel & WHM version 106 |
| WHM’s _Change WebHost Manager Theme_ interface | WHM no longer supports non-default themes. | cPanel & WHM version 102 | cPanel & WHM version 102 |
| _WP Manager_ | Use [_WP Toolkit_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/). | cPanel & WHM version 92 | cPanel & WHM version 104 |
| The `sysinfo.config` file | We have removed this file and all references to this file from cPanel & WHM features and scripts. | cPanel & WHM version 100 | cPanel & WHM version 100 |
| WHM’s `wpt_convert` script | None. | cPanel & WHM version 98 | cPanel & WHM version 98 |
| WHM’s `wpt_license` script | None. | cPanel & WHM version 98 | cPanel & WHM version 98 |
| WHM’s `clean_cgiemail` script | None. | cPanel & WHM version 98 | cPanel & WHM version 98 |
| WHM’s _CloudLinux LVE Manager_ interface | Use WHM’s [_CloudLinux Manager_](https://docs.cpanel.net/whm/server-configuration/cloudlinux-manager) interface ( _WHM » Home » DNS Functions » CloudLinux Manager_). | cPanel & WHM version 96 | cPanel & WHM version 96 |
| WHM’s _Edit DNS Zone_ interface | Use WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_). | cPanel & WHM version 86 | cPanel & WHM version 96 |
| WHM’s _Edit MX Entry_ interface | Use WHM’s [_Email Routing Configuration_](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration) interface ( _WHM » Home » DNS Functions » Email Routing Configuration_). | cPanel & WHM version 96 | cPanel & WHM version 96 |
| WHM’s _Reset a DNS Zone_ interface | Use WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_). | cPanel & WHM version 96 | cPanel & WHM version 96 |
| WHM’s _Copy an Account From Another Server With an Account Password_ interface | Use WHM’s [_Transfer or Restore cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Transfers » Transfer or Restore a cPanel Account_). | cPanel & WHM version 88 | cPanel & WHM version 90 |
| WHM’s _Restore a Full Backup/cpmove File_ interface | Use WHM’s [_Transfer or Restore cPanel Account_](https://docs.cpanel.net/whm/transfers/transfer-or-restore-a-cpanel-account) interface ( _WHM » Home » Transfers » Transfer or Restore a cPanel Account_). | cPanel & WHM version 88 | cPanel & WHM version 90 |
| Standardized Hook - Universal Password Trap | Use the [`API::Module::function Cpanel`](https://api.docs.cpanel.net/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-cpanel-functions/) event or [the `Passwd` event](https://api.docs.cpanel.net/guides/guide-to-standardized-hooks/guide-to-standardized-hooks-hookable-events/guide-to-standardized-hooks-passwd-functions/) in your [Hook Action Code](https://api.docs.cpanel.net/guides/guide-to-standardized-hooks/). | cPanel & WHM version 11.48 | cPanel & WHM version 88 |
| CentOS 6 and Red Hat® Enterprise Linux® (RHEL) 6 | Use a newer version of a [supported operating system](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system). | cPanel & WHM version 72 | cPanel & WHM version 88 |
| cPanel API 1 | Use our [UAPI functions](https://api.docs.cpanel.net/cpanel/introduction/). For more information, read our [Guide to Replacing cPanel API 1 Functions with UAPI Equivalents](https://api.docs.cpanel.net/guides/quickstart-development-guide/tutorial-replace-a-cpanel-api-1-function-with-a-uapi-function/) documentation. | cPanel & WHM version 11.26 | cPanel & WHM version 88 |
| Amazon® Linux 1 | Use [the cPanel & WHM AWS Marketplace listing](https://go.cpanel.net/amazonAMI) for installations on the Amazon hyperscaler. | cPanel & WHM version 86 | cPanel & WHM version 88 |
| Internet Explorer 11 | Use the latest version of the Microsoft Edge web browser. | cPanel & WHM version 88 | cPanel & WHM version 88 |
| Internal PHP version 7.2 | Verify that all third-party plugins function with internal PHP version 7.3. | cPanel & WHM version 84 | cPanel & WHM version 84 |
| _EasyApache 3_ | Use [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/). | cPanel & WHM version 76 | cPanel & WHM version 78 |
| _SquirrelMail_ | Use Roundcube for Webmail. For more information, read our [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/) documentation. <br>Note:<br>By default, new installations of cPanel & WHM version 76 and later do **not** include SquirrelMail. | cPanel & WHM version 76 | cPanel & WHM version 78 |
| Internal PHP version 5.6 | Verify that all third-party plugins function with internal PHP version 7.2. | cPanel & WHM version 76 | cPanel & WHM version 76 |
| WHM’s _Show Active and Inactive Accounts_ interface | Use WHM’s [_List Accounts_](https://docs.cpanel.net/whm/account-information/list-accounts/) interface ( _WHM » Home » Account Information » List Accounts_) to view accounts on your server. | cPanel & WHM version 76 | cPanel & WHM version 76 |
| XML output in APIs | Use the JSON output format to call WHM API and cPanel API functions. | cPanel & WHM version 68 | cPanel & WHM version 74 |
| The cPanel-provided hardened-kernel update for the Linux® kernel | Use the [KernelCare “Extra” Patchset from CloudLinux™](https://www.cloudlinux.com/blog/entry/the-kernelcare-extra-patchset-with-symlink-protection-is-now-available). | cPanel & WHM version 68 | cPanel & WHM version 72 |
| TLS version 1.0 | Use TLS version 1.2 to connect to cPanel & WHM via SSL/TLS. | cPanel & WHM version 68 | cPanel & WHM version 72 |
| _cPAddon Moderation_ | Do **not** use the _Moderation_ section of WHM’s [_Manage cPAddons Site Software_](https://docs.cpanel.net/whm/cpanel/manage-cpaddons-site-software/) interface ( _WHM » Home » cPanel » Manage cPAddons Site Software_).<br>Note:<br>Any cPAddons that currently use this feature will continue to function. However, if you disabled moderation, you cannot reactivate it. | cPanel & WHM version 66 | N/A |
| Legacy Backups | Use WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_). <br>Note:<br>New installations of cPanel & WHM version 64 and later do **not** include the Legacy Backups system. | cPanel & WHM version 64 | N/A |
| WHM’s _Remote Access Hash_ interface | Use WHM’s [_Manage API Tokens_](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/) interface ( _WHM » Home » Development » Manage API Tokens_). <br>Note:<br>This interface and its use will **not** change on existing servers. On new installations of cPanel & WHM version 72 and later, we disable the _Allow deprecated WHM accesshash authentication_ setting in the _Security_ section of WHM's [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM >> Home >> Server Configuration >> Tweak Settings_), in order to prevent new use. | cPanel & WHM version 64 | N/A |
| _cPAddons - WordPress (Legacy)_ | Use cPAddons’ RPM-based WordPress® installation package. Servers that run cPanel & WHM version 64 or later automatically install this package. <br>Note:<br>- WHM's [_Install cPAddons Site Software_](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/) interface ( _WHM >> Home >> cPanel >> Install cPAddons Site Software_) displays the RPM-based WordPress cPAddon as WordPress.<br>- To convert your legacy WordPress cPAddon installations to the RPM-based WordPress cPAddon, use the `/scripts/migrate_legacy_wordpress_to_modern_wordpress` script. | cPanel & WHM version 64 | cPanel & WHM version 70 |
| cPanel’s _Simple Zone Editor_ interface | Use cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_). | cPanel & WHM version 62 | cPanel & WHM version 70 |
| cPanel’s _Advanced Zone Editor_ interface | Use cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_). | cPanel & WHM version 62 | cPanel & WHM version 70 |
| Internal Perl 5.24 | Update all third-party applications to ensure that they are compatible with Perl 5.26 and later. | N/A | cPanel & WHM version 70 |
| The `cgiemail` and `cgiecho` scripts | Use WHM’s `clean_cgiemail` script to remove these scripts from your server. | cPanel & WHM version 58 | cPanel & WHM version 68 |
| AOL Instant Messenger (AIM) | Use any other available contact method. | N/A | cPanel & WHM version 70 |
| MySQL 5.1 and earlier | Update your servers to use [a supported version](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/). | cPanel & WHM version 60 | cPanel & WHM version 62 |
| cPanel’s _CGI Center_ interface | Remove any CGI applications from your active cPanel accounts. | cPanel & WHM version 60 | cPanel & WHM version 64 |
| Earlier versions of ImageMagick® | - Update scripts that use ImageMagick to use GD.<br>- Update scripts that use ImageMagick to use the version of ImageMagick that ships with your operating system. | cPanel & WHM version 58 | cPanel & WHM version 62 |
| Internal Perl 5.18 | Update all third-party applications to ensure their compatibility with Perl 5.22 and later. | cPanel & WHM version 56 | cPanel & WHM version 58 |
| cPanel’s x3 theme | Update all of your servers’ cPanel accounts to use the new default cPanel theme.<br>Warning:<br>If you customize the cPanel interface, or if you develop custom cPanel plugins, update them to use the new theme. For more information, read our [Guide to cPanel Plugins](https://api.docs.cpanel.net/guides/guide-to-cpanel-plugins/) documentation. | cPanel & WHM version 11.52 | cPanel & WHM version 60 |
| BlackBerry® FastMail Service | Install the mobile version of your email client onto your phone. | cPanel & WHM version 11.52 | cPanel & WHM version 98 |
| CentOS 5, CloudLinux 5, and Red Hat® Enterprise Linux® (RHEL) 5 | Upgrade your servers to a newer version of your operating system. | cPanel & WHM version 56 | cPanel & WHM version 58 |
| 32-bit architectures for all supported operating systems | Upgrade your servers to use a 64-bit architecture. | cPanel & WHM version 56 | cPanel & WHM version 58 |
| _bandmin_ | Do **not** use the bandmin application. | N/A | cPanel & WHM version 58 |
| Ability to customize cPanel & WHM ports | Use the default secure ports for WHM (`2087`) and cPanel (`2083`). | N/A | cPanel & WHM version 58 |
| Earlier versions of suEXEC modules | Update your servers to use EasyApache 4. | N/A | cPanel & WHM version 58 |
| Microsoft® FrontPage® extensions | None. | cPanel & WHM version 11.46 | cPanel & WHM version 11.46 |
| stunnel | Because cPanel & WHM includes NativeSSL support, no action is necessary. | cPanel & WHM version 11.32 | cPanel & WHM version 58 |
| The LANG localization system | Update custom translations of the cPanel or WHM interfaces and custom plugins to use [the `locale.maketext` system](https://api.docs.cpanel.net/guides/guide-to-locales/). | cPanel & WHM version 11.26 | cPanel & WHM version 82 |

#### Additional Documentation

* * *

- [Change Log](https://docs.cpanel.net/whm/cpanel/change-log/)
- [cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)
- [Onboarding Assistant](https://docs.cpanel.net/knowledge-base/cpanel-product/onboarding-assistant/)
- [Rebuild RPM Database](https://docs.cpanel.net/whm/software/rebuild-rpm-database/)
- [System Update](https://docs.cpanel.net/whm/software/system-update/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×