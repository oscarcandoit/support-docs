---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/deactivate/"
title: "How to Deactivate a Machine | DigitalOcean Documentation"
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
- Deactivate Machines

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Deactivate a Machine

Validated on 7 Aug 2024 • Last edited on 17 Apr 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

Deactivating a Paperspace machine permanently removes the machine, its files, and its snapshots from your Paperspace account. You can deactivate a machine using the [Paperspace console](https://console.paperspace.com/), [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/), or [Paperspace CLI](https://docs.digitalocean.com/reference/paperspace/pspace/).

To save files from your machine before deactivation, [transfer the files to another machine or local device](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/). You can also [create a custom template](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/) of your machine, which lets you create a new machine with the same data and configuration in the future.

Before deactivating your machine, you need to [turn off your machine](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/#shutdown-or-restart-machines).

## Deactivate a Machine Using the Paperspace Console

To deactivate your machine, go to the [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, then click the **Machines** tab. In the **Machines** section, click the machine you want to deactivate.

On the machine’s overview page, in the top-right corner, click the **Settings** tab. At the bottom of the **Settings** page, in the **Deactivate machine** section, click **DEACTIVATE** to open the **Deactivate machine** window.

![The Deactivate section of the machine's Settings page.](https://docs.digitalocean.com/screenshots/paperspace/machines/settings-deactivate-section.ce869bc95a028f7dfc57fba86a5ff57ea80a31c0cac4a1283fae9714891ad0d9.png)

In the **Deactivate machine** window, click **DEACTIVATE** if you still want to deactivate your machine.

![The Deactivate machine window from the Deactivate section of the machine's Settings page.](https://docs.digitalocean.com/screenshots/paperspace/machines/deactivate-machine.435eb19e72a8047deee8adcc441afbf18b89e07a00fc3d8b7f90058b980384b8.png)

Once your machine is deactivated, you’re redirected to the **Machines** tab.

## Deactivate a Machine Using the Paperspace API

When deactivating a machine using the Paperspace API, you need to provide the ID of the machine you want to delete.

How to Deactivate a Machine Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a DELETE request to `https://api.paperspace.com/v1/machines/{machine-id}`.


```bash
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{"id":"psm9u09bwu5i"}' \
  "https://api.paperspace.com/v1/machines/psm9u09bwu5i"
```

## Deactivate a Machine Using the Paperspace CLI

When deactivating a machine using the Paperspace CLI, you need to provide the ID of the machine you want to delete.

How to Deactivate a Machine Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace machine delete <machine-id>`.

```bash
pspace machine delete psm9u09bwu5i
```

In this article...

- [Deactivate a Machine Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/deactivate/#deactivate-a-machine-using-the-paperspace-console)
- [Deactivate a Machine Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/deactivate/#deactivate-a-machine-using-the-paperspace-api)
- [Deactivate a Machine Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/deactivate/#deactivate-a-machine-using-the-paperspace-cli)

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