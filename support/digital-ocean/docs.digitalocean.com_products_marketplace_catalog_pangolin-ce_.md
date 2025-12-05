---
url: "https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/"
title: "Pangolin (CE) | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/)
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

- Pangolin (CE)

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Pangolin (CE)

Generated on 22 Oct 2025
from [the Pangolin (CE) catalog page](https://marketplace.digitalocean.com/apps/pangolin-ce-1)

Pangolin is a self-hosted tunneled reverse proxy server with identity and context aware access control, designed to easily expose and protect applications running anywhere. Pangolin acts as a central hub and connects isolated networks — even those behind restrictive firewalls — through encrypted tunnels, enabling easy access to remote services without opening ports or requiring a VPN.

![](https://github.com/fosrl/pangolin/blob/main/public/screenshots/hero.png?raw=true)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Pangolin](https://github.com/fosrl/pangolin) | latest | ALGP-3.0 |
| [Docker CE](https://docs.docker.com/engine/install/ubuntu/) | 28.5.1 | Apache License, Version 2.0 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?onboarding_origin=marketplace&appId=204047377&image=fossorial-pangolince1&activation_redirect=%2Fdroplets%2Fnew%3FappId%3D204047377%26image%3Dfossorial-pangolince1)

## Creating an App using the API

In addition to creating a Droplet from the Pangolin (CE) 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Pangolin (CE) Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"fossorial-pangolince1"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Pangolin (CE)

## Pangolin Deployment Guide

This guide walks you through deploying and configuring Pangolin using the DigitalOcean Marketplace 1-Click App.

## Deployment Steps

### 1\. Create a Droplet from the Marketplace

1. Log in to your [DigitalOcean account](https://cloud.digitalocean.com/).
2. Navigate to the Marketplace and search for “Pangolin”.
3. Click on the Pangolin 1-Click App.
4. Configure your Droplet:
   - Choose a plan (recommended: at least 1 CPU and 1GB RAM; it can be deployed on DigitalOcean’s $6 s-1vcpu-1gb)
   - Select a datacenter region
   - Add SSH keys for authentication
   - Choose a hostname (e.g., pangolin-server)
5. Click “Create Droplet”.

### 2\. DNS Configuration

Before proceeding with setup, you need to configure your domain to point to your new Droplet:

1. Obtain your Droplet’s IP address from the DigitalOcean control panel.
2. Go to your domain registrar or DNS provider.
3. Create an A record that points your domain or subdomain to your Droplet’s IP address.

```
   Type: A
   Name: pangolin (or @ for root domain)
   Value: your_droplet_ip
   TTL: 3600 (or as low as possible for faster propagation)
```

4. Wait for DNS propagation (can take 5 minutes to several hours).

### 3\. Initial Setup

1. Once your Droplet is created, connect to it via SSH:

```
   ssh root@your_droplet_ip
```

2. The first-login setup script will run automatically, guiding you through the initial configuration:
   - Enter your domain name
   - Provide your email for SSL certificates
   - The script will run the Pangolin installer
   - The script will generate an admin sign-up secret for you to use on your first login
3. After the installer completes, you’ll be able to access the Pangolin dashboard.


### 4\. Dashboard Setup

1. Open a web browser and navigate to `https://your-domain.com`.
2. Follow the on-screen instructions to:
   - Create an admin account using the sign-up secret provided during setup
   - Set up your organization
   - Configure your first site

### 5\. Connecting Remote Sites

Pangolin allows you to connect remote sites using either the Newt client or standard WireGuard.

### 6\. Exposing Resources

1. In the Pangolin dashboard, go to Resources > Add Resource.

2. Configure your resource:
   - Name: A descriptive name
   - Type: HTTP/HTTPS, TCP, or UDP
   - Target: The IP and port of the service on your private site
   - Domain: The domain or subdomain to access the resource
   - Access Control: Set authentication and permission rules
3. Save the resource configuration.

4. Your private resource is now securely accessible through Pangolin.


### 7\. Security Considerations

- The Pangolin Droplet comes with UFW firewall pre-configured to allow only necessary ports.
- Set up 2FA for your admin account in the Pangolin dashboard.
- Consider setting up CrowdSec for additional protection against brute force attacks.
- Regularly update your Pangolin installation with the latest security patches.

### 8\. Maintenance and Updates

To update Pangolin in the future:

1. SSH into your Droplet:

```
   ssh root@your_droplet_ip
```

2. Follow the docs for how to update the containers: [https://docs.pangolin.net/self-host/how-to-update](https://docs.pangolin.net/self-host/how-to-update)

## Troubleshooting

### Cannot Access Dashboard

1. Verify DNS configuration with `dig your-domain.com`.
2. Check that your domain points to your Droplet’s IP address.
3. Ensure SSL certificates were issued correctly:

```
   cd /opt/pangolin
   docker compose logs traefik
```

4. Check firewall settings on both the Pangolin server and remote site.
5. Verify network connectivity with `ping` or `traceroute`.

## Need Help?

- Documentation: [https://docs.pangolin.net](https://docs.pangolin.net/)
- GitHub: [https://github.com/fosrl/pangolin](https://github.com/fosrl/pangolin)
- Discord: [https://pangolin.net/discord](https://pangolin.net/discord)
- Email Support: [support@pangolin.net](mailto:support@pangolin.net)

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#creating-an-app-using-the-api)
- [Getting Started After Deploying Pangolin (CE)](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#getting-started-after-deploying-pangolin-ce)
- [Pangolin Deployment Guide](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#pangolin-deployment-guide)
- [Deployment Steps](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#deployment-steps)
  - [1\. Create a Droplet from the Marketplace](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#1-create-a-droplet-from-the-marketplace)
  - [2\. DNS Configuration](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#2-dns-configuration)
  - [3\. Initial Setup](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#3-initial-setup)
  - [4\. Dashboard Setup](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#4-dashboard-setup)
  - [5\. Connecting Remote Sites](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#5-connecting-remote-sites)
  - [6\. Exposing Resources](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#6-exposing-resources)
  - [7\. Security Considerations](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#7-security-considerations)
  - [8\. Maintenance and Updates](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#8-maintenance-and-updates)
- [Troubleshooting](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#troubleshooting)
  - [Cannot Access Dashboard](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#cannot-access-dashboard)
- [Need Help?](https://docs.digitalocean.com/products/marketplace/catalog/pangolin-ce/#need-help)

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