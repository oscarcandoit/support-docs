---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/"
title: "How to Take, Revert to, or Delete a Snapshot | DigitalOcean Documentation"
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
- Manage Snapshots

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Take, Revert to, or Delete a Snapshot

Validated on 7 Aug 2024 • Last edited on 17 Apr 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

[Snapshots](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#use-snapshots-as-machine-backups) are disk images of a machine from a specific point in time. A snapshot serves as a backup for your machine, allowing you to revert to a previous version of your machine if unintended issues occur, like data corruption, system failures, or accidental disconnections from Paperspace. It allows you to restore your machine with minimal downtime.

There are two types of snapshots: [auto-snapshots](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#auto) and [manual snapshots](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#manual).

- **Auto-snapshots**: Scheduled snapshots that are automatically captured.
- **Manual snapshots**: User-initiated snapshots.

Unlike [templates](https://docs.digitalocean.com/products/paperspace/machines/details/features/#templates), snapshots are created without needing to turn off your machine. However, snapshots are deleted when the corresponding machine is deactivated.

## Take Auto-Snapshots in the Paperspace Console

You cannot use the Paperspace API or CLI to set up auto-snapshots. You can only configure auto-snapshots when you first [create your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/). If you want to set up auto-snapshots for existing machines, you need to set it up via the Paperspace console.

To take auto-snapshots of your machine, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click the **Machines** tab, then find and select the machine you want to configure auto-snapshots for.

In the machine’s overview page, in the top-right corner, click the **Snapshots** tab. In the **Snapshots** page, under the **Configure Auto-Snapshot** section, click the toggle to enable auto-snapshots.

![The Configure Auto-Snapshot section in the Snapshots page of the machine.](https://docs.digitalocean.com/screenshots/paperspace/machines/configure-auto-snapshot.57bf0ae763c594a88258f5752aabb2397d7843964e39ec9854dfcdf443c0fd45.png)

If you want to change the frequency and amount of snapshots taken, in the **Configure Auto-Snapshot** section, under the **Take a snapshot every** sub-section, click the drop-down menu, specify the frequency of your snapshots, which ranges from an “hour”, a “day”, a “week”, or a “month”. By default, the snapshot frequency is set to “day”.

Under the **Save the last** sub-section, click the drop-down menu, specify the maximum number of snapshots to store, which ranges from 0 to 10 snapshots. By default, the number of snapshots stored is set to 1.

Under the **Save the last** sub-section, click the drop-down menu, specify the maximum number of snapshots to store, which ranges from 0 to 10 snapshots. By default, the number of snapshots stored is set to 1.

The old auto-snapshots are replaced by the new ones once the maximum number of snapshots to store is reached.

You can find your auto-snapshots listed in the **Snapshots** page, under the **Snapshots** section, which displays the snapshot name, snapshot ID, and the time your snapshot was created.

## Take a Manual Snapshot

### Using the Paperspace Console

To take a manual snapshot of your machine, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click the **Machines** tab, then find and select the machine you want to take a snapshot of.

In the machine’s overview page, in the top-right corner, click the **Snapshots** tab. In the **Snapshots** page, under the **Create a Snapshot** section, under the **Snapshot Name** sub-section, specify the name of your snapshot. Then, click **CREATE SNAPSHOT**.

You can find your new snapshot list in the **Snapshots** page, under the **Snapshots** section, which displays the snapshot name, snapshot ID, and the time your snapshot was created.

![The Create a Snapshot section in the Snapshots page of the machine.](https://docs.digitalocean.com/screenshots/paperspace/machines/create-snapshot.fef5eb3d8ba0cc6b5c14662a02a77d42da03bd6460f92d22c9f09a46bf317859.png)

### Using the Paperspace API

When taking a snapshot using the Paperspace API, you need to provide the following values:

- `name` (string): The name of the snapshot.
- `machineId` (string): The ID of the machine you want to create a snapshot for.

How to Take a Snapshot Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a POST request to `https://api.paperspace.com/v1/snapshots`.


```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "name": "your-snapshot-name",
        "machineId": "psm9u09bwu5i"
      }' \
  "https://api.paperspace.com/v1/snapshots"
```

### Using the Paperspace CLI

When taking a snapshot using the Paperspace CLI, you need to provide the following values:

- `name` (string): The name of the snapshot.
- `machine-id` (string): The ID of the machine you want to create a snapshot for.

How to Take a Snapshot Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace snapshot create -F [flags]`.

```bash
pspace snapshot create -F --name your-snapshot-name --machine-id psm9u09bwu5i
```

## Revert to a Snapshot

### Using the Paperspace Console

To revert to a snapshot of your machine, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click the **Machines** tab, click the machine you want to revert to a snapshot for.

In the machine’s overview page, in the top-right corner, click the **Snapshots** tab. In the **Snapshots** page, under the **Snapshots** section, find the snapshot you want to revert to. In the top-right corner of that snapshot, click **…**, then click **Restore** to revert your machine to that snapshot.

### Using the Paperspace API

When reverting to a snapshot using the Paperspace API, you need to provide the ID of the snapshot to revert to.

How to Revert to a Snapshot Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a POST request to `https://api.paperspace.com/v1/snapshots/{snapshot-id}/restore`.


```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "id": "slqafgu4n6gxge"
      }' \
  "https://api.paperspace.com/v1/snapshots/slqafgu4n6gxge/restore"
```

### Using the Paperspace CLI

When reverting to a snapshot using the Paperspace CLI, you need to provide the ID of the snapshot to revert to.

How to Revert to a Snapshot Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace snapshot restore <snapshot-id>`. Basic usage looks like this, but you can [read the usage docs for more details](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/snapshots-restore):

```bash
pspace snapshot restore slqafgu4n6gxge
```

## Delete to a Snapshot

### Using the Paperspace Console

To delete a snapshot of your machine, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click the **Machines** tab, click the machine you want to delete a snapshot of.

In the machine’s overview page, in the top-right corner, click the **Snapshots** tab. In the **Snapshots** page, under the **Snapshots** section, find the snapshot you want to delete. In the top-right corner of that snapshot, click **…**, then click **Delete**.

### Using the Paperspace API

When deleting a snapshot using the Paperspace API, you need to provide the ID of the snapshot to delete.

How to Delete a Snapshot Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a DELETE request to `https://api.paperspace.com/v1/snapshots/{snapshot-id}`.


```bash
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "id": "slqafgu4n6gxge"
      }' \
  "https://api.paperspace.com/v1/snapshots/slqafgu4n6gxge"
```

### Using the Paperspace CLI

When deleting a snapshot using the Paperspace API, you need to provide the ID of the snapshot to delete.

How to Delete a Snapshot Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace snapshot delete <snapshot-id>`.

```bash
pspace snapshot delete slqafgu4n6gxge
```

In this article...

- [Take Auto-Snapshots in the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#auto)
- [Take a Manual Snapshot](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#manual)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#using-the-paperspace-console)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#using-the-paperspace-api)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#using-the-paperspace-cli)
- [Revert to a Snapshot](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#revert)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#using-the-paperspace-console-1)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#using-the-paperspace-api-1)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#using-the-paperspace-cli-1)
- [Delete to a Snapshot](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#delete)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#using-the-paperspace-console-2)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#using-the-paperspace-api-2)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#using-the-paperspace-cli-2)

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