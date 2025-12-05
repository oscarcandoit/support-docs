---
url: "https://docs.digitalocean.com/products/marketplace/catalog/helpy-pro-k8s/"
title: "Helpy Pro K8s | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/helpy-pro-k8s/)
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

- Helpy Pro K8s

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Helpy Pro K8s

Generated on 11 Nov 2021
from [the Helpy Pro K8s catalog page](https://marketplace.digitalocean.com/apps/helpy-pro-k8s)

Safeguard your customer support data without compromising on providing a heroic customer support experience. Helpy Pro is the [self-hosted customer support platform](https://helpy.io/) engineered for companies that are serious about security, privacy, and compliance. Designed for on-premise and private instance deployments, Helpy Pro lets you avoid vendor lock-in, own your data, and integrate with the tools you already use to keep your data safe.

**About the Cluster**

This DigitalOcean marketplace Kubernetes Cluster runs the latest release of Helpy Pro, and gives you instant access to the free tier. This includes the core open source ticketing features for 3 agents.

**Core (Free) Features**

- Convert incoming emails to [support tickets](https://helpy.io/helpdesk-software/) which appear in your agent inbox
- Provide a customized help center where customers can submit or track previous requests
- Organize tickets with tagging and team groups. Assign tickets to agents and teams.
- Quickly locate tickets using the integrated ticket search
- Manage and organize customer tickets with Merge and Split
- Manage your customer contacts with the integrated customer CRM
- Support for 20+ languages

Helpy Pro can be upgraded to a full version with the addition of a license code, which unlocks features designed for scaling businesses, including:

- Empower your customers to solve their own problems with a searchable knowledgebase
- Stay organized with ticketing that includes custom views, queues, and SLAs
- Gain operational efficiencies with auto-assignment, real-time notifications, and automation
- Create and customize ticket creation forms for different reasons and teams
- Advanced reporting to help you optimize your content and operations
- [Live chat and Knowledgebase widget](https://helpy.io/live-chat/) to bring help directly to your customers in product
- A full API for building deep integrations into your existing application stack

**Security, Privacy and Compliance**

- Compliance features to manage customer “right to deletion” requests for GDPR, CCPA, WPA, etc.
- Host on any public or private cloud, even on-premise in your own datacenter
- Keep control of and maintain ownership of your data at all times
- Avoid compliance chain hell with no third party dependencies
- Rest assured no one is “looking over your shoulder”
- Set and follow internal data retention policies, including backups
- Define team-based permissions and roles

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Helpy Pro | 3.x | Commercial |
| Nginx | 1.15 | MIT |
| Postgres | 10 | MIT |
| Puma | latest | MIT |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=helpy&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Helpy Pro K8s using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks helpy
```

## Getting Started After Deploying Helpy Pro K8s

Congratulations on setting up a Kubernetes cluster running Helpy Pro. This cluster includes the free version of Helpy Pro that can be upgraded with a purchased license key.

Please be patient after launching the cluster, as it will take several minutes to come up. Once it does, you should be able to connect to it using `doctl` or by editing your Kubernetes config.

By default, Helpy Pro will work “out of the box” by installing a Postgres database in your cluster. This is great for quick testing and allows the software to run without any additional configuration.

Once everything is up, you can grab the IP address from the DO Load Balancer page and login!

### Managing your cluster and preparing for production

**1\. Connecting with Helm**

There are a number of configurations you will need to complete to prepare for production use or just to customize your install. You will need Helm 3 installed to do this. To verify that you have helm installed and it can connect to your cluster, run

```
helm list -n helpy
```

and you will see something like

```
NAME     NAMESPACE   REVISION    UPDATED                                 STATUS      CHART       APP VERSION
helpy    helpy       1           2021-10-28 20:23:26.27234099 +0000 UTC  deployed    helpy-1.2.2 3.2.7
```

**2\. Download the Helm values file**

If you wish to make updates to the configuration of the Helpy cluster, by far the best way is to make a copy of the configuration file and add the changes to your cluster.

Get the file here:

```
https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/helpy/values.yml
```

and name it `values-override.yaml`. The file is commented and pretty self-explanatory.

After you make your changes, you can push them to the live cluster with

```
helm upgrade helpy helpyio/helpy -n helpy -f /path/to/values-override.yaml
```

### What can you configure?

**1\. Increase the number of app servers**

Increase or decrease the number of app servers to match your load.

**2\. Connect to a remote database**

For production, you will want to connect to a remote database server such as a managed database by DigitalOcean.

See the following for more information: [https://github.com/scott/helpy-helm/wiki/Set-up-a-Production-DB](https://github.com/scott/helpy-helm/wiki/Set-up-a-Production-DB)

**3\. Use a remote filestore like DO Spaces**

Helpy on K8s requires you to configure an external filestore to capture customer attachments and store images. This means using an Amazon S3 compatible provider like DigitalOcean Spaces.

See the following: [https://github.com/scott/helpy-helm/wiki/Use-S3-or-DigitalOcean-Object-Storage](https://github.com/scott/helpy-helm/wiki/Use-S3-or-DigitalOcean-Object-Storage)

**4\. Configure the IMAP fetcher**

Enable the IMAP email fetcher to periodically fetch email from your IMAP server and convert the messages to tickets.

### Logging into Helpy the first time:

The first time you log into the software, you will be prompted to create your master administrator user and provide a secure password for future access.

**1\. Set your initial/admin login**

The first time you log in you will be prompted to enter the email and password you will use for accessing the system.

**2\. Configure SMTP email**

After logging into Helpy, visit the settings section and email tab to add your SMTP server details. From here you can also choose an email service provider like Sendgrid for email delivery. Note- to use IMAP you will need to make a configuration change as described above.

\*\*What is next? Visit us at [https://support.helpy.io\*\*](https://support.helpy.io**/) for more details and instruction on everything Helpy Pro can do!

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/helpy-pro-k8s/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/helpy-pro-k8s/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/helpy-pro-k8s/#creating-an-app-using-the-api)
- [Getting Started After Deploying Helpy Pro K8s](https://docs.digitalocean.com/products/marketplace/catalog/helpy-pro-k8s/#getting-started-after-deploying-helpy-pro-k8s)
  - [Managing your cluster and preparing for production](https://docs.digitalocean.com/products/marketplace/catalog/helpy-pro-k8s/#managing-your-cluster-and-preparing-for-production)
  - [What can you configure?](https://docs.digitalocean.com/products/marketplace/catalog/helpy-pro-k8s/#what-can-you-configure)
  - [Logging into Helpy the first time:](https://docs.digitalocean.com/products/marketplace/catalog/helpy-pro-k8s/#logging-into-helpy-the-first-time)

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