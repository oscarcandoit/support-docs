---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits/"
title: "How to Set Email Send Limits | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits/#main-content)

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
4. How to Set Email Send Limits


[spam](https://docs.cpanel.net/tags/spam/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits/#overview)

* * *

[Set the default hourly limit for all domains](https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits/#set-the-default-hourly-limit-for-all-domains)

* * *

[Set an hourly limit for the domains of an account](https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits/#set-an-hourly-limit-for-the-domains-of-an-account)

* * *

[Set an hourly limit for an individual domain](https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits/#set-an-hourly-limit-for-an-individual-domain)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits/#overview)

* * *

[Set the default hourly limit for all domains](https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits/#set-the-default-hourly-limit-for-all-domains)

* * *

[Set an hourly limit for the domains of an account](https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits/#set-an-hourly-limit-for-the-domains-of-an-account)

* * *

[Set an hourly limit for an individual domain](https://docs.cpanel.net/knowledge-base/email/how-to-set-email-send-limits/#set-an-hourly-limit-for-an-individual-domain)

* * *

## How to Set Email Send Limits

Last modified: _2025 April 28_

* * *

## Overview

WHM allows you to specify the maximum number of emails that each domain on your server can send per hour. This allows you to limit spam and better regulate bandwidth that the domains on your server use.

Important:

After the system reaches a limit, it does **not** block additional messages at SMTP time. Instead, the system accepts and then handles additional messages per the value of the _The percentage of email messages (above the account’s hourly maximum) to queue and retry for delivery._ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings#mail) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

## Set the default hourly limit for all domains

To set the default hourly email limit for all of your server’s domains, enter a value for the _Max hourly emails per domain_ setting in the _Mail_ section of WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/mail) interface ( _WHM » Home » Server Configuration » Tweak Settings_).

This value defines the default limit for all of the domains on your server, except for domains for which you manually set a different limit.

Important:

- The _Maximum Hourly Email by Domain Relayed_ setting in the [Edit a Package](https://docs.cpanel.net/whm/packages/edit-a-package) interface can set a lower maximum hourly email limit than the _Max hourly emails per domain_ setting, but **cannot** set a higher limit.
- You **cannot** use the _Max hourly emails per domain_ setting to disable email for an account or domain.
- The system **only** enforces email send limits on remote email deliveries.

## Set an hourly limit for the domains of an account

To limit the number of emails per hour that an account’s domains can send, perform the following steps:

1. Navigate to WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account/) interface ( _WHM » Home » Account Functions » Modify an Account_).

2. Specify a value for the _Hourly Email by Domain Relayed configuration_ setting. This value **cannot** be higher than the _Max hourly emails per domain_ setting, but **can** be lower.

3. Click _Save_.


Note:

This option sets the email limits for **all** of the subdomains, addon domains, and parked domains (aliases) for an account’s main domain. However, the system counts the mail for each domain, subdomain, addon domain, and parked domain separately. When you enter a new limit, the system **only** applies the new value to the main domain and any domains without individually-defined values.

## Set an hourly limit for an individual domain

If you wish for an individual domain to have a different hourly mail limit from the main domain, you can also configure a limit for each domain. This value **cannot** be higher than the _Max hourly emails per domain_ setting, but **can** be lower.

To set a limit for an individual domain, perform the following steps via the command line as the `root` user:

1. With a text editor, open the `/var/cpanel/users/username` file, where `username` represents the account that owns the domain.

2. Add a line that contains the following text:


```perl
MAX_EMAIL_PER_HOUR-
```

3. To that line, append the domain name, an equals sign (`=`), and the number of email messages to allow the domain to send per hour. For example, if the domain name to set a limit of 500 emails for the domain `example.com`, enter the following line:

```perl
MAX_EMAIL_PER_HOUR-example.com=500
```

4. Save the changes to the `/var/cpanel/users/username` file.

5. Run the `/usr/local/cpanel/scripts/updateuserdomains` script. This script constructs the individual threshold files that Exim uses to determine whether the account has reached its maximum email limit.


Note:

The system assigns the value of the `MAX_EMAIL_PER_HOUR` setting in the `/etc/email_send_limits` file to any domain **without** a specific entry in the `/var/cpanel/users/username` file. If the `/etc/email_send_limits` file does **not** exist, the system assigns the default value to the domain.

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