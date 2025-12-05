---
url: "https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/"
title: "Automatically-Issued Hostnames | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/#main-content)

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
4. Automatically-Issued Hostnames


[hostname](https://docs.cpanel.net/tags/hostname/) [installation](https://docs.cpanel.net/tags/installation/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/#overview)

* * *

[Why do you need an automatically-issued hostname?](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/#why-do-you-need-an-automatically-issued-hostname)

* * *

[Limitations](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/#limitations)

* * *

[Replace your automatically-issued hostname](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/#replace-your-automatically-issued-hostname)

* * *

[Hostname certificate replacement](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/#hostname-certificate-replacement)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/#overview)

* * *

[Why do you need an automatically-issued hostname?](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/#why-do-you-need-an-automatically-issued-hostname)

* * *

[Limitations](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/#limitations)

* * *

[Replace your automatically-issued hostname](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/#replace-your-automatically-issued-hostname)

* * *

[Hostname certificate replacement](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/#hostname-certificate-replacement)

* * *

## Automatically-Issued Hostnames

Last modified: _2025 August 1_

* * *

## Overview

Newly-installed servers without a fully-qualified domain name (FQDN) as a hostname will automatically receive one from WebPros International, LLC. The hostname will be a subdomain of `cprapid.com`.

## Why do you need an automatically-issued hostname?

An automatically-issued hostname allows [Let’s Encrypt™](https://letsencrypt.org/) to issue a **free** SSL certificate to your server.

An SSL certificate is a digital certificate that provides encryption and authentication for websites, ensuring secure communication between a website and a user’s browser. Some browsers block users from accessing websites without SSL certificates.

cPanel & WHM attempts to secure your server with an SSL certificate immediately after installation. First, it installs a self-signed certificate to secure the server. Then, it requests a [free hostname certificate](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/) from Let’s Encrypt, our default Certificate Authority (CA).

However, if a server does not have a FQDN hostname with a DNS record, Let’s Encrypt **cannot** issue a certificate for it. This means that the server will only use a self-signed certificate. If the server uses a self-signed certificate, users will see a security warning when they log in. This warning will display for the cPanel, WHM, and Webmail interfaces.

To fix this, cPanel & WHM provides an automatically-issued FQDN hostname to servers without one. This allows Let’s Encrypt to provide a free hostname certificate, which resolves security warnings.

## Limitations

- The automatically-issued hostname only issues a FQDN under the `cprapid.com` domain and points it to the main IP address of the server.
- You **cannot** manage the subdomain or delegate the subdomain to any other server.
- To create subdomains for nameservers, you **must** [set the server to use a hostname](https://docs.cpanel.net/whm/networking-setup/change-hostname/) from a domain that you control. Nameservers under the `cprapid.com` domain will **not** be fully functional.
- If a hosting provider uses a pre-installation script or post-installation script to assign a hostname to the server, the script will continue to work. However, the hostname must use a FQDN and resolve to the server’s IP address. Otherwise, the system will replace the hostname with an automatically-issued hostname.
- If a cPanel Partner disables the free hostname certificate service for their customers Manage2’s [_Update Company Information_](https://docs.cpanel.net/manage2/company/update-company-information/) interface ( _Manage2 » Dashboard » Company » Update Company Information_), the server will **only** use a self-signed certificate.






Remember:





If a server’s hostname uses a self-signed certificate, you will see a security warning when you log in.


## Replace your automatically-issued hostname

We encourage users to replace automatically-issued hostnames with an existing domain or purchase a new domain to generate a hostname. Using your own domain name and hostname will help establish your company’s brand.

To change the server’s hostname, use WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname/) interface ( _WHM » Home » Networking Setup » Change Hostname_).

### Hostname certificate replacement

When a user changes a server’s hostname, Let’s Encrypt will [automatically issue](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/) a new certificate for that server.

Note:

You may want to replace your free Let’s Encrypt certificate with a certificate from another CA to avoid [rate and domain limits](https://letsencrypt.org/docs/rate-limits/).

To use a certificate from a different CA, use WHM’s [_Purchase and Install an SSL Certificate_](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/) interface ( _WHM » Home » SSL/TLS » Purchase and Install an SSL Certificate_) to purchase and install the certificate.

#### Additional Documentation

* * *

- [Add an A Entry for Your Hostname](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/)
- [Change Hostname](https://docs.cpanel.net/whm/networking-setup/change-hostname/)
- [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/)
- [How to Rotate a DNSSEC Key](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/)
- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×