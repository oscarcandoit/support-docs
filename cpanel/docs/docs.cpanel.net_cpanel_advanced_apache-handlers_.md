---
url: "https://docs.cpanel.net/cpanel/advanced/apache-handlers/"
title: "Apache Handlers | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/advanced/apache-handlers/#main-content)

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
3. [Advanced](https://docs.cpanel.net/cpanel/advanced/)
4. Apache Handlers


[apache](https://docs.cpanel.net/tags/apache/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [apachehandlers](https://docs.cpanel.net/tags/apachehandlers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/advanced/apache-handlers/#overview)

* * *

[Create an Apache Handler](https://docs.cpanel.net/cpanel/advanced/apache-handlers/#create-an-apache-handler)

* * *

[Remove an Apache Handler](https://docs.cpanel.net/cpanel/advanced/apache-handlers/#remove-an-apache-handler)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/advanced/apache-handlers/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/advanced/apache-handlers/#overview)

* * *

[Create an Apache Handler](https://docs.cpanel.net/cpanel/advanced/apache-handlers/#create-an-apache-handler)

* * *

[Remove an Apache Handler](https://docs.cpanel.net/cpanel/advanced/apache-handlers/#remove-an-apache-handler)

* * *

## Apache Handlers

![](https://docs.cpanel.net/img/cpanel-icons/apache_handlers.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)

Last modified: _2024 May 6_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Apache handlers control how your site’s Apache web server software manages certain file types and file extensions. Apache can handle CGI scripts and server-parsed files. The file extensions for these files include `.cgi`, `.pl`, `.plx`, `.ppl`, `.perl`, and `.shtml`.

You can configure Apache to use an existing handler to handle a new file type. To do this, manually add the handler and extension in this interface.

## Create an Apache Handler

To add an Apache handler, perform the following steps:

1. Enter the handler name in the _Handler_ text box. cPanel includes the following built-in handlers:

   - `default-handler` — Sends the file and uses Apache’s default handler for static content.
   - `send-as-is` — Sends the file with HTTP headers intact.
   - `cgi-script` — Handles the file as a CGI script.
   - `imap-file` — Parses the file as an `imagemap` rule file.

     - For more information, read [Apache’s documentation](http://httpd.apache.org/docs/2.2/mod/mod_imagemap.html).
   - `server-info` — Retrieves the server’s configuration information.
   - `server-parsed` — Parses the file for server-side includes.
   - `server-status` — Retrieves the server’s status report.
   - `type-map` — Parses the file as a type map file.

     - For more information, read [Apache’s documentation](http://httpd.apache.org/docs/2.2/mod/mod_negotiation.html).
2. Enter the file extension in the _Extension(s)_ text box.

   - A file extension consists of the letters after the dot (`.`) in a file name (for example, `filename.fileextension`).
   - Space-separate multiple extensions (for example, `.cgi``.pl``.ppl`).
3. Click _Add_.

Note:

This interface does **not** allow you to create custom Apache handlers.

## Remove an Apache Handler

To remove a user-defined handler, perform the following steps:

1. Click _Delete_ under the _Remove_ heading for the appropriate handler in the _User Defined Apache Handlers_ table.
2. Click _Yes_.

Note:

You **cannot** remove the file extensions that Apache automatically handles.

#### Additional Documentation

* * *

- [API Shell for cPanel](https://docs.cpanel.net/cpanel/advanced/api-shell-for-cpanel/)
- [Cron Jobs](https://docs.cpanel.net/cpanel/advanced/cron-jobs/)
- [Error Pages](https://docs.cpanel.net/cpanel/advanced/error-pages/)
- [Errors](https://docs.cpanel.net/cpanel/metrics/errors/)
- [Indexes](https://docs.cpanel.net/cpanel/advanced/indexes/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×