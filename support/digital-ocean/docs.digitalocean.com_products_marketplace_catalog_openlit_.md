---
url: "https://docs.digitalocean.com/products/marketplace/catalog/openlit/"
title: "OpenLIT | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/openlit/)
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

- OpenLIT

[Give Feedback](https://ideas.digitalocean.com/documentation)

# OpenLIT

Generated on 13 Nov 2025
from [the OpenLIT catalog page](https://marketplace.digitalocean.com/apps/openlit)

OpenLIT is an open-source observability and monitoring platform for AI Agents and LLMs. It helps developers and data teams track, debug, and optimize their generative AI workloads with real-time visibility into prompts, token usage, latency, cost, and performance.

Every action performed by an AI agent is captured, analyzed, and visualized; helping teams understand how agents reason, make decisions, and interact with models or tools.

## Features

- **AI Agent & LLM Observability**: Collect traces, metrics, and logs across LLMs, vector databases, and APIs.
- **Prompt Management**: Version and organize prompts using the built-in Prompt Hub.
- **Cost & Usage Analytics**: Track tokens, requests, and GPU usage to manage your AI spend effectively.
- **Error & Exception Tracking**: Automatically capture and trace exceptions to improve debugging.
- **Secrets Management**: Securely store API keys and environment variables within the platform.
- **Fleet Hub (powered by OpAMP)**: Manage, update, and monitor all OpenTelemetry collectors and configurations at scale.
- **OpenTelemetry-Native Integration**: Built entirely on the OpenTelemetry standard for consistent data collection and analysis.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [OpenLIT](https://openlit.io/) | [1.15.0](https://github.com/openlit/openlit) | [Apache License 2.0](https://github.com/openlit/openlit/blob/main/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters?app_id=ecaeee693101174e7c5c6eb9&referrer=https%3A%2F%2Fmarketplace.digitalocean.com&activation_redirect=%2Fkubernetes%2Fclusters%3Fapp_id%3Decaeee693101174e7c5c6eb9%26referrer%3Dhttps%253A%252F%252Fmarketplace.digitalocean.com)

## Creating an App using the API

In addition to creating OpenLIT using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks openlit
```

## Getting Started After Deploying OpenLIT

## Prerequisites

- A DigitalOcean Kubernetes cluster (1.19+)
- kubectl configured to connect to your cluster
- doctl CLI tool installed and configured
- Helm 3.x installed

## Connect to Your Cluster

Follow the [DigitalOcean Kubernetes connection guide](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/) to connect to your cluster with kubectl.

## Install OpenLIT Add-on

The OpenLIT add-on will be automatically installed in your cluster through the DigitalOcean Marketplace.

## Verify OpenLIT Installation

### Check Helm Installation Status

First, check if the Helm installation was successful by running the following command:

```
helm ls -n openlit
```

You should see output similar to:

```
NAME    NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION
openlit openlit         1               2025-11-13 13:42:16.68552 +0530 IST     deployed        openlit-1.15.1  1.15.0
```

## Access OpenLIT

## Port Forwarding

To quickly access OpenLIT:

```
kubectl port-forward -n openlit svc/openlit 3000:3000
```

Then open your browser and navigate to `http://localhost:3000`

## LoadBalancer

By default, OpenLIT services are LoadBalancer type.

You can get the external LoadBalancer IP:

```
kubectl get service openlit -n openlit
```

Then open your browser and navigate to `http://<external-lb-ip>:3000`

## Login to OpenLIT

Login to OpenLIT using the default credentials

- Email as ‘ [user@openlit.io](mailto:user@openlit.io)’
- Password as ‘openlituser’

## Send Telemetry to OpenLIT

Once you have your OpenLIT URL, you can configure the `openlit` SDK or OpenLIT Operator to automatically send LLM and Agent observability data to OpenLIT at the `4318` port.

You can follow these quickstart guides:

- **Zero Code Observability with OpenLIT Operator**: [https://docs.openlit.io/latest/operator/quickstart](https://docs.openlit.io/latest/operator/quickstart)
- **LLM and Agent Observability**: [https://docs.openlit.io/latest/openlit/quickstart-ai-observability](https://docs.openlit.io/latest/openlit/quickstart-ai-observability)
- **MCP Monitoring**: [https://docs.openlit.io/latest/openlit/quickstart-mcp-observability](https://docs.openlit.io/latest/openlit/quickstart-mcp-observability)
- **AI Evals**: [https://docs.openlit.io/latest/sdk/quickstart-programmatic-evals](https://docs.openlit.io/latest/sdk/quickstart-programmatic-evals)
- **AI Guardrails**: [https://docs.openlit.io/latest/openlit/quickstart-guard](https://docs.openlit.io/latest/openlit/quickstart-guard)
- **GPU Monitoring**: [https://docs.openlit.io/latest/openlit/quickstart-gpu](https://docs.openlit.io/latest/openlit/quickstart-gpu)

## Next Steps

- [Setup Automatic Evaluation of AI responses and actions](https://docs.openlit.io/latest/openlit/quickstart-evals)
- [Manage OpenTelemetry Collectors using Fleet Hub](https://docs.openlit.io/latest/openlit/observability/fleet-hub)
- [Version, edit, deploy prompts collaboratively using Prompt Hub](https://docs.openlit.io/latest/openlit/prompts-experiments/prompt-hub)
- [Compare cost, duration, and response tokens across LLMs to choose the most efficient model for your use case](https://docs.openlit.io/latest/openlit/prompts-experiments/openground)
- [Create powerful, interactive dashboards to monitor AI application performance](https://docs.openlit.io/latest/openlit/dashboards/overview)
- [Centrally store LLM API keys that applications can retrieve remotely without restarts for seamless key rotation](https://docs.openlit.io/latest/openlit/developer-resources/vault)

## Support

- Join OpenLIT’s community Slack - [Invite Link](https://join.slack.com/t/openlit/shared_invite/zt-2etnfttwg-TjP_7BZXfYg84oAukY8QRQ)
- OpenLIT’s Official Documentation - [docs.openlit.io](https://docs.openlit.io/latest/overview)

In this article...

- [Features](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#features)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#creating-an-app-using-the-api)
- [Getting Started After Deploying OpenLIT](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#getting-started-after-deploying-openlit)
- [Prerequisites](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#prerequisites)
- [Connect to Your Cluster](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#connect-to-your-cluster)
- [Install OpenLIT Add-on](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#install-openlit-add-on)
- [Verify OpenLIT Installation](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#verify-openlit-installation)
  - [Check Helm Installation Status](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#check-helm-installation-status)
- [Access OpenLIT](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#access-openlit)
- [Port Forwarding](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#port-forwarding)
- [LoadBalancer](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#loadbalancer)
- [Login to OpenLIT](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#login-to-openlit)
- [Send Telemetry to OpenLIT](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#send-telemetry-to-openlit)
- [Next Steps](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#next-steps)
- [Support](https://docs.digitalocean.com/products/marketplace/catalog/openlit/#support)

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