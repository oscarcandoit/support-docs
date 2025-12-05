---
url: "https://docs.digitalocean.com/products/marketplace/catalog/dokku/"
title: "Dokku | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/dokku/)
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

- Dokku

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Dokku

Generated on 22 Nov 2025
from [the Dokku catalog page](https://marketplace.digitalocean.com/apps/dokku)

Dokku makes it a breeze to deploy and manage web applications on your own server. Now available as a 1-Click installation, it’s even easier to have your own private application platform in a matter of minutes.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Dokku | [0.36.9](https://packagecloud.io/dokku/dokku) | [MIT](https://github.com/dokku/dokku/blob/master/LICENSE) |
| Docker CE | [28.0.1](https://docs.docker.com/release-notes/docker-ce/) | [Apache 2](https://github.com/docker/docker/blob/master/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=dokku-20-04)

## Creating an App using the API

In addition to creating a Droplet from the Dokku 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Dokku Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"dokku-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Dokku

**Note:** Please disable IPv6. There are known issues with IPv6. If you would like to run Dokku on an IPv6 DigitalOcean Droplet, please consult this [guide](https://jeffloughridge.wordpress.com/2015/01/17/native-ipv6-functionality-in-docker/).

In addition to the package installation, the One-Click also:

- Enables the UFW firewall to allow only SSH (port `22`, rate limited), HTTP (port `80`), HTTPS (port `443`), and `2375`/`2376` for unencrypted/encrypted traffic to the Docker daemon, respectively.

## Quickstart

After creating a Dokku Droplet 1-Click, you need to SSH into the Droplet and configure Dokku SSH keys, domains and virtual hosts. You can learn more about this by looking at _Deploying sample application_ section

## Deploying sample application

Once you have configured Dokku, you can deploy applications using `git push`:

```
# from your local machine
# SSH access to github must be enabled on this host
git clone https://github.com/heroku/ruby-getting-started`
```

### Create the app

SSH into the Dokku host and create the application as follows:

```
# on the Dokku host
dokku apps:create ruby-getting-started
```

### Create the backing services

The Getting Started app requires a PostgreSQL service, so install the plugin and create the related service as follows:

```
# on the Dokku host
# install the postgres plugin
# plugin installation requires root, hence the user change
sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git

# create a postgres service with the name railsdatabase
dokku postgres:create railsdatabase
```

Each service may take a few moments to create.

### Linking backing services to applications

Once the services have been created, you then set the DATABASE\_URL environment variable by linking the service, as follows:

```
# on the Dokku host
# each official datastore offers a `link` method to link a service to any application
dokku postgres:link railsdatabase ruby-getting-started
```

Dokku supports linking a single service to multiple applications as well as linking only one service per application.

### Deploy the app

To be able to deploy to your Dokku server, you need to add your public SSH keys to the Dokku key list. You can create a new file on your Dokku host and copy your public SSH key or use commands like `scp`.

Now you can add your newly created public SSH key to the Dokku key list:

```
$ on the Dokku host
dokku ssh-keys:add KEY_NAME path/to/your/public_key.pub
```

`KEY_NAME` is the name you want to use to refer to this particular key. Including the word admin in the name will grant the user privileges to add additional keys remotely.

You can learn more about configuring SSH keys on the [Dokku Official User Management page](https://dokku.com/docs/deployment/user-management/)

Now you can deploy the ruby-getting-started app to your Dokku server. All you have to do is add a remote to name the app. Applications are created on-the-fly on the Dokku server.

```
# from your local machine
# the remote username *must* be dokku or pushes will fail
cd ruby-getting-started
git remote add dokku dokku@dokku.me:ruby-getting-started
git push dokku main:master
```

Note: If you are seeing a `denied` error make sure you are using the correct private key for git push. Your private key must match the public key you used during the previous step.

After running `git push dokku main:master`, you should have output similar to this in your terminal:

```
Counting objects: 231, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (162/162), done.
Writing objects: 100% (231/231), 36.96 KiB | 0 bytes/s, done.
Total 231 (delta 93), reused 147 (delta 53)
-----> Cleaning up...
-----> Building ruby-getting-started from herokuish...
-----> Adding BUILD_ENV to build environment...
-----> Ruby app detected
-----> Compiling Ruby/Rails
-----> Using Ruby version: ruby-2.2.1
-----> Installing dependencies using 1.9.7
       Running: bundle install --without development:test --path vendor/bundle --binstubs vendor/bundle/bin -j4 --deployment
       Fetching gem metadata from https://rubygems.org/...........
       Fetching version metadata from https://rubygems.org/...
       Fetching dependency metadata from https://rubygems.org/..
       Using rake 10.4.2

...

=====> Application deployed:
       http://%SUBDOMAIN%.%DOMAIN%
```

Once the deployment is complete, the application’s web URL will be generated as above.

The SUBDOMAIN is inferred from the pushed application name, while the DOMAIN is set during the initial Dokku configuration. It can then be modified with `dokku domains:add-global` and `dokku domains:remove-global`. This value is used as a default domain for all applications on a host.

Check the [official documentation](https://dokku.com/docs/configuration/domains/) to learn more about domain configuration.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/dokku/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/dokku/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/dokku/#creating-an-app-using-the-api)
- [Getting Started After Deploying Dokku](https://docs.digitalocean.com/products/marketplace/catalog/dokku/#getting-started-after-deploying-dokku)
- [Quickstart](https://docs.digitalocean.com/products/marketplace/catalog/dokku/#quickstart)
- [Deploying sample application](https://docs.digitalocean.com/products/marketplace/catalog/dokku/#deploying-sample-application)
  - [Create the app](https://docs.digitalocean.com/products/marketplace/catalog/dokku/#create-the-app)
  - [Create the backing services](https://docs.digitalocean.com/products/marketplace/catalog/dokku/#create-the-backing-services)
  - [Linking backing services to applications](https://docs.digitalocean.com/products/marketplace/catalog/dokku/#linking-backing-services-to-applications)
  - [Deploy the app](https://docs.digitalocean.com/products/marketplace/catalog/dokku/#deploy-the-app)

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