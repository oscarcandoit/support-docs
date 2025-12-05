---
url: "https://docs.cpanel.net/knowledge-base/email/scan-outgoing-mail/"
title: "Scan Outgoing Mail | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/scan-outgoing-mail/#main-content)

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
4. Scan Outgoing Mail


[spamassassin](https://docs.cpanel.net/tags/spamassassin/) [exim](https://docs.cpanel.net/tags/exim/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/scan-outgoing-mail/#overview)

* * *

[Scan outgoing mail with Apache SpamAssassin](https://docs.cpanel.net/knowledge-base/email/scan-outgoing-mail/#scan-outgoing-mail-with-apache-spamassassin)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/scan-outgoing-mail/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/scan-outgoing-mail/#overview)

* * *

[Scan outgoing mail with Apache SpamAssassin](https://docs.cpanel.net/knowledge-base/email/scan-outgoing-mail/#scan-outgoing-mail-with-apache-spamassassin)

* * *

## Scan Outgoing Mail

Last modified: _2020 September 28_

* * *

## Overview

You can use the _Advanced Editor_ section of WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_) to configure your mail servers to scan outgoing mail for spam. The _outgoing\_spam\_scan (Scan outgoing messages for spam)_ feature blocks spam that your users send to your system.

Warning:

This document describes an unsupported feature that is not guaranteed to work in the future.

- After you perform these steps on a server, it is the system administrator’s responsibility to manage and maintain the server’s database software.
- We are **not** responsible for any data loss that an attempt to perform these steps causes.
- We **strongly** recommend that you set your Apache SpamAssassin™ score with the _Apache SpamAssassin™ Options_ setting in the _Basic Editor_ section of WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

## Scan outgoing mail with Apache SpamAssassin

To scan outgoing mail with Apache SpamAssassin, perform the following steps:

1. Selet the _outgoing\_spam\_scan_ checkbox to enable the feature. The box will expand to show information about the spam scan process.
2. Click _Save_.

Note:

If your system administrator has enabled one of the following settings in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_), Apache SpamAssassin scans messages that your system will forward to remote email addresses:

- _Do not forward to external recipients if it matches the Apache SpamAssassin™ internal spam\_score setting_.
- _Do not forward mail to external recipients based on the defined Apache SpamAssassin score_.

#### Additional Documentation

* * *

- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Exim Configuration Manager](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/)
- [Mail Delivery Reports](https://docs.cpanel.net/whm/email/mail-delivery-reports/)
- [Mail Queue Manager](https://docs.cpanel.net/whm/email/mail-queue-manager/)
- [Spamd Startup Configuration](https://docs.cpanel.net/whm/email/spamd-startup-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×