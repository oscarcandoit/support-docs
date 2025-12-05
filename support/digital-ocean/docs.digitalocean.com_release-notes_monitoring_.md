---
url: "https://docs.digitalocean.com/release-notes/monitoring/"
title: "Monitoring | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/release-notes.5fbb164636ab961df9e08f892a39623e2bf7848be659fb300d6b0bab87a060dd.svg)Release Notes](https://docs.digitalocean.com/release-notes/)
- [![](https://docs.digitalocean.com/images/icons/regional-availability.32459447c00bfdb1c07abebcc0fdd721a4cbd93143cb616b0fbe5c629e4a938c.svg)Regional Availability](https://docs.digitalocean.com/platform/regional-availability/)
- [![](https://docs.digitalocean.com/images/icons/accounts.7c3a46a4e139957c37b1ba530846464f3b7432b7bc00793db0d8e788940ddf69.svg)Accounts](https://docs.digitalocean.com/platform/accounts/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Release Notes](https://docs.digitalocean.com/release-notes/)
- Monitoring

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Monitoring Release Notes

Validated on 3 Nov 2025

## November 2025

### 3 November

- DigitalOcean Insights now supports [GPU-level observability for AMD and NVIDIA GPU Droplets](https://docs.digitalocean.com/products/monitoring/details/features/#gpu-observability) and for GPU-enabled [Kubernetes clusters (DOKS)](https://docs.digitalocean.com/products/kubernetes/how-to/monitor-basic/) running DOKS 1.33.1-do.5 or higher.


## August 2021

### 20 August

- Released [v1.64.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.64.0), the official DigitalOcean CLI. This release includes support for managing App Platform alerts.


### 9 August

- Released [v1.63.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.63.0), the official DigitalOcean CLI. This release includes a number of new features:


  - The `database firewall` sub-commands now support apps as trusted sources
  - New `monitoring alert` sub-commands for creating and managing alert policies
  - The `--droplet-agent` flag was added to the `compute droplet create` sub-command to optionally disable installing the agent for the Droplet web console

## May 2020

### 15 May

- The retention period for [Droplet performance metrics](https://docs.digitalocean.com/products/droplets/how-to/track-performance/) has been decreased from 30 days to 14 days.


## September 2019

### 24 September

- Redis managed databases are now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability) with the addition of [monitoring insights](https://docs.digitalocean.com/products/databases/redis/how-to/monitor-clusters/).


## July 2019

### 3 July

- The installation repo for the [metrics agent](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install) has been moved to DigitalOcean Spaces.


## June 2019

### 17 June

- 6-hour and 1-day [alert policies](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/) for Droplets and Kubernetes worker nodes have been deprecated. No new alert policies with these intervals can be created. Existing alert policies using these intervals will remain in place until 1 August 2019, at which point they will be modified to reflect a 1-hour interval.


## May 2019

### 21 May

- [DigitalOcean Kubernetes](https://docs.digitalocean.com/products/kubernetes/) is now [Generally Available](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Highlights include:


  - [Availability](https://docs.digitalocean.com/platform/regional-availability/) in SGP1 and TOR1.

  - Support for [patch version upgrades](https://docs.digitalocean.com/products/kubernetes/how-to/upgrade-cluster/).

  - Configurable maintenance window and automatic upgrade options.

  - Delete node feature, which removes a specific node from a worker pool.

  - [Basic](https://docs.digitalocean.com/products/kubernetes/how-to/monitor-basic/) and [advanced monitoring](https://docs.digitalocean.com/products/kubernetes/how-to/monitor-advanced/) insights for resource utilization and deployment status metrics.


### 9 May

- [Managed databases](https://docs.digitalocean.com/products/databases/) are now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). New features include enhanced monitoring insights, support for projects and tags, and availability in the Singapore (SGP1) region.


## April 2019

### 9 April

- The new [metrics agent](https://docs.digitalocean.com/products/monitoring/) is fully released into production. Highlights include:


  - A simpler way to contribute custom metrics

  - A new [load average plot](https://docs.digitalocean.com/products/droplets/how-to/track-performance/)

  - Fedora 27 support

  - [Process name collection opt-out](https://docs.digitalocean.com/support/how-do-i-disable-process-name-collection-in-my-metrics-agent/)


This will be the default agent used by our [managed databases](https://docs.digitalocean.com/products/databases/) and [Kubernetes](https://docs.digitalocean.com/products/kubernetes/) products. All agent installations on or after this date will receive the new agent by default. On 8 July 2019, the legacy metrics agent will be deprecated, meaning users will no longer be able to view metrics from Droplets running the legacy agent. You can [upgrade to the new agent](https://docs.digitalocean.com/products/monitoring/how-to/upgrade-legacy-agent/) at any time.

## February 2019

### 27 February

- Public beta was opened for the new metrics agent. [See how to update your metrics agent here](https://docs.digitalocean.com/products/monitoring/how-to/upgrade-legacy-agent/).


### 4 February

- Added the Droplet name to the subject line in [metrics alert email notifications](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/).


## January 2019

### 29 January

- To ensure the accuracy of reported metrics, the top processes graphs were removed from [Monitoring](https://docs.digitalocean.com/products/monitoring/). Instead, you can [monitor resource-consuming processes with tools like `top`](https://www.digitalocean.com/community/tutorials/how-to-use-top-netstat-du-other-tools-to-monitor-server-resources).


In this article...

[Monitoring](https://docs.digitalocean.com/release-notes/monitoring/)

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