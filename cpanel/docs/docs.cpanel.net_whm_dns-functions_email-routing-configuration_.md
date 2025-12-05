---
url: "https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/"
title: "Email Routing Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#main-content)

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
3. [DNS Functions](https://docs.cpanel.net/whm/dns-functions/)
4. Email Routing Configuration


[whmui](https://docs.cpanel.net/tags/whmui/) [mx](https://docs.cpanel.net/tags/mx/) [dns](https://docs.cpanel.net/tags/dns/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#overview)

* * *

[How to edit MX entries](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#how-to-edit-mx-entries)

* * *

[Email Routing](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#email-routing)

* * *

[MX Entries](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#mx-entries)

* * *

[Add and delete MX entry text boxes](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#add-and-delete-mx-entry-text-boxes)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#overview)

* * *

[How to edit MX entries](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#how-to-edit-mx-entries)

* * *

[Email Routing](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#email-routing)

* * *

[MX Entries](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#mx-entries)

* * *

[Add and delete MX entry text boxes](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#add-and-delete-mx-entry-text-boxes)

* * *

## Email Routing Configuration

![](https://docs.cpanel.net/img/whm-icons/email_routing_configuration.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [96](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/96/)

#### [130](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Email Routing Configuration_ interface allows you to configure the entry for each destination mail server.

Note:

cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):

- Editing DNS
- Email services
- Search Engine Optimization

## How to edit MX entries

A [mail exchanger (MX) entry](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#mail-exchanger-mx-entry) determines which server receives mail for a domain name. To edit your server’s MX entries, perform the following steps:

1. In the _Choose a Domain to Edit_ section, find the name of the domain in the list for which you wish to configure MX entries.
2. Click _Edit_. A new interface will appear.
3. Select an [_Email Routing_](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#email-routing) setting for the domain.
4. Enter the desired settings for each MX entry in the _MX Entries_ section.
5. Click _Save_.

### Email Routing

After selecting a domain to edit, you can choose one of the following _Email Routing_ settings:

#### Automatically Detect Configuration

The recommended _Automatically Detect Configuration_ setting lets the system choose the most appropriate _Email Routing_ setting, based on a query of the MX record in the local [zone file](https://en.wikipedia.org/wiki/Zone_file).

The system queries the MX record and uses the following criteria to determine the _Email Routing_ setting:

- If the lowest priority mail exchanger points to an IP address on this server, the system selects the _Local Mail Exchanger_ setting.
- If a mail exchanger with a higher priority points to an IP address on this server, the system selects the _Backup Mail Exchanger_ setting.
- If there are **no** mail exchangers that point to an IP address on this server, the system selects the _Remote Mail Exchanger_ setting.

Important:

- This setting only detects the local zone file entries and does **not** perform an actual DNS lookup. This setting is set upon configuration and does not automatically update. If changes are required, an administrator will need to manually adjust the MX Records in the [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/).
- The system cannot perform automatic detection for the _Remote Mail Exchanger_ setting if the MX entry does **not** resolve (for example, if you mistype a domain name or enter one that does not exist). Instead, the system generates a warning and defaults to the last known _Email Routing_ setting.
- For the _Automatically Detect Configuration_ setting to treat additional IP addresses as local, you must add them to the list of local IP addresses. Add IP addresses to the list in WHM’s [_Configure Remote Service IPs_](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/) interface ( _WHM » Home » IP Functions » Configure Remote Service IPs_).

#### Local Mail Exchanger

The _Local Mail Exchanger_ setting causes the server to **always** accept mail for the domain.

#### Backup Mail Exchanger

The _Backup Mail Exchanger_ setting causes the server to accept mail for the domain and store it until a [higher priority](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/#priority) mail server becomes available.

#### Remote Mail Exchanger

The _Remote Mail Exchanger_ setting causes the server to **never** accept mail for the domain. The system will always assign the **lowest** priority value to servers with this setting.

### MX Entries

You can configure the following values for each MX entry:

- _TTL_ — This integer value specifies the [time to live (TTL)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#time-to-live-ttl). TTL indicates how long a particular record remains in memory, in seconds, before it refreshes. This value defaults to 14400.
- _Priority_ — This integer value represents the [priority order of the mail server](https://en.wikipedia.org/wiki/MX_record#Overview), in relation to other MX entries. The lower the _Priority_ value, the higher the server’s priority. This value defaults to a value that is 10 higher than the highest existing MX entry’s priority.






Note:





- Servers with the **lowest** _Priority_ values act as the primary mail servers.
- Servers with **higher** _Priority_ values act as secondary mail servers.
- If multiple mail servers have the same _Priority_ value, the system distributes mail at that _Priority_ value to those servers randomly.

- _MX Destination_ — Enter the name of the mail server (for example, `mail.example.com`).

### Add and delete MX entry text boxes

- To add a new MX entry text box, click _Add Another MX Entry Field_. A new row will appear in the table with the _(new)_ label in the right column.
- To delete a row, click _Delete_ next to that MX entry.

#### Additional Documentation

* * *

- [Delete a DNS Zone](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/)
- [DNS Zone Manager](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/)
- [Edit Zone Templates](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/)
- [Email DNS Record Manager](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/)
- [Enable DKIM/SPF Globally](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×