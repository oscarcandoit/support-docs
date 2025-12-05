---
url: "https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/"
title: "Guide to SSL | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#main-content)

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
3. [Security](https://docs.cpanel.net/knowledge-base/security/)
4. Guide to SSL


[ssl](https://docs.cpanel.net/tags/ssl/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#overview)

* * *

[SSL certificates](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#ssl-certificates)

* * *

[Certificate types](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#certificate-types)

* * *

[SNI support](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#sni-support)

* * *

[Certificate authorities](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#certificate-authorities)

* * *

[CA bundle files](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#ca-bundle-files)

* * *

[CAA records](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#caa-records)

* * *

[AutoSSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#autossl)

* * *

[AutoSSL sorting](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#autossl-sorting)

* * *

[AutoSSL providers](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#autossl-providers)

* * *

[Domain and rate limits](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#domain-and-rate-limits)

* * *

[Manually renew AutoSSL certificates](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#manually-renew-autossl-certificates)

* * *

[Update an expired SSL certificate without AutoSSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#update-an-expired-ssl-certificate-without-autossl)

* * *

[Manually update a certificate in WHM](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#manually-update-a-certificate-in-whm)

* * *

[Manually update a certificate in cPanel](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#manually-update-a-certificate-in-cpanel)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#overview)

* * *

[SSL certificates](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#ssl-certificates)

* * *

[Certificate types](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#certificate-types)

* * *

[SNI support](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#sni-support)

* * *

[Certificate authorities](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#certificate-authorities)

* * *

[CA bundle files](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#ca-bundle-files)

* * *

[CAA records](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#caa-records)

* * *

[AutoSSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#autossl)

* * *

[AutoSSL sorting](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#autossl-sorting)

* * *

[AutoSSL providers](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#autossl-providers)

* * *

[Domain and rate limits](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#domain-and-rate-limits)

* * *

[Manually renew AutoSSL certificates](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#manually-renew-autossl-certificates)

* * *

[Update an expired SSL certificate without AutoSSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#update-an-expired-ssl-certificate-without-autossl)

* * *

[Manually update a certificate in WHM](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#manually-update-a-certificate-in-whm)

* * *

[Manually update a certificate in cPanel](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#manually-update-a-certificate-in-cpanel)

* * *

## Guide to SSL

_Valid for versions 92 through 112_

#### Version:

#### [92](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/)

#### [114](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/114/)

#### [118](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)

Last modified: _2025 June 6_

* * *

## Overview

SSL/TLS (Secure Sockets Layer/Transport Layer Security) encrypts information between a visitor’s browser and a server. These protocols protect against electronic eavesdroppers. This also protects sensitive communications (for example, credit card numbers and login information).

Both of these protocols initiate a handshake, during which your server and the user’s computer agree on specific conditions. These conditions include a set of public and private keys. Both computers use these keys to encrypt and decrypt messages transmitted during communication.

Important:

cPanel & WHM supports [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246) and [Transport Layer Security (TLS) protocol version 1.3](https://tools.ietf.org/html/rfc8446):

- cPanel & WHM only supports TLSv1.2 or later. The system enables TLSv1.2 by default.
- Not all internet browsers or clients will support TLSv1.3.

Note:

- You can set up SSL/TLS for your server in WHM’s [_SSL/TLS Configuration_](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/) interface ( _WHM » Home » SSL/TLS » SSL/TLS Configuration_).
- You can set up SSL/TLS for a cPanel account’s domains in cPanel’s [_SSL/TLS_](https://docs.cpanel.net/cpanel/security/ssl-tls) interface ( _cPanel » Home » Security » SSL/TLS_).
- WebPros International, LLC does **not** offer free signed or self-signed hostname certificates for cPanel DNSOnly® servers.

## SSL certificates

An SSL certificate is an electronic document that digitally binds a public key to an identity. This helps secure the connection between a web browser and a website. An SSL certificate serves the following functions:

- Encryption — Encodes data. This helps to ensure that if someone intercepts the transmission, they cannot understand it.
- Identification verification — This ensures that you connect to the correct server.






Note:





- SSL certificates review domain names literally. For example, SSL interprets `www.example.com` and `example.com` as two different domains.
- The Common Name (CN) entry of an SSL certificate is cosmetic and does **not** affect the security of a certificate.
- An SSL certificate’s CN does **not** need to be the main domain. The certificate covers _all_ domains listed in the certificate’s Subject Alternative Name (SAN) field.

#### SSL key security

When you generate an SSL certificate, you can select the type of key that your SSL certificate uses. You can also select the type of key the system uses by default when generating SSL certificates:

- In WHM, use either WHM’s [_SSL/TLS Configuration_](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration) interface ( _WHM » Home » SSL/TLS » SSL/TLS Configuration_) or the _Default SSL/TLS Key Type_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).






Note:





This setting **only** applies to cPanel users who do **not** set a default key type.

- In cPanel, use the [_SSL/TLS_](https://docs.cpanel.net/cpanel/security/ssl-tls) interface ( _cPanel » Home » Security » SSL/TLS_).






Important:





When selecting a new default key type, the system performs an [AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) run. This updates **all** installed AutoSSL-issued certificates to use the new key type.


### Certificate types

When you work with SSL, you may encounter the following types of SSL certificates:

- **Single-domain** — This certificate type secures a single domain or subdomain.
- **Multi-domain** — This certificate type secures many domains with one certificate. It is also called a Unified Communications/Subject Alternate Name (UC/SAN) certificate.






Note:





You **must** reissue a multi-domain certificates each time you add a new hostname.

- **Self-signed** — This certificate type does **not** verify the identity of the server and does **not** require a CA. These certificates are **not** secure. Visitors’ browsers will display a warning when they access the site. You can create a self-signed SSL certificate in WHM’s [_Generate an SSL Certificate and Signing Request_](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request) interface ( _WHM » Home » SSL/TLS » Generate an SSL Certificate and Signing Request_).






Important:





We **strongly** recommend using a valid **signed** certificate if your website handles sensitive data.

- **Shared SSL** — This certificate type allows you to secure multiple domains with the same SSL certificate.






Note:





cPanel & WHM does **not** support this type of certificate.

- **Wildcard** — Any type of certificate that contains a wildcard (`*`) domain. You can secure a domain’s subdomains with a single certificate if they share an IP address. For example, you can use a wildcard for the `*.example.com` domain to also secure the `mail.example.com` and `www.example.com` subdomains. However, this will **not** secure the to `example.com` domain.






Note:





- You can apply a wildcard certificate to services in WHM’s [_Manage Service SSL Certificates_](https://docs.cpanel.net/whm/service-configuration/manage-service-ssl-certificates) interface ( _WHM » Home » Service Configuration » Manage Service SSL Certificates_).
- The `root` user may install a wildcard certificate on a collection of subdomains for a single `root` domain on multiple IP addresses. If this configuration uses multiple IP addresses, a user on the server **cannot** own the `root` domain.

### SNI support

[Server Name Indication](https://en.wikipedia.org/wiki/Server_Name_Indication) (SNI) support allows you to host multiple SSL certificates for different domains on the same IP address. At the beginning of the handshake process, SNI indicates the hostname to which the client connects. Users on shared servers that support SNI can install their own certificates without a dedicated IP address.

Note:

cPanel & WHM servers do **not** support SNI for the FTP service.

## Certificate authorities

Your Certificate Authority (CA) is the trusted third-party entity that issues your SSL certificates.

### CA bundle files

Generally, when you purchase an SSL certificate, the CA will provide you a CA bundle file. Some providers will send you the bundle file as a `.cab` or `.zip` file, others provide the files individually, and some will provide you a URL to download the bundle file.

A bundle file will contain the following details about the SSL certificate:

- The CA that issued the certificate.
- Any of the CA’s certificates, root or intermediate.
- The chain of trust for the issuer.






Note:





A CA can vouch for other CAs, which results in a chain of trust. For a CA to sell certificates, another CA must vouch for them.

- Certificate Revocation Lists (CRLs).






Note:





- The order of files in a bundle is important. If the CA sends individual files, we recommend that you ask them to pack them into a bundle file for you.
- Bundle files for EV (Extended Validated) certificates may contain more files than certificates than OV (Organization Validated) and DV (Domain Validated) certificates.

Browsers include a list of trusted CAs, and they use the list to determine whether to trust a specific CA.

You can locate a domain’s CA bundle with either of the following UAPI functions:

- [`SSL::get_cabundle`](https://api.docs.cpanel.net/openapi/cpanel/operation/get_cabundle/)
- [`SSL::fetch_key_and_cabundle_for_certificate`](https://api.docs.cpanel.net/openapi/cpanel/operation/fetch_key_and_cabundle_for_certificate/)

You can install a CA bundle in either of the following interfaces:

- WHM’s [_Install an SSL Certificate on a Domain_](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/) interface ( _WHM » Home » SSL/TLS » Install an SSL Certificate on a Domain_).
- cPanel’s [_Manage SSL Sites_](https://docs.cpanel.net/cpanel/security/ssl-tls/) interface ( _cPanel » Home » Security » SSL/TLS » Manage SSL Sites_).

You can also use the UAPI [`SSL::install_ssl`](https://api.docs.cpanel.net/openapi/cpanel/operation/install_ssl/) function to install a CA bundle.

### CAA records

A Certification Authority Authorization (CAA) record specifies which CAs may issue certificates for a domain. If no CAA records exist for a domain, all CAs can issue certificates for that domain. You can manage CAA records through WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_) or through cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor) interface ( _cPanel » Home » Domains » Zone Editor_).

If conflicting CAA records already exist, you **must** either remove the current CAA records or add one for the desired CAA. For example, a CAA record for Let’s Encrypt™ would resemble the following example, where `example.com` represents the domain name:

```bash
example.com.    86400   IN  CAA 0 issue "letsencrypt.org"
```

## AutoSSL

AutoSSL secures multiple domains with the assumption that all of the domains resolve to the same virtual host. A cPanel-issued AutoSSL certificate expires after 90 days. However, AutoSSL attempts to automatically replace that certificate before it expires.

If your hosting provider has enabled notifications for AutoSSL, the system will send you an email when it generates or renews an AutoSSL certificate for a domain.

Important:

- You can use the cPanel (powered by Sectigo) provider to secure up to 1,000 domains per certificate.
- AutoSSL does **not** issue certificates for websites on suspended accounts. You **must** first activate the account in order for AutoSSL to issue a certificate.
- AutoSSL adds service subdomains to the SSL certificate using a sort algorithm. For more information about service subdomains, read our [Service and Proxy Subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/) documentation.

### AutoSSL sorting

AutoSSL uses a sort algorithm to establish which domains to add to the certificate first. This sort order ensures that the system adds the domains that customers will most likely visit to the certificate first. For example, customers most likely intend to navigate to `example.com` versus `www.subdomain.example.com`.

The default sort algorithm prioritizes domains in the following order:

1. Any fully-qualified domain names (FQDNs) that the virtual host’s current SSL certificate secures.

2. The primary domain on the cPanel account and its `ipv6`, `www.` and `mail.` subdomains.

3. Each addon domain and its `www.` and `mail.` subdomains. For example, the `example` cPanel user (whose primary domain is `example.com`), creates the `foo.com` addon domain. This addon domain, like all cPanel addon domains, exists on a separate virtual host with a subdomain. In this case, the system prioritizes `foo.com` over `foo.example.com`.

4. Domains with fewer dots. For example, AutoSSL would prioritize `foo.com` over `www.foo.com`.

5. The `www`, `mail`, `whm`, `webmail`, `cpanel`, `autodiscover`, and `webdisk` subdomains.







Note:





AutoSSL only adds the `whm` service subdomain to the SSL certificate for reseller accounts.

6. Shorter domains.


### AutoSSL providers

#### The cPanel (powered by Sectigo) provider

By default, cPanel & WHM uses the cPanel (powered by Sectigo) provider. It is free and comes with your cPanel & WHM license.

#### The Let’s Encrypt plugin

You can install the Let’s Encrypt™ AutoSSL plugin. This lets you select [Let’s Encrypt](http://letsencrypt.org/) as a provider. For more information about the plugin, read our [Let’s Encrypt Plugin](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/) documentation.

The Let’s Encrypt provider has the following limitations:

- A rate limit of **300 certificate orders every three hours**.
- A **weekly** limit of 50 registered domains.
- A **maximum** of 100 subdomains per certificate.
- Limits the certificates it issues to a specific set of domains to **five certificates per week**. After this, Let’s Encrypt blocks any further certificates for that set of domains.






Note:





To work around this rate limit, [create an alias to a domain](https://docs.cpanel.net/cpanel/domains/domains) in the virtual host list (website). Let’s Encrypt will interpret the virtual host as a new set of domains.


For more information about Let’s Encrypt’s rate limits, read their [rate limit documentation](https://letsencrypt.org/docs/rate-limits/).

### Domain and rate limits

The AutoSSL feature includes the following limitations and conditions:

- A domain’s DNS zone contains CAA records. These CAA records restrict which CAs may issue certificates for that domain. If a CAA record for another provider already exists, you can remove that CAA record or add one for the desired CA. If no CAA records exist for a domain, all CAs can issue certificates for that domain.
  - Your server’s DNS zone can have more than one CAA record to receive certificates from more than one CA.
- Each AutoSSL provider may use a specific domain rate limit:
  - Certificates that WebPros International, LLC provides through AutoSSL can secure a **maximum** of 1,000 domains per certificate ( [Apache virtual host](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/)). The following demonstrates these limitations for the cPanel AutoSSL provider:

    - Virtual host with 1,000 domains — AutoSSL secures every domain on the virtual host.
    - Virtual host with 1,001 domains — AutoSSL can **only** secure up to 1,000 of the virtual host’s domains. AutoSSL chooses which domains to secure by sorting those domains which pass [Domain Control Validation (DCV)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#domain-control-validation) and taking the first 1,000.
  - Certificates that [Let’s Encrypt](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin/) provides can secure a maximum of **100 domains every three hours**.

    - [Aliases](https://docs.cpanel.net/cpanel/domains/domains) count **three times** towards each certificate’s domains limit. When you create an alias domain, the system adds the following aliases to the original virtual host (where `aliasdomain.com` represents the alias domain):

      - `aliasdomain.com`
      - `www.aliasdomain.com`
      - `mail.aliasdomain.com`
- AutoSSL **only** includes domains and subdomains that pass a DCV test. This DCV proves ownership of the domain.
- AutoSSL includes corresponding `www.` domains for each domain and subdomain in the certificate, and those `www.` domains count towards any domain or rate limits. For example, for the `example.com` domain, AutoSSL automatically includes `www.example.com` in the certificate. If the corresponding `www.` domain does **not** pass a DCV test, AutoSSL will **not** attempt to secure that `www.` domain.

  - This method affects Let’s Encrypt’s limit of 50 certificates per week that may contain a domain or its subdomains.
- The default cPanel AutoSSL provider does **not** secure wildcard domains. However, the Let’s Encrypt provider will secure wildcard domains.
- Each AutoSSL provider may wait for a specific amount of time to replace an AutoSSL-provided certificate before it expires. For example:
  - AutoSSL attempts to renew certificates that WebPros International, LLC provides when they expire within 15 days.
  - AutoSSL attempts to renew certificates that Let’s Encrypt provides when they expire within 29 days.
  - Due to rate limits, AutoSSL prioritizes new certificates over the renewal of existing certificates.
- AutoSSL will **not** attempt to replace certificates that it did not issue. You can override this behavior if you enable the _Allow AutoSSL to replace invalid or expiring non-AutoSSL certificates_ setting in WHM’s [_Manage AutoSSL_](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) interface ( _WHM » Home » SSL/TLS » Manage AutoSSL_).
- AutoSSL replaces certificates with overly-weak security settings. For example, an RSA modulus of 2048-bit or less.
- A virtual host may contain more than the provider’s limit of domain names per certificate. AutoSSL uses a sort algorithm to determine the priority of domains to secure. For more information, read the [AutoSSL sorting](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/92/#autossl-sorting) section above.
- If you are using [AutoSSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/) or SSL certificates purchased via your cPanel account to secure a [linked mail node](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/), your cPanel & WHM nodes **must** be able to manage its authoritative DNS server.

### Manually renew AutoSSL certificates

AutoSSL provides and renews SSL certificates. AutoSSL attempts to renew certificates that WebPros International, LLC provides when they expire within 15 days. AutoSSL attempts to renew certificates that Let’s Encrypt provides when they expire within 29 days. You can also manually renew certificates prior to the next automated run.

#### Manually renew a hostname certificate

To manually renew a server’s hostname certificate, run the [`checkallsslcerts`](https://docs.cpanel.net/whm/scripts/the-checkallsslcerts-script/) script as the `root` user on the command line:

```perl
/usr/local/cpanel/bin/checkallsslcerts
```

#### Manually renew a certificate for a single cPanel user

To manually renew a certificate for a single cPanel user, perform the following steps:

1. Log in to cPanel as the user.
2. Navigate to cPanel’s [_SSL/TLS Status_](https://docs.cpanel.net/cpanel/security/ssl-tls-status) interface ( _cPanel » Security » SSL/TLS Status_).
3. Select _Run AutoSSL_.

#### Manually renew a certificate before expiration

To manually renew a domain’s certificate before it expires, perform the following steps:

1. Log in to cPanel as the user.
2. Navigate to cPanel’s [_Manage SSL Sites_](https://docs.cpanel.net/cpanel/security/ssl-tls/#install-and-manage-ssl-for-your-site-https) interface ( _cPanel » Security » SSL/TLS » Manage SSL Sites_).
3. Delete the affected certificate.
4. Navigate to cPanel’s [_SSL/TLS Status_](https://docs.cpanel.net/cpanel/security/ssl-tls-status) interface ( _cPanel » Security » SSL/TLS Status_).
5. Select _Run AutoSSL_.

## Update an expired SSL certificate without AutoSSL

Important:

- You **must** possess a valid SSL certificate to complete the steps in this section.
- You can purchase a valid SSL certificate from your preferred SSL certificate provider.

### Manually update a certificate in WHM

To manually update an expired SSL certificate in WHM without using AutoSSL, perform the following steps:

1. Navigate to WHM’s [_Install an SSL Certificate on a Domain_](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/) interface ( _WHM » Home » SSL/TLS » Install an SSL Certificate on a Domain_).
2. Follow the instructions in the _Install an SSL certificate_ section of our [_Install an SSL Certificate on a Domain_](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain//#install-an-ssl-certificate) documentation.

### Manually update a certificate in cPanel

To manually update an expired SSL certificate in cPanel without using AutoSSL, perform the following steps:

1. Log in to cPanel as the user.
2. Navigate to cPanel’s [_Manage SSL Hosts_](https://docs.cpanel.net/cpanel/security/ssl-tls/#install-and-manage-ssl-for-your-site-https) interface ( _cPanel » Security » SSL/TLS » Manage SSL Sites_).
3. Select the domain with the expired certificate from the _Domain_ menu.
4. Located under the _Install an SSL Website_ section, configure the following text boxes:

   - _Certificate: (CRT)_.
   - _Private Key (KEY)_.
   - _Certificate Authority Bundle: (CABUNDLE)_.






     Note:





     In most cases, you do not need to supply the CA bundle because the server will fetch it from a public repository during installation.
5. Click _Install Certificate_.

#### Additional Documentation

* * *

- [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)
- [How to Configure MySQL SSL Connections](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Key Types](https://docs.cpanel.net/knowledge-base/security/ssl-tls-key-types/)
- [SSL/TLS Status](https://docs.cpanel.net/cpanel/security/ssl-tls-status/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×