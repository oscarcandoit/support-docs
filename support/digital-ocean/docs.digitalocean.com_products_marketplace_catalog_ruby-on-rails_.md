---
url: "https://docs.digitalocean.com/products/marketplace/catalog/ruby-on-rails/"
title: "Ruby on Rails | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/ruby-on-rails/)
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

- Ruby on Rails

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Ruby on Rails

Generated on 14 Feb 2023
from [the Ruby on Rails catalog page](https://marketplace.digitalocean.com/apps/ruby-on-rails)

Ruby-on-Rails is a full-stack server-side web application framework that includes everything needed to create a database-backed web application according to the Model-View-Controller (MVC) pattern.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Ruby | [3.2.0](https://www.ruby-lang.org/en/news/2022/12/25/ruby-3-2-0-released/) | [2-clause BSD License](https://www.ruby-lang.org/en/about/license.txt) |
| Rails | [7.0.4.2](https://rubygems.org/gems/rails) | [MIT](http://37signals.com/rails/wiki/License.html) |
| Puma | [6.0.2](https://rubygems.org/gems/puma) | [Custom](https://github.com/puma/puma/blob/master/LICENSE) |
| Postgres | [12.4](https://packages.ubuntu.com/focal/postgresql) | [Postgres SQL](https://opensource.org/licenses/postgresql) |
| Nginx | [1.17.10](https://packages.ubuntu.com/focal/nginx) | [Custom](http://nginx.org/LICENSE) |
| Node.js | [12.19.0](https://nodejs.org/dist/latest-v12.x/docs/api/) | [Custom](https://github.com/nodejs/node/blob/master/LICENSE) |
| Certbot | [0.40.0](https://packages.ubuntu.com/focal/certbot) | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=rubyonrails-20-04)

## Creating an App using the API

In addition to creating a Droplet from the Ruby on Rails 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Ruby on Rails Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"rubyonrails-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Ruby on Rails

After your droplet is created, you can access your Ruby on Rails installation by typing the droplet’s IP address in your browser:

![RoR Welcome Page](https://i.imgur.com/TJq6ucQ.png)

**Note: If you see the Site can’t be reached error, give it 2-3 minutes and reload the page.**

Ruby is configured to use vendored bundles. Log in as a _rails_ user to interact with the default project environment:

```
$ su - rails
```

All gems are also installed under the _rails_ user environment.

Nginx is configured to forward requests for rails to a local Unix socket. Nginx configuration is located at `/etc/nginx/sites-enabled/rails`

Ruby-on-Rails Droplet 1-Click uses Puma to host the default website. Puma is managed via systemd service located at `/etc/systemd/system/rails.service`

You can manage Puma service via:

- **Restart**:

```
$ systemctl restart rails.service
```

- **Stop**:

```
$ systemctl stop rails.service
```

- **Start**:

```
$ systemctl start rails.service
```

## Migrating existing Ruby on Rails project

If you already have a Ruby on Rails (further as RoR) project, you can follow the steps below to migrate it to your droplet.

**Note: All droplet commands below are intended to be run as the root user**

First of all, you should copy your project folder to the droplet, you can do this by either using a VCS like git or simply using `scp` command:

```
$ scp -r /root/<your local ror project directory> root@<your droplet IP>:/home/rails/<your ror project name>
```

Next, ssh into your droplet and make sure to give user _rails_ permissions to your new Ruby on Rails project:

```
$ chown -R rails:rails /home/rails/<your ror project name>
```

At this point you can log in as rails user to install necessary dependencies for your project.

After this, you will have to update the Rails service if you wish to run your project as a service. First, open service file:

```
$ vim /etc/systemd/system/rails.service
```

Next, locate _WorkingDirectory_ and _ExecStart_ fields. Set _WorkingDirectory_ as the directory of your RoR project and set _ExecStart_ to the command which you use to run your project, in the example below we use the most common command `rails s`:

```
...
WorkingDirectory=/home/rails/<your ror project name>
ExecStart=/bin/bash -lc 'rails s'
...
```

Save file and exit.

Finally, you need to reload and restart the Rails service:

```
$ systemctl daemon-reload
$ systemctl restart rails.service
```

## Droplet summary

- UFW firewall allows only SSH (port 22, rate limited), HTTP (port 80), and HTTPS (port 443) access.
- _rails_ system user is created to deploy the application.
- _rails_ database user is created for the application to connect to PostgreSQL.
- Ruby is configured to use vendored bundles and all Gems are installed and processed locally to the _rails_ user.
- Nginx is configured to forward requests to a local UNIX socket, acting as a reverse proxy for the application server.
- The message of the day (MOTD) shows the system and database user passwords, which are also saved in /root/.digitalocean.passwords.
- The MOTD will also show you SFTP credentials that you can use to upload files using software like FileZilla, WinSCP, or rsync.
- The unit file for Rails is `/etc/systemd/system/rails/service`.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/ruby-on-rails/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/ruby-on-rails/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/ruby-on-rails/#creating-an-app-using-the-api)
- [Getting Started After Deploying Ruby on Rails](https://docs.digitalocean.com/products/marketplace/catalog/ruby-on-rails/#getting-started-after-deploying-ruby-on-rails)
- [Migrating existing Ruby on Rails project](https://docs.digitalocean.com/products/marketplace/catalog/ruby-on-rails/#migrating-existing-ruby-on-rails-project)
- [Droplet summary](https://docs.digitalocean.com/products/marketplace/catalog/ruby-on-rails/#droplet-summary)

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