---
url: "https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/"
title: "Manage2 API Function - Change a License Package | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#main-content)

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
4. Manage2 API Function - Change a License Package


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/) [m2accountpackages](https://docs.cpanel.net/tags/m2accountpackages/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#returns)

* * *

## Manage2 API Function - Change a License Package

Last modified: _2021 March 16_

* * *

## Description

This function updates a license’s package.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#browser-based-calls1764175698900381462)

#### XML

```bash
https://manage2.cpanel.net/XMLpackageUpdate.cgi?output=xml&ip=192.0.2.0&oldpackageid=P003&newpackageid=P002&maxusers=120
```

#### JSON

```bash
https://manage2.cpanel.net/XMLpackageUpdate.cgi?output=json&ip=192.0.2.0&oldpackageid=P003&newpackageid=P002&maxusers=120
```

#### YAML

```bash
https://manage2.cpanel.net/XMLpackageUpdate.cgi?output=yaml&ip=192.0.2.0;oldpackageid=P003;newpackageid=P002&maxusers=120
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#cpanellicensing-php-class1764175698901111113)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```php<br><?php<br>    include("cpl.inc.php");<br>    $cpl = new cPanelLicensing("username@example.com", "123456luggage");<br>    $response = (array)$cpl->packageUpdate(array(<br>        "ip"           => "192.0.2.0",<br>        "oldpackageid" => "P003",<br>        "newpackageid" => "P002".<br>        "maxusers"     => '120'));<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#cpanellicensing-perl-module1764175698902687950)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```perl<br>use cPanelLicensing;<br>my $licenseManager = new cPanelLicensing(user => 'username\@example.com', pass => '123456luggage');<br>$licenseManager->packageUpdate(<br>        'ip'           => '192.0.2.0',<br>        'oldpackageid' => 'P003',<br>        'newpackageid' => 'P002',<br>        'maxusers'     => '120'<br>);<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#output-xml1764175698902998352)

```xml
<XMLpackageUpdate status="1" reason="Updated package on 192.0.2.0 from 15-DAY-TEST to COMPANY-INTERNAL-VPS."/>
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#output-json1764175698903332975)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```json<br>{<br>  "status": 1,<br>  "reason": "Updated package on 192.0.2.0 from 15-DAY-TEST to COMPANY-INTERNAL-VPS."<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-change-a-license-package/#output-yaml1764175698903671800)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```yaml<br>---<br>status: 1<br>reason: Updated package on 192.0.2.0 from 15-DAY-TEST to COMPANY-INTERNAL-VPS.<br>``` |

## Parameters

Important:

If more than one license uses the given IP address, you **must** provide the `oldpackageid` parameter.

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `ip` | _string_ | **Required**<br> The license’s current IP address. | `192.0.2.0` |
| `newpackageid` | _string_ | **Required**<br> The new package’s ID. The Manage2 [List Package Information](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information) function returns a list of possible values. | `P002` |
| `oldpackageid` | _string_ | **Required**<br> The license’s current package’s ID. The Manage2 [List Package Information](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information) function returns a list of possible values. <br> If you do not use this parameter, the system attempts to determine the package ID for the supplied IP address. | `P003` |
| `maxusers` | _integer_ | The maximum number of users allowed on the license. <br>- A positive integer.<br>- `0` — No users allowed.<br> If you do not use this parameter, the system defaults to unlimited users. | `120` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `reason` | _string_ | Whether the function updated the package. | `Updated package on 192.0.2.0 from 15-DAY-TEST to COMPANY-INTERNAL-VPS.` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×