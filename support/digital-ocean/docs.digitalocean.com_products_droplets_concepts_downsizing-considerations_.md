---
url: "https://docs.digitalocean.com/products/droplets/concepts/downsizing-considerations/"
title: "Considerations when Downsizing to a Smaller Droplet | DigitalOcean Documentation"
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
- Tips on Downsizing Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Considerations when Downsizing to a Smaller Droplet

Validated on 28 Aug 2019 • Last edited on 8 May 2024

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

As you create and use your Droplets, you may find that the plan you’ve chosen for any given Droplet is above your needs and downsizing is appropriate. For data integrity reasons, we don’t provide the ability to downsize a Droplet through the control panel, but you can still switch to a smaller Droplet using common migration strategies.

Here are some tips when you’re considering downsizing your Droplet.

## Make a Backup of the Original Droplet

We strongly recommending backing up your Droplet by [taking a snapshot](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-droplets/) first. Without a backup, you risk data loss if anything goes wrong.

Warning
Unlike snapshots, backup images created by [automatic backups](https://docs.digitalocean.com/products/backups/) are destroyed when the corresponding Droplet is destroyed. If you have automatic backups enabled on the original Droplet and want to keep one or more of its backup images as safeguards, [convert the backups to snapshots](https://docs.digitalocean.com/products/backups/how-to/convert-to-snapshot/) before you delete the Droplet.

## Migrate Files

There are a variety of tools that simplify the process of migrating files from one server to another. If you [set up SSH keys](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/) between the original and new Droplets, you can use tools like [SnapShooter](https://docs.digitalocean.com/products/snapshooter/), `scp`, or [rsync](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh). You can also follow a more [comprehensive migration process](https://www.digitalocean.com/community/tutorial_series/how-to-migrate-to-a-new-linux-server).

## Update DNS Records

If you currently use the DigitalOcean for DNS management, [update your DNS records](https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/) to point to the new Droplet.

Wait and [confirm that the DNS changes have propagated](https://www.digitalocean.com/community/tutorials/how-to-use-dig-whois-ping-on-an-ubuntu-vps-to-query-dns-data#how-to-use-dig-to-test-dns-records) before deleting the original Droplet.

## Replace IP Addresses or Consider Reserved IPs

DigitalOcean doesn’t reserve IP addresses, so you need to update any references to the IP address of the original Droplet to the one by the new Droplet. You can make this process easier in the future by using a [reserved IP](https://docs.digitalocean.com/products/networking/reserved-ips/), a publicly-accessible static IP address that you can assign to a Droplet.

If you’re already using a reserved IP address for the original Droplet, you can [modify the existing reserved IP](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify/) to point to the new Droplet.

In this article...

- [Make a Backup of the Original Droplet](https://docs.digitalocean.com/products/droplets/concepts/downsizing-considerations/#make-a-backup-of-the-original-droplet)
- [Migrate Files](https://docs.digitalocean.com/products/droplets/concepts/downsizing-considerations/#migrate-files)
- [Update DNS Records](https://docs.digitalocean.com/products/droplets/concepts/downsizing-considerations/#update-dns-records)
- [Replace IP Addresses or Consider Reserved IPs](https://docs.digitalocean.com/products/droplets/concepts/downsizing-considerations/#replace-ip-addresses-or-consider-reserved-ips)

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