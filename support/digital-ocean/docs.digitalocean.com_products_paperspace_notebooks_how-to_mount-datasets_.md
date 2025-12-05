---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/how-to/mount-datasets/"
title: "How to Mount Datasets in a Gradient Notebook | DigitalOcean Documentation"
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
- Mount Datasets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Mount Datasets in a Gradient Notebook

Validated on 14 Dec 2023 • Last edited on 23 Jan 2025

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

## Mount Datasets in a Notebook

The dashboard supports mounting datasets for exploring data and training models. On the **datasets** tab, you can mount existing team datasets, public datasets, and create new team datasets.

You can mount a dataset by clicking the **MOUNT** button next to either the team or public dataset you want to use.

![Mount a public dataset](https://docs.digitalocean.com/screenshots/paperspace/gradient/mount-public-dataset.b4bd44acd6e6d4fc81028444ce3aa23ee80c48b554fe23b5fa135cd764ea8350.gif)

When mounting a team dataset, this only mounts the latest version of a dataset. You can change the version of the dataset within the **Advanced Settings** section.

## Add Small Datasets to a Notebook

To add a new dataset, click the **+** icon then name, describe, and upload the data. You can close the window once the upload has started as the process continues to happen in the background.

![Images from Stanford Dogs dataset](https://docs.digitalocean.com/screenshots/paperspace/gradient/uploading-files-to-dataset.51461a75a8d33e99a83f29318f979ba98e2c563c8f451ecef62ab1cc0554f4d9.gif)

## Adding Large Datasets (5GB+) to a Notebook

To create datasets larger than 5GB, you can use the CLI through the terminal.

```shell
$ gradient datasets create --name democli --storageProviderId ssfe843ndkjdsnr
Created dataset: dsr5zdx0thjhfe2
```

All Gradient datasets are versioned, so if you want to make any changes to data in a dataset, you need to create a new version. The following command creates a new version of your dataset.

```shell
$ gradient datasets versions create --id dst364npcw6ccok
Created dataset version: dst364npcw6ccok:fo5rp4m
```

Once the new version is created, you can then add files to the dataset version.

```shell
$ gradient datasets files put --id dst364npcw6ccok:fo5rp4m --source-path ./some-data/
```

Once all your files are uploaded to the new version, commit the version to the dataset.

```shell
$ gradient datasets versions commit --id dst364npcw6ccok:fo5rp4m
Committed dataset version: dst364npcw6ccok:fo5rp4m
```

Once the dataset version is committed, the data is available in the UI, and you can reference it in other Gradient services such as Notebooks, Workflows, and Deployments.

## Datasets Advanced Settings

To access the settings file that manages all mounted datasets, go to `.gradient/settings.yaml` where you can see all of the mounted datasets and their arguments. You should only use this file for the following:

If you want to change the version of the dataset that is mounted, you have to change the `version-id` of the dataset.

```yaml
integrations:
  quarterly-reports: # mounts in /datasets/quarterly-reports
    type: dataset # denotes a paperspace dataset
    id: dataset-id # a paperspace dataset id
    version: version-id # a paperspace version id
  my-bucket-data: # mounts in /datasets/my-bucket-data
    type: s3 # an s3 bucket
    url: s3://my-bucket/my-data # your s3 bucket url
    accessKeyId: AK123 # your s3 access key id
    secretAccessKey: secret:my-bucket-secret-key # a paperspace secret with your s3 secret key
    region: "us-west-1" # the aws region your bucket is in, if not in aws set "endpoint"
    endpoint: "https://my-bucket-host.com" # a custom bucket host, do not set region if set
```

In this article...

- [Mount Datasets in a Notebook](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/mount-datasets/#mount-datasets-in-a-notebook)
- [Add Small Datasets to a Notebook](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/mount-datasets/#add-small-datasets-to-a-notebook)
- [Adding Large Datasets (5GB+) to a Notebook](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/mount-datasets/#adding-large-datasets-5gb-to-a-notebook)
- [Datasets Advanced Settings](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/mount-datasets/#datasets-advanced-settings)

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