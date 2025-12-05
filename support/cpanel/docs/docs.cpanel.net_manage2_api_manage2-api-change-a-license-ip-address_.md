---
url: "https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/"
title: "Manage2 API Function - Change a License IP Address | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#main-content)

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
4. Manage2 API Function - Change a License IP Address


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#returns)

* * *

## Manage2 API Function - Change a License IP Address

Last modified: _2021 March 12_

* * *

## Description

This function transfers an existing license.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#browser-based-calls1764175698894178955)

#### XML

```bash
https://manage2.cpanel.net/XMLtransfer.cgi?oldip=192.0.2.0;newip=198.51.100.0;packageid=008;force=1;dryrun=0
```

#### JSON

```bash
https://manage2.cpanel.net/XMLtransfer.cgi?output=json&oldip=192.0.2.0;newip=198.51.100.0;packageid=008;force=1;dryrun=0
```

#### YAML

```bash
https://manage2.cpanel.net/XMLtransfer.cgi?output=yaml&oldip=192.0.2.0;newip=198.51.100.0;packageid=008;force=1;dryrun=0
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#cpanellicensing-php-class1764175698895098174)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>``` | ```php<br><?php<br>    include("cpl.inc.php");<br>    $cpl = new cPanelLicensing("username@example.com", "123456luggage");<br>    $response = (array)$cpl->changeip(array(<br>        "oldip" => "192.0.2.0",<br>        "newip" => "198.51.100.0",<br>        "packageid" => "008",<br>        "force" => "1",<br>        "dryrun" => "0"<br>        )<br>    );<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#cpanellicensing-perl-module1764175698896824509)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```perl<br>use cPanelLicensing;<br>my $licenseManager = new cPanelLicensing(user => 'username\@example.com', pass => '123456luggage');<br>$licenseManager->changeip(<br>    'oldip'         => '192.0.2.0',<br>    'newip'         => '198.51.100.0',<br>    'packageid'     => '008',<br>    'force'         => '1',<br>    'dryrun         => '0',<br>);<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#output-xml1764175698897211072)

```xml
<XMLtransfer oldip="192.0.2.0" newip="192.168.0.20" status="1" reason="Transferred EXAMPLECOMPANY license 6794006 in the 'Test Group*' group on 192.0.2.0 to 198.51.100.0."/>
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#output-json1764175698897626424)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```json<br>{<br>    "status": 0,<br>    "reason": "Transferred EXAMPLECOMPANY license 6794006 in the 'Test Group*' group on 192.0.2.0 to 198.51.100.0.",<br>    "oldip": "192.0.2.0",<br>    "newip": "198.51.100.0"<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-ip-address/#output-yaml1764175698898086880)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```yaml<br>---<br>status: 0<br>reason: Transferred EXAMPLECOMPANY license 6794006 in the 'Test Group*' group on 192.0.2.0 to 198.51.100.0.<br>oldip: 192.0.2.0<br>newip: 198.51.100.0<br>``` |

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `oldip` | _string_ | **Required**<br> The license’s current IP address. | `192.0.2.0` |
| `newip` | _string_ | **Required**<br> The license’s new IP address. | `198.51.100.0` |
| `packageid` | _string_ | **Required**<br> The license’s package ID. The Manage2 [List Package Information](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information) function returns a list of possible values. <br>Note:<br>This parameter is optional if the current IP address only possesses one package ID.<br> <br> If you do not use this parameter, the function transfers all of the licenses on the current IP address. | `008` |
| `force` | _Boolean_ | Whether to force a license transfer if the transfer adds a charge to a deactivated IP address: <br>- `1` — Force a transfer.<br>- `0` — Do not force a transfer.<br> This parameter defaults to `0`. | `1` |
| `dryrun` | _Boolean_ | Whether to show license information but not transfer the license. <br>- `1` — Show the license information but do not transfer the license.<br>- `0` — Transfer the license.<br> This parameter defaults to `0`. | `0` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `oldip` | _string_ | The license’s old IP address. | `192.0.2.0` |
| `newip` | _string_ | The license’s new IP address. | `198.51.100.0` |
| `reason` | _string_ | Whether the function transferred the existing license. | `Transferred EXAMPLECOMPANY license 6794006 in the 'Test Group*' group on 192.0.2.0 to 198.51.100.0.` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×