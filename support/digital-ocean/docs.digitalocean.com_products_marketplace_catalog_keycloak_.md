---
url: "https://docs.digitalocean.com/products/marketplace/catalog/keycloak/"
title: "Keycloak | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/keycloak/)
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

- Keycloak

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Keycloak

Generated on 15 Apr 2025
from [the Keycloak catalog page](https://marketplace.digitalocean.com/apps/keycloak)

Keycloak is a single sign-on solution for web apps and RESTful web services. Keycloak aims to simplify security so that it is easy for application developers to secure the apps and services they have deployed in their organization. Security features that developers normally have to write for themselves are provided out of the box and are easily tailored to the individual requirements of your organization. Keycloak provides customizable user interfaces for login, registration, administration, and account management.

**Keycloak requires 2GB of RAM and 2CPU cores, AT MINIMUM.**

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Postgres | 16 | [Postgres SQL](https://opensource.org/license/postgresql) |
| Nginx | 1.18 | [Custom](https://nginx.org/LICENSE) |
| Certbot | 0.40 | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-keycloak)

## Creating an App using the API

In addition to creating a Droplet from the Keycloak 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Keycloak Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-keycloak"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Keycloak

After your droplet is created, you can access your Keycloak instance by typing the droplet’s IP address in your browser. Your browser is likely to show a Privacy Error, however, this is completely expected as Keycloak 1-Click uses self-signed certificates. If you get a Privacy Error, click on `Advanced` and `Proceed to...`:

![Keycloak Privacy Error](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202024-07-03%20at%2018.21.13.png)

After this, you will be greeted by the Keycloak login page:

![Keycloak Login Page](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202024-07-03%20at%2018.28.22.png)

_If you see the Site can’t be reached or Nginx 502 Bad Gateway, give it 2-3 minutes and reload the page. If it still does not load, you may need a larger droplet size. Minimum Requirements are 2GB Ram and 2CPUs._

## Retrieve login credentials

To retrieve login credentials, SSH into your Keycloak Droplet 1-Click:

```
$ ssh root@<your droplet IP>
```

Now you can read the file with Keycloak passwords by using:

```
$ cat ~/.digitalocean_passwords
```

This will return 3 passwords

- `KEYCLOAK_ADMIN_PASSWORD`: Use this password to log in as an `admin` user.
- `KEYCLOAK_DATABASE_PASSWORD`: Password to the database used by Keycloak.
- `KEYSTORE_PASSWORD`: Password to the certificates keystore.

Now you can log in as an `admin` user with the `KEYCLOAK_ADMIN_PASSWORD` you just retrieved!

## Configuring Nginx

After you have created your Keycloak droplet, it is highly recommended you configure an Nginx server block file for each site you plan to host. Doing so will make the default configuration the fallback, as intended, and will make it easier to manage changes when hosting multiple sites.

To do so, you’ll need to create two things for each domain: a new directory in /var/www for that domain’s content, and a new server block file in /etc/nginx/sites-available for that domain’s configuration. For a detailed walkthrough, you can follow [How to Set Up Nginx Server Blocks](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04).

## Adding a domain name

A domain name allows others to access your website with an encrypted connection. If you intend to host a website on your Keycloak Droplet 1-Click.

Keycloak Droplet 1-Click comes with certbot installed, making it easier to enable HTTPS on your 1-Click.

First, ensure your domain points to the new droplet IP. If your DNS is managed by DigitalOcean, it should look like this:

![Keycloak Domain Example](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202024-07-03%20at%2018.38.33.png)

The DNS Host may be the same company you registered the domain with or another entity you designate. To connect your DNS hosting to DigitalOcean, check out [this guide](https://docs.digitalocean.com/tutorials/dns-registrars/).

Once your A record is set up, you should configure nginx to host your new domain properly. Detailed instructions can be found in [this article](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04).

After you have configured the domain and nginx, you can run certbot to acquire HTTPS certificates for your droplet:

```
$ certbot -–nginx -d <your domain>
```

After you answer questions from certbot, your HTTPS setup is finished.

Use your domain in the web browser to access your Keycloak Droplet.

## Droplet summary

- UFW firewall allows only SSH (port 22, rate limited), Nginx (ports 443 and 80) and Keycloak (ports 8443 and 9000).
- Keycloak is running under the docker container. To check logs use:

```
$ docker logs keycloak
```

- Nginx is configured to redirect requests to Keycloak, acting as a reverse proxy for the application server.
- The message of the day (MOTD) shows the system and database user passwords, which are also saved in /root/.digitalocean\_passwords.
- The Keycloak dockerfile can be located at `/var/digitalocean/Dockerfile`.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/keycloak/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/keycloak/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/keycloak/#creating-an-app-using-the-api)
- [Getting Started After Deploying Keycloak](https://docs.digitalocean.com/products/marketplace/catalog/keycloak/#getting-started-after-deploying-keycloak)
- [Retrieve login credentials](https://docs.digitalocean.com/products/marketplace/catalog/keycloak/#retrieve-login-credentials)
- [Configuring Nginx](https://docs.digitalocean.com/products/marketplace/catalog/keycloak/#configuring-nginx)
- [Adding a domain name](https://docs.digitalocean.com/products/marketplace/catalog/keycloak/#adding-a-domain-name)
- [Droplet summary](https://docs.digitalocean.com/products/marketplace/catalog/keycloak/#droplet-summary)

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