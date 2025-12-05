---
url: "https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/"
title: "Manage2 API Function - Register Key-Based Authentication | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#main-content)

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
4. Manage2 API Function - Register Key-Based Authentication


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#returns)

* * *

## Manage2 API Function - Register Key-Based Authentication

Last modified: _2021 March 16_

* * *

## Description

This function registers a server to use keyed authentication.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#browser-based-calls1764175699022792751)

#### XML

```bash
https://manage2.cpanel.net/XMLregisterAuth.cgi?user=username%40example.com&pickup=this+is+an+example+pickup+phrase%3F&service=license-suite-2000
```

#### JSON

```bash
https://manage2.cpanel.net/XMLregisterAuth.cgi?output=JSON&user=username%40example.com&pickup=this+is+an+example+pickup+phrase%3F&service=license-suite-2000
```

#### YAML

```bash
https://manage2.cpanel.net/XMLregisterAuth.cgi?output=yaml&user=username%40example.com&pickup=this+is+an+example+pickup+phrase%3F&service=license-suite-2000
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#cpanellicensing-php-class1764175699023463227)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```php<br><?php<br>    include("cpl.inc.php");<br>    $cpl = new cPanelLicensing();<br>    $cpl->registerAuth(array(<br>        "user" => "username@example.com",<br>        "pickup" => "this is an example pickup phrase",<br>        "service" => "license-suite-2000",<br>        )<br>    );<br> ?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#cpanellicensing-perl-module1764175699024687230)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```perl<br>use cPanelLicensing;<br>my $cpl = cPanelLicensing->new();<br>$cpl->registerAuth(<br>    'user'    => 'username\@example.com',<br>    'pickup'  => 'this is an example pickup phrase',<br>    'service' => 'license-suite-2000',<br>);<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#output-xml1764175699024994083)

```xml
<XMLRegisterAuth key="ab1de2gh3jk4mn5pq6st" ip="192.0.2.0" reason="Successfully registered license-suite-2000 on 192.0.2.0" status="1" />
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#output-json1764175699025386741)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```json<br>{<br>    "status": 1,<br>    "reason": "Successfully registered license-suite-2000 on 192.0.2.0",<br>    "key": "ab1de2gh3jk4mn5pq6st",<br>    "ip": "192.0.2.0"<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication/#output-yaml1764175699025805608)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```yaml<br>---<br>status: 1<br>reason: Successfully registered license-suite-2000 on 192.0.2.0<br>key: ab1de2gh3jk4mn5pq6st<br>ip: 192.0.2.0<br>``` |

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `user` | _string_ | **Required**<br> The account’s username. | `username@example.com` |
| `pickup` | _string_ | **Required**<br> The pickup phrase to add. | `this is an example pickup phrase` |
| `service` | _string_ | **Required**<br> The name of the service that uses the authentication scripts. | `license-suite-2000` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `key` | _string_ | A key to authenticate the IP address. | `ab1de2gh3jk4mn5pq6st` |
| `ip` | _string_ | The account’s IP address. | `192.0.2.0` |
| `reason` | _string_ | A message about the IP address authentication. | `Successfully registered license-suite-2000 on 192.0.2.0` |
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