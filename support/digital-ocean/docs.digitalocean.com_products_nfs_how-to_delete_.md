---
url: "https://docs.digitalocean.com/products/nfs/how-to/delete/"
title: "How to Delete a Network File Storage Share | DigitalOcean Documentation"
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
- Delete Share

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Delete a Network File Storage Share

Validated on 13 Oct 2025 • Last edited on 20 Oct 2025

Network File Storage is a fully managed, POSIX-compliant file storage solution built for demanding workloads like AI/ML pipelines, containerized applications, and DigitalOcean Kubernetes (DOKS) clusters. It provides scalable, high-throughput shared storage that simplifies storage management for distributed applications.

Deleting a share permanently destroys all data in it. Recovery is not possible. Back up critical data before deleting your NFS share.

## How to Delete a Share Using Automation

How to Delete a Share Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a DELETE request to [`https://api.digitalocean.com/v2/nfs/{nfs_id}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/nfs_delete).

### cURL

Using cURL:

```shell
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/nfs/{share_id}?region=atl1"
```

## How to Delete a Share Using the Control Panel

To delete a share from the [control panel](https://cloud.digitalocean.com/), click **Network File Storage** in the main menu.

On the **Network File Storage** page, find the share you want to delete in the list, then click its **…** menu, then click **Delete**.

In the confirmation window that pops up, enter the name of the share, then click **Delete** to permanently delete the share and all of its data. Deletion is irreversible and recovery is not possible. Back up critical data before deleting your NFS share.

In this article...

- [How to Delete a Share Using Automation](https://docs.digitalocean.com/products/nfs/how-to/delete/#how-to-delete-a-share-using-automation)
- [How to Delete a Share Using the Control Panel](https://docs.digitalocean.com/products/nfs/how-to/delete/#how-to-delete-a-share-using-the-control-panel)

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