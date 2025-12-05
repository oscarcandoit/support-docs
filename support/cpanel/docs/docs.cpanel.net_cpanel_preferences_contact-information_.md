---
url: "https://docs.cpanel.net/cpanel/preferences/contact-information/"
title: "Contact Information | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/preferences/contact-information/#main-content)

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
4. Contact Information


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [contact](https://docs.cpanel.net/tags/contact/) [webmail](https://docs.cpanel.net/tags/webmail/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/preferences/contact-information/#overview)

* * *

[Change your contact information](https://docs.cpanel.net/cpanel/preferences/contact-information/#change-your-contact-information)

* * *

[Contact Preferences](https://docs.cpanel.net/cpanel/preferences/contact-information/#contact-preferences)

* * *

[AutoSSL Notifications](https://docs.cpanel.net/cpanel/preferences/contact-information/#autossl-notifications)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/preferences/contact-information/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/preferences/contact-information/#overview)

* * *

[Change your contact information](https://docs.cpanel.net/cpanel/preferences/contact-information/#change-your-contact-information)

* * *

[Contact Preferences](https://docs.cpanel.net/cpanel/preferences/contact-information/#contact-preferences)

* * *

[AutoSSL Notifications](https://docs.cpanel.net/cpanel/preferences/contact-information/#autossl-notifications)

* * *

## Contact Information

![](https://docs.cpanel.net/img/cpanel-icons/contact_information.svg)

_Valid for versions 106 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/cpanel/preferences/contact-information/)

Last modified: _2025 June 27_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

Note:

In cPanel & WHM version 130, we added the _Contact Information_ interface to the [_Account Preferences_](https://docs.cpanel.net/cpanel/preferences/account-preferences/#contact-information) interface ( _cPanel » Home » Preferences » Account Preferences_).

## Overview

Use this interface to store contact information for your cPanel account and to set your contact preferences.

Important:

- You will **only** see this interface if your hosting provider enables the related features.

- The settings that you see in this interface may vary, depending on the setup your hosting provider chooses for you.


## Change your contact information

To change your contact information, perform the following steps:

1. Navigate to cPanel’s _Contact Information_ interface ( _cPanel » Home » Preferences » Contact Information_).

2. Enter the desired contact information in the available text boxes.





Important:





- We **strongly** recommend that you do **not** use an email address that your cPanel account owns. You may fail to receive messages when the server encounters problems. For example, if your mailbox exceeds its quota, you will not receive any new email, including notices.

- To [_reset your password_](https://docs.cpanel.net/knowledge-base/security/how-to-reset-a-cpanel-account-password/), you must set a contact email address.

- You must provide your cPanel account password in order to change your contact email address(es).

- For more information about Pushbullet™ access tokens, visit the [Pushbullet](https://www.pushbullet.com/) website.


3. Select your desired notification settings in the [_Contact Preferences_](https://docs.cpanel.net/cpanel/preferences/contact-information/#contact-preferences) section.

4. Select your desired AutoSSL notifications setting in the [_AutoSSL Notifications_](https://docs.cpanel.net/cpanel/preferences/contact-information/#autossl-notifications) section.

5. Click _Save_.


## Contact Preferences

Note:

These settings **only** appear if your hosting provider [enables them](https://docs.cpanel.net/whm/packages/feature-manager).

You can select the following settings in the _Contact Preferences_ section of the interface:

- _My contact email address changes._ — Send a notification to your current and previous contact email address when someone changes your contact address.

- _My preference for contact email address change notifications is disabled._ — Send a notification when someone disables the _My contact email address changes_ setting.

- _My account approaches its disk quota._ — Send a notification if your website will soon reach the maximum amount of disk space.







Note:





- If your website reaches its maximum amount of disk space, you **cannot** modify existing files or add new files to your website.
- To resolve this issue, delete old or unused files, or upgrade your hosting plan.

- _My account approaches its bandwidth usage limit._ — Send a notification if your website will soon exceed the maximum amount of traffic.







Note:





- This setting **only** appears if your hosting provider [limits the bandwidth usage for your cPanel account and enables bandwidth notifications](https://docs.cpanel.net/whm/server-configuration/tweak-settings).
- After you reach your maximum bandwidth, visitors **cannot** access your website.
- To resolve this issue, you **must** upgrade your hosting plan. Otherwise, you must wait until the limit resets. Generally, this limit resets at the end of each month.

- _SSL certificate expiry._ — Send a notification if a non-AutoSSL certificate will expire soon.

- _Any of my account’s email accounts approaches or is over quota._ — Send a notification if one of your email addresses will soon reach its maximum amount of disk space.







Note:





To resolve this issue, [delete old email](https://docs.cpanel.net/cpanel/email/email-disk-usage) or upgrade your hosting plan.

- _My account’s password changes._ — Send a notification if someone changed your account password.

- _My preference for account password change notifications is disabled._ — Send a notification if someone disabled the _My account’s password changes_ setting.

- _Someone logs in to my account._ — Send a notification when someone logs in to your account. This is useful if you suspect that someone else has your account password.






Note:





- To resolve this issue, change your account password to a more secure password.

- In order to use this setting, your system administrator or hosting provider **must** enable cPHulk in WHM’s [_cPHulk Brute Force Protection_](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) interface ( _WHM » Home » Security Center » cPHulk Brute Force Protection_).

- Logins from IP addresses in the [_cPHulk Brute Force Protection_](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection/) whitelists will **not** send notifications.

- The system **only** sends a single notice in each 24-hour window for a specific username, service, and IP address combination.

- The system will **not** send notices if the user logs in successfully through an IP address range or netblock from which a user previously successfully logged in. To enable these notices, select the next setting.


- _Send login notifications, even when the user logs in from an IP address range or netblock that contains an IP address from which a user successfully logged in previously._ — Send a notification whenever someone logs in to your account successfully through any IP address.

- _My preference for successful login notifications is disabled._ — Send a notification if someone disables the _Someone logs in to my account_ setting.

- _An external account links to my account for authentication._ — Send a notification when someone links your account to an external authentication provider.

- _My preference for external account link notifications is disabled._ — Send a notification if someone disabled the _An external account links to my account for authentication_ setting.


## AutoSSL Notifications

Note:

- These settings **only** appear when your hosting provider [enables AutoSSL user notifications](https://docs.cpanel.net/whm/ssl-tls/manage-autossl).

- Some settings appear depending on the notification level that your hosting provider set for you. For example, if your hosting provider disables the _Notify the user for all AutoSSL events and normal successes user notification_ setting, this setting is unavailable.

- These settings are **not** available to Webmail users.


You can select one of the following settings in the _AutoSSL Notifications_ section of the interface:

- _All AutoSSL events: failures, deferrals, and successful installations._ — This setting notifies you for AutoSSL certificate request successes, failures, warnings, and deferrals.

- _AutoSSL failures and deferrals only. (default)_ — This setting **only** notifies you about AutoSSL certificate request failures, warnings, and deferrals.

- _AutoSSL failures only._ — This setting **only** notifies you when AutoSSL certificate requests fail.

- _Disable AutoSSL event notifications._ — This setting disables **all** AutoSSL certificate request notifications.


#### Additional Documentation

* * *

- [Webmail — Edit Your Settings](https://docs.cpanel.net/webmail/edit-your-settings-in-webmail/)
- [Account Preferences](https://docs.cpanel.net/cpanel/preferences/account-preferences/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Change Language](https://docs.cpanel.net/cpanel/preferences/change-language/)
- [Create an Email Account](https://docs.cpanel.net/cpanel/email/create-an-email-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×