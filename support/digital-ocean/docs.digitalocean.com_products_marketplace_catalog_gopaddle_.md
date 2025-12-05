---
url: "https://docs.digitalocean.com/products/marketplace/catalog/gopaddle/"
title: "gopaddle | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/gopaddle/)
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

- gopaddle

[Give Feedback](https://ideas.digitalocean.com/documentation)

# gopaddle

Generated on 17 Oct 2024
from [the gopaddle catalog page](https://marketplace.digitalocean.com/apps/gopaddle)

gopaddle is a low-code Kubernetes IDE with AI Co-pilot. The low-code IDE has advanced resource filtering, a YAML free form editor, and developer tools like a container terminal and logs. The AI Co-pilot provides interactive troubleshooting and optimization of the Kubernetes Cluster.

## gopaddle Lite

gopaddle Lite is a life-time free community edition of gopaddle that can be installed in a single node/single user mode on a Kubernetes cluster. gopaddle lite comes with many capabilities that helps developers to built a self-service portal for a small scale Kubernetes deployment at zero cost.

1. DevOps Dashboard

* * *

The main dashboard provides a comprehensive list of all Kubernetes resources deployed within your cluster. From this central location, you can efficiently monitor and manage all existing Kubernetes deployments.

![DevOps Dashboard](https://gopaddle-marketing.s3.ap-southeast-2.amazonaws.com/docker-desktop-screenshots-5.0/gp-dashboard.png)

2. AI Chat

* * *

With the AI Chat feature, you can effectively troubleshoot your Kubernetes resources and cluster, streamlining your operations and resolving issues more efficiently.

![AI Chat](https://gopaddle-marketing.s3.ap-southeast-2.amazonaws.com/gopaddle-AI-Co-pilot-2.gif)

3. Open API Schema Editor

* * *

The Open API Schema Editor enables you to freely edit and update your Kubernetes resource YAML files, making configuration management simpler and more intuitive.

![Open API Schema Editor](https://gopaddle-marketing.s3.ap-southeast-2.amazonaws.com/docker-desktop-screenshots-5.0/OpenAPI-Form.png)

4. Developer Tools - Container Terminal

* * *

Easily troubleshoot deployment issues using built-in developer tools like the Container Terminal, eliminating the need for Kubectl commands.

![Container Terminal](https://gopaddle-marketing.s3.ap-southeast-2.amazonaws.com/docker-desktop-screenshots-5.0/gp-devtools-1.png)

5. Developer Tools - Container Logs

* * *

Easily troubleshoot deployment issues using built-in developer tools like Container Logs, eliminating the need for Kubectl commands.

![Container Logs](https://gopaddle-marketing.s3.ap-southeast-2.amazonaws.com/docker-desktop-screenshots-5.0/gp-devtools-2.png)

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=gopaddle-lite&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating gopaddle using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks gopaddle-lite
```

## Getting Started After Deploying gopaddle

Once the installation is complete, gopaddle dashboard can be accessed at http://NodeExternalIP:30003/

NodeIP can be obtained by executing the command below:

```
root@localhost:~# kubectl get nodes -o wide
```

## Getting started with gopaddle

Once the gopaddle lite dashboard is available, developers can open the gopaddle dashboard in the browser.

Open the `Ask AI` option, select the LLM Type as `OpenAI`, select a model, and provide the API Key.

To get the OpenAI API Key, check here: [OpenAI API Key](https://platform.openai.com/api-keys).

## Help

For help related to gopaddle community (lite) edition, visit the gopaddle Help Center at: [https://help.gopaddle.io](https://help.gopaddle.io/)

In this article...

- [gopaddle Lite](https://docs.digitalocean.com/products/marketplace/catalog/gopaddle/#gopaddle-lite)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/gopaddle/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/gopaddle/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/gopaddle/#creating-an-app-using-the-api)
- [Getting Started After Deploying gopaddle](https://docs.digitalocean.com/products/marketplace/catalog/gopaddle/#getting-started-after-deploying-gopaddle)
- [Getting started with gopaddle](https://docs.digitalocean.com/products/marketplace/catalog/gopaddle/#getting-started-with-gopaddle)
- [Help](https://docs.digitalocean.com/products/marketplace/catalog/gopaddle/#help)

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