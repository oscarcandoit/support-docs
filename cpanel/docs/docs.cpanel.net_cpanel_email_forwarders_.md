---
url: "https://docs.cpanel.net/cpanel/email/forwarders/"
title: "Forwarders | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/forwarders/#main-content)

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
4. Forwarders


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [forwarders](https://docs.cpanel.net/tags/forwarders/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/forwarders/#overview)

* * *

[Email account forwarders](https://docs.cpanel.net/cpanel/email/forwarders/#email-account-forwarders)

* * *

[Add an account forwarder](https://docs.cpanel.net/cpanel/email/forwarders/#add-an-account-forwarder)

* * *

[Pipe to a program](https://docs.cpanel.net/cpanel/email/forwarders/#pipe-to-a-program)

* * *

[Trace a forwarder](https://docs.cpanel.net/cpanel/email/forwarders/#trace-a-forwarder)

* * *

[Domain forwarders](https://docs.cpanel.net/cpanel/email/forwarders/#domain-forwarders)

* * *

[Add domain forwarder](https://docs.cpanel.net/cpanel/email/forwarders/#add-domain-forwarder)

* * *

[Delete a domain forwarder](https://docs.cpanel.net/cpanel/email/forwarders/#delete-a-domain-forwarder)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/forwarders/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/forwarders/#overview)

* * *

[Email account forwarders](https://docs.cpanel.net/cpanel/email/forwarders/#email-account-forwarders)

* * *

[Add an account forwarder](https://docs.cpanel.net/cpanel/email/forwarders/#add-an-account-forwarder)

* * *

[Pipe to a program](https://docs.cpanel.net/cpanel/email/forwarders/#pipe-to-a-program)

* * *

[Trace a forwarder](https://docs.cpanel.net/cpanel/email/forwarders/#trace-a-forwarder)

* * *

[Domain forwarders](https://docs.cpanel.net/cpanel/email/forwarders/#domain-forwarders)

* * *

[Add domain forwarder](https://docs.cpanel.net/cpanel/email/forwarders/#add-domain-forwarder)

* * *

[Delete a domain forwarder](https://docs.cpanel.net/cpanel/email/forwarders/#delete-a-domain-forwarder)

* * *

## Forwarders

![](https://docs.cpanel.net/img/cpanel-icons/forwarders.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [96](https://docs.cpanel.net/cpanel/email/forwarders/96/)

#### [130](https://docs.cpanel.net/cpanel/email/forwarders/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface allows you to configure an email address to forward incoming emails to another address. This is useful if, for example, you want to forward emails from an old address to a new one.

You can also use one email account to receive emails addressed to multiple addresses without having an account for each. Additionally, multiple email addresses can receive the same email.

You can also set the server to discard email or send (pipe) email to a program.

Important:

- You **must** create cPanel-managed email addresses before configuring forwarders for them.

- cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):


  - Editing DNS
  - Email services
  - Search Engine Optimization

- To manage forwarders for email accounts that use the [_BoxTrapper_](https://docs.cpanel.net/cpanel/email/boxtrapper/) feature ( _cPanel » Home » Email » BoxTrapper_), use the BoxTrapper _Forward List_ feature.

- You **cannot** configure a wildcard redirect in the _Forwarders_ interface. To learn more about wildcard redirects, such as how to create a redirect for all email sent to a domain, read our [Global Email Filters](https://docs.cpanel.net/cpanel/email/global-email-filters/#create-a-wildcard-redirect) documentation.

- For information about creating a [catch-all](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#catch-all-address-domain-default-address) email address for a domain, read cPanel’s [_Default Address_](https://docs.cpanel.net/cpanel/email/default-address) interface ( _cPanel » Home » Email » Default Address_) documentation.


## Email account forwarders

By default, the _Email Account Forwarders_ table lists all email addresses in all domains that use a forwarder to redirect email to another address or service. To manage forwarders for a specific domain on your account, select the desired domain from the _Managing_ menu.

- To quickly find a specific email address, enter a keyword in the _Search_ text box and click _Go_.
- To view the route that a forwarded email takes, click _Trace_ in the _Actions_ column next to that email address. For information on tracing a forwarder, read the [Trace a forwarder](https://docs.cpanel.net/cpanel/email/forwarders/#trace-a-forwarder) section of this document.
- To delete a forwarder, click _Delete_ in the _Actions_ column for the forwarder, then click _Delete Forwarder_ to confirm.
- To change a forwarder, delete it, then follow the steps in the [Add an account forwarder](https://docs.cpanel.net/cpanel/email/forwarders/#add-an-account-forwarder) section below to recreate it.

Important:

- To forward mail from an email account on the server and also get a copy in the email account, first [create the email account](https://docs.cpanel.net/cpanel/email/create-an-email-account/), then add a forwarder for it. If a forwarder shares an address with an email account, **both** will receive mail.
- When you forward emails from an existing email account on the server, the system stores the emails in the account, then forwards them. To stop receiving emails in the account, delete it. Then, **only** the existent address will receive the emails.
- You **cannot** modify an existing email forwarder. To change the forwarding behavior for an address, you **must** delete the existing email forwarder and create a new one.

### Add an account forwarder

To add an email forwarder, perform the following steps:

1. In the _Managing_ menu, select the domain whose emails you want to forward.
2. In the _Create an Email Account Forwarder_ section, click _Add Forwarder_. The _Add a New Forwarder_ interface will appear.
3. In the _Add a New Forwarder_ interface, enter the username of the email address you want to forward.






Note:





Your email username is the part of the email address that comes **before** the domain. For example, if you want the address `purchases@example.com` to forward to `products@example.com`, enter `purchases` in the _Address to forward:_ text box. Do **not** include the `@` symbol.

4. In the _Domain_ menu, select the domain of the email address you want to forward.
5. Select one of the following options in the _existent_ menu:



| Setting | Description |
| --- | --- |
| _Forward to Email Address_ | The system will forward incoming email to another account or multiple addresses. To forward to multiple addresses, you **must** enter the destination addresses separated by commas in the text box. For example, to forward emails from `purchases@example.com` to `products@example.com` and `sales@example.com`, enter `products@example.com, sales@example.com` in the text box.<br>Note: <br>Forwarding email accounts keep a copy of the emails that they forward. If you have access to both the forwarding email and the destination email, you can view the forwarded email in both accounts. |
| _Discard and send an error to the sender (at SMTP time)._ | The system will discard the incoming email and provide the sender with a failure message. The system sets the failure message to `No such person at this address` by default. You may also enter a custom failure message into the _Failure Message (seen by sender)_ text box. |

6. Click _Advanced Options_ to access the following options:



| Setting | Description |
| --- | --- |
| _Forward to a system account_ | Select this option to forward incoming email to a [system user email account](https://docs.cpanel.net/cpanel/email/manage-email-accounts/#manage-the-system-user-email-account). To do so, enter the system user name in the text box. |
| _Discard (Not Recommended)_ | Select this option to discard emails without a failure message. Emails sent to the initial address will **not** be forwarded. Unlike the _Discard and send an error to the sender (at SMTP time)_ option, the user will **not** receive any failure messages. |
| [_Pipe to a Program_](https://docs.cpanel.net/cpanel/email/forwarders/#pipe-to-a-program) | Select this option to pipe incoming emails to a program. Enter the program’s **relative** path in your home directory in the text box. For example, if the script requires an interpreter such as Perl or PHP, **omit** the `/usr/bin/perl` or `/usr/bin/php` portion of the path. |

7. Click _Add Forwarder_.

### Pipe to a program

Use the _Pipe to a Program_ option to parse and enter email information into a different system. For example, use the _Pipe to a Program_ option to pipe email information to a program that enters email information into a ticket system.

- STDIN pipes email and headers to the program.
- Pipes can accept variables from the `$_SERVER` array and variables on the command line.
- The language or environment that you use may cause memory limit issues.
- If your script produces any output, even a blank line, the system will create a bounce message that contains that output.

When you use the _Pipe to a Program_ option, enter a path that is relative to your home directory. For example, to use the `/home/user/script.pl` script, enter `script.pl` in the _Pipe to a Program_ text box, where `user` represents your username.

Important:

- To pipe email to a script, the script **must** be executable and contain the appropriate [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) (`#!`). If you do not know how to add the shebang, name the script with the correct executable extension. The system will prompt you to automatically add the shebang.
- Make **certain** that your script uses the proper file permissions (`0700`). To change your script’s file permissions, run the `chmod 0700 myscript.php` command, where `myscript.php` represents your script’s location and file name.

### Trace a forwarder

Tracing an email account forwarder allows you to locate a possible routing error, which may send emails to the wrong or nonexistent location. To trace a forwarded email, perform the following steps:

1. Under the _Actions_ menu, next to the forwarder you want to test, click _Trace_.
2. The _Track Delivery_ page that appears will show you the path that the forwarded email messages will take.
3. The following icons help indicate where the message is going:
   - The red exclamation point icon (![error icon](https://docs.cpanel.net/img/forwarder-mailroutingerror.gif)) indicates that messages will encounter an error.
   - The file page icon (![filter into file icon](https://docs.cpanel.net/img/forwarder-filterfile.gif)) indicates that the forwarder will filter messages into a file.
   - The green globe icon (![message forwards to another server icon](https://docs.cpanel.net/img/forwarder-smtpdestination.gif)) indicates that the forwarder will deliver the message to a different server.
   - The folder icon (![local address icon](https://docs.cpanel.net/img/forwarder-localmailbox.gif)) indicates that the message will go to a local address on this server.
4. To return to the _Forwarders_ interface, click the _Go Back_ button.

Note:

- If you receive an error from a trace, verify that you entered the correct forwarding email address. For additional assistance, contact your hosting provider.
- If the server uses a third-party mail service, such as MailScanner, this feature will return invalid results. If you experience issues when you use this feature, contact your hosting provider for more information about your server’s configuration.

## Domain forwarders

The _Forward All Email for a Domain_ table lists all of the domain forwarders for your account.

Domain forwarders redirect incoming email for invalid addresses to another domain. Domain forwarders **only** forward email when the system cannot deliver it to an address or autoresponder.

For example, if you create a domain forwarder from the `example.com` domain to the `example1.com` domain and someone sends an email to the `user@example.com` address, the following actions will occur:

- If a `user@example.com` address or autoresponder exists, the system will **not** forward the email.
- If a `user@example.com` address or autoresponder does **not** exist, the system will forward the email to `user@example1.com`.

Because domain forwarders only work for undeliverable emails, you cannot access the emails at the forwarding address. For example, if an email is forwarded from `returns@exampl3.com` to `returns@example.com` because `exampl3.com` is an invalid domain name, you cannot log in to the invalid `returns@exampl3.com` to view the forwarded email.

Note:

To forward all of a domain’s undeliverable email to a single address, use cPanel’s [_Default Address_](https://docs.cpanel.net/cpanel/email/default-address/) interface ( _cPanel » Home » Email » Default Address_). Any domain forwarders you set override the default address settings.

### Add domain forwarder

To create a domain forwarder, follow these steps:

1. In the _Managing_ menu, select the domain whose emails you want to forward.
2. In the _Create an Email Account Forwarder_ section, click _Add Domain Forwarder_. The _Add a New Domain Forwarder_ interface will appear.
3. In the _Domain_ menu, select the domain **from** which you want to forward email.
4. In the _Domain_ text box, enter the domain **to** which you want to forward email.
5. Click _Add Domain Forwarder_.

### Delete a domain forwarder

Next to the domain forwarder you wish to remove, click _Delete_. To confirm your choice, click _Delete Domain Forwarder_.

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×