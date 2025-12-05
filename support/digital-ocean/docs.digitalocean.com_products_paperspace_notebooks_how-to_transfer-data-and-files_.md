---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/how-to/transfer-data-and-files/"
title: "How to Upload and Download Datasets and Files from Gradient Notebooks | DigitalOcean Documentation"
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
- Transfer Datasets and Files

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Upload and Download Datasets and Files from Gradient Notebooks

Validated on 14 Dec 2023 • Last edited on 23 Jan 2025

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

## Uploading Large Files to the File Manager

To upload a large number of files, you should use command-line libraries such as [curl](https://curl.se/), [Wget](https://www.gnu.org/software/wget/), or [gdown](https://github.com/wkentaro/gdown).

For example, you could use `wget` to download the [Stanford Dogs dataset](http://vision.stanford.edu/aditya86/ImageNetDogs/) to your notebook:

![Use the wget command](https://docs.digitalocean.com/screenshots/paperspace/gradient/stanford-dogs.db88fee2a8a2e958e6243435d94563506cc26448535d0529d0c113f736c474aa.gif)

This command downloads the dataset to your current folder:

```
!wget http://vision.stanford.edu/aditya86/ImageNetDogs/images.tar
```

## Transferring Files From Google Drive

You can bring your files and folders in your Google Drive into your notebook using `gdown`.

Through the notebook or terminal, execute the following command to install `gdown`: `pip install gdown`.

Then, run the following command in the same terminal to upgrade: `pip install --upgrade gdown`. Before each command in the notebook, use a `!`.

In the permissions settings of the files and folders you want to upload, set the permissions to “Anyone with the Link.”

Then, obtain the `file id` by copying and extracting it from the file share link, and use the following commands based on your needs.

![Obtain the file id in the Google Drive share link](https://docs.digitalocean.com/screenshots/paperspace/gradient/googledrivelink.8af0b624878e3c924e58296378fa6d758fdb33eace77c8920d1de7dbd59f2f02.png)

If your files are bigger than 500 Mb, use: `gdown "<file_ID>&confirm=t"`. For smaller files, use: `gdown <file_ID>`. For folders, use: `gdown https://drive.google.com/drive/folders/<file_ID> -O /tmp/folder --folder`.

## Download Files From the File Manager

To download large files or folders from the notebook, zip or tar the files first which is down from the notebook or terminal. If the files are in shared storage or a dataset, files are downloadable by moving them into the file manager and executing the following instructions.

1. Compress the files and folders using the following command in a notebook code cell or the terminal. If you use the notebook, you should add a `!` before each command.
1. tar


      ```
      cd /notebooks
      tar -cf [filename].tar [file1] [file2]...
      ```

2. zip


      ```
      cd /notebooks
      zip -r [filename].zip [file1] [file2]...
      ```
2. Refresh the file manager.

3. Right click the compressed file created.

4. Select the **Download** option.


## Shared Storage

You can share data between users on a team and between notebooks that belong to users on a team.

You can access shared persistent storage through code, either via the notebook terminal or via a code cell within a notebook. There is currently no way to access shared persistent storage from the GUI.

Note
Shared storage cannot be accessed across clusters.

### Access Shared Storage

You can access shared persistent storage from a code cell within a notebook using the `!` operator and issuing bash commands on a single line connected with the `&&` operator.

For example, you can create a new directory within your persistent `/storage` directory with the following command:

```
!cd /storage && mkdir data && cd data
```

To access persistent storage in a Paperspace Notebooks terminal, use the `cd` command to change into the persistent directory `/storage`.

For example, you can create a new persistent directory called “data”:

```
cd /storage
mkdir data
cd data
```

In this article...

- [Uploading Large Files to the File Manager](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/transfer-data-and-files/#uploading-large-files-to-the-file-manager)
- [Transferring Files From Google Drive](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/transfer-data-and-files/#transferring-files-from-google-drive)
- [Download Files From the File Manager](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/transfer-data-and-files/#download-files-from-the-file-manager)
- [Shared Storage](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/transfer-data-and-files/#shared-storage)
  - [Access Shared Storage](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/transfer-data-and-files/#access-shared-storage)

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