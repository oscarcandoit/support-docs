---
url: "https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/"
title: "Manage2 API Function - Extend One Time Licenses | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#main-content)

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
4. Manage2 API Function - Extend One Time Licenses


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#returns)

* * *

## Manage2 API Function - Extend One Time Licenses

Last modified: _2022 December 7_

* * *

## Description

This function extends one-time licenses for one year.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#browser-based-calls1764175698916316490)

#### XML

```bash
https://manage2.cpanel.net/XMLonetimeext.cgi?ip=192.0.2.0
```

#### JSON

```bash
https://manage2.cpanel.net/XMLonetimeext.cgi?output=json&ip=192.0.2.0
```

#### YAML

```bash
https://manage2.cpanel.net/XMLonetimeext.cgi?output=yaml&ip=192.0.2.0
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#cpanellicensing-php-class1764175698925834246)

```linenos
<?php
include("cpl.inc.php");
$cpl = new cPanelLicensing("username@example.com","123456luggage");
$lisc = $cpl->extendOnetime(array( "ip" => "192.0.2.01" ) );
?>
```

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#cpanellicensing-perl-module1764175698935276779)

```linenos
use cPanelLicensing;
my $licenseManager = new cPanelLicensing(user => 'username\@example.com', pass => '123456luggage');
$licenseManager->extend_onetime_updates (
    'ip' => '192.0.2.0'
);
```

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#output-xml1764175698935609132)

```xml
<XMLonetimeext reason="Dispatched notification Updates have been extended for the license on ip: 192.0.2.01. The old updates experiation time was: Mon Jul 11 03:27:02 2020 GMT. The new updates expiration time is: Tue Jul 10 03:27:02 2021 GMT. If your updates have already expired, you should run /usr/local/cpanel/cpkeyclt to reenable updates." status="1" version="0.1"/>
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#output-json1764175698945055759)

```linenos
{
  "version": 0.1,
  "status": 0,
  "reason": "Dispatched notification Updates have been extended for the license on ip: 192.0.2.01. The old updates experiation time was: Mon Jul 11 03:27:02 2020 GMT. The new updates expiration time is: Tue Jul 10 03:27:02 2021 GMT. If your updates have already expired, you should run /usr/local/cpanel/cpkeyclt to reenable updates."
}
```

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-extend-one-time-licenses/#output-yaml1764175698954493623)

```linenos
---
version: 0.1
status: 0
reason: 'Dispatched notification Updates have been extended for the license on ip: 192.0.2.01. The old updates experiation time was: Mon Jul 11 03:27:02 2020 GMT. The new updates expiration time is: Tue Jul 10 03:27:02 2021 GMT. If your updates have already expired, you should run /usr/local/cpanel/cpkeyclt to reenable updates.'
```

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `ip` | _string_ | **Required**<br> The license account’s IP address. The Manage2 [List License Information](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information) function returns a list of possible values. | `192.0.2.01` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `reason` | _string_ | The function’s result. | `Dispatched notification Updates have been extended for the license on ip: 192.0.2.01. The old updates experiation time was: Mon Jul 11 03:27:02 2020 GMT. The new updates expiration time is: Tue Jul 10 03:27:02 2021 GMT. If your updates have already expired, you should run /usr/local/cpanel/cpkeyclt to reenable updates.` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |
| `version` | _numeric_ | Internal information that the Manage2 API uses. | `0.1` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×