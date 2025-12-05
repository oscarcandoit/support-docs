---
url: "https://docs.digitalocean.com/products/marketplace/catalog/farm/"
title: "FARM | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/farm/)
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

- FARM

[Give Feedback](https://ideas.digitalocean.com/documentation)

# FARM

Generated on 23 May 2023
from [the FARM catalog page](https://marketplace.digitalocean.com/apps/farm)

The FARM stack consists of open-source software to get the backend and frontend up and running. Available as a one-click install, get NodeJS, Python, FastAPI, React, and MongoDB installed on your Droplet in less than a minute.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| NGINX | 1.18.0 | [Custom](http://nginx.org/LICENSE) |
| Gunicorn | 20.1.0 | [MIT License](https://github.com/benoitc/gunicorn/blob/master/LICENSE) |
| Uvicorn | 0.21.1 | [BSD 3-Clause “New” or “Revised” License](https://github.com/encode/uvicorn/blob/master/LICENSE.md) |
| Certbot | 1.21.0 | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |
| npm | 9.5.1 | [Artistic License 2.0](https://docs.npmjs.com/policies/npm-license/) |
| pm2 | 5.3.0 | [GNU AGPL v3](https://github.com/Unitech/pm2/blob/master/GNU-AGPL-3.0.txt) |
| React | ^18.2.0 | [MIT License](https://github.com/facebook/react/blob/main/LICENSE) |
| FastAPI | 0.95.0 | [MIT License](https://github.com/tiangolo/fastapi/blob/master/LICENSE) |
| MongoDB | 6.0.4 | [SSPL](https://www.mongodb.com/licensing/server-side-public-license) |
| Node.js | [19.8.1](https://nodejs.org/dist/latest-v19.x/docs/api/) | [Custom](https://github.com/nodejs/node/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=farm)

## Creating an App using the API

In addition to creating a Droplet from the FARM 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB FARM Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"farm"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying FARM

After your droplet is created, you can access your FARM stack by typing the droplet’s IP address in your browser:

![FARM Welcome Page](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-03-27%20at%2017.28.09.png)

If you see the _Site can’t be reached_ or _Nginx 502 Bad Gateway_, give it 2-3 minutes and reload the page.

To connect to the local MongoDB console, use:

```
$ mongosh 127.0.0.1:27017 -u "admin" -p "<Your MongoDB password>" --authenticationDatabase "admin"
```

To connect your backend to the local MongoDB, use this connection string:

```
mongodb://admin:<Your MongoDB password>@127.0.0.1:27017
```

Your MongoDB password can be found on the welcome message of your FARM terminal.

Sample React application is served by PM2 as a _farm_ user and is available by typing the droplet’s IP address in your browser.

Sample FastAPI application is also served by PM2 as a _farm_ user and is deployed by default on port 8000. You can ping the default FastAPI application by running:

```
$ curl http://<your droplet ip>:8000
"Welcome to your FARM droplet!"
```

You can also view auto-generated Swagger documents for your FastAPI application by typing in your browser: `&lt;your droplet ip&gt;:8000/docs`

All deployed applications can be viewed by running:

```
$ su - farm -c "pm2 list"
```

## Changing FastAPI port

FARM droplet comes with a simple FastAPI application hosted on port 8000. Below you can find how to change the port for your FastAPI application. In the example below we will change default 8000 to 9000.

First of all, SSH into your droplet:

```
$ ssh root@<your droplet IP>
```

Next, open the Gunicorn configuration file in your preferred text editor:

```
$ nano /etc/gunicorn.d/gunicorn.py
```

You should see a file which looks like this:

```
"""gunicorn WSGI server configuration."""
from multiprocessing import cpu_count
from os import environ

def max_workers():
    return cpu_count() * 2 + 1

max_requests = 1000
worker_class = 'gevent'
workers = max_workers()

bind = '0.0.0.0:8000'
```

Change the port in the bind field to a desired value, in this example, it’s 9000:

```
bind = '0.0.0.0:9000'
```

Close and save the file.

Now, create a firewall rule for the new port:

```
$ ufw allow 9000/tcp
```

Finally, login as a _farm_ user and restart FastAPI process sample\_farm\_api:

```
$ su farm
$ pm2 restart sample_farm_api
```

Curl your new port to test the results:

```
$ curl http://<your droplet ip>:9000
"Welcome to your FARM droplet!"
```

## Configuring Nginx

After you have created your FARM droplet, it is highly recommended you configure an Nginx server block file for each site you plan to host. Doing so will make the default configuration the fallback, as intended, and will make it easier to manage changes when hosting multiple sites.

To do so, you’ll need to create two things for each domain: a new directory in /var/www for that domain’s content, and a new server block file in /etc/nginx/sites-available for that domain’s configuration. For a detailed walkthrough, you can follow [How to Set Up Nginx Server Blocks](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04).

## Adding a domain name

A domain name allows others to access your website with an encrypted connection. If you intend to host a website on your FARM Droplet 1-Click.

FARM Droplet 1-Click comes with certbot installed, making it easier to enable HTTPS on your 1-Click.

First, ensure your domain points to the new droplet IP. If your DNS is managed by DigitalOcean, it should look like this:

![FARM Domain Example](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-03-27%20at%2017.51.50.png)

The DNS Host may be the same company you registered the domain with or another entity you designate. To connect your DNS hosting to DigitalOcean, check out [this guide](https://docs.digitalocean.com/tutorials/dns-registrars/).

Once your A record is set up, you should configure nginx to host your new domain properly. Detailed instructions can be found in [this article](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04).

After you have configured the domain and nginx, you can run certbot to acquire HTTPS certificates for your droplet:

```
$ certbot –nginx -d <your domain> -d www.<your domain>
```

After you answer questions from certbot, your HTTPS setup is finished.

Use your domain in the web browser to access your FARM Droplet.

## Droplet Summary

- UFW firewall allows only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.
- The FARM Droplet comes with the _farm_ user for managing sample applications and PM2.
- The MongoDB is set with the admin user and SCRAM-SHA-1 authentication.
- The MongoDB password for the admin user is located in /root/.digitalocean\_password.
- Sample React application is located at /home/farm/client.
- Sample FastAPI application is located at /home/farm/server.
- Sample React and FastAPI applications are served by pm2 from user _farm_.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/farm/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/farm/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/farm/#creating-an-app-using-the-api)
- [Getting Started After Deploying FARM](https://docs.digitalocean.com/products/marketplace/catalog/farm/#getting-started-after-deploying-farm)
- [Changing FastAPI port](https://docs.digitalocean.com/products/marketplace/catalog/farm/#changing-fastapi-port)
- [Configuring Nginx](https://docs.digitalocean.com/products/marketplace/catalog/farm/#configuring-nginx)
- [Adding a domain name](https://docs.digitalocean.com/products/marketplace/catalog/farm/#adding-a-domain-name)
- [Droplet Summary](https://docs.digitalocean.com/products/marketplace/catalog/farm/#droplet-summary)

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