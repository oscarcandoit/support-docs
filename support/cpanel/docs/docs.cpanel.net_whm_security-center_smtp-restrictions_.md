---
url: "https://docs.cpanel.net/whm/security-center/smtp-restrictions/"
title: "SMTP Restrictions | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/smtp-restrictions/#main-content)

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
3. [Security Center](https://docs.cpanel.net/whm/security-center/)
4. SMTP Restrictions


[mailman](https://docs.cpanel.net/tags/mailman/) [whmui](https://docs.cpanel.net/tags/whmui/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/smtp-restrictions/#overview)

* * *

[Manage SMTP restrictions](https://docs.cpanel.net/whm/security-center/smtp-restrictions/#manage-smtp-restrictions)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/smtp-restrictions/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/smtp-restrictions/#overview)

* * *

[Manage SMTP restrictions](https://docs.cpanel.net/whm/security-center/smtp-restrictions/#manage-smtp-restrictions)

* * *

## SMTP Restrictions

![](https://docs.cpanel.net/img/whm-icons/smtp_restrictions.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/security-center/smtp-restrictions/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to configure your server so that only the mail transport agent (MTA), Mailman mailing list software, and the root user can connect to remote SMTP servers. This will deny other users and services the ability to bypass your mail server to directly send mail, which is common practice for spammers.

Note:

To set the maximum number of simultaneous incoming SMTP calls, update the _smtp\_accept\_max_ setting in the _Advanced Editor_ section of WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager/) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

## Manage SMTP restrictions

Click _Enable_ to deny users the ability to bypass your mail server to send mail. To allow users the ability to bypass your mail server, click _Disable_.

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Edit System Mail Preferences](https://docs.cpanel.net/whm/server-contacts/edit-system-mail-preferences/)
- [Email DNS Record Manager](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×