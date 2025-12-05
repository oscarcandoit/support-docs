---
url: "https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/"
title: "Automatic SSL Certificate Replacement | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#main-content)

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
4. Automatic SSL Certificate Replacement


[dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#overview)

* * *

[Automatic SSL replacement conditions](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#automatic-ssl-replacement-conditions)

* * *

[Automatic replacement process](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#automatic-replacement-process)

* * *

[Replacement examples](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#replacement-examples)

* * *

[Disable automatic certificate replacement](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#disable-automatic-certificate-replacement)

* * *

[Manage your certificates](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#manage-your-certificates)

* * *

[Troubleshooting](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#troubleshooting)

* * *

[CAA records exclude Let’s Encrypt certificates](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#caa-records-exclude-lets-encrypt-certificates)

* * *

[Did not install cPanel & WHM with a FQDN](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#did-not-install-cpanel--whm-with-a-fqdn)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#overview)

* * *

[Automatic SSL replacement conditions](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#automatic-ssl-replacement-conditions)

* * *

[Automatic replacement process](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#automatic-replacement-process)

* * *

[Replacement examples](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#replacement-examples)

* * *

[Disable automatic certificate replacement](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#disable-automatic-certificate-replacement)

* * *

[Manage your certificates](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#manage-your-certificates)

* * *

[Troubleshooting](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#troubleshooting)

* * *

[CAA records exclude Let’s Encrypt certificates](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#caa-records-exclude-lets-encrypt-certificates)

* * *

[Did not install cPanel & WHM with a FQDN](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#did-not-install-cpanel--whm-with-a-fqdn)

* * *

## Automatic SSL Certificate Replacement

Last modified: _2025 August 1_

* * *

## Overview

An SSL certificate is a digital certificate that provides encryption and authentication for websites, ensuring secure communication between a website and a user’s browser. Some browsers block users from accessing websites without SSL certificates.

Servers with valid cPanel & WHM licenses can receive a free SSL certificate for their hostname and any services on it.

Warning:

If a cPanel Partner disables the free hostname certificate service for their customers in Manage2’s [_Update Company Information_](https://docs.cpanel.net/manage2/company/update-company-information/) interface ( _Manage2 » Dashboard » Company » Update Company Information_), the server will **not** use free hostname certificates.

## Automatic SSL replacement conditions

Free SSL certificates will **automatically replace** any hostname or service certificates that meet any of the following conditions:

- Maintains a weak signature algorithm.
- Revoked.
- Self-signed. Self-signed certificates are **not** as secure as certificates that Certificate Authorities (CAs) provide. Because there is no third-party verification, any server could claim to have a self-signed certificate.
- Invalid (For example, your server’s hostname must resolve in DNS and point to the server’s main IP address).
- Will expire soon, based on the following criteria:
  - [Let’s Encrypt™](https://letsencrypt.org/) certificates that expire in less than 25 days.
  - Certificates issued by any other provider that expire in less than 3 days.

## Automatic replacement process

When an SSL certificate meets the replacement conditions, the server orders a replacement when the [`/usr/local/cpanel/scripts/upcp`](https://docs.cpanel.net/whm/server-configuration/configure-cpanel-cron-jobs/#the-upcp-command) script runs. Then, when Let’s Encrypt sends the replacement certificate, the system downloads and installs it.

If a certificate expires before Let’s Encrypt sends a replacement, the system will install a self-signed certificate as a placeholder. The system will replace its self-signed certificate with the new Let’s Encrypt certificate.

Warning:

The automatic certificate replacement process **only** happens if your hosting provider allows it and you have not [disabled it](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/#disable-automatic-certificate-replacement).

### Replacement examples

The following examples show how the automatic certificate replacement process works:

- If the Dovecot service’s Let’s Encrypt certificate expires in less than 25 days, the system will order a new Let’s Encrypt certificate to replace the old one. When the new Let’s Encrypt certificate arrives, the system will replace the expiring certificate.
- If the FTP service’s certificate is provided by a CA other than Let’s Encrypt and it expires in less than 3 days, the system will order a Let’s Encrypt certificate to replace it. If Let’s Encrypt cannot send a certificate in time and the CA-provided certificate expires, the system will install a self-signed certificate until Let’s Encrypt sends the new certificate. Then, the system will replace the self-signed certificate.

## Disable automatic certificate replacement

You can disable different parts of the automatic certificate replacement process by creating the following touch files:

| File | Effect |
| --- | --- |
| `/var/cpanel/ssl/disable_auto_hostname_certificate` | The system will not automatically replace hostname certificates. |
| `/var/cpanel/ssl/disable_service_certificate_management` | The system will not replace service certificates. The system will also disable notifications about service certificate expiration. |

## Manage your certificates

You can replace your free Let’s Encrypt certificate with a certificate from another CA in WHM’s [_Purchase and Install an SSL Certificate_](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/) interface ( _WHM » Home » SSL/TLS » Purchase and Install an SSL Certificate_). You may want to replace your free Let’s Encrypt certificate with a certificate from another CA to avoid [rate and domain limits](https://letsencrypt.org/docs/rate-limits/).

You can see and manage your services’ certificates in WHM’s [_Manage Service SSL Certificates_](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates/) interface.

## Troubleshooting

Some configuration issues can **prevent** your server from automatically replacing certificates.

### CAA records exclude Let’s Encrypt certificates

To receive an automatic replacement certificate, you must allow Let’s Encrypt to issue certificates for your domain. Certificate Authority Authentication (CAA) records are DNS records that authorize CAs to issue certificates for your domain. If your domain’s CAA records do not include Let’s Encrypt, it **cannot** issue an automatic replacement certificate for your domain.

To fix this, perform one of the following actions:

- Remove your domain’s CAA records. If there are no CAA records for a domain, all CAs are allowed to issue certificates for it.
- Add a CAA record for Let’s Encrypt.

A CAA record for Let’s Encrypt would resemble the following example, where `example.com` represents the domain name: `example.com. 86400 IN CAA 0 issue "letsencrypt.org"`.

You can manage CAA records through WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_) or through cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_).

### Did not install cPanel & WHM with a FQDN

When you install cPanel & WHM, it attempts to secure your server with an SSL certificate immediately. First, it installs a self-signed hostname certificate. Then, it replaces the self-signed certificate with a free Let’s Encrypt certificate.

However, if you did not set a resolvable Fully Qualified Domain Name (FQDN) as your domain name or get an [automatically-issued hostname](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/), Let’s Encrypt will **not** be able to send you a free certificate. This means that your server will **only** have a self-signed certificate.

Remember:

Self-signed certificates are **not** as secure as other certificates, because self-signed certificates do not use third-party verification system. This means that any server could claim to be your server.

Because your server only has a self-signed certificate, users may see a security warning when they log in to the cPanel, WHM, or Webmail interfaces.

To secure your server and prevent these warnings, we **strongly recommend** that you use WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname/) interface ( _WHM » Home » Networking Setup » Change Hostname_) to change the hostname to a FQDN. Then, Let’s Encrypt can issue a **free** hostname certificate when the `/usr/local/cpanel/scripts/upcp` maintenance runs.

If you instead want to use a certificate from another CA, you can update the self-signed certificate with a certificate that you purchase from WHM’s [_Purchase and Install an SSL Certificate_](https://docs.cpanel.net/whm/ssl-tls/purchase-and-install-an-ssl-certificate/) interface ( _WHM » Home » SSL/TLS » Purchase and Install an SSL Certificate_).

#### Additional Documentation

* * *

- [Add a DNS Zone](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/)
- [Add an A Entry for Your Hostname](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/)
- [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/)
- [DNS Zone Manager](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/)
- [How to Rotate a DNSSEC Key](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×