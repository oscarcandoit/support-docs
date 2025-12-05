---
url: "https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/"
title: "Manage2 API Function - Add a Pickup Phrase | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#main-content)

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
4. Manage2 API Function - Add a Pickup Phrase


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#returns)

* * *

## Manage2 API Function - Add a Pickup Phrase

Last modified: _2021 March 12_

* * *

## Description

This function creates a pickup phrase that you use to authenticate with the Manage2 API.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#browser-based-calls1764175698859226096)

#### XML

```bash
https://manage2.cpanel.net/XMLaddPickupPass.cgi?pickup=this+is+an+example+pickup+phrase?
```

#### JSON

```bash
https://manage2.cpanel.net/XMLaddPickupPass.cgi?output=json&pickup=this+is+an+example+pickup+phrase?
```

#### YAML

```bash
https://manage2.cpanel.net/XMLaddPickupPass.cgi?output=yaml&pickup=this+is+an+example+pickup+phrase?
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#cpanellicensing-php-class1764175698860182444)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com", "123456luggage");<br>$response = $cpl->addPickupPass(array(<br>    "pickup" => "this is an example pickup phrase"<br>    )<br>);<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#cpanellicensing-perl-module1764175698862065959)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```perl<br>use cPanelLicensing;<br>my $cpl = cPanelLicensing->new(user => 'username\@example.com', pass => '123456luggage');<br>my $response = $cpl->addPickupPass(<br>    'pickup' => 'this is an example pickup phrase'<br>    );<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#output-xml1764175698862566679)

```xml
<XMLaddPickupPass reason="Successfully added pickup phrase 'this is an example pickup phrase' for username@example.com" status="1" />
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#output-json1764175698863213742)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```json<br>{<br>    "status": 1,<br>    "reason": "Successfully added pickup phrase 'this is an example pickup phrase' for username@example.com"<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/#output-yaml1764175698863888216)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```yaml<br>---<br>status: 1<br>reason: Successfully added pickup phrase 'this is an example pickup phrase' for username@example.com<br>``` |

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `pickup` | _string_ | **Required**<br> The pickup phrase to add. | `this is an example pickup phrase` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `reason` | _string_ | A message of success or failure. | `Successfully added pickup phrase 'this is an example pickup phrase' for username@example.com` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |

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