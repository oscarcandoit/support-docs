---
url: "https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/"
title: "How to Use Custom Containers in Gradient Deployments | DigitalOcean Documentation"
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
- Use Custom Containers

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Use Custom Containers in Gradient Deployments

Validated on 14 Dec 2023 • Last edited on 14 Nov 2025

Paperspace Deployments are containers-as-a-service that allow you to run container images and serve machine learning models using a high-performance, low-latency service with a RESTful API.

Gradient uses containers to create consistent, reproducible environments for your workloads. Containers define the runtime and dependencies that Gradient uses when running your code.

You can use one of Gradient’s preconfigured containers, a public container image, or your own private image.

## Add a Container Registry

You can store credentials for private container registries in Gradient so they can be reused across your environment.

In the [Gradient console](https://cloud.digitalocean.com/), in the top-right corner, click your profile image, select **Team Settings**, and then click the **Containers** tab.

From the **Containers** page, you can add, edit, or delete registry connections.

![The Containers tab in team settings](https://docs.digitalocean.com/screenshots/paperspace/gradient/main-container-registry.bd855cf1d8c011b572865ce7c70a770cd8d03134909bd1723127df44eb0c3bf5.png)

### Create a Container Registry Connection

To create a registry connection, click **Add Registry**, select the registry type, and then type the required credentials for that registry.

![New Container Registry form](https://docs.digitalocean.com/screenshots/paperspace/gradient/container-registry-entry.9bb96ae266a2017dc7b29bce394cee49c464b2e812b8d99dcd11e50f348abf01.png)

After saving, you can reference the registry by name in your configuration file or container spec.

### Configure Container Registry

The following examples show how to connect different container registries to Gradient. Each example outlines the credentials required for that registry and how to reference the registry name in your container configuration.

DigitalOcean Container Registry

If your image is stored at `registry.digitalocean.com/your-registry-name/image:tag`, type your container registry information like this:

- **Display name:**`My-Example-DO-Registry`
- **Registry name:**`your-registry-name`
- **API token:** Your DigitalOcean API token

Then, reference it in your configuration like this:

```yaml
image: registry.digitalocean.com/your-registry-name/image:tag
containerRegistry: My-Example-DO-Registry
```

Docker Hub

If your image is at `example-repository/streamlit-app:latest`, type your container registry information like this:

- **Display name:**`My-Example-DockerHub-Repository`
- **Namespace:**`example-repository`
- **Username:** Your Docker Hub username
- **Password:** Your Docker Hub password

Then, reference it in your configuration like this:

```yaml
image: example-repository/streamlit-app:latest
containerRegistry: My-Example-DockerHub-Repository
```

Learn more about [Docker registries](https://docs.docker.com/get-started/overview/#docker-registries).

Google Container Registry (GCR)

If your image is at `us-west1-docker.pkg.dev/project-name/repo-name/image:tag`, type your container registry information like this:

- **Display name:**`My-Example-GCR`

- **Region:**`us-west1`

- **Project:**`project-name`

- **JSON Key:** Your service account JSON key

For reference, see [GCR authentication docs](https://cloud.google.com/container-registry/docs/advanced-authentication#json-key).


Then, reference it in your configuration like this:

```yaml
image: us-west1-docker.pkg.dev/project-name/repo-name/image:tag
containerRegistry: My-Example-GCR
```

GitHub Container Registry (GHCR)

If your image is at `ghcr.io/example-org/streamlit-app:latest`, type your container registry information like this:

- **Display name:**`My-Example-GHCR`
- **Organization:**`example-org`
- **Email:** GitHub account email
- **Password:** Personal access token

Then, reference it in your configuration like this:

```yaml
image: ghcr.io/example-org/streamlit-app:latest
containerRegistry: My-Example-GHCR
```

Other (for Azure or generic registries)

If your image is at `example-registry.azurecr.io/streamlit-app:latest`, type your container registry information like this:

- **Display name:**`My-Example-ACR`

- **Registry URL:**`https://example-registry.azurecr.io`

- **Namespace:**`/`

- **Username:**`_json_key`

- **Password:** Azure Service Principal ID

For reference, see [Azure docs](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-auth-service-principal#create-a-service-principal).


Then, reference it in your configuration like this:

```yaml
image: example-registry.azurecr.io/streamlit-app:latest
containerRegistry: My-Example-ACR
```

### Use Your Container

You can specify a container image directly in your YAML spec to define the runtime environment.

For example, to use a public TensorFlow container:

```yaml
image: tensorflow/tensorflow:2.7.0-gpu-jupyter
```

Gradient then automatically pulls and manages the image for you.

## Build a Custom Container

You can build a custom Docker container and push it to a container registry, such as Docker Hub, DigitalOcean Container Registry, or NGC, for use in Gradient. Custom containers let you define the exact runtime, dependencies, and environment needed for your workloads.

Tip
You don’t need to build a container from scratch. Many ready-to-use images are available on [Docker Hub](https://hub.docker.com/) and [NGC](https://ngc.nvidia.com/catalog/landing). You can use these as a starting point or modify an existing image to suit your requirements.

Before you use a custom container, you need to [create a machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/) with [Docker CE](https://github.com/docker/docker-ce), [NVIDIA Docker](https://github.com/NVIDIA/nvidia-docker), and NVIDIA drivers installed. These tools ensure your image is compatible with the GPU runtimes and dependencies that Gradient uses when running containers.

If your local environment doesn’t meet these requirements, you can use a [Paperspace Linux-based machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/) instead.

### Access Your Docker Hub

To access your Docker Hub, run the following command with your Docker Hub credentials like this:

```shell
docker login -u <username> -p <password>
```

### Create a Dockerfile

After accessing your Docker Hub, create a Dockerfile to define your container’s environment, dependencies, and startup commands like this:

```shell
git clone https://github.com/gradient-ai/tensorflow-python
cd tensorflow-python
```

In this example, the image is a Paperspace-built TensorFlow 2.0 container optimized for GPU workloads.

You can modify the Dockerfile to include any additional dependencies or setup steps your application requires.

### Build the Image

In the same directory as your Dockerfile, build your image with the following command:

```shell
docker build -t test-container .
```

Then, tag your image before pushing it to a registry like this:

```shell
docker tag test-container <docker-username>/test-container:latest
```

### Push the Image

To push the image to your container registry, run the following command:

```shell
docker push <docker-username>/test-container:latest
```

### Reference Your Custom Container

After your container is pushed to a registry, reference it in your configuration file or container spec like this:

```yaml
image: <docker-username>/test-container:latest
containerRegistry: <your-registry-name>
```

Gradient then automatically pulls and runs the container in your environment.

Note
Private containers require registry credentials to be stored in Gradient before use.

### Bring Your Custom Container to Deployments

You can deploy custom containers in Gradient to serve models, APIs, or applications.

When defining your Deployment spec:

- For **public images**, specify the image path using the `image` key.



```yaml
image: tensorflow/tensorflow:2.7.0-gpu-jupyter
```

- For **private images**, specify both the `image` and `containerRegistry` keys to reference your stored registry credentials.



```yaml
image: registry.digitalocean.com/example-registry/my-image:latest
containerRegistry: My-Example-DO-Registry
```


The value of `containerRegistry` must match the name of the registry connection you created in the **Create a Registry Connection** section above.

Custom containers let you define exactly how your Deployment environment behaves (from framework versions to dependency management), ensuring consistency across builds and updates.

In this article...

- [Add a Container Registry](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/#add-a-container-registry)
  - [Create a Container Registry Connection](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/#create-a-container-registry-connection)
  - [Configure Container Registry](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/#configure-container-registry)
  - [Use Your Container](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/#use-your-container)
- [Build a Custom Container](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/#build-a-custom-container)
  - [Access Your Docker Hub](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/#access-your-docker-hub)
  - [Create a Dockerfile](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/#create-a-dockerfile)
  - [Build the Image](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/#build-the-image)
  - [Push the Image](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/#push-the-image)
  - [Reference Your Custom Container](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/#reference-your-custom-container)
  - [Bring Your Custom Container to Deployments](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/#bring-your-custom-container-to-deployments)

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