---
url: "https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/"
title: "Manage2 API Function - List Package Information | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Manage2](https://docs.cpanel.net/manage2/)
3. [API](https://docs.cpanel.net/manage2/api/)
4. Manage2 API Function - List Package Information


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [m2accountpackages](https://docs.cpanel.net/tags/m2accountpackages/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#returns)

* * *

## Manage2 API Function - List Package Information

Last modified: _2024 December 19_

* * *

## Description

This function returns the Manage2 account’s packages.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#browser-based-calls1764175698958667213)

Note:

To see the expanded returns, add the `expand` parameter to the end of each browser-based call.


#### XML

```bash
http://manage2.cpanel.net/XMLpackageInfo.cgi
```

#### JSON

```bash
http://manage2.cpanel.net/XMLpackageInfo.cgi?output=json
```

#### YAML

```bash
http://manage2.cpanel.net/XMLpackageInfo.cgi?output=yaml
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#cpanellicensing-php-class1764175698959204909)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com","123456luggage");<br>$lisc = $cpl->fetchPackages();<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#cpanellicensing-perl-module1764175698960177188)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```perl<br>use cPanelLicensing;<br>    my $cpl = new cPanelLicensing(user => 'username\@example.com', pass => '123456luggage');<br>$cpl->fetchPackages()<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#output-xml1764175698961128678)

Without the `expand` parameter:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```xml<br><XMLpackageInfo reason="OK" status="1" version="0.3"><br>  <packages P2="2-HOUR-DEPLOYMENT" P3="2-DAY-TEST" /><br></XMLpackageInfo><br>``` |

With the `expand` parameter:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```xml<br><XMLpackageInfo reason="OK" status="1" version="0.3"><br>  <package name="2-HOUR-DEPLOYMENT" autoscale_target="0" base_price="0.00" bulk_charge="0.00" discountable="0" external="0" host_type="dedicated" is_autoscale="0" max_accounts="" packageid="P2" product_name="cPanel/WHM" producttype="1" term="" term_seconds="7200" trial="1" user_billing_rate="0.00" user_billing_threshold="" valid="1" /><br>  <package name="2-DAY-TEST" autoscale_target="0" base_price="0.00" bulk_charge="0.00" discountable="0" external="0" host_type="dedicated" is_autoscale="0" max_accounts="" packageid="P3" product_name="cPanel/WHM" producttype="1" term="" term_seconds="172800" trial="1" user_billing_rate="0.00" user_billing_threshold="" valid="1" /><br></XMLpackageInfo><br>``` |

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#output-json1764175698962930306)

Without the `expand` parameter:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```json<br>{<br>  "packages": [{<br>    "P2": "2-HOUR-DEPLOYMENT",<br>    "P3": "2-DAY-TEST"<br>  }],<br>  "reason": "OK",<br>  "status": 1,<br>  "version": 0.3<br>}<br>``` |

With the `expand` parameter:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>``` | ```json<br>{<br>  "package": [{<br>      "autoscale_target": 0,<br>      "base_price": "0.00",<br>      "bulk_charge": "0.00",<br>      "discountable": 0,<br>      "external": 0,<br>      "host_type": "dedicated",<br>      "is_autoscale": 0,<br>      "max_accounts": null,<br>      "name": "2-HOUR-DEPLOYMENT",<br>      "packageid": "P2",<br>      "product_name": "cPanel/WHM",<br>      "producttype": 1,<br>      "term": null,<br>      "term_seconds": 7200,<br>      "trial": 1,<br>      "user_billing_rate": "0.00",<br>      "user_billing_threshold": null,<br>      "valid": 1<br>    },<br>    {<br>      "autoscale_target": 0,<br>      "base_price": "0.00",<br>      "bulk_charge": "0.00",<br>      "discountable": 0,<br>      "external": 0,<br>      "host_type": "dedicated",<br>      "is_autoscale": 0,<br>      "max_accounts": null,<br>      "name": "2-DAY-TEST",<br>      "packageid": "P3",<br>      "product_name": "cPanel/WHM",<br>      "producttype": 1,<br>      "term": null,<br>      "term_seconds": 172800,<br>      "trial": 1,<br>      "user_billing_rate": "0.00",<br>      "user_billing_threshold": null,<br>      "valid": 1<br>    }<br>  ],<br>  "reason": "OK",<br>  "status": 1,<br>  "version": 0.3<br>  }<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information/#output-yaml1764175698964779561)

Without the `expand` parameter:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```yaml<br>---<br>packages:<br>- P2: 2-HOUR-DEPLOYMENT<br>  P3: 2-DAY-TEST<br>reason: OK<br>status: 1<br>version: 0.3<br>``` |

With the `expand` parameter:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>``` | ```yaml<br>---<br>package:<br>- autoscale_target: 0<br>  base_price: '0.00'<br>  bulk_charge: '0.00'<br>  discountable: 0<br>  external: 0<br>  host_type: dedicated<br>  is_autoscale: 0<br>  max_accounts: ~<br>  name: 2-HOUR-DEPLOYMENT<br>  packageid: P2<br>  product_name: cPanel/WHM<br>  producttype: 1<br>  term: ~<br>  term_seconds: 7200<br>  trial: 1<br>  user_billing_rate: '0.00'<br>  user_billing_threshold: ~<br>  valid: 1<br>- autoscale_target: 0<br>  base_price: '0.00'<br>  bulk_charge: '0.00'<br>  discountable: 0<br>  external: 0<br>  host_type: dedicated<br>  is_autoscale: 0<br>  max_accounts: ~<br>  name: 2-DAY-TEST<br>  packageid: P3<br>  product_name: cPanel/WHM<br>  producttype: 1<br>  term: ~<br>  term_seconds: 172800<br>  trial: 1<br>  user_billing_rate: '0.00'<br>  user_billing_threshold: ~<br>  valid: 1<br>reason: OK<br>status: 1<br>version: 0.3<br>``` |

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `expand` | _string_ | Display the following additional package information returns: <br>- `base_price`<br>- `bulk_charge`<br>- `discountable`<br>- `is_autoscale`<br>- `autoscale_target`<br>- `external`<br>- `host_type`<br>- `hsites`<br>  <br>  <br>  Note:<br>  <br>  <br>  <br>  <br>  The function only returns this value for Sitejet Studio licenses.<br>   <br>  <br>- `max_accounts`<br>- `name`<br>- `packageid`<br>- `producttype`<br>- `product_name`<br>- `products_included`<br>  <br>  <br>  Note:<br>  <br>  <br>  <br>  <br>  The function only returns this value for Sitejet Commerce licenses.<br>   <br>  <br>- `projects`<br>  <br>  <br>  Note:<br>  <br>  <br>  <br>  <br>  The function only returns this value for koality licenses.<br>   <br>  <br>- `servers`<br>  <br>  <br>  Note:<br>  <br>  <br>  <br>  <br>  The function only returns this value for 360 Monitoring licenses.<br>   <br>  <br>- `sites`<br>  <br>  <br>  Note:<br>  <br>  <br>  <br>  <br>  The function only returns this value for 360 Monitoring licenses.<br>   <br>  <br>- `ssites`<br>  <br>  <br>  Note:<br>  <br>  <br>  <br>  <br>  The function only returns this value for Sitejet Studio licenses.<br>   <br>  <br>- `term`<br>- `term_seconds`<br>- `trial`<br>- `user_billing_rate`<br>- `user_billing_threshold`<br>- `valid`<br> This parameter does **not** accept values. | `expand` |

## Returns

This function’s output changes depending on the use of `expand` return:

#### Without the expand parameter

This function returns the following values when you do **not** call the `expand` parameter:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `packages` | _object_ | A list of package IDs and their assigned package. | `"P2": "2-HOUR-DEPLOYMENT"` |
| `reason` | _string_ | Information about the operation. | `OK` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |
| `version` | _float_ | Internal information that the Manage2 API uses to identify the version. | `0.3` |

#### With the expand parameter

This function returns the following values when you call the `expand` parameter:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `package` | _array of objects_ | An array of objects containing each package and its information. |  |
| `autoscale_target` | _Boolean_ | Whether the package is an option for licenses with prices that scale with account volume (Auto-Scale): <br>- `1` — Package is an option for Auto-Scale.<br>- `0` — Package is not an option for Auto-Scale.<br> The function returns this value in the `package` object. | `1` |
| `base_price` | _numeric_ | The base rate of billing, in US dollars. <br> The function returns this value in the `package` object. | `17.50` |
| `bulk_charge` | _numeric_ | A non-discountable charge for blocks of additional accounts, in US dollars. <br> The function returns this value in the `package` object. | `2.00` |
| `discountable` | _Boolean_ | Whether the package qualifies for a discount: <br>- `1` — Qualifies.<br>- `0` — Does not qualify.<br> The function returns this value in the `package` object. | `1` |
| `external` | _Boolean_ | Whether the partner’s hardware hosts the package (external). <br>- `1` — External.<br>- `0` — Not external.<br> The function returns this value in the `package` object. | `0` |
| `host_type` | _string_ | The host type (virtual or dedicated) the license requires: <br>- `virtual`<br>- `dedicated`<br> The function returns this value in the `package` object. | `virtual` |
| `hosted_sites` | _integer_ | The total number of hosted sites on a Sitejet Studio license.<br>Note:<br>The function only returns this value for Sitejet Studio licenses.<br> <br>The function returns this value in the `package` object. | `1` |
| `is_autoscale` | _Boolean_ | Whether the package’s price scales with the license’s account volume: <br>- `1` — Auto-Scales.<br>- `0` — Does not Auto-Scale.<br> The function returns this value in the `package` object. | `1` |
| `koaproj` | _integer_ | The total number of projects for a koality license.<br>Note:<br>The function only returns this value for koality licenses.<br> <br>The function returns this value in the `package` object. | `30` |
| `max_accounts` | _integer_ | The maximum number of accounts allowed on the license. <br>- `0` or a positive integer.<br>- `null` — The license has unlimited accounts.<br> The function returns this value in the `package` object. | `30` |
| `name` | _string_ | The name of the cPanel package. <br> The function returns this value in the `package` object. | `cPanel Autoscale Cloud (Internal)` |
| `packageid` | _integer_ | The ID number of the package. <br> The function returns this value in the `package` object. | `31369` |
| `producttype` | _integer_ | The product type ID: <br>- `1` — cPanel/WHM<br>- `2` — Enkompass<br>- `4` — RESERVED<br>- `8` — SiteZen<br>- `16` — CloudLinux<br>- `32` — KernelCare<br>- `64` — DNSOnly<br>- `128` — LiteSpeed<br>- `256` — Imunify360<br>- `512` — WHMCS<br>- `1024` — JetBackup<br>- `524288` — 360 Monitoring<br>- `2097152` — koality<br>- `268435456` — Sitejet Commerce<br>- `16777216` — Sitejet Studio<br>- `33554432` — XOVI NOW<br>- `67108864` — WP Guardian (cPanel Addon)<br>- `1073741824` — SocialBee <br> The function returns this value in the `package` object. | `1` |
| `product_name` | _string_ | The cPanel product’s name: <br>- `cPanel/WHM`<br>- `Enkompass`<br>- `RESERVED`<br>- `SiteZen`<br>- `CloudLinux`<br>- `KernelCare`<br>- `DNSOnly`<br>- `LiteSpeed`<br>- `Imunify360`<br>- `WHMCS`<br>- `JetBackup`<br>- `360 Monitoring`<br>- `koality`<br>- `Sitejet Commerce`<br>- `Sitejet Studio`<br>- `SocialBee`<br>- `XOVI NOW`<br>- `WP Guardian (cPanel Addon)`<br> The function returns this value in the `package` object. | `cPanel/WHM` |
| `products_included` | _string_ | The total number of products you can display in the web stores you create with a Sitejet Commerce license. <br>Note:<br>The function only returns this value for Sitejet Commerce licenses.<br> <br>The function returns this value in the `package` object. | `100` |
| `profiles` | _integer_ | The number of **additional** profiles you have added to your SocialBee license. <br>Note:<br>- The function only returns this value for the SocialBee license.<br>- To see the number of profiles your SocialBee license provisions by default, use your [SocialBee confirmation email](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-socialbee-license/).<br> The function returns this value in the `package` object. | `5` |
| `servers` | _integer_ | The number of server monitors in the 360 Monitoring license.<br>Note:<br>The function only returns this value for 360 Monitoring and WP Guardian licenses.<br> <br>The function returns this value in the `package` object. | `1` |
| `sites` | _integer_ | The number of site monitors in the 360 Monitoring license.<br>Note:<br>The function only returns this value for 360 Monitoring licenses.<br> <br>The function returns this value in the `package` object. | `20` |
| `self_hosted_sites` | _integer_ | The total number of self-hosted sites on a Sitejet Studio license.<br>Note:<br>The function only returns this value for Sitejet Studio licenses.<br> <br>The function returns this value in the `package` object. | `1` |
| `term` | _integer_ | The license billing frequency, in months: <br>- A positive integer.<br>- `null` — The package uses the `term_seconds` return.<br>Note:<br>The `term` and `term_seconds` returns are mutually exclusive.<br> <br> The function returns this value in the `package` object. | `12` |
| `term_seconds` | _integer_ | The number of seconds before the license expires: <br>- A positive integer.<br>- `null` — The package uses the `term` return.<br>Note:<br>The `term` and `term_seconds` returns are mutually exclusive.<br> <br> The function returns this value in the `package` object. | `120000` |
| `trial` | _Boolean_ | Whether the package is a trial license: <br>- `1` — The package is a trial license.<br>- `0` — The package is not a trial license.<br> The function returns this value in the `package` object. | `0` |
| `user_billing_rate` | _integer_ | The billing rate for each account over the `user_billing_threshold` value. <br> The function returns this value in the `package` object. | `0` |
| `user_billing_threshold` | _integer_ | The number of accounts included with the license. Additional accounts that exceed this value will be billed at the `user_billing_rate` value. <br>- `null` or `0` — No billing threshold.<br> The function returns this value in the `package` object. | `30` |
| `valid` | _Boolean_ | Whether the package is valid: <br>- `1` — Valid.<br>- `0` — Not valid.<br> The function returns this value in the `package` object. | `1` |
| `users` | _integer_ | The number of **additional** users you have added to your SocialBee license. <br>Note:<br>- The function only returns this value for the SocialBee license.<br>- To see the number of users your SocialBee license provisions by default, use your [SocialBee confirmation email](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-socialbee-license/).<br> The function returns this value in the `package` object. | `1` |
| `workspaces` | _integer_ | The number of **additional** [workspaces](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#workspace) you have added to your SocialBee license. <br>Note:<br>- The function only returns this value for the SocialBee license.<br>- To see the number of workspaces your SocialBee license provisions by default, use your [SocialBee confirmation email](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-socialbee-license/).<br> The function returns this value in the `package` object. | `1` |
| `reason` | _string_ | Information about the operation. | `OK` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |
| `version` | _float_ | Internal information that the Manage2 API uses to identify the version. | `0.3` |

#### Additional Documentation

* * *

- [Manage2 API Function - Add a Pickup Phrase](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/)
- [Manage2 API Function - Add Group](https://docs.cpanel.net/manage2/api/manage2-api-add-group/)
- [Manage2 API Function - Add Licenses](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/)
- [Manage2 API Function - Cancel a License Transfer](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/)
- [Manage2 API Function - Change a License Package](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)