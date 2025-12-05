---
url: "https://docs.cpanel.net/whm/email/mailbox-conversion/"
title: "Mailbox Conversion | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/email/mailbox-conversion/#main-content)

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
3. [Email](https://docs.cpanel.net/whm/email/)
4. Mailbox Conversion


[whmui](https://docs.cpanel.net/tags/whmui/) [email](https://docs.cpanel.net/tags/email/) [dovecot](https://docs.cpanel.net/tags/dovecot/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/email/mailbox-conversion/#overview)

* * *

[Mailbox conversion warnings](https://docs.cpanel.net/whm/email/mailbox-conversion/#mailbox-conversion-warnings)

* * *

[Symlinks](https://docs.cpanel.net/whm/email/mailbox-conversion/#symlinks)

* * *

[POP email](https://docs.cpanel.net/whm/email/mailbox-conversion/#pop-email)

* * *

[Disk Usage](https://docs.cpanel.net/whm/email/mailbox-conversion/#disk-usage)

* * *

[Convert mailboxes](https://docs.cpanel.net/whm/email/mailbox-conversion/#convert-mailboxes)

* * *

[Conversion directories](https://docs.cpanel.net/whm/email/mailbox-conversion/#conversion-directories)

* * *

[Create disk space](https://docs.cpanel.net/whm/email/mailbox-conversion/#create-disk-space)

* * *

[The mdbox format](https://docs.cpanel.net/whm/email/mailbox-conversion/#the-mdbox-format)

* * *

[The maildir format](https://docs.cpanel.net/whm/email/mailbox-conversion/#the-maildir-format)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/email/mailbox-conversion/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/email/mailbox-conversion/#overview)

* * *

[Mailbox conversion warnings](https://docs.cpanel.net/whm/email/mailbox-conversion/#mailbox-conversion-warnings)

* * *

[Symlinks](https://docs.cpanel.net/whm/email/mailbox-conversion/#symlinks)

* * *

[POP email](https://docs.cpanel.net/whm/email/mailbox-conversion/#pop-email)

* * *

[Disk Usage](https://docs.cpanel.net/whm/email/mailbox-conversion/#disk-usage)

* * *

[Convert mailboxes](https://docs.cpanel.net/whm/email/mailbox-conversion/#convert-mailboxes)

* * *

[Conversion directories](https://docs.cpanel.net/whm/email/mailbox-conversion/#conversion-directories)

* * *

[Create disk space](https://docs.cpanel.net/whm/email/mailbox-conversion/#create-disk-space)

* * *

[The mdbox format](https://docs.cpanel.net/whm/email/mailbox-conversion/#the-mdbox-format)

* * *

[The maildir format](https://docs.cpanel.net/whm/email/mailbox-conversion/#the-maildir-format)

* * *

## Mailbox Conversion

![](https://docs.cpanel.net/img/whm-icons/mailbox_conversion.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/email/mailbox-conversion/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to convert the mailbox format for email addresses on a cPanel account.

- The maildir format uses flat files, which cause systems with large mail archives to exhaust their inode resources quickly.
- The mdbox format stores multiple messages in a file and uses a simpler indexing scheme. This format requires fewer files, reduces inode usage significantly, and decreases disk space usage.

## Mailbox conversion warnings

The following sections detail warnings to be aware of when using mailbox conversion.

### Symlinks

Unlike the maildir format, the mdbox format does **not** support symlinks. For example, when a cPanel account owner uses Webmail on an account that uses the maildir format, the system displays every mailbox of the account’s email users. However, on a cPanel account that uses the mdbox format, the system **only** displays the cPanel account’s mailbox. The system does not display the mailboxes of the cPanel account’s other email users.

More:

For more information about symlinks in Dovecot, read Dovecot’s [Symlinks](https://doc.dovecot.org/configuration_manual/shared_mailboxes/sharing_with_symlinks/) documentation.


### POP email

When you convert from one mailbox format to another, the unique identifier (UID) for each email message on the server will change. The system uses UIDs to identify each message that a POP email account receives. Mail clients that do not delete mail from the server use these UIDs to determine which messages to download. Due to this change in UIDs, mailbox conversions can cause POP email users to receive previously-downloaded messages as though they were new.

### Disk Usage

If you convert your mailboxes to the maildir format, you may notice a discrepancy between reported and actual disk usage for the [default email account](https://docs.cpanel.net/cpanel/email/default-address/). This occurs because a maildir mailbox adds the total default email account usage to the `INBOX` directory usage of every other email address on the cPanel account. It does not add the subfolders for any other mailbox.

## Convert mailboxes

This interface displays a summary of the accounts that use the mdbox and maildir formats. It also lists benefits and limitations for each format.

To convert an account’s mailboxes from one format to the other, perform the following steps:

1. Select the desired mailbox format and then click _Next_.
2. Select the checkboxes for each account you wish to convert and then click _Next_.

   - Use the navigation tools at the top of the table to search for and select accounts.
   - To return to the previous step in the procedure, click _Previous_.
3. Click _Convert_ to convert the mailboxes for the selected account or accounts.

   - To convert the mailboxes and keep the files for the old format, select _Keep old mailbox files_.
   - To return to the previous step in the procedure, click _Previous_.

After you click _Convert_, the interface displays the status and progress of the conversion of mailboxes, and any warnings.

### Conversion directories

When you convert mailboxes, the system creates the /storage directory in the following directories for each email account:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>/home/user/mail<br>/home/user/mail/domain/emailaccount<br>``` |

Note:

- `user` represents the cPanel account’s user.
- `domain` represents the domain.
- `emailaccount` represents the email account.

In these directories, the system stores all of the email addresses that the account received before you converted the mailbox’s format.

Warning:

Do **not** delete the `/storage` directory. Additionally, if you convert an account’s mailboxes from the maildir format to the mdbox format, do **not** delete the `/mailboxes` directory. The system **requires** these directories.


## Create disk space

The system does not include the `/storage` directory’s contents when it determines a cPanel account’s email account usage. However, the system **does** include this directory’s contents when it determines a cPanel account’s disk space usage.

### The mdbox format

To create disk space after you convert your mailboxes to the mdbox format, delete the following files:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```go<br>cur<br>.Drafts<br>.Junk<br>new<br>.Sent<br>tmp<br>.Trash	<br>``` |

### The maildir format

To create disk space after you convert your mailboxes to the maildir format, delete the `/mailboxes` directory.

#### Additional Documentation

* * *

- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Filter Incoming Emails by Country](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/)
- [Filter Incoming Emails by Domain](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/)
- [Greylisting](https://docs.cpanel.net/whm/email/greylisting/)
- [Repair Mailbox Permissions](https://docs.cpanel.net/whm/email/repair-mailbox-permissions/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×