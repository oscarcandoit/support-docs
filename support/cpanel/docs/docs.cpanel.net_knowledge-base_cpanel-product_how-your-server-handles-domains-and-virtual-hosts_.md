---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/"
title: "How Your Server Handles Domains and Virtual Hosts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#main-content)

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
4. How Your Server Handles Domains and Virtual Hosts


[domains](https://docs.cpanel.net/tags/domains/) [aliases](https://docs.cpanel.net/tags/aliases/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#overview)

* * *

[An overly-simplified representation of internet hosting…](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#an-overly-simplified-representation-of-internet-hosting)

* * *

[How it really works…](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#how-it-really-works)

* * *

[How cPanel & WHM handles web virtual hosts](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#how-cpanel--whm-handles-web-virtual-hosts)

* * *

[Aliases](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#aliases)

* * *

[Subdomains](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#subdomains)

* * *

[Addon Domains](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#addon-domains)

* * *

[SSL-encrypted web content](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#ssl-encrypted-web-content)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#overview)

* * *

[An overly-simplified representation of internet hosting…](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#an-overly-simplified-representation-of-internet-hosting)

* * *

[How it really works…](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#how-it-really-works)

* * *

[How cPanel & WHM handles web virtual hosts](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#how-cpanel--whm-handles-web-virtual-hosts)

* * *

[Aliases](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#aliases)

* * *

[Subdomains](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#subdomains)

* * *

[Addon Domains](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#addon-domains)

* * *

[SSL-encrypted web content](https://docs.cpanel.net/knowledge-base/cpanel-product/how-your-server-handles-domains-and-virtual-hosts/#ssl-encrypted-web-content)

* * *

## How Your Server Handles Domains and Virtual Hosts

Last modified: _2025 June 5_

* * *

## Overview

This document explains virtual hosts and how cPanel & WHM handles them.

![cartoon user says hello](https://docs.cpanel.net/img/howyourserver1.png)

## An overly-simplified representation of internet hosting…

The following overly-simplified outline represents how internet hosting works:

1. The user requests content from a remote host at a hostname (for example, the `example.com` domain).






Note:




In most cases, the term domain name can act as a synonym for **hostname**.


2. The user’s computer resolves the hostname to an IP address (for example, `example.com` to `1.2.3.4`).

3. The user’s computer connects to the host with that IP address (`1.2.3.4`) and retrieves the content.


![cartoon user connects to host's IP address](https://docs.cpanel.net/img/howyourserver2.png)

## How it really works…

Two significant factors complicate the overly-simplified outline:

- Multiple hostnames may resolve to the same IP address (for example, `example.com` and `www.example.com` are different hostnames that likely resolve to the same IP address).

- A shared IP address can serve each hostname’s content as long as the user’s computer tells the remote host which hostname’s content to transmit.


To allow multiple hostnames to share content via a shared IP address, we change step 3 above. The user’s computer first tells the remote host the hostname’s content that it wants. This way, a server that hosts content for the example.com hostname can serve completely different content for the anotherexample.com hostname. This happens even though those two hostnames use the same IP address. To the user, the content seems to originate from two different hosts. Because of this, we can say that the remote host has two different **virtual hosts** (or **vhosts**) for these names.

A user who requests `example.com` content and a user who requests` anotherexample.com` content will receive different content. However, a host can also serve the same content for two different hostnames. For example, most users expect the same content from the `www.example.com` hostname as when they visit the `example.com` hostname. Therefore, these two hostnames exist on the same **virtual host** or **vhost**.

![cartoon user's computer showing virtual hosts connecting to the same IP](https://docs.cpanel.net/img/howyourserver3.png)

Note:

The rest of this document discusses virtual hosts as they pertain to web hosting. However, virtual hosts can also apply to other services, such as FTP or email.


## How cPanel & WHM handles web virtual hosts

cPanel & WHM streamlines how the system handles hostnames and virtual hosts in order to satisfy most common-use cases. Even though this reduces account flexibility, it guides users to generally-desirable configurations.

Every cPanel account owns at least one web virtual host that contains two hostnames:

- The account’s primary domain name.

- The equivalent www. subdomain of the account’s primary domain name.


So, if you create the cPanel account example with a primary domain of `example.com`, then HTTP requests for the hostnames `example.com` and `www.example.com` will retrieve the same content.

cPanel users can manage three different types of additional hostnames in the _Domains_ group of features:

### _Aliases_

(previously _Parked Domains_)

A separate hostname that the virtual host associates with the account’s primary domain. For example, you can use an alias so that requests to the `anotherexample.com` domain to receive the same content as the `example.com` domain.

Aliases also configure the equivalent `www.` domain to associate with the same content (for example, `www.anotherexample.com` domain).

![cartoon user's showing how aliases work](https://docs.cpanel.net/img/howyourserver4.png)

Note:

[AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/) providers count aliased domains towards their domain and rate limits for virtual hosts.


### _Subdomains_

A hostname that uses the same domain name root as the account’s primary domain or a parked domain, but exists on a separate virtual host (for example, `subdomain.example.com` and `other.example.com` are subdomains of the `example.com` domain).

As with aliased domains, the system automatically creates an equivalent `www.` subdomain of the new subdomain (`www.subdomain.example.com`) in the virtual host for the subdomain.

![cartoon user's computer showing how subdomains work](https://docs.cpanel.net/img/howyourserver5.png)

### _Addon Domains_

A separate hostname on a separate virtual host. To accomplish this, cPanel creates a subdomain with the same root as the account’s primary domain (for example, for the `anotherexample.com` addon domain, cPanel would create the `anotherexample.example.com` subdomain).

Then, cPanel creates the addon domain as an alias of the subdomain (for example, cPanel creates `anotherexample.com` as an alias of the `anotherexample.example.com` subdomain).

As with aliased domains and subdomains, the system automatically creates an equivalent `www.` subdomain for each new addon domain (for example, the [www.anotherexample.com](https://www.anotherexample.com/) and `www.anotherexample.example.com` domains, which means that every addon domain creates a virtual host with four hostnames).

![cartoon user's computer showing how addons work](https://docs.cpanel.net/img/howyourserver6.png)

## SSL-encrypted web content

In order to serve SSL-encrypted web content, cPanel creates a new virtual host that mirrors the non-SSL virtual host. This new virtual host adds the necessary configuration parameters for SSL. The same hostnames associate with the new virtual host and the old one, and both virtual hosts use the same document root.

Important:

Each virtual host can **only** support one SSL certificate.


![cartoon user's computer showing SSL encryption](https://docs.cpanel.net/img/howyourserver7.png)

#### Additional Documentation

* * *

- [Convert Addon Domain to Account](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/)
- [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)
- [List Parked Domains](https://docs.cpanel.net/whm/account-information/list-parked-domains/)
- [List Subdomains](https://docs.cpanel.net/whm/account-information/list-subdomains/)
- [Park a Domain](https://docs.cpanel.net/whm/dns-functions/park-a-domain/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×