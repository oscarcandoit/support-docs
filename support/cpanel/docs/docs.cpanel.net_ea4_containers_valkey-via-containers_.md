---
url: "https://docs.cpanel.net/ea4/containers/valkey-via-containers/"
title: "Valkey via Containers | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/containers/valkey-via-containers/#main-content)

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
4. Valkey via Containers


[ea4](https://docs.cpanel.net/tags/ea4/) [containers](https://docs.cpanel.net/tags/containers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/containers/valkey-via-containers/#overview)

* * *

[Install Valkey](https://docs.cpanel.net/ea4/containers/valkey-via-containers/#install-valkey)

* * *

[Set up Valkey inside containers](https://docs.cpanel.net/ea4/containers/valkey-via-containers/#set-up-valkey-inside-containers)

* * *

[Configure Valkey in a container](https://docs.cpanel.net/ea4/containers/valkey-via-containers/#configure-valkey-in-a-container)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/containers/valkey-via-containers/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/containers/valkey-via-containers/#overview)

* * *

[Install Valkey](https://docs.cpanel.net/ea4/containers/valkey-via-containers/#install-valkey)

* * *

[Set up Valkey inside containers](https://docs.cpanel.net/ea4/containers/valkey-via-containers/#set-up-valkey-inside-containers)

* * *

[Configure Valkey in a container](https://docs.cpanel.net/ea4/containers/valkey-via-containers/#configure-valkey-in-a-container)

* * *

## Valkey via Containers

Last modified: _2024 September 10_

* * *

## Overview

This document explains how to set up [Valkey™](https://valkey.io/) in an EasyApache 4 container. Valkey is a distributed memory-caching system forked from Redis 7.2.4 as a replacement. This document **only** applies to the EasyApache 4-provided Valkey package.

We provide Valkey 7.2 for use with containers.

You can **only** install container-based packages on systems that use [EasyApache 4’s containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#setting-up-containers) and run AlmaLinux OS, Rocky Linux™, or Ubuntu®.

If your system runs [CloudLinux™](http://localhost:1313/installation-guide/system-requirements-cloudlinux/), they provide a method to [install containers with CageFS](https://cloudlinux.zendesk.com/hc/en-us/articles/13261545905052-ea-podman-in-CageFS). However, we do **not** support this method.

Note:

In this documentation, `container-name` represents the name of your Valkey container. You can find the containers’ names with either the `registered` or `running` options of the [`/usr/local/cpanel/scripts/ea-podman` script](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/).


## Install Valkey

Note:

The following steps must be performed as the `root` user.

To install Valkey in a container on a system that runs EasyApache 4, you must first set up [EasyApache 4 containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#setting-up-containers) on your system.

After you set up containers on your system, install the `ea-valkey72` package to add Valkey to your system.

Then, run one of the following commands to install the Valkey package on your server:

To install Valkey on AlmaLinux or Rocky Linux, run the following command:

```bash
dnf install -y ea-valkey72
```

To install Valkey on Ubuntu, run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>apt install ea-podman-repo<br>apt update<br>apt install ea-valkey72<br>``` |

## Set up Valkey inside containers

To set up Valkey to run inside a container, perform the following steps:

1. Log in to the cPanel user account via SSH. You can log in to the account via SSH using one of the following methods:
   - The command line.
   - cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel/) interface ( _cPanel » Home » Advanced » Terminal_).
2. Run the following command to set up Valkey inside your container:



```bash
/usr/local/cpanel/scripts/ea-podman install ea-valkey72
```

3. Run the following command to retrieve the container’s name. You will need this name to perform any further actions.



```bash
/usr/local/cpanel/scripts/ea-podman containers
```


For more information, read our [`/usr/local/cpanel/scripts/ea-podman` script](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/) documentation.

## Configure Valkey in a container

Note:

- cPanel users **must** have [shell access](https://docs.cpanel.net/whm/account-functions/modify-an-account/#privileges) to configure Valkey in a container.
- The cPanel account’s shell access **must** use the _Normal Shell\*_ option in WHM’s [_Manage Shell Access_](https://docs.cpanel.net/whm/account-functions/manage-shell-access/) interface ( _WHM » Home » Account Functions » Manage Shell Access_). The user **cannot** use the Valkey container with the _Jailed_ option.

When you install Valkey into a container, it creates a directory in the `~/ea-podman.d/container-name` directory in the user’s `home` directory. The system creates the `valkey.sock` socket when it sets up Valkey.

To use Valkey with your applications, direct your application to use the `~/ea-podman.d/container-name/valkey.sock` socket.

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