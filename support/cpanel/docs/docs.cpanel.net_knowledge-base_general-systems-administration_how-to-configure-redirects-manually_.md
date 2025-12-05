---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/"
title: "How to Configure Redirects Manually | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. How to Configure Redirects Manually


[domains](https://docs.cpanel.net/tags/domains/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#overview)

* * *

[Why you might need to set up a redirect manually](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#why-you-might-need-to-set-up-a-redirect-manually)

* * *

[Edit your .htaccess file through the File Manager interface](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#edit-your-htaccess-file-through-the-file-manager-interface)

* * *

[Examples](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#examples)

* * *

[301 Permanent redirects](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#301-permanent-redirects)

* * *

[302 Temporary redirects](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#302-temporary-redirects)

* * *

[Redirect Drupal](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#redirect-drupal)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#overview)

* * *

[Why you might need to set up a redirect manually](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#why-you-might-need-to-set-up-a-redirect-manually)

* * *

[Edit your .htaccess file through the File Manager interface](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#edit-your-htaccess-file-through-the-file-manager-interface)

* * *

[Examples](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#examples)

* * *

[301 Permanent redirects](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#301-permanent-redirects)

* * *

[302 Temporary redirects](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#302-temporary-redirects)

* * *

[Redirect Drupal](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-redirects-manually/#redirect-drupal)

* * *

## How to Configure Redirects Manually

Last modified: _2025 July 23_

* * *

## Overview

This document explains how to configure a [redirect](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#redirect) manually. A redirect automatically sends users from one website to another.

While you can usually use cPanel’s [_Redirects_](https://docs.cpanel.net/cpanel/domains/redirects) interface ( _cPanel » Home » Domains » Redirects_) to create your redirect, some third-party applications require you to configure your `.htaccess` file manually.

## Why you might need to set up a redirect manually

When you add a redirect with the cPanel [_Redirects_](https://docs.cpanel.net/cpanel/domains/redirects) interface ( _cPanel » Home » Domains » Redirects_), the system places redirect rules at the **bottom** of the `.htaccess` file. Some third-party applications will ignore your rules and will **only** read the rules and configurations in their section of the `.htaccess` file\].

Additionally, redirects added by a third-party application or content management system, such as WordPress®, may not function properly.

When this happens, you may need to configure your redirects manually.

## Edit your .htaccess file through the File Manager interface

To edit your `.htaccess` file, perform the following steps:

1. Navigate to cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_) interface.
2. In the top navigation bar, click _Settings_. The _Preferences_ interface will open.
3. Select _Show Hidden Files (dotfiles)_.
4. Click _Save_. The _Preferences_ interface will close.

Your `.htaccess` file will now appear in the `public_html` folder.

To learn more about actions you can perform in cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_), including editing your files, read our [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/#other-item-actions) documentation.

## Examples

Use the following examples to configure your redirects manually in your `.htaccess` file.

### 301 Permanent redirects

The following is a permanent redirect of an entire site from its original location to example.com:

```perl
Redirect 301 / http://example.com/
```

The following is a permanent redirect of a page on example.com to a different page on example.com:

```perl
Redirect 301 /original.html http://www.example.com/new.html
```

The following is a permanent redirect of an entire directory on example.com to a different directory on example.com:

```perl
Redirect 301 /old-directory http://www.example.com/new-directory
```

### 302 Temporary redirects

The following is a temporary redirect of an entire site from its original location to example.com:

```perl
Redirect 302 / http://example.com/
```

The following is a temporary redirect of a page on example.com to a different page on example.com:

```perl
Redirect 302 /original.html http://www.example.com/new.html
```

The following is a temporary redirect of an entire directory on example.com to a different directory on example.com:

```perl
Redirect 302 /old-directory http://www.example.com/new-directory
```

### Redirect Drupal

The following example displays the configuration that you must add to the top of the `.htaccess` file to add a redirect for the [Drupal](https://www.drupal.org/) content management system. In this example:

- `drupal.user.example.com` represents the URL to redirect.
- `http://cpanel.net/` represents the URL to which to redirect.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```go<br><IfModule mod_rewrite.c><br>RewriteEngine on<br>RewriteBase /<br>RewriteRule ^index\.php$ - [L]<br>RewriteCond %{HTTP_HOST} ^drupal\.user\.example\.com$ [OR]<br>RewriteCond %{HTTP_HOST} ^www\.drupal\.user\.example\.com$<br>RewriteRule ^cptest$ "http\:\/\/cpanel\.net\/" [R=301,L]<br></IfModule><br>``` |

#### Additional Documentation

* * *

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Convert Addon Domain to Account](https://docs.cpanel.net/whm/transfers/convert-addon-domain-to-account/)
- [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)
- [Dynamic DNS](https://docs.cpanel.net/cpanel/domains/dynamic-dns/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×