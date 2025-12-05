---
url: "https://docs.digitalocean.com/products/marketplace/catalog/elk-blueprint/"
title: "ELK Blueprint | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/elk-blueprint/)
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

- ELK Blueprint

[Give Feedback](https://ideas.digitalocean.com/documentation)

# ELK Blueprint

Generated on 25 Oct 2023
from [the ELK Blueprint catalog page](https://marketplace.digitalocean.com/apps/elk-blueprint)

## What are DigitalOcean Blueprints?

DigitalOcean Blueprints are pre-configured infrastructure stacks with ready-to-use applications and they’re deployed with only a few clicks. With DigitalOcean Blueprints you’ll be able to skip complicated deployment configurations and infrastructure setups. You’ll be able to deploy easily and begin using your applications right away!

DigitalOcean Blueprints are designed to be the starting point for your production ready infrastructure. They aim to make deployment as seamless as possible so you can access the value of the application quickly. Each Blueprint has its own infrastructure configuration, cost, and software deployments. Please refer to the documentation for more details on each of these components.

## What is this Blueprint?

The ELK Blueprint will deploy 3 Droplets with the following components: ElasticSearch, Kibana, and LogStash. Each Droplet deployed contains:

- 4 vCPUs
- 8GB Memory
- 160GB SSD Disk
- 5TB of transfer included.

The approximate cost of this deployment is $144 monthly.

ElasticSearch and Kibana are configured out-of-box and LogStash is ready-to-use.

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

Head to the blueprint you are interested in, for this example we will use ELK:

```
$ cd blueprints/elk/
```

Edit `variables.tf` file and specify your API token like this:

```
variable “do_token” {
  default = “dop_v1_your_beautiful_token_here”
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
| ElasticSearch | Latest | [ELv2](https://www.elastic.co/licensing/elastic-license) |
| Kibana | Latest | [Dual license: Server Side Public License and Elastic License 2.0](https://github.com/elastic/kibana/blob/main/LICENSE.txt) |
| LogStash | Latest | [Apache License V2 and Elastic License](https://github.com/elastic/logstash/blob/main/LICENSE.txt) |

## Deploying this Offering using the Control Panel

Click the **Deploy to DigitalOcean** button to deploy this offering. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy ELK Blueprint to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://github.com/digitalocean/marketplace-blueprints/tree/master/blueprints/elk)

## Getting Started After Deploying ELK Blueprint

**After the stack is deployed, give it 5-6 minutes to finish the configuration.**

After this, you can access Kibana at `http://<kibana-droplet-ip>:5601`. You should see the Login screen:

![kibana login](https://camo.githubusercontent.com/10b16516ddf0ad82f364db74f8779b6773e52e6147729ec6ce0a832a46192f43/68747470733a2f2f646f2d6e6f742d64656c6574652d64726f706c65742d6173736574732e6e7963332e6469676974616c6f6365616e7370616365732e636f6d2f53637265656e73686f74253230323032332d30392d3239253230617425323031322e33322e35362e706e67)

If the Kibana page asks you for the enrollment token or says: “Kibana server is not ready yet.”, you need to wait a bit more until it finishes configuring.

To get credentials, SSH in ElasticSearch droplet, and you will see a password for the Elastic user like this:

![elastic creds](https://camo.githubusercontent.com/e175b5ec06640a26a100fdffa2da15fd61ee711a13ac10e472664a0f71d0ba35/68747470733a2f2f646f2d6e6f742d64656c6574652d64726f706c65742d6173736574732e6e7963332e6469676974616c6f6365616e7370616365732e636f6d2f53637265656e73686f74253230323032332d30392d3231253230617425323031352e35352e33362e706e67)

Near the Elastic password, you will see Kibana and LogStash passwords as well.

After you log in, you will have access to the Kibana dashboard!

### Stack Details

- XPACK basic security enabled.
- This stack does not provide Elastic license. If your business requires one, it is your responsibility to get one.
- Latest APT versions of ElasticSearch, Kibana, and LogStash.
- ElasticSearch discovery mode is set to a single node.
- ElasticSearch, Kibana, and LogStash and configured to run as systemctl services.
- ElasticSearch configuration logs are available at `/var/log/user_data.log` file.
- Kibana configuration logs are available at `/var/log/user_data.log` file.

In this article...

- [What are DigitalOcean Blueprints?](https://docs.digitalocean.com/products/marketplace/catalog/elk-blueprint/#what-are-digitalocean-blueprints)
- [What is this Blueprint?](https://docs.digitalocean.com/products/marketplace/catalog/elk-blueprint/#what-is-this-blueprint)
- [How to use DigitalOcean Blueprints?](https://docs.digitalocean.com/products/marketplace/catalog/elk-blueprint/#how-to-use-digitalocean-blueprints)
  - [Install Terraform](https://docs.digitalocean.com/products/marketplace/catalog/elk-blueprint/#install-terraform)
  - [Create a DigitalOcean API token](https://docs.digitalocean.com/products/marketplace/catalog/elk-blueprint/#create-a-digitalocean-api-token)
  - [Set up a blueprint and variables](https://docs.digitalocean.com/products/marketplace/catalog/elk-blueprint/#set-up-a-blueprint-and-variables)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/elk-blueprint/#software-included)
- [Deploying this Offering using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/elk-blueprint/#deploying-this-offering-using-the-control-panel)
- [Getting Started After Deploying ELK Blueprint](https://docs.digitalocean.com/products/marketplace/catalog/elk-blueprint/#getting-started-after-deploying-elk-blueprint)
  - [Stack Details](https://docs.digitalocean.com/products/marketplace/catalog/elk-blueprint/#stack-details)

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