---
url: "https://docs.cpanel.net/ea4/containers/the-ea-podman-script/"
title: "The ea-podman Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#main-content)

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
4. The ea-podman Script


[ea4](https://docs.cpanel.net/tags/ea4/) [containers](https://docs.cpanel.net/tags/containers/)

#### Table of Contents

[Overview](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#overview)

* * *

[Requirements](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#requirements)

* * *

[Run the script](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#options)

* * *

[View available containers](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#view-available-containers)

* * *

[Install an EA4 container-based package](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#install-an-ea4-container-based-package)

* * *

[Install a third-party container-based package](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#install-a-third-party-container-based-package)

* * *

[Set an environmental variable during installation](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#set-an-environmental-variable-during-installation)

* * *

[Uninstall a container](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#uninstall-a-container)

* * *

[Manage your container applications](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#manage-your-container-applications)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#overview)

* * *

[Requirements](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#requirements)

* * *

[Run the script](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#options)

* * *

[View available containers](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#view-available-containers)

* * *

[Install an EA4 container-based package](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#install-an-ea4-container-based-package)

* * *

[Install a third-party container-based package](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#install-a-third-party-container-based-package)

* * *

[Set an environmental variable during installation](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#set-an-environmental-variable-during-installation)

* * *

[Uninstall a container](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#uninstall-a-container)

* * *

[Manage your container applications](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#manage-your-container-applications)

* * *

## The ea-podman Script

Last modified: _2024 August 27_

* * *

## Overview

Use the `/usr/local/cpanel/scripts/ea-podman` script to manage your [containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers) in EasyApache 4.

## Requirements

To run use this script, you **must** first have [set up EasyApache 4 containers](https://docs.cpanel.net/ea4/containers/easyapache-4-containers/#setting-up-containers). This is because each application and package you install with the `ea-podman` script creates a **new** container located in the `~/ea-podman.d/container-name` directory of the user’s `home` directory. This directory holds the container’s information, files, and other data.

## Run the script

To run this script, log in with SSH as the cPanel user or use the [`machinectl`](https://www.linux.org/docs/man1/machinectl.html) command as the `root` user to switch to a cPanel account.

To run this script on the command line, use the following format:

```bash
/usr/local/cpanel/scripts/ea-podman [command] [options]
```

Important:

- You **cannot** use the `su -` or `sudo -E` commands to run this script.
- This script’s available options change depending on which subcommands you use. For more information, read the [Options](https://docs.cpanel.net/ea4/containers/the-ea-podman-script/#options) section below.
- Your process identifiers (`pid`) will be public unless you set your `/proc` to `hidepid=2`. For more information about how to do this, read Red Hat’s [How to Hide PID Listings from Non-Root Users in Linux](https://www.redhat.com/sysadmin/hidepid-linux-hide-pid) documentation. The `ea-podman` script will display an error message if this issue exists on your system.

## Options

This script accepts the following commands, where `package` represents the name of a container package:

### View available containers

To view available containers, run the following command:

```bash
/usr/local/cpanel/scripts/ea-podman [command]
```

| Command | Description | Example |
| --- | --- | --- |
| `avail` | List the available EasyApache 4 container-based packages and their installation status. When you install a container-based package, the `ea-podman` script creates a **new** container for it at the `~/ea-podman.d/container-name` directory in the user’s `home` directory. | `avail` |
| `registered [--all]` | List the user’s registered containers. If the `root` user uses the `--all` flag, this commands shows all containers on the system. | `registered` |
| `running` | Show all running containers. | `running` |

### Install an EA4 container-based package

Use this command to install an EA4 container-based application package.

```bash
/usr/local/cpanel/scripts/ea-podman install [package] [options]
```

### Install a third-party container-based package

Use this command to install an container-based application package from a third-party image, such as [Dockerhub](https://hub.docker.com/).

Important:

When using third-party images, we **strongly** recommend the following precautions:

- **Only** use a trusted registry.
- **Only** use images that are either official or verified by the publisher.
- Specify a version tag to ensure that major or minor update changes will not affect your container.

In the following command, `application-name` represents the name you want to use for your container, while `image` represents the path to the application package.

```bash
/usr/local/cpanel/scripts/ea-podman install [application-name] [options] [image]
```

You may use the following options to customize your installation of a container-based application package from a third-party image:

| Option | Description | Example |
| --- | --- | --- |
| `-v` | A volume to mount. | `ea-podman install mymongo -v $HOME/myetcmongo:/etc/mongo` |
| `--cpuser-port` | Set a port number for inside the container.<br>Note:<br>The system will set a port for the container itself. This option sets the port used **inside** the container. | `ea-podman install mymongo --cpuser-port=8081 docker.io/library/mongo:latest` |
| `--i-understand-the-risks-do-it-anyway` | Confirm that you want to install the package. | `ea-podman install mymongo -v $HOME:/home/user docker.io/library/mongo:latest --i-understand-the-risks-do-it-anyway` |

### Set an environmental variable during installation

You may use the following option to customize your installation of **any** container-based application package:

| Option | Description | Example |
| --- | --- | --- |
| `-e` | An environmental variable. | `install ea-tomcat101 -e sample-variable=42` |

### Uninstall a container

To uninstall a container, run the following command:

```bash
/usr/local/cpanel/scripts/ea-podman uninstall [container-name]
```

This will remove the container and the application inside it.

In the following table, `container-name` represents the name of the container-based application, as shown with the `registered` or `running` options.

| Command | Description | Example |
| --- | --- | --- |
| `uninstall [container-name]` | Uninstall a container-based application. | `uninstall container.cptest1.01` |

### Manage your container applications

In the following table, `container-name` represents the name of a container, as shown with the `registered` or `running` options, while `backup-file` represents the name of a backup file.

Use the following commands to manage your containers:

| Command | Description | Example |
| --- | --- | --- |
| `backup` | Back up all containers. <br>Warning:<br>You **cannot** use this option to restore backups created by WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool/) interface ( _WHM » Home » Transfers » Transfer Tool_) or the [`/usr/local/cpanel/scripts/restorepkg script`](https://docs.cpanel.net/whm/scripts/the-restorepkg-script/).<br> <br> This option creates a backup file in the `ea-podman-backups` directory of the user’s `home` directory. | `backup` |
| `bash [container-name] [command]` | Open a `bash` shell for the named container and optionally run a command. | `bash example.cptest1.01 ls` |
| `remove_containers [package]` | Remove all containers. <br>Warning:<br>This is a destructive action. We **strongly** recommend that you use the `uninstall` command instead. | `remove_containers ea-tomcat100` |
| `restart [container-name]` | Restart the named container. | `restart example.cptest1.01` |
| `restore [backup-file]` | Restore a container from a backup file. | `restore ea-podman-backups/backup.20220421193100.tar.gz` |
| `start [container-name]` | Start a stopped container. | `start example.cptest1.01` |
| `status [container-name]` | Display the status of a container. | `status example.cptest1.01` |
| `stop [container-name]` | Stop a running container. | `stop example.cptest1.01` |
| `subids [--ensure]` | Display a list of users with their subids. | `subids` |
| `upgrade [container-name]` | Upgrade a single container. | `upgrade example.cptest1.01` |
| `upgrade_containers [package] [--all]` | Upgrade the installed containers. <br>Note:<br>You can use either the package name or the `--all` option, but not both. | `upgrade_containers tomcat` |

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