---
url: "https://docs.cpanel.net/cpanel/preferences/user-manager/102/"
title: "User Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#main-content)

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
3. [Preferences](https://docs.cpanel.net/cpanel/preferences/)
4. User Manager


[accounts](https://docs.cpanel.net/tags/accounts/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [usermanager](https://docs.cpanel.net/tags/usermanager/) [subaccounts](https://docs.cpanel.net/tags/subaccounts/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#overview)

* * *

[Link accounts](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#link-accounts)

* * *

[Add a Subaccount](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#add-a-subaccount)

* * *

[Services](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#services)

* * *

[Logging in](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#logging-in)

* * *

[Edit a Subaccount](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#edit-a-subaccount)

* * *

[Delete a Subaccount](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#delete-a-subaccount)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#overview)

* * *

[Link accounts](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#link-accounts)

* * *

[Add a Subaccount](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#add-a-subaccount)

* * *

[Services](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#services)

* * *

[Logging in](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#logging-in)

* * *

[Edit a Subaccount](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#edit-a-subaccount)

* * *

[Delete a Subaccount](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#delete-a-subaccount)

* * *

## User Manager

![](https://docs.cpanel.net/img/cpanel-icons/user_manager.svg)

_Valid for versions 102 through 128_

#### Version:

#### [102](https://docs.cpanel.net/cpanel/preferences/user-manager/102/)

#### [130](https://docs.cpanel.net/cpanel/preferences/user-manager/130/)

#### [132](https://docs.cpanel.net/cpanel/preferences/user-manager/)

Last modified: _2025 September 19_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _User Manager_ interface allows you to manage your Subaccounts. Subaccounts use the same login and password information for email, FTP, and Web Disk services. The system synchronizes the password of each of the Subaccount’s allowed services.

This interface also allows you to merge email, FTP, and Web Disk accounts into a single Subaccount or to link existing service accounts to Subaccounts.

Important:

- The [_Manage Team_](https://docs.cpanel.net/cpanel/preferences/manage-team/) feature offers more functionality for cPanel account owners who would like to create [team users](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#team-user).
- The _User Manager_ interface does **not** allow you to create new cPanel accounts. Hosting providers and system administrators can create new cPanel accounts in WHM’s [_Create a New Account_](https://docs.cpanel.net/whm/account-functions/create-a-new-account) interface ( _WHM » Home » Account Functions » Create a New Account_).
- In the accounts list, the cPanel account and `logs` account include a star (![star icon](https://docs.cpanel.net/img/starimage.png)) on their icons. You **cannot** edit or delete these accounts.

Warning:

Subaccounts can **only** access FTP, Web Disk, and Webmail. Subaccounts **cannot** log in to or access cPanel.

## Link accounts

If any email, FTP, or Web Disk accounts use the same username, the _User Manager_ interface allows you to merge those accounts into a Subaccount.

- The _User Manager_ interface groups any service accounts that you could merge.
- To merge the accounts, click _Link_.
- To remove this action for those accounts, click _Dismiss_.

## Add a Subaccount

To add a Subaccount, perform the following steps:

1. Click _Add User_.
2. Enter the user’s name in the _Full Name_ text box.
3. Enter the username in the _Username_ text box.
4. If you manage more than one domain, select the appropriate domain from the _Domain_ menu.
5. Enter a contact email address for the user.






Important:





- You **must** enter the contact email address to allow Subaccount users to use the [Reset Password](https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-subaccount-password/) feature or to allow the user to set their own password.
- If you do **not** specify a contact email address, the system will generate a fake email address when a user attempts to reset their password. This action helps protect users’ credentials on an account. This email address appears as a hint in the _Contact Email Address_ text box on the cPanel _Login_ interface.

6. Select the method to use to set the Subaccount password:
   - To send an email to the user to set their own password, select _The user will set the account password_.






     Note:





- To use this method, you must enable the _Reset Password for Subaccount_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_). If you **cannot** access WHM, contact your hosting provider for assistance.
- When you select this setting, the user must follow the steps in our [Subaccount Initial Password Guide](https://docs.cpanel.net/knowledge-base/cpanel-product/subaccount-initial-password-guide) documentation in order to set their password.

   - To set the password yourself, select _Set the user’s password_. Then, enter and confirm the new password in the appropriate text boxes.






     Note:





- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.
- Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.
- Click _Password Generator_ to generate a strong password. For more information, read our [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security) documentation.
7. Select the Subaccount’s services. For more information, read the [Services](https://docs.cpanel.net/cpanel/preferences/user-manager/102/#services) section below.






Note:





If the Subaccount’s username matches the username of another account, the interface will prompt you to link or dismiss the account.



- To link the account and Subaccount, click _Link_.
- If you do **not** wish to link the account and Subaccount, click _Dismiss_.

8. Click _Create_, or click _Create and Add Another User_ to add another account.

### Services

#### Email

Email allows you to enable the Subaccount’s email address.

You can configure the following email setting:

- _Quota_ — The amount of hard drive space the Subaccount may use to store email.






Important:





- Due to mail server constraints, you **cannot** assign quotas that exceed 4,294,967,296 MB (4096 TB or 4 PB). Select _Unlimited_ for quotas that exceed this amount.
- If your hosting provider defined a maximum email account quota for your account, you can’t select the _Unlimited_ value. Instead, the interface displays the _Maximum_ value. The _Quota_ value **cannot** exceed this amount.

#### FTP

FTP allows you to manage your website’s files.

Note:

- The interface **only** displays the FTP menu if your hosting provider has enabled FTP services on your server.
- SSH File Transfer Protocol (SFTP) uses your cPanel account’s shell access to transfer files. Subaccounts **cannot** use SFTP. For more information, read our [How To Configure Your SFTP Client](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client) documentation.
- To view past FTP connections to your site, navigate to cPanel’s [_Raw Access_](https://docs.cpanel.net/cpanel/metrics/raw-access) interface ( _cPanel » Home » Metrics » Raw Access_).

You can configure the following FTP settings:

- _Quota_ — The amount of hard drive space the Subaccount user may use in their specified home directory.






Note:





If your server uses the [ProFTPD](http://www.proftpd.org/) FTP server, you **cannot** use quotas. Additionally, the _User Manager_ interface will not display the _Quota_ setting. For more information, contact your hosting provider.

- _Home Directory_ — The Subaccount’s FTP home directory.






Note:





- This directory is the new FTP account’s top level of directory access. For example, if you enter `example` in the _Home Directory_ text box, the FTP account can access the `/home/user/example` directory, where `user` represents the cPanel account username, and all of its subdirectories.
- The system automatically populates this text box with `public_html/domain.tld/account`, where `account` represents the username that you entered in the _Login_ text box and `domain.tld` represents the domain that you selected from the _Domain_ menu.

#### Web Disk

The [Web Disk](https://docs.cpanel.net/cpanel/files/web-disk) utility allows you to manage and manipulate files on your server in multiple types of interfaces (for example, your computer, mobile device, or certain types of software).

You can configure the following Web Disk settings:

- _Home Directory_ — The Subaccount’s Web Disk home directory.
- _Permissions_ — The Subaccount’s home directory permissions. You can select either of the following permissions:

  - _Read-Write_ — The Subaccount can read and write files inside the directory.
  - _Read-Only_ — The Subaccount can only read files inside the directory.
- _Authentication_ — Whether to enable Digest Authentication. You **must** enable Digest Authentication if you use Windows® Vista, Windows® 7, or Windows® 8, or Windows® 10 and you access Web Disk over a clear text, unencrypted connection. You do not need to enable Digest Authentication if you meet the following conditions:

  - The domain has an SSL certificate that a recognized certificate authority signed.
  - You can connect to Web Disk with SSL over port `2078`.






    Note:





    Do **not** enable Digest Authentication if the domain uses a signed SSL certificate.

### Logging in

Note:

If you selected _The user will set the account password_ when you created the Subaccount, the user must follow the steps in our [Subaccount Initial Password Guide](https://docs.cpanel.net/knowledge-base/cpanel-product/subaccount-initial-password-guide) documentation to set their password.

After you create a Subaccount, you can use several methods to access it:

- To log in to Webmail and access your email Subaccount, navigate to `https://example.com:2096`, where `example.com` represents your domain name or server IP address. Then, enter the Subaccount username and password. For more information, read our [How to Log In to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account) documentation.
- To use FTP features, log in via an FTP client. For more information, read our [FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts) and [How to Configure Your SFTP Client](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client) documentation.
- To use Web Disk, connect through your local computer’s operating system or via a third-party client. For more information, read our [Connect to Web Disk with Third Party Software](https://docs.cpanel.net/knowledge-base/third-party/connect-to-web-disk-with-third-party-software) documentation.

## Edit a Subaccount

To edit a Subaccount, click _Edit_. You can update the following Subaccount settings:

- _Full name_ — The Subaccount’s user’s first and last name.
- _Contact Email Address_ — An alternate email address for the Subaccount’s user.






Important:





You must configure the _Contact Email Address_ setting to allow Subaccount users to use the [Reset Password](https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-subaccount-password/) feature.

- _Security Information_ — The Subaccount’s password.
- _Email_, _FTP_, and _Web Disk_ — The Subaccount’s access to email, FTP, and Web Disk services, respectively.

## Delete a Subaccount

To delete a Subaccount, click _Delete_. Then, confirm that you wish to delete the account.

Warning:

If you delete a Subaccount, the system will remove all of the Subaccount’s services.

#### Additional Documentation

* * *

- [Manage Team](https://docs.cpanel.net/cpanel/preferences/manage-team/)
- [Account Preferences](https://docs.cpanel.net/cpanel/preferences/account-preferences/)
- [Change Language](https://docs.cpanel.net/cpanel/preferences/change-language/)
- [Contact Information](https://docs.cpanel.net/cpanel/preferences/contact-information/)
- [User Manager](https://docs.cpanel.net/cpanel/preferences/user-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×