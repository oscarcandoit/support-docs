---
url: "https://docs.cpanel.net/cpanel/email/address-importer/"
title: "Address Importer | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/address-importer/#main-content)

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
4. Address Importer


[forwarders](https://docs.cpanel.net/tags/forwarders/) [email](https://docs.cpanel.net/tags/email/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/address-importer/#overview)

* * *

[Create the import file](https://docs.cpanel.net/cpanel/email/address-importer/#create-the-import-file)

* * *

[Import the file](https://docs.cpanel.net/cpanel/email/address-importer/#import-the-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/address-importer/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/address-importer/#overview)

* * *

[Create the import file](https://docs.cpanel.net/cpanel/email/address-importer/#create-the-import-file)

* * *

[Import the file](https://docs.cpanel.net/cpanel/email/address-importer/#import-the-file)

* * *

## Address Importer

![](https://docs.cpanel.net/img/cpanel-icons/address_importer.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/email/address-importer/82/)

#### [130](https://docs.cpanel.net/cpanel/email/address-importer/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

With the Address Importer, you can create multiple email addresses or forwarders for your account at the same time. You can use Microsoft® Excel® spreadsheet files (`.xls`) or comma-separated values sheet (CSV) files (`.csv`) to import data.

Note:

cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):

- Editing DNS
- Email services
- Search Engine Optimization

## Create the import file

To create the import file, add a series of email addresses and passwords to a spreadsheet or a plain text file. Each email account or forwarder must use a separate row in the spreadsheet or a new line in the plain text file.

Enter the following information for each email address or forwarder:

- Usernames (for example, `user1` or `user@example.com`).





Note:




The interface does **not** require the domain portion of the address (for example, `@example.com`).


- Passwords (to import email addresses).
- Quotas (for example, `10` indicates 10 megabytes).

A `.csv` file is a plain text file with the `.csv` extension. When you use a `.csv` file, separate your email addresses and passwords consistently. Use commas (`,`), periods (`.`), or any other character (delimiter), to separate the information that you wish to import for each account.

Your `.csv` file will resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>user1@example.com, Password, 10<br>user2@example.com, Password, 10<br>user3@example.com, Password, 10<br>``` |

Note:

You must enter passwords with a strength rating of “65” or higher. You can generate strong passwords with the Password Generator from the [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security/#password-generator) interface ( _cPanel » Home » Preferences » Password & Security_).


## Import the file

Import the file to create the accounts. cPanel uses the information in the file to create all of the accounts automatically.

To import the file, perform the following steps:

1. In _Step 1_, select _E-mail Accounts_ or _Forwarders_, depending on what you want to import.
2. In _Step 2_, click _Choose File_ to select the file to import.
3. If you are importing a `.csv` file, in _Step 3_, select the character that you used as the delimiter. If you used a delimiter that does not appear in the list, select _Other_ and enter that character in the _Other_ text box. If you are importing an `.xls` file, skip to the next step.
4. Select _Treat first row as column headers_ if you placed column headers in the first row of the file.
5. Click _Next_.
6. Use the menus above each column of values to assign the properties of each delimited value.
   - For example, if you chose to use a comma as the delimiter, and input the line `account`, `password`, `domain`, use the menus above each value to assign `account` to _Email_, `password` to _Password_, and `domain` to _Domain_.
   - Select _Ignore_ for columns that contain unnecessary data.
7. From the _Domain_ menu at the bottom of the interface, select the domain to use for these accounts.
8. Click _Next_.
9. Click _Finish_.

Click _Import More_ to return to the first screen of this interface and import additional addresses.

#### Additional Documentation

* * *

- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Forwarders](https://docs.cpanel.net/cpanel/email/forwarders/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×