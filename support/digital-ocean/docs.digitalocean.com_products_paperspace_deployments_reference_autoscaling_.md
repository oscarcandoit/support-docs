---
url: "https://docs.digitalocean.com/products/paperspace/deployments/reference/autoscaling/"
title: "Autoscaling Configuration for Gradient Deployments | DigitalOcean Documentation"
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
- [Reference](https://docs.digitalocean.com/products/paperspace/deployments/reference/)
- Autoscaling

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Autoscaling Configuration for Gradient Deployments

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Paperspace Deployments are containers-as-a-service that allow you to run container images and serve machine learning models using a high-performance, low-latency service with a RESTful API.

Autoscale your Deployment to adapt to changes in Deployment metrics. Gradient autoscaling uses the [kubernetes horizontal pod autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/). Some defaults have been chosen to make it easier to quickly scale up and down the deployment.

Autoscaling scales up and down the deployment based on a chosen `metric`, `summary` function and specified `value`. The number of current replicas for each deployment never scales below `replicas` or above `maxReplicas`.

Scale down is calculated on a 5 minute period. This means that if your application is underutilized for 5 minutes, it scales down to the number of replicas required to handle the current load.

To change the autoscaling configuration, update the spec through the Paperspace console or CLI.

## Configure Autoscaling

Use the following parameters in the deployment spec to configure autoscaling:

- `enabled` (default: true): Turn autoscaling on or off.

- `maxReplicas` : The upper bound on the number of replicas that can be run by the deployment. The deployment’s active replicas always fall in the range between the value of `replicas` and `maxReplicas`.

- `metric` \- Sets the metric used to scale up or down.

- `summary` \- Sets the function used to calculate scale events.

- `value` \- The summary number causes the deployment to scale.


### Autoscaling Criteria

Multiple metrics can be used in the spec to determine when to scale. If you provide multiple metric blocks, the deployment calculates a proposed replica counts for each metric, and then scale the instances to the value of the highest replica count.

The following metrics can be used:

| `metric` | `summary` | Description | Type |
| --- | --- | --- | --- |
| `cpu` | average | Average cpu utilization across each replica (% of 100) | Integer |
| `memory` | average | Average memory utilization across each replica (% of 100) | Integer |
| `requestDuration` | average | Average request duration over a 5 minute period across all IPs behind the proxy (seconds). Minimum of 10 milliseconds | Float |

## Autoscaling Example

The following spec configures all metrics available for autoscaling:

```yaml
resources:
  replicas: 1
  ...
  autoscaling:
    enabled: true # toggle for enabling/disabling autoscaling
    maxReplicas: 3 # max replicas for autoscaling
    metrics:
      - metric: cpu
        summary: average
        value: 50 # 50% cpu utilization across all replicas
      - metric: memory
        summary: average
        value: 22 # 22% memory utilization across all replicas
      - metric: requestDuration
        summary: average
        value: 0.15 # 150 millisecond request duration for the endpoint
```

As requests begin to come through, the request duration over a 5 minute period is greater than 150 ms. As a result, the deployment scales up from 1 to 2 replicas. Over the next 5 minute interval the request duration is still longer than 150ms and the deployment scales to 3 replicas. After the stabilization period of 5 minutes, the deployment begins to scale down as the request times have fallen below 150 ms.

In this article...

- [Configure Autoscaling](https://docs.digitalocean.com/products/paperspace/deployments/reference/autoscaling/#configure-autoscaling)
  - [Autoscaling Criteria](https://docs.digitalocean.com/products/paperspace/deployments/reference/autoscaling/#autoscaling-criteria)
- [Autoscaling Example](https://docs.digitalocean.com/products/paperspace/deployments/reference/autoscaling/#autoscaling-example)

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