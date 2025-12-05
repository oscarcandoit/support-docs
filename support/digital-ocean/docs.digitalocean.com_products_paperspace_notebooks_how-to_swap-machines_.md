---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/how-to/swap-machines/"
title: "How to Swap Machines Attached to Notebooks | DigitalOcean Documentation"
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
- Swap Machines

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Swap Machines Attached to Notebooks

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

You can swap out a machine for a different machine at any time using notebooks when deciding what machine to select.

## Swapping Machines in an Existing Notebook

To swap instances in an existing notebook, use the **Instance** selector on the left side of the notebook. If the notebook is in the **Running** state, you first need to stop the instance.

![Manage machine instances](https://docs.digitalocean.com/screenshots/paperspace/gradient/stop-machine.d208597b3cd9fca2f7cff932da0840a048c9d531ef3c319738c7165c2cc4a3ad.gif)

After the instance is stopped, you can select a new instance from the list of available machines.

![Instance selector](https://docs.digitalocean.com/screenshots/paperspace/gradient/machines-in-notebook.4c6b60b81f048b3cc4031b515321d6166829deb3f16a5e3a41d3e0ad0ed19233.gif)

The top bar indicates when a notebook is in the **Running** state.

## Unavailable Machines

If an instance type is at capacity it is listed as “Unavailable”.

![A chart describing what an app is](https://docs.digitalocean.com/screenshots/paperspace/gradient/NotebookUnavailableMachines.edb10180ff95020722a66f90b841af860ecf1ee4cafd0006654231272cc67848.png)

If the machine type is listed as unavailable, you need to wait until capacity frees up. You can check if the machine type is available after waiting for a few minutes then refreshing the page. If its capacity is still not available, you could try a different instance with better availability or return to that instance on a less busy time of the day.

Note
Free GPU instances are often in high demand. You could try using popular free resources outside of peak hours which are from MF 9:00 AM - 5:00 PM ET, or try using more powerful paid machines.

Paperspace constantly adds capacity to its datacenters, so you should check the [Changelog](https://updates.paperspace.com/) about capacity upgrades.

## Machine Auto-shutdown

The auto-shutdown timer automatically shuts down a notebook after a pre-determined amount of time. The timer starts from the moment that the notebook is started.

![Auto-shutdown timer](https://docs.digitalocean.com/screenshots/paperspace/gradient/autoshutdown-timer.6bb220789c68cf12414239372ecb17bfc7797187a90640862dbdf4958784ffe8.gif)

When a notebook is running, the amount of time remaining until auto-shutdown is displayed in the **Instance** tab.

![Duration remaining on the auto-shutdown timer](https://docs.digitalocean.com/screenshots/paperspace/gradient/auto-shutdown-example.c70b777845bb26cbf96104ef30438c2a810c1cef61d7da5c3c5fe20e928953f5.png)

It is currently not possible to alter the auto-shutdown interval of a running notebook after it has been set.

In this article...

- [Swapping Machines in an Existing Notebook](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/swap-machines/#swapping-machines-in-an-existing-notebook)
- [Unavailable Machines](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/swap-machines/#unavailable-machines)
- [Machine Auto-shutdown](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/swap-machines/#machine-auto-shutdown)

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