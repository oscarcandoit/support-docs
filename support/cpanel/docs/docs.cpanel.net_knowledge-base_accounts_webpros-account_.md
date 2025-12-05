---
url: "https://docs.cpanel.net/knowledge-base/accounts/webpros-account/"
title: "WebPros Account | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#main-content)

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
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. WebPros Account


[pluggable](https://docs.cpanel.net/tags/pluggable/) [authentication](https://docs.cpanel.net/tags/authentication/) [login](https://docs.cpanel.net/tags/login/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#overview)

* * *

[Enable WebPros Account](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#enable-webpros-account)

* * *

[Log in via WebPros Account](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#log-in-via-webpros-account)

* * *

[Create a WebPros account](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#create-a-webpros-account)

* * *

[WebPros Account and 2FA](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#webpros-account-and-2fa)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#overview)

* * *

[Enable WebPros Account](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#enable-webpros-account)

* * *

[Log in via WebPros Account](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#log-in-via-webpros-account)

* * *

[Create a WebPros account](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#create-a-webpros-account)

* * *

[WebPros Account and 2FA](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#webpros-account-and-2fa)

* * *

## WebPros Account

Last modified: _2025 July 29_

* * *

## Overview

Note:

WebPros International, LLC currently provides this feature in a limited release, with plans to expand its availability in future updates.

WebPros Account is an integrated set of credentials that server administrators can use to log in to WHM accounts on servers via the [External Authentication](https://api.docs.cpanel.net/guides/guide-to-external-authentication/) feature. WebPros Account uses the WebPros External Authentication identity provider to link your WebPros account to your WHM account.

## Enable WebPros Account

The system disables the WebPros External Authentication identity provider by default. To enable this identity provider, perform the following steps:

1. Create or update the `/var/cpanel/panel.ini` file with the following contents:




|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>  [AuthProviders]<br>  WebProsAccountAdmin = true<br>``` |

2. Enable the _Log in via WebPros_ provider in WHM’s [_Manage External Authentications_](https://docs.cpanel.net/whm/security-center/manage-external-authentications) interface ( _WHM » Home » Security Center » Manage External Authentications_).

Once you enable the WebPros provider, the _Log in via WebPros_ button will appear on the WHM login page.

## Log in via WebPros Account

Note:

- To log in via WebPros Account, you **must** access WHM via an SSL connection and already have a [WebPros account](https://account.webpros.com/).
- In the following example, the system replaces `hostname` with your server’s hostname, and `example@example.com` represents your WebPros Account email address.

To log in via WebPros Account, perform the following steps:

1. Navigate to the WHM login page, then click _Log in via WebPros_. The WebPros Account login page will appear.
2. On the WebPros Account login page, perform one of the following actions:
   - If you do not already have a WebPros account, [create your account](https://docs.cpanel.net/knowledge-base/accounts/webpros-account/#create-a-webpros-account).
   - If you already have a WebPros account, enter your WebPros Account email address in the _Email_ text box and your WebPros Account password in the _Password_ text box, then click _Log in_. The _Confirm Sending Data_ page will appear.
3. If you want to prevent the _Confirm Sending Data_ page from appearing for one year, select the _Trust hostname for 365 days and do not show this dialog (we will use cookies to store the data in your browser)._ checkbox.
4. Click the link that resembles _https://hostname:2087/openid\_connect\_callback/webpros…_. The WHM login interface will appear and will display a message that resembles the following:



```bash
Your account "example@example.com" is not associated with an existing "WHM" account. Please log in to connect the account.
```

5. Enter your WHM account in the _Username_ text box and your WHM password in the _Password_ text box, then click _Log in_.
6. Click the link that resembles _https://hostname:2087/openid\_connect\_callback/webpros…_. The WHM Home interface will appear.

Now when you log in to WHM via _Log in via WebPros_, the system will log you in automatically.

### Create a WebPros account

You **must** create a WebPros account before you can use it to log in to WHM. To create a WebPros account, perform the following steps:

1. On the WebPros Account login page, click _Create one_ next to _No WebPros account?_.
2. In the _Email_ text box, enter your email address.
3. In the _Password_ text box, enter your desired password, or click _Generate_ to generate a password.






Note:





The password **must** be at least 12 characters long.

4. In the _Name_ text boxes, enter your first and last names.
5. Select the _I agree with the Terms of Use and that WebPros will process my provided personal data in its internal systems according to the WebPros Privacy Policy_ checkbox.






Important:





You **must** select this checkbox to create the account.

6. If you would like to receive informational and marketing emails from WebPros, select the _WebPros may provide me with newsletters and individual offers in accordance to the WebPros Privacy Policy._ checkbox.
7. Click _Create account_. The system will send a six-digit verification code to your email address.
8. Enter the code from the email in the boxes that appear on the WebPros login page, then click _Next_. The _Welcome to your WebPros Account!_ page will appear and display the information for your new WebPros account.

## WebPros Account and 2FA

WebPros Account can use both [Two-Factor Authentication (2FA)](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/) and External Authentication. If you have enabled 2FA for WHM logins, the system will request a one-time 2FA code after you authenticate via the WebPros provider.

You can also enable your WebPros account to use 2FA. To do this, perform the following steps:

1. Log in to your [WebPros account](https://account.webpros.com/).
2. On the _Welcome to your WebPros Account!_ page, click _Send an enrollment email_ in the _Multi-factor authentication_ row. The system will send an email message to your email address.
3. In the email message, click _Enable multi-factor authentication_. The _Secure Your Account_ page will appear.
4. In your 2FA app, scan the QR code that appears on the page, then enter the six-digit one-time code that appears in the app and click _Continue_. The _Almost There!_ page will appear.
5. Click _Copy code_ to copy the recovery code that appears on the page, and paste it into a local file.
6. Select the _I have safely recorded this code_ checkbox, then click _Continue_.

Note:

If you enable 2FA both in WebPros Account and on your server, you will first authenticate through WebPros Account, then through the local 2FA on your server.

#### Additional Documentation

* * *

- [Apparent Discrepancies in Bandwidth Usage Statistics](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [Two-Factor Authentication for cPanel](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×