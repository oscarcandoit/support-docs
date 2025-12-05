---
url: "https://docs.cpanel.net/cpanel/software/optimize-website/"
title: "Optimize Website | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/software/optimize-website/#main-content)

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
3. [Software](https://docs.cpanel.net/cpanel/software/)
4. Optimize Website


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [htaccess](https://docs.cpanel.net/tags/htaccess/) [mime](https://docs.cpanel.net/tags/mime/) [files](https://docs.cpanel.net/tags/files/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/software/optimize-website/#overview)

* * *

[Manage compression](https://docs.cpanel.net/cpanel/software/optimize-website/#manage-compression)

* * *

[Additional information](https://docs.cpanel.net/cpanel/software/optimize-website/#additional-information)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/software/optimize-website/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/software/optimize-website/#overview)

* * *

[Manage compression](https://docs.cpanel.net/cpanel/software/optimize-website/#manage-compression)

* * *

[Additional information](https://docs.cpanel.net/cpanel/software/optimize-website/#additional-information)

* * *

## Optimize Website

![](https://docs.cpanel.net/img/cpanel-icons/optimize_website.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/software/optimize-website/)

Last modified: _2024 May 29_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to configure your server to automatically
compress specified types of content when visitors access that content.

Note:

Your system administrator **must** enable the `mod_deflate` Apache module for this interface to appear in cPanel.

## Manage compression

To disable compression of your website’s content, perform the following steps:

1. Select _Disabled_.
2. Click _Update Settings_.

To compress all of your website’s content, perform the following steps:

1. Select _Compress **All** Content_.
2. Click _Update Settings_.

To specify a list of types of content to compress, perform the following steps:

1. Select the _Compress the specified MIME types_ option.

2. In the _MIME Types_ text box, enter a space-separated list of the types of content that you wish to compress (for example, `text/html text/plain text/xml`).







Note:





- Image file formats (for example, `.jpg` and `.png`) already compress data. Do **not** include any image file formats in the list.
- Apache **will** compress PHP content if you enable the `zlib.output_compression` setting in cPanel’s [_MultiPHP INI Editor_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/) interface ( _cPanel » Home » Software » MultiPHP INI Editor_).
- For more information, view [Wikipedia’s list of internet media types](https://en.wikipedia.org/wiki/Internet_media_type).

3. Click _Update Settings_.


Note:

cPanel saves your settings to a `.htaccess` file in your home directory. Your system administrator customizes these settings with the Apache [FileMatch directive](http://httpd.apache.org/docs/2.2/mod/core.html#filesmatch).

## Additional information

For more information about the `mod_deflate` module, which handles website content compression, read the documentation for your server’s version of Apache:

Note:

The _Stats_ sidebar in cPanel’s [_Home_](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/) interface displays your server’s version of Apache.

- [Apache 2.0 web server documentation for mod\_deflate](http://httpd.apache.org/docs/2.0/mod/mod_deflate.html).
- [Apache 2.2 web server documentation for mod\_deflate](http://httpd.apache.org/docs/2.2/mod/mod_deflate.html).
- [Apache 2.4 web server documentation for mod\_deflate](http://httpd.apache.org/docs/2.4/mod/mod_deflate.html).

#### Additional Documentation

* * *

- [Application Manager](https://docs.cpanel.net/cpanel/software/application-manager/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [File Manager](https://docs.cpanel.net/cpanel/files/file-manager/)
- [HTML Editor (Beta)](https://docs.cpanel.net/cpanel/files/html-editor/)
- [MIME Types](https://docs.cpanel.net/cpanel/advanced/mime-types/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×

![Cookiebot session tracker icon loaded](https://imgsct.cookiebot.com/1.gif?dgi=da52fc49-8e48-42b7-9ad3-c219404f6f92)