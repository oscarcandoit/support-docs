---
url: "https://docs.cpanel.net/manage2/api/manage2-api-add-group/"
title: "Manage2 API Function - Add Group | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#main-content)

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
4. Manage2 API Function - Add Group


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [groups](https://docs.cpanel.net/tags/groups/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#returns)

* * *

## Manage2 API Function - Add Group

Last modified: _2021 December 17_

* * *

## Description

This function adds a group to a Manage2 account.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#browser-based-calls1764175698854651391)

#### XML

```bash
https://manage2.cpanel.net/XMLgroupAdd.cgi?group=NewGroup
```

#### JSON

```bash
https://manage2.cpanel.net/XMLgroupAdd.cgi?output=json&group=NewGroup
```

#### YAML

```bash
https://manage2.cpanel.net/XMLgroupAdd.cgi?output=yaml&group=NewGroup
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#cpanellicensing-php-class1764175698855748679)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com","123456luggage");<br>$response = (array)$cpl->addGroup(array(<br>    'group'   => 'NewGroup',<br>);<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#cpanellicensing-perl-module1764175698857597885)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```perl<br>use cPanelLicensing;<br>my $cpl = cPanelLicensing->new(user => "username@example.com", pass => "123456luggage");<br>my $response = $licenseManager->addGroup(<br>    'group'   => 'NewGroup',<br>);<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#output-xml1764175698859044190)

```xml
<XMLgroupAdd reason="Added 'NewGroup' group." status="1" />
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#output-json1764175698859622213)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```json<br>{<br>    "reason": "Added 'NewGroup' group.",<br>    "status": 1<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-add-group/#output-yaml1764175698861635556)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```yaml<br>---<br>reason: Added 'NewGroup' group.<br>status: 1<br>``` |

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `group` | _string_ | **Required**<br> The desired group name, up to 50 characters. | `NewGroup` |
| `maingroup` | _Boolean_ | Default group to which new licenses are added unless a group is explicitly defined.<br> Whether the `maingroup` is True: <br>- `1` — True. <br>- 0 — False. | `1` |
| `country` | _string_ | The country of the datacenter in which licenses in the group are hosted. <br>Note:<br>Country code must be in the form of ISO 3166-1 alpha-2 | `US` |
| `stateprov` | _string_ | The state or province of the datacenter in which licenses in the group are hosted. <br>Note:<br>Code must be in the form of ISO 3166-2 | `TX` |
| `city` | _string_ | The city name the datacenter in which licenses in the group are hosted. | `Houston` |
| `postcode` | _string_ | The post code of the address of the datacenter in which licenses in the group are hosted. | `77092` |
| `addr1` | _string_ | The street number and street name of the address of the datacenter in which licenses in the group are hosted. | ` 1234 Virtual St` |
| `addr2` | _string_ | The suite or apartment number of the address of the datacenter in which licenses in the group are hosted, if applicable. | `716` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `reason` | _string_ | A message of success or failure. | `Added 'NewGroup' group.` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — The function succeeded.<br>- `0` — The function failed. | `1` |

#### Additional Documentation

* * *

- [Manage2 API Function - Add a Pickup Phrase](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/)
- [Manage2 API Function - Add Licenses](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/)
- [Manage2 API Function - Cancel a License Transfer](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/)
- [Manage2 API Function - Display Groups](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/)
- [Manage2 API Function - Edit Group](https://docs.cpanel.net/manage2/api/manage2-api-edit-group/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×