---
url: "https://docs.cpanel.net/cpanel/domains/sitejet-builder/"
title: "Sitejet Builder | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#main-content)

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
4. Sitejet Builder


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [domains](https://docs.cpanel.net/tags/domains/) [sitejet](https://docs.cpanel.net/tags/sitejet/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#overview)

* * *

[Create a new Sitejet website](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#create-a-new-sitejet-website)

* * *

[Sitejet Website table](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#sitejet-website-table)

* * *

[Sitejet files](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#sitejet-files)

* * *

[The robots.txt file](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#the-robotstxt-file)

* * *

[Why can’t I build a Sitejet website?](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#why-cant-i-build-a-sitejet-website)

* * *

[Shared document root](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#shared-document-root)

* * *

[Redirected website](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#redirected-website)

* * *

[Domain limit reached](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#domain-limit-reached)

* * *

[Move a Sitejet website](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#move-a-sitejet-website)

* * *

[Copy your Sitejet-provided sharing code](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#copy-your-sitejet-provided-sharing-code)

* * *

[Add your Sitejet-provided sharing code](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#add-your-sitejet-provided-sharing-code)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#overview)

* * *

[Create a new Sitejet website](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#create-a-new-sitejet-website)

* * *

[Sitejet Website table](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#sitejet-website-table)

* * *

[Sitejet files](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#sitejet-files)

* * *

[The robots.txt file](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#the-robotstxt-file)

* * *

[Why can’t I build a Sitejet website?](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#why-cant-i-build-a-sitejet-website)

* * *

[Shared document root](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#shared-document-root)

* * *

[Redirected website](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#redirected-website)

* * *

[Domain limit reached](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#domain-limit-reached)

* * *

[Move a Sitejet website](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#move-a-sitejet-website)

* * *

[Copy your Sitejet-provided sharing code](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#copy-your-sitejet-provided-sharing-code)

* * *

[Add your Sitejet-provided sharing code](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#add-your-sitejet-provided-sharing-code)

* * *

## Sitejet Builder

![](https://docs.cpanel.net/img/cpanel-icons/cpanel-sitejet-plugin.svg)

Last modified: _2025 August 22_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The [_Sitejet Builder_](https://docs.cpanel.net/cpanel/domains/sitejet-builder) interface allows you to view and manage your Sitejet domains. The _Sitejet Builder_ interface is fully integrated with the [Sitejet Website Builder (Content Management System)](https://help.sitejet.io/) website. You can use the Sitejet Website Builder (CMS) to create and design a website for your domain. Then, you can publish it with your cPanel account.

Sitejet Website Builder (CMS) allows you to personalize the appearance of your website with a drag-drop editor or start from scratch and build your website from the ground up. Every template is fully customizable.

Note:

Looking for help using the Sitejet Website Builder (Content Management System)? Read the [Sitejet Website Builder](https://help.sitejet.io/hc/en-us/articles/24275952909463-Overview-Website-Builder-CMS) documentation.

## Create a new Sitejet website

To create a new Sitejet website, perform the following steps:

1. Click _Create a New Website_. The _Sitejet Domains_ interface will appear.
2. Enter a [fully qualified domain name (FQDN)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#fqdn) in the _Domain_ text box.

   - To create a new domain, enter the new domain name. For example, `example.com`.
   - To create a [subdomain](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#subdomain), enter a new name followed by a period (`.`) and then the website’s domain. For example, enter `subdomain.example.com` to create a subdomain of `example.com`.
3. Click _Submit_. The system will redirect you to the [Sitejet Website Builder (CMS)](https://help.sitejet.io/) website.
4. Choose a template and personalize your website in the Sitejet Website Builder (CMS).
5. When you are satisfied with your website, click _Publish_ (![Publish icon](https://docs.cpanel.net/img/sitejet-publish.png)). The system will redirect you to the _Sitejet Builder_ interface and publish your design to the domain’s document root directory.

   - If your domain’s [document root](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#document-root) already contains files, the system will prompt you to _Create a restore point_. A restore point saves your website’s information so that you can recover it in the future. If you choose not to create a restore point, you will **not** be able to recover your non-Sitejet website.
   - If the publication process causes your cPanel account to exceed its [disk quota](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/#statistics-details), the system will prompt you to free up additional space before you can publish your Sitejet website.

## Sitejet Website table

The _Sitejet Builder_ interface lists all the domains associated with your account. For each domain, you can take [actions](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#actions) to edit your website, preview your website, or build a new website using the Sitejet Website Builder (CMS).

If you update a [temporary domain](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#temporary-domain) to a [registered domain](https://docs.cpanel.net/whm/account-functions/modify-an-account/#registered-and-temporary-domains), the domain will also update in this list.

#### Website Name

The column under _Website Name_ lists all domains associated with your account. Click _Website Name_ to sort the list alphabetically by account name.

#### Actions

Each domain the column lists has one or more actions available for you to manage the website for the domain. The actions will be different depending on if you made the website with Sitejet.

| Options | Description |
| --- | --- |
| ![Details button](https://docs.cpanel.net/img/sitejet-details.png) | Click _Details_ to preview your website. On the _Website Details_ page, you can perform the following actions: <br>- Click _Restore_ to recover your non-Sitejet website. <br>  <br>  <br>  <br>  <br>  <br>  Note:<br>  <br>  <br>  <br>  <br>  <br>  This option **only** appears if the following two statements are true: <br>  <br>  <br>  <br>  <br>  <br>- You had a previously existing website for this domain.<br>- You created a [restore point](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#restore-point) before publishing your Sitejet website.<br>- Click _Edit Site_ to change the look of your website. |
| ![Edit Site button](https://docs.cpanel.net/img/sitejet-edit.png) | Click _Edit Site_ to edit an existing Sitejet website. The system will redirect you to the [_Sitejet Website Builder (CMS)_](https://help.sitejet.io/article/536-overview-website-builder-cms) website. |
| ![Continue Editing button](https://docs.cpanel.net/img/sitejet-continue-editing.png) | Click _Continue Editing_ to edit a Sitejet website you started but have not yet published. The system will redirect you to the [_Sitejet Website Builder (CMS)_](https://help.sitejet.io/article/536-overview-website-builder-cms) website. |
| ![Try Sitejet button](https://docs.cpanel.net/img/sitejet-try.png) | Click [_Try Sitejet_](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#try-sitejet) to create a new Sitejet website for an existing domain. The system will redirect you to the [_Sitejet Website Builder (CMS)_](https://help.sitejet.io/article/536-overview-website-builder-cms) website. |
| ![Try Sitejet AI button](https://docs.cpanel.net/img/sitejet-try-ai.png) | Click _Try Sitejet AI_ to create a new Sitejet website for an existing domain using the AI Website Generator. The system will redirect you to the [_Sitejet Website Builder (CMS)_](https://help.sitejet.io/article/536-overview-website-builder-cms) website. |

## Sitejet files

Sitejet stores a list of the files that it manages in the `$home/.cpanel/sitejet/$domain-files` file. In this file path, `$home` is your cPanel account’s [home directory](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#home-directory), and `$domain` is the domain of your website.

The files that Sitejet manages may change when you update your site. You **cannot** manually edit these files.

Important:

Sitejet will **not** delete custom files that you create in your website’s document root directory or its subdirectories. However, we do **not** recommend that you put any custom files in this directory **except** a [`robots.txt` file](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#the-robotstxt-file).

### The robots.txt file

You can add a [`robots.txt`](https://help.sitejet.io/hc/en-us/articles/24275984472855-Add-a-robots-txt-file) file to your domain’s document root directory to tell search engine web crawlers and other web robots how to interact with your website.

Warning:

If you start using Sitejet Builder on a domain for which you have already made a `robots.txt` file, Sitejet Builder will delete the file when you publish your new website. To avoid issues with search engines or other web robots, save your `robots.txt` file in local storage before you publish your new Sitejet Builder website, then move the file back to your website’s document root once you have published.

## Why can’t I build a Sitejet website?

You may see a domain listed in the _Sitejet Builder_ interface that does not allow the creation of a website with Sitejet. The following issues may be impacting your ability to create a website with Sitejet:

### Shared document root

You **cannot** use a shared [document root](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#document-root) directory with Sitejet. To resolve this issue, perform one of the following actions:

- Use the _Main_ domain.
- Create a new domain.
- Delete the second dependent domain.

You can now create a Sitejet website for that domain.

For more information on domains, read our [_Domains_](https://docs.cpanel.net/cpanel/domains/domains) interface ( _cPanel » Home » Domains » Domains_) documentation.

### Redirected website

A redirect allows you to make one domain redirect to another domain, either for a website or a specific web page. For example, your can create a redirect so that `www.example.com` automatically redirects users to `www.example.net`. You **cannot** use a redirected website with Sitejet.

To resolve this issue, perform the following steps:

1. Navigate to the [_Redirects_](https://docs.cpanel.net/cpanel/domains/redirects/) interface ( _cPanel » Home » Domains » Redirects_).
2. Navigate to _Current Redirects_. Locate the desired redirected domain and click _Delete_. A confirmation box will appear.
3. Click _Remove Redirect_. A success message will appear.

You can now create a Sitejet website for that domain.

### Domain limit reached

If your account has reached the maximum number of domains you can create, you will not be able to build a new website. Contact your hosting provider to upgrade your account.

## Move a Sitejet website

You can move a website you created with Sitejet to another domain. To move the files from a Sitejet website domain’s document root to another domain’s document root, you must first copy your Sitejet-provided sharing code.

### Copy your Sitejet-provided sharing code

Important:

The Sitejet-provided sharing code is a unique 15-digit key you can obtain in the Sitejet Website Builder (CMS). It resembles the following: `263e457a-407129`.

To get your Sitejet-provided code, perform the following steps:

1. In cPanel’s _Sitejet Builder_ interface ( _cPanel » Home » Domains » Sitejet Builder_), locate the domain you would like to move and click _Edit Site_. The system will redirect you to the [_Sitejet Website Builder (CMS)_](https://help.sitejet.io/article/536-overview-website-builder-cms) website.
2. In the _Sitejet Website Builder (CMS)_, click the hamburger menu (![hamburger menu icon](https://docs.cpanel.net/img/sitejet-hamburger.png)) on the left side of the top navigation bar. A menu will appear.
3. Click _Share & Copy Website_. The _Share & Copy Website_ interface will appear.
4. In the _Code for Sharing_ section, click the _Copy_ button to copy the Sitejet-provided code.
5. Click _Exit_ to return to cPanel’s _Sitejet Builder_ interface.

Once you have your Sitejet-provided code, you must share it with your new Sitejet domain.

### Add your Sitejet-provided sharing code

To share your files to your new domain’s document root, perform the following steps:

1. In cPanel’s _Sitejet Builder_ interface ( _cPanel » Home » Domains » Sitejet Builder_), locate the domain to which you would like to move your files. Click one of the following options: _Edit Site_, _Continue Editing_, or _Try Sitejet_.







Note:





- Your options will vary depending on the target domain.
- If your target domain is not currently a Sitejet website, you **must** select any template as a placeholder before the system will redirect to the _Sitejet Website Builder (CMS)_.

The system will redirect you to the [_Sitejet Website Builder (CMS)_](https://help.sitejet.io/article/536-overview-website-builder-cms) website.

2. In the _Sitejet Website Builder (CMS)_, click the hamburger menu to return to the _Share & Copy Website_ interface.

3. In the _Copy Website_ section, paste the Sitejet-provided code in the _Add sharing code_ text box.

4. Then, click _Start_. The system will move your files to this domain’s document root.

5. Click _Publish_ in the _Sitejet Website Builder (CMS)_ to publish the website to the new domain.


#### Additional Documentation

* * *

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
- [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)
- [Dynamic DNS](https://docs.cpanel.net/cpanel/domains/dynamic-dns/)
- [Redirects](https://docs.cpanel.net/cpanel/domains/redirects/)
- [Site Publisher](https://docs.cpanel.net/cpanel/domains/site-publisher/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×