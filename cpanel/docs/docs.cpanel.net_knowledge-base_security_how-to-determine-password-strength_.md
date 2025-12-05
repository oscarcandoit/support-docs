---
url: "https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/"
title: "How to Determine Password Strength | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/#main-content)

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
3. [Security](https://docs.cpanel.net/knowledge-base/security/)
4. How to Determine Password Strength


[passwords](https://docs.cpanel.net/tags/passwords/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/#overview)

* * *

[Length and complexity](https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/#length-and-complexity)

* * *

[Categories](https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/#categories)

* * *

[Combinations](https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/#combinations)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/#overview)

* * *

[Length and complexity](https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/#length-and-complexity)

* * *

[Categories](https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/#categories)

* * *

[Combinations](https://docs.cpanel.net/knowledge-base/security/how-to-determine-password-strength/#combinations)

* * *

## How to Determine Password Strength

Last modified: _2024 June 11_

* * *

## Overview

This document describes how cPanel & WHM determines password strength. This document also explains how to create passwords of different strengths so that you can meet various minimum password strength requirements.

Note:

- We **strongly** recommend that you use the _Password Generator_ feature whenever it is available. For more information, read our [Password & Security](https://docs.cpanel.net/cpanel/preferences/password-and-security/) documentation.
- This document uses characters found on the ANSI standard US keyboard. Results for other languages and keyboard configurations may vary.

## Length and complexity

Two factors determine a password’s strength: length and complexity. A password’s length is determined by the number of characters in the password. For example, the password `asdf1234` has a length of eight characters. Most cPanel & WHM passwords require a minimum password length. An increase in password length usually increases the password’s strength.

When you combine letters, numbers, and symbols in a password you increase the password’s complexity. A higher complexity yields a higher password strength. For example, the password `cpanelisgreat` has a password strength of 25 while `cP4n3LIsGr3aT` has a password strength of 100. When you repeat the same character, use dictionary based words, or use consecutive letters or numbers, you do **not** increase password strength. For example, `12345678` has a password strength of 1 while `18273645` has a password strength of 86.

## Categories

Four categories exist for the possible characters in a password:

- Lowercase letter — (`a — z`)
- Capital letter — (`A — Z`)
- Number — (`0-9`)
- Symbol — (`!@#$%^&*()~-_=+[{]}\|;:'",<.>/?`)

Note:

- Some symbols yield a higher strength valuation than others.
- Symbols are also known as special characters.

## Combinations

The following table provides some example passwords of different lengths and complexities. For brevity, this table does not include all potential character combinations.

Warning:

Do **not** use the examples provided verbatim. Use of these examples could create a security risk.


| Description | Example | Strength | Length | Lowercase | Capital | Number | Symbol |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Repeating character | `aa`, `aaa`, `aaaa`, `11`, `111`, `1111` | 1 | 2 — ∞ |  |  |  |  |
| Consecutive characters | `12345678`, `abcdefgh` | 1 | 2 — ∞ |  |  |  |  |
| Combination lowercase and capital letter | `aA` | 10 | 2 | X | X |  |  |
| Combination lowercase letter and number | `a1` | 18 | 2 | X |  | X |  |
| Combination capital letter and number | `A1` | 18 | 2 |  | X | X |  |
| Combination lowercase letter and symbol | `a#` | 20 | 2 | X |  |  | X |
| Combination capital letter and symbol | `A#` | 20 | 2 |  | X | X |  |
| Combination number and symbol | `1#` | 26 | 2 |  |  | X | X |
| Combination lowercase letter, number, and symbol | `a#1` | 34 | 3 | X |  | X | X |
| Combination capital letter, number, and symbol | `A#1` | 34 | 3 |  | X | X | X |
| Example combination | `12345luggage` | 54 | 12 | X |  | X |  |
| Example combination | `A1b2c3%` | 74 | 7 | X | X | X | X |
| Example combination | `cP4n3LIsGr3aT` | 100 | 11 | X | X | X | X |
| Example combination | `A1b2c3%?` | 100 | 8 | X | X | X | X |

Note:

You can use the _Get Password Strength_ feature to test the strength of any password. For more information, read our [WHM API 1 Functions - `get_password_strength`](https://api.docs.cpanel.net/openapi/whm/operation/get_password_strength/) documentation.


#### Additional Documentation

* * *

- [Change Database User Password](https://docs.cpanel.net/whm/database-services/change-database-user-password/)
- [Change MySQL User Password](https://docs.cpanel.net/whm/sql-services/change-mysql-user-password/)
- [Change Root Password](https://docs.cpanel.net/whm/server-configuration/change-root-password/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×