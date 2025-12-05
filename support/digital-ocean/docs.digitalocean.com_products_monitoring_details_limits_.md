---
url: "https://docs.digitalocean.com/products/monitoring/details/limits/"
title: "Monitoring Limits | DigitalOcean Documentation"
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
- Limits

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Monitoring Limits

Validated on 3 Nov 2025 • Last edited on 10 Nov 2025

DigitalOcean Monitoring is a free, opt-in service that lets you track Droplet resource usage in real time, visualize performance metrics, and receive alerts via email or Slack to proactively manage your infrastructure’s health.

## General Monitoring Limits

- You cannot revert to basic Droplet graphs after enabling the metrics agent. If you prefer different visualizations, export the metrics to an external tool like [Grafana](https://grafana.com/docs/grafana/latest/setup-grafana/) to create a customized, lightweight dashboard.

- You cannot export metrics data directly from the `do-agent` service. It collects system metrics and sends them to our backend services, where they appear in the DigitalOcean Control Panel and API.

- You cannot add or change the alert email address for individual accounts. Use a team account email or configure Slack integration to receive alerts through a shared channel.

- The metrics agent only collects system-level data and does not support application performance monitoring (APM). It does not track application errors, website traffic, or performance bottlenecks. To monitor application-level metrics, use a dedicated APM tool alongside DigitalOcean Monitoring. For example, [New Relic](https://newrelic.com/) offers comprehensive monitoring, including error tracking, transaction tracing, and performance analysis.


## GPU Observability Limits

- You cannot enable or disable GPU Observability after Droplet creation. It is available only when you select **Improved Metrics and Monitoring** during Droplet setup with an AI/ML Ready Image.

- Alerts for GPU metrics are not yet available. You can view GPU metrics, but alerting on GPU data is currently unsupported.

- GPU temperatures maintain typical operating limits that align with vendor specifications. Sustained values near the rated maximum may indicate thermal constraints.

- GPU occupancy or memory usage with sustained values above 85–95% suggests the GPU is nearing full utilization or memory saturation.

- GPU metric limits vary by metric type. For example, °C for temperature, W for power, or % for occupancy and memory utilization.

- You cannot view power utilization as a percentage. Power usage (in watts) is available, but percentage-based power utilization metrics are not included.

- You may see differences in metric availability across GPU models. We provide an extensive set of metrics for NVIDIA A30, H100, and H200 GPUs, as well as AMD MI300 and MI325 GPUs. Profiler metrics, such as occupancy and tensor core utilization, are not available for NVIDIA L40S, RTX 6000 Ada, and RTX 4000 Ada GPUs.

- You may not see GPU Occupancy (%) or Tensor Utilization (%) on RTX-class GPUs. Some models, such as RTX 4000, 6000, and L40S, do not expose DCGM profiling metrics due to NVIDIA exporter limitations.

- You must [use an **AI/ML Ready Image**](https://docs.digitalocean.com/products/droplets/how-to/gpu/create/) to automatically enable GPU observability. For **Basic Images**, you can enable GPU metrics by [manually installing the exporter](https://docs.digitalocean.com/products/droplets/how-to/gpu/enable-metrics/), binding it to `127.0.0.1`, reconfiguring `do-agent` to scrape it, and restarting `do-agent`.

- You cannot create new alert types specific to GPU metrics as GPU metrics work with the same alerting and notification system as other monitoring data.


In this article...

- [General Monitoring Limits](https://docs.digitalocean.com/products/monitoring/details/limits/#general-monitoring-limits)
- [GPU Observability Limits](https://docs.digitalocean.com/products/monitoring/details/limits/#gpu-observability-limits)

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