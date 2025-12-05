---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/"
title: "Service and Proxy Subdomains | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. Service and Proxy Subdomains


[ports](https://docs.cpanel.net/tags/ports/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/#overview)

* * *

[Settings](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/#settings)

* * *

[Access interfaces](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/#access-interfaces)

* * *

[Access services](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/#access-services)

* * *

[Bypass using the cPanel service SSL certificate](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/#bypass-using-the-cpanel-service-ssl-certificate)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/#overview)

* * *

[Settings](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/#settings)

* * *

[Access interfaces](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/#access-interfaces)

* * *

[Access services](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/#access-services)

* * *

[Bypass using the cPanel service SSL certificate](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/#bypass-using-the-cpanel-service-ssl-certificate)

* * *

## Service and Proxy Subdomains

Last modified: _2025 February 4_

* * *

## Overview

Service subdomains provide access to cPanel & WHM interfaces and services. When you create accounts or domains, the system also creates their service subdomains. You can access interfaces and services via the port or the service subdomain. The port has a faster server response time. However, the service subdomain allows access from behind a firewall restricting, for example, port `80` and port `443`.

- SSL virtualhost configurations use the cPanel service SSL certificate. For example, the `cpanel`, `whm`, `webdisk`, and `webmail` service subdomains use it. For steps to bypass this, read the Bypass using the cPanel service SSL certificate section below.
- The system handles SSL and non-SSL connections separately.
- Each service subdomain’s virtualhost binds to the server’s assigned IP addresses.
- cPanel & WHM uses Apache’s configuration to enable service subdomains with SSL.
- cPanel & WHM uses [Domain TLS](https://docs.cpanel.net/knowledge-base/general-systems-administration/what-is-domain-tls/) SNI by default for service subdomains’ SSL certificates.
- cPanel & WHM previously referred to service subdomains as proxy subdomains.

## Settings

The _Service subdomains_ setting is enabled by default in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_). We **strongly** recommend that you do **not** disable this setting.

In cPanel & WHM version 120 and later, we enable [AutoConfig and Autodiscover](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/) by default. For more information, read the _Domains_ section of our [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#domains) documentation.

Note:

- You can use the [`/usr/local/cpanel/scripts/servicedomains`](https://docs.cpanel.net/whm/scripts/the-servicedomains-script/) script to create DNS records for service subdomains.
- If your server runs [NGINX®](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/), you **cannot** use the Safari® web browser to log in to a service subdomain. Use another browser, or log in with the service’s [port URL](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/).

## Access interfaces

Users can access cPanel, WHM, and Webmail using these service subdomains:

| Interface | Service subdomain | Secure port | Non-secure port |
| --- | --- | --- | --- |
| cPanel | `https://cpanel.example.com` | `https://example.com:2083` | `http://example.com:2082` |
| WHM | `https://whm.example.com`<br>Note:<br>SSL **only** secures the `whm` service subdomain for resellers. | `https://example.com:2087` | `http://example.com:2086` |
| Webmail | `https://webmail.example.com` | `https://example.com:2096` | `http://example.com:2095` |

## Access services

You can access cPanel & WHM services using these service subdomains:

| Service | Service subdomain | Secure port | Non-secure port |
| --- | --- | --- | --- |
| [AutoConfig](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/) | `https://autoconfig.example.com` | `https://example.com:443` | `http://example.com:443` |
| [Autodiscover](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/) | `https://autodiscover.example.com` | `https://example.com:443` | `http://example.com:443` |
| [CalDAV](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/) | `https://cpcalendars.example.com` | `https://example.com:2080` | `http://example.com:2079` |
| [CardDAV](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/) | `https://cpcontacts.example.com` | `https://example.com:2080` | `http://example.com:2079` |
| [Web Disk](https://docs.cpanel.net/cpanel/files/web-disk/) | `https://webdisk.example.com` | `https://example.com:2078` | `http://example.com:2077` |

Important:

We **strongly** recommend that you **only** use secure ports to access services on your server. For more information about ports on your cPanel & WHM server, read our [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) documentation.


## Bypass using the cPanel service SSL certificate

Warning:

We do **not** recommend this action.


To prevent the use of the cPanel service SSL certificate for the `cpanel`, `whm`, `webdisk`, and `webmail` subdomains:

1. Disable the Service subdomains setting in the _Domains_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

2. Use cPanel’s [_Domains_](https://docs.cpanel.net/cpanel/domains/domains/) interface ( _cPanel » Home » Domains » Domains_) to create each service subdomain (for example, `cpanel`, `whm`, `webdisk`, and `webmail`).

3. Redirect each service’s subdomain to the correct secure URL and port:


| Service | Subdomain | Redirection |
| --- | --- | --- |
| cPanel | `cpanel.example.com` | `https://example.com:2083` |
| WHM | `whm.example.com` | `https://example.com:2087` |
| Web Disk | `webdisk.example.com` | `https://example.com:2078` |
| Webmail | `webmail.example.com` | `https://example.com:2096` |

When you navigate to `webmail.example.com`, the server redirects you to `https://example.com:2096`. Then, it uses the `example.com` domain’s SSL certificate to secure the connection.

#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [Supported MySQL/MariaDB Versions](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×