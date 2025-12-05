---
url: "https://docs.digitalocean.com/products/marketplace/catalog/freepbx-r/"
title: "FreePBX® | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/freepbx-r/)
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

- FreePBX®

[Give Feedback](https://ideas.digitalocean.com/documentation)

# FreePBX®

Generated on 20 Nov 2021
from [the FreePBX® catalog page](https://marketplace.digitalocean.com/apps/freepbx-1)

FreePBX® is the most popular graphical administration and end-user interface for the open-source Asterisk® telephony toolkit. Build a cloud phone system, a call center, a WebRTC application, or a custom audio service. This one-click build is ready to connect to your SIP phones and VoIP providers immediately. You can add extra functionality through free or commercial add-on modules.

FreePBX and Asterisk are corporately sponsored by Sangoma Technologies.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| asterisk | 18 | GPLv2 |
| freepbx | 16 | GPLv3 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=simontelephonics-freepbx-7-8)

## Creating an App using the API

In addition to creating a Droplet from the FreePBX® 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB FreePBX® Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"simontelephonics-freepbx-7-8"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying FreePBX®

This image boots to the FreePBX out-of-box experience.

### Web

Connect to the GUI at your droplet’s IPv4 or IPv6 address. The initial form prompts you to set up your administrative login, so do this right away upon launch.

After a series of setup prompts, including language selection and the enabling of the firewall (recommended), you will be presented with the FreePBX dashboard, a simple monitor and control panel for your PBX. Basic connectivity and call routing is set up in Trunks (to your VoIP providers), Extensions (to your phones), and Inbound/Outbound Routes.

Setup instructions including a getting-started guide and manuals for each module are available at the [FreePBX Wiki](https://wiki.freepbx.org/display/FPG). Documentation on the underlying Asterisk software can be found at the [Asterisk Wiki](https://wiki.asterisk.org/).

## SSH

SSH to your droplet’s IPv4 or IPv6 address using the `centos` user (unprivileged, with sudo access) or `root` using your SSH key (preferred method). FreePBX command-line tasks can be accomplished using the `fwconsole` command; you can connect to the Asterisk CLI with `asterisk -r` once you have become root.

## Enabling the commercial repo

To enable commercial module access and install the free System Administration module, from the GUI:

- Admin -> Module Admin
- Select Commercial and then Check Online
- Select the System Admin module and choose Download and Install

From SSH, as root:

- `fwconsole ma enablerepo commercial`
- `fwconsole ma listonline` # to see a list of module options
- `fwconsole ma downloadinstall sysadmin`
- `fwconsole r`

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/freepbx-r/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/freepbx-r/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/freepbx-r/#creating-an-app-using-the-api)
- [Getting Started After Deploying FreePBX®](https://docs.digitalocean.com/products/marketplace/catalog/freepbx-r/#getting-started-after-deploying-freepbx)
  - [Web](https://docs.digitalocean.com/products/marketplace/catalog/freepbx-r/#web)
- [SSH](https://docs.digitalocean.com/products/marketplace/catalog/freepbx-r/#ssh)
- [Enabling the commercial repo](https://docs.digitalocean.com/products/marketplace/catalog/freepbx-r/#enabling-the-commercial-repo)

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