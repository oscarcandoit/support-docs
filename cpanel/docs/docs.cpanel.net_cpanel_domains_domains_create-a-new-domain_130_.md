---
url: "https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/"
title: "Create a New Domain | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Domains](https://docs.cpanel.net/cpanel/domains/)
4. Create a New Domain


[domains](https://docs.cpanel.net/tags/domains/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
- [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)
[Overview](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#overview) [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#create-a-new-domain) [Create a registered domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#create-a-registered-domain) [Create a temporary domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#create-a-temporary-domain) [Certificates](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#certificates) - [Manage the Domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#installation-toggle)

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
- [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)
[Overview](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#overview) [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#create-a-new-domain) [Create a registered domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#create-a-registered-domain) [Create a temporary domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#create-a-temporary-domain) [Certificates](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#certificates) - [Manage the Domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/)

## Create a New Domain

![](https://docs.cpanel.net/img/cpanel-icons/domains.svg)

_Valid for version 130_

#### Version:

#### [110](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/110/)

#### [130](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/)

#### [132](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)

Last modified: _2025 September 19_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

In order for you to create a new domain, your hosting provider **must** enable at least **one** of the following features in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM » Home » Packages » Feature Manager_):

| Domain | Description |
| --- | --- |
| Addon Domains | An additional domain name that a cPanel account owns. The system stores each addon domain in its own configurable directory. |
| Aliases | A second domain that points to a _Main Domain_. For example, both `http://www.cpanel.net/` and `http://www.cpanel.com/` point to the same website, because `cpanel.com` is a domain alias for `cpanel.net`. This makes your website available from another domain name. |
| Subdomains | A subsection of a website that exists as a subdirectory in the website owner’s home folder. For example, for the `example.com` domain, the subdomain URL could appear as `subdomain.example.com`. |

Note:

- To create your domain’s DNS records, use cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_). Contact your hosting provider to create or update any records that you cannot create or update in this interface.
- You cannot register a domain in cPanel, or update or renew a domain’s registration. To find out how to register a domain, or update or renew a domain’s registration, contact your hosting provider or read our [How to Identify Your Registrar](https://docs.cpanel.net/knowledge-base/dns/how-to-identify-your-registrar/) documentation.
- cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):
  - Editing DNS
  - Email services
  - Search Engine Optimization

## Create a New Domain

To create a domain, perform the following steps:

1. Click _Create a New Domain_. A new interface will appear.
2. Enter a [fully qualified domain name (FQDN)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#fqdn) in the _Domain_ text box.

   - To create a new domain, enter the new domain name. For example, `example.com`.
   - To create a [subdomain](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#subdomain), enter a new name followed by a period (`.`) and then the website’s domain. For example, enter `subdomain.example.com` to create a subdomain of `example.com`.
3. **Optionally**, you can specify the directory where you want to store the domain’s files (the domain’s [document root](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#document-root)). To create this directory, deselect the _Share document root with “example.com”_ checkbox, where `example.com` represents your _Main Domain_. You **cannot** create a document root outside of the `public_html/` directory. This will create an addon domain. You **cannot** use the following directories for your domain’s files:







[Click to view...](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/130/#click-to-view---1764175695019136514)





- The account’s home directory itself (`/`)
- Directories outside of the account’s home directory (`./` and `../`)
- `.cpanel`
- `.trash`
- `etc`
- `mail`
- `ssl`
- `tmp`
- `logs`
- `.cphorde`
- `.spamassassin`
- `.htpasswds`
- `var`
- `cgi-bin`
- `.ssh`
- `perl5`

Note:

- This setting **only** appears if your hosting provider enables it.
- The interface automatically populates the remaining text boxes, and we recommend that you use these values. However, you can enter different values in the _Document Root (File System Location)_ and _Subdomain_ text boxes if you want.

4. Click _Submit_ or click _Submit and Create Another_.

Note:

Visitors **cannot** view your subdomain immediately. Changes to [DNS](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#dns) records may require two days or more to reach each [nameserver](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#nameserver) on the internet.

## Certificates

When you create a domain or subdomain, the system will attempt to secure that domain with an existing [certificate](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#certificate).

- If no certificate exists, the system will generate a self-signed certificate to secure the new domain.
- If your hosting provider enables [AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) for the account that owns the new domain, the system will add a request for an AutoSSL certificate to secure the new domain and install it when it becomes available.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×