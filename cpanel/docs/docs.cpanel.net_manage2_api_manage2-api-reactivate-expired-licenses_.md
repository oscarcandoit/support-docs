---
url: "https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/"
title: "Manage2 API Function - Reactivate Expired Licenses | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#main-content)

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
4. Manage2 API Function - Reactivate Expired Licenses


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/) [m2accounts](https://docs.cpanel.net/tags/m2accounts/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#returns)

* * *

## Manage2 API Function - Reactivate Expired Licenses

Last modified: _2023 March 7_

* * *

## Description

This function reactivates an account’s expired cPanel license.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#browser-based-calls1764175699014524902)

#### XML

```bash
https://manage2.cpanel.net/XMLlicenseReActivate.cgi?liscid=12345
```

#### JSON

```bash
https://manage2.cpanel.net/XMLlicenseReActivate.cgi?output=json&liscid=12345
```

#### YAML

```bash
https://manage2.cpanel.net/XMLlicenseReActivate.cgi?output=yaml&liscid=12345
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#cpanellicensing-php-class1764175699015259893)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com", "123456luggage");<br>$license = $cpl->reactivateLicense(array(<br>    "liscd"  => "12345",<br>    "force"  => "0",<br>    "dryrun" => "1",<br>    )<br>);<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#cpanellicensing-perl-module1764175699016765688)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```perl<br>use cPanelLicensing;<br>my $cpl = new cPanelLicensing('user' => username\@example.com", 'pass' => "123456luggage");<br>my $licenseid = $licenseManager->reactivateLicense(<br>    'liscid' => '12345',<br>    'force'  => '0',<br>    'dryrun' => '1',<br>);<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#output-xml1764175699017088432)

```xml
<XMLlicenseReActivate licenseid="12345" monthly_price="25.00" price="150.00" reason="Reactivated COMPANY-INTERNAL-VPS license on 192.0.2.0 in the 'ExampleGroup' group." status="1"/>
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#output-json1764175699017542701)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```json<br>{<br>    "monthly_price": "25.00",<br>    "status": 1,<br>    "reason": "Reactivated COMPANY-INTERNAL-VPS license on 192.0.2.0 in the 'ExampleGroup' group.",<br>    "price": "150.00",<br>    "licenseid": "12345"<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses/#output-yaml1764175699017985610)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```yaml<br>---<br>monthly_price: '25.00'<br>status: 1<br>reason: Reactivated COMPANY-INTERNAL-VPS license on 192.0.2.0 in the 'ExampleGroup' group.<br>price: '150.00'<br>licenseid: '12345'<br>``` |

## Parameters

This function accepts the following parameters:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `liscid` | _string_ | **Required**<br> The ID of the license to reactivate. The Manage2 [List License Information](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information) function returns a list of possible values. | `127.0.0.1` |
| `force` | _Boolean_ | Whether to force reactivate the license: <br>- `1` — Force reactivate the license.<br>- `0` — Do not force reactivate the license.<br> This parameter defaults to `0`. | `0` |
| `dryrun` | _Boolean_ | Whether to show error messages and price information, but not reactivate the license: <br>- `1` — Show error messages and price information, but do not reactivate the license.<br>- `0` — Reactivate the license.<br> This parameter defaults to `1`. | `0` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `licenseid` | _integer_ | The reactivate license’s ID. | `12345` |
| `monthly_price` | _numeric_ | The monthly amount of the license, in US dollars. | `25.00` |
| `price` | _numeric_ | The price amount of the license, in US dollars. | `150.00` |
| `reason` | _string_ | Information about the license reactivation. | `Reactivated COMPANY-INTERNAL-VPS license on 192.0.2.0 in the 'ExampleGroup' group.` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×