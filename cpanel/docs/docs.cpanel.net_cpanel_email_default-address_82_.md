---
url: "https://docs.cpanel.net/cpanel/email/default-address/82/"
title: "Default Address | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/default-address/82/#main-content)

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
4. Default Address


[email](https://docs.cpanel.net/tags/email/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/default-address/82/#overview)

* * *

[What is a default address?](https://docs.cpanel.net/cpanel/email/default-address/82/#what-is-a-default-address)

* * *

[Default Address Maintenance](https://docs.cpanel.net/cpanel/email/default-address/82/#default-address-maintenance)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/default-address/82/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/default-address/82/#overview)

* * *

[What is a default address?](https://docs.cpanel.net/cpanel/email/default-address/82/#what-is-a-default-address)

* * *

[Default Address Maintenance](https://docs.cpanel.net/cpanel/email/default-address/82/#default-address-maintenance)

* * *

## Default Address

![](https://docs.cpanel.net/img/cpanel-icons/default_address.svg)

_Valid for versions 82 through 128_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/email/default-address/82/)

#### [130](https://docs.cpanel.net/cpanel/email/default-address/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to set up a default address (a catch-all address) that receives any mail for an invalid email address for the domain. You can also define how the default address handles incoming messages.

The default address may receive messages for your existing email addresses if they contain typos or other issues. For example, if your email address is `user@example.com` but a sender uses `user_1@example.com`, the default address will receive it. Check your domains’ default addresses **often** for missing messages.

Note:

- If spammers target your domain and you forward mail to a default address, that address may receive a large amount of spam.
- Domain forwarders override the domain’s default address. For more information, read our [Forwarders](https://docs.cpanel.net/cpanel/email/forwarders) documentation.

## What is a default address?

Most domains receive email messages for invalid or nonexistent email addresses on the domain. Normally, the system forwards them to the default address. The system uses the default email account as the default address until you change it. We recommend that you set up a default address for each of your domains to ensure that you receive all of the email for your domain.

Note:

Default addresses are **not** the same as the system default email account.

- The system uses the system default email address as the sender of system or script-generated messages.
- To manage the system default address, locate the email address that you want to edit in cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts) interface ( _cPanel » Home » Email » Email Accounts_) and click _Manage_.

## Default Address Maintenance

To set or update a default address for your domain, perform the following steps:

1. From the cPanel _Home_ interface, select _Default Address_ in the _Email_ section.
2. From the _Send all unrouted email for the following domain_ menu, select the domain for which you wish to set or update a default address.
3. Select one of the following settings:
   - _Discard the email while your server processes it by SMTP time with an error message_ — Select this setting to send an error message to the sender. Then, enter an error message in the _Failure Message (seen by sender)_ text box.
   - _Forward to Email Address_ — Select this setting to forward mail to another address. Then, enter the email address or your cPanel account’s username in the _Forward to Email Address_ text box.
4. Click _Advanced Options_ to view the following additional settings:

   - _Forward to your system account_ — Select this setting to forward mail to the system account.
   - _Pipe to a Program_ — Select this setting to forward messages to a program at the path that you define in the available text box.






     More:





     For more information, read our [How to Configure Email Filters](https://docs.cpanel.net/knowledge-base/email/how-to-configure-email-filters/) documentation.

   - _Discard (Not Recommended)_ — Select this setting to delete incoming messages and **not** send a failure notice.






     Important:





     We recommend that you choose a different setting. If you choose this setting, the sender will **not** know that the delivery failed.
5. Click _Change_.

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