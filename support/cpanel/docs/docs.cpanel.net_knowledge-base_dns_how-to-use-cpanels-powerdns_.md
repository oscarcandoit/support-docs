---
url: "https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/"
title: "How to Use cPanel's PowerDNS | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/#main-content)

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
4. How to Use cPanel's PowerDNS


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [dns](https://docs.cpanel.net/tags/dns/) [powerdns](https://docs.cpanel.net/tags/powerdns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/#overview)

* * *

[Install PowerDNS](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/#install-powerdns)

* * *

[PowerDNS version](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/#powerdns-version)

* * *

[DNSSEC](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/#dnssec)

* * *

[Troubleshoot PowerDNS](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/#troubleshoot-powerdns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/#overview)

* * *

[Install PowerDNS](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/#install-powerdns)

* * *

[PowerDNS version](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/#powerdns-version)

* * *

[DNSSEC](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/#dnssec)

* * *

[Troubleshoot PowerDNS](https://docs.cpanel.net/knowledge-base/dns/how-to-use-cpanels-powerdns/#troubleshoot-powerdns)

* * *

## How to Use cPanel's PowerDNS

Last modified: _2022 July 14_

* * *

## Overview

The [PowerDNS](https://powerdns.com/) open source DNS server software offers high performance with very low memory requirements. cPanel’s PowerDNS implementation reads DNS data from the BIND files and stores DNSSEC data in a SQLite database. This makes cPanel’s PowerDNS compatible with most of cPanel’s DNS Management tools.

Note:

System files and other online sources may refer to PowerDNS as _pdns_.

## Install PowerDNS

To install PowerDNS via WHM’s [_Nameserver Selection_](https://docs.cpanel.net/whm/service-configuration/nameserver-selection) interface _(WHM » Home » Service Configuration » Nameserver Selection)_, perform the following steps:

1. Navigate to WHM’s [_Nameserver Selection_](https://docs.cpanel.net/whm/service-configuration/nameserver-selection) interface _(WHM » Home » Service Configuration » Nameserver Selection)_.

2. Select _PowerDNS_.

3. Click _Save_.


## PowerDNS version

To check your server’s PowerDNS version, run WHM API 1’s [`installed_versions`](https://api.docs.cpanel.net/openapi/whm/operation/installed_versions/) function. The function’s output contains the `powerdns` return, which displays the server’s currently-installed PowerDNS version.

## DNSSEC

PowerDNS allows you to use DNS Security Extension (DNSSEC) with your domains’ DNS records. DNSSEC adds a layer of security to your domains’ DNS records. DNSSEC uses digital signatures and cryptographic keys to validate the DNS responses’ authenticity. These digital signatures protect clients from various forms of attack, such as spoofing or a man-in-the-middle attack.

To enable DNSSEC, follow the directions in our [Zone Editor](https://docs.cpanel.net/cpanel/domains/zone-editor) documentation.

Important:

This feature **only** appears in cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor) interface _(cPanel » Home » Domains » Zone Editor)_ if your hosting provider installs PowerDNS in WHM’s [_Nameserver Selection_](https://docs.cpanel.net/whm/service-configuration/nameserver-selection) interface _(WHM » Home » Service Configuration » Nameserver Selection)_.

## Troubleshoot PowerDNS

To troubleshoot PowerDNS further, check the `/var/log/messages` error log.

#### Additional Documentation

* * *

- [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/)
- [How to Rotate a DNSSEC Key](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/)
- [The cleandns Script](https://docs.cpanel.net/whm/scripts/the-cleandns-script/)
- [The dnssec-cluster-keys Script](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/)
- [The enable\_spf\_dkim\_globally Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×