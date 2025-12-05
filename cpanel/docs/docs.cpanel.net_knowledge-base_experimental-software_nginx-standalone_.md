---
url: "https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/"
title: "NGINX® Standalone | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#main-content)

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
3. [Experimental Software](https://docs.cpanel.net/knowledge-base/experimental-software/)
4. NGINX® Standalone


[nginx](https://docs.cpanel.net/tags/nginx/) [apache](https://docs.cpanel.net/tags/apache/) [server](https://docs.cpanel.net/tags/server/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#overview)

* * *

[Requirements](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#requirements)

* * *

[Compatibility](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#compatibility)

* * *

[Install or uninstall NGINX](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#install-or-uninstall-nginx)

* * *

[Install](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#install)

* * *

[Uninstall](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#uninstall)

* * *

[The NGINX installation](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#the-nginx-installation)

* * *

[NGINX configuration changes](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#nginx-configuration-changes)

* * *

[Configuration files](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#configuration-files)

* * *

[Log Files](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#log-files)

* * *

[Redirects](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#redirects)

* * *

[Run NGINX](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#run-nginx)

* * *

[Configure a user](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#configure-a-user)

* * *

[Configure an application](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#configure-an-application)

* * *

[Limitations](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#limitations)

* * *

[Troubleshooting](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#troubleshooting)

* * *

[Could not build the server\_names\_hash](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#could-not-build-the-servernameshash)

* * *

[NGINX will not restart](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#nginx-will-not-restart)

* * *

[WordPress Multisite](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#wordpress-multisite)

* * *

[Can’t use Pretty Permalinks with WordPress](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#cant-use-pretty-permalinks-with-wordpress)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#overview)

* * *

[Requirements](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#requirements)

* * *

[Compatibility](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#compatibility)

* * *

[Install or uninstall NGINX](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#install-or-uninstall-nginx)

* * *

[Install](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#install)

* * *

[Uninstall](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#uninstall)

* * *

[The NGINX installation](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#the-nginx-installation)

* * *

[NGINX configuration changes](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#nginx-configuration-changes)

* * *

[Configuration files](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#configuration-files)

* * *

[Log Files](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#log-files)

* * *

[Redirects](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#redirects)

* * *

[Run NGINX](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#run-nginx)

* * *

[Configure a user](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#configure-a-user)

* * *

[Configure an application](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#configure-an-application)

* * *

[Limitations](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#limitations)

* * *

[Troubleshooting](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#troubleshooting)

* * *

[Could not build the server\_names\_hash](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#could-not-build-the-servernameshash)

* * *

[NGINX will not restart](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#nginx-will-not-restart)

* * *

[WordPress Multisite](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#wordpress-multisite)

* * *

[Can’t use Pretty Permalinks with WordPress](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#cant-use-pretty-permalinks-with-wordpress)

* * *

## NGINX® Standalone

Last modified: _2025 February 4_

* * *

## Overview

Note:

This document refers to NGINX® functionality when you install the `ea-nginx-standalone` package. This was our original version of NGINX and we renamed that package. For information about the newer, updated `ea-nginx` package, read our [NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/) documentation.

This document explains how to install NGINX Standalone on a server that runs cPanel & WHM and EasyApache 4. [NGINX](https://nginx.org/en/) is an open source web server that also provides a reverse proxy, load balancing, and caching. It functions very differently from Apache®. NGINX does **not** serve dynamic content unless you pass it through a proxy.

Experimental:

NGINX Standalone is **experimental**. You **must** install the [Experimental Repository](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/) to use it.

## Requirements

To install NGINX on your server, you must meet the following requirements:

- Run EasyApache 4.
- Install the [Experimental Repository](https://docs.cpanel.net/ea4/git-repositories/the-experimental-repository/). Use the following command to install this repository:



```bash
yum install ea4-experimental
```

- Possess `root` user access to the server.
- Use [PHP-FPM](https://docs.cpanel.net/knowledge-base/php-fpm/php-fastcgi-process-manager-php-fpm/) as the server’s PHP handler.
- Install the `ea-ruby27-mod_passenger` Apache module. When you install the `ea-nginx-standalone` module, the system will install this module and other necessary Ruby modules if they don’t already exist.






Note:





- If your system runs CentO6, install the `ea-ruby24-mod_passenger` Apache module.
- Phusion Passenger® functions the same in both NGINX and Apache.

### Compatibility

NGINX takes the place of Apache as the primary web server. The installation will move Apache away from its default ports in favor of NGINX.

For more information, read the [NGINX configuration changes](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#nginx-configuration-changes) section below.

Note:

You can still use Apache to serve dynamic content, but **must** proxy your requests to the server.

## Install or uninstall NGINX

### Install

Note:

If the Experimental Repository does **not** already exist on your server, install it with the following command:

```bash
yum install ea4-experimental
```

To install NGINX, run the following command on the command line:

```bash
yum --enablerepo=EA4-experimental install ea-nginx-standalone
```

### Uninstall

To uninstall NGINX, run the following command on the command line:

```bash
yum erase ea-nginx-standalone
```

## The NGINX installation

When you install cPanel & WHM’s version of NGINX, the installation process will change your server’s Apache installation to use different ports.

Note:

The process will only change your Apache ports if your Apache configuration uses the default ports of `80` and `443`.

When you install NGINX, the installation process installs the `ea-ruby27-mod_passenger` Apache module. This module is **required**.

The following features will work with NGINX without any further action by the user:

- Static content.





Note:




You **must** proxy any dynamic content to Apache.


- The MultiPHP system.
- Mailman.
- AutoSSL.
- Proxy subdomains and redirects.






Important:





The MultiPHP system and WordPress® will **only** work if you use PHP-FPM.


### NGINX configuration changes

When you install NGINX on your server, the installation process makes several changes to your system.

Most notably, the installation configures Apache to no longer act as the primary web server. Because of this, the NGINX installation will create proxies for MailMan and AutoSSL.

### Configuration files

The system creates the `/etc/nginx/conf.d/ea-nginx.conf` configuration file.

#### Custom configurations

Warning:

- Do **not** edit any of the files that NGINX owns. Changing these files may result in unexpected behavior.
- If you create custom configuration files, you may change NGINX behavior in undesired ways. For example, if your custom block matches the PHP block, the server may serve the source code instead of PHP.

If you want to customize the server blocks for NGINX, create an include file that ends in `.conf` in the appropriate location. A server block is the same thing as a virtual host in Apache.

Each server block will include the `.conf` files in the `/etc/nginx/conf.d/server-includes/` and `/etc/nginx/conf.d/server-includes-standalone/` directories.

For more information about server blocks, including examples, read NGINX’s [Server Block Examples](https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks/) documentation.

Note:

Do **not** use `cpanel-` as the prefix for any custom files you create.

#### Global configuration

Place any global `.conf` files that you create in the `/etc/nginx/conf.d/` directory.

If you want to adjust every server block on your server, create your `.conf` file in the `/etc/nginx/conf.d/server-includes/` directory.

Note:

Make certain that you also reference your `.conf` file with an `include` directive in the file that you want to use it in.

#### User configuration

Note:

In the following examples, `username` represents the username, and `domainname` represents the fully-qualified domain name.

This fully-qualified domain name must be one of the following:

- The server block’s main domain.
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

#### Apache configuration

The NGINX installation makes the following changes to your Apache configuration:

- Changes the Apache port to the first available port under `1024`. This will usually be port `81`. You must proxy any applications that are not static to Apache.
- Changes the Apache SSL port to the first available port under `1024`. This will usually be port `444`.





Note:




Your Apache ports will **only** change if your configuration uses the default ports `80` and `443`. The installation ignores custom port numbers.


- Adds the following to the `/etc/nginx/conf.d/ea-nginx.conf` file:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```go<br>map $host $CPANEL_APACHE_PROXY_IP {<br>    default 127.0.0.1;<br>}  <br>map $host $CPANEL_APACHE_PROXY_PORT {<br>    default 81;<br>}<br>``` |


#### File access

NGINX does **not** serve files that start with `.ht` by default. There may be other files that you want to restrict access to.

The easiest solution is to **not** include restricted-access files in the document root. However, if this is not possible, you can also explicitly restrict access to files.

For example, if you serve your website from a git repository, you may want to prevent access to the site’s `.git` directory. To do this, create a `.conf` file in the appropriate location and add the following commands to your file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>location ~ /\.git {<br>	   deny all;<br>	   log_not_found off;<br>	   access_log off;<br>	   return 404;<br>   }  <br>``` |

After you save the file, reload your server to activate the configuration change.

For more information, read the [NGINX Location Priority](https://docs.nginx.com/nginx/admin-guide/web-server/web-server/#location_priority) documentation.

#### CloudFlare®

The NGINX installation will detect if a domain uses CloudFlare and configure the system to work properly.

The system saves the CloudFlare configuration to the following location:

```bash
/etc/nginx/conf.d/includes-optional/cloudflare.conf
```

If your secure connections don’t appear in the SSL log, you can [change the SSL settings](https://support.cloudflare.com/hc/en-us/articles/200170416-End-to-end-HTTPS-with-Cloudflare-Part-3-SSL-options) in CloudFlare.

### Log Files

NGINX rotates logs with the `logrotate` utility. This means that WHM’s [_cPanel Log Rotation Configuration_](https://docs.cpanel.net/whm/service-configuration/cpanel-log-rotation-configuration) interface ( _WHM » Home » Service Configuration » cPanel Log Rotation Configuration_) will **not** affect the NGINX log rotation. This activity will register in your user stats and bandwidth programs.

NGINX uses the cPanel & WHM default Apache log formats. It will **not** recognize any custom Apache log formats. You **cannot** manage NGINX logs in any interfaces that specifically displays Apache logs, such as WHM’s [_Log Rotation_](https://docs.cpanel.net/whm/service-configuration/log-rotation) interface (WHM » Home » Service Configuration » Log Rotation\_). Apache does **not** log any requests that NGINX proxies to it.

NGINX logs traffic for the `www` subdomain to the same location as non-`www` subdomains, which duplicates the Apache behavior. For example, it will log requests for `www.example.com` and `example.com` to the `/var/log/nginx/domains/example.com` file.

NGINX uses the same server block for both SSL and non-SSL requests. However, it handles requests differently depending on if you use piped logging or not.

#### Piped logging

NGINX saves its log files to the following locations, where `domainname` represents the domain name:

- SSL — `/var/log/nginx/domains/domainname-ssl_log`
- Non-SSL — `/var/log/nginx/domains/domainname`
- Bandwidth — `/var/log/nginx/domains/domainname-bytes_log`

NGINX also logs requests to the following location:

```bash
/var/log/nginx/access.log
```

#### Regular logging

Without piped logging, both SSL and non-SSL requests save to the same location. NGINX saves its log files to the following locations, where `domainname` represents the domain name:

- SSL and non-SSL — `/var/log/nginx/domains/domainname`


Note:





These files will also contain an extra column at the beginning, in `domainname:port` format.

- Bandwidth — `/var/log/nginx/domains/domainname-bytes_log`

### Redirects

NGINX supports proxy subdomains and redirects.
To create a redirect, use cPanel’s [_Redirects_](https://docs.cpanel.net/cpanel/domains/redirects/) interface ( _Home » cPanel » Domains » Redirects_). These redirects differ from the Apache redirect behavior in the following ways:

- Redirects apply to the whole [server block](https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks/), not the exact fully qualified domain name (FQDN). If you set a redirect for one domain, it will also effect any other FQDN in the block.
- Redirects apply to both the `www` and any non-`www` subdomains, regardless of the behavior in Apache. You can change this behavior with [include files](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#use-include-files-to-change-redirect-behavior).
- Redirects do **not** change `HTTP` requests to `HTTPS` requests. To enable this behavior, use the _Force HTTPS Redirect_ option in cPanel’s [_Domains_](https://docs.cpanel.net/cpanel/domains/domains/) interface ( _Home » cPanel » Domains » Domains_).
- Redirects that point to an `index.html` file will also redirect the domain name both with and without a trailing slash. For example, NGINX will redirect both `example.com` and `example.com/`.






Note:





If the redirect matches another `index` file first, then it will serve that `index` file.

- NGINX **only** returns the `301` and `302` HTTP status codes.

Note:

You **cannot** use the Safari® web browser to log in to a [service subdomain](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains/). Use another browser, or log in with the service’s [port URL](https://docs.cpanel.net/knowledge-base/accounts/how-to-log-in-to-your-server-or-account/).

#### Use include files to change redirect behavior

You can use include files to force NGINX to redirect `www` domains to non-`www` domains, and vice versa. You **cannot** use these include files for parked domains or to redirect `HTTP` to `HTTPS`.

To do this, we created the following include files. You can create a symlink that points to one of the following files to alter the redirect behavior:

- `/etc/nginx/conf.d/includes-optional/force-non-www.conf`
- `/etc/nginx/conf.d/includes-optional/force-www.conf`

Warning:

- Do **not** use both of these files in your symlinks. This will create an infinite loop.
- You must run the [/usr/local/cpanel/scripts/ea-nginx script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/) command after you create your `.conf` file.

To set redirect behavior for all of a user’s domains, add the following symlink, where `redirect-file` represents one of the files above and `username` represents the user:

```bash
ln -s redirect-file /etc/nginx/conf.d/users/username/www-behavior.conf
```

To set redirect behavior for only specific domains, add the following symlink, where `redirect-file` represents one of the files above, `username` represents the user, and `domainname` represents the domain or subdomain:

```bash
ln -s redirect-file /etc/nginx/conf.d/users/username/domainname/www-behavior.conf
```

For example, to redirect `www.sub.example.com` to `sub.example.com` you might run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>mkdir -p /etc/nginx/conf.d/users/myuser/sub.example.com<br>ln -s /etc/nginx/conf.d/includes-optional/force-non-www.conf /etc/nginx/conf.d/users/myuser/sub.example.com/non-www-behavior.conf<br>``` |

### Run NGINX

To stop or restart NGINX, use the `/usr/local/cpanel/scripts/restartsrv_nginx` script.

We **strongly** recommend that you **only** use the cPanel script or WHM’s [_Service Manager_](https://docs.cpanel.net/whm/service-configuration/service-manager/) interface ( _WHM » Home » Service Configuration » Service Manager_) to restart NGINX.

To use the restart commands in CentOS 7 to restart NGINX, you **must** use the `reload` option. This option ensures a graceful restart:

```bash
systemctl reload nginx.service
```

For more information, read our [How to Restart Services](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-restart-services/) documentation.

### Configure a user

Note:

It may take your NGINX configuration several minutes to update if you make changes to your PHP version or PHP-FPM configuration, enable or disable PHP-FPM, or add WordPress.

The system uses the [/usr/local/cpanel/scripts/ea-nginx script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/) to make these changes. You do **not** need to run this script.

The system creates the `.conf` file in the following location, where `username` represents the username:

```bash
/etc/nginx/conf.d/users/username.conf
```

### Configure an application

You can use cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager) interface ( _Home » cPanel » Software » Application Manager_) to configure applications.

## Limitations

If one of your domains matches a proxy domain, the system will warn you that it will ignore conflicting duplicate entries. This conflict may result in unexpected behavior.

Warning:

- If you use NGINX and ModSecurity® 2, your [ModSecurity rules](https://docs.cpanel.net/whm/security-center/modsecurity-tools/) **only** apply when NGINX proxies the request to Apache.
- Any restrictions set in an `.htaccess` file will not apply. For example, if you password-protected a directory, the protection will not work.
- If you create an alias, make **certain** that your path’s location ends with a trailing slash (`/`). If your path does **not** end with a `/`, then your path is vulnerable to a [path traversal exploit](https://www.acunetix.com/vulnerabilities/web/path-traversal-via-misconfigured-nginx-alias/).
- For more information, read the [NGINX Security Advisories](http://nginx.org/en/security_advisories.html) documentation.

## Troubleshooting

### Could not build the server\_names\_hash

You may receive an error that resembles the following message:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```go<br>could not build the server_names_hash,<br>you should increase either server_names_hash_max_size: 512<br>or server_names_hash_bucket_size: 32<br>``` |

If you receive this error message, increase the value of the following directives in the `/etc/nginx/conf.d/ea-nginx.conf` and the `/etc/nginx/ea-nginx/settings.json` files:

- `server_names_hash_max_size`
- `server_names_hash_bucket_size`

For more information, read the [NGINX Server Names](http://nginx.org/en/docs/http/server_names.html) documentation.

### NGINX will not restart

If you used the `nginx` command to start NGINX, then the `/usr/local/cpanel/scripts/restartsrv_nginx` and `systemctl restart nginx.service` commands will not work. To correct this, perform the following steps:

1. Stop the service with the /usr/sbin/nginx -s stop command.
2. Restart NGINX with one of the following commands:
   - `/usr/local/cpanel/scripts/restartsrv_nginx start`
   - `systemctl start nginx.service`
   - `/etc/init.d/nginx start`

### WordPress Multisite

WordPress Multisite does **not** work with cPanel & WHM servers that use nginx.

### Can’t use Pretty Permalinks with WordPress

Installations of WordPress will **not** support Pretty Permalinks. To resolve this issue, add the following information to your NGINX configuration file, where `php##` represents the version of PHP your server runs and `1ed179754201ac2644e8c70140bacb23c7786484` represents the PHP-FPM socket though which WordPress runs:

Note:

- To obtain the correct PHP-FPM socket, run the following command where `username` represents the username:


```bash
awk -F ':' '/fastcgi_pass unix/ {gsub(/;/,""); print $2}' /etc/nginx/conf.d/users/username.conf
```

- Be sure to follow the instructions in the [Configure a user](https://docs.cpanel.net/knowledge-base/experimental-software/nginx-standalone/#configure-a-user) section of this document so NGINX does not overwrite your changes.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```bash<br>location /wordpress {<br>     try_files $uri $uri/ /wordpress/index.php?$args;<br>      location ~ \.php7?$ {<br>      include conf.d/includes-optional/cpanel-fastcgi.conf;<br>      fastcgi_pass unix:/opt/cpanel/ea-php##/root/usr/var/run/php-fpm/1ed179754201ac2644e8c70140bacb23c7786484.sock;<br>      error_page 502 503 /FPM_50x.html;<br>  }<br>}<br>``` |

#### Additional Documentation

* * *

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [Errors](https://docs.cpanel.net/cpanel/metrics/errors/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [The balance\_linked\_node\_quotas Script](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/)
- [The build\_mysql\_conf Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×