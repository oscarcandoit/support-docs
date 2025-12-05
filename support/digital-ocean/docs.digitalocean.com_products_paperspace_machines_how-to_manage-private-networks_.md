---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/"
title: "How to Create, Delete, or Migrate a Machine to a Private Network | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/machines.4f455a935c3878c20e9d35654c24e34c18f052727b612061b52fbe7c0467d808.svg)Machines](https://docs.digitalocean.com/products/paperspace/machines/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/machines/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/)
    - [Use ML-in-a-Box](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/machines/how-to/)
    - [Create Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/)
    - [Connect to Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/)
    - [Deactivate Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/deactivate/)
    - [Manage Users](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/)
    - [Resize Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/)
    - [Transfer Files](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/)
    - [Use Windows Features](https://docs.digitalocean.com/products/paperspace/machines/how-to/use-windows-features/)
    - [Configure Auto-shutdown](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-auto-shutdown/)
    - [Manage Private Networks](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/)
    - [Manage Public IP Addresses](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/)
    - [Manage Shared Drives](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/)
    - [Manage Snapshots](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/)
    - [Manage Custom Templates](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/)
    - [Manage VPNs](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/)
    - [Configure Desktop Streaming](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-desktop-streaming/)
    - [Manage NVLink](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/)
    - [Manage Hostnames](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/machines/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Core API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/core/)
    - [States and Error Codes](https://docs.digitalocean.com/products/paperspace/machines/reference/states-and-error-codes/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/machines/concepts/)
    - [Best Practices](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/)
    - [Glossary](https://docs.digitalocean.com/glossary/machines/)
  - [Details](https://docs.digitalocean.com/products/paperspace/machines/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/machines/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/machines/details/availability/)
    - [NVIDIA H100 Reference](https://docs.digitalocean.com/products/paperspace/machines/details/h100/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/machines/details/limits/)
    - [Machine Types](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/)
  - [Support](https://docs.digitalocean.com/products/paperspace/machines/support/)

- [Machines](https://docs.digitalocean.com/products/paperspace/machines/)
- [How-Tos](https://docs.digitalocean.com/products/paperspace/machines/how-to/)
- Manage Private Networks

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create, Delete, or Migrate a Machine to a Private Network

Validated on 7 Aug 2024 • Last edited on 17 Apr 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

A private network is a dedicated network that’s logically isolated from other networks on Paperspace. Within this network, machines and [shared drives](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/) communicate privately and securely with each other.

Private networks are required for certain features, such as a [virtual private network (VPN)](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/). Each private network you create is assigned a `/24` subnet belonging to the [RFC 1918 private IP address space](https://datatracker.ietf.org/doc/html/rfc1918). If you need to change your private network to a specific `/24` subnet, you should [submit a support ticket to Paperspace support](https://cloudsupport.digitalocean.com/) with the specific `/24` subnet you want to use. The `24` subnet you want to use must adhere to the [RFC 1918 private IP address space](https://datatracker.ietf.org/doc/html/rfc1918).

After you create and assign your machine to a private network, you cannot remove the machine from the private network. You can only [migrate your machine to a different private network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#assign-or-migrate-a-private-network-in-the-paperspace-console-migrate).

When creating your private network, you need to choose the same [datacenter region](https://docs.digitalocean.com/products/paperspace/machines/details/availability/) as the machines you want to add to the network. This is because private networks are region-specific and can only have machines that share the same region.

## Create a Private Network

### Using the Paperspace Console

To create a private network, go to the [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, click the **Networks** tab, then click **CREATE NETWORK** to open the **Create Private Network** window.

In the **Create Private Network** window, under the **Name** section, choose a name for your private network.

Under the **Region** section, click the drop-down menu, then select the [region](https://docs.digitalocean.com/products/paperspace/machines/details/availability/) you are creating your private network in. You should choose a region closest to you and your users as well as the same region as the machines you want added to the network.

Afterwards, click **CREATE**.

![The Create Private Network window of the Core dashboard's Networks page.](https://docs.digitalocean.com/screenshots/paperspace/machines/networks-create-private-network.8a7dead9479a5fc68cee0d1aedf75a3bd3733d346cfd14b104b2ca0764f2d99f.png)

### Using the Paperspace API

When creating a private network using the Paperspace API, you need to provide the following values:

- `name` (string): The name of your private network.
- `region` (string): The [datacenter region](https://docs.digitalocean.com/products/paperspace/machines/details/availability/) your private network belongs to.

How to Create a Private Network Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a POST request to `https://api.paperspace.com/v1/private-networks`. Basic usage looks like this, but you can [read the usage docs for more details](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/privateNetworks-create):


```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "name": "your-private-network-name",
        "region": "NY2"
      }' \
  "https://api.paperspace.com/v1/private-networks"
```

### Using the Paperspace CLI

When creating a private network using the Paperspace CLI, you need to provide the following values:

- `name` (string): The name of your private network.
- `region` (string): The [datacenter region](https://docs.digitalocean.com/products/paperspace/machines/details/availability/) your private network belongs to.

How to Create a Private Network Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace private-network create -F [flags]`. Basic usage looks like this, but you can [read the usage docs for more details](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#pspace-private-network-create):

```bash
pspace private-network create -F --name your-private-network-name --region NY2
```

## Delete a Private Network

You cannot delete a private network if there are machines still attached to it, so first, [migrate all machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#assign-or-migrate-a-private-network-in-the-paperspace-console-migrate) attached to the private network you want to delete to a different private network.

You cannot migrate machines from an existing private network to a different private network using the Paperspace API or CLI. You need to either [migrate the machines using the Paperspace console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#assign-or-migrate-a-private-network-in-the-paperspace-console-migrate) or [deactivate all machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/deactivate/) attached to your private network.

### Using the Paperspace Console

To delete a private network, go to the [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, then click the **Networks** tab.

In the **Networks** page, find the private network you want to delete. In the top-right corner of that private network, click **…**, then click **Delete** to open the **Delete Network** window, prompting if you want to delete the private network you selected. If you want to delete the network, click **DELETE**.

### Using the Paperspace API

When deleting a private network using the Paperspace API, you need to provide the following values:

- `id` (string): The ID of the private network you want to delete.

How to Delete a Private Network Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a DELETE request to `https://api.paperspace.com/v1/private-networks/{private-network-id}`.


```bash
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "id": "nwhoe4ox"
      }' \
  "https://api.paperspace.com/v1/private-networks/nwhoe4ox"
```

### Using the Paperspace CLI

When deleting a private network using the Paperspace CLI, you need to provide the following values:

- `id` (string): The ID of the private network you want to delete.

How to Delete a Private Network Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace private-network delete <private-network-id>`.

```bash
pspace private-network delete nwhoe4ox
```

## Assign or Migrate a Machine to a Private Network

You cannot migrate machines from an existing private network to a different private network using the Paperspace API or CLI. You can only [migrate machines using the Paperspace console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#migrate).

To assign or migrate a machine to a private network, go to your [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, then click the **Machines** tab. In the **Machines** section, find and select the machine you want to add a private network to.

On the machine’s overview page, in the top-right corner, click the **Settings** tab. In the **Settings** page, under the **Private network** sub-section, click the toggle to enable your machine to use a private network.

In the **Private network** sub-section, click the drop-down menu, select the private network you want to add your machine to, then click **ATTACH**. If you have not created any other private networks on your Paperspace account, [create another private network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#create) you can use to migrate your machines to.

![The Private Network section of the machine's Settings page with the option enabled and a network selected.](https://docs.digitalocean.com/screenshots/paperspace/machines/settings-private-network-section.d66d9cbe90e503acbd11705beaf451144eecd67e9ab86b18d17f5b5191e02b6a.png)

In this article...

- [Create a Private Network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#create)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#using-the-paperspace-console)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#using-the-paperspace-api)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#using-the-paperspace-cli)
- [Delete a Private Network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#delete-a-private-network)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#using-the-paperspace-console-1)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#using-the-paperspace-api-1)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#using-the-paperspace-cli-1)
- [Assign or Migrate a Machine to a Private Network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#migrate)

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