---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/create/"
title: "How to Create a Machine | DigitalOcean Documentation"
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
- Create Machines

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create a Machine

Validated on 7 Aug 2024 • Last edited on 17 Jun 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

You can create a Linux machine using the [Paperspace console](https://console.paperspace.com/), [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/), or [Paperspace CLI](https://docs.digitalocean.com/reference/paperspace/pspace/).

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

## Create a Machine in the Paperspace Console

When you create a new machine, you choose your machine type, operating system or custom template, disk size, region, authentication, starting state, and which features (like backups, public IP address, or private network) to enable or add.

Creating a machine using an individual account automatically assigns that account as the owner of the machine. If you are a team administrator, you must [specify the users](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#add-accessors) that need access to the machine.

To access the [Paperspace console](https://console.paperspace.com/) and create a machine, you need to either [login](https://console.paperspace.com/login) or [create](https://console.paperspace.com/signup) a Paperspace account.

Afterwards, in the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click the **Machines** tab, then click **CREATE A MACHINE** to open the **Create a new machine** page.

![The Machines page of the Core dashboard.](https://docs.digitalocean.com/screenshots/paperspace/machines/machines-tab.28df0b8c97f5436b538c1ce63a84884c93388382cff0ffaff91dec1dfd89aeca.png)

### Choose a Machine Type

In the **Machine** section, click the drop-down menu to select the [machine type](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/) you want to use. There are several machine types grouped by CPU, GPU, and multi-GPU. If you choose any high-end machines, such as NVIDIA H100, you need to request for approval to use them. After writing your request, click **REQUEST MACHINE TYPE**.

Each machine type option displays its hourly based price and the amount of CPU and RAM the machine offers. For GPUs, the type of graphics card is also shown. You should choose your machine type based on your needs, like the amount of computational intensity involved in your work.

After specifying your machine type, you can configure your machine’s operating system template, disk size, and machine name.

![The Machine section of the machine creation page.](https://docs.digitalocean.com/screenshots/paperspace/machines/create-a-machine-machine-section.9a5360689cd28e1a26703b7f1bf77f5b10b4f86bcf8ab868a60d3ce13f82432e.png)

### Choose an Operating System Template

In the **Machine** section, under the **operating system Template** sub-section, click the drop-down menu to select the [operating system template](https://docs.digitalocean.com/products/paperspace/machines/details/features/#os-templates) you want to use. operating system templates are server images maintained by Paperspace.

A recommended operating system template is already selected, but for the best performance, choose the operating system template that suits your needs. There are two types of operating system templates grouped by Linux and Windows-based types. Linux-based operating system templates are basic Unix-like images without any additional software, whereas Windows-based operating system templates are basic versions of the Windows operating system without any additional software.

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

If you create or use a Linux-based operating system template, you must use SSH keys to access your machine as they’re more secure compared to passwords. If you do not have a SSH key, you can [create and add one](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/) to your machine.

If none of the templates offered by Paperspace align to your needs, you can [use a custom template](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/). However, you need to create at least one machine before you can create and use a custom template. This is because custom templates are full disk images of one of your previously created machines.

If you want to use a NVIDIA H100 GPU, we recommend implementing [ML-in-a-Box](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/), which is a generic data science stack template. When using the ML-in-a-Box template, you do not need to disable NVLink for NVIDIA H100x1.

NVIDIA H100s do not work with all libraries and versions. NVIDIA H100 machines use CUDA driver 12.2 and CUDA runtime 12.1. Changing your CUDA version or adding/removing libraries that differ from the ML-in-a-Box template could cause your NVIDIA H100 machines to malfunction.

To see the current versions and libraries compatible with ML-in-a-Box, see the [ML-in-a-Box template’s included software](https://github.com/Paperspace/ml-in-a-box/tree/main/ubuntu-22#software-included).

### Choose a Disk Size

In the **Machine** section, under the **Disk size** sub-section, click the drop-down menu to select the [disk size](https://docs.digitalocean.com/products/paperspace/machines/details/features/#storage-types), which is the size of your machine’s storage. Each option displays the disk size in GB or TB along with its hourly based price.

### Choose a Machine Name

In the **Machine** section, under the **Machine name** sub-section, provide a unique name for your machine or use the provided auto-generated name.

After configuring your machine, in the **Networking** section, you can configure your machine’s networking setup, which consists of choosing a region, assigning a public IP address for your machine, and optionally, adding a private network.

![The Network section of the machine creation page.](https://docs.digitalocean.com/screenshots/paperspace/machines/create-a-machine-network-section.c73429eb63a2ba518bb6186f1cdaa9250a760a69a0cf1ea9d5ac94fc1a6dfe18.png)

### Choose a Region

In the **Networking** section, under the **Region** sub-section, select the [region](https://docs.digitalocean.com/products/paperspace/machines/details/availability/) where you want to create your machine. A recommended default is selected, but for the best performance and minimal latency, choose the datacenter nearest to you and your users.

### Add a Public IP Address

In the **Networking** section, under the **Public IP** sub-section, select the [type of public IP address](https://docs.digitalocean.com/products/paperspace/machines/details/features/#ip-addresses) you want to use for your machine, which is either dynamic or static.

The default choice is to use a dynamic public IP address, which is an IP address assigned only when your machine is turned on. It is deleted when you turn your machine off. You are not charged for dynamic public IP addresses when your machine is off.

Static public IP addresses are stored in your Paperspace account. You are required to delete this public IP address through the [Paperspace console](https://console.paperspace.com/) when you no longer need it.

A public IP address ensures your machine is reachable over the internet.

You can also choose to add no public IP address by selecting **None**. However, this is unavailable for terminal/SSH-only machine types, as a public IP address is required to connect to these machines.

### Add a Private Network

Optionally, in the **Networking** section, under the **Private network** sub-section, either click the **Private network** drop-down menu to select an existing private network, or click the **ADD PRIVATE NETWORK** button to open the **Create Private Network** window, attaches your machine to a [private network](https://docs.digitalocean.com/products/paperspace/machines/details/features/#networking). This is an ideal choice if you want to restrict access to your machine to only other machines within the same network.

A private network is required to enable [multi-node training](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#multi-node), a method that distributes workloads across multiple machines. If multiple machines need to access the same file system, managing a [shared drive](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/) is necessary.

Once a machine is on a private network, you can’t remove it from the private network. Alternatively, you can migrate the machine to a different private network. By default, there is no private network associated with your machine.

If you’re creating a new private network, on the **Create Private Network** window, specify the name of the private network you want to use. This private network is created in the same region as your machine.

![The Private network sub-section's Create Private Network window of the machine creation page.](https://docs.digitalocean.com/screenshots/paperspace/machines/create-private-network.8dc0e685341a988f490b182b88f5421434fcfe0e4a72652a24936ec0f4cea6f1.png)

After specifying the name of the private network, click **ADD PRIVATE NETWORK**.

### Set Up an SSH Key

In the **Authentication and Access** section, add an [SSH key](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/) to authenticate users who want to use your machine. You need a name for the key and its public key. If you don’t have an SSH key, [create one](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/), then add it to your machine.

Any existing SSH keys on your account are automatically connected to your machine.

![The Authentication and Access section of the machine creation page with SSH setup.](https://docs.digitalocean.com/screenshots/paperspace/machines/create-a-machine-auth-section.9803e0904d350013562ed9668fa20876955b79888f98f28b5dad6af58828f112.png)

### Set Up Snapshots

In the **Snapshots** section, click the **Snapshot frequency** drop-down menu to select how often automatic snapshots are taken of your machine, then click the **Snapshots to store** drop-down menu to specify the maximum number of snapshots stored.

These snapshots are used as backups of your machine. By default, the snapshot frequency is set to “Never” with “0” snapshots stored.

The frequency of -autosnapshot options range from “Never”, “Hourly”, “Daily”, “Weekly”, and “Monthly”.

If you reach the maximum number of snapshots stored, the older snapshots are deleted and replaced by your new snapshots.

![The Snapshots section of the machine creation page.](https://docs.digitalocean.com/screenshots/paperspace/machines/create-a-machine-snapshots-section.14c1500c43786ea502a2f7b0fa2fe1e317ca28cfb9dc6eef43ca51e6d96335fb.png)

### Set Starting State

In the **Starting State** section, use the **Start immediately** toggle to specify whether your machine turns on or off immediately after creation. By default, the machine starts immediately after the machine is created. To learn more about machine states, see the [Machine States and Error Codes reference](https://docs.digitalocean.com/products/paperspace/machines/reference/states-and-error-codes/).

### Review Price Summary

In the **Price summary** section, review your machine’s total costs. The price summary shows the machine’s hourly price based on the machine type, disk size, and other configurations you’ve chosen.

The price summary also displays the hourly prices for when the machine is running and for the lifetime of your machine, which are costs incurred until you deactivate your machine. When you machine is turned on, the hourly price is based on the machine type and the public IP address. For your machine’s lifetime, the hourly price is based on the disk size.

![The Price Summary section of the machine creation page.](https://docs.digitalocean.com/screenshots/paperspace/machines/create-a-machine-price-section.de0969e9e183a5b9eef9d3272d8e81d3c58236fc183ac0686046899192e22592.png)

After reviewing your machine’s configurations and its price summary, click **CREATE MACHINE**. After creating your machine, you can use various commands to verify GPU status, such as checking if they are accessible within the environment or if [NVLink](https://www.nvidia.com/en-us/data-center/nvlink/), a feature designed to interconnect multiple GPUs at high speed, is activated.

- `nvidia-smi`: Verifies if GPUs are detected.
- `nvidia-smi topo -m`: Checks if NVLink is enabled. If available, it provides output indicating the status for the connected GPUs.

### Add Users

After you’ve created your machine, you can [add users from your Paperspace team to access your new machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/).

For team members given access to your machine, existing SSH keys on their Paperspace accounts are automatically added to the machine.

### Set Up Auto-shutdown

After you’ve created your machine, you can [set up auto-shutown for your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-auto-shutdown/).

![The Auto-shutdown section of the machine's Settings page.](https://docs.digitalocean.com/screenshots/paperspace/machines/settings-auto-shutdown-section.da4c2ef9fd2e083686e3e7cafd3e80c522881b852d705715abed3024b6b311f2.png)

## Create a Machine Using the Paperspace API

When creating a machine using the Paperspace API, you need to provide the following values:

- `name` (string): The name of the machine.
- `machineType` (string): The [hardware your machine](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/) is built on. This must correspond to a machine type label, indicated in [List operating system templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#tag/OS-Templates) or [List templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/customTemplates-list).
- `templateId` (string): The template ID of the [operating system template](https://docs.digitalocean.com/products/paperspace/machines/details/features/#os-templates) or [custom template](https://docs.digitalocean.com/products/paperspace/machines/details/features/#custom-templates) your machine uses. See [List operating system templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#tag/OS-Templates) or [List templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/customTemplates-list).
- `diskSize` (number): The [disk size](https://docs.digitalocean.com/products/paperspace/machines/details/features/#block-storage) of your machine in GB.
- `region` (string): The [datacenter region](https://docs.digitalocean.com/products/paperspace/machines/details/availability/) the machine belongs to.

How to Create a Machine Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a POST request to `https://api.paperspace.com/v1/machines`. Basic usage looks like this, but you can [read the usage docs for more details](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/machines-create):


```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "name": "your-machine-name",
        "machineType": "a100-80g",
        "templateId": "tx98gvxz",
        "diskSize": 50,
        "region": "NY2"
      }' \
  "https://api.paperspace.com/v1/machines"
```

## Create a Machine Using the Paperspace CLI

When creating a machine using the Paperspace CLI, you need to provide the following values:

- `name` (string): The name of the machine.
- `machine-type` (string): The [hardware your machine](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/) is built on. This must correspond to a machine type label, indicated in [List operating system templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#tag/OS-Templates) or [List templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/customTemplates-list).
- `template-id` (string): The template ID of the [operating system template](https://docs.digitalocean.com/products/paperspace/machines/details/features/#os-templates) or [custom template](https://docs.digitalocean.com/products/paperspace/machines/details/features/#custom-templates) your machine uses. See [List operating system templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#tag/OS-Templates) or [List templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/customTemplates-list).
- `disk-size` (number): The [disk size](https://docs.digitalocean.com/products/paperspace/machines/details/features/#block-storage) of your machine in GB.
- `region` (string): The [datacenter region](https://docs.digitalocean.com/products/paperspace/machines/details/availability/) the machine belongs to.

How to Create a Machine Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace machine create -F [flags]`. Basic usage looks like this, but you can [read the usage docs for more details](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#pspace-machine-create):

```bash
pspace machine create -F --name your-machine-name --machine-type a100-80g --template-id tx98gvxz --region NY2 --disk-size 50
```

In this article...

- [Create a Machine in the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#create-a-machine-in-the-paperspace-console)
  - [Choose a Machine Type](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#choose-a-machine-type)
  - [Choose an Operating System Template](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#template)
  - [Choose a Disk Size](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#choose-a-disk-size)
  - [Choose a Machine Name](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#choose-a-machine-name)
  - [Choose a Region](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#choose-a-region)
  - [Add a Public IP Address](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#add-a-public-ip-address)
  - [Add a Private Network](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#add-a-private-network)
  - [Set Up an SSH Key](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#ssh)
  - [Set Up Snapshots](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#set-up-snapshots)
  - [Set Starting State](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#set-starting-state)
  - [Review Price Summary](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#review-price-summary)
  - [Add Users](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#add-users)
  - [Set Up Auto-shutdown](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#set-up-auto-shutdown)
- [Create a Machine Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#api)
- [Create a Machine Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/#create-a-machine-using-the-paperspace-cli)

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