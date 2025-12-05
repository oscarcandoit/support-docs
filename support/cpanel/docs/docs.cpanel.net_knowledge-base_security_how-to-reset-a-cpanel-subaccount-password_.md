---
url: "https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-subaccount-password/"
title: "How to Reset a cPanel Subaccount Password | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-subaccount-password/#main-content)

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
4. How to Reset a cPanel Subaccount Password


[subaccounts](https://docs.cpanel.net/tags/subaccounts/) [passwords](https://docs.cpanel.net/tags/passwords/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-subaccount-password/#overview)

* * *

[Requirements](https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-subaccount-password/#requirements)

* * *

[Reset your Subaccount password](https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-subaccount-password/#reset-your-subaccount-password)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-subaccount-password/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-subaccount-password/#overview)

* * *

[Requirements](https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-subaccount-password/#requirements)

* * *

[Reset your Subaccount password](https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-subaccount-password/#reset-your-subaccount-password)

* * *

## How to Reset a cPanel Subaccount Password

Last modified: _2024 September 27_

* * *

## Overview

This process allows a cPanel Subaccount user to reset their password. The password reset process sends a security code to the contact email address in cPanel’s [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information/) interface ( _cPanel » Home » Preferences » Contact Information_).

To reset your cPanel account password, read our [How to Reset a cPanel Account Password](https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-account-password/) documentation.

## Requirements

You can **only** use this process if you have enabled the _Reset Password for Subaccounts_ option in the _System_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_). You must **also** set a contact email address in cPanel’s [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information/) interface ( _cPanel » Home » Preferences » Contact Information_) to use this process.

If have not set a contact email address and cannot enable the _Reset Password for Subaccounts_ option, you **cannot** use this process. Contact your hosting provider for assistance.

## Reset your Subaccount password

To reset your Subaccount password, perform the following steps:

1. Navigate to the following location in your browser, where `example.com` represents your domain name:



```perl
https://example.com:2083/
```

2. Click _Reset Password_.

3. Enter your Subaccount username in the _Username_ text box and click _Reset Password_.

4. Enter your contact email address in the Contact Email Address text box and click Send Security Code.






Note:





- To resend the security code, click _Send Security Code Again_.

- You **must** use the same browser session that you used when you initiated the password reset request.


Important:

If you have **not** set a contact email address, the system displays a fake contact email address when you attempt to reset your password. This helps protect users’ credentials on your account, but you **cannot** use it to log in.

5. In the _Security Code_ text box, enter the security code that you received and click _Submit_.

6. Enter your password in the _New Password_ text box, confirm your password, and click _Set Password_.


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