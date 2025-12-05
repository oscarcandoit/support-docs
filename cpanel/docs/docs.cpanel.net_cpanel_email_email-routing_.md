---
url: "https://docs.cpanel.net/cpanel/email/email-routing/"
title: "Email Routing | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/email-routing/#main-content)

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
4. Email Routing


[mx](https://docs.cpanel.net/tags/mx/) [email](https://docs.cpanel.net/tags/email/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/email-routing/#overview)

* * *

[Configure Email Routing](https://docs.cpanel.net/cpanel/email/email-routing/#configure-email-routing)

* * *

[Automatically configure email routing](https://docs.cpanel.net/cpanel/email/email-routing/#automatically-configure-email-routing)

* * *

[Manually configure email routing](https://docs.cpanel.net/cpanel/email/email-routing/#manually-configure-email-routing)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/email-routing/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/email-routing/#overview)

* * *

[Configure Email Routing](https://docs.cpanel.net/cpanel/email/email-routing/#configure-email-routing)

* * *

[Automatically configure email routing](https://docs.cpanel.net/cpanel/email/email-routing/#automatically-configure-email-routing)

* * *

[Manually configure email routing](https://docs.cpanel.net/cpanel/email/email-routing/#manually-configure-email-routing)

* * *

## Email Routing

![](https://docs.cpanel.net/img/cpanel-icons/email_routing.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/cpanel/email/email-routing/110/)

#### [130](https://docs.cpanel.net/cpanel/email/email-routing/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to configure how the system routes a [domain’s](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#domain-name) incoming mail. You can either allow the system to set the domain’s routing configuration, or you can set it yourself.

This interface uses a domain’s local [mail exchanger (MX) entry](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#mail-exchanger-mx-entry) to determine where to send mail for the domain. The MX entry contains a number that shows the priority of the [mail exchanger](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#mail-exchanger). If a domain has more than one MX entry, the system selects the server with the lowest-numbered entry as the primary mail exchanger.

Note:

cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):

- Editing DNS
- Email services
- Search Engine Optimization

## Configure Email Routing

Warning:

- Misconfigured _Email Routing_ settings can disrupt your domain’s ability to receive mail. If you are unsure which option to choose, contact your hosting provider.
- You or your hosting provider **must** configure the primary MX entry to point to the appropriate mail exchanger. If your hosting provider allows it, you can edit your domain’s MX entries in cPanel’s _[Zone Editor](https://docs.cpanel.net/cpanel/domains/zone-editor)_ interface ( _cPanel » Home » Domains » Zone Editor_).

To configure how your server routes mail for a domain, perform the following steps:

1. Navigate to cPanel’s _Email Routing_ interface ( _cPanel » Home » Email » Email Routing_).
2. Select the desired domain from the menu. If only one domain exists on your cPanel account, the system selects it automatically.
3. To configure email routing for your domain, select one of the following settings under the _Configure Email Routing_ header, then click _Change_:

### Automatically configure email routing

To allow the system to automatically set the domain’s email-routing configuration, select the _Automatically Detect Configuration_ setting. This is the recommended setting.

When you select this setting, the system sets the appropriate email-routing configuration:

- [_Local Mail Exchanger_](https://docs.cpanel.net/cpanel/email/email-routing/#local-mail-exchanger) — The system selects this option if the lowest-numbered mail exchanger points to an [Internet Protocol (IP) address](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#internet-protocol-ip-address) on this server.
- [_Backup Mail Exchanger_](https://docs.cpanel.net/cpanel/email/email-routing/#backup-mail-exchanger) — The system selects this option if the lowest-numbered mail exchanger points to an IP address not on this server.
- [_Remote Mail Exchanger_](https://docs.cpanel.net/cpanel/email/email-routing/#remote-mail-exchanger) — The system selects this option if no mail exchangers point to an IP address on this server.

Important:

- This setting only detects the local zone-file entry and does **not** perform an actual DNS lookup. If the MX entry in the local zone file does not resolve, the system will **not** automatically detect the domain’s _Email Routing_ configuration.
- The system does not automatically change this setting after you update it.

### Manually configure email routing

To manually configure email routing for your domain, select one of the following settings:

#### Local Mail Exchanger

When you select this setting, the server will always accept mail for the domain. The system will deliver mail to the local mailbox.

Note:

Choose this option if your server uses a [smart host](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#smart-host) or other gateway service to filter mail. Or choose this option if your hosting provider deleted the domain’s DNS zone.


#### Backup Mail Exchanger

When you select this setting, the server will function as a backup mail exchanger. The system will hold mail for the domain until a lower-numbered mail exchanger becomes available.

#### Remote Mail Exchanger

When you select this setting, the server will **not** accept mail for the domain. The system will send all mail for the domain to the lowest-numbered mail exchanger.

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