---
url: "https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/"
title: "cPanelLicensing Perl Module | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/#main-content)

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
4. cPanelLicensing Perl Module


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/)

#### Table of Contents

[Overview](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/#overview)

* * *

[Requirements](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/#requirements)

* * *

[Download the module](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/#download-the-module)

* * *

[Basic use](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/#basic-use)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/#overview)

* * *

[Requirements](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/#requirements)

* * *

[Download the module](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/#download-the-module)

* * *

[Basic use](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/#basic-use)

* * *

## cPanelLicensing Perl Module

Last modified: _2022 July 27_

* * *

## Overview

The `cPanelLicensing` Perl module runs [Manage2 API functions](https://docs.cpanel.net/manage2/api). Use the `cPanelLicensing` Perl module to manage customer licenses from the command line or through the [Manage2](https://manage2.cpanel.net/) user interface.

Important:

You **must** run this module on a \*nix-based system.

## Requirements

To install this module, the following features must be available on the server:

- [Perl](https://www.perl.org/) 5.6.2 or higher.
- [OpenSSL](https://www.openssl.org/) and its development libraries.

In addition, one of the following following Perl modules must exist on the server:

- `XML::Simple`
- `JSON::Syck`
- `YAML::Syck`
- `YAML`
- `JSON`
- `JSON::XS`

## Download the module

To download the `cPanelLicensing` Perl module, click the _cPanel License Management API SDK_ link in the _Automation_ menu on the Manage2 [_Dashboard_](https://docs.cpanel.net/manage2/admin/the-manage2-dashboard) interface.

## Basic use

When a script uses this module, the script must create an instance of the module with the following parameters:

- `user` — The account username.
- `pass` — The account password.

For example, the following code creates the initial instance of the `cPanelLicensing` Perl module:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>``` | ```perl<br>use cPanelLicensing;<br>my $licenseManager =  cPanelLicensing->new(<br>     user => '$USERNAME',<br>     pass => '$PASSWORD'<br>);<br>``` |

#### Additional Documentation

* * *

- [Guide to the Manage2 API](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/)
- [Manage2 Return Data](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/)
- [cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/)
- [Manage2 Authentication Methods](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/)
- [FastUpdate Cache System FAQ](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×