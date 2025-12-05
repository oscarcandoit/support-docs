---
url: "https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/"
title: "Reseller Accounts Versus Accounts with Multiple Domains | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#main-content)

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
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. Reseller Accounts Versus Accounts with Multiple Domains


[accounts](https://docs.cpanel.net/tags/accounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#overview)

* * *

[Defining account types and domain types](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#defining-account-types-and-domain-types)

* * *

[Reseller account and multiple domain account comparison](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#reseller-account-and-multiple-domain-account-comparison)

* * *

[Considerations](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#considerations)

* * *

[Security](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#security)

* * *

[Resource limitations](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#resource-limitations)

* * *

[Search engine optimization](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#search-engine-optimization)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#overview)

* * *

[Defining account types and domain types](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#defining-account-types-and-domain-types)

* * *

[Reseller account and multiple domain account comparison](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#reseller-account-and-multiple-domain-account-comparison)

* * *

[Considerations](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#considerations)

* * *

[Security](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#security)

* * *

[Resource limitations](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#resource-limitations)

* * *

[Search engine optimization](https://docs.cpanel.net/knowledge-base/accounts/reseller-accounts-versus-accounts-with-multiple-domains/#search-engine-optimization)

* * *

## Reseller Accounts Versus Accounts with Multiple Domains

Last modified: _2024 March 26_

* * *

## Overview

This document explains the differences between [reseller accounts](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#reseller) and [cPanel accounts](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#account) with multiple domains. It also describes considerations that can help decide when a reseller account or a cPanel account with multiple domains might be more appropriate.

## Defining account types and domain types

A reseller is a cPanel account owner that also sells cPanel accounts to other users. One major difference between reseller accounts and cPanel accounts is that reseller accounts have access to [WHM](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/). cPanel accounts do not have this access. For more information about reseller accounts, read our [Guide to Reseller Accounts](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/) documentation.

A single cPanel account can manage multiple [domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#domain-name) and [subdomains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#subdomain).

For more information about working with multiple domains, read cPanel’s [_Domains_](https://docs.cpanel.net/cpanel/domains/domains/) interface ( _cPanel » Home » Domains » Domains_) documentation.

## Reseller account and multiple domain account comparison

The table below summarizes some of the differences between reseller accounts and accounts with multiple domains.

Each user that buys cPanel accounts from a reseller will have their own login information and resources. This might be suitable if you have website hosting clients or a number of websites in different fields.

An account with multiple domains links each new domain to one primary cPanel account. This might be suitable if you have different initiatives related to one project or different products sold by one company.

|  | Reseller account | Multiple domain account |
| --- | --- | --- |
| Basic role | Create and sell multiple cPanel accounts. | Add domains to one cPanel account. |
| Resources | Allocated to each cPanel account. | Shared between all domains on one cPanel account. |
| UI | One main dashboard for multiple cPanel accounts. | One cPanel interface. |
| Login | Each cPanel account has its own login information. | One cPanel account login. |

## Considerations

### Security

One of the most important considerations for web hosting is security. You must assess your specific security needs when deciding between a reseller account and an account with multiple domains. Risks from attackers may vary if you have websites divided between multiple cPanel accounts versus one cPanel account. Read our documentation on [Security Best Practices](https://docs.cpanel.net/knowledge-base/security/security-best-practices/) for more information on ways to protect your users and websites.

### Resource limitations

Planning for future growth is another consideration. Site performance can be affected if resources such as [bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/) or [disk space](https://docs.cpanel.net/cpanel/files/disk-usage/) are inadequate. You should consider your preferences for handling potential growth if you need more resources for a domain in the future.

With a cPanel account with multiple domains, all of the domains, subdomains, and directories share the resources allocated to a single cPanel account. With a reseller account, these resources are allocated for each cPanel account, so that if one domain needs more resources, other domains will not be affected.

### Search engine optimization

[Search engine optimization](https://en.wikipedia.org/wiki/Search_engine_optimization) (SEO) might be another consideration for your web hosting needs. Depending on your situation, individual separate domains might be preferable to subdomains connected to one primary domain. Your SEO might have different requirements for website.example.com or example.com/website. Your branding might be better suited for several distinct domains like example1.com, example2.com, and so on.

#### Additional Documentation

* * *

- [Account Transfer](https://docs.cpanel.net/whm/transfers/account-transfer/)
- [How to Create a Demo cPanel Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-demo-cpanel-account/)
- [How to Create a WHM Reseller Without an Associated Domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [What Happens When You Suspend an Account](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×