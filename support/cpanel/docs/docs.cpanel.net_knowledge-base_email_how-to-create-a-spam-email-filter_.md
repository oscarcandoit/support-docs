---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-create-a-spam-email-filter/"
title: "How to Create a Spam Email Filter | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-create-a-spam-email-filter/#main-content)

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
3. [Email](https://docs.cpanel.net/knowledge-base/email/)
4. How to Create a Spam Email Filter


[spamassassin](https://docs.cpanel.net/tags/spamassassin/) [spam](https://docs.cpanel.net/tags/spam/) [filters](https://docs.cpanel.net/tags/filters/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-create-a-spam-email-filter/#overview)

* * *

[Create a spam email filter](https://docs.cpanel.net/knowledge-base/email/how-to-create-a-spam-email-filter/#create-a-spam-email-filter)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-create-a-spam-email-filter/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-create-a-spam-email-filter/#overview)

* * *

[Create a spam email filter](https://docs.cpanel.net/knowledge-base/email/how-to-create-a-spam-email-filter/#create-a-spam-email-filter)

* * *

## How to Create a Spam Email Filter

Last modified: _2020 September 28_

* * *

## Overview

You can create an email filter that sorts and redirects incoming spam. This is useful if, for example, your hosting provider has not included Apache SpamAssassin™ in your cPanel account.

## Create a spam email filter

To create a spam filter, perform the following steps:

01. Navigate to cPanel’s [_Spam Filters_](https://docs.cpanel.net/cpanel/email/spam-filters/) interface ( _cPanel_ » _Home_ » _Email_ » _Spam Filters_).
02. Check whether Apache SpamAssassin is enabled. If it is not, click _Enable Apache SpamAssassin_.
03. Navigate to cPanel’s [_Global Email Filters_](https://docs.cpanel.net/cpanel/email/global-email-filters/) interface ( _cPanel_ » _Home_ » _Email_ » _Global Email Filters_).
04. Click _Create a New Filter_.
05. Enter the name of your filter in the _Filter Name_ text box.
06. Select _Spam Bar_ from the first menu in the _Rules_ section.
07. Select _contains_ from the second menu in the _Rules_ section.
08. Enter the spam score in the text box. Represent the desired spam score with plus (`+`) characters.






    Note:




    For example, to filter all of the mail to which Apache SpamAssassin has assigned a spam score of five or higher, enter `+++++` in the text box.

- Apache SpamAssassin examines every email message for spam characteristics, and then assigns it an overall score based on the number of spam-related traits found within the message.
- The lower the spam score, the more aggressive the spam filter will be.
- A spam score of five (`+++++`) is a suitable setting for a single user. ISPs should use a higher score.

09. Select _Deliver_ to folder from the menu in the _Actions_ section.
10. Enter the name of the folder to which you wish to send your spam email.
    - Click _Browse_ to see a list of your folders.
11. Click _Create_ to create, save, and activate the spam filter.

#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Email Filters](https://docs.cpanel.net/cpanel/email/email-filters/)
- [Spam Filters](https://docs.cpanel.net/cpanel/email/spam-filters/)
- [Spamd Startup Configuration](https://docs.cpanel.net/whm/email/spamd-startup-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×