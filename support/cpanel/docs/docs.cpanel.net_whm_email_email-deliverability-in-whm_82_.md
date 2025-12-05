---
url: "https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/"
title: "Email Deliverability in WHM | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#main-content)

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
3. [Email](https://docs.cpanel.net/whm/email/)
4. Email Deliverability in WHM


[dkim](https://docs.cpanel.net/tags/dkim/) [spf](https://docs.cpanel.net/tags/spf/) [whmui](https://docs.cpanel.net/tags/whmui/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#overview)

* * *

[Manage the Domain](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#manage-the-domain)

* * *

[DKIM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#dkim)

* * *

[Suggested DKIM record](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#suggested-dkim-record)

* * *

[The DSO PHP handler without ModRuid2 or MPM ITK](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#the-dso-php-handler-without-modruid2-or-mpm-itk)

* * *

[SPF](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#spf)

* * *

[Suggested SPF record](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#suggested-spf-record)

* * *

[Customize an SPF record](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#customize-an-spf-record)

* * *

[Preview of the Updated Record](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#preview-of-the-updated-record)

* * *

[Reverse DNS (PTR)](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#reverse-dns-ptr)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#overview)

* * *

[Manage the Domain](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#manage-the-domain)

* * *

[DKIM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#dkim)

* * *

[Suggested DKIM record](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#suggested-dkim-record)

* * *

[The DSO PHP handler without ModRuid2 or MPM ITK](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#the-dso-php-handler-without-modruid2-or-mpm-itk)

* * *

[SPF](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#spf)

* * *

[Suggested SPF record](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#suggested-spf-record)

* * *

[Customize an SPF record](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#customize-an-spf-record)

* * *

[Preview of the Updated Record](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#preview-of-the-updated-record)

* * *

[Reverse DNS (PTR)](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/#reverse-dns-ptr)

* * *

## Email Deliverability in WHM

![](https://docs.cpanel.net/img/whm-icons/email_deliverability.svg)

_Valid for versions 82 through 122_

#### Version:

#### [82](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/82/)

#### [124](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)

Last modified: _2024 September 18_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

Use this interface to identify problems with your server’s mail-related DNS records. The system uses these records to verify that other servers can trust it as a sender.

Note:

- Both DomainKeys Identified Mail (DKIM) and Sender Policy Framework (SPF) authentication **require** that you use a DNS server for the domain name. For more information about your DNS servers, contact your hosting provider.

- The system modifies the DKIM and SPF records if it is authoritative for a domain’s DNS records.

- For steps to set up your server’s nameservers with your registrar, read our [How to Set Up Nameservers in a cPanel & WHM Environment](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/) documentation.


## Manage the Domain

This section of the interface displays the following information:

- _Domain_ — The server’s hostname.
- _Mail HELO_ — The server’s [HELO](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol#SMTP_transport_example) configuration.






Note:





This information only appears if the `/etc/mailhelo` file configuration and the domain don’t match.


## DKIM

This section allows you to manage the server’s DKIM record. DKIM verifies the sender and the integrity of a message.

- It allows an email system to prove that spammers didn’t alter an incoming message while it was in transit.
- It verifies that the messages your server receives came from the specified domain.

### Suggested DKIM record

If any problems exist with the current record, this section displays the properly-configured DKIM record values in the _Suggested “DKIM” (TXT) Record_ section. This section allows you to perform the following actions:

- _Generate Local DKIM Key_ — Generate a DKIM record if one doesn’t exist.

- _Copy_ — Copy the _Name_ and _Value_ records that the system provides. If you don’t have the correct permissions to edit your record, give this information to your system administrator.

- _View_ — Modify the `Value` field’s displayed record:
  - _Full_ — The record displays in its entirety. Use this setting if you automatically split your records.

  - _Split_ — The record displays in 255-character parts. Use this setting if you don’t automatically split your records.
- _View the Private Key_ — Retrieve the suggested private key. The _View the Private DKIM Key_ interface will appear.







Important:





Exposing your private DKIM key is a **security risk**. If others obtain your private DKIM key, they could sign emails and impersonate you as a sender. Make **certain** that you only provide your private DKIM key to a trusted user.


### The DSO PHP handler without ModRuid2 or MPM ITK

Warning:

WebPros International, LLC does **not** recommend this configuration.

If you install the [DSO PHP handler](https://docs.cpanel.net/ea4/php/php-handlers/) **without** [ModRuid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/) or [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk) and you enable DKIM:

- Emails that you send will display `nobody` as the sender.
- The system won’t display any information in the `Return-Path`, `Reply-To`, or `From` fields in the email header.

To add these fields to your email headers, add the missing fields via the following PHP script or contact your system administrator:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```go<br><?php<br>$to      = 'nobody@example.com';<br>$subject = 'the subject';<br>$message = 'hello';<br>$headers = 'From: webmaster@example.com' . "\r\n" .<br>    'Return-Path: webmaster@example.com' . "\r\n" .<br>    'Reply-To: webmaster@example.com' . "\r\n" .<br>mail($to, $subject, $message, $headers);<br>?><br>``` |

## SPF

This section allows you to manage a domain’s SPF record. SPF verifies that an approved sender sent messages originating from a domain.

### Suggested SPF record

If any problems exist with the current record, a correct SPF record configuration will appear in the _Suggested “SPF” (TXT) Record_ section. This section also allows you to perform the following actions:

- _Copy_ — Copy the _Name_ and _Value_ records that the system provides. If you don’t have the correct permissions to edit your record, give this information to your system administrator.

- _View_ — Modify the `Value` field’s displayed record:
  - _Full_ — The record displays in its entirety. Use this setting if you automatically split your records.

  - _Split_ — The record displays in 255-character parts. Use this setting if you don’t automatically split your records.
- _Customize_ — Modify the suggested SPF record. The _Customize an SPF Record_ interface will appear.


### Customize an SPF record

Use this interface to customize the system’s recommended SPF record for a domain.

- The interface displays the domain’s current SPF name and value in the _Current “SPF” (TXT) Record_ section.
- The interface displays the system’s recommendations in the _Suggested “SPF” (TXT) Record_ section.

You can configure the following settings:

#### Domain settings

This section allows you to define the hosts or MX servers that can send mail from a domain.

- Click the appropriate _+_ icon ( _+_) under a heading to add items to the SPF record.
- Use the text boxes under each heading to modify existing items of that type in the SPF record.
- Click the X icon ( _X_) for the appropriate text box to delete an item in the SPF record.

You can perform these steps under the following headings:

##### Additional Hosts

Under _Additional Hosts_, you can create and manage additional hosts that the system allows to send mail from your domain. The system automatically includes the primary mail exchanger and other servers for which you created an MX record.

##### Additional MX Servers

Under _Additional MX Servers_, you can create and manage the MX entries that can send mail from a domain.

#### IP Address Settings

Under _IP Address Settings_, you can create and manage additional IP address blocks to the domain’s SPF record.

- The system automatically includes your server’s main IPv4 or IPv6 addresses.
- You can use [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) to update these settings (for example, `10.0.0.0/8` or `2001:db8:1a34:56cf::/64`).

#### Additional Settings

Under _Additional Settings_, you can create and manage additional SPF record settings.

- Use the items under _Include List (INCLUDE)_ to include additional items in your SPF settings. For example, you could use this when you send email through another service, such as [Mailchimp®](https://mailchimp.com/).

- Use the items under _Exclude All Other Hosts ("-all" Entry)_ to exclude any hosts that the other SPF mechanisms don’t allow.







Note:





- If you enable this setting, the SPF feature causes undefined hosts to fail.
- By default, the system recommends the `~all` entry. This entry instructs servers to accept mail from unmatched hosts, but warn that unauthorized hosts may have sent the messages.

### Preview of the Updated Record

This section displays a preview of the updated SPF record based on your current modifications.

- Click _Copy_ to copy the provided record.
- Click _Install a Customized SPF Record_ to install the new record.

Note:

If you don’t have the authority to update a domain’s SPF record, the system **disables** this section. Instead, click _Copy_ to copy the provided record and send it to your system administrator.

## Reverse DNS (PTR)

This section allows you to view and verify a domain’s current pointer (PTR) record. A PTR record is a DNS record that resolves an IP address to a domain or hostname. The server uses this record to perform a reverse DNS (rDNS) lookup to retrieve the associated domain or hostname. A PTR record requires an associated A record.

The interface provides information when a problem exists with this record. It also provides instructions to fix your PTR record.

Note:

- You **must** have the authority to update a domain’s PTR record. If you don’t, contact the owner of the IP address.

- If you have configured [smarthosting](https://en.wikipedia.org/wiki/Smart_host) on the server, this section won’t appear.
  - When the system relays mail through a smarthost, your server doesn’t deliver the mail. Instead, the configured smarthost delivers your server’s mail.
  - You can configure your system’s smarthost settings in the _Basic Editor_ section of WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_).

#### Additional Documentation

* * *

- [Email Deliverability in cPanel](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/)
- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Email DNS Record Manager](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/)
- [Enable DKIM/SPF Globally](https://docs.cpanel.net/whm/dns-functions/enable-dkim-spf-globally/)
- [Filter Incoming Emails by Country](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×