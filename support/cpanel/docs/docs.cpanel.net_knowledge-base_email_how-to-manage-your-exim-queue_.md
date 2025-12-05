---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-manage-your-exim-queue/"
title: "How to Manage Your Exim Queue | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-manage-your-exim-queue/#main-content)

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
4. How to Manage Your Exim Queue


[exim](https://docs.cpanel.net/tags/exim/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-manage-your-exim-queue/#overview)

* * *

[Exim commands to manage your email](https://docs.cpanel.net/knowledge-base/email/how-to-manage-your-exim-queue/#exim-commands-to-manage-your-email)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-manage-your-exim-queue/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-manage-your-exim-queue/#overview)

* * *

[Exim commands to manage your email](https://docs.cpanel.net/knowledge-base/email/how-to-manage-your-exim-queue/#exim-commands-to-manage-your-email)

* * *

## How to Manage Your Exim Queue

Last modified: _2023 January 5_

* * *

## Overview

This document describes how to manage your Exim queue. These commands can help facilitate how Exim sends and receives mail.

Note:

You **must** have `root`-level permissions to perform these commands. If you do not, contact your hosting provider for help with your Exim queue.

## Exim commands to manage your email

- To determine the total count of mail in the queue, use the `exim -bpc` command.

- To remove a single message from the queue, use the `exim -Mrm <MessageID>` command:

- To remove messages from a specific email account in the mail queue, use the following command:




```bash
exiqgrep -f user@compromised.tld -i | xargs exim -Mrm
```

- To delete the entire queue, use the following command:




```bash
exiqgrep -i | xargs exim -Mrm
```









Warning:





This will remove **all** email from the mail queue, which may include emails you want to send or receive. You **cannot** recover deleted emails.







Note:





If you receive a message that an email `is locked`, the system is in the process of sending the message.
For example, one message could be removed and another one could not:





```bash
Message 1JoX25-1168Q4-ME has been removed
Message ZB3747-P1rn5-23 is locked
```


#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Mail Delivery Reports](https://docs.cpanel.net/whm/email/mail-delivery-reports/)
- [Mail Queue Manager](https://docs.cpanel.net/whm/email/mail-queue-manager/)
- [View Mail Statistics Summary](https://docs.cpanel.net/whm/email/view-mail-statistics-summary/)
- [View Sent Summary](https://docs.cpanel.net/whm/email/view-sent-summary/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×