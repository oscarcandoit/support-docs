---
url: "https://docs.digitalocean.com/products/paperspace/workflows/reference/workflow-spec/"
title: "Workflow Spec Reference | DigitalOcean Documentation"
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
- [Reference](https://docs.digitalocean.com/products/paperspace/workflows/reference/)
- Workflow Spec

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Workflow Spec Referenceprivate

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Workflows automate machine learning tasks, combining GPU instances with an expressive syntax to generate production-ready machine learning pipelines with a few lines of code.

A Workflow Spec is a YAML list of jobs that is converted into an Argo template and run on the Gradient distributed runtime engine.

## Key Concepts

- `defaults`: At the top of the YAML Workflow file, you can specify default parameters to be used throughout the entire Workflow. This includes environment variables and default machine instance configuration. Instances can also be specified per-job.

- `inputs`: The `inputs` block allows you to specify named inputs (for example, a [versioned dataset](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-architecture/) to be referenced and consumed by your jobs). You can also collect inputs in a separate YAML and reference this file as an `inputPath` when creating a Workflow run. Workflow and job-level inputs can be of type: dataset (a persistent, versioned collection of data), string (for example, a generated value or ID that may be output from another job) or volume (a temporary workspace mounted onto a job’s container). Datasets must be defined in advance of being referenced in a workflow. See [Create Datasets for the Workflow](https://docs.digitalocean.com/products/paperspace/workflows/how-to/create-datasets/) for more information.

- `jobs`: Jobs are also sometimes referred to as “steps” within the Gradient Workflow. A job is an individual task that executes code (such as a training a machine learning model) and can consume inputs and produce outputs.


## Example Workflow Spec

To run this Workflow, define datasets named `test-one`, `test-two`, and `test-three` as described in the [Create Datasets for the Workflow](https://docs.digitalocean.com/products/paperspace/workflows/how-to/create-datasets/) documentation. Also, to make use of the secret named `hello` in the inputs section, define a [secret](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/).

```yaml
defaults:
  # clusterId defaults to the NY2 public cluster, setting this parameter this is equaivalent to using the `--clusterId` flag on the command line.
  # This parameter often used for github triggered workflows running on private clusters.
  clusterId: clusterId
  # Default environment variables for all jobs. Can use any supported
  # substitution syntax (named secrets, ephemeral secrets, etc.).
  env:
    # This environment variable uses a Gradient secret called "hello".
    HELLO: secret:hello
  # Default instance type for all jobs
  resources:
    instance-type: P4000
    container-registries: # optional
      - my-registry

# Workflow takes two inputs, neither of which have defaults. This means that
# when the Workflow is run the corresponding input for these values are
# required, for example:
#
# {"inputs": {"data": {"id": "test-one"}, "echo": {"value": "hello world"}}}
#
inputs:
  data:
    type: dataset
    with:
      ref: test-one
  echo:
    type: string
    with:
      value: "hello world"
jobs:
  job-1:
    # These are inputs for the "job-1" job; they are "aliases" to the
    # Workflow inputs.
    #
    # All inputs are placed in the "/inputs/<name>" path of the run
    # containers. So for this job you would have the paths "/inputs/data"
    # and "/inputs/echo".
    inputs:
      # The "/inputs/data" directory would contain the contents for the dataset
      # version. ID here refers to the name of the dataset, not its dataset ID.
      data: workflow.inputs.data
      # The "/inputs/echo" file would contain the string of the Workflow input
      # "echo".
      echo: workflow.inputs.echo
    # These are outputs for the "job-1" job.
    #
    # All outputs are read from the "/outputs/<name>" path.
    outputs:
      # A directory will automatically be created for output datasets and
      # any content written to that directory will be committed to a newly
      # created dataset version when the jobs completes.
      data2:
        type: dataset
        with:
          id: test-two
      # The container is responsible creating the file "/outputs/<name>" with the
      # content being a small-ish utf-8 encoded string.
      echo2:
        type: string
    # Set job-specific environment variables
    env:
      TSTVAR: test
    # Set action
    uses: container@v1
    # Set action arguments
    with:
      args:
        - bash
        - -c
        - find /inputs/data > /outputs/data2/list.txt; echo ENV $HELLO $TSTVAR > /outputs/echo2; cat /inputs/echo; echo; cat /outputs/data2/list.txt /outputs/echo2
      image: bash:5
  job-2:
    inputs:
      # These inputs use job-1 outputs instead of Workflow inputs. You must
      # specify job-1 in the needs section to reference them here.
      data2: job-1.outputs.data2
      echo2: job-1.outputs.echo2
    outputs:
      data3:
        type: dataset
        with:
          ref: test-three
    # List of job IDs that must complete before this job runs
    needs:
      - job-1
    uses: container@v1
    with:
      args:
        - bash
        - -c
        - wc -l /inputs/data2/list.txt > /outputs/data3/summary.txt; cat /outputs/data3/summary.txt /inputs/echo2
      image: bash:5
```

Below is an example of a valid `workflow.yaml` spec. It clones the repository from `https://github.com/NVlabs/stylegan2`, generates images from the repo script `run_generator.py`, and outputs the results to the Gradient-managed dataset `demo-dataset`.

```yaml
jobs:
  CloneRepo:
    resources:
      instance-type: C5
    outputs:
      repo:
        type: volume
    uses: git-checkout@v1
    with:
      url: https://github.com/NVlabs/stylegan2.git
  StyleGan2:
    resources:
      instance-type: P4000
    needs:
      - CloneRepo
    inputs:
      repo: CloneRepo.outputs.repo
    outputs:
      generatedFaces:
        type: dataset
        with:
          ref: demo-dataset
    uses: script@v1
    with:
      script: |-
        pip install scipy==1.3.3
        pip install requests==2.22.0
        pip install Pillow==6.2.1
        cp -R /inputs/repo /stylegan2
        cd /stylegan2
        python run_generator.py generate-images \
          --network=gdrive:networks/stylegan2-ffhq-config-f.pkl \
          --seeds=6600-6605 \
          --truncation-psi=0.5 \
          --result-dir=/outputs/generatedFaces
      image: tensorflow/tensorflow:1.14.0-gpu-py3
```

In this article...

- [Key Concepts](https://docs.digitalocean.com/products/paperspace/workflows/reference/workflow-spec/#key-concepts)
- [Example Workflow Spec](https://docs.digitalocean.com/products/paperspace/workflows/reference/workflow-spec/#example-workflow-spec)

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