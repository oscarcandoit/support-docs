---
url: "https://docs.digitalocean.com/products/paperspace/workflows/concepts/understanding-io/"
title: "Understanding Inputs & Outputs | DigitalOcean Documentation"
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
- [Concepts](https://docs.digitalocean.com/products/paperspace/workflows/concepts/)
- Inputs and Outputs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Understanding Inputs & Outputsprivate

Validated on 14 Dec 2023 • Last edited on 25 Oct 2024

Workflows automate machine learning tasks, combining GPU instances with an expressive syntax to generate production-ready machine learning pipelines with a few lines of code.

A Gradient Workflow is composed of a series of steps. These steps specify how to orchestrate computational tasks. Each step can communicate with other steps through what are known as `inputs` and `outputs`.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/example-step-in-dag.3afae4912bd406bf6ffcf414e783d0e9da0993f8651f94a210173cb39d5564bc.png)

There are three types of inputs and outputs:

- Datasets
- Volumes
- Strings

## Datasets

The dataset type leverages the Gradient platform native [dataset](https://docs.digitalocean.com/products/paperspace/machines/) primitive. Information stored within datasets is not limited to any single type of data. In fact, a generic dataset can include anything from pre-trained models to generated images to configuration files. Inherent to datasets is the notion of versions. Workflows can consume and produce new dataset versions as well as tag new versions of existing datasets.

Note
Datasets must be defined in advance of being referenced in a workflow. See [Create Datasets for the Workflow](https://docs.digitalocean.com/products/paperspace/workflows/how-to/create-datasets/) for more information.

To consume a dataset that already exists within Gradient, use the following YAML:

```yaml
inputs:
  my-dataset:
    type: dataset
    with:
      ref: my-dataset-id
```

To generate a new dataset version from a Workflow step, use the following YAML:

```yaml
my-job:
  uses: container@v1
  with:
    args:
      - bash
      - "-c"
      - cp -R /my-trained-model /outputs/my-dataset
    image: bash:5
  outputs:
    my-dataset:
      type: dataset
      with:
        ref: my-dataset-id
```

`my-dataset-id` can be the actual ID of the dataset, a 15 character string that looks like `def123ghi456jkl` (or appended with a version ID too), or a name for the dataset.

## Volumes

Unlike, for example, GitHub Actions, it is likely that multiple Gradient Steps/Actions execute on multiple machines. To facilitate the passing of data between these nodes, Gradient Actions expose the notion of volumes and volume passing.

Volumes enable actions such as the git-checkout action. Volumes can be defined as input volumes or output volumes or both. When a volume is an `output` it is mounted in `/outputs` and is writeable. When a volume is an `input` it is mounted in `/inputs` and is read only.

Note
Volumes are limited to 5GB of data currently. If you need more space, we recommend using Datasets.

To define an output volume, use the following YAML:

```yaml
outputs:
  my-volume:
    type: volume
```

This YAML creates a volume as an output and then uses it as an input in a subsequent job step:

```yaml
defaults:
  resources:
    instance-type: P4000

jobs:
  job1:
    uses: container@v1
    with:
      args:
        - bash
        - -c
        - echo hello > /outputs/my-volume/testfile1; echo "wrote testfile1 to volume"
      image: bash
    outputs:
      my-volume:
        type: volume
  job2:
    needs:
      - job1
    uses: container@v1
    with:
      args:
        - bash
        - -c
        - cat /inputs/my-volume/testfile1
      image: bash
    inputs:
      my-volume: job1.outputs.my-volume
```

Warning
You currently cannot use Volumes as an output after the job that created them ends.

## Strings

In some cases, you may need to pass a single value between Workflow steps. The string type makes this possible.

To pass the string as a workflow-level input, use the following YAML:

```yaml
inputs:
  my-string:
    type: string
    with:
      value: "my string value"

jobs:
  job-1:
    resources:
      instance-type: P4000
    uses: container@v1
    with:
      args:
        - bash
        - -c
        - cat /inputs/my-string
      image: bash:5
    inputs:
      my-string: workflow.inputs.my-string
```

To pass a string between job steps, use the following YAML:

```yaml
defaults:
  resources:
    instance-type: P4000

jobs:
  job-1:
    uses: container@v1
    with:
      args:
        - bash
        - -c
        - echo "string output from job-1" > /outputs/my-string; echo job-1 finished
      image: bash:5
    outputs:
      my-string:
        type: string
  job-2:
    uses: container@v1
    with:
      args:
        - bash
        - -c
        - cat /inputs/my-string
      image: bash:5
    needs:
      - job-1
    inputs:
      my-string: job-1.outputs.my-string
```

To create a model from a dataset and pass the model ID as a string to a [Deployment](https://docs.digitalocean.com/products/paperspace/deployments/) step, you first need to:

1. Create a dataset named `test-model` and upload valid TensorFlow model files to it.
2. Define a secret named `MY_API_KEY` with your gradient-cli api-key.
3. Substitute your `clusterId` in the deployment create step.

Then, use the following YAML:

```yaml
defaults:
  resources:
    instance-type: P4000

jobs:
  UploadModel:
    uses: create-model@v1
    with:
      name: my-model
      type: Tensorflow
    inputs:
      model:
        type: dataset
        with:
          ref: test-model
    outputs:
      model-id:
        type: string
  DeployModel:
    needs:
      - UploadModel
    inputs:
      model-id: UploadModel.outputs.model-id
    env:
      PAPERSPACE_API_KEY: secret:MY_API_KEY
    uses: container@v1
    with:
      command: bash
      args:
        - -c
        - >-
          gradient deployments create
          --clusterId cl1234567
          --deploymentType TFServing
          --modelId $(cat inputs/model-id)
          --name "Sample Deployment"
          --machineType P4000
          --imageUrl tensorflow/serving:latest-gpu
          --instanceCount 1
      image: paperspace/gradient-sdk
```

In this article...

- [Datasets](https://docs.digitalocean.com/products/paperspace/workflows/concepts/understanding-io/#datasets)
- [Volumes](https://docs.digitalocean.com/products/paperspace/workflows/concepts/understanding-io/#volumes)
- [Strings](https://docs.digitalocean.com/products/paperspace/workflows/concepts/understanding-io/#strings)

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