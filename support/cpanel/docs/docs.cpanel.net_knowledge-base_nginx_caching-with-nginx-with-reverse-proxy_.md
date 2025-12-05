---
url: "https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/"
title: "Caching with NGINX® with Reverse Proxy | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/#main-content)

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
4. Caching with NGINX® with Reverse Proxy


[nginx](https://docs.cpanel.net/tags/nginx/) [apache](https://docs.cpanel.net/tags/apache/) [server](https://docs.cpanel.net/tags/server/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [The Default Configuration of NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/)
- [Customize NGINX® with Reverse Proxy Configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/)
- [Caching with NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/)
[Overview](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/#overview) [Caching](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/#caching) [Custom cache keys](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/#custom-cache-keys) [Use htaccess to manage caching](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/#use-htaccess-to-manage-caching) [Third-party integration](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/#third-party-integration) - [NGINX® Troubleshooting](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/)
- [The ea-nginx Script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/#installation-toggle)

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [The Default Configuration of NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/)
- [Customize NGINX® with Reverse Proxy Configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/)
- [Caching with NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/)
[Overview](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/#overview) [Caching](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/#caching) [Custom cache keys](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/#custom-cache-keys) [Use htaccess to manage caching](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/#use-htaccess-to-manage-caching) [Third-party integration](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/#third-party-integration) - [NGINX® Troubleshooting](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/)
- [The ea-nginx Script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/)

## Caching with NGINX® with Reverse Proxy

Last modified: _2025 February 10_

* * *

## Overview

This document covers information about caching in [NGINX® with reverse proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/).

## Caching

NGINX reverse proxies to Apache and caches all requests by default.

NGINX caches data on a per-user basis. The cache file is stored in the following location, where `type` represents the type of caching, and `username` represents the username:

```bash
/var/cache/ea-nginx/proxy/username
```

NGINX with reverse proxy uses the type `proxy` for the `proxy_pass` directive. The cache directories use `700` permissions, restricted to the `nobody` and `root` users.

Your application’s requests for dynamic content should include cache control headers. If they do not, the server may return cached responses that do **not** apply to the user.

To correct this issue, perform one of the following actions:

- Disable caching for the user in WHM’s [_NGINX Manager_](https://docs.cpanel.net/whm/software/nginx-manager/) interface ( _WHM » Home » Software » NGINX Manager_).
- Modify your web application to use the appropriate headers so NGINX does not cache the request.

### Custom cache keys

You can set your NGINX cache to generate separate caches for different conditions. For example, you may want to cache mobile and non-mobile requests separately.

To configure your cache to use separate caches in varying conditions, set the `$CACHE_KEY_PREFIX` in the `/etc/nginx/conf.d/includes-optional/set-CACHE_KEY_PREFIX.conf` file. We include this file by default, with the option to cache mobile requests separately commented out.

For more information about proxies in NGINX, read the [NGINX Proxy](http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_key) documentation.

### Use htaccess to manage caching

You can also use your `.htaccess` files to manage caching in NGINX. If you use this method, your `.htaccess` file will set the header in your requests to handle caching for any requests your application does not set.

Your applications should set appropriate headers to ensure that sensitive data is not cached. If you cannot update your application to send appropriate headers, then you can use your `.htaccess` file. The entry in your `.htaccess` file might resemble the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```bash<br># Broken-app does not set proper headers and sends private data. This needs to be updated in the application and this section removed.<br><If "%{REQUEST_URI} =~ m#/payment-methods/#"><br>    <IfModule mod_headers.c><br>        Header set Pragma "no-cache"<br>        Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"<br>        Header set Expires "Thu, 1 Jan 1970 00:00:00 GMT"<br>    </IfModule><br></If><br>``` |

Important:

If your application does not use proper headers for sensitive data, it is a security risk.

Add the following to your `.htaccess` file to enable caching for common static files:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br><filesMatch ".(ico|pdf|flv|jpg|jpeg|png|gif|js|css|swf)$"><br>Header set Cache-Control "max-age=3600, public"<br></filesMatch><br>``` |

Remember:

Your application’s requests for dynamic content should include cache control headers. If they do not, the server may return cached responses that do **not** apply to the user.

## Third-party integration

Third-party integrators can use the following information to determine if NGINX caching is active. You can **only** use caching if you install the `ea-nginx` package. We also display the caching status in the _NGINX Caching_ section of the [_cPanel Interface_](https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/).

If the `/etc/nginx/ea-nginx/cache.json` file exists, you can determine if caching is enabled or disabled based on the following information:

- If the `enabled` key exists in the following file, its value determines if NGINX caching is enabled. In this example, `user` represents the username:



```bash
/var/cpanel/userdata/user/nginx-cache.json
```

- If the `enabled` key exists in the following global configuration file, its value determines if NGINX caching is enabled. In this example, `user` represents the username:



```bash
/etc/nginx/ea-nginx/cache.json
```

- If the `enabled` key does **not** exist in either file, then caching is enabled by default.

If the `/etc/nginx/ea-nginx/cache.json` file does **not** exist, then `ea-nginx` is **not** installed on the server.

If the `/etc/nginx/ea-nginx/enable.standalone` file exists, the `ea-nginx-standalone` package is installed, and caching is **not** enabled on the server.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×