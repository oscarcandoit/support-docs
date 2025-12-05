---
url: "https://docs.digitalocean.com/products/paperspace/workflows/reference/gradient-actions/"
title: "Gradient Actions | DigitalOcean Documentation"
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
- Gradient Actions

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Gradient Actionsprivate

Validated on 14 Dec 2023 • Last edited on 13 Feb 2024

Workflows automate machine learning tasks, combining GPU instances with an expressive syntax to generate production-ready machine learning pipelines with a few lines of code.

Gradient Actions are composable building blocks for creating reproducible machine learning Workflows.

Actions use the `uses` and `with` syntax to specify how a job step executes.

## container

```yaml
uses: container@v1
with:
  image: bash:5
  args: ["echo", "hello", "world"]
```

The Gradient Action called `container@v1` allows you to use an arbitrary Docker container image (in this case the lightweight `bash` container image) and pass arguments directly to it.

## script

```yaml
uses: script@v1
with:
  script: |-
    echo 'hello world'
    echo $RANDOM
  image: bash:5
```

If you want to run multiple commands, the `script@v1` action allows you to pass a `script` in a [literal-style HereDoc](https://lzone.de/cheat-sheet/YAML#yaml-heredoc-multiline-strings) denoted by `|-`. The pipe character preserves newlines and the dash removes extra newlines after the block.

Note
The image you provide needs to have `bash` available in its PATH.

## git-checkout

```yaml
outputs:
  repo:
    type: volume
uses: git-checkout@v1
with:
  url: https://github.com/user/my-public-repo
  ref: 46aa59d6ecc3720ffe2454a6d9d360e6ce75acce # Optional git ref
  path: /outputs/repo # Optional, defaults to exactly one output volume or dataset
```

In this example, the Gradient Action `git-checkout@v1` clones the public GitHub URL `https://github.com/user/my-public-repo` at `ref 46aa...` into a volume named repo. The cloned files are accessible at `/outputs/<output-name>` (in this case, `/outputs/repo`), and subsequent jobs that specify the checkout job’s volume as an input can also access the repository files as read-only at `/inputs/<input-name>`.

```yaml
inputs:
  repo: checkout-job.outputs.repo
uses: container@v1
with:
  image: busybox
  args: ["ls", "/inputs/repo"]
```

To clone a private repository, add your username as a parameter, set a [Gradient secret](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/) with a [GitHub access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) value, and add a password parameter:

```yaml
outputs:
  repo:
    type: volume
uses: git-checkout@v1
with:
  url: https://github.com/user/my-private-repo
  username: paperspace
  password: secret:MY_SECRET_NAME
```

You can also use `path` to pick an output target:

```yaml
outputs:
  repo:
    type: volume
  ds:
    type: dataset
    with:
      ref: my-dataset
uses: git-checkout@v1
with:
  url: https://github.com/user/my-public-repo
  ref: 46aa59d6ecc3720ffe2454a6d9d360e6ce75acce # Optional git ref
  path: /outputs/repo/subfolder
```

## s3-download

```yaml
outputs:
  s3:
    type: volume
uses: s3-download@v1
with:
  url: s3://bucket/path/
  access-key: MYACCESSKEY
  secret-access-key: secret:MY_SECRET_NAME
```

The `s3-download@v1` Gradient Action copies the contents of an Amazon S3 bucket into an output (in this example, the volume is named `s3`). Subsequent jobs that specify an input that reference the `s3-download` job’s volume output can access the downloaded files within that job at `/inputs/<input-name>`.

Note`access-key` and `secret-access-key` are required parameters, and the latter must be a [Gradient secret](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/). Optional parameters include `region` (for AWS buckets), `endpoint` (for non-AWS buckets), and `path` (to disambiguate target outputs or to download to a subfolder).

## model-create

```yaml
inputs:
  model:
    type: dataset
    with:
      ref: dsr8k5qzn401lb5:klfoyy9 # Example dataset ref
outputs:
  model-id:
    type: string
uses: create-model@v1
with:
  name: my-model-name
  type: Tensorflow # Tensorflow, ONNX, or Custom
```

In this example, the `create-model@v1` action takes a dataset input named `model` and outputs a string ID (named `model-id`) that references a [Gradient model](https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/). With this reference, the created model can be tested, edited, or deployed in future jobs.

In this article...

- [container](https://docs.digitalocean.com/products/paperspace/workflows/reference/gradient-actions/#container)
- [script](https://docs.digitalocean.com/products/paperspace/workflows/reference/gradient-actions/#script)
- [git-checkout](https://docs.digitalocean.com/products/paperspace/workflows/reference/gradient-actions/#git-checkout)
- [s3-download](https://docs.digitalocean.com/products/paperspace/workflows/reference/gradient-actions/#s3-download)
- [model-create](https://docs.digitalocean.com/products/paperspace/workflows/reference/gradient-actions/#model-create)

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