---
url: "https://docs.digitalocean.com/products/paperspace/machines/details/limits/"
title: "Machines Limits | DigitalOcean Documentation"
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
- Limits

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Machines Limits

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

## Limits

- Non-uniform memory access (NUMA), a memory accessing optimization, is not implemented on Paperspace machines. As a result, running `nvidia-smi topo -m` in your machine’s terminal outputs CPU affinities as `N/A`.

- If your machine sustains a data transfer rate of 1 Gbps or higher for more than 10 seconds, we rate limit it to 200 Mbps. You can submit an [increase request](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/#team-quota-service-limits) to remove this limit.

- The maximum auto-shutdown time for free machines is six hours. This ensures these machines are available for other users. For a longer auto-shutdown time, [upgrade to a paid machine](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/).

- You cannot change the operating system you initially chosen for your machine. If you need a different operating system, [create a new machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/).

- Some of the high performing [machine types](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/), such as [NVIDIA H100s](https://docs.digitalocean.com/products/paperspace/machines/details/h100/), require approval before you can use them. Machine requests typically take 1-2 business days to process. We may ask for additional information before approving.

- You can only grant team members access to your machine. To [grant access to a user](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/#add), you need to own a [team account](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/#create-a-team) and [invite that user](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/#invite-users) to your team.


### Paperspace API and CLI

- You cannot use the Paperspace API or CLI to connect to your machines. Instead, use the Paperspace console to [connect to your machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/).

- You cannot use the Paperspace API or CLI to assign a dynamic IP address to existing machines. Instead, use the Paperspace console to [assign a dynamic IP address to existing machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/).

- You can only assign static IP addresses to existing machines via the Paperspace API or CLI, as you first need to claim the IP address and add it to your Paperspace account. Instead, use the Paperspace console to [change the IP address type](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/) of an existing machine.

- You cannot use the Paperspace API or CLI to migrate machines to a different private network. Instead, use the Paperspace console to [migrate your machines to a different private network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#migrate).

- You cannot use the Paperspace API or CLI to set up auto-snapshots on existing machines. You can only set up auto-snapshots when you first [create your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/). Instead, use the Paperspace console to [set up auto-snapshots](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#auto) for existing machines.

- You cannot use the Paperspace CLI to grant or revoke access to a machine. Instead, use either the Paperspace console or the Paperspace API to [manage user access on your machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/).

- You cannot use the Paperspace API or CLI to mount a shared drive to your machine. Instead, use the Paperspace console to [mount a shared drive](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#access) to your machine.

- You cannot use the Paperspace API or CLI to create a Virtual Private Network (VPN). Instead, use the Paperspace console to [create a VPN](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/).

- You cannot use the Paperspace API or CLI to enable or disable the [auto-shutdown feature](https://docs.digitalocean.com/products/paperspace/machines/details/features/#auto-shutdown) on existing machines. Instead, use the Paperspace console to [enable or disable the auto-shutdown feature](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-auto-shutdown/).


### Windows-based Machines

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

- Windows-based machines have some software pre-installed. If you update, uninstall, or modify the following software, the machine may not function or stay connected to Paperspace:
  - Paperspace agent
  - Paperspace service
  - NVIDIA graphics driver
  - Razer surround audio driver
  - Various Citrix Xen/Xenserver programs and services
  - .NET Framework
- For Windows-based machines, you cannot rename, modify, or remove the `paperspace` user when desktop streaming because this user connects your machine to Paperspace and enables you to stream your desktop. You can [add another user with separate permissions](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/#assign), but you must remain logged in as the `paperspace` user. Without using the `paperspace` user, you must use RDP, Virtual Network Computing (VNC), or other streaming protocols that Windows-based machines support.


### Snapshots

- Snapshots delete when the corresponding machine deactivates. To keep a copy of your machine before deactivating it, you can create a [custom template](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/) of the machine.

### Private Networks

- You cannot remove a machine from a private network. Alternatively, you can [migrate the machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#migrate) to a different private network.

- Private networks are region-specific, so you cannot change its region after the private network is created.


### IP Addresses

- Paperspace machines do not support IPv6 addresses. Instead, use static IPv4 IP addresses.

- You cannot assign your own public IP address to a Paperspace machine.

- You can only assign Paperspace IP addresses to Paperspace machines, not to other Paperspace or non-Paperspace resources.

- You can only assign static IP addresses to one machine at a time.

- IP addresses are region-specific, so your machine and its IP address must belong to the same region.


### Storage

- The throughput limit for volumes is 128 MiB/s.

- Shared drives do not support [symbolic links](https://en.wikipedia.org/wiki/Symbolic_link), also known as symlinks.

- You cannot decrease the size of your machine’s disk, which means that storage increases are irreversible. Data is not always sequentially written in memory, so reducing the available space would risk data loss and filesystem corruption.


### Templates

- All [custom templates](https://docs.digitalocean.com/products/paperspace/machines/details/features/#custom-templates) are region-specific, so your template and the original machine must belong to the same region.

### Machine Types

- You can only change your [machine type](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/) within the same machine type group. For example, you can only change a CPU machine to another type of CPU machine, and you can only upgrade an A100 GPU machine to another AX00 machine type.

### Desktop App

- The drag-and-drop feature is only available for Windows-based machines.

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

- The drag and drop feature can only upload a file or folder from your local machine to your Paperspace machine. You cannot drag and drop a file or folder from your Paperspace machine to your local machine.

## Known Issues

- The Paperspace console and desktop app only detect active connections. If you use SSH, RDP, or other remote desktop clients to connect to your machine, the Paperspace console or desktop app do not register your machine as active. This may cause unexpected shutdowns due to inactivity. To prevent this, you can [disable the auto-shutdown feature in the Paperspace console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-auto-shutdown/).

- Changing the private IP address initially attached to your machine disconnects your machine from Paperspace. This is because your machine uses a shared gateway and network address translation (NAT) out to access Paperspace via a shared egress point.

- On Windows-based machines, modifying ethernet or network settings disconnects your machine from Paperspace and prevents you from restoring the connection.


Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

- On Linux-based machines, running `dist-upgrade` may cause your machine to malfunction or disconnect from Paperspace. This is because upgrading to a different major Linux version can change core components of your machine, like its dependencies and packages.

To change the operating system template your machine uses, [create a new machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/).

- Do not set your system clock to a future time, as this causes a system crash and unexpected shutdowns, if auto-shutdown is enabled.

- Removing a user from a machine does not remove the user’s SSH keys from the machine. You need to [manually remove the user’s SSH keys from the machine](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/#deleting-ssh-keys).


In this article...

- [Limits](https://docs.digitalocean.com/products/paperspace/machines/details/limits/#limits)
  - [Paperspace API and CLI](https://docs.digitalocean.com/products/paperspace/machines/details/limits/#paperspace-api-and-cli)
  - [Windows-based Machines](https://docs.digitalocean.com/products/paperspace/machines/details/limits/#windows-based-machines)
  - [Snapshots](https://docs.digitalocean.com/products/paperspace/machines/details/limits/#snapshots)
  - [Private Networks](https://docs.digitalocean.com/products/paperspace/machines/details/limits/#private-networks)
  - [IP Addresses](https://docs.digitalocean.com/products/paperspace/machines/details/limits/#ip-addresses)
  - [Storage](https://docs.digitalocean.com/products/paperspace/machines/details/limits/#storage)
  - [Templates](https://docs.digitalocean.com/products/paperspace/machines/details/limits/#templates)
  - [Machine Types](https://docs.digitalocean.com/products/paperspace/machines/details/limits/#machine-types)
  - [Desktop App](https://docs.digitalocean.com/products/paperspace/machines/details/limits/#desktop-app)
- [Known Issues](https://docs.digitalocean.com/products/paperspace/machines/details/limits/#known-issues)

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