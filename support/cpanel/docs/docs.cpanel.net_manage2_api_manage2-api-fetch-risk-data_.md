---
url: "https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/"
title: "Manage2 API Function - Fetch Risk Data | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#main-content)

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
4. Manage2 API Function - Fetch Risk Data


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#returns)

* * *

## Manage2 API Function - Fetch Risk Data

Last modified: _2021 March 12_

* * *

## Description

This function returns an IP address’s fraud risk score. This function uses the number of charge backs, the number of fraudulent sign-ups, and other information to generate this score.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#browser-based-calls1764175698920964287)

#### XML

```bash
https://manage2.cpanel.net/XMLsecverify.cgi?ip=192.0.2.0
```

#### JSON

```bash
https://manage2.cpanel.net/XMLsecverify.cgi?output=json&ip=192.0.2.0
```

#### YAML

```bash
https://manage2.cpanel.net/XMLsecverify.cgi?output=yaml&ip=192.0.2.0
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#cpanellicensing-php-class1764175698921489152)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com,"123456luggage");<br>$lisc = $cpl->fetchLicenseRiskData(array(<br>    "ip" => 192.0.2.0<br>    )<br>);<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#cpanellicensing-perl-module1764175698922616285)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```perl<br>use cPanelLicensing;<br>    my $licenseManager = new cPanelLicensing(<br>        user => 'username\@example.com',<br>        pass => '123456luggage',<br>);<br>    $licensemanager->fetchLicenseRiskData(<br>        'ip' => '192.0.2.0'<br>    );<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#output-xml1764175698922981390)

```xml
<XMLsecverify clientreportingurl="http://verify.cpanel.net/security/?code=ELeLcLNcPA" reason="Risk Data Fetched" riskscore.aggregate.score="0" riskscore.directorder.score="0" riskscore.main.score="0" status="1" version="1"/>
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#output-json1764175698923464021)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```json<br>{<br>    "version": 1,<br>    "status": 1,<br>    "reason": "Risk Data Fetched",<br>    "clientreportingurl": "http://verify.cpanel.net/security/?code=ELeLcLNcPA",<br>    "riskscore.main.score": 0,<br>    "riskscore.directorder.score": 0,<br>    "riskscore.aggregate.score": 0<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-fetch-risk-data/#output-yaml1764175698923932839)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```yaml<br>---<br>version: 1<br>status: 1<br>reason: Risk Data Fetched<br>clientreportingurl: http://verify.cpanel.net/security/?code=ELeLcLNcPA<br>riskscore.main.score: 0<br>riskscore.directorder.score: 0<br>riskscore.aggregate.score: 0<br>``` |

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `ip` | _string_ | **Required**<br> The license’s IP address. The Manage2 [List License Information](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information) function returns a list of possible values. | `192.0.2.0` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `reason` | _string_ | Information about license check. | `Risk Data Fetched` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |
| `clientreportingurl` | _string_ | The URL to send clients who wish to request removal from the database. | `http://verify.cpanel.net/security/?code=ELeLcLNcPA` |
| `version` | _float_ | Internal information that the Manage2 API uses to identify the version. | `0.5` |
| `riskscore.main.score` | _integer_ | The fraud risk score, based on the license’s history: <br>- High integer — High fraud risk.<br>- Low integer — Low fraud risk.<br>- Negative integer — Positive order history. | `0` |
| `riskscore.aggregate.score` | _integer_ | The fraud risk score, based on the license’s history **and** cPanel Store’s order databases: <br>- High integer — High fraud risk.<br>- Low integer — Low fraud risk.<br>- Negative integer — Positive order history. | `0` |
| `riskscore.directorder.score` | _integer_ | The fraud risk score, based on the cPanel Store’s order databases: <br>- High integer — High fraud risk.<br>- Low integer — Low fraud risk.<br>- Negative integer — Positive order history. | `0` |

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×