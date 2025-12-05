---
url: "https://docs.cpanel.net/whm/account-information/list-parked-domains/"
title: "List Parked Domains | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-information/list-parked-domains/#main-content)

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
3. [Account Information](https://docs.cpanel.net/whm/account-information/)
4. List Parked Domains


[domains](https://docs.cpanel.net/tags/domains/) [whmui](https://docs.cpanel.net/tags/whmui/) [aliases](https://docs.cpanel.net/tags/aliases/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-information/list-parked-domains/#overview)

* * *

[List of parked domains](https://docs.cpanel.net/whm/account-information/list-parked-domains/#list-of-parked-domains)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-information/list-parked-domains/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-information/list-parked-domains/#overview)

* * *

[List of parked domains](https://docs.cpanel.net/whm/account-information/list-parked-domains/#list-of-parked-domains)

* * *

## List Parked Domains

![](https://docs.cpanel.net/img/whm-icons/list_parked_domains.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/account-information/list-parked-domains/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

A parked domain (or alias) points to the contents of another domain. You may assign multiple domain names to point to your domain with parked domains.

For example, a systems administrator can park the `example.com` domain on the `example.net` domain. When users visit `example.com` in a web browser, the system will display the contents of `example.net` domain. However, the browser’s address bar will display the `example.com` domain.

## List of parked domains

This interface contains the following information about the server’s parked domains:

- _Primary Domain_ — Displays the main domain on which the parked domains reside.
- _User_ — Displays the parked domains’ owners.
- _Parked Domains_ — Displays the parked domains’ domain names.
- _Action_ — The actions to perform on a parked domain.

  - Click _Unpark_ to un-park a domain.
  - Click _Add to Mail Config_ to allow the parked domains to accept email messages.

To deny users the ability to park on specific domains, add the domain that you wish to block to the following file:

```perl
/usr/local/cpanel/etc/commondomains
```

#### Additional Documentation

* * *

- [Convert Addon Domain to Account](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/)
- [Install an SSL Certificate on a Domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/)
- [List Subdomains](https://docs.cpanel.net/whm/account-information/list-subdomains/)
- [List Suspended Accounts](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/)
- [Park a Domain](https://docs.cpanel.net/whm/dns-functions/park-a-domain/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×