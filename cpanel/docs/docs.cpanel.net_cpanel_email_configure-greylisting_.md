---
url: "https://docs.cpanel.net/cpanel/email/configure-greylisting/"
title: "Configure Greylisting | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/configure-greylisting/#main-content)

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
4. Configure Greylisting


[email](https://docs.cpanel.net/tags/email/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/) [greylisting](https://docs.cpanel.net/tags/greylisting/) [spam](https://docs.cpanel.net/tags/spam/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/configure-greylisting/#overview)

* * *

[Enable or disable Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/#enable-or-disable-greylisting)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/configure-greylisting/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/configure-greylisting/#overview)

* * *

[Enable or disable Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/#enable-or-disable-greylisting)

* * *

## Configure Greylisting

![](https://docs.cpanel.net/img/cpanel-icons/greylisting.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/email/configure-greylisting/)

Last modified: _2025 June 26_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to enable or disable greylisting for each domain on your account. Greylisting defends email users against spam. When you enable greylisting, the mail server will temporarily reject any email from a sender that the server does not recognize. If the email is legitimate, the server that sent it will try to send the email again after a delay. After a sufficient amount of time, the server will accept the email.

Greylisting identifies incoming email by triplets. A triplet is a collection of three pieces of data: the IP address, the sender’s address, and the recipient’s address. By deferring unknown triplets, greylisting filters spam and allows legitimate email a second chance to pass through.

Greylisting defers email by 5 minutes by default. However, your hosting provider may change this setting. Contact your hosting provider for more information about your server’s specific greylisting configuration.

Hosting providers can configure your account’s greylisting settings in WHM’s [_Greylisting_](https://docs.cpanel.net/whm/email/greylisting) interface ( _WHM» Home » Email » Greylisting_). You can view an email’s delivery status in cPanel’s [_Track Delivery_](https://docs.cpanel.net/cpanel/email/track-delivery) interface ( _cPanel » Home » Email » Track Delivery_).

Important:

This feature only appears if the following items are both true:

- Your hosting provider or system administrator enabled the _Configure Greylisting_ feature in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM » Home » Packages » Feature Manager_).
- Your hosting provider or system administrator enabled the _cPanel Greylisting Daemon_ service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).

## Enable or disable Greylisting

To enable or disable Greylisting on a domain, perform the following steps:

1. Locate the domain in the list, or enter the domain name in the _Search_ text box.
2. Click _on/off_ to enable or disable Greylisting.

To enable or disable Greylisting for all domains on your account, click the gear icon (![gear icon](https://docs.cpanel.net/img/configuregreylistinggear.png)) and select _Enable All_ or _Disable All_.

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Spam Filters](https://docs.cpanel.net/cpanel/email/spam-filters/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×