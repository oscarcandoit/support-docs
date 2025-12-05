---
url: "https://docs.cpanel.net/cpanel/domains/site-publisher/"
title: "Site Publisher | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/domains/site-publisher/#main-content)

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
4. Site Publisher


[cpanelui](https://docs.cpanel.net/tags/cpanelui/) [domains](https://docs.cpanel.net/tags/domains/) [sitepublisher](https://docs.cpanel.net/tags/sitepublisher/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/domains/site-publisher/#overview)

* * *

[Create or modify a Site Publisher website](https://docs.cpanel.net/cpanel/domains/site-publisher/#create-or-modify-a-site-publisher-website)

* * *

[Select a Domain](https://docs.cpanel.net/cpanel/domains/site-publisher/#select-a-domain)

* * *

[Site Publisher files](https://docs.cpanel.net/cpanel/domains/site-publisher/#site-publisher-files)

* * *

[Remove a Site Publisher website](https://docs.cpanel.net/cpanel/domains/site-publisher/#remove-a-site-publisher-website)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/domains/site-publisher/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/domains/site-publisher/#overview)

* * *

[Create or modify a Site Publisher website](https://docs.cpanel.net/cpanel/domains/site-publisher/#create-or-modify-a-site-publisher-website)

* * *

[Select a Domain](https://docs.cpanel.net/cpanel/domains/site-publisher/#select-a-domain)

* * *

[Site Publisher files](https://docs.cpanel.net/cpanel/domains/site-publisher/#site-publisher-files)

* * *

[Remove a Site Publisher website](https://docs.cpanel.net/cpanel/domains/site-publisher/#remove-a-site-publisher-website)

* * *

## Site Publisher

![](https://docs.cpanel.net/img/cpanel-icons/site_publisher.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/cpanel/domains/site-publisher/)

Last modified: _2024 May 22_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

This interface enables you to quickly create a simple website, even if you have never created a website before. When you use this interface, you will select an appropriate template for your website, and then enter the website content that the template requests.

For example, you can use this interface to create a simple website with your business’s information, or to create a placeholder page while you prepare a more elaborate website.

Note:

- For steps to upload your own content to the website, read our [From WHM to Website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/#upload-your-own-content) documentation.
- Hosting providers and third-party developers can create and add additional Site Publisher templates. For more information, read our [Guide to Site Publisher Templates](https://api.docs.cpanel.net/guides/guide-to-site-publisher-templates/guide-to-site-publisher-templates-template-files/) documentation.

## Create or modify a Site Publisher website

Note:

When you select an option, the interface automatically hides that section of the interface and displays the next section. To return to a section, click that section’s title.

To create or modify a Site Publisher website for one of your domains, perform the following steps:

1. Select a domain from the list of available domains, addon domains, and subdomains.
   - If you only own a single domain, or if you accessed this interface via a link after subdomain or addon domain creation, the system automatically selects that domain and proceeds to the next step.
   - For more information about domain selection, read the _Select a domain_ section of this document.
2. Select a template from the available options.
   - The _Select a Template_ section of this interface displays a preview image, name, and description for each available Site Publisher template.
   - If you selected a domain that already uses a Site Publisher website, the system preselects the current template.
3. Enter or update the desired website content.




Note:





The template that you select determines the content that you enter in the _Customize and Publish_ section.

4. Click _Publish_. A confirmation message will appear with a link to your new website.






Warning:





If the directory that will contain your Site Publisher website already contains other files or directories, the system will perform the following actions when you click _Publish_:



1. Back up the directory’s contents. For more information, read the _Site Publisher files_ section below.
2. Delete any existing files that use the same filenames as your new Site Publisher website’s files.
3. Save the new website’s files to the directory.

Note:

You can also click the following helpful links for other common tasks within your cPanel account:

- _Add an email account._ — Create and manage email addresses in cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts) interface ( _cPanel » Home » Email » Email Accounts_).
- _Manage my website’s files._ — Upload and manage files in cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_).
- _Connect to this website with Web Disk._ — Create Web Disk accounts in cPanel’s [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk) interface ( _cPanel » Home » Files » Web Disk_) to upload and manage files from your local computer.
- _Publish another Site Publisher website._ — Use this interface to create another Site Publisher website.

### Select a Domain

The _Select a Domain_ section of the interface lists the domain name and website directory (document root) for every domain that your cPanel account owns. If a domain currently uses a Site Publisher website, the interface also lists the website’s template’s name.

- Click the domain name to open the domain in a new browser window.
- Click the website directory to open that directory in cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_) in a new browser window.

If your cPanel account owns a large number of domains, the interface automatically paginates the table. Click the page numbers in the top right corner of the section to navigate between pages of domains, or use the _Search_ text box at the top of the list to search for a domain.

## Site Publisher files

When you publish a Site Publisher website, cPanel automatically performs the following actions:

1. The script saves a copy of the domain’s document root’s current contents as a tarball in the `/home/user/site_publisher/backups/` directory, where user represents your cPanel account’s username.






Note:





If the system encounters a file system or file quota error during this step, it will **not** save the tarball and will **not** publish the new Site Publisher website.

2. The system deletes any existing Site Publisher backups that are more than 30 days old.
3. The system generates the new Site Publisher website’s files and stores them in the domain’s document root.
   - If one of the new website’s files conflicts with an existing file, the system overwrites the existing file with the new file.
   - If the system encounters an error during this step, it restores the website’s original contents from the backup tarball and does **not** publish the new Site Publisher website.
   - The system saves configuration information for the new website in the `/home/user/site_publisher/configurations/` directory, where user represents your cPanel account’s username. It saves this file as the `home-user-public_html-example.com.json` file, where `home-user-public_html-example.com` represents the Site Publisher website’s target directory, with hyphens (`-`) instead of slashes (`/`).






     Important:





     The configuration file stores all of the data for your Site Publisher website. We **strongly** recommend that you do not modify this file directly. Instead, always use this interface to modify Site Publisher websites.

Your selected template determines the other files that your website uses. These files may include HTML files, images, or other types of files.

- For information about template development, read our [Guide to Site Publisher Templates](https://api.docs.cpanel.net/guides/guide-to-site-publisher-templates/guide-to-site-publisher-templates-template-files/) documentation.
- For more information about individual templates, contact your hosting provider or the template creator.

## Remove a Site Publisher website

You can use the _Site Publisher_ feature to create a temporary website while you create a permanent one with other publishing tools, such as [WordPress®](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/). When your new website is ready, you will need to remove the _Site Publisher_-generated website.

You will need to remove the Site Publisher-generated files manually. For more information, read our [How to Remove a Site Publisher Website](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-remove-a-site-publisher-website/) documentation.

#### Additional Documentation

* * *

- [Domains](https://docs.cpanel.net/cpanel/domains/domains/)
- [Create a New Domain](https://docs.cpanel.net/cpanel/domains/domains/create-a-new-domain/)
- [Dynamic DNS](https://docs.cpanel.net/cpanel/domains/dynamic-dns/)
- [Manage the Domain](https://docs.cpanel.net/cpanel/domains/domains/manage-the-domain/)
- [Redirects](https://docs.cpanel.net/cpanel/domains/redirects/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×