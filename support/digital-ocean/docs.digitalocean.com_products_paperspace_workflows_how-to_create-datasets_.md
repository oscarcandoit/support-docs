---
url: "https://docs.digitalocean.com/products/paperspace/workflows/how-to/create-datasets/"
title: "How to Create Datasets for Gradient Workflows | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/workflows.3b7ab56ba05e74ff45c932896583f0781174b87ebd9e2feb4560ab9be20c2bb9.svg)Workflowsprivate](https://docs.digitalocean.com/products/paperspace/workflows/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/)
    - [Set Up Your First Workflow](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/workflows/how-to/)
    - [Manage Workflows](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/)
    - [Create Datasets](https://docs.digitalocean.com/products/paperspace/workflows/how-to/create-datasets/)
    - [Use Custom Containers](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-containers/)
    - [Connect to GitHub App](https://docs.digitalocean.com/products/paperspace/workflows/how-to/connect-to-github-app/)
    - [Use Model Repository](https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/workflows/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
    - [Workflow Spec](https://docs.digitalocean.com/products/paperspace/workflows/reference/workflow-spec/)
    - [Gradient Actions](https://docs.digitalocean.com/products/paperspace/workflows/reference/gradient-actions/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/workflows/concepts/)
    - [Environment Variables](https://docs.digitalocean.com/products/paperspace/workflows/concepts/environment-variables/)
    - [Inputs and Outputs](https://docs.digitalocean.com/products/paperspace/workflows/concepts/understanding-io/)
    - [Using YAML for Data Science](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/)
  - [Details](https://docs.digitalocean.com/products/paperspace/workflows/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/workflows/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/workflows/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/workflows/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/workflows/details/limits/)
  - [Support](https://docs.digitalocean.com/products/paperspace/workflows/support/)

- [Workflows](https://docs.digitalocean.com/products/paperspace/workflows/)
- [How-Tos](https://docs.digitalocean.com/products/paperspace/workflows/how-to/)
- Create Datasets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Datasets for Gradient Workflowsprivate

Validated on 14 Dec 2023 • Last edited on 13 Feb 2024

Workflows automate machine learning tasks, combining GPU instances with an expressive syntax to generate production-ready machine learning pipelines with a few lines of code.

Datasets referenced in the workflows spec need to be created before running the workflow for the first time. On subsequent runs of the workflow the dataset is reused, but this creates different Dataset versions for each output Dataset.

For more information about Datasets see [Versioned Data](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-architecture/).

The above Workflow creates a new output Dataset version in the Dataset named `demo-dataset`. So before running this Workflow make sure a Dataset with that name already exists. You can run this command to list your Datasets: `gradient datasets list`.

If you are not accustomed to creating datasets, we recommend our [Workflows Tutorial](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/). You can also brush up on datasets by [visiting how to create a dataset and dataset version in the GUI](https://docs.digitalocean.com/products/paperspace/workflows/how-to/create-datasets/#dataset-creation-in-the-gui).

Here is the short way to create a dataset. First, get a list of storage providers that are already part of your account. You should have at least one called Gradient Managed.

```bash
gradient storageProviders list
+------------------+-----------------+------+------------------------------------------+
| Name             | ID              | Type | Config                                   |
+------------------+-----------------+------+------------------------------------------+
| Gradient Managed | splXXXXXXXXXXXX | s3   | accessKey: XXXXXXXXXXXXXXXXXXXX          |
|                  |                 |      | bucket: XXXXXXXXX                        |
|                  |                 |      | endpoint: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX |
|                  |                 |      | secretAccessKey: ********                |
+------------------+-----------------+------+------------------------------------------+
```

Then, create a dataset named demo-dataset using the Gradient Managed storage provider ID:

```bash
gradient datasets create \
  --name demo-dataset \
  --storageProviderId splXXXXXXXXXXXX
```

Datasets with other names can be created similarly. The dataset name should match the name referred to in the YAML. Datasets can also be referred to directly by their IDs, but names are usually more convenient, unless a specific Dataset version needs to be referenced.

## Dataset creation in the GUI

To create a new dataset (one that does not yet have an ID) in the GUI, go to the Data tab in your team’s page and click “Create a Dataset”. This brings up a window to give it a name, optional description, and select the storage provider to create it on.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/create-new-dataset-page.87ab3356bbb157286ad7c988c616cef8ffa34595ca618ca8d3468142fd4f44d5.png)

If the team already has datasets, there is a similar **Add** button. The resulting screen after creation allows you to upload files, or you can retrieve the dataset ID for use elsewhere.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/import-a-dataset.9145ce542ea63ed3356963364ee95a080da6e6c66f8ec25da710cb76d73ee6e3.png)

Importing data, or adding it in some other way such as a Workflow output, creates a new version of the dataset.

Datasets can also be created from the Notebook IDE through the Datasets tab.

In this article...

- [Dataset creation in the GUI](https://docs.digitalocean.com/products/paperspace/workflows/how-to/create-datasets/#dataset-creation-in-the-gui)

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