---
url: "https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/"
title: "Manage2 API Function - Add Licenses | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#main-content)

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
4. Manage2 API Function - Add Licenses


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#returns)

* * *

## Manage2 API Function - Add Licenses

Last modified: _2024 December 19_

* * *

## Description

This function adds a new license to a Manage2 account.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#browser-based-calls1764175698871738618)

#### XML

```bash
https://manage2.cpanel.net/XMLlicenseAdd.cgi?ip=192.0.2.0&packageid=8&groupid=13&force=1&dryrun=0&maxusers=120&external_notes=testlicense
```

#### JSON

```bash
https://manage2.cpanel.net/XMLlicenseAdd.cgi?output=json&ip=192.0.2.0&packageid=008&groupid=013&force=1&dryrun=0&maxusers=120&external_notes=testlicense
```

#### YAML

```bash
https://manage2.cpanel.net/XMLlicenseAdd.cgi?output=yaml&ip=192.0.2.0&packageid=008&groupid=013&force=1&dryrun=0&maxusers=120&external_notes=testlicense
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#cpanellicensing-php-class1764175698873544107)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com", "123456luggage");<br>$lisc = (array)$cpl->activateLicense(array(<br>    "ip"          => "192.0.2.0",<br>    "groupid"     => "013",<br>    "packageid"   => 008",<br>    "force"       => "1",<br>    "dryrun"      => "0",<br>    "maxusers"      => "120",<br>    "external_notes"    => "testlicense"<br>    )<br>);<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#cpanellicensing-perl-module1764175698876639500)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```perl<br>use cPanelLicensing;<br>my $licenseManager = new cPanelLicensing(user => "username\@example.com", pass => "123456luggage");<br>my $liscid = $licenseManager->activateLicense(<br>    'ip'          => '192.0.2.0',<br>    'groupid'     => '013',<br>    'packageid'   => '008',<br>    'force'       => '1',<br>    "dryrun"      => "0",<br>    "maxusers"      => "120",<br>    "external_notes"    => "testlicense"<br>);<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#output-xml1764175698877280839)

```xml
<XMLlicenseAdd licenseid="6793969" monthly_price="21.34" price="0.00" promoinfo="" reason="Activated EXAMPLECOMPANY license on 192.0.2.0 in the 'example' group." status="1" yearly="0"/>
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#output-json1764175698878277022)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```json<br>{<br>    "monthly_price": "21.34",<br>    "status": 1,<br>    "yearly": 0,<br>    "reason": "Activated EXAMPLECOMPANY license on 192.0.2.0 in the 'example' group.",<br>    "price": "100.00",<br>    "promoinfo": "",<br>    "licenseid": "6793969"<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/#output-yaml1764175698879165164)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```yaml<br>---<br>monthly_price: '21.34'<br>status: 1<br>yearly: 0<br>reason: Activated EXAMPLECOMPANY license on 192.0.2.0 in the 'example' group.<br>price: '100.00'<br>promoinfo: ''<br>licenseid: '6793969'<br>``` |

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `ip` | _string_ | **Required**<br> The IP address for which to add a license. <br>Note:<br>The following licenses do **not** require this parameter:<br>- 360 Monitoring<br>- koality<br>- Sitejet Commerce<br>- Sitejet Studio<br>- SocialBee<br>- WP Guardian | `192.0.2.0` |
| `packageid` | _string_ | **Required**<br> The package’s ID number. The Manage2 [List Package Information](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information) function returns a list of possible values. | `008` |
| `servers` | _integer_ | A positive integer for the total number of server monitors.<br>Note:<br>- If you do **not** use this parameter, the return’s value is the default from the 360 Monitoring package.<br>- This parameter is optional and **only** applies to a 360 Monitoring license. | `1` |
| `users` | _integer_ | This parameter is optional and **only** applies to SocialBee licenses. It represents the number of additional users to add to a SocialBee license, and must be a positive integer. | `1` |
| `profiles` | _integer_ | This parameter is optional and **only** applies to SocialBee licenses. It represents the number of additional profiles to add to a SocialBee license, and must be a positive multiple of 5. | `5` |
| `workspaces` | _integer_ | This parameter is optional and **only** applies to SocialBee licenses. It represents the number of additional [workspaces](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#workspace) to add to a SocialBee license, and must be a positive integer. | `1` |
| `sites` | _integer_ | This parameter is optional and **only** applies to 360 Monitoring, WP Guardian, or WP Guardian (cPanel Addon) licenses. Its value depends on your license type. <br>- For 360 Monitoring licenses, this parameter represents the total number of site monitors. Its value must be a positive integer greater than or equal to `20`.<br>- For WP Guardian and WP Guardian (cPanel Addon) licenses, this parameter represents the number of sites to add to the selected package. Its value must be a positive integer.<br>Note:<br>If you do **not** use this parameter, the `sites` return value is the default from the 360 Monitoring or WP Guardian package. | `20` |
| `hosted_sites` | _integer_ | A positive integer for the total number of hosted sites on a Sitejet Studio license.<br>This parameter defaults to `1`.<br>Note:<br>This parameter is optional and **only** applies to Sitejet Studio licenses. | `1` |
| `self_hosted_sites` | _integer_ | A positive integer for the total number of self-hosted sites on a Sitejet Studio license.<br>This parameter defaults to `0`.<br>Note:<br>This parameter is optional and **only** applies to Sitejet Studio licenses. | `1` |
| `projects` | _integer_ | The total number of additional projects for a koality license. <br>This parameter defaults to `0`. | `30` |
| `groupid` | _string_ | The ID of the group to which to add the license.<br>- The Manage2 [Display Groups](https://docs.cpanel.net/manage2/api/manage2-api-display-groups) function returns a list of possible values.<br>- This parameter defaults to the default group. | `013` |
| `force`<br> or <br>`reactivateok` | _Boolean_ | Whether to forcibly add the license to the specified IP address: <br>- `1` — Forcibly add the license.<br>- `0` — Do not forcibly add the license.<br> This parameter defaults to `1`. | `0` |
| `dryrun` | _Boolean_ | Whether to display error messages and price information but **not** activate the license: <br>- `1` — Display fee information but do **not** activate the license.<br>- `0` — Do not display fee information but **activate** the license.<br> This parameter defaults to `0`. | `1` |
| `maxusers` | _integer_ | The maximum number of users allowed on the license. | `120` |
| `external_notes` | _string_ | A space for additional information associated with the license, up to 64 characters long. <br>Warning:<br>If the parameter’s value exceeds 64 characters, this function will return an error. | `testlicense` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `activation_code` | _string_ | The activation code for a license of the following types: <br>- 360 Monitoring<br>- koality<br>- Sitejet Commerce<br>- Sitejet Studio<br>- SocialBee<br>- WP Guardian<br>- WP Guardian (cPanel Addon) | `ABC123-1Q2W3E-BMW555-V5F4R3-HJKL98` |
| `activation_link` | _string_ | The link to use to activate a license of the following types:<br>- 360 Monitoring<br>- koality<br>- Sitejet Commerce<br>- Sitejet Studio<br>- SocialBee<br>- WP Guardian<br>- WP Guardian (cPanel Addon)<br>Note:<br>WP Guardian (cPanel Addon) licenses always return a blank string as the `activation_link` value. | `https://app.360monitoring.com/license/activate/ABC123-1Q2W3E-BMW555-V5F4R3-HJKL98` |
| `hosted_sites` | _integer_ | The total number of hosted sites on a Sitejet Studio license. | `1` |
| `licenseid` | _integer_ | The new license ID. | `6793969` |
| `monthly_price` | _numeric_ | The monthly base price of a license, in US dollars. | `21.34` |
| `price` | _numeric_ | The price for a license in US dollars. | `100.00` |
| `products_included` | _string_ | The total number of products you can display in the web stores you create with Sitejet Commerce. One of: <br>- `100`<br>- `2500`<br>- `unlimited` | `100` |
| `profiles` | _integer_ | The number of additional profiles you added to a SocialBee license. <br> If you did **not** add this parameter, this return’s value is `0`. | `5` |
| `projects` | _integer_ | A positive integer that represents the total number of projects for a koality license. | `30` |
| `promoinfo` | _string_ | Information about any applied promotional rates. One of: <br>- A string value.<br>- `""` — No promotion applied. | `""` |
| `reason` | _string_ | Information about the license activation. | `Activated EXAMPLECOMPANY license on 192.0.2.0 in the 'example' group.` |
| `servers` | _integer_ | The number of server monitors in the 360 Monitoring license. This **must** be a positive integer. | `1` |
| `sites` | _integer_ | This return value depends on your license type. <br>- For 360 Monitoring licenses, this is the number of site monitors. This **must** be a positive integer that is greater than or equal to `20`.<br>- For WP Guardian licenses, this is the number of sites. This **must** be a positive integer. | `20` |
| `self_hosted_sites` | _integer_ | The total number of self-hosted sites on a Sitejet Studio license. | `1` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |
| `users` | _integer_ | The number of additional users you added to a SocialBee license. <br>If you did **not** add this parameter, this return’s value is `0`. | `1` |
| `workspaces` | _integer_ | The number of additional [workspaces](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#workspace) you added to a SocialBee license. <br>If you did **not** add this parameter, this return’s value is `0`. | `1` |
| `wpcga_sites` | _integer_ | The number of sites for a WP Guardian (cPanel Addon) license. | `100` |
| `yearly` | _Boolean_ | Whether the license is a yearly license: <br>- `1` — A yearly license.<br>- `0` — Not a yearly license. | `0` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×