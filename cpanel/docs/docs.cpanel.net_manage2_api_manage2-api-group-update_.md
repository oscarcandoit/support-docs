---
url: "https://docs.cpanel.net/manage2/api/manage2-api-group-update/"
title: "Manage2 API Function - Group Update | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#main-content)

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
4. Manage2 API Function - Group Update


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#returns)

* * *

## Manage2 API Function - Group Update

Last modified: _2024 May 20_

* * *

## Description

This function associates a license or collection of licenses with a group.

Note:

- We introduced this function in cPanel License (CPL) client library version 3.8.
- You **cannot** use this function to associate a `Group Limited` user. To set a user’s group permissions, use Manage2’s [_Edit Users_](https://docs.cpanel.net/manage2/users/edit-users/#groups-and-packages) interface.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#browser-based-calls1764175698929649637)

#### XML

```bash
https://manage2.cpanel.net/XMLgroupUpdate.cgi?ip=192.0.2.0&packageid=008&group=ExampleGroup
```

#### JSON

```bash
https://manage2.cpanel.net/XMLgroupUpdate.cgi?output=json&ip=192.0.2.0&packageid=008&group=ExampleGroup
```

#### YAML

```bash
https://manage2.cpanel.net/XMLgroupUpdate.cgi?output=yaml&ip=192.0.2.0&packageid=008&group=ExampleGroup
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#cpanellicensing-php-class1764175698930336638)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com", "123456luggage");<br>$response = (array)$cpl->updateGroup( array(<br>    "package"  => "008",<br>    "oldgroup" => "test",<br>    "group"    => "ExampleGroup",<br>    )<br>);<br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#cpanellicensing-perl-module1764175698931909208)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```perl<br>use cPanelLicensing;<br>my $licenseManager = new cPanelLicensing(user => 'username\@example.com', pass => '123456luggage');<br>my ($status, $reason) = $licenseManager->updateGroup(<br>    'package'  => '008',<br>    'oldgroup' => 'test',<br>    'group'    => 'ExampleGroup',<br>);<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#output-xml1764175698932222940)

```xml
<XMLgroupUpdate groupid="8" reason="Updated 1 license to the &quot;ExampleGroup&quot; group." status="1" />
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#output-json1764175698932567502)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```json<br>{<br>  "status": 1,<br>  "reason": "Updated 6 licenses to the \"ExampleGroup\" group.\n"<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-group-update/#output-yaml1764175698932895816)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```yaml<br>---<br>status: 1<br>reason: 'Updated 6 licenses to the \"ExampleGroup\" group.'<br>``` |

## Parameters

Important:

This function requires **one** of the following parameters:

- `ip`
- `package`
- `packageid`
- `oldgroup`
- `oldgroupid`

This function also requires **either** of the following parameters:

- `group`
- `groupid`

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `ip` | _string_ | **Required**<br> The license’s IP address. The Manage2 [List License Information](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information) function returns a list of possible values. <br>Note:<br>If both cPanel and CloudLinux™ licenses exist on the named IP, this function updates **both** licenses. To update a single license type, you **must** specify additional parameters. | `192.0.2.0` |
| `package` | _string_ | The package’s name. | `ONE-YEAR` |
| `packageid` | _integer_ | The package’s ID number. The Manage2 [List Package Information](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information) function returns a list of possible values. | `008` |
| `oldgroup` | _string_ | The license’s current group name. The Manage2 [Display Groups](https://docs.cpanel.net/manage2/api/manage2-api-display-groups) function returns a list of possible values. | `test` |
| `oldgroupid` | _integer_ | The license’s current group ID number. The Manage2 [Display Groups](https://docs.cpanel.net/manage2/api/manage2-api-display-groups) function returns a list of possible values. | `12345` |
| `group` | _string_ | The license’s new associated group. The Manage2 [Display Groups](https://docs.cpanel.net/manage2/api/manage2-api-display-groups) function returns a list of possible values. <br>Note:<br>The `group` value that you pass **must** already exist. | `ExampleGroup` |
| `groupid` | _integer_ | The license’s new associated group’s ID. The Manage2 [Display Groups](https://docs.cpanel.net/manage2/api/manage2-api-display-groups) function returns a list of possible values. <br>Note:<br>The `groupid` value that you pass **must** already exist. | `54321` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `reason` | _string_ | License activation information. | `Updated 1 license to the &quot;ExampleGroup&quot; group.` |
| `status` | _Boolean_ | Whether the system accepts the request as valid: <br>- `1` — Valid.<br>- `0` — Not valid. | `1` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×