---
url: "https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-integrations/"
title: "How to Use Paperspace Integrations | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/deployments.3b7f4d8d82c236b51d91c8becee94bb424055a671131be322532b5d1cd26cc20.svg)Deployments](https://docs.digitalocean.com/products/paperspace/deployments/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/quickstart/)
    - [Deploy Model to Endpoint](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/deployments/how-to/)
    - [Create Deployments](https://docs.digitalocean.com/products/paperspace/deployments/how-to/create-deployments/)
    - [View Logs](https://docs.digitalocean.com/products/paperspace/deployments/how-to/view-deployment-logs/)
    - [View Metrics](https://docs.digitalocean.com/products/paperspace/deployments/how-to/view-deployment-metrics/)
    - [Delete Deployments](https://docs.digitalocean.com/products/paperspace/deployments/how-to/delete-deployments/)
    - [Use Images](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-images/)
    - [Use Integrations](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-integrations/)
    - [Use Secrets](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-secrets/)
    - [Use Custom Containers](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/)
    - [Use GitHub Actions](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-github-action/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/deployments/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
    - [Deployment Spec](https://docs.digitalocean.com/products/paperspace/deployments/reference/deployment-spec/)
    - [Autoscaling](https://docs.digitalocean.com/products/paperspace/deployments/reference/autoscaling/)
    - [Endpoint Security](https://docs.digitalocean.com/products/paperspace/deployments/reference/endpoint-security/)
    - [Health Checks](https://docs.digitalocean.com/products/paperspace/deployments/reference/health-checks/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/deployments/concepts/)
    - [Deployment Basics](https://docs.digitalocean.com/products/paperspace/deployments/concepts/deployment-basics/)
  - [Details](https://docs.digitalocean.com/products/paperspace/deployments/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/deployments/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/deployments/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/deployments/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/deployments/details/limits/)
  - [Support](https://docs.digitalocean.com/products/paperspace/deployments/support/)

- [Deployments](https://docs.digitalocean.com/products/paperspace/deployments/)
- [How-Tos](https://docs.digitalocean.com/products/paperspace/deployments/how-to/)
- Use Integrations

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Use Paperspace Integrations

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Paperspace Deployments are containers-as-a-service that allow you to run container images and serve machine learning models using a high-performance, low-latency service with a RESTful API.

You can establish integrations to connect repositories and storage solutions to your Deployment. Integrations allow you to specify a Git LFS repository or storage bucket details to mount to the deployment replicas.

When you specify an integration, on deployment creation (not on replica spin up), a storage volume is created, the contents of the integration are downloaded and stored in the volume, and the volume is mounted to all replicas in the deployment. This leads to quicker start up times for autoscaling as replicas that are spun up due to autoscaling conditions, and do not need to re-download the contents of the integration.

There are three types of available integrations: `git-lfs`, `s3`, and `do-spaces`.

- `git-lfs` \- Git LFS repos are used for Hugging Face model repositories. Private model repositories need access keys and secret access keys specified.

- `s3` \- S3 buckets or S3 compatible storage. Private S3 buckets need access keys and secret access keys specified.

- `do-spaces` \- DigitalOcean Spaces storage. Private files in DigitalOcean spaces need access keys and secret access keys specified.


To use private storage buckets or repositories, use of access keys are required. Any secret access key must be stored as a Paperspace secret which can be done in the console. To reference a secret value in a deployment spec, use the following syntax `secret:mySecretName`.

## Configure Integrations

Use the following parameters in the deployment spec to configure integrations:

- `integrations`: The overall label used to specify any integrations.

- `type`: The type of integration specified - `git-lfs`, `s3`, and `do-spaces`.
  - `name`: The unique name of the integration

  - `path`: The mount path of the volume containing the integration contents.

  - `url`: The URL to the bucket storage or Git LFS repository.

  - `region`: (s3 only) The region the s3 bucket is located in.

  - `accessKeyId`: (Optional) The access key ID of the storage bucket or private Git LFS repository.

  - `secretAccessKey`: (Optional) The secret access key of the storage bucket or private Git LFS repository.

```yaml
integrations: # List of integrations. Max is 5.
- type: git-lfs # git-lfs integration type
    name: falcon # unique name of the integration
    path: /models/ # the a unique path on the filesystem to mount the integration. In this spec, model files will be located at /models/falcon
    url: https://huggingface.co/tiiuae/falcon-7b # hugging face model url for cloning

- type: s3 # s3 integration type
    name: my-s3-integration
    path: /some/s3/mount/path # In this spec, the contents will be mounted at /some/s3/mount/path/my-s3-integration
    url: s3://my-integration-bucket/
    region: us-east-1
    accessKeyId: AKIAVWO7J5OJSCWRJ3HJ
    secretAccessKey: secret:secretAccessKey # stored as a project or team secret. Naming is arbitrary.
```

In this article...

- [Configure Integrations](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-integrations/#configure-integrations)

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