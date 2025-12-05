---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/service-subdomains-use-the-cpanel-service-ssl/"
title: "Service Subdomains Use the cPanel Service SSL | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/service-subdomains-use-the-cpanel-service-ssl/#main-content)

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
3. [cPanel Product](https://docs.cpanel.net/knowledge-base/cpanel-product/)
4. Service Subdomains Use the cPanel Service SSL


[ssl](https://docs.cpanel.net/tags/ssl/) [domains](https://docs.cpanel.net/tags/domains/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/service-subdomains-use-the-cpanel-service-ssl/#overview)

* * *

[How to bypass the use of service subdomains (proxy subdomains) and the cPanel service SSL certificate](https://docs.cpanel.net/knowledge-base/cpanel-product/service-subdomains-use-the-cpanel-service-ssl/#how-to-bypass-the-use-of-service-subdomains-proxy-subdomains-and-the-cpanel-service-ssl-certificate)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/service-subdomains-use-the-cpanel-service-ssl/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/service-subdomains-use-the-cpanel-service-ssl/#overview)

* * *

[How to bypass the use of service subdomains (proxy subdomains) and the cPanel service SSL certificate](https://docs.cpanel.net/knowledge-base/cpanel-product/service-subdomains-use-the-cpanel-service-ssl/#how-to-bypass-the-use-of-service-subdomains-proxy-subdomains-and-the-cpanel-service-ssl-certificate)

* * *

## Service Subdomains Use the cPanel Service SSL

Last modified: _2024 February 19_

* * *

## Overview

We modified Apache’s configuration to properly use [service subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/) (proxy subdomains) with SSL.

- Service subdomain (proxy subdomain) virtualhosts now handle SSL and non-SSL connections separately.

- Each service subdomain’s (proxy subdomain’s) virtualhost explicitly binds to all of the assigned IP addresses on a server.

- SSL virtualhost configurations — such as the `cpanel`, `whm`, `webdisk`, and `webmail` service subdomains (proxy subdomains) — use the cPanel service SSL certificate.


cPanel & WHM enables SNI functionality by default for SSL certificates on service subdomains (proxy subdomains). SNI allows multiple SSL certificates to use a single IP address and port number.

Due to these changes, Apache uses cPanel’s service SSL certificate to secure websites that do not have an SSL certificate. Visitors to sites without an SSL certificate may see an SSL warning, because Apache used cPanel’s service SSL certificate to secure the site.

## How to bypass the use of service subdomains (proxy subdomains) and the cPanel service SSL certificate

Warning:

We recommend that you do **not** bypass your server’s service subdomain (proxy subdomain) configuration.


To prevent the use of the cPanel service SSL certificate for the `cpanel`, `whm`, `webdisk`, and `webmail` subdomains, you **must** perform the following steps:

1. Disable the _Service subdomains_ setting in the _Domains_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

2. Use cPanel’s [_Domains_](https://docs.cpanel.net/cpanel/domains/domains/) interface ( _cPanel » Home » Domains » Domains_) to manually create each service’s subdomain (for example, `cpanel`, `whm`, `webdisk`, and `webmail`).

3. Redirect each service’s subdomain to the appropriate secure URL and port as follows:
   - **cPanel**: `cpanel.example.com` to `https://example.com:2083`

   - **WHM**: `whm.example.com` to `https://example.com:2087`

   - **Web Disk**: `webdisk.example.com` to `https://example.com:2078`

   - **Webmail**: `webmail.example.com` to `https://example.com:2096`

When you navigate to `webmail.example.com`, the server redirects you to `https://example.com:2096` and uses the `example.com` domain’s SSL certificate to secure the connection.

#### Additional Documentation

* * *

- [Install an SSL Certificate on a Domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/)
- [Manage SSL Hosts](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/)
- [The autossl\_check Script](https://docs.cpanel.net/whm/scripts/the-autossl_check-script/)
- [The checkallsslcerts Script](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/)
- [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×