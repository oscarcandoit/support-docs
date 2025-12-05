---
url: "https://docs.digitalocean.com/products/marketplace/catalog/utunnel-vpn/"
title: "UTunnel VPN | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/utunnel-vpn/)
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

- UTunnel VPN

[Give Feedback](https://ideas.digitalocean.com/documentation)

# UTunnel VPN

Generated on 19 Mar 2025
from [the UTunnel VPN catalog page](https://marketplace.digitalocean.com/apps/utunnel-vpn)

**[UTunnel Access Gateway](https://www.utunnel.io/solutions/business-vpn-solution)** allows you to run **your own ZTNA-based VPN gateway** on your DigitalOcean droplet. The Droplet can be of any size based on your requirements. With UTunnel, you can easily [**set up a DigitalOcean VPN server**](https://www.utunnel.io/integrations/digitalocean-vpn-server) that supports roaming VPN users, site-to-site tunnelling, client device access control, external DNS integration, split tunnelling, and manual VPN connections, all while enforcing zero-trust security principles.

UTunnel also includes context-aware access policies, identity-based authentication, SSO integration, and multi-factor authentication (MFA), ensuring least-privilege access and secure resource segmentation. For more details, you can check out the **[UTunnel Features](https://www.utunnel.io/utunnel-features-and-benefits)** page.

UTunnel provides client apps for Windows, macOS, Linux, Android, and iOS, so that you can connect seamlessly to your VPN gateway from all the devices you own. It’s **well suited for small-medium businesses** and offers monthly billing, no long-term commitments. It also offers a **14-day risk-free trial** so that you can test the VPN service before moving on to a paid plan. Your UTunnel access gateway subscription cost is based on the number of users and the chosen plan. You can check **[UTunnel Access Gateway Pricing](https://www.utunnel.io/vpn-server-pricing-plans)** page for more details on the plans offered.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [UTunnel Access Gateway](https://www.utunnel.io/solutions/business-vpn-solution) | 10114 | Subscription Based |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=utnadmins-utunnelvpn)

## Creating an App using the API

In addition to creating a Droplet from the UTunnel VPN 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB UTunnel VPN Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"utnadmins-utunnelvpn"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying UTunnel VPN

- Once the deployment of your UTunnel VPN droplet is complete, note down **its IP address.**
- **[Signup with UTunnel](https://dashboard.utunnel.io/user/signup/)** and create a server with your newly created droplet’s public IP address. Select the On-Premise option when you create the server and **it comes with a 14-day free trial period.** You will be provided with a **server registration token.**
- Connect to your UTunnel VPN Droplet via SSH using the following command:

```
ssh root@your_droplet_public_ipv4
```

- After successful login, execute the following commands, after replacing the REG\_TOKEN with the **registration token** obtained in step 2:

```
sudo utnservice update
sudo utnservice register REG_TOKEN
sudo utnservice start
```

- Make sure that inbound connections to the following ports are allowed to accept VPN connections.

TCP 443, UDP 443, UDP 53 (Ports used for **OpenVPN** connections)

UDP 4500, UDP 500 (Ports used for **IPSEC** connections)

- Your UTunnel VPN server would be ready to accept VPN connections now. Invite users into your server and start using the VPN.

There is a detailed tutorial to help you **[install UTunnel VPN 1-Click App from DigitalOcean Marketplace](https://www.utunnel.io/help/how-to-set-up-a-digitalocean-vpn-server).** If you require any further assistance, you can visit the **[UTunnel VPN help portal](https://www.utunnel.io/help/)** or send an email to **[support@utunnel.io](mailto:support@utunnel.io)**

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/utunnel-vpn/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/utunnel-vpn/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/utunnel-vpn/#creating-an-app-using-the-api)
- [Getting Started After Deploying UTunnel VPN](https://docs.digitalocean.com/products/marketplace/catalog/utunnel-vpn/#getting-started-after-deploying-utunnel-vpn)

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