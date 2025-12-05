---
url: "https://docs.digitalocean.com/products/nfs/how-to/create-snapshot/"
title: "How to Snapshot a Network File Storage Share | DigitalOcean Documentation"
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
- Create Snapshot

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Snapshot a Network File Storage Share

Validated on 13 Oct 2025 • Last edited on 20 Oct 2025

Network File Storage is a fully managed, POSIX-compliant file storage solution built for demanding workloads like AI/ML pipelines, containerized applications, and DigitalOcean Kubernetes (DOKS) clusters. It provides scalable, high-throughput shared storage that simplifies storage management for distributed applications.

Snapshots for Network File Storage are currently available through the API only. Snapshots let you create a point-in-time backup of your share’s data. Snapshot data is available in a special hidden `.snapshot` directory at the root of the share itself.

Snapshots are billed based on their size. Each snapshot’s size is equal to the amount of storage used by the share at the time of creation. Read [Network File Storage Pricing](https://docs.digitalocean.com/products/nfs/details/pricing/) for details.

## Snapshot a Share Using the API

To take a snapshot of a Network File Storage share via the API, use the NFS actions endpoint and set the action `type` to `snapshot`:

```shell
curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
    -d '{"type": "snapshot", "region": "atl1", "params": {"name": "<snapshot_name>"}}' \
    "https://api.digitalocean.com/v2/nfs/<your_share_id>/actions"
```

Replace `<your_share_id>` with the ID of your share, and `<snapshot_name>` with the desired name for the snapshot. The snapshot name must be twenty characters or less.

How to Snapshot a Network File Storage Share Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/nfs/{nfs_id}/actions`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/nfs_create_action).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type": "resize", "params": {"size_gib": 1024}, "region": "atl1"}' \
  "https://api.digitalocean.com/v2/nfs/${nfs_id}/actions"
```

To list and delete snapshots via the API, read [the NFS section of the DigitalOcean API reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/NFS).

## Access Snapshots

Snapshots are stored in a special hidden, read-only `.snapshot` directory at the root of the share. Each snapshot is a separate subdirectory of `.snapshot`, named with the snapshot name followed by the snapshot ID.

Note
You can not find the `.snapshot` directory using `ls` on your mount point, even if you use the `-a` option to show hidden files. The NFS server takes extra steps to hide `.snapshot` from `ls`, `du`, and other commands.

To list out the contents of your snapshot directory, use the following command:

```shell
ls -l /mnt/example-nfs-share/.snapshot
```

Replace `/mnt/example-nfs-share/` with your mount point.

In this article...

- [Snapshot a Share Using the API](https://docs.digitalocean.com/products/nfs/how-to/create-snapshot/#snapshot-a-share-using-the-api)
- [Access Snapshots](https://docs.digitalocean.com/products/nfs/how-to/create-snapshot/#access-snapshots)

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