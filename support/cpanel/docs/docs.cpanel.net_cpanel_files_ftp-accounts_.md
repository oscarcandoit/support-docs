---
url: "https://docs.cpanel.net/cpanel/files/ftp-accounts/"
title: "FTP Accounts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/files/ftp-accounts/#main-content)

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
4. FTP Accounts


[quotas](https://docs.cpanel.net/tags/quotas/) [ftp](https://docs.cpanel.net/tags/ftp/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [anonymousftp](https://docs.cpanel.net/tags/anonymousftp/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/files/ftp-accounts/#overview)

* * *

[Log in to FTP](https://docs.cpanel.net/cpanel/files/ftp-accounts/#log-in-to-ftp)

* * *

[Add FTP Account](https://docs.cpanel.net/cpanel/files/ftp-accounts/#add-ftp-account)

* * *

[FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/#ftp-accounts)

* * *

[Change Password](https://docs.cpanel.net/cpanel/files/ftp-accounts/#change-password)

* * *

[Change Quota](https://docs.cpanel.net/cpanel/files/ftp-accounts/#change-quota)

* * *

[Delete](https://docs.cpanel.net/cpanel/files/ftp-accounts/#delete)

* * *

[Configure FTP Client](https://docs.cpanel.net/cpanel/files/ftp-accounts/#configure-ftp-client)

* * *

[Special FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/#special-ftp-accounts)

* * *

[Primary FTP account](https://docs.cpanel.net/cpanel/files/ftp-accounts/#primary-ftp-account)

* * *

[Log access account](https://docs.cpanel.net/cpanel/files/ftp-accounts/#log-access-account)

* * *

[Anonymous FTP accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/#anonymous-ftp-accounts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/files/ftp-accounts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/files/ftp-accounts/#overview)

* * *

[Log in to FTP](https://docs.cpanel.net/cpanel/files/ftp-accounts/#log-in-to-ftp)

* * *

[Add FTP Account](https://docs.cpanel.net/cpanel/files/ftp-accounts/#add-ftp-account)

* * *

[FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/#ftp-accounts)

* * *

[Change Password](https://docs.cpanel.net/cpanel/files/ftp-accounts/#change-password)

* * *

[Change Quota](https://docs.cpanel.net/cpanel/files/ftp-accounts/#change-quota)

* * *

[Delete](https://docs.cpanel.net/cpanel/files/ftp-accounts/#delete)

* * *

[Configure FTP Client](https://docs.cpanel.net/cpanel/files/ftp-accounts/#configure-ftp-client)

* * *

[Special FTP Accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/#special-ftp-accounts)

* * *

[Primary FTP account](https://docs.cpanel.net/cpanel/files/ftp-accounts/#primary-ftp-account)

* * *

[Log access account](https://docs.cpanel.net/cpanel/files/ftp-accounts/#log-access-account)

* * *

[Anonymous FTP accounts](https://docs.cpanel.net/cpanel/files/ftp-accounts/#anonymous-ftp-accounts)

* * *

## FTP Accounts

![](https://docs.cpanel.net/img/cpanel-icons/ftp_accounts.svg)

_Valid for versions 84 through the latest version_

#### Version:

#### [84](https://docs.cpanel.net/cpanel/files/ftp-accounts/)

Last modified: _2024 October 22_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

You can use this interface to create and manage your website’s File Transfer Protocol (FTP) accounts. FTP allows you to manage your website’s files.

Note:

- To determine which FTP server daemon that your server uses, contact your hosting provider. cPanel & WHM supports the ProFTPD and Pure-FTPd FTP server daemons. On servers that use Pure-FTPd, the system will **only** return the first 10,000 files in each folder. Your hosting provider can adjust this number.
- Secure File Transfer Protocol (SFTP) allows you to transfer files over a secure connection. For more information about SFTP, read our [How To Configure Your SFTP Client](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/) documentation.

## Log in to FTP

You can **only** access this interface if your hosting provider has enabled FTP access for your account. If your hosting provider has not enabled FTP access for your account, you can use the [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_) to manage your site’s files instead.

If your cPanel account uses a dedicated IP address, you can use your cPanel account’s username and password to log in to FTP. Otherwise, you **must** use the full FTP account username (`account@domain.com`) and password to log in to FTP.

## Add FTP Account

To create an FTP account, perform the following steps:

1. Enter the desired username in the _Log In_ text box.

2. Select the desired domain from the _Domain_ menu.

3. Enter and confirm the new password in the _Password_ and _Password (Again)_ text boxes. Some web hosts require a minimum password strength. You can also click _Password Generator_ to generate a strong password. For more information, read our [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security/) documentation.

4. Enter the FTP account’s home directory. The _Directory_ text box defines the new FTP account’s top level of directory access. For example, if you enter `example` in the _Directory_ text box, the FTP account can access the `/home/$user/example/` directory and all of its subdirectories. The system automatically populates this text box with `public_html/domain.tld/account`, where `account` represents the username that you entered in the _Log In_ text box and `domain.tld` represents the domain you selected in the _Domain_ menu.







Important:





You **cannot** use symbolic links (symlinks) to upload data outside of this directory.

5. Enter the disk space quota, or select _Unlimited_. If an FTP account experiences problems with uploads, you may need to increase the _Quota_ value.



Note:





If your server uses the [ProFTPD FTP](http://www.proftpd.org/) server, you **cannot** use quotas. For more information about your server’s FTP server daemon, contact your hosting provider.

6. Click _Create FTP Account_. The new account will appear in the _FTP Accounts_ table.


## FTP Accounts

The _FTP Accounts_ table allows you to manage existing FTP accounts.

### Change Password

To change an FTP account’s password, perform the following steps:

1. Click _Change Password_ for the desired FTP account.
2. Enter and confirm the new password in the _Password_ and _Password (Again)_ text boxes. Some web hosts require a minimum password strength. You can also click _Password Generator_ to generate a strong password. For more information, read our [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security/) documentation.
3. Click _Change Password_.

### Change Quota

Remember:

If your server uses the [ProFTPD FTP](http://www.proftpd.org/) server, you **cannot** use quotas, and this section of the interface will **not** appear. To determine your server’s FTP server type, contact your hosting provider.

To change an FTP account’s quota, perform the following steps:

1. Click _Change Quota_ for the desired FTP account.
2. Enter the disk space quota, or select _Unlimited_.
3. Click _Change Quota_.

### Delete

To remove an FTP account, perform the following steps:

1. Click _Delete_ for the FTP account that you wish to remove.

2. Click the desired deletion option:
   - _Delete Account_ — Remove the FTP account **only**. This will not remove the files that the FTP account’s home directory contains.
   - _Delete Account and Files_ — Remove the FTP account and all of the files that the FTP account’s home directory contains.






     Warning:





     Only use this option with **extreme** caution. If the FTP account that you delete can access the `public_html` directory, this option automatically removes the `public_html` directory and **all** of its contents, which **will** break your website.

   - _Cancel_ — Do not delete the account.

### Configure FTP Client

Note:

FTP does **not** support Server Name Indication (SNI). You **must** use the server’s hostname as the FTP server to connect with SSL. You **cannot** use your domain name. For more information, read our [How To Configure Your SFTP Client](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client/) documentation.

You **must** install an FTP client on your computer before you download and run the configuration script file in step 3 below. Some options for FTP clients are [Core FTP](http://www.coreftp.com/) for Windows® computers or [Cyberduck](http://cyberduck.ch/) for macOS® computers.

To configure an FTP client, perform the following steps:

1. Click _Configure FTP Client_ for the desired FTP account.
2. Click _FTP Configuration File_ under the desired FTP client’s logo. You can choose between Core FTP and Cyberduck.






Note:





- We **only** support auto-configuration for these FTP clients. To use another client, manually configure the client.
- Click _Instructions_ to view detailed instructions for your chosen client.

3. Open the configuration script file that downloaded to your computer. The FTP client automatically opens, configures itself, and connects to your FTP server.

## Special FTP Accounts

The _Special FTP Accounts_ table lists your cPanel account’s primary FTP account and the log access account. The system creates these accounts by default. Unlike other FTP accounts, you cannot modify or delete these accounts. This is because the system links these accounts to administrative aspects of your cPanel account.

To log in to a special FTP account, you **must** use the account’s FTP configuration file. The system automatically configures the client for these accounts. For more information about FTP client configuration files, read the [Configure FTP client](https://docs.cpanel.net/cpanel/files/ftp-accounts/#configure-ftp-client) section.

### Primary FTP account

This account has FTP access to all files in your cPanel account. It also has access to files that exist outside of your account’s `public_html` directory. When logging in to this account, you should always use the [SFTP (Secure File Transfer Protocol)](https://docs.cpanel.net/knowledge-base/ftp/how-to-configure-your-sftp-client) protocol.

### Log access account

This account lets you download your website’s raw access logs. The logs are available in the `/etc/apache2/logs/domlogs/USERNAME` directory, where `USERNAME` is the log access account’s username. This directory contains the FTP transaction logs for domains on webservers running EasyApache 4. You do **not** need to log in to this account to access the FTP transaction logs.

Note:

To view past FTP connections to your site, navigate to the [_Raw Access_](https://docs.cpanel.net/cpanel/metrics/raw-access/) interface ( _cPanel » Home » Metrics » Raw Access_).

### Anonymous FTP accounts

You can **only** access these accounts if your hosting provider has enabled this feature. These accounts allow users to anonymously connect via FTP to access your website’s files. You can manage this access in cPanel’s [_Anonymous FTP_](https://docs.cpanel.net/cpanel/files/anonymous-ftp) interface ( _cPanel » Home » Files » Anonymous FTP_). When you disable anonymous FTP, the system does **not** remove these accounts.

#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [Backup for cPanel](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/)
- [Backup Wizard](https://docs.cpanel.net/cpanel/files/backup-wizard/)
- [Disk Usage](https://docs.cpanel.net/cpanel/files/disk-usage/)
- [FTP Connections](https://docs.cpanel.net/cpanel/files/ftp-connections/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×