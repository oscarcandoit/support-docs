---
url: "https://docs.cpanel.net/whm/email/greylisting/102/"
title: "Greylisting | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/email/greylisting/102/#main-content)

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
4. Greylisting


[email](https://docs.cpanel.net/tags/email/) [whmui](https://docs.cpanel.net/tags/whmui/) [greylisting](https://docs.cpanel.net/tags/greylisting/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/email/greylisting/102/#overview)

* * *

[Enable Greylisting](https://docs.cpanel.net/whm/email/greylisting/102/#enable-greylisting)

* * *

[Configuration Settings](https://docs.cpanel.net/whm/email/greylisting/102/#configuration-settings)

* * *

[Trusted Hosts](https://docs.cpanel.net/whm/email/greylisting/102/#trusted-hosts)

* * *

[Add an IP address to the Trusted Hosts list](https://docs.cpanel.net/whm/email/greylisting/102/#add-an-ip-address-to-the-trusted-hosts-list)

* * *

[Delete an IP address from the Trusted Hosts list](https://docs.cpanel.net/whm/email/greylisting/102/#delete-an-ip-address-from-the-trusted-hosts-list)

* * *

[Edit comments for an IP address on the Trusted Hosts list](https://docs.cpanel.net/whm/email/greylisting/102/#edit-comments-for-an-ip-address-on-the-trusted-hosts-list)

* * *

[Add neighboring IP addresses to the Trusted Hosts list](https://docs.cpanel.net/whm/email/greylisting/102/#add-neighboring-ip-addresses-to-the-trusted-hosts-list)

* * *

[Common Mail Providers](https://docs.cpanel.net/whm/email/greylisting/102/#common-mail-providers)

* * *

[Trust incoming mail from common mail providers](https://docs.cpanel.net/whm/email/greylisting/102/#trust-incoming-mail-from-common-mail-providers)

* * *

[Reports](https://docs.cpanel.net/whm/email/greylisting/102/#reports)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/email/greylisting/102/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/email/greylisting/102/#overview)

* * *

[Enable Greylisting](https://docs.cpanel.net/whm/email/greylisting/102/#enable-greylisting)

* * *

[Configuration Settings](https://docs.cpanel.net/whm/email/greylisting/102/#configuration-settings)

* * *

[Trusted Hosts](https://docs.cpanel.net/whm/email/greylisting/102/#trusted-hosts)

* * *

[Add an IP address to the Trusted Hosts list](https://docs.cpanel.net/whm/email/greylisting/102/#add-an-ip-address-to-the-trusted-hosts-list)

* * *

[Delete an IP address from the Trusted Hosts list](https://docs.cpanel.net/whm/email/greylisting/102/#delete-an-ip-address-from-the-trusted-hosts-list)

* * *

[Edit comments for an IP address on the Trusted Hosts list](https://docs.cpanel.net/whm/email/greylisting/102/#edit-comments-for-an-ip-address-on-the-trusted-hosts-list)

* * *

[Add neighboring IP addresses to the Trusted Hosts list](https://docs.cpanel.net/whm/email/greylisting/102/#add-neighboring-ip-addresses-to-the-trusted-hosts-list)

* * *

[Common Mail Providers](https://docs.cpanel.net/whm/email/greylisting/102/#common-mail-providers)

* * *

[Trust incoming mail from common mail providers](https://docs.cpanel.net/whm/email/greylisting/102/#trust-incoming-mail-from-common-mail-providers)

* * *

[Reports](https://docs.cpanel.net/whm/email/greylisting/102/#reports)

* * *

## Greylisting

![](https://docs.cpanel.net/img/whm-icons/greylisting.svg)

_Valid for versions 102 through 110_

#### Version:

#### [102](https://docs.cpanel.net/whm/email/greylisting/102/)

#### [112](https://docs.cpanel.net/whm/email/greylisting/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to configure Greylisting, a service that protects your server against unwanted email or spam. When enabled, the mail server will temporarily reject any email from a sender that the server does not recognize. If the email is legitimate, the originating server tries to send it again after a delay. After sufficient time passes, the server accepts the email.

Greylisting identifies incoming email by triplets. A triplet is a collection of three pieces of data: the IP address, the sender’s address, and the recipient’s address. By deferring unknown triplets, Greylisting filters spam and allows legitimate email a second chance to pass through.

Before you can access the _Greylisting Configuration Settings_, _Trusted Hosts_, and _Reports_ sections of the interface, you **must** click _on/off_ to enable the _Greylisting_ feature.

## Enable Greylisting

If Greylisting is disabled on the server, this interface **only** displays an _On/Off_ toggle. Click the toggle to change it to _On_ and enable Greylisting.

## Configuration Settings

The _Configuration Settings_ tab allows you to specify the Greylisting parameters.

To use Greylisting, perform the following steps:

1. Click the _Configuration Settings_ tab.

2. Enter the desired values for each setting, or keep the default values.

3. Click _Save_.


The following table contains descriptions and values for the Configuration Settings section:

| Configuration setting | Default value | Maximum value | Description |
| --- | --- | --- | --- |
| _Initial Deferral Period (in minutes)_ | `5` | `240` | The number of minutes during which Greylisting defers email from an unknown triplet. This time begins when the server receives the first email from an unknown IP address. |
| _Resend Acceptance Period (in minutes)_ | `240` | `1440` (one day) | The number of minutes during which Greylisting accepts a resent email from an unknown triplet. This time begins when the server receives the first email from an unknown IP address. |
| _Record Expiration Time (in minutes)_ | `4320` | `43200` (30 days) | The number of minutes before Greylisting deletes the triplet record and treats a resent email as though it comes from a new, unknown triplet. This time begins when the server receives the first email from an unknown IP address. |
| _Bypass Greylisting for Hosts with Valid SPF Records_ | _Yes_ | N/A | Whether the system automatically accepts email from hosts with a valid sender policy framework (SPF). SPF is an email validation system. It allows mail exchangers to verify whether a received mail came from a host authorized by that domain’s administrators. |

Note:

On servers that run the AlmaLinux OS 8, Rocky Linux™ 8, or CentOS 7 operating systems, you may see a `named` warning about the absence of SPF resource records on DNS.

- This warning is **not** relevant on AlmaLinux OS 8, Rocky Linux 8, or CentOS 7 servers because [RFC 7208 deprecated SPF records](https://tools.ietf.org/html/rfc7208). CentOS 7 servers use TXT records instead of SPF records.
- Red Hat 7.1 and CentOS 7.1 both contain `bind-9.9.4-23.el7`, which is an updated version of BIND that complies with RFC 7208. To resolve this issue, update your operating system to a version that contains the updated version of BIND. For more information, read the [Red Hat Bugzilla case about SPF record errors](https://bugzilla.redhat.com/show_bug.cgi?id=1215164).

The following table illustrates the timeline of incoming email and Greylisting’s response with the default settings:

| Attempts | First resend attempt | Greylisting’s response |
| --- | --- | --- |
| One | N/A | - Defer email back to sender.<br>- Add triplet to the Greylisting database. |
| Multiple | Within 10 minutes of initial email. | Continue to defer email back to sender until the Initial Deferral Time expires. |
| Multiple | 10+ minutes after initial email. | - Deliver email to recipient.<br>- Continue to deliver email from this triplet until the Record Expiration Time expires. |
| Multiple | 240+ minutes after initial email. | Treat email as if a new, unknown triplet sent it. |

## Trusted Hosts

The _Trusted Hosts_ tab specifies IP addresses from which Greylisting will **not** defer email.

### Add an IP address to the Trusted Hosts list

To add one or more IP addresses to the Trusted Hosts list, perform the following steps:

1. Select the _Trusted Hosts_ tab.

2. Enter one or more IP addresses in the _New Trusted Hosts_ text box.






Note:





- You **must** enter each IP address or IP address range on a separate line.

- You can enter IP addresses individually (IPv4 or IPv6), as a range, or in [CIDR format](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).


3. Enter a comment in the _Comment_ text box. This comment applies to all of the IP addresses that you add in this batch.

4. Click _Add_ below the entry.


### Delete an IP address from the Trusted Hosts list

To delete a single IP address from the _Trusted Hosts_ list, click the _Delete_ icon to the right of the IP address.

To delete multiple IP addresses from the _Trusted Hosts_ list, perform the following steps:

1. Select the _Trusted Hosts_ tab.

2. Select the checkboxes to the left of each IP address that you wish to remove, or select the checkbox to the left of the _Host IP Address_ heading to select them all.

3. Click the gear icon on the top right of the list, and then select _Delete Selected_.


Note:

Select _Delete All_ to remove every IP address from the _Trusted Hosts_ list.


### Edit comments for an IP address on the Trusted Hosts list

To edit or add a comment for an IP address on the Trusted Hosts list, perform the following steps:

1. Select the _Trusted Hosts_ tab.

2. Click the _Edit_ icon to the right of the IP address.

3. Enter a new comment in the _Comment_ text box.

4. Click _Update_ to save your change, or _Cancel_ to reject it.


### Add neighboring IP addresses to the Trusted Hosts list

Neighboring IP addresses, or netblocks, refer to the range of [ARIN](https://www.arin.net/)-assigned IP addresses that surround your server’s IP address. Greylisting detects whether your server’s netblock exists on the _Trusted Hosts_ list. Greylisting displays a notification that allows you to add all of your netblock ranges to the _Trusted Hosts_ list at the same time.

To add your neighboring IP addresses to the _Trusted Hosts_ list, click _Add to Trusted Hosts_ in the notification.

To add or delete your neighboring IP addresses to the _Trusted Hosts_ list, perform the following steps:

1. Select the _Trusted Hosts_ tab.

2. Click the gear icon on the top right of the list.

3. Select _Add Neighboring IP Addresses_ or _Remove Neighboring IP Addresses_.


Note:

Netblocks that you add through this interface automatically receive the comment: _The server’s neighboring IP addresses_.


## Common Mail Providers

The _Common Mail Providers_ tab specifies common mail providers from which Greylisting will **not** defer mail.

## Trust incoming mail from common mail providers

The majority of legitimate mail comes from well-known mail service providers. To ensure that Greylisting does not defer or delay this mail, you can choose to trust these mail providers with a few clicks rather than entering their IP addresses into the _Trusted Hosts_ list.

Additionally, some mail services, such as Google Apps™, allow customers who own their own domains to relay email through their mail servers. If you select to trust the mail providers, Greylisting will not defer this mail, even if those customers’ domains did not properly configure the SPF records for their mail service.

To trust new mail providers added to this list, select _Automatically trust newly added mail providers_.

To designate a mail provider as trusted, perform the following steps:

1. Select the _Common Mail Providers_ tab.

2. Select the _Trust_ checkbox for each mail provider you want to trust.

3. Select the _Auto Update_ checkbox to automatically trust any new IP addresses assigned to that mail provider.

4. Click _Save_ to implement your changes.


Click the gear icon on the top right of the list to select or deselect _Trust and Auto Update_ for all of the mail providers.

cPanel maintains the list of common mail providers based on current mail server statistics. To see the IP addresses associated with the common mail providers, read our [_Common Mail Service IP Addresses_](https://docs.cpanel.net/knowledge-base/email/common-mail-service-ip-addresses/) list.

## Reports

The _Reports_ tab displays information about triplets that Greylisting deferred.

The report displays the data in a user-friendly format, rounded to the nearest block of time. To see the exact date and time for any of the data, hover your pointer over each entry in the report.

Note:

Greylisting stores deferred triplet information in the Greylisting database.

- You can monitor this report to find IP addresses to add to the _Trusted Hosts_ list.

- Greylisting purges records from this report every 60 minutes.

- The Greylisting database resides in the `/var/cpanel/greylist/greylist.sqlite` file.


The _Reports_ tab lists the following information on deferred triplets:

- _From Address_ — The sender’s email address.

- _To Address_ — The recipient’s email address.

- _Deferred_ — The number of times that Greylisting deferred the email.

- _Accepted_ — The number of times that Greylisting accepted the email.

- _Create Time_ — The date and time when Greylisting first deferred the email.

- _Block Expire Time_ — The date and time when Greylisting will stop deferring the email.

- _Must Retry Time_ — The date and time until which Greylisting will accept a resent email.

- _Record Expire Time_ — The date and time until Greylisting will remove the record from the accepted list.


#### Additional Documentation

* * *

- [Common Mail Service IP Addresses](https://docs.cpanel.net/knowledge-base/email/common-mail-service-ip-addresses/)
- [Configure Greylisting](https://docs.cpanel.net/cpanel/email/configure-greylisting/)
- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Filter Incoming Emails by Country](https://docs.cpanel.net/whm/email/filter-incoming-emails-by-country/)
- [Greylisting](https://docs.cpanel.net/whm/email/greylisting/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×