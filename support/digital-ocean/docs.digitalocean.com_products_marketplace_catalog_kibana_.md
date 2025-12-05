---
url: "https://docs.digitalocean.com/products/marketplace/catalog/kibana/"
title: "Kibana | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/kibana/)
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

- Kibana

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Kibana

Generated on 24 Nov 2025
from [the Kibana catalog page](https://marketplace.digitalocean.com/apps/kibana)

Kibana Droplet 1-Click allows you to create a ready-to-use instance of Kibana in a matter of a minute. Kibana Droplet 1-Click pairs perfectly with ElasticSearch Droplet 1-Click as all necessary information for configuration is displayed on your SSH connection.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Kibana | Latest | [Dual license: Server Side Public License and Elastic License 2.0](https://github.com/elastic/kibana/blob/main/LICENSE.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-kibana)

## Creating an App using the API

In addition to creating a Droplet from the Kibana 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Kibana Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-kibana"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Kibana

On your first [SSH login to the droplet](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) or launch of the Droplet console of your Kibana Droplet 1-Click, you will be greeted by the ElasticSearch Droplet 1-Click Message-Of-The-Day (MOTD). MOTD includes useful information such as dashboard address and verification code to configure ElasticSearch with Kibana Droplet 1-Click.

If MOTD becomes inaccessible, you can always retrieve the verification code by running this command:

```
$ /usr/share/kibana/bin/kibana-verification-code
```

Make sure to give your Kibana Droplet 1-Click a minute after creation to start all the services.

## Connecting Kibana Droplet 1-Click with ElasticSearch Droplet 1-Click

After you have created both Kibana and ElasticSearch Droplet 1-Click, [SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh) into ElasticSearch Droplet and copy the Kibana enrollment token from the MOTD:

![Kibana enrollment token](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-09-21%20at%2015.32.36.png)

Next, open the Kibana dashboard in your browser `http://<your kibana droplet ip>:5601`. You will be greeted by the configuration page where you can enter the enrollment token:

![kibana configuration page](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-09-21%20at%2015.36.50.png)

Click `Configure Elastic` and Kibana will ask you for the verification code. You can retrieve it by connecting to your Kibana Droplet 1-Click via SSH and copying the verification code from the MOTD:

![kibana verification code](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-09-21%20at%2015.38.33.png)

Type the verification code in the Kibana dashboard and click `Verify`:

![kibana verification success](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-09-21%20at%2015.39.55.png)

After this, your Kibana Droplet 1-Click will be configured to talk to your ElasticSearch Droplet 1-Click. If it gets stuck on `Completing setup` for more than 1 minute, just refresh the page.

![kibana setup](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-09-21%20at%2015.48.58.png)

The next step will require you to authenticate. Head back to your ElasticSearch Droplet terminal and copy parameters for the `elastic` user:

![elastic credentials](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-09-21%20at%2015.55.36.png)

Enter these credentials in Kibana, click `Log In` button and you will be welcomed by a configured and ready-to-use Kibana dashboard.

## Droplet Summary

- UFW firewall allows only SSH (port 22, rate limited), and 5601 (Kibana server) access.
- Kibana is installed as an APT package.
- To check the status of the Kibana, use:

```
$ systemctl status kibana.service
```

- Kibana is listening to `0.0.0.0` by default.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/kibana/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/kibana/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/kibana/#creating-an-app-using-the-api)
- [Getting Started After Deploying Kibana](https://docs.digitalocean.com/products/marketplace/catalog/kibana/#getting-started-after-deploying-kibana)
- [Connecting Kibana Droplet 1-Click with ElasticSearch Droplet 1-Click](https://docs.digitalocean.com/products/marketplace/catalog/kibana/#connecting-kibana-droplet-1-click-with-elasticsearch-droplet-1-click)
- [Droplet Summary](https://docs.digitalocean.com/products/marketplace/catalog/kibana/#droplet-summary)

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