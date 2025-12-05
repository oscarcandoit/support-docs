---
url: "https://docs.cpanel.net/whm/dns-functions/perform-a-dns-cleanup/"
title: "Perform a DNS Cleanup | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/dns-functions/perform-a-dns-cleanup/#main-content)

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
4. Perform a DNS Cleanup


[dns](https://docs.cpanel.net/tags/dns/) [nameservers](https://docs.cpanel.net/tags/nameservers/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/dns-functions/perform-a-dns-cleanup/#overview)

* * *

[Perform a DNS cleanup](https://docs.cpanel.net/whm/dns-functions/perform-a-dns-cleanup/#perform-a-dns-cleanup)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/dns-functions/perform-a-dns-cleanup/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/dns-functions/perform-a-dns-cleanup/#overview)

* * *

[Perform a DNS cleanup](https://docs.cpanel.net/whm/dns-functions/perform-a-dns-cleanup/#perform-a-dns-cleanup)

* * *

## Perform a DNS Cleanup

![](https://docs.cpanel.net/img/whm-icons/perform_a_dns_cleanup.svg)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface is useful if your BIND or PowerDNS configuration file is corrupt, or if duplicate nameserver configuration files cause DNS problems for your server.

Warning:

- Do **not** modify nameserver configuration files while this process runs.
- **Only** run this process (or the `/usr/local/cpanel/scripts/cleandns` script) on servers that use BIND or PowerDNS nameservers. Do not run this process on servers that use any other nameserver.

## Perform a DNS cleanup

Warning:

Performing a DNS Cleanup will clean up your named `config` file and remove any duplicated entries. Do NOT edit any nameserver configuration files during the clean up.

1. Log in to WHM.
2. On the _Tools_ menu on the left side of the interface, scroll down and select _DNS Functions_. When the _DNS Functions_ list expands, select _Perform a DNS Cleanup_ ( _WHM » Tools » DNS Functions » Perform a DNS Cleanup_). You can also find this tool by typing “Perform a DNS Cleanup” in the search text box in the top left corner of the interface.
3. Click _Proceed_ to run the cleanup.

When the cleanup process finishes, you will see a summary of the number of cleaned zones.

#### Additional Documentation

* * *

- [Delete a DNS Zone](https://docs.cpanel.net/whm/dns-functions/delete-a-dns-zone/)
- [DNS Zone Manager](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/)
- [Edit Zone Templates](https://docs.cpanel.net/whm/dns-functions/edit-zone-templates/)
- [Email Routing Configuration](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/)
- [Nameserver Record Report](https://docs.cpanel.net/whm/dns-functions/nameserver-record-report/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×