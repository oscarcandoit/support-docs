---
url: "https://docs.cpanel.net/changelogs/130-change-log/"
title: "130 Change Log | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/changelogs/130-change-log/#main-content)

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
4. 130 Change Log


#### Table of Contents

[130.0.16](https://docs.cpanel.net/changelogs/130-change-log/#130016)

* * *

[130.0.15](https://docs.cpanel.net/changelogs/130-change-log/#130015)

* * *

[130.0.14](https://docs.cpanel.net/changelogs/130-change-log/#130014)

* * *

[130.0.13](https://docs.cpanel.net/changelogs/130-change-log/#130013)

* * *

[130.0.12](https://docs.cpanel.net/changelogs/130-change-log/#130012)

* * *

[130.0.11](https://docs.cpanel.net/changelogs/130-change-log/#130011)

* * *

[130.0.10](https://docs.cpanel.net/changelogs/130-change-log/#130010)

* * *

[130.0.9](https://docs.cpanel.net/changelogs/130-change-log/#13009)

* * *

[130.0.7](https://docs.cpanel.net/changelogs/130-change-log/#13007)

* * *

[130.0.6](https://docs.cpanel.net/changelogs/130-change-log/#13006)

* * *

[130.0.5](https://docs.cpanel.net/changelogs/130-change-log/#13005)

* * *

[130.0.3](https://docs.cpanel.net/changelogs/130-change-log/#13003)

* * *

[130.0.2](https://docs.cpanel.net/changelogs/130-change-log/#13002)

* * *

[130.0.1](https://docs.cpanel.net/changelogs/130-change-log/#13001)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/changelogs/130-change-log/#table-of-contents-toggle)

[130.0.16](https://docs.cpanel.net/changelogs/130-change-log/#130016)

* * *

[130.0.15](https://docs.cpanel.net/changelogs/130-change-log/#130015)

* * *

[130.0.14](https://docs.cpanel.net/changelogs/130-change-log/#130014)

* * *

[130.0.13](https://docs.cpanel.net/changelogs/130-change-log/#130013)

* * *

[130.0.12](https://docs.cpanel.net/changelogs/130-change-log/#130012)

* * *

[130.0.11](https://docs.cpanel.net/changelogs/130-change-log/#130011)

* * *

[130.0.10](https://docs.cpanel.net/changelogs/130-change-log/#130010)

* * *

[130.0.9](https://docs.cpanel.net/changelogs/130-change-log/#13009)

* * *

[130.0.7](https://docs.cpanel.net/changelogs/130-change-log/#13007)

* * *

[130.0.6](https://docs.cpanel.net/changelogs/130-change-log/#13006)

* * *

[130.0.5](https://docs.cpanel.net/changelogs/130-change-log/#13005)

* * *

[130.0.3](https://docs.cpanel.net/changelogs/130-change-log/#13003)

* * *

[130.0.2](https://docs.cpanel.net/changelogs/130-change-log/#13002)

* * *

[130.0.1](https://docs.cpanel.net/changelogs/130-change-log/#13001)

* * *

## 130 Change Log

Last modified: _2025 November 5_

* * *

### 130.0.16

* * *

##### \* _2025-11-05_

- SEC-70235: Security Fix Disclosure coming soon.
- Fixed CPANEL-49246: Skip NS lookups for temporary domains.
- Fixed CPANEL-49422: Line-wrap the encoded SpamAssassin report in email headers to better comply with RFC 2047.
- Fixed CPANEL-49683: Update awstats pkg for CWE-78/PTT-2025-021.
- Fixed CPANEL-50005: Update PHP to 8.4.14.

### 130.0.15

* * *

##### **2025-10-16**

- Fixed CPANEL-46939: Stored XSS in Mailing List archives
  - Reporter: John Lightsey
  - Severity: 4.3 CVSS 3.1:AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:N
- Fixed CPANEL-48012: Reinitialize CardDAV config post-transfer.
- Fixed CPANEL-48586: Update mailman to version 2.2.0-35.
- Fixed CPANEL-49007: Avoid unnecessary NS lookups for temporary domains.
- Fixed CPANEL-49111: Arbitrary webmail account access possible for users missing ACL for feature.
- Fixed CPANEL-49116: Arbitrary file download possible for users missing ACL for filemanager feature.
- Fixed CPANEL-49139: Integrate Jodit Editor into File Manager as the new HTML Editor (beta).
- Fixed CPANEL-49139: Remove the ‘HTML Editor Removal’ Notification in WHM.
- Fixed CPANEL-49455: Bump rpm.versions for cpanel-roundcubemail.
- Fixed CPANEL-49472: Update PHP to 8.4.13.
- Fixed CPANEL-49551: Fixed issue where user’s crontab does not delete when the cPanel account is terminated.
- Fixed CPANEL-49670: Update YAML::Syck to 1.36 for CVE-2025-11683.
- Implemented CPANEL-48174: Optimize wptk api routes.

### 130.0.14

* * *

##### **2025-09-25**

- Fixed Case CPANEL-48812: Arbitrary webmail account access possible for users missing ACL for feature
  - Credit: MATETIC, Luka
  - Severity: 5.3 CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N
  - Note: The case was mis-labeled as CPANEL-46580 previously

### 130.0.13

* * *

##### **2025-09-23**

- Fixed CPANEL-49179: updateuserdomains was hiding preexisting users with reserved names.
- Fixed CPANEL-49052: Fixed performance issue on Email Accounts interface.
- Fixed CPANEL-48405: Ensure that email headers containing SpamAssassin reports are properly escaped to comply with RFC 2047
  - Reporter: Chris Pirazzi
  - Score: 6.3 CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N

### 130.0.12

* * *

##### **2025-09-17**

- Fixed CPANEL-48317: Upgrade AWStats to 8.0.
- Fixed CPANEL-48960: Fix potential race condition in the cPanel Log and Bandwidth Processor daemon.
- Fixed CPANEL-49106: Update Cpanel::JSON::XS and JSON::XS to address CVE-2025-40929.
- Fixed CPANEL-49215: Bump rpm.versions for cpanel-geoipfree-data.

### 130.0.11

* * *

##### **2025-09-10**

- Fixed CPANEL-48836: Change `tech_domain` warning to an info log entry
- Fixed CPANEL-46582: Security Update: Add local `sudoers` group names to reserved username

  - Credit: Ionut Cernica
  - CVSS Score: 6.0 CVSS:4.0/AV:N/AC:H/AT:P/PR:L/UI:N/VC:N/VI:H/VA:N/SC:N/SI:N/SA:N
- Fixed CPANEL-45613: Permit 0 as a valid value for nsec3\_iterations in PDNS

### 130.0.10

* * *

##### **2025-09-09**

- Fixed case CPANEL-48811: Security Update: Generic Unseen Parameters Discovery in resetpass.cgi
  - Blocked unauthenticated users from enabling debug mode via a query parameter in the URL.
  - Credit to reporter: adwin
  - CVSS Score: 3.7 CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N
- Fixed CPANEL-49015: Update PHP to 8.4.12.

- Fixed CPANEL-49051: Update CGI::Simple to address CVE-2025-40927.


### 130.0.9

* * *

##### **2025-08-28**

- Fixed Case CPANEL-48276: Personhood removals and Analytics Consent functionality based on Leika
  - Angular Packages updated:
    - cpanel-ng-cpanel-jupiter-account-preferences\_130.22.10-1.cp11130
    - cpanel-ng-whm-initial-setup-wizard\_130.22.6-1.cp11130
- Fixed Case CPANEL-48651: Vulnerabilities in Unbound prior 1.23.1
- Fixed Case CPANEL-48843: Fix restoration issues when domains aren't restored.

### 130.0.7

* * *

##### **2025-08-27**

- Case CPANEL-48779: Add the cpanel-requirejs-devel package back as it is still used when debugui is enabled.

### 130.0.6

* * *

##### **2025-08-21**

- Implemented CPANEL-48733: Enable Temporary domains feature in cPanel & WHM

### 130.0.5

* * *

##### **2025-08-21**

- Fixed CPANEL-48296: Update cpanel-sqlite to 3.50.3 for CVE-2025-6965.
- Fixed CPANEL-48581: update requirejs to address CVE-2024-38999.
- Fixed CPANEL-48744: WHM Notification that ConfigServer is shutting down.

### 130.0.3

* * *

##### **2025-07-16**

- Fixed CPANEL-47617: Update Cpanel::Leika user override to be an ini file.

- Fixed CPANEL-48060: Update PHP to 8.4.10.
  - Fixed GHSA-hrwm-9436-5mv3 (pgsql extension does not check for errors during escaping). (CVE-2025-1735)
  - Fixed GHSA-453j-q27h-5p8x (NULL Pointer Dereference in PHP SOAP Extension via Large XML Namespace Prefix). (CVE-2025-6491)
  - Fixed GHSA-3cr5-j632-f35r (Null byte termination in hostnames). (CVE-2025-1220)
- Fixed CPANEL-48140: Adjust RELEASE rollout logic to use a 5 day release cycle.


### 130.0.2

* * *

##### **2025-07-14**

- Fixed CPANEL-48149: Bump rpm.versions for update to cpanel-git-2.48.2. Fixes CVE-2025-27613, CVE-2025-27614, CVE-2025-46334, CVE-2025-46835, CVE-2025-48384, CVE-2025-48385, and CVE-2025-48386.
- Implemented CPANEL-48175: Restrict UI from creating temporary domain based on temporary-domain feature flag.

### 130.0.1

* * *

##### **2025-07-02**

- Fixed CPANEL-44093: By displaying the current trend icon in the Load Averages component in the WHM header, users gain better clarity on system resource load status at a glance.
- Fixed CPANEL-46029: Exclude kernel-devel\* from rpmup.
- Fixed CPANEL-46112: Added more user checks for DMARC record addition.
- Fixed CPANEL-46608: Fix uninitialized variable warnings in bandwidth DB restoration.
- Fixed CPANEL-46667: Integrated Change Password section with backend API, Implemented MixPanel tracking on form submit action.
- Fixed CPANEL-46668: Integrated Contact Preferences section with backend API, Implemented MixPanel tracking on form submit action.
- Fixed CPANEL-46705: Fixed issue with the 'All' filter in the DNS Zone Manager.
- Fixed CPANEL-46895: Grant MySQL database privileges for cPanel users who have the SUPER privilege.
- Fixed CPANEL-46985: WHM users can now choose between a temporary domain or an existing domain when creating an account.
- Fixed CPANEL-46986: Temporary domains are now supported in the Modify an Account interface from WHM.
- Fixed CPANEL-47054: Added 'is\_temporary\_domain' boolean to listaccts API.
- Fixed CPANEL-47057: Remove temporary domain on account domain modification.
- Fixed CPANEL-47059: Block email for temporary domains.
- Fixed CPANEL-47060: Exclude temporary domains from DomainInfo API unless requested.
- Fixed CPANEL-47062: UAPI Domain::is\_temporary\_domain + API2 domain updates.
- Fixed CPANEL-47091: Hide temporary domains from UAPI Email::list\_mail\_domains.
- Fixed CPANEL-47113: Block transfers of temp domains to servers that do not support it.
- Fixed CPANEL-47156: Prevent temporary domains from showing in cPanel Zone Editor.
- Fixed CPANEL-47266,CPANEL-47080,CPANEL-47086,CPANEL-47564: Multiple Mailman fixes (Mailman 2.2.0.31).
- Fixed CPANEL-47319: Ability to convert a temporary domain to a normal one.
- Fixed CPANEL-47321: Prevent Dynamic DNS page from showing temporary domains.
- Fixed CPANEL-47411: Fix template issue where certain webmail pages would not load.
- Fixed CPANEL-47428: The Create Email button is now disabled for temporary domains listed on the Domains page.
- Fixed CPANEL-47429: On the Domains page, users with temporary domains will now see a banner informing that Email Accounts cannot be created for temporary domains.
- Fixed CPANEL-47507: Prevent creating Dynamic DNS on temporary domains via UAPI.
- Fixed CPANEL-47512: Update createacct openapi to reflect changes related to temporary domains.
- Fixed CPANEL-47523: Disabled the email-enable toggle whenever a temporary domain is chosen in Manage Users Add/Edit User form and introduced an inline banner clarifying why email can’t be enabled.
- Fixed CPANEL-47527: Fix emails being sent from temp domains.
- Fixed CPANEL-47562: Prevent DNS edits for temporary domains.
- Fixed CPANEL-47569: The domain selection dropdown in Dynamic DNS configuration now excludes temporary domains. Users with only temporary domains will see an informational banner explaining that Dynamic DNS requires registered domains and advising them to contact their hosting provider.
- Fixed CPANEL-47586: Users now see in-page banner informing that Zone Editor cannot be used with the temporary domains.
- Fixed CPANEL-47587: Update Roundcube to 1.6.11 to fix CVE-2025-49113.
- Fixed CPANEL-47590: Allow addon domain creation with a temporary primary domain.
- Fixed CPANEL-47662: WHM users will see the in-page banner informing about restricted usage of the DNS Zone Manager feature when user's account does not have registered domains assigned.
- Fixed CPANEL-47678: Update cPanel PHP to 8.4.7.
- Fixed CPANEL-47737: Users now don't see the `Share document root` checkbox after navigating to the Create a New Domain page while having temporary domain assigned as a main/primary domain. The `Document Root` input is displayed by default in this case. Updated tooltips placement to be consistent with other form controls.
- Fixed CPANEL-47764: Unship cpanel-php-composer package.
- Fixed CPANEL-47792: Fix bugs with temp addon domain to real addon domain conversion.
- Fixed CPANEL-47815: Depend on distro PostgreSQL for DBD::Pg.
- Fixed DUCK-2612: Adjust the whm top webcomponent to retain existing extensibility model and make the trend arrows work togather.
- Fixed HB-7575: Clean up additional email user data when terminating mail account.
- Fixed HB-7912: Prevent event update notifications/invites from non-organizers.
- Fixed HB-8226: Fix path display names in certain DAV queries.
- Fixed RE-1477: Bump rpm.versions for cpanel-perl-536.
- Fixed WPX-5775: Improve HTTP DCV for new domains by removing the 'mail' alias and adding 'wp' and 'wp2' aliases.
- Fixed WPX-6055: Implement a ProductConfig mechanism for global product-level config.
- Fixed WPX-6754: Add ProductConfig option to not warn about missing theme in restores.
- Fixed WPX-7770: Do not show the 'HTML Editor Removal Notice' on WP2 servers.
- Fixed ZC-12783: Prevent cpdavd deadlocks by isolating SSL\_CTX in child processes.
- Implemented CPANEL-35466: Enhanced the PowerDNS error message to provide additional context from data.warnings.PowerDNS and included a link to the relevant documentation for improved clarity and user guidance.
- Implemented CPANEL-46175: Add option in transfer tool and restorepkg to not restore DNS records for an account.
- Implemented CPANEL-46605: Docs improvement to get/set\_notification\_preferences.
- Implemented CPANEL-47130: Restrict creation of email accounts for temporary domains.
- Implemented CPANEL-47131: Update several cPanel interfaces to account for restricted functionality of temporary domains.
- Implemented CPANEL-47284: Ensure temporary domains are removed upon account termination.
- Implemented CPANEL-47645: Provide better UX for temp domain users being blocked from webmail.
- Implemented CPANEL-47693: Add HTML Editor removal notice to WHM Notification center.
- Implemented HB-7304: Update Calendars and Contacts UI elements to be more uniform.
- Implemented HB-8229: Add get/set\_notification\_preferences to UAPI.
- Implemented HB-8230: Add UAPI call to change a cPanel user's system password.
- Implemented MOON-2780: Add option to change the accounts password from the Account Preferences interface in cPanel.
- Implemented MOON-2787: Add option to update contact emails to Account Preferences in cPanel.
- Implemented MOON-2796: Add ability to update notification preferences to the Account Preferences page in cPanel.
- Implemented MOON-2974: The Consent and Gathering step of the cPanel welcome modal may be temporarily dismissed.
- Implemented RE-1398: Add UAPI calls for saving and retrieving the Pushbullet access token associated with user notifications.
- Implemented RE-1421: New tweak setting to specify the file size used by the securetmp script for /tmp and /var/tmp.
- Implemented WPX-7607: Update cpanel-geoipfree-data to version 128.2-1.cp128.

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