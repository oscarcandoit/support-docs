---
url: "https://docs.cpanel.net/manage2/api/manage2-api-display-groups/"
title: "Manage2 API Function - Display Groups | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#main-content)

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
4. Manage2 API Function - Display Groups


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [groups](https://docs.cpanel.net/tags/groups/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#returns)

* * *

## Manage2 API Function - Display Groups

Last modified: _2022 November 30_

* * *

## Description

This function returns a Manage2 account’s groups.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#browser-based-calls1764175698902727483)

Note:

To view expanded returns, add the `&expand` parameter to the end of each browser-based call.


#### XML

```bash
https://manage2.cpanel.net/XMLgroupInfo.cgi
```

#### JSON

```bash
https://manage2.cpanel.net/XMLgroupInfo.cgi?output=json
```

#### YAML

```bash
https://manage2.cpanel.net/XMLgroupInfo.cgi?output=yaml
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#cpanellicensing-php-class1764175698903273556)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com","123456luggage");<br>$lisc = $cpl->fetchGroups();<br>?><br>``` |

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#cpanellicensing-perl-module1764175698904249304)

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```perl<br>use cPanelLicensing;<br>my $cpl = new cPanelLicensing(user => 'username\@example.com', pass => '123456luggage');<br>$cpl->fetchGroups();<br>``` |

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#output-xml1764175698904985155)

Without the `expand` parameter:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```xml<br><XMLgroupInfo reason="OK" status="1" version="0.5"><br>  <groups G294658="testgroupone" G294662="testgrouptwo" G294666="testgroupthree" G863177="testgroupfour"/><br></XMLgroupInfo><br>``` |

With the `expand` parameter:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```xml<br><XMLgroupInfo reason="OK" status="1" version="0.5"><br>    <group name="testgroupone" groupid="G294658"/><br>    <group name="testgrouptwo" groupid="G294662"/><br>    <group name="testgroupthree" groupid="G294666"/><br>    <group name="testgroupfour" groupid="G863177"/><br></XMLgroupInfo><br>``` |

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#output-json1764175698906370054)

Without the `expand` parameter:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```json<br>{<br>  "version": "0.5",<br>  "status": 1,<br>  "groups": {<br>    "G294658": "testgroupone",<br>    "G294662": "testgrouptwo",<br>    "G294666": "testgroupthree",<br>    "G863177": "testgroupfour"<br>  },<br>  "reason": "OK"<br>}<br>``` |

With the `expand` parameter:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>``` | ```json<br>{<br>  "group": [{<br>      "name": "testgroupone",<br>      "groupid": "G294658"<br>    },<br>    {<br>      "name": "testgrouptwo",<br>      "groupid": "G294662"<br>    },<br>    {<br>      "name": "testgroupthree",<br>      "groupid": "G294666"<br>    },<br>    {<br>      "name": "testgroupfour",<br>      "groupid": "G863177"<br>    }<br>  ],<br>  "version": "0.5",<br>  "status": 1,<br>  "reason": "OK"<br>}<br>``` |

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-display-groups/#output-yaml1764175698907597993)

Without the `expand` parameter:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```yaml<br>---<br>version: '0.5'<br>status: 1<br>groups:<br>  G294658: testgroupone<br>  G294662: testgrouptwo<br>  G294666: testgroupthree<br>  G863177: testgroupfour<br>reason: OK<br>``` |

With the `expand` parameter:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>``` | ```yaml<br>---<br>group:<br>- name: testgroupone<br>  groupid: G294658<br>- name: testgrouptwo<br>  groupid: G294662<br>- name: testgroupthree<br>  groupid: G294666<br>- name: testgroupfour<br>  groupid: G863177<br>version: '0.5'<br>status: 1<br>reason: OK<br>``` |

## Parameters

This function accepts the following parameters:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `expand` | _string_ | Displays the `group` return. This parameter does **not** accept values. | `expand` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `reason` | _string_ | Information about the group display operation. | `OK` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |
| `version` | _numeric_ | Internal information that the Manage2 API uses to identify the version. | `0.4` |
| `groups` | _object_ | A list of the account’s group names and group IDs. <br>Note:<br>This return only appears when you do not use the `expand` parameter. |  |
| `group` | _array of objects_ | An array of objects containing expanded group information. <br>Note:<br>This return only appears when you use the `expand` parameter. |  |
| `groupid` | _string_ | The group’s ID number. <br> The function returns this value in the `groups` object. | `G294658` |
| `maingroup` | _Boolean_ | Default group to which new licenses are added unless a group is explicitly defined.<br> Whether the `maingroup` is true: <br>- `1` — True. <br>- 0 — False. | `1` |
| `country` | _string_ | The country of the datacenter in which licenses in the group are hosted. | `US` |
| `stateprov` | _string_ | The state or province of the datacenter in which licenses in the group are hosted. | `TX` |
| `city` | _string_ | The city name the datacenter in which licenses in the group are hosted. | `Houston` |
| `postcode` | _string_ | The post code of the address of the datacenter in which licenses in the group are hosted. | `77092` |
| `addr1` | _string_ | The street number and street name of the address of the datacenter in which licenses in the group are hosted. | ` 1234 Virtual St` |
| `addr2` | _string_ | The suite or apartment number of the address of the datacenter in which licenses in the group are hosted, if applicable. | `716` |
| `name` | _string_ | The group’s name. <br> The function returns this value in the `groups` object. | `testgroupone` |

#### Additional Documentation

* * *

- [Manage2 API Function - Add a Pickup Phrase](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase/)
- [Manage2 API Function - Add Group](https://docs.cpanel.net/manage2/api/manage2-api-add-group/)
- [Manage2 API Function - Add Licenses](https://docs.cpanel.net/manage2/api/manage2-api-add-licenses/)
- [Manage2 API Function - Cancel a License Transfer](https://docs.cpanel.net/manage2/api/manage2-api-cancel-a-license-transfer/)
- [Manage2 API Function - Edit Group](https://docs.cpanel.net/manage2/api/manage2-api-edit-group/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×