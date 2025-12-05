---
url: "https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/"
title: "Guide to the Manage2 API | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#main-content)

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
4. Guide to the Manage2 API


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/)

#### Table of Contents

[Overview](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#overview)

* * *

[Basic usage](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#basic-usage)

* * *

[Browser-based calls](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#browser-based-calls)

* * *

[The cPanelLicensing PHP class](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#the-cpanellicensing-php-class)

* * *

[The cPanelLicensing Perl module](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#the-cpanellicensing-perl-module)

* * *

[cURL](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#curl)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#overview)

* * *

[Basic usage](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#basic-usage)

* * *

[Browser-based calls](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#browser-based-calls)

* * *

[The cPanelLicensing PHP class](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#the-cpanellicensing-php-class)

* * *

[The cPanelLicensing Perl module](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#the-cpanellicensing-perl-module)

* * *

[cURL](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/#curl)

* * *

## Guide to the Manage2 API

Last modified: _2022 July 27_

* * *

## Overview

The Manage2 API automates cPanel license management procedures. For example, you can use the Manage2 API to [reactivate your cPanel licenses](https://docs.cpanel.net/manage2/api/manage2-api-reactivate-expired-licenses).

Important:

You **must** authenticate with the proper permissions to call a function. Add the IP address from which to call the function to the Manage2 profile in Manage2’s [_Add an Access IP_](https://docs.cpanel.net/manage2/security/add-an-access-ip) interface ( _Manage2 » Dashboard » Security » Add an Access IP_).

For a list of available Manage2 API functions, read our [Manage2 API documentation](https://docs.cpanel.net/manage2/api).

#### Manage2 API basic information

- **Languages** — PHP, Perl
- **Methods** — GET, POST
- **Return Formats** — XML, JSON, YAML

## Basic usage

You can access Manage2’s API functions with the following methods:

### Browser-based calls

You can access Manage2 API functions directly from any web browser when you call a function from a Manage2 session. For example:

```bash
https://manage2.cpanel.net/XMLlicenseReActivate.cgi?output=json&liscid=12345
```

This example uses the following variables:

| Variable | Description | Example |
| --- | --- | --- |
| `function` | The Manage2 API function. | `XMLlicenseReActivate` |
| `output` | Note:<br>This variable is optional.<br> <br> The template for the [return data](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data), in `output=style` format: <br>- `json` — JSON output.<br>- `yaml` — YAML output.<br> The Manage2 API returns XML output by default. | `output=json` |
| `parameter` | The parameters passed to the function, in `parameter=value` format. | `liscid` |
| `value` | The parameter’s value. | `12345` |

#### Browser session URL call parts

Browser-based Manage2 API calls resemble the following example:

![A diagram of a Manage2 browser session URL call](https://docs.cpanel.net/img/m2-browser-session-url-calls.png)

Browser-based Manage2 API calls consist of the following basic parts:

| Part | Description |
| --- | --- |
| _Server_ | The HTTP address of the Manage2 account. |
| _Function_ | The Manage2 API function name, followed by a question mark (`?`) character. |
| _Output_ | The function’s output style. For more information, read our [Manage2 Return Data](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data) documentation. |
| _Parameters and values_ | The function’s parameters and their values. |

### The cPanelLicensing PHP class

You can access Manage2 API functions via the [`cPanelLicensing` PHP class](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class):

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```php<br><?php<br>include("cpl.inc.php");<br>$cpl = new cPanelLicensing("username@example.com", "123456luggage");<br>$license = $cpl->reactivateLicense(array(<br>    "liscd"  => "12345"<br>    )<br>);<br>?><br>``` |

Important:

You **must** pass the username (for example, `username@example.com`) and password (for example, `123456luggage`) when you instantiate the PHP class.

This example uses the following variables:

| Variable | Description | Example |
| --- | --- | --- |
| `function` | The Manage2 API function name. | `reactivateLicense` |
| `parameter` | The parameters that you pass to the function, in `parameter=value` format. | `"liscid"` |
| `value` | The parameter’s value. | `"12346"` |

### The cPanelLicensing Perl module

You can access Manage2 API functions via the [`cPanelLicensing` Perl module](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module):

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```perl<br>use cPanelLicensing;<br>my $cpl = new cPanelLicensing('user' => "username\@example.com", 'pass' => "123456luggage");<br>my $licenseid = $licenseManager->reactivateLicense(<br>    'liscid' => '12345'<br>);<br>``` |

Important:

You **must** pass the username (for example, `username@example.com`) and password (for example, `123456luggage`) to the module when you instantiate the Perl class.

This example uses the following variables:

| Variable | Description | Example |
| --- | --- | --- |
| `function` | The Manage2 API function name. | `reactivateLicense` |
| `parameter` | The parameters that you pass to the function, in `parameter=value` format. | `'liscid'` |
| `value` | The parameter’s value. | `'12345'` |

### cURL

You can access Manage2 API functions via the [cURL](https://en.wikipedia.org/wiki/CURL) command line tool:

```bash
curl 'https://manage2.cpanel.net/XMLlicenseReActivate.cgi?output=json&liscid=12345'
```

You can also include the function and variables in separate strings, separated by the data (`-d`) flag. For example:

```bash
curl 'https://manage2.cpanel.net/XMLlicenseReActivate.cgi' -d 'output=json&liscid=12345'
```

Important:

The system **ignores** any variables that you pass in the string **before** the `-d` flag. For example:

```bash
curl 'https://manage2.cpanel.net/XMLlicenseReActivate.cgi?output=json' -d 'liscid=12345'
```

If you attempt to call the function in this format, the system ignores the `output=json` variable.

#### Additional Documentation

* * *

- [Manage2 Return Data](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/)
- [cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/)
- [cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/)
- [Manage2 Authentication Methods](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/)
- [FastUpdate Cache System FAQ](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×