---
url: "https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/"
title: "cPanelLicensing PHP Class | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#main-content)

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
4. cPanelLicensing PHP Class


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/)

#### Table of Contents

[Overview](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#overview)

* * *

[Download the module](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#download-the-module)

* * *

[Basic use](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#basic-use)

* * *

[Include the cPanelLicensing class](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#include-the-cpanellicensing-class)

* * *

[Instantiate the cPanelLicensing object](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#instantiate-the-cpanellicensing-object)

* * *

[Call a function](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#call-a-function)

* * *

[Methods](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#methods)

* * *

[The set\_format method](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#the-setformat-method)

* * *

[The findKey method](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#the-findkey-method)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#overview)

* * *

[Download the module](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#download-the-module)

* * *

[Basic use](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#basic-use)

* * *

[Include the cPanelLicensing class](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#include-the-cpanellicensing-class)

* * *

[Instantiate the cPanelLicensing object](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#instantiate-the-cpanellicensing-object)

* * *

[Call a function](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#call-a-function)

* * *

[Methods](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#methods)

* * *

[The set\_format method](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#the-setformat-method)

* * *

[The findKey method](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#the-findkey-method)

* * *

## cPanelLicensing PHP Class

Last modified: _2022 July 27_

* * *

## Overview

The `cPanelLicensing` PHP class runs [Manage2 API](https://docs.cpanel.net/manage2/api) functions. You can use this to manage customer licenses from the command line or through the [Manage2](https://manage2.cpanel.net/) user interface.

Important:

- The `cPanelLicensing` PHP class requires PHP 5 with [cURL](http://curl.haxx.se/docs/manpage.html) and [SimpleXML](http://www.php.net/simplexml) support. PHP 5 enables SimpleXML support by default.
- SimpleXML transforms XML into data structures that are similar to associative arrays.
- The `cPanelLicensing` PHP class returns SimpleXML objects by default, or can [return XML, JSON, or YAML](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/#the-set-format-method).

## Download the module

To download the `cPanelLicensing` PHP class, click the _cPanel License Management API SDK_ link in the _Automation_ menu on the Manage2 [_Dashboard_](https://docs.cpanel.net/manage2/admin/the-manage2-dashboard) interface.

## Basic use

The following script uses the `cPanelLicensing` PHP class to call the Manage2 [List License Information](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information) function:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```perl<br>// Include the cPanelLicensing class.<br>include("cpl.inc.php");<br>  <br>// Instantiate the cPanelLicensing object.<br>$cpl = new cPanelLicensing($USERNAME, $PASSWORD);<br> <br>// Combine the parameters into an array.<br>$args = array("ip" => "192.0.2.0");<br>  <br>// Call the desired function with the parameters as an argument.<br>$cpl->fetchLicenses($args);<br>``` |

### Include the cPanelLicensing class

Line 2 uses [PHP’s `include()` statement](http://php.net/manual/en/function.include.php) to include and evaluate the `cPanelLicensing` class:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```perl<br>// Include the cPanelLicensing class<br>include("cpl.inc.php");<br>``` |

### Instantiate the cPanelLicensing object

Line 4 instantiates the `cPanelLicensing` object, which provides the script with access to the `cPanelLicensing` object’s functions:

|     |     |
| --- | --- |
| ```<br>4<br>5<br>``` | ```perl<br>// Instantiate the cPanelLicensing object.<br>$cpl = new cPanelLicensing(username, password);<br>``` |

Note:

Include the following variables when you instantiate the `cPanelLicensing` object:

- `username` — The user’s username.
- `password` — The user’s password.

### Call a function

Line 8 defines an array of the function’s input parameters. Line 11 calls the Manage2 [List License Information](https://docs.cpanel.net/manage2/api/manage2-api-list-license-information) function and passes the array as an argument:

|     |     |
| --- | --- |
| ```<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```perl<br>// Combine the function's parameters into an array.<br>$args = array("ip" => "192.0.2.0");<br>  <br>// Call the Fetch License function.<br>$cpl->fetchLicenses($args); <br>``` |

You can also perform this action in one step:

|     |     |
| --- | --- |
| ```<br> 7<br> 8<br> 9<br>10<br>``` | ```perl<br>// Call the Fetch License function with the input parameters directly.<br>$cpl->fetchLicenses( array(<br>    "ip" => "192.0.2.0"<br>);<br>``` |

## Methods

The `cPanelLicensing` PHP class includes the following methods:

### The set\_format method

Use the `set_format` method to choose the PHP class’s `output` type. By default, the class returns a SimpleXML object.

```perl
$cpl->set_format("json");
```

The `set_format` method accepts a single parameter with one of the following string values:

- `simplexml` — Return [SimpleXML](http://www.php.net/simplexml).
- `xml` — Return XML.
- `json` — Return JSON.
- `yaml` — Return YAML.

### The findKey method

Note:

This method **only** operates in SimpleXML mode.

Use the `findKey` method to retrieve a group or package name.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```perl<br>$packages = $cpl->fetchPackages();<br>$packageid = $cpl->findKey("ONE-YEAR", $packages);<br>``` |

This function accepts two parameters: `search` and `package` SimpleXML objects.

#### Additional Documentation

* * *

- [Guide to the Manage2 API](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/)
- [Manage2 Return Data](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/)
- [cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/)
- [Manage2 Authentication Methods](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/)
- [FastUpdate Cache System FAQ](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×