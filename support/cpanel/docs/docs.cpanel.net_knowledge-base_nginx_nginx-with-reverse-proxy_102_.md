---
url: "https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/"
title: "NGINX® with Reverse Proxy | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#main-content)

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
4. NGINX® with Reverse Proxy


[nginx](https://docs.cpanel.net/tags/nginx/) [apache](https://docs.cpanel.net/tags/apache/) [server](https://docs.cpanel.net/tags/server/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
[Overview](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#overview) [Stop or restart NGINX](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#stop-or-restart-nginx) [Configure a user](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#configure-a-user) [Configure an application](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#configure-an-application) [NGINX-specific packages](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#nginx-specific-packages) [Compression](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#compression) [HTTP2](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#http2) [NGINX JavaScript Module (NJS)](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#nginx-javascript-module-njs) - [The Default Configuration of NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/)
- [Customize NGINX® with Reverse Proxy Configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/)
- [Caching with NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/)
- [NGINX® Troubleshooting](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/)
- [The ea-nginx Script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#installation-toggle)

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
[Overview](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#overview) [Stop or restart NGINX](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#stop-or-restart-nginx) [Configure a user](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#configure-a-user) [Configure an application](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#configure-an-application) [NGINX-specific packages](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#nginx-specific-packages) [Compression](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#compression) [HTTP2](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#http2) [NGINX JavaScript Module (NJS)](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/#nginx-javascript-module-njs) - [The Default Configuration of NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/)
- [Customize NGINX® with Reverse Proxy Configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/)
- [Caching with NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/)
- [NGINX® Troubleshooting](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/)
- [The ea-nginx Script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/)

## NGINX® with Reverse Proxy

_Valid for versions 102 through 110_

#### Version:

#### [102](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/102/)

#### [112](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)

Last modified: _2025 February 10_

* * *

## Overview

Note:

- This document refers to NGINX® functionality when you install the `ea-nginx` package in either WHM’s [_NGINX Manager_](https://docs.cpanel.net/whm/software/nginx-manager/) interface ( _WHM » Home » Software » NGINX Manager_) or WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface ( _WHM » Home » Software » EasyApache 4_). This package is our production version of NGINX. For information about our previous, experimental version of NGINX, now our `ea-nginx-standalone` package, read our [NGINX Standalone](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/) documentation.
- This feature is **not** currently compatible with [the LiteSpeed Web Server](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-a-litespeed-web-server-license).

This document explains how to install [NGINX](https://nginx.org/en/), an open source web server that also provides a reverse proxy, load balancing, and caching, on a server that runs cPanel & WHM and EasyApache 4.

cPanel & WHM’s NGINX with reverse proxy passes dynamic content through a proxy to Apache®. This version of NGINX uses caching in order to serve content more quickly.

### Stop or restart NGINX

To stop or restart NGINX, use the `/usr/local/cpanel/scripts/restartsrv_nginx` script.

Warning:

Do **not** use the `nginx` command to stop or restart NGINX. If you do, you will have to [troubleshoot](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/#nginx-will-not-restart) to fix resultant problems.


We **strongly** recommend that you **only** use the cPanel script or WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_) to restart NGINX.

To use the restart commands in CentOS 7 to restart NGINX, you **must** use the `reload` option, as follows:

```bash
systemctl reload nginx.service
```

For more information, read our [How to Restart Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/) documentation.

### Configure a user

The system integrates NGINX into your user and domain changes.

The system uses the [`/usr/local/cpanel/scripts/ea-nginx script`](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/) to make these changes. You do **not** need to run this script.

The system creates the `.conf` file in the following location, where `username` represents the username:

```bash
/etc/nginx/conf.d/users/username.conf
```

### Configure an application

Use cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager) interface ( _Home » cPanel » Software » Application Manager_) to configure applications.

## NGINX-specific packages

We provide some additional packages that you can use with NGINX. These packages provide functionality that may otherwise be missing in the installation.

### Compression

We provide the gzip and Brotli packages to enable compression on NGINX. If you install one of these packages, it will enable that compression globally.

If you use compression with SSL/TLS requests, your compressed responses may be vulnerable to [BREACH](https://en.wikipedia.org/wiki/BREACH) attacks. To lower the risk of this type of attack, you can perform one of the following actions:

1. Do not send sensitive data in your HTTP responses.
2. Limit your responses to only use [secure samesite cookies](https://web.dev/samesite-cookies-explained/).

Remember:

cPanel’s [_Optimize Website_](https://docs.cpanel.net/cpanel/software/optimize-website/) interface ( _cPanel » Home » Software » Optimize Website_) does **not** work with NGINX. Any changes you make there do not affect your compression settings.


#### Brotli

To use Brotli, install the `ea-nginx-brotli` package in the _Additional Packages_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface _(WHM » Home » Software » EasyApache 4_).

You can use the `/etc/nginx/conf.d/brotli.conf` configuration file to configure your Brotli installation. For more information about configuring Brotli, read the [NGINX Brotli module](https://github.com/google/ngx_brotli/blob/master/README.md) documentation.

Note:

Some clients only support Brotli over HTTPS.


#### gzip

To use gzip, install the `ea-nginx-gzip` package in the _Additional Packages_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface _(WHM » Home » Software » EasyApache 4_).

You can use the `/etc/nginx/conf.d/gzip.conf` configuration file to configure your gzip installation. For more information about configuring gzip, read the [NGINX gzip module](http://nginx.org/en/docs/http/ngx_http_gzip_module.html) documentation.

### HTTP2

To use HTTP/2 with NGINX, you **must** install the `ea-nginx-http2` package. You can install this package in the _Additional Packages_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface _(WHM » Home » Software » EasyApache 4_).

When you install the `ea-nginx-http2` package, the system creates the `/etc/nginx/conf.d/http2.conf` file. This is a comment-only file that you can use to set your system’s HTTP/2 configuration. NGINX only supports HTTP/2 via SSL. NGINX [terminates the protocol](https://www.nginx.com/blog/7-tips-for-faster-http2-performance/#tip2terminate) when it sends a proxy request to Apache that uses HTTP/2. NGINX uses HTTP 1.1 to communicate with Apache.

Note:

We don’t require the [Apache `mod_http2` module](https://docs.cpanel.net/ea4/apache/apache-modules/apache-module-http2) if you wish to use HTTP/2 on a system that runs NGINX.

### NGINX JavaScript Module (NJS)

The NGINX JavaScript module (NJS) allows you to use NGINX’s JavaScript-based scripting language with your NGINX server. To use NJS, install the `ea-nginx-njs` package in the _Additional Packages_ section of WHM’s [_EasyApache 4_](https://docs.cpanel.net/whm/software/easyapache-4-interface/) interface _(WHM » Home » Software » EasyApache 4_).

You can use the `/etc/nginx/conf.d/njs.conf` configuration file to configure your NJS installation.

For more information, read the [NGINX NJS documentation](https://nginx.org/en/docs/njs/).

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×