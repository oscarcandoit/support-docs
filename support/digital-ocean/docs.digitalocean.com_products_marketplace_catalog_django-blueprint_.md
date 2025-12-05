---
url: "https://docs.digitalocean.com/products/marketplace/catalog/django-blueprint/"
title: "Django Blueprint | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/django-blueprint/)
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

- Django Blueprint

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Django Blueprint

Generated on 28 Feb 2024
from [the Django Blueprint catalog page](https://marketplace.digitalocean.com/apps/django-blueprint)

## What are DigitalOcean Blueprints?

DigitalOcean Blueprints are pre-configured infrastructure stacks with ready-to-use applications and they’re deployed with only a few clicks. With DigitalOcean Blueprints you’ll be able to skip complicated deployment configurations and infrastructure setups. You’ll be able to deploy easily and begin using your applications right away!

DigitalOcean Blueprints are designed to be the starting point for your production-ready infrastructure. They aim to make deployment as seamless as possible so you can access the value of the application quickly. Each Blueprint has its own infrastructure configuration, cost, and software deployments. Please refer to the documentation for more details on each of these components.

## What is this Blueprint?

The Django Blueprint will deploy 3 Django Droplet 1-Clicks, 1 load balancer, and 1 PostgreSQL database.

Each Droplet deployed contains:

- 4 vCPUs
- 8GB RAM
- 160GB SSD Disk

The database is a 30GB PostgreSQL 12 with 2 GB RAM and 1 vCPU.

The load balancer is a single-node with up to 10000 simultaneous connections.

The approximate cost of this deployment is $186 monthly.

## How to use DigitalOcean Blueprints?

### Install Terraform

Head to the [Terraform install page](https://developer.hashicorp.com/terraform/downloads) and follow the instructions for your platform.

You can validate your local Terraform installation by running:

```
$ terraform -v
Terraform v1.5.7
...
```

### Create a DigitalOcean API token

Head to the [Applications & API](https://cloud.digitalocean.com/account/api/tokens) page and create a new personal access token (PAT) by clicking the Generate New Token button. Make sure to check the Write scope for the token, as Terraform needs it to create new resources. After creating the token, make sure to save it as it disappears forever if you close the page. If you lost the token, delete it and create a new one.

### Set up a blueprint and variables

Clone this repository to the machine where Terraform is installed:

```
$ git clone https://github.com/digitalocean/marketplace-blueprints.git
```

Head to the blueprint you are interested in, for this example we will use Django:

```
$ cd blueprints/django/
```

Edit `variables.tf` file and specify your API token like this:

```
variable “do_token” {
  default = “dop_v1_your_beautiful_token_here”
}
```

Optionally, if you want to initialize Django Droplets with your Django application, you can specify the link to your project:

```
variable "project_url" {
  default = "https://github.com/your_amazing_django_project"
}
```

Also optionally, if you want to connect to your Django Droplets using SSH, use [doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/) to retrieve your SSH key IDs:

```
$ doctl compute ssh-key list
```

Paste the keys IDs from the doctl in `variable.tf`:

```
variable "ssh_key_ids" {
  default = [123, 112233] // <--- HERE
  type = list(number)
}
```

We are almost there, now initialize the Terraform project by running:

```
$ terraform init
```

Finally, after the project is initialized, run the Terraform apply to spin the blueprint:

```
$ terraform apply
```

It can take a few minutes to spin the droplets and some blueprints require extra time after the creation to finish the configuration.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Django | 5.0 | [Custom](https://github.com/django/django/blob/main/LICENSE) |
| Nginx | 1.18.0 | [Custom](http://nginx.org/LICENSE) |
| Certbot | 0.40.0 | [Apache 2](https://github.com/certbot/certbot/blob/master/LICENSE.txt) |
| Gunicorn | 20.0.4 | [MIT](https://github.com/benoitc/gunicorn/blob/master/LICENSE) |
| Postgres | 12 | [Postgres SQL](https://opensource.org/licenses/postgresql) |
| Postfix | 3.4.10 | [IBM Public](http://www.postfix.org/IBM-Public-License-1.0.txt) |

## Deploying this Offering using the Control Panel

Click the **Deploy to DigitalOcean** button to deploy this offering. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy Django Blueprint to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://github.com/digitalocean/marketplace-blueprints/tree/master/blueprints/django)

## Getting Started After Deploying Django Blueprint

**After the stack is deployed, give it 5-6 minutes to finish the configuration.**

After this, you can access your via load balancer IP: `http://<load-balancer-ip>`.

Keep in mind that unless specified in the `variables.tf`, Django Blueprint will not contain a sample project and requests may time out.

After making any change inside Django Droplet 1-Click, don’t forget to reload Gunicorn:

```
$ systemctl daemon-reload
$ systemctl restart gunicorn
```

### Stack Details

- Gunicorn system service is enabled `systemctl status gunicorn`.
- The Django application is automatically configured if specified.
- The Django application is served from `/home/django/django_project`.
- Certbot preinstalled for easy HTTPS setup.

In this article...

- [What are DigitalOcean Blueprints?](https://docs.digitalocean.com/products/marketplace/catalog/django-blueprint/#what-are-digitalocean-blueprints)
- [What is this Blueprint?](https://docs.digitalocean.com/products/marketplace/catalog/django-blueprint/#what-is-this-blueprint)
- [How to use DigitalOcean Blueprints?](https://docs.digitalocean.com/products/marketplace/catalog/django-blueprint/#how-to-use-digitalocean-blueprints)
  - [Install Terraform](https://docs.digitalocean.com/products/marketplace/catalog/django-blueprint/#install-terraform)
  - [Create a DigitalOcean API token](https://docs.digitalocean.com/products/marketplace/catalog/django-blueprint/#create-a-digitalocean-api-token)
  - [Set up a blueprint and variables](https://docs.digitalocean.com/products/marketplace/catalog/django-blueprint/#set-up-a-blueprint-and-variables)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/django-blueprint/#software-included)
- [Deploying this Offering using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/django-blueprint/#deploying-this-offering-using-the-control-panel)
- [Getting Started After Deploying Django Blueprint](https://docs.digitalocean.com/products/marketplace/catalog/django-blueprint/#getting-started-after-deploying-django-blueprint)
  - [Stack Details](https://docs.digitalocean.com/products/marketplace/catalog/django-blueprint/#stack-details)

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