---
url: "https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/"
title: "PasswordLab | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/)
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

- PasswordLab

[Give Feedback](https://ideas.digitalocean.com/documentation)

# PasswordLab

Generated on 13 Sep 2024
from [the PasswordLab catalog page](https://marketplace.digitalocean.com/apps/passwordlab)

## PasswordLab - On-Prem password manager for business & enterprises

At PasswordLab, we take the security of your passwords to unparalleled heights. Our multi-layered security approach ensures that your sensitive credentials are not just protected; they’re virtually impregnable. Here’s a detailed breakdown of the Fort Knox-like security fortress that PasswordLab establishes:

![](https://passwordlab.b-cdn.net/images/assets/passwordlab-cover.png)

### Features

1. On-Premises Assurance: PasswordLab is installed within your own data center, offering you the ultimate control over your sensitive information. No third-party involvement means enhanced security and peace of mind.
2. AES-256 Bit Encryption: PasswordLab employs AES-256 bit encryption to secure your credentials. This gold standard in encryption ensures that your data is locked down both at rest and during transfer, adhering to the highest security protocols.
3. Secure Data Transfer: The communication channel between PasswordLab and the user is safeguarded by TLS encryption. This means that your data is encrypted during transit, making interception virtually impossible.
4. Security with Firewall: PasswordLab works in tandem with dedicated or OS-based firewalls, adding an extra layer of defense. This collaboration ensures that unauthorized access attempts are thwarted before they even reach your credential vault.
5. User Interaction Logging: Every interaction with PasswordLab is meticulously logged. This not only facilitates detailed auditing but also opens the door for potential integration with SIEM systems.
6. 2FA by Default: PasswordLab goes the extra mile by having Two-Factor Authentication (2FA) switched on by default. This means an additional layer of security, ensuring that only authorized users can access and manage sensitive credentials.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| PasswordLab Binary | latest | proprietary |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=askarlabs-passwordlab)

## Creating an App using the API

In addition to creating a Droplet from the PasswordLab 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB PasswordLab Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"askarlabs-passwordlab"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying PasswordLab

### Get started

Your application is ready! Connect to your webserver at [http://your\_droplet\_public\_ipv4:3000](http://your_droplet_public_ipv4:3000/) and start the final configuration.

### Webserver

Visit [http://your\_droplet\_public\_ipv4:3000](http://your_droplet_public_ipv4:3000/)

### SSH Login Details

You can log in at your server with below command

`ssh root@your_droplet_public_ipv4`

### Database Login details

The database login details are in the `/root/passwordlab-secret.txt` file.

You can read the content of the file with below command.

`cat /root/passwordlab-secret.txt`

### Resources

- [How-to Videos](https://www.youtube.com/@passwordlab)
- [Technical Documentation](https://passwordlab.io/docs)

In this article...

- [PasswordLab - On-Prem password manager for business & enterprises](https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/#passwordlab---on-prem-password-manager-for-business--enterprises)
  - [Features](https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/#features)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/#creating-an-app-using-the-api)
- [Getting Started After Deploying PasswordLab](https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/#getting-started-after-deploying-passwordlab)
  - [Get started](https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/#get-started)
  - [Webserver](https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/#webserver)
  - [SSH Login Details](https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/#ssh-login-details)
  - [Database Login details](https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/#database-login-details)
  - [Resources](https://docs.digitalocean.com/products/marketplace/catalog/passwordlab/#resources)

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