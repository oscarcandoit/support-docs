---
url: "https://docs.digitalocean.com/products/marketplace/catalog/nodejs/"
title: "NodeJS | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/nodejs/)
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

- NodeJS

[Give Feedback](https://ideas.digitalocean.com/documentation)

# NodeJS

Generated on 20 Nov 2025
from [the NodeJS catalog page](https://marketplace.digitalocean.com/apps/nodejs)

A lightweight platform ideal for building fast, scalable network applications in Javascript. Similar in design to Ruby’s Event Machine or Python’s Twisted, and built on Chrome’s JavaScript runtime, NodeJS is ideal for data-intensive apps that run across distributed devices.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Node.js | [22.x](https://nodejs.org/docs/latest/api/) | [Custom](https://github.com/nodejs/node/blob/master/LICENSE) |
| NPM | [6.14.4](https://docs.npmjs.com/about-npm/) | [Artistic License 2.0](https://www.npmjs.com/policies/npm-license) |
| NGINX | [1.17.10](https://packages.ubuntu.com/focal/nginx) | [Custom](http://nginx.org/LICENSE) |
| PM2 | [4.4.0](https://pm2.keymetrics.io/) | [GNU AGPL v3](https://github.com/Unitech/pm2/blob/master/GNU-AGPL-3.0.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=nodejs-20-04)

## Creating an App using the API

In addition to creating a Droplet from the NodeJS 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB NodeJS Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"nodejs-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying NodeJS

After you created a Droplet, you can navigate to its public IPv4 address to see the sample application live.

You will then be prompted to enter a password. If you created your Droplet with a root user password, enter this in the terminal. If you created your Droplet with an ssh key, enter the passphrase associated with your key.

**Using MongoDB Database-as-a-Service with your NodeJS 1-Click App**

If you selected the MongoDB Database-as-a-Service option when you created your NodeJS 1-Click App, you will have a `DATABASE_URL` environment variable pre-configured within your Droplet. This variable contains the full connection string for your MongoDB database.

Your MongoDB database credentials are also persisted on your Droplet at `/root/.digitalocean_dbaas_credentials`.

Here is a sample Node.js app showing a connection to the MongoDB database:

```
const {MongoClient} = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <your-mongo-connection-string> to reflect your cluster. You can find it on the
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */

    const uri = '<your-mongo-connection-string>';

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Connected successfully. Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);
```

To learn how to make modifications or get your code onto your Droplet, here are the steps. You can also follow the sample application for the instructions.

**Step 1: Access to your Droplet**

Open a terminal on your computer to access your Droplet as the root user using the following command:

```
ssh root@your_droplet_public_ipv4
```

**Step 2: Make modifications to the sample application**

Modify this script at /var/www/html/hello.js. You can then see the results live by using pm2, a process manager that schedules your code to run at boot time. The application runs as the nodejs user, so changes to pm2 need to be run as the nodejs user.

```
sudo -u nodejs pm2 restart hello
```

**Step 3: Get your code onto the Droplet**

Clone your NodeJS code onto the droplet, anywhere you like. Note: If you’re not using source code control, you can directly upload the files to your droplet using SFTP.

cd into the directory where your NodeJS code lives, and install any dependencies. (For example, if you have a package.json file, run npm install.)

Launch your app

```
sudo -u nodejs pm2 start <your-file>
```

Map the port your app run on to an HTTP URL

```
nano /etc/nginx/sites-available/default
```

Edit the existing entry that exposes the “hello” app at port 3000 to the world so that it points to your app’s port instead.

Enable your new nginx config.

```
sudo systemctl restart nginx
```

Call to schedule your code to run at launch.

```
sudo -u nodejs pm2 save
```

Repeat these steps for any other NodeJS apps that need to run concurrently – schedule them to run at boot time on whatever internal port you like using PM2, then map that port to an HTTP/HTTPS URL in the nginx config. Build out the URL directory structure you need by mapping applications to URL paths; that’s the reverse proxy method in a nutshell!

Now you can delete the sample app we installed on your Droplet. Stop running the initial script (that you’re viewing now)

```
sudo -u nodejs pm2 delete hello
```

Stop it from running on Droplet boot.

```
sudo -u nodejs pm2 save
```

**Step 4: Get production-ready**

There’s a lot you’ll want to do to make sure you’re production-ready. Here are the popular things that people will do.

**Non-root user:** Set up a non-root user for day-to-day use

**Firewall:** Review your firewall settings by calling sudo ufw status, and make any changes you need. By default, only SSH/SFTP (port 22), HTTP (port 80), and HTTPS (port 443) are open. You can also disable this firewall by calling sudo ufw disable and use a DigitalOcean cloud firewall instead, if you like (they’re free).

**Domain:** Register a custom domain

**Storage:** You can mount a volume (up to 16TB) to this server to expand the filesystem, provision a database cluster (that runs MySQL, Redis, or PostgreSQL), or use a Space, which is an S3-compatible bucket for storing objects.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/nodejs/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/nodejs/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/nodejs/#creating-an-app-using-the-api)
- [Getting Started After Deploying NodeJS](https://docs.digitalocean.com/products/marketplace/catalog/nodejs/#getting-started-after-deploying-nodejs)

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