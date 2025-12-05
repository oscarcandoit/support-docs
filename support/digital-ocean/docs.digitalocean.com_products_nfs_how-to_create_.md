---
url: "https://docs.digitalocean.com/products/nfs/how-to/create/"
title: "How to Create a Network File Storage Share | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/nfs.2125812c526e200f3956d48d6e70344c85c156cbeb56103ff278169fd7bcb40f.svg)Network File Storage](https://docs.digitalocean.com/products/nfs/)
  - [Getting Started](https://docs.digitalocean.com/products/nfs/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/nfs/getting-started/quickstart/)
  - [How-Tos](https://docs.digitalocean.com/products/nfs/how-to/)
    - [Create Share](https://docs.digitalocean.com/products/nfs/how-to/create/)
    - [Delete Share](https://docs.digitalocean.com/products/nfs/how-to/delete/)
    - [Mount Share](https://docs.digitalocean.com/products/nfs/how-to/mount/)
    - [Resize Share](https://docs.digitalocean.com/products/nfs/how-to/resize/)
    - [Create Snapshot](https://docs.digitalocean.com/products/nfs/how-to/create-snapshot/)
    - [Change VPC](https://docs.digitalocean.com/products/nfs/how-to/change-vpc/)
  - [Reference](https://docs.digitalocean.com/products/nfs/reference/)
  - [Details](https://docs.digitalocean.com/products/nfs/details/)
    - [Features](https://docs.digitalocean.com/products/nfs/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/nfs/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/nfs/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/nfs/details/limits/)

- [Network File Storage](https://docs.digitalocean.com/products/nfs/)
- [How-Tos](https://docs.digitalocean.com/products/nfs/how-to/)
- Create Share

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create a Network File Storage Share

Validated on 13 Oct 2025 • Last edited on 20 Oct 2025

Network File Storage is a fully managed, POSIX-compliant file storage solution built for demanding workloads like AI/ML pipelines, containerized applications, and DigitalOcean Kubernetes (DOKS) clusters. It provides scalable, high-throughput shared storage that simplifies storage management for distributed applications.

To create and use a new Network File Storage (NFS) share, you need to create the share itself, and then mount it on a Droplet or DOKS cluster. NFS shares attach to a single VPC network and can only be mounted by resources within that same network. [Create a VPC network](https://docs.digitalocean.com/products/networking/vpc/how-to/create/) for the NFS share in one of the supported datacenters before you begin.

## Create a Share Using Automation

How to Create a Share Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/nfs`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/nfs_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name": "sammy-share-drive", "size_gib": 1024, "region": "atl1", "vpc_ids": ["796c6fe3-2a1d-4da2-9f3e-38239827dc91"]}' \
  "https://api.digitalocean.com/v2/nfs"
```

## Create a Share Using the Control Panel

To create a share from the [control panel](https://cloud.digitalocean.com/), click the **Create** menu, then click **Network File Storage**.

On the **Create a Network File Storage Share** page select your options for the new share:

- **Choose a datacenter region**: Select the region to create the share in.
- **VPC network**: Select the VPC network to attach the share to. All Droplet and DOKS resources must be in the same VPC network to access the share.
- **Choose a storage size**: Enter the share size in GiB. Shares must be at least 50 GiB.
- **Finalize**: Enter a name for your share. Names must be lowercase letters and can contain dashes. Names must be unique within your team account.

In the **Summary** section, review the selected configuration, then click **Create Network File Storage** to create your share.

The **Network File Share** overview page loads, where all of your NFS shares are listed in a table with the following details:

- **Name**: The unique name you gave your share.
- **Status**: Whether the share is **New**, **Active**, or **Detached**.
- **VPC Network**: The VPC network the share is attached to.
- **Mount Point**: The IP address and path of the share. Use this to [mount the share on a Droplet](https://docs.digitalocean.com/products/nfs/how-to/mount/).
- **Created**: The timestamp of when the share was created.
- **…**: The “more” menu provides **Mounting Instructions**, and actions to [**Resize**](https://docs.digitalocean.com/products/nfs/how-to/resize/), **Detach** or **Attach**, and [**Delete**](https://docs.digitalocean.com/products/nfs/how-to/delete/).

To use the share, you need to mount it on a Droplet or Kubernetes cluster. You can view mounting instructions from the **…** menu next to the share. Click the **…** menu, then click **Mounting Instructions** to open a window with a mounting guide that has step-by-step instructions, preconfigured with the share’s address, for connecting your share to a Droplet or Kubernetes cluster.

For further information read [How to Mount a Network File Storage Share](https://docs.digitalocean.com/products/nfs/how-to/mount/).

In this article...

- [Create a Share Using Automation](https://docs.digitalocean.com/products/nfs/how-to/create/#create-a-share-using-automation)
- [Create a Share Using the Control Panel](https://docs.digitalocean.com/products/nfs/how-to/create/#create-a-share-using-the-control-panel)

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