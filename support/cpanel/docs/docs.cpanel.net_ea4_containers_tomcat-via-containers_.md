---
url: "https://docs.cpanel.net/ea4/containers/tomcat-via-containers/"
title: "Tomcat via Containers | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#main-content)

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
4. Tomcat via Containers


[ea4](https://docs.cpanel.net/tags/ea4/) [containers](https://docs.cpanel.net/tags/containers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#overview)

* * *

[Install Tomcat via containers](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#install-tomcat-via-containers)

* * *

[On the command line](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#on-the-command-line)

* * *

[Set up Tomcat inside containers](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#set-up-tomcat-inside-containers)

* * *

[Configure Tomcat in a container](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#configure-tomcat-in-a-container)

* * *

[Default configuration](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#default-configuration)

* * *

[Interact with your Tomcat container](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#interact-with-your-tomcat-container)

* * *

[Deploy applications in a Tomcat container](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#deploy-applications-in-a-tomcat-container)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#overview)

* * *

[Install Tomcat via containers](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#install-tomcat-via-containers)

* * *

[On the command line](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#on-the-command-line)

* * *

[Set up Tomcat inside containers](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#set-up-tomcat-inside-containers)

* * *

[Configure Tomcat in a container](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#configure-tomcat-in-a-container)

* * *

[Default configuration](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#default-configuration)

* * *

[Interact with your Tomcat container](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#interact-with-your-tomcat-container)

* * *

[Deploy applications in a Tomcat container](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/#deploy-applications-in-a-tomcat-container)

* * *

## Tomcat via Containers

Last modified: _2024 December 2_

* * *

## Overview

This document explains how to set up Apache Tomcat® in an EasyApache 4 container. This document **only** applies to the EasyApache 4-provided Tomcat package.

You can **only** install container-based packages on systems that use [EasyApache 4’s containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#setting-up-containers) and run AlmaLinux OS, Rocky Linux™, or Ubuntu®.

If your system runs [CloudLinux™](http://localhost:1313/installation-guide/system-requirements-cloudlinux/), they provide a method to [install containers with CageFS](https://cloudlinux.zendesk.com/hc/en-us/articles/13261545905052-ea-podman-in-CageFS). However, we do **not** support this method.

We provide Tomcat versions [10.0](https://github.com/CpanelInc/ea-tomcat100/blob/main/SOURCES/README.md) and [10.1](https://github.com/CpanelInc/ea-tomcat101/blob/main/SOURCES/README.md) for use with containers. Tomcat 10.0 is currently end-of-life (EOL) but will continue to function.

Note:

In this documentation, `container-name` represents the name of your Tomcat container. You can find the names of your containers with either the `registered` or `running` options of the [`/usr/local/cpanel/scripts/ea-podman` script](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/).


Important:

You **must** log in with SSH as the user. You cannot use the `su -` or `sudo -E` commands to run this script.


## Install Tomcat via containers

To install Tomcat in a container on a system that runs EasyApache 4, you must first set up [EasyApache 4 containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#setting-up-containers) on your system.

After you set up containers on your system, your system administrator must install the `ea-tomcat101` package to add Tomcat to your system.

### On the command line

Use one of the following commands to install the Tomcat package on your server.

To install Tomcat on AlmaLinux or Rocky Linux, run the following command:

```bash
dnf install -y ea-tomcat101
```

To install Tomcat on Ubuntu, run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>apt install -y ea-tomcat101<br>apt update<br>``` |

## Set up Tomcat inside containers

To set up Tomcat to run inside a container, perform the following steps:

1. Log in to the cPanel user account via SSH. You can do this by either logging in to the account via SSH from the command line, or using SSH in either WHM’s [_Terminal_](https://docs.cpanel.net/whm/server-configuration/terminal-in-whm/) interface ( _WHM » Home » Server Configuration » Terminal_) or cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel/) interface ( _cPanel » Home » Advanced » Terminal_).

2. Run the following command:




```bash
/usr/local/cpanel/scripts/ea-podman install ea-tomcat101
```

3. Run the following command to retrieve the container’s name. You will need this name to perform any further actions.




```bash
/usr/local/cpanel/scripts/ea-podman containers
```


For more information, read our [`/usr/local/cpanel/scripts/ea-podman` script](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/) documentation.

## Configure Tomcat in a container

Note:

cPanel users **must** have shell access to configure Tomcat in a container.


When you install Tomcat in a container, it creates a directory in the `~/ea-podman.d/container-name` directory in the user’s `home` directory. The system creates several directories when you set up Tomcat in containers.

### Default configuration

EasyApache 4 makes the following configuration changes from the default Tomcat 10.1 behavior to the `~/ea-podman.d/container-name/conf/server.xml` file:

- Disables the shutdown port by default.
- Sets the `xpoweredBy` attribute of all connectors to a `false` value.
- Removes the `redirectPort` attribute.
- Adds the `ErrorReportValue` class to all hosts with the `showServerInfo` value set to a `false` value.
- Sets the following host attributes to a `false` value:

  - `autoDeploy`
  - `deployOnStartup`
  - `deployXML`
  - `unpackWARs`

## Interact with your Tomcat container

When you install Tomcat into a container, it creates a directory in the `~/ea-podman.d/container-name` directory in the user’s `home` directory. The system creates several directories when you set up Tomcat in containers.

You can use this directory to manage the information, files, and other data for the container.

### Deploy applications in a Tomcat container

The default configuration of Tomcat containers allows you to choose the best method to deploy your applications.

To determine which deployment method is the best for you, read Apache’s Tomcat [Security Considerations](https://tomcat.apache.org/tomcat-10.1-doc/security-howto.html) documentation. For more information about how to use that deployment method, read Apache’s [Tomcat Web Application Deployment](https://tomcat.apache.org/tomcat-10.1-doc/deployer-howto.html) documentation.

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