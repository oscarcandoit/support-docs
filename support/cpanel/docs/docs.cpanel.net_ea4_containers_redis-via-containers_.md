---
url: "https://docs.cpanel.net/ea4/containers/redis-via-containers/"
title: "Redis via Containers | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/containers/redis-via-containers/#main-content)

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
3. [Containers](https://docs.cpanel.net/ea4/containers/)
4. Redis via Containers


[ea4](https://docs.cpanel.net/tags/ea4/) [containers](https://docs.cpanel.net/tags/containers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/containers/redis-via-containers/#overview)

* * *

[Install Redis via containers](https://docs.cpanel.net/ea4/containers/redis-via-containers/#install-redis-via-containers)

* * *

[Set up Redis inside containers](https://docs.cpanel.net/ea4/containers/redis-via-containers/#set-up-redis-inside-containers)

* * *

[Configure Redis in a container](https://docs.cpanel.net/ea4/containers/redis-via-containers/#configure-redis-in-a-container)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/containers/redis-via-containers/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/containers/redis-via-containers/#overview)

* * *

[Install Redis via containers](https://docs.cpanel.net/ea4/containers/redis-via-containers/#install-redis-via-containers)

* * *

[Set up Redis inside containers](https://docs.cpanel.net/ea4/containers/redis-via-containers/#set-up-redis-inside-containers)

* * *

[Configure Redis in a container](https://docs.cpanel.net/ea4/containers/redis-via-containers/#configure-redis-in-a-container)

* * *

## Redis via Containers

Last modified: _2024 February 14_

* * *

## Overview

This document explains how to set up [Redis®](https://redis.io/) in an EasyApache 4 container. Redis is a distributed memory-caching system. This document **only** applies to the EasyApache 4-provided Redis package.

We provide Redis version 6.2 for use with containers.

You can **only** install container-based packages on systems that use [EasyApache 4’s containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#setting-up-containers) and run AlmaLinux OS, Rocky Linux™, or Ubuntu®.

If your system runs [CloudLinux™](http://localhost:1313/installation-guide/system-requirements-cloudlinux/), they provide a method to [install containers with CageFS](https://cloudlinux.zendesk.com/hc/en-us/articles/13261545905052-ea-podman-in-CageFS). However, we do **not** support this method.

Note:

In this documentation, `container-name` represents the name of your Redis container. You can find the containers’ names with either the `registered` or `running` options of the [`/usr/local/cpanel/scripts/ea-podman` script](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/).


## Install Redis via containers

To install Redis in a container on a system that runs EasyApache 4, you must first set up [EasyApache 4 containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#setting-up-containers) on your system.

After you set up containers on your system, install the `ea-redis62` package to add Redis to your system.

## Set up Redis inside containers

To set up Redis to run inside a container, perform the following steps:

1. Log in to the cPanel user account via SSH. You can log in to the account via SSH using one of the following methods:
   - The command line.
   - WHM’s [_Terminal_](https://docs.cpanel.net/whm/server-configuration/terminal-in-whm/) interface ( _WHM » Home » Server Configuration » Terminal_).
   - cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel/) interface ( _cPanel » Home » Advanced » Terminal_).
2. Run the following command:



```bash
/usr/local/cpanel/scripts/ea-podman install ea-redis62
```

3. Run the following command to retrieve the container’s name. You will need this name to perform any further actions.



```bash
/usr/local/cpanel/scripts/ea-podman containers
```


For more information, read our [`/usr/local/cpanel/scripts/ea-podman` script](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/) documentation.

## Configure Redis in a container

Note:

- cPanel users **must** have shell access to configure Redis in a container.
- The cPanel account’s shell access **must** use the _Normal Shell\*_ option in WHM’s [_Manage Shell Access_](https://docs.cpanel.net/whm/account-functions/manage-shell-access/) interface ( _WHM » Home » Account Functions » Manage Shell Access_). The user **cannot** use the Redis container with the _Jailed_ option.

When you install Redis into a container, it creates a directory in the `~/ea-podman.d/container-name` directory in the user’s `home` directory. The system creates the `redis.sock` socket when it sets up Redis.

To use Redis with your applications, direct your application to use the `~/container-name/redis.sock` socket.

#### Additional Documentation

* * *

- [EasyApache 4 Interface](https://docs.cpanel.net/whm/software/easyapache-4-interface/)
- [MultiPHP INI Editor for WHM](https://docs.cpanel.net/whm/software/multiphp-ini-editor/)
- [MultiPHP Manager for cPanel](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/)
- [The rebuild\_phpconf Script](https://docs.cpanel.net/whm/scripts/the-rebuild_phpconf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×