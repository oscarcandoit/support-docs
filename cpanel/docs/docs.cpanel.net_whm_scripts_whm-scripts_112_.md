---
url: "https://docs.cpanel.net/whm/scripts/whm-scripts/112/"
title: "WHM Scripts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/whm-scripts/112/#main-content)

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
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. WHM Scripts


[server](https://docs.cpanel.net/tags/server/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/whm-scripts/112/#overview)

* * *

[Scripts](https://docs.cpanel.net/whm/scripts/whm-scripts/112/#scripts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/whm-scripts/112/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/whm-scripts/112/#overview)

* * *

[Scripts](https://docs.cpanel.net/whm/scripts/whm-scripts/112/#scripts)

* * *

## WHM Scripts

_Valid for versions 112 through 118_

#### Version:

#### [108](https://docs.cpanel.net/whm/scripts/whm-scripts/108/)

#### [112](https://docs.cpanel.net/whm/scripts/whm-scripts/112/)

#### [120](https://docs.cpanel.net/whm/scripts/whm-scripts/120/)

#### [126](https://docs.cpanel.net/whm/scripts/whm-scripts/)

Last modified: _2025 June 4_

* * *

## Overview

The cPanel & WHM installation process adds important scripts to your server’s `/usr/local/cpanel/scripts` and `/usr/local/cpanel/bin` directories. To run a script, enter its location on the command line. For example, to run the [`upcp` script](https://docs.cpanel.net/whm/scripts/whm-scripts/112/#upcp), run the following command:

```bash
/usr/local/cpanel/scripts/upcp
```

Note:

Unless otherwise noted, use the `/usr/local/cpanel/scripts` file path for the scripts in this list.

Warning:

- When you run a script, you **must** use the script’s full file path, even if you run the script in the `/usr/local/cpanel/scripts` or `/usr/local/cpanel/bin` directory.
- Do **not** use scripts in the `/usr/local/cpanel/scripts` or `/usr/local/cpanel/bin` directories that we do **not** list in this document. You may damage your server if you run an unlisted script.

## Scripts

##### addpop

This script creates an email account.

##### auto-adjust-mysql-limits

This script updates the following MySQL® settings in the _SQL_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_):

- _Allow cPanel & WHM to determine the best value for your MySQL open\_files\_limit configuration?_
- _Allow cPanel & WHM to determine the best value for your MySQL max\_allowed\_packet configuration?_
- _Allow cPanel & WHM to determine the best value for your MySQL innodb\_buffer\_pool\_size configuration?_

For more information, read our [The `auto-adjust-mysql-limits` Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script) documentation.

##### autossl\_check

This script performs a single AutoSSL check. You can run this script for a single user, or for all users. After the script runs, the system will remove any out of date AutoSSL log files.

For more information, read our [`autossl_check` script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script) documentation.

##### backup

This script runs a manual backup in WHM via the command line.

Note:

This script exists in the `/usr/local/cpanel/bin` directory.

For more information, read our [backup script](https://docs.cpanel.net/whm/scripts/the-backup-script) documentation.

##### backups\_clean\_metadata\_for\_missing\_backups

This script removes the metadata for backup files that a user has manually removed from the system.

For more information, read our [The `backups_clean_metadata_for_missing_backups` Script](https://docs.cpanel.net/whm/scripts/the-backups_clean_metadata_for_missing_backups-script) documentation.

##### backups\_create\_metadata

This script creates metadata files for all backup types.

For more information, read our [The `backups_create_metadata` Script](https://docs.cpanel.net/whm/scripts/the-backups_create_metadata-script) documentation.

##### backups\_list\_user\_files

This script locates a user’s files in compressed, uncompressed, or incremental backups. It returns all files in the backups in Comma Separated Value (CSV) format.

For more information, read our [The `backups_list_user_files` Script](https://docs.cpanel.net/whm/scripts/the-backups_list_user_files-script) documentation.

##### backup\_restore\_manager

This script manages the backup restoration queue.

Note:

This script exists in the `/usr/local/cpanel/bin` directory.

For more information, read our [The `backup_restore_manager` Script](https://docs.cpanel.net/whm/scripts/the-backup_restore_manager-script) documentation.

##### balance\_linked\_node\_quotas

This script lets you enforce disk use quotas for distributed cPanel accounts.

For more information, read our [`balance_linked_node_quotas` script](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script) documentation.

##### build\_maxemails\_config

This script sets limits on the amount of email that users can send from domains on your server.

For more information, read our [The `build_maxemails_config` Script](https://docs.cpanel.net/whm/scripts/the-build_maxemails_config-script) documentation.

##### build\_mysql\_conf

This script builds the default MySQL configuration file.

For more information, read our [The `build_mysql_conf` Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script) documentation.

##### ccs-check

This script lets the [Calendar and Contacts Server (CSS) plugin](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server) run using your server’s SSL certificate.

For more information, read our [The `ccs-check` Script](https://docs.cpanel.net/whm/scripts/the-ccs-check-script) documentation.

##### check\_cpanel\_pkgs

This script scans every installed package file on your server for problems.

For more information, read our [The `check_cpanel_pkgs` Script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-check_cpanel_pkgs-script) documentation.

##### check\_plugin\_pkgs

This script verifies the integrity of installed plugin packages.

For more information, read our [The `check_plugin_pkgs` Script](https://docs.cpanel.net/whm/scripts/the-check_plugin_pkgs-script) documentation.

##### check\_security\_advice\_changes

This script monitors the state of WHM’s [Security Advisor](https://docs.cpanel.net/whm/security-center/security-advisor). If the state changes, the script will send a notificiation to the system administrator.

Note:

This script runs as part of the nightly maintenance script.

For more information, read our [The `check_security_advice_changes` Script](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script) documentation.

##### check\_users\_my\_cnf

This script checks cPanel accounts for any invalid `~/.my.cnf` files and renames them. This lets you view any settings in the invalid files that you may want to copy to new files.

For more information, read our [The `check_users_my_cnf` Script](https://docs.cpanel.net/whm/scripts/the-check_users_my_cnf-script) documentation.

##### checkallsslcerts

This script installs or updates a cPanel-signed hostname certificate.

For more information, read our [The `checkallsslcerts` Script](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script) documentation.

Note:

This script exists in the `/usr/local/cpanel/bin` directory.

##### chkmydns

This script performs a simple configuration check of MyDNS.

Warning:

We removed the MyDNS nameserver in cPanel & WHM version 106 and later. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan).


##### cleandns

This script removes duplicate DNS zone definitions and checks for invalid syntax in the `/etc/named.conf` file.

For more information, read our [The `cleandns` Script](https://docs.cpanel.net/whm/scripts/the-cleandns-script) documentation.

##### cleansessions

This script removes various session files for the following applications:

- phpMyAdmin
- phpPgAdmin
- Webmail applications

It also removes the following expired files:

- cPanel Password Reset session flood protect files.
- cPanel Subaccount Invitation session and flood protect files.

##### clean\_up\_temp\_wheel\_users

This script removes temporary wheel group users that cPanel Support no longer requires.

Note:

When you use WHM’s [_Grant cPanel Support Access_](https://docs.cpanel.net/whm/support/grant-cpanel-support-access) interface ( _WHM » Home » Support » Grant cPanel Support Access_) and [_Create Support Ticket_](https://docs.cpanel.net/whm/support/create-support-ticket) interface ( _WHM » Home » Support » Create Support Ticket_), the system will create temporary wheel users for cPanel Support.

##### clean\_user\_php\_sessions

This script purges expired PHP session files from a secure temporary directory.

For more information, read our [The `clean_user_php_sessions` Script](https://docs.cpanel.net/whm/scripts/the-clean_user_php_sessions-script) documentation.

##### comparecdb

This script compares the contents of two Card DataBase (CDB) format files. Specify the two CDB files that you wish to compare. For example, run the following command, where `file1` and `file2` represent the two files that you wish to compare:

```bash
/usr/local/cpanel/scripts/comparecdb file1 file2
```

##### configure\_rh\_ipv6\_firewall\_for\_cpanel

This script sets up your IPv6 firewall. Run this script if either of the following statements are true:

- You do **not** manage your IPv6 firewall rules with any other tools or utilities.
- You **cannot** connect to your IPv6 addresses or IPv6-enabled websites on port `80`.

Important:

- Only users with `root` privileges can run this script.
- The rules that this script creates remain active even if you reboot the server.
- If your server runs the AlmaLinux OS 8, CloudLinux™ 8, Rocky Linux™ 8, or Ubuntu® operating systems, we do **not** recommend that you use this script due to the way in which these operating systems manage firewalls.

This script opens the following ports:

- Port `22` for SSH.
- Port `53` for DNS.
- Port `80` for HTTP.

##### copy\_user\_mail\_as\_root

This script copies a cPanel account’s mail to or from a remote server as the `root` user.

For more information, read our [The `copy_user_mail_as_root` Script](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_root-script) documentation.

##### copy\_user\_mail\_as\_user

This script copies a cPanel account’s mail to or from a remote server as the account.

For more information, read our [The `copy_user_mail_as_user` Script](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_user-script) documentation.

##### convert\_accesshash\_to\_token

This script converts a WHM user’s access hash to an API token.

For more information, read our [The `convert_accesshash_to_token` Script](https://docs.cpanel.net/whm/scripts/the-convert_accesshash_to_token-script) documentation.

##### convert\_mdbox\_to\_maildir

This script converts mailboxes from mdbox format to maildir format.

For more information, read our [The `convert_mdbox_to_maildir` Script](https://docs.cpanel.net/whm/scripts/the-convert_mdbox_to_maildir-script) documentation.

##### convert\_maildir\_to\_mdbox

This script converts mailboxes from maildir format to mdbox format.

For more information, read our [The `convert_maildir_to_mdbox` Script](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script) documentation.

##### convert\_roundcube\_mysql2sqlite

This script converts the Roundcube database from MySQL to SQLite.

For more information about this script, read our [How to Convert Roundcube to SQLite](https://docs.cpanel.net/knowledge-base/webmail/how-to-convert-roundcube-to-sqlite) documentation.

##### cpaddonsup

This script updates the [cPAddons](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#addons-cpaddons) service. This script does **not** run on servers that use the Ubuntu operating system.

##### cpanel\_dovecot\_solr\_rebuild\_index

This script rebuilds your Apache Solr™ index files if they become corrupt.

Note:

This script exists in the `/usr/local/cpanel/3rdparty/scripts` directory.

For more information, read our [The `cpanel_dovecot_solr_rebuild_index` Script](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script) documentation.

##### cpbackup

This script backs up all cPanel accounts.

##### cpdig

This script performs a DNS query with cPanel & WHM’s DNS resolver. This script’s result should equal the `dig +trace` command’s end result. For example, run the following command, where `www.example.com` is a domain and `AAAA` is a type of domain record:

```bash
cpdig www.example.com AAAA
```

##### cpuser\_port\_authority

This script assigns one or more five-digit port numbers for a user’s exclusive use.

For more information, read our [The `cpuser_port_authority` Script](https://docs.cpanel.net/whm/scripts/the-cpuser_port_authority-script) documentation.

##### dbmaptool

This script grants ownership of databases and database users to a cPanel account.

Note:

This script exists in the `/usr/local/cpanel/bin` directory.

For more information, read our [The `dbmaptool` Script](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script) documentation.

##### dbstoregrants

This script synchronizes MySQL user’s grants for the YAML and JSON files in the `/var/cpanel/databases/` directory.

Note:

This script exists in the `/usr/local/cpanel/bin` directory.

For more information, read our [The `dbstoregrants` Script](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script) documentation.

##### delpop

This script removes an email account.

##### dnssec-cluster-keys

This script syncs and revokes currently active DNSSEC keys in a DNS cluster.

For more information, read our [The `dnssec-cluster-keys` Script](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script) documentation.

##### dovecot\_maintenance

This script performs the following tasks:

- Purges deleted messages from mdbox users who have logged in after the last time the script ran.

- Purges expired Apple® Push Notification service (APNs) registrations.


Note:

This script runs while the nightly maintenance script runs.

##### dumpcdb

This script displays the contents of a CDB file. Specify the CDB file that you wish to view. For example, run the following command, where file represents the `file` that you wish to view:

```bash
/usr/local/cpanel/scripts/dumpcdb file
```

##### ea4\_fresh\_install

This script installs EasyApache 4.

##### email\_hold\_maintenance

This script removes the tracking file for email hold on mail to release or delete from the mail queue.

##### empty\_user\_trash

This script purges expired files from `.trash` folders in user home directories. To set the expiration time, use the _Age of content to purge from users’ File Manager Trash_ setting in the _System_ section of the WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

Note:

- This script runs while the nightly maintenance script runs.
- This script exists in the `/usr/local/cpanel/bin` directory.

##### enable\_spf\_dkim\_globally

This script enables SPF and DKIM for every cPanel user on the server. Then it creates SPF and DKIM records for all of these users’ domains.

For more information, read our [The `enable_spf_dkim_globally` Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script) documentation.

##### eximstats\_spam\_check

This script scans the `eximstats` database and counts the number of emails that every domain on the server has sent in the previous hour. If a domain exceeds the preconfigured threshold of unique outbound messages (excluding mailing lists), the system will log an alert. Use the following settings in the Mail section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_) to configure this script:

- _Number of unique recipients per hour to trigger potential spammer notification_ — Configure the threshold value of unique outbound messages.
- _Select the action for the system to take on an email account when it detects a potential spammer_ — Configure the script to take no action, hold, or reject additional outbound messages if the domain exceeds the threshold value.

##### export\_horde\_calendars\_to\_ics

This script exports Horde calendars to files in `.ics` format. You can then import these files into [Roundcube](https://docs.cpanel.net/webmail/webmail-clients/#roundcube).

For more information, read our [The `export_horde_calendars_to_ics` Script](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script) documentation.

##### export\_horde\_contacts\_to\_vcf

This script exports Horde contacts to files in `.vcf` format. You can then import these files into [Roundcube](https://docs.cpanel.net/webmail/webmail-clients/#roundcube).

For more information, read our [The `export_horde_contacts_to_vcf` Script](https://docs.cpanel.net/whm/scripts/the-export_horde_contacts_to_vcf-script) documentation.

##### exportmydnsdb

This script exports zones from MyDNS for BIND and NSD to use.

Warning:

We removed the MyDNS and NSD nameservers in cPanel & WHM version 106 and later. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan).


##### find\_and\_fix\_rpm\_issues

This script detects issues with your server’s package database and, if problems exist, rebuilds the database. This script does **not** run on servers that use the Ubuntu operating system.

For more information, read our [The `find_and_fix_rpm_issues` Script](https://docs.cpanel.net/whm/scripts/the-find_and_fix_rpm_issues-script) documentation.

##### find\_outdated\_services

This script checks all services to determine whether they require a restart. An outdated service is any service that depends on a library that is no longer present on the system.

For more information, read our [The `find_outdated_services` Script](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script) documentation.

##### fix\_addon\_permissions

This script adjusts the permissions on [cPAddon](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#addons-cpaddons)-specific files that contain sensitive information. This script **only** adjusts cPAddons that follow cPanel & WHM’s tight security model.

Warning:

Some cPAddons possess security-sensitive files, such as files that contain passwords in clear text. cPAddons that exist on servers that do **not** use the `mpm-itk`, `mod_ruid2`, or `mod_suphp` modules require additional file permission adjustments to prevent security issues between users. For security reasons, we do **not** recommend that you install any cPAddons on shared hosting servers without one of these modules.

##### fix\_dns\_zone\_ttls

This script fixes problems with [TTL](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#ttl) values in [DNS zone files](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#zone).

For more information, read our [The fix\_dns\_zone\_ttls Script](https://docs.cpanel.net/whm/scripts/the-fix_dns_zone_ttls-script) documentation.

##### fixmailinglistperms

This script repairs permissions for all mailing list files and directories.

##### fixndc

This script resolves `ndc connection refused` errors. To use this script, run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>/scripts/upcp<br>/scripts/fixndc<br>/scripts/fixndc<br>``` |

Important:

You must run the `/scripts/fixndc` script twice.

##### fix-web-vhost-configuration

This script scans each user’s web virtual host (vhost) configuration files and removes excess alias names from the `serveralias` parameter.

For more information, read our [The `fix-web-vhost-configuration` Script](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script) documentation.

##### hook

This script executes [standardized hooks](https://api.docs.cpanel.net/guides/guide-to-standardized-hooks/).

For more information, read our [The `hook` Script](https://docs.cpanel.net/whm/scripts/the-hook-script) documentation.

##### importmydnsdb

This script imports zone information into NSD from MyDNS or BIND.

Warning:

We removed the MyDNS and NSD nameservers in cPanel & WHM version 106 and later. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan).


##### install\_cpaddons

This script manages the [cPAddon](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#addons-cpaddons) third-party software packages.

Note:

- This script runs while the nightly maintenance script runs.
- This script exists in the `/usr/local/cpanel/bin/` directory.
- This script does **not** run on servers that use the Ubuntu operating system.

##### install\_cpanel\_analytics

This script installs the [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics) plugin.

##### install\_dovecot\_fts

This script enables Internet Message Access Protocol (IMAP) Full-Text Search (FTS) Indexing (powered by Aparche Solr™). This service provides fast search capabilities for IMAP mailboxes.

For more information, read our [The `install_dovecot_fts` Script](https://docs.cpanel.net/whm/scripts/the-install_dovecot_fts-script) documentation.

##### install\_plugin

This script installs a [cPanel plugin](https://api.docs.cpanel.net/guides/guide-to-perl/).

Important:

Only the `root` user can run this script.

For more information, read our [The `install_plugin` Script](https://docs.cpanel.net/whm/scripts/the-install_plugin-script) documentation.

##### installpostgres

This script installs PostgreSQL®. This script does **not** run on servers that use the Ubuntu operating system.

##### is\_script\_stuck

This script checks how long a script’s current proces ID (PID) has run. It can also notify a WHM user or kill the process.

Note:

This script exists in the `/usr/local/cpanel/bin` directory.

For more information, read our [The `is_script_stuck` Script](https://docs.cpanel.net/whm/scripts/the-is_script_stuck-script) documentation.

##### maintenance

This script performs system updates. It also terminates the processes that you specify in WHM’s [_Background Process Killer_](https://docs.cpanel.net/whm/system-health/background-process-killer) interface ( _WHM » Home » System Health » Background Process Killer_).

Note:

This script runs while the `/usr/local/cpanel/scripts/upcp` script runs.

##### manage\_greylisting

This script manages the [Greylisting](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#greylisting) service.

For more information, read our [The `manage_greylisting` Script](https://docs.cpanel.net/whm/scripts/the-manage-greylisting-script) documentation.

##### manage\_mysql\_profiles

This script allows you to import and export MySQL profiles.

For more information, read our [The `manage_mysql_profiles` Script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script) documentation.

##### modify\_accounts

This script updates the theme for specific accounts on the server.

For more information, read our [The `modify_accounts` Script](https://docs.cpanel.net/whm/scripts/the-modify_accounts-script) documentation.

##### modify\_packages

This script updates the theme for specific packages on the server.

For more information, read our [The `modify_packages` Script](https://docs.cpanel.net/whm/scripts/the-modify_packages-script) documentation.

##### modsec\_vendor

This script manages the vendors in your server’s ModSecurity® installation.

For more information, read our [The `modsec_vendor` Script](https://docs.cpanel.net/whm/scripts/the-modsec_vendor-script) documentation.

##### onboot\_handler

This script runs any scripts that exist in the `/var/cpanel/on_boot` and `/usr/local/cpanel/libexec/on_boot` directories.

Note:

- The system runs scripts that exist in `/var/cpanel/on_boot` and `/usr/local/cpanel/libexec/on_boot` automatically when it reboots.
- This script exists in the `/usr/local/cpanel/bin/` directory.

For more information, read our [The `onboot_handler` Script](https://docs.cpanel.net/whm/scripts/the-onboot_handler-script) documentation.

##### php\_fpm\_config

This script installs configuration files when you manually edit the [PHP-FPM configuration files](https://docs.cpanel.net/knowledge-base/php-fpm/configuration-values-of-php-fpm).

For more information, read our [The `php_fpm_config` Script](https://docs.cpanel.net/whm/scripts/the-php_fpm_config-script) documentation.

##### pkgacct

This script creates a backup file for a cPanel account.

For more information, read our [The `pkgacct` Script](https://docs.cpanel.net/whm/scripts/the-pkgacct-script) documentation.

##### post\_snapshot

This script updates configurations on a system created from an image. This script automatically runs upon the first boot for images created using the [`snapshot_prep` script](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script).

Note:

For images created using the `--no-post-service` option for the the [`snapshot_prep` script](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script), you must run this script manually.

For more information, read our [The `post_snapshot` Script](https://docs.cpanel.net/whm/scripts/the-post_snapshot-script) documentation.

##### process\_site\_templates

This script processes template files and user-provided data to create a [Site Publisher](https://docs.cpanel.net/cpanel/domains/site-publisher) website.

For more information, read our [The `process_site_templates` Script](https://docs.cpanel.net/whm/scripts/the-process_site_templates-script) documentation.

##### purge\_modsec\_log

This script removes stale records from the `modsec` database.

##### realperlinstaller

This script automates the installation of [Comprehensive Perl Archive Network (CPAN) modules](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#comprehensive-perl-archive-network-cpan).

##### rebuildhttpdconf

This script rebuilds Apache®’s main configuration file.

For more information, read our [The `rebuildhttpdconf` Script](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script) documentation.

##### rebuild\_available\_addons\_packages\_cache

Important:

We renamed this script from `rebuild_available_rpm_addons_cache` to `rebuild_available_addons_packages_cache` in cPanel & WHM version 102.

This script rebuilds the available package-based [cPAddons](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#addons-cpaddons) cache in the `/var/cpanel/available_addons_packages.cache` file.

##### rebuild\_dbmap

This script rebuilds a user’s corrupted database map.

For more information, read our [The `rebuild_dbmap` Script](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script) documentation.

##### rebuild\_phpconf

This script manages your server’s default PHP version and PHP handlers in EasyApache 4.

Note:

This script exists in the `/usr/local/cpanel/bin/` directory.

For more information, read our [The `rebuild_phpconf` Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script) documentation.

##### rebuild\_whm\_chrome

This script rebuilds the PHP cache of the WHM interface’s header and footer (chrome) files. This includes the WHM’s interface’s left navigation panel. When you run the script, it processes these files for the `root` user and all resellers, then saves the results to files you can use to develop third-party plugins.

Important:

When you run this script, the system will remove the previous save files before it recreates them.

For information about WHM plugins, read our [Guide to WHM Plugins](https://api.docs.cpanel.net/guides/guide-to-whm-plugins/) documentation.

##### remote\_log\_transfer

This script copies the main system and user logs from a server to a remote backup destination you set in WHM. For more information, read our [The `remote_log_transfer` Script](https://docs.cpanel.net/whm/scripts/the-remote_log_transfer-script/) documentation.

##### remove\_dovecot\_index\_files

This script removes the [Dovecot](https://www.dovecot.org/) index logs and cache files from cPanel email accounts.

For more information, read our [The `remove_dovecot_index_files` Script](https://docs.cpanel.net/whm/scripts/the-remove_dovecot_index_files-script) documentation.

##### removeacct

This script removes a cPanel account.

For more information, read our [The `removeacct` Script](https://docs.cpanel.net/whm/scripts/the-removeacct-script) documentation.

##### rescan\_user\_dovecot\_fts

This script performs a full text search (FTS) scan on a cPanel account’s mailboxes.

For more information, read our [The `rescan_user_dovecot_fts` Script](https://docs.cpanel.net/whm/scripts/the-rescan_user_dovecot_fts-script) documentation.

##### restartsrv

This script restarts a specific service.

For more information, read our [The `restartsrv` Scripts](https://docs.cpanel.net/whm/scripts/the-restartsrv-script) documentation.

##### restorepkg

This script lets you restore a cPanel account from a backup file.

For more information, read our [The `restorepkg` Script](https://docs.cpanel.net/whm/scripts/the-restorepkg-script) documentation.

##### runstatsonce

This script updates all user statistics.

##### runweblogs

This script updates a user’s statistics. To run this script, use the following command, where `username` is the cPanel account username:

```bash
/usr/local/cpanel/scripts/runweblogs username
```

##### secureit

This script secures permissions on your server.

For more information, read our [The `secureit` Script](https://docs.cpanel.net/whm/scripts/the-secureit-script) documentation.

##### securemysql

This script secures a cPanel account’s MySQL configuration.

For more information, read our [The `securemysql` Script](https://docs.cpanel.net/whm/scripts/the-securemysql-script) documentation.

##### securetmp

This script mounts the `/tmp` partition to a temporary file for extra security.

For more information, read our [The `securetmp` Script](https://docs.cpanel.net/whm/scripts/the-securetmp-script) documentation.

##### servers\_queue

This script manages server queue tasks. cPanel & WHM’s task queue system uses this script.

Note:

This script exists in the `/usr/local/cpanel/bin` directory.

For more information, read our [The `servers_queue` Script](https://docs.cpanel.net/whm/scripts/the-servers-queue-script) documentation.

##### servicedomains

This scripts allows you to create service subdomain DNS records for a cPanel, WHM, or Webmail account from the command line.

For more information, read our [The `servicedomains` Script](https://docs.cpanel.net/whm/scripts/the-servicedomains-script).

##### set\_php\_memory\_limits

This script adjusts the `memory_limit` directive value for all versions of PHP in the `/opt/cpanel/` directory. It uses the server’s available memory to determine an appropriate value.

Important:

You **must** use the `--run` flag to execute this script.

For information about the `memory_limit` directive, read our [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm) interface ( _WHM » Home » Software » MultiPHP INI Editor_) documentation.

##### set-tls-settings

This script manages a server’s Secure Socket Layer (SSL) and Transport Layer Security (TLS) cipher suites and protocols. You can use this script to configure the following services:

- Web Disk (`cpdavd`).
- The cPanel & WHM server (`cpsrvd`).
- Exim (`exim`).
- The Dovecot mail server (`dovecot`).

Note:

This script exists in the `/usr/local/cpanel/bin` directory.

For more information, read our [The `set-tls-settings` Script](https://docs.cpanel.net/whm/scripts/the-set-tls-settings-script) documentation.

##### setupftpserver

This script allows you to select your server’s FTP server, configure anonymous FTP services, or disable FTP services.

For more information, read our [The `setupftpserver` script](https://docs.cpanel.net/whm/scripts/the-setupftpserver-script) documentation.

##### setup\_greylist\_db

This script creates the greylist SQLite database. It also allows you to add common email services to the trusted hosts list.

For more information, read our [The `setup_greylist_db` Script](https://docs.cpanel.net/whm/scripts/the-setup_greylist_db-script) documentation.

##### setup\_modsec\_db

This script creates the `modsec` MySQL database and user.

Note:

Running this script does **not** clear any existing MySQL database or user data.

##### setupmailserver

This script lets you select a mail server.

Note:

cPanel & WHM **only** ships with the Dovecot mail server.

For more information, read our [The `setupmailserver` Script](https://docs.cpanel.net/whm/scripts/the-setupmailserver-script) documentation.

##### setupnameserver

This script allows you to switch between DNS servers.

Warning:

We removed the MyDNS and NSD nameservers in cPanel & WHM version 106 and later. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan).


##### slurp\_exim\_mainlog

This script imports all unarchived Exim `exim_mainlog` data in the `/var/log/` directory into the `eximstats` database.

For more information, read our [The `slurp_exim_mainlog` Script](https://docs.cpanel.net/whm/scripts/the-slurp_exim_mainlog-script) documentation.

##### snapshot\_prep

This script prepares your server to create a deployment image.

For more information, read our [The `snapshot_prep` Script](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script) documentation.

##### spf\_installer

This script adds SPF records to all of a user’s domains’ zone files.

Note:

This script exists in the `/usr/local/cpanel/bin` directory.

For more information, read our [The `spf_installer` Script](https://docs.cpanel.net/whm/scripts/the-spf_installer-script) documentation.

##### suspendacct

This script suspends a cPanel account.

For more information, read our [The `suspendacct` Script](https://docs.cpanel.net/whm/scripts/the-suspendacct-script) documentation.

##### swapip

This script lets you update a domain’s IP address in the zone file. It will update the domain’s source IP address with the destination server’s IP address.

Note:

This script exists in the `/usr/local/cpanel/bin` directory.

For more information, read our [The `swapip` Script](https://docs.cpanel.net/whm/scripts/the-swapip-script) documentation.

##### sync\_child\_accounts

This script synchronizes a [distributed cPanel account](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#distributed-cpanel-account) between a [parent node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#parent-node) and its [child nodes](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#child-node).

For more information, read our [The `sync_child_accounts` Script](https://docs.cpanel.net/whm/scripts/the-sync_child_accounts-script) documentation.

##### sync-mysql-users-from-grants

This script creates default MySQL or MariaDB users for any cPanel users that require them.

Note:

When you enable MySQL or MariaDB, the system automatically performs this function. In most cases, you do not need to run this script.

##### transfer\_account\_as\_user

This script transfers a cPanel account from a remote server to the local server. When you run the script, it authenticates as the cPanel account on the remote server.

For more information, read our [The `transfer_account_as_user` Script](https://docs.cpanel.net/whm/scripts/the-transfer_account_as_user-script) documentation.

##### transfer\_accounts\_as\_root

This script transfers one or more cPanel accounts from a remote server to the local server.

For more information, read our [The `transfer_accounts_as_root` Script](https://docs.cpanel.net/whm/scripts/the-transfer_accounts_as_root-script) documentation.

##### try-later

This script executes a user-defined `check` command at a specified interval. If the `check` command returns an error, it retries as often as the `max-retries` option allows. When the check succeeds, a user-defined `action` command runs.

For more information, read our [The `try-later` Script](https://docs.cpanel.net/whm/scripts/the-try-later-script) documentation.

##### uninstall\_cpanel\_analytics

This script uninstalls the [cPanel Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics) plugin.

Important:

Only users with `root` privileges can run this script.

##### uninstall\_plugin

This script uninstalls a [cPanel plugin](https://api.docs.cpanel.net/guides/guide-to-cpanel-plugins/).

For more information, read our [The `uninstall_plugin` Script](https://docs.cpanel.net/whm/scripts/the-uninstall_plugin-script) documentation.

##### unlink\_service\_account

This script restores a service account to an unlinked state.

##### unsuspendacct

This script unsuspends a cPanel account.

Note:

Unsuspending an account also removes [service proxying](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#service-proxying).

For more information, read the [the `unsuspend` script](https://docs.cpanel.net/whm/scripts/the-unsuspendacct-script/) script documentation.

##### upcp

This script updates cPanel & WHM.

For more information, read our [The `upcp` Script](https://docs.cpanel.net/whm/scripts/the-upcp-script) documentation.

##### upcp-running

This script determines whether the `upcp` script is currently running.

For more information, read our [The `upcp-running` Script](https://docs.cpanel.net/whm/scripts/the-upcp-running-script) documentation.

##### update\_existing\_mail\_quotas\_for\_account

This script will update the quota for all existing email accounts for a given user or for all users on the system.

For more information, read our [The `update_existing_mail_quotas_for_account` Script](https://docs.cpanel.net/whm/scripts/the-update_existing_mail_quotas_for_account-script) documentation.

##### update-packages

This script updates the system software for all users.

Important:

We renamed this script from `rpmup` to `update-packages` in cPanel & WHM version 102.

##### updateuserdomains

This script will update the `/etc/userdomains` entries based on the `/var/cpanel/`users directory.

##### upgrade\_subaccount\_databases

This script verifies and upgrades the [Subaccount](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#subaccount) database table schemas for each cPanel account.

##### view\_transfer

This script lets you view the logs for a transfer or restore session.

Note:

This script exists in the `/usr/local/cpanel/bin` directory.

For more information, read our [The `view_transfer` Script](https://docs.cpanel.net/whm/scripts/the-view_transfer-script) documentation.

##### vps\_optimizer

This script optimizes the _Maximum Children_ settings for Apache SpamAssassin™ for the amount of memory on your server.

For more information about the _Maximum Children_ setting, read our [Spamd Startup Configuration](https://docs.cpanel.net/whm/email/spamd-startup-configuration) documentation.

##### whmlogin

This script generates a single-use session login URL for WHM.

##### wwwacct

This script creates a cPanel account.

For more information, read our [The `wwwacct` Script](https://docs.cpanel.net/whm/scripts/the-wwwacct-script) documentation.

#### Additional Documentation

* * *

- [The balance\_linked\_node\_quotas Script](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/)
- [The build\_mysql\_conf Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)
- [The find\_outdated\_services Script](https://docs.cpanel.net/whm/scripts/the-find_outdated_services-script/)
- [The try-later Script](https://docs.cpanel.net/whm/scripts/the-try-later-script/)
- [WHM Scripts](https://docs.cpanel.net/whm/scripts/whm-scripts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×