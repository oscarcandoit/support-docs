---
url: "https://docs.digitalocean.com/products/paperspace/machines/details/features/"
title: "Machines Features | DigitalOcean Documentation"
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
- [Details](https://docs.digitalocean.com/products/paperspace/machines/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Machines Features

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

## Machine Types

All CPU and GPU machine types are available for Linux-based machines.

Free machines have limits that keep the capacity for free machines available:

- **Auto-shutdown**: The auto-shutdown limit for free machines is six hours.
- **Inactivity**: Notebooks that are inactive for one hour are automatically shut down.
- **Notebook Limit**: Only one notebook can use a free machine at a time.
- **Public**: On the Free Gradient Subscription Plan, free machines are always public. Upgrade to the Pro or Growth Gradient Subscription Plan if you want to set free machines to private.

## Networking

Paperspace offers several networking options:

- **Public IP address**: Assign a [public IP address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/).
- **Private network**: Create a [private network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#create).
- **Virtual Private Network (VPN)**: Set up a [VPN](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/).
- **Peering**: Available upon request.

### Public Networking

Paperspace machines are accessible over the internet with a [public IP address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/). Public IP addresses are assigned to `eth0` (Linux) or `Local Area Connection/Network` (Windows 8), or `Network [#]` (Windows 10). Machines connect via a 10 Gbps network, with public throughput capped at 2 Gbps in `NY2` and 900 Mbps in other regions (scalable to 10 Gbps).

Paperspace offers two types of public IP addresses:

- **Static IP address**: Remains on your Paperspace account until you delete it. You can reassign it to machines within the same datacenter region.
- **Dynamic IP address**: Deleted when the machine is off, with a new IP address assigned when you turn it on.

### Private Networking

[Private networks](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/) establish a dedicated, isolated network for secure communication between machines. Machines and [shared drives](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/) communicate securely within the private network. Active Directory (AD) integration is required for secure AD and Domain Controller (DC) communication.

Each private network is assigned a `/24` subnet from the available IP address space. The first usable IP address is assigned to a virtual bridge, and subsequent IP addresses to machines. Traffic flows through the network gateway and uses NAT for internet access (internal traffic remains private). Private traffic uses a 10 Gbps backend network, with free ingress and egress.

### Virtual Private Network

A [VPN](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/) enables secure, encrypted communication over the internet, allowing your machines to connect to a private network for remote data sharing. Site-to-site VPNs establish a two-way encrypted tunnel between your private network and another location. Paperspace supports IPSec VPN tunnels for secure and encrypted communication.

### Peering

Peering is offered for select users, allowing machines to connect directly to datacenters for reliable data transfers. Peering enables direct connections between two or more networks, improving data transmission efficiency and reducing latency. Contact the [Paperspace sales team](https://www.paperspace.com/contact-sales) for specific data transfer requirements.

## Storage Types

Paperspace offers a variety of block-level storage volumes and shared drives, which are region-specific and backed by SSDs. These storage options range in size from 50 GB to 2 TB.

### Block Storage

[Block storage volumes](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/) are block-level storage devices for Paperspace machines. They appear to the operating system as locally attached storage that you can partition and format.

This storage type is ideal for applications that rely on random reads and writes as well as long, continuous reads and writes. These volumes deliver low latencies with the ability to burst to 3,000 IOPS for extended periods of time. The throughput limit for volumes is 128 MiB/s.

Increasing your block storage expands your filesystem and is not reversible.

### Shared Drives

[Shared drives](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/) are concurrently available to machines within a private network. A common use case for shared drives is to share files and data between machines, similar to network-attached storage.

All file systems offer a consistent baseline performance of 50 MB/s per TB of storage. Regardless of the size, all file systems can burst up to 100 MB/s.

If you require more space on your shared drive, send a [request to Paperspace support](https://docs.digitalocean.com/products/paperspace/machines/support/) for storage up to 16 TB.

## Templates

Templates are base images you can use to create machines. Paperspace maintains several [operating system templates](https://docs.digitalocean.com/products/paperspace/machines/details/features/#os-templates) and, for additional customization and control, you can create your own [custom templates](https://docs.digitalocean.com/products/paperspace/machines/details/features/#custom-templates) from your existing machines.

### Operating System Templates

Paperspace’s operating system templates include a limited set of additional software for performing core functions like adding [SSH keys](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/) to your machine. It’s safe to remove these tools, but we recommend keeping them so they remain available for future use.

Ubuntu 22.04, Ubuntu 18.04, and CentOS 7 are server-only machines, which means they are only accessible from a terminal. Ubuntu 20.04 machines include a full desktop environment.

Windows 10 (Server 2022) and Windows 2012 R2 Datacenter Edition machines are licensed by Paperspace. Windows 10 (Pro) machines require you to bring your own license, so you are solely responsible for the compliance and management of your own license(s).

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

Paperspace maintains the following public operating system templates that have preinstalled third-party software:

- [ML-in-a-Box](https://github.com/Paperspace/ml-in-a-box) is a Linux-based machine template with a suite of machine learning software packages included. We offer Ubuntu 22.04 ML-in-a-Box (NVIDIA H100 and A100 machines only) and Ubuntu 20.04 ML-in-a-Box.
- [Fast.ai](https://www.fast.ai/) is a Linux-based machine template with the Fast.ai learning module included.

### Custom Templates

Custom templates are full disk images of existing machines. You can [create a custom template](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/) from one of your existing machines, then use that custom template to create additional machines.

Custom templates are region-specific, so you must create and use them in the same datacenter as the original machine.

## Desktop App

The desktop app allows you to connect to your Paperspace machines from your local Windows 10+, macOS X 10.13+, or Linux (beta) machines.

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

Updates to the desktop app happen automatically. Occasionally, you might experience a short delay when opening the app as it updates. Once the update is complete, the app should run normally. If it does not, contact [Paperspace support](https://docs.digitalocean.com/products/paperspace/machines/support/).

The desktop app additionally offers the drag-and-drop feature, which selects a file or folder on your local computer and copies it into your Paperspace machine by dragging and dropping it into your Paperspace machine. The desktop app also supports the [auto-shutdown](https://docs.digitalocean.com/products/paperspace/machines/details/features/#auto-shutdown) feature.

## Desktop Streaming

Desktop streaming is available either in your browser or through the desktop app with [advanced options](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-desktop-streaming/).

### Sync Clipboard

Desktop streaming offers a [copy-and-paste clipboard feature](https://docs.digitalocean.com/products/paperspace/machines/how-to/use-windows-features/#sync-feature), which allows you to copy and paste text between your local machine and your Paperspace machine.

## Auto-shutdown

Paperspace allows you to [set an auto-shutdown limit on your machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-auto-shutdown/). This prevents unnecessary account charges for long running processes or idling. The auto-shutdown limit is set between one hour and one week. You can remove the limit, but this mean you must carefully monitor your machine to avoid unintended large utilization charges.

In this article...

- [Machine Types](https://docs.digitalocean.com/products/paperspace/machines/details/features/#machine-types)
- [Networking](https://docs.digitalocean.com/products/paperspace/machines/details/features/#networking)
  - [Public Networking](https://docs.digitalocean.com/products/paperspace/machines/details/features/#public-networking)
  - [Private Networking](https://docs.digitalocean.com/products/paperspace/machines/details/features/#private-networking)
  - [Virtual Private Network](https://docs.digitalocean.com/products/paperspace/machines/details/features/#virtual-private-network)
  - [Peering](https://docs.digitalocean.com/products/paperspace/machines/details/features/#peering)
- [Storage Types](https://docs.digitalocean.com/products/paperspace/machines/details/features/#storage-types)
  - [Block Storage](https://docs.digitalocean.com/products/paperspace/machines/details/features/#block-storage)
  - [Shared Drives](https://docs.digitalocean.com/products/paperspace/machines/details/features/#shared-drives)
- [Templates](https://docs.digitalocean.com/products/paperspace/machines/details/features/#templates)
  - [Operating System Templates](https://docs.digitalocean.com/products/paperspace/machines/details/features/#os-templates)
  - [Custom Templates](https://docs.digitalocean.com/products/paperspace/machines/details/features/#custom-templates)
- [Desktop App](https://docs.digitalocean.com/products/paperspace/machines/details/features/#desktop-app)
- [Desktop Streaming](https://docs.digitalocean.com/products/paperspace/machines/details/features/#desktop-streaming)
  - [Sync Clipboard](https://docs.digitalocean.com/products/paperspace/machines/details/features/#sync-clipboard)
- [Auto-shutdown](https://docs.digitalocean.com/products/paperspace/machines/details/features/#auto-shutdown)

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