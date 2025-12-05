---
url: "https://docs.cpanel.net/ea4/containers/easyapache-4-containers/"
title: "EasyApache 4 Containers | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#main-content)

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
4. EasyApache 4 Containers


[ea4](https://docs.cpanel.net/tags/ea4/) [containers](https://docs.cpanel.net/tags/containers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#overview)

* * *

[Setting up containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#setting-up-containers)

* * *

[AlmaLinux and Rocky Linux](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#almalinux-and-rocky-linux)

* * *

[Ubuntu](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#ubuntu)

* * *

[Use an EA4 container-based package](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#use-an-ea4-container-based-package)

* * *

[Use a non-cPanel-provided image](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#use-a-non-cpanel-provided-image)

* * *

[Working with containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#working-with-containers)

* * *

[Available packages for containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#available-packages-for-containers)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#overview)

* * *

[Setting up containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#setting-up-containers)

* * *

[AlmaLinux and Rocky Linux](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#almalinux-and-rocky-linux)

* * *

[Ubuntu](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#ubuntu)

* * *

[Use an EA4 container-based package](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#use-an-ea4-container-based-package)

* * *

[Use a non-cPanel-provided image](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#use-a-non-cpanel-provided-image)

* * *

[Working with containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#working-with-containers)

* * *

[Available packages for containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#available-packages-for-containers)

* * *

## EasyApache 4 Containers

Last modified: _2025 October 15_

* * *

## Overview

EasyApache 4 provides the ability to run applications in containers. We **only** support containers on systems that run [AlmaLinux OS](https://docs.cpanel.net/installation-guide/system-requirements-almalinux/), [Rocky Linux™](https://docs.cpanel.net/installation-guide/system-requirements-rockylinux/), or [Ubuntu®](https://docs.cpanel.net/installation-guide/system-requirements-ubuntu/).

If your system runs [CloudLinux™](http://localhost:1313/installation-guide/system-requirements-cloudlinux/), they provide a method to [install containers with CageFS](https://cloudlinux.zendesk.com/hc/en-us/articles/13261545905052-ea-podman-in-CageFS). However, we do **not** support this method.

Containers are a lightweight way to manage individual software images. They provide a way for the application to run independently and separately from the rest of the server. This is similar to a virtual machine, except it uses fewer resources and can be quickly and easily started and stopped.

We use [Podman](https://podman.io/) for our containers. Podman allows your applications to run as themselves rather than as the `root` user.

Important:

You **cannot** use EasyApache 4 containers on a system that also runs [Virtuozzo](https://www.virtuozzo.com/documentation/) unless you enable `systemctl` at the user level. Virtuozzo disables this function by default.

## Setting up containers

Important:

To set up containers, you **must** log in with SSH as the cPanel user or use the [`machinectl`](https://www.linux.org/docs/man1/machinectl.html) command as the `root` user to switch to a cPanel user account.

To set up containers, perform the following steps:

1. Install the `ea-podman-repo` package. You **must** install this package first.
2. Install the `ea-podman` package. This package sets up the system for containers and installs our [`/usr/local/cpanel/scripts/ea-podman` script](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/) to manage them.
3. Run the `/usr/local/cpanel/scripts/ea-podman` script to add the containers. You **cannot** use the `su -` or `sudo -E` commands to run this script.

To use an application in the containers on your server, you **must** install either a cPanel-provided container-based package or an image from another source, such as [Dockerhub](https://hub.docker.com/). You can only perform this action **after** you set up the containers on your server.

### AlmaLinux and Rocky Linux

To start using containers on AlmaLinux or Rocky Linux, run the following commands on the command line as the `root` user:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>dnf install -y ea-podman-repo<br>dnf install -y ea-podman<br>``` |

### Ubuntu

To start using containers on Ubuntu, run the following commands on the command line as the `root` user:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>apt install -y ea-podman-repo<br>apt update<br>apt install -y ea-podman<br>``` |

You may encounter the following error when you install an EA4 container-based package on an Ubuntu server:

```bash
potentially insufficient UIDs or GIDs available in user namespace
```

To resolve this error, add the following lines as the `root` user to your server’s `/etc/containers/storage.conf` file:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>[storage]<br>driver = "overlay"<br>runroot = "/run/containers/storage"<br>graphroot = "/var/lib/containers/storage"<br>[storage.options]<br>ignore_chown_errors = "true"<br>``` |

Note:

- The system creates the `/etc/containers/storage.conf` file if it does not already exist. However, it will **not** overwrite an existing file. You **must** edit the file manually to resolve this error.
- If the `kernel overlayfs` driver is **not** installed on your system, install it with the following command:


```bash
apt install fuse-overlayfs
```


### Use an EA4 container-based package

Note:

Before you can use an EA4 container-based package for your containers, your system administrator **must** install the EasyApache 4 package on the command line.

Log into the cPanel user account via SSH. You can do this from the command line or cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel/) interface ( _cPanel » Home » Advanced » Terminal_).

To set up your application, run the following command, where `package` represents the name of a EA4 container-based package:

```bash
/scripts/ea-podman install package
```

When you set up a container, the system also creates the `~/ea-podman.d/application-name` directory in the user’s `home` directory. These directories contain information, files, and other data for the container.

For more information, read our [`/usr/local/cpanel/scripts/ea-podman` script](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/) documentation.

### Use a non-cPanel-provided image

Log into the cPanel user account via SSH. You can do this from the command line or cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel/) interface ( _cPanel » Home » Advanced » Terminal_).

To set up your application, run the following command, where `application` represents the name of the application and `image` represents a third-party image, such as a [Dockerhub](https://hub.docker.com/) image:

```bash
/scripts/ea-podman install application [options] image
```

When you set up a container, the system also creates the `~/ea-podman.d/application-name` directory in the user’s `home` directory. These directories contain information, files, and other data for the container.

For more information, read our [`/usr/local/cpanel/scripts/ea-podman` script](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/) documentation.

## Working with containers

When you install a container package, it creates the `~/ea-podman.d/application-name` directory in the user’s `home` directory. You can navigate to these directories to add and delete files, as well as make other changes without the need to log in to the container instance. You can find the names of your containers with one of the following commands:

- `/usr/local/cpanel/scripts/ea-podman registered`
- `/usr/local/cpanel/scripts/ea-podman running`

You can also use the `/usr/local/cpanel/scripts/ea-podman bash` command to run `bash` commands as if you are logged in to the container’s shell interface.

For full information about how to work with containers, read our [`/usr/local/cpanel/scripts/ea-podman` script](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/) documentation.

## Available packages for containers

We provide the following packages for containers. These packages are already configured to run on a cPanel system:

- [Memcached 1.6](https://docs.cpanel.net/ea4/containers/memcached-via-containers/)
- [Redis® 6.2](https://docs.cpanel.net/ea4/containers/redis-via-containers/)
- Apache Tomcat® 10.0





Note:




Tomcat 10.0 is end-of-life but will continue to function. We strongly recommend using Tomcat 10.1 instead.


- [Apache Tomcat® 10.1](https://docs.cpanel.net/ea4/containers/tomcat-via-containers/)
- [Valkey™ 7.2](https://docs.cpanel.net/ea4/containers/valkey-via-containers/)

You can also run the following command to view the available EA4 container-based packages:

```bash
/usr/local/cpanel/scripts/ea-podman available
```

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