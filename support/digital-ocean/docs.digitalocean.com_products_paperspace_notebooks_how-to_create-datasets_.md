---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-datasets/"
title: "How to Create Datasets for Notebooks | DigitalOcean Documentation"
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
- Create Datasets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Datasets for Notebooks

Validated on 23 Apr 2024 • Last edited on 18 Dec 2024

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

In addition to the available [public datasets](https://docs.digitalocean.com/products/paperspace/notebooks/details/public-datasets/), you can create your own datasets using the Paperspace console or the CLI.

## Create Dataset and Dataset Version Using the Paperspace Console

To create a new dataset, select the **Data** tab in a project and click **Create a Dataset**. In the **Create a new dataset** window, specify a name, an optional description, and a storage provider.

![Create new dataset](https://docs.digitalocean.com/screenshots/paperspace/gradient/create-new-dataset-page.59820f5302575cc31e5319c2262392d186e2b0e2f46db20439026547b0946b53.png)

If the team already has datasets, click **Add** to create a new dataset. On the next screen, you can drag and drop or upload your files and then click **Upload**.

![Import dataset](https://docs.digitalocean.com/screenshots/paperspace/gradient/import-a-dataset.6b7b018236607ddb8c5052119a05c52284a490d30213cdb0c1df5f158fa2c1f2.png)

Note the ID of the dataset to use elsewhere.

You can also create a dataset in a notebook as described in [Connect Data Sources](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-data-sources/).

Note
Importing data or adding it in some other way such as a Workflow output creates a new version of the dataset.

## Create Dataset and Dataset Version Using the CLI

To create a new dataset that does not yet have an ID in the CLI, use the `gradient datasets create` command:

```bash
$ gradient datasets create --name democli --<storage-provider-id> ssfe843ndkjdsnr
```

The output looks similar to the following:

```bash
Created dataset: dsr5zdx0thjhfe2
```

All Gradient datasets are versioned. To make any changes to data in a dataset, first you need to create a new version of the dataset. Use the following command, replacing `<dataset-id>` with the ID of the dataset you want to update:

```bash
$ gradient datasets versions create --id <dataset-id>
```

Once the version is created, you can then add files to the dataset version.

```bash
$ gradient datasets files put --id dst364npcw6ccok:fo5rp4m --source-path ./some-data/
```

Once all desired files are uploaded to the version, commit the version to the dataset.

```bash
$ gradient datasets versions commit --id dst364npcw6ccok:fo5rp4m
```

Once the dataset version is committed, the data is available in the Paperspace console for you to reference in Notebooks, Workflows, and Deployments.

## View Datasets Using the CLI

To view a list of all datasets, use one of the following commands:

- `gradient datasets list`

The output looks similar to the following:



```bash
+------+-----------------+-------------------------+
| Name | ID              | Storage Provider        |
+------+-----------------+-------------------------+
| test | dst364npcw6ccok | test1 (splgct3arqdh77c) |
+------+-----------------+-------------------------+
```

- `gradient datasets details --id <dataset-id>`

The output looks similar to the following:



```bash
+-----------------+-------------------------+
| Name            | test                    |
+-----------------+-------------------------+
| ID              | dst364npcw6ccok         |
| Description     |                         |
| StorageProvider | test1 (splgct3arqdh77c) |
+-----------------+-------------------------+
```


## View Dataset Files Using the CLI

To view dataset files, use one of the following command:

```bash
$ gradient datasets files list --id <dataset-id>
```

The output looks similar to the following:

```bash
+-----------+------+
| Name      | Size |
+-----------+------+
| hello.txt | 12   |
+-----------+------+
```

In this article...

- [Create Dataset and Dataset Version Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-datasets/#create-dataset-and-dataset-version-using-the-paperspace-console)
- [Create Dataset and Dataset Version Using the CLI](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-datasets/#create-dataset-and-dataset-version-using-the-cli)
- [View Datasets Using the CLI](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-datasets/#view-datasets-using-the-cli)
- [View Dataset Files Using the CLI](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-datasets/#view-dataset-files-using-the-cli)

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