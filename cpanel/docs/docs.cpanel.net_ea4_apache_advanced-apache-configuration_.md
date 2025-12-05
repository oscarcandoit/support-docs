---
url: "https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/"
title: "Advanced Apache Configuration | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [EasyApache4](https://docs.cpanel.net/ea4/)
3. [Apache](https://docs.cpanel.net/ea4/apache/)
4. Advanced Apache Configuration


[apache](https://docs.cpanel.net/tags/apache/) [ea4](https://docs.cpanel.net/tags/ea4/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#overview)

* * *

[How it works](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#how-it-works)

* * *

[Modify the Apache configuration options](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#modify-the-apache-configuration-options)

* * *

[htaccess files](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#htaccess-files)

* * *

[PHP-FPM](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#php-fpm)

* * *

[CloudFlare®](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#cloudflare)

* * *

[Modify global Apache configuration](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#modify-global-apache-configuration)

* * *

[Modify Apache configuration directives via WHM](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#modify-apache-configuration-directives-via-whm)

* * *

[Modify Apache configuration files via WHM](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#modify-apache-configuration-files-via-whm)

* * *

[Modify Apache configuration via the command line with new conf files](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#modify-apache-configuration-via-the-command-line-with-new-conf-files)

* * *

[Modify the content of specific virtual hosts via the command line](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#modify-the-content-of-specific-virtual-hosts-via-the-command-line)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#overview)

* * *

[How it works](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#how-it-works)

* * *

[Modify the Apache configuration options](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#modify-the-apache-configuration-options)

* * *

[htaccess files](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#htaccess-files)

* * *

[PHP-FPM](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#php-fpm)

* * *

[CloudFlare®](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#cloudflare)

* * *

[Modify global Apache configuration](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#modify-global-apache-configuration)

* * *

[Modify Apache configuration directives via WHM](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#modify-apache-configuration-directives-via-whm)

* * *

[Modify Apache configuration files via WHM](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#modify-apache-configuration-files-via-whm)

* * *

[Modify Apache configuration via the command line with new conf files](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#modify-apache-configuration-via-the-command-line-with-new-conf-files)

* * *

[Modify the content of specific virtual hosts via the command line](https://docs.cpanel.net/ea4/apache/advanced-apache-configuration/#modify-the-content-of-specific-virtual-hosts-via-the-command-line)

* * *

## Advanced Apache Configuration

Last modified: _2025 June 13_

* * *

## Overview

EasyApache 4 provides several ways for you to customize your Apache configuration.

Important:

- Make certain that you **only** use the methods below to modify your Apache configuration. If you use a method that we do not support, cPanel & WHM and EasyApache 4 can overwrite your custom configuration.
- We **strongly** recommend that you read Apache’s [Configuration Files](https://httpd.apache.org/docs/current/configuring.html) documentation before you customize your Apache configuration.

## How it works

EasyApache 4 builds your global Apache configuration from the following components:

- The modules, options, and extensions that EasyApache 4 installs for Apache.
- Global configuration templates in the `/var/cpanel/templates/apache2_4/` directory.

EasyApache builds each `virtualhost` tag from the following components:

- Any custom templates in the `/var/cpanel/templates/apache2_4/` directory.
- The content of the `/etc/apache2/conf.d/userdata/` directory. This includes account information and domain-specific templates.

## Modify the Apache configuration options

### htaccess files

When Apache processes a file request, it searches for an `.htaccess` configuration file inside the file’s directory. If a `.htaccess` file exists for the directory, and Apache can read it, Apache uses the `.htaccess` file to modify the requested file’s configuration. For more information about how to use `.htaccess` files, read [Apache’s HTTP Server Tutorial](http://httpd.apache.org/docs/current/howto/htaccess.html).

Some events in the cPanel & WHM environment trigger an `.htaccess` syntax check, which will skip loading modules. To avoid errors from these modules, wrap any directives that come from them in an `<IfModules></IfModule>` block, as displayed in the following example:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br><IfModule mod_suphp.c><br>    suPHP_ConfigPath /etc<br></IfModule><br>``` |

### PHP-FPM

On servers that run PHP-FPM, in order to use the [`ErrorDocument`](https://httpd.apache.org/docs/current/mod/core.html#errordocument) directive, you **must** set the `ProxyErrorOverride` directive to `On` for your specific virtual host.

Important:

- A server that enables the `ProxyErrorOverride` directive will display different error behavior than servers that do **not** run PHP-FPM and those that do **not** enable the directive.
- We strongly recommend that you do **not** set the `ProxyErrorOverride` directive to `On` in a global include file. This may cause unexpected behavior.

For more information about PHP-FPM, read our [PHP-FPM documentation](https://docs.cpanel.net/knowledge-base/php-fpm/).

### CloudFlare®

Apache configures your system to work properly with Cloudflare.

The system saves the Cloudflare configuration to the following location:

```bash
/etc/apache2/conf.d/includes/cloudflare.conf
```

Apache also installs the `mod_remoteip` Apache module when you install the Apache web server. Apache **requires** this module to ensure that Cloudflare logs the correct IP address. You **cannot** uninstall the` mod_remoteip` Apache module.

If you do **not** want to use Cloudflare, run the following commands to create a touch file, rebuild, and restart Apache:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>touch /var/cpanel/no_apache_cloudflare<br>/usr/local/cpanel/scripts/rebuildhttpdconf<br>/usr/local/cpanel/scripts/restartsrv_httpd<br>``` |

## Modify global Apache configuration

To modify your global Apache configuration, use one or more of the following methods:

### Modify Apache configuration directives via WHM

Use WHM’s [_Global Configuration_](https://docs.cpanel.net/whm/service-configuration/global-configuration) interface ( _WHM_ » _Home_ » _Service Configuration_ » _Apache Configuration_ » _Global Configuration_) to modify global default Apache configuration directives.

### Modify Apache configuration files via WHM

Use WHM’s [_Include Editor_](https://docs.cpanel.net/whm/service-configuration/include-editor) interface ( _WHM_ » _Home_ » _Service Configuration_ » _Apache Configuration_ » _Include Editor_) to modify global or specific Apache configuration directives via include files.

### Modify Apache configuration via the command line with new conf files

To modify the Apache configuration via the command line, create custom configuration files in the `/etc/apache2/conf.d/` directory. Your new configuration files **must** meet the following requirements:

- Use the `.conf` file extension.
- Possess `root:root` ownership.
- Use `0600` permissions.

After you modify a `.conf` file, including by adding or removing the file, you **must** restart the Apache service with the `service httpd restart` command.

### Modify the content of specific virtual hosts via the command line

You can use the command line to add include files that modify the content of the virtual host containers in your Apache configuration. You may wish to do this to modify the configuration of an individual domain or a specific user’s domains.

For more information about how to modify your virtual host containers with include files via the command line, read our [Modify Apache Virtual Hosts with Include Files](https://docs.cpanel.net/ea4/apache/modify-apache-virtual-hosts-with-include-files) documentation.

#### Additional Documentation

* * *

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [The fix-web-vhost-configuration Script](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/)
- [The rebuildhttpdconf Script](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×