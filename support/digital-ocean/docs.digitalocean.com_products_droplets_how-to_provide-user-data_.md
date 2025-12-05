---
url: "https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/"
title: "How to Provide User Data During Droplet Creation | DigitalOcean Documentation"
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
- Provide User Data

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Provide User Data During Droplet Creation

Validated on 22 Nov 2024 • Last edited on 17 Apr 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

User data is arbitrary data, often a script, that you can supply to a Droplet during creation. \[ [cloud-init](https://cloud-init.io/)\]( [https://cloud-init.io/](https://cloud-init.io/)) is a tool that applies user data to automatically configure cloud servers like Droplets.

When you provide user data to a Droplet with cloud-init, cloud-init consumes the user data, which it can use to perform tasks as the root user during the Droplet’s first boot. This is helpful for automation setup for tasks like creating new users, customizing firewall rules, installing applications, and configuring SSH keys.

## About cloud-init

cloud-init accepts [`cloud-config` files](https://www.digitalocean.com/community/tutorials/an-introduction-to-cloud-config-scripting) or any script that can be interpreted by the Droplet, like a Bash script.

cloud-init is available on DigitalOcean’s latest Ubuntu and CentOS images. You can define user data for images that do not support cloud-init, but the user data is not consumed automatically on first boot.

## Providing User Data

You can provide user data to a Droplet during creation via the [DigitalOcean Control Panel](https://cloud.digitalocean.com/), the [API](https://docs.digitalocean.com/reference/api/digitalocean/#operation/droplets_create), or [`doctl`, the CLI client](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/create/).

- To provide user data when creating a Droplet via the DigitalOcean Control Panel, on the [Droplet creation page](https://cloud.digitalocean.com/droplets/new), above the **Finalize Details** section, click **\+ Advanced Options**. In the section that opens, check the box next to **Add Initialization scripts**. Add your user data in the box that appears.

- To provide user data when creating a Droplet via the DigitalOcean API, use the `user_data` field in the Droplet creation POST request.

- To provide user data when creating a Droplet via `doctl`, the DigitalOcean CLI, use the `--user-data` or `--user-data-file` flags when calling [`doctl compute droplet create`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/create/).


You cannot modify user data after a Droplet is created.

## Debugging User Data

To see how a cloud-init file uses the provided user data, view the `/var/log/cloud-init-output.log` file:

```bash
cat /var/log/cloud-init-output.log | grep userdata
```

The file logs output from cloud-init so you can view warnings, error messages, and debug information.

## More Information

cloud-init has both [reference documentation](https://cloudinit.readthedocs.io/en/latest/topics/modules.html) and [examples](https://cloudinit.readthedocs.io/en/latest/topics/examples.html) to see which properties of your Droplet you can automatically configure upon deployment.

![](https://docs.digitalocean.com/images/icons/community.svg)

an introduction to cloud-config scripting

this tutorial explains the format and usage of `cloud-config` files, which are special scripts designed to be run by the `cloud-init`process for initial configuration on the first boot of a server.

digitalocean.com/community![](https://docs.digitalocean.com/images/icons/community.svg)

how to use cloud-config for your initial server setup

this tutorial uses the digitalocean metadata service and `cloud-config` files to automate initial server setup for a ubuntu droplet.

digitalocean.com/community

In this article...

- [About cloud-init](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/#about-cloud-init)
- [Providing User Data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/#providing-user-data)
- [Debugging User Data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/#debugging-user-data)
- [More Information](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/#more-information)

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