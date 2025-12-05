---
url: "https://docs.cpanel.net/whm/market/market-provider-manager/"
title: "Market Provider Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/market/market-provider-manager/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Market](https://docs.cpanel.net/whm/market/)
4. Market Provider Manager


[market](https://docs.cpanel.net/tags/market/) [ssl](https://docs.cpanel.net/tags/ssl/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/market/market-provider-manager/#overview)

* * *

[Manage providers](https://docs.cpanel.net/whm/market/market-provider-manager/#manage-providers)

* * *

[Manage products](https://docs.cpanel.net/whm/market/market-provider-manager/#manage-products)

* * *

[Product recommendation](https://docs.cpanel.net/whm/market/market-provider-manager/#product-recommendation)

* * *

[Product availability](https://docs.cpanel.net/whm/market/market-provider-manager/#product-availability)

* * *

[Product price](https://docs.cpanel.net/whm/market/market-provider-manager/#product-price)

* * *

[Manage commissions](https://docs.cpanel.net/whm/market/market-provider-manager/#manage-commissions)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/market/market-provider-manager/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/market/market-provider-manager/#overview)

* * *

[Manage providers](https://docs.cpanel.net/whm/market/market-provider-manager/#manage-providers)

* * *

[Manage products](https://docs.cpanel.net/whm/market/market-provider-manager/#manage-products)

* * *

[Product recommendation](https://docs.cpanel.net/whm/market/market-provider-manager/#product-recommendation)

* * *

[Product availability](https://docs.cpanel.net/whm/market/market-provider-manager/#product-availability)

* * *

[Product price](https://docs.cpanel.net/whm/market/market-provider-manager/#product-price)

* * *

[Manage commissions](https://docs.cpanel.net/whm/market/market-provider-manager/#manage-commissions)

* * *

## Market Provider Manager

![](https://docs.cpanel.net/img/whm-icons/market_provider_manager.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/market/market-provider-manager/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Market Provider Manager_ interface allows you to manage products that your users may purchase through the cPanel interface. These include products from the cPanel Store and any configured third-party vendors. For more information about how to create your own provider modules, read our you can use our WHM API 1 [set\_market\_provider\_commission\_id](https://api.docs.cpanel.net/guides/guide-to-cpanel-market-provider-modules/) documentation.

cPanel’s [_SSL/TLS Wizard_](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/) interface ( _cPanel_ » _Home_ » _Security_ » _SSL/TLS Wizard_) displays the SSL products available through providers in the cPanel Market.

Important:

To collect any commissions from a cPanel Market provider that supports commissions, server administrators must perform the following actions:

- Link their WHM account to a valid [cPanelID](http://id.cpanel.net/).

- Enter their email address under the _cPanel Store Configuration_ tab.

- You can enter this information through the _Market Provider Manager_ interface, or you can use our WHM API 1 [set\_market\_provider\_commission\_id](https://api.docs.cpanel.net/openapi/whm/operation/set_market_provider_commission_id/) API to set this information directly.


Note:

Your users **must** possess a valid [cPanelID](http://id.cpanel.net/) in order to purchase SSL certificates through cPanel’s [_SSL/TLS Wizard_](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/) interface ( _cPanel » Home » Security » SSL/TLS Wizard_).

## Manage providers

Click the _Providers_ tab to list available providers and a set of actions for each provider.

- To allow your users to purchase certificates or other products through a provider, set the toggle for that provider to _Enabled_.

- To remove a provider from this list, set the toggle for that provider to _Disabled_.



Note:





- If you disable an SSL provider, any certificates that the customer purchased from that provider will stay active on their servers.

- If the customer wishes to purchase new certificates from a provider that you have disabled, they need to purchase the certificates directly from the provider and install them manually.

- As an alternative to using the _Market Provider Manager_ interface, you can use our WHM API 1 [enable\_market\_provider](https://api.docs.cpanel.net/openapi/whm/operation/enable_market_provider/) API and our WHM API 1 [disable\_market\_provider](https://api.docs.cpanel.net/openapi/whm/operation/disable_market_provider/) API to add or remove a provider from the list of providers to which your customers have access.


## Manage products

Click the _Products_ tab to list all products available through enabled cPanel Market providers.

### Product recommendation

To flag a product as Recommended, click the star (![Empty star](https://docs.cpanel.net/img/inactive.png)) icon. To remove the recommendation, click an active star (![Solid star](https://docs.cpanel.net/img/active.png)) icon.

Note:

You may only select **one** product in each category as _Recommended_. For more information on product categories, read our WHM API 1 [get\_market\_providers\_product\_metadata](https://api.docs.cpanel.net/openapi/whm/operation/get_market_providers_product_metadata/) API documentation.

### Product availability

To allow your users to purchase a product, set the product’s _Status_ toggle to _Enabled_. To disable the product, set the product’s _Status_ toggle to _Disabled_.

### Product price

To manage a product’s price, perform the following steps:

1. Click the appropriate edit link.

2. Use the controls to set the new price.

3. Click _Save_.


The interface automatically recalculates and displays the commission amount.

Note:

- You may **only** select prices in multiples of 12 cents for cPanel Store SSL certificates. This is due to the commission system.
- Some SSL certificates are not eligible for wildcard pricing. For more information on SSL wildcard certificates, read our [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/#certificate-types) documentation.
- You can also use our WHM API 1 [set\_market\_product\_attribute](https://api.docs.cpanel.net/openapi/whm/operation/set_market_product_attribute/) API to set a product’s price directly.

## Manage commissions

Remember:

Server administrators **must** enter a valid email address as a commission recipient in order to collect sales commissions from a cPanel Market provider that supports commissions.

To manage the recipient of commissions on cPanel Market purchases by users, perform the following steps:

1. Click the _cPanel Store Configuration_ tab.

2. Enter the cPanel Store username (an email address) in the text box.

3. Click _Set Commission ID_.







Note:





- This value defaults to the email address provided in WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager Setup_) if you do not provide an email address.
- You can also use our WHM API 1 [set\_market\_product\_attribute](https://api.docs.cpanel.net/openapi/whm/operation/set_market_product_attribute/) API to set a product’s commission directly.

To collect your commissions, click the link to the [cPanel Store](https://store.cpanel.net/clientarea.php?action=details) and follow the instructions.

#### Additional Documentation

* * *

- [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/)
- [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)
- [How to Configure MySQL SSL Connections](https://docs.cpanel.net/knowledge-base/security/how-to-configure-mysql-ssl-connections/)
- [Install an SSL Certificate on a Domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/)
- [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×