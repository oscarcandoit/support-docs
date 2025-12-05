---
url: "https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/"
title: "Manage2 API Function - List License Information | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#main-content)

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
4. Manage2 API Function - List License Information


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/) [license](https://docs.cpanel.net/tags/license/) [m2accounts](https://docs.cpanel.net/tags/m2accounts/)

#### Table of Contents

[Description](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#returns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#table-of-contents-toggle)

[Description](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#description)

* * *

[Examples](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#examples)

* * *

[Parameters](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#parameters)

* * *

[Returns](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#returns)

* * *

## Manage2 API Function - List License Information

Last modified: _2024 December 19_

* * *

## Description

This function returns a list of the Manage2 account’s licenses.

## Examples

[Browser-based calls](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#browser-based-calls1764175698937662819)

#### XML

```bash
https://manage2.cpanel.net/XMLlicenseInfo.cgi?expired=1&groupid=G001&maxage=2&els=1
```

#### JSON

```bash
https://manage2.cpanel.net/XMLlicenseInfo.cgi?output=json&expired=1&groupid=G001&maxage=2&els=1
```

#### YAML

```bash
https://manage2.cpanel.net/XMLlicenseInfo.cgi?output=yaml&expired=1&groupid=G001&maxage=2&els=1
```

[cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#cpanellicensing-php-class1764175698947159592)

Important:

If you use this method to call the function, you may need to increase your PHP memory limit.


```linenos
<?php
include("cpl.inc.php");
$cpl = new cPanelLicensing("username@example.com","123456luggage", "1");
$lisc = $cpl->fetchExpiredLicenses();
?>
```

[cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#cpanellicensing-perl-module1764175698975763612)

Return expired licenses:

```linenos
use cPanelLicensing;
    my $cpl = cPanelLicensing->new(user => "username\@example.com", pass => "123456luggage", els => "1");
    $cpl->fetchExpiredLicenses()
```

Return active licenses:

```linenos
use cPanelLicensing;
    my $cpl = cPanelLicensing->new(user => "username\@example.com", pass => "123456luggage", els => "1");
    $cpl->fetchLicenses()
```

Return licenses for a group and package:

```linenos
use cPanelLicensing;
my $cpl = cPanelLicensing->new(user => "username\@example.com", pass => "123456luggage");
my $response = $licenseManager->fetchLicenses(
    'groupid' => '208850',
    'package' => 'ExamplePackage',
    'els' => "1",
);
```

[Output (XML)](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#output-xml1764175698985354492)

```linenos
<XMLlicenseInfo reason="OK" status="1" version="0.7">
  <licenses name="L1234567" accounts="1" activation_code="" activation_link="" adddate="1616051708" addedby="98765" distro="centos 7" envtype="kvm" expiredon="" expirereason="" external_notes="" groupid="89876" host_type="virtual" hostname="somehost.example.com" ip="1.100.33.22" ka_activated="0" keyid="" keynumber="" licenseid="1234567" ls_serial="" maxusers="5" os="Linux" osver="3.10.0-1160.6.1.el7.x86_64" package_name="cPanel Admin Cloud" packageid="21159" packageqty="1" producttype="1" status="1" termexpires_months="" termexpires_unixtime="" updateexpiretime="" version="11.110.0.33" wpg_sites="" wpsites="">
  <extended_lifecycle_support fee_factor="0.1" subject_to_fee="1" />
  </licenses>
</XMLlicenseInfo>
```

[Output (JSON)](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#output-json1764175698994721374)

```linenos
{
  "licenses" : {
     "L1234567" : {
        "accounts" : 2,
        "activation_code" : null,
        "activation_link" : null,
        "adddate" : 1616051708,
        "addedby" : 101,
        "distro" : "centos 7",
        "envtype" : "kvm",
        "expiredon" : null,
        "expirereason" : null,
        "extended_lifecycle_support" : {
           "fee_factor" : "0.1",
           "subject_to_fee" : 1
        },
        "external_notes" : null,
        "groupid" : 89876,
        "host_type" : "virtual",
        "hostname" : "somehost.example.com",
        "ip" : "11.33.22.11",
        "ka_activated" : 0,
        "keyid" : null,
        "keynumber" : null,
        "licenseid" : 1234567,
        "ls_serial" : null,
        "maxusers" : "5",
        "os" : "Linux",
        "osver" : "3.10.0-1160.6.1.el7.x86_64",
        "package_name" : "cPanel Admin Cloud",
        "packageid" : 21159,
        "packageqty" : 1,
        "producttype" : 1,
        "status" : 1,
        "termexpires_months" : null,
        "termexpires_unixtime" : null,
        "updateexpiretime" : null,
        "version" : "11.110.0.33",
        "wpg_sites" : null,
        "wpsites" : null
     }
  },
  "reason" : "OK",
  "status" : 1,
  "version" : 0.7
}
```

[Output (YAML)](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information/#output-yaml1764175699004186326)

```linenos
---
version: 0.7
status: 1
reason: OK
licenses:
  L4921062:
    adddate: '1591995380'
    distro: Centos Enterprise 5.8
    envtype: ~
    expiredon: ~
    expirereason: ~
    extended_lifecycle_support:
       fee_factor : 0.1
       subject_to_fee : 1
    groupid: '208850'
    hostname: example.com
    ip: 192.0.2.0
    licenseid: '10742947'
    ls_serial: '7oEU-TSz0-EG7v-iP/j'
    maxusers: '30'
    os: Mac OS X
    osver: '10.9'
    packageid: '761'
    producttype: '1'
    status: '1'
    updateexpiretime:
    version: 11.86.0.37
```

## Parameters

Important:

- You can call the `groupid` or `group` parameters, but **not** both.
- You can call the `package` or `packageid` parameters, but **not** both.

This function accepts the following parameters:

| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| `els` | _Boolean_ | Whether to return the `extended_lifecycle_support` object: <br>- `1` — Return extended lifecycle support information.<br>- `0` — Do not return extended lifecycle support information.<br> This parameter defaults to `0`. | `0` |
| `expired` | _Boolean_ | Whether to return expired or active licenses: <br>- `1` — Return expired licenses.<br>- `0` — Return active licenses.<br>Important:<br>Only pass this parameter when you call the function in a browser. | `1` |
| `groupid` | _string_ | The group ID for which to return a list of licenses. The Manage2 [Display Groups](https://docs.cpanel.net/manage2/api/manage2-api-display-groups) function returns a list of possible values. <br> If you do not use this parameter or the `group` parameter, the function returns licenses from all available groups. | `G001` |
| `group` | _string_ | The group name for which to return a list of licenses. The Manage2 [Display Groups](https://docs.cpanel.net/manage2/api/manage2-api-display-groups) function returns a list of possible values. <br> If you do not use this parameter or the `groupid` parameter, the function returns licenses from all available groups. | `examplegroup` |
| `liscid` | _string_ | The ID of the license to return. | `6527118` |
| `maxage` | _integer_ | The number of days of licenses to return: <br>- A valid integer.<br>- `null` or `1` — An unlimited list of licenses.<br> This parameter defaults to `null`. | `7` |
| `packageid` | _string_ | The package ID for which to return a list of licenses. The Manage2 [List Package Information](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information) function returns a list of possible values. <br> If you do not use this parameter or the `package` parameter, the function returns licenses from all available packages. | `P001` |
| `package` | _string_ | The package name for which to return a list of licenses. The Manage2 [List Package Information](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information) function returns a list of possible values. <br> If you do not use this parameter or the `packageid` parameter, the function returns licenses from all available packages. | `ExamplePackage` |

## Returns

This function returns the following values:

| Return | Type | Description | Example |
| --- | --- | --- | --- |
| `licenses` | _object_ | An object containing license information. |  |
| `accounts` | _integer_ | The number of active accounts. <br> The function returns this value in the `licenses` object. | `30` |
| `activation_code` | _string_ | The activation code for a license of the following type: <br>- 360 Monitoring<br>- koality<br>- Sitejet Commerce<br>- Sitejet Studio<br>- SocialBee<br>- WP Guardian<br>- WP Guardian (cPanel Addon)<br> The function returns this value in the `licenses` object. | `ABC123-1Q2W3E-BMW555-V5F4R3-HJKL98` |
| `activation_link` | _string_ | The activation link for a license of the following type: <br>- 360 Monitoring<br>- koality<br>- Sitejet Commerce<br>- Sitejet Studio<br>- SocialBee<br>- WP Guardian<br>- WP Guardian (cPanel Addon)<br>Note:<br>WP Guardian (cPanel Addon) licenses always return a blank string as the `activation_link` value.<br> <br> The function returns this value in the `licenses` object. | `https://app.360monitoring.com/license/activate/ABC123-1Q2W3E-BMW555-V5F4R3-HJKL98` |
| `adddate` | _integer_ | The date that the account added the license, in [Unix format](http://en.wikipedia.org/wiki/Unix_time). <br> The function returns this value in the `licenses` object. | `1591995380` |
| `addedby` | _integer_ | The ID of the account that added the license. <br> The function returns this value in the `licenses` object. | `297427` |
| `autoscale_package` | _integer_ | The projected billing package’s ID. <br> The function returns this value in the `licenses` object. | `4` |
| `distro` | _string_ | The operating system distribution’s name. <br> The function returns this value in the `licenses` object. | `AlmaLinux 8.9` |
| `envtype` | _string_ | The virtualization platform, if one exists. <br>- A distribution platform name.<br>- `""` or `null` — No virtualization platform.<br> The function returns this value in the `licenses` object. | `""` |
| `expiredon` | _integer_ | The date on which the license expired: <br>- A timestamp, in [Unix format](http://en.wikipedia.org/wiki/Unix_time).<br>- `""` or `null` — The license is active.<br> The function returns this value in the `licenses` object. | `1594587380` |
| `expirereason` | _string_ | The reason why the license expired. <br>- A string value.<br>- `""` or `null` — The license is active.<br> The function returns this value in the `licenses` object. | `No payment received` |
| `extended_lifecycle_support` | _object_ | An object containing information about the [Extended Lifecycle Support (ELS)](https://go.cpanel.net/ELS) fee. <br> The function returns this value in the `licenses` object. |  |
| `fee_factor` | _string_ | The percentage of the base license cost used to calculate the [Extended Lifecycle Support (ELS)](https://go.cpanel.net/ELS) fee: <br>- A decimal —  The percentage used to calculate the ELS fee. For example, a value of `0.2` means that the ELS fee is calculated as 20% of the base license cost. <br>- `0` —  The ELS fee is currently $0.<br>Important:<br>The ELS fee can increase over time.<br> <br> The function returns this value in the `extended_lifecycle_support` object. | `0.2` |
| `subject_to_fee` | _integer_ | Whether the license is subject to the [Extended Lifecycle Support (ELS)](https://go.cpanel.net/ELS) fee: <br>- `0` — **Not** subject to the ELS fee.<br>- `1` — Subject to the ELS fee.<br> The function returns this value in the `extended_lifecycle_support` object. | `1` |
| `external_notes` | _string_ | Additional information about the license:<br>- A string up to 64 characters.<br>- `""` or `null` — No external notes exist.<br>The function returns this value in the `license` object. | `optional` |
| `groupid` | _integer_ | The license’s group ID. <br> The function returns this value in the `licenses` object. | `0001` |
| `hostname` | _string_ | The license’s server’s hostname. <br> The function returns this value in the `licenses` object. | `example.com` |
| `host_type` | _string_ | The host type (virtual or dedicated) the license requires: <br>- `virtual`<br>- `dedicated`<br> The function returns this value in the `licenses` object. | `virtual` |
| `hosted_sites` | _integer_ | The total number of hosted sites on a Sitejet Studio license. <br> The function returns this value in the `licenses` object. | `1` |
| `ip` | _string_ | The license’s server’s IP address. <br> The function returns this value in the `licenses` object. | `192.0.2.0` |
| `ka_activated` | _Boolean_ | For 360 Monitoring, koality, or Sitejet Studio licenses, this indicates whether a license is activated.<br>- `0` — Not activated.<br>- `1` — Activated.<br>The function returns this value in the `licenses` object. | `0` |
| `keyid` | _integer_ | The ID for a 360 Monitoring, koality, or Sitejet Studio license. <br> The function returns this value in the `licenses` object. | `10669033` |
| `keynumber` | _string_ | The number for a 360 Monitoring, koality, or Sitejet Studio license. <br> The function returns this value in the `licenses` object. | `EXT.1000299.0000` |
| `licenseid` | _string_ | The license’s ID. <br> The function returns this value in the `licenses` object. | `10742947` |
| `ls_serial` | _string_ | The serial number for activating LiteSpeed. If no LiteSpeed license exists for the account, the function will return a `""` or `null` value. <br> The function returns this value in the `licenses` object. | `7oEU-TSz0-EG7v-iP/j` |
| `maxusers` | _integer_ | The maximum number of accounts that the license allows. <br> The function returns this value in the `licenses` object. | `30` |
| `os` | _string_ | The license’s server’s operating system. <br> The function returns this value in the `licenses` object. | `Mac OS X` |
| `osver` | _string_ | The operating system’s version number. <br> The function returns this value in the `licenses` object. | `10.9` |
| `package_name` | _string_ | The package’s name. <br> The function returns this value in the `licenses` object. | `Sitejet Agency` |
| `packageid` | _integer_ | The license’s package ID. <br> The function returns this value in the `licenses` object. | `761` |
| `packageqty` | _integer_ | The number Enkompass accounts that ship with the license: <br>- `1` — 500 Enkompass accounts.<br>Important:<br>This return is **deprecated**. WebPros International, LLC no longer supports Enkompass.<br> <br> The function returns this value in the `licenses` object. | `1` |
| `producttype` | _integer_ | The product type ID: <br>- `1` — cPanel & WHM<br>- `2` — Enkompass<br>- `4` — RESERVED<br>- `8` — SiteZen<br>- `16` — CloudLinux™<br>- `32` — KernelCare<br>- `64` — DNSOnly<br>- `128` — LiteSpeed Web Server<br>- `256` — Imunify360<br>- `512` — WHMCS<br>- `1024` — JetBackup<br>- `524288` — 360 Monitoring<br>- `2097152` — koality<br>- `8388608` — WP Guardian<br>- `268435456` — Sitejet Commerce<br>- `16777216` — Sitejet Studio<br>- `67108864` — WP Guardian (cPanel Addon)<br>- `1073741824` — SocialBee<br> The function returns this value in the `licenses` object. | `1` |
| `products_included` | _string_ | The total number of products you can display in the web stores you create with a Sitejet Commerce license. One of: <br>- `100`<br>- `2500`<br>- `unlimited`<br> The function returns this value in the `licenses` object. | `100` |
| `profiles` | _integer_ | The number of **additional** profiles you have added to your SocialBee license. <br>Note:<br>To see the number of profiles your SocialBee license provisions by default, use your [SocialBee confirmation email](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-socialbee-license/).<br> <br> The function returns this value in the `licenses` object. | `5` |
| `projects` | _integer_ | The total number of projects for a koality license. <br> The function returns this value in the `licenses` object. | `30` |
| `reason` | _string_ | Information about the license display operation. <br> The function returns this value in the `licenses` object. | `OK` |
| `servers` | _integer_ | The number of servers in the 360 Monitoring or WP Guardian license. <br> The function returns this value in the `licenses` object. | `1` |
| `sites` | _integer_ | The number of sites in the 360 Monitoring or WP Guardian license. <br> The function returns this value in the `licenses` object. | `20` |
| `self_hosted_sites` | _integer_ | The total number of self-hosted sites on a Sitejet license. <br> The function returns this value in the `licenses` object. | `0` |
| `status` | _integer_ | The license’s status: <br>- `1` — Active.<br>- `2` — Expired.<br>- `4` — Suspended.<br> The function returns this value in the `licenses` object. | `1` |
| `termexpires_months` | _integer_ | The time remaining until the license expires, in months. <br> The function returns this value in the `licenses` object. | `100` |
| `termexpires_unixtime` | _integer_ | The date on which the license will expire: <br>- A timestamp, in [Unix format](http://en.wikipedia.org/wiki/Unix_time).<br>- `""` or `null` — The license is active.<br> The function returns this value in the `licenses` object. | `1594587380` |
| `updateexpiretime` | _integer_ | The time at which the license will expire: <br>- A timestamp, in [Unix format](http://en.wikipedia.org/wiki/Unix_time).<br>- `N/A` — The license does not apply.<br> The function returns this value in the `licenses` object. | `1638244382` |
| `users` | _integer_ | The number of **additional** users you have added to your SocialBee license. <br>Note:<br>To see the number of users your SocialBee license provisions by default, use your [SocialBee confirmation email](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-socialbee-license/).<br> <br> The function returns this value in the `licenses` object. | `1` |
| `version` | _string_ | The product’s version number. <br>- A product version number.<br>- `null` — No product version number available.<br> The function returns this value in the `licenses` object. | `11.86.0.37` |
| `workspaces` | _integer_ | The number of **additional** [workspaces](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#workspace) you have added to your SocialBee license. <br>Note:<br>To see the number of workspaces your SocialBee license provisions by default, use your [SocialBee confirmation email](https://docs.cpanel.net/manage2/licenses/how-to-purchase-a-socialbee-license/).<br> <br> The function returns this value in the `licenses` object. | `1` |
| `wpcga_sites` | _integer_ | The number of sites for a WP Guardian (cPanel Addon) license. <br> The function returns this value in the `licenses` object. | `100` |
| `wpsites` | _integer_ | For WP Squared licenses, the current number of WordPress® sites on the licensed server. <br> The function returns this value in the `licenses` object. | `22` |
| `reason` | _string_ | Information about the operation. | `OK` |
| `status` | _Boolean_ | Whether the function succeeded: <br>- `1` — Success.<br>- `0` — Failure. | `1` |
| `version` | _float_ | Internal information that the Manage2 API uses to identify the version. | `0.7` |

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×