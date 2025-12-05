---
url: "https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/"
title: "MySQL® Upgrade Information Center | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#main-content)

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
3. [SQL](https://docs.cpanel.net/knowledge-base/sql/)
4. MySQL® Upgrade Information Center


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [databases](https://docs.cpanel.net/tags/databases/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#overview)

* * *

[What if you stay on older software?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#what-if-you-stay-on-older-software)

* * *

[Upgrade MySQL](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#upgrade-mysql)

* * *

[What does the critical warning for Strict Mode mean?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#what-does-the-critical-warning-for-strict-mode-mean)

* * *

[Is it safe to check all of the boxes in Step 2 of the interface?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#is-it-safe-to-check-all-of-the-boxes-in-step-2-of-the-interface)

* * *

[Should I select Interactive upgrade or Unattended upgrade?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#should-i-select-interactive-upgrade-or-unattended-upgrade)

* * *

[How do I do this for Remote MySQL setup?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#how-do-i-do-this-for-remote-mysql-setup)

* * *

[The instructions are too complicated. I feel out of my depth.](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#the-instructions-are-too-complicated-i-feel-out-of-my-depth)

* * *

[Backup and restoration](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#backup-and-restoration)

* * *

[Backup](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#backup)

* * *

[Restoration](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#restoration)

* * *

[How will this upgrade impact me?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#how-will-this-upgrade-impact-me)

* * *

[Will this alter the appearance of my website?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-this-alter-the-appearance-of-my-website)

* * *

[Will this affect current email services production or Exim services?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-this-affect-current-email-services-production-or-exim-services)

* * *

[Will I lose files?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-i-lose-files)

* * *

[Will I lose data?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-i-lose-data)

* * *

[Will this break accounts?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-this-break-accounts)

* * *

[Will this cause site downtime? Will this break my sites?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-this-cause-site-downtime-will-this-break-my-sites)

* * *

[Will this stop services? Will it restart services?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-this-stop-services-will-it-restart-services)

* * *

[Will this cause the SQL server to stop working?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-this-cause-the-sql-server-to-stop-working)

* * *

[Will existing applications and their databases be affected by this upgrade? If so, what precautions should I take?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-existing-applications-and-their-databases-be-affected-by-this-upgrade-if-so-what-precautions-should-i-take)

* * *

[MySQL 5.5 - 5.7](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#mysql-55-57)

* * *

[How long can I keep MySQL 5.5 or 5.6?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#how-long-can-i-keep-mysql-55-or-56)

* * *

[I have MySQL 5.5. Is it advisable to go to MariaDB instead of the latest MySQL version?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#i-have-mysql-55-is-it-advisable-to-go-to-mariadb-instead-of-the-latest-mysql-version)

* * *

[Can I just upgrade to MySQL 5.6 or 5.7?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#can-i-just-upgrade-to-mysql-56-or-57)

* * *

[I want to jump more than one version ahead. Do I have to upgrade to the next version first?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#i-want-to-jump-more-than-one-version-ahead-do-i-have-to-upgrade-to-the-next-version-first)

* * *

[Other common questions](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#other-common-questions)

* * *

[How do I check my configuration settings to know if there will be a problem during or after the upgrade?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#how-do-i-check-my-configuration-settings-to-know-if-there-will-be-a-problem-during-or-after-the-upgrade)

* * *

[How do I perform a repair of my current DB?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#how-do-i-perform-a-repair-of-my-current-db)

* * *

[If I go from MySQL to MariaDB, will all databases be automatically imported or do I need to export the .sql files from all sites? What happens to existing databases?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#if-i-go-from-mysql-to-mariadb-will-all-databases-be-automatically-imported-or-do-i-need-to-export-the-sql-files-from-all-sites-what-happens-to-existing-databases)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#overview)

* * *

[What if you stay on older software?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#what-if-you-stay-on-older-software)

* * *

[Upgrade MySQL](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#upgrade-mysql)

* * *

[What does the critical warning for Strict Mode mean?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#what-does-the-critical-warning-for-strict-mode-mean)

* * *

[Is it safe to check all of the boxes in Step 2 of the interface?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#is-it-safe-to-check-all-of-the-boxes-in-step-2-of-the-interface)

* * *

[Should I select Interactive upgrade or Unattended upgrade?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#should-i-select-interactive-upgrade-or-unattended-upgrade)

* * *

[How do I do this for Remote MySQL setup?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#how-do-i-do-this-for-remote-mysql-setup)

* * *

[The instructions are too complicated. I feel out of my depth.](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#the-instructions-are-too-complicated-i-feel-out-of-my-depth)

* * *

[Backup and restoration](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#backup-and-restoration)

* * *

[Backup](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#backup)

* * *

[Restoration](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#restoration)

* * *

[How will this upgrade impact me?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#how-will-this-upgrade-impact-me)

* * *

[Will this alter the appearance of my website?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-this-alter-the-appearance-of-my-website)

* * *

[Will this affect current email services production or Exim services?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-this-affect-current-email-services-production-or-exim-services)

* * *

[Will I lose files?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-i-lose-files)

* * *

[Will I lose data?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-i-lose-data)

* * *

[Will this break accounts?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-this-break-accounts)

* * *

[Will this cause site downtime? Will this break my sites?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-this-cause-site-downtime-will-this-break-my-sites)

* * *

[Will this stop services? Will it restart services?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-this-stop-services-will-it-restart-services)

* * *

[Will this cause the SQL server to stop working?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-this-cause-the-sql-server-to-stop-working)

* * *

[Will existing applications and their databases be affected by this upgrade? If so, what precautions should I take?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#will-existing-applications-and-their-databases-be-affected-by-this-upgrade-if-so-what-precautions-should-i-take)

* * *

[MySQL 5.5 - 5.7](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#mysql-55-57)

* * *

[How long can I keep MySQL 5.5 or 5.6?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#how-long-can-i-keep-mysql-55-or-56)

* * *

[I have MySQL 5.5. Is it advisable to go to MariaDB instead of the latest MySQL version?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#i-have-mysql-55-is-it-advisable-to-go-to-mariadb-instead-of-the-latest-mysql-version)

* * *

[Can I just upgrade to MySQL 5.6 or 5.7?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#can-i-just-upgrade-to-mysql-56-or-57)

* * *

[I want to jump more than one version ahead. Do I have to upgrade to the next version first?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#i-want-to-jump-more-than-one-version-ahead-do-i-have-to-upgrade-to-the-next-version-first)

* * *

[Other common questions](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#other-common-questions)

* * *

[How do I check my configuration settings to know if there will be a problem during or after the upgrade?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#how-do-i-check-my-configuration-settings-to-know-if-there-will-be-a-problem-during-or-after-the-upgrade)

* * *

[How do I perform a repair of my current DB?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#how-do-i-perform-a-repair-of-my-current-db)

* * *

[If I go from MySQL to MariaDB, will all databases be automatically imported or do I need to export the .sql files from all sites? What happens to existing databases?](https://docs.cpanel.net/knowledge-base/sql/mysql-upgrade-information-center/#if-i-go-from-mysql-to-mariadb-will-all-databases-be-automatically-imported-or-do-i-need-to-export-the-sql-files-from-all-sites-what-happens-to-existing-databases)

* * *

## MySQL® Upgrade Information Center

Last modified: _2025 July 22_

* * *

## Overview

Due to various support and security reasons, we **strongly** recommend that you upgrade to the latest stable version of MySQL®.

It is our policy to block upgrades for various reasons, such as new memory requirements or new code that does not support deprecated software. You can read more about our deprecation plan and policy in our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/) documentation.

## What if you stay on older software?

WebPros International, LLC does **not** support end-of-life software.

If a customer continues to use an older version of software, whether MySQL or cPanel & WHM, they will encounter issues such as (but not limited to) the following:

- Components of their server may run deprecated or end-of-life versions.
- Compatibility issues with other software components or third-party software, such as WordPress®.
- Missing new features in cPanel & WHM that competitors provide.
- Security issues, which will **not** receive patches because the software has reached end-of-life status.

For example, in early 2019, many customers’ servers contained a dangerous vulnerability in outdated and unsupported versions of Exim. This urgent problem caused a lot of issues for customers.

When customers upgrade MySQL to supported versions, they can run supported software to avoid a similar scenario.

## Upgrade MySQL

We **strongly** recommend that you or your managed hosting provider upgrade MySQL as soon as possible. This can help you to avoid unexpected database incompatibility or corruption.

To upgrade your server, perform the following steps:

1. Investigate all applications that run on your server which require database services for potential compatibility issues with the new MySQL version. For example, older versions of WordPress.

2. Schedule a maintenance window and inform your customers.

3. Back up the affected cPanel & WHM servers. You can perform these backups via WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_) or through the command line.

4. Perform the upgrade with any of the following functions or interfaces:
   - The WHM API 1 [`start_background_mysql_upgrade`](https://api.docs.cpanel.net/openapi/whm/operation/start_background_mysql_upgrade/) function.
   - In cPanel & WHM version 118 and earlier, WHM’s [_MySQL/MariaDB Upgrade_](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade) interface ( _WHM » Home » SQL Services » MySQL/MariaDB Upgrade_).
   - In cPanel & WHM version 120 and later, WHM’s [_Upgrade Database Version_](https://docs.cpanel.net/whm/database-services/upgrade-database-version/) interface ( _WHM » Home » Database Services » Upgrade Database Version_).
5. Test your applications to ensure that they function properly.


If you require assistance with any issues as a result of this upgrade, you can either hire an experienced system administrator or submit a ticket through our [Customer Support Portal](https://tickets.cpanel.net/).

We provide [a listing of experienced system administrators in our forums](https://support.cpanel.net/hc/en-us/community/posts/19389562586519-System-Adminstration-Services).

### What does the critical warning for Strict Mode mean?

A MySQL server in Strict Mode will reject data change statements that contain invalid or missing values. If you have not enabled Strict Mode, MySQL will insert adjusted values for these invalid or missing values and then return a warning.

For more information about Strict Mode, read MySQL’s [Strict SQL Mode](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-strict) article.

Check your software’s documentation and system requirements to confirm that they are compatible with Strict Mode.

For example, [the current version of WordPress](https://wordpress.org/about/requirements/) is compatible with both MySQL 5.6 or greater as well as MariaDB version 10.1 or greater. This includes Strict Mode.

### Is it safe to check all of the boxes in Step 2 of the interface?

You **must** check all of the boxes on Step 2 of the interface to proceed with the upgrade.

### Should I select _Interactive upgrade_ or _Unattended upgrade_?

If you are or have access to an experienced database administrator, then you should select _Interactive upgrade_. Otherwise, you should select _Unattended upgrade_.

### How do I do this for Remote MySQL setup?

If the remote server runs cPanel & WHM, you can use the WHM API 1 [`start_background_mysql_upgrade`](https://api.docs.cpanel.net/openapi/whm/operation/start_background_mysql_upgrade/) function on the remote server.

Based on your cPanel & WHM version, you can also use one of the following interfaces:

- In cPanel & WHM version 118 and earlier, you can use WHM’s [_MySQL/MariaDB Upgrade_](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade/) interface ( _WHM » Home » SQL Services » MySQL/MariaDB Upgrade_).
- In cPanel & WHM version 120 and later, you can use WHM’s [_Upgrade Database Version_](https://docs.cpanel.net/whm/database-services/upgrade-database-version/) interface ( _WHM » Home » Database Services » Upgrade Database Version_).

If the remote server uses another platform, read and follow the upgrade instructions for that platform.

### The instructions are too complicated. I feel out of my depth.

We recommend that you hire an experienced system administrator to perform the upgrade for you. We provide [a listing of experienced system administrators in our forums](https://support.cpanel.net/hc/en-us/community/posts/19389562586519-System-Adminstration-Services).

We have simplified the upgrade process as much as possible, but you may encounter an unexpected issue. If you have an experienced system administrator or database administrator available during the conversion, they can resolve problems for you quickly and mitigate service interruptions for your customers. This is preferable to searching for a system administrator or database administrator while your customers are calling and emailing you about the server.

## Backup and restoration

### Backup

To back up databases for each account, use WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration/) interface ( _WHM » Home » Backup » Backup Configuration_).

The backup will exist in the location that you set under the _Configure Backup Directory_ section.

For more information about backup and recovery, read MySQL’s [Backup and Recovery](https://dev.mysql.com/doc/refman/5.7/en/backup-and-recovery.html) article.

### Restoration

You can use WHM’s [_Backup Restoration_](https://docs.cpanel.net/whm/backup/backup-restoration/) feature ( _WHM » Home » Backup » Backup Restoration_) to restore an individual account and its database contents.

For more information about backup and recovery, read MySQL’s [Backup and Recovery](https://dev.mysql.com/doc/refman/5.7/en/backup-and-recovery.html) article.

## How will this upgrade impact me?

The upgrade can potentially impact customers in the following ways:

- If database corruption exists, and the MySQL version upgrade cannot detect it before upgrading, then the upgrade will cause a worse state for database services. This will likely cause websites to break.
- If a large number of databases or large databases exist on the server, then the MySQL version upgrade could take a long time. This will cause an extended period of website downtime during this process.
- If the server uses third-party party software that relies on database services and they are incompatible with the new version of MySQL, then the MySQL version upgrade will break these plugins.
- If your server uses the old MySQL 5.1 password format, database users **must** update their passwords after the MySQL version upgrade.

### Will this alter the appearance of my website?

If your website uses software that is compatible with the new database version, no.

### Will this affect current email services production or Exim services?

Standard email services through Exim and Dovecot do **not** depend on MySQL services. However, if you have an email application that uses MySQL, such as a database-driven mail service, then it will **not** be available during the upgrade window.

### Will I lose files?

No, the upgrade process will not alter any files on your server’s accounts.

### Will I lose data?

No, the upgrade process will not lose any data from the databases. However, if your application software uses deprecated or removed commands, you may not be able to access that data.

We recommend that you upgrade any software that depends on these databases to use the latest command sets.

### Will this break accounts?

No, the upgrade process will not break cPanel accounts on your server.

### Will this cause site downtime? Will this break my sites?

The upgrade will cause downtime. We **strongly** recommend that you schedule a maintenance window and inform your customers when the upgrade is being performed.

### Will this stop services? Will it restart services?

The server will stop the MySQL service before performing the upgrade. If your site depends on MySQL data, then your site will be unavailable during this time.

### Will this cause the SQL server to stop working?

Only during the upgrade or if it encounters a problem during the upgrade.

### Will existing applications and their databases be affected by this upgrade? If so, what precautions should I take?

You will need to read the documentation for your applications to confirm compatibility with the new version of MySQL.

As for precautions, we **strongly** recommend that you back up your server data in case of corruption or incompatibility.

## MySQL 5.5 - 5.7

We added a [blocker](https://docs.cpanel.net/knowledge-base/cpanel-product/upgrade-blockers/) that prevents servers that run MySQL 5.5 or MySQL 5.6 from upgrading to cPanel & WHM version 132 or later.

### How long can I keep MySQL 5.5 or 5.6?

In extreme cases, you can disable all updates and keep your existing software. However, you will no longer receive support from WebPros International, LLC and will expose your server to potential security issues and vulnerabilities. You will also not be able to [upgrade](https://docs.cpanel.net/knowledge-base/cpanel-product/upgrade-blockers/) your cPanel & WHM version to 132 or later.

We **strongly** discourage you from doing this.

### I have MySQL 5.5. Is it advisable to go to MariaDB instead of the latest MySQL version?

Since MySQL 5.7, MariaDB contains several significant differences from MySQL. For a list of differences, read [MariaDB’s Function Differences Between MariaDB and MySQL](https://mariadb.com/docs/release-notes/community-server/about/compatibility-and-differences/function-differences-between-mariadb-and-mysql) documentation.

If you do **not** require any of the affected functions, then you should be able to upgrade to MariaDB. However, cPanel & WHM does **not** support migrations from MariaDB back to MySQL.

### Can I just upgrade to MySQL 5.6 or 5.7?

We **strongly** recommend that you upgrade to a supported MySQL version. For more information about the MySQL versions we support, read our [Upgrade Database Version](https://docs.cpanel.net/whm/database-services/upgrade-database-version/#available-versions) documentation.

### I want to jump more than one version ahead. Do I have to upgrade to the next version first?

No, because the system actually performs stepped upgrades as part of the upgrade process. So all you need to do is start the upgrade to your target version.

## Other common questions

### How do I check my configuration settings to know if there will be a problem during or after the upgrade?

Check the MySQL upgrade log on your server to determine if there were any issues during the upgrade.

The log files exist in the `/var/cpanel/logs/mysql_upgrade_log.YYYYMMDD-hhmmss` directory, which uses the following format:

- `YYYY` — Four-digit year.
- `MM` — Two-digit month.
- `DD` — Two-digit day.
- `hh` — Two-digit hour.
- `mm` — Two-digit minute.
- `ss` — Two-digit second.

### How do I perform a repair of my current DB?

For information on how to repair a database, read A2hosting’s [Repairing MySQL Databases and tables](https://www.a2hosting.com/kb/developer-corner/mysql/repairing-mysql-databases-and-tables) article.

### If I go from MySQL to MariaDB, will all databases be automatically imported or do I need to export the .sql files from all sites? What happens to existing databases?

If you migrate from MySQL to MariaDB, your cPanel & WHM server will automatically migrate the database contents and users to the new platform.

#### Additional Documentation

* * *

- [The dbmaptool Script](https://docs.cpanel.net/whm/scripts/the-dbmaptool-script/)
- [The dbstoregrants Script](https://docs.cpanel.net/whm/scripts/the-dbstoregrants-script/)
- [The manage\_mysql\_profiles Script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/)
- [The MysqlDump Stream](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/)
- [The rebuild\_dbmap Script](https://docs.cpanel.net/whm/scripts/the-rebuild_dbmap-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×