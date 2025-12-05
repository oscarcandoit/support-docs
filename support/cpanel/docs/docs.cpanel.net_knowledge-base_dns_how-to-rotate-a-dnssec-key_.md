---
url: "https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/"
title: "How to Rotate a DNSSEC Key | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/#main-content)

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
3. [DNS](https://docs.cpanel.net/knowledge-base/dns/)
4. How to Rotate a DNSSEC Key


[dnssec](https://docs.cpanel.net/tags/dnssec/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/#overview)

* * *

[Rotate the key](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/#rotate-the-key)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/#overview)

* * *

[Rotate the key](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/#rotate-the-key)

* * *

## How to Rotate a DNSSEC Key

_Valid for versions 86 through the latest version_

#### Version:

#### [86](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/)

Last modified: _2022 July 12_

* * *

## Overview

This document describes how to rotate a domain’s DNS Security Extensions (DNSSEC) keys on a server. You can rotate your domains’ DNSSEC keys regularly to increase your DNS record’s security.

For more information about DNSSEC in cPanel & WHM, read our [DNSSEC](https://docs.cpanel.net/knowledge-base/dns/dnssec/) documentation.

Important:

- We recommend that you rotate your domain’s DNSSEC keys yearly.

- The system includes DNSSEC keys in an account’s backup file. You do **not** need to create new DNSSEC keys if you transfer the account to another server. For more information, read our [Backup Tarball Contents](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/) documentation.

- For more information about DNSSEC key rotation, we **strongly** suggest that you read the [RFC 6781](https://tools.ietf.org/html/rfc6781#section-4) documentation.


## Rotate the key

(on PowerDNS 4.2)

To rotate a DNSSEC key, perform the following steps:

1. Navigate to cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel_ » _Home_ » _Domains_ » _Zone Editor_).

2. For the domain that you wish to manage, click _DNSSEC_. The DNSSEC interface will appear. It will will display a recommendation for when you should rotate this key.

3. Generate a new DNSSEC key for the domain.

4. Navigate to your domain registrar and enter the new DNSSEC key information for the domain.






Note:




Many registrars provide a Manage DNSSEC option in their domain management portals. If they do not provide that option, you **must** manually add a DS record through their management portal.


5. Wait 24 to 48 hours for the DS record to propagate.

6. Remove the old DNSSEC key information for the domain from the registrar.

7. Navigate to cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel_ » _Home_ » _Domains_ » _Zone Editor_) and delete the old DNSSEC key.


#### Additional Documentation

* * *

- [Add a DNS Zone](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/)
- [Add an A Entry for Your Hostname](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/)
- [Delete a DNS Zone](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/)
- [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/)
- [DNS Zone Manager](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×