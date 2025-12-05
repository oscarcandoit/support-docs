---
url: "https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/"
title: "cPanel Migration Services and Guides | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#main-content)

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
3. [Technical Support Services](https://docs.cpanel.net/knowledge-base/technical-support-services/)
4. cPanel Migration Services and Guides


[support](https://docs.cpanel.net/tags/support/) [migrations](https://docs.cpanel.net/tags/migrations/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#overview)

* * *

[Server requirements](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#server-requirements)

* * *

[Migrate your server](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#migrate-your-server)

* * *

[Control panel-specific exceptions](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#control-panel-specific-exceptions)

* * *

[Plesk](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#plesk)

* * *

[DirectAdmin](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#directadmin)

* * *

[FAQ](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#faq)

* * *

[Minimize your downtime](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#minimize-your-downtime)

* * *

[Test your websites after you migrate](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#test-your-websites-after-you-migrate)

* * *

[Update your DNS for the new server](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#update-your-dns-for-the-new-server)

* * *

[Check your DNS changes](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#check-your-dns-changes)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#overview)

* * *

[Server requirements](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#server-requirements)

* * *

[Migrate your server](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#migrate-your-server)

* * *

[Control panel-specific exceptions](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#control-panel-specific-exceptions)

* * *

[Plesk](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#plesk)

* * *

[DirectAdmin](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#directadmin)

* * *

[FAQ](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#faq)

* * *

[Minimize your downtime](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#minimize-your-downtime)

* * *

[Test your websites after you migrate](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#test-your-websites-after-you-migrate)

* * *

[Update your DNS for the new server](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#update-your-dns-for-the-new-server)

* * *

[Check your DNS changes](https://docs.cpanel.net/knowledge-base/technical-support-services/cpanel-migration-services-and-guides/#check-your-dns-changes)

* * *

## cPanel Migration Services and Guides

Last modified: _2025 November 25_

* * *

## Overview

Important:

WebPros International, LLC **only** provides migration services for Linux®, FreeBSD®, or Debian-based operating systems. We do **not** provide migration services for Microsoft® operating systems.


WebPros International, LLC offers migration tools and technical assistance to help you transfer your websites from third-party control panels to cPanel & WHM. Some exceptions and concerns exist in the data migration process. While we aim to make the process as seamless and transparent as possible, we will need to ask you for some important information before your migration.

We offer free migration services for customers who use the following third-party control panels:

- Plesk®
- DirectAdmin

We also provide migration services for the following [End-of-Life Operating Systems](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/):

- CentOS 6 32-bit
- Amazon® Linux 1

For more information about these services, [open a support ticket](https://tickets.cpanel.net/submit/index.cgi?reqtype=migrations) and our migration team will contact you.

Note:

For other control panels, read our [How to Manually Migrate Accounts to cPanel & WHM from Unsupported Control Panels](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-accounts-to-cpanel-from-unsupported-control-panels/) documentation.


## Server requirements

For a successful migration process, your servers **must** meet the following requirements:

- You **must** possess `root`-level access to both servers.
- A source server that runs Plesk or DirectAdmin on a Linux operating system.
- A licensed and freshly-installed cPanel & WHM server that runs on one of cPanel & WHM’s [supported operating systems](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system).
- **If** you have installed a [SQL database](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#sql-database) server, its version must meet or exceed the following requirements:

  - MySQL® 5.7
  - MariaDB® 10.2
- **Both** servers contain free disk space greater than twice the size of the largest account to transfer and an additional 1GB of free disk space. The package and restore processes use this free space to store temporary files.
- **Both** servers use Perl 5.6.2 or higher.
- No cPanel accounts exist on the destination server.

For more information about cPanel & WHM operating system requirements, read our [System Requirements](https://docs.cpanel.net/installation-guide/system-requirements) documentation.

## Migrate your server

To migrate your server, perform the following steps:

1. **Submit a request.** Submit a support ticket in [the cPanel Customer Portal](https://tickets.cpanel.net/submit/index.cgi?reqtype=migrations) with the following subject, where `Company Name` represents your company name and `Server Hostname` represents the full hostname of the server:


```bash
    Migration: Company Name: Server Hostname
```

2. **Initial evaluation.** Our migration specialist will evaluate the source server to determine whether we can migrate its contents successfully. The specialist will analyze the following items:

   - Available disk space vs. the amount of data that will move.
   - Operating system version.
   - System software versions.
   - Database management system versions.
   - Available memory.
   - Average CPU usage.
   - Network connection between the source and target servers.
   - Whether the source server uses remote services or data.





     Note:




     We only transfer data from the source server. We do **not** transfer remote databases or data from other remote services.
3. **Customized migration plan.** Our migration specialist will generate a customized plan for the migration based on the size and quantity of sites that you plan to migrate.
4. **Scheduling.** In order to provide the highest level of service, we schedule migrations in advance. In your migration plan, our migration specialist will indicate available time windows in which they can begin the transfer. Due to network, hardware, and other variables outside of our specialist’s control, they can **only** estimate the duration of your migration.





Important:




Observed US Holidays and WebPros International, LLC Release Schedules may delay a scheduled migration.


5. **Progress updates.** The Migrations team will provide updates on the migration’s progress through your ticket.
6. **Coordinate DNS switchover.** Your DNS records will point at the original server until we complete and verify the transfer. If you use controlled DNS records or the domain registrar hosts your DNS, transfer those DNS records to a local DNS server before the migration begins.





Important:




We do **not** make DNS changes for you, but we will advise you on how to make these changes.


7. **Confirmation of completion.** After our migration specialist completes your migration, they will confirm your satisfaction with the process.

## Control panel-specific exceptions

You **must** understand the following changes and exceptions for each third-party control panel during and after your migration:

### Plesk

| Exception | Description |
| --- | --- |
| Apache SpamAssassin™ | We **cannot** migrate your Apache SpamAssassin configuration or your users’ whitelists and blacklists. |
| Custom DNS zone files | - We do **not** make an exact copy of DNS zone files. Instead, we generate a new zone based on our zone templates that you can modify in cPanel & WHM.<br>- If your DNS zones include custom records, inspect them after your migration to ensure that the migration retained all custom records. |
| Email addresses | The system will **not** transfer any email addresses from Plesk to cPanel & WHM that contain a plus sign (`+`) in the email username. |
| Feature lists | We **cannot** transfer your feature lists. Unless a feature list with the same name exists on the target server, the system will assign the users to the default feature list. |
| Forwarding domains | If any forwarding domains have email associated with the domain, you **must** convert the domain to a hosting account. Use the following command to convert the domain: <br>```bash<br>/usr/local/psa/bin/domain –update example.com -hst_type phys -hosting true<br>```<br> To convert the domains in the Plesk Control Panel, perform these steps: <br>1. Navigate to the _Websites & Domains_ interface in Plesk.<br>2. Click the name of the domain you wish to convert.<br>3. Click _Hosting Type_.<br>4. Click _Change_. |
| FTP accounts | The system will **not** transfer any FTP accounts from Plesk to cPanel & WHM that contain an underscore (`_`) in the username. |
| Horde address books | The migration process **only** copies the default Horde address book. If your server runs cPanel & WHM version 118 or earlier, you can [manually import additional Horde address books into Roundcube](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/).<br>Important:<br>We **removed** the Horde webmail client in cPanel & WHM version 108. For more information, read our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/) documentation. |
| Mailing lists | - We can transfer mailing lists from the account’s main domain.<br>- We do **not** transfer any mailing lists from any of the account’s addon domains. |
| Packages | - We do **not** support the transfer of packages from other control panels.<br>- We set each account’s package options to unlimited. Adjust the package limits after the transfer finishes. |
| Reseller accounts | We do **not** offer a method to identify resellers from other control panels at this time. |
| Roundcube data | The migration process does **not** transfer Roundcube data. You can [manually import](https://docs.cpanel.net/knowledge-base/webmail/how-to-import-export-mail-roundcube/) email into Roundcube. |
| Software configuration | You **must** replicate any custom configurations of your current control panel on the cPanel & WHM server. For example, you **must** replicate configurations for email Smarthosts or MySQL optimization. |

### DirectAdmin

| Exception | Description |
| --- | --- |
| Apache SpamAssassin | We **cannot** migrate your Apache SpamAssassin configuration or your users’ whitelists and blacklists. |
| Custom DNS zone files | - We do **not** make an exact copy of DNS zone files. Instead, we generate a new zone based on zone templates that you can modify in cPanel & WHM. If your DNS zones use custom records, inspect them after your migration to ensure that the migration retained all custom records.<br>- If you have **not** modified the zone files on the DirectAdmin server, you have no need for concern. |
| Email compression | The system will **not** transfer emails that you have compressed with the `zstd` format. |
| Feature lists | We **cannot** transfer your feature lists. Unless a feature list with the same name exists on the target server, the system will assign the users to the default feature list. |
| Forwarding/No hosting domains | - We can migrate a forwarding domain if it exists under a domain. However, **cannot** migrate a forwarding domain that exists under a client.<br>- If you would like for us to copy a _No Hosting_ domain, you **must** convert it to hosting account first. |
| FTP accounts | The system will **not** transfer any FTP accounts from DirectAdmin to cPanel & WHM that contain an underscore (`_`) in the username. |
| Mailing lists | - DirectAdmin uses the Majordomo software for mailing lists, while cPanel & WHM uses Mailman. For more information, read our [Mailman](https://docs.cpanel.net/cpanel/email/mailing-lists) documentation.<br>- We do **not** convert Majordomo mailing lists to Mailman or copy that data to the cPanel & WHM server. If your server contains mailing lists, you can recreate them with cPanel’s [Mailman](https://docs.cpanel.net/cpanel/email/mailing-lists) interface ( _cPanel » Home » Email » Mailing Lists_). We do **not** populate the lists with data from Majordomo. |
| mbx mailboxes | We do **not** convert `mbx` mailboxes to `mbox` mailboxes. You will need to use another method to migrate your mailboxes, such as [imapsync](https://github.com/imapsync/imapsync). |
| Packages | - We do **not** support the transfer of packages from other control panels.<br>- We set each account’s package options to _unlimited_. Adjust the package limits after the transfer finishes. |
| Reseller accounts | We **cannot** identify resellers from other control panels at this time. |
| Software configuration | You **must** replicate any custom configurations of your current control panel on the cPanel & WHM server. For example, you **must** replicate configurations for email Smarthosts or MySQL optimization. |

## FAQ

| Question | Answer |
| --- | --- |
| **What level of access do migrations require?** | You must possess root-level access on the source and target servers. Our migration scripts require root-level permissions on both servers. |
| **How long will the migration take?** | Due to network, hardware, and other variables outside of our control, we only estimate the duration of your migration. We will make the estimate after we copy some of the data. Migrations may require additional time due to unforeseen circumstances. |
| **Will you transfer my emails?** | Yes. Migrations copy all account data (for example, website files, email, and databases). However, we cannot migrate your Apache SpamAssassin configuration or your users’ whitelists and blacklists. |
| **Will you transfer my feature lists?** | No, we cannot transfer your feature lists. Unless a feature list with the same name exists on the target server, the system will assign the users to the default feature list. |
| **Can you perform another migration on my accounts to update the mail and data?** | No, we will only perform one successful migration on any source. |
| **How can I receive an alert after each account transfers to the cPanel & WHM server?** | Yes. Perform the following steps to enable notification for the _Account Creation_ alert type: <br>1. Log in to WHM as the `root` user.<br>2. Navigate to WHM’s [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager) interface ( _WHM » Home » Server Contacts » Contact Manager_).<br>3. Configure an email alert for the _Account Creation_ alert type. |
| **Do you prevent the receipt of email to the source server after you migrate the accounts?** | No. Our migrations scripts do not stop any services. |
| **Do you support Plesk Automation?** | No. Plesk Automation runs multiple services, such as DNS, Mail, and Apache, on different servers. In order for us to perform a migration, each account’s services **must** run on a single source Plesk server. |
| **I manually added some databases to my server and not from within the control panel. Will you copy these databases?** | No. The migration script only copies databases that a user created within the control panel. |
| **What versions of PHP do you support?** | For more information about our currently-supported PHP versions, read our [About PHP](https://docs.cpanel.net/ea4/php/about-php/#php-versions) documentation. |
| **Can you migrate data from more than one source server to one destination server?** | Yes, but you **must** request this at the beginning of the migration. Each source server needs its own migration ticket. We can only transfer one source server at a time. |
| **I have several servers to migrate. Can cPanel help with this?** | Yes. Please [submit a support ticket](https://tickets.cpanel.net/submit/index.cgi?reqtype=migrations) to coordinate time with our Migrations Team. |

## Minimize your downtime

Without multiple servers to serve your content, you may experience downtime while we migrate your server. Read this section to learn the factors that result in a successful migration with limited downtime.

### Test your websites after you migrate

After we complete your migration, verify that each website successfully migrated before you change the DNS records to point to the new server.

We can help you resolve these common post migration issues:

- File permissions.
- `.htaccess` file configuration.
- Absolute link configuration.

You can use the following methods to review the migrated websites in a browser:

#### Option One

WHM’s [_Apache mod\_userdir Tweak_](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak) interface ( _WHM » Home » Security Center » Apache mod\_userdir Tweak_) allows you to access to your websites through a temporary URL in the `http://IP/~username` format, where IP represents the target server’s IP address and `username` represents the account’s name. For the purposes of verification, the feature allows you to view the website before you switch the DNS to the new server.

Important:

If your content requires the domain name in the URL, the temporary URL may **not** load certain website content correctly. Most Content Management System (CMS) software, such as WordPress®, experience this issue with the temporary URL.


#### Option Two

For sites that you cannot review with the temporary URL, you can configure your local computer with the IP address of the new server. Modify your computer’s `hosts` file to use the domain and IP address of the destination server. After you make this change, you can browse to your website normally without any special URLs. To learn how to modify your computer’s `hosts` files, read our [How to Modify Your Hosts File](https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/) documentation.

Important:

- Follow **all** of the steps in our [How to Modify Your Hosts File](https://docs.cpanel.net/knowledge-base/dns/how-to-modify-your-hosts-file/) documentation.
- After you complete your tests, **restore your hosts file** to its original state.

### Update your DNS for the new server

Important:

Switch the DNS to the new server **as soon as possible** after we complete your migration and you test each website. Until you migrate your DNS, visitors can still reach the source server, which will cause unmigrated email or databases changes.


If you properly plan, you should **only** need to make a few configuration changes for the necessary DNS changes. Most customers change the IP addresses of nameservers to point to the new system. This method **only** requires a single change at the registrar level, rather than a change to each domain that you host.

The following guides describe how to update your nameserver IP addresses:

- [Namecheap™](https://www.namecheap.com/support/knowledgebase/article.aspx/292/10/how-can-i-update-my-personal-nameservers-ip-address)
- [1&1 IONOS, Inc.](https://www.ionos.com/help/domains/using-your-own-name-servers/using-your-own-name-servers-for-a-domain/)
- [GoDaddy®](https://www.godaddy.com/help/change-my-ip-address-20134?)
- [Enom](https://help.enom.com/hc/en-us/articles/115000486451-Name-servers#update-ip)
- [Name.com](https://www.name.com/support/articles/205934447-Changing-the-IP-of-your-custom-nameservers?)

You can lower the TTL (Time To Live) of your DNS records to force clients to update their copy of the DNS zones that your nameservers host. To minimize downtime, we recommend that you lower the TTL of your DNS zones to 300 seconds. For more information about how to lower your DNS records’ TTL, read Virendra’s TechTalk’s [Migrating Servers](https://www.virendrachandak.com/techtalk/migrating-servers-using-dns-ttl-for-minimum-downtime/) article.

#### Temporarily adjust your DNS TTL

Important:

Ensure that you restore the TTL of your DNS records after you complete your migration. The standard TTL timeout is 3600 seconds.


### Check your DNS changes

After you update the nameserver records to use your new server, we recommend that you verify the DNS configuration. Use the `ping` command at the command line of any server to confirm that each domain resolves to the correct IP address, as the following example demonstrates:

```bash
ping cpanel.net
PING cpanel.net (208.74.123.84): 56 data bytes
64 bytes from 208.74.123.84: icmp_seq=0 ttl=56 time=94.964 ms
64 bytes from 208.74.123.84: icmp_seq=1 ttl=56 time=99.201 ms
64 bytes from 208.74.123.84: icmp_seq=2 ttl=56 time=99.415 ms
```

If the command returns the IP address of your new server, you have correctly migrated the DNS of the domain. If the command returns the old IP address, the DNS requires more time to propagate, which means that the updated data has not reached your location yet.

Note:

For a more in-depth guide for nameservers and DNS troubleshooting, read the [How to Set Up Nameservers in a cPanel & WHM Environment](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/) documentation.


You can verify the DNS settings with external tools. Use the following websites to troubleshoot DNS issues:

- [IntoDNS.com](http://intodns.com/)
- [LeafDNS.com](http://leafdns.com/)

For any other questions about the cPanel Migration Services, [submit a ticket](https://tickets.cpanel.net/submit/index.cgi?reqtype=migrations) in the cPanel Customer Portal.

#### Additional Documentation

* * *

- [Create Support Ticket](https://docs.cpanel.net/whm/support/create-support-ticket/)
- [Grant cPanel Support Access](https://docs.cpanel.net/whm/support/grant-cpanel-support-access/)
- [How to Move All cPanel Accounts from One Server to Another](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-move-all-cpanel-accounts-from-one-server-to-another/)
- [How to Restore Your cPanel Account - A Guide for New System Administrators](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-restore-your-cpanel-account-a-guide-for-new-system-administrators/)
- [Support Center](https://docs.cpanel.net/whm/support/support-center/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×