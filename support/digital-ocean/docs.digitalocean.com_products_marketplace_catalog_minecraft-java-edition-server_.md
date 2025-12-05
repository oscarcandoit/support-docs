---
url: "https://docs.digitalocean.com/products/marketplace/catalog/minecraft-java-edition-server/"
title: "Minecraft: Java Edition Server | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/minecraft-java-edition-server/)
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

- Minecraft: Java Edition Server

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Minecraft: Java Edition Server

Generated on 20 Jun 2023
from [the Minecraft: Java Edition Server catalog page](https://marketplace.digitalocean.com/apps/minecraft-java-edition-server)

Minecraft is one of the most popular online sandbox games ever created. With more than 170 million monthly active players, there is a lot to explore, design, and create in this 3D virtual world.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Minecraft: Java Edition Server](https://www.minecraft.net/en-us/download/server) | 1.20.1 | [Minecraft End User License Agreement](https://account.mojang.com/terms) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-minecraftjavaedi-18-04)

## Creating an App using the API

In addition to creating a Droplet from the Minecraft: Java Edition Server 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Minecraft: Java Edition Server Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-minecraftjavaedi-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Minecraft: Java Edition Server

![Minecraft](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/3mqRRhH%20-%20Imgur.png)

It is recommended to use 4GB RAM and 2 Cores Premium Intel Droplet size for the best experience.

NOTE: After Minecraft Droplet was created it will start world generation which can take ~5 minutes depending on the Droplet size. If you are getting `Timed out` errors - make sure to give your server a minute.

After a few minutes passed after droplet creation, you can access your server and play with your friends:

1. First copy the public ipv4 address from your newly created droplet from the DigitalOcean control panel ( [https://cloud.digitalocean.com/projects](https://cloud.digitalocean.com/projects))
2. Then start the Minecraft application, click “Play” and then “Multiplayer”
3. Then click “Add Server”
4. Then paste the IP address of the Droplet into the **Server Address** field and then “Done” to save
5. Finally, click “Join Server” and enjoy!

### How to promote a user to an admin (Minecraft operator)

There are many reasons to have admin privileges, especially if you are sharing your Minecraft server publicly, next steps will show how to promote a player to an admin:

Login into your droplet via cloud console or SSH:

```
$ ssh <your Minecraft Droplet IP>
```

Switch to a `minecraft` user:

```
$ su - minecraft -s /bin/bash
```

Now, use `screen` to run a command on a Minecraft server terminal:

```
$ screen -p 0 -S minecraft -X eval 'stuff "op <user nickname>"\\015'
```

Make sure to change `&amp;amp;amp;lt;user nickname&amp;amp;amp;gt;` to a username that needs to become an admin.

Done! Now `&amp;amp;amp;lt;user nickname` can use admin commands on the server itself.

### About Minecraft Droplet 1-Click

- Minecraft Server version is 1.20.1.
- Minecraft Server is installed under `/opt/minecraft`.
- Minecraft Server runs on a systemd service. Read MOTD (message on the SSH) to find the name of the service.
- Minecraft Server uses 75% of Droplet’s RAM.
- On shutdown, Minecraft service will save the game world.

Minecraft is a trademark of Mojang Synergies AB and Microsoft Corporation, and we refer to the name for referential purposes only and not to indicate any sponsorship, endorsement or affiliation between these companies and DigitalOcean. We offer this one-click app for your convenience, but you are solely responsible for creating, using, and maintaining your server in accordance with all applicable terms and conditions. More information about setting up your server and applicable terms can be found here: [https://www.minecraft.net/en-us/download/server](https://www.minecraft.net/en-us/download/server).

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/minecraft-java-edition-server/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/minecraft-java-edition-server/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/minecraft-java-edition-server/#creating-an-app-using-the-api)
- [Getting Started After Deploying Minecraft: Java Edition Server](https://docs.digitalocean.com/products/marketplace/catalog/minecraft-java-edition-server/#getting-started-after-deploying-minecraft-java-edition-server)
  - [How to promote a user to an admin (Minecraft operator)](https://docs.digitalocean.com/products/marketplace/catalog/minecraft-java-edition-server/#how-to-promote-a-user-to-an-admin-minecraft-operator)
  - [About Minecraft Droplet 1-Click](https://docs.digitalocean.com/products/marketplace/catalog/minecraft-java-edition-server/#about-minecraft-droplet-1-click)

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

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices