---
url: "https://docs.cpanel.net/knowledge-base/dns/dnssec/"
title: "DNSSEC | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dns/dnssec/#main-content)

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
3. [DNS](https://docs.cpanel.net/knowledge-base/dns/)
4. DNSSEC


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [dns](https://docs.cpanel.net/tags/dns/) [dnssec](https://docs.cpanel.net/tags/dnssec/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dns/dnssec/#overview)

* * *

[Enable DNSSEC](https://docs.cpanel.net/knowledge-base/dns/dnssec/#enable-dnssec)

* * *

[Manage DNSSEC keys](https://docs.cpanel.net/knowledge-base/dns/dnssec/#manage-dnssec-keys)

* * *

[DNSSEC key rotation](https://docs.cpanel.net/knowledge-base/dns/dnssec/#dnssec-key-rotation)

* * *

[Disable DNSSEC](https://docs.cpanel.net/knowledge-base/dns/dnssec/#disable-dnssec)

* * *

[DNSSEC in DNS clusters](https://docs.cpanel.net/knowledge-base/dns/dnssec/#dnssec-in-dns-clusters)

* * *

[DNSSEC key backups](https://docs.cpanel.net/knowledge-base/dns/dnssec/#dnssec-key-backups)

* * *

[DNSSEC key restoration](https://docs.cpanel.net/knowledge-base/dns/dnssec/#dnssec-key-restoration)

* * *

[DNSSEC key transfers](https://docs.cpanel.net/knowledge-base/dns/dnssec/#dnssec-key-transfers)

* * *

[API functions](https://docs.cpanel.net/knowledge-base/dns/dnssec/#api-functions)

* * *

[UAPI functions](https://docs.cpanel.net/knowledge-base/dns/dnssec/#uapi-functions)

* * *

[WHM API 1 functions](https://docs.cpanel.net/knowledge-base/dns/dnssec/#whm-api-1-functions)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dns/dnssec/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dns/dnssec/#overview)

* * *

[Enable DNSSEC](https://docs.cpanel.net/knowledge-base/dns/dnssec/#enable-dnssec)

* * *

[Manage DNSSEC keys](https://docs.cpanel.net/knowledge-base/dns/dnssec/#manage-dnssec-keys)

* * *

[DNSSEC key rotation](https://docs.cpanel.net/knowledge-base/dns/dnssec/#dnssec-key-rotation)

* * *

[Disable DNSSEC](https://docs.cpanel.net/knowledge-base/dns/dnssec/#disable-dnssec)

* * *

[DNSSEC in DNS clusters](https://docs.cpanel.net/knowledge-base/dns/dnssec/#dnssec-in-dns-clusters)

* * *

[DNSSEC key backups](https://docs.cpanel.net/knowledge-base/dns/dnssec/#dnssec-key-backups)

* * *

[DNSSEC key restoration](https://docs.cpanel.net/knowledge-base/dns/dnssec/#dnssec-key-restoration)

* * *

[DNSSEC key transfers](https://docs.cpanel.net/knowledge-base/dns/dnssec/#dnssec-key-transfers)

* * *

[API functions](https://docs.cpanel.net/knowledge-base/dns/dnssec/#api-functions)

* * *

[UAPI functions](https://docs.cpanel.net/knowledge-base/dns/dnssec/#uapi-functions)

* * *

[WHM API 1 functions](https://docs.cpanel.net/knowledge-base/dns/dnssec/#whm-api-1-functions)

* * *

## DNSSEC

Last modified: _2024 September 18_

* * *

## Overview

We introduced DNS Security Extensions (DNSSEC) support for PowerDNS [nameservers](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#nameserver). DNSSEC adds a layer of security to your domains’ DNS records.

A DNS resolver will compare the DNS server’s DNSKEY record to the DS record at the registrar. If they match, then the DNS resolver knows that the record is valid.

DNSSEC uses digital signatures and cryptographic keys to validate the DNS responses’ authenticity. These digital signatures protect clients from various forms of attack, such as spoofing or a man-in-the-middle attack.

Important:

- To use DNSSEC on your server, you **must** use PowerDNS as the nameserver. For more information about how to install PowerDNS on your server, read our [Nameserver Selection](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/) documentation.
- In addition to DNSSEC, [Sender Policy Framework (SPF)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#spf), [DomainKeys Identified Mail (DKIM)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#dkim), and [Domain-based Message Authentication, Reporting, and Conformance (DMARC)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#domain-based-message-authentication-reporting-and-conformance-dmarc) can all add additional security to your domains’ DNS records.

For more information about DNSSEC, read Wikipedia’s [Domain Name System Security Extensions](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) article.

## Enable DNSSEC

To enable DNSSEC for cPanel users, select the _Manage DNSSEC_ feature in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_).

To list the domains with DNSSEC on a server, log in to the server as the `root` user and run the following command:

```perl
pdnsutil list-secure-zones
```

For more information, read our [How to List Domains with DNSSEC](https://docs.cpanel.net/knowledge-base/dns/how-to-list-domains-with-dnssec/) documentation.

## Manage DNSSEC keys

cPanel users can create, manage, or delete their domains’ DNSSEC keys in cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_).

To validate the DNSSEC configuration for a domain, use Verisign’s [DNSSEC Analyzer](https://dnssec-analyzer.verisignlabs.com/) website.

### DNSSEC key rotation

Note:

We recommend that you rotate your domain’s DNSSEC keys yearly.

You can rotate your domains’ DNSSEC keys regularly to increase your DNS record’s security.

For more information about how to rotate a DNSSEC key, read our [How to Rotate a DNSSEC Key](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/) documentation.

To determine your domain’s registrar, read our [How to Identify Your Registrar](https://docs.cpanel.net/knowledge-base/dns/how-to-identify-your-registrar/) documentation.

### Disable DNSSEC

To disable DNSSEC, remove the DS record from the registrar. Without a DNS record at the registrar, clients will **not** look up DNSSEC keys on the DNS server.

## DNSSEC in DNS clusters

Warning:

All servers in the DNS cluster **must** run PowerDNS if domains that use DNSSEC exist in that cluster.

cPanel & WHM supports DNSSEC in DNS clusters. PowerDNS servers with domains that have DNSSEC configured can exist in DNS clusters. You can enable DNS clustering in WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster/) interface ( _WHM » Home » Clusters » DNS Cluster_).

If your DNSSEC keys don’t synchronize, the system sends you a notification via the _DNSSEC key sync failure_ notification in WHM’s [_Contact Manager_](https://docs.cpanel.net/whm/server-contacts/contact-manager/) interface ( _WHM » Home » Server Contacts » Contact Manager_). To sync or remove DNSSEC keys, run [the `/usr/local/cpanel/scripts/dnssec-cluster-keys` script](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/) as the `root` user.

For more information about DNSSEC in a DNS cluster, read our [Guide to DNS Cluster Configurations](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/) documentation.

## DNSSEC key backups

The system backs up DNSSEC key information in the `/dnssec_keys` directory. This directory contains a copy of all of the account’s DNSSEC keys using the following naming conventions:

```perl
domainname/keytag_keytype.key
```

Note:

In this example:

- `domainname` represents the domain name.

- `keytag` represents the key’s keytag.

- `keytype` represents the key’s type.


For more information about where cPanel & WHM stores DNSSEC key information in backups, read our [Backup Tarball Contents](https://docs.cpanel.net/knowledge-base/backup/backup-tarball-contents/) documentation.

Note:

- The system may corrupt the DNSSEC database if it encounters an Out Of Memory (OOM) or disk full condition.

- Systems Administrators can restore the database from the system backup files. If they do not back up system files, they will need to perform the following steps:
  - Rebuild the PDNS.db file from scratch with the following commands:



    ```bash
    pdnsutil create-bind-db /var/cpanel/pdns/dnssec.db
    ```

  - Regenerate the DNSSEC keys for each domain that lost keys.

  - Tell their users to register the new keys with their domain registrar.

### DNSSEC key restoration

When you restore a backup that contains DNSSEC keys, the system will restore the DNSSEC keys to the appropriate domain.

## DNSSEC key transfers

The system transfers any DNSSEC key information from the backup file to the new server. If the destination server supports DNSSEC, the server will import and activate any DNSSEC keys in the backup. If the destination server does not support DNSSEC, that system will **not** restore any DNSSEC keys from the backup file.

To transfer an account with DNSSEC-enabled domains, use WHM’s [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/) interface ( _WHM » Home » Transfers » Transfer Tool_). If the server is part of a DNS cluster, the keys will synchronize to the DNS cluster during the transfer.

For more information about transferring DNSSEC keys, read our [Zone Editor](https://docs.cpanel.net/cpanel/domains/zone-editor/) documentation.

## API functions

### UAPI functions

Developers can use the following DNSSEC-related UAPI functions to retrieve information or perform actions:

- [`DNSSEC::activate_zone_key`](https://api.docs.cpanel.net/openapi/cpanel/operation/activate_zone_key/) — This function activates a DNSSEC key.

- [`DNSSEC::add_zone_key`](https://api.docs.cpanel.net/openapi/whm/operation/add_zone_key/) — This function generates a DNSSEC key for a domain.

- [`DNSSEC::deactivate_zone_key`](https://api.docs.cpanel.net/openapi/cpanel/operation/deactivate_zone_key/) — This function deactivates a DNSSEC key.

- [`DNSSEC::disable_dnssec`](https://api.docs.cpanel.net/openapi/cpanel/operation/deactivate_zone_key/) — This function disables DNSSEC on the domain.

- [`DNSSEC::enable_dnssec`](https://api.docs.cpanel.net/openapi/cpanel/operation/enable_dnssec/) — This function enables DNSSEC on the domain.

- [`DNSSEC::export_zone_key`](https://api.docs.cpanel.net/openapi/whm/operation/export_zone_key/) — This function exports a DNSSEC key.

- [`DNSSEC::fetch_ds_records`](https://api.docs.cpanel.net/openapi/cpanel/operation/fetch_ds_records/) — This function fetches a domain’s Delegation of Signing (DS) records on a domain.

- [`DNSSEC::import_zone_key`](https://api.docs.cpanel.net/openapi/cpanel/operation/import_zone_key/) — This function imports a DNSSEC key.

- [`DNSSEC::remove_zone_key`](https://api.docs.cpanel.net/openapi/cpanel/operation/remove_zone_key/) — This function removes a DNSSEC key.

- [`DNSSEC::set_nsec3`](https://api.docs.cpanel.net/openapi/cpanel/operation/set_nsec3/) — This function configures the domain to use [Next Secure Record 3](https://tools.ietf.org/html/rfc4470) (NSEC3) semantics.

- [`DNSSEC::unset_nsec3`](https://api.docs.cpanel.net/openapi/cpanel/operation/unset_nsec3/) — This function configures the domain to use [Next Secure Record](https://tools.ietf.org/html/rfc4470) (NSEC) semantics instead of [Next Secure Record 3](https://tools.ietf.org/html/rfc4470) (NSEC3) semantics.


### WHM API 1 functions

Developers can use these functions to retrieve information or perform actions:

- [`activate_zone_key`](https://api.docs.cpanel.net/openapi/whm/operation/activate_zone_key/) — This function activates a domain’s DNSSEC security key.
- [`add_zone_key`](https://api.docs.cpanel.net/openapi/whm/operation/add_zone_key/) — This function generates a DNSSEC zone key for a domain.
- [`deactivate_zone_key`](https://api.docs.cpanel.net/openapi/whm/operation/deactivate_zone_key/) — This function deactivates a domain’s DNSSEC security key.
- [`disable_dnssec_for_domains`](https://api.docs.cpanel.net/openapi/whm/operation/disable_dnssec_for_domains/) — This function disables DNSSEC on the domain.
- [`enable_dnssec_for_domains`](https://api.docs.cpanel.net/openapi/whm/operation/enable_dnssec_for_domains/) — This function enables DNSSEC on the domain.
- [`export_zone_key`](https://api.docs.cpanel.net/openapi/whm/operation/export_zone_key/) — This function exports a DNSSEC security key to a domain.
- [`fetch_ds_records_for_domains`](https://api.docs.cpanel.net/openapi/whm/operation/fetch_ds_records_for_domains/) — This function fetches a domain’s Delegation of Signing (DS) record.
- [`import_zone_key`](https://api.docs.cpanel.net/openapi/whm/operation/import_zone_key/) — This function imports a DNSSEC security key.
- [`remove_zone_key`](https://api.docs.cpanel.net/openapi/whm/operation/remove_zone_key/) — This function removes a DNSSEC security key.
- [`set_nsec3_for_domains`](https://api.docs.cpanel.net/openapi/whm/operation/set_nsec3_for_domains/) — This function configures the domain to use [Next Secure Record 3](https://tools.ietf.org/html/rfc4470) (NSEC3) semantics.
- [`unset_nsec3_for_domains`](https://api.docs.cpanel.net/openapi/whm/operation/unset_nsec3_for_domains/) — This function configures the domain to use [Next Secure Record](https://tools.ietf.org/html/rfc4470) (NSEC) semantics instead of [Next Secure Record 3](https://tools.ietf.org/html/rfc4470) (NSEC3) semantics.

#### Additional Documentation

* * *

- [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/)
- [How to Rotate a DNSSEC Key](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/)
- [The cleandns Script](https://docs.cpanel.net/whm/scripts/the-cleandns-script/)
- [The dnssec-cluster-keys Script](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/)
- [The enable\_spf\_dkim\_globally Script](https://docs.cpanel.net/whm/scripts/the-enable_spf_dkim_globally-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×