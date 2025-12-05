---
url: "https://docs.digitalocean.com/products/paperspace/machines/reference/states-and-error-codes/"
title: "Machine States and Error Codes | DigitalOcean Documentation"
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
- [Reference](https://docs.digitalocean.com/products/paperspace/machines/reference/)
- States and Error Codes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Machine States and Error Codes

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

The [Paperspace console](https://console.paperspace.com/) displays machine states, which indicate the current status of machines, and error codes, which indicate issues with your machine.

## States

Your machine can be in one or more of the following states:

| State | Description |
| --- | --- |
| **Provisioning** | The machine is building. Machines enter this state after creation. |
| **Starting up** | The machine is turning on. |
| **On/Ready** | The machine is turned on and accessible for use. |
| **Restarting** | The machine is restarting. |
| **Restarting and Installing Updates** | The machine is restarting due to an update. |
| **Inaccessible** | The machine is malfunctioning. You can view the [error code](https://docs.digitalocean.com/products/paperspace/machines/reference/states-and-error-codes/#errors) by hovering over the red exclamation mark next to this state. |
| **Shutting Down** | The machine is turning off. When you initiate a stop event, the machine turns off after approximately a minute. |
| **Off** | The machine is turned off. This is the only state when your machine is not incurring any hourly usage fees. |

By default, your machine enters the **Provisioning** state after [creating your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/). It then transitions to the **On/Ready** state. If you don’t plan to use your machine immediately after creating it, either [turn off your machine](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/#shutdown-or-restart-machines) after creation or set its initial starting state to **Off** when creating it to avoid unnecessary charges.

If your machine remains in the **Provisioning** state longer than ten minutes, we recommend submitting a [support ticket to Paperspace support](https://docs.digitalocean.com/products/paperspace/machines/support/).

For Windows-based machines, Paperspace displays a notification when your machine installs Windows updates, as these updates often take longer to process. If your machine takes more than a couple of hours to update and restart, we recommend submitting a [support ticket to Paperspace](https://docs.digitalocean.com/products/paperspace/machines/support/).

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

An **Inaccessible** state can occur when you make changes to your machine that affect its connectivity to Paperspace or the internet. If your machine isn’t accessible for more than ten minutes after changing your machine, then you should either restart your machine, open a [support ticket](https://docs.digitalocean.com/products/paperspace/machines/support/), or [revert to a previous version of your machine using a snapshot](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#revert).

## Errors

Some errors may resolve on their own over time or by restarting your machine. However, if the issue persists, you might need to [submit a support ticket to Paperspace](https://docs.digitalocean.com/products/paperspace/machines/support/). For example, errors in the **Inaccessible** state are often due to Windows updates taking longer than usual to complete. These typically clear once the update finishes.

Below are errors that may appear in your Paperspace console when using your machines:

| Error | Description |
| --- | --- |
| **200-206** | Machine not responding. |
| **208-209** | Machine setup incomplete. |
| **210** | Machine stuck starting up. |
| **211** | Machine stuck shutting down. |
| **212** | Machine stuck restarting. |
| **213** | Machine stuck upgrading. |
| **214** | Machine stuck provisioning. |

In this article...

- [States](https://docs.digitalocean.com/products/paperspace/machines/reference/states-and-error-codes/#states)
- [Errors](https://docs.digitalocean.com/products/paperspace/machines/reference/states-and-error-codes/#errors)

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