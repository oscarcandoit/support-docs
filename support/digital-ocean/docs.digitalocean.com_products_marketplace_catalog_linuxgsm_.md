---
url: "https://docs.digitalocean.com/products/marketplace/catalog/linuxgsm/"
title: "LinuxGSM | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/linuxgsm/)
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

- LinuxGSM

[Give Feedback](https://ideas.digitalocean.com/documentation)

# LinuxGSM

Generated on 9 Jan 2024
from [the LinuxGSM catalog page](https://marketplace.digitalocean.com/apps/linuxgsm)

LinuxGSM (Linux Game Server Managers) is a comprehensive collection of scripts and tools designed to simplify the management of game servers on the Linux operating system. Whether you’re a seasoned server administrator or a gaming enthusiast setting up your first server, LinuxGSM offers an easy-to-use and automated solution for installing, configuring, and maintaining various game servers.

Key Features of LinuxGSM:

1. Extensive Game Support: LinuxGSM supports a wide variety of popular games, enabling effortless management of game servers across different genres and platforms.

2. Simple Installation: Setting up game servers becomes a breeze with LinuxGSM, providing a quick and straightforward installation process even for beginners.

3. Automatic Updates: LinuxGSM includes an automated update mechanism, ensuring that your game servers stay up-to-date with the latest software versions for enhanced security and performance.

4. Monitoring and Control: Keep a close eye on your server’s status and performance with built-in monitoring tools, allowing you to manage and maintain server operations efficiently.

5. Customization and Flexibility: LinuxGSM is highly customizable and can be easily adapted to support new games or specific server configurations.

6. Thriving Community: Benefit from an active and supportive community of developers and users, providing continuous support, regular updates, and valuable insights.

With LinuxGSM, you can effortlessly create, manage, and maintain game servers on your Linux machine, unlocking the joy of multiplayer gaming experiences with friends and communities. Streamline your server management process and embark on endless gaming adventures with LinuxGSM by your side.


## Software Included

| Package | Version | License |
| --- | --- | --- |
| LinuxGSM | latest | [MIT](https://github.com/GameServerManagers/LinuxGSM/blob/master/LICENSE.md) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=linuxgsm)

## Creating an App using the API

In addition to creating a Droplet from the LinuxGSM 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB LinuxGSM Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"linuxgsm"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying LinuxGSM

The LinuxGSM 1-click image comes with almost all the software you need to run your own game server. There are just a few steps you must do to finalize the installation and configure your game.

After creating your own droplet using the 1-click image:

1. Connect to your new droplet using SSH as root:

```
$ ssh root@your_droplet_public_ipv4.
```

2. To allow LinuxGSM to install all needed dependencies, the LinuxGSM user have sudo access. Before you start using LinuxGSM, you need to set up a password for the user. Type the following command to set up the password for the “linuxgsm” user:

```
$ sudo passwd linuxgsm
```

You will be prompted to enter the password twice for confirmation. Once you do that, the password will be set for the “linuxgsm” user.

3. Login as linuxgsm user:

```
$ su - linuxgsm
```

4. Run the following command to select the game you want to create a server for.

```
$ ./linuxgsm.sh install
```

and follow the install instructions.

To enable the game server to function properly, you need to allow the necessary ports through the firewall. After the game server is installed, you can find a list of the required ports by using the following command:

```
$ ./servername details      | e.g ./csgoserver details
```

To allow the required ports, you can use the ufw (Uncomplicated Firewall) command. For instance, if the game server requires port 25005 to be open for TCP traffic, you can allow it with the following command:

```
$ sudo ufw allow 25005/tcp
```

Congratulations! You have successfully installed your game server using LinuxGSM on the Linux operating system. Now, to configure and manage the server, there are several important steps to take:

1. Server Configuration: After the server installation, the first step is to configure it for your specific game. In the LinuxGSM documentation, you will find information on how to properly set up various server parameters, such as game settings, admin privileges, game modes, and more. For detailed information on configuring your server, refer to the LinuxGSM documentation: [https://docs.linuxgsm.com/configuration](https://docs.linuxgsm.com/configuration).
2. Server Management: LinuxGSM provides a plethora of convenient commands to manage your game server. This includes starting, stopping, restarting, checking the server status, and other useful functions. Familiarize yourself with the section of the LinuxGSM documentation dedicated to commands, so you can efficiently manage your server: [https://docs.linuxgsm.com/commands](https://docs.linuxgsm.com/commands).
3. Features: LinuxGSM boasts an array of impressive features that make it stand out as a game server management solution. With extensive game support, automated installation and updates, monitoring capabilities, and customizable configurations, LinuxGSM empowers server administrators and gamers alike. For a detailed overview of LinuxGSM’s features, explore the dedicated section in the documentation: [https://docs.linuxgsm.com/features](https://docs.linuxgsm.com/features).
4. Alerts: Stay informed about your server’s health and performance with LinuxGSM’s alerting system. Receive real-time notifications about critical events, such as server crashes or high resource utilization, allowing you to promptly address any issues and ensure a smooth gaming experience for your players. To learn more about setting up alerts, refer to the LinuxGSM documentation: [https://docs.linuxgsm.com/alerts](https://docs.linuxgsm.com/alerts).

For more comprehensive information and support, please visit the LinuxGSM website for the full documentation: [https://docs.linuxgsm.com](https://docs.linuxgsm.com/), and join the vibrant LinuxGSM community on the official forum: [https://github.com/GameServerManagers/LinuxGSM/discussions](https://github.com/GameServerManagers/LinuxGSM/discussions).

With LinuxGSM documentation at your fingertips and access to the helpful community, you possess the knowledge and tools necessary to effectively manage your game server. Don’t hesitate to refer to the documentation and seek assistance on the forum while performing various tasks on your LinuxGSM server. Good luck in your gaming experience!

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/linuxgsm/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/linuxgsm/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/linuxgsm/#creating-an-app-using-the-api)
- [Getting Started After Deploying LinuxGSM](https://docs.digitalocean.com/products/marketplace/catalog/linuxgsm/#getting-started-after-deploying-linuxgsm)

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