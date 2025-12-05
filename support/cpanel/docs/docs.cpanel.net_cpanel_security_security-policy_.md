---
url: "https://docs.cpanel.net/cpanel/security/security-policy/"
title: "Security Policy | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/security/security-policy/#main-content)

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
3. [Security](https://docs.cpanel.net/cpanel/security/)
4. Security Policy


[security](https://docs.cpanel.net/tags/security/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/security/security-policy/#overview)

* * *

[Update Security Questions](https://docs.cpanel.net/cpanel/security/security-policy/#update-security-questions)

* * *

[Manage Recognized IP Addresses](https://docs.cpanel.net/cpanel/security/security-policy/#manage-recognized-ip-addresses)

* * *

[Add an access IP address](https://docs.cpanel.net/cpanel/security/security-policy/#add-an-access-ip-address)

* * *

[Remove an access IP address](https://docs.cpanel.net/cpanel/security/security-policy/#remove-an-access-ip-address)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/security/security-policy/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/security/security-policy/#overview)

* * *

[Update Security Questions](https://docs.cpanel.net/cpanel/security/security-policy/#update-security-questions)

* * *

[Manage Recognized IP Addresses](https://docs.cpanel.net/cpanel/security/security-policy/#manage-recognized-ip-addresses)

* * *

[Add an access IP address](https://docs.cpanel.net/cpanel/security/security-policy/#add-an-access-ip-address)

* * *

[Remove an access IP address](https://docs.cpanel.net/cpanel/security/security-policy/#remove-an-access-ip-address)

* * *

## Security Policy

![](https://docs.cpanel.net/img/cpanel-icons/security_policy.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/security/security-policy/)

Last modified: _2024 May 29_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to update and manage your cPanel account’s security questions. You can also add access IP addresses. When you attempt to log in to your cPanel account from a verified access IP address, the system will **not** require you to answer the security questions.

Your hosting provider may require you to answer these security questions if you attempt to access your cPanel account from an unverified IP address. This policy helps to keep your server secure.

Note:

- This option is **only** available if your hosting provider limits logins to verified IP addresses. If you do not see this option, contact your hosting provider.

- When you attempt to log in from an unverified IP address and successfully answer your security questions, cPanel automatically adds that IP address to the list of verified access IP addresses.


## Update Security Questions

To update your security questions and answers, perform the following steps:

1. Click _Update Security Questions and Answers_.
2. For each security question that you wish to modify, perform the following actions:
   - Select or enter the desired question.
   - Enter an answer to the question in the appropriate text box.
3. Click _Continue_.
4. Verify that the answers are correct, and then click _Save Answers_. A confirmation message will display.

Note:

If you used the server’s `root` password to log in to a cPanel account, you **cannot** update security questions and answers. Instead, click _Reset Security Questions and Answers_. The system will prompt the cPanel account user to update the security questions and answers at the next login.


## Manage Recognized IP Addresses

Remember:

When you attempt to log in to your cPanel account from a verified access IP address, the system will **not** require you to answer the security questions.


To add and remove access IP addresses, click _Manage Access IPs_.

### Add an access IP address

To add an access IP address, perform the following steps:

1. Enter the IP address or range of addresses in the _Access IP_ text boxes.





Note:




You may use an asterisk ( `*` ) in the last octet. The system treats this asterisk as a wildcard, which means that any IP address within the specified IP address block is a verified access IP address and may skip security questions when you log in.


2. Click _Add_.

### Remove an access IP address

To remove an access IP address, click _Remove_ in the _Functions_ column for the IP address that you wish to remove.

#### Additional Documentation

* * *

- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Wizard](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×