---
url: "https://docs.digitalocean.com/products/marketplace/catalog/erxes/"
title: "Erxes | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/erxes/)
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

- Erxes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Erxes

Generated on 5 Dec 2022
from [the Erxes catalog page](https://marketplace.digitalocean.com/apps/erxes)

Hello 👋

Welcome to erxes, the open-source Hubspot alternative.

erxes is an open-source experience operating system (XOS) that enables SaaS providers and digital marketing agencies/developers to create unique experiences that work for all types of businesses. We will change how businesses grow by delivering breakthrough value to our community. Come along on this journey with us!

![hubspot-alternative](https://erxes-docs.s3.us-west-2.amazonaws.com/xos.jpeg)

erxes is composed of 2 main components: **XOS & Plugins**

**XOS:** It contains the project’s core. You can find the admin panel and the code that runs different plugins. The operating system comes with utility features that allow users to customize, improve speed, and enhance the experience along with plugins/features.

**Plugins:** erxes comes with a set of plugins that allow you to create unique customer experiences. Below is a list of some plugins you can choose from our marketplace after you’ve finished installing erxes XOS:

- **Team Inbox:** Combine real-time client and team communication with in-app messaging, live chat, email, and form, so your customers can reach you, however, and whenever they want.
- **Messenger:** Enable businesses to capture every single customer feedback and educate customers through knowledge-base right from the erxes Messenger.
- **Sales Management:** Easy and clear sales funnels allow you to control your sales pipeline from one responsive field by precisely analyzing your progress and determining your next best move for success.
- **Lead generation:** Turn regular visitors into qualified leads by capturing them with a customizable landing page, forms, pop-up, or embed placements.
- **Engage:** Start converting your prospects into potential customers through email, SMS, messenger, or more interactions to drive them to a successful close.
- **Contact Management:** Access our all-in-one CRM system in one go, so it’s easier to coordinate and manage your customer interactions.
- **Knowledgebase:** Educate your customers and staff by creating a help center related to your brands, products, and services to reach a higher level of satisfaction.
- **Task Management:** Create a more collaborative, self-reliant and cross-linked team.

[**See more on our website**](https://erxes.io/marketplace)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Mongodb | 4.0.3 |  |
| Elasticsearch | 7.x |  |
| Nginx | 1.14.0 |  |
| NodeJS | 12.16.3 |  |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=nmtec-erxes-18-04)

## Creating an App using the API

In addition to creating a Droplet from the Erxes 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Erxes Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"nmtec-erxes-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Erxes

## Connect to your droplet

Connect to your droplet via ssh.

```
ssh root@YOUR_DROPLET_PUBLIC_IP
```

- `YOUR_DROPLET_PUBLIC_IP` is your droplet public IP address

## Configure NGINX

- You need to replace the `YOUR_DOMAIN_COM` with your actual `domain name` in the nginx config file `/etc/nginx/sites-available/default`.

```
nano /etc/nginx/sites-available/default
```

- After replacing YOUR\_DOMAIN\_COM with your actual domain name. Save with ctrl + x and then y to accept the changes.
- Test the **NGINX** configuration to make sure you don’t have any errors

```
nginx -t
```

You should see the following output:

```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

- Reload nginx service

```
systemctl reload nginx
```

## Install Let’s Encrypt using Certbot

Execute Certbot. You will asked several questions, you can answer as follows:

- Enter your email address
- Agree with the **Terms of Service**
- Answer `Yes` or `No`, if you want to share your email address with the Electronic Frontier Foundation
- Select the corresponding number associated with your domain name, usually `1`
- Choose `2` to redirect all your traffic to a secure **HTTPS**

```
certbot --nginx
```

## Configure `erxes`

- Run the following to change the password for `erxes` and switch to user `erxes`.

```
passwd erxes
su erxes
```

- The rest of the steps are run as `erxes` user.

### Configure PM2 `ecosystem.config.js`

- Run the following command to replace `YOUR_DOMAIN_COM` with your actual domain name. Please use `your domain` for `your.domain.com`.

```
cd ~/erxes.io
sed -i 's/YOUR_DOMAIN_COM/your.domain.com/g' ecosystem.config.js
```

### Configure frontend environment variables

- Open the `~/erxes.io/erxes/js/env.js` file in the nano editor.

```
nano ~/erxes.io/erxes/js/env.js
```

- Copy the following **environment variables** in between the **{ }**, and replace **YOUR\_DOMAIN\_COM** with your actual domain name.

```
NODE_ENV: "production",
REACT_APP_API_URL: "https://YOUR_DOMAIN_COM/api",
REACT_APP_API_SUBSCRIPTION_URL: "wss://YOUR_DOMAIN_COM/api/subscriptions",
REACT_APP_CDN_HOST: "https://YOUR_DOMAIN_COM/widgets"
```

It should look like this, but **with your actual domain name**:

```
window.env = {
    NODE_ENV: "production",
    REACT_APP_API_URL: "https://erxes.example.com/api",
    REACT_APP_API_SUBSCRIPTION_URL: "wss://erxes.example.com/api/subscriptions",
    REACT_APP_CDN_HOST: "https://erxes.example.com/widgets"
}
```

- save the file with `ctrl + x` and then `y` to accept all changes.

You are now ready to **initialize** and **load the permissions** in **erxes**.

### export MongoDB URL

```
cd ~/erxes.io
nano ecosystem.config.js
```

Locate the “MONGO\_URL”: “mongodb://erxes:82e3e42ef31e51d51687b366118200e2@localhost/erxes?authSource=admin&replicaSet=rs0”, under the erxes-api.

- Copy the MONGO\_URL and exit the nano editor with ctrl + x.
- Now you will need to export and set the variable MONGO\_URL, with the copied URL. See below:

**Example:**

```
# example
# export MONGO_URL="mongodb://erxes:92c54fa1f0658xxxxc2d9ce618b008b4@localhost/erxes?authSource=admin&replicaSet=rs0"
```

**Use your copied MONGO\_URL below:**

```
export MONGO_URL="YOUR_COPIED_MONGO_URL_HERE"
```

### Initialize and Load permissions for erxes

- initialize Erxes and generate **login password**.

```
source ~/.nvm/nvm.sh
nvm use default
cd ~/erxes.io/erxes-api/dist
node commands/initProject
```

You should have a generated **password**. The output will be similar to this:

```
Your new password: HcEjfBMxws

# note this down
```

- Run this final command to finish the installation of **erxes**.

```
cd ~/erxes.io/erxes-api/dist
node commands/loadPermissionData

cd ~/erxes.io
pm2 restart ecosystem.config.js
```

### Congratulations, time to log in

You may now visit your domain, and log in.

The username is **[admin@erxes.io](mailto:admin@erxes.io)**, and the password is the password generated above.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#creating-an-app-using-the-api)
- [Getting Started After Deploying Erxes](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#getting-started-after-deploying-erxes)
- [Connect to your droplet](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#connect-to-your-droplet)
- [Configure NGINX](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#configure-nginx)
- [Install Let’s Encrypt using Certbot](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#install-lets-encrypt-using-certbot)
- [Configure `erxes`](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#configure-erxes)
  - [Configure PM2 `ecosystem.config.js`](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#configure-pm2-ecosystemconfigjs)
  - [Configure frontend environment variables](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#configure-frontend-environment-variables)
  - [export MongoDB URL](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#export-mongodb-url)
  - [Initialize and Load permissions for erxes](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#initialize-and-load-permissions-for-erxes)
  - [Congratulations, time to log in](https://docs.digitalocean.com/products/marketplace/catalog/erxes/#congratulations-time-to-log-in)

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