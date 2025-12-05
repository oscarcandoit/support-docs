---
url: "https://docs.digitalocean.com/products/droplets/how-to/track-performance/"
title: "How to Track Performance with Droplet Graphs | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/droplets.f4877fc574e6b07f8fb9608e252be4160ebecd65569acea11775a046b9370c6f.svg)Droplets](https://docs.digitalocean.com/products/droplets/)
- [Getting Started](https://docs.digitalocean.com/products/droplets/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/droplets/getting-started/quickstart/)
  - [Recommended Droplet Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/)
  - [Recommended GPU Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/)
- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
  - [Create Droplets](https://docs.digitalocean.com/products/droplets/how-to/create/)
  - [Use GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/)
  - [Provide User Data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/)
  - [Connect with SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/)
  - [Add SSH Keys to Droplets](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/)
  - [Connect with the Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/)
  - [Transfer Files with FileZilla](https://docs.digitalocean.com/products/droplets/how-to/transfer-files/)
  - [Tag Droplets](https://docs.digitalocean.com/products/droplets/how-to/tag/)
  - [Track Performance](https://docs.digitalocean.com/products/droplets/how-to/track-performance/)
  - [Resize Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/)
  - [Use Autoscale Pools](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/)
  - [Access Metadata](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/)
  - [Rebuild Droplets](https://docs.digitalocean.com/products/droplets/how-to/rebuild/)
  - [Manage the Droplet Agent](https://docs.digitalocean.com/products/droplets/how-to/manage-agent/)
  - [Manage the Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/)
  - [Recover Access or Data](https://docs.digitalocean.com/products/droplets/how-to/recovery/)
  - [Destroy Droplets](https://docs.digitalocean.com/products/droplets/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/droplets/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Droplets)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/)
- [Concepts](https://docs.digitalocean.com/products/droplets/concepts/)
  - [Choosing a Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/)
  - [Tips on Downsizing Droplets](https://docs.digitalocean.com/products/droplets/concepts/downsizing-considerations/)
  - [Autoscale Pools](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/)
  - [Glossary](https://docs.digitalocean.com/glossary/droplets/)
- [Details](https://docs.digitalocean.com/products/droplets/details/)
  - [Features](https://docs.digitalocean.com/products/droplets/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/droplets/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/droplets/details/availability/)
  - [Images](https://docs.digitalocean.com/products/droplets/details/images/)
  - [Limits](https://docs.digitalocean.com/products/droplets/details/limits/)
  - [Image Deprecation Policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/)
  - [Droplet Policies](https://docs.digitalocean.com/products/droplets/details/policies/)
  - [Live Migrations](https://docs.digitalocean.com/products/droplets/details/live-migration/)
  - [CPU Droplet SLA](https://www.digitalocean.com/sla/cpu-droplets)
  - [GPU Droplet SLA](https://www.digitalocean.com/sla/gpu-droplets)
  - [GPU Droplets](https://docs.digitalocean.com/products/gpu-droplets/)
- [Support](https://docs.digitalocean.com/products/droplets/support/)

- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
- Track Performance

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Track Performance with Droplet Graphs

Validated on 25 Aug 2020 • Last edited on 14 Jul 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

Droplet graphs are up-to-the-minute visualizations of how your server is performing over time. They let you monitor Droplet performance metrics in the control panel.

Droplets come with some graphs available by default, and there are additional graphs available when you enable the free [DigitalOcean Monitoring](https://docs.digitalocean.com/products/monitoring/) service.

## Default Droplet Graphs

To view a Droplet’s graphs, click its name on the dashboard. You arrive directly on the Graphs page. By default, three graphs are available for any Droplet:

- The **Bandwidth public** chart displays public bandwidth usage in megabits per second. Incoming bandwidth is dark purple and outgoing bandwidth is light purple.

- The **CPU** usage shows the percent of total processing power being used, with light blue for user jobs and dark blue for system processes.

- The **Disk I/O** displays disk read and write operations in megabytes per second, with read operations in dark green and write operations in light green.


The times in these graphs are in your local time zone, as determined by your browser.

![The Droplet Graphs page with the default graphs visible](https://docs.digitalocean.com/screenshots/droplets/pages/graphs.346f1e89087b95013bbd1a3f395b11ef3729573f3526eda1ade3ad764c1c2b38.png)

If you have enabled [private networking](https://docs.digitalocean.com/products/networking/vpc/) on the Droplet, you also have access to a fourth graph to track VPC network bandwidth usage. Like the Bandwidth public graph, the **Bandwidth private** graph does not appear until there is actual network traffic. The **Bandwidth private** chart displays the VPC network bandwidth usage in megabits per second. Incoming bandwidth use is shown in dark purple and outgoing bandwidth in light purple.

## Metrics Agent

The default Droplet graphs use metrics collected by external tools; they require no additional services on the Droplet itself. You can enable additional metrics graphs and alerting with the [DigitalOcean metrics agent](https://docs.digitalocean.com/products/monitoring/#agent-overview), which is a small utility that runs on the Droplet.

You can [install the metrics agent](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install) automatically when you provision a Droplet or after a Droplet has been created.

Once the agent is installed, you’ll have access to these additional graphs:

- **Load Average** measures whether the CPU is keeping up with queued processes. There are three lines representing 1-, 5-, and 15-minute load average calculation time frames in blue, green, and purple, respectively. You can find more details on load average in the [metrics definitions](https://docs.digitalocean.com/products/monitoring/concepts/metrics/#load-average).

- The **Memory** line graph displays the percentage of physical RAM in use.

- The **Disk Usage** line graph shows the percentage of space being used on the Droplet’s disk.


![Screenshot of extended graphs](https://docs.digitalocean.com/screenshots/droplets/extended-graphs.e8c895644f374edfefea4a48ffafcea4c03a6c53522eb4745b184b38f612b363.png)

The Droplet graph time frame options are 6 hours, 24 hours, 7 days, or 14 days. Data resolution is based on number of points, with a fixed number of points per plot. When you mouse over any of the graphs, a line appears on all of them, pinpointing a moment in time. A graph legend appears along with metrics for that specific point in time.

## Retrieve Performance Data via API

The DigitalOcean API provides monitoring endpoints that cover various performance metrics, like bandwidth, CPU, and memory usage. The following code examples cover CPU usage.

How to Get Droplet CPU Metrics Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a GET request to [`https://api.digitalocean.com/v2/monitoring/metrics/droplet/cpu`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/monitoring_get_DropletCpuMetrics).

### cURL

Using cURL:

```shell
curl -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/monitoring/metrics/droplet/cpu?host_id=222651441&start=1636051668&end=1636051668"
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

resp = client.monitoring.get_droplet_cpu_metrics(host_id="17209102", start="1620683817", end="1620705417")
```

To learn more, see [the monitoring endpoint of the DigitalOcean API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Monitoring).

In this article...

- [Default Droplet Graphs](https://docs.digitalocean.com/products/droplets/how-to/track-performance/#default-droplet-graphs)
- [Metrics Agent](https://docs.digitalocean.com/products/droplets/how-to/track-performance/#metrics-agent)
- [Retrieve Performance Data via API](https://docs.digitalocean.com/products/droplets/how-to/track-performance/#retrieve-performance-data-via-api)

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