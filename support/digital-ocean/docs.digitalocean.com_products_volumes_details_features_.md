---
url: "https://docs.digitalocean.com/products/volumes/details/features/"
title: "Volume Features | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/volumes.9c13d8bb9aee0348ee1af5d72d4c795b4eea86db85fa161806e73d12c0b756d3.svg)Volumes Block Storage](https://docs.digitalocean.com/products/volumes/)
- [Getting Started](https://docs.digitalocean.com/products/volumes/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/volumes/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/volumes/how-to/)
  - [Create and Set Up Volumes](https://docs.digitalocean.com/products/volumes/how-to/create/)
  - [Delete Volumes](https://docs.digitalocean.com/products/volumes/how-to/delete/)
  - [Increase the Size of Volumes](https://docs.digitalocean.com/products/volumes/how-to/increase-size/)
  - [Detach Volumes](https://docs.digitalocean.com/products/volumes/how-to/detach/)
  - [Move Volumes between Droplets](https://docs.digitalocean.com/products/volumes/how-to/move-between-droplets/)
  - [Mount Volumes](https://docs.digitalocean.com/products/volumes/how-to/mount/)
  - [Unmount Volumes](https://docs.digitalocean.com/products/volumes/how-to/unmount/)
  - [Partition Volumes](https://docs.digitalocean.com/products/volumes/how-to/partition/)
  - [Expand Partitions](https://docs.digitalocean.com/products/volumes/how-to/expand-partitions/)
- [Reference](https://docs.digitalocean.com/products/volumes/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Block-Storage)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/)
- [Details](https://docs.digitalocean.com/products/volumes/details/)
  - [Features](https://docs.digitalocean.com/products/volumes/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/volumes/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/volumes/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/volumes/details/limits/)
  - [Naming Conventions](https://docs.digitalocean.com/products/volumes/details/naming-conventions/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/volumes)
- [Support](https://docs.digitalocean.com/products/volumes/support/)

- [Details](https://docs.digitalocean.com/products/volumes/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Volume Features

Validated on 5 Apr 2022 • Last edited on 14 Nov 2025

Volumes are network-attached block storage. You can use them with Droplets or Kubernetes clusters, move or resize them, and create snapshots at any time.

## Use Cases

Volumes are most useful when you need more storage space but don’t need the additional processing power or memory that a larger Droplet would provide, like:

- As the document root or media upload directory for a web server
- To house database files for a database server
- As a target location for backups
- As expanded storage for personal file hosting platforms like ownCloud
- As storage for certain distributed web applications and artificial intelligence/machine learning workflows

## Ease of Use

Volumes function as generic block devices, so you can treat attached volumes like locally connected storage drives. This lets you partition, format, and manage volumes with familiar tools and techniques.

You can choose to automatically format and mount a volume for first-time use on Ubuntu, Fedora, Debian 8+, CentOS, and Fedora Atomic.

## Flexibility

Volumes are independent resources, so you can [move them between Droplets](https://docs.digitalocean.com/products/volumes/how-to/move-between-droplets/) in the same datacenter, and you can [increase the size of a volume](https://docs.digitalocean.com/products/volumes/how-to/increase-size/) without powering down the Droplet it’s attached to.

Volume snapshots are full disk images that you create on demand. [Create a snapshot](https://docs.digitalocean.com/products/snapshots/how-to/snapshot-volumes/) to save the contents of the volume, and [create volumes based on snapshots](https://docs.digitalocean.com/products/snapshots/how-to/create-volumes/) to create a new volume with the same contents.

## Performance

Like Droplets, volumes are backed by SSDs.

Volumes also have burst support. Burst support automatically increases volumes’ IOPS and bandwidth rates for short periods of time (60 seconds) before returning to baseline performance to cool off (60 seconds) to support spikes in workload.

| Type | IOPS | Throughput |
| --- | --- | --- |
| Standard | 7,500 | 300 MB/s |
| Standard (burst) | 10,000 | 450 MB/s |
| CPU-Optimized | 10,000 | 450 MB/s |
| CPU-Optimized (burst) | 15,000 | 525 MB/s |
|  |  |  |

## Security

Volumes are encrypted with LUKS (Linux Unified Key Setup). The entire storage cluster is encrypted, so snapshots of volumes are also encrypted at rest.

Volumes are built with [Ceph](https://ceph.io/). As we describe in our [blog post on why we chose Ceph](https://blog.digitalocean.com/why-we-chose-ceph-to-build-block-storage/):

> Ceph is built for redundancy, and we carefully ensure that the loss of a single drive or server does not compromise data integrity or availability.

> Ceph gracefully heals itself when individual components fail, ensuring continuity of service with uncompromising data protection. Additionally, we use sophisticated monitoring systems built around tools including Prometheus and our own open-source [`ceph_exporter`](https://github.com/digitalocean/ceph_exporter). These help us respond immediately to any issues with our Ceph infrastructure to ensure continuous availability.

Volumes store data on hardware that is separated from the Droplet and replicated multiple times across different hosts, reducing the chances of data loss because of hardware failure.

In this article...

- [Use Cases](https://docs.digitalocean.com/products/volumes/details/features/#use-cases)
- [Ease of Use](https://docs.digitalocean.com/products/volumes/details/features/#ease-of-use)
- [Flexibility](https://docs.digitalocean.com/products/volumes/details/features/#flexibility)
- [Performance](https://docs.digitalocean.com/products/volumes/details/features/#performance)
- [Security](https://docs.digitalocean.com/products/volumes/details/features/#security)

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