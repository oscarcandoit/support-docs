---
url: "https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/"
title: "From WHM to Website | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#main-content)

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
4. From WHM to Website


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [installation](https://docs.cpanel.net/tags/installation/) [accounts](https://docs.cpanel.net/tags/accounts/) [sitepublisher](https://docs.cpanel.net/tags/sitepublisher/) [wordpress](https://docs.cpanel.net/tags/wordpress/) [accountcreation](https://docs.cpanel.net/tags/accountcreation/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#overview)

* * *

[Prepare WHM](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#prepare-whm)

* * *

[Prepare cPanel](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#prepare-cpanel)

* * *

[Prepare the website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#prepare-the-website)

* * *

[Select a publishing method](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#select-a-publishing-method)

* * *

[Perform additional steps](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#perform-additional-steps)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#overview)

* * *

[Prepare WHM](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#prepare-whm)

* * *

[Prepare cPanel](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#prepare-cpanel)

* * *

[Prepare the website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#prepare-the-website)

* * *

[Select a publishing method](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#select-a-publishing-method)

* * *

[Perform additional steps](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#perform-additional-steps)

* * *

## From WHM to Website

Last modified: _2025 June 9_

* * *

## Overview

This document describes how to quickly publish a website on a newly-provisioned cPanel & WHM server.

Important:

- This procedure **only** covers the minimum steps to publish a website. We **strongly** recommend that you [read the rest of our documentation](https://docs.cpanel.net/) and configure all of the useful features on your cPanel & WHM server.
- You can skip any steps that you have already performed (for example, [_Log in to WHM_](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#log-in-to-WHM) or [Set the hostname](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#set-the-hostname)).
- Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

## Prepare WHM

This section describes the minimum necessary configuration for a server to host a website.

* * *

#### Log in to WHM

Warning:

You **must** [purchase a license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/) for cPanel & WHM. New installations automatically receive a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).

To log in to WHM, perform the following steps:

1. Navigate to the following URL, where `IPADDRESS` represents your server’s IP address:



```perl
https://IPADDRESS:2087/
```

2. Enter the `root` username and password.
3. Click _Log in_.
4. Agree to our software license terms. A new interface will appear.
5. Enter your email address in the _Email Address_ text box.
6. Enter your default nameservers in the _Nameservers_ text boxes. Your hosting provider or networking provider should provide these.
7. Click _Finish_. The WHM _Home_ interface will appear.

For more information, read our [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/) and [Getting Started](https://docs.cpanel.net/whm/the-whm-interface/getting-started/) documentation.

![WHM login screen](https://docs.cpanel.net/img/fromwhmtowebsite01.png)

![cPanel & WHM setup screen](https://docs.cpanel.net/img/fromwhmtowebsite02.png)

* * *

#### Set the hostname

Your server’s hostname uniquely identifies it on the internet. Most hosting providers will configure your server’s hostname as part of the provisioning process. However, you may need to perform these steps manually.

To set the hostname, perform the following steps:

1. Navigate to WHM’s [_Change Hostname_](https://docs.cpanel.net/whm/networking-setup/change-hostname) interface ( _WHM » Home » Networking Setup » Change Hostname_).
2. If you wish to change the hostname, enter a new hostname in the text box.
3. Click _Change_. A confirmation message will appear.
4. Click _Add an A entry for your hostname_. A new interface will appear that displays the main IP address of the server.
5. Click _Add Entry_. A confirmation message will appear.






Warning:





After you change the server’s hostname, your browser may display a warning about a change to the server’s SSL certificate.


![WHM Change Hostname interface](https://docs.cpanel.net/img/fromwhmtowebsite03.png)

![Add an A entry for your hostname interface](https://docs.cpanel.net/img/fromwhmtowebsite04.png)

* * *

#### Confirm the DNS resolvers

Your server’s DNS resolvers allow your server to look up the IP addresses of other sites on the internet. Most hosting providers will configure your server’s resolvers as part of the provisioning process. However, you may need to perform this step manually.

To configure DNS resolvers on your server, perform the following steps:

1. Navigate to WHM’s [_Resolver Configuration_](https://docs.cpanel.net/whm/networking-setup/resolver-configuration) interface ( _WHM » Home » Networking Setup » Resolver Configuration_).
2. Click _Proceed_. A new interface will appear.
3. Enter the desired IPv4 or IPv6 addresses in the _Primary Resolver_ and _Secondary Resolver_ text boxes.






Note:





If your hosting provider did not give you this information, you can use Google® nameservers (`8.8.8.8` and `8.8.4.4`).

4. To configure a third resolver, enter that IP address in the _Tertiary Resolver_ text box.
5. Click _Continue_. A confirmation message will appear.


![WHM Resolver Configuration interface](https://docs.cpanel.net/img/fromwhmtowebsite05.png)

* * *

#### Configure nameservers

Note:

We recommend that you set up the nameserver software on your server to ensure full functionality of all services.

If you’re using your domain registrar or your hosting provider to handle nameserver services, you can skip this section. Instead, contact your domain registrar and hosting provider for information on how to set your DNS registration and records.

Your server’s nameservers allow you to host your own DNS entries for sites. This allows you to control the branding of domains on your server when others look up information about them.

To select and configure nameservers on your server, perform the following steps:

01. Navigate to WHM’s [_Nameserver Selection_](https://docs.cpanel.net/whm/service-configuration/nameserver-selection) interface ( _WHM » Home » Service Configuration » Nameserver Selection_).
02. Select the nameserver software that you wish to use.
03. Click _Save_.
04. Navigate to WHM’s [_DNS Zone Manager_](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager) interface ( _WHM » Home » DNS Functions » DNS Zone Manager_).
05. Select your hostname’s zone file and click _Manage_.
06. Add A records for NS1 and NS2 entries.
07. Change the NS entries to your nameservers.
08. Click _Save_. A confirmation message will appear.
09. Go to your registrar’s website.
10. Change the nameserver records for your main domain to point to your own nameservers.

For more information, read our [How to Set Up Nameservers in a cPanel & WHM Environment](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/) and [Basic WebHost Manager Setup](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup) documentation.

![WHM Nameserver Selection interface](https://docs.cpanel.net/img/fromwhmtowebsite06.png)

![WHM DNS Zone Manager interface](https://docs.cpanel.net/img/fromwhmtowebsite07.png)

* * *

#### Set up Reverse DNS

Reverse DNS uses pointer records (PTR) to convert IP addresses to domain names.

We **strongly** recommend that you set the PTR record of your server’s primary IP address to your server’s hostname. However, many hosting providers do **not** delegate authority for PTR records to their customers. Contact your hosting provider for assistance.

For more information, read our [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/) documentation.

* * *

#### Configure WP Toolkit

If you plan to use WordPress® to create your website, read our [WP Toolkit for WHM](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/) documentation.

* * *

#### Create the account

To create the cPanel account, perform the following steps:

1. Navigate to WHM’s [_Create a New Account_](https://docs.cpanel.net/whm/account-functions/create-a-new-account) interface ( _WHM » Home » Account Functions » Create a New Account_).
2. Enter a domain name in the appropriate text box. The interface will suggest a username.
3. Enter a password and confirm it. The _Password Generator_ feature can generate a strong password for you.
4. Enter a contact email address for the account.
5. Click _Create_. A confirmation message will appear.


![WHM Create a New Account interface](https://docs.cpanel.net/img/fromwhmtowebsite08.png)

Note:

If you chose to use your hosting provider or registrar’s nameservers, be sure to configure the DNS records for your domain on their nameservers.

* * *

## Prepare cPanel

This section describes the minimum necessary configuration for an account to host a website.

* * *

#### Log in to cPanel

To quickly log in to your new site’s cPanel account, click _Go to cPanel_.

For more information and other methods to log in to a cPanel account, read our [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/) documentation.

![Newly created account example](https://docs.cpanel.net/img/fromwhmtowebsite09.png)

* * *

#### Create an email account

Note:

If you plan to use another mail provider for your site, you can skip this section.

To create an email account for your site, perform the following steps:

1. Navigate to cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts) interface ( _cPanel » Home » Email » Email Accounts_).
2. Click _Create_.
3. Enter a username in the appropriate text box.
4. Set a password in the appropriate text box.
5. Click _Edit Settings_.
6. Enter the storage space for the account in the appropriate text box.
7. Click _Create_.

For steps to test your email account, read our [Email Deliverability](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel) documentation.

![cPanel Email Accounts interface table](https://docs.cpanel.net/img/fromwhmtowebsite10.png)

![ interface](https://docs.cpanel.net/img/fromwhmtowebsite11.png)

* * *

## Prepare the website

This section describes how to publish a website on your account.

### Select a publishing method

Perform the steps for the publishing method that you plan to use.

* * *

#### Create a website with Sitejet Builder

If you plan to create a website with the [Sitejet Website Builder (Content Management System)](https://help.sitejet.io/article/536-overview-website-builder-cms), read our [_Sitejet Builder_](https://docs.cpanel.net/cpanel/domains/sitejet-builder/) interface ( _cPanel » Home » Domains » Sitejet Builder_) documentation.

![Sitejet Builder interface](https://docs.cpanel.net/img/fromwhmtowebsite12a.png)

* * *

#### Create a WordPress website

Note:

The [_Onboarding Assistant_](https://docs.cpanel.net/knowledge-base/cpanel-product/onboarding-assistant) automatically creates a WordPress® website for the new cPanel account if the user selects the _WordPress_ option.

If you plan to create a WordPress site, read our [_WP Toolkit_](https://docs.cpanel.net/cpanel/domains/wp-toolkit-for-cpanel/) interface ( _cPanel » Home » Domains » WP Toolkit_) documentation.

For information about how to install, configure, and manage WordPress sites with _WP Toolkit_, read Plesk’s [WP Toolkit](https://docs.plesk.com/en-US/obsidian/administrator-guide/website-management/wp-toolkit.73391/#) documentation.

For more information about WordPress, visit the [WordPress Support](https://wordpress.com/support/) website.

![WP Toolkit interface](https://docs.cpanel.net/img/fromwhmtowebsite12b.png)

* * *

#### Create a placeholder page with Site Publisher

If you plan to upload your own site content, you should display a placeholder page while you build your site. To set up a placeholder for your account, read our [_Site Publisher_](https://docs.cpanel.net/cpanel/domains/site-publisher) interface ( _cPanel » Home » Domains » Site Publisher_) documentation.

![Site Publisher interface](https://docs.cpanel.net/img/fromwhmtowebsite12c.png)

* * *

#### Upload your own content

To securely upload your own content to the website, perform the following steps:

1. Navigate to cPanel’s [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk) interface ( _cPanel » Home » Files » Web Disk_).
2. If you run Microsoft Windows® Vista, 7, 8, or 10, perform the following additional steps to enable Digest Authentication:
   - Click _Enable Digest Authentication_. A new window will appear.
   - Enter your cPanel account’s password.
   - Click _OK_.
3. Click _Configure Client Access_ next to the system user email account.
4. Select your operating system.
5. Install the software.
6. Connect to your Web Disk account. It will now appear on your workstation as another drive.
7. Drag and drop content to your server as needed.


![cPanel Web Disk interface](https://docs.cpanel.net/img/fromwhmtowebsite13.png)

You can use the following interfaces to upload your content:

- cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_)
- cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_)
- cPanel’s [_FTP Accounts_](https://docs.cpanel.net/cpanel/files/ftp-accounts) interface ( _cPanel » Home » Files » FTP Accounts_)

* * *

## Perform additional steps

Now that your site is running, we recommend that you perform the following additional steps to secure and protect your server:

- Confirm that [AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl) has obtained an SSL certificate for your website.






Note:





After you secure your site with a certificate, be sure to update any WordPress installations to use `https:` secured locations instead of `http:` insecured locations.

- Create [reseller accounts](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/), [packages](https://docs.cpanel.net/whm/packages/add-a-package), and [feature lists](https://docs.cpanel.net/whm/packages/feature-manager) to simplify selling hosting plans to your customers.
- [Schedule and configure backups](https://docs.cpanel.net/whm/backup/backup-configuration) of your server.
- Run [EasyApache 4](https://docs.cpanel.net/whm/software/easyapache-4-interface) to select Apache and PHP modules for your server.
- [Update MySQL® or change to MariaDB®](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade) for your server’s databases.
- Set notification preferences for your [server](https://docs.cpanel.net/whm/server-contacts/contact-manager) and [websites](https://docs.cpanel.net/cpanel/preferences/account-preferences).
- Configure your server’s [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/) and [cPHulk](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) for security purposes.
- Purchase and install [KernelCare](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-kernelcare-license/) to manage your operating system’s kernel.


![WHM Manage AutoSSL interface](https://docs.cpanel.net/img/fromwhmtowebsite14.png)

#### Additional Documentation

* * *

- [Create a New Account](https://docs.cpanel.net/whm/account-functions/create-a-new-account/)
- [How to Create a Demo cPanel Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-demo-cpanel-account/)
- [How to Create a WHM Reseller Without an Associated Domain](https://docs.cpanel.net/knowledge-base/accounts/how-to-create-a-whm-reseller-without-an-associated-domain/)
- [How to Log in to Your Server or Account](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/)
- [The wwwacct Script](https://docs.cpanel.net/whm/scripts/the-wwwacct-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×