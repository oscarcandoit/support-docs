---
url: "https://docs.cpanel.net/whm/email/mail-troubleshooter/"
title: "Mail Troubleshooter | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/email/mail-troubleshooter/#main-content)

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
4. Mail Troubleshooter


[whmui](https://docs.cpanel.net/tags/whmui/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/email/mail-troubleshooter/#overview)

* * *

[How to trace a mail route](https://docs.cpanel.net/whm/email/mail-troubleshooter/#how-to-trace-a-mail-route)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/email/mail-troubleshooter/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/email/mail-troubleshooter/#overview)

* * *

[How to trace a mail route](https://docs.cpanel.net/whm/email/mail-troubleshooter/#how-to-trace-a-mail-route)

* * *

## Mail Troubleshooter

![](https://docs.cpanel.net/img/whm-icons/mail_troubleshooter.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/email/mail-troubleshooter/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This feature traces an email’s route from your server to a specified address in order to highlight issues along the delivery path. This feature is useful, for example, to detect potential issues after you reconfigure your mail system.

Note:

For steps to troubleshoot IPv6-related issues, read our [Guide to IPv6](https://docs.cpanel.net/knowledge-base/ipv6/guide-to-ipv6/) documentation.

## How to trace a mail route

To trace a mail route, perform the following steps:

1. In the _Email to trace_ text box, enter the email address that you wish to trace.
2. Click _Submit_.

A list of steps and their outcomes will appear on the following interface. Refer to the legend at the bottom of the interface for information about each box’s contents.

For example, an email address with a successful trace will appear in a green box with a message that resembles the following: ![A message that starts with the searched email address, then gives the IP address, mail exchanger priority, and DNSSEC use of the email server](https://docs.cpanel.net/img/example-mail-troubleshooter-success.png)

This message shows the email server’s IP address, its [mail exchanger priority](https://en.wikipedia.org/wiki/MX_record#Overview), and whether it uses [DNSSEC](https://docs.cpanel.net/knowledge-base/dns/dnssec/).

Note:

If users are **not** receiving emails that you have successfully traced, they should check their `SPAM` folders.

An email address that does **not** have a successful trace will appear in a red box with a message that details where the trace failed. For example, if your trace failed because the email server does not exist, your trace message will include the phrase `fail_remote_domains` warning. If you trace the email address `example@misspelled-example.com`, but the user you want to contact uses the email address `example@correctly-spelled-example.com`, the `fail_remote_domains` warning can highlight that error.

#### Additional Documentation

* * *

- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Filter Incoming Emails by Country](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/)
- [Filter Incoming Emails by Domain](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/)
- [Greylisting](https://docs.cpanel.net/whm/email/greylisting/)
- [Mail Delivery Reports](https://docs.cpanel.net/whm/email/mail-delivery-reports/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×