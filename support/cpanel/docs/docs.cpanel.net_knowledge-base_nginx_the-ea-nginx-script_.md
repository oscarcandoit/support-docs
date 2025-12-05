---
url: "https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/"
title: "The ea-nginx Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#main-content)

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
4. The ea-nginx Script


[nginx](https://docs.cpanel.net/tags/nginx/) [apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [The Default Configuration of NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/)
- [Customize NGINX® with Reverse Proxy Configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/)
- [Caching with NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/)
- [NGINX® Troubleshooting](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/)
- [The ea-nginx Script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/)
[Overview](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#overview) [Run the script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#run-the-script) [Options](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#options) [Configure NGINX users](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#configure-nginx-users) [Remove NGINX users](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#remove-nginx-users) [Configure a user NGINX cache](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#configure-a-user-nginx-cache) [Configure the system NGINX cache](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#configure-the-system-nginx-cache) [Clear the NGINX cache](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#clear-the-nginx-cache) [Additional options](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#additional-options)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#installation-toggle)

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [The Default Configuration of NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/the-default-configuration-of-nginx-with-reverse-proxy/)
- [Customize NGINX® with Reverse Proxy Configurations](https://docs.cpanel.net/knowledge-base/nginx/customize-reverse-proxy-nginx-configurations/)
- [Caching with NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/caching-with-nginx-with-reverse-proxy/)
- [NGINX® Troubleshooting](https://docs.cpanel.net/knowledge-base/nginx/nginx-troubleshooting/)
- [The ea-nginx Script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/)
[Overview](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#overview) [Run the script](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#run-the-script) [Options](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#options) [Configure NGINX users](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#configure-nginx-users) [Remove NGINX users](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#remove-nginx-users) [Configure a user NGINX cache](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#configure-a-user-nginx-cache) [Configure the system NGINX cache](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#configure-the-system-nginx-cache) [Clear the NGINX cache](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#clear-the-nginx-cache) [Additional options](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#additional-options)

## The ea-nginx Script

Last modified: _2025 February 4_

* * *

## Overview

Important:

This script **only** works with the EasyApache 4 implementation of NGINX®.


The `/usr/local/cpanel/scripts/ea-nginx` script manages your NGINX configuration. This script will configure or remove an NGINX user, reload the user configuration, and manage the cache. To learn more about NGINX with cPanel & WHM, read our [NGINX Manager](https://docs.cpanel.net/whm/software/nginx-manager/) and [NGINX with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/) documentation.

This script creates the user’s configuration file in the following location:

Note:

In the following example, `username` represents the username.

```bash
/etc/nginx/conf.d/users/username.conf
```

## Run the script

To use this script, run the following command as the `root` user:

```bash
/usr/local/cpanel/scripts/ea-nginx [options]
```

Note:

This script’s available options change, depending on how you use the script. For more information, read the [Options](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#options) section below.


## Options

This script accepts the following options, depending on the action required:

Note:

In the following tables, `user` represents the cPanel username.

### Configure NGINX users

To configure a user for NGINX, run the following command:

```bash
/usr/local/cpanel/scripts/ea-nginx config  [options]
```

You can use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `user` | Configure a specific cPanel account username for NGINX. <br>Note:<br>- You **must** pass either the `user` or `--all` option, but not both.<br>- This option also clears the user's cache. | `config user` |
| `--all` | Configure all cPanel accounts for NGINX. <br>Note:<br>- You **must** pass either the `user` or `--all` option, but not both.<br>- This option builds the user configurations in parallel.<br>- To configure the `--all` option to **always** build the user configuration serially, create the `/etc/nginx/ea-nginx/serial_config_mode` touch file. | `config --all` |
| `--no-reload` | Do not immediately reload the user’s NGINX configuration. <br>Important:<br>- You can **only** use this option with the `config` or `remove` options.<br>- You **must** pass the [reload](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#additional-options) option by itself when you're ready to load the changes into your NGINX configuration. | `config user --no-reload` |
| `--serial` | Rebuild the user configurations serially rather than in parallel. <br>Note:<br>You can **only** use this option with the `--all` option. | `config --all --serial` |
| `--global` | Only rebuild global NGINX configurations. This option also executes any scripts in the `/etc/nginx/ea-nginx/config-scripts/global/` directory. | `config --global` |

### Remove NGINX users

To remove a user from NGINX, run the following command:

```bash
/usr/local/cpanel/scripts/ea-nginx remove  [options]
```

You can use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `user` | Remove a user from your NGINX configuration. | `remove user` |
| `--no-reload` | Do not immediately reload the user’s NGINX configuration. <br>Important:<br>- You can **only** use this option with the `config` or `remove` options.<br>- You **must** pass the [reload](https://docs.cpanel.net/knowledge-base/nginx/the-ea-nginx-script/#additional-options) option by itself when you're ready to load the changes into your NGINX configuration. | `config user --no-reload` |

### Configure a user NGINX cache

To configure a cPanel user’s NGINX caching, run the following command:

```bash
/usr/local/cpanel/scripts/ea-nginx cache user [options]
```

You can use the following options with this script :

| Options | Description | Example |
| --- | --- | --- |
| `--reset` | Remove a specific cPanel user’s cache configuration and use the system’s configuration. <br>Note:<br>You **must** pass either the `--reset` or `--enabled` option, but not both. | `--reset` |
| `--enabled` | Enable or disable the cPanel user’s cache. You can set the following values: <br>- `1` — Enable the user’s cache. <br>- `0` — Disable the user’s cache.<br>Note:<br>- You **must** pass either the `--reset` or `--enabled` option, but not both.<br>- This option also clears the user's cache. | `--enabled=1` |
| `--no-rebuild` | Do not reload NGINX immediately or rebuild the NGINX configuration. <br>Note:<br>You **must** pass the `config` option when you’re ready to rebuild the changes to your NGINX configuration. | `--no-rebuild` |

### Configure the system NGINX cache

To configure the system’s NGINX caching, run the following command:

```bash
/usr/local/cpanel/scripts/ea-nginx cache --system [options]
```

You can use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `--reset` | Sets the system’s configuration to default values. <br>Note:<br>You **must** pass either the `--reset` or `--enabled` option, but not both. | `--reset` |
| `--enabled` | Enable or disable the system’s cache. You can set the following values: <br>- `1` — Enable the system’s cache. <br>- `0` — Disable the system’s cache.<br>Note:<br>You **must** pass either the `--reset` or `--enabled` option, but not both. | `--enabled=1` |
| `--no-rebuild` | Do not reload NGINX immediately or rebuild the NGINX configuration. <br>Note:<br>You **must** pass the `config` option when you’re ready to rebuild the changes to your NGINX configuration. | `--no-rebuild` |

### Clear the NGINX cache

To clear a user’s NGINX cache, run the following command:

```bash
/usr/local/cpanel/scripts/ea-nginx clear_cache [options]
```

You can use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `user` | Clear the NGINX cache for one or more users. <br>Note:<br>You **must** pass either the `user` or `--all` option, but not both. | `clear_cache user1 user2` |
| `--all` | Clear the NGINX cache for all users on the system. | `clear_cache --all` |

### Additional options

To perform additional actions with this script, run the following command:

```bash
/usr/local/cpanel/scripts/ea-nginx  [option]
```

You can also use the following options with this script:

| Options | Description | Example |
| --- | --- | --- |
| `help [option]` | Display the script’s help information.<br>Note:<br>If you specify an option, **only** that option’s help information will appear. | `help reload` |
| `hint [option]` | Display the abbreviated help information.<br>Note:<br>If you specify an option, **only** that option’s hint information will display. | `hint reload` |
| `reload` | Reload your NGINX configuration.<br>Note:<br>- You **must** pass this option if you passed the `--no-reload` option when configuring the NGINX system or users.<br>- This option also clears the user's cache. | `reload` |

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×