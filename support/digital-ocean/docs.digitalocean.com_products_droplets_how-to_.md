---
url: "https://docs.digitalocean.com/products/droplets/how-to/"
title: "Droplet How-Tos | DigitalOcean Documentation"
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

- How-Tos

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Droplet How-Tos

Generated on 25 Nov 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

## Creation

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Create a Droplet

Create Droplets and customize the image, plan, authentication method, and quantity of Droplets you want.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Create and Configure DigitalOcean Gradient™ AI GPU Droplets

Create and configure GPU Droplets, which are powered by AMD or NVIDIA GPUs.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Provide User Data During Droplet Creation

Automate Droplet configuration by providing user data to a Droplet during creation.

## Connection

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Connect to Droplets with SSH

Use a terminal to connect to Droplets using OpenSSH or PuTTY for shell access to your remote server.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Add SSH Keys to New or Existing Droplets

Improve security when you log in by creating SSH keys and adding them to Droplets.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Connect to Droplets with the Droplet Console

Use the Droplet Console from a web browser to connect to Droplets for native-like terminal access to your remote server.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Transfer Files to Droplets With FileZilla

Securely move files between Droplets and your local machine using FileZilla, an open-source FTP client.

## Configuration and Scaling

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Tag Droplets

Organize Droplets with tags to group and filter Droplets by role, automatically include Droplets in firewall or load balancer configurations, or target multiple Droplets at once with the API.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Track Performance with Droplet Graphs

Monitor Droplet performance with default graphs for bandwidth, CPU usage, and disk I/O. Install the DigitalOcean metrics agent for extended graphs like CPU load average, memory usage, and disk usage.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Resize Droplets for Vertical Scaling

Resize a Droplet to change the amount of CPU and RAM a Droplet has, optionally add additional disk space, or change to a different type of Droplet plan or CPU.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Use Droplet Autoscale Pools for Automatic Horizontal Scaling

Create a Droplet autoscale pool to enable automatic horizontal scaling based on resource utilization or a fixed size.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Access Information about a Droplet using the Metadata API

Use the Droplet metadata service to programmatically query a Droplet for information about itself.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Rebuild Droplets

Overwrite the entirety of a Droplet’s disk with an image you select.

## Management and Recovery

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Install or Uninstall the DigitalOcean Droplet Agent

Install the Droplet agent on older Droplets to enable features like the Droplet Console, or uninstall the agent to remove access.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Manage a Droplet's Kernel

Upgrade a Droplet’s internal kernel version, boot into a specific non-default version, or use the DigitalOcean GrubLoader kernel to convert legacy Droplets from external to internal kernel management.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

Recover Access or Data

Droplets come with several recovery features, including the Recovery Console for out-of-band connectivity independent of network settings and the recovery ISO for regaining access to the Droplet’s filesystem.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Destroy a Droplet from the DigitalOcean Control Panel

Destroy a Droplet to permanently and irreversibly destroy the Droplet and its contents.

In this article...

[Droplet How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)

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