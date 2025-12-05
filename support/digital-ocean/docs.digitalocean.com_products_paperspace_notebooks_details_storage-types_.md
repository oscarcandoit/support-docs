---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/"
title: "Storage Types | DigitalOcean Documentation"
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
- [Details](https://docs.digitalocean.com/products/paperspace/notebooks/details/)
- Storage Types

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Storage Types

Validated on 23 Apr 2024 • Last edited on 10 May 2024

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

Gradient offers two types of storage: [Persistent Storage](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/#persistent-storage) and [Versioned Data](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/#versioned-data).

## Persistent Storage

Persistent storage is a high-performance `\storage` directory located within Notebooks. Persistent storage is backed by a filesystem and is ideal for storing data like images, datasets, model checkpoints, and other resources. Anything you store in the `/storage` directory is accessible across multiple runs of notebooks in a given storage region.

## Versioned Data

Gradient provides the ability to mount S3-compatible object storage buckets to workloads at runtime. Datasets have immutable versions which you can use to track your data as it changes. For more information on creating versioned data, see [Create Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-datasets/).

![Import dataset](https://docs.digitalocean.com/screenshots/paperspace/gradient/import-dataset.c0583539e1f59f81b2e21e903eace5eaf45e6cc505d1a9121bf695e082e79045.gif)

## Volumes

Within Gradient, Volumes allow various Gradient resources to access a shared Network File System. Storage volumes provide a block-level storage device as the primary system drive on a Paperspace machine. Volumes appear to the operating system as locally attached storage which you can partition and format as needed.

### Volumes for Notebooks, Workflows, and Deployments

- **Gradient Versioned Datasets**: You can create versioned datasets for storing ML data, artifacts, and models. The data is accessible through one or more job-specific paths you provide. You can create versioned datasets directly using the CLI, in the **Data** tab in the Paperspace console, or through Workflows that enable regular updates to the file via GitHub. You can store versioned datasets in Gradient Managed, DigitalOcean Spaces Object Storage, or another storage provider.
  - /inputs/{user-chosen-job-specific-dir-name1}
  - /inputs/{user-chosen-job-specific-dir-name2}
  - /outputs/{user-chosen-job-specific-dir-name1}
  - /outputs/{user-chosen-job-specific-dir-name2}
- **`/storage`**: This is a team-wide shared storage directory on the NFS or other Kubernetes Container Storage Interface storage option, such as Ceph. This is created and allocated as a Kubernetes _PersistentVolume_ during installation that is accessible.

- **Gradient Volumes**: These are temporary Workflow run volumes that only exist for the duration of the Workflow run. They are referenced under the same root paths as Gradient dataset versions. Use these volumes to instantiate, access, and upload to temporary storage spaces facilitating your Workflow without storing the files/data permanently in one of the persistent storage options.
  - /inputs/{user-chosen-job-specific-dir-name3}
  - /inputs/{user-chosen-job-specific-dir-name4}
  - /outputs/{user-chosen-job-specific-dir-name3}
  - /outputs/{user-chosen-job-specific-dir-name4}
  - …

### Volumes Accessible Only Through Notebooks

- **`/notebook`**: This is a directory under the team’s `/storage` root that stores the home directory content of each notebook run. You can clone the files in the notebook repository directly from GitHub to efficiently set up your workspace. When creating a new notebook, specify the URL in the **URL** field of the **Workspace** section in the **Advanced Options** section. This is allocated as a temporary sub-volume under the main team storage volume.

### Team-wide Volumes

- **`/{team-id}/datasets`**: This stores cached named versions of the Gradient datasets. Your team can control the size of the cache. Data stored in the cache is automatically backed up to the configured storage provider.

### Cluster-wide Volumes

- **`metrics`**: This is a persistent volume where Prometheus metrics data is stored.
- **`share-storage`**: This is a cluster-wide persistent volume that team sub-volumes are allocated.

## Versions, Tags, and Messages

Datasets have multiple versions. You can specify a new dataset version by adding information about the newly-created dataset version. In addition, you can tag a specific dataset version with a custom name. You can reference a dataset in the following ways:

- `[dataset-id]:latest`: Uses the latest version of your dataset
- `[dataset-id]:[dataset-version]`: Uses the specified dataset-version
- `[dataset-id]:[dataset-tag]` : Uses the specified dataset version that the dataset-tag points to

## Committed State

Dataset versions have an uncommitted and committed state. When a dataset is uncommitted, you can modify or add files freely. When a dataset is committed, it is immutable and you cannot modify it. This makes the workloads repeatable and deterministic with the provided datasets.

In this article...

- [Persistent Storage](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/#persistent-storage)
- [Versioned Data](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/#versioned-data)
- [Volumes](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/#volumes)
  - [Volumes for Notebooks, Workflows, and Deployments](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/#volumes-for-notebooks-workflows-and-deployments)
  - [Volumes Accessible Only Through Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/#volumes-accessible-only-through-notebooks)
  - [Team-wide Volumes](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/#team-wide-volumes)
  - [Cluster-wide Volumes](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/#cluster-wide-volumes)
- [Versions, Tags, and Messages](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/#versions-tags-and-messages)
- [Committed State](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/#committed-state)

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