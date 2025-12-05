---
url: "https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/"
title: "SSL Storage Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/#main-content)

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
4. SSL Storage Manager


[ssl](https://docs.cpanel.net/tags/ssl/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/#overview)

* * *

[Apache’s Installed SSL Resources](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/#apaches-installed-ssl-resources)

* * *

[User Account SSL Resources](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/#user-account-ssl-resources)

* * *

[Resource Actions](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/#resource-actions)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/#overview)

* * *

[Apache’s Installed SSL Resources](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/#apaches-installed-ssl-resources)

* * *

[User Account SSL Resources](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/#user-account-ssl-resources)

* * *

[Resource Actions](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/#resource-actions)

* * *

## SSL Storage Manager

![](https://docs.cpanel.net/img/whm-icons/ssl_storage_manager.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/ssl-tls/ssl-storage-manager/)

Last modified: _2024 June 13_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

The _SSL Storage Manager_ interface allows system administrators to view detailed information about their SSL resources. System administrators can also delete the listed SSL resources.

## Apache’s Installed SSL Resources

This section displays the SSL resources that the system installed in the Apache configuration. These resources possess VirtualHost entries within the `httpd.conf` file, and users can implement the resources on their sites.

The table under the _Apache’s Installed SSL Resources_ heading displays information about the website and account owners:

- _Website_ — The website attached to the key and certificate. To view the key, click the magnifying glass icon (![GlassIcon](https://docs.cpanel.net/img/sslstoragemanagerglass.png)). A new interface will appear that allows you to copy and paste the information into a safe location. The information includes _resource information_, _raw text_, and _detailed information_.

- _Owner_ — The account that created the key and certificate.


## User Account SSL Resources

This section displays information about the available SSL resources. The table under the _User SSL Resources_ heading displays information about available keys, certificates, and certificate signing requests:

Note:

A key, certificate, and certificate signing request on the same row indicate that these resources use the same public key components.

- _Key_ — Your account’s available keys.

- _Certificates_ — Your account’s available certificates.

- _Certificate Signing Requests_ — Your account’s available certificate signing requests.


### Resource Actions

- To view an item, click the magnifying glass icon (![GlassIcon](https://docs.cpanel.net/img/sslstoragemanagerglass.png)). A new interface will appear that allows you to copy and paste the information into a safe location. The information includes _resource information_, _raw text_, and _detailed information_.

- To delete an item, click the delete icon (![GlassIcon](https://docs.cpanel.net/img/sslstoragemanagerdelete.png)). A new window will appear. Click _OK_ to delete, or click _Cancel_ to stop the action.


#### Additional Documentation

* * *

- [Generate an SSL Certificate and Signing Request](https://docs.cpanel.net/whm/ssl-tls/generate-an-ssl-certificate-and-signing-request/)
- [Install an SSL Certificate on a Domain](https://docs.cpanel.net/whm/ssl-tls/install-an-ssl-certificate-on-a-domain/)
- [Manage AutoSSL](https://docs.cpanel.net/whm/ssl-tls/manage-autossl/)
- [Manage SSL Hosts](https://docs.cpanel.net/whm/ssl-tls/manage-ssl-hosts/)
- [SSL/TLS Configuration](https://docs.cpanel.net/whm/ssl-tls/ssl-tls-configuration/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×