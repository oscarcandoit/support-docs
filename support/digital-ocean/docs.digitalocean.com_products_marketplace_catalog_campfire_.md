---
url: "https://docs.digitalocean.com/products/marketplace/catalog/campfire/"
title: "Campfire | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/campfire/)
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

- Campfire

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Campfire

Generated on 6 Nov 2025
from [the Campfire catalog page](https://marketplace.digitalocean.com/apps/campfire)

## Campfire 1-Click Application

Looking for an alternative to expensive, subscription-based chat services? Campfire is a simple, self-hosted group chat platform designed by 37signals for teams who want to own their data. With no recurring fees, it provides all the essential features you need, including real-time messaging, direct messages, private rooms, file sharing, powerful search, and even chatbot support. Get complete control over your data and deploy Campfire with a single click from the DigitalOcean Marketplace for a secure and private chat solution you control.

## What is Campfire?

Campfire is Basecamp’s elegant group chat solution that emphasizes simplicity and usability. Built on modern web technologies, it offers:

- **Real-time messaging** \- Instant communication with your team
- **Clean interface** \- Distraction-free design focused on conversation
- **File sharing** \- Easy drag-and-drop file uploads
- **Search functionality** \- Find messages and files quickly
- **Mobile responsive** \- Works seamlessly across devices
- **Self-hosted** \- Complete control over your data and privacy

## Key Features

- Simple, intuitive chat interface
- Real-time messaging with WebSocket support
- File uploads and sharing
- Message search and history
- Mobile-responsive design
- Docker-based deployment for easy management
- Automated SSL/TLS configuration
- Built-in user management

## System Requirements

Campfire is packed as a Docker container image and runs on your own droplet on DigitalOcean. Use this guide to choose the appropriate size droplet for your needs:

| Users | RAM | CPU |
| --- | --- | --- |
| 250 | 2GB | 1CPU |
| 1,000 | 8GB | 4CPU |
| 5,000 | 32GB | 16CPU |
| 10,000 | 64GB | 32CPU |

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Campfire | Latest | MIT |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-campfire)

## Creating an App using the API

In addition to creating a Droplet from the Campfire 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Campfire Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-campfire"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Campfire

## Getting Started

### Quick Start

1. **Deploy the Droplet** \- Select this 1-Click App from the DigitalOcean Marketplace
2. **Access Campfire** \- Navigate to your Droplet’s IP address in a web browser (e.g., `http://your-droplet-ip`)
3. **Configure your team** \- Set up user accounts and start chatting

### Setting Up a Custom Domain (Recommended)

For a professional setup with automatic SSL/TLS certificates:

1. **Point your domain to the Droplet**
   - In your DNS provider, create an A record pointing your domain (e.g., `chat.yourcompany.com`) to your Droplet’s IP address
   - Wait for DNS propagation (usually 5-15 minutes)
2. **Configure Campfire for your domain**


   - SSH into your Droplet: `ssh root@your-droplet-ip`
   - Edit the configuration file: `nano /opt/campfire.env`
   - Uncomment and update the TLS\_DOMAIN line:

```
TLS_DOMAIN=chat.yourcompany.com
```

   - Comment out the DISABLE\_SSL line by adding # at the beginning:

```
# DISABLE_SSL=true
```

3. **Restart Campfire to apply changes**


```
/opt/restart-campfire.sh
```

4. **Access your secure Campfire installation**\- Visit `https://chat.yourcompany.com` in your browser- SSL certificates will be automatically generated and configured

**Note**: The initial SSL certificate generation may take a few minutes. If you encounter any SSL errors, wait a moment and refresh the page.

## Updating Campfire

Your Campfire installation automatically updates to the latest version on first boot. To manually update to the latest version at any time:

1. **SSH into your Droplet**

```
ssh root@your-droplet-ip
```

2. **Run the update script**

```
/opt/update-campfire.sh
```

The update script will:

- Pull the latest code from GitHub
- Rebuild the Docker image
- Restart Campfire with the updated code
- Preserve all your configuration and data

**Note**: Updates may take a few minutes to complete. Your chat history and configuration will be preserved during updates.

## Post-Deployment

After deployment, Campfire will be accessible via HTTP on port 80. The application includes:

- Automatic firewall configuration
- Docker container with restart policies
- Persistent data storage via Docker volumes
- Generated secure session keys

For production use, consider:

- Configuring a custom domain with SSL/TLS
- Setting up regular backups of the data volume
- Configuring email notifications (if needed)

## Support

Campfire is an open-source project by Basecamp. For technical support:

- [Official Campfire Repository](https://github.com/basecamp/once-campfire)
- [DigitalOcean Community](https://www.digitalocean.com/community)
- [DigitalOcean Documentation](https://docs.digitalocean.com/)

Perfect for small teams, startups, and organizations looking for a simple, self-hosted chat solution without the complexity of larger enterprise platforms.

In this article...

- [Campfire 1-Click Application](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#campfire-1-click-application)
- [What is Campfire?](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#what-is-campfire)
- [Key Features](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#key-features)
- [System Requirements](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#system-requirements)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#creating-an-app-using-the-api)
- [Getting Started After Deploying Campfire](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#getting-started-after-deploying-campfire)
- [Getting Started](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#getting-started)
  - [Quick Start](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#quick-start)
  - [Setting Up a Custom Domain (Recommended)](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#setting-up-a-custom-domain-recommended)
- [Updating Campfire](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#updating-campfire)
- [Post-Deployment](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#post-deployment)
- [Support](https://docs.digitalocean.com/products/marketplace/catalog/campfire/#support)

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