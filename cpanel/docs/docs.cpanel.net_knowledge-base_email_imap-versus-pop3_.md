---
url: "https://docs.cpanel.net/knowledge-base/email/imap-versus-pop3/"
title: "IMAP Versus POP3 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/imap-versus-pop3/#main-content)

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
4. IMAP Versus POP3


[imap](https://docs.cpanel.net/tags/imap/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/imap-versus-pop3/#overview)

* * *

[POP3](https://docs.cpanel.net/knowledge-base/email/imap-versus-pop3/#pop3)

* * *

[IMAP](https://docs.cpanel.net/knowledge-base/email/imap-versus-pop3/#imap)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/imap-versus-pop3/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/imap-versus-pop3/#overview)

* * *

[POP3](https://docs.cpanel.net/knowledge-base/email/imap-versus-pop3/#pop3)

* * *

[IMAP](https://docs.cpanel.net/knowledge-base/email/imap-versus-pop3/#imap)

* * *

## IMAP Versus POP3

Last modified: _2020 September 28_

* * *

## Overview

IMAP and POP3 are different in how and for how long they store mail on the mail server.

Note:

System administrators can enable or disable IMAP and POP3 protocols in WHM’s [_Mailserver Configuration_](https://docs.cpanel.net/whm/service-configuration/mailserver-configuration/) interface ( _WHM » Home » Service Configuration » Mailserver Configuration_).


## POP3

When you use POP3, your mail server deletes messages when you download them. That means that you can only access messages from the computer that you used to download them. Also, POP3 does **not** require a constant connection while you read email. While this system conserves your mail server’s disk resources, it limits how your users can access their email.

## IMAP

When you use IMAP, your mail server permanently stores messages. This means that you can access them through any computer as long as you have the correct login information. Also, unless you use a mail client that synchronizes folders and caches messages, IMAP requires a constant connection while you read email. While this method is more convenient than POP3, this method generally requires more dedicated disk space than POP3 because users tend not to delete old email. However, if the users monitor their disk usage and delete old messages when necessary, IMAP is still viable on a mail server with limited resources.

Web hosts and users generally prefer IMAP due to its convenience. Carefully consider your system’s available resources before you choose a courier.

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Calendar Delegation](https://docs.cpanel.net/cpanel/email/calendar-delegation/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×