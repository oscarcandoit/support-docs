---
url: "https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/"
title: "Manage2 Return Data | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#main-content)

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
3. [Knowledge Base](https://docs.cpanel.net/manage2/knowledge-base/)
4. Manage2 Return Data


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/)

#### Table of Contents

[Overview](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#overview)

* * *

[Basic return data](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#basic-return-data)

* * *

[JSON output](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#json-output)

* * *

[XML output](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#xml-output)

* * *

[YAML output](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#yaml-output)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#overview)

* * *

[Basic return data](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#basic-return-data)

* * *

[JSON output](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#json-output)

* * *

[XML output](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#xml-output)

* * *

[YAML output](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#yaml-output)

* * *

## Manage2 Return Data

Last modified: _2022 July 27_

* * *

## Overview

By default, the [Manage2 API](https://docs.cpanel.net/manage2/api) outputs data in [Extensible Markup Language (XML)](http://www.w3.org/TR/REC-xml/). To change a call’s output, specify the output variable when you call the function. Manage2 API functions return data in two additional formats:

- [JavaScript Object Notation (JSON)](http://json.org/).
- [Yet Another Markup Language (YAML)](http://yaml.org/).

Note:

URL arguments are **not** ordered. You can specify the `output` variable at any point in the function call.

## Basic return data

The Manage2 API returns data in [JSON](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#json-output), [XML](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#xml-output), and [YAML](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/#yaml-output) format. The examples below display each output format with the Manage2 API [List Package Information](https://docs.cpanel.net/manage2/api/manage2-api-list-package-information) function:

### JSON output

To view a Manage2 API function’s output data in JSON format, append `?output=json` to the URL:

```bash
https://server.example.com/XMLpackageInfo.cgi?output=json
```

The output will resemble the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>``` | ```json<br>{<br>   "packages":{<br>      "P0003":"RESELLER-INTERNAL-VPS",<br>      "P0005":"ONE-YEAR",<br>      "P0002":"RESELLER-INTERNAL",<br>      "P0004":"THREE-YEAR",<br>      "P0006":"TWO-YEAR",<br>      "P0001":"ONE TIME FEE"<br>   },<br>   "status":1,<br>   "version":0.3,<br>   "reason":"OK"<br>}<br>``` |

### XML output

By default, the Manage2 API returns output in XML. To view the output of the API function in XML, call the function **without** the `output` variable:

```bash
https://server.example.com/XMLpackageInfo.cgi
```

The output will resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```xml<br><XMLpackageInfo reason="OK" status="1" version="0.3"><br>     <packages P0001="ONE TIME FEE" P0002="RESELLER-INTERNAL" P0003="RESELLER-INTERNAL-VPS" P0004="THREE-YEAR" P0005="ONE-YEAR" P0006="TWO-YEAR"/><br></XMLpackageInfo><br>``` |

### YAML output

To view a Manage2 API function’s output data in YAML format, append `?output=yaml` to the end of the URL:

```bash
https://server.example.com/XMLpackageInfo.cgi?output=yaml
```

The output will resemble the following example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```yaml<br>---<br>packages:<br>  P0001: ONE TIME FEE<br>  P0002: RESELLER-INTERNAL<br>  P0003: RESELLER-INTERNAL-VPS<br>  P0004: THREE-YEAR<br>  P0005: ONE-YEAR<br>  P0006: TWO-YEAR<br>reason: OK<br>status: 1<br>version: 0.3<br>``` |

#### Additional Documentation

* * *

- [Guide to the Manage2 API](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/)
- [cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/)
- [cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/)
- [Manage2 Authentication Methods](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/)
- [FastUpdate Cache System FAQ](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×