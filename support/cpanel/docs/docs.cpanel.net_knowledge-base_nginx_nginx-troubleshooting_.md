---
url: "https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/"
title: "NGINX® Troubleshooting | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/#main-content)

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
4. NGINX® Troubleshooting


[nginx](https://docs.cpanel.net/tags/nginx/) [apache](https://docs.cpanel.net/tags/apache/) [server](https://docs.cpanel.net/tags/server/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [The Default Configuration of NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/)
- [Customize NGINX® with Reverse Proxy Configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/)
- [Caching with NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/)
- [NGINX® Troubleshooting](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/)
[Overview](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/#overview) [Could not build proxy\_headers hash](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/#could-not-build-proxy_headers-hash) [NGINX will not restart](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/#nginx-will-not-restart) - [The ea-nginx Script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/#installation-toggle)

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [The Default Configuration of NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/)
- [Customize NGINX® with Reverse Proxy Configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/)
- [Caching with NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/)
- [NGINX® Troubleshooting](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/)
[Overview](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/#overview) [Could not build proxy\_headers hash](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/#could-not-build-proxy_headers-hash) [NGINX will not restart](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/#nginx-will-not-restart) - [The ea-nginx Script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/)

## NGINX® Troubleshooting

Last modified: _2025 February 10_

* * *

## Overview

This document covers troubleshooting for common problems with [NGINX® with reverse proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/).

## Could not build proxy\_headers hash

You may receive an error that resembles the following message:

```bash
nginx: [emerg] could not build proxy_headers_hash, you should increase proxy_headers_hash_bucket_size
```

If you receive this error message, one of your `.conf` files contains a `proxy_set_header` directive that sets a very long header name. To correct this error, add the following directive to the `.conf` file that contains the long `proxy_set_header` directive, where `number` represents a header length:

```bash
proxy_headers_hash_bucket_size number;
```

You must add this directive **immediately before** the long `proxy_set_header` directive.

## NGINX will not restart

If you used the `nginx` command to start NGINX, then the `/usr/local/cpanel/scripts/restartsrv_nginx` and `systemctl restart nginx.service` commands will not work. To correct this, perform the following steps:

1. Stop the service with the `/usr/sbin/nginx -s stop` command.

2. Restart NGINX with one of the following commands:
   - `/usr/local/cpanel/scripts/restartsrv_nginx start`
   - `systemctl start nginx.service`
   - `/etc/init.d/nginx start`

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×