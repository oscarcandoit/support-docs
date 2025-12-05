---
url: "https://docs.digitalocean.com/products/droplets/details/limits/"
title: "Droplet Limits | DigitalOcean Documentation"
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
- Limits

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Droplet Limits

Validated on 26 Mar 2025 • Last edited on 17 Sep 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

## Limits

- Some Droplet network traffic is restricted to help prevent malicious actions, like reflected DDoS attacks. We know these restrictions also prevent functionality like configuring direct server return and using Droplets as routers and site-to-site VPN gateways. Future changes to our network may support this functionality. Until then, some workarounds include using a VPN mesh network or overlay network.

The following types of traffic are restricted:
  - TCP and UDP traffic on port 11211 inbound from external networks (due to the [Memcached amplification attacks](https://www.digitalocean.com/community/tutorials/how-to-secure-memcached-by-reducing-exposure) in March 2018).

  - Multicast traffic.

  - Traffic not matching a Droplet’s IP address/MAC address.

  - SMTP via Reserved IPs and IPv6.
- Droplets with Premium CPUs have a network throughput limit of 10 Gbps. GPU Droplets have a network throughput limit of 25 Gbps. All other Droplets have a maximum network throughput limit of 2 Gbps.

- You can’t create more than 10 Droplets at the same time using the control panel or the API.

- SMTP ports 25, 465, and 587 are blocked on all Droplets. We recommend [using a dedicated email deliverability platform, like SendGrid](https://docs.digitalocean.com/support/why-is-smtp-blocked/), and generally [recommend against running your own mail server](https://www.digitalocean.com/community/tutorials/why-you-may-not-want-to-run-your-own-mail-server).

- `/proc/cpuinfo` shows your Droplet plan, either DO-Premium or DO-Regular. You can see which processors each plan uses in [Choosing the Right Droplet Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/).

- Root password resets are not available for operating systems with internally-managed passwords, including Fedora.

- Droplets cannot have more than one Reserved IP address assigned to them at a time.


### Autoscale Pool Limits

- Autoscale pools do not support using Droplets with password authentication. Instead, use SSH key authentication.

- Autoscale pools do not currently support health checks. During configuration changes, autoscale pools provision Droplets with the new configuration, then wait for the pool’s specified cooldown duration before deleting the old Droplets.

- You cannot tag autoscale pools. You can tag the Droplets in an autoscale pool.

- You cannot change the cooldown duration (10 minutes) for autoscale pools set to fixed size. You can change the cooldown duration for autoscale pools set to autoscale.


### GPU Droplet Limits

- You cannot resize from an 8 GPU Droplet to a single GPU Droplet.

- GPU Droplets have a network throughput limit of 25 Gbps.

- Non-GPU Droplets do not support jumbo frames, so GPU and non-GPU Droplets can only communicate over the VPC using the standard 1,500 byte MTU size.

- To create multi-node GPU Droplets, you need to [contact support](https://cloudsupport.digitalocean.com/) to enable that functionality for your team.

- You cannot resize GPU Droplets from the control panel. Instead, use the API’s [Droplet action endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/dropletActions_post) or the CLI with [`doctl compute droplet-action resize`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/resize/)

- The control panel currently doesn’t display network transfer for GPU Droplets, but does display other plan details.

- L40S GPU Droplets don’t have NVLink hardware, so they don’t support configuration with NVIDIA Fabric Manager. Instead, use H100 GPU Droplets, which do support NVIDIA Fabric Manager.


## Known Issues

- Due to our network design, [traceroute](https://www.liquidweb.com/kb/how-to-use-traceroute/) diagnostics between Droplets may display 100% packet loss during the last two hops. The packet loss is expected and does not have any impact on the connectivity between Droplets.

### GPU Droplet Known Issues

- Powering GPU Droplets on and off from the control panel may be slow, especially for 8 GPU Droplets. We recommend using soft reboots from the command line (`reboot` or `shutdown --reboot`), [the API’s `reboot` action](https://docs.digitalocean.com/reference/api/digitalocean/#operation/dropletActions_list), or [`doctl compute droplet-action reboot`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/reboot/) instead.

- When using the AI/ML-ready image on 8 GPU Droplets, `journald` does not automatically start on boot. To enable `journald` logs, restart the service with `sudo systemctl restart systemd-journald`.


In this article...

- [Limits](https://docs.digitalocean.com/products/droplets/details/limits/#limits)
  - [Autoscale Pool Limits](https://docs.digitalocean.com/products/droplets/details/limits/#autoscale-pool-limits)
  - [GPU Droplet Limits](https://docs.digitalocean.com/products/droplets/details/limits/#gpu-droplet-limits)
- [Known Issues](https://docs.digitalocean.com/products/droplets/details/limits/#known-issues)
  - [GPU Droplet Known Issues](https://docs.digitalocean.com/products/droplets/details/limits/#gpu-droplet-known-issues)

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