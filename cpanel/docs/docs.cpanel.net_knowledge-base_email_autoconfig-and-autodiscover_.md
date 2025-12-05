---
url: "https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/"
title: "AutoConfig and Autodiscover | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/#main-content)

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
4. AutoConfig and Autodiscover


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/#overview)

* * *

[Enable AutoConfig and Autodiscover](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/#enable-autoconfig-and-autodiscover)

* * *

[Additional settings](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/#additional-settings)

* * *

[Use AutoConfig and Autodiscover](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/#use-autoconfig-and-autodiscover)

* * *

[Apple mail clients](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/#apple-mail-clients)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/#overview)

* * *

[Enable AutoConfig and Autodiscover](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/#enable-autoconfig-and-autodiscover)

* * *

[Additional settings](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/#additional-settings)

* * *

[Use AutoConfig and Autodiscover](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/#use-autoconfig-and-autodiscover)

* * *

[Apple mail clients](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/#apple-mail-clients)

* * *

## AutoConfig and Autodiscover

Last modified: _2025 May 15_

* * *

## Overview

The AutoConfigure (AutoConfig) and Autodiscover services quickly and easily configure a user’s mail client to receive their cPanel email. These services work with Microsoft Outlook®, Outlook Express®, Thunderbird, and most other popular mail clients.

Warning:

The Autodiscover feature doesn’t work with email addresses that you add in the following mail clients:

- Microsoft Outlook 2016
- Microsoft Outlook 2019
- Microsoft Outlook for Office 365
- Any mobile mail client.

## Enable AutoConfig and Autodiscover

To enable AutoConfig and Autodiscover, perform the following steps:

1. Navigate to the _Domains_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_).
2. Locate the _Service subdomains_ setting. If the setting is disabled, select _On_.
3. Locate the _Thunderbird and Outlook autodiscover and autoconfig support (enables service subdomain and SRV record creation)_ setting and select _On_.
4. Click _Save_.

Note:

- In cPanel & WHM version 120 and later, we enable the _Service subdomains_ and _Thunderbird and Outlook autodiscover and autoconfig support (enables service subdomain and SRV record creation)_ settings by default. For more information, read the _Domains_ section of our [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#domains) documentation.
- For more information on service subdomains, read our [Service and Proxy Subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains) documentation.

## Additional settings

You can find the following additional AutoConfig and Autodiscover settings in the _Domains_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM » Home » Server Configuration » Tweak Settings_):

- _Preferred mail service to configure to use for Thunderbird and Outlook® autodiscover and autoconfig support_ — This setting allows you to choose the email transfer method to use with Thunderbird and Outlook with Autodiscover and AutoConfig support.
  - This setting defaults to _imap_.






    Note:





- We recommend that you select IMAP and not POP3.
- You **must** enable the _Thunderbird and Outlook autodiscover and autoconfig support (enables service subdomain and SRV record creation)_ option in order to configure this setting.
- _Host to publish in the SRV records for Outlook autodiscover support._ — Microsoft Outlook’s Autodiscover service searches DNS for an SRV record for an email inbox’s domain that points to a particular server for Autodiscover. By default, this server is `cpanelemaildiscovery.cpanel.net`.


This setting allows system administrators to perform the following actions:

- Choose the host that the system publishes to the SRV records.
- Change the default host if they have an SSL-enabled host with an SSL certificate that a Certificate Authority signs.
- Use their own server for Outlook® Autodiscover. Enter that server’s Fully Qualified Domain Name (FQDN) in the available text box.
- When you enable the _Host to publish in the SRV records for Outlook autodiscover support_ feature, the system queries the server that you specify for the Autodiscover settings.
- You **must** have a custom XML file for this feature to function properly.

This setting defaults to `cpanelemaildiscovery.cpanel.net`.

Note:

- For more information about how to use a custom XML file, visit Mozilla’s [autoconfiguration](https://wiki.mozilla.org/Thunderbird:Autoconfiguration) documentation, or Microsoft Exchange’s [Autodiscover](https://learn.microsoft.com/en-us/exchange/client-developer/exchange-web-services/autodiscover-for-exchange) documentation.
- You **must** enable the _Thunderbird and Outlook autodiscover and autoconfig support (enables service subdomain and SRV record creation)_ option in order to configure this setting.

For more information about Microsoft Outlook’s Autodiscover feature, visit Microsoft’s [Support](https://docs.microsoft.com/en-us/exchange/architecture/client-access/autodiscover?view=exchserver-2019) website.

Warning:

We recommend that you use signed certificates that a Certificate Authority (CA) signed, rather than self-signed certificates, which may cause security issues. If you use a self-signed certificate, the browser may generate a warning message.

## Use AutoConfig and Autodiscover

To use AutoConfig and Autodiscover, enter a cPanel email address and password in your mail client. The services will automatically configure your mail client.

### Apple mail clients

Apple® mail clients do **not** support AutoConfig or AutoDiscover for IMAP servers. To use AutoConfig and AutoDiscover with Apple products, your server **must** run Exchange rather than IMAP.

When you configure an Apple mail client to access your cPanel email address, we **strongly** recommend that you follow the directions in our [Email Accounts](https://docs.cpanel.net/cpanel/email/email-accounts) documentation.

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