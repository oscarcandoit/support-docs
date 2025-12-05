---
url: "https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/"
title: "Manage2 API Function - Raw Lookup | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#main-content)

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
4. Manage2 API Function - Raw Lookup


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#returns)

* * *

## Manage2 API Function - Raw Lookup

Last modified: _2024 December 19_

* * *

## Description

This function returns a license’s information.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#browser-based-calls1764175698985613952)

#### XML

```bash
https://manage2.cpanel.net/XMLRawlookup.cgi?ip=192.0.2.0&all=1
```

#### JSON

```bash
https://manage2.cpanel.net/XMLRawlookup.cgi?output=json&ip=192.0.2.0&all=1
```

#### YAML

```bash
https://manage2.cpanel.net/XMLRawlookup.cgi?output=yaml&ip=192.0.2.0&all=1
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#cpanellicensing-php-class1764175698994990309)

```linenos
<?php
include("cpl.inc.php");
$cpl = new cPanelLicensing("username@example.com", "123456luggage");
$result = $cpl->fetchLicenseRaw(array("ip" => "192.0.2.0"));
?>
```

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#cpanellicensing-perl-module1764175699004492358)

```linenos
use cPanelLicensing;
my $cpl = new cPanelLicensing(user => 'username\@example.com', pass => '123456luggage');
my $result = $licenseManager->fetchLicenseRaw(
    'ip' => '192.0.2.0'
);
```

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#output-xml1764175699013913709)

```linenos
<XMLRawlookup reason="OK" status="1">
      <license adddate="0" company="Example Company" distro="" envtype="" expiredon="" expirereason="" groupid="218370" hostname="" ip="192.0.2.0" isenkompass="0" lastrequest="" lastrequest_unixtime="" licenseid="5388377" maxusers="" os="" osver="" package="148" packageqty="1" status="1" updateexpiretime="" valid="1" version="" external_notes="123456luggage"/>
      <license adddate="0" company="Testing Company" distro="" envtype="" expiredon="" expirereason="" groupid="218370" hostname="" ip="198.51.100.0" isenkompass="0" lastrequest="" lastrequest_unixtime="" licenseid="5388378" maxusers="0" os="" osver="" package="6140" packageqty="1" status="1" updateexpiretime="" valid="1" version="" external_notes="123456luggage"/>
  </XMLRawlookup>
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#output-json1764175699023271578)

```linenos
{
   "status": 1,
   "reason": "OK",
   "license": [{\
      "status": "1",\
      "ip": "52.52.89.18",\
      "hostname": null,\
      "os": null,\
      "valid": "1",\
      "expiredon": null,\
      "isenkompass": "1",\
      "groupid": "208850",\
      "company": "Example Company",\
      "packageqty": "10",\
      "adddate": "1411420392",\
      "licenseid": "8719562",\
      "expirereason": null,\
      "distro": null,\
      "version": null,\
      "maxusers": "5000",\
      "package": "1706",\
      "envtype": null,\
      "osver": null,\
      "updateexpiretime": null,\
      "external_notes": "123456luggage"\
   }]
}
```

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-raw-lookup/#output-yaml1764175699024222410)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>``` | ```yaml<br>---<br>status: 1<br>reason: OK<br>license:<br>- status: '1'<br>  ip: 52.52.89.18<br>  hostname: ~<br>  os: ~<br>  valid: '1'<br>  expiredon: ~<br>  isenkompass: '1'<br>  groupid: '208850'<br>  company: Example Company<br>  packageqty: '10'<br>  adddate: '1591995380'<br>  licenseid: '8719562'<br>  expirereason: ~<br>  distro: ~<br>  version: ~<br>  maxusers: '5000'<br>  package: '1706'<br>  envtype: ~<br>  osver: ~<br>  updateexpiretime: ~<br>  external_notes: testlicense<br>``` |

## Parameters

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `ip` | _string_ | The cPanel & WHM license’s IP address. | `172.0.0.1` |
| `packageid` | _integer_ | The license’s package ID. The Manage2 [List Package Information](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information) function returns a list of possible values.<br>Important:<br>Supply the `packageid` parameter to return 360 Monitoring licenses.<br> <br> This parameter defaults to an empty string. | `1` |
| `all` | _Boolean_ | Whether to return all of the licenses for the specified IP address or `packageid`:<br>- `1` — Return all licenses.<br>- `0` — Do not return all licenses.<br> This parameter defaults to `0`. | `0` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `license` | _object_ | A list of license information. |  |
| `accounts` | _integer_ | The number of active accounts. <br> The function returns this value in the `license` object. | `30` |
| `adddate` | _integer_ | The license’s add date, in [Unix time](http://en.wikipedia.org/wiki/Unix_time) format. <br> The function returns this value in the `license` object. | `1591995380` |
| `autoscale_package` | _integer_ | The projected billing package’s ID. <br> The function returns this value in the `license` object. | `4` |
| `company` | _string_ | The license’s company name. <br> The function returns this value in the `license` object. | `Example Company` |
| `distro` | _string_ | The distribution name of the operating system. <br> The function returns this value in the `license` object. | `UNIX®` |
| `envtype` | _string_ | The virtualization platform: <br>- A distribution platform name.<br>- `""` or `null` — A virtualization platform does not exist.<br> The function returns this value in the `license` object. | `null` |
| `expiredon` | _string_ | The license’s expiration date: <br>- An expiration date.<br>- `""` or `null` — The license has not expired.<br> The function returns this value in the `license` object. | `2020-07-12 20:56:20` |
| `expirereason` | _string_ | The reason why the license expired: <br>- A string value.<br>- `""` or `null` — The license has not expired.<br> The function returns this value in the `license` object. | `null` |
| `external_notes` | _string_ | Additional information about the license: <br>- A string up to 64 characters.<br>- `""` or `null` — No external notes exist.<br> The function returns this value in the `license` object. | `null` |
| `groupid` | _numeric_ | The license’s group ID. <br> The function returns this value in the `license` object. | `0001` |
| `hostname` | _string_ | The fully qualified domain name of the license’s server. <br> The function returns this value in the `license` object. | `example.com` |
| `host_type` | _string_ | The host type (virtual or dedicated) the license requires: <br>- `virtual`<br>- `dedicated`<br> The function returns this value in the `license` object. | `virtual` |
| `hosted_sites` | _integer_ | The total number of hosted sites on a Sitejet Studio license.<br> The function returns this value in the `license` object. | `1` |
| `ip` | _string_ | The license’s IP address. <br> The function returns this value in the `license` object. | `192.0.2.0` |
| `licenseid` | _string_ | The license’s ID. <br> The function returns this value in the `license` object. | `10742947` |
| `os` | _string_ | The operating system of the license’s server. <br> The function returns this value in the `license` object. | `Linux` |
| `osver` | _string_ | The operating system’s version. <br> The function returns this value in the `license` object. | `10.9` |
| `packageid` | _string_ | The license’s package ID. <br> The function returns this value in the `license` object. | `761` |
| `producttype` | _integer_ | The product type ID: <br>- `1` — cPanel/WHM<br>- `2` — Enkompass<br>- `4` — RESERVED<br>- `8` — SiteZen<br>- `16` — CloudLinux<br>- `32` — KernelCare<br>- `64` — DNSOnly<br>- `128` — LiteSpeed<br>- `256` — Imunify360<br>- `512` — WHMCS<br>- `1024` — JetBackup<br>- `524288` — 360 Monitoring<br>- `2097152` — koality<br>- `8388608` — WP Guardian<br>- `268435456` — Sitejet Commerce<br>- `16777216` — Sitejet Studio<br>- `33554432` — XOVI NOW<br>- `67108864` — WP Guardian (cPanel Addon)<br>- `1073741824` — SocialBee <br> The function returns this value in the `license` object. | `1` |
| `profiles` | _integer_ | The number of **additional** profiles you have added to your SocialBee license. <br>Note:<br>To see the number of workspaces your SocialBee license provisions by default, use your [SocialBee confirmation email](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-socialbee-license/).<br> <br> The function returns this value in the `license` object. | `5` |
| `projects` | _integer_ | The total number of projects for a koality license.<br> The function returns this value in the `license` object. | `30` |
| `reason` | _string_ | Information about the license lookup operation. <br> The function returns this value in the `license` object. | `OK` |
| `servers` | _integer_ | The number of server monitors for a 360 Monitoring license.<br> The function returns this value in the `license` object. | `1` |
| `sites` | _integer_ | The number of site monitors for a 360 Monitoring license or sites for a WP Guardian license.<br> The function returns this value in the `license` object. | `20` |
| `self_hosted_sites` | _integer_ | The total number of self-hosted sites on a Sitejet Studio license.<br> The function returns this value in the `license` object. | `1` |
| `updateexpiretime` | _integer_ | The date after which the license will not receive updates: <br>- A date.<br>- `null` — The license does not expire.<br> The function returns this value in the `license` object. |  |
| `valid` | _Boolean_ | Whether the license is valid: <br>- `1` — Valid license.<br>Important:<br>This function **only** returns valid licenses.<br> <br> The function returns this value in the `license` object. | `1` |
| `version` | _string_ | The product’s version number. <br> The function returns this value in the `license` object. | `11.86.0.37` |
| `workspaces` | _integer_ | The number of **additional** [workspaces](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#workspace) you have added to your SocialBee license. <br>Note:<br>To see the number of workspaces your SocialBee license provisions by default, use your [SocialBee confirmation email](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-socialbee-license/).<br> <br> The function returns this value in the `license` object. | `1` |
| `wpcga_sites` | _integer_ | The number of sites for a WP Guardian (cPanel Addon) license. <br> The function returns this value in the `license` object. | `100` |
| `users` | _integer_ | The number of **additional** users you have added to your SocialBee license. <br>Note:<br>To see the number of workspaces your SocialBee license provisions by default, use your [SocialBee confirmation email](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-socialbee-license/).<br> <br> The function returns this value in the `license` object. | `1` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×