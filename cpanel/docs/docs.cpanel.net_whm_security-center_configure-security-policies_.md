---
url: "https://docs.cpanel.net/whm/security-center/configure-security-policies/"
title: "Configure Security Policies | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/configure-security-policies/#main-content)

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
4. Configure Security Policies


[whmui](https://docs.cpanel.net/tags/whmui/) [login](https://docs.cpanel.net/tags/login/) [passwords](https://docs.cpanel.net/tags/passwords/) [security](https://docs.cpanel.net/tags/security/) [2fa](https://docs.cpanel.net/tags/2fa/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/configure-security-policies/#overview)

* * *

[Security Policy Items](https://docs.cpanel.net/whm/security-center/configure-security-policies/#security-policy-items)

* * *

[Security Policy Extensions](https://docs.cpanel.net/whm/security-center/configure-security-policies/#security-policy-extensions)

* * *

[Allow access without security questions via SSH](https://docs.cpanel.net/whm/security-center/configure-security-policies/#allow-access-without-security-questions-via-ssh)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/configure-security-policies/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/configure-security-policies/#overview)

* * *

[Security Policy Items](https://docs.cpanel.net/whm/security-center/configure-security-policies/#security-policy-items)

* * *

[Security Policy Extensions](https://docs.cpanel.net/whm/security-center/configure-security-policies/#security-policy-extensions)

* * *

[Allow access without security questions via SSH](https://docs.cpanel.net/whm/security-center/configure-security-policies/#allow-access-without-security-questions-via-ssh)

* * *

## Configure Security Policies

![](https://docs.cpanel.net/img/whm-icons/configure_security_policies.svg)

_Valid for versions 90 through the latest version_

#### Version:

#### [90](https://docs.cpanel.net/whm/security-center/configure-security-policies/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The Configure Security Policies interface allows you to configure your security policy settings and security policy extensions.

Notes:

- When you attempt to log in from an unverified IP address and successfully answer your security questions, the system automatically adds the IP address to the list of verified IP addresses.
- If you configure your own security questions, the system automatically adds your IP address to the list of verified IP addresses.

## Security Policy Items

Select the following checkboxes to help secure your server:

- _Limit logins to verified IP addresses_ — This setting determines whether to require users to answer security questions when they log in to their cPanel, Webmail, and WHM accounts from unverified IP addresses.







Notes:





- When a user successfully answers the required security questions, the system automatically adds the user’s current IP address to the list of verified IP addresses.
- WHM users can add verified IP addresses and configure security questions in WHM’s [_Security Questions_](https://docs.cpanel.net/whm/security-center/security-questions) interface ( _WHM » Home » Security Center » Security Questions_).
- After you enable this setting, cPanel users can add verified IP addresses and configure security questions in cPanel’s [_Security Policy_](https://docs.cpanel.net/cpanel/security/security-policy) interface ( _cPanel » Home » Security » Security Policy_).

- _Two-Factor Authentication: Google Authenticator_ — This setting determines whether to require users to additionally enter a generated security code from a time-based one-time password (TOTP) app on a smartphone.







Note:





To configure the two-factor authentication settings, use WHM’s [_Two-Factor Authentication_](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm) interface ( _WHM » Home » Security Center » Two-Factor Authentication_).

- _Password Strength_ — This setting enforces a minimum password strength for cPanel, Webmail, and WHM users.







Note:





To modify the minimum password strength, use WHM’s [_Password Strength Configuration_](https://docs.cpanel.net/whm/security-center/password-strength-configuration) interface ( _WHM » Home » Security Center » Password Strength Configuration_).

- _Password Age_ — This setting allows you to specify the number of days to allow cPanel, Webmail, and WHM users to use the same password. When you select this checkbox, the _Maximum password age (in days)_ text box appears. Enter the maximum number of days to allow users to use the same password.


## Security Policy Extensions

The _Security Policy Extensions_ settings apply your security policy to WHM API requests and DNS cluster requests.

Warning:

- When you enable the _Security Policy Extensions_ settings for remote APIs and DNS cluster requests, issues will be hard to diagnose. We recommend you do **not** enable these extensions unless you fully understand your remote API usage and DNS cluster configuration.
- We **strongly** recommend you do not enable these settings if you enable two factor authentication.

Enable the following settings to help secure your server:

- _API requests_ — Select this checkbox to apply the _Security Policy Items_ settings to [WHM API](https://api.docs.cpanel.net/whm/introduction/) requests. If you enable this setting, the policies that you set apply to any user who attempts to call a WHM API function.

- _DNS Cluster requests_ — Select this checkbox to apply the _Security Policy Items_ settings to [DNS cluster](https://docs.cpanel.net/whm/clusters/dns-cluster) requests. If you enable this setting, the policies that you set apply to any user who attempts to make a DNS cluster request.


## Allow access without security questions via SSH

You can manually disable the need for security questions when logging in from a trusted IP. This is useful when the answers to the security questions are not available. To do so, perform the following steps:

1. Use SSH to log in to your server as the `root` user.
2. Open the `/var/cpanel/userhomes/cpanel/.cpanel/securitypolicy/iplist/root` file in your preferred text editor.
3. Add the public IP from which you will be logging in.
4. Save and exit the file.

After this you will be able to log in from that IP as `root` without questions.

#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Security Questions](https://docs.cpanel.net/whm/security-center/security-questions/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [Two-Factor Authentication for WHM](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×