---
url: "https://docs.cpanel.net/changelogs/120-change-log/"
title: "120 Change Log | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/changelogs/120-change-log/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Change Logs](https://docs.cpanel.net/changelogs/)
3. [cPanel & WHM Change Log](https://docs.cpanel.net/changelogs/releases/)
4. 120 Change Log


#### Table of Contents

[120.0.22](https://docs.cpanel.net/changelogs/120-change-log/#120022)

* * *

[120.0.21](https://docs.cpanel.net/changelogs/120-change-log/#120021)

* * *

[120.0.16](https://docs.cpanel.net/changelogs/120-change-log/#120016)

* * *

[120.0.15](https://docs.cpanel.net/changelogs/120-change-log/#120015)

* * *

[120.0.14](https://docs.cpanel.net/changelogs/120-change-log/#120014)

* * *

[120.0.12](https://docs.cpanel.net/changelogs/120-change-log/#120012)

* * *

[120.0.11](https://docs.cpanel.net/changelogs/120-change-log/#120011)

* * *

[120.0.10](https://docs.cpanel.net/changelogs/120-change-log/#120010)

* * *

[120.0.9](https://docs.cpanel.net/changelogs/120-change-log/#12009)

* * *

[120.0.8](https://docs.cpanel.net/changelogs/120-change-log/#12008)

* * *

[120.0.5](https://docs.cpanel.net/changelogs/120-change-log/#12005)

* * *

[120.0.3](https://docs.cpanel.net/changelogs/120-change-log/#12003)

* * *

[120.0.2](https://docs.cpanel.net/changelogs/120-change-log/#12002)

* * *

[120.0.1](https://docs.cpanel.net/changelogs/120-change-log/#12001)

* * *

[119.9999.69](https://docs.cpanel.net/changelogs/120-change-log/#119999969)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/changelogs/120-change-log/#table-of-contents-toggle)

[120.0.22](https://docs.cpanel.net/changelogs/120-change-log/#120022)

* * *

[120.0.21](https://docs.cpanel.net/changelogs/120-change-log/#120021)

* * *

[120.0.16](https://docs.cpanel.net/changelogs/120-change-log/#120016)

* * *

[120.0.15](https://docs.cpanel.net/changelogs/120-change-log/#120015)

* * *

[120.0.14](https://docs.cpanel.net/changelogs/120-change-log/#120014)

* * *

[120.0.12](https://docs.cpanel.net/changelogs/120-change-log/#120012)

* * *

[120.0.11](https://docs.cpanel.net/changelogs/120-change-log/#120011)

* * *

[120.0.10](https://docs.cpanel.net/changelogs/120-change-log/#120010)

* * *

[120.0.9](https://docs.cpanel.net/changelogs/120-change-log/#12009)

* * *

[120.0.8](https://docs.cpanel.net/changelogs/120-change-log/#12008)

* * *

[120.0.5](https://docs.cpanel.net/changelogs/120-change-log/#12005)

* * *

[120.0.3](https://docs.cpanel.net/changelogs/120-change-log/#12003)

* * *

[120.0.2](https://docs.cpanel.net/changelogs/120-change-log/#12002)

* * *

[120.0.1](https://docs.cpanel.net/changelogs/120-change-log/#12001)

* * *

[119.9999.69](https://docs.cpanel.net/changelogs/120-change-log/#119999969)

* * *

## 120 Change Log

Last modified: _2025 April 25_

* * *

### 120.0.22

* * *

##### **2024-09-21**

- Fixed case HB-7948: Update Roundcube for multiple bugfixes.
- Fixed case MOONS-1755: Upon cPanel user login, collect consent and privacy settings if they do not exist.
- Fixed case MOONS-1800: Fix default webmail app routing when consent modal is shown.

### 120.0.21

* * *

##### **2024-09-12**

- Fixed case DUCKS-69: Install the cpanel-plugin-monitoring-campaigns.
- Fixed case HB-7707: Enhance handling of calendar files with extremely long filenames.
- Fixed case HB-7822: Bump rpm.versions for roundcube 1.6.8.
- Fixed case HB-7843: Added disallowed extension blacklist to ACL\_SMTP\_MIME.
- Fixed case HB-7903: Update Mailman for template-related language fix.
- Fixed case MOONS-1728: Upon webmail user login, collect consent privacy settings if they do not exist.
- Fixed case QUACKEN-14: Add hooks for Server Profile changes.
- Fixed case RE-562: Fix Support Access Request popup in WHM when 2fa is enabled for the administrator's login.
- Fixed case RE-595: Update phpPgAdmin to 7.13.0-3.cp110 to patch a PHP 8 compatibility issue.
- Fixed case RE-600: Reduce timeouts in DNS Cluster interface by extending peer timeouts from 7->15.
- Fixed case RE-616: Fix bug in Cpanel::NameServer::Conf::BIND where the disk cache was never consulted.
- Fixed case RE-635: Prevent 3rdparty installs from cPanel locking when they try to install things.
- Fixed case RE-645: Update Munin to resolve directory ownership inconsistency.
- Fixed case RE-671: Updated cpanel-unbound to 1.21.0.
- Fixed case RE-677: Update cpanel-dovecot to 2.3.21-1cp108.
- Fixed case RE-739: Update cpanel-php83 to v8.3.11.
- Fixed case RE-742: Update scripts/migrate-pdns-conf to remove or rename config keys changed since the last update of the PowerDNS package.
- Fixed case WPX-3258: The createacct API now properly applies package extension values.
- Implemented case QUACKEN-359: Update French translations focusing on Sitejet.
- Implemented case QUACKEN-359: Angular apps and plugin localization.

### 120.0.16

* * *

##### **2024-08-15**

- Fixed case HB-7822: Update Roundcube to 1.6.8 to address CVE’s (CVE-2024-42008, CVE-2024-42009, CVE-2024-42010)

### 120.0.15

* * *

##### **2024-08-01**

- Fixed case RE-366: Update cpanel-unbound to 1.20.0-1.cp110.
- Fixed case RE-414: Added the ability to read DMI tables on systems running SMBIOS v3.
- Fixed case RE-471: Improve criteria for detecting cgroup containers.
- Fixed case RE-550: Update rpm.versions for exim CVE update.
- Fixed case ZC-11615: Allow cPanel and CloudLinux EA4 profiles to coexist.

### 120.0.14

* * *

##### **2024-07-11**

- Fixed case CPANEL-45692: Update cpanel-ioncube to 13.3.0-1.cp110 (contains PHP 8.3 loaders).

### 120.0.12

* * *

##### **2024-07-02**

- Fixed case CPANEL-45649: Switch to cpanel-php83 for use in whm and cpanel interfaces.

### 120.0.11

* * *

##### **2024-06-20**

- Fixed case CPANEL-44152: Force SQLite Roundcube conversion on MySQL 5.6 or Maria 10.0.
- Fixed case CPANEL-44164: Add dbus-broker to the ignore list for find\_outdated\_services.
- Fixed case CPANEL-44216: Remove default public grants on MariaDB 10.11.
- Fixed case CPANEL-45617: Avoid "Service SSL Certificate Expires Soon" notification by renewing hostname certificates at the 30 day mark.
- Fixed case PH-20739: Add proper prefix to Retently data properties.
- Fixed case RE-351: Update Terms/Policy for ELS.
- Fixed case ZC-11669: Performance improvement for package listing on apt systems.
- Implemented case HB-7610: Optimize a particular use case involving MySQL roundcube backends when SQLite databases exist for some users.

### 120.0.10

* * *

##### **2024-06-04**

- Fixed case PH-20730: Decrease the complexity of the cPanel & WHM Mixpanel instrumentation distribution strategy.
- Fixed case PH-20733: Add account age attribute to Retently embed meta data.
- Fixed case PH-20735: Emit analyticsInstanceLoaded event when mixpanel instance is initialized.
- Fixed case BOO-3552: Fix restorepkg database map race condition error.

### 120.0.9

* * *

##### **2024-05-23**

- Fixed case HB-7582: Add initial support for Outlook/Win32 timezones in cpdavd.
- Fixed case HB-7589: Fix bug where postgres got uninstalled automatically as a dependency of CCS even if other things relied on it.
- Fixed case RE-383: Fix debian dep for cpanel-roundcube-plugins-cpanel
- Fixed case RE-331: cpanel-system-python27 on Ubuntu keeps failing on check\_cpanel\_pkgs
- Fixed case RE-301: cPanel installs sometime end with missing packages
- Fixed case HB-7504: Disabling DAV in Service Manager isn’t disabling the Calendar and Contacts feature

### 120.0.8

* * *

##### **2024-05-15**

- Fixed case CPANEL-44045: Fix incorrect content for cpsess0/scripts/authorizesupport page.
- Fixed case CPANEL-44144: Fix template for SRV records when transferring accounts.
- Fixed case DUCK-10462: Fix some of component framework bugs.
- Fixed case HB-7578: Better handling of CCS metadata during Roundcube conversion.

### 120.0.5

* * *

##### **2024-04-30**

- Fixed case CPANEL-42459: Fixed subdomain restoration when the primary domain is parked under a subdomain.
- Fixed case CPANEL-43944: Fix database quotas for Postgres on alma/rocky 9.
- Fixed case CPANEL-44088: Update cpanel-php81 to 8.1.28-1.cp110.
- Fixed case DUCK-10018: Add support for plugins to provide localized strings to the product.
- Fixed cases HB-7541,HB-7542,HB-7496: Fix Roundcube invitation problems in 120.
- Fixed case PH-20722: Embed Retently in-app script in WHM home page when the root and/or resellers have given analytics consent.
- Fixed case WPX-3234: Only load the Analytics template plugin when the cpanel-analytics pkg is installed.

### 120.0.3

* * *

##### **2024-04-18**

- Fixed case WPX-3212: Improve Let's Encrypt plugin installation and registration.
- Fixed case WPX-3047: Package extensions apply null value to new accounts

### 120.0.2

* * *

##### **2024-04-16**

- Fixed case CPANEL-44057: Teach AutoSSL to automatically replace certs issued by the deprecated cPanel/Sectigo AutoSSL provider without requiring an override.
- Fixed case HB-7226: Handle shared event deletions better

### 120.0.1

* * *

##### **2024-04-09**

- Fixed case CPANEL-44058: Fix bug in elfinder\_connector.cgi when API call logging is enabled.
- Fixed case HB-7537: Fix minor bug in CPDAVD functions for UAPI.
- Fixed case WPX-3127: get\_users\_features\_settings warns on unknown features.

### 119.9999.69

* * *

##### **2024-04-02**

- Fixed case BC-6610: Update to exim 4.97.1.
- Fixed case BC-6660: Update to cpanel-unbound-1.19.1-1.
- Fixed case BC-6662: Update to git-2.43.2.
- Fixed case BOO-3425: Genericize cPanel/WHM callouts to MySQL.
- Fixed case CPANEL-35830: Provide specific per-domain error messages when there is a failure to insert new records in a DNS zone such as during AutoSSL DNS DCV.
- Fixed case CPANEL-40334: Fix exception in the Kernel assessor of the Security Advisor when using non-English locale.
- Fixed case CPANEL-40959: Fix missing space in SSL menu item.
- Fixed case CPANEL-41154: update-packages will now contact if there was a failure during the update.
- Fixed case CPANEL-41383: Don’t report warnings for domains covered by wildcards.
- Fixed case CPANEL-43277: Fix an issue where restoring Greylisting settings could sometimes result in an error.
- Fixed case CPANEL-43278: Allow EA4 WHM interface to work with cPanel EA4 packages on CloudLinux.
- Fixed case CPANEL-43293: Provide a more helpful error message for connection errors.
- Fixed case CPANEL-43308: Revised show/hide rules for Create Support Ticket in WHM.
- Fixed case CPANEL-43377: Avoid prompt from STDIN when converting to CloudLinux.
- Fixed case CPANEL-43387: Fixed an issue where sometimes the header menu was not functional in Safari.
- Fixed case CPANEL-43452: Ensure consistent rlimit value between UI and CLI during upcp.
- Fixed case CPANEL-43591: Instruct NetworkManager not to overwrite DNS resolver configuration, if needed.
- Fixed case CPANEL-43596: Fixed disk space tests for installation and upgrades on CloudLinux.
- Fixed case CPANEL-43597: Create /etc/localtime if it doesn’t exist when determining timezone.
- Fixed case CPANEL-43603: Update cpanel-roundcubemail to 1.6.0.19-4.cp110.
- Fixed case CPANEL-43605: Remove incorrect message about backups being disabled on the cPanel Backup page when legacy backups are enabled for that account.
- Fixed case CPANEL-43606: Fix bug where webmaillogout.cgi was considered a valid goto\_uri after logging out of webmail (leading to a login-logout loop).
- Fixed case CPANEL-43608: Fix display of EasyApache 4 packages in WHM when colorization is forcibly enabled for DNF.
- Fixed case CPANEL-43625: Update cpanel-geoipfree-data to 120.0-1.cp120.
- Fixed case CPANEL-43631: Ignore cPanel services reported in needs-restarting checks.
- Fixed case CPANEL-43637: Fix login template caching bug when maximum licensed users were exceeded on a server.
- Fixed case CPANEL-43653: Adjust plugin download temporary directory permissions to allow apt to successfully download as a non-root user.
- Fixed case CPANEL-43700: Update cpanel-php81 to 8.1.27-1.cp110.
- Fixed case CPANEL-43716: Teach find\_outdated\_services to ignore the tailwatchd and cpgreylistd services.
- Fixed case CPANEL-43718: Update cpanel-perl-536-spreadsheet-parseexcel to 0.66-1.cp108.
- Fixed case CPANEL-43732: Add “implements” key for Domains UI in cPanel.
- Fixed case CPANEL-43750: Fix file permission issue when loading the Left Menu in cPanel.
- Fixed case CPANEL-43819: Ensure an ACME account is created after the Let’s Encrypt plugin is installed, regardless of the AutoSSL provider being enabled.
- Fixed case CPANEL-43826: New upstream release clamav-1.0.5.
- Fixed case CPANEL-43873: Fix bug in writing zones when DNS server is set to disabled.
- Fixed case CPANEL-43874: Removed experimental tag from Ubuntu 22 in 118.
- Fixed case CPANEL-43922: Do not block upgrades to 118 if the openssl rpm is not installed.
- Fixed case CPANEL-43964: Teach find\_outdated\_services to ignore CL spacewalk errors.
- Fixed case CPANEL-43966: Fix bug in conditional processing for Webmail’s sitemap.json.
- Fixed case DUCK-9900: Fix create email\_account issue as team\_user.
- Fixed case DUCK-10195: Add component injection points to cPanel, Webmail and WHM.
- Fixed case DUCK-10303: Add mixpanel tracking to feature showcase action items.
- Fixed case EA-11917: Make sure PHP-FPM is restarted on PECL and PEAR module install.
- Fixed case EK-45: Set the AutoSSL provider to Let’s Encrypt on updates to 118.
- Fixed case EK-47: Add a feature showcase for the Let’s Encrypt changes.
- Fixed case EK-70: Install the Let’s Encrypt plugin before running checkallsslcerts during initial setup.
- Fixed case EK-114: Remove the defunct allow-retry option from checkallsslcerts.
- Fixed case EK-114: Remove the cPanel/Sectigo AutoSSL provider.
- Fixed case HB-7006: Update calendar sharing go link.
- Fixed case HB-7322: Stop marking newly created address books as protected.
- Fixed case HB-7375: Add a new calendaring and contacts system to cPanel & WHM.
- Fixed case HB-7493: Fix cpapi2 Email has\_delegated\_mailman\_lists.
- Fixed case PH-20492: track page origination of sitejet index page access.
- Fixed case RE-156: Ensure that ea\_install\_profile fails on failing dnf transactions.
- Fixed case RE-202: Fixed the update mechanism for the elevate-cpanel script so it only updates when needed.
- Fixed case RE-204: Ubuntu 20 is not supported by cPanel v120+.
- Fixed case WPX-2144: Clean user cache on quota updates.
- Fixed case WPX-2329: restartsrv support for simple systemd services.
- Fixed case WPX-2353: Add role RegularCpanel and apply to various WHM interfaces.
- Fixed case WPX-2369: Prevent transfers for cPanel accounts to WP2 and vice-versa.
- Fixed case WPX-2546: Improve scripts/cpdig for NS requests.
- Fixed case WPX-2612: Hide services in WHM Service Manager base on current roles.
- Fixed case WPX-2866: Update cpanel-perl-536-directory-queue to 2.1-2.cp108.
- Fixed case WPX-2866: Update cpanel-perl-536-no-worries to 1.7-2.cp108.
- Fixed case WPX-2876: Fix warning from DynamicUI::Loader.
- Fixed case ZC-11443: Correct installer support for 9 based Jetbackup installs.
- Fixed case ZC-11573: Have EA4 API/UI prefer cPanel profiles if they exist.

#### Additional Documentation

* * *

- [110 Change Log](https://docs.cpanel.net/changelogs/110-change-log/)
- [118 Change Log](https://docs.cpanel.net/changelogs/118-change-log/)
- [122 Change Log](https://docs.cpanel.net/changelogs/122-change-log/)
- [124 Change Log](https://docs.cpanel.net/changelogs/124-change-log/)
- [126 Change Log](https://docs.cpanel.net/changelogs/126-change-log/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×