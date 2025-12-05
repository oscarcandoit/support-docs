---
url: "https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/"
title: "Apache mod_userdir Tweak | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#main-content)

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
3. [Security Center](https://docs.cpanel.net/whm/security-center/)
4. Apache mod\_userdir Tweak


[security](https://docs.cpanel.net/tags/security/) [apache](https://docs.cpanel.net/tags/apache/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#overview)

* * *

[About this module](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#about-this-module)

* * *

[Enable access](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#enable-access)

* * *

[Example](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#example)

* * *

[Security Implications](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#security-implications)

* * *

[Warnings](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#warnings)

* * *

[Enable protection](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#enable-protection)

* * *

[The Symlink Race Condition Protection option](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#the-symlink-race-condition-protection-option)

* * *

[Disabled protection](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#disabled-protection)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#overview)

* * *

[About this module](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#about-this-module)

* * *

[Enable access](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#enable-access)

* * *

[Example](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#example)

* * *

[Security Implications](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#security-implications)

* * *

[Warnings](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#warnings)

* * *

[Enable protection](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#enable-protection)

* * *

[The Symlink Race Condition Protection option](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#the-symlink-race-condition-protection-option)

* * *

[Disabled protection](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/#disabled-protection)

* * *

## Apache mod\_userdir Tweak

![](https://docs.cpanel.net/img/whm-icons/apache_mod_userdir_tweak.svg)

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)

Last modified: _2024 September 18_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to disable the Apache `mod_userdir` module’s functionality for your users.

Warning:

- We **strongly** recommend that you **disable** this access for most of your users. Before you use this interface, make certain that you read the _Security Implications_ and _Warnings_ sections below.

- If you enable Apache’s `ruby24-mod_passenger` or `ruby27-mod_passenger` module in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_), the system disables the Apache `mod_userdir` module by default.

- You **must** enable this feature to allow accounts to use shared SSL certificates. For more information about shared certificates, read our [Guide to SSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/) documentation.


## About this module

The Apache `mod_userdir` module allows for visitors to access a user’s website via a URL that contains that user’s username. For example, the following URLs point to the `username` directory:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>https://host.example.com/~username<br>https://example.net/~username  <br>https://192.168.0.20/~username<br>``` |

Most servers use the Apache `mod_userdir` module as a temporary URL system that allows users to view their websites. This temporary URL system functions even if the system does not possess a configured DNS or the domain does not yet point to the server.

Note:

When you enable the Apache `mod_userdir` module, **any** virtual host can access any website that uses the same IP address. It does **not** function only with the hostname.


## Enable access

To enable `mod_userdir` access, perform the following steps:

1. Select the _Enable `mod_userdir` Protection_ checkbox.
2. To enable `mod_userdir` functionality for specific hosts, select the appropriate _Exclude Protection_ checkboxes.






Important:




This action allows **all** users to access content on the host via the Apache `mod_userdir` module. We recommend that you only enable `mod_userdir` functionality on the DefaultHost.


3. To only allow `mod_userdir` functionality for specific additional users to access these hosts, enter their usernames in the _Additional Users_ text box.

   - Resellers can use this feature to allow their customers to access their own websites before DNS information propagates.
   - To enter multiple users, separate each account name with a space.
4. Click _Save_.

Note:

To allow your users to access their own accounts through this module, but not circumvent bandwidth limits, select the _Exclude Protection checkbox for the DefaultHost (nobody)_ host.


Warning:

Do **not** select the _Exclude Protection_ checkbox on a user’s domain if you only wish to allow an individual user to access their site with a `mod_userdir` URL.


### Example

You own the following three cPanel accounts:

- Arthur’s cPanel account (`arthur`) owns `arthurexample.com`
- Betty’s cPanel account (`betty`) owns `bettyexample.com`
- Charles’ cPanel account (`charles`) owns `charlesexample.com`

Arthur’s domain resolves, but Betty’s and Charles’ domains do not yet resolve.

To enable `mod_userdir` protection for the server to deny one user the ability to use another user’s bandwidth, select the _Enable `mod_userdir` Protection_ checkbox.

However, if you still want to allow Betty and Charles to use Arthur’s domain to see their sites, perform the following steps:

1. Do _not_ select the checkbox next to `arthurexample.com` (Arthur)
2. Enter `betty charles` in the _Additional Users_ text box.
3. Click _Save_.

Betty and Charles can browse their sites with the following URLs:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>https://arthurexample.com/~betty<br>https://arthurexample.com/~charles<br>``` |

## Security Implications

We **strongly** recommend that you restrict `mod_userdir` functionality for most of your users. `mod_userdir` can expose potential security issues.

- The system accounts for bandwidth per-host rather than per-user. If a user access another user’s content via `mod_userdir`, then the server will not record their bandwidth usage correctly. This can also potentially allow for one user to use the bandwidth of another.

When you disable `mod_userdir` protection for a host, we recommend that you do **not** exclude the entire host, but rather exclude only specific users via the _Additional Users_ text box.

## Warnings

### Enable protection

Before you enable the Apache `mod_userdir` module, make certain that you understand the following information:

- Java servlets do **not** work with `mod_userdir`-based URLs because Tomcat requires you to add additional directives to the virtual host.





Important:




For more information about how to use Tomcat with cPanel & WHM, read our [Tomcat via Containers](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/) documentation.


- The following PHP handlers do not allow you to use the Apache `mod_userdir` module.

  - PHP via CGI.
  - FastCGI.
  - PHP-FPM.
- `open_basedir` protection restricts PHP’s access to the home directory of the user who owns the base domain, **not** the home directory of the user account that a visitor accesses. If you enable `open_basedir` protection in WHM’s [_MultiPHP INI Editor_](https://docs.cpanel.net/whm/software/multiphp-ini-editor/) interface ( _WHM » Home » Software » MultiPHP INI Editor_), visitors **cannot** access some sites via the `mod_userdir` module.
- Websites that use `the mod_rewrite` or other directives in their `.htaccess` files will **not** function correctly when visitors view them through `mod_userdir` URLs.
- If you enable Apache’s `mod_ruid2` module, then the `mod_userdir` module will **not** function correctly. For more information, read our [Apache Module: ModRuid2](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-ruid2/) documentation.





Warning:




Under certain conditions, a user can attack another user’s account if they access a malicious script through a `mod_userdir` URL.



To use Apache’s `mod_userdir` module, perform the following actions:

- Make **certain** that the `mod_suphp module` is installed in the **Apache Modules** section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_).
- Select _suphp_ for each version of PHP installed on your system in the _PHP Handlers_ section of WHM’s [_MultiPHP Manager_](https://docs.cpanel.net/whm/software/multiphp-manager-for-whm/) interface ( _WHM » Home » Software » MultiPHP Manager_).

### The Symlink Race Condition Protection option

The following table describes when the Symlink Race Condition Protection option blocks `mod_userdir` access:

| Condition | `mod_userdir` access | Example URL |
| --- | --- | --- |
| The requested URL includes a file and does not belong to the owner of the file. | Blocked. | `example.com/~username/file` |
| The requested URL includes a file and an IP address that belongs to another account. | Blocked. | `192.168.0.20/~username/file` |
| The requested URL contains a directory. | Not blocked. | `example.com/~username/dir` |
| You wish to access the server’s hostname. | Not blocked. | `host.example.com/~username` |

### Disabled protection

Before you disable `mod_userdir` protection, make certain that you understand the following information:

- While this WHM feature allows you to restrict `mod_userdir` functionality, it does **not** remove the module itself. Some [PCI compliance](https://docs.cpanel.net/knowledge-base/security/pci-compliance-and-software-versions/) scans may still detect it.
- This feature does **not** list IP addresses because the `mod_userdir` module uses virtual hosts.

  - You **cannot** use IP addresses to configure this feature.
  - If you do not protect the default host, you can access the server’s main IP address through the `mod_userdir` module in **most** cases.
  - If you attempt to provide protection on a dedicated IP address, the site’s contents will still display when protection is enabled. To disable this behavior, open the `/etc/apache2/conf.d/includes/post_virtualhost_global.conf` file with a text editor and add the following line:


    ```perl
    UserDir disabled
    ```

#### Additional Documentation

* * *

- [Compiler Access](https://docs.cpanel.net/whm/security-center/compiler-access/)
- [Configure Security Policies](https://docs.cpanel.net/whm/security-center/configure-security-policies/)
- [Host Access Control](https://docs.cpanel.net/whm/security-center/host-access-control/)
- [Manage External Authentications](https://docs.cpanel.net/whm/security-center/manage-external-authentications/)
- [ModSecurity® Vendors](https://docs.cpanel.net/whm/security-center/modsecurity-vendors/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×