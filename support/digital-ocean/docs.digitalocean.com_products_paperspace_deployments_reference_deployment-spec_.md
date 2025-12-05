---
url: "https://docs.digitalocean.com/products/paperspace/deployments/reference/deployment-spec/"
title: "Deployment Spec Reference | DigitalOcean Documentation"
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
- Deployment Spec

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Deployment Spec Reference

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Paperspace Deployments are containers-as-a-service that allow you to run container images and serve machine learning models using a high-performance, low-latency service with a RESTful API.

A deployment configuration or spec represents the desired state of your deployment. You can view or update the deployment spec using the [Paperspace console](https://console.paperspace.com/) or [CLI](https://docs.digitalocean.com/reference/paperspace/gradient/).

```yaml
  apiVersion: v1 # required, defaults to v1
  name: my cool deployment # the name of your deployment. This must be unique within your project.
  image: paperspace/app-fixture:0.1.3
  enabled: true # Toggle to enable or disable the app
  containerRegistry: my-registry # (optional) name of the container registry to use for the app.

  command: # command to run on startup
    - /bin/sh
    - '-c'
    - |
      while true
      do
        sleep .01
      done

  resources:
    ports:
      - 8000
    replicas: 2 # amount of static replicas for your app. We recommend 2 to ensure high availability.
    machineType: A100-80G
    autoscaling:
      enabled: true # toggle for enabling/disabling autoscaling
      maxReplicas: 5 # max replicas for autoscaling
      metrics:
        - metric: cpu
          summary: average
          value: 50 # 50% cpu utilization across all replicas
        - metric: memory
          summary: average
          value: 22 # 22% memory utilization across all replicas
        - metric: requestDuration
          summary: average
          value: 2 # 2 second request duration for the endpoint

  integrations: # List of integrations. Max is 5.
    - type: git-lfs # git-lfs integration type
      name: falcon # unique name of the integration
      path: /models/ # the a unique path on the filesystem to mount the integration. In this spec, model files will be located at /models/falcon
      url: https://huggingface.co/tiiuae/falcon-7b # hugging face model url for cloning

    - type: s3 # s3 integration type
      name: my-s3-integration
      path: /some/s3/mount/path
      url: s3://my-integration-bucket/
      region: us-east-1
      accessKeyId: AKIAVWO7J5OJSCWRJ3HJ
      secretAccessKey: secret:secretAccessKey # stored as a project or team secret. Naming is arbitrary.


  healthChecks: # health checks allow you to define a set of probes to check the health of your app
    readiness:
      path: /
      port: 8000 # healthcheck port.
      initialDelaySeconds: 5
      periodSeconds: 5
      timeoutSeconds: 5
      failureThreshold: 5
      headers: # (optional) list of headers to pass to the readiness probe
        - name: Authorization
          value: some-token
    liveness:
      ...
    startup:
      ...

  basicAuthKey: secret:my_paperspace_secret # setting up a protected endpoint to restrict access for unauthorized users

  env: # container environment variables
    - name: some-env
      value: some-value
    - name: secret-env
      value: secret:mySecretEnv # stored as a project or team secret. Naming is arbitrary.
```

## Common Configuration Actions

These are actions you can take by updating the deployment spec either through the console or the CLI/SDK.

1. **Start and stop the Deployment:** Set `enabled` to `true` (on) or `false` (off) and resubmit the spec
2. **Update the number of replicas:** Change `replicas` to the desired number of replicas and resubmit the spec
3. **Change the machine type or image:** Update the `machineType` and/or `image` respectively and resubmit the spec

In this article...

- [Common Configuration Actions](https://docs.digitalocean.com/products/paperspace/deployments/reference/deployment-spec/#common-configuration-actions)

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