---
url: "https://docs.cpanel.net/cpanel/domains/zone-editor/96/"
title: "Zone Editor | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#main-content)

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
3. [Domains](https://docs.cpanel.net/cpanel/domains/)
4. Zone Editor


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#overview)

* * *

[Domains](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#domains)

* * *

[Manage Zone](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#manage-zone)

* * *

[Add a DNS zone record](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#add-a-dns-zone-record)

* * *

[Edit a DNS zone record](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#edit-a-dns-zone-record)

* * *

[Delete a DNS zone record](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#delete-a-dns-zone-record)

* * *

[Reset zone files](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#reset-zone-files)

* * *

[DNSSEC](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#dnssec)

* * *

[DNSSEC Keys table](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#dnssec-keys-table)

* * *

[Create Key](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#create-key)

* * *

[Import a DNSSEC key](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#import-a-dnssec-key)

* * *

[Export a DNSSEC key](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#export-a-dnssec-key)

* * *

[Public DNSKEY](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#public-dnskey)

* * *

[DS Records](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#ds-records)

* * *

[Delete a DNSSEC key](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#delete-a-dnssec-key)

* * *

[Domain registrar DS records](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#domain-registrar-ds-records)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#overview)

* * *

[Domains](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#domains)

* * *

[Manage Zone](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#manage-zone)

* * *

[Add a DNS zone record](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#add-a-dns-zone-record)

* * *

[Edit a DNS zone record](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#edit-a-dns-zone-record)

* * *

[Delete a DNS zone record](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#delete-a-dns-zone-record)

* * *

[Reset zone files](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#reset-zone-files)

* * *

[DNSSEC](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#dnssec)

* * *

[DNSSEC Keys table](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#dnssec-keys-table)

* * *

[Create Key](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#create-key)

* * *

[Import a DNSSEC key](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#import-a-dnssec-key)

* * *

[Export a DNSSEC key](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#export-a-dnssec-key)

* * *

[Public DNSKEY](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#public-dnskey)

* * *

[DS Records](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#ds-records)

* * *

[Delete a DNSSEC key](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#delete-a-dnssec-key)

* * *

[Domain registrar DS records](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#domain-registrar-ds-records)

* * *

## Zone Editor

![](https://docs.cpanel.net/img/cpanel-icons/zone_editor.svg)

_Valid for versions 96 through 120_

#### Version:

#### [96](https://docs.cpanel.net/cpanel/domains/zone-editor/96/)

#### [122](https://docs.cpanel.net/cpanel/domains/zone-editor/122/)

#### [130](https://docs.cpanel.net/cpanel/domains/zone-editor/)

Last modified: _2025 February 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _Zone Editor_ feature allows you to create, edit, and delete Domain Name System (DNS) zone records. DNS converts human-readable domain names (for example, `example.com`) to computer-readable IP addresses (for example, `192.0.0.1`). DNS relies on zone records that exist on your server to map domain names to IP addresses.

## Domains

By default, the _Zone Editor_ interface displays a list of your domains and their DNS zone records. To filter the list, enter a name in the text box or select an available record type filter.

For each listed domain you can perform the following actions:

| Action | Description |
| --- | --- |
| _A Record_ | Create a new [A record](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#a). When you select this record type, a new window will appear. Enter a valid DNS zone name in the _Name_ text box and a valid IPv4 address in the _Address_ text box. Click _Add An A Record_ to save your changes. |
| _CNAME Record_ | Create a new [CNAME](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#cname) record. When you select this record type, a new window will appear. Enter a valid DNS zone name in the _Name_ text box and a FQDN in the _CNAME_ text box. Click _Add A CNAME Record_ to save your changes. |
| _MX Record_ | Create a new [MX record](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#mx). When you select this record type, a new window will appear. Enter the record’s priority value in the _Priority_ text box and a FQDN in the _Destination_ text box. Click _Add An MX Record_ to save your changes. |
| _DNSSEC_ | Manage the domain’s [Domain Name System Security Extensions (DNSSEC)](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#dnssec) records. When you select this record type, the system directs you to the [_DNSSEC_](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#dnssec) interface. |
| _Manage_ | Add or edit additional domain records. When you click _Manage_, the system directs you to the [_Manage Zone_](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#manage-zone) interface. |

To refresh the list of domains, click the gear icon and select _Refresh List_.

## Manage Zone

The _Manage Zone_ interface displays the DNS zone records for the selected domain. To filter the list, enter a name in the text box or select an available record type filter.

The record table contains the following information for each record:

| Item | Description |
| --- | --- |
| _Name_ | The record’s name. |
| _TTL_ | The record’s Time to Live (TTL). |
| _Type_ | The [record’s type](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#dns-zone-record-types). |
| _Record_ | The record’s information. |
| _Actions_ | The option to [edit](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#edit-a-dns-zone-record) or delete the record. |

You can also use this interface to:

- [Add](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#add-a-dns-zone-record) or [edit](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#edit-a-dns-zone-record) one or more DNS zone records.
- [Delete](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#delete-a-dns-zone-record) a DNS zone record.
- [Reset the zone files](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#reset-zone-files).

Important:

To access all available zone record types and records that the system automatically generated, your hosting provider must enable the following features in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM » Home » Packages » Feature Manager_):

- _Zone Editor (A, CNAME)_
- _Zone Editor (AAAA, CAA, SRV, TXT)_

### Add a DNS zone record

To add a record, perform the following steps:

1. Click _Manage_ for the domain that you want to modify. A new interface will appear.
2. Click _Add Record_. You can also click the arrow icon (![The Add Record arrow icon](https://docs.cpanel.net/img/dns-zone-manager-arrowicon.png)) next to _Add Record_ and select the [desired record type](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#dns-zone-record-types) from the menu.

   - To add records for a subdomain, use prefix notation. For example, to add a CNAME record for `example.com/prefix`, enter `prefix.example.com.` into the `Name` text box.
   - To add multiple records, click _Add Record_ multiple times or select the desired record types from the list. The system adds the new records to the top of the table.
3. Enter the record’s information.
4. Click _Save Record_ or _Save All Records_, or click _Cancel_.

### Edit a DNS zone record

To edit a record, perform the following steps:

1. Click _Manage_ for the domain that you want to modify. A new interface will appear.
2. Click _Edit_ next to the record or records that you want to edit.
3. Update the information in the text boxes.
   - If you change an existing record’s [_Type_ value](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#dns-zone-record-types), the system preserves the current record’s data until you save your changes.
4. Click _Save Record_ or _Save All Records_ to save your changes, or click _Cancel_.

#### DNS zone record types

When you add or edit a DNS zone record, you can select from the following record types:

Note:

For more information about DNS record types and examples of those records, read Wikipedia’s [DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types) article.

##### A

IPv4 Address Record — This record maps hostnames to IPv4 addresses. These records allow DNS servers to identify and locate your website and its various services on the internet. Without appropriate A records, your visitors cannot access your website, FTP site, or email accounts. You can set the following values:

| Value | Description |
| --- | --- |
| _Name_ | A new or existing DNS zone name. When you enter a zone name, the system automatically appends the domain name to the zone record. For example, if you create the `user` zone, the system will add the `example.com.` domain information. |
| _Address_ | Enter the domain’s IP address. |

##### AAAA

IPv6 Address Record — This record is the same as an A record, but maps hostnames to IPv6 addresses.

##### CAA

Certificate Authority Authorization Record — This record controls which certificate authorities (CA) can issue SSL certificates for a domain.

- If no CAA records exist for a domain, **all** CAs can issue certificates for that domain. If conflicting CAA records already exist, remove the existing CAA records or add one for the desired CA.
- MyDNS does **not** support this record type.
- The system stores these records in the [RFC 3597](https://tools.ietf.org/html/rfc3597) format.

You can set the following values:

| Value | Description |
| --- | --- |
| _Issuer Critical Flag_ | Whether the CA will issue an SSL certificate if the CAA Resource Record contains unknown property tags. For more information about CAA record flags, read the [RFC 6844](https://tools.ietf.org/html/rfc6844) documentation. <br>- _0_ — Non-critical. The CA will issue an SSL certificate if the CAA Resource Record contains unknown property tags.<br>- _1_ — Critical. The CA will **not** issue an SSL certificate if the CAA Resource Record contains unknown property tags. |
| _Tag_ | The CAA record’s property type: <br>- _issue_ — Authorize a CA to issue a certificate for the domain.<br>- _issuewild_ — Authorize a CA to issue a wildcard certificate for the domain.<br>- _iodef_ — Specify a URL to which a CA may report policy violations. |
| _Value_ | The CA’s domain, or the CA’s URL if you select the _iodef_ setting in the _Tag_ section. |

##### CNAME

Canonical Name Record — This record creates an alias for another domain name, which DNS resolves. This is useful, for example, if you point multiple CNAME records to a single [A record](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#a) in order to simplify DNS maintenance. You can set the following values:

| Value | Description |
| --- | --- |
| _Name_ | A new or existing DNS zone name. When you enter a zone name, the system automatically appends the domain name to the zone record. For example, if you create the `user` zone, the system will add the `example.com.` domain information. |
| _Record_ | Enter a fully-qualified domain name (FQDN). For example, the `example2.com` domain. You cannot point a CNAME record to an IP address. |

##### DMARC

Domain-based Message Authentication, Reporting, and Conformance — This record indicates the action for a mail server to take when it receives an email from this domain, but that message fails Sender Policy Framework (SPF) and DomainKeys Identified Mail (DKIM) checks.

When you select this option, the system creates a [TXT record](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#txt) with a default DMARC record. The system also displays a form that allows you to define the domain’s DMARC _Policy_ ( _None_, _Quarantine_, or _Reject_), as well as the following optional parameters:

| Paramater | Description |
| --- | --- |
| _Subdomain Policy_ | The action the mail server will take when it receives an email from the domain’s subdomain. The server only takes this action if the email fails its SPF and DKIM checks.<br>- _None_ — Do not take any action.<br>- _Quarantine_ — Send spam email to a different folder on the account.<br>- _Reject_ — Reject spam email. |
| _DKIM Mode_ | The DKIM level that the server enforces for the domain. An email must have a valid DKIM signature. The server will check a DKIM signature against the email’s `From:` domain entry. You can set the following identifier alignment settings: <br>- _Relaxed_ — Only the organizational domains must match. For example, an email from the `domain.example.com` subdomain of `example.com` would pass the DKIM check.<br>- _Strict_ — The domains **must** match exactly. For example, the server will accept email from the `example.com` domain, but it would reject email from the `domain.example.com` subdomain. |
| _SPF Mode_ | The SPF level that the server will enforce for the domain. The server sending email must pass SPF authorization. The server checks the server sending an email with the SMTP `MAIL FROM` command. The server then checks the `MAIL FROM` domain entry against the email’s `From:` domain entry. You can set the following identifier alignment settings: <br>- _Relaxed_ — Only the organizational domains must match. For example, an email from the `domain.example.com` subdomain of `example.com` would pass the SPF check.<br>- _Strict_ — The domains **must** match exactly. For example, the server will only accept email if the domain is `example.com`. It would reject an email from the `domain.example.com` domain. |
| _Percentage_ | The percentage of emails that you want the server to filter. |
| _Generate Failure Reports When_ | The error reporting policy between the sender and receiver’s Mail Transfer Agents. |
| _Report Format_ | The format that the server uses to report an email’s possible spam status. |
| _Report Interval_ | The amount of time, in seconds, that elapse between each aggregate email report. This parameter’s value defaults to `86400`. This value does **not** include email failure messages. |
| _Send Aggregate Mail Reports To_ | A comma-separated list of Uniform Resource Identifiers (URIs) to which to send the aggregate email reports. If your URI includes a comma, you **must** URI-encode the comma. To add a size limit for the report, include an exclamation point, a number, and a file size unit to the end of the URI. For example: `mailto:reports@example.com!50m`. You can specify the following file size units: <br>- `k` — Kilobytes.<br>- `m` — Megabytes.<br>- `g` — Gigabytes.<br>- `t` — Terabytes. |
| _Send Failure Reports To_ | A comma-separated list of URIs to which to send failure email reports. |

##### MX

Mail Exchanger — This record identifies the servers that handle a domain’s email. Changes that you make to this record control where the server delivers a domain’s email. You can set the following values:

| Value | Description |
| --- | --- |
| _Priority_ | Identifies the servers that handle a domain’s email. This value for each MX record determines the order in which other mail servers will use the domain’s mail server. A lower value indicates a higher priority level. A value of `0` indicates the highest priority level. |
| _Destination_ | The mail server. This must be a fully-qualified domain name (FQDN). |

##### SRV

Service Record — This record provides data about available services on specific ports on your server. You can set the following values:

| Value | Description |
| --- | --- |
| _Priority_ | The service record’s priority value. A lower value indicates a higher priority level. A value of `0` indicates the highest priority level. |
| _Weight_ | This value ranks entries that share the same _Priority_ value. For example, a record with a `0` priority level and an `8` weight value will rank lower than a record with a `0` priority level and `4` weight value. |
| _Port_ | The service’s target port number. |
| _Target_ | The service’s target hostname. |

##### TXT

Text Record — This record contains text data for various services to read. For example, TXT records can specify data for SPF, DKIM, or DMARC email authentication. You can use WHM’s [_Email Deliverability_](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel) interface ( _cPanel » Home » Email » Email Deliverability_) to manage your server’s SPF and DKIM records.

Important:

The _Record_ text box will accept invalid data. Make **certain** you enter the correct record information.

### Delete a DNS zone record

To delete a record, perform the following steps:

1. Click _Manage_ next to the domain you want to modify. A new interface will appear.
2. Click _Delete_ next to the record that you want to remove.
3. Click _Continue_ in the confirmation dialog box to delete the record, or click _Cancel_.

### Reset zone files

Important:

- This function erases any modifications that you made to your zone records. The system attempts to save the domain’s TXT entries. We recommend that you record any changes that you want to save before you use this feature.

- To reset your DNS zone files, your systems administrator must enable the following features in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM » Home » Packages » Feature Manager_):
  - _Zone Editor (A, CNAME)_
  - _Zone Editor (AAAA, CAA, SRV, TXT)_

To reset your DNS zone files to the defaults that your hosting provider specifies, perform the following steps:

1. Click _Manage_ next to the domain that you want to reset. A new interface will appear.
2. Click _Actions_ and select _Reset DNS Zone_.
3. Click _Continue_ to reset your zone, or click _Cancel_.

## DNSSEC

The _DNSSEC_ interface lets you manage your domain’s DNSSEC keys. [DNSSEC](https://docs.cpanel.net/knowledge-base/dns/dnssec/) can help to protect you from various forms of attack, such as spoofing or a [man-in-the-middle](https://docs.cpanel.net/knowledge-base/general-server-administration/man-in-the-middle-attacks/) attack. A DNS resolver will compare the DNS server’s DNSKEY record to the Delegation Signer (DS) record at your domain’s registrar. If the records match, then the DNS resolver knows that the record is valid.

DNSSEC uses digital signatures to strengthen DNS authentication. These digital signatures use public key cryptography to sign the DNS data. However, these digital signatures do **not** sign the DNS queries and responses.

#### Transferred DNS records

If you transfer the account to another server, you **must** remove the DS records from the registrar before you transfer the domain. If you do not remove the old DS records from the registrar, the domains may produce DNS resolution issues due to invalid DNSSEC responses.

To transfer an account with DNSSEC-enabled domains, perform the following steps for each domain:

1. Remove the DS records from the registrar.
2. Wait for the changes to propagate. This may take up to 72 hours.
3. Perform the transfer.
4. Manually update the registrar with the new DS records.

### DNSSEC Keys table

Important:

If you deactivate or delete a DNSSEC key, you **must** remove the DS record at [your domain registrar](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#domain-registrar-ds-records).

The _DNSSEC_ interface displays a table that lists the following information:

| Item | Description |
| --- | --- |
| ![DNSSEC key expand arrow](https://docs.cpanel.net/img/expandarrow.png) | Click the arrow icon to display the following details about the DNSSEC key: <br>- _Algorithm_ — The key’s [algorithm](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions#Algorithms).<br>- _Status_ — Whether the key is active or inactive.<br>- _Activate_ or _Deactivate_ — Activate or deactivate the key. Deactivating a DNSSEC key will **not** delete it.<br>- _Delete_ — Delete the key.<br>- _Public DNSKEY_ — Display the public DNSKEY record. The [_Public DNSKEY_](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#public-dnskey) interface will appear. |
| _Key Tag_ | An integer value that identifies the domain’s DNSSEC record. |
| _Key Type_ | Whether the key is a Zone Signing Key (ZSK), Combined Signing Key (CSK), or Key Signing Key (KSK). |
| _Algorithm_ | The DNSSEC algorithm type that constructs the digest. |
| _Created_ | The key’s creation date. <br>Note:<br>The interface will display a recommendation for when you should rotate a DNSSEC key. For information, read our [How to Rotate a DNSSEC Key](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/) documentation. |

You can also perform the following actions for each DNSSEC key:

| Action | Description |
| --- | --- |
| _View DS Records_ | Display the domain’s DS records. The [_DS Records_](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#ds-records) interface will appear. |
| _Export_ | Export the domain’s DNSSEC key. The [_Export_](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#export-a-dnssec-key) interface will appear. |

### Create Key

Important:

When you create a domain’s DNSSEC key you **must** also configure a DS record with [your domain registrar](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#domain-registrar-ds-records).

The _Create Key_ function lets you create a new DNSSEC key. You can select whether to create a system-generated key or create a customized DNSSEC key:

#### Quick DNSSEC key creation

To quickly create a DNSSEC key, perform the following steps:

1. Click _Create Key_. A confirmation interface will appear.
2. Click _Create_. The _DS Records_ interface will appear with the new DNSSEC key’s details.

#### Custom DNSSEC key creation

If you want to create a customized key with a stronger algorithm, perform the following steps:

1. Click _Create_. A confirmation window will appear.
2. Click _Customize_. The _Generate_ interface will appear.
3. Select the desired key setup for the DNSSEC key:
   - _Classic_ — Creates a ZSK and a KSK.
   - _Simple_ — Creates a CSK, which the system will use as both the ZSK and KSK.
4. Select the desired algorithm from the _Algorithm_ menu.






Note:





The interface disables incompatible algorithms.

5. Select whether to activate the newly-generated key.
6. Click _Create Key_. The _DS Records_ interface will appear with the new DNSSEC key’s details.

To validate the DNSSEC configuration for a domain, use Verisign’s [DNSSEC Anaylzer](https://dnssec-analyzer.verisignlabs.com/) website.

### Import a DNSSEC key

The _Import_ interface lets you import an existing DNSSEC key. To import a DNSSEC key for a domain, perform the following steps:

1. Click _Import Key_. The _Import_ interface will appear.
2. Select the key type that you want to import:
   - _ZSK_ — Zone Signing Key.
   - _KSK_ — Key Signing Key.
3. Enter the key information in the _Key_ text box.
4. Click _Import_.

### Export a DNSSEC key

The _Export_ interface provides the information you need to export a DNSSEC key. This interface displays the following details about a domain’s DNSSEC key:

| Item | Description |
| --- | --- |
| _Domain_ | The domain in the DNS record. |
| _Key Tag_ | An integer value that identifies the domain’s DNSSEC record. |
| _Key Type_ | Whether the key is ZSK, CSK, or KSK. |
| _Key_ | The DNSSEC key. Click _Copy_ to copy the key to your computer’s clipboard. |

### Public DNSKEY

The _Public DNSSEKY_ interface lets you view a public DNSKEY record’s details. This interface displays the following information:

| Item | Description |
| --- | --- |
| _Domain_ | The domain in the DNS record. |
| _Public DNSKEY_ | The public DNSKEY record. |

### DS Records

When you click _View DS Records_ for a key, the _DS Records_ interface will appear. This interface displays the following DNSSEC key information:

| Item | Description |
| --- | --- |
| _Domain_ | The domain in the DNS record. |
| _Key Tag_ | An integer value that identifies the domain’s DNSSEC record. |
| _Algorithm_ | The algorithm type that constructs the digest. |
| _Created_ | The key’s creation date. |
| _Digests_ | A list of available digests. The interface displays each digest’s algorithm type ( _Digest Type_) and algorithm information ( _Digest_). |

You can use this information to add a DS record to [your domain’s registrar](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#domain-registrar-ds-records). To do so, perform the following steps:

1. Determine the _Digest Type_ that your registrar uses.
2. Click _Copy_ for the appropriate _Digest_ record.
3. Go to your registrar’s website and add the information that they request for your domain.

### Delete a DNSSEC key

Important:

Before you delete the domain’s DNSSEC key in cPanel & WHM, you **must** remove or disable the DS with [your domain registrar](https://docs.cpanel.net/cpanel/domains/zone-editor/96/#domain-registrar-ds-records). After editing the DS record, wait at least 24 hours for the changes to propagate. Once the changes propagate, you may delete the DNSSEC key in cPanel & WHM.

To delete a DNSSEC key, perform the following steps:

1. Click _Delete_ next to the appropriate record.
2. Click _Continue_ to confirm that you want to delete the security record.

### Domain registrar DS records

Any time you create, modify, or remove a domain’s DNSSEC key, you **must** update your Delegation Signer (DS) record with your domain registrar. The following are some of the most popular domain registrars. Visit their website to read their DNSSEC management documentation:

- [GoDaddy](https://www.godaddy.com/help/delete-a-ds-record-23867)
- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9722/2232/managing-dnssec-for-domains-pointed-to-custom-dns)
- [OpenSRS](https://help.opensrs.com/hc/en-us/articles/1260801515030-Configuring-DNSSEC#h_01EWGJBKXRDWNWRCT0XQ5T9GHX)

#### Additional Documentation

* * *

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
- [Dynamic DNS](https://docs.cpanel.net/cpanel/domains/dynamic-dns/)
- [Redirects](https://docs.cpanel.net/cpanel/domains/redirects/)
- [Site Publisher](https://docs.cpanel.net/cpanel/domains/site-publisher/)
- [Zone Editor](https://docs.cpanel.net/cpanel/domains/zone-editor/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×