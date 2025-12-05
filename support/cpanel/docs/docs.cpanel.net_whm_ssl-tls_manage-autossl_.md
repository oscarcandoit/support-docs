---
url: "https://docs.cpanel.net/whm/ssl-tls/manage-autossl/"
title: "Manage AutoSSL | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#main-content)

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
3. [SSL-TLS](https://docs.cpanel.net/whm/ssl-tls/)
4. Manage AutoSSL


[ssl](https://docs.cpanel.net/tags/ssl/) [whmui](https://docs.cpanel.net/tags/whmui/) [services](https://docs.cpanel.net/tags/services/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#overview)

* * *

[Provider information](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#provider-information)

* * *

[AutoSSL provider](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#autossl-provider)

* * *

[Providers](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#providers)

* * *

[Terms of Service](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#terms-of-service)

* * *

[Options](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#options)

* * *

[Notifications](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#notifications)

* * *

[Allow AutoSSL to replace invalid or expiring non-AutoSSL certificates](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#allow-autossl-to-replace-invalid-or-expiring-non-autossl-certificates)

* * *

[Logs](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#logs)

* * *

[Manage Users](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#manage-users)

* * *

[Run AutoSSL Check](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#run-autossl-check)

* * *

[Pending Queue](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#pending-queue)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#overview)

* * *

[Provider information](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#provider-information)

* * *

[AutoSSL provider](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#autossl-provider)

* * *

[Providers](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#providers)

* * *

[Terms of Service](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#terms-of-service)

* * *

[Options](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#options)

* * *

[Notifications](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#notifications)

* * *

[Allow AutoSSL to replace invalid or expiring non-AutoSSL certificates](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#allow-autossl-to-replace-invalid-or-expiring-non-autossl-certificates)

* * *

[Logs](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#logs)

* * *

[Manage Users](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#manage-users)

* * *

[Run AutoSSL Check](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#run-autossl-check)

* * *

[Pending Queue](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#pending-queue)

* * *

## Manage AutoSSL

![](https://docs.cpanel.net/img/whm-icons/manage_autossl.svg)

_Valid for versions 118 through the latest version_

#### Version:

#### [88](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/88/)

#### [114](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/114/)

#### [118](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/)

Last modified: _2024 November 21_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to manage the AutoSSL feature, which automatically installs domain-validated SSL certificates for the following services for users’ domains:

- Apache®.
- Dovecot.
- Exim.
- Web Disk.
- cPanel Server.

It also allows you to review the feature’s log files and customize which users receive AutoSSL certificates.

Note:

When AutoSSL runs, the system performs a preflight check. This check adds a Certificate Authority Authentication (CAA) record in the domain’s zone file **before** AutoSSL orders a new certificate for that domain.

## Provider information

The following information displays at the top of this interface:

- _Current Provider_ — Your current AutoSSL provider. When you choose a provider and click _Save_, the provider will automatically install domain-validated Apache®, Dovecot, Exim, Web Disk, and cPanel Server SSL certificates for each cPanel user whose [feature list enables AutoSSL](https://docs.cpanel.net/whm/packages/feature-manager/#selectable-features). You can customize this list further in the [_Manage Users_](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/#manage-users) section.

- _Provider Account ID_ — Your account identification for your AutoSSL provider. If the selected provider does not have an account ID, the interface does **not** display this information.

- _Run AutoSSL for All Users_ — Click to run the AutoSSL feature for all users for whom you enabled the feature.







Note:





- The system runs the AutoSSL feature for all users at the following times:
  - When it performs nightly system updates via the `/usr/local/cpanel/scripts/upcp` script.
  - From the task queue after you create an account. AutoSSL examines the system’s SSL coverage and requests certificates from the configured provider to improve the system’s SSL coverage.
- To run the AutoSSL feature for all users via the command line, run the [`/usr/local/cpanel/bin/autossl_check --all`](https://docs.cpanel.net/whm/scripts/the-autossl_check-script) command.

### AutoSSL provider

#### The Let’s Encrypt provider

By default, the system uses the [Let’s Encrypt™](http://letsencrypt.org/) provider. Your cPanel license includes this **free** provider. For more information, read our [Let’s Encrypt Plugin](https://docs.cpanel.net/knowledge-base/third-party/the-lets-encrypt-plugin) documentation.

Note:

- This provider supports wildcard domains.

## Providers

The _AutoSSL Providers_ tab allows you to select which provider you want to manage your AutoSSL certificates. Click _Show/Hide Details_ to view a table with information about each provider. The system rates providers with a star icon. The system also determines a rating based on a provider’s AutoSSL management capabilities.

The _Show/Hide Details_ table contains the following:

- _Provider_ — The AutoSSL provider. Select _Disabled_ to disable the AutoSSL feature.

- _Usability Score_ — The total score of a provider, which its AutoSSL capabilities determine. This score is the sum of each provider’s DCV Methods: _Ancestor DCV Support_, _Domains per Certificate_, _Average Delivery Time_, _Maximum Number of Redirects_, _Rate Limit_, and _Wildcard Support_ capabilities. A provider can attain a rating up to nine stars.

- _DCV Methods_ — The DCV methods that the provider offers. A provider can receive a total of two stars per DCV method if they support Ancestor DCV. If they do not support Ancestor DCV, the provider receives one star per DCV method.

- _Ancestor DCV Support_ — Whether the successful DCV of a parent domain implies success of a subdomain. For example, if the `example.com` domain succeeds, then the DCV for the `store.example.com` subdomain is unnecessary.

- _Domains per Certificate_ — The number of unique domains per certificate. A provider can receive a total of one star.

- _Delivery Method_ — The means through which the provider issues a certificate, via the api, queue, or Unspecified method.

- _Average Delivery Time_ — The amount of time the provider requires to issue a certificate, if specified. A provider can receive a total of one star.

- _Validity Period_ — The period of time before the certificate expires, or Unspecified.

- _Maximum Number of Redirects_ — The maximum number of redirects a domain can use and still pass an HTTP-based DCV. A provider can receive a total of one star.

- _Rate Limit_ — The number of certificates the provider registers per domain per week, or Unspecified. A provider can receive a total of one star.

- _Wildcard Support_ — Whether the provider supports wildcard domains. A provider can receive a total of one star.


### Terms of Service

If the AutoSSL provider requires a Terms of Service or other similar agreement, review it and select the appropriate checkbox to agree to those terms.

Note:

If a provider updates their Terms of Service, you may need to return to this interface to agree to them.

## Options

The _Options_ tab allows you to configure various options for AutoSSL.

### Notifications

The notification options allow you to select the frequency at which your users receive AutoSSL-related notifications.

Note:

- Some of these options remove the corresponding notification option in cPanel’s [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information) interface ( _cPanel_ » _Home_ » _Preferences_ » _Contact Information_). For example, if you disable the _Notify the user for all AutoSSL events and normal successes_ user notification setting, this option is unavailable to your cPanel users.

- These options override the user’s current settings.


#### User Notifications

You can select from the following notification options for your cPanel users:

- _Notify the user for **all** AutoSSL events and normal successes._

- _Notify the user for AutoSSL certificate request failures, warnings, and deferrals._

- _Notify the user for AutoSSL certificate request failures **only**._

- _Disable AutoSSL user notifications._


This setting defaults to _Notify the user for AutoSSL certificate request failures, warnings, and deferrals._

#### Administrator Notifications

You can select from the following notification options for your reseller and WHM users:

- _Notify the administrator for **all** AutoSSL events and normal successes._

- _Notify the administrator for AutoSSL certificate request failures, warnings, and deferrals._

- _Notify the administrator for AutoSSL certificate request failures **only**._

- _Disable AutoSSL administrator notifications._


This setting defaults to _Notify the user for AutoSSL certificate request failures, warnings, and deferrals_.

### Allow AutoSSL to replace invalid or expiring non-AutoSSL certificates

This option allows AutoSSL to replace certificates that the AutoSSL system did **not** issue. When you enable this option, AutoSSL will install certificates that replace users’ non-AutoSSL certificates if they are invalid or expire within three days.

Important:

- Unless you fully understand this option, do **not** enable it, because the system may unexpectedly replace an expiring or invalid Extended Validation (EV) or Organization Validated (OV) certificate with a Domain Validated (DV) certificate.

- Users’ non-AutoSSL certificates are paid, and should be replaced by another paid certificate.


## Logs

Use the _Logs_ tab to review the system’s AutoSSL log files. To view a specific log, select it from the menu and click _View Log_ to display the its information. The system retains AutoSSL logs for 30 days. After 30 days, the system rotates the log files.

Note:

The system stores the log files in both text and JSON format in the `/var/cpanel/logs/autossl` directory.

## Manage Users

The _Manage Users_ tab allows you to override your server’s feature list settings and control whether AutoSSL is enabled for your users. Use the search text box to locate specific users, or use the check box and menu to select all users or clear your current selections.

Note:

User feature lists may differ, based on the user’s assigned package. For more information, read our [Feature Manager](https://docs.cpanel.net/whm/packages/feature-manager) documentation.

You can select from the following Toggle AutoSSL options for individual users and select users:

- _Enable AutoSSL on selected users_ — Override the feature list setting and force AutoSSL to be enabled.

- _Disable AutoSSL on select users_ — Override the feature list setting and force AutoSSL to be disabled.

- _Reset AutoSSL on selected users_ — Use setting established by the feature list’s default setting. For more information, read our [Feature Manager](https://docs.cpanel.net/whm/packages/feature-manager) documentation.


### Run AutoSSL Check

You can use the _Check_ button to perform a domain check for a specific user.

## Pending Queue

The _Pending Queue_ section of the interface lists the status and the details of the pending AutoSSL jobs on your server. Use the navigation controls at the top of the table to sort and search through the list.

#### Additional Documentation

* * *

- [Configure Remote Service IPs](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/)
- [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/)
- [Install an SSL Certificate on a Domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/)
- [SSL Storage Manager](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/)
- [SSL/TLS Configuration](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×