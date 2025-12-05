---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-data-sources/"
title: "How to Connect S3-Compatible Data Sources to Notebooks | DigitalOcean Documentation"
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
- Connect Data Sources

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Connect S3-Compatible Data Sources to Notebooks

Validated on 14 Dec 2023 • Last edited on 23 Jan 2025

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

When you subscribe to [Paperspace’s Pro or Growth plans](https://www.paperspace.com/gradient/pricing), you can mount public and private S3-compatible external data sources to your notebook to access data.

## DigitalOcean Spaces Object Storage

To mount Spaces Object Storage into Notebooks, use the following steps:

1. In the Paperspace console, click the **Data Sources** icon in the sidebar, and then click **+** or the **Add a Data Source** button.

2. In the **Add a Data Source** window, select the **DigitalOcean Spaces** option.
![DigitalOcean Spaces data source](https://docs.digitalocean.com/screenshots/paperspace/gradient/do-data-source.b37d503bd1787404db21fad85b67f77bcb0c67eb23e7d3c70c30f3ca3b1300f1.png)
3. Enter the following information:
   - **Display Name**: A name for the data source.

   - **Endpoint**: The URL for the bucket.

     To find the Spaces endpoint URL, go to the [DigitalOcean Control Panel](https://cloud.digitalocean.com/spaces), click your bucket, and click the **Settings** tab. Copy the value shown in the **Origin Endpoint** drop-down. For example, `https://ps-spaces.nyc3.digitaloceanspaces.com`.

   - **Access Key ID** and **Secret Access Key**: The access key and secret key for the bucket.

     You must [generate the access and secret key](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys) and then, add them as [project secrets](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/#set-a-secret) in the **Settings** tab of your project.
4. Click the **Add DigitalOcean Data Source** button.

5. Once the Spaces bucket is added, find it in the list of data sources and click the **Mount** button.

This creates a bi-directional mount for reading and writing data to the Space.


## AWS S3

The dashboard allows you to mount public and private S3 buckets into the notebook to access data that is stored externally for both Pro and Growth plans.

1. Add a new data source and select the Amazon S3 icon.
2. Enter the name of your data source and bucket URL.
3. If the bucket is private add an Access Key ID and Secret Access Key by choosing a Paperspace Secret in the drop-down. To learn about Paperspace secrets, check out the CLI/SDK reference that instructs you on [how to create a Paperspace secret](https://docs.digitalocean.com/reference/paperspace/gradient/commands/secrets/).
4. You can mount a data source to your notebook and access it through the data source panel.

![mount an AWS S3 data source](https://docs.digitalocean.com/screenshots/paperspace/gradient/s3-data-source-mount.375cff7ad7e0d2ea0cdb48f2fee630f6301e5d5c5fc6c1b0cd2ff20859ad8682.gif)

## S3-Compatible Data Source

To connect to other S3-compatible data sources, you should first add the S3-compatible bucket URL. For example, GCP would look like this: `s3://example-bucket-name`. Then, open the **Advanced Settings** and change the default endpoint. For example, you would enter `https://storage.googleapis.com` for GCP.

![Mount S3-compatible data source](https://docs.digitalocean.com/screenshots/paperspace/gradient/s3-compatible-data-source-mount.8bc1ba14e456ded757ab9b52d1d4731f29251ca2fe0999b8a5b4bfa0d07be9f4.png)

## Making an S3 Bucket Publicly Accessible

Warning
Anyone on the internet has access your files. Do not enable this if you have sensitive information in your S3 bucket.

To make an AWS S3 bucket publicly accessible without credentials, update two parameters in your bucket settings under the **Permissions** tab:

1. Uncheck “Block all public access”.

![Unchecked checkbox](https://docs.digitalocean.com/screenshots/paperspace/gradient/block-public-access.37de75edd6c48fa09b0cd0cba9c9e9031197dbbdbc3b7b899a0fe54959b6c2c7.png)

2. Edit ACL to allow Everyone (public access) List Objects and Read Bucket ACL.

![Block public access](https://docs.digitalocean.com/screenshots/paperspace/gradient/block-public-access.37de75edd6c48fa09b0cd0cba9c9e9031197dbbdbc3b7b899a0fe54959b6c2c7.png)

In this article...

- [DigitalOcean Spaces Object Storage](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-data-sources/#digitalocean-spaces-object-storage)
- [AWS S3](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-data-sources/#aws-s3)
- [S3-Compatible Data Source](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-data-sources/#s3-compatible-data-source)
- [Making an S3 Bucket Publicly Accessible](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-data-sources/#making-an-s3-bucket-publicly-accessible)

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