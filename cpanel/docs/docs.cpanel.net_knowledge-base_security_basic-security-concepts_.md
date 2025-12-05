---
url: "https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/"
title: "Basic Security Concepts | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#main-content)

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
4. Basic Security Concepts


[security](https://docs.cpanel.net/tags/security/) [authentication](https://docs.cpanel.net/tags/authentication/) [passwords](https://docs.cpanel.net/tags/passwords/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#overview)

* * *

[Authentication methods](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#authentication-methods)

* * *

[Validated cookies](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#validated-cookies)

* * *

[Require SSL](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#require-ssl)

* * *

[Security tokens](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#security-tokens)

* * *

[URL referrer checks](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#url-referrer-checks)

* * *

[Password strength](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#password-strength)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#overview)

* * *

[Authentication methods](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#authentication-methods)

* * *

[Validated cookies](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#validated-cookies)

* * *

[Require SSL](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#require-ssl)

* * *

[Security tokens](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#security-tokens)

* * *

[URL referrer checks](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#url-referrer-checks)

* * *

[Password strength](https://docs.cpanel.net/knowledge-base/security/basic-security-concepts/#password-strength)

* * *

## Basic Security Concepts

Last modified: _2024 September 6_

* * *

## Overview

This document describes some basic security concepts that you can use to protect your system from cross-site request forgeries (XSRF) attacks. XSRF attacks occur when a malicious user exploits the trust between a website and a user’s browser. When a malicious user exploit that trust, they can run unauthorized commands on a website.

XSRF attacks rely on two items:

- Access to authentication credentials.
- Surreptitious execution of a command via a URL.

For more information about XSRF attacks, visit [Wikipedia’s XSRF article](https://en.wikipedia.org/wiki/Cross-site_request_forgery).

## Authentication methods

We recommend that you use cookies as an authentication method for cPanel & WHM logins. An HTTP-authenticated session does **not** terminate unless you terminate the web browser application session. If you use HTTP authentication, the browser caches the login credentials until the system terminates the application.

Some browsers allow you to flush login credentials. However, do **not** rely on this method, and it does not exist in all browsers. When a web browser caches login credentials, the credentials become susceptible to XSRF attacks.

For more information, read our [Email Deliverability](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/) documentation.

### Validated cookies

Malicious users can steal cookies and use them in XSRF attacks. Most browsers do **not** provide any protection to mitigate this attack. We provide an option that allows you to validate the incoming IP address as part of the cookie during the authentication process.

On subsequent authentication requests, the server compares the IP addresses to the original values in the cookies. A mismatched value causes an error that results in a re-authentication request.

Important:

When you use validated cookies, we recommend that you disable service subdomain access. If you do **not** disable service subdomain access, any attempt to access interfaces via a service domain will cause the system to record the local host’s IP address (usually `127.0.0.1`), which renders IP address validation useless.

To disable [service subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/), disable the following setting in the _Domains_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Tweak Settings_):

- Service subdomains

### Require SSL

You can also require your users to log in via SSL or TLS to improve your system’s security. If users log in to their accounts over ports `2082`, `2086`, or `2095`, the system sends authentication credentials in plain text. The authentication credentials become easy to steal, read, and use again later.

For more information about how to access cPanel & WHM services securely, read our [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/) documentation.

### Security tokens

cPanel & WHM includes security tokens to help combat XSRF attacks. The system inserts unique security tokens into the URL for a single login session. Any requests that a user makes without the appropriate token produce an error and result in a request for re-authentication. This action effectively stops XSRF attacks because the malicious URL will **not** contain the appropriate token.

Warning:

Security tokens may cause problems with custom scripts and some third-party applications that integrate with cPanel & WHM. We **strongly** recommend that you verify that third-party applications are compatible with security tokens before you enable them. If you **must** use applications that are not compatible with security tokens, we recommend that you use URL referrer checks instead.

### URL referrer checks

The HTTP referrer identifies the URL of the page from which a user originated. Referrer checks only function correctly when you enable the blank referrer check, and typically result in a large number of false positive alerts. However, if you **must** use third-party applications that are not compatible with security tokens, you can use referrer checks in place of security tokens.

Warning:

If you cannot use security tokens on your server, we **strongly** recommend that you enable the following options in the _Security_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_):

- Blank referrer safety check
- Referrer safety check

## Password strength

Weak passwords provide insignificant protection against brute force attacks. Brute force attacks occur when a malicious user guesses the password for a specific account via the trial-and-error message. This process is most often an automated process that uses dictionary terms. Use WHM’s [_Password Strength Configuration_](https://docs.cpanel.net/whm/security-center/password-strength-configuration/) interface ( _WHM_ » _Home_ » _Security Center_ » _Password Strength Configuration_) to set your user’s minimum password strength.

Note:

- We **strongly** recommend that you set a value of `50` or higher.
- The minimum password strength requirement **only** applies to passwords that cPanel & WHM creates and modifies. A user with shell access may use the `passwd` command to set a weak password.

#### Additional Documentation

* * *

- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [Manage API Tokens in cPanel](https://docs.cpanel.net/cpanel/security/manage-api-tokens-in-cpanel/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×