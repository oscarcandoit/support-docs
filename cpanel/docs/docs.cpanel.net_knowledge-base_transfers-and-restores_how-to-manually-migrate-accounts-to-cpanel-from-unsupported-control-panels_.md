---
url: "https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/"
title: "How to Manually Migrate Accounts to cPanel & WHM from Unsupported Control Panels | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#main-content)

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
3. [Transfers and Restores](https://docs.cpanel.net/knowledge-base/transfers-and-restores/)
4. How to Manually Migrate Accounts to cPanel & WHM from Unsupported Control Panels


[migrations](https://docs.cpanel.net/tags/migrations/) [support](https://docs.cpanel.net/tags/support/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#overview)

* * *

[Before migrating your accounts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#before-migrating-your-accounts)

* * *

[Adjust DNS records](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#adjust-dns-records)

* * *

[Installation](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#installation)

* * *

[Migrate your files](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#migrate-your-files)

* * *

[The public\_html directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-publichtml-directory)

* * *

[The mail directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-mail-directory)

* * *

[Example](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#example)

* * *

[The tmp directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-tmp-directory)

* * *

[The etc directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-etc-directory)

* * *

[The ssl directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-ssl-directory)

* * *

[The mysql directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-mysql-directory)

* * *

[The pgsql directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-pgsql-directory)

* * *

[After migration](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#after-migration)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#overview)

* * *

[Before migrating your accounts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#before-migrating-your-accounts)

* * *

[Adjust DNS records](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#adjust-dns-records)

* * *

[Installation](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#installation)

* * *

[Migrate your files](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#migrate-your-files)

* * *

[The public\_html directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-publichtml-directory)

* * *

[The mail directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-mail-directory)

* * *

[Example](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#example)

* * *

[The tmp directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-tmp-directory)

* * *

[The etc directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-etc-directory)

* * *

[The ssl directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-ssl-directory)

* * *

[The mysql directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-mysql-directory)

* * *

[The pgsql directory](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#the-pgsql-directory)

* * *

[After migration](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#after-migration)

* * *

## How to Manually Migrate Accounts to cPanel & WHM from Unsupported Control Panels

Last modified: _2025 September 11_

* * *

## Overview

Warning:

**Only** experienced system administrators who understand migrations should perform this process.

System administrators can migrate accounts from unsupported third-party control panels to cPanel & WHM. WebPros International, LLC offers [free migration services](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/) for Plesk® and DirectAdmin.

Important:

You will need to customize unsupported services to use them on cPanel & WHM. cPanel & WHM **only** supports Apache®, BIND, Exim, and Mailman. For more information or assistance, [open a support ticket](https://tickets.cpanel.net/).

## Before migrating your accounts

Perform the following steps before you begin to migrate accounts:

### Adjust DNS records

Decrease your DNS records’ Time To Live (TTL) on all of the account’s domains. This forces clients to update their copies of the DNS zones that your nameservers host.

- We recommend that you perform this action several days before you begin the migration process.
- For more information, read Virendra’s TalkTech’s [Migrating Servers](https://www.virendrachandak.com/techtalk/migrating-servers-using-dns-ttl-for-minimum-downtime/) article.

### Installation

To install cPanel & WHM on the new server, follow the steps in our [Installation Guide](https://docs.cpanel.net/installation-guide/install).

Note:

- cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). If this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).
- To activate a new license, you **must** have a cPanel Store account with a verified email address.

During the installation process, select a hostname and main IP address for the new server. The system uses these settings to configure the DNS zone files for restored accounts. You can do this by [customizing your installation](https://docs.cpanel.net/installation-guide/customize-your-installation) or using WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_).

Important:

- You **must** select a main IP address that is **not** your old server’s main IP address.
- You **must** select the same hostname, shared IP address, and nameservers as your old server.

## Migrate your files

Note:

In the following examples, `user` is the cPanel account’s name.

After you create the new cPanel & WHM account, migrate the old server’s files and directories to the appropriate locations on your new server. Generally, you will migrate the following files and directories during this process:

### The public\_html directory

The `public_html` directory contains all of your files, directories, subdirectories, and content. This directory may appear as the `/home/user/www` directory or the `/home/user/vhost` directory on some systems.

- The user **must** own the files and subdirectories in this directory.
- Subdirectories in this directory **must** possess `755` permissions, and files in this directories **must** possess `644` permissions.

#### Example

The following is an example of the `public_html` directory:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>drwxr-x---  7 user nobody   4096 Jan 11 08:35 ./<br>drwx--x--x 41 user user    4096 Mar 14 02:18 ../<br>drwxr-xr-x  2 user user    4096 May 20  2014 cgi-bin/<br>drwxr-xr-x  2 user user    4096 Sep  4  2014 entropybanner/<br>-rw-r--r--  1 user user       2 Jan 11 08:35 example.html<br>drwxr-xr-x  2 user user    4096 Jul 16  2013 scgi-bin/<br>``` |

### The mail directory

The `/home/user/mail` directory contains all of the email files for all of the cPanel account’s email accounts. The `/home/user/mail` contains directory for each domain, subdomain, addon domain, and parked domain. These directories include subdirectories for each email address for the domain.

Important:

Users who migrate data to cPanel & WHM servers **must** convert any `mbox` data to the `maildir` format.

### Example

The following are examples of the `mail` directory:

- [Example 1](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#tab-title-1)
- [Example 2](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#tab-title-2)
- [Example 3](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/#tab-title-3)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>drwxr-x--x  3 user user 4096 Apr 28  2014 ./<br>drwxr-x--x 12 user user 4096 Sep 24 11:07 ../<br>drwxr-x--x  9 user user 4096 Jun  8  2015 servo/<br>``` |

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>``` | ```bash<br>drwxr-x--x 12 user user 4096 Sep 24 11:07 ./<br>drwx--x--x 41 user user 4096 Mar 14 02:18 ../<br>drwxr-x--x  3 user user 4096 Mar 23  2015 archive/<br>drwxr-x--x  3 user user 4096 Apr 28  2014 colin.com/<br>drwxr-x--x  2 user user 4096 Apr 22  2014 courierimapkeywords/<br>-rw-rw----  1 user user   36 Apr 30  2014 courierimapsubscribed<br>-rw-r--r--  1 user user   14 Apr 22  2014 courierimapuiddb<br>drwxr-x--x  2 user user 4096 Jul 15  2013 cur/<br>-rw-rw----  1 user user    0 Jun  8  2015 dovecot-acl-list<br>-rw-r-----  1 user user  244 Jun  8  2015 dovecot.index.log<br>-rw-r-----  1 user user   50 Jun  8  2015 dovecot-uidlist<br>drwxr-x--x  5 user user 4096 Apr 22  2014 .Trash/<br>``` |

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```bash<br>drwxr-x--x 9 user user 4096 Jun  8  2015 ./<br>drwxr-x--x 3 user user 4096 Apr 28  2014 ../<br>-rw-rw---- 1 user user   43 Apr 30  2014 courierimapacl<br>drwxr-x--x 2 user user 4096 Apr 28  2014 cur/<br>drwxr-x--x 5 user user 4096 Apr 28  2014 .Drafts/<br>drwxr-x--x 5 user user 4096 Apr 28  2014 .Junk/<br>-rw-r----- 1 user mail    18 Jun 30  2014 maildirsize<br>drwxr-x--x 2 user user 4096 Apr 28  2014 new/<br>drwxr-x--x 5 user user 4096 Apr 28  2014 .Sent/<br>drwxr-x--x 2 user user 4096 Apr 30  2014 tmp/<br>drwxr-x--x 5 user user 4096 Apr 28  2014 .Trash/<br>``` |

### The tmp directory

The `/home/user/tmp` directory contains the account’s temporary files and bandwidth and statistics data. For example, you can migrate your original server’s [AWStats](https://awstats.sourceforge.io/) data to the `/home/user/tmp/awstats` directory.

#### Example

The following is an example of the `tmp` directory:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```bash<br>drwxr-xr-x 11 user user  4096 Mar  2 12:26 ./<br>drwx--x--x 41 user user  4096 Mar 14 02:18 ../<br>drwxr-xr-x  3 user user  4096 Apr 18  2015 analog/<br>drwxr-xr-x  3 user user  4096 Apr 18  2015 awstats/<br>drwxr-xr-x  2 user user  4096 Sep  6  2013 cpbandwidth/<br>drwx------  2 user user  4096 May 12  2014 cpcsvimport/<br>drwx------  2 user user  4096 Jun  9  2015 horde/<br>drwxr-xr-x  2 user user  4096 Oct 22  2014 logaholic/<br>drwxr-xr-x  3 user user  4096 Oct 30  2014 pear/<br>drwxr-xr-x  3 user user  4096 Apr 18  2015 webalizer/<br>drwxr-xr-x  2 user user  4096 Oct 22  2014 webalizerftp/<br>``` |

### The etc directory

The `/home/user/etc` directory contains the email account `passwd`, `shadow`, and `quota` files. For example, you can migrate your original server’s email account quota data to the `/home/user/etc/quota` directory.

#### Example

The following is an example of the `tmp` directory:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>drwxr-x---  5 user mail  4096 Oct 21 10:23 ./<br>drwx--x--x 41 user user 4096 Mar 14 02:18 ../<br>drwx--x--x  3 user user 4096 Apr 22  2014 passwd/<br>-rw-r--r--  1 user user    0 Apr 22  2014 quota<br>-rw-r--r--  1 user user    9 Feb  4 09:33 cacheid<br>drwxr-x---  5 user user  4096 Mar 12 03:11 shadow/<br>``` |

### The ssl directory

The `/home/user/ssl` directory contains the SSL certificates for the domains on the account.

Important:

After migrating the SSL certificates, you **must** activate them in the _Manage SSL Hosts_ section of WHM’s [_Manage SSL Hosts_](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts) interface ( _WHM » Home » SSL/TLS » Manage SSL Hosts_).

#### Example

The following is an example of the `ssl` directory:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```bash<br>drwxr-xr-x  5 user user  4096 Aug  3  2015 ./<br>drwx--x--x 41 user user  4096 Mar 14 02:18 ../<br>drwx------  2 user user  4096 Feb 16  2015 certs/<br>drwx------  2 user user  4096 Feb 16  2015 csrs/<br>drwx------  2 user user  4096 Mar 25  2015 keys/<br>``` |

### The mysql directory

The `mysql` directory stores the MySQL® databases for every account on the server.

Important:

- You **must** create the empty database on the account first, and then restore it to that new database. To do this, use one of the following interfaces:

  - In cPanel & WHM version 118 and earlier, use cPanel’s [_MySQL® Database Wizard_](https://docs.cpanel.net/cpanel/databases/mysql-database-wizard) interface ( _cPanel » Home » Databases » MySQL® Database Wizard_).
  - In cPanel & WHM version 120 and later, use cPanel’s [_Database Wizard_](https://docs.cpanel.net/cpanel/databases/database-wizard) interface ( _cPanel » Home » Databases » Database Wizard_).
- You **must** create a dump of your database and import it via cPanel’s [_phpMyAdmin_](https://www.phpmyadmin.net/docs/) interface ( _cPanel » Home » Databases » phpMyAdmin_).

#### Example

The following is an example of the `mysql` directory:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```bash<br>drwxr-x--x 30 mysql mysql     4096 Mar 14 02:57 ./<br>drwxr-xr-x 26 root  root      4096 Nov 11 03:11 ../<br>drwx------  2 mysql mysql     4096 Jun 17  2014 apitest_hammock_r_d/<br>drwx------  2 mysql mysql     4096 Jun 17  2014 apitest_jason/<br>drwx------  2 mysql mysql     4096 Jun 17  2014 apitest_newestaddition/<br>-rw-rw----  1 mysql mysql    16384 Feb 20 03:07 aria_log.00000001<br>-rw-rw----  1 mysql mysql       52 Feb 20 03:07 aria_log_control<br>-rw-rw----  1 mysql mysql       56 Feb 11  2015 auto.cnf<br>``` |

### The pgsql directory

The `/var/lib/pgsql` directory stores the PostgreSQL® databases for every account on the server.

Important:

- You **must** create the empty database on the account first, and then restore it to that new database. To do this, use cPanel’s [_PostgreSQL Database Wizard_](https://docs.cpanel.net/cpanel/databases/postgresql-database-wizard) interface ( _cPanel » Home » Databases » PostgreSQL Database Wizard_).
- You **must** create a dump of your database and import it via cPanel’s [_phpPgAdmin_](http://phppgadmin.sourceforge.net/doku.php) interface ( _cPanel » Home » Databases » phpPgAdmin_).

#### Example

The following is an example of the `pgsql` directory:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```bash<br>drwxr-x--x 30 pgsql pgsql     4096 Mar 14 02:57 ./<br>drwxr-xr-x 26 root  root      4096 Nov 11 03:11 ../<br>drwx------  2 pgsql pgsql     4096 Jun 17  2014 apitest_hammock_r_d/<br>drwx------  2 pgsql pgsql     4096 Jun 17  2014 apitest_jason/<br>drwx------  2 pgsql pgsql     4096 Jun 17  2014 apitest_newestaddition/<br>-rw-rw----  1 pgsql pgsql    16384 Feb 20 03:07 aria_log.00000001<br>-rw-rw----  1 pgsql pgsql       52 Feb 20 03:07 aria_log_control<br>-rw-rw----  1 pgsql pgsql       56 Feb 11  2015 auto.cnf<br>``` |

## After migration

After you migrate your files to your new cPanel & WHM server, perform the following steps:

1. Confirm that all of the content and credentials migrated properly and that they function in the new environment.

2. Update your domain’s nameservers to match the new nameservers on your cPanel & WHM server.







Note:





We also recommend that you edit the DNS records on your old server to point to your cPanel & WHM server so that all content forwards to the new server.

3. Create cPanel and reseller accounts. To do this, use WHM’s [_Create a New Account_](https://docs.cpanel.net/whm/account-functions/create-a-new-account) interface ( _WHM » Home » Account Functions » Create a New Account_).


#### Additional Documentation

* * *

- [Create Support Ticket](https://docs.cpanel.net/whm/support/create-support-ticket/)
- [Grant cPanel Support Access](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/)
- [How to Manually Migrate Horde Data to Roundcube](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/)
- [How to Move All cPanel Accounts from One Server to Another](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/)
- [How to Restore Your cPanel Account - A Guide for New System Administrators](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×