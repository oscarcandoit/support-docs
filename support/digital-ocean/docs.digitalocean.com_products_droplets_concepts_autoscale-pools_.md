---
url: "https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/"
title: "Autoscale Pool Concepts | DigitalOcean Documentation"
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

- [Concepts](https://docs.digitalocean.com/products/droplets/concepts/)
- Autoscale Pools

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Autoscale Pool Concepts

Validated on 17 Apr 2025 • Last edited on 18 Apr 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

Droplet autoscale pools enable automatic [horizontal scaling](https://www.digitalocean.com/resources/articles/horizontal-scaling-vs-vertical-scaling#what-is-horizontal-scaling) for a pool of Droplets based on resource utilization or a fixed size.

When you [create an autoscale pool](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/), you choose the scaling configuration for the pool (autoscale or fixed size). This article provides details on how autoscale pools determine the size of the pool, when to scale, and what happens during scaling events.

## Determining Pool Size

Pools set to autoscale determine how many Droplets the pool should have by multiplying the utilization ratio by the current number of Droplets in the pool and taking the [ceiling](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions) of the result.

For example, an autoscale pool with two Droplets, a target utilization of 80% CPU, and a current utilization of 95% CPU would perform the following calculation to determine the size of the pool:

```
  ceil(2 Droplets * (95% current CPU / 80% target CPU))
= ceil(2 Droplets * 1.1875)
= ceil(2.375 Droplets)
= 3 Droplets
```

Therefore, this pool would scale up from two Droplets to three Droplets.

With multiple metrics set, the pool uses the largest result of this calculation across all metrics.

### CPU Steal Time on Shared CPU Droplets

A hypervisor dynamically manages the allocation of virtual resources, like vCPU, across the Droplets running on its physical host. Droplets with dedicated CPUs have dedicated access to their vCPU resources, and Droplets with shared CPUs (like Basic Droplets) share access with other shared CPU Droplets on the same hypervisor.

If some shared CPU Droplets on a hypervisor have a heavy workload, it can take longer for resources to become available for the hypervisor to allocate. The percentage of time a Droplet spends waiting for CPU resources from the hypervisor is called _CPU steal time_.

Autoscaling calculations include CPU steal time to ensure that your application has CPU available to meet the demand of your workload. If your application is CPU intensive, we recommend using a Droplet plan with dedicated CPUs for more predictable performance.

You can learn more about shared and dedicated CPU and about available Droplet plans in [Choosing the Right Droplet Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/).

## Cooldown Duration

The cooldown duration of the pool is the minimum amount of time the autoscale pool waits between making modifications to the Droplets in the pool.

This cooldown prevents thrashing during scaling. It also prevents downtime during configuration changes by giving new Droplets time to boot before destroying the old ones.

You can specify the cooldown duration in autoscale pools set to autoscale. The cooldown duration for fixed size pools is set to 10 minutes, which you cannot change.

## Scaling Down

When autoscale pools scale down, they destroy the most recently created Droplet first through a graceful shutdown process.

The pool issues a shutdown event to the Droplets to be destroyed and waits 60 seconds before issuing a destroy event. You can use this time to perform cleanup operations, gracefully close connections, or other actions.

The way you handle shutdown events depends on your operating system and application. One example is to use a [systemd unit file](https://www.digitalocean.com/community/tutorials/understanding-systemd-units-and-unit-files) with `Type=oneshot`.

## Droplet Configuration and Access

You can access and perform actions on Droplets in an autoscale pool like regular Droplets. This can be useful for debugging or one-off tasks.

However, Droplets in an autoscale pool are ephemeral. If you make modifications or add resources to Droplets in an autoscale pool, the changes do not propagate to new or other existing Droplets in the pool, and all changes are lost if the autoscale pool deletes the Droplet.

To make persistent changes, update the Droplet configuration for the autoscaling pool. When you change the Droplet configuration, the autoscale pool provisions Droplets with the new configuration, then waits for the cooldown duration before destroying the old Droplets. During this time, the pool temporarily has twice as many Droplets and may exceed the maximum size of the pool.

In this article...

- [Determining Pool Size](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/#determining-pool-size)
  - [CPU Steal Time on Shared CPU Droplets](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/#steal)
- [Cooldown Duration](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/#cooldown-duration)
- [Scaling Down](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/#scaling-down)
- [Droplet Configuration and Access](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/#droplet-configuration-and-access)

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

Cookie Preferences

GenAI Agent - DigitalOcean