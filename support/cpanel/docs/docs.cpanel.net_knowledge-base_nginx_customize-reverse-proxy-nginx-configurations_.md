---
url: "https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/"
title: "Customize NGINX® with Reverse Proxy Configurations | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#main-content)

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
4. Customize NGINX® with Reverse Proxy Configurations


[nginx](https://docs.cpanel.net/tags/nginx/) [apache](https://docs.cpanel.net/tags/apache/) [server](https://docs.cpanel.net/tags/server/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [The Default Configuration of NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/)
- [Customize NGINX® with Reverse Proxy Configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/)
[Overview](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#overview) [Global Configuration settings](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#global-configuration-settings) [Global configuration files](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#global-configuration-files) [Server blocks](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#server-blocks) [User configuration](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#user-configuration) [Custom server configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#custom-server-configurations) [Manage Cloudflare configuration](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#manage-cloudflare-configuration) [Restrict file access](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#restrict-file-access) [Increase NGINX worker processes](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#increase-nginx-worker-processes) [Add the X-Cache-Status header to NGINX responses](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#add-the-x-cache-status-header-to-nginx-responses) - [Caching with NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/)
- [NGINX® Troubleshooting](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/)
- [The ea-nginx Script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#installation-toggle)

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [The Default Configuration of NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/)
- [Customize NGINX® with Reverse Proxy Configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/)
[Overview](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#overview) [Global Configuration settings](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#global-configuration-settings) [Global configuration files](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#global-configuration-files) [Server blocks](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#server-blocks) [User configuration](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#user-configuration) [Custom server configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#custom-server-configurations) [Manage Cloudflare configuration](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#manage-cloudflare-configuration) [Restrict file access](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#restrict-file-access) [Increase NGINX worker processes](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#increase-nginx-worker-processes) [Add the X-Cache-Status header to NGINX responses](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#add-the-x-cache-status-header-to-nginx-responses) - [Caching with NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/)
- [NGINX® Troubleshooting](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/)
- [The ea-nginx Script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/)

## Customize NGINX® with Reverse Proxy Configurations

Last modified: _2025 November 10_

* * *

## Overview

You can customize [NGINX® with reverse proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/) in a number of ways.

## Global Configuration settings

You can set the following directives for NGINX in WHM’s [_Global Configuration_](https://docs.cpanel.net/whm/service-configuration/global-configuration/) interface ( _WHM » Home » Service Configuration » Apache Configuration » Global Configuration_). The following values in the _Global Configuration_ interface correspond to the following directives:

- _Keep-Alive_ — This directive corresponds to the [`keepalive`](http://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive) directive. If you set this value to `On`, NGINX uses a value of `32`. If you want to use a different value, set the `keepalive` value to a valid number in the `/etc/nginx/ea-nginx/settings.json` file.
- _Keep-Alive Timeout_ — This directive corresponds to the [`keepalive_timeout`](http://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive_timeout) directive. NGINX **only** uses the value set in WHM’s _Global Configuration_ interface.
- _Max Keep-Alive Requests_ — This directive corresponds to the [`keepalive_requests`](http://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive_requests) directive. NGINX **only** uses the value set in WHM’s _Global Configuration_ interface.






Note:





If you set this value to `Unlimited` in the _Global Configuration_ interface, then NGINX uses a value of `1000`.


## Global configuration files

Place any global `.conf` files that you create in the `/etc/nginx/conf.d/` directory.

For example, if you want to adjust every [server block](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#server-blocks) on your server, create your `.conf` file in the `/etc/nginx/conf.d/server-includes/` directory.

Note:

Make certain that you also reference your `.conf` file with an `include` directive in the file that you want to use it in.

## Server blocks

If you want to customize the server blocks for NGINX, create an include file that ends in `.conf` in the appropriate location. A server block is the same thing as a virtual host in Apache.

Each server block will include the `.conf` files in the `/etc/nginx/conf.d/server-includes/` directory.

For more information about server blocks, including examples, read NGINX’s [Serving Static Content](https://nginx.org/en/docs/beginners_guide.html#static) documentation.

Note:

Do **not** use `cpanel-` as the prefix for any custom files you create.

## User configuration

Note:

In the following examples, `username` represents the username, and `domainname` represents the fully-qualified domain name.

This fully-qualified domain name must be one of the following:

- The [server block’s](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#server-blocks) main domain.
- The server block’s subdomain for addon domains and their subdomains.
- The server block’s subdomain for subdomains that are not addon domains.

To customize every server block that a user owns, create your `.conf` file in following directory:

```bash
/etc/nginx/conf.d/users/username
```

To customize a specific server block for a specific domain, create your `.conf` file in the following directory:

```bash
/etc/nginx/conf.d/users/username/domainname/
```

To customize an addon domain, use the subdomain related to it:

```bash
/etc/nginx/conf.d/users/username/addondomain.domainname/*.conf
```

## Custom server configurations

Warning:

- Do **not** edit any of the files that NGINX owns. Changing these files may result in unexpected behavior.
- If you create custom configuration files, you may change NGINX behavior in undesired ways. For example, if your custom block matches the PHP block, the server may serve the source code instead of PHP.

To customize your NGINX configuration **before** you install the `ea-nginx` package, you can create the following files:

- `/var/nginx/ea-nginx/settings.json`
- `/var/nginx/ea-nginx/cache.json`

Important:

If these files exist when you [install NGINX](https://docs.cpanel.net/whm/software/nginx-manager/) or rebuild your NGINX configuration, the system will copy them to the `/etc/nginx/ea-nginx/settings.json` and `/etc/nginx/ea-nginx/cache.json` files respectively, then delete the `/var/nginx/ea-nginx/settings.json` and `/var/nginx/ea-nginx/cache.json` files. You can also edit the `/etc/nginx/ea-nginx/settings.json` and `/etc/nginx/ea-nginx/cache.json` files directly after you install NGINX.

We also support the following directives in the `/var/nginx/ea-nginx/settings.json` file:

- [`keepalive_time`](http://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive_time)


Note:





No Apache equivalent exists for the `keepalive_time` value.

- [`worker_shutdown_timeout`](http://nginx.org/en/docs/ngx_core_module.html#worker_shutdown_timeout)
- [`worker_processes`](http://nginx.org/en/docs/ngx_core_module.html#worker_processes)

For more information about how to set `keepalive_time` values in WHM’s [_Global Configuration_](https://docs.cpanel.net/whm/service-configuration/global-configuration/) interface ( _WHM » Home » Service Configuration » Apache Configuration » Global Configuration_), read the [Global Configuration settings](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/#global-configuration-settings) section.

Important:

If you create these files, they **must** contain valid JSON. Invalid JSON files may cause your installation to fail.

## Manage Cloudflare configuration

By default, NGINX configures Cloudflare® proxies in your `/etc/nginx/conf.d/users/example.conf` file.

To **disable** this configuration and **exclude** Cloudflare® proxies from your `/etc/nginx/conf.d/users/example.conf` file, add the `include_cloudflare` directive to your `/etc/nginx/ea-nginx/settings.json` file and set it to `0` or `false` \- for example, `include_cloudflare: false`. Then, save the file and restart NGINX with one of the following methods:

- Rebuild NGINX with the _Rebuild Configuration_ option in WHM’s [_NGINX Manager_](https://docs.cpanel.net/whm/software/nginx-manager/#system-settings) interface ( _WHM » Home » Software » NGINX Manager_).
- Run the [`/usr/local/cpanel/scripts/ea-nginx config`](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#configure-nginx-users) script. You **must** use the `--all` option.

If you do **not** add the `include_cloudflare` directive or set it to `1` or `true` before restarting NGINX, the system will automatically configure Cloudflare proxies in your `/etc/nginx/conf.d/users/example.conf` file.

## Restrict file access

You can restrict file access by creating a `.conf` file in the appropriate location and adding exclusion commands to it. For example, if you serve your website from a git repository, you may want to prevent access to the site’s `.git` directory, you would add the following commands to a `.conf` file placed in the appropriate location:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>location ~ /\.git {<br>       deny all;<br>       log_not_found off;<br>       access_log off;<br>       return 404;<br>   }  <br>``` |

After you save the file, reload your server to activate the configuration change.

For more information, read the [NGINX Location Priority](https://docs.nginx.com/nginx/admin-guide/web-server/web-server/#location_priority) documentation.

## Increase NGINX worker processes

To increase the maximum number of worker processes NGINX can run at one time, increase the [`worker_processes`](https://nginx.org/en/docs/ngx_core_module.html#worker_processes) value. To do this, perform the following steps:

1. Open the `/etc/nginx/ea-nginx/settings.json` configuration file with your preferred text editor. We **strongly** suggest making a backup copy of the file before proceeding.
2. Locate the line that contains the `worker_processes` value. The line will resemble the following example:


```bash
    worker_processes 1
```

3. Increase the value.






Note:





If you do not have a target value, we recommend doubling the current value.

4. Save your changes, then run the following command:



```bash
nginx -t
```



If you receive a message that resembles the following example, you have successfully updated your configuration:



```bash
       nginx: the configuration file /etc/nginx/ea-nginx/settings.json syntax is ok
       nginx: configuration file /etc/nginx/ea-nginx/settings.json test is successful
```



If you do not, check that you have **only** updated the `worker_processes` value, and **not** any formatting.
5. [Restart NGINX.](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/#stop-or-restart-nginx)

Your worker processes will now be able to keep more connections open at one time.

## Add the X-Cache-Status header to NGINX responses

To track which responses are being served from your cache, add the `X-Cache-Status` header to NGINX responses with the following steps:

1. Open the `/etc/nginx/ea-nginx/cache.json` file with your preferred text editor.
2. Locate the `x_cache_header` value. It will resemble the following example:


```bash
    "x_cache_header": false,
```

3. Edit the `x_cache_header` value to be `true`, as follows:



```bash
"x_cache_header": true,
```





Important





Do **not** remove the comma (`,`) when you edit the value.

4. Rebuild NGINX with the _Rebuild Configuration_ option in WHM’s [_NGINX Manager_](https://docs.cpanel.net/whm/software/nginx-manager/#system-settings) interface ( _WHM » Home » Software » NGINX Manager_).

Your responses will now contain an `$upstream_cache_status` that will help you determine how your server is responding to queries. To learn more about this status and what it means, read NGINX’s [Caching Guide](https://blog.nginx.org/blog/nginx-caching-guide).

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×