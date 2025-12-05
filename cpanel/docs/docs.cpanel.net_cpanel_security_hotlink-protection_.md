---
url: "https://docs.cpanel.net/cpanel/security/hotlink-protection/"
title: "Hotlink Protection | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/security/hotlink-protection/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Security](https://docs.cpanel.net/cpanel/security/)
4. Hotlink Protection


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [files](https://docs.cpanel.net/tags/files/) [bandwidth](https://docs.cpanel.net/tags/bandwidth/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/security/hotlink-protection/#overview)

* * *

[Enable hotlink protection](https://docs.cpanel.net/cpanel/security/hotlink-protection/#enable-hotlink-protection)

* * *

[Disable hotlink protection](https://docs.cpanel.net/cpanel/security/hotlink-protection/#disable-hotlink-protection)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/security/hotlink-protection/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/security/hotlink-protection/#overview)

* * *

[Enable hotlink protection](https://docs.cpanel.net/cpanel/security/hotlink-protection/#enable-hotlink-protection)

* * *

[Disable hotlink protection](https://docs.cpanel.net/cpanel/security/hotlink-protection/#disable-hotlink-protection)

* * *

## Hotlink Protection

![](https://docs.cpanel.net/img/cpanel-icons/hotlink_protection.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/security/hotlink-protection/)

Last modified: _2025 June 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

A hotlink occurs when someone embeds content from your site in another site and uses your bandwidth to serve the files. You can use this interface to prevent this issue.

Note:

When you disable hotlinks, make certain that you allow hotlinks for any necessary domains. For example, your website’s subdomains and the URL that you use to access your cPanel account.

## Enable hotlink protection

To enable hotlink protection, perform the following steps:

1. Click _Enable_. A new interface will open and display the _Allowed referrers_ and _Protected extension_ lists.
2. Click _Go back_.
3. To allow specific sites to hotlink to your site, add their URLs in the _URLs to allow access_ menu.
4. To block direct access to files of specific types, add those file extensions to the _Block direct access for the following extensions_ text box.

   - For example, to block all `.jpg` images, add `.jpg` to the _Block direct access for the following extensions_ text box.
   - When you block these file types, others **cannot** hotlink to those types of files from your website regardless of any other settings.
5. To allow visitors access to specific content through the URL, select the _Allow direct requests_ checkbox. For example, if you enable this setting, a visitor could enter `http://www.example.com/folder/example.jpg` as a URL to access the `example.jpg` file.
6. To redirect requests for certain content, enter the URL to which you want to redirect your visitor in the _Redirect the request to the following URL_ text box.
7. Click _Submit_.

## Disable hotlink protection

To disable hotlink protection, click _Disable_.

Note:

When you click _Disable_, the system deletes the entries in the _List the URLs to which you wish to allow access_ list. We **strongly** recommend that you save the list locally before you disable hotlink protection.

#### Additional Documentation

* * *

- [Bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [File Manager](https://docs.cpanel.net/cpanel/files/file-manager/)
- [HTML Editor (Beta)](https://docs.cpanel.net/cpanel/files/html-editor/)
- [Leech Protection](https://docs.cpanel.net/cpanel/security/leech-protection/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×