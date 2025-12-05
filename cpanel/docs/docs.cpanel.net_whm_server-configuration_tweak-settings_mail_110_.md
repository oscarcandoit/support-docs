---
url: "https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/110/"
title: "Tweak Settings — Mail | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/110/#main-content)

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
3. [Server Configuration](https://docs.cpanel.net/whm/server-configuration/)
4. Tweak Settings — Mail


[server](https://docs.cpanel.net/tags/server/) [whmui](https://docs.cpanel.net/tags/whmui/) [jupiter](https://docs.cpanel.net/tags/jupiter/)

#### Table of Contents

- [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/)
- [Compression](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/)
- [cPAddons Site Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/cpaddons-site-software/)
- [Development](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/)
- [Display](https://docs.cpanel.net/whm/server-configuration/tweak-settings/display/)
- [Domains](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/)
- [Logging](https://docs.cpanel.net/whm/server-configuration/tweak-settings/logging/)
- [Mail](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/)
- [Notifications](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/)
- [Packages](https://docs.cpanel.net/whm/server-configuration/tweak-settings/packages/)
- [PHP](https://docs.cpanel.net/whm/server-configuration/tweak-settings/php/)
- [Redirection](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/)
- [Security](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/)
- [Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/)
- [SQL](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/)
- [Stats and Logs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/)
- [Stats Programs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-programs/)
- [Status](https://docs.cpanel.net/whm/server-configuration/tweak-settings/status/)
- [Support](https://docs.cpanel.net/whm/server-configuration/tweak-settings/support/)
- [System](https://docs.cpanel.net/whm/server-configuration/tweak-settings/system/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/110/#installation-toggle)

- [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/)
- [Compression](https://docs.cpanel.net/whm/server-configuration/tweak-settings/compression/)
- [cPAddons Site Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/cpaddons-site-software/)
- [Development](https://docs.cpanel.net/whm/server-configuration/tweak-settings/development/)
- [Display](https://docs.cpanel.net/whm/server-configuration/tweak-settings/display/)
- [Domains](https://docs.cpanel.net/whm/server-configuration/tweak-settings/domains/)
- [Logging](https://docs.cpanel.net/whm/server-configuration/tweak-settings/logging/)
- [Mail](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/)
- [Notifications](https://docs.cpanel.net/whm/server-configuration/tweak-settings/notifications/)
- [Packages](https://docs.cpanel.net/whm/server-configuration/tweak-settings/packages/)
- [PHP](https://docs.cpanel.net/whm/server-configuration/tweak-settings/php/)
- [Redirection](https://docs.cpanel.net/whm/server-configuration/tweak-settings/redirection/)
- [Security](https://docs.cpanel.net/whm/server-configuration/tweak-settings/security/)
- [Software](https://docs.cpanel.net/whm/server-configuration/tweak-settings/software/)
- [SQL](https://docs.cpanel.net/whm/server-configuration/tweak-settings/sql/)
- [Stats and Logs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-and-logs/)
- [Stats Programs](https://docs.cpanel.net/whm/server-configuration/tweak-settings/stats-programs/)
- [Status](https://docs.cpanel.net/whm/server-configuration/tweak-settings/status/)
- [Support](https://docs.cpanel.net/whm/server-configuration/tweak-settings/support/)
- [System](https://docs.cpanel.net/whm/server-configuration/tweak-settings/system/)

## Tweak Settings — Mail

![](https://docs.cpanel.net/img/whm-icons/tweak_settings.svg)

_Valid for version 110_

#### Version:

#### [110](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/110/)

#### [112](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/112/)

#### [116](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/116/)

#### [118](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/118/)

#### [120](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/120/)

#### [124](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail/)

Last modified: _2025 April 28_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

The _Mail_ section includes the following settings:

| Setting | Description | Values | Default |
| --- | --- | --- | --- |
| _Max hourly emails per domain_ | This setting specifies the maximum number of emails that each domain can send per hour. The system **only** enforces email send limits on remote email deliveries.<br>Note:<br>- This setting does **not** appear if you disable the _Exim Mail Server_ service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_).<br>- This setting does **not** function if you disable the _Eximstats_ driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).<br>- This setting does **not** override _Maximum percentage of failed or deferred messages a domain may send per hour_ setting.<br>- You **cannot** set a [package’s](https://docs.cpanel.net/whm/packages/edit-a-package/#resource-options) _Maximum Hourly Email by Domain Relayed_ value higher than this setting’s value, although you **can** set it lower. | - Minimum value: N/A<br>- Maximum value: N/A | _Unlimited_ |
| _Number of emails a domain may send per day before the system sends a notification._ | This setting specifies the number of emails per day that a domain can send before the system sends a notification.<br>- To count each account’s outbound emails, this feature uses the [TailWatch](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch) process to monitor a rolling 24-hour window of hourly logfiles. When a new hour begins, the system deletes the **oldest** hour’s logfile.<br>- The system counts outbound mail from subdomains and addon domains separately from their parent domain.<br>  <br>  <br>  <br>  <br>  <br>  Note:<br>  <br>  <br>  <br>  <br>  This setting does **not** function if you disable the _Eximstats_ driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | - Minimum value: N/A<br>- Maximum value: N/A | _Unlimited_ |
| _The mailbox storage format for new accounts_ | This setting specifies the storage format for new accounts’ mailboxes. Accounts that you restore or transfer to your server will retain their original mailbox format. For more information about storage formats, read Dovecot’s [dbox](https://doc.dovecot.org/admin_manual/mailbox_formats/dbox/) and [maildir](https://doc.dovecot.org/admin_manual/mailbox_formats/maildir/) documentation. | - _mdbox_ — An updated format that stores multiple messages in a file and uses index files for message flags and keywords.<br>- _maildir_ — A format that stores folders as separate directories and messages as individual files. The _maildir_ format uses more inode resources than the _mdbox_ format. | _maildir_ |
| _Initial default/catch-all forwarder destination_ | This setting specifies the initial forwarding destination for new accounts’ default (catch-all) email addresses. The default address handles email that nonexistent users on your server’s domains receive. Because a domain may receive a large number of spam messages for nonexistent users, if you choose to process this mail your server may use more resources. cPanel users can modify this forwarding destination in cPanel’s [_Default Address_](https://docs.cpanel.net/cpanel/email/default-address) interface ( _cPanel » Home » Email » Default Address_). | - _System account_ — The system forwards unroutable mail to the cPanel user’s system default email account. If you select this setting, this account collects spam.<br>- _Fail_ — The system discards the message and sends a notification to the sender. Select this setting if you receive email attacks.<br>- _Blackhole_ — The system accepts the message, discards it, and does not notify the remote SMTP server. We recommend that you do **not** use this setting because it violates [SMTP’s RFC 5321](https://datatracker.ietf.org/doc/html/rfc5321). | _System account_ |
| _Mail authentication via domain owner password_ | This setting specifies whether to allow the use of the website owner’s password to access any email address that the owner created within the account. The _Single Sign On_ system generates a temporary user to access a cPanel account and its email accounts as the account owner. This means that if you log in to any email account through the cPanel interface, you do **not** have to enter a password. | - _On_ — Allow.<br>- _Off_ — Don’t allow. | _Off_ |
| _Include mailman in disk usage calculations_ | This setting specifies whether cPanel’s disk usage calculations include Mailman mailing lists. | - _On_ — Include.<br>- _Off_ — Don’t include. | _On_ |
| _Email delivery retry time_ | This setting specifies the number of minutes that your mail server waits before it attempts to redeliver a message after delivery failure.<br>Note:<br>This setting does not appear if you disable the _Exim_ service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_). | - Minimum value: N/A<br>- Maximum value: N/A | _15 m_ |
| _Track email origin via X-Source email headers_ | This setting specifies whether to track the origin of messages that users send through your mail server.<br>- This feature adds X-Source headers to email messages.<br>- This feature **requires** Exim version 4.34 or later.<br>Note:<br>This setting does not appear if you disable the _Exim_ service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_). | - _On_ — Track.<br>- _Off_ — Don’t track. | _On_ |
| _The percentage of email messages (above the account’s hourly maximum) to queue and retry for delivery._ | This setting specifies whether to queue outgoing messages for later delivery after a domain reaches its limit for outgoing messages per hour. For example, with the default value of `125%`, after the domain reaches its hourly limit Exim queues any additional messages, up to `125%` of the _Max hourly emails per domain_ value. After the account reaches 125% of the _Max hourly emails per domain_ value, any additional outgoing messages will fail. <br>- To force the failure of all outgoing messages after the domain reaches its limit, set this option to `100`.<br>Note:<br>- This setting does not appear if you disable the _Exim Mail Server_ service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_).<br>- This setting does **not** function if you disable the _Eximstats_ driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | - Minimum value: `100`<br>- Maximum value: `10,000` | `125%` |
| _Monitor the number of unique recipients per hour to detect potential spammers._ | This setting configures the system to monitor the number of emails to unique recipients that each individual email user sends. If this number exceeds the value of the _Number of unique recipients per hour to trigger potential spammer notification_ setting, the system will send a notification.<br>Note:<br>This setting does **not** function if you disable the _Eximstats_ driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | - _On_ — Monitor.<br>- _Off_ — Don’t monitor. | _On_ |
| _Select the action for the system to take on an email account when it detects a potential spammer._ | The system automatically takes this action on every email account that it detects as a potential spammer.<br>To release or delete outgoing mail held in the queue, perform the following actions in cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts/) interface ( _cPanel » Home » Email » Email Accounts_):<br>1. Click _Manage Suspension_.<br>2. Select _Allow_ for the _Send_ option.<br>3. If applicable, click _Delete messages from the mail queue_ to remove any queued messages.<br>4. Click _Save_.<br>Note:<br>This setting does **not** function if you disable the _Eximstats_ driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | - _Take no action_ — Do not perform any action on the email account.<br>- _Hold outgoing mail_ — Hold all outbound messages in a queue for the email account.<br>- _Reject outgoing mail_ — Block all outbound email for the email account. | _Take no action_ |
| _Number of unique recipients per hour to trigger potential spammer notification._ | This setting specifies the number of emails sent by any email account in one hour that will cause the system to send an alert notification. This setting does **not** count emails sent by Mailman toward the limit. It affects the _Select the action for the system to take on an email account when it detects a potential spammer_ option.<br>Note:<br>This setting does **not** function if you disable the _Eximstats_ driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | - Minimum value: N/A<br>- Maximum value: N/A | _500_ |
| _Count mailman deliveries towards a domain’s Max hourly emails._ | This setting allows you to specify whether to count messages to Mailman mailing lists against an account’s _Max hourly emails per domain_ limit.<br>Note:<br>- If you enable this setting, mailing-list subscribers may not receive all list messages.<br>- This setting does **not** function if you disable the _Eximstats_ driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | - _On_ — Count.<br>- _Off_ — Don’t count. Set this value to _Off_ to accommodate users with large Mailman mailing lists. | _Off_ |
| _Maximum percentage of failed or deferred messages a domain may send per hour_ | This setting allows you to specify a maximum percentage of failed or deferred messages that your domain may send per hour. The system uses this setting in conjunction with the _Number of failed or deferred messages a domain may send before protections can be triggered_ setting. Your server does **not** temporarily block outgoing mail from a domain until the domain meets **both** settings’ requirements. For more information, read our [How to Prevent Spam with Mail Limiting Features](https://docs.cpanel.net/knowledge-base/email/how-to-prevent-spam-with-mail-limiting-features) documentation. <br>Note:<br>- This setting does not appear if you disable the _Exim Mail Server_ service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_).<br>- This setting does **not** function if you disable the _Eximstats_ driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).<br> Your server temporarily blocks outgoing mail from a domain if **both** of the following conditions are true:<br>- The percentage of failed or deferred messages, out of the total number of sent messages, is **equal to or greater than** the specified percentage.<br>- The domain has sent at least the number of failed or deferred messages that the _Number of failed or deferred messages a domain may send before protections can be triggered_ setting specifies.<br>The system examines all outgoing and local mail over the previous hour to determine whether these conditions are true. If **only one** of these conditions is true, the system does **not** block outgoing mail. | - Minimum value: `1`<br>- Maximum value: `100` | _Unlimited_ |
| _Number of failed or deferred messages a domain may send before protections can be triggered_ | This setting specifies a number of failed or deferred messages that a domain can send before the system blocks outgoing mail. Your server temporarily blocks outgoing mail from a domain if **both** of the following conditions are true:<br>- The domain sends **at least** this number of failed or deferred messages.<br>- The percentage of failed or deferred messages (out of the total number of sent messages) is **equal to or greater than** the percentage that the _Number of failed or deferred messages a domain may send before protections can be triggered_ setting specifies.<br>The system examines all outgoing and local mail over the previous hour to determine whether these conditions are true. If only one of these conditions is true, the system does not block outgoing mail.<br>- For more information, read our [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) documentation.<br>- The system uses this setting in conjunction with the _Maximum percentage of failed or deferred messages a domain may send per hour_ setting. Your server does **not** temporarily block outgoing mail from a domain until the domain meets **both** settings’ requirements.<br>Note:<br>- This setting does not appear if you disable the _Exim Mail Server_ service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_).<br>- This setting does **not** function if you disable the _Eximstats_ driver in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | - Minimum value: N/A<br>- Maximum value: N/A | _5_ |
| _Restrict outgoing SMTP to root, exim, and mailman (FKA SMTP Tweak)_ | This setting redirects outgoing SMTP connections to the local mail server and allows only the `root`, `exim`, and `mailman` users to make direction connections. If you enable this setting, scripts and email users **must** use the `sendmail` binary to send mail and **cannot** use direct socket access. | - _On_ — Redirect.<br>- _Off_ — Don’t redirect. | _On_ |
| _Prevent “nobody” from sending mail_ | This setting denies the `nobody` user the ability to send mail to a remote address. PHP and CGI scripts generally run as the `nobody` user. To use a PHP or CGI script to send mail, enable the `suEXEC` or `mod_php` modules in your Apache configuration. | - _On_ — Deny the `nobody` user.<br>- _Off_ — Allow the `nobody` user to send mail. | _On_ |
| _Allow users to relay mail if they use an IP address through which someone has validated an IMAP or POP3 login within the last hour (Pop-before-SMTP)_ | This setting allows users who authenticated against the POP3 or IMAP service in the last 30 minutes to send emails through SMTP again without the need to reauthenticate. <br>Note:<br>- An open email relay on an IP address poses a **security risk**. We recommend that you do **not** enable this option because it can compromise your users’ privacy and **strongly** recommend that you use SMTP authentication instead.<br>- This setting does not appear if you disable the _Exim_ or _RecentAuthedMailIpTracker_ services in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_). | - _On_ — Allow users to relay mail.<br>- _Off_ — Don’t allow users to relay mail. | _Off_ |
| _Add X-PopBeforeSMTP header for mail sent via POP-before-SMTP_ | This setting requires the mail server to append a list to the `X-PopBeforeSMTP` headers of all of that user’s outgoing messages. This list contains all of the email addresses that a user checks with POP before SMTP. <br>- POP before SMTP is an email protocol that allows users to check email from different IP addresses without the need to log in repeatedly.<br>Note:<br>- We recommend that you **do not** enable this setting because it can compromise your users’ privacy.<br>- This setting requires Exim 4.34 or later and does not appear if you disable the _Exim_ service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_).<br>- You **must** set the _Allow users to relay mail if they use an IP address through which someone has validated an IMAP or POP3 login within the last hour (Pop-before-SMTP)_ setting to _On_ to toggle this setting. | - _On_ — Require an appended list.<br>- _Off_ — Don’t require an appended list. | _Off_ |
| _Enable BoxTrapper spam trap_ | This setting allows you to enable BoxTrapper, a spam prevention system that uses blacklists, whitelists, and ignore lists, and an automated response-verification system.<br>Note:<br>This setting does not appear if you disable the _Exim_ service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_). | - _On_ — Enable BoxTrapper.<br>- _Off_ — Disable BoxTrapper. | _On_ |
| _Enable Email Archiving support_ | This setting enables email archiving support. Email archiving maintains a copy of each email that your server sends or receives. The server immediately archives an email when it receives the message.<br>- This action takes place before the system applies any filters to the message, which means that the system archives both spam and non-spam messages.<br>  <br>  <br>  <br>  <br>  <br>  Note:<br>  <br>  <br>  <br>  <br>  This setting does not appear if you disable the _Exim_ service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_). | - _On_ — Enable email archiving. If you enable this setting, the amount of disk space that mail uses **will double**.<br>- _Off_ — Disable email archiving. | _Off_ |
| _Enable Mailman mailing lists_ | This setting enables Mailman on your server. Mailman is third-party software that manages [mailing lists](https://docs.cpanel.net/cpanel/email/mailing-lists/).<br>Note:<br>The system does **not** start the Mailman service until the server hosts at least one mailing list. | - _On_ — Enable Mailman.<br>- _Off_ — Disable Mailman. | _On_ |
| _Enable Roundcube webmail_ | This setting enables the Roundcube webmail client. Webmail allows cPanel users to access their email accounts with an internet connection and a web browser. | - _On_ — Enable Roundcube.<br>- _Off_ — Disable Roundcube. | _On_ |
| _Enable Apache SpamAssassin™ spam filter_ | This setting enables [Apache SpamAssassin](http://spamassassin.apache.org/), a spam filtration program that scores incoming email and checks that score against a predefined limit. If the spam score exceeds this limit, the server takes the action that the domain owner specified in cPanel’s [_Spam Filters_](https://docs.cpanel.net/cpanel/email/spam-filters) interface ( _cPanel » Home » Mail » Spam Filters_). You can discard mail or place it in a spam folder.<br>Note:<br>- If you make changes to Apache SpamAssassin’s configuration, you **must** run the `/usr/local/cpanel/3rdparty/bin/sa-compile` script for your changes to take effect.<br>- This setting does not appear if you disable the _Exim_ service in WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager) interface ( _WHM » Home » Service Configuration » Service Manager_). | - _On_ — Enable Apache SpamAssassin.<br>- _Off_ — Disable Apache SpamAssassin. | _On_ |
| _Enable Apache SpamAssassin™ Spam Box delivery for messages marked as spam (user configurable)_ | This setting enables Apache SpamAssassin’s spam box feature. The spam box receives incoming mail that Apache SpamAssassin marks as spam. This is useful for users who receive a message that the system falsely flags as spam. | - _On_ — Enable spam box.<br>- _Off_ — Disable spam box. | _On_ |
| _Prefix “mail.” onto Mailman URLs_ | This setting specifies whether the system should prefix Mailman URLs with `mail` (for example, `http://mail.domain.com/mailman`).<br>Note:<br>If you set this value to _On_, this setting **overrides** any custom URL in your Mailman configuration. | - _On_ — Add the prefix.<br>- _Off_ — No prefix. | _Off_ |
| _Default user-defined quota value for new email accounts_ | This setting defines the default quota that appears in cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts/) interface ( _cPanel » Home » Mail » Email Accounts_). | - Minimum value: N/A<br>- Maximum value: `4,294,967,296` MB (`4` Terabytes) | _32768 MB_ |
| _Default quota option for new email accounts_ | This setting defines the preselected quota option in cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts/) interface ( _cPanel » Home » Mail » Email Accounts_). | - _Unlimited_ — Unlimited quota.<br>- _User-defined_ — A user-defined quota. | _User-defined_ |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×