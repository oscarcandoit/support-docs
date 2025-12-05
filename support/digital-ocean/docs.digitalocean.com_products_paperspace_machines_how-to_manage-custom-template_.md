---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/"
title: "How to Create or Delete a Custom Template | DigitalOcean Documentation"
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
- Manage Custom Templates

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create or Delete a Custom Template

Validated on 7 Aug 2024 • Last edited on 17 Apr 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

[Custom templates](https://docs.digitalocean.com/products/paperspace/machines/details/features/#custom-templates) are templates of your machines and their configurations. You can use these custom templates to [create new machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/) with your specifications. You can create or delete custom templates using the [Paperspace console](https://console.paperspace.com/), [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/), or [Paperspace CLI](https://docs.digitalocean.com/reference/paperspace/pspace/).

Before creating a custom template, [take a snapshot of your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/) to use as a backup. You can revert to this backup in case your machine malfunctions or disconnects from Paperspace during the custom template process.

Note
To create custom templates of machines created before August 2022, you need to [connect to the machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/), open a terminal, and run the `/usr/local/bin/paperspace-create-template.sh` script to prepare the machine for template creation. After running the script, the machine becomes unusable, and you can follow the rest of the regular process for creating a custom template.

## Create a Custom Template

Before you create a custom template, you must [turn off your machine](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/#shutdown-or-restart-machines). Optionally, on machines created after August 2022, you can run the `/usr/local/bin/paperspace-create-template.sh` script to clean up customization and command history.

### Using the Paperspace Console

To create a custom template, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click **Machines** tab, then find and select the machine you want to create a custom template of.

On the machine’s overview page, click the **Templates** tab to go to the **Templates** page. In the **Create a Template** section, click **CREATE TEMPLATE**. In the window that opens, optionally customize the template’s name, and click **CREATE TEMPLATE** to start the creation process.

When the custom template is ready, you can view it on the **Templates** page in the **Templates** section.

![The Templates page of the machine with a Create Template option.](https://docs.digitalocean.com/screenshots/paperspace/machines/machine-templates-page.5a94fa0006066f0e57e8c2ded4e04ed873341e8ebd0ce103f9543eb88029da40.png)

### Using the Paperspace API

When creating a custom template using the Paperspace API, you need to provide the following values:

- `name` (string): The name of the custom template.
- `machineId` (string): The ID of the machine you want to create a template of.

How to Create a Custom Template Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a POST request to `https://api.paperspace.com/v1/custom-templates`.


```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "name": "your-template-name",
        "machineId": "psm9u09bwu5i"
      }' \
  "https://api.paperspace.com/v1/custom-templates"
```

### Using the Paperspace CLI

When creating a custom template using the Paperspace CLI, you need to provide the following values:

- `name` (string): The name of the custom template.
- `machine-id` (string): The ID of the machine you want to create a template of.

How to Create a Custom Template Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace template create -F [flags]`.

```bash
pspace template create -F --name your-template-name --machine-id psm9u09bwu5i
```

## Delete a Custom Template

### Using the Paperspace Console

To delete a custom template, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click **Templates** tab.

In the **Templates** page, find the template you want to delete. In the template you want to delete, in the top-right corner, click **…**, click **Delete**.

### Using the Paperspace API

When deleting a custom template using the Paperspace API, you need to provide the ID of the custom template you want to delete.

How to Delete a Custom Template Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a DELETE request to `https://api.paperspace.com/v1/custom-templates/{template-id}`.


```bash
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "id": "tx98gvxz"
      }' \
  "https://api.paperspace.com/v1/custom-templates/tx98gvxz"
```

### Using the Paperspace CLI

When deleting a custom template using the Paperspace CLI, you need to provide the ID of the custom template you want to delete.

How to Delete a Custom Template Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace template delete <template-id>`.

```bash
pspace template delete tx98gvxz
```

In this article...

- [Create a Custom Template](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/#create-a-custom-template)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/#using-the-paperspace-console)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/#using-the-paperspace-api)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/#using-the-paperspace-cli)
- [Delete a Custom Template](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/#delete-a-custom-template)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/#using-the-paperspace-console-1)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/#using-the-paperspace-api-1)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/#using-the-paperspace-cli-1)

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