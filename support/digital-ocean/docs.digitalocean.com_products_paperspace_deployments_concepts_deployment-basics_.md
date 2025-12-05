---
url: "https://docs.digitalocean.com/products/paperspace/deployments/concepts/deployment-basics/"
title: "Deployment Basics | DigitalOcean Documentation"
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
- [Concepts](https://docs.digitalocean.com/products/paperspace/deployments/concepts/)
- Deployment Basics

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Deployment Basics

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Paperspace Deployments are containers-as-a-service that allow you to run container images and serve machine learning models using a high-performance, low-latency service with a RESTful API.

## Overview

Gradient Deployments are containers-as-a-service without the hassle and boilerplate of Kubernetes. Deployments allow you to run container images and serve machine learning models using a high-performance, low-latency service with a RESTful API. Deployments are defined by a spec and can be managed through the [web console](https://console.paperspace.com/) or [CLI/SDK](https://docs.digitalocean.com/reference/paperspace/gradient/).

A deployment may be running multiple replicas at a time. Each request that is sent to the deployment endpoint is sent to a load balancer which directs traffic to the active replicas running on the deployment.

A deployment can be updated by changing the spec. Each new spec update generates a new `spec_id` under the same `deployment_id`. Previous versions of the deployment spec can be viewed under the deployment objects history.

The best place to start learning how to deploy models on Gradient is the official [Gradient Deployments Tutorial](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/).

## Deployment Basics

### Containers

A deployment may be running one or more containers. In Paperspace apps, the number of containers running at any given time is referred to as the number of replicas. Replicas are scaled up and down based on your app configuration.

A deployment’s containers run the Docker image set in your configuration. This image is pulled from a registry and run on a Paperspace machine. Deployments can pull from both public or [private repositories](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/).

Each container has its own logs and metrics reported to the Paperspace Web Console and Web API.

### Scaling

Deployments can be configured to [autoscale](https://docs.digitalocean.com/products/paperspace/deployments/reference/autoscaling/) based on CPU, memory usage, or request duration. You may also set a minimum and maximum number of replicas.

Alternatively, you can manually scale your deployment to a specific number of replicas.

### Endpoint

Every deployment has a public endpoint that can be accessed over the internet. The endpoint resolves to a load balancer which distributes traffic to your containers.

### Integrations

Integrations are a way to connect your app to other services. For example, you can mount volumes, models, and repositories to your containers.

### Health Checks

Health checks provide robust checks to run at a specified cadence that monitor the status of each replica in the deployment. When a replica enters an unhealthy state, traffic to that replica is stopped, the replica restarted, and traffic to resume once the replica is deemed healthy.

### Machines

Gradient Deployments can be run on the available [Gradient machines](https://docs.digitalocean.com/products/paperspace/notebooks/details/pricing/). However, Free-tier machines are not available for deployments.

In this article...

- [Overview](https://docs.digitalocean.com/products/paperspace/deployments/concepts/deployment-basics/#overview)
- [Deployment Basics](https://docs.digitalocean.com/products/paperspace/deployments/concepts/deployment-basics/#deployment-basics)
  - [Containers](https://docs.digitalocean.com/products/paperspace/deployments/concepts/deployment-basics/#containers)
  - [Scaling](https://docs.digitalocean.com/products/paperspace/deployments/concepts/deployment-basics/#scaling)
  - [Endpoint](https://docs.digitalocean.com/products/paperspace/deployments/concepts/deployment-basics/#endpoint)
  - [Integrations](https://docs.digitalocean.com/products/paperspace/deployments/concepts/deployment-basics/#integrations)
  - [Health Checks](https://docs.digitalocean.com/products/paperspace/deployments/concepts/deployment-basics/#health-checks)
  - [Machines](https://docs.digitalocean.com/products/paperspace/deployments/concepts/deployment-basics/#machines)

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