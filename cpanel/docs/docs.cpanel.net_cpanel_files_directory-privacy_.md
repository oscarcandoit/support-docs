---
url: "https://docs.cpanel.net/cpanel/files/directory-privacy/"
title: "Directory Privacy | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/files/directory-privacy/#main-content)

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
4. Directory Privacy


[security](https://docs.cpanel.net/tags/security/) [files](https://docs.cpanel.net/tags/files/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/files/directory-privacy/#overview)

* * *

[Select a directory](https://docs.cpanel.net/cpanel/files/directory-privacy/#select-a-directory)

* * *

[Security Settings](https://docs.cpanel.net/cpanel/files/directory-privacy/#security-settings)

* * *

[Create User](https://docs.cpanel.net/cpanel/files/directory-privacy/#create-user)

* * *

[Authorized Users](https://docs.cpanel.net/cpanel/files/directory-privacy/#authorized-users)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/files/directory-privacy/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/files/directory-privacy/#overview)

* * *

[Select a directory](https://docs.cpanel.net/cpanel/files/directory-privacy/#select-a-directory)

* * *

[Security Settings](https://docs.cpanel.net/cpanel/files/directory-privacy/#security-settings)

* * *

[Create User](https://docs.cpanel.net/cpanel/files/directory-privacy/#create-user)

* * *

[Authorized Users](https://docs.cpanel.net/cpanel/files/directory-privacy/#authorized-users)

* * *

## Directory Privacy

![](https://docs.cpanel.net/img/cpanel-icons/directory_privacy.svg)

_Valid for versions 88 through the latest version_

#### Version:

#### [88](https://docs.cpanel.net/cpanel/files/directory-privacy/)

Last modified: _2025 June 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to protect specific directories in your cPanel account’s files. After you enable this feature for a directory, when users attempt to view that directory via a website, the system prompts them to log in.

Note:

- This feature modifies `htaccess` and `htpasswd` configurations in order to restrict access to files on your websites.

- This feature does **not** protect directories that users access via FTP, SFTP, Web Disk, or other services, or when they access files locally.


## Select a directory

To use this interface, select a directory to manage.

- To select a directory, click the desired directory’s name.

- To view and select subdirectories, click the parent directory’s name. Then, click the desired subdirectory name.


To configure the security settings for a directory or subdirectory, click _Edit_ under the _Actions_ column.

Note:

- A protected directory’s subdirectories inherit their parent directory’s password protection.

- The lock icon (![lock icon](https://docs.cpanel.net/img/directoryprivacylock.png)) indicates that _Directory Privacy_ configurations already exist for that directory.


### Security Settings

Important:

You **must** perform these steps and click _Save_ in order to enable this feature.


To password protect the selected directory, perform the following steps:

1. Select the _Password protect this directory_ checkbox.






Note:




To remove password protection from a directory, deselect the _Password protect this directory_ checkbox. Then, click _Save_.


2. Enter a label for the directory in the _Enter a name for the protected directory_ text box.






Note:




This name **only** functions as a label for the directory in its `.htaccess` file. Do **not** confuse it with the directory’s actual name.


3. Click _Save_. A confirmation message will appear. Click _Go Back_ to return to the directory’s configuration.


Important:

After you complete this process, you **must** create a user that can access this directory.


### Create User

Warning:

To create a user for a directory, the directory must have correct directory permissions. If you cannot create a user, change the directory’s permissions to `0700` in cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_).

To create an authorized user for the selected directory, perform the following steps:

1. Enter the desired username in the _Username_ text box.

2. Enter and confirm the new password in the appropriate text boxes.







Note:





- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.

- Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.

- Click _Password Generator_ to generate a strong password. For more information, read our [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security) documentation.


3. Click _Save_. A confirmation message will appear. Click _Go Back_ to return to the directory’s configuration.


Note:

To change an existing user’s password, enter the user’s information and the new desired password. Then, click _Save_.


### Authorized Users

The _Authorized Users_ menu lists the directory’s existing authorized users. To delete a user, select that user and click _Delete User_. A confirmation message will appear. Click _Go Back_ to return to the directory’s configuration.

#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [Backup Wizard](https://docs.cpanel.net/cpanel/files/backup-wizard/)
- [File Manager](https://docs.cpanel.net/cpanel/files/file-manager/)
- [HTML Editor (Beta)](https://docs.cpanel.net/cpanel/files/html-editor/)
- [Images](https://docs.cpanel.net/cpanel/files/images/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×