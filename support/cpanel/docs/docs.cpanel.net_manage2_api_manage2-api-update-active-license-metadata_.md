---
url: "https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/"
title: "Manage2 API Function - Update Active License Metadata | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#main-content)

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
4. Manage2 API Function - Update Active License Metadata


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#returns)

* * *

## Manage2 API Function - Update Active License Metadata

Last modified: _2021 June 9_

* * *

## Description

This function updates an active license’s metadata.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#browser-based-calls1764175699033179501)

#### XML

```bash
https://manage2.cpanel.net/XMLupdateActiveLicenseMetadata.cgi?liscid=62630487&external_notes=this%20is%20a%20note
```

#### JSON

```bash
https://manage2.cpanel.net/XMLupdateActiveLicenseMetadata.cgi?output=json&liscid=62630487&external_notes=this%20is%20a%20note
```

#### YAML

```bash
https://manage2.cpanel.net/XMLupdateActiveLicenseMetadata.cgi?output=yaml&liscid=62630487&external_notes=this%20is%20a%20note
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#cpanellicensing-php-class1764175699034061899)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com", "123456luggage");<br>$ref = $cpl->request(<br>    "XMLupdateActiveLicenseMetadata.cgi", [<br>        "liscid" => 62630487,<br>        "external_notes" => "this is a note",<br>    ]<br>);<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#cpanellicensing-perl-module1764175699035562035)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```perl<br>use cPanelLicensing;<br>my $cpl = cPanelLicensing->new(user => "username\@example.com", pass => "123456luggage");<br>my $ref = $cpl->request(<br>    "/XMLupdateActiveLicenseMetadata.cgi",<br>    liscid => 62630487,<br>    external_notes => "this is a note",<br>);<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#output-xml1764175699035923848)

```xml
<XMLupdateActiveLicenseMetadata reason="Updated license metadata" status="1" />
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#output-json1764175699036290632)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```json<br>{<br>   "status":1,<br>   "reason":"Updated license metadata"<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-update-active-license-metadata/#output-yaml1764175699036615075)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```yaml<br>---<br>status: 1<br>reason: Updated license metadata<br>``` |

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `liscid` | _number_ | **Required**<br> The license ID number. | `62630487` |
| `external_notes` | _string_ | **Required**<br> Additional information about the license, up to 64 characters long: <br>- If the parameter’s value exceeds 64 characters, this function will return an error.<br>- This parameter accepts an empty string value (`''`).<br>Important:<br>This parameter **overwrites** any existing `external_notes` values with the new value. | `this is a note` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `reason` | _string_ | Information about the license activation. | `Updated license metadata.` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×