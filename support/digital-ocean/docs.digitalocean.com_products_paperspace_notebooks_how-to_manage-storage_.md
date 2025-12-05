---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-storage/"
title: "How to Manage Storage for Notebooks | DigitalOcean Documentation"
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
- Manage Storage

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage Storage for Notebooks

Validated on 23 Apr 2024 • Last edited on 17 Jun 2025

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

Storage management allows you to modify and delete files and directories in Linux-based systems. To manage your storage on a Linux system, we recommend using the terminal.

You can also run Bash commands in the Jupyter Notebooks to interact with the underlying OS environment using a Code Cell in single line. To do so, start your line using the `!` operator. If you need to add more lines, you can connect them using the `&&` operator.

## Determine Folder Size

To determine your folder size when managing your files, first list folders located in the current folder using the following commands.

Terminal

```bash
du -sch .[!.]* * | sort -h
```

Code Cell

```
!du -sch .[!.]* * | sort -h
```

If you want to see the list of folders in a different folder, you can use the following commands, replacing `<folder-name>` with the path to the folder you want to analyze:

Terminal

```bash
cd <folder-name>
du -sch .[!.]* * | sort -h
```

Code Cell

```
!cd <folder-name> && du -sch .[!.]* * | sort -h
```

## Determine File Size

Once you know where the data is, you can determine the file sizes. This information helps in determining which individual files have the greatest impact on your storage. To list files located in the current folder, use the following commands.

Terminal

```bash
find . -print0 | du -ch --files0-from=- | sort -h
```

Code Cell

```
!find . -print0 | du -ch --files0-from=- | sort -h
```

If you want to see the information stored in a different folder, you can use the following commands, replacing `<folder-name>` with the path to the folder you want to analyze:

Terminal

```bash
cd <folder-name>
find . -print0 | du -ch --files0-from=- | sort -h
```

Code Cell

```
!cd <folder-name> && find . -print0 | du -ch --files0-from=- | sort -h
```

Once you have determined which files you might want to delete, we recommend moving them to a single folder so that you can delete everything together. To do so, you can use the following commands, replacing `<folder-name>`, `<file-name>`, and `<destination-folder>` values with your own:

Terminal

```bash
cd <folder-name>
mv <file-name> <destination-folder>
```

Code Cell

```
!cd <folder-name> && mv <file-name> <destination-folder>
```

## Delete Folders and Files

Once you have determined which folders and files you want to delete, use the following commands, replacing `<folder-name>` and `<data-name>` values with your own:

Terminal

```bash
cd <folder-name>
rm -r <data-name> ## <data-name> is the name of the folder/file you want to delete
```

Code Cell

```
!cd <folder-name> && rm -r <data-name>
```

## Other Tools and Alternatives

If you have access to the Linux Terminal and you prefer a visual interface to determine folder and file sizes, you can use [Ncdu](https://dev.yorhel.nl/ncdu). This application scans your machine and shows all folders listed by size in the terminal. It also allows you to move around the file system to open each folder, see it’s content and delete any file or folder.

To use Ncdu, follow these instructions:

1. In the terminal, update your machine’s APT:

```bash
sudo apt-get update
```

2. Install `ncdu`.

```bash
sudo apt install ncdu
```

3. Run `ncdu`.

```bash
ncdu
```

![ncdu](https://docs.digitalocean.com/screenshots/paperspace/gradient/ncdu.936b9247eadbd3b5157aacc21c90012efea052803d331fe96dec20706acae782.png)

## Delete Datasets

[Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-architecture/#main-components) are a storage source that allow you to save and/or share large amounts of data. They are part of the main storage even though you manage datasets separately from the main storage.

Datasets work as read-only sources. Once you add files to a dataset, you can’t edit, move, or delete them. Therefore, you can only remove those files from your storage by deleting the entire dataset itself.

To delete a dataset, follow these instructions:

1. In the Paperspace console, select any project.
2. Click the **Data** tab and search for the dataset you want to delete.
3. Click the **…** menu that corresponds to the dataset you want to delete and select **Delete**.

![Delete dataset](https://docs.digitalocean.com/screenshots/paperspace/gradient/dataset-delete.c36d925c83f31ed0237ac5d0a2efaebf38fd88f16afaf73327e6a42dec178ace.png)

## Delete Models

Depending on their size, some models can take up a significant amount of storage in your account and require you to delete some of your models to free up some of that space.

You can delete a model from the model repository using the Paperspace console or the CLI.

Web UI

To delete a model, follow these instructions:

1. In the Paperspace console, select any project.
2. Click the **Models** tab to see a list of your trained models.
3. Search for the model you want to delete.
4. Click the **…** menu that corresponds to the model you want to delete and select **Delete**.

![Delete model](https://docs.digitalocean.com/screenshots/paperspace/gradient/model-delete-button.1c3c1e8cb720712a15c6cd34fe328dead51f9813e7ad733a835bbbe644bc7c43.png)

CLI

You can delete a model using the CLI with the following command:

```bash
gradient models delete --id <your-model-id>
```

In this article...

- [Determine Folder Size](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-storage/#determine-folder-size)
- [Determine File Size](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-storage/#determine-file-size)
- [Delete Folders and Files](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-storage/#delete-folders-and-files)
- [Other Tools and Alternatives](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-storage/#other-tools-and-alternatives)
- [Delete Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-storage/#delete-datasets)
- [Delete Models](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-storage/#delete-models)

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