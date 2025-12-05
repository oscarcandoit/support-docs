---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/"
title: "How to Assign or Unassign a Hostname | DigitalOcean Documentation"
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
- Manage Hostnames

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Assign or Unassign a Hostname

Validated on 7 Aug 2024 • Last edited on 23 Jan 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

You can assign or unassign a persistent hostname on Linux- and Windows-based machines. Persistent hostnames remain the same even after the machine shuts down or restarts.

## Get the Machine’s IP Address

To assign a hostname, you first need the IP address of your machine.

In the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu and select **CORE**. Click the **Machines** tab, then find and select the machine that you need the IP address for.

On the machine’s overview page, click the **Details** tab. On the right, under **Public IP** (if your machine is public) or **Private IP** (if your machine is private) section, your machine’s IP address is listed.

## Assign a Hostname for Linux-based Machines

Once you have the IP address of your machine, need to [connect to your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/) and follow the instructions below for Linux machines.

### On Linux-based Machines

In your machine, open a terminal, then open the `/etc/hosts` file with a text editor of your choice.

```sh
sudo nano /etc/hosts
```

In `/etc/hosts`, look for the `localhost` entry and update it to use your new hostname and the IP address of your machine. If there isn’t a `localhost` entry, add one on a new line.

```text
198.51.100.0 localhost your-new-hostname
```

Then, save and exit the file.

If system updates affect `/etc/hosts` or the hostname utility, you must re-add your hostname. For more information about the hosts file on Linux, see [the hosts file man page](https://manpages.ubuntu.com/manpages/bionic/en/man5/hosts.5.html).

Then, set your new hostname by running the `hostnamectl` command with your new hostname.

```sh
sudo hostnamectl set-hostname your-new-hostname
```

In the Paperspace console, in your machine’s overview page, click **RESTART** to apply your hostname changes to your machine.

Then, [reconnect to your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/), open a terminal, and run the `hostname` command to verify that the hostname change persisted. The command should output the new hostname you added.

## Assign a Hostname for Windows-based Machines

The hosts file on Windows-based machines is `C:\Windows\System32\drivers\etc\hosts`. You can’t directly modify the hosts file within the system directory, so you first need to copy it to a location where you can edit it, like your desktop:

```shell
copy C:\Windows\System32\drivers\etc\hosts Desktop\hosts
```

Open the hosts file using a text editor of your choice.

```shell
notepad Desktop\hosts
```

Add your new hostname to the hosts file by adding the new hostname alongside the IP address of your machine.

```text
198.51.100.0    your-new-hostname
```

After you’ve added your new hostname, save and exit the file. Then, copy the modified hosts file back into the system directory, which replaces the old hosts file.

```shell
move /Y Desktop\hosts C:\Windows\System32\drivers\etc\hosts
```

In the Paperspace console, in your machine’s overview page, click **RESTART** to apply your hostname changes to your machine.

Then, reconnect to your machine, open a terminal, and run the `ping` command with your new hostname to verify that the hostname change persisted. The command should output the new hostname you added.

```shell
ping your-new-hostname
```

## Unassign a Hostname

If you want to unassign a hostname on your machine, you need to follow the steps for assigning a hostname for either your [Linux-based machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/#assign-a-hostname-for-linux-based-machines-assign) or [Windows-based machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/#assign-a-hostname-for-windows-based-machines), except instead of adding a new hostname, you remove the hostname you want to unassign to your machine from the hosts file.

In this article...

- [Get the Machine’s IP Address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/#get-the-machines-ip-address)
- [Assign a Hostname for Linux-based Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/#assign)
  - [On Linux-based Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/#on-linux-based-machines)
- [Assign a Hostname for Windows-based Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/#assign-a-hostname-for-windows-based-machines)
- [Unassign a Hostname](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/#unassign-a-hostname)

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