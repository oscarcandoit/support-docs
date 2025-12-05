---
url: "https://docs.cpanel.net/knowledge-base/accounts/addon-domain-conversion-list/"
title: "Addon Domain Conversion List | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/addon-domain-conversion-list/#main-content)

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
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. Addon Domain Conversion List


[domains](https://docs.cpanel.net/tags/domains/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/addon-domain-conversion-list/#overview)

* * *

[Data migrated](https://docs.cpanel.net/knowledge-base/accounts/addon-domain-conversion-list/#data-migrated)

* * *

[Data not migrated](https://docs.cpanel.net/knowledge-base/accounts/addon-domain-conversion-list/#data-not-migrated)

* * *

[Migrated data details](https://docs.cpanel.net/knowledge-base/accounts/addon-domain-conversion-list/#migrated-data-details)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/addon-domain-conversion-list/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/addon-domain-conversion-list/#overview)

* * *

[Data migrated](https://docs.cpanel.net/knowledge-base/accounts/addon-domain-conversion-list/#data-migrated)

* * *

[Data not migrated](https://docs.cpanel.net/knowledge-base/accounts/addon-domain-conversion-list/#data-not-migrated)

* * *

[Migrated data details](https://docs.cpanel.net/knowledge-base/accounts/addon-domain-conversion-list/#migrated-data-details)

* * *

## Addon Domain Conversion List

Last modified: _2023 April 5_

* * *

## Overview

The following lists contain a brief overview of the data that the [_Convert Addon Domain to Account_](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/) interface ( _WHM » Home » Transfers » Convert Addon Domain to Account_) migrates. You can find additional information about how the process affects specific data in the table.

Note:

- The _Convert Addon Domain to Account_ feature is a work-in-progress. The following lists may change in future releases.
- If an account possesses an assigned IPv6 address, the addon domain conversion process will fail. You **must** disable IPv6 on the origin account before you convert an addon domain.

## Data migrated

The _Convert Addon Domain to Account_ feature allows users to migrate the following data:

- DNS records

- Website Configuration
  - Document root contents

  - VirtualHost include files

  - Installed SSL certificate
- Email
  - Email accounts

  - Email autoresponders

  - Email user filters

  - Email forwarders

  - Domain forwarders

  - Mailing lists

  - Webmail

  - Webmail application data
- MySQL®
  - Databases

  - Database users
- Redirects

- Subaccounts
  - FTP accounts

  - Web Disk accounts

## Data not migrated

The _Convert Addon Domain to Account_ feature does **not** allow users to migrate the following data:

- Installed applications

- MultiPHP settings

- Subaccounts

- Subdomains







Important:





- You **must** delete the subdomains of the addon domain before you convert it to a cPanel account. If you do not perform this action, the conversion process will fail.

- To save the subdomain’s data, perform a backup of the cPanel account before you delete the subdomain. After the conversion process completes, restore the backup file to the account.


- Any additional data that does not appear in the above list


## Migrated data details

The following list contains details about the data that the _Convert Addon Domain to Account_ feature migrates:

- **DNS records** — The conversion process migrates the DNS records in the following ways:
  - The process copies the DNS zone file before it removes the addon domain.

  - After it creates the new account, the process restores the saved copy of zone file and updates the IP address to reflect the new account’s IP address.
- **Email accounts** — The conversion process copies the email account data from the original account. After the conversion completes, the email account data on the original account will continue to exist; however, any newly-delivered email will only exist on the new account.

- **Email autoresponders** — The conversion process copies the email autoresponders data from the original account. After the conversion completes, the email autoresponders data on the original account will continue to exist.

- **Email forwarders** — The conversion process copies the forwarder files and restores them for the new account. Because cPanel & WHM tracks forwarder data outside the cPanel user’s home directory, only one copy can exist on the system.






Note:





- The system stores email forwarders in the `/etc/valiases/domain.name` file, where `domain.name` represents the domain name.

- The system stores domain forwarders in the `/etc/vdomainaliases/domain.name` file, where `domain.name` represents the domain name.


- **Email mailing lists** — The conversion process does not affect email mailing lists. Any existing mailing lists will continue to work as before.

- **Webmail** — The conversion process copies the address book, calendar, note, and signature data from the original account. After the conversion completes, the data on the original account will continue to exist.






Note:




This process does **not** apply to Roundcube.


- **MySQL databases (copied)** — When you choose to copy MySQL databases, the conversion process does not affect the original databases.

- **MySQL databases (moved)** — When you choose to move MySQL databases, the conversion process updates which users have grants on the database.

- **Subaccounts** — The conversion process copies the FTP and Web Disk accounts from the original account. After the conversion completes, the data on the original account will continue to exist.

- **Website configuration** — The conversion process copies the document root data, the VirtualHost include files, and the installed SSL certificate from the original account. After the conversion completes, this data on the original account will continue to exist.


#### Additional Documentation

* * *

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
- [Apparent Discrepancies in Bandwidth Usage Statistics](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/)
- [Convert Addon Domain to Account](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/)
- [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)
- [Dynamic DNS](https://docs.cpanel.net/cpanel/domains/dynamic-dns/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×