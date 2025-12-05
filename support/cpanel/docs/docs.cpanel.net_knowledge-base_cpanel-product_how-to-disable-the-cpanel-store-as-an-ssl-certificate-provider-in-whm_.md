---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-disable-the-cpanel-store-as-an-ssl-certificate-provider-in-whm/"
title: "How to Disable the cPanel Store as an SSL Certificate Provider in WHM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-disable-the-cpanel-store-as-an-ssl-certificate-provider-in-whm/#main-content)

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
4. How to Disable the cPanel Store as an SSL Certificate Provider in WHM


[ssl](https://docs.cpanel.net/tags/ssl/) [market](https://docs.cpanel.net/tags/market/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-disable-the-cpanel-store-as-an-ssl-certificate-provider-in-whm/#overview)

* * *

[How to disable the cPanel Store as an SSL certificate provider in WHM](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-disable-the-cpanel-store-as-an-ssl-certificate-provider-in-whm/#how-to-disable-the-cpanel-store-as-an-ssl-certificate-provider-in-whm)

* * *

[How to disable free Let’s Encrypt hostname SSL certificate downloads](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-disable-the-cpanel-store-as-an-ssl-certificate-provider-in-whm/#how-to-disable-free-lets-encrypt-hostname-ssl-certificate-downloads)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-disable-the-cpanel-store-as-an-ssl-certificate-provider-in-whm/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-disable-the-cpanel-store-as-an-ssl-certificate-provider-in-whm/#overview)

* * *

[How to disable the cPanel Store as an SSL certificate provider in WHM](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-disable-the-cpanel-store-as-an-ssl-certificate-provider-in-whm/#how-to-disable-the-cpanel-store-as-an-ssl-certificate-provider-in-whm)

* * *

[How to disable free Let’s Encrypt hostname SSL certificate downloads](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-disable-the-cpanel-store-as-an-ssl-certificate-provider-in-whm/#how-to-disable-free-lets-encrypt-hostname-ssl-certificate-downloads)

* * *

## How to Disable the cPanel Store as an SSL Certificate Provider in WHM

Last modified: _2025 August 1_

* * *

## Overview

This article provides instructions on how to use Manage2’s [_Update Company Information_](https://docs.cpanel.net/manage2/company/update-company-information/) interface ( _Dashboard » Company » Update Company Information_) to disable the cPanel Store as an SSL certificate provider. This action helps you manage your users’ access to SSL certificates purchases through the cPanel Store. WHM’s [_Market Provider Manager_](https://docs.cpanel.net/whm/market/market-provider-manager/) interface ( _WHM » Home » Market » Market Provider Manager_) lists the cPanel Store as a provider.

This article also provides instructions on how to disable [free Let’s Encrypt™ hostname certificate replacements](https://docs.cpanel.net/knowledge-base/dns/automatic-hostname-ssl-certificate-replacement/) for cPanel & WHM users through the cPanel Store.

## How to disable the cPanel Store as an SSL certificate provider in WHM

Note:

You **must** perform this action through the Manage2 interface. For more information, read the [Manage2 FAQ](https://docs.cpanel.net/manage2/admin/manage2-faq/) documentation.


To disable the cPanel Store as a provider in WHM’s [_Market Provider Manager_](https://docs.cpanel.net/whm/market/market-provider-manager/) interface ( _WHM » Home » Market » Market Provider Manager_), perform the following steps:

1. Log in to your [Manage2 account](https://manage2.cpanel.net/).

2. From the Manage2 dashboard, navigate to the [_Update Company Information_](https://docs.cpanel.net/manage2/company/update-company-information/) interface ( _Dashboard » Company » Update Company Information_).

3. In the _cPanel Store Integration_ section, select the _Block servers with your company ID from ordering paid SSL certificates from the cPanel Store._ checkbox.

4. Scroll to the bottom of the interface and click _Save_.


_cPanel Store_ will no longer appear as a provider in WHM’s [_Market Provider Manager_](https://docs.cpanel.net/whm/market/market-provider-manager/) interface ( _WHM » Home » Market » Market Provider Manager_).

## How to disable free Let’s Encrypt hostname SSL certificate downloads

Note:

You **must** perform this action through the Manage2 interface. For more information, read the [Manage2 FAQ](https://docs.cpanel.net/manage2/admin/manage2-faq/) documentation.


To disable free Let’s Encrypt hostname certificate downloads for servers with your company ID, perform the following steps:

1. Log in to your [Manage2 account](https://manage2.cpanel.net/).

2. From the Manage2 dashboard, navigate to the [_Update Company Information_](https://docs.cpanel.net/manage2/company/update-company-information/) interface ( _Dashboard » Company » Update Company Information_).

3. In the _cPanel Store Integration_ section, select the _Block servers with your company ID from getting free hostname certificates from the cPanel Store._ checkbox.

4. Click _Save_ at the end of the interface.


Servers with your company ID will no longer automatically download a complimentary hostname from the cPanel Store.

#### Additional Documentation

* * *

- [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/)
- [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)
- [How to Configure MySQL SSL Connections](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/)
- [Install an SSL Certificate on a Domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/)
- [Market Provider Manager](https://docs.cpanel.net/whm/market/market-provider-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×