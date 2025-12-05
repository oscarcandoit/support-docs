---
url: "https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/"
title: "Edit System Mail Preferences | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/#main-content)

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
3. [Server Contacts](https://docs.cpanel.net/whm/server-contacts/)
4. Edit System Mail Preferences


[forwarders](https://docs.cpanel.net/tags/forwarders/) [whmui](https://docs.cpanel.net/tags/whmui/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/#overview)

* * *

[System email forwards](https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/#system-email-forwards)

* * *

[System email accounts](https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/#system-email-accounts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/#overview)

* * *

[System email forwards](https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/#system-email-forwards)

* * *

[System email accounts](https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/#system-email-accounts)

* * *

## Edit System Mail Preferences

![](https://docs.cpanel.net/img/whm-icons/edit_system_mail_preferences.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to set up email forwarders from your system email accounts to another email account.

## System email forwards

We recommend that you forward the system email accounts to a cPanel email account. For example, you can forward email for the `nobody` and `cpanel` system email accounts to the `root` account, and then forward email from the `root` system email account to another email account on the system.

If you forward a system email account to a cPanel username, WHM forwards the email for the system account to that cPanel account’s default email address. To check this mail, click _Access Webmail_ under the _Default Email Account_ heading in cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts/) interface ( _cPanel » Home » Email » Email Accounts_).

## System email accounts

WHM sends notifications about your server status and events to system email accounts.

Important:

- You **cannot** use cPanel’s Webmail feature to access the system email accounts.
- If you do not forward email for these accounts, use your `root` WHM password with a mail client to log in to each system email account.

The following table describes each of the system email accounts:

| System email account name | Description | Default system email account address |
| --- | --- | --- |
| root | The `root` system email account receives notifications about problems and activity on the server. WHM uses this address as the server administrator’s primary contact address. <br>Important:<br>The system configuration determines where the email for the `root` account goes if you do not forward the `root` system email account’s email. | `root@hostname.example.com` |
| nobody | If you disable the suEXEC feature, when a CGI script sends an email and it receives a bounce message in response, the system delivers the bounce message to the `nobody` email account. | `nobody@hostname.example.com` |
| cpanel | The `cpanel` email account receives alerts that WHM sends about users’ cPanel accounts (for example, quota and bandwidth overage notices). | `cpanel@hostname.example.com` |

Note:

- In the table above, `hostname.example.com` is your server’s hostname.

- To configure your server’s hostname, use WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname/) interface ( _WHM » Home » Networking Setup » Change Hostname_).


#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Contact Manager](https://docs.cpanel.net/whm/server-contacts/contact-manager/)
- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Email DNS Record Manager](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/)
- [Email Routing Configuration](https://docs.cpanel.net/whm/dns-functions/email-routing-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×