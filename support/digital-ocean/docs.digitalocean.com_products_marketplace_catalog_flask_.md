---
url: "https://docs.digitalocean.com/products/marketplace/catalog/flask/"
title: "Flask | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/flask/)
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

- Flask

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Flask

Generated on 11 Dec 2023
from [the Flask catalog page](https://marketplace.digitalocean.com/apps/flask)

Flask is an extensible web micro-framework written in Python. Designed to get started as quickly and easily as possible with the ability to scale up, Flask is a great solution for projects of any size and complexity.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| NGINX | 1.18.0 | [Custom](http://nginx.org/LICENSE) |
| Certbot | 1.21.0 | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |
| Gunicorn | 20.1.0 | [MIT License](https://github.com/benoitc/gunicorn/blob/master/LICENSE) |
| Flask | 3.0.0 | [BSD-3-Clause](https://flask.palletsprojects.com/en/2.2.x/license/) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=flask)

## Creating an App using the API

In addition to creating a Droplet from the Flask 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Flask Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"flask"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Flask

After your droplet is created, you can access your Flask stack by typing the droplet’s IP address in your browser:

![Flask Welcome Page](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/flask.png)

If you see the _Site can’t be reached_ or _Nginx 502 Bad Gateway_, give it 2-3 minutes and reload the page.

Flask droplet ships a simple Flask project with static files, wsgi server, gunicorn service running wsgi and nginx proxy to gunicorn.

- The sample project can be found in /`home/flask/flask_project`
- WSGI server is in `/home/flask/flask_project/wsgi.py`
- Gunicorn systemd service can be found in `/etc/systemd/system/gunicorn.service`
- Gunicorn socket is located at `/home/flask/gunicorn.socket`

## Configuring Nginx

After you have created your Flask droplet, it is highly recommended you configure an Nginx server block file for each site you plan to host. Doing so will make the default configuration the fallback, as intended, and will make it easier to manage changes when hosting multiple sites.

To do so, you’ll need to create two things for each domain: a new directory in /var/www for that domain’s content, and a new server block file in /etc/nginx/sites-available for that domain’s configuration. For a detailed walkthrough, follow [How to Set Up Nginx Server Blocks](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04).

## Adding a domain name

A domain name allows others to access your website with an encrypted connection if you intend to host a website on your Flask Droplet 1-Click.

Flask Droplet 1-Click comes with certbot installed, making it easier to enable HTTPS on your 1-Click.

First, ensure your domain points to the new droplet IP. If your DNS is managed by DigitalOcean, it should look like this:

![Flask DNS Example](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-03-21%20at%2014.15.01.png)

The DNS Host may be the same company you registered the domain with or another entity you designate. To connect your DNS hosting to DigitalOcean, check out [this guide](https://docs.digitalocean.com/tutorials/dns-registrars/).

After you have configured the domain and nginx, you can run certbot to acquire HTTPS certificates for your droplet:

![Flask Certbot Example](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-03-21%20at%2014.34.31.png)

After you answer questions from certbot, your HTTPS setup is finished.

Use your domain in the web browser to access your Flask Droplet.

## Droplet Summary

- UFW firewall allows only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.
- The Flask Droplet comes with the _flask_ user.
- Sample Flask application is located at /home/flask/flask\_project.
- Sample Flask application is hosted via gunicorn as a systemd service.
- Service is located at /etc/systemd/system/gunicorn.service
- _flask_ user credentials can be found at /root/.digitalocean\_passwords

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/flask/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/flask/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/flask/#creating-an-app-using-the-api)
- [Getting Started After Deploying Flask](https://docs.digitalocean.com/products/marketplace/catalog/flask/#getting-started-after-deploying-flask)
- [Configuring Nginx](https://docs.digitalocean.com/products/marketplace/catalog/flask/#configuring-nginx)
- [Adding a domain name](https://docs.digitalocean.com/products/marketplace/catalog/flask/#adding-a-domain-name)
- [Droplet Summary](https://docs.digitalocean.com/products/marketplace/catalog/flask/#droplet-summary)

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