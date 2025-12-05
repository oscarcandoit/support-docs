---
url: "https://docs.cpanel.net/changelogs/122-change-log/"
title: "122 Change Log | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/changelogs/122-change-log/#main-content)

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
4. 122 Change Log


#### Table of Contents

[122.0.27](https://docs.cpanel.net/changelogs/122-change-log/#122027)

* * *

[122.0.26](https://docs.cpanel.net/changelogs/122-change-log/#122026)

* * *

[122.0.25](https://docs.cpanel.net/changelogs/122-change-log/#122025)

* * *

[122.0.23](https://docs.cpanel.net/changelogs/122-change-log/#122023)

* * *

[122.0.22](https://docs.cpanel.net/changelogs/122-change-log/#122022)

* * *

[122.0.21](https://docs.cpanel.net/changelogs/122-change-log/#122021)

* * *

[122.0.20](https://docs.cpanel.net/changelogs/122-change-log/#122020)

* * *

[122.0.18](https://docs.cpanel.net/changelogs/122-change-log/#122018)

* * *

[122.0.17](https://docs.cpanel.net/changelogs/122-change-log/#122017)

* * *

[122.0.16](https://docs.cpanel.net/changelogs/122-change-log/#122016)

* * *

[122.0.15](https://docs.cpanel.net/changelogs/122-change-log/#122015)

* * *

[122.0.13](https://docs.cpanel.net/changelogs/122-change-log/#122013)

* * *

[122.0.7](https://docs.cpanel.net/changelogs/122-change-log/#12207)

* * *

[122.0.6](https://docs.cpanel.net/changelogs/122-change-log/#12206)

* * *

[122.0.5](https://docs.cpanel.net/changelogs/122-change-log/#12205)

* * *

[122.0.4](https://docs.cpanel.net/changelogs/122-change-log/#12204)

* * *

[122.0.2](https://docs.cpanel.net/changelogs/122-change-log/#12202)

* * *

[122.0.1](https://docs.cpanel.net/changelogs/122-change-log/#12201)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/changelogs/122-change-log/#table-of-contents-toggle)

[122.0.27](https://docs.cpanel.net/changelogs/122-change-log/#122027)

* * *

[122.0.26](https://docs.cpanel.net/changelogs/122-change-log/#122026)

* * *

[122.0.25](https://docs.cpanel.net/changelogs/122-change-log/#122025)

* * *

[122.0.23](https://docs.cpanel.net/changelogs/122-change-log/#122023)

* * *

[122.0.22](https://docs.cpanel.net/changelogs/122-change-log/#122022)

* * *

[122.0.21](https://docs.cpanel.net/changelogs/122-change-log/#122021)

* * *

[122.0.20](https://docs.cpanel.net/changelogs/122-change-log/#122020)

* * *

[122.0.18](https://docs.cpanel.net/changelogs/122-change-log/#122018)

* * *

[122.0.17](https://docs.cpanel.net/changelogs/122-change-log/#122017)

* * *

[122.0.16](https://docs.cpanel.net/changelogs/122-change-log/#122016)

* * *

[122.0.15](https://docs.cpanel.net/changelogs/122-change-log/#122015)

* * *

[122.0.13](https://docs.cpanel.net/changelogs/122-change-log/#122013)

* * *

[122.0.7](https://docs.cpanel.net/changelogs/122-change-log/#12207)

* * *

[122.0.6](https://docs.cpanel.net/changelogs/122-change-log/#12206)

* * *

[122.0.5](https://docs.cpanel.net/changelogs/122-change-log/#12205)

* * *

[122.0.4](https://docs.cpanel.net/changelogs/122-change-log/#12204)

* * *

[122.0.2](https://docs.cpanel.net/changelogs/122-change-log/#12202)

* * *

[122.0.1](https://docs.cpanel.net/changelogs/122-change-log/#12201)

* * *

## 122 Change Log

Last modified: _2025 April 25_

* * *

### 122.0.27

* * *

##### **2024-11-04**

- Fixed case HB-7053: Script skips RoundCube’s “responses” table
- Fixed case RE-935: Guard against bad userdata in cpkeyclt
- Fixed case RE-888: Have license servers report domains breakdown
- Fixed case RE-927: Update Cpanel::JSON::XS to 4.38 to address CVE-2022-48623
- Fixed case RE-884: Optimize get\_account\_function in UIAnalytics template plugin.

### 122.0.26

* * *

##### **2024-10-31**

- Fixed RE-884: Optimize load of Koality cpanel template plugin.
- Fixed RE-913: Update cpanel-php83 to v8.3.13.
- Fixed RE-919: Update cpanel-pure-ftpd to 1.0.52 which addresses CVE-2024-48208.

### 122.0.25

* * *

##### **2024-10-28**

- Fixed RE-769: Assure Imunify360/AVPlus install happens exclusively.
- Fixed WPX-4463: Improve the CSF detection
- Implemented DUCKS-930: Enable the soft release of cpanel-monitoring-plugin for WHM

### 122.0.23

* * *

##### **2024-10-24**

- Fixed RE-896: Fix corruption of home directory paths during quota cache handling introduced with TSR-2024-0001.

### 122.0.22

* * *

##### **2024-10-22**

- Fixed RE-819: Remove "additional-from-cache" line from BIND config for BIND versions 9.16 and above.
- Fixed RE-842: Update cpanel-exim to 4.98.
- Fixed WPX-4516: Add a global exception handler the checkallsslcerts.

### 122.0.21

* * *

##### **2024-10-17**

- Fixed HB-7826: Ignore ManualMX changes when mail is hosted on remote exchange.
- Fixed HB-7933: Update cpanel-roundcubemail to v1.6.9.0-1.
- Fixed HB-7965: Fix issue that was preventing calendar invites from being sent.
- Fixed RE-726: Fixed the "SSH Password Authorization Tweak" for cases where the sshd configuration file has an include directory.
- Fixed RE-848: Update cpanel-php83 to v8.3.12 which addresses: CVE-2024-9026, CVE-2024-8925, CVE-2024-8926, & CVE-2024-8927.
- Fixed RE-873: Update cpanel-unbound to 1.21.1-1.cp110 (fixes CVE-2024-8508).

### 122.0.20

* * *

##### **2024-10-15**

- \[Security\] TSR-2024-0001
- Case RE-480 via TSR-503: Remove . from @INC for bin/cpanm.
- Case TSR-192, RE-778: Prevent an unlink() from running as root.
- Case RE-776 via TSR-562: Encoding issue in cPanel login\_log.
- Case TSR-417: Information disclosure issue via login page caching.

### 122.0.18

* * *

##### **2024-09-26**

- Fixed DUCKS-847: Sitejet will not throw 400 after Transfer Tool process.
- Fixed HB-7223: Allow correct customization of TRANSP and VALARM for calendar events.
- Fixed RE-683: Provide API calls to facilitate account transfers with 2FA enabled.
- Fixed RE-794: Update cpanel-php-sourceguardian to 15.0.2.
- Fixed DUCKS-25: Installer for cpanel-monitoring-plugin
- Fixed case HB-7761: Reject inbound mail with dangerous attachments

### 122.0.17

* * *

##### **2024-09-21**

- Fixed HB-7948: Update Roundcube for multiple bugfixes.
- Fixed MOONS-1755: Upon cPanel user login, collect consent and privacy settings if they do not exist.
- Fixed MOONS-1800: Fix default webmail app routing when consent modal is shown.

### 122.0.16

* * *

##### **2024-09-16**

- Fixed HB-7707: Enhance handling of calendar files with extremely long filenames.
- Fixed HB-7764: bump rpm.versions for cpanel-roundcubemail-plugins-cpanel: 1.1.8-3.cp120.
- Fixed HB-7904: Update Mailman for template-related language fix.
- Fixed HB-7854, HB-7870: Bump Roundcube to release 1.6.8.2-1
- Fixed MOONS-1728: Upon webmail user login, collect consent privacy settings if they do not exist.
- Fixed RE-643: Fix invalid NFTables configuration after installation on some systems.
- Fixed RE-736: Added option to allow hiding the password when creating an account via the CLI.
- Fixed RE-739: Update cpanel-php83 to v8.3.11.
- Fixed RE-779: Require oniguruma system package on RHEL systems to preserve existing installs on upgrade.

### 122.0.15

* * *

##### **2024-09-12**

- Fixed RE-799: add (x86-64) to Rhel.pm for oniguruma

### 122.0.13

* * *

##### **2024-09-11**

- Fixed RE-779: Require oniguruma system package on RHEL systems to preserve existing installs on upgrade.

### 122.0.7

* * *

##### **2024-09-09**

- Fixed CPANEL-45860: Stop requiring iptables package to be installed on RHEL9 variants.
- Fixed RE-645: Update Munin to resolve directory ownership inconsistency.
- Fixed RE-742: Update cpanel-pdns to 4.9.1-2.cp112.
- Fixed RE-742: Update scripts/migrate-pdns-conf to remove or rename config keys changed since the last update of the PowerDNS package.

### 122.0.6

* * *

##### **2024-08-29**

- Fixed HB-7843: Added disallowed extension blacklist to ACL\_SMTP\_MIME.
- Fixed RE-562: Fix Support Access Request popup in WHM when 2fa is enabled for the administrator's login.
- Fixed RE-600: Reduce timeouts in DNS Cluster interface by extending peer timeouts from 7->15.
- Fixed RE-610: Update cpanel-php83 to v8.3.10.
- Fixed RE-616: Fix bug in Cpanel::NameServer::Conf::BIND where the disk cache was never consulted.
- Fixed RE-671: Updated cpanel-unbound to 1.21.0.
- Fixed RE-677: Update cpanel-dovecot to 2.3.21-1cp108.
- Fixed WPX-4225: When building a CA Bundle from the CA Issuer URI chain, don't stop at the first self-signed cert encountered in a P7C bundle.

### 122.0.5

* * *

##### **2024-08-15**

- Fixed HB-7835: Update Roundcube to 1.6.8 to address CVE's (CVE-2024-42008, CVE-2024-42009, CVE-2024-42010).
- Fixed QUACKEN-14: Add hooks for Server Profile changes.
- Fixed RE-595: Update phpPgAdmin to 7.13.0-3.cp110 to patch a PHP 8 compatibility issue.
- Fixed RE-635: Prevent 3rdparty installs from cPanel locking when they try to install things.

### 122.0.4

* * *

##### **2024-08-08**

- Fixed CPANEL-44101: Fix bug post login where additional get params were not passed along when goto\_uri was active.
- Fixed CPPX-18627: phpMyAdmin and phpPgAdmin open their own tab.
- Fixed RE-360: Update cpanel-pdns 4.9.1-1.cp122.
- Fixed RE-366: Update cpanel-unbound to 1.20.0-1.cp110.
- Fixed RE-395: Fixed the 'License User Limit Exceeded' banner.
- Fixed RE-414: Added the ability to read DMI tables on systems running SMBIOS v3.
- Fixed RE-449: Fix issue where the ipaliases service could sometimes start before the network adapater configured as ETHDEV was ready on systems using NetworkManager.
- Fixed RE-471: Improve criteria for detecting cgroup containers.
- Fixed RE-478: Stop setting yum\_errorlevel for DNF
- Fixed RE-488: Add cpanel-boost-devel to the cpanel-devel target in rpm.versions.
- Fixed RE-490: Update broken mailbox format help links in WHM >> Tweak Settings.
- Fixed RE-532: Update cpanel-ioncube to 13.3.0-1.cp110 (contains PHP 8.3 loaders).
- Fixed RE-536: Update cpanel-php83 to v8.3.9.
- Fixed RE-590: Fixed GZIP environment variable warnings that were emitted into the backup logs.
- Fixed ZC-11958: WHMAPI and UAPI compatability for experimental/unsupported non-standard ALIAS records.
- Fixed CPANEL-45643: Console error when WHM analytics disabled
- Implemented QUACKEN-359: Update French translations focusing on Sitejet.
- Implemented QUACKEN-359: Angular apps and plugin localization.

### 122.0.2

* * *

##### **2024-07-11**

- Fixed case CPANEL-45692: Update cpanel-ioncube to 13.3.0-1.cp110 (contains PHP 8.3 loaders).

### 122.0.1

* * *

##### **2024-07-09**

- Fixed BC-6610: Update to exim 4.97.1.
- Fixed BOO-3058: MariaDB 10.11 is now the default installed database on fresh installs.
- Fixed CPANEL-42129: Remove deprecated scripts/check\_cpanel\_rpms replaced by scripts/check\_cpanel\_pkgs.
- Fixed CPANEL-42459: Fixed subdomain restoration when the primary domain is parked under a subdomain.
- Fixed CPANEL-43944: Fix database quotas for Postgres on alma/rocky 9.
- Fixed CPANEL-44057: Teach AutoSSL to automatically replace certs issued by the deprecated cPanel/Sectigo AutoSSL provider without requiring an override.
- Fixed CPANEL-44128: Add initial support for Outlook/Win32 timezones in cpdavd.
- Fixed CPANEL-44144: Fix template for SRV records when transferring accounts.
- Fixed CPANEL-44152,CPANEL-44152: Force SQLite Roundcube conversion on MySQL 5.6 or Maria 10.0.
- Fixed CPANEL-44216: Remove default public grants on MariaDB 10.11.
- Fixed CPANEL-45621: Update cpanel-roundcubemail to 1.6.6.5-1.
- Fixed CPANEL-45637: Update GeoIP to 122.0-2.cp122.
- Fixed DUCK-10018: Add support for plugins to provide localized strings to the product.
- Fixed DUCK-10303: Add mixpanel tracking to feature showcase action items.
- Fixed DUCK-10462: Fix some of component framework bugs.
- Fixed DUCK-10684: Add support for plugin WHM API specs.
- Fixed EK-172: Improve Let’s Encrypt plugin installation and registration.
- Fixed HB-7484: Fix duplicate CalDAV calendar in Roundcube.
- Fixed HB-7537: Fix minor bug in CPDAVD functions for UAPI.
- Fixed HB-7561: Add support for ARC signing in Exim.
- Fixed HB-7581: Remove vestigial logic for calendar\_crypt\_key in pre/post snapshot scripts.
- Fixed HB-7584: Add DAV client directory.
- Fixed HB-7603: Clean up error logging for some situations in cPDAV.
- Fixed HB-7578: Better handling of CCS metadata during Roundcube conversion.
- Fixed PH-20722: Embed Retently in-app script in WHM home page when the root and/or resellers have given analytics consent.
- Fixed PH-20726: Decrease the complexity of the cPanel & WHM Mixpanel instrumentation distribution strategy.
- Fixed PH-20732: Add account age attribute to Retently embed meta data.
- Fixed PH-20735: Emit analyticsInstanceLoaded event when mixpanel instance is initialized.
- Fixed PH-20736: Add Mixpanel tracking to WHM Next Steps and Favorites.
- Fixed PH-20737: Add proper prefix to Retently data properties.
- Fixed PH-20741: Add “WHM” prefix to “Important-Next-Steps-Nav-Link” events.
- Fixed QDP-2581: Correct issues in Apt and Yum access.
- Fixed RE-304: Update Mail::SpamAssassin to 4.0.1.
- Fixed RE-307: Upgrade PuTTY to 0.81.
- Fixed RE-314: Switch to cpanel-php83 for use in whm and cpanel interfaces.
- Fixed RE-351: Update Terms/Policy for ELS.
- Fixed RE-423: Update cpanel-php83 to v8.3.8.
- Fixed WPX-2828: Update WHM’s initial loading pages so that animation reflect correct product type the user has provisioned.
- Fixed WPX-2863: Setup CageFS configuration for cPanel when cagefs is enabled.
- Fixed WPX-2878: Convert bin/onboot\_handler to cpanel-onboot service.
- Fixed WPX-3001: Add the server’s current version to pkgacct archives.
- Fixed WPX-3127: get\_users\_features\_settings warns on unknown features.
- Fixed WPX-3234: Only load the Analytics template plugin when the cpanel-analytics pkg is installed.
- Fixed WPX-3253: Reduce the time it takes to run the snapshot\_prep MySQL task.
- Fixed WPX-3258: The createacct API now properly applies package extension values.
- Fixed ZC-11452: Add experimental/unsupported non-standard ALIAS records to zone editing (WHM and cPanel Advanced).
- Fixed ZC-11574: Allow cPanel and CloudLinux EA4 profiles to coexist.
- Fixed ZC-11642: Prevent installer failure by ignoring some errors when setting system options which are not supported on Virtuozzo.
- Fixed ZC-11669: Performance improvement for package listing on apt systems.
- Fixed ZC-11700: Correct problem where transfer is removing modsec vendors.
- Fixed ZC-11705: Update cpanel-pdns to 4.9.0-1.cp122.
- Fixed ZC-11723: Remove tomcat 8.5 (EOL) API/UI.
- Fixed ZC-11746: Correct issue with transfer tool and modsecurity configs.
- Implemented HB-7610: Optimize a particular use case involving MySQL roundcube backends when SQLite databases exist for some users.

#### Additional Documentation

* * *

- [110 Change Log](https://docs.cpanel.net/changelogs/110-change-log/)
- [118 Change Log](https://docs.cpanel.net/changelogs/118-change-log/)
- [120 Change Log](https://docs.cpanel.net/changelogs/120-change-log/)
- [124 Change Log](https://docs.cpanel.net/changelogs/124-change-log/)
- [126 Change Log](https://docs.cpanel.net/changelogs/126-change-log/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×