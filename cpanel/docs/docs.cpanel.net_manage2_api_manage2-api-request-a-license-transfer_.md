---
url: "https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/"
title: "Manage2 API Function - Request a License Transfer | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#main-content)

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
4. Manage2 API Function - Request a License Transfer


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#returns)

* * *

## Manage2 API Function - Request a License Transfer

Last modified: _2022 December 7_

* * *

## Description

This function requests a license transfer between companies.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#browser-based-calls1764175699030865675)

#### XML

```bash
https://manage2.cpanel.net/XMLtransferRequest.cgi?groupid=001&packageid=147&ip=192.0.2.0
```

#### JSON

```bash
https://manage2.cpanel.net/XMLtransferRequest.cgi?output=json&groupid=001&packageid=147&ip=192.0.2.0
```

#### YAML

```bash
https://manage2.cpanel.net/XMLtransferRequest.cgi?output=yaml&groupid=001&packageid=147&ip=192.0.2.0
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#cpanellicensing-php-class1764175699040314476)

```linenos
<?php
include("cpl.inc.php");
$cpl = new cPanelLicensing("username@example.com", "123456luggage");
$cpl->requestTransfer(array(
        "ip"      => "192.0.2.0",
        "groupid" => "001",
        "packageid" => "147",
        )
    );
?>
```

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#cpanellicensing-perl-module1764175699051195879)

```linenos
use cPanelLicensing;
my $licenseManager = new cPanelLicensing(user => 'username\@example.com', pass => '123456luggage');
$licenseManager->requestTransfer(
    'groupid'   => '1234',
    'packageid' => '147',
    'ip'        => '192.0.2.0'
    );
```

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#output-xml1764175699051623641)

```xml
<XMLtransferRequest reason="Example Company has been contacted. You will receive notice via email once our staff reviews their response. This process may take up to 48 hours. The confirmation number for this request is 37313." status="1" version="0.2"/>
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#output-json1764175699061717803)

```linenos
{
    "version": 0.2,
    "status": 1,
    "reason": "Example Company has been contacted. You will receive notice via email once our staff reviews their response. This process may take up to 48 hours. The confirmation number for this request is 37313."
}
```

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-request-a-license-transfer/#output-yaml1764175699071160924)

```linenos
---
version: 0.2
status: 1
reason: Example Company has been contacted. You will receive notice via email once our staff reviews their response. This process may take up to 48 hours. The confirmation number for this request is 37313.
```

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `groupid` | _integer_ | **Required**<br> The license’s group ID. The Manage2 [Display Groups](https://docs.cpanel.net/manage2/api/manage2-api-display-groups) function returns a list of possible values. | `001` |
| `packageid` | _integer_ | **Required**<br> The package’s ID number. The Manage2 [List Package Information](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information) function returns a list of possible values. | `147` |
| `ip` | _integer_ | **Required**<br> A valid IP address on the server. The Manage2 [List License Information](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information) function returns a list of possible values. | `192.0.2.01` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `reason` | _string_ | The transfer request’s result. | `Example Company has been contacted. You will receive notice via email once our staff reviews their response. This process may take up to 48 hours.  The confirmation number for this request is 37313.` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |
| `version` | _numeric_ | Internal information that the Manage2 API uses to identify the version. | `0.1` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×