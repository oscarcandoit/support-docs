---
url: "https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/"
title: "Transfer Tool — The Transfer Process | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/#main-content)

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
3. [Transfers](https://docs.cpanel.net/whm/transfers/)
4. Transfer Tool — The Transfer Process


[whmui](https://docs.cpanel.net/tags/whmui/) [transfers](https://docs.cpanel.net/tags/transfers/)

#### Table of Contents

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
- [Prepare The Source Server](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/)
- [Select What to Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/)
- [The Transfer Process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/)
[Overview](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/#overview) [The transfer process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/#the-transfer-process) - [After The Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/)
- [Only Transfer IP Address](https://docs.cpanel.net/whm/transfers/transfer-tool/only-transfer-ip-address/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/#installation-toggle)

- [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/)
- [Prepare The Source Server](https://docs.cpanel.net/whm/transfers/transfer-tool/prepare-a-source-server/)
- [Select What to Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer/)
- [The Transfer Process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/)
[Overview](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/#overview) [The transfer process](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/#the-transfer-process) - [After The Transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer/)
- [Only Transfer IP Address](https://docs.cpanel.net/whm/transfers/transfer-tool/only-transfer-ip-address/)

## Transfer Tool — The Transfer Process

![](https://docs.cpanel.net/img/whm-icons/transfer_tool.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [124](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/124/)

#### [130](https://docs.cpanel.net/whm/transfers/transfer-tool/the-transfer-process/)

Last modified: _2025 September 4_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

When you click _Copy_ in WHM’s _Transfer Tool_ interface ( _WHM » Home » Transfers » Transfer Tool_) after selecting [what to transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/select-what-to-transfer), the transfer process begins.

## The transfer process

Note:

- In the following steps, `domain` represents the name of a domain that you transferred.
- The system considers any two records with the same resource name and type to be duplicates.
- MultiPHP users’ PHP-FPM settings do **not** transfer. Instead, the system transfers the PHP-FPM `.yaml` configuration file to the `filename.php-fpm.transferred` file. You must restore this file manually [after the transfer](https://docs.cpanel.net/whm/transfers/transfer-tool/after-the-transfer).
- If you set the _Update DNS Zone_ setting to _Disabled_ the transfer tool will **not** update the destination server’s DNS zones.

Warning:

If you [dedistribute](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#dedistribution) a mail account back to a parent node, the system will overwrite any mail that may be on the parent node for that account. We **strongly** recommend that you use the [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool/) interface ( _WHM » Home » Transfers » Transfer Tool_) for the **entire** distribution process to avoid any issues with moving email to the child node.

During the transfer process, the system performs the following actions:

01. The system creates the account.
02. The system compares the DNS zone file from the account’s backup file with the template-generated zone file that the system generated during account creation.






    Important:





    The Transfer Tool feature does **not** transfer DNS zone templates. If custom DNS zone templates exist on the source server, the system ignores these zone templates when it recreates the account on the destination server.

03. The system updates the SOA record to match the destination server’s zone templates and comments out the existing SOA record from the source server.
04. The system updates `domain` NS records to match the destination server’s zone templates and comments out any duplicate `domain` NS records from the source server.
05. The system updates `ftp.domain` A, AAAA, and CNAME records to match the destination server’s DNS templates and comments out any identical `ftp.domain` records from the source server.






    Note:





- cPanel & WHM uses the IP address in the destination server’s `standardvirtualftp` zone template (usually, the server’s main IP address) for virtual FTP when the account exists on a shared IP address.
- If the destination server [has IPv6 enabled](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/#basic-config), the system points any source-related AAAA record to the account’s shared IPv6 address.

06. The system checks whether the template-generated zone file uses an MX preference of `0`, and then performs the following actions:

    - If the zone file’s MX preference is `0` and the MX record points to `$PRIMARY_DOMAIN` or `mail.$PRIMARY_DOMAIN`, the system does **not** merge in the generated templates and does **not** update the MX preference from the source server.
    - If the zone file’s MX preference is `0` and the MX record does **not** point to `$PRIMARY_DOMAIN` or `mail.$PRIMARY_DOMAIN` (a non-standard mail configuration), the system merges the generated templates and comments out templates from the source server.
    - For example, when the zone template’s MX record defines an external mail service, the system prefers that entry over the record in the backup.
07. The system comments out duplicate records.
08. The system comments out CNAME records that conflict with any other records. If two or more CNAME records conflict, the system comments out all but the first CNAME record.
09. The system updates records that reference the old IP address to use the account’s new IP address.
10. The system increments the SOA serial number for the domain.
11. The system removes comments that are older than 30 days.
12. The system updates CalDAV and CardDAV records to match the destination server’s DNS template.
13. The system transfers any DNSSEC key information from the backup file to the new server.






    Important:





    If the destination server does **not** support DNSSEC, that system will **not** restore any DNSSEC keys in the backup file.

14. If the zone file contains an `$ORIGIN` directive for an additional domain, the system will **not** update that additional domain’s records.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×