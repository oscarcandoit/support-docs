---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/"
title: "How to Assign or Remove a Public IP Address | DigitalOcean Documentation"
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
- Manage Public IP Addresses

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Assign or Remove a Public IP Address

Validated on 7 Aug 2024 • Last edited on 17 Apr 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

For a machine to be accessible over the internet, it needs a [public IP address](https://docs.digitalocean.com/products/paperspace/machines/details/features/#ip-address). You can assign either a static or dynamic public IP address:

- A machine with a **static public IP address** has the same IP address every time it powers on. Static public IP addresses remain in your Paperspace account until you delete them.

We recommend static addresses when you need a consistent address to access your machine.

- A machine with a **dynamic public IP address** has a different IP address each time it powers on. Dynamic public IP addresses are assigned automatically when a machine powers on and deleted when it powers off.

We recommend dynamic addresses when you only need temporary access to your machine.


A machine with no public IP address is not accessible over the internet, which is suitable for some use cases and avoids unnecessary charges. However, SSH-only machines must have a public IP address in order to use them.

You can manage a public IP address using the [Paperspace console](https://console.paperspace.com/), [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/), or [Paperspace CLI](https://docs.digitalocean.com/reference/paperspace/pspace/).

## Assign a Static Public IP Address

### Using the Paperspace Console

To assign a static IP address, go to the [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, then click the **Machines** tab.

In the **Machines** section, select the machine you want to assign a static IP address to. On the machine’s overview page, in the top-right corner, click the **Settings** tab.

In the **Settings** page, under the **Public IP** section, click **Static**, then click **SAVE** to open the **Make public IP static** window.

![The IP address section of the machine's Settings page with Static selected.](https://docs.digitalocean.com/screenshots/paperspace/machines/settings-static-ip-address-section.d3a8519b3f6c355381f5880c8695b69f52cba90a574bcbfa3bccf95e12842f59.png)

On the **Make public IP static** window, click **ASSIGN IP** if you want to create a static public IP address. If you create a static IP address, you are charged for that IP address until you delete it.

Afterwards, your machine is automatically assigned a static public IP address, which is shown in the **Settings** page, under the **Public IP** section.

### Using the Paperspace API

Before assigning a static public IP address using the Paperspace API, you first need to [claim an IP address and attach it to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/publicIps-claim). Afterwards, copy the public IP address you’ve claimed for later use.

To assign a static public IP address, provide the following values:

- `ip` (string): The static public IP address you want to assign to your machine.
- `machineId` (string): The ID of the machine you want to assign a static public IP address to.

How to Assign a Static Public IP Address Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a PUT request to `https://api.paperspace.com/v1/public-ips/{ip}`.


```bash
curl -X PUT \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "ip": "203.0.113.0",
        "machineId": "psm9u09bwu5i"
      }' \
  "https://api.paperspace.com/v1/public-ips/203.0.113.0"
```

### Using the Paperspace CLI

Before assigning a static public IP address using the Paperspace CLI, you first need to [claim a public IP address and attach it to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/pspace/commands/public-ip/#pspace-public-ip-claim). Afterwards, copy the public IP address you’ve claimed for later use.

To assign a static public IP address, provide the following values:

- `ip` (string): The static public IP address you want to assign to your machine.
- `machine-id` (string): The ID of the machine you want to assign a static public IP address to.

How to Assign a Static Public IP Address Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace public-ip assign <ip> -F [flags]`.

```bash
pspace public-ip assign 203.0.113.0 -F --machine-id psm9u09bwu5i
```

## Assign a Dynamic Public IP Address

Note
You cannot use the Paperspace API or CLI to assign a dynamic IP address to existing machines. You can only [specify the type of IP address](https://docs.digitalocean.com/products/paperspace/machines/details/features/#ip-address) when you first [create your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/). If you want to assign a dynamic IP address to existing machines, you can assign them via the Paperspace console.

To assign a dynamic IP address, go to the [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, then click the **Machines** tab.

In the **Machines** section, select the machine you want to assign a dynamic IP address to. On the machine’s overview page, in the top-right corner, click the **Settings** tab.

In the **Settings** page, under the **Public IP** section, click **Dynamic**, then click **SAVE** to open the **Make public IP dynamic** window.

![The IP address section of the machine's Settings page with Dynamic selected.](https://docs.digitalocean.com/screenshots/paperspace/machines/settings-dynamic-ip-address-section.0f25dce487fd045b8ff1e5b3813f4cac682054a8e6d05ea602127b2a064ac3cd.png)

On the **Make public IP dynamic** window, click **ASSIGN IP** if you want to create a dynamic public IP address. If you create a dynamic public IP address, you’re only charged when you’re using your machine.

Afterwards, your machine is automatically assigned a dynamic public IP address, which is shown in the **Settings** page, under the **Public IP** section.

## Remove Public IP Address

### Using the Paperspace Console

To remove an IP address, go to the [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, then click the **Machines** tab.

In the **Machines** section, select the machine you want to remove a IP address for. On the machine’s overview page, in the top-right corner, click the **Settings** tab.

In the **Settings** page, under the **Public IP** section, click **None**, then click **SAVE** to open the **Remove public IP** window.

![The IP address section of the machine's Settings page with None selected.](https://docs.digitalocean.com/screenshots/paperspace/machines/settings-none-ip-address-section.4a33947af3757cd4281255b80f2f29b76f4ce73802143ba48e4d002b7c44e303.png)

On the **Remove public IP** window, click **REMOVE IP** if you want to remove the IP address assigned to your machine. If you remove the public IP address associated with your machine, then your machine isn’t reachable over the internet.

### Using the Paperspace API

When removing a public IP address using the Paperspace API, you need to provide the public IP address to remove.

How to Remove a Public IP Address Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a DELETE request to `https://api.paperspace.com/v1/public-ips/{ip}`.


```bash
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "ip": "203.0.113.0"
      }' \
  "https://api.paperspace.com/v1/public-ips/203.0.113.0"
```

### Using the Paperspace CLI

When removing a static public IP address using the Paperspace CLI, you need to provide the public IP address to remove.

How to Remove a Public IP Address Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace public-ip release <ip>`.

```bash
pspace public-ip release 203.0.113.0
```

In this article...

- [Assign a Static Public IP Address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/#assign-a-static-public-ip-address)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/#using-the-paperspace-console)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/#using-the-paperspace-api)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/#using-the-paperspace-cli)
- [Assign a Dynamic Public IP Address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/#assign-a-dynamic-public-ip-address)
- [Remove Public IP Address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/#delete)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/#using-the-paperspace-console-1)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/#using-the-paperspace-api-1)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/#using-the-paperspace-cli-1)

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