---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-storage-providers/"
title: "How to Set Up Storage Providers for Notebooks | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/notebooks.32e19af09a55fd5cd33aebcce8d997fae35ad696d0312f02ea32fbd1031df490.svg)Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/quickstart/)
    - [Create a Jupyter Notebook](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/create-jupyter-notebook/)
    - [Run Example Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/run-example-notebooks/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/)
    - [Create Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-notebooks/)
    - [Swap Machines](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/swap-machines/)
    - [Fork Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/fork-notebooks/)
    - [Share Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/share-notebooks/)
    - [Add Run on Gradient Badge](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-run-on-gradient/)
    - [Create Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-datasets/)
    - [Mount Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/mount-datasets/)
    - [Transfer Datasets and Files](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/transfer-data-and-files/)
    - [Connect Data Sources](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-data-sources/)
    - [Set Up Storage Providers](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-storage-providers/)
    - [Manage Storage](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-storage/)
    - [Use Terminal](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/use-terminal/)
    - [Connect to Kernel](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-remote-kernel/)
    - [Restart Kernels](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/restart-kernels/)
    - [Use Custom Containers](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-containers/)
    - [View Logs](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/view-notebook-logs/)
    - [View Metrics](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/view-notebook-metrics/)
    - [Use TensorBoard](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/use-tensorboard/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/notebooks/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/)
    - [Notebook Templates](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/)
  - [Details](https://docs.digitalocean.com/products/paperspace/notebooks/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/notebooks/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/notebooks/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/notebooks/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/notebooks/details/limits/)
    - [Public Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/details/public-datasets/)
    - [Storage Architecture](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-architecture/)
    - [Storage Types](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/)
  - [Support](https://docs.digitalocean.com/products/paperspace/notebooks/support/)

- [Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
- [How-Tos](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/)
- Set Up Storage Providers

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Set Up Storage Providers for Notebooks

Validated on 23 Apr 2024 • Last edited on 23 Jan 2025

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

Storage providers let you connect various storage resources to Gradient. Once connected, you can use this storage to store and access data, such as models, artifacts, and datasets, to use in Gradient.

Gradient uses storage providers with [versioned data](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/#versioned-data) to ensure that your data is verified and immutable. Gradient creates a folder with the same name as your Paperspace team ID within the storage provider. Gradient storage providers do not provide general S3 capabilities through the storage provider interface. However, if you define additional storage providers, you can use the tools compatible with your storage provider to interact with the data stored by Gradient.

Your Gradient account automatically comes with a storage provider named **Gradient Managed**. You can use this storage provider without additional configuration for storing data in Gradient’s hosted S3-compatible object storage.

Gradient Managed storage has a default persistent storage quota, based on your Gradient subscription level, which you can use for no additional charges. After the default quota is consumed, you may need to upgrade your subscription plan to have access to more storage. See your [Gradient Subscription plan](https://docs.digitalocean.com/products/paperspace/pricing/#paperspace-gradient) details for more information.

Gradient supports the following additional storage providers:

- DigitalOcean Spaces Object Storage
- AWS S3
- S3-compatible storage buckets

## Add DigitalOcean Spaces Object Storage

To add DigitalOcean Spaces Object Storage as a storage provider, follow these steps:

1. In the Paperspace console, click the profile icon in the top right and then select **Team Settings** from the drop-down menu.

2. In the **Storage** tab, click **Add a Storage Provider**.
![Create storage provider](https://docs.digitalocean.com/screenshots/paperspace/gradient/create-storage-provider.c3828dfbc62e1194926e42f649ad9ee08ea91884df347ab91730b14526035224.png)
3. In the **Create a new storage provider** window, select the **DigitalOcean Spaces** option.

For more information on how to create a Spaces bucket, see [Create Spaces Bucket](https://docs.digitalocean.com/products/spaces/how-to/create/)

4. Enter the following information:


   - **Display Name**: Name of the Spaces bucket
   - **Endpoint**: Endpoint URL of the bucket. To find the URL, go to the [DigitalOcean Control Panel](https://cloud.digitalocean.com/spaces), click your bucket, and click the **Settings** tab. Copy the value shown in **Origin Endpoint** drop-down. For example, `https://ps-spaces.nyc3.digitaloceanspaces.com`.
   - **Access Key ID** and **Secret Access Key**: Access key & secret for the bucket. For more information on how to generate the access and secret key, see [Sharing Access to Buckets with Access Keys](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys).

By default, CORS is automatically configured for any DigitalOcean Spaces integration for use by Gradient. If you want to modify your CORS config, navigate to the [**Settings** tab](https://cloud.digitalocean.com/spaces/ps-spaces1/settings) of your Spaces bucket and make modifications in the **CORS Configurations** section.

5. Click **Create**.


Once the Spaces bucket is added, you can use it for storing your datasets and other artifacts.

## Add Other Storage Providers

To add AWS S3 or other S3-compatible storage, use the following steps:

1. Create a bucket within your storage provider with read/write credentials, such as an access key and secret key, for accessing the data.

Note the bucket name, endpoint URL, and the access key and secret key.

2. Configure your storage bucket. You may need to configure CORS rules for your bucket.

3. In the Paperspace console, click the profile icon in the top right and then select **Team Settings** from the drop-down menu. In the **Storage** tab, click **Add a Storage Provider**. In the **Create a new storage provider** window, add the storage provider.


In this article...

- [Add DigitalOcean Spaces Object Storage](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-storage-providers/#add-digitalocean-spaces-object-storage)
- [Add Other Storage Providers](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-storage-providers/#add-other-storage-providers)

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