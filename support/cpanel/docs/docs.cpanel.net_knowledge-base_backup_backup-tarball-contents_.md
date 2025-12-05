---
url: "https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/"
title: "Backup Tarball Contents | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#main-content)

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
3. [Backup](https://docs.cpanel.net/knowledge-base/backup/)
4. Backup Tarball Contents


[backups](https://docs.cpanel.net/tags/backups/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#overview)

* * *

[Directories](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#directories)

* * *

[authnlinks](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#authnlinks)

* * *

[apache\_tls](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#apachetls)

* * *

[bandwidth](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#bandwidth)

* * *

[bandwidth\_db](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#bandwidthdb)

* * *

[counters](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#counters)

* * *

[cp](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#cp)

* * *

[cron](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#cron)

* * *

[ccs](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#ccs)

* * *

[customizations](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#customizations)

* * *

[dnssec\_keys](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#dnsseckeys)

* * *

[dnszones](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#dnszones)

* * *

[domainkeys](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#domainkeys)

* * *

[homedir](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#homedir)

* * *

[httpfiles](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#httpfiles)

* * *

[ips](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#ips)

* * *

[locale](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#locale)

* * *

[logs](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#logs)

* * *

[mm](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mm)

* * *

[mma](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mma)

* * *

[mms](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mms)

* * *

[mysql](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mysql)

* * *

[mysql-timestamps](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mysql-timestamps)

* * *

[psql](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#psql)

* * *

[resellerconfig](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#resellerconfig)

* * *

[resellerfeatures](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#resellerfeatures)

* * *

[resellerpackages](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#resellerpackages)

* * *

[ssl](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#ssl)

* * *

[sslcerts](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#sslcerts)

* * *

[sslkeys](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#sslkeys)

* * *

[suspended](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#suspended)

* * *

[suspendinfo](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#suspendinfo)

* * *

[userconfig](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#userconfig)

* * *

[userdata](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#userdata)

* * *

[va](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#va)

* * *

[vad](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#vad)

* * *

[vf](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#vf)

* * *

[Files without a directory](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#files-without-a-directory)

* * *

[addons](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#addons)

* * *

[autossl.json](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#autossljson)

* * *

[bandwidth\_db.json](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#bandwidthdbjson)

* * *

[bandwidth\_db.data.json](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#bandwidthdbdatajson)

* * *

[digestshadow](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#digestshadow)

* * *

[has\_sslstorage](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#hassslstorage)

* * *

[homedir\_paths](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#homedirpaths)

* * *

[mysql.sql](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mysqlsql)

* * *

[mysql\_host\_notes.json](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mysqlhostnotesjson)

* * *

[nobodyfiles](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#nobodyfiles)

* * *

[pds](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#pds)

* * *

[proftpdpasswd](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#proftpdpasswd)

* * *

[quota](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#quota)

* * *

[sds](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#sds)

* * *

[sds2](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#sds2)

* * *

[shadow](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#shadow)

* * *

[shell](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#shell)

* * *

[version](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#version)

* * *

[webcalls.json](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#webcallsjson)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#overview)

* * *

[Directories](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#directories)

* * *

[authnlinks](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#authnlinks)

* * *

[apache\_tls](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#apachetls)

* * *

[bandwidth](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#bandwidth)

* * *

[bandwidth\_db](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#bandwidthdb)

* * *

[counters](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#counters)

* * *

[cp](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#cp)

* * *

[cron](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#cron)

* * *

[ccs](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#ccs)

* * *

[customizations](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#customizations)

* * *

[dnssec\_keys](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#dnsseckeys)

* * *

[dnszones](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#dnszones)

* * *

[domainkeys](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#domainkeys)

* * *

[homedir](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#homedir)

* * *

[httpfiles](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#httpfiles)

* * *

[ips](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#ips)

* * *

[locale](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#locale)

* * *

[logs](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#logs)

* * *

[mm](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mm)

* * *

[mma](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mma)

* * *

[mms](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mms)

* * *

[mysql](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mysql)

* * *

[mysql-timestamps](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mysql-timestamps)

* * *

[psql](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#psql)

* * *

[resellerconfig](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#resellerconfig)

* * *

[resellerfeatures](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#resellerfeatures)

* * *

[resellerpackages](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#resellerpackages)

* * *

[ssl](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#ssl)

* * *

[sslcerts](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#sslcerts)

* * *

[sslkeys](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#sslkeys)

* * *

[suspended](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#suspended)

* * *

[suspendinfo](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#suspendinfo)

* * *

[userconfig](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#userconfig)

* * *

[userdata](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#userdata)

* * *

[va](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#va)

* * *

[vad](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#vad)

* * *

[vf](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#vf)

* * *

[Files without a directory](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#files-without-a-directory)

* * *

[addons](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#addons)

* * *

[autossl.json](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#autossljson)

* * *

[bandwidth\_db.json](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#bandwidthdbjson)

* * *

[bandwidth\_db.data.json](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#bandwidthdbdatajson)

* * *

[digestshadow](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#digestshadow)

* * *

[has\_sslstorage](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#hassslstorage)

* * *

[homedir\_paths](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#homedirpaths)

* * *

[mysql.sql](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mysqlsql)

* * *

[mysql\_host\_notes.json](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#mysqlhostnotesjson)

* * *

[nobodyfiles](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#nobodyfiles)

* * *

[pds](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#pds)

* * *

[proftpdpasswd](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#proftpdpasswd)

* * *

[quota](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#quota)

* * *

[sds](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#sds)

* * *

[sds2](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#sds2)

* * *

[shadow](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#shadow)

* * *

[shell](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#shell)

* * *

[version](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#version)

* * *

[webcalls.json](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/#webcallsjson)

* * *

## Backup Tarball Contents

_Valid for versions 102 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/)

Last modified: _2024 November 5_

* * *

## Overview

Warning:

cPanel & WHM does **not** recommend using this file as an integration end point. The contents of this file can change at any time.

When you create a backup, the system creates a tarball (`.tar.gz`) file, which contains compressed versions of an account’s files. The system uses the `USERNAME.tar.gz` file format, where `USERNAME` is the cPanel account’s username. To view the contents of this file, you can:

- Download the `tar.gz` file and extract its contents.
- On the command line, use the `tar -tvf USER.tar.gz` command, where `USER` is the account username. This displays all of the backup file’s contents. It does not extract the file’s contents.

Note:

The backup process runs as the cPanel user for whom it backs up data. The system includes all of the files the account owns in the backup file. It also includes any files that the account does not own but can access in the backup file. However, the system will not back up any files the account does **not** own and **cannot** access.

#### Create a backup in WHM

You can create an account backup file in WHM with one of the following methods:

- In WHM’s [_Backup Configuration_](https://docs.cpanel.net/whm/backup/backup-configuration) interface ( _WHM » Home » Backup » Backup Configuration_).
- Use WHM’s [`backup` script](https://docs.cpanel.net/whm/scripts/the-backup-script).
- Use WHM API 1’s [Backup functions](https://api.docs.cpanel.net/whm/introduction/).

#### Create a backup in cPanel

You can create an account backup file in cPanel with one of the following methods:

- In cPanel’s [_Backup_](https://docs.cpanel.net/cpanel/files/backup-for-cpanel) interface ( _cPanel » Home » Files » Backup_).
- Use UAPI’s [Backup functions](https://api.docs.cpanel.net/cpanel/introduction/).

## Directories

The following entries are the file directories in an account’s backup file:

### authnlinks

The `/authnlinks` directory contains the account’s [external authentication](https://docs.cpanel.net/whm/security-center/manage-external-authentications) data. This directory only appears if the account uses external authentication.

### apache\_tls

The `/apache_tls` directory contains the account’s domain files. The files in this directory contain the private keys and SSL certificates for each domain that exists on the account.

### bandwidth

The system stores bandwidth information in the `bandwidth.json` file. The system creates the `/bandwidth` directory in the backup file, but does not store any data in this directory.

### bandwidth\_db

The system stores bandwidth information in the `bandwidth_db.json` file. The system creates the `/bandwidth_db` directory in the backup file, but does **not** store any data in this directory.

### counters

The `/counters` directory contains a copy of any file the account owns within the `/var/cpanel/Counters/` directory. Each of these files contains the current count for the webpage hit counters. For example, the `USER.dat` file, where `USER` is the account’s username.

### cp

The `/cp` directory contains the account’s user file that exists in the `/var/cpanel/users` directory. This file contains the account’s information and account settings.

### cron

The `/cron` directory contains the account’s [`cron` table file data](https://docs.cpanel.net/cpanel/advanced/cron-jobs).

### ccs

The `/ccs` directory contains the account’s [Calendar and Contacts Server (CCS) plugin](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server) data, if it exists.

### customizations

The `/customizations` directory contains the JSON files created when a reseller uses the WHM API [`update_customizations`](https://api.docs.cpanel.net/openapi/whm/operation/update_customizations/) function to customize the cPanel interface in the [Jupiter](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface) theme.

### dnssec\_keys

The `/dnssec_keys` directory contains the [DNSSEC keys](https://docs.cpanel.net/knowledge-base/dns/dnssec) for all of the account’s domains. The system creates a directory for each domain, in which the system copies the domain’s DNSSEC key files. The system stores the DNSSEC key files in `keytag_keytype.key` format, where `keytag` represents the key’s tag ID, and `keytype` represents the type of DNSSEC key.

### dnszones

The `/dnszones` directory contains copies of the account’s [DNS zone files](https://docs.cpanel.net/cpanel/domains/zone-editor). The system stores these files in `DOMAIN.db` format, where `DOMAIN` is the account’s domain.

### domainkeys

The `/domainkeys` directory contains the account’s `private` and `public` domain key files. The `private` file contains the private keys for each domain that exists on the cPanel account. The `public` file contains the public keys for each domain that exists on the cPanel account.

### homedir

The `/homedir` directory contains a copy of the account’s `/home` directory. The system creates this file with the [`getpwnam`](https://perldoc.perl.org/5.8.2/functions/getpwnam.html) command. This directory contains the contents of the account’s `/home` directory.

Note:

The `/home` directory typically contains the [`public_html`](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/) folder. This folder is the default [document root](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#document-root) of the account’s primary domain.

### httpfiles

The `/httpfiles` directory contains the account’s custom virtualhost templates.

### ips

The `/ips` directory contains the `related_ips` file. This file contains the IPv6 addresses that exist on the account’s server.

### locale

The `/locale` directory contains an account’s custom locale.

### logs

The `/logs` directory contains copies of the account’s [log files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files) in the `/usr/local/apache/domlogs` directory. These files contain data tracked by the the log file.

### mm

The `/mm` directory contains the account’s [Mailman](https://www.list.org/) mailing list files. Each [mailing list](https://docs.cpanel.net/cpanel/email/mailing-lists) has its own subdirectory in this directory.

### mma

The `/mma` directory contains all of the account’s domains’ Mailman files. The system divides the copied files into subdirectories that correspond to each type of mailing list:

- `pub/` — This directory contains all of the account’s domains’ Mailman files from the `/usr/local/cpanel/3rdparty/mailman/archives/public` directory.
- `priv/` — This directory contains all of the account’s domains’ Mailman files from the `/usr/local/cpanel/3rdparty/mailman/archives/private` directory.

### mms

The `/mms` directory contains files from the account’s `/usr/local/cpanel/3rdparty/mailman/suspended.lists` directory.

### mysql

The `/mysql` directory contains the account’s MySQL® dumps for any of its [MySQL databases](https://docs.cpanel.net/cpanel/databases/manage-my-databases). It stores these files in `USER_database.sql` format, where `USER` is the account’s username.

### mysql-timestamps

The `/mysql-timestamps` directory contains log files that state when the account created a [MySQL database](https://docs.cpanel.net/cpanel/databases/manage-my-databases). It stores the files in `.txt` file format. These files contain the MySQL database creation timestamp in [Unix time format](https://en.wikipedia.org/wiki/Unix_time).

### psql

The `/psql` directory contains the account’s [PostgreSQL® database files](https://docs.cpanel.net/cpanel/databases/postgresql-databases), in `.tar` file format. It also contains the following files:

- `1psql_users.sql` — This file contains all of the account’s PostgreSQL users.
- `psql_grants.sql` — This file contains all of the account’s PostgreSQL grants.

### resellerconfig

The `/resellerconfig` directory contains a [reseller](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#reseller) account’s `reseller` file. The `reseller` file contains data from the account’s `/var/cpanel/resellers` file, which includes the account’s username and all of the account’s [access control list (ACL) privileges](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges). The `/resellerconfig` directory also contains the `resellers-nameservers` file, which contains the account’s entry in the `/var/cpanel/resellers-nameservers` file.

### resellerfeatures

The `/resellerfeatures` directory contains a [reseller](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#reseller) account’s custom [feature lists](https://docs.cpanel.net/whm/packages/feature-manager).

### resellerpackages

The `/resellerpackages` directory contains a [reseller](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#reseller) account’s [custom packages](https://docs.cpanel.net/whm/packages/add-a-package).

### ssl

The contents of the `/ssl` directory exist in the backup file’s `/homedir/ssl` directory.

### sslcerts

Note:

The contents of this directory exist in the backup file’s `/homedir/ssl` directory.

The `/sslcerts` directory contains the [certificate files](https://docs.cpanel.net/cpanel/security/ssl-tls/#certificates-crt) for each of the account’s domains. This directory contains the following files, where where `DOMAIN` is the account’s domain name:

- `DOMAIN.crt` — The domain certificate file.
- `DOMAIN.cabundle` — This file is a copy of the domain’s Certificate Authority (CA) bundle.
- `DOMAIN.csr` — This file is a copy of the certificate-signing request (CSR). These system copies these files from the following directories:

  - `/usr/share/ssl/certs`
  - `/etc/ssl/certs`
  - `/var/cpanel/ssl/installed/certs`
  - `/usr/local/ssl/certs`

### sslkeys

Note:

The contents of this directory exist in the backup file’s `/homedir/ssl` directory.

The `/sslkeys` directory contains all of the [SSL keys](https://docs.cpanel.net/cpanel/security/ssl-tls/#private-keys-key) for the account’s domains. The system copies this file in `DOMAIN.key` format, where `DOMAIN` is the account’s domain name.

### suspended

The `/suspended` directory contains a copy of the file in the account’s `/var/cpanel/suspended` directory. The system copies the files in `USER` or `USER.lock` format, where `USER` is the account username. Each file contains the reason for the account suspension, if one exists.

### suspendinfo

The `/suspendinfo` directory contains a copy of the files in the account’s `/var/cpanel/suspendinfo` directory.

### userconfig

The `/userconfig` directory contains a copy of the files in the `/var/cpanel/userconfig` directory. This file contains symlinks from the account’s `public_html` directory.

### userdata

The `/userdata` directory contains the user data of the account’s subdomain or domain. The system copies files in this directory from the `/var/cpanel/userdata/USER` directory, where `USER` is the account’s username.

### va

The `/va` directory contains any of the account’s [autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders). The system copies this file from the `/etc/valiases/` directory.

### vad

The `/vad` directory contains a copy of the account’s [virtual domain aliases](https://docs.cpanel.net/cpanel/domains/domains). The system copies this file from the `/etc/vdomainaliases` directory.

### vf

The `/vf` directory contains a copy of the user’s [Exim filters](https://docs.cpanel.net/cpanel/email/email-filters). The system creates copies of the filters that the user owns from the `/etc/vfilters` directory.

## Files without a directory

The following are files in the tarball that do not exist in a directory:

### addons

The `addons` file contains a hash of the account’s [addon domains](https://docs.cpanel.net/cpanel/domains/domains) and their relative subdomains.

### autossl.json

The `autossl.json` file contains the account’s [AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) run preferences. This file also contains any AutoSSL run restrictions set by the system administrator.

### bandwidth\_db.json

The `bandwidth_db.json` file contains the account’s [bandwidth data information](https://docs.cpanel.net/cpanel/metrics/bandwidth).

### bandwidth\_db.data.json

The `bandwidth_db.data.json` file contains the account’s [bandwidth usage data](https://docs.cpanel.net/cpanel/metrics/bandwidth).

### digestshadow

The `digestshadow` file contains the passwords for the account’s DAV digest authentication for cPanel’s [_WebDisk_](https://docs.cpanel.net/cpanel/files/web-disk) feature ( _cPanel » Home » Files » Web Disk_).

### has\_sslstorage

The `has_sslstorage` file contains a touch file that indicates the account uses WHM’s [_SSL Storage Manager_](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager) feature ( _WHM » Home » SSL/TLS » SSL Storage Manager_). It stores this file in `crtindex.txt` format.

### homedir\_paths

The `homedir_paths` file contains the full path to the account’s `/home` directory.

### mysql.sql

The `mysql.sql` file contains the account’s [MySQL database](https://docs.cpanel.net/cpanel/databases/manage-my-databases) grants.

### mysql\_host\_notes.json

The `mysql_host_notes.json` file contains the user-provided description information for the account’s [MySQL database](https://docs.cpanel.net/cpanel/databases/manage-my-databases) hosts, if available.

### nobodyfiles

The `nobodyfiles` file contains a list of files in the account’s `/home` directory that the `nobody` system user owns.

### pds

The `pds` file contains a list of the account’s [parked domains (aliases)](https://docs.cpanel.net/cpanel/domains/domains).

### proftpdpasswd

The `proftpdpasswd` file contains a copy the account’s [ProFTPd](http://www.proftpd.org/) file in the `/etc/proftpd` directory.

### quota

The `quota` file contains the account’s [quota size](https://docs.cpanel.net/cpanel/files/disk-usage), in bytes.

### sds

The `sds` file contains a list of the account’s [subdomains](https://docs.cpanel.net/cpanel/domains/domains).

### sds2

The `sds2` file contains a hash of subdomains and their relative document roots.

### shadow

The `shadow` file contains a copy of the account’s password that the [`getpwnam`](https://perldoc.perl.org/5.8.2/functions/getpwnam.html) command returns.

### shell

The `shell` file contains the account’s login shell.

### version

The `version` file contains the account’s [`pkgacct`](https://docs.cpanel.net/whm/scripts/the-pkgacct-script) version number and its archive version number.

### webcalls.json

The `webcalls.json` file contains the account’s web call data. For example, the account’s [dynamic DNS](https://docs.cpanel.net/cpanel/domains/dynamic-dns) domains.

#### Additional Documentation

* * *

- [Backup Configuration](https://docs.cpanel.net/whm/backup/backup-configuration/)
- [Backup Restoration](https://docs.cpanel.net/whm/backup/backup-restoration/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Backup System Migration](https://docs.cpanel.net/whm/backup/backup-system-migration/)
- [Backup User Selection](https://docs.cpanel.net/whm/backup/backup-user-selection/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×