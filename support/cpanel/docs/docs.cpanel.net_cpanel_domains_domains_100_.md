---
url: "https://docs.cpanel.net/cpanel/domains/domains/100/"
title: "Domains  | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/domains/domains/100/#main-content)

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
4. Domains


[domains](https://docs.cpanel.net/tags/domains/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
[Overview](https://docs.cpanel.net/cpanel/domains/domains/100/#overview) [Domain DNS and registration](https://docs.cpanel.net/cpanel/domains/domains/100/#domain-dns-and-registration) [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/100/#create-a-new-domain) [The List Domains table](https://docs.cpanel.net/cpanel/domains/domains/100/#the-list-domains-table) [Manage the Domain](https://docs.cpanel.net/cpanel/domains/domains/100/#manage-the-domain) - [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)
- [Manage the Domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/domains/domains/100/#installation-toggle)

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
[Overview](https://docs.cpanel.net/cpanel/domains/domains/100/#overview) [Domain DNS and registration](https://docs.cpanel.net/cpanel/domains/domains/100/#domain-dns-and-registration) [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/100/#create-a-new-domain) [The List Domains table](https://docs.cpanel.net/cpanel/domains/domains/100/#the-list-domains-table) [Manage the Domain](https://docs.cpanel.net/cpanel/domains/domains/100/#manage-the-domain) - [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)
- [Manage the Domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/)

## Domains

![](https://docs.cpanel.net/img/cpanel-icons/domains.svg)

_Valid for versions 100 through 128_

#### Version:

#### [100](https://docs.cpanel.net/cpanel/domains/domains/100/)

#### [130](https://docs.cpanel.net/cpanel/domains/domains/)

Last modified: _2025 September 19_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

Use this interface to create and manage multiple [domains](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#domain-name) from a single cPanel account.

Note:

Some settings **only** appear if your hosting provider enables them.

### Domain DNS and registration

To update your domain’s DNS records, use cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_). Contact your hosting provider to change any records that do not appear in cPanel’s _Zone Editor_ interface.

You cannot update or renew a domain’s registration in cPanel. To find out how to update or renew a domain’s registration, contact your hosting provider or read our [How to Identify Your Registrar](https://docs.cpanel.net/knowledge-base/dns/how-to-identify-your-registrar/) documentation.

## Create a New Domain

To create a new domain, click _Create a New Domain_. A new interface will appear. It displays the domain creation settings, as well as your account’s quota status. For more information, read our [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/) documentation.

## The List Domains table

This interface lists your domains and allows you to perform several actions. For example, you can [create a new domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/), [modify a domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/), or [force HTTPS redirects](https://docs.cpanel.net/cpanel/domains/domains/100/#force-https-redirect).

This interface provides the following information about your domains:

| Item | Actions |
| --- | --- |
| _Domain_ | - Click _Domain_ to sort the list alphabetically by account name.<br>- Click an individual domain to visit the public-facing website.<br> The _Main Domain_ label identifies the domain that your hosting provider listed to create this account. Your hosting provider can change your _Main Domain_ via WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account/) interface ( _WHM » Home » Modify an Account_). |
| _Document Root_ | - Click _Document Root_ to sort the list alphabetically by relative directory paths.<br>- Click the home icon (![home icon](https://docs.cpanel.net/img/domainshouse.png)) or the file path to navigate to the [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_) for that domain. A new interface will appear.<br> To modify a domain’s document root, use the click [Manage](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/) next to the domain. This interface displays an unlinked file path if your hosting provider disables cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_). For more information, contact your hosting provider. |
| _Redirects To_ | If the listed domain redirects to a different domain, the destination will appear here. Click a domain to visit the public-facing website. A new tab will appear. <br> To manage redirects, use to cPanel’s [_Redirects_](https://docs.cpanel.net/cpanel/domains/redirects) interface ( _cPanel » Home » Domains » Redirects_). |
| _Force HTTPS Redirect_ | Use the _Force HTTPS Redirect_ toggle to automatically redirect a domain’s visitors from the insecure version of the website to the version secured by your [SSL certificate](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#ssl-certificate). HTTPS is the secure version of HTTP and ensures that communication between a user and your webserver is secure. <br>- To automatically redirect the new domain’s visitors from the insecure version of the website (HTTP) to the secure version (HTTPS), set the toggle to _On_.<br>- To disable redirection to the secure version of the website, set the toggle to _Off_.<br> Select the appropriate checkboxes and then click _Force HTTPS Redirect On_ or _Force HTTPS Redirect Off_ at the top of the table to perform this action on multiple accounts. <br>Important:<br>- You can **only** enable redirection on a _Main Domain_ that also possess a valid SSL certificate. If you cannot enable redirection for your domains, contact your hosting provider.<br>- The toggle will **not** appear for aliases.<br> For more information about SSL, read our [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/) documentation. |
| _Actions_ | - [_Manage_](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/) — To manage additional settings, click _Manage_. A new interface will appear.<br>- _Create Email_ — To create email addresses for the domain, click _Create Email_. The [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts) interface ( _cPanel » Home » Email » Email Accounts_) will appear. |
| _Show Associated Subdomains_ | To show subdomains that the system automatically creates, perform the following steps: <br>1. Click the gear icon (![gear icon](https://docs.cpanel.net/img/domainsgear.png)).<br>2. Click _Show Associated Domains_.<br> This setting is **only** available if an addon domain exists. |

## Manage the Domain

To manage an individual domain, click _Manage_ next to the domain in the _Actions_ column. This will open the _Manage the Domain_ interface. Use this interface to manage the domain’s document root directory, remove the domain, or perform other actions. For more information, read our [Manage the Domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/) documentation.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×