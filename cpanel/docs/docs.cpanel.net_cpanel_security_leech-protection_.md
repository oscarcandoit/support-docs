---
url: "https://docs.cpanel.net/cpanel/security/leech-protection/"
title: "Leech Protection | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/security/leech-protection/#main-content)

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
4. Leech Protection


[leech](https://docs.cpanel.net/tags/leech/) [files](https://docs.cpanel.net/tags/files/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [bandwidth](https://docs.cpanel.net/tags/bandwidth/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/security/leech-protection/#overview)

* * *

[Enable leech protection](https://docs.cpanel.net/cpanel/security/leech-protection/#enable-leech-protection)

* * *

[Manage users](https://docs.cpanel.net/cpanel/security/leech-protection/#manage-users)

* * *

[Disable leech protection](https://docs.cpanel.net/cpanel/security/leech-protection/#disable-leech-protection)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/security/leech-protection/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/security/leech-protection/#overview)

* * *

[Enable leech protection](https://docs.cpanel.net/cpanel/security/leech-protection/#enable-leech-protection)

* * *

[Manage users](https://docs.cpanel.net/cpanel/security/leech-protection/#manage-users)

* * *

[Disable leech protection](https://docs.cpanel.net/cpanel/security/leech-protection/#disable-leech-protection)

* * *

## Leech Protection

![](https://docs.cpanel.net/img/cpanel-icons/leech_protection.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/security/leech-protection/)

Last modified: _2025 June 9_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

### Overview

The _Leech Protection_ interface allows you to detect unusual levels of activity in password-restricted directories. After you set the maximum number of logins within a two-hour period, the system redirects or suspends users who exceed it. This is useful if, for example, someone posts a user’s login credentials on a public site.

Important:

[Litespeed Web Server](https://www.litespeedtech.com/products/litespeed-web-server) does **not** support leech protection.

To enable leech protection, we recommend that you use [Apache®](https://www.apache.org/).

## Enable leech protection

To enable leech protection for a directory, perform the following steps:

1. Click _Settings_, and then select one of the following locations in which to begin navigation:

   - _Web Root (public\_html or www)_ — Begin navigation in the document root for the account’s primary domain.
   - _Document Root for_ — Select the domain that corresponds to the document root in which you wish to begin navigation.
   - To configure the interface to always open your selection from Step 1, select the _Always open this directory in the future_ checkbox.
2. Click _Save Changes_.
3. Navigate to the directory that you wish to protect.
   - Click the appropriate folder icon (![folder icon](https://docs.cpanel.net/img/leechprotectionfolder.png)) to navigate to a different folder.
   - Click the desired folder’s name to select it. A new interface will appear.
4. Enter the maximum number of logins that you wish to allow each user within a two-hour period.
5. To redirect users who exceed the maximum number of logins within a two-hour period, enter a URL to which you wish to redirect them.
6. To configure the system to send an email alert when _Leech Protection_ activates, select the _Send Email Alert To_ checkbox. Then, enter the email address to alert.
7. To disable an account that exceeds the maximum number of logins, select the _Disable Compromised Accounts_ checkbox.
8. Click _Enable_.

### Manage users

To add, edit, and delete users, perform the following steps:

1. Navigate to a directory that you wish to protect with user-level protection.
   - Click the appropriate folder icon (![folder icon](https://docs.cpanel.net/img/leechprotectionfolder.png)) to navigate to a different folder.
   - Click the desired folder’s name to select it. A new interface will appear.
2. Click _Manage Users_ to navigate to cPanel’s [_Directory Privacy_](https://docs.cpanel.net/cpanel/files/directory-privacy/) interface for that folder ( _cPanel » Home » Security » Directory Privacy_).

Note:

To manage users manually, edit the `/home/USERNAME/.htpasswds/public_html/passwd` file, where `USERNAME` represents the account name.


## Disable leech protection

To disable leech protection, perform the following steps:

1. Navigate to the directory for which you wish to disable leech protection.
   - Click the appropriate folder icon (![folder icon](https://docs.cpanel.net/img/leechprotectionfolder.png)) to navigate to a different folder.
   - Click the desired folder’s name to select it.
2. Click _Disable_.

#### Additional Documentation

* * *

- [Bandwidth](https://docs.cpanel.net/cpanel/metrics/bandwidth/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [File Manager](https://docs.cpanel.net/cpanel/files/file-manager/)
- [Hotlink Protection](https://docs.cpanel.net/cpanel/security/hotlink-protection/)
- [HTML Editor (Beta)](https://docs.cpanel.net/cpanel/files/html-editor/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×