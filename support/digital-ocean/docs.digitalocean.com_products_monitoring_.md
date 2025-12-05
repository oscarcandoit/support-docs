---
url: "https://docs.digitalocean.com/products/monitoring/"
title: "Monitoring | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/monitoring.76945ea4a7d45a01469c36e1133e112e8cf2b800c56b8106f31d27b146221b0f.svg)Monitoring](https://docs.digitalocean.com/products/monitoring/)
- [Getting Started](https://docs.digitalocean.com/products/monitoring/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/monitoring/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/monitoring/how-to/)
  - [Install the Metrics Agent](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/)
  - [Install the Metrics Agent via Metrics Agent Repository](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent-repository/)
  - [Uninstall the Metrics Agent](https://docs.digitalocean.com/products/monitoring/how-to/uninstall-metrics-agent/)
  - [Manage Resource Alerts](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/)
  - [Upgrade Your Legacy Agent](https://docs.digitalocean.com/products/monitoring/how-to/upgrade-legacy-agent/)
- [Reference](https://docs.digitalocean.com/products/monitoring/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/monitoring)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/monitoring/)
- [Concepts](https://docs.digitalocean.com/products/monitoring/concepts/)
  - [Metrics](https://docs.digitalocean.com/products/monitoring/concepts/metrics/)
- [Details](https://docs.digitalocean.com/products/monitoring/details/)
  - [Features](https://docs.digitalocean.com/products/monitoring/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/monitoring/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/monitoring/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/monitoring/details/limits/)
- [Support](https://docs.digitalocean.com/products/monitoring/support/)

- Monitoring

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Monitoring

Generated on 25 Nov 2025

DigitalOcean Monitoring is a free, opt-in service that lets you track Droplet resource usage in real time, visualize performance metrics, and receive alerts via email or Slack to proactively manage your infrastructure’s health.

Most Viewed Monitoring Articles

01. [How to Install the DigitalOcean Metrics Agent](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/ "Install the DigitalOcean metrics agent to enable extended Droplet monitoring.")
02. [Monitoring Metrics](https://docs.digitalocean.com/products/monitoring/concepts/metrics/ "Understand the key metrics (CPU, memory, disk, and bandwidth) used by Monitoring to track your Droplet's performance and overall health.")
03. [How to Create, Edit, and Delete Resource Alerts](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/ "Create, edit, view, and delete resource alerts to monitor your Droplets and receive notifications when key metrics exceed or fall below thresholds you define.")
04. [How can I allowlist the DigitalOcean metrics agent with my firewall?](https://docs.digitalocean.com/support/how-can-i-allowlist-the-digitalocean-metrics-agent-with-my-firewall/ "Configure your firewall to allow outgoing traffic through ports 80 and 443.")
05. [Monitoring Quickstart](https://docs.digitalocean.com/products/monitoring/getting-started/quickstart/ "Just the essentials to go from zero to working in a few minutes.")
06. [Monitoring Concepts](https://docs.digitalocean.com/products/monitoring/concepts/ "Explanations and definitions of core concepts in Monitoring.")
07. [How to Uninstall the DigitalOcean Metrics Agent](https://docs.digitalocean.com/products/monitoring/how-to/uninstall-metrics-agent/ "Uninstall the DigitalOcean metrics agent from your Droplet to stop monitoring and remove related system resources.")
08. [Monitoring Pricing](https://docs.digitalocean.com/products/monitoring/details/pricing/ "DigitalOcean Monitoring is provided at no additional cost.")
09. [How Do I Disable Process Name Collection in My Metrics Agent?](https://docs.digitalocean.com/support/how-do-i-disable-process-name-collection-in-my-metrics-agent/ "Modify your metrics agent's configuration on `systemctl` or `initctl` systems to disable process name collection.")
10. [Getting Started with Monitoring](https://docs.digitalocean.com/products/monitoring/getting-started/ "Quickstarts and intermediate tutorials to get started.")

![](https://docs.digitalocean.com/images/icons/monitoring.svg)

Getting Started

Quickstarts and intermediate tutorials to get started.

![](https://docs.digitalocean.com/images/icons/monitoring.svg)

How-Tos

How to accomplish specific tasks in detail, like creation/deletion, configuration, and management.

![](https://docs.digitalocean.com/images/icons/monitoring.svg)

Reference

Native and third-party tools, troubleshooting, and answers to frequently asked questions.

![](https://docs.digitalocean.com/images/icons/monitoring.svg)

Concepts

Explanations and definitions of core concepts in Monitoring.

![](https://docs.digitalocean.com/images/icons/monitoring.svg)

Details

Features, plans and pricing, availability, limits, known issues, and more.

![](https://docs.digitalocean.com/images/icons/monitoring.svg)

Support

Get help with technical support and answers to frequently asked questions.

## Latest Updates

### 3 November 2025

- DigitalOcean Insights now supports [GPU-level observability for AMD and NVIDIA GPU Droplets](https://docs.digitalocean.com/products/monitoring/details/features/#gpu-observability) and for GPU-enabled [Kubernetes clusters (DOKS)](https://docs.digitalocean.com/products/kubernetes/how-to/monitor-basic/) running DOKS 1.33.1-do.5 or higher.


### 20 August 2021

- Released [v1.64.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.64.0), the official DigitalOcean CLI. This release includes support for managing App Platform alerts.


### 9 August 2021

- Released [v1.63.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.63.0), the official DigitalOcean CLI. This release includes a number of new features:


  - The `database firewall` sub-commands now support apps as trusted sources
  - New `monitoring alert` sub-commands for creating and managing alert policies
  - The `--droplet-agent` flag was added to the `compute droplet create` sub-command to optionally disable installing the agent for the Droplet web console

For more information, see [all Monitoring release notes](https://docs.digitalocean.com/release-notes/monitoring/).

In this article...

[Monitoring](https://docs.digitalocean.com/products/monitoring/)

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