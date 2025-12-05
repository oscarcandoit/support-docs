---
url: "https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/"
title: "Manage2 API Function - Cancel a License Transfer | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#main-content)

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
4. Manage2 API Function - Cancel a License Transfer


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#returns)

* * *

## Manage2 API Function - Cancel a License Transfer

Last modified: _2021 March 12_

* * *

## Description

This function cancels an existing request to transfer a license.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#browser-based-calls1764175698873200223)

#### XML

```bash
https://manage2.cpanel.net/XMLtransferRequest.cgi?cancel=1&groupid=0001&packageid=0001&ip=192.0.2.0
```

#### JSON

```bash
https://manage2.cpanel.net/XMLtransferRequest.cgi?output=json&cancel=1&groupid=0001&packageid=0001&ip=192.0.2.0
```

#### YAML

```bash
https://manage2.cpanel.net/XMLtransferRequest.cgi?output=yaml&cancel=1&groupid=0001&packageid=0001&ip=192.0.2.0
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#cpanellicensing-php-class1764175698874563696)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com","123456luggage");<br>$lisc = $cpl->requestTransfer(array(<br>        "ip" = 192.0.2.0,<br>        "groupid" => 001,<br>        "packageid" => 001,<br>        "cancel" => 1<br>    )<br>);<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#cpanellicensing-perl-module1764175698893965591)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```perl<br>use cPanelLicensing;<br>    my $cpl = cPanelLicensing->new(user => "username\@example.com, pass => "123456luggage");<br>    $cpl->requestTransfer(<br>        'groupid'   => '192.0.2.0',<br>        'packageid' => '001',<br>        'ip'        => '001',<br>        'cancel'    => '1'<br>    );<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#output-xml1764175698894323326)

```xml
<XMLtransferRequest reason="Cancelled transfer request" status="1" version="0.2"/>
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#output-json1764175698894731300)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```json<br>{<br>    "version": 0.2,<br>    "status": 1,<br>    "reason": "Cancelled transfer request"<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/#output-yaml1764175698895154832)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```yaml<br>---<br>version: 0.2<br>status: 1<br>reason: Cancelled transfer request<br>``` |

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `ip` | _string_ | **Required**<br> The license account’s IP address. The Manage2 [List Package Information](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information) function returns a list of possible values. | `192.0.2.01` |
| `cancel` | _Boolean_ | **Required**<br> Whether to cancel the transfer: <br>- `1` — Cancel the transer.<br>- `0` — Do **not** cancel the transfer. | `1` |
| `groupid` | _integer_ | The license’s group ID. The Manage2 [Display Groups](https://docs.cpanel.net/manage2/api/manage2-api-display-groups) function returns a list of possible values. <br> This parameter defaults to an empty string. | `001` |
| `packageid` | _integer_ | The license’s package ID. The Manage2 [List Package Information](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information) function returns a list of possible values. <br> This parameter defaults to an empty string. | `001` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `reason` | _string_ | The transfer request’s result. | `Cancelled transfer request` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |
| `version` | _numeric_ | Internal information that the Manage2 API uses to identify the version. | `0.1` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×