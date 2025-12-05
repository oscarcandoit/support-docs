---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/"
title: "How to Manage User Access | DigitalOcean Documentation"
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
- Manage Users

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage User Access

Validated on 7 Aug 2024 • Last edited on 17 Apr 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

Multiple users can have access to a machine if granted by a team administrator. This allows your team to share machines and collaborate. However, only one user can connect to the machine at a given time.

Once you grant access to your machine, the user is given full admin/root access to your machine’s operating system. Additionally, the user can not only use the machine, but take snapshots and enable additional features, such as [configuring auto-shutdown](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-auto-shutdown/).

You can manage your machine’s user access via the [Paperspace console](https://console.paperspace.com/) or [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/). You cannot use the [Paperspace CLI](https://docs.digitalocean.com/reference/paperspace/pspace/) to grant or revoke user access.

## Add a User

You can only grant access to users who are members of your team. If you want to grant access to a user who doesn’t belong to your team, either [invite the user to your team](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/#invite-users) or [create a team](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/#create-a-team) with that user.

### Using the Paperspace Console

To add a user to your machine, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, then click the **Machines** tab. Under the **Machines** tab, click the machine you want to add users to.

In the machine’s overview page, in the top-right corner where your profile picture icon is located, click the **Add accessors** button, which opens the **Manage Access** window.

![The Details page of the machine overview page.](https://docs.digitalocean.com/screenshots/paperspace/machines/machine-overview-page.d9071be33b0f83c2e2a17f8a771b51e9a8fd95e091602c76b7a3c83d5b9ce09b.png)

In the **Manage Access** window, under the **Click a user to add them as an accessor** section, click the drop-down menu to search for the users you want to add.

![The Manage Access window of the machine overview page.](https://docs.digitalocean.com/screenshots/paperspace/machines/manage-access.dbddf7daba28ae475e08c5c0dd38faca6575402fcd9f3ec7cb7e6d26ae4c3e22.png)

After you’ve searched and added the users to your machine, exit the **Manage Access** window. On your machine’s overview page, in the top-right corner, you can see the profile picture icons of the users you’ve added to your machine.

### Using the Paperspace API

When adding a user to your machine using the Paperspace API, you need to provide the following values:

- `id` (string): The ID of the machine you want to add a user to.
- `userId` (string): The ID of the user you want to add to your machine.

How to Add a User to a Machine Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a POST request to `https://api.paperspace.com/v1/machines/{machine-id}/accessors`.


```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "id": "psm9u09bwu5i",
        "userId": "ur7p0nb7n"
      }' \
  "https://api.paperspace.com/v1/machines/psm9u09bwu5i/accessors"
```

## Remove a User

Removing a user from a machine does not remove the SSH keys associated with the user. You need to [manually removed the SSH keys from the machine](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/).

If you want to remove a user from your team instead of a specific machine, you need to [remove the user from your team’s member list](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/).

### Using the Paperspace Console

To remove a user from your machine, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, then click the **Machines** tab. Under the **Machines** tab, click the machine you want to remove users from.

In the machine’s overview page, in the top-right corner where your profile picture icon is located, click the **Add accessors** button, which opens the **Manage Access** window.

![The Details page of the machine overview page.](https://docs.digitalocean.com/screenshots/paperspace/machines/machine-overview-page.d9071be33b0f83c2e2a17f8a771b51e9a8fd95e091602c76b7a3c83d5b9ce09b.png)

In the **Manage Access** window, under the **These users have access to this resource** section, click the **REMOVE** button next to the users you want to revoke access to.

![The Manage Access window of the machine overview page.](https://docs.digitalocean.com/screenshots/paperspace/machines/manage-access.dbddf7daba28ae475e08c5c0dd38faca6575402fcd9f3ec7cb7e6d26ae4c3e22.png)

### Using the Paperspace API

When removing a user from your machine using the Paperspace API, you need to provide the following values:

- `id` (string): The ID of the machine you want to remove a user from.
- `userId` (string): The ID of the user you want to remove from your machine.

How to Remove a User From a Machine Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a DELETE request to `https://api.paperspace.com/v1/machines/{machine-id}/accessors/{user-id}`.


```bash
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "id": "psm9u09bwu5i",
        "userId": "ur7p0nb7n"
      }' \
  "https://api.paperspace.com/v1/machines/psm9u09bwu5i/accessors/ur7p0nb7n"
```

In this article...

- [Add a User](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/#add)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/#using-the-paperspace-console)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/#using-the-paperspace-api)
- [Remove a User](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/#remove-a-user)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/#using-the-paperspace-console-1)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/#using-the-paperspace-api-1)

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