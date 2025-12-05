---
url: "https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/"
title: "Manage2 API Function - Look Up a License ID | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#main-content)

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
4. Manage2 API Function - Look Up a License ID


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#returns)

* * *

## Manage2 API Function - Look Up a License ID

Last modified: _2023 August 11_

* * *

## Description

This function returns an IP address’s license ID.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#browser-based-calls1764175698977532257)

#### XML

```bash
https://manage2.cpanel.net/XMLlookup.cgi?ip=192.0.2.0&packageid=123&all=1
```

#### JSON

```bash
https://manage2.cpanel.net/XMLlookup.cgi?output=json&ip=192.0.2.0&packageid=123&all=1
```

#### YAML

```bash
https://manage2.cpanel.net/XMLlookup.cgi?output=yaml&ip=192.0.2.0&packageid=123&all=1
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#cpanellicensing-php-class1764175698978272348)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com", "123456luggage");<br>$lisc = (array) $cpl->fetchLicenseId(array(<br>    "ip"        => "192.0.2.0",<br>    "packageid" => "123",<br>    "all"       => "1",<br>  )<br>);<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#cpanellicensing-perl-module1764175698979771630)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```perl<br>use cPanelLicensing;<br>my $licenseManager = new cPanelLicensing(user => 'username\@example.com', pass => '123456luggage'<br>my $liscid = $licenseManager->fetchLicenseId(<br>    'ip'        => '192.0.2.0',<br>    'packageid' => '123'<br>    'all'       => '1'<br>);<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#output-xml1764175698980143187)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```xml<br><XMLlookup reason="OK" status="1"><br>      <licenseid>5388377</licenseid><br>      <licenseid>5388378</licenseid><br></XMLlookup><br>``` |

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#output-json1764175698980535000)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```json<br>{<br>    "status": 1,<br>    "reason": "OK",<br>    "licenseid": "5388377",<br>    "licenseid": "5388378"<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-look-up-a-license-id/#output-yaml1764175698980922292)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```yaml<br>---<br>status: 1<br>reason: OK<br>licenseid: '5388378',<br>licenseid: '5388378'<br>``` |

## Parameters

This function accepts the following parameters:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `ip` | _string_ | **Required**<br> The IP address. | `192.0.2.0` |
| `packageid` | _integer_ | The package’s ID. <br> This parameter defaults to an empty string. | `123` |
| `all` | _Boolean_ | Whether to return all of the licenses that are currently associated with the IP address. <br>- `1` — Return all licenses.<br>- `0` — Do not return all licenses.<br> The parameter defaults to `0`. | `0` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `licenseid` | _string_ | The IP address’s license ID. | `5388377` |
| `reason` | _string_ | Information about the package listing operation. | `OK` |
| `status` | _Boolean_ | Whether the call succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |
| `version` | _integer_ | Internal information that the Manage2 API uses to identify the version. | `0.3` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×