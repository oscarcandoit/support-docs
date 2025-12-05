---
url: "https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/"
title: "How to Manage Spam in Roundcube | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#main-content)

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
3. [Webmail](https://docs.cpanel.net/knowledge-base/webmail/)
4. How to Manage Spam in Roundcube


[roundcube](https://docs.cpanel.net/tags/roundcube/) [webmail](https://docs.cpanel.net/tags/webmail/) [spam](https://docs.cpanel.net/tags/spam/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#overview)

* * *

[The Junk folder](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#the-junk-folder)

* * *

[The Junk/Not junk button](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#the-junknot-junk-button)

* * *

[Mark a message as spam](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#mark-a-message-as-spam)

* * *

[Mark a message as ham](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#mark-a-message-as-ham)

* * *

[The Empty Junk button](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#the-empty-junk-button)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#overview)

* * *

[The Junk folder](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#the-junk-folder)

* * *

[The Junk/Not junk button](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#the-junknot-junk-button)

* * *

[Mark a message as spam](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#mark-a-message-as-spam)

* * *

[Mark a message as ham](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#mark-a-message-as-ham)

* * *

[The Empty Junk button](https://docs.cpanel.net/knowledge-base/webmail/how-to-manage-spam-in-roundcube/#the-empty-junk-button)

* * *

## How to Manage Spam in Roundcube

Last modified: _2024 March 27_

* * *

## Overview

Roundcube 1.5 and higher provide features to help you manage spam messages you receive. This document explains how to use these features.

## The Junk folder

When you create a new email account, the system creates both the _Junk_ and _spam_ system directories. Roundcube uses the _spam_ system directory for spam messages but displays them in the _Junk_ folder with the flame icon (![Roundcube flame](https://docs.cpanel.net/img/roundcube-flame-icon.png)).

## The Junk/Not junk button

The _Junk_ and _Not junk_ buttons in the upper-right section of the top menu bar train SpamAssassin™ to recognize [spam](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#spam) and [ham](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#ham). When you select a message in a non- _Junk_ folder to mark as spam, the _Junk_ button (![Junk](https://docs.cpanel.net/img/roundcube-junk-icon.png)) becomes active. When you select a message in the _Junk_ folder to mark as ham, the _Not junk_ button (![Not junk](https://docs.cpanel.net/img/roundcube-not-junk-icon.png)) becomes active.

### Mark a message as spam

To mark a message as [spam](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#spam), select the message in any folder other than the _Junk_ folder. Click _Junk_ to mark the message as spam and move it to the _Junk_ folder.

### Mark a message as ham

To mark a message as [ham](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#ham), select the message in the _Junk_ folder. Click _Not junk_ to mark the message as ham and move it out of the _Junk_ folder.

## The Empty Junk button

The _Empty Junk_ button (![Empty Junk](https://docs.cpanel.net/img/empty-junk.png)) allows you to remove all the messages in the _Junk_ folder at once. The _Empty Junk_ button appears above the messages in the _Junk_ folder once you select that folder. When you click the _Empty Junk_ button, Roundcube moves the messages in the _Junk_ folder to the _Trash_ folder.

To empty the _Junk_ folder:

1. Select the _Junk_ folder, then click _Empty_.
2. A dialogue box appears. Click _Delete_ to remove all of the messages in the _Junk_ folder.

Note:

- To remove messages completely, you **must** delete them in the _Trash_ folder after you remove them with the _Empty Junk_ button.
- The _Empty Junk_ button does **not** appear in the original Roundcube interface skin or in the mobile Roundcube interface.

#### Additional Documentation

* * *

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [How to Manually Migrate Horde Data to Roundcube](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/)
- [Spam Filters](https://docs.cpanel.net/cpanel/email/spam-filters/)
- [The export\_horde\_calendars\_to\_ics Script](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×