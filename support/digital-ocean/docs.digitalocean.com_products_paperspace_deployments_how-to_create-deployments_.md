---
url: "https://docs.digitalocean.com/products/paperspace/deployments/how-to/create-deployments/"
title: "How to Create Deployments Using the Paperspace CLI | DigitalOcean Documentation"
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
- Create Deployments

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Deployments Using the Paperspace CLI

Validated on 14 Dec 2023 • Last edited on 23 Jan 2025

Paperspace Deployments are containers-as-a-service that allow you to run container images and serve machine learning models using a high-performance, low-latency service with a RESTful API.

Gradient Deployments can be created in the [web console](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/) or the CLI. When created in the web console, the backend submits a spec file that outlines [specifications](https://docs.digitalocean.com/products/paperspace/deployments/reference/deployment-spec/) for a deployment.

## Create a Deployment using the CLI

You can create deployments using the [Gradient CLI](https://docs.digitalocean.com/reference/paperspace/gradient/) and linking an API key. Learn how to [create an API key](https://docs.digitalocean.com/reference/paperspace/api-keys/). You also need an existing Project to run your deployment.

1. Create a YAML spec as shown below to manage your deployment in any editor.

```yaml
enabled: true
image: lucone83/streamlit-nginx
port: 8080
env:
  - name: ENV
    value: VAR
resources:
  replicas: 1
  instanceType: C4
```

2. Create the deployment.

```bash
gradient deployments create --name [deployment-name] --projectId [project-id] --spec deployment.yaml --apiKey [api-key]
```

3. Check the status of your deployment.

```yaml
gradient deployments get --id [deployment-id] --apiKey [api-key]
```

4. View your running deployment in the [web console](https://console.paperspace.com/). Click the **Deployments** tab and select your deployment.

![Running deployment](https://docs.digitalocean.com/screenshots/paperspace/gradient/running_deployment.a31c8667de31d02d92cf82e23faeb74d3382777ade1077bab66f265b17b60721.png)

### Create an Example Gradient Deployment

Use the CLI to create this example deployment. A credit card on the workspace is necessary and this charges the account until the deployment is turned off.

1. In your favorite editor create a new file called `learn-gradient-deployment.yaml` and add the following code.

```yaml
enabled: true
image: lucone83/streamlit-nginx
port: 8080
env:
  - name: ENV
    value: VAR
resources:
  replicas: 1
  instanceType: C4
```

2. Copy the command below into your terminal. This returns the `deployment id`. [Click here](https://docs.digitalocean.com/reference/paperspace/gradient/) to set up the Gradient CLI.

```bash
gradient deployments create --name learn-gradient-deployment --projectId [projectID] --spec learn-gradient-deployment.yaml --apiKey [api-key]
```

3. Check the deployment status from [the console](https://console.paperspace.com/) or using the CLI with the `deployment id` from the previous step.

```bash
gradient deployments get --id [deployment-id] --apiKey [api-key]
```

4. Stop the deployment by updating `enabled` value to `false` in the spec.

```yaml
enabled: false
image: lucone83/streamlit-nginx
port: 8080
env:
  - name: ENV
    value: VAR
resources:
  replicas: 1
  instanceType: C4
```

5. Update the deployment.

```yaml
gradient deployments update --id deployment-id --spec learn-gradient-deployment.yaml --apiKey [api-key]
```

In this article...

- [Create a Deployment using the CLI](https://docs.digitalocean.com/products/paperspace/deployments/how-to/create-deployments/#create-a-deployment-using-the-cli)
  - [Create an Example Gradient Deployment](https://docs.digitalocean.com/products/paperspace/deployments/how-to/create-deployments/#create-an-example-gradient-deployment)

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