---
url: "https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/"
title: "Machines Quickstart | DigitalOcean Documentation"
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
- [Getting Started](https://docs.digitalocean.com/products/paperspace/machines/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Machines Quickstart

Validated on 7 Aug 2024 • Last edited on 17 Jun 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

## Create Machines

When creating a new machine, you can configure the hardware that runs your machine, the storage it uses, and features attached to it, such as a [private network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/) or a [public IP address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/).

To create a machine:

01. In the Paperspace console, go to the [**Machines** page](https://console.paperspace.com/machines), then click **CREATE A MACHINE** to open the **Create a new machine** window.

02. Choose a [machine type](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/). You can select between CPU, GPU, and multi-GPU options, each offering [different specs and pricing](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/).

03. Choose an [OS template](https://docs.digitalocean.com/products/paperspace/machines/details/features/#os-templates). You can pick from Paperspace’s machine images, including [ML-in-a-Box](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/), a pre-built data science stack.

04. Choose a [disk size](https://docs.digitalocean.com/products/paperspace/machines/details/features/#block-storage), which is the size of your machine’s storage in GB.

05. Name your machine.

06. Choose a [datacenter region](https://docs.digitalocean.com/products/paperspace/machines/details/availability/). We recommend selecting the region closest to you or your users.

07. Assign a [public IP address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/). You can choose between a [dynamic (temporary) or static (persistent) IP address](https://docs.digitalocean.com/products/paperspace/machines/details/features/#networking).

08. Optionally, attach a [private network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/) for restricted access within the same network.

09. Add an [SSH key](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/) to authenticate users using your machine. If needed, [create an SSH key](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/).

10. Optionally, set up [automatic snapshots](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/) for system backups.

11. Choose the starting [state](https://docs.digitalocean.com/products/paperspace/machines/reference/states-and-error-codes/#states) of your machine after creation.

12. Review the [price summary](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/) for running and maintaining your machine.

13. After configuring your machine and reviewing your machine’s prices, click **CREATE MACHINE**. If set to turn on, the [machine state](https://docs.digitalocean.com/products/paperspace/machines/reference/states-and-error-codes/#states) goes from **Provisioning** to **On/Ready**. Otherwise, it remains **Off**.


Afterwards, you are redirected back to the **Machines** tab where you can see your new machine and an overview of its specs.

Alternatively, you can [create a machine using the Paperspace API or Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/).

## Connect to Machines

You can connect to both Linux and Windows-based machines using an SSH connection.

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

To connect to a machine using SSH:

1. In the Paperspace console, go to the [**Machines** page](https://console.paperspace.com/machines), then find your machine and click **START** to change the state from **Off** to **Starting up**.

2. Once the machine is **On/Ready**, click **CONNECT** to open the **Access your machine** window with the SSH command.

3. Copy the SSH command like below, open a terminal on your local machine, paste, and run the command.



```text
The authenticity of host '203.0.113.0 (203.0.113.0)' can't be established.
...
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

4. Type “yes” and press **ENTER** to add the machine’s IP address as a known host.

5. Re-run the SSH command to connect to your machine. If you encounter issues, contact [Paperspace support](https://docs.digitalocean.com/products/paperspace/machines/support/).


Alternatively, you can [connect to your machine using desktop streaming](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/). However, desktop streaming is only available for Windows-based machines.

## Shut Down or Restart Machines

Once you’re connected to your machine, you may want to shut down your machine temporarily or restart the connection if the connection is unstable or needs to update.

To shut down or restart a machine:

1. In the Paperspace console, go to the [**Machines** page](https://console.paperspace.com/machines), then find the machine you want to shut down or restart.

2. Click the machine to open its overview page, then click **SHUTDOWN** to turn your machine off or **RESTART** to restart it.


Shutdown changes the machine state from **On/Ready** to **Off**, replacing the **SHUTDOWN** and **RESTART** buttons with **START**. Restart goes from **On/Ready** to **Restarting**, and back to **On/Ready**, during which the machine is temporarily unusable.

## Deactivate Machines

Deactivating a machine permanently removes access to it, along with its files and snapshots.

To deactivate a machine:

1. Before attempting to deactivate your machine, if your machine is on, [turn it off](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/#disconnect-or-restart-machines). If you need to keep any files, [transfer them using FileZilla, Windows’ RDP, `scp`, or `wget`](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/) to another machine or your local machine, as deactivation permanently removes access to the machine and its snapshots.

2. In the [**Machines** page](https://console.paperspace.com/machines), click the machine you want to deactivate to open its overview page.

3. In the top-right corner, click the **Settings** tab. At the bottom of the page, in the **Deactivate machine** section, click **DEACTIVATE**.

4. In the **Deactivate machine** window, click **DEACTIVATE** to proceed.


Alternatively, you can [deactivate a machine using the Paperspace API or Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/deactivate/).

In this article...

- [Create Machines](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/#create)
- [Connect to Machines](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/#connect)
- [Shut Down or Restart Machines](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/#shut-down-or-restart-machines)
- [Deactivate Machines](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/#deactivate-machines)

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