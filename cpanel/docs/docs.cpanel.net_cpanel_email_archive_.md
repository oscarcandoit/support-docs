---
url: "https://docs.cpanel.net/cpanel/email/archive/"
title: "Archive | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/archive/#main-content)

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
3. [Email](https://docs.cpanel.net/cpanel/email/)
4. Archive


[email](https://docs.cpanel.net/tags/email/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/archive/#overview)

* * *

[Default Archive Configuration](https://docs.cpanel.net/cpanel/email/archive/#default-archive-configuration)

* * *

[Manage Archiving](https://docs.cpanel.net/cpanel/email/archive/#manage-archiving)

* * *

[Modify a domain’s email archive](https://docs.cpanel.net/cpanel/email/archive/#modify-a-domains-email-archive)

* * *

[IMAP Access](https://docs.cpanel.net/cpanel/email/archive/#imap-access)

* * *

[Download Archives](https://docs.cpanel.net/cpanel/email/archive/#download-archives)

* * *

[Access Webmail](https://docs.cpanel.net/cpanel/email/archive/#access-webmail)

* * *

[Manage Disk Usage](https://docs.cpanel.net/cpanel/email/archive/#manage-disk-usage)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/archive/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/archive/#overview)

* * *

[Default Archive Configuration](https://docs.cpanel.net/cpanel/email/archive/#default-archive-configuration)

* * *

[Manage Archiving](https://docs.cpanel.net/cpanel/email/archive/#manage-archiving)

* * *

[Modify a domain’s email archive](https://docs.cpanel.net/cpanel/email/archive/#modify-a-domains-email-archive)

* * *

[IMAP Access](https://docs.cpanel.net/cpanel/email/archive/#imap-access)

* * *

[Download Archives](https://docs.cpanel.net/cpanel/email/archive/#download-archives)

* * *

[Access Webmail](https://docs.cpanel.net/cpanel/email/archive/#access-webmail)

* * *

[Manage Disk Usage](https://docs.cpanel.net/cpanel/email/archive/#manage-disk-usage)

* * *

## Archive

![](https://docs.cpanel.net/img/cpanel-icons/archive.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/email/archive/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Warning:

The _Archive_ interface does **not** appear in your cPanel interface unless your system administrator enables the following settings:

- The _Enable Email Archiving_ support setting in the _Mail_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).
- The _Email Archiving_ feature in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_) for your account’s feature list.

This interface allows you to save incoming, outgoing, and mailing list messages for a specified amount of time. The system stores the messages in the mail directory in the user’s home directory. Each day, the system generates a new directory with the `archivetype.YYYY-MM-DD` format that contains all of the specified archive type’s messages.

- When the system receives a message, it immediately archives the message.
  - This action occurs **before** the system applies any filters.
  - The system archives both spam **and** non-spam emails.
- The system does **not** archive messages that you receive before you enable the Archive feature.

You can view the messages in the cPanel interface or in a mail client.

Note:

- This feature uses the [Greenwich Mean Time (GMT)](http://en.wikipedia.org/wiki/Greenwich_Mean_Time) time zone to name directories, select messages to store in each directory, and timestamp messages. You **cannot** change this setting.
- The amount of disk space that the system uses to archive messages increases in accordance with the length of time that you store mail. Make **certain** that significant space exists on your disk drive before you enable the Archive feature for a domain on your cPanel account.

## Default Archive Configuration

To enable a default archiving configuration for all of your domains, perform the following steps:

1. Select the desired archive type.
2. Select the length of time for the system to retain messages in the archive. The interface will display a message that the _Archive_ feature is enabled.
3. Click _Apply to All My Domains_ to apply the default configuration to all of your domains.

## Manage Archiving

The _Manage Archiving_ table lists the archiving settings for each of your domains.

### Modify a domain’s email archive

To make changes to an existing email archive configuration, perform the following steps:

1. In the table, locate the domain for which you wish to enable the email archive.
2. Select the desired archive type.
3. Select the length of time for the system to retain messages in the archive. The interface will display a message that the _Archive_ feature is enabled.

### IMAP Access

You can view messages in multiple ways through an IMAP connection.

#### Automatic Configuration Scripts

To use a cPanel-provided automatic configuration script, perform the following steps:

1. Click the _IMAP Access_ option next to the domain for which you wish to view messages. The _Archive Mail Client Configuration_ interface will display.
2. Select either _IMAP over SSL/TLS (recommended)_ or IMAP for your chosen mail client.
3. Follow the instructions to complete the setup.
4. Use the provided settings to manually set up a read-only configuration via IMAP.

#### Manual Settings

To manually configure your mail client, perform the following steps:

1. Click the _IMAP Access_ option next to the domain whose messages you wish to view.
2. In the selected mail client, provide the following information, where `example.com` represents your domain name:

   - Mail Server Username: `archive@example.com`
     - Your password is the same as your cPanel account password.
   - Incoming Mail Server: (SSL) `mail.example.com`
     - IMAP port: `993`
   - Incoming Mail Server: (non-SSL) `mail.example.com`
     - IMAP port: `143`
3. After you provide the information to your mail client, the daily directories appear in the folder list.

### Download Archives

To download the archives to your local computer, perform the following steps:

1. Click the _Download Archives_ option next to the domain for which you wish to view messages.
2. Select from the following options:
   - _All archives_
   - _Incoming_
   - _Mailing Lists_
   - _Outgoing_
3. The system downloads a `.zip` file that contains the archived messages to your local computer.

### Access Webmail

Click the _Access Webmail_ link to view archived messages through Webmail.

Note:

You may need to perform additional steps in some webmail clients. For more information, read our [How to Manage Webmail Folders](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-webmail-folders/) documentation.

### Manage Disk Usage

You can delete messages from the archives to free up disk space.

To delete messages from the archives, perform the following steps:

1. Click _Access Webmail_ for the domain that you wish to manage. The _Webmail_ interface will appear.
2. In the top-right corner of the interface, click your archive’s email address. The _User Preferences_ menu will appear.
3. Click _Manage Disk Usage_. The _Manage Disk Usage_ interface will appear.
4. Click _Manage_ for the mailbox that you wish to manage.
5. In the _Messages to delete_ menu, select the message filter that you wish to use:

   - _1 year or more._
   - _30MB in size or more._
   - _Previously viewed._
   - _All messages._
   - _Custom query._ — This option allows you to use [Dovecot query language](https://wiki2.dovecot.org/Tools/Doveadm/SearchQuery) to make your own filter.
6. Click _Delete Permanently_. A success message will appear.

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×