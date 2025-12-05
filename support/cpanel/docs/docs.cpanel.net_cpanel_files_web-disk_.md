---
url: "https://docs.cpanel.net/cpanel/files/web-disk/"
title: "Web Disk | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/files/web-disk/#main-content)

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
3. [Files](https://docs.cpanel.net/cpanel/files/)
4. Web Disk


[webdisk](https://docs.cpanel.net/tags/webdisk/) [files](https://docs.cpanel.net/tags/files/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/files/web-disk/#overview)

* * *

[Main Web Disk Account](https://docs.cpanel.net/cpanel/files/web-disk/#main-web-disk-account)

* * *

[Create An Additional Web Disk Account](https://docs.cpanel.net/cpanel/files/web-disk/#create-an-additional-web-disk-account)

* * *

[Manage Additional Web Disk Accounts](https://docs.cpanel.net/cpanel/files/web-disk/#manage-additional-web-disk-accounts)

* * *

[Access a Web Disk account without cPanel](https://docs.cpanel.net/cpanel/files/web-disk/#access-a-web-disk-account-without-cpanel)

* * *

[Web Disk and Digest Authentication](https://docs.cpanel.net/cpanel/files/web-disk/#web-disk-and-digest-authentication)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/files/web-disk/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/files/web-disk/#overview)

* * *

[Main Web Disk Account](https://docs.cpanel.net/cpanel/files/web-disk/#main-web-disk-account)

* * *

[Create An Additional Web Disk Account](https://docs.cpanel.net/cpanel/files/web-disk/#create-an-additional-web-disk-account)

* * *

[Manage Additional Web Disk Accounts](https://docs.cpanel.net/cpanel/files/web-disk/#manage-additional-web-disk-accounts)

* * *

[Access a Web Disk account without cPanel](https://docs.cpanel.net/cpanel/files/web-disk/#access-a-web-disk-account-without-cpanel)

* * *

[Web Disk and Digest Authentication](https://docs.cpanel.net/cpanel/files/web-disk/#web-disk-and-digest-authentication)

* * *

## Web Disk

![](https://docs.cpanel.net/img/cpanel-icons/web_disk.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/files/web-disk/)

Last modified: _2024 September 25_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Use the _Web Disk_ interface to create a Web Disk account to manage, navigate, upload, and download the files on your web server. The Web Disk management system allows you to use the [Web Distributed Authoring and Versioning (WebDAV)](https://en.wikipedia.org/wiki/WebDAV) protocol to manage files remotely.

WebDAV is a set of extensions to the HTTP protocol that allows users to collaborate while editing and managing files remotely on web servers. One reason to use this file management system instead of [FTP](https://docs.cpanel.net/cpanel/files/ftp-accounts/), [File Manager](https://docs.cpanel.net/cpanel/files/file-manager/), or [Git](https://docs.cpanel.net/cpanel/files/gitweb/) is to create a separate user account to avoid providing any cPanel access.

## Main Web Disk Account

By default, the system creates a Web Disk account for your cPanel account and sets your home directory as the Web Disk location. This account uses the same login information as your cPanel account and can access all of the files in your home directory. You **cannot** delete this Web Disk account.

- To access this account’s files, use the [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_).
- To view login details for the Web Disk account or download a configuration script, click _Configure Client Access_.
- If you use Microsoft Windows Vista®, Windows® 7, Windows® 8, or Windows® 10, click _Enable Digest Authentication_ to enable Digest Authentication, or click _Disable Digest Authentication_ to disable it. For more information, read the [Web Disk and Digest Authentication](https://docs.cpanel.net/cpanel/files/web-disk/#web-disk-and-digest-authentication) section below.
- For more information about how to connect third-party software with your Web Disk account, read our [Connect to Web Disk with Third-Party Software](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software) documentation.

## Create An Additional Web Disk Account

To create an additional _Web Disk_ account, perform the following steps in the _Create an Additional Web Disk Account_ section:

1. Enter the desired username in the _Username_ text box.
2. If your account includes more than one domain or subdomain you can select a domain or subdomain from the _Domain_ menu.
3. Enter and confirm the new password in the appropriate text boxes. The system evaluates the password that you enter on a scale of 100 points. 0 indicates a weak password, while 100 indicates a very secure password. You can also click _Password Generator_ to generate a strong password. For more information, read our [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security) documentation.






Note:





Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.







Warning:





The password **must** contain at least five characters.

4. Enter the Web Disk account’s home directory in the _Directory_ text box:

   - The house icon (![Home](https://docs.cpanel.net/img/homeicon.png)) represents the cPanel account’s home directory.
   - The _Directory_ text box defines the new Web Disk account’s top level of directory access, relative to the cPanel account’s home directory.
   - The system automatically populates this text box with `public_html/username`, where `username` represents what you entered in the _Username_ text box.
5. Select a _Permissions_ setting:

   - _Read-Write_ — This setting grants this account access to all of the operations inside the directory.
   - _Read-Only_ — This setting only grants this account access to read, download, and list the files inside the directory.
6. If you use Microsoft Windows Vista®, Windows® 7, Windows® 8, or Windows® 10, select the _Enable Digest Authentication_ checkbox.






Note:





Do **not** enable Digest Authentication if the domain uses a signed SSL certificate. For more information, read the [Web Disk and Digest Authentication](https://docs.cpanel.net/cpanel/files/web-disk/#web-disk-and-digest-authentication) section below.

7. Click _Create_. A new interface will appear.

   - To return to the main interface, click _Go Back_.
   - To view setup instructions for your new Web Disk account, click _Configure Client Access_.

## Manage Additional Web Disk Accounts

The _Manage Additional Web Disk Accounts_ table displays the following information for all of the additional Web Disk accounts that you create:

- _Account_ — The Web Disk account username.
- _Directory_ — The Web Disk account’s assigned directory and related actions.

  - Click the directory name to open the assigned directory in cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel_ » _Home_ » _Files_ » _File Manager_).
  - Click the edit icon (![Edit](https://docs.cpanel.net/img/edit-icon.png)) to change the account’s assigned directory.
  - Click the lock icon (![Lock](https://docs.cpanel.net/img/lockicon.png)) to use cPanel’s [_Directory Privacy_](https://docs.cpanel.net/cpanel/files/directory-privacy) interface ( _cPanel_ » _Home_ » _Files_ » _Directory Privacy_) to password protect the directory, create a user to access the directory, or remove a user from the directory.






    Note:





    Password protection does **not** control Web Disk access to a directory. Instead, perform this action to protect the files that you upload to a publicly-accessible directory on your account with a password. If you choose to password protect a Web Disk directory, you **must** create a user to access that directory.
- _Actions_ — Use the links in this column to perform the following actions:

  - Click _Configure Client Access_ to view login details for the Web Disk account.
  - For certain devices, you can also click _Download Configuration Script_ to download a device configuration script. For more information, read our [Connect to Web Disk with Third-Party Software](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software) documentation.
  - Click _Enable Digest Authentication_ and follow the prompts to enable Digest Authentication. For more information, read the [Web Disk and Digest Authentication](https://docs.cpanel.net/cpanel/files/web-disk/#web-disk-and-digest-authentication) section below.
  - Click _Change Password_ to change the Web Disk account password.
  - Click _Delete_ and follow the prompts to delete the Web Disk account.
  - Click a permissions setting to change the account’s permissions:
    - _Set Read-Write_ — This setting grants this account access to all of the operations inside the directory.
    - _Set Read-Only_ — This setting only grants this account access to read, download, and list the files inside the directory.

## Access a Web Disk account without cPanel

To log in to a Web Disk account without cPanel access, ensure that the connecting computer’s firewalls allow access to port `2078`. Then, [connect your Web Disk account to its web server](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software/) to enable remote access.

## Web Disk and Digest Authentication

When you change the usernames of Web Disk accounts that use Digest Authentication, you **must** reenable it. The `/etc/digestshadow` file stores the usernames of Web Disk accounts that use Digest Authentication in a password hash. When you change the account username, the system removes the password from the file.

Important:

Updates to a Web Disk account’s associated domain **also** change the account’s username and will **disable** Digest Authentication.

Note:

You **must** enable Digest Authentication if you use Windows® Vista, Windows® 7, or Windows® 8, or Windows® 10 and you access Web Disk over a clear text, unencrypted connection. You do not need to enable Digest Authentication if you meet the following conditions:

- The domain has an SSL certificate that a recognized certificate authority signed.
- You can connect to Web Disk with SSL over port `2078`.
- If you use Windows XP®, Windows Vista, or Windows® 2003, you may experience errors when you attempt to connect to your Web Disk account. These operating systems require a patch that Microsoft no longer offers, and it no longer supports these operating systems.
- If you use Windows 7, a discrepancy may exist between the amount of disk space that the system reports and the actual available disk space. This happens because the WebDAV protocol, which _Web Disk_ uses, cannot query a server’s disk capacity. For more information, read Microsoft Support’s [article about this problem](https://web.archive.org/web/20141121201544/http://support.microsoft.com/kb/2386902).

#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [File Manager](https://docs.cpanel.net/cpanel/files/file-manager/)
- [HTML Editor (Beta)](https://docs.cpanel.net/cpanel/files/html-editor/)
- [Images](https://docs.cpanel.net/cpanel/files/images/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×