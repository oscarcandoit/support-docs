---
url: "https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/"
title: "Email Deliverability in cPanel | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#main-content)

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
4. Email Deliverability in cPanel


[dkim](https://docs.cpanel.net/tags/dkim/) [spf](https://docs.cpanel.net/tags/spf/) [email](https://docs.cpanel.net/tags/email/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#overview)

* * *

[Email Deliverability table](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#email-deliverability-table)

* * *

[Manage the Domain](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#manage-the-domain)

* * *

[DKIM](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#dkim)

* * *

[SPF](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#spf)

* * *

[DMARC](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#dmarc)

* * *

[Reverse DNS (PTR)](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#reverse-dns-ptr)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#overview)

* * *

[Email Deliverability table](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#email-deliverability-table)

* * *

[Manage the Domain](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#manage-the-domain)

* * *

[DKIM](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#dkim)

* * *

[SPF](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#spf)

* * *

[DMARC](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#dmarc)

* * *

[Reverse DNS (PTR)](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#reverse-dns-ptr)

* * *

## Email Deliverability in cPanel

![](https://docs.cpanel.net/img/cpanel-icons/email_deliverability.svg)

_Valid for versions 130 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/82/)

#### [124](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/124/)

#### [130](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/)

Last modified: _2025 August 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Use this interface to identify problems with your mail-related DNS records for one or more of your domains. The system uses these records to verify that other servers can trust it as a sender.

Important:

- For the _Email Deliverability_ interface to appear, your hosting provider **must** enable _Email Deliverability_ in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM » Home » Packages » Feature Manager » Feature Lists_).
- Once the hosting provider enables the _Email Deliverability_ interface, both DKIM (DomainKeys Identified Mail) and SPF (Sender Policy Framework) authentication **require** that you use a DNS server for the domain name. For more information about your DNS servers, contact your hosting provider.
- If you use a third-party email service, such as [Gmail™](https://support.google.com/a/answer/174124?hl=en) or [Microsoft Outlook 365®](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/use-dkim-to-validate-outbound-email?view=o365-worldwide), refer to their documentation for instructions on configuring DKIM and SPF.
- cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):
  - Editing DNS
  - Email services
  - Search Engine Optimization

## Email Deliverability table

The Email Deliverability table lists your domains, provides the status of the domains’ DNS Records, and allows you to manage those mail-related DNS records:

| Feature | Description |
| --- | --- |
| _Domain_ | Click the _Domain_ option to order your domain alphabetically. |
| ![gear icon](https://docs.cpanel.net/img/emaildeliverabilitygear.png) | Click the gear icon to select the number of entries you want to display per page or refresh the table results. |
| ![Main Domain label](https://docs.cpanel.net/img/emaildeliverabilitymaindomain.png) | The _Main Domain_ label identifies the domain that your hosting provider used to create this account. |
| _Email Deliverability Status_ | This row displays the status of each domain’s mail-related DNS records. |
| _Repair_ | This feature allows the system to repair a domain’s invalid records. A window appears in the interface that allows you to review and confirm the system’s recommendations for any invalid records. You can copy or customize a suggested record before you approve the system’s repairs. The system will recheck any repaired records. This process can take up to five minutes, depending on the server.<br>Note:<br>- This option is unavailable if the system does **not** control the domain’s DNS records.<br>- You **cannot** simultaneously update two or more domains whose records exist on the same zone. However, if two or more domain’s records exist on separate zones, you can simultaneously update them.<br>- Reloading the interface does **not** interrupt the repair process. |
| ![Manage button](https://docs.cpanel.net/img/manage-icon.png) | Click the [_Manage_](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/#manage-the-domain) option to manually resolve issues with your domain’s mail-related DNS records. A new interface will appear. |

## Manage the Domain

To access this interface, click _Manage_ for the domain you wish to configure. The _Manage the Domain_ interface allows you to manually configure a domain’s mail-related DNS records. Use this interface to resolve any outstanding issues with a domain’s records.

The top of this interface displays the following information:

- _Domain_ — The domain name.

- _Mail HELO_ — The domain’s [HELO](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol#SMTP_transport_example) configuration.







Note:





This information appears if the HELO configuration and domain do **not** match. A message about HELO configuration will also appear for the Reverse DNS (PTR) section.


### DKIM

This section allows you to manage a domain’s DKIM record. DKIM verifies the sender and the integrity of a message. In addition, it allows an email system to prove that spammers did not alter an incoming message while in transit. DKIM also verifies that the messages your domains receive come from the specified domain.

Important:

To correctly install a DKIM record, your server **must** be the authoritative nameserver. If it is not, you can locally install this record. You **must** also contact your nameserver provider to update the authoritative nameserver.


If any problems exist with the current record, this section displays the properly-configured DKIM record values in the _Suggested “DKIM” (TXT) Record_ section. It also allows you to perform the following actions:

| Feature | Description |
| --- | --- |
| _Generate Local DKIM Key_ | Generate a DKIM record, if one does not exist. |
| _Copy_ | Copy the _Name_ and _Value_ records that the system provides in the _Suggested “DKIM” (TXT) Record_ section. You can provide these records to the nameserver provider for the listed nameservers to fix it. |
| _View_ | Modify the _Value_ field’s displayed record: <br>- _Full_ — The record displays in its entirety. This option is for providers who automatically split their records.<br>- _Split_ — The record, divided into 255-character parts. This option is for providers who do not automatically split their records. |
| _View the Private Key_ | Retrieve the suggested private key. The system directs you to the _View the Private DKIM Key_ interface.<br>Important:<br>- Exposing your private DKIM key is a **security risk**. If others obtain your private DKIM key, they could sign emails and impersonate you as a sender. Make **certain** that you only provide your private DKIM key to a trusted user.<br>- DKIM may not verify emails that you send from PHP applications, even if you’ve enabled DKIM. This means that your hosting provider installed the [DSO PHP handler](https://docs.cpanel.net/ea4/php/php-handlers) **without** the [MPM ITK](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-mpm-itk/) Apache module. If this occurs, ask your hosting provider to enable the following options in WHM’s [_Exim Configuration Manager_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager) interface ( _WHM » Home » Service Configuration » Exim Configuration Manager_):<br>  <br>  - _Query Apache server status to determine the sender of email sent from processes running as nobody_.<br>  - _Trust X-PHP-Script headers to determine the sender of email sent from processes running as nobody_. |

### SPF

This section allows you to manage a domain’s SPF record. SPF verifies that the messages your domains send originated from a listed server. In addition, it provides a list of servers approved to send mail from your domains.

If any problems exist with the current record, a correct SPF record configuration will appear in the _Suggested “SPF” (TXT) Record_ section. This section also allows you to perform the following actions:

| Feature | Description |
| --- | --- |
| _Copy_ | Copy the _Name_ and _Value_ records that the system provides in the _Suggested “SPF” (TXT) Record_ section. You can provide these records to the nameserver provider for the listed nameservers to fix it. |
| _View_ | Modify the _Value_ field’s displayed record: <br>- _Full_ — The record displays in its entirety. This option is for providers who automatically split their records.<br>- _Split_ — The system divides the record into 255-character parts. This option is for providers who do not automatically split their records. |
| _Customize_ | Modify the suggested SPF record. This directs you to the _Customize an SPF Record_ interface. |

#### Customize an SPF Record

Use this interface to customize the system’s recommended SPF record for a domain. The interface displays the domain’s current SPF name and value in the _Current “SPF” (TXT) Record_ section, if one exists, and the system’s recommendations in the _Suggested “SPF” (TXT) Record_ section.

You can configure the following settings:

| Feature | Description |
| --- | --- |
| _Domain Settings_ | This section allows you to define the hosts or MX servers allowed to send mail from your domain: <br>- _Additional Hosts_ — Additional hosts that the system allows to send mail from your domains. The system automatically includes the primary mail exchanger and other servers for which you created an MX record.<br>  - Click _Add A New “Host (+a)” Item_ to add a new host to the domain’s SPF record.<br>- _Additional MX Servers_ — The MX entries allowed to send mail from your domains.<br>  - Click _Add A New “+mx” Item_ to add a new MX entry to the domain’s SPF record. |
| _IP Address Settings_ | This section allows you to add additional IP Address blocks to the domain’s SPF record. The system automatically includes your server’s main IPv4 or IPv6 addresses in these lists. <br>Note:<br>You can use [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) (for example, `10.0.0.0/8` for IPv4, or `2001:db8:1a34:56cf::/64` for IPv6). |
| _Additional Settings_ | This section allows you to modify additional SPF record settings: <br>- _Include List (INCLUDE)_ — Additional domains to include in your SPF settings. Use this setting, for example, when you send email through another service, such as Mailchimp®.<br>  - Click _Add A New “+include” Item_ to add a new domain approved to send mail from your domain.<br>- _Exclude All Other Hosts ("-all" Entry)_ — Exclude any hosts that the other SPF mechanisms do **not** allow.<br>Note:<br>- If you enable the _Exclude All Other Hosts ("-all" Entry)_ setting, the SPF feature causes hosts that you do **not** define to fail.<br>- By default, the system recommends the `~all` entry. This entry instructs servers to accept mail from unmatched hosts, but warn that unauthorized hosts might have sent the messages. |
| _Preview of the Updated Record_ | This section displays what the updated SPF record will look like, based on its current modifications. Click _Install a Customized SPF Record_ to install the new record. <br>Important:<br>To correctly install an SPF record, your server **must** be the authoritative nameserver. If it is not, you can locally install this record. You **must** also contact your nameserver provider to update the authoritative nameserver. |

### DMARC

This section allows you to set a domain’s [DMARC](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#domain-based-message-authentication-reporting-and-conformance-dmarc) record. A DMARC record sets a policy that tells servers how to handle mail based on the domain’s SPF and DKIM records.

Important:

DMARC **requires** valid SPF and DKIM records. The domain **must** have valid SPF and DKIM records for the DMARC record to be active.

#### Suggested DMARC record

Use the _Suggested DMARC (TXT) Record_ section to copy or install the system’s recommended DMARC record for your domain. To add the DMARC record, perform **one** of the following actions:

- If your server is **not** an [authoritative nameserver](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#authoritative-nameserver) for your domain, contact your hosting provider to add the record on an authoritative nameserver.
- If your server **is** an authoritative nameserver for your domain, click _Install the Suggested Record_ to install the DMARC record on your domain.

### Reverse DNS (PTR)

This section allows you to view and verify a domain’s current pointer record (PTR). A PTR record is a DNS record that resolves an IP address to a domain or host name. The system uses this record to perform a reverse DNS (rDNS) lookup to retrieve the associated domain or host name. A PTR record requires an associated A record.

This interface provides information when a problem exists with this record. It also provides instructions for how to fix your PTR record.

Note:

- You **must** have the authority to update a domain’s PTR record. If you do not, contact the owner of the IP address. For example, the IP address’s data center or your service provider.
- If your server is a [smart host](https://en.wikipedia.org/wiki/Smart_host), it will **not** display this section.

#### Additional Documentation

* * *

- [Address Importer](https://docs.cpanel.net/cpanel/email/address-importer/)
- [Archive](https://docs.cpanel.net/cpanel/email/archive/)
- [Autoresponders](https://docs.cpanel.net/cpanel/email/autoresponders/)
- [Email Deliverability in WHM](https://docs.cpanel.net/whm/email/email-deliverability-in-whm/)
- [Email DNS Record Manager](https://docs.cpanel.net/whm/dns-functions/email-dns-record-manager/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×