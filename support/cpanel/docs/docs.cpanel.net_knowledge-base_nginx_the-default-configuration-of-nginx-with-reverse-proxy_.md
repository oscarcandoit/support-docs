---
url: "https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/"
title: "The Default Configuration of NGINX with Reverse Proxy | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#main-content)

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
3. [NGINX®](https://docs.cpanel.net/knowledge-base/nginx/)
4. The Default Configuration of NGINX with Reverse Proxy


[nginx](https://docs.cpanel.net/tags/nginx/) [apache](https://docs.cpanel.net/tags/apache/) [server](https://docs.cpanel.net/tags/server/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [The Default Configuration of NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/)
[Overview](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#overview) [NGINX configuration changes](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#nginx-configuration-changes) [Apache port changes](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#apache-port-changes) [Apache mod\_remoteip](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#apache-mod_remoteip) [Configuration files](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#configuration-files) [CloudFlare®](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#cloudflare) [File access](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#file-access) [Log Files](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#log-files) [Piped logging](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#piped-logging) [Regular logging](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#regular-logging) - [Customize NGINX® with Reverse Proxy Configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/)
- [Caching with NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/)
- [NGINX® Troubleshooting](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/)
- [The ea-nginx Script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#installation-toggle)

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [The Default Configuration of NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/)
[Overview](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#overview) [NGINX configuration changes](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#nginx-configuration-changes) [Apache port changes](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#apache-port-changes) [Apache mod\_remoteip](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#apache-mod_remoteip) [Configuration files](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#configuration-files) [CloudFlare®](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#cloudflare) [File access](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#file-access) [Log Files](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#log-files) [Piped logging](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#piped-logging) [Regular logging](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/#regular-logging) - [Customize NGINX® with Reverse Proxy Configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/)
- [Caching with NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/)
- [NGINX® Troubleshooting](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/)
- [The ea-nginx Script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/)

## The Default Configuration of NGINX with Reverse Proxy

Last modified: _2025 February 4_

* * *

## Overview

This document describes the configuration changes made by [NGINX® with reverse proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/).

## NGINX configuration changes

When you install [NGINX with reverse proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/) on your server, the installation process makes several changes to your system. Most notably, the installation configures Apache to no longer act as the primary web server.

### Apache port changes

When you install cPanel & WHM’s version of NGINX with reverse proxy, the installation process changes your server’s Apache installation to use [different ports](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-configure-your-firewall-for-cpanel-services/). NGINX will proxy all requests to Apache.

Note:

The process will **only** change your Apache ports if your Apache configuration uses the default ports of `80` and `443`. It changes your Apache port to use the first available port under `1024`, which will usually be port `81`. It will also changes your Apache SSL port to be the first available port under `1024`, which will usually be port `443`. The installation **ignores** custom port numbers.

### Apache mod\_remoteip

The NGINX installation installs the Apache `mod_remoteip` module if it does not already exist.

When NGINX installs this package, it edits the proxy configuration files. This ensures that the system properly sets the `REMOTE_ADDR` variable to the correct IP address when requests are proxied to Apache.

This allows NGINX to securely proxy to Apache and prevents spoofed IP addresses via `mod_remoteip`.

- If you customized your `/var/cpanel/templates/apache2_4/ea4_main.local` file, then you **must** update the file based on the contents of the `/var/cpanel/templates/apache2_4/ea4_main.default` file.

- If you already installed the `mod_remoteip` module, we recommend that you remove the following entries from your include files:


  - `RemoteIPHeader`
  - `RemoteIPInternalProxy`

This ensures that your configuration uses the provided secure settings.

### Configuration files

The system creates the `/etc/nginx/conf.d/ea-nginx.conf` configuration file. NGINX uses `.conf` configuration files for direct configuration.

It also creates the following files when you install the `ea-nginx` package:

- `/etc/nginx/ea-nginx/settings.json`
- `/etc/nginx/ea-nginx/cache.json`

The `ea-nginx` script uses files that end in `.json` to specify the values when it generates configuration files.

The NGINX installation adds the following to the `/etc/nginx/conf.d/ea-nginx.conf` file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>map $host $CPANEL_APACHE_PROXY_IP {<br>        default 127.0.0.1;<br>    }  <br>map $host $CPANEL_APACHE_PROXY_PORT {<br>        default 81;<br>    }<br>``` |

## CloudFlare®

The NGINX installation configures the system to work properly with CloudFlare.

The system saves the CloudFlare configuration to the following location:

```bash
/etc/nginx/conf.d/includes-optional/cloudflare.conf
```

If your secure connections don’t appear in the SSL log, you can [change the SSL settings](https://support.cloudflare.com/hc/en-us/articles/200170416-End-to-end-HTTPS-with-Cloudflare-Part-3-SSL-options) in CloudFlare.

## File access

NGINX does **not** serve files that start with `.ht` by default. There may be other files that you want to restrict access to.

The easiest solution is to **not** include restricted-access files in the document root. However, if this is not possible, you can also [explicitly restrict access to files](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#restrict-file-access).

## Log Files

NGINX rotates logs with the `logrotate` utility. This means that WHM’s [_cPanel Log Rotation Configuration_](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration) interface ( _WHM » Home » Service Configuration » cPanel Log Rotation Configuration_) will **not** affect the NGINX log rotation. This activity will register in your user stats and bandwidth programs.

NGINX uses the cPanel & WHM default Apache log formats. It will **not** recognize any custom Apache log formats. You **cannot** manage NGINX logs in any interfaces that specifically displays Apache logs, such as WHM’s [_Log Rotation_](https://docs.cpanel.net/whm/service-configuration/log-rotation) interface ( _WHM » Home » Service Configuration » Log Rotation_).

Apache does **not** log any requests that NGINX proxies to it. These requests are **only** logged by NGINX.

Note:

The [`/usr/local/cpanel/scripts/runweblogs`](https://docs.cpanel.net/whm/scripts/whm-scripts/#runweblogs) script does **not** process logs for NGINX.

NGINX logs traffic for the `www` subdomain to the same location as non-`www` subdomains, which duplicates the Apache behavior. For example, it will log requests for `www.example.com` and `example.com` to the `/var/log/nginx/domains/example.com` file.

NGINX uses the same server block for both SSL and non-SSL requests. However, it handles requests differently depending on if you use piped logging or not.

### Piped logging

NGINX saves its log files to the following locations, where `domainname` represents the domain name:

- SSL — `/var/log/nginx/domains/domainname-ssl_log`
- Non-SSL — `/var/log/nginx/domains/domainname`
- Bandwidth — `/var/log/nginx/domains/domainname-bytes_log`

NGINX also logs requests to the following location:

```bash
/var/log/nginx/access.log
```

### Regular logging

Without piped logging, both SSL and non-SSL requests save to the same location. NGINX saves its log files to the following locations, where `domainname` represents the domain name:

- SSL and non-SSL — `/var/log/nginx/domains/domainname`


Note:




These files will also contain an extra column at the beginning, in `domainname:port` format.


- Bandwidth — `/var/log/nginx/domains/domainname-bytes_log`

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×