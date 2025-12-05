---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-remove-a-site-publisher-website/"
title: "How to Remove a Site Publisher Website | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-remove-a-site-publisher-website/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. How to Remove a Site Publisher Website


[sitepublisher](https://docs.cpanel.net/tags/sitepublisher/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-remove-a-site-publisher-website/#overview)

* * *

[Remove the Site Publisher-generated files\_](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-remove-a-site-publisher-website/#remove-the-site-publisher-generated-files)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-remove-a-site-publisher-website/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-remove-a-site-publisher-website/#overview)

* * *

[Remove the Site Publisher-generated files\_](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-remove-a-site-publisher-website/#remove-the-site-publisher-generated-files)

* * *

## How to Remove a Site Publisher Website

Last modified: _2020 December 10_

* * *

## Overview

You can use the [_Site Publisher_](https://docs.cpanel.net/cpanel/domains/site-publisher/) feature ( _cPanel » Home » Domains » Site Publisher_) to create a temporary website while you create a permanent one with other publishing tools, such as [WordPress®](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/). When your new website is ready, you will need to remove the _Site Publisher_-generated website.

This document describes how to manually remove the _Site Publisher_-generated files.

## Remove the Site Publisher-generated files\_

To remove the _Site Publisher_-generated files from a domain or subdomain on an account, perform the following steps:

1. Navigate to cPanel’s [_Site Publisher_](https://docs.cpanel.net/cpanel/domains/site-publisher/) interface ( _cPanel » Home » Domains » Sile Publisher_).
2. Locate the desired domain or subdomain.
3. Click the appropriate _Website Directory_. The [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface will appear.
4. Locate and remove the following files and directories, where `username` represents the account’s username:




|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```go<br>/home/username/site_publisher/<br>/home/username/public_html/assets/<br>/home/username/public_html/css/<br>/home/username/public_html/font-awesome/<br>/home/username/public_html/img/<br>/home/username/public_html/js/<br>/home/username/public_html/COPYRIGHT<br>/home/username/public_html/LICENSE.txt<br>/home/username/public_html/sitemap.xml<br>/home/username/public_html/index.html<br>``` |







Warning:




If your new website uses **any** of the same directory names as the _Site Publisher_-generated website, do **not** delete those directories. Instead, manually delete the _Site Publisher_-generated files from those directories. You can use the file timestamps to determine those files.



#### Additional Documentation

* * *

- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Configure Your Firewall for cPanel & WHM Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/)
- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×