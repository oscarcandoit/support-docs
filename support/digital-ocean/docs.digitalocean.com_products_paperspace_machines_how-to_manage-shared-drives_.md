---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/"
title: "How to Create, Mount, or Delete a Shared Drive | DigitalOcean Documentation"
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
- Manage Shared Drives

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create, Mount, or Delete a Shared Drive

Validated on 7 Aug 2024 • Last edited on 17 Apr 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

Shared drives provide storage that is accessible from multiple machines in a private network.

You can manage shared drives with the [Paperspace console](https://console.paperspace.com/), [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/), or [Paperspace CLI](https://docs.digitalocean.com/reference/paperspace/pspace/).

## Create a Shared Drive

Before creating a shared drive, you need to [create a private network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#create) where you store the shared drive.

### Using a Paperspace Console

To create a [shared drive](https://console.paperspace.com/drives), go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click the **Drives** tab, in the **Drives** page, click **CREATE** to open the **Create a drive** window.

![The Create a drive window of Core dashboard's Drives page.](https://docs.digitalocean.com/screenshots/paperspace/machines/create-shared-drive.d72fa033b2e2805fcd5ed5bff8f6cd43f9bf3f83dca059fb2af27c6ca147d06e.png)

In the **Create a drive** window, under the **Name** section, choose a name for your shared drive.

Under the **Size in GB** section, click the drop-down menu, choose a [disk size](https://docs.digitalocean.com/products/paperspace/machines/details/features/#block-storage) for your shared drive. By default, the lowest disk size is selected.

Under the **Region** section, click the drop-down menu, choose a [region](https://docs.digitalocean.com/products/paperspace/machines/details/availability/) for your shared drive. A good default is selected for you, but for the best performance and minimal latency, choose the datacenter region nearest to you and your users. Shared drives are region-specific, so its region must belong to the same region as the machines that are using it.

Under the **Network** section, click the drop-down menu, choose a [network](https://docs.digitalocean.com/products/paperspace/machines/details/features/#networking) for your shared drive. By default, one of your private networks in the same region is chosen.

After you’ve configured for shared drive, click **CREATE**. You can see your new shared drive in the **Drives** tab.

### Using the Paperspace API

When creating a shared drive using the Paperspace API, you need to provide the following values:

- `name` (string): The name of the shared drive.
- `size` (number): The [disk size](https://docs.digitalocean.com/products/paperspace/machines/details/features/#block-storage) of the shared drive in GB.
- `networkId` (string): The ID of the private network the shared drive belongs to.
- `region` (string): The [region](https://docs.digitalocean.com/products/paperspace/machines/details/availability/) the shared drive belongs to.

How to Create a Shared Drive Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a POST request to `https://api.paperspace.com/v1/shared-drives`.


```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "name": "your-shared-drive-name",
        "size": 50,
        "region": "NY2",
        "networkId": "nwhoe4ox"
      }' \
  "https://api.paperspace.com/v1/shared-drives"
```

### Using the Paperspace CLI

When creating a shared drive using the Paperspace CLI, you need to provide the following values:

- `name` (string): The name of the shared drive.
- `size` (number): The [disk size](https://docs.digitalocean.com/products/paperspace/machines/details/features/#block-storage) of the shared drive in GB.
- `network-id` (string): The ID of the private network the shared drive belongs to.
- `region` (string): The [region](https://docs.digitalocean.com/products/paperspace/machines/details/availability/) the shared drive belongs to.

How to Create a Shared Drive Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace shared-drive create -F [flags]`.

```bash
pspace shared-drive create -F --name your-shared-drive-name --network-id nwhoe4ox --region NY2 --size 50
```

## Access a Shared Drive

Before you can access the shared drive, you need to mount your shared drive to your machine. For Windows-based machines, follow the [Mount a Drive in a Folder](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/assign-a-mount-point-folder-path-to-a-drive) tutorial.

Note
You cannot mount a shared drive to your machine using the [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/) or [CLI](https://docs.digitalocean.com/reference/paperspace/pspace/). If you want to mount a shared drive to your machine, you need to mount it via the [Paperspace console](https://console.paperspace.com/).
How to Mount a Shared Drive on Linux Using the Paperspace Console

1. In the [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, then click the **Machines** tab. In the **Machines** section, find and select the machine you want to mount a shared drive to.

2. [Connect to your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/), open a terminal, then use the `mkdir` command to create a directory to mount your shared drive to.


```shell
sudo mkdir /mnt/share
```

If the directory is created outside of the root directory, you must change its ownership to the `paperspace` user. This ensures that the directory has the appropriate permissions and is managed by the `paperspace` user.

```shell
sudo chown paperspace:paperspace /mnt/share
```

3. Using a text editor of your choice, open the `/etc/fstab` file. The `/etc/fstab` file defines how disk drives and partitions are mounted.

```shell
sudo nano /etc/fstab
```

4. Append the following line to the bottom of the `/etc/fstab` file. This line is the shared drive you want to add to your machine.

```text
//your-shared-drive-ip-address/your-shared-drive-name /mnt/share   cifs  username=your-username,password=your-password,uid=1000,gid=1000,rw  0  0
```

5. Save and exit the `/etc/fstab` file.

6. Mount your shared drive to the directory you created earlier.


```shell
mount /mnt/share
```

7. Verify that you have successfully mounted your shared drive by running a `df` command, which shows the disk space usage on your machine.

```shell
df -h
```

You have successfully mounted your shared drive if you see it listed among other mounted filesystems.

```shell
Filesystem            Size  Used Avail Use% Mounted on
...
//your-shared-drive-ip-address/your-shared-drive-name   500G  150G  350G  30% /mnt/share
```

If you get the mount error below, it means there is an issue related to either your file system type or server settings.

```shell
mount: wrong fs type, bad option, bad superblock on //your-shared-drive-ip-address/your-shared-drive-name,
missing codepage or helper program, or other error
(for several filesystems (for example, nfs, cifs) you might
need a `/sbin/mount.<type>` helper program)
```

To fix this error, you need to:

1. Ensure your machine is up-to-date.

```shell
sudo apt-get update
```

2. Install Common Internet File System (CIFS) utilities, which provides the tools to mount Server Message Block (SMB) and CIFS shares. SMB/CIFS shares are protocols used to dictate how different resources, such as shared drives, are shared within your machine.

```shell
sudo apt install cifs-utils
```

3. Re-attempt to mount your shared drive to the directory you created earlier.

```shell
mount /mnt/share
```

### Using the Paperspace Console

To access your shared drives, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click the **Drives** tab, then find the shared drive you want to access.

In the shared drive, under the **network address** section, **username** section, and **password** section, click to copy their values for later use.

After copying your shared drives attributes, [connect to your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/), then find your shared drive under the directory you mounted your shared drive to.

After finding the shared drive on your machine, open the shared drive, then type the network address, username, and password values from earlier for authentication.

### Using the Paperspace API

When accessing a shared drive using the Paperspace API, you need to provide the ID of the shared drive you want to access.

How to Access a Shared Drive Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a GET request to `https://api.paperspace.com/v1/shared-drives/{shared-drive-id}`.


```bash
curl -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "id": "RJFHxSmO7U03"
      }' \
  "https://api.paperspace.com/v1/shared-drives/RJFHxSmO7U03"
```

### Using the Paperspace CLI

When accessing a shared drive using the Paperspace CLI, you need to provide the ID of the shared drive you want to access.

How to Access a Shared Drive Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace shared-drive get <shared-drive-id>`.

```bash
pspace shared-drive get RJFHxSmO7U03
```

## Delete a Shared Drive

### Using the Paperspace Console

To delete a [shared drive](https://console.paperspace.com/drives), go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, then click the **Drives** tab.

In the **Drives** page, within the list of shared drives, find the shared drive you want to delete.

Then, in the shared drive you want to delete, click **…**, click **Delete**.

### Using the Paperspace API

When deleting a shared drive using the Paperspace API, you need to provide the ID of the shared drive to delete.

How to Delete a Shared Drive Using the Paperspace API

1. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use.

2. Send a DELETE request to `https://api.paperspace.com/v1/shared-drives/{your-shared-drive-id}`.


```bash
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $PAPERSPACE_API_KEY" \
  -d '{
        "id": "RJFHxSmO7U03"
      }' \
  "https://api.paperspace.com/v1/shared-drives/RJFHxSmO7U03"
```

### Using the Paperspace CLI

When deleting a shared drive using the Paperspace CLI, you need to provide the ID of the shared drive to delete.

How to Delete a Shared Drive Using the Paperspace CLI

1. [Install `pspace`](https://docs.digitalocean.com/reference/paperspace/pspace/install/), the Paperspace command-line tool.

2. [Create an API key to authenticate your requests to your Paperspace account](https://docs.digitalocean.com/reference/paperspace/api-keys/) and save it for use with `pspace`.

3. Use the API key to grant `pspace` access to your Paperspace account.


```bash
pspace login --api-key your-api-key
```

4. Finally, run `pspace shared-drive delete <shared-drive-id>`.

```bash
pspace shared-drive delete RJFHxSmO7U03
```

In this article...

- [Create a Shared Drive](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#create-a-shared-drive)
  - [Using a Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#using-a-paperspace-console)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#using-the-paperspace-api)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#using-the-paperspace-cli)
- [Access a Shared Drive](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#access)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#using-the-paperspace-console)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#using-the-paperspace-api-1)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#using-the-paperspace-cli-1)
- [Delete a Shared Drive](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#delete-a-shared-drive)
  - [Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#using-the-paperspace-console-1)
  - [Using the Paperspace API](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#using-the-paperspace-api-2)
  - [Using the Paperspace CLI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/#using-the-paperspace-cli-2)

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