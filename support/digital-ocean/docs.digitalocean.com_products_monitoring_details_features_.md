---
url: "https://docs.digitalocean.com/products/monitoring/details/features/"
title: "Monitoring Features | DigitalOcean Documentation"
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

- [Details](https://docs.digitalocean.com/products/monitoring/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Monitoring Features

Validated on 3 Nov 2025 • Last edited on 10 Nov 2025

DigitalOcean Monitoring is a free, opt-in service that lets you track Droplet resource usage in real time, visualize performance metrics, and receive alerts via email or Slack to proactively manage your infrastructure’s health.

## GPU Observability

GPU Observability extends DigitalOcean Insights to display GPU-level metrics for DOKS clusters that include GPU node pools created with AI/ML Ready images for AMD and NVIDIA GPUs. It provides a monitoring experience for GPU workloads, so you can track utilization, temperature, memory usage, and performance directly in the **Insights** tab.

`do-agent` automatically detects the GPU type on each node and enables the correct exporter (`DCGM` for NVIDIA GPUs or `ROCm` for AMD GPUs). Metrics are collected locally on each GPU worker node.

GPU Observability is available on DOKS 1.33.1-do.5 or higher and is automatically enabled when you select **Improved metrics and monitoring** during cluster creation.

For security, GPU exporters listen only on `127.0.0.1` to prevent external access.

- **AI/ML Ready Droplets:** GPU metrics are enabled automatically when you select **Improved Metrics and Monitoring** during Droplet creation.
- **Basic Images:** GPU metrics are not enabled by default. For **Basic Images**, you can enable GPU metrics by [manually installing the exporter](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/), binding it to `127.0.0.1`, reconfiguring `do-agent` to scrape it, and restarting `do-agent`.


## Droplet Graphs

Droplet graphs provide visual representations of system-level metrics. Use them to monitor resource usage over time and understand how it correlates to performance.

By default, Droplet graphs show public and private bandwidth usage, CPU usage, and disk I/O. By installing the [DigitalOcean metrics agent](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/), you also gain access to load averages (1-, 5-, and 15-minute), memory usage, and disk usage.

## Alert Policies

[Alert policies](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/) let you define thresholds for resource usage. When usage exceeds these thresholds, notifications are sent through email or [Slack](https://slack.com/).

You can set alerts for total CPU usage, incoming and outgoing bandwidth, disk read and write operations, memory usage, and disk usage.

In this article...

- [GPU Observability](https://docs.digitalocean.com/products/monitoring/details/features/#gpu-observability)
- [Droplet Graphs](https://docs.digitalocean.com/products/monitoring/details/features/#droplet-graphs)
- [Alert Policies](https://docs.digitalocean.com/products/monitoring/details/features/#alert-policies)

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