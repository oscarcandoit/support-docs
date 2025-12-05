---
url: "https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/"
title: "Manage2 API Function - Expire Licenses | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#main-content)

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
4. Manage2 API Function - Expire Licenses


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#returns)

* * *

## Manage2 API Function - Expire Licenses

Last modified: _2023 June 20_

* * *

## Description

This function expires a license.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#browser-based-calls1764175698913342254)

#### XML

```bash
https://manage2.cpanel.net/XMLlicenseExpire.cgi?liscid=7216526&reason='Normal Cancellation - No Security Risk'&expcode=normal
```

#### JSON

```bash
https://manage2.cpanel.net/XMLlicenseExpire.cgi?output=json&liscid=7216526&reason='Normal Cancellation - No Security Risk'&expcode=normal
```

#### YAML

```bash
https://manage2.cpanel.net/XMLlicenseExpire.cgi?output=yaml&liscid=7216526&reason='Normal Cancellation - No Security Risk'&expcode=normal
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#cpanellicensing-php-class1764175698914064887)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com", "123456luggage");<br>$cpl->expireLicense(array(<br>    "liscid" => "7216526",<br>    "reason" => "Normal Cancellation - No Security Risk",<br>    "expcode" => "normal")<br>    );<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#cpanellicensing-perl-module1764175698915552463)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```perl<br>my $licenseManager = new cPanelLicensing(<br>    user => 'username\@example.com',<br>    pass => '123456luggage'<br>);<br>my $liscid = $licenseManager->expireLicense(<br>    'liscid'  => '7216526',<br>    'reason'  => 'Normal Cancellation - No Security Risk',<br>    'expcode' => 'normal'<br>);<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#output-xml1764175698915858662)

```xml
<XMLlicenseExpire licenseid="7216526" reason="Expired 45-DAY-TEST license 7216526 in the
'cPanel/WHM Auto Trial' group on 192.0.2.0 for reason: Normal
Cancellation - No Security Risk." result="OK" status="1"/>
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#output-json1764175698916268452)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```json<br>{<br>    "status": 1,<br>    "reason": "Expired 45-DAY-TEST license 7216526 in the 'cPanel/WHM Auto Trial' group on 192.0.2.0 for reason: Normal Cancellation - No Security Risk.",<br>    "result": "OK",<br>    "licenseid": "7216526"<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-expire-licenses/#output-yaml1764175698916703635)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```yaml<br>---<br>status: 1<br>reason: 'Expired 45-DAY-TEST license 7216526 in the 'cPanel/WHM Auto Trial' group on 192.0.2.0 for reason: Normal Cancellation - No Security Risk.'<br>result: OK<br>licenseid: '7216526'<br>``` |

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `liscid` | _integer_ | **Required**<br> The license ID to expire. The Manage2 [List License Information](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information) function returns a list of possible values. | `7216526` |
| `reason` | _string_ | **Recommended**<br> The reason to expire a license. | `Normal Cancellation - No Security Risk.` |
| `expcode` | _string_ | The license expiration reason code: <br>- `normal`<br>- `nocomplete`<br>- `noverify`<br>- `shutoff`<br>- `chargeback`<br>- `fraud`<br>- `other`<br> This parameter defaults to `normal`. This parameter is **recommended** for distributors. | `normal` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `licenseid` | _integer_ | The expired license’s ID. | `7216526` |
| `reason` | _string_ | The function’s result. | `Expired 45-DAY-TEST license 7216526 in the "cPanel/WHM Auto Trial" group on 192.0.2.0 for reason: Normal Cancellation - No Security Risk.` |
| `result` | _string_ | Whether the license expired: <br>- `OK` — The license expired.<br>- `""` — The license did not expire. | `OK` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×