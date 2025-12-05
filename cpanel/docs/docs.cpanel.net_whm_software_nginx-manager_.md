---
url: "https://docs.cpanel.net/whm/software/nginx-manager/"
title: "NGINX® Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/software/nginx-manager/#main-content)

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
3. [Software](https://docs.cpanel.net/whm/software/)
4. NGINX® Manager


[whmui](https://docs.cpanel.net/tags/whmui/) [nginx](https://docs.cpanel.net/tags/nginx/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/software/nginx-manager/#overview)

* * *

[Requirements](https://docs.cpanel.net/whm/software/nginx-manager/#requirements)

* * *

[Compatibility](https://docs.cpanel.net/whm/software/nginx-manager/#compatibility)

* * *

[Limitations](https://docs.cpanel.net/whm/software/nginx-manager/#limitations)

* * *

[Landing page](https://docs.cpanel.net/whm/software/nginx-manager/#landing-page)

* * *

[System Settings](https://docs.cpanel.net/whm/software/nginx-manager/#system-settings)

* * *

[User Settings](https://docs.cpanel.net/whm/software/nginx-manager/#user-settings)

* * *

[Uninstall](https://docs.cpanel.net/whm/software/nginx-manager/#uninstall)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/software/nginx-manager/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/software/nginx-manager/#overview)

* * *

[Requirements](https://docs.cpanel.net/whm/software/nginx-manager/#requirements)

* * *

[Compatibility](https://docs.cpanel.net/whm/software/nginx-manager/#compatibility)

* * *

[Limitations](https://docs.cpanel.net/whm/software/nginx-manager/#limitations)

* * *

[Landing page](https://docs.cpanel.net/whm/software/nginx-manager/#landing-page)

* * *

[System Settings](https://docs.cpanel.net/whm/software/nginx-manager/#system-settings)

* * *

[User Settings](https://docs.cpanel.net/whm/software/nginx-manager/#user-settings)

* * *

[Uninstall](https://docs.cpanel.net/whm/software/nginx-manager/#uninstall)

* * *

## NGINX® Manager

![](https://docs.cpanel.net/img/whm-icons/nginx_manager.svg)

_Valid for versions 112 through the latest version_

#### Version:

#### [102](https://docs.cpanel.net/whm/software/nginx-manager/102/)

#### [112](https://docs.cpanel.net/whm/software/nginx-manager/)

Last modified: _2025 February 4_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

WHM’s _NGINX® Manager_ allows you to install, uninstall, and manage your [NGINX with reverse proxy and caching](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/) server. You can also manage the caching on your server in this interface.

## Requirements

To install NGINX on your server, you **must** meet the following requirements:

- Run EasyApache 4.
- Possess `root` user access to the server.

Note:

- Previous versions of the `ea-nginx` package installed Apache’s Passenger package by default. If you want to use Passenger, you must install the `ea-apache24-mod-passenger` package. If Passenger already exists on your server, it will remain on your server.
- For more information, read our [Using Passenger Applications](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/) documentation.

### Compatibility

NGINX takes the place of Apache as the primary web server. The installation will change Apache’s default ports and assign those port numbers to NGINX.

For more information, read our [default NGINX configuration](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/) documentation.

Note:

If you do not want to proxy all of your content through Apache, you can use our [standalone version of NGINX](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/).

### Limitations

cPanel & WHM’s implementation of NGINX has the following limitations:

- If one of your domains matches a proxy domain, the system will warn you that it will ignore conflicting duplicate entries. This conflict may result in unexpected behavior.

- If you use NGINX and ModSecurity® 2, your [ModSecurity rules](https://docs.cpanel.net/whm/security-center/modsecurity-tools/) **only** apply when NGINX proxies the request to Apache.

- NGINX redirects any non-SSL IPv6 requests to use SSL. This ensures that any IPv6-only service subdomains will work correctly. If your client will not accept the hostname’s security certificate, we recommend that you use the subdomain’s fully-qualified domain name instead.

- For security reasons, NGINX will **not** serve any file with a name starting with `.ht`.

- cPanel’s [_Optimize Website_](https://docs.cpanel.net/cpanel/software/optimize-website/) interface ( _cPanel » Home » Software » Optimize Website_) will **not** affect NGINX.

- If you create a custom NGINX configuration that uses the NGINX `alias` directive, make **certain** that your path’s location ends with a trailing slash (`/`). If your path does **not** end with a `/`, then your path is vulnerable to a [path traversal exploit](https://www.acunetix.com/vulnerabilities/web/path-traversal-via-misconfigured-nginx-alias/). For more information, read the [NGINX Security Advisories](http://nginx.org/en/security_advisories.html) documentation.


## Landing page

Important:

This section of the interface **only** appears if NGINX is **not** installed on your server. If NGINX is already installed, the interface displays the [_System Settings_](https://docs.cpanel.net/whm/software/nginx-manager/#system-settings) tab.

To install NGINX on your server, click _Install_. A new interface will appear.

You can also use the EasyApache 4 interface, or run the following command on the command line as the `root` user:

| Operating System | Command |
| --- | --- |
| CentOS 7 | `yum install ea-nginx` |
| AlmaLinux OS and Rocky Linux™ | `dnf install ea-nginx` |
| Ubuntu® | `apt install --purge ea-nginx` |

Note:

We also provide the _cPanel Default NGINX®_ profile in WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface) interface ( _WHM » Home » Software » EasyApache 4_). This profile provides the _cPanel Default_ profile plus the necessary packages to run NGINX.


If the `ea-nginx-standalone` package exists on your server, the system will prompt you to install NGINX with reverse proxy caching. Click _Switch to NGINX Reverse Proxy Mode_ to install the package.

The system will install NGINX on your server and display a progress log. The installation process also configures all accounts on the server to use NGINX and to use caching by default.

When the installation completes, click _Go to NGINX Manager_ to return to the interface and open the _System Settings_ tab.

## System Settings

Use this section of the interface to manage your NGINX server. You can perform the following actions:

- _Use Caching by Default_ — When you set this toggle to _Enabled_, any new accounts that you create on the server will use caching by default. This setting also applies to any accounts which do not have their caching status explicitly set.






Note:




When you enable or disable the caching status for a user account, the system default setting will **no longer** apply.


- _Clear Cache for All Users_ — Clear the cache for all users on the system.
- _Restart NGINX_ — Restart NGINX on your server.
- _Rebuild Configuration_ — Rebuild the NGINX service’s configuration.
- _Reset Users to System Default_ — Reset all users on the system to the system’s default NGINX configuration.
- _Uninstall NGINX Reverse Proxy_ — Uninstall NGINX from your server.

## User Settings

Use this section of the interface to manage your users’ NGINX settings. This section of the interface displays a table with the user’s username and their NGINX caching status.

- To search for a specific user, use the _Search for account or owner_ text box.
- To change a user’s NGINX caching status, set the toggle next to the user’s username to either _Enabled_ or _Disabled_.
- To change the NGINX caching status for multiple users, select the checkbox next to the usernames you wish to change or select the checkbox above the table to select all visible users. Then, click _Enable NGINX Cache_ or _Disable NGINX Cache_.
- To clear a user’s cache, click _Clear Cache_ next to the user’s username.
- To clear the cache for multiple users, select the checkbox next to the usernames you wish to clear or select the checkbox above the table to select all visible users. Then, click _Clear NGINX Cache_.

Note:

If you want to allow your users to manage their own NGINX caching status, enable the _EA4 - Allow enabling/disabling NGINX caching (requires cPanel & WHM version 100 or later)_ option in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_). This option enables the _NGINX Caching_ toggle in the cPanel interface.

## Uninstall

To uninstall NGINX, use the _Uninstall NGINX Reverse Proxy_ option in the [_System Settings_](https://docs.cpanel.net/whm/software/nginx-manager/#system-settings) tab.

You can also run the following command on the command line as the `root` user:

| Operating System | Command |
| --- | --- |
| CentOS 7 | `yum uninstall ea-nginx` |
| AlmaLinux OS and Rocky Linux™ | `dnf uninstall ea-nginx` |
| Ubuntu® | `apt purge ea-nginx` |

#### Additional Documentation

* * *

- [Application Manager](https://docs.cpanel.net/cpanel/software/application-manager/)
- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [Install a Perl Module](https://docs.cpanel.net/whm/software/install-a-perl-module/)
- [Install Distro Packages](https://docs.cpanel.net/whm/software/install-distro-packages/)
- [Module Installers](https://docs.cpanel.net/whm/software/module-installers/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×