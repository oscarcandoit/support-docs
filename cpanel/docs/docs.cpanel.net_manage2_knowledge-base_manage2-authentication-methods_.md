---
url: "https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/"
title: "Manage2 Authentication Methods | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/#main-content)

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
4. Manage2 Authentication Methods


[manage2](https://docs.cpanel.net/tags/manage2/) [m2api](https://docs.cpanel.net/tags/m2api/)

#### Table of Contents

[Overview](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/#overview)

* * *

[Authentication methods](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/#authentication-methods)

* * *

[Basic authentication](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/#basic-authentication)

* * *

[Key-based authentication](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/#key-based-authentication)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/#overview)

* * *

[Authentication methods](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/#authentication-methods)

* * *

[Basic authentication](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/#basic-authentication)

* * *

[Key-based authentication](https://docs.cpanel.net/manage2/knowledge-base/manage2-authentication-methods/#key-based-authentication)

* * *

## Manage2 Authentication Methods

Last modified: _2022 July 27_

* * *

## Overview

The [Manage2 API](https://docs.cpanel.net/manage2/api) supports HTTP or key-based authentication. Manage2’s client libraries use basic authentication over SSL by default. This method encodes the Manage2 username and password inside the HTTP request headers.

## Authentication methods

The Manage2 API supports the following authentication methods:

### Basic authentication

Basic authentication encodes the Manage2 username and password inside the HTTP request headers. You can authenticate with the following methods:

#### HTTP

When you call a Manage2 API script in a web browser, a dialog box will appear below the URL:

![The Manage2 Sign in dialog box.](https://docs.cpanel.net/img/manage2-sign-in.png)

Enter the Manage2 username and password in the appropriate text boxes.

#### cURL

Use the `curl -u` command to authenticate user accounts when you call the function via the command line. For example:

```bash
curl -u username@example.com:123456luggage https://manage2.cpanel.net/XMLgroupInfo.cgi
```

#### Perl

Use the [`cPanelLicensing` Perl module](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module) to authenticate to the user account. For example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```perl<br>use cPanelLicensing;<br>my $cpl = cPanelLicensing->new(user => "username\@example.com", pass => "123456luggage");<br>$cpl->fetchGroups();<br>``` |

#### PHP

Use the `require` PHP class with the [`cPanelLicensing` PHP Class](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class) to authenticate to the user account. For example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```php<br>require "cpl.inc.php";<br>$cpl = new cPanelLicensing("username\@example.com", "123456luggage");<br>$cpl->fetchGroups();<br>``` |

### Key-based authentication

Key-based authentication grants access to a limited subset of the account’s abilities without the account’s username and password. For security, the system limits keys to one IP address. You must register keys on the computer that runs the scripts.

Note:

- It is possible to associate multiple keys to a single IP address.

- You **must** associate a key with an IP address before using it.


#### Register a key

To register a key, perform the following steps:

1. Use the Manage2 API [Add a Pickup Phrase](https://docs.cpanel.net/manage2/api/manage2-api-add-a-pickup-phrase) function to add a pickup passphrase.
2. Call the Manage2 API [Register Key-Based Authentication](https://docs.cpanel.net/manage2/api/manage2-api-register-key-based-authentication) function. This function returns a 20 character key to use for subsequent API calls.

On subsequent API calls, pass this key as the `apikey` parameter’s value. For example:

```bash
curl 'https://manage2.cpanel.net/XMLlicenseInfo.cgi?output=json&apikey=aFj1fKnYzW5lbD5KXFeVtLsM'
```

Note:

If you use key-based authentication, the Manage2 API provides a [Cross-Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/) header.

#### Additional Documentation

* * *

- [Guide to the Manage2 API](https://docs.cpanel.net/manage2/knowledge-base/guide-to-the-manage2-api/)
- [Manage2 Return Data](https://docs.cpanel.net/manage2/knowledge-base/manage2-return-data/)
- [cPanelLicensing Perl Module](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-perl-module/)
- [cPanelLicensing PHP Class](https://docs.cpanel.net/manage2/knowledge-base/cpanellicensing-php-class/)
- [FastUpdate Cache System FAQ](https://docs.cpanel.net/manage2/knowledge-base/fastupdate-cache-system-faq/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×