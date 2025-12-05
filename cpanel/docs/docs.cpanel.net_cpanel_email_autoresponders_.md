---
url: "https://docs.cpanel.net/cpanel/email/autoresponders/"
title: "Autoresponders | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/autoresponders/#main-content)

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
4. Autoresponders


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/autoresponders/#overview)

* * *

[Current autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/#current-autoresponders)

* * *

[Add an autoresponder](https://docs.cpanel.net/cpanel/email/autoresponders/#add-an-autoresponder)

* * *

[Add an autoresponder in Webmail](https://docs.cpanel.net/cpanel/email/autoresponders/#add-an-autoresponder-in-webmail)

* * *

[Edit an autoresponder](https://docs.cpanel.net/cpanel/email/autoresponders/#edit-an-autoresponder)

* * *

[Remove an autoresponder](https://docs.cpanel.net/cpanel/email/autoresponders/#remove-an-autoresponder)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/autoresponders/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/autoresponders/#overview)

* * *

[Current autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/#current-autoresponders)

* * *

[Add an autoresponder](https://docs.cpanel.net/cpanel/email/autoresponders/#add-an-autoresponder)

* * *

[Add an autoresponder in Webmail](https://docs.cpanel.net/cpanel/email/autoresponders/#add-an-autoresponder-in-webmail)

* * *

[Edit an autoresponder](https://docs.cpanel.net/cpanel/email/autoresponders/#edit-an-autoresponder)

* * *

[Remove an autoresponder](https://docs.cpanel.net/cpanel/email/autoresponders/#remove-an-autoresponder)

* * *

## Autoresponders

![](https://docs.cpanel.net/img/cpanel-icons/autoresponders.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/email/autoresponders/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This feature allows you to configure automatic email response messages. This is useful, for example, when the recipient is unavailable.

Note:

When you activate an autoresponder, the system still delivers messages to the inbox as usual.

## Current autoresponders

To view the autoresponders for a specific domain on your account, select that domain from the _Managing_ menu on the top right side of the _Autoresponders_ interface. A list of that domain’s autoresponders will appear.

To find an autoresponder’s specific email address, enter a keyword in the _Search_ text box and click _Go_.

Important:

User-defined autoresponders ignore messages to which the [_Spam Filters_](https://docs.cpanel.net/cpanel/email/spam-filters/) feature assigns a score of `5` or higher.

## Add an autoresponder

To add an autoresponder, perform the following steps:

01. Click _Add Autoresponder_. A new interface will appear.

02. Select a character set from the _Character Set_ menu.







    Note:





    The Character Set value defaults to `utf-8`. For more information, read our [Guide to Locales - Why You Should Use UTF-8](https://api.docs.cpanel.net/guides/guide-to-locales/guide-to-locales-why-you-should-use-utf-8/) documentation.

03. Enter the interval, in hours, for the autoresponder to wait between responses to the same email address.
    - For example, an autoresponder with an interval of _24_ that receives an email at 8:00 AM on Monday immediately responds to the message. The autoresponder does not respond again if it receives a message from the same email address before 8:00 AM on Tuesday.






      Note:




      If you set the interval to _0_, the system sends an autoresponse to every email.
04. In the _Email_ text box, enter the email address for which to respond.







    Important:





    You can only add one autoresponder for each email address. If you attempt to add multiple autoresponders for an email address, an error message will appear in the interface.

05. In the _From_ text box, enter the username to appear in the response.

06. In the _Subject_ text box, enter the subject to appear in the response.

07. If the response message includes HTML tags, select the _HTML_ checkbox.

08. In the _Body_ text box, enter the text of the response, for example:



    ```perl
    I am out of the office until July 2nd. You can reach me on my cell phone in case of emergencies.
    ```





    Note:




    You can use the `%subject%`, `%from%`, and `%email%` tags in the body of the message to represent information, such as the incoming email’s sender or subject. Tags use percentage signs (`%`) as markers.


09. Select a start time. You can choose _Immediately_ or _Custom_.







    Note:





- The system bases the time on the user’s workstation operating system time and translates it into [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) (GMT).
- This feature uses 12-hour notation and reformats times in 24-hour notation. For example, if you select `18:30` as the start time, the system automatically reformats the time as `6:30 PM`.

10. Select a stop time later than the given start time. You can choose _Never_ or _Custom_.

11. Click _Create_.


### Add an autoresponder in Webmail

Important:

You can only add autoresponders for non-default email accounts in Webmail. You cannot add an autoresponder for the default email account in Webmail.

You can add an autoresponder for your email account in Webmail. To do this, perform the following steps:

1. Log in to your Webmail interface at `https://example.com:2096`, where `example.com` represents your email address’s domain.

2. From the email address menu at the top right corner of the interface, select _Autoresponders_. The _Autoresponders_ interface will appear.

3. Follow the directions in the add an autoresponder section to add the autoresponder.


All email messages to your email account will receive this autoresponse until you remove it.

## Edit an autoresponder

To edit an autoresponder, perform the following steps:

1. Locate the autoresponder that you want to edit in the _Current Autoresponders_ table and click _Edit_. A new interface will appear.

2. Edit the autoresponder’s information.

3. Click _Modify_.


## Remove an autoresponder

To delete an autoresponder, perform the following steps:

1. Locate the autoresponder that you want to delete in the _Current Autoresponders_ table and click _Delete_. A confirmation message will appear.

2. Click _Delete Autoresponder_.


#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×