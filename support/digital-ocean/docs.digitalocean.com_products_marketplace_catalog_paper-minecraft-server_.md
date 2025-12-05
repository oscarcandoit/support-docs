---
url: "https://docs.digitalocean.com/products/marketplace/catalog/paper-minecraft-server/"
title: "Paper: Minecraft Server | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/marketplace.6eb4c8240f6fd707ebe2218018dc699d375e2e3e9885d7fb3e760a9fc120a68e.svg)Marketplace](https://docs.digitalocean.com/products/marketplace/)
- [Droplet 1-Click Apps](https://docs.digitalocean.com/products/marketplace/droplet-1-click-apps/)
- [Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/marketplace/kubernetes-1-click-apps/)
- [SaaS Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/)
- [1-Click Models](https://docs.digitalocean.com/products/marketplace/1-click-models/)
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/paper-minecraft-server/)
  - [Add-Ons](https://docs.digitalocean.com/products/marketplace/categories/add-ons/)
  - [Analytics](https://docs.digitalocean.com/products/marketplace/categories/analytics/)
  - [Blogs and Forums](https://docs.digitalocean.com/products/marketplace/categories/blogs-and-forums/)
  - [Business Apps](https://docs.digitalocean.com/products/marketplace/categories/business-apps/)
  - [Chat](https://docs.digitalocean.com/products/marketplace/categories/chat/)
  - [Data Science](https://docs.digitalocean.com/products/marketplace/categories/data-science/)
  - [Databases](https://docs.digitalocean.com/products/marketplace/categories/databases/)
  - [Developer Tools](https://docs.digitalocean.com/products/marketplace/categories/developer-tools/)
  - [eCommerce](https://docs.digitalocean.com/products/marketplace/categories/ecommerce/)
  - [eLearning](https://docs.digitalocean.com/products/marketplace/categories/elearning/)
  - [Email](https://docs.digitalocean.com/products/marketplace/categories/email/)
  - [Frameworks](https://docs.digitalocean.com/products/marketplace/categories/frameworks/)
  - [Functions](https://docs.digitalocean.com/products/marketplace/categories/functions/)
  - [Gaming](https://docs.digitalocean.com/products/marketplace/categories/gaming/)
  - [Kubernetes](https://docs.digitalocean.com/products/marketplace/categories/kubernetes/)
  - [Logging](https://docs.digitalocean.com/products/marketplace/categories/logging/)
  - [Media](https://docs.digitalocean.com/products/marketplace/categories/media/)
  - [Monitoring](https://docs.digitalocean.com/products/marketplace/categories/monitoring/)
  - [Network Tools](https://docs.digitalocean.com/products/marketplace/categories/network-tools/)
  - [Security](https://docs.digitalocean.com/products/marketplace/categories/security/)
  - [Storage](https://docs.digitalocean.com/products/marketplace/categories/storage/)
- [Glossary](https://docs.digitalocean.com/glossary/marketplace/)
- [Service-Level Agreement](https://www.digitalocean.com/sla/marketplace)

- Paper: Minecraft Server

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Paper: Minecraft Server

Generated on 14 May 2024
from [the Paper: Minecraft Server catalog page](https://marketplace.digitalocean.com/apps/paper-minecraft-server)

Paper is a Minecraft game server based on Spigot, designed to greatly improve performance and offer more advanced features and API.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Paper](https://papermc.io/software/paper) | [1.20.4-496](https://papermc.io/downloads/paper) | [GNU General Public License](https://github.com/PaperMC/Paper/blob/master/LICENSE.md) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-paperminecraftse)

## Creating an App using the API

In addition to creating a Droplet from the Paper: Minecraft Server 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Paper: Minecraft Server Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-paperminecraftse"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Paper: Minecraft Server

![Paper Minecraft](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/sammy.png)

At least 4GB RAM and 2 Cores are needed to run a PaperMC server.

NOTE: After a droplet is created it will start world generation. This can take ~5 minutes depending on the droplet’s size. If you are getting Timed out errors, make sure to give your server a minute.

Paper does not require any special clients to play and is compatible with regular Minecraft clients, so long as the client’s version matches the server’s version.

A few minutes after droplet creation, you can access your server and play with your friends:

1. First copy the public IPv4 address from your newly created droplet from the DigitalOcean control panel ( [https://cloud.digitalocean.com/projects](https://cloud.digitalocean.com/projects))
2. Start the Minecraft application on your device, click “Play”, and then “Multiplayer”
3. Then click “Add Server”
4. Then paste the IP address of the droplet into the Server Address field and then “Done” to save
5. Finally, click “Join Server” and enjoy!

### Configuring the Server

A server admin can configure settings, user permissions, and whitelisting by editing server files. PaperMC offers additional configuration options for fine-tuning server performance on a per-world basis. For additional information, see the [PaperMC documentation](https://docs.papermc.io/paper/reference/configuration).

Paper also supports plugins. For information on installing plugins, see the [PaperMC documentation](https://docs.papermc.io/paper/adding-plugins).

SSH into your droplet and navigate to `/opt/minecraft` to view server files.

### Running Server Commands

To run server commands:

1. SSH into your droplet

```
$ ssh root@your_droplet_public_ipv4
```

2. Login to the Minecraft user

```
$ su - minecraft -s /bin/bash
```

3. Use `screen` to access the server terminal and run commands

```
$ screen -r
```

To exit the screen session without ending the process, detach from it with `Ctrl+a d`

We recommend using a whitelist if you are playing with a group of friends. To whitelist a player:

1. Follow the above steps to access the server terminal
2. Turn on the whitelist, if you have not yet done this

```
$ whitelist on
```

3. Add the player’s name to the whitelist

```
$ whitelist add <playername>
```

### About Paper Minecraft Droplet 1-Click

- The server runs Minecraft version 1.20.4.
- Server files are installed under /opt/minecraft
- The server runs on a `systemd` service. Read MOTD (message after SSHing) to find the name of the service.
- The server uses 75% of the droplet’s RAM.
- On shutdown, the systemd Minecraft service will save the game world.

[Paper](https://papermc.io/software/paper) is an open-source project based on Spigot, managed by PaperMC. The source can be found [here](https://github.com/PaperMC/Paper/tree/master). Minecraft is a trademark of Mojang Synergies AB and Microsoft Corporation. We refer to these names for referential purposes only and not to indicate any sponsorship, endorsement, or affiliation between these companies and DigitalOcean. We offer this one-click app for your convenience, but you are solely responsible for creating, using, and maintaining your server in accordance with all applicable terms and conditions.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/paper-minecraft-server/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/paper-minecraft-server/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/paper-minecraft-server/#creating-an-app-using-the-api)
- [Getting Started After Deploying Paper: Minecraft Server](https://docs.digitalocean.com/products/marketplace/catalog/paper-minecraft-server/#getting-started-after-deploying-paper-minecraft-server)
  - [Configuring the Server](https://docs.digitalocean.com/products/marketplace/catalog/paper-minecraft-server/#configuring-the-server)
  - [Running Server Commands](https://docs.digitalocean.com/products/marketplace/catalog/paper-minecraft-server/#running-server-commands)
  - [About Paper Minecraft Droplet 1-Click](https://docs.digitalocean.com/products/marketplace/catalog/paper-minecraft-server/#about-paper-minecraft-droplet-1-click)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)