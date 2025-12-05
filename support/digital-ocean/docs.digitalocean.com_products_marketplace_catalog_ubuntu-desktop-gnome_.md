---
url: "https://docs.digitalocean.com/products/marketplace/catalog/ubuntu-desktop-gnome/"
title: "Ubuntu Desktop (GNOME) | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/ubuntu-desktop-gnome/)
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

- Ubuntu Desktop (GNOME)

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Ubuntu Desktop (GNOME)

Generated on 3 Jan 2024
from [the Ubuntu Desktop (GNOME) catalog page](https://marketplace.digitalocean.com/apps/ubuntu-desktop-gnome)

The Desktop edition includes a user-friendly graphical interface for working with the OS, providing users with an experience comparable to Windows or macOS. Ubuntu Desktop powers millions of computers worldwide. Canonical provides an optional subscription-based package that provides enterprise-grade support.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Ubuntu Desktop | 1.524 | [GPL](https://help.gnome.org/admin/gdm/stable/license.html.en) |
| x11vnc | 0.9.16-8 | [GPL](https://github.com/LibVNC/x11vnc/blob/master/misc/LICENSE) |
| sddm | 4:5.24 | [GPL](https://github.com/sddm/sddm/blob/develop/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=ubuntudesktopgno)

## Creating an App using the API

In addition to creating a Droplet from the Ubuntu Desktop (GNOME) 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Ubuntu Desktop (GNOME) Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"ubuntudesktopgno"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Ubuntu Desktop (GNOME)

After the Ubuntu Desktop droplet is started, it’s required to login into the droplet using ssh. VNC password, desktop user name and user password will be generated and shown to the user. After required variables are generated, droplet will be fully functional and ready to use.

URL to connect is vnc://IP:5900

**How install VNC client for Windows:**

1. Visit the RealVNC website ( [https://www.realvnc.com/download/viewer/](https://www.realvnc.com/download/viewer/)) and download the VNC Viewer for Windows.
2. Run the installer you downloaded. Follow the on-screen instructions to complete the installation.
3. Once installed, launch VNC Viewer.

Enter the IP address of the droplet and 5900 as port.

Enter the VNC server’s password when prompted.

4. Click “Connect” to establish a VNC connection to the remote machine.

You should now see the remote desktop.

**Linux:**

1. Follow the instructions [https://www.realvnc.com/en/connect/download/viewer/linux/](https://www.realvnc.com/en/connect/download/viewer/linux/) to install the Package
2. Launch VNC Viewer:

Open a terminal and type vncviewer.

Enter the IP address of the droplet and 5900 as port.

Enter the VNC server’s password when prompted.

**MacOS:**

1. First option to connect is already installed. Open Finder -> click on the menu “Go” -> click on the menu item “Connect to server” and enter droplet’s IP address and 5900 as port.
2. Also it’s possible to install custom client, for example [https://www.realvnc.com/en/connect/download/viewer/macos/](https://www.realvnc.com/en/connect/download/viewer/macos/)

Keep in mind that this guide uses RealVNC as an example, and steps might differ if you use a different VNC client. Always refer to the specific documentation of the VNC client you choose for detailed instructions.

_**Note**_ Remote Desktop Server is installed too, it’s listening on default port - 3389. Marketplace team recommends to use VNC clients, but RDP is accessible too.

How to install RDP client:

_Ubuntu_

`sudo apt install remmina remmina-plugin-vnc`

_Windows_

it’s already installed, run Remote Desktop

_MacOS_

Install the app from the app store, use this link:

[https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12](https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/ubuntu-desktop-gnome/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/ubuntu-desktop-gnome/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/ubuntu-desktop-gnome/#creating-an-app-using-the-api)
- [Getting Started After Deploying Ubuntu Desktop (GNOME)](https://docs.digitalocean.com/products/marketplace/catalog/ubuntu-desktop-gnome/#getting-started-after-deploying-ubuntu-desktop-gnome)

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