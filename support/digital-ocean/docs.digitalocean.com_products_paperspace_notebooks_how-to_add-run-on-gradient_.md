---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-run-on-gradient/"
title: "How to Add a Run on Gradient Badge for Notebooks | DigitalOcean Documentation"
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
- Add Run on Gradient Badge

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Add a Run on Gradient Badge for Notebooks

Validated on 14 Dec 2023 • Last edited on 29 Jan 2025

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

A Run on Gradient URL opens a Jupyter notebook from a GitHub repository with the option to run it on Paperspace. You can use this URL directly as a link or additionally use the Run on Gradient badge, which looks like this:
![Run on Gradient](https://assets.paperspace.io/img/gradient-badge.svg)

## Clicking a Run on Gradient Link

When you click on a Run on Gradient link, you view the Gradient Notebook in a Paperspace page.

![The static notebook page with a RUN button](https://docs.digitalocean.com/screenshots/paperspace/gradient/run-on-gradient-static-example.b8cb29aaa79a66d35f251e6c5473380f481c412e6188e054226ee55924c3029f.png)

A **RUN** button in the top right corner lets you run the notebook on Paperspace, and **START MACHINE** lets you create a machine. If you aren’t logged in to Paperspace, the page prompts you to sign up or log in.

## Creating a Run on Gradient URL

To create a Run on Gradient URL from a GitHub URL, replace `github.com` with `console.paperspace.com/github`.

For example, [this notebook file on GitHub](https://github.com/nlp-with-transformers/notebooks/blob/main/02_classification.ipynb) has the following URL:

```
https://github.com/nlp-with-transformers/notebooks/blob/main/02_classification.ipynb
```

The Run on Gradient URL for this notebook is:

```
https://console.paperspace.com/github/nlp-with-transformers/notebooks/blob/main/02_classification.ipynb
```

In addition, you can optionally specify one or both of the following parameters as query strings:

- `container` to specify a [container template](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/)
- `machine` to specify a [machine type](https://docs.digitalocean.com/products/paperspace/notebooks/details/pricing/#paperspace-machines)

The [structure for query strings](https://en.wikipedia.org/wiki/Query_string#Structure) is `parameter=value`. To add a query string to a URL, append a `?` character followed by the query string. Separate multiple query strings with `&`.

For example, you can specify the P4000 machine type by appending `?machine=P4000` to a Run on Gradient URL. You can specify the same machine type and a specific container image by appending `?machine=P4000&container=paperspace/gradient-base:tf29-pt112-py39-2022-06-29`.

## Run on Gradient Badge Examples

To use a Run on Gradient Badge in Markdown or HTML, you can use the following examples. Replace `YOUR_RUN_ON_GRADIENT_URL` with your Run on Gradient URL.

### Markdown

```md
[![Gradient](https://assets.paperspace.io/img/gradient-badge.svg)](YOUR_RUN_ON_GRADIENT_URL)
```

### HTML

```
<a href="YOUR_RUN_ON_GRADIENT_URL">
  <img src="https://assets.paperspace.io/img/gradient-badge.svg" alt="Run on Gradient"/>
</a>
```

In this article...

- [Clicking a Run on Gradient Link](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-run-on-gradient/#clicking-a-run-on-gradient-link)
- [Creating a Run on Gradient URL](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-run-on-gradient/#creating-a-run-on-gradient-url)
- [Run on Gradient Badge Examples](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-run-on-gradient/#run-on-gradient-badge-examples)
  - [Markdown](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-run-on-gradient/#markdown)
  - [HTML](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-run-on-gradient/#html)

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