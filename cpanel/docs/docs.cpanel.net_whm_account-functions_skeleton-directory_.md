---
url: "https://docs.cpanel.net/whm/account-functions/skeleton-directory/"
title: "Skeleton Directory | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/account-functions/skeleton-directory/#main-content)

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
4. Skeleton Directory


[whmui](https://docs.cpanel.net/tags/whmui/) [files](https://docs.cpanel.net/tags/files/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/account-functions/skeleton-directory/#overview)

* * *

[Create a skeleton directory](https://docs.cpanel.net/whm/account-functions/skeleton-directory/#create-a-skeleton-directory)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/account-functions/skeleton-directory/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/account-functions/skeleton-directory/#overview)

* * *

[Create a skeleton directory](https://docs.cpanel.net/whm/account-functions/skeleton-directory/#create-a-skeleton-directory)

* * *

## Skeleton Directory

![](https://docs.cpanel.net/img/whm-icons/skeleton_directory.svg)

_Valid for versions 94 through the latest version_

#### Version:

#### [94](https://docs.cpanel.net/whm/account-functions/skeleton-directory/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface displays the location of the skeleton directory. The skeleton directory allows you to easily copy the same files into every new account’s `public_html` and `public_ftp` directories when the system creates the account. For example, this can include predefined [_Error Pages_](https://docs.cpanel.net/cpanel/advanced/error-pages/) for accounts.

Warning:

We **removed** this interface in cPanel & WHM version 116. However, you can still create and administer skeleton directories with the [instructions below](https://docs.cpanel.net/whm/account-functions/skeleton-directory/#create-a-skeleton-directory).

## Create a skeleton directory

To set up the skeleton directory for new accounts, perform the following steps:

1. Plan and create the content that you wish to supply for your new users.
2. Place the appropriate files and subdirectories in the appropriate directory:
   - `/root/cpanel3-skel/public_html` — A skeleton directory for the `root` user.
   - `/home/reseller/cpanel3-skel/public_html` — A skeleton directory for a reseller, where `home` represents the name of the `home` partition, and `reseller` represents the reseller’s username.






     Note:





     The system copies these files to the new accounts’ `public_html` directories when it creates accounts.
3. Place the appropriate FTP-related files in the appropriate directory:
   - `/root/cpanel3-skel/public_ftp` — A skeleton FTP directory for the `root` user.
   - `/home/reseller/cpanel3-skel/public_ftp` — A skeleton FTP directory for a reseller, where `home` represents the name of the `home` partition, and `reseller` represents the reseller’s username.






     Note:





     The new user can access these files via an FTP client.

Important:

- When a visitor accesses `http://example.com/`, they will see the contents of `example.com`’s `public_html` directory.
- When a visitor accesses `http://example.com/subdirectory`, they will see the contents of `example.com`’s `public_html/subdirectory`.
- FTP users can download the contents of the `public_ftp` directory.

#### Additional Documentation

* * *

- [Change Site's IP Address](https://docs.cpanel.net/whm/account-functions/change-site-ip-address/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [Email All Users](https://docs.cpanel.net/whm/account-functions/email-all-users/)
- [File and Directory Restoration for WHM](https://docs.cpanel.net/whm/backup/file-and-directory-restoration-for-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×