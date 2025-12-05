---
url: "https://docs.cpanel.net/cpanel/preferences/account-preferences/"
title: "Account Preferences | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/preferences/account-preferences/#main-content)

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
3. [Preferences](https://docs.cpanel.net/cpanel/preferences/)
4. Account Preferences


[cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/preferences/account-preferences/#overview)

* * *

[Consent and Privacy](https://docs.cpanel.net/cpanel/preferences/account-preferences/#consent-and-privacy)

* * *

[Contact Information](https://docs.cpanel.net/cpanel/preferences/account-preferences/#contact-information)

* * *

[Contact Preferences](https://docs.cpanel.net/cpanel/preferences/account-preferences/#contact-preferences)

* * *

[AutoSSL Notifications](https://docs.cpanel.net/cpanel/preferences/account-preferences/#autossl-notifications)

* * *

[System Notifications](https://docs.cpanel.net/cpanel/preferences/account-preferences/#system-notifications)

* * *

[Change Language](https://docs.cpanel.net/cpanel/preferences/account-preferences/#change-language)

* * *

[Supported languages](https://docs.cpanel.net/cpanel/preferences/account-preferences/#supported-languages)

* * *

[Change Password](https://docs.cpanel.net/cpanel/preferences/account-preferences/#change-password)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/preferences/account-preferences/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/preferences/account-preferences/#overview)

* * *

[Consent and Privacy](https://docs.cpanel.net/cpanel/preferences/account-preferences/#consent-and-privacy)

* * *

[Contact Information](https://docs.cpanel.net/cpanel/preferences/account-preferences/#contact-information)

* * *

[Contact Preferences](https://docs.cpanel.net/cpanel/preferences/account-preferences/#contact-preferences)

* * *

[AutoSSL Notifications](https://docs.cpanel.net/cpanel/preferences/account-preferences/#autossl-notifications)

* * *

[System Notifications](https://docs.cpanel.net/cpanel/preferences/account-preferences/#system-notifications)

* * *

[Change Language](https://docs.cpanel.net/cpanel/preferences/account-preferences/#change-language)

* * *

[Supported languages](https://docs.cpanel.net/cpanel/preferences/account-preferences/#supported-languages)

* * *

[Change Password](https://docs.cpanel.net/cpanel/preferences/account-preferences/#change-password)

* * *

## Account Preferences

![](https://docs.cpanel.net/img/cpanel-icons/account_preferences.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [110](https://docs.cpanel.net/cpanel/preferences/account-preferences/110/)

#### [126](https://docs.cpanel.net/cpanel/preferences/account-preferences/126/)

#### [128](https://docs.cpanel.net/cpanel/preferences/account-preferences/128/)

#### [130](https://docs.cpanel.net/cpanel/preferences/account-preferences/)

Last modified: _2025 September 2_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Use this interface to change your account settings.

## Consent and Privacy

Note:

This section **only** appears if your hosting provider enables it.

This feature lets you opt in or out of [Interface Analytics](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-analytics-the-data-we-use/#interface-analytics).

We automatically install the Interface Analytics plugin by default but do **not** enable it. The server owner **and** individual users **must** enable the Interface Analytics plugin before it begins to collect data.
Data collection depends on the selections made at the server and account levels as follows:

| Server level | Account level | Interface Analytics |
| --- | --- | --- |
| Yes | Yes | Enabled |
| Yes | No | Disabled |
| No | Yes | Disabled |
| No | No | Disabled |

To enable Interface Analytics, select the _Allow Tracking_ checkbox. To disable Interface Analytics, clear the checkbox. Then, click _Save Changes_.

## Contact Information

To update your contact information for account notifications and password reset confirmations, perform the following steps:

1. Enter an email address in the _Primary Email Address_ textbox.
2. Enter an email address in the _Secondary Email Address_ textbox. We recommend using email addresses from different servers to avoid delivery issues if your mailbox reaches its limit.
3. Enter the password for the cPanel account in the _Account Password_ text box.
4. Click _Save Changes_.

## Contact Preferences

Note:

These settings **only** appear if your hosting provider [enables them](https://docs.cpanel.net/whm/packages/feature-manager).

You can select the notifications you would like to receive by email. The following settings let you get alerts when specific events occur:

| Notification setting | Description |
| --- | --- |
| _My contact email address changes. (The system will notify you at your current and previous contact email addresses.)_ | Send a notification to your current and previous contact email address when someone changes your contact address. |
| _My preference for contact email address change notifications is disabled._ | Send a notification when someone disables the _My contact email address changes_ setting. |
| _My account approaches its disk quota._ | Send a notification if your website will soon reach the maximum amount of disk space. <br>Note:<br>- If your website reaches its maximum amount of disk space, you **cannot** modify existing files or add new files to your website. To resolve this issue, delete old or unused files, or contact your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/). |
| _My account approaches its bandwidth usage limit._ | Send a notification if your website will soon exceed the maximum amount of traffic.<br>Note:<br>- This setting **only** appears if your hosting provider [limits the bandwidth usage for your cPanel account and enables bandwidth notifications](https://docs.cpanel.net/whm/server-configuration/tweak-settings).<br>- After you reach your maximum bandwidth, visitors **cannot** access your website.<br>- To resolve this issue, you **must** upgrade your hosting plan. Otherwise, you must wait until the limit resets. Generally, this limit resets at the end of each month. |
| _SSL certificate expiry. (The system will notify you if a non-AutoSSL certificate will expire soon.)_ | Send a notification if a non-AutoSSL certificate will expire soon. |
| _Any of my account’s email accounts approaches or is over quota._ | Send a notification if one of your email addresses will soon reach its maximum amount of disk space. <br>Note:<br>To resolve this issue, [delete old email](https://docs.cpanel.net/cpanel/email/email-disk-usage) or contact your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/). |
| _My account’s password changes. (The system will notify you when the password changes because of a user request.)_ | Send a notification if someone changed your account password. |
| _My preference for account password change notifications is disabled._ | Send a notification if someone disabled the _My account’s password changes_ setting. |
| _Someone logs in to my account._ | Send a notification when someone logs in to your account. This is useful if you suspect that someone else has your account password.<br>Note:<br>- To resolve this issue, change your account password to a more secure password.<br>- In order to use this setting, your system administrator or hosting provider **must** enable cPHulk in WHM’s [_cPHulk Brute Force Protection_](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) interface ( _WHM » Home » Security Center » cPHulk Brute Force Protection_).<br>- Logins from IP addresses in the [_cPHulk Brute Force Protection_](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/) interface’s whitelists will **not** send notifications.<br>- The system **only** sends a single notice in each 24-hour window for a specific username, service, and IP address combination.<br>- The system will **not** send notices if the user logs in successfully through an IP address range or netblock from which a user previously successfully logged in. To enable these notices, select the next setting. |
| _Send login notifications, even when the user logs in from an IP address range or netblock that contains an IP address from which a user successfully logged in previously._ | Send a notification whenever someone logs in to your account successfully through any IP address. |
| _My preference for successful login notifications is disabled._ | Send a notification if someone disables the _Someone logs in to my account_ setting. |
| _An external account links to my account for authentication._ | Send a notification when someone links your account to an external authentication provider. |
| _My preference for external account link notifications is disabled._ | Send a notification if someone disabled the _An external account links to my account for authentication_ setting. |

### AutoSSL Notifications

Note:

- These settings **only** appear when your hosting provider [enables AutoSSL user notifications](https://docs.cpanel.net/whm/ssl-tls/manage-autossl).

- Some settings only appear if your hosting provider enables them. For example, if your hosting provider disables the _Notify the user for all AutoSSL events and normal successes user notification_ setting, this setting is unavailable.

- These settings are **not** available to Webmail users.


You can select one of the following settings in the _AutoSSL Notifications_ section of the interface:

- _All AutoSSL events: failures, deferrals, and successful installations._ — This setting notifies you for AutoSSL certificate request successes, failures, warnings, and deferrals.

- _AutoSSL failures and deferrals only. (default)_ — This setting **only** notifies you about AutoSSL certificate request failures, warnings, and deferrals.

- _AutoSSL failures only._ — This setting **only** notifies you when AutoSSL certificate requests fail.

- _Disable AutoSSL event notifications._ — This setting disables **all** AutoSSL certificate request notifications.


## System Notifications

This function sets where on the screen that system notifications appear. To change the location of your system notifications, select a location from the menu and click _Save Changes_.

Note:

- This setting applies to every page on which a notification appears.
- The location of system notifications defaults to the top right of the screen.
- The _middle-middle_ selection will create an overlay for the screen. Press `Esc` or click the _X_ icon to close the notification.

## Change Language

To change your cPanel interface’s language, perform the following steps:

1. Select the language that you wish to use from the _Language_ menu.
2. Click _Save Changes_. A success message will appear.

### Supported languages

Note:

We have deprecated our legacy locales. For more information, read the [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan).

We support the following languages:

- English
- German
- Indonesian
- Japanese
- Portuguese
- Russian
- Spanish
- Turkish

## Change Password

To change your password, enter the desired information or click _Generate_ to use the [_Password Generator_](https://docs.cpanel.net/cpanel/preferences/account-preferences/#password-generator) feature. Then, click _Save Password_.

Note:

You **must** enable Digest Authentication if you use Windows® Vista, Windows® 7, Windows® 8, or Windows® 10 and you access Web Disk over a clear text, unencrypted connection.

#### Password Generator

This feature generates secure passwords, which are difficult for malicious users to guess. When you click _Generate_, a generated password will appear in the text box. To set the security requirements of the new password, click the up arrow (![Up arrow](https://docs.cpanel.net/img/arrow-up.png)). New options will appear that allow you to set password length and whether to use uppercase letters, lowercase letters, numbers, and symbols.

Note:

System-generated passwords have an 18-character limit.

#### Additional Documentation

* * *

- [Manage Team](https://docs.cpanel.net/cpanel/preferences/manage-team/)
- [API Shell for cPanel](https://docs.cpanel.net/cpanel/advanced/api-shell-for-cpanel/)
- [Change Language](https://docs.cpanel.net/cpanel/preferences/change-language/)
- [Contact Information](https://docs.cpanel.net/cpanel/preferences/contact-information/)
- [User Manager](https://docs.cpanel.net/cpanel/preferences/user-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×