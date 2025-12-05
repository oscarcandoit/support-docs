---
url: "https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/"
title: "Set Up Mail Client | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#main-content)

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
3. [Email](https://docs.cpanel.net/cpanel/email/)
4. Set Up Mail Client


[email](https://docs.cpanel.net/tags/email/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

- [Email Accounts](https://docs.cpanel.net/cpanel/email/email-accounts/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [Manage Email Accounts](https://docs.cpanel.net/cpanel/email/manage-email-accounts/)
- [Set Up Mail Client](https://docs.cpanel.net/cpanel/email/set-up-mail-client/)
[Overview](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#overview) [Requirements and support](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#requirements-and-support) [Exchange ActiveSync](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#exchange-activesync) [LDAP authentication](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#ldap-authentication) [Mail Client Automatic Configuration Scripts](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#mail-client-automatic-configuration-scripts) [Mail Client Manual Settings](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#mail-client-manual-settings) [Secure SSL/TLS Settings (Recommended)](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#secure-ssl-tls-settings-recommended) [Non-SSL Settings (NOT Recommended)](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#non-ssl-settings-not-recommended) [Email Instructions](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#email-instructions)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#installation-toggle)

- [Email Accounts](https://docs.cpanel.net/cpanel/email/email-accounts/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [Manage Email Accounts](https://docs.cpanel.net/cpanel/email/manage-email-accounts/)
- [Set Up Mail Client](https://docs.cpanel.net/cpanel/email/set-up-mail-client/)
[Overview](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#overview) [Requirements and support](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#requirements-and-support) [Exchange ActiveSync](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#exchange-activesync) [LDAP authentication](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#ldap-authentication) [Mail Client Automatic Configuration Scripts](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#mail-client-automatic-configuration-scripts) [Mail Client Manual Settings](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#mail-client-manual-settings) [Secure SSL/TLS Settings (Recommended)](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#secure-ssl-tls-settings-recommended) [Non-SSL Settings (NOT Recommended)](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#non-ssl-settings-not-recommended) [Email Instructions](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#email-instructions)

## Set Up Mail Client

![](https://docs.cpanel.net/img/cpanel-icons/email_accounts.svg)

_Valid for versions 96 through 128_

#### Version:

#### [96](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/)

#### [130](https://docs.cpanel.net/cpanel/email/set-up-mail-client/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _Set Up Mail Client_ interface helps you configure a mail client to access an email address. A mail client lets you access your email account from an app on your computer or mobile device instead of by visiting a URL address (for example, the Apple® Mail client).

To access the _Set Up Mail Client_ interface, perform the following steps:

1. Navigate to cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts) interface ( _cPanel » Home » Email » Email Accounts_).
2. Locate the email account you want to set up in your external mail client. Click _Connect Devices_ next to this account. The _Set Up Mail Client_ interface will appear.

## Requirements and support

You **must** have an external mail client installed on your computer or mobile device to use this feature.

### Exchange ActiveSync

To use Exchange ActiveSync to set up calendars, contacts, and email on an Android device all at once, read our [How to Sync Calendars, Contacts, and Email on Android™ Devices](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-contacts-and-email-on-android-devices/) documentation.

### LDAP authentication

We do not support LDAP authentication for mail applications. You can use OpenID Connect to connect an external authentication server to your mail application if you want to use LDAP. You will need to contact your hosting provider to setup OpenID Connect if you do not have WHM access. For more information on OpenID Connect, read our [OpenID Connect](https://api.docs.cpanel.net/guides/guide-to-external-authentication/guide-to-external-authentication-openid-connect/) documentation.

### Mail Client Automatic Configuration Scripts

cPanel offers automatic configuration scripts for common mail clients, including the following clients:

- Windows Live Mail®
- iOS® for iPhone®, iPad®, and iPod®
- macOS® Mail.app®.

If we list your mail client in the _Mail Client Automatic Configuration Scripts_ section of the [_Set Up Mail Client_](https://docs.cpanel.net/cpanel/email/set-up-mail-client/) interface, you can configure the mail client to receive emails with the following steps:

1. Navigate to cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts) interface ( _cPanel » Home » Email » Email Accounts_).
2. Click _Connect Devices_ next to the account whose emails you want the mail client to receive. The _Set Up Mail Client_ interface will appear.
3. Locate your mail client in the _Application_ section.






Note:





If you do not see your mail client, you **must** [manually configure](https://docs.cpanel.net/cpanel/email/set-up-mail-client/#mail-client-manual-settings) it.

4. Select your mail client application’s script from the _Protocols_ list next to your mail client. For example, to set up a Windows Live Mail® client with IMAP over SSL/TLS, click `IMAP over SSL/TLS` in the _Windows Live Mail®_ row. A new window will appear with instructions.






Important:





We **strongly** recommend that you use the _Secure SSL/TLS_ setting. This setting provides increased security.

5. Review the system’s instructions, then click _Proceed_ to continue. The system will then attempt to download the script.






Important:





Clicking _Proceed_ will prompt an automatic download of the appropriate configuration script. If you have disabled automatic downloads in your browser, you **must** enable them to proceed.

6. Run the automatic configuration script. You may do so in two ways:
   - If your browser prompts you to open, run, or save the script, select _Run_ or _Open_ to continue.
   - If your browser does not prompt you to open, run, or save the script, find the script in your computer’s _Downloads_ folder and run it.
7. The system may ask if you are sure you want to install the script. Select _Continue_ or _Yes_ to continue the installation.
8. The system may prompt you for the email account’s password. Enter the password and click _Install_.






Note:





Enter the password for the email account, **not** your computer.

9. When you complete the process, your mail client will open and log in to your email account.

## Mail Client Manual Settings

If your mail client does not appear in the list of clients with automatic configuration scripts, you **must** manually configure it. To manually set up your mail client, use the following settings:

Note:

- We recommend that you use the IMAP port for incoming mail. If you use the POP3 port, your mail client will download all of the account’s email messages, then remove the messages from the server. You will **not** be able to access those messages from any other mail client.
- Replace `username` and `example.com` with your email account’s username and domain.

### Secure SSL/TLS Settings (Recommended)

[Secure SSL/TLS Settings (Recommended)](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#secure-ssl-tls-settings-recommended1764175695540889063)

| Setting | Description | Values |
| --- | --- | --- |
| Username | The username on the mail account. | _[username@example.com](mailto:username@example.com)_ |
| Password | The password for the mail account. | _The mail account’s password._ |
| Incoming Server Port | The port the system uses for incoming mail. | - _IMAP Port: 993_<br>- _POP3 Port: 995_ |
| Incoming Server | The mail server address the system uses for incoming mail. | _mail.example.com_ |
| Outgoing Server Port (SMTP) | The port the system uses for outgoing mail. | _465_ |
| Outgoing Server | The mail server the system uses for outgoing mail. | _mail.example.com_ |

#### Secure SSL/TLS settings

The system generates the email account’s _Incoming Server_ and _Outgoing Server_ hostname based on the domain’s SSL certificate status:

- If the account has a valid SSL certificate installed, the system uses the email account’s domain.
- If the domain does **not** have a valid SSL certificate installed, the system uses the server’s hostname for the email account. For example, if your hostname is `www.example.com` and your SSL certificate matches your hostname, the system uses the `www.example.com` server name.

Important:

We **strongly** recommend that you use the Secure SSL/TLS setting. This setting provides increased security.


### Non-SSL Settings (NOT Recommended)

[Non-SSL Settings (NOT Recommended)](https://docs.cpanel.net/cpanel/email/set-up-mail-client/96/#non-ssl-settings-not-recommended1764175695541090407)

| Setting | Description | Values |
| --- | --- | --- |
| Username | The username on the mail account. | _[username@example.com](mailto:username@example.com)_ |
| Password | The password for the mail account. | _The mail account’s password._ |
| Incoming Server Port | The port the system uses for incoming mail. | - _IMAP Port: 143_<br>- _POP3 Port: 110_ |
| Incoming Server | The mail server address the system uses for incoming mail. | _mail.example.com_ |
| Outgoing Server Port (SMTP) | The port the system uses for outgoing mail. | _587_ |
| Outgoing Server | The mail server the system uses for outgoing mail. | _mail.example.com_ |

#### Non-SSL settings

If you did **not** install an SSL certificate, the server uses the `mail` subdomain of your domain for the _Incoming Server_ and _Outgoing Server_ settings. For example, `mail.example.com`. The system also uses the `mail` subdomain of your domain if the certificate does **not** match your hostname.

For more detailed information on setting up your specific mail client, read your mail client’s documentation.

### Email Instructions

You can easily send the same configuration instructions that are in the _Mail Client Manual Settings_ section of the interface to a different email address. Enter the desired email address in the text box, then click _Send_.

Note:

For more information on how to troubleshoot your email account, read our [cPanel Common Questions - Email](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/cpanel-common-questions/#email) documentation.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×