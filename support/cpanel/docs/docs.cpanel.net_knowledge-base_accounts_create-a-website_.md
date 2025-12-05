---
url: "https://docs.cpanel.net/knowledge-base/accounts/create-a-website/"
title: "Create a Website | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/create-a-website/#main-content)

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
3. [Accounts](https://docs.cpanel.net/knowledge-base/accounts/)
4. Create a Website


[wordpress](https://docs.cpanel.net/tags/wordpress/) [sitepublisher](https://docs.cpanel.net/tags/sitepublisher/) [jupiter](https://docs.cpanel.net/tags/jupiter/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/create-a-website/#overview)

* * *

[Create a website with Sitejet Builder](https://docs.cpanel.net/knowledge-base/accounts/create-a-website/#create-a-website-with-sitejet-builder)

* * *

[Create a WordPress website](https://docs.cpanel.net/knowledge-base/accounts/create-a-website/#create-a-wordpress-website)

* * *

[Create a placeholder page with Site Publisher](https://docs.cpanel.net/knowledge-base/accounts/create-a-website/#create-a-placeholder-page-with-site-publisher)

* * *

[Upload your own content](https://docs.cpanel.net/knowledge-base/accounts/create-a-website/#upload-your-own-content)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/create-a-website/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/create-a-website/#overview)

* * *

[Create a website with Sitejet Builder](https://docs.cpanel.net/knowledge-base/accounts/create-a-website/#create-a-website-with-sitejet-builder)

* * *

[Create a WordPress website](https://docs.cpanel.net/knowledge-base/accounts/create-a-website/#create-a-wordpress-website)

* * *

[Create a placeholder page with Site Publisher](https://docs.cpanel.net/knowledge-base/accounts/create-a-website/#create-a-placeholder-page-with-site-publisher)

* * *

[Upload your own content](https://docs.cpanel.net/knowledge-base/accounts/create-a-website/#upload-your-own-content)

* * *

## Create a Website

Last modified: _2025 August 21_

* * *

## Overview

This document explains how to quickly build a website. cPanel & WHM provides a number of tools that you can use to do this.

## Create a website with Sitejet Builder

The [_Sitejet Builder_](https://docs.cpanel.net/cpanel/domains/sitejet-builder) interface allows you to view and manage your registered domains with Sitejet websites. The _Sitejet Builder_ interface is fully integrated with the [Sitejet Website Builder (Content Management System)](https://help.sitejet.io/article/536-overview-website-builder-cms) website. You can use the Sitejet Website Builder (CMS) to create and design a website for your domain. Then, you can publish it with your cPanel account.

To create a website for your domain, perform the following steps:

1. Navigate to the [_Sitejet Builder_](https://docs.cpanel.net/cpanel/domains/sitejet-builder) interface ( _cPanel » Home » Domains » Sitejet Builder_). The _Sitejet Builder_ interface will appear.
2. Click _Build with Sitejet_ for the domain. The [_Choose Template_](https://docs.cpanel.net/cpanel/domains/sitejet-builder/#the-choose-template-interface) interface will appear.
3. Once you have chosen a template and personalized your website in the Sitejet Website Builder (CMS), click _Publish_ (![Publish](https://docs.cpanel.net/img/sitejet-publish.png)) . The system will redirect you to the _Sitejet Builder_ interface and will publish your design to the domain’s document root directory.

   - If your domain’s [document root](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#document-root) already contains files, the system will prompt you to confirm publication. Publication will delete **all files and directories** in your domain’s document root directory.
   - If the publication process will cause your cPanel account to exceed its [disk quota](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/#statistics-details), the system will prompt you to free up additional space before you can publish your Sitejet website.

For more information, read our [_Sitejet Builder_](https://docs.cpanel.net/cpanel/domains/sitejet-builder) interface documentation.

## Create a WordPress website

Note:

The [_Onboarding Assistant_](https://docs.cpanel.net/knowledge-base/cpanel-product/onboarding-assistant) automatically creates a WordPress® website for the new cPanel account if the user selects the _WordPress_ option.

The _WP Toolkit_ interface allows you to quickly install WordPress and configure it.

To create a website with WordPress®, perform the following steps:

1. Navigate to cPanel’s [_WP Toolkit_](https://docs.cpanel.net/cpanel/domains/wp-toolkit-for-cpanel/) interface ( _cPanel » Home » Domains » WP Toolkit_). The _WP Toolkit_ interface will appear.
2. Click _Install WordPress_. The _Install WordPress_ sidebar will appear.
3. Enter a title for the website.
4. WP Toolkit will suggest a username, password, and email address for the administrator account. Make any changes as needed.
5. Click _Install_.

This will install a basic WordPress installation on your site. You can add themes, plugins, and other enhancements through the _WP Toolkit_ interface or the _Dashboard_ interface.

To open the WordPress _Dashboard_, click _Log in_.

- For more information about the WP Toolkit, read our [WP Toolkit for cPanel](https://docs.cpanel.net/cpanel/domains/wp-toolkit-for-cpanel/) documentation.
- For more information about WordPress, go to [The Wordpress website](https://wordpress.org/).
- For video tutorials about the WP Toolkit, watch our [WP Toolkit for cPanel Quick Guide](https://www.youtube.com/playlist?list=PLZk46idJS6s7_L6jowxB_hG6iiQJJJNTt).

## Create a placeholder page with Site Publisher

To set up a placeholder for your account, perform the following steps:

1. Navigate to cPanel’s [_Site Publisher_](https://docs.cpanel.net/cpanel/domains/site-publisher/) interface ( _cPanel » Home » Domains » Site Publisher_).
2. Select the _Domain_ for which you want to create a placeholder page.






Note:





The list of domains shown in this interface includes your account’s main domain and subdomains. It does not include parked (or “alias”) domains. For more information on parked domains refer to our [_glossary of terms_](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#p).

3. Select a site template.
4. Enter your site information.
5. Click _Publish_.

For more information, read our [_Site Publisher_](https://docs.cpanel.net/cpanel/domains/site-publisher/) documentation.

## Upload your own content

If you have created content outside of Site Builder or WordPress, you may also upload content to the server to create a website. cPanel & WHM offer the below methods to upload your content:

- cPanel’s [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk) interface ( _cPanel » Home » Files » Web Disk_)
- cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_)
- cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_)
- cPanel’s [_FTP Accounts_](https://docs.cpanel.net/cpanel/files/ftp-accounts) interface ( _cPanel » Home » Files » FTP Accounts_)

#### Additional Documentation

* * *

- [Add a Package](https://docs.cpanel.net/whm/packages/add-a-package/)
- [Apparent Discrepancies in Bandwidth Usage Statistics](https://docs.cpanel.net/knowledge-base/accounts/apparent-discrepancies-in-bandwidth-usage-statistics/)
- [Change Language](https://docs.cpanel.net/cpanel/preferences/change-language/)
- [Copy a Locale](https://docs.cpanel.net/whm/locales/copy-a-locale/)
- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×