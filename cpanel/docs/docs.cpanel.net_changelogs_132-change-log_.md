---
url: "https://docs.cpanel.net/changelogs/132-change-log/"
title: "132 Change Log | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/changelogs/132-change-log/#main-content)

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
4. 132 Change Log


#### Table of Contents

[132.0.8](https://docs.cpanel.net/changelogs/132-change-log/#13208)

* * *

[132.0.7](https://docs.cpanel.net/changelogs/132-change-log/#13207)

* * *

[132.0.4](https://docs.cpanel.net/changelogs/132-change-log/#13204)

* * *

[132.0.2](https://docs.cpanel.net/changelogs/132-change-log/#13202)

* * *

[132.0.1](https://docs.cpanel.net/changelogs/132-change-log/#13201)

* * *

[132.0.0](https://docs.cpanel.net/changelogs/132-change-log/#13200)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/changelogs/132-change-log/#table-of-contents-toggle)

[132.0.8](https://docs.cpanel.net/changelogs/132-change-log/#13208)

* * *

[132.0.7](https://docs.cpanel.net/changelogs/132-change-log/#13207)

* * *

[132.0.4](https://docs.cpanel.net/changelogs/132-change-log/#13204)

* * *

[132.0.2](https://docs.cpanel.net/changelogs/132-change-log/#13202)

* * *

[132.0.1](https://docs.cpanel.net/changelogs/132-change-log/#13201)

* * *

[132.0.0](https://docs.cpanel.net/changelogs/132-change-log/#13200)

* * *

## 132 Change Log

Last modified: _2025 November 20_

* * *

### 132.0.8

* * *

##### **2025-11-13a**

- Fixed CPANEL-50161: Resolved net-snmp package dependency conflicts that could prevent upgrades from v130 to v132
- Fixed CPANEL-50178: Dovecot plaintext authentication setting now preserved when upgrading from v130 to v132
- Implemented CPANEL-50028: Updated Exim to version 4.99

### 132.0.7

* * *

##### **2025-11-06**

- Fixed CPANEL-49965: Add missing –disable flags and –from-stdin to restorepkg.
- Fixed CPANEL-50113: Ensure dovecot\_config\_version always equals dovecot version in dovecot.conf.

### 132.0.4

* * *

##### **2025-11-05**

- SEC-70235: Security Fix Disclosure coming soon.
- Fixed CPANEL-49232: Set the main shared IPv6 address as the default route for outgoing ipv6 traffic when possible.
- Fixed CPANEL-49246: Skip NS lookups for temporary domains.
- Fixed CPANEL-49422: Line-wrap the encoded SpamAssassin report in email headers to better comply with RFC 2047.
- Fixed CPANEL-49611: Fix spurious warning in xfer logs regarding doveadm syncs.
- Fixed CPANEL-49683: Update awstats pkg for CWE-78/PTT-2025-021.
- Fixed CPANEL-49700: Change occurences of 'master' to 'main' in build-tools/merge\_request.
- Fixed CPANEL-49953: Allow skipping of DKIM keys in pkgacct.
- Fixed CPANEL-49998: Change imap-master and imap-hibernate service users to be dovecot instead of dovenull.
- Fixed CPANEL-49999: Migrate disable\_plaintext\_auth config value from dovecot 2.3 to the equivalent value for dovecot 2.4.
- Fixed CPANEL-50001: Account for 0 -> unlimted change in dovecot 2.4's lmtp\_user\_concurrency\_limit.
- Fixed CPANEL-50005: Update PHP to 8.4.14.
- Fixed CPANEL-50079: Force dovecot config rebuild on update of dovecot.
- Fixed CPANEL-50079: Prevent run of install/FixSolr.pm when Solr is not installed.
- Fixed CPANEL-50079: Stop prefixing userdb/passdb returns in dovecot auth dict.
- Fixed CPANEL-50082: Update dovecot to version 2.4.2 to fix CVE-2025-30189.
- Fixed CPANEL-50093: Fix issue where HTTP::Tiny::UA was unavailable in the scope of scripts/builddovecotconf due to check\_cpanel\_pkgs run.
- Implemented CPANEL-49943: Fix config template checking in builddovecotconf regarding 2.4 parameters that should have made these checks trigger full rebuild.

### 132.0.2

* * *

##### **2025-10-16**

- Fixed CPANEL-46939: Stored XSS in Mailing List archives
  - Reporter: John Lightsey
  - Severity: 4.3 CVSS 3.1:AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:N
- Fixed CPANEL-48012: Reinitialize CardDAV config post-transfer.
- Fixed CPANEL-49472: Update PHP to 8.4.13.
- Fixed CPANEL-49530: Suppress warning in Cpanel::Config::userdata::Guard when the account is deleted before it can setup the userdata dir.
- Fixed CPANEL-49530: Migrate configuration for cpanel-dovecot-solr on upcp to a version that works with dovecot 2.4.
- Fixed CPANEL-49542: Upgrade Devel::Cover to an officially supported version for perl 5.42.
- Fixed CPANEL-49544: Fix issue where dovecot’s pop3\_uidl\_format setting retained the old format which caused failures when trying to start dovecot.
- Fixed CPANEL-49551: Fixed issue where user’s crontab does not delete when the cPanel account is terminated.
- Fixed CPANEL-49568: Change default in Mailserver Configuration for auth\_allow\_weak\_schemes to ‘yes’.
- Fixed CPANEL-49573: Update cpanel-userperl for 132.
- Fixed CPANEL-49671: Update YAML::Syck to 1.36 for CVE-2025-11683.
- Implemented CPANEL-47980: The cPanel tools page sidebar now highlights SSL certificate issues and provides direct links for users to resolve them.
- Implemented CPANEL-48174: Optimize wptk api routes.
- Implemented CPANEL-48775: Enable wp-toolkit for Ubuntu 24.

### 132.0.1

* * *

##### **2025-10-03**

- Fixed CPANEL-49525: Address errors with the SNI for non-main domains

### 132.0.0

* * *

##### **2025-09-30**

- Fixed CPANEL-37236: Enable DNS TXT records over 255 characters in WHM Zone Manager.
- Fixed CPANEL-39397: Fixed the terminal inside of cPanel to use the memory limits for the user.
- Fixed CPANEL-45613: Permit 0 as a valid value for nsec3\_iterations in PDNS.
- Fixed CPANEL-46038: Restore entries missing from “/etc/sysconfig/exim” when “Email delivery retry time” is changed.
- Fixed CPANEL-46038: Check “/etc/sysconfig/exim” for validity during nightly cPanel maintenance.
- Fixed CPANEL-46080: Improve accuracy and performance for what should be 404 requests.
- Fixed CPANEL-46582: Add local sudoers group names to reserved usernames.
- Fixed CPANEL-46705: Fixed issue with the ‘All’ filter in the DNS Zone Manager.
- Fixed CPANEL-47026: Fix WHM Add a DNS Zone to give proper ownership for system domains.
- Fixed CPANEL-47114: Transfer system now has support for automatically assigned domains.
- Fixed CPANEL-47361: WebPros ExAuthn link in WHM.
- Fixed CPANEL-47362: Add panel.ini control to WebPros SSO option.
- Fixed CPANEL-47362: Implement WebPros SSO via Leika rollout.
- Fixed CPANEL-47512: Update createacct openapi to reflect changes related to temporary domains.
- Fixed CPANEL-47562: Prevent DNS edits for temporary domains.
- Fixed CPANEL-47617: Update Cpanel::Leika user override to be an ini file.
- Fixed CPANEL-47653: Remove support for cPanel provided MySQL55 and MySQL56 on Almalinux 8. These were already unsupported on all other platforms.
- Fixed CPANEL-47662: WHM users will see the in-page banner informing about restricted usage of the DNS Zone Manager feature when user’s account does not have registered domains assigned.
- Fixed CPANEL-47686: Mailman: Fix \_pickle.UnpicklingError: Cannot import unsupported module.class ‘\_codecs.encode’.
- Fixed CPANEL-47737: Users now don’t see the Share document root checkbox after navigating to the Create a New Domain page while having temporary domain assigned as a main/primary domain. The Document Root input is displayed by default in this case. Updated tooltips placement to be consistent with other form controls.
- Fixed CPANEL-47792: Fix bugs with temp addon domain to real addon domain conversion.
- Fixed CPANEL-47871: Upgrade to clamav 1.0.9 for CVE-2025-20260.
- Fixed CPANEL-47902: Use the system SQLite3 package to read bandwidth database entries.
- Fixed CPANEL-47915: Create leika\_get\_config API calls.
- Fixed CPANEL-47922: Upgrade cpanel-dovecot to 2.41.
- Fixed CPANEL-47960: Remove the ‘HTML Editor Removal’ Notification in WHM.
- Fixed CPANEL-47960: Integrate Jodit Editor into File Manager as the new HTML Editor (beta).
- Fixed CPANEL-47992: Allow temporary domain creation when ‘Allow Remote Domains’ is false.
- Fixed CPANEL-48013: Fix bad defaults for auth policy on Ubuntu in Cpanel::Config::Auth.
- Fixed CPANEL-48042: Additional validation for temporary domain conversion.
- Fixed CPANEL-48063: Users are no longer able to see and modify personhood settings in Account Preferences page.
- Fixed CPANEL-48065: Users can no longer view or modify personhood settings in cPanel’s Welcome Modal.
- Fixed CPANEL-48066: Users can no longer view or modify personhood settings in Webmail’s Welcome Modal.
- Fixed CPANEL-48071: Users can no longer view and modify personhood settings in the WHM’s initial setup steps.
- Fixed CPANEL-48089: Analytics collection, prompts, and display are now conditional based on Leika configuration.
- Fixed CPANEL-48095: Obsolete “Forks” package in cPanel Perl.
- Fixed CPANEL-48140: Adjust RELEASE rollout logic to use a 5 day release cycle.
- Fixed CPANEL-48149: Bump rpm.versions for update to cpanel-git-2.48.2.
- Fixed CPANEL-48166: Require distros derived from RHEL 9 to be at least at version 9.5.
- Fixed CPANEL-48204: Add new Domain category hook replace\_temporary\_domain.
- Fixed CPANEL-48224: Add support for cpanel-plugins and EA4 on AlmaLinux 10.
- Fixed CPANEL-48241: Update cpanel-perl to 5.42 and related CPAN modules.
- Fixed CPANEL-48296: Update cpanel-sqlite to 3.50.3 for CVE-2025-6965.
- Fixed CPANEL-48317: Upgrade AWStats to 8.0.
- Fixed CPANEL-48354: Always allow the system to install kernel modules during initial cPanel install.
- Fixed CPANEL-48362: Allow cpanel-3rdparty-bin package to handle symlink to /usr/local/cpanel/3rdparty/bin/perl during cPanel update.
- Fixed CPANEL-48405: Ensure that email headers containing SpamAssassin reports are properly escaped to comply with RFC 2047.
- Fixed CPANEL-48408: Fixed display of yum/dnf errors during the review stage of provisioning for EasyApache 4.
- Fixed CPANEL-48436: Ensure yum-config-manager check is local-setting agnostic.
- Fixed CPANEL-48458: Ensure that image preparation scripts find the correct MySQL/MariaDB unit.
- Fixed CPANEL-48470: Do not rely on the Cpanel-OS cache in fix-cpanel-perl.
- Fixed CPANEL-48487: Catch errors initializing SSLEay object during SSL cert verification and treat it as a failure to verify.
- Fixed CPANEL-48487: Fix bug in Cpanel::SSL::Objects::Certificate::File where private keys were not separated from certificates during instantiation.
- Fixed CPANEL-48518: Handle system package repository installations which come with both obsolete and valid keys.
- Fixed CPANEL-48520: Ensure that the nscd entry in Service Manager always knows the path to the program.
- Fixed CPANEL-48521: Make Packman more resilient against bad or unexpected data on the mirrors.
- Fixed CPANEL-48540: Make dependency on “acl” package explicit for all supported RHEL-derived distributions.
- Fixed CPANEL-48552: Restore quota\_clone configuration block in dovecot.
- Fixed CPANEL-48552: Fix bug in Whostmgr::API::1::AdvConfig where setting incoming\_reached\_quota for dovecot did not also rebuild dovecot and exim’s configuration.
- Fixed CPANEL-48555: Add “Allow Weak Authentication Schemes” setting to WHM Dovecot configuration interface to allow WHM administrators to workaround login issues for users who happen to have their passwords hashed with MD5.
- Fixed CPANEL-48555: Fix missing dropdown options for Dovecot plaintext authentication setting in WHM Mail Server Configuration interface.
- Fixed CPANEL-48581: update requirejs to address CVE-2024-38999.
- Fixed CPANEL-48586: Update mailman to version 2.2.0-35.
- Fixed CPANEL-48633: Add systemd-logind to the list of services to ignore for find\_outdated\_services.
- Fixed CPANEL-48641: Handle rare file unlock condition when PID has not changed.
- Fixed CPANEL-48665: Implement API calls for in product survey.
- Fixed CPANEL-48696: Enable imunify support on Rocky 9.
- Fixed CPANEL-48716: Add cPanel support for AlmaLinux 10.
- Fixed CPANEL-48719: Users are now asked to complete the survey after logging in the WHM.
- Fixed CPANEL-48723: Change the way the MySQL community repository is installed on the system.
- Fixed CPANEL-48730: Users are now asked to complete the survey after logging in.
- Fixed CPANEL-48811: Blocked unauthenticated users from enabling debug mode via a query parameter in the URL.
- Fixed CPANEL-48836: Change tech\_domain warning to an info log entry.
- Fixed CPANEL-48843: Fix restoration issues when domains aren’t restored.
- Fixed CPANEL-48960: Fix potential race condition in the cPanel Log and Bandwidth Processor daemon.
- Fixed CPANEL-48965: Fix issue in Dovecot SNI config after 2.4 upgrade.
- Fixed CPANEL-49007: Avoid unnecessary NS lookups for temporary domains.
- Fixed CPANEL-49015: Update PHP to 8.4.12.
- Fixed CPANEL-49050: Update CGI::Simple to address CVE-2025-40927.
- Fixed CPANEL-49052: Fixed performance issue on Email Accounts interface.
- Fixed CPANEL-49082: Teach create account page to respect the unlimited radio button.
- Fixed CPANEL-49106: Update Cpanel::JSON::XS and JSON::XS to address CVE-2025-40929.
- Fixed CPANEL-49111: Arbitrary webmail account access possible for users missing ACL for feature.
- Fixed CPANEL-49116: Arbitrary file download possible for users missing ACL for filemanager feature.
- Fixed CPANEL-49149: Switch TicketSupport ssh checks to use lsof.
- Fixed CPANEL-49202: Bump rpm.versions for cpanel-clamav.
- Fixed CPANEL-49216: Bump rpm.versions for cpanel-geoipfree-data.
- Fixed CPANEL-49378: Ensure quota\_clone dict entry always exists in dovecot.conf.
- Fixed CPANEL-49379: Guard against undefined return from readdir in Cpanel::FileUtils::Dir.
- Fixed CPANEL-49456: Bump rpm.versions for cpanel-roundcubemail.
- Fixed MOON-2973: Improved accessibility in the Account Preferences page.
- Fixed WPX-7591: Improve dependency handling for optional plugins.
- Fixed WPX-7770: Do not show the ‘HTML Editor Removal Notice’ on WP2 servers.
- Fixed WPX-7895: Create TaskProcessor for clearing all users cache by key.
- Implemented CPANEL-45720: Password and API Token notification improvements.
- Implemented CPANEL-46411: Add a way to set the default dmarc record.
- Implemented CPANEL-46549: Add robots meta tag to login pages.
- Implemented CPANEL-47150: Add support for temporary domains to the Domains interface in cPanel.
- Implemented CPANEL-47291: Enable pigeonhole sieve in dovecot + roundcube.
- Implemented CPANEL-47691: Update supporting code for cpanel-dovecot to support 2.4.
- Implemented CPANEL-47819: Update KAM Spamassassin Ruleset for v132
- Implemented CPANEL-47836: Allow parking registered domain on temporary domain.
- Implemented CPANEL-48763: Add support for Ubuntu 24.

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