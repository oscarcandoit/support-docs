---
url: "https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/"
title: "PENN (Postgres + Express + Next.js) | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/)
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

- PENN (Postgres + Express + Next.js)

[Give Feedback](https://ideas.digitalocean.com/documentation)

# PENN (Postgres + Express + Next.js)

Generated on 30 Mar 2025
from [the PENN (Postgres + Express + Next.js) catalog page](https://marketplace.digitalocean.com/apps/penn-postgres-express-next-js)

In a world dominated by serverless architectures and escalating cloud expenses, the value of owning and scaling your own infrastructure often gets overlooked. Driven by a commitment to simplicity, control, and affordability, PENN Stack was born.

PENN Stack combines four powerful technologies—PostgreSQL, Express.js, Next.js, and Nginx—into one cohesive and scalable solution. Designed for developers who appreciate self-hosted infrastructure without sacrificing modern capabilities, PENN Stack empowers you to effortlessly deploy your applications on a DigitalOcean Droplet using a convenient 1-Click app available in the marketplace.

Take control of your tech stack, minimize your cloud costs, and scale to millions without compromise.

![](https://aumkareshwarthakur.com/wp-content/uploads/2025/03/penn-stack-application.png)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Postgres | 16.8 | [PostgreSQL](https://opensource.org/license/postgresql) |
| Express.js | 4.21.2 | [MIT](https://github.com/expressjs/express/blob/master/LICENSE) |
| [Next.js](https://nextjs.org/) | 15.2.4 | [MIT](https://github.com/vercel/next.js/blob/canary/license.md) |
| Nginx | [1.17.10](https://packages.ubuntu.com/focal/nginx) | [Custom](https://nginx.org/LICENSE) |
| NPM | 11.2.0 | [Artistic License 2.0](https://docs.npmjs.com/policies/npm-license/) |
| Node.js | v22.14.0 | [Custom](https://github.com/nodejs/node/blob/main/LICENSE) |
| PM2 | 6.0.5 | [GNU AGPL v3](https://github.com/Unitech/pm2/blob/master/GNU-AGPL-3.0.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=aumkarthakur-pennpostgresexpr)

## Creating an App using the API

In addition to creating a Droplet from the PENN (Postgres + Express + Next.js) 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB PENN (Postgres + Express + Next.js) Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"aumkarthakur-pennpostgresexpr"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying PENN (Postgres + Express + Next.js)

## Getting Started After Deployment

After creating your Droplet, visit its public IPv4 address to view your PENN Stack application. If you see a Database Connection Error , don’t worry! It’s expected. You’ll need to SSH into your Droplet to configure it.

## Step 1: Login to your droplet

Connect to your Droplet as root via SSH from your local terminal. Replace your\_droplet\_ip with your actual Droplet IP address:

```
ssh root@your_droplet_public_ipv4
```

## Step 2: Server Setup Wizard

Upon SSH connection, an interactive Server Setup Wizard will launch automatically. Select option 3 (Domain & PostgreSQL setup) for typical installations.

![](https://aumkareshwarthakur.com/wp-content/uploads/2025/03/penn-stack-tutorial.png)

If the wizard doesn’t launch automatically, run it manually with:

```
/opt/setup_scripts/setup.sh
```

### Nginx Domain Setup

Enter your domain and email to configure SSL with Let’s Encrypt. Choose Y for HTTPS redirection. After completion, review the configuration summary.

![](https://aumkareshwarthakur.com/wp-content/uploads/2025/03/nginx-configuration.png)

### Your Application is Accessible via Domain

After setting up Nginx, your application is accessible via the domain provided during configuration.

![](https://aumkareshwarthakur.com/wp-content/uploads/2025/03/nginx-configuration-completed.png)

### PostgreSQL Database Setup

Next, configure your PostgreSQL database by entering your preferred database name and username.

![](https://aumkareshwarthakur.com/wp-content/uploads/2025/03/postgresql-setup.png)

The wizard will create the PostgreSQL database and user, storing credentials in **/var/www/html/.env**.

Next.js will rebuild automatically. After completion, PM2 restarts the app, confirming with a “SETUP COMPLETED” message.

![](https://aumkareshwarthakur.com/wp-content/uploads/2025/03/nextjsapp-built.png)

## Accessing application code

Your application files are located at **/var/www/html**. You can use FileZilla or another SFTP client to upload or modify files.

## Useful Commands

Following are useful commands which you’ll be using every now and then:

### Rebuilding App

```
npm run build
```

### Restarting PM2 (Required after rebuilding app)

```
pm2 start ecosystem.config.cjs
```

### Checking Logs

```
pm2 logs
```

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#creating-an-app-using-the-api)
- [Getting Started After Deploying PENN (Postgres + Express + Next.js)](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#getting-started-after-deploying-penn-postgres--express--nextjs)
- [Getting Started After Deployment](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#getting-started-after-deployment)
- [Step 1: Login to your droplet](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#step-1-login-to-your-droplet)
- [Step 2: Server Setup Wizard](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#step-2-server-setup-wizard)
  - [Nginx Domain Setup](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#nginx-domain-setup)
  - [Your Application is Accessible via Domain](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#your-application-is-accessible-via-domain)
  - [PostgreSQL Database Setup](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#postgresql-database-setup)
- [Accessing application code](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#accessing-application-code)
- [Useful Commands](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#useful-commands)
  - [Rebuilding App](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#rebuilding-app)
  - [Restarting PM2 (Required after rebuilding app)](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#restarting-pm2-required-after-rebuilding-app)
  - [Checking Logs](https://docs.digitalocean.com/products/marketplace/catalog/penn-postgres-express-next-js/#checking-logs)

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