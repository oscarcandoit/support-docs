---
url: "https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/"
title: "How to Manage Workflows with the Paperspace GUI and CLI | DigitalOcean Documentation"
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
- Manage Workflows

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage Workflows with the Paperspace GUI and CLIprivate

Validated on 14 Dec 2023 • Last edited on 1 Aug 2024

Workflows automate machine learning tasks, combining GPU instances with an expressive syntax to generate production-ready machine learning pipelines with a few lines of code.

Using the Paperspace GUI and CLI, you can [create new Workflows](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/#create-a-workflow), [import existing ones](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/#import-a-workflow), and [run them](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/#run-a-workflow).

## Create a Workflow

A new workflow may be created via the Gradient console or via the Gradient CLI. The simplest way to create a new workflow is to use the templates available in the console.

### How to create a workflow in the Gradient console

The first step is to create a new project in Gradient or select an existing project.

Next, navigate to the **Workflows** tab and choose one of the starter tiles in the **Select a template** section.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/workflow-create.f732df50b1d1683c6473f7f5cd1aebb7bf12dcc5c7c6592dedacd6127e98da15.png)

In the **Select account or organization** section, connect this workflow to GitHub. The GitHub connection is required to run a workflow because it allows Gradient to trigger workflow runs when new code is pushed to the repository, thus providing the basis for CI/CD.

All that remains is to give the workflow a name in the **Repository name** section. Select **Create workflow** to get started.

### How to create a workflow in the CLI

It is also possible to create a workflow using the [Gradient CLI](https://docs.digitalocean.com/reference/paperspace/gradient/).

The first step is to make sure the CLI is up to date by running the following command:

```bash
pip install -U gradient
```

The next step is to create a project and grab your project ID. The project ID is available in the tile that contains the project in the Gradient console. You can create a project that integrates with a GitHub repo or a create a standalone project. Use a GitHub project if you already have code you are working with in GitHub.

Now it’s time to run a workflow using the CLI:

```bash
gradient workflows create --name <my-workflow-name> --projectId <project-id>
```

The command returns an ID for the workflow, for example, `7634c165-5034-4f49-95fa-005fc0e7970b` and the new workflow should now be visible in the Gradient console.

## Import a Workflow

To import an existing Gradient repository, head to the Gradient console, select the **Workflows** tab, and create a new workflow.

Next, select the text link that says **Import an existing gradient repository** and select an existing Gradient project from GitHub.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/import-workflow.64b4a0d1771d6321ee0022c20583072559c9c521fcc6d14f30191828d0376541.gif)

This takes you to the **Let’s create a Workflow** screen, where you can follow its instructions to create one, or run an existing workflow.

## Run a Workflow

You can run Workflows by triggering them to run by making a change to your linked GitHub repository or by invoking them directly using the command line.

### How to run a workflow in the GUI

You can trigger Workflows to run from Gradient by placing them in the `.gradient/workflows` directory in your linked repository. Create this directory if it does not exist.

Within the Workflow YAML, the `on:` field is used to indicate that this Workflow is to be triggered to run when the given conditions are met. For the general case of any change to the repo triggering the Workflow to run, the YAML lines are:

```yaml
on:
  github:
    branches:
      only: main
```

Currently, this is the condition set that works, so to prevent a Workflow being triggered, comment the lines out.

### How to run a workflow in the CLI

Run the Workflow with the specified Workflow spec file and the `workflow-id` from the previously created Workflow. (You can also get a list of Workflows by running `gradient workflows list`.)

```bash
gradient workflows run \
    --id <workflow-id> \
    --path ./workflow.yaml
```

A Workflow can be run multiple times, each with the same or a different Workflow YAML spec. The Workflow spec is recorded as part of the Workflow run so you can distinguish different runs.

The next sections cover the syntax for authoring new Workflow specs, inputs and outputs to Workflow steps, and various Workflow actions.

![](https://docs.digitalocean.com/images/icons/ml.svg)

Gradient API, CLI, and SDK Reference

Install and use the Gradient Command Line Interface to manage Notebooks, Deployments, and Workflows programmatically.

In this article...

- [Create a Workflow](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/#create-a-workflow)
  - [How to create a workflow in the Gradient console](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/#how-to-create-a-workflow-in-the-gradient-console)
  - [How to create a workflow in the CLI](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/#how-to-create-a-workflow-in-the-cli)
- [Import a Workflow](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/#import-a-workflow)
- [Run a Workflow](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/#run-a-workflow)
  - [How to run a workflow in the GUI](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/#how-to-run-a-workflow-in-the-gui)
  - [How to run a workflow in the CLI](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/#how-to-run-a-workflow-in-the-cli)

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