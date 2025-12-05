---
url: "https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/"
title: "What Happens When You Suspend an Account | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#main-content)

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
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. What Happens When You Suspend an Account


[accounts](https://docs.cpanel.net/tags/accounts/) [accountsuspension](https://docs.cpanel.net/tags/accountsuspension/) [accounttermination](https://docs.cpanel.net/tags/accounttermination/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#overview)

* * *

[Effects of suspension](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#effects-of-suspension)

* * *

[Adds suspended flags](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#adds-suspended-flags)

* * *

[Locks reseller control](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#locks-reseller-control)

* * *

[Stops all user processes](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#stops-all-user-processes)

* * *

[Locks mailing lists](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#locks-mailing-lists)

* * *

[Locks Web Disk](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#locks-web-disk)

* * *

[Locks email passwords](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#locks-email-passwords)

* * *

[Incoming and outgoing email](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#incoming-and-outgoing-email)

* * *

[Updates the Apache configuration files](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#updates-the-apache-configuration-files)

* * *

[Locks the shadow password](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#locks-the-shadow-password)

* * *

[Modifies permissions of ftp directory](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#modifies-permissions-of-ftp-directory)

* * *

[Changes MySQL user passwords](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#changes-mysql-user-passwords)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#overview)

* * *

[Effects of suspension](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#effects-of-suspension)

* * *

[Adds suspended flags](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#adds-suspended-flags)

* * *

[Locks reseller control](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#locks-reseller-control)

* * *

[Stops all user processes](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#stops-all-user-processes)

* * *

[Locks mailing lists](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#locks-mailing-lists)

* * *

[Locks Web Disk](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#locks-web-disk)

* * *

[Locks email passwords](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#locks-email-passwords)

* * *

[Incoming and outgoing email](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#incoming-and-outgoing-email)

* * *

[Updates the Apache configuration files](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#updates-the-apache-configuration-files)

* * *

[Locks the shadow password](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#locks-the-shadow-password)

* * *

[Modifies permissions of ftp directory](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#modifies-permissions-of-ftp-directory)

* * *

[Changes MySQL user passwords](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/#changes-mysql-user-passwords)

* * *

## What Happens When You Suspend an Account

_Valid for versions 94 through the latest version_

#### Version:

#### [94](https://docs.cpanel.net/knowledge-base/accounts/what-happens-when-you-suspend-an-account/)

Last modified: _2023 August 4_

* * *

## Overview

This document describes the actions that the system performs when you suspend an account.

Important:

Suspension and bandwidth limiting are two separate functions. For more information, read our [Account Suspension Versus Bandwidth Limiting and Account Termination](https://docs.cpanel.net/knowledge-base/accounts/account-suspension-versus-bandwidth-limiting-and-account-termination/) documentation.

Note:

To suspend or unsuspend an account, use WHM’s [_Manage Account Suspension_](https://docs.cpanel.net/whm/account-functions/manage-account-suspension) interface ( _WHM » Home » Account Functions » Manage Account Suspension_).

## Effects of suspension

The following table describes the actions that the system performs when you suspend an account and the limitations that result from these actions:

Note:

In the following section, `user` represents the account’s username.

## Adds suspended flags

The system adds the `SUSPENDED=1` and `SUSPENDTIME=epochdate` flags to the account’s `/var/cpanel/users/cpuser` file, where `epochdate` represents the Unix time at which you suspended the account.

As a result, the appropriate WHM interfaces sets the account to `suspended` and list the reason for suspension.

### Locks reseller control

By default, if the suspended account is a [reseller account that owns itself](https://docs.cpanel.net/whm/account-functions/create-a-new-account/#reseller-settings), the account owner can still access the account while it is suspended. For more information on reseller accounts, read our [Guide to Reseller Accounts](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/) documentation.

You can change this default behavior in the _System_ section in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#system) interface. If you select _cPanel User Only_ in the _Accounts that can access a cPanel user account_ setting for your WHM server, the system will **only** allow cPanel users to access their accounts.

Warning:

If you select this option, the `root` user will **not** have access to **any** cPanel accounts. This can complicate account management.

If you do not want to change the account access options in the _Tweak Settings_ interface, you can select the _Prevent resellers from unsuspending_ checkbox when you suspend the account. The system touches the `/var/cpanel/suspended/user.lock` file.

As a result, the appropriate WHM interfaces lock the account. The system does **not** allow resellers to unsuspend the account.

Warning:

If you select this option when you suspend an account, the system **only** allows the `root` user to unsuspend the account.

### Stops all user processes

The system stops all of the processes that that account owns.

As a result, the system stops any functions that the cPanel account currently performs as the logged-in user. The following list includes some of the effects that this action may cause:

- The system forcibly logs the user out of a current session.

- The system stops the user’s cron jobs.


### Locks mailing lists

The system creates a `suspended.lists` directory in Mailman and moves the files for each of the account’s mailing lists to this directory.

As a result, the account’s [mailing lists](https://docs.cpanel.net/cpanel/email/mailing-lists/) no longer function.

### Locks Web Disk

The system adds a `*LOCKED*` string to the `/home/homedir/etc/webdav/shadow` password files for all account’s Web Desk users. In this example, `homedir` is the cPanel account’s home directory name.

As a result, the account’s [Web Disk](https://docs.cpanel.net/cpanel/files/web-disk/) accounts no longer function.

### Locks email passwords

The system adds a `*LOCKED*` string to the `/home/homedir/etc/domain/shadow` password files for all of the account’s email users. In this example, `homedir` is the cPanel account’s home directory name and `domain` is the email users’ domain.

As a result, the account’s email users **cannot** download mail.

Note:

The system continues to deliver mail to the account.

### Incoming and outgoing email

The system no longer allows the account’s users to send email through the mail server. Also, the mail server will force all mail currently in the outbound message queue from that account’s users to fail. As a result, the account’s email users **cannot** send mail, and any mail they had in the mail server queue **will** fail.

#### Email Delivery Behavior

When the server delivers an email message, Exim evaluates and executes code supplied by the cPanel account. If an administrator suspends the cPanel account, you may not want the system to process user-supplied code in filters, forwarders, pipes, and redirection lists. You may choose from several configuration options to determine how the system processes email deliveries for suspended accounts.

You can configure what action EXIM should perform when the server receives an email message for a suspended account in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor/#delivery-behavior-for-suspended-cpanel-accounts) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_). You can use one of the following settings:

| Setting | Description |
| --- | --- |
| _Deliver messages normally_ | This setting accepts the email message and delivers it via normal delivery logic. This includes any forwarders, or piped scripts that the account user may have set up. This option is potentially risky, as these handlers could be used by a suspended user to retain access to account resources. |
| _Accept and discard messages_ | This setting accepts the email message, but immediately discards it, and ceases further processing. |
| _Reject messages at SMTP time_ | This setting rejects the email message, and returns a permanent error code to the sending mail server. Compliant mail servers will stop any further attempts to deliver the message. <br>Note:<br>This setting’s behavior is the same as setting the _Receiving Incoming Mail_ option to _Suspend_ for an email address in cPanel’s [_Manage Email Accounts_](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#restrictions) interface ( _cPanel » Home » Email » Manage Email Accounts_). |
| _Accept and queue messages_ | This setting accepts the email message and places it in the local Exim queue temporarily. Exim will attempt delivery of the message periodically until the account is unsuspended or the message in the queue expires. By default, Exim reattempts delivery for queued messages for four days and eight hours then notifies the original sender that it could not deliver the message. This is the **default** setting. |

### Updates the Apache configuration files

The system updates Apache’s `httpd.conf` file with a Virtual Host include file for the user.

- The system creates the include file at the following location:



```perl
/etc/apache2/conf.d/includes/account_suspensions.conf
```

- This include file contains a `RedirectMatch` rule that redirects website traffic to the default template for suspended accounts.






Note:





Apache `httpd.conf` include files originate from the following lines in Apache’s `main.default` file:







|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>[% IF file_test('f', '/usr/local/apache/conf/includes/account_suspensions.conf') -%]<br>Include "/usr/local/apache/conf/includes/account_suspensions.conf"<br>[% END -%]<br>``` |


As a result, visitors cannot access the account’s websites. Instead, the system displays an account suspended message.

Note:

To edit the message that appears for a suspended account’s sites, use WHM’s [_Web Template Editor_](https://docs.cpanel.net/whm/account-functions/web-template-editor//) interface ( _WHM » Home » Account Functions » Web Template Editor_).

### Locks the shadow password

The system uses the `passwd -l` command to lock the account’s `/etc/shadow` password file. This command prepends the account’s passwords with two exclamation marks (`!!`).

The following list includes some of the effects that this action causes:

- The user **cannot** log in to their cPanel account.

- The account’s database users **cannot** log in to their databases.

- The suspended account’s password **cannot** change.


### Modifies permissions of ftp directory

The system modifies the permissions of the user’s `public_ftp` directory to `0000`.

The system then creates the `/etc/proftpd/user.suspended` file and locks the account’s FTP passwords in the `/etc/proftpd/passwd.vhosts` and `/etc/proftpd/user` password files. Finally, the system prepends the account’s FTP passwords with two exclamation marks ( `!!` ).

As a result, The account’s FTP users **cannot** log in to the FTP server.

Also, the system **cannot** back up the user’s `public_ftp` directory because of the restrictive file permissions.

### Changes MySQL user passwords

The system changes all of the MySQL users’ passwords. As a result, MySQL users cannot access their databases.

Note:

When you suspend a cPanel account, the system will **not** suspend any of the account’s Amazon RDS™ remote databases.

#### Additional Documentation

* * *

- [How to Create a Demo cPanel Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-demo-cpanel-account/)
- [How to Create a WHM Reseller Without an Associated Domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [List Suspended Accounts](https://docs.cpanel.net/whm/account-information/list-suspended-accounts/)
- [Manage Account Suspension](https://docs.cpanel.net/whm/account-functions/manage-account-suspension/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×