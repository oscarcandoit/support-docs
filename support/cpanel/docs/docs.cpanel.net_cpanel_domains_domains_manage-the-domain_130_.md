---
url: "https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/"
title: "Manage the Domain | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#main-content)

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
4. Manage the Domain


[domains](https://docs.cpanel.net/tags/domains/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
- [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)
- [Manage the Domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/)
[Overview](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#overview) [Update the domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#update-the-domain) [Temporary domains](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#temporary-domains) [New document root](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#new-document-root) [Domain information](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#domain-information) [Remove the domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#remove-the-domain) [Email accounts when you remove a domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#email-accounts-when-you-remove-a-domain) [Additional Resources](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#additional-resources)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#installation-toggle)

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
- [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)
- [Manage the Domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/)
[Overview](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#overview) [Update the domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#update-the-domain) [Temporary domains](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#temporary-domains) [New document root](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#new-document-root) [Domain information](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#domain-information) [Remove the domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#remove-the-domain) [Email accounts when you remove a domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#email-accounts-when-you-remove-a-domain) [Additional Resources](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/#additional-resources)

## Manage the Domain

![](https://docs.cpanel.net/img/cpanel-icons/domains.svg)

_Valid for version 130_

#### Version:

#### [110](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/110/)

#### [130](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/130/)

#### [132](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/)

Last modified: _2025 September 19_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Use this interface to manage the domain’s document root directory, remove the domain, or perform other actions.

Note:

- To update your domain’s DNS records, use cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_). Contact your hosting provider to change any records that do not appear in cPanel’s _Zone Editor_ interface.
- You cannot update or renew a domain’s registration in cPanel. To find out how to update or renew a domain’s registration, contact your hosting provider or read our [How to Identify Your Registrar](https://docs.cpanel.net/knowledge-base/dns/how-to-identify-your-registrar/) documentation.
- cPanel & WHM does not support the following features for accounts with [temporary domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain):
  - Editing DNS
  - Email services
  - Search Engine Optimization

## New document root

The domain’s [document root](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#document-root) directory defines the domain’s directory relative to the cPanel account’s home directory. For example, enter `newdomain.com` in the _New Document Root_ text box for a cPanel account that uses the `/home/username` home directory. That domain’s files will reside in the `/home/username/public_html/newdomain.com` directory.

Note:

- If you change this directory, the server searches for your files in a different location. The server does **not** rearrange your files in any way. You will need to move the files to the specified directory.
- You **cannot** change the document root directory for the _Main Domain_.
- You **cannot** modify the document root directory for domains that share that directory with the _Main Domain_.

To provide a new document root directory, perform the following steps:

1. Enter a new path, relative to the user’s home directory.
2. Click _Update_.

## Domain information

This section contains the following information about the domain:

| Item | Description | Example |
| --- | --- | --- |
| _Domain_ | The domain name. | `example.com` |
| _Redirects To_ | If the listed domain redirects to a different domain, the destination will appear here. Click a domain to visit the public-facing website. A new tab will appear. <br> To manage redirects, use cPanel’s [_Redirects_](https://docs.cpanel.net/cpanel/domains/redirects) interface ( _cPanel » Home » Domains » Redirects_). | - `example2.com`<br>- `Not Redirected` |
| _Document Root_ | The directory that contains a domain’s publicly-available files. | `/public_html` |

## Remove the domain

Important:

- We **strongly** recommend that you create a full account backup before you remove a domain. For more information about backups, read our [_Backup_](https://docs.cpanel.net/cpanel/files/backup-for-cpanel) documentation.
- This action **only** removes the domain’s `vhost` entries and DNS entries. The server retains the domain’s directory and contents.
- You **cannot** delete the _Main Domain_.

To remove the domain from the cPanel account, perform the following steps:

1. Click _Remove Domain_.
2. To confirm that you wish to remove this domain, click _Yes, remove this domain_.

### Email accounts when you remove a domain

If you remove a domain that contains email accounts, those email accounts will **not** appear in the [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts) interface ( _cPanel » Home » Email » Email Accounts_). However, the mail folders continue to exist on the server. If you add the domain again, the email accounts will reappear.

## Additional Resources

In the _Additional Resources_ section, you can select the following actions:

| Action | Description |
| --- | --- |
| _Create an Email Address_ | Add an email address to the website. The [_Create an Email Account_](https://docs.cpanel.net/cpanel/email/create-an-email-account/) interface ( _cPanel » Home » Email » Create an Email Account_) will appear. |
| _Create a Site with Sitejet Builder_ | Quickly create a simple website, even if you have never created a website before. The [_Sitejet Builder_](https://docs.cpanel.net/cpanel/domains/sitejet-builder/) interface ( _cPanel » Home » Domains » Sitejet Builder_) will appear. |
| _Modify the Zones_ | Create, edit, and delete Domain Name System (DNS) records. The [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_) will appear. |
| _Modify the Redirects_ | Send all of the visitors of a domain or particular page to a different URL. The [_Redirects_](https://docs.cpanel.net/cpanel/domains/redirects/) interface ( _cPanel » Home » Domains » Redirects_) will appear. |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×