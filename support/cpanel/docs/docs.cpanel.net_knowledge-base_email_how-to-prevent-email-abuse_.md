---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/"
title: "How to Prevent Email Abuse | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#main-content)

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
3. [Email](https://docs.cpanel.net/knowledge-base/email/)
4. How to Prevent Email Abuse


[spam](https://docs.cpanel.net/tags/spam/) [email](https://docs.cpanel.net/tags/email/) [apachemodule](https://docs.cpanel.net/tags/apachemodule/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#overview)

* * *

[Password Strength Configuration](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#password-strength-configuration)

* * *

[Enable cPHulk](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#enable-cphulk)

* * *

[Enable Greylisting](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#enable-greylisting)

* * *

[SMTP restrictions](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#smtp-restrictions)

* * *

[Exim Configuration Manager](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#exim-configuration-manager)

* * *

[Tweak Settings](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#tweak-settings)

* * *

[PHP configuration](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#php-configuration)

* * *

[EXPERIMENTAL Rewrite From header to match actual sender](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#experimental-rewrite-from-header-to-match-actual-sender)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#overview)

* * *

[Password Strength Configuration](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#password-strength-configuration)

* * *

[Enable cPHulk](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#enable-cphulk)

* * *

[Enable Greylisting](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#enable-greylisting)

* * *

[SMTP restrictions](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#smtp-restrictions)

* * *

[Exim Configuration Manager](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#exim-configuration-manager)

* * *

[Tweak Settings](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#tweak-settings)

* * *

[PHP configuration](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#php-configuration)

* * *

[EXPERIMENTAL Rewrite From header to match actual sender](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#experimental-rewrite-from-header-to-match-actual-sender)

* * *

## How to Prevent Email Abuse

Last modified: _2022 May 18_

* * *

## Overview

This document outlines some of the best practices that you can follow to avoid email abuse on your cPanel & WHM server.

## Password Strength Configuration

If you increase the minimum password strength for your users’ mail accounts, you can decrease the chance that a hacker will correctly guess their passwords.

To define minimum password strength for all of your users’ authenticated features, use WHM’s [_Password Strength Configuration_](https://docs.cpanel.net/whm/security-center/password-strength-configuration) interface ( _WHM_ » _Home_ » _Security Center_ » _Password Strength Configuration_).

Note:

We recommend that you set the default minimum password strength to at least `50`.

## Enable cPHulk

cPHulk provides protection for your server against brute force attacks (a hacking method that uses an automated system to guess passwords). If you enable cPHulk, you can decrease the chance that a hacker can use a brute force attack to gain access to your server’s mail accounts.

To enable this feature, navigate to WHM’s [_cPHulk Brute Force Protection_](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) interface ( _WHM_ » _Home_ » _Security Center_ » _cPHulk Brute Force Protection_) and click _Off_ to toggle the feature’s status.

## Enable Greylisting

Greylisting is a service that protects your server against unwanted email or spam. When enabled, the mail server will temporarily reject any email from a sender that the server does not recognize. If the email is legitimate, the originating server tries to send it again after a delay. After sufficient time passes, the server accepts the email.

To enable this feature, navigate to WHM’s [_Greylisting_](https://docs.cpanel.net/whm/email/greylisting) interface ( _WHM » Home » Email » Greylisting_) and click _Off_ to toggle the feature’s status.

## SMTP restrictions

If you enable the _SMTP Restrictions_ feature, spammers cannot directly interact with remote mail servers or work around mail security settings.

- This feature restricts outgoing email connection attempts to the mail transfer agent (MTA), the `mailman` system user, and the `root` user.

- This feature forces both scripts and users to use Exim’s `sendmail` binary, which helps to prevent direct access to the socket.


To enable this feature, navigate to WHM’s [_SMTP Restrictions_](https://docs.cpanel.net/whm/security-center/smtp-restrictions) interface ( _WHM_ » _Home_ » _Security Center_ » _SMTP Restrictions_) and click _Enable_.

## Exim Configuration Manager

WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_) provides a large number of spam and abuse prevention options.

We **strongly** recommend that you read the [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) documentation for each option in that interface.

## Tweak Settings

The following settings in the _Mail_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings) interface ( _WHM_ » _Home_ » _Server Configuration_ » _Tweak Settings_) can help to prevent email abuse:

Note:

If you set the _Max hourly emails per domain_ option to `500`, this allows each of the domains that you host to send 500 email messages per hour. For example, a domain uses a mailing list with 500 members. If this domain sends a message to the mailing list, then sends another email message in the same hour, the domain will exceed the _Max hourly emails per domain_ limit.

Use the _The percentage of email messages (above the account’s hourly maximum) to queue and retry for delivery_ setting to specify a “soft limit.” For example, if you set the _The percentage of email messages (above the account’s hourly maximum) to queue and retry for delivery_ value to `150`, the domain can queue up to 250 messages to send in the next hour. In this scenario, the domain can queue the additional 25 email messages in the next hour.

#### Max hourly emails per domain

This setting specifies the maximum number of emails that each domain can send per hour.

This setting defaults to _Unlimited_.

Note:

- The system **only** enforces email send limits on remote email deliveries.

- This setting does **not** appear if you disable the Exim Mail Server service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM_ » _Home_ » _Service Configuration_ » _Service Manager_).

- This setting does **not** function if you disable the Eximstats driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) ( _WHM » Home » Service Configuration » Service Manager_).

- This setting does **not** override the following settings:
  - _Maximum Hourly Email by Domain Relayed_
  - _Maximum percentage of failed or deferred messages a domain may send per hour_

Important:

The system **only** enforces email send limits on remote email deliveries. To prevent email abuse, we recommend that you specify a value that is **not** _Unlimited_.

#### Account specific Max hourly emails per domain settings

Use WHM’s [_Edit a Package_](https://docs.cpanel.net/whm/packages/edit-a-package) interface ( _WHM_ » _Home_ » _Packages_ » _Edit a Package_) or WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account) interface ( _WHM_ » _Home_ » _Account Functions_ » _Modify an Account_) to specify values for an individual package or an individual account.

To enable this setting from the command line, you **must** perform the following steps to manually edit the `cpuser` file:

1. From the command line, open the `/var/cpanel/users/username` file, where `username` represents the desired account username.

2. In this file, add the `MAX_EMAIL_PER_HOUR` key and specify the value for the selected username:



```bash
MAX_EMAIL_PER_HOUR=500
```

3. Run the `/usr/local/cpanel/scripts/updateuserdomains` script.


#### Prevent nobody from sending mail

This setting denies the `nobody` user the ability to send mail to a remote address.

The setting defaults to _On_.

Note:

PHP and CGI scripts generally run as the `nobody` user unless you enable the suEXEC, ModRuid2, or suPHP PHP modules. Read the [PHP configuration](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-email-abuse/#php-configuration) section for more information.

Important:

To prevent email abuse, we recommend that you select _On_.

#### The percentage of email messages above the account hourly maximum to queue and retry for delivery

This setting specifies whether to queue outgoing messages for later delivery after a domain reaches its limit for outgoing messages per hour.

Note:

The minimum value for this setting is `100`, with a maximum value of `10,000`.

For example, with the default value of `125%`, after the domain reaches its hourly limit Exim queues any additional messages, up to 125% of the _Max hourly emails per domain_ value. After the account reaches 125% of the _Max hourly emails per domain_ value, any additional outgoing messages will fail.

This setting defaults to _125%_.

Note:

- To force the failure of **all** outgoing messages after the domain reaches its limit, set this option to `100`.

- This setting does **not** appear if you disable the Exim Mail Server service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).

- This setting does **not** function if you disable the Eximstats driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) ( _WHM » Home » Service Configuration » Service Manager_).


#### Maximum percentage of failed or deferred messages a domain may send per hour

This setting allows you to specify a maximum percentage of failed or deferred messages that your domain may send per hour. Your server temporarily blocks outgoing mail from a domain if **both** of the following conditions are true:

- The percentage of failed or deferred messages, out of the total number of sent messages, is **equal to or greater than** the specified percentage.

- The domain has sent **at least** the number of failed or deferred messages that the _Number of failed or deferred messages a domain may send before protections can be triggered_ setting specifies.


The system examines all outgoing and local mail over the previous hour to determine whether these conditions are true. If **only one** of these conditions is true, the system does **not** block outgoing mail.

For more information, read our [Mail Limiting Features](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features) documentation.

This setting defaults to _Unlimited_.

Note:

- This setting does **not** appear if you disable the Exim Mail Server service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).

- This setting does **not** function if you disable the Eximstats driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) ( _WHM » Home » Service Configuration » Service Manager_).

- The system uses this setting in conjunction with the _Number of failed or deferred messages a domain may send before protections can be triggered_ setting. Your server does **not** temporarily block outgoing mail from a domain until the domain meets **both** settings’ requirements.


#### Initial default/catch-all forwarder destination

This setting specifies the initial forwarding destination for new accounts’ default (catch-all) email addresses. The cPanel account default address handles email that nonexistent users on your server’s domains receive.

Important:

- If you receive large amounts of spam, we recommend that you change this setting from _System account_ (the default) to _Fail_.
- Check your domains’ default addresses **often** for missing messages. The domain default address may receive messages for your existing email addresses if they contain typos or other issues. For example, if your email address is `corgis_sploot@example.com` but a sender uses `corgi_splot@example.com`, the default address will receive it.

This setting changes the default setting for newly-created accounts. To change this setting for an existing account, perform the following steps:

1. Log in to the desired cPanel account or use WHM’s [_List Accounts_](https://docs.cpanel.net/whm/account-information/list-accounts) interface ( _WHM » Home » Account Information » List Accounts_) to access it.

2. Navigate to cPanel’s [_Default Address_](https://docs.cpanel.net/cpanel/email/default-address) interface ( _cPanel » Home » Email » Default Address_).

3. From the _Send all unrouted email for the following domain_ menu, select the domain for which you wish to set a default address.

4. Select the _Discard the email while your server processes it by SMTP time with an error message_ setting. This setting will send an error message to the sender.

5. Enter an error message in the _Failure Message (seen by sender)_ text box.

6. Click _Change_.


## PHP configuration

If you configure PHP with suEXEC, ModRuid2, or suPHP, you can see which users run which processes on the system. The ModRuid2, suEXEC, and suPHP PHP modules force CGI and PHP processes to run as the cPanel account user.

If these processes create email messages, the system sends them as the cPanel user instead of as the `nobody` user. This makes it easier to track if a compromised account is sending spam.

Warning:

Do **not** enable suEXEC with ModRuid2. suEXEC is **not** compatible with this module.

## EXPERIMENTAL Rewrite From header to match actual sender

Any local cPanel user can use the `127.0.0.1` IP address to send mail without authentication. This can make it difficult for system administrators to determine which cPanel account sent the mail, especially when a malicious user spoofs an email address to disguise the origin of the email.

To require cPanel & WHM to put the actual sender in the header, enable the _Experimental: Rewrite From: header to match actual sender_ option in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM_ » _Home_ » _Service Configuration_ » _Exim Configuration Manager_).

After you enable this feature, you will see output that is similar to the following in the `/var/log/exim_mainlog` file:

```bash
2014-04-23 08:09:52 1Wcwvu-0000On-Sb From: header (rewritten was: [fakemail@example.com], actual sender is not the same system user) original=[fakemail@example.com] actual_sender=[spammer@spammer.com]
```

The `actual_sender` portion of the log entry shows that `spammer` is the cPanel account that sent the email. This information allows the system administrator to take action against the account to prevent additional spam.

#### Additional Documentation

* * *

- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Filter Incoming Emails by Country](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/)
- [Filter Incoming Emails by Domain](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-domain/)
- [Spam Filters](https://docs.cpanel.net/cpanel/email/spam-filters/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×