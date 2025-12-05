---
url: "https://docs.digitalocean.com/products/droplets/details/live-migration/"
title: "Live Migrations | DigitalOcean Documentation"
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

- [Details](https://docs.digitalocean.com/products/droplets/details/)
- Live Migrations

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Live Migrations

Validated on 25 Jul 2019 • Last edited on 14 Aug 2024

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

Live migration moves a running Droplet from one physical machine to another in its datacenter without requiring a reboot. We use live migration to minimize disruption and downtime during events like normal infrastructure and network maintenance, software upgrades, and hardware failures.

## How Live Migrations Work

Live migrating a Droplet follows this general process:

1. When the migration is triggered, the system uses a scoring algorithm to find an available physical host in the same datacenter based on the Droplet’s size (CPU, memory, disk).

2. The system prepares the target hardware and begins copying the Droplet to its new location. This is more complicated than it may seem; because the Droplet is still running, its disk and memory may change during the migration.

To account for this, the system monitors the disk to track modified blocks. Once the initial copy is complete, it re-copies the modified blocks and repeats the process until all blocks are moved, at which point new writes take place on the new hardware. If a Droplet is writing rapidly to disk during a migration, the system applies a temporary throttle when there are only a smaller number of modified blocks remaining so the migration can complete.

A very similar process occurs for memory pages, though automatic throttling in this case is significantly shorter than with disk throttling, and should be unnoticeable.

3. The system updates the Droplet’s records to point to its new location.


Once the migration is complete, we can access the original hardware for maintenance or other events without any effect on the Droplets that were originally running there.

## How Live Migrations Affect Users

Overall, live migrations have minimal impact on Droplets and users. They don’t change a Droplet’s data or configuration, like software or network settings, so IP addresses and internal data remain the same. Because migrations are run at the block-level, there is also no risk of file loss or corruption. In the final stages of the transfer, there may be a momentary slowdown in the read/write performance of a Droplet’s disk.

Users typically don’t have to do anything before or after a live migration, but there are some exceptions:

- If you’re concerned about disk throttling or prefer offline migration, you can shut down the Droplet before its migration window. Shutting down or otherwise reducing the load of a Droplet during its migration window isn’t necessary, but it does not negatively impact the migration.

- If you have Droplets running workloads leveraging nested virtualization, you need to restart any nested VMs after a live migration.


If a live migration fails, the source Droplets are unaffected. We either attempt the live migration again or send a notification that we need to briefly shut down the Droplet to migrate it.

## How to Check for Scheduled Live Migrations

To see if a Droplet is scheduled for a live migration, you can send an HTTP request from the Droplet to the following endpoint: `http://169.254.169.254/v1/maintenance_event`

You can test this by logging into the Droplet and sending a `cURL` request from the command line:

```shell
curl http://169.254.169.254/v1/maintenance_event
```

The endpoint returns the string `live_migrate` at least 10 minutes before a scheduled migration. If the request returns a blank string, we have not scheduled the Droplet for a migration.

To further minimize live migration disruptions for high workload Droplets, you can use the response from this endpoint to develop automation that automatically shifts workload to other Droplets in your fleet when the Droplet detects a migration. If the Droplet cannot act on a live migration notice in a meaningful manner, such as shifting workloads to other Droplets, it is not necessary to poll the endpoint.

In this article...

- [How Live Migrations Work](https://docs.digitalocean.com/products/droplets/details/live-migration/#how-live-migrations-work)
- [How Live Migrations Affect Users](https://docs.digitalocean.com/products/droplets/details/live-migration/#how-live-migrations-affect-users)
- [How to Check for Scheduled Live Migrations](https://docs.digitalocean.com/products/droplets/details/live-migration/#how-to-check-for-scheduled-live-migrations)

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