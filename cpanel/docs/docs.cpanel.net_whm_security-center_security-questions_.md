---
url: "https://docs.cpanel.net/whm/security-center/security-questions/"
title: "Security Questions | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/security-questions/#main-content)

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
4. Security Questions


[whmui](https://docs.cpanel.net/tags/whmui/) [security](https://docs.cpanel.net/tags/security/) [login](https://docs.cpanel.net/tags/login/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/security-questions/#overview)

* * *

[Edit Questions and Answers](https://docs.cpanel.net/whm/security-center/security-questions/#edit-questions-and-answers)

* * *

[Add or Remove Recognized IP Addresses](https://docs.cpanel.net/whm/security-center/security-questions/#add-or-remove-recognized-ip-addresses)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/security-questions/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/security-questions/#overview)

* * *

[Edit Questions and Answers](https://docs.cpanel.net/whm/security-center/security-questions/#edit-questions-and-answers)

* * *

[Add or Remove Recognized IP Addresses](https://docs.cpanel.net/whm/security-center/security-questions/#add-or-remove-recognized-ip-addresses)

* * *

## Security Questions

![](https://docs.cpanel.net/img/whm-icons/security_questions.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/security-center/security-questions/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to update and manage your WHM account’s
security questions. You can also add verified IP addresses from which
you can log in to your WHM account without security
questions.

Important:

The changes that you make in this interface do **not** change the security questions for other WHM, cPanel, or Webmail accounts on the server. To require WHM users to answer security questions when they log in, enable the _Limit logins to verified IP addresses_ setting in WHM’s [_Configure Security Policies_](https://docs.cpanel.net/whm/security-center/configure-security-policies/) interface ( _WHM » Home » Security Center » Configure Security Policies_).

Note:

- When you attempt to log in from an unverified IP address and successfully answer your security questions, WHM automatically adds that IP address to the list of verified IP addresses.

- If you configure your own security questions, and then immediately enable the _Limit logins to verified IP addresses_ setting in WHM’s [_Configure Security Policies_](https://docs.cpanel.net/whm/security-center/configure-security-policies/) interface ( _WHM » Home » Security Center » Configure Security Policies_), WHM automatically adds your IP address to the list of verified IP addresses.


## Edit Questions and Answers

To edit the security questions that you **must** answer when you log in
to WHM from an unverified IP address, perform the following steps:

1. Click _Edit Questions and Answers_.
2. For each security question that you wish to modify, perform the
following actions:
1. Select or enter the desired question.
2. Enter an answer to the question in the appropriate text box.
3. Click _Continue_. A confirmation message appears.

## Add or Remove Recognized IP Addresses

Click _Add or Remove Recognized IP Addresses_ to add, manage, or remove
verified IP addresses. When you attempt to log in from a verified IP
address, the system does **not** require you to answer security
questions.

- To add a verified IP address, enter the IP address that you want to add in the _IP_ text boxes, and click _Add._


Note:





You may use an asterisk (`*`) in the last octet to indicate a wildcard. This allows any IP address in the specified IP address block to skip security questions at login.

- To remove a verified IP address, click _Remove_ next to the IP
address that you want to remove.

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Host Access Control](https://docs.cpanel.net/whm/security-center/host-access-control/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×