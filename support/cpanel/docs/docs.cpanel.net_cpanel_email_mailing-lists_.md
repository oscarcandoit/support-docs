---
url: "https://docs.cpanel.net/cpanel/email/mailing-lists/"
title: "Mailing Lists | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/mailing-lists/#main-content)

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
4. Mailing Lists


[mailman](https://docs.cpanel.net/tags/mailman/) [email](https://docs.cpanel.net/tags/email/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/mailing-lists/#overview)

* * *

[Create a mailing list](https://docs.cpanel.net/cpanel/email/mailing-lists/#create-a-mailing-list)

* * *

[View current mailing lists](https://docs.cpanel.net/cpanel/email/mailing-lists/#view-current-mailing-lists)

* * *

[Manage a mailing list](https://docs.cpanel.net/cpanel/email/mailing-lists/#manage-a-mailing-list)

* * *

[Change a mailing list password](https://docs.cpanel.net/cpanel/email/mailing-lists/#change-a-mailing-list-password)

* * *

[Delegate a mailing list](https://docs.cpanel.net/cpanel/email/mailing-lists/#delegate-a-mailing-list)

* * *

[Delete a mailing list](https://docs.cpanel.net/cpanel/email/mailing-lists/#delete-a-mailing-list)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/mailing-lists/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/mailing-lists/#overview)

* * *

[Create a mailing list](https://docs.cpanel.net/cpanel/email/mailing-lists/#create-a-mailing-list)

* * *

[View current mailing lists](https://docs.cpanel.net/cpanel/email/mailing-lists/#view-current-mailing-lists)

* * *

[Manage a mailing list](https://docs.cpanel.net/cpanel/email/mailing-lists/#manage-a-mailing-list)

* * *

[Change a mailing list password](https://docs.cpanel.net/cpanel/email/mailing-lists/#change-a-mailing-list-password)

* * *

[Delegate a mailing list](https://docs.cpanel.net/cpanel/email/mailing-lists/#delegate-a-mailing-list)

* * *

[Delete a mailing list](https://docs.cpanel.net/cpanel/email/mailing-lists/#delete-a-mailing-list)

* * *

## Mailing Lists

![](https://docs.cpanel.net/img/cpanel-icons/mailing_lists.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/email/mailing-lists/)

Last modified: _2025 July 8_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Mailing lists allow you to use a single address to send mail to multiple email addresses. cPanel handles mailing lists with the third-party Mailman application. For more information, read the [Mailman documentation](http://www.list.org/docs.html).

Note:

For this interface to appear, hosting providers must enable the feature **and** enable the following settings:

- The _Enable Mailman mailing lists_ setting in the _Mail_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).
- The _Mailman_ checkboxes in the _Enabled_ and _Monitor_ columns of WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).

Even with these settings enabled, the Mailman service will not start until the server hosts at least one mailing list.

## Create a mailing list

The system includes an interface that allows you to define a name, password, and domain name for the mailing list.

To add a new mailing list, perform the following steps:

1. Enter the mailing list name in the _List Name_ text box.






Note:





The mailing list name **must** only contain letters, numbers, underscore characters (`_`), periods (`.`), or dash characters (`-`). You **cannot** use spaces.

2. Select the domain for the mailing list from the _Domain_ menu.
3. Enter and confirm the new password in the appropriate text boxes.






Note:





- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.
- Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.
- Click _Password Generator_ to generate a strong password. For more information, read our [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security) documentation.

4. Select one of the following privacy options:
   - _Private_ — Private archives exist for this mailing list. The administrator **must** approve subscriptions, and the _Mailman_ interface does not display the mailing list.
   - _Public_ — Public archives exist for this mailing list. The subscriptions are open and the _Mailman_ interface displays the list.
5. Click _Add_ to create the new mailing list.

After you create a mailing list, use the functions below to modify, delete, or change the password.

## View current mailing lists

The _Current Lists_ section of the interface displays the mailing lists on the account. To search for a mailing list, enter a keyword in the _Search_ text box.

The following information describes the _Current Lists_ table:

- _List Name_ — The mailing list’s full email address.
- _Usage_ — The amount of disk space that the mailing list uses.
- _Access_ — The user’s level of access to the mailing list.

  - _Private_ — Private archives exist for this mailing list. The administrator **must** approve subscriptions, and the _Mailman_ interface does not display the mailing list.
  - _Public_ — Public archives exist for this mailing list. The subscriptions are open and the _Mailman_ interface displays the list.
- _Admin_ — A row-delimited list of email addresses of the mailing list administrators.
- _Functions_ — Administrative functions for the mailing list (see below).

### Manage a mailing list

To manage a mailing list, perform the following steps:

1. In the _Current Lists_ section of the interface, find the name of the mailing list you want to manage. Or, enter part of the mailing list name in the _Search_ box and click _Go_.
2. In the _Functions_ column, click _Manage_ next to the name of the mailing list. The system automatically logs you in to the Mailman application. The Mailman administration interface for that list will appear.

Note:

You can also go directly to the Mailman administration URL for the list in the format of `https://example.com/mailman/admin/list_example.com`, where `example.com` is your domain name and `list` is the list name. However, you **must** enter the list password to log in via the Mailman URL.

In the Mailman administration interface, you can add or remove addresses and configure various mailing list options. For more information, read our [How to Manage Mailman Mailing Lists](https://docs.cpanel.net/knowledge-base/email/how-to-manage-mailman-mailing-lists) documentation.

### Change a mailing list password

You can use this interface to change the password for a mailing list without the old password. This is useful, for example, to recover control of your mailing list if you forget or lost the password.

To change the password for a mailing list, perform the following steps:

1. In the _Current Lists_ section of the interface, find the name of the mailing list you want to manage. Or, enter part of the mailing list name in the _Search_ box and click _Go_.
2. In the _Functions_ column, click _Change Password_ next to the name of the mailing list. A new interface will appear.
3. Enter and confirm the new password in the appropriate text boxes.






Note:





- The system evaluates the password that you enter on a scale of 100 points. `0` indicates a weak password, while `100` indicates a very secure password.
- Some web hosts require a minimum password strength. A green password _Strength_ meter indicates that the password is equal to or greater than the required password strength.
- Click _Password Generator_ to generate a strong password. For more information, read our [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security) documentation.

4. Click _Change Password_ to activate the new password.

### Delegate a mailing list

You can delegate administrative rights on a mailing list to specified list members. Delegates can approve messages that await approval.

Important:

Delegation comes with a security risk, as this grants the virtual user administration rights to the mailing list. These elevated privileges can take over the main cPanel account. Use this functionality **only** with users whom you know and trust.

To manage the _Delegation_ settings on a mailing list, click _Delegation_ for that mailing list.

#### Delegate administrative rights to an additional user

To delegate administrative rights on a mailing list, perform the following steps:

1. Under _Available Users_, select the email addresses of the users to whom to delegate administrative rights.
2. Click the right arrow.
3. Click _Save_.

#### Remove administrative rights from a user

To remove administrative rights from an address on a mailing list, perform the following steps:

1. Under _List Administrators_, select the email addresses of the users from whom to remove administrative rights.
2. Click the left arrow.
3. Click _Save_.

### Delete a mailing list

To delete a mailing list, perform the following steps:

1. In the _Current Lists_ section of the interface, find the name of the mailing list you want to manage. Or, enter part of the mailing list name in the _Search_ box and click _Go_.
2. In the _Functions_ column, click _Delete_ next to the name in the list. A new interface will appear.
3. Click _Delete Mailing List_ to confirm.

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×