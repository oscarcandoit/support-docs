---
url: "https://docs.digitalocean.com/products/marketplace/catalog/elasticsearch/"
title: "ElasticSearch | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/elasticsearch/)
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

- ElasticSearch

[Give Feedback](https://ideas.digitalocean.com/documentation)

# ElasticSearch

Generated on 16 Jan 2024
from [the ElasticSearch catalog page](https://marketplace.digitalocean.com/apps/elasticsearch)

ElasticSearch Droplet 1-Click allows you to create a fully configured and ready-to-use instance of ElasticSearch in a matter of a minute.

If you’re looking to deploy ELK (Elastic, Logstash & Kibana) check out the [DigitalOcean ELK Blueprint](https://marketplace.digitalocean.com/apps/elk-blueprint/). Blueprints are Terraform based deployments that allow you to spin up multiple resources at once on DigitalOcean.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| ElasticSearch | Latest | [ELv2](https://www.elastic.co/licensing/elastic-license) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=elasticsearch)

## Creating an App using the API

In addition to creating a Droplet from the ElasticSearch 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB ElasticSearch Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"elasticsearch"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying ElasticSearch

On your first [SSH login to the droplet](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) or launch of the Droplet console of your ElasticSearch Droplet 1-Click, you will be greeted by the ElasticSearch Droplet 1-Click Message-Of-The-Day (MOTD). MOTD includes useful information such as credentials for the `elastic` superuser, and credentials for the `kibana` and the `logstash` users as well as Kibana enrollment token.

If the MOTD is inaccessible, you can always retrieve credentials by reading the `digitalocean_passwords` file:

```
$ cat /root/.digitalocean_passwords
```

After you have created ElasticSearch Droplet 1-Click, give it a few minutes to start all the services.

To test your ElasticSearch Droplet 1-Click, use the `ping` command provided at the bottom of the MOTD:

![motd ping command](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-09-19%20at%2013.29.43.png)

If, after using the `ping` command, you see a JSON response with a tagline _“You Know, for Search”_, your ElasticSearch is operational and ready to accept payloads:

![ping command success](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-09-19%20at%2013.34.31.png)

## Getting started with ElasticSearch

If it is your first time with ElasticSearch, we recommend the official ElasticSearch [How to](https://www.elastic.co/guide/en/elasticsearch/reference/current/how-to.html) guide to getting started with basic configuration.

Keep in mind that ElasticSearch Droplet comes with XPACK security enabled and XPACK HTTP/TRANSPORT encryption enabled. By default it ships self-signed SSL certificate, which is enough for development and testing. If you wish to properly secure your ElasticSearch 1-Click with a CA certificate, follow [this](https://www.elastic.co/blog/configuring-ssl-tls-and-https-to-secure-elasticsearch-kibana-beats-and-logstash) guide.

## Droplet Summary

- UFW firewall allows only SSH (port 22, rate limited), and 9200 (ElasticSearch) access.

- XPACK security enabled. Random passwords are generated for `elastic`, `kibana`, and `logstash_system` users

An enrollment token is generated for easy Kibana setup.

- Generated passwords can be found in /root/.digitalocean\_password.

- ElasticSearch is installed as an APT package

- To check the status of the ElasticSearch, use:


```
$ systemctl status elasticsearch.service
```

- ElasticSearch is listening to `0.0.0.0` by default.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/elasticsearch/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/elasticsearch/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/elasticsearch/#creating-an-app-using-the-api)
- [Getting Started After Deploying ElasticSearch](https://docs.digitalocean.com/products/marketplace/catalog/elasticsearch/#getting-started-after-deploying-elasticsearch)
- [Getting started with ElasticSearch](https://docs.digitalocean.com/products/marketplace/catalog/elasticsearch/#getting-started-with-elasticsearch)
- [Droplet Summary](https://docs.digitalocean.com/products/marketplace/catalog/elasticsearch/#droplet-summary)

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