---
url: "https://docs.cpanel.net/whm/account-functions/web-template-editor/"
title: "Web Template Editor | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-functions/web-template-editor/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Account Functions](https://docs.cpanel.net/whm/account-functions/)
4. Web Template Editor


[branding](https://docs.cpanel.net/tags/branding/) [files](https://docs.cpanel.net/tags/files/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-functions/web-template-editor/#overview)

* * *

[Placeholder pages](https://docs.cpanel.net/whm/account-functions/web-template-editor/#placeholder-pages)

* * *

[Suspended accounts](https://docs.cpanel.net/whm/account-functions/web-template-editor/#suspended-accounts)

* * *

[Edit a template file](https://docs.cpanel.net/whm/account-functions/web-template-editor/#edit-a-template-file)

* * *

[Upload a template file](https://docs.cpanel.net/whm/account-functions/web-template-editor/#upload-a-template-file)

* * *

[Template types](https://docs.cpanel.net/whm/account-functions/web-template-editor/#template-types)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-functions/web-template-editor/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-functions/web-template-editor/#overview)

* * *

[Placeholder pages](https://docs.cpanel.net/whm/account-functions/web-template-editor/#placeholder-pages)

* * *

[Suspended accounts](https://docs.cpanel.net/whm/account-functions/web-template-editor/#suspended-accounts)

* * *

[Edit a template file](https://docs.cpanel.net/whm/account-functions/web-template-editor/#edit-a-template-file)

* * *

[Upload a template file](https://docs.cpanel.net/whm/account-functions/web-template-editor/#upload-a-template-file)

* * *

[Template types](https://docs.cpanel.net/whm/account-functions/web-template-editor/#template-types)

* * *

## Web Template Editor

![](https://docs.cpanel.net/img/whm-icons/web_template_editor.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/account-functions/web-template-editor/)

Last modified: _2025 September 3_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _Web Template Editor_ interface allows you to create templates for placeholder web pages. Visitors see these pages when they navigate to a site on your server that meets one of the following conditions:

- The domain’s owner did **not** configure the site, or no owner exists for the site on your server.
- The domain points to an incorrect IP address.
- The site moved.
- A connection or firewall problem exists on the site.
- The domain’s owner suspended the site.

### Placeholder pages

Note:

If a _cPanel and Apache_ placeholder page appears when you navigate to a domain, you **must** properly configure VirtualHost in the Apache configuration file.

The placeholder pages that you create for a specific account only appear for that account’s sites. For example, placeholder pages that you create for the `root` user do **not** appear for sites that reseller accounts own.

When you configure your template, you **must** perform the following actions:

- Store the images for these templates in the `/usr/local/cpanel/img-sys/` directory. When you link to the images, provide links relative to the `/usr/local/cpanel/` directory (for example, `/img-sys/myimage.jpg`).
- When you link to images or files outside of the `img-sys` directory, use the `[% data.protocol %]` tag as a substitute for the `http` or `https` protocol.
- If you redirect a domain, visitors will **not** see placeholder pages. To ensure that visitors see these pages, you **must** copy the finished pages from the `/var/cpanel/webtemplates/root/english/` directory to the `/home/username/public_html` directory of the destination domain.

### Suspended accounts

For suspended reseller accounts, either of the following files may contain the reseller’s web templates:

- `/var/cpanel/webtemplates/reseller/english/suspended.tmpl`
- `/home/user/public_html/suspended.page`


Note:





In this file path, `user` represents the account’s username.


We **strongly** recommend that you **only** use this interface to manage and modify web templates.

## Edit a template file

To modify a template file from within the WHM interface, perform the following steps:

1. Select the tab that corresponds to the template to edit. For more information, read the [Template types](https://docs.cpanel.net/whm/account-functions/web-template-editor/#template-types) section.

2. Make the desired changes. To view your changes before you finish, click _Preview_.

3. Click _Save_.
   - To revert to the most recent version of the template, click _Revert_.
   - To discard your changes and revert to the default template, click _Revert to Default_.

### Upload a template file

To upload a custom website template, perform the following steps:

1. Select the tab that corresponds to the template that you wish to edit. For more information, read the [Template types](https://docs.cpanel.net/whm/account-functions/web-template-editor/#template-types) section.
2. Under _Upload Your Own Template_, click _Choose File_.
3. Browse to the template file on your local computer.
4. Click _Upload Template_.

### Template types

You can select from the following templates:

#### Default Website Page

This template uses the `/var/cpanel/webtemplates/root/english/default.tmpl` file. It displays contact information from the _Public Contact Information_ tab in WHM’s [_Customization_](https://docs.cpanel.net/whm/cpanel/customization/) interface ( _WHM » Home » cPanel » Customization_). If the hosting provider has **not** entered that information, the template displays the `webmaster` email address of the account.

Note:

If you do not wish to display **any** contact information, comment out or remove the `contact-info` section.

The default template appears if the domain’s DNS points to an IP address on your server, but none of your cPanel accounts own that domain.

Note:

The following manually-created scripts override the default website template in EasyApache 4:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>/var/www/html/index.php<br>/var/www/html/index.cgi<br>/var/www/html/index.pl<br>``` |

You can also place files in the skeleton directory to load a default page for new accounts. For more information, read our [Skeleton Directory](https://docs.cpanel.net/whm/account-functions/skeleton-directory/) documentation.

#### Account Move

This template appears if the site moved. It uses the `/var/cpanel/webtemplates/root/english/moving.tmpl` file.

#### Connection Selection

This template appears if a connection or firewall problem exists on the site. It uses the `/var/cpanel/webtemplates/root/english/redirect.tmpl` file.

In addition to the `[% data.protocol %]` tag, use the following tags to configure this template:

- `[% data.ishttps %]` — Inserts `1` if the visitor accessed the site at a secure port (for example, `2083`, `2087`, or `2096`), or `0` if the visitor did not.
- `[% data.port %]` — Inserts the cPanel port number.
- `[% data.js_safe_redirecturl %]` — Inserts the URL of the domain’s cPanel interface.
- `[% data.js_safe_proxyurl %]` — Inserts the URL of the cPanel proxy domain.

#### Account Suspended

This template appears if the account’s owner or the root user suspended the site. It uses the `/var/cpanel/webtemplates/root/english/suspended.tmpl` file.

Note:

The default version of this template displays contact information from the _Public Contact Information_ tab in WHM’s [_Customization_](https://docs.cpanel.net/whm/cpanel/customization/) interface ( _WHM » Home » cPanel » Customization_). If the hosting provider has not entered that information, the template displays the `webmaster` email address of the account. If you do not wish to display **any** contact information, comment out or remove the `reason-text` content division section.

#### Additional Documentation

* * *

- [Change Site's IP Address](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [Customization](https://docs.cpanel.net/whm/cpanel/customization/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [Skeleton Directory](https://docs.cpanel.net/whm/account-functions/skeleton-directory/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×