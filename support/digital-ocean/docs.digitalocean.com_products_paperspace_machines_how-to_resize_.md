---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/"
title: "How to Resize a Machine | DigitalOcean Documentation"
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
- Resize Machines

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Resize a Machine

Validated on 7 Aug 2024 • Last edited on 17 Apr 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

You can resize your machine’s machine type and disk size depending on your needs. Resizing your machine incurs a prorated charge based on when you resized your machine. You can resize a machine using the [Paperspace console](https://console.paperspace.com/), [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/), or [Paperspace CLI](https://docs.digitalocean.com/reference/paperspace/pspace/).

There are two ways you can resize your machines:

- **Change Machine Type**. This option increases or decreases the amount of CPU or GPU on your machine. Increasing the amount of CPU or GPU on your machine improves your machine’s performance.

- **Increase Disk Size**. This option permanently increases the size of your machine’s disk. Increasing the size of your machine’s disk increases the amount of data you can store.


You can resize one or both of these options based on what you need.

## Considerations Before Resizing

- **The full disk size isn’t equal to the amount of storage available in your machine**.

The amount of storage available in your machine is the disk size minus the overhead of the machine. For example, the [ML-in-a-Box](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/) template uses 28 GB of storage, which leaves 66 GB of available storage.

To see an overview of the current storage usage on your machine, run a `df -h` command. The `/dev/mapper/ubuntu--vg-root` line shows you the size of your disk, the amount of disk used, and the amount of disk available.



```text
Filesystem                   Size  Used Avail Use% Mounted on
tmpfs                         25G  1.5M   25G   1% /run
/dev/mapper/ubuntu--vg-root   97G   28G   65G  31% /
...
```

- **You may have ran out of disk space due to cached data**.

Examples of cached data are Docker images or previous model versions you’ve trained. You can delete your cached data by going through your machine’s drive.

- **You can only update a machine type within the same machine type group**.

For example, if you’re using a CPU machine, then you can only resize your machine amongst the CPU machine types. Similarly, for GPU machines, if you’re using an A100 machine, for example, you can only resize the machine type amongst the other AX00 machine types. If you need a different machine type entirely, [create a new machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/).

- **We strongly recommend [taking a snapshot](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#manual) of the machine before resizing**.

[Snapshots](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/) are reliable backups of your machine. If your machine malfunctions, disconnects from Paperspace, or experiences issues like data corruption or system failures during resizing, you can use a snapshot to restore your machine to a working state with your data still intact.

- **You cannot decrease the size of a machine’s disk.**

You can only increase your disk size since decreasing may cause your machine to lose or corrupt your data. When you increase your disk size, this permanently expands your storage and is irreversible.


## Resize a Machine

### Using the Paperspace Console

Before resizing your machine, you need to [turn off your machine](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/#shutdown-or-restart-machines).

Afterwards, go to the [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, then click the **Machines** tab. In the **Machines** section, find and select the machine you want to resize.

On the machine’s overview page, in the top-right corner, click the **Settings** tab. In the **Settings** page, there are two sections that resize your machine: **Machine** section and **Disk size** section.

![The Machine section and Disk size section of the machine's Settings page.](https://docs.digitalocean.com/screenshots/paperspace/machines/settings-resize-options.4e63a89e4a57134d3bbdb16a14b7148e32a5bbded3e63679ec83588cdaccc57e.png)

To change your [machine type](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/), in the **Machine** section, click the drop-down menu, select the new machine type you want to use, then click **CHANGE TYPE**.

In your machine’s overview page, click the **Details** tab, in the right side, you should see your machine’s updated machine type.

To increase your [storage](https://docs.digitalocean.com/products/paperspace/machines/details/features/#block-storage), in the **Disk size** section, click the drop-down menu, select the new disk size you want to use, then click **CHANGE SIZE**.

In your machine’s overview page, click the **Details** tab, in the right side, you should see your machine’s updated disk size.

### Using the Paperspace API

Before resizing your machine, you need to [turn off your machine](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/machines-stop).

How to Resize a Machine Using the Paperspace API

When resizing a machine using the Paperspace API, you need to provide the following values:

- `id` (string): The ID of the machine you want to resize.
- `machineType` (string): The new [hardware your machine](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/) is built on. This must correspond to a machine type label, indicated in [List OS templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#tag/OS-Templates) or [List templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/customTemplates-list).
- `diskSize` (number): The new [disk size](https://docs.digitalocean.com/products/paperspace/machines/details/features/#block-storage) of your machine in GB.

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a PUT request to `https://api.paperspace.com/v1/machines/{machine-id}`.


```bash
curl -X PUT \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "id": "psm9u09bwu5i",
        "machineType": "a100-80g",
        "diskSize": 50
      }' \
  "https://api.paperspace.com/v1/machines/psm9u09bwu5i"
```

After the resize is complete, [turn on your machine](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/machines-start).

### Using the Paperspace CLI

Before resizing your machine, you need to [turn off your machine](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#pspace-machine-stop).

How to Resize a Machine Using the Paperspace CLI

When resizing a machine using the Paperspace API, you need to provide the following values:

- `machine-type` (string): The new [hardware your machine](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/) is built on. This must correspond to a machine type label, indicated in [List OS templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#tag/OS-Templates) or [List templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/customTemplates-list).
- `disk-size` (number): The new [disk size](https://docs.digitalocean.com/products/paperspace/machines/details/features/#block-storage) of your machine in GB.

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace machine update <machine-id> -F [flags]`.

```bash
pspace machine update psm9u09bwu5i -F --machine-type a100-80g --disk-size 50
```

After the resize is complete, [turn on your machine](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#pspace-machine-start).

## Verifying If Machine Resized

You can verify if your machine is resized properly either by viewing the Paperspace console under the machine’s **Details** page, or by fetching the machine’s specifications via [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/machines-get) or [Paperspace CLI](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#pspace-machine-get).

![The Details page of the machine overview page.](https://docs.digitalocean.com/screenshots/paperspace/machines/machine-overview-page.d9071be33b0f83c2e2a17f8a771b51e9a8fd95e091602c76b7a3c83d5b9ce09b.png)

In this article...

- [Considerations Before Resizing](https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/#considerations-before-resizing)
- [Resize a Machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/#resize-a-machine)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/#using-the-paperspace-console)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/#using-the-paperspace-api)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/#using-the-paperspace-cli)
- [Verifying If Machine Resized](https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/#verifying-if-machine-resized)

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