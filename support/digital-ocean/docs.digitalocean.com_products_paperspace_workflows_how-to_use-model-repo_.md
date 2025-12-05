---
url: "https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/"
title: "How to Use the Gradient Model Repository to Manage Models | DigitalOcean Documentation"
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
- Use Model Repository

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Use the Gradient Model Repository to Manage Modelsprivate

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Workflows automate machine learning tasks, combining GPU instances with an expressive syntax to generate production-ready machine learning pipelines with a few lines of code.

The Gradient Model repository is a hub for importing, managing, and deploying ML models.

You can create Gradient Models in two ways:

- Generating models from your workloads such as Workflows or Notebooks
- [Importing into Gradient](https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/#how-to-create-a-model) by uploading them directly from the Paperspace UI or CLI

Paperspace supports creating the following model formats:

- TensorFlow
- ONNX (Open Neural Network Exchange)
- Custom

Gradient has a repository of models per project. The model repository holds reference to the model artifacts (files generated during training) as well as optional summary metrics associated with the model’s performance such as accuracy and loss.

![Models are available within projects](https://docs.digitalocean.com/screenshots/paperspace/gradient/models-in-console.6f25246cc29eb88406ba83b60e5b81bf72f0c44f95cc13ca3bb671c3a1e2846f.png)

If you are creating a Notebook for the first time, the **Models** section asks you to either **UPLOAD MODEL** or view our documentation.

![No models are created yet within projects](https://docs.digitalocean.com/screenshots/paperspace/gradient/no-models-in-console.91a15e0c127ca26074e83fa7ad998e3ee4153ec98fab68d083e2fe8a99a1d116.png)

## Create a Model

You can use the Paperspace UI or CLI to create a model in Gradient either by running a workload that generates a model or by uploading a model.

### Run a Workload to Generate a Model

You can do this using a [Gradient Action](https://docs.digitalocean.com/products/paperspace/workflows/reference/gradient-actions/) or the [SDK](https://docs.digitalocean.com/reference/paperspace/gradient/). This places your model in your Project’s model repository. For more information, see the [Model CLI/SDK docs](https://paperspace.github.io/gradient-cli/gradient.cli.html#gradient-models).

### Upload a Model

You can upload models in the model repository via the Paperspace UI or CLI.

Paperspace UI

To upload a Model via the Paperspace UI, first navigate to the **Models** page.

From there, click **Upload a Model +**.

![Upload](https://docs.digitalocean.com/screenshots/paperspace/gradient/click-upload.ddb1e1e8b1ace306661a6f3fabc7d881ef7bd3dc0c3d29f183a492d3d8c5f379.png)

This opens up a window to **Upload a Model**, where you can select a model file or directory from your local machine. You also choose the model **Type**, and provide a **Name**, custom **Summary**, and any **Additional Notes** as metadata.

![Upload model](https://docs.digitalocean.com/screenshots/paperspace/gradient/upload-a-model.660ee05d7f144341064941005e15bfb2d0fc83e5dd188d460eab4e96c6ba2c31.png)

Then click **Upload Model**. This uploads and registers the model in Gradient.

CLI

You can upload a model via the CLI with the `gradient models upload` subcommand:

```
gradient models upload downloads/squeezenet1.1.onnx --name squeezenet --modelType ONNX
```

Now that you have a model, read on to learn how you can use it to create a Deployment.

## View Models

You can view your team’s models in the model repository via the Paperspace UI or CLI.

Paperspace UI

In the Paperspace UI, click the **Models** tab to see your list of trained models:

![Models are available within projects](https://docs.digitalocean.com/screenshots/paperspace/gradient/models-in-console.6f25246cc29eb88406ba83b60e5b81bf72f0c44f95cc13ca3bb671c3a1e2846f.png)![Single model card in your models list](https://docs.digitalocean.com/screenshots/paperspace/gradient/single-model-in-list.745558ef3f0f88dc8faf114af195e87c9a0417bf22fa480a40d8467573a41413.png)

The Paperspace UI view shows your model ID, when the model was created, the S3 bucket location of your model, your metrics summary data, the model type, and whether it is currently deployed on Paperspace.

You can click **Deploy Model** to create a deployment with your model. You can also click **Open Detail** to view or download the model’s performance metrics, a list of all of the checkpoint files (artifacts) generated by the final model.

![Expanded Model Details showing model and checkpoint files](https://docs.digitalocean.com/screenshots/paperspace/gradient/model-and-checkpoint-files.9712ae80ea7eea38715d2f9a577bfa8871264b6f9247e172e0eba800ed92fdce.png)

Alternately, you can view your models via the CLI by running `gradient models list`. Currently, the CLI only let’s you view each model in the project space’s ID and name when this is called.

CLI

You can view your models via the CLI by running `gradient models list`.

```text
$ gradient models list

+------+-----------------+------------+------------+
| Name | ID              | Model Type | Project ID |
+------+-----------------+------------+------------+
| None | moilact08jpaok  | Tensorflow | prcl68pnk  |
| None | mos2uhkg4yvga0p | Tensorflow | prcl68pnk  |
| None | moc7i8v6bsrhzk  | Custom     | prddziv0z  |
```

You can use the `--projectId` flag to filter the list by Project ID.

## Modifying Your Model

If you want to rename your model, click your model’s name and type your new model name. If you want to delete the model, it depends on whether your interface is a Paperspace UI or CLI.

### Paperspace Interface

Click the **Models** tab to view your list of trained models. From here, you can delete models by clicking the **Delete** button.

### Paperspace CLI

You can delete a model using the CLI with the following command:

```bash
gradient models delete --id <your-model-id>
```

A model is successfully deleted if it no output is generated after running the command.

## Add Metadata to Models

| Model Type Values | Description |
| --- | --- |
| `"Tensorflow"` | TensorFlow compatible model outputs |
| `"ONNX"` | ONNX model outputs |
| `"Custom"` | Custom model type (for example, a Flask server) |

If you do not specify `modelType`, you can associate custom model metadata with the model by creating a **gradient-model-metadata.json** file in the `modelPath` directory. You can store any valid JSON data in this file.

In this article...

- [Create a Model](https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/#create-a-model)
  - [Run a Workload to Generate a Model](https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/#run-a-workload-to-generate-a-model)
  - [Upload a Model](https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/#upload-a-model)
- [View Models](https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/#view-models)
- [Modifying Your Model](https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/#modifying-your-model)
  - [Paperspace Interface](https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/#paperspace-interface)
  - [Paperspace CLI](https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/#paperspace-cli)
- [Add Metadata to Models](https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/#add-metadata-to-models)

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