---
url: "https://docs.cpanel.net/changelogs/128-change-log/"
title: "128 Change Log | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/changelogs/128-change-log/#main-content)

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
4. 128 Change Log


#### Table of Contents

[128.0.22](https://docs.cpanel.net/changelogs/128-change-log/#128022)

* * *

[128.0.21](https://docs.cpanel.net/changelogs/128-change-log/#128021)

* * *

[128.0.20](https://docs.cpanel.net/changelogs/128-change-log/#128020)

* * *

[128.0.19](https://docs.cpanel.net/changelogs/128-change-log/#128019)

* * *

[128.0.18](https://docs.cpanel.net/changelogs/128-change-log/#128018)

* * *

[128.0.17](https://docs.cpanel.net/changelogs/128-change-log/#128017)

* * *

[128.0.15](https://docs.cpanel.net/changelogs/128-change-log/#128015)

* * *

[128.0.14](https://docs.cpanel.net/changelogs/128-change-log/#128014)

* * *

[128.0.13](https://docs.cpanel.net/changelogs/128-change-log/#128013)

* * *

[128.0.11](https://docs.cpanel.net/changelogs/128-change-log/#128011)

* * *

[128.0.9](https://docs.cpanel.net/changelogs/128-change-log/#12809)

* * *

[128.0.7](https://docs.cpanel.net/changelogs/128-change-log/#12807)

* * *

[128.0.5](https://docs.cpanel.net/changelogs/128-change-log/#12805)

* * *

[128.0.3](https://docs.cpanel.net/changelogs/128-change-log/#12803)

* * *

[128.0.2](https://docs.cpanel.net/changelogs/128-change-log/#12802)

* * *

[128.0.1](https://docs.cpanel.net/changelogs/128-change-log/#12801)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/changelogs/128-change-log/#table-of-contents-toggle)

[128.0.22](https://docs.cpanel.net/changelogs/128-change-log/#128022)

* * *

[128.0.21](https://docs.cpanel.net/changelogs/128-change-log/#128021)

* * *

[128.0.20](https://docs.cpanel.net/changelogs/128-change-log/#128020)

* * *

[128.0.19](https://docs.cpanel.net/changelogs/128-change-log/#128019)

* * *

[128.0.18](https://docs.cpanel.net/changelogs/128-change-log/#128018)

* * *

[128.0.17](https://docs.cpanel.net/changelogs/128-change-log/#128017)

* * *

[128.0.15](https://docs.cpanel.net/changelogs/128-change-log/#128015)

* * *

[128.0.14](https://docs.cpanel.net/changelogs/128-change-log/#128014)

* * *

[128.0.13](https://docs.cpanel.net/changelogs/128-change-log/#128013)

* * *

[128.0.11](https://docs.cpanel.net/changelogs/128-change-log/#128011)

* * *

[128.0.9](https://docs.cpanel.net/changelogs/128-change-log/#12809)

* * *

[128.0.7](https://docs.cpanel.net/changelogs/128-change-log/#12807)

* * *

[128.0.5](https://docs.cpanel.net/changelogs/128-change-log/#12805)

* * *

[128.0.3](https://docs.cpanel.net/changelogs/128-change-log/#12803)

* * *

[128.0.2](https://docs.cpanel.net/changelogs/128-change-log/#12802)

* * *

[128.0.1](https://docs.cpanel.net/changelogs/128-change-log/#12801)

* * *

## 128 Change Log

Last modified: _2025 September 17_

* * *

### 128.0.22

* * *

##### **2025-09-17**

- Fixed CPANEL-49106: Update Cpanel::JSON::XS and JSON::XS to address CVE-2025-40929.
- Fixed CPANEL-49215: Bump rpm.versions for cpanel-geoipfree-data.

### 128.0.21

* * *

##### **2025-09-10**

- Fixed CPANEL-46582: Security Update: Add local sudoers group names to reserved username
  - Credit: Ionut Cernica
  - CVSS Score: 6.0 CVSS:4.0/AV:N/AC:H/AT:P/PR:L/UI:N/VC:N/VI:H/VA:N/SC:N/SI:N/SA:N

### 128.0.20

* * *

##### **2025-09-09**

- Fixed case CPANEL-48811: Security Update: Generic Unseen Parameters Discovery in resetpass.cgi
  - Blocked unauthenticated users from enabling debug mode via a query parameter in the URL.
  - Credit to reporter: adwin
  - CVSS Score: 3.7 CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N
- Fixed CPANEL-49051: Update CGI::Simple to address CVE-2025-40927.

### 128.0.19

* * *

##### **2025-09-04**

- Fixed CPANEL-48276: Personhood removals and Analytics Consent functionality based on Leika
- Fixed CPANEL-46144: Lower log level from debug to error to reduce spam to error\_log.
- Fixed CPANEL-48808: update requirejs to address CVE-2024-38999.
- Fixed CPANEL-48958: Update PHP to 8.3.25.

### 128.0.18

* * *

##### **2025-08-21**

- Fixed CPANEL-48296: Update cpanel-sqlite to 3.50.3 for CVE-2025-6965.
- Fixed CPANEL-48744: WHM Notification that ConfigServer is shutting down.

### 128.0.17

* * *

##### **2025-07-16**

- Fixed CPANEL-48142: Update cpanel-php83 to 8.3.23 in etc/rpm.versions.
  - Fixed GHSA-hrwm-9436-5mv3 (pgsql extension does not check for errors during escaping). (CVE-2025-1735)
  - Fixed GHSA-453j-q27h-5p8x (NULL Pointer Dereference in PHP SOAP Extension via Large XML Namespace Prefix). (CVE-2025-6491)
  - Fixed GHSA-3cr5-j632-f35r (Null byte termination in hostnames). (CVE-2025-1220)
- Fixed CPANEL-48149: Bump rpm.versions for update to cpanel-git-2.48.2.


### 128.0.15

* * *

##### **2025-06-26**

- Fixed CPANEL-47871: Upgrade to clamav 1.0.9 for CVE-2025-20260.

### 128.0.14

* * *

##### **2025-06-12**

- Fixed CPANEL-47687: Bump rpm.versions for cpanel-php83 update to 8.3.22.
- Fixed CPANEL-47693: Add HTML Editor removal notice to WHM Notification center.
- Fixed CPANEL-47763: update cpanel-perl-536-cryptx 0.087 for CVE-2025-40912.

### 128.0.13

* * *

##### **2025-06-10**

- Fixed CPANEL-47735: The directory /usr/local/cpanel/whostmgr/addonfeatures/ was unintentionally removed in a previous commit. This update restores the directory to maintain expected file structure and prevent potential issues with dependent features. No additional changes were made beyond the restoration.

### 128.0.11

* * *

##### **2025-06-10**

- Fixed CPANEL-46032: Update cpanel-awstats to 7.9-2.
- Fixed CPANEL-47113: Block transfers of temp domains to servers that do not support it.
- Fixed CPANEL-47266,CPANEL-47080,CPANEL-47086,CPANEL-47564: Multiple Mailman fixes (Mailman 2.2.0.31).
- Fixed CPANEL-47550: Bump rpm.versions for PPI downgrade to 1.279.
- Fixed CPANEL-47605: Remove "HTML Editor" from cPanel >> FileManager, as it relies on an EOL version of ckeditor which has known CVEs against it.
- Fixed CPANEL-47664: Update cpanel-file-find-rule to 0.35 to fix CVE-2011-10007.
- Fixed CPANEL-47693: Add a notice within the Feature Showcase about ckeditor removal.

### 128.0.9

* * *

##### **2025-06-02**

- Fixed case CPANEL-47587: Update Roundcube to 1.6.11 to fix CVE-2025-49113.

### 128.0.7

* * *

##### **2025-05-29**

- Fixed CPANEL-46537: Bump cpanel-mailman version to 2.2.0-22 for 128.
- Fixed CPANEL-46595: Update cpanel-roundcubemail to 1.6.9.9-1.
- Fixed CPANEL-46609: Update cpanel-mailman to 2.2.0.21-1.
- Fixed CPANEL-46815: Update cpanel-roundcubemail to 1.6.10 in etc/rpm.versions.
- Fixed CPANEL-46819: Update Exim to 4.9.2-1.
- Fixed CPANEL-46823: Update re2c to 4.2.
- Fixed CPANEL-46839: Bump rpm.versions to update cpanel-clamav to 1.0.8-1.cp118.
- Fixed CPANEL-46842: Update cpanel-munin to 2.0.73.
- Fixed CPANEL-46845: Update PowerDNS to 4.9.5.
- Fixed CPANEL-46906: Provide module to work with Leika data.
- Fixed CPANEL-46938: Bump cpanel-mailman version to 2.2.0-23.
- Fixed CPANEL-47116: Bump rpm.versions for Perl::Critic and PPI updates.
- Fixed CPANEL-47227: Bump rpm.versions for cpanel-php83 update.
- Fixed CPANEL-47318: Bump rpm.versions for the latest version of Perl::Tidy.
- Fixed CPANEL-47359: Add cpanel-perl-536-safe-isa to perl536-internal group.
- Fixed CPANEL-47375: Fix lines with ',,' or '=> =>' in them.
- Fixed ZC-12783: Prevent cpdavd deadlocks by isolating SSL\_CTX in child processes.
- Implemented CPANEL-46909: Teach CpKeyClt about leika data.

### 128.0.5

* * *

##### **2025-04-24**

- Fixed CPANEL-46607: Fix multiple bugs in Mailman.
- Fixed CPANEL-46872: The Consent and Gathering step of the cPanel welcome modal may be temporarily dismissed.
- Fixed RE-1399: Changed addon domain conversion to set the new account to use the inherited PHP version when appropriate.
- Fixed RE-1425: Update EOL blocker message in upcp to reference ELevate where relevant.
- Fixed RE-1477: Bump rpm.versions for cpanel-perl-536.
- Fixed RE-1487: Bump rpm.versions for cpanel-php83 8.3.20.

### 128.0.3

* * *

##### **2025-04-13**

- Fixed RE-1477: Update rpm.versions for cpanel-perl-536: CVE-2024-56406: Heap-buffer-overflow with tr//

### 128.0.2

* * *

##### **2025-04-08**

- Fixed CPANEL-46530: Update Mailman to 2.2.0.16-2: adds some limits to the one time backup that happens for mailman when upgrading to the python3 version.
- Fixed RE-1159: Allow Security Advisor to begin recommending ELevate to users of AlmaLinux 8.

### 128.0.1

* * *

##### **2025-03-27**

- Fixed HB-7224: Improve iTIP calendar invitations.
- Fixed HB-7355: Improve calendar delegation validation.
- Fixed HB-7468: Update cpanel-roundcubemail to 1.6.9.6-1.
- Fixed HB-7555: Remove attendee symlinks when original event is deleted.
- Fixed HB-7958: Add `HASDMARC` to list of restoreable CPUSER keys.
- Fixed HB-8187: Fix Roundcube conversion to sqlite when email accounts have a large amount of calendar events.
- Fixed HB-8219: Ignore 'nobody' user data for hostname if "Allow users to park subdomains of the server’s hostname" setting is enabled.
- Fixed HB-8225: Verify ability to use Spamhaus when enabling setting.
- Fixed HB-8228: Update Mailman to version 2.2.0-15 to fix module imports.
- Fixed MOON-2529: Show NS Records in cPanel interface's Zone Editor > Manage View. cPanel users cannot create, edit, or delete these records.
- Fixed MOON-2578: Modernize the Manage Account Suspension page.
- Fixed MOON-2584: Remove an obsolete cPanel feature (Change Style) from WHM > Feature Manager.
- Fixed MOON-2586: Display the information regarding user's analytics participation.
- Fixed MOON-2603: Add tracking on the link clicks on the WHM tools page.
- Fixed MOON-2604: Add analytics tracking for links in WHM’s main menu.
- Fixed MOON-2605: Improve navigation for History Reports in cPHulk.
- Fixed MOON-2606: Improved empty Mail Statistics Summary page in WHM.
- Fixed MOON-2679: Fix home symbol to accurately reflect document root when creating a new domain in cPanel.
- Fixed MOON-2682: Update descriptions of Zone Editor in WHM's Feature Manager.
- Fixed MOON-2697: Fixed issue with path shown when changing domains document root in cPanel.
- Fixed MOON-2698: Stop alerts from being obstructed in Calendar and Contacts Sharing.
- Fixed MOON-2744: Add option to change the current accounts language from the Account Preferences interface in cPanel.
- Fixed MOON-2820: Improve accessibility issues in cPanel.
- Fixed MOON-2828: Add the new strings to fix the warnings.
- Fixed MOON-2836: A "Reset Language" banner now appears on the Tools page after signing in, if your selected language doesn’t match Account settings.
- Fixed MOON-2878: Fix styling in WHM favorite cards.
- Fixed MOON-2879: Fix alignment issue on cPanel tools page.
- Fixed RE-118: Add generic EOL banner in WHM.
- Fixed RE-982: Skip slow rollout when the major version for the release and stable tier are the same.
- Fixed RE-1171: Switch to using distro provided pigz for cPanel.
- Fixed RE-1193: Remove the cpanel-pigz package.
- Fixed RE-1213: Updated the following packages to ensure file consistency across platforms: cpanel-angular-chosen, cpanel-angular-growl-2, cpanel-angular-minicolors, cpanel-bootstrap, cpanel-bootstrap-devel, cpanel-fontawesome, cpanel-git-templates, cpanel-jquery-minicolors, cpanel-moment-devel, and cpanel-yui.
- Fixed RE-1226: Do not add active root hint zones to the DNS server configuration.
- Fixed RE-1227: Update BackBlaze B2 backup transport to use the v3 API.
- Fixed RE-1274: Update cpanel-ioncube to 14.4.0 in rpm.versions.
- Fixed RE-1358: Fix IPv6 Overlap check for shared IP in Whostmgr::TweakSettings::Basic.
- Fixed RE-1393: Update cpanel-php83 to 8.3.19 in etc/rpm.versions.
- Fixed RE-1401: Ensure cpsrvd's memory limits are properly set upon startup.
- Fixed RE-1418: Update cpanel-exim to 4.98.1-2.cp118 in etc/rpm.versions to fix CVE-2025-30232.
- Fixed RE-1419: Speed up autodomain configuration during post snapshot.
- Fixed WPX-2881: Smarter tiers parsing from /etc/cpupdate.conf.
- Fixed WPX-2938: Only enable CageFS if not already enabled.
- Fixed WPX-3021: Improve bin/checkallsslcerts pre-DCV checks and error handling.
- Fixed WPX-3103: Support for Bring Your Own License (aka BYOL) with WP2.
- Fixed WPX-3714: snapshot\_prep will now do some minimal RHN cleanup on CloudLinux.
- Fixed WPX-5192: Update create and modify account templates to disable spellcheck.
- Fixed WPX-5193: Update GeoIP DB to version 20241210.
- Fixed WPX-5315: Add a new API call SSH.get\_shell to get the user shell and check if the user can access terminal.
- Fixed WPX-5339: Improve bin/manage\_hooks cleanup when removing hooks from a package.
- Fixed WPX-5344: Clicking username or domain selects or delects checkbox for terminating accounts.
- Fixed WPX-5412: Ensure the 'default' package is properly applied during transfers.
- Fixed WPX-5437: Improve WHM localization for more completeness.
- Fixed WPX-5818: Add new UAPI call: 'DomainInfo::primary\_domain'.
- Fixed WPX-6083: Update GeoIP package to 20250307 version.
- Fixed ZC-9351: Fix Optimize Website causing high CPU load.
- Fixed ZC-12552: Remove generated hostnames from Change Hostname.
- Fixed ZC-12594: Fix failure to upgrade to MariaDB 11.4.
- Implemented HB-7170: Extend RRULE handling for freebusy requests.
- Implemented WPX-1411: Enable CageFS & MySQL Governor.

#### Additional Documentation

* * *

- [110 Change Log](https://docs.cpanel.net/changelogs/110-change-log/)
- [118 Change Log](https://docs.cpanel.net/changelogs/118-change-log/)
- [120 Change Log](https://docs.cpanel.net/changelogs/120-change-log/)
- [122 Change Log](https://docs.cpanel.net/changelogs/122-change-log/)
- [124 Change Log](https://docs.cpanel.net/changelogs/124-change-log/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×