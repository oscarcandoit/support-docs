---
url: "https://docs.cpanel.net/whm/security-center/password-strength-configuration/"
title: "Password Strength Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/password-strength-configuration/#main-content)

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
4. Password Strength Configuration


[passwords](https://docs.cpanel.net/tags/passwords/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/password-strength-configuration/#overview)

* * *

[Distributed cPanel accounts](https://docs.cpanel.net/whm/security-center/password-strength-configuration/#distributed-cpanel-accounts)

* * *

[How to set minimum password strengths](https://docs.cpanel.net/whm/security-center/password-strength-configuration/#how-to-set-minimum-password-strengths)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/password-strength-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/password-strength-configuration/#overview)

* * *

[Distributed cPanel accounts](https://docs.cpanel.net/whm/security-center/password-strength-configuration/#distributed-cpanel-accounts)

* * *

[How to set minimum password strengths](https://docs.cpanel.net/whm/security-center/password-strength-configuration/#how-to-set-minimum-password-strengths)

* * *

## Password Strength Configuration

![](https://docs.cpanel.net/img/whm-icons/password_strength_configuration.svg)

_Valid for versions 94 through the latest version_

#### Version:

#### [94](https://docs.cpanel.net/whm/security-center/password-strength-configuration/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to define minimum strengths for passwords for all of cPanel & WHM’s features that require password authentication. The system rates password strength on a scale of zero to `100`, where `100` represents a very strong password. When you set a minimum password strength, the system automatically rounds this value up to the nearest increment of `5`.

To learn about how cPanel & WHM determines password strength, read our [How to Determine Password Strength](https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/) documentation.

## Distributed cPanel accounts

For [distributed cPanel accounts](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#distributed-cpanel-account), the [parent node](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#parent-node) controls password strength requirements for the account’s main password, as well as any services that run on the parent node. [Child nodes](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#child-node) control other passwords.

For accounts with distributed mail, the mail child node controls the _Email_ and _Mailing List_ password strength settings.

## How to set minimum password strengths

Warning:

- Users with shell access can bypass these requirements with the `passwd` command.
- By default, any changes you make in this interface **only** apply to new accounts. To enforce a new password strength requirement for existing accounts, you must enable the _Password Strength_ setting in WHM’s [_Configure Security Policies_](https://docs.cpanel.net/whm/security-center/configure-security-policies/) interface ( _WHM » Home » Security Center » Configure Security Policies_).

To set the minimum password strengths, perform the following steps:

1. To specify the default minimum password strength for features that you set to _Default_, use the _Default Required Password Strength_ slider or enter a number between `0` and `100` in the appropriate text box.






Note:





If you use the _Default Required Password Strength_ setting, we recommend that you set its value to `40` or greater.

2. To configure a minimum required password strength for a specific feature, use that feature’s slider to specify its minimum password strength, or enter a number between `0` and `100` in the text box.
3. Click _Save_ to save your changes.

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