---
url: "https://docs.digitalocean.com/products/paperspace/deployments/reference/health-checks/"
title: "Health Checks for Gradient Deployments | DigitalOcean Documentation"
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
- Health Checks

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Health Checks for Gradient Deployments

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Paperspace Deployments are containers-as-a-service that allow you to run container images and serve machine learning models using a high-performance, low-latency service with a RESTful API.

Health checks leverage [Kubernetes probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) under the hood. Some slight changes in the configuration have been chosen to deliver a better experience.

There are three configurable health checks available: `liveness`, `readiness`, and `startup`.

- `liveness` checks detect deployment containers that transition to an unhealthy state. `liveness` checks remedy said situations through targeted restarts.

- `readiness` checks tell our load balancers when a container is ready to receive traffic. These checks run for the life of the container. Applications that leverage `readiness` checks may need to load a model into memory or initiate connections to external services before receiving requests.

- `startup` checks detect if a container has started successfully. If the container never enters a successful state, the container is killed and restarted. Once a `startup` health check detects a successful start of the container, it initiates the `liveness` & `readiness` health checks (if configured).


Any status codes returned greater than or equal to 200 and less than 400 indicate success. Any other code indicates failure.

## Configure Health Checks

Use the following parameters in the deployment spec to configure health checks:

- `healthChecks`: The overall label used to specify any health checks.

- `liveness/readiness/startup`: The type of health check specified.
  - `path`: The path of the http endpoint that the health check calls.

  - `port`: (Optional) The port that the path is running on. The default is to use the same port as the image itself.

  - `initialDelaySeconds`: (Optional) The number of seconds after the container has started before health checks are initiated. Defaults to 0 seconds.

  - `periodSeconds`: (Optional) How often (in seconds) to perform the health check. Defaults to 10 seconds.

  - `timeoutSeconds`: (Optional) The number of seconds after which the health check times out. Defaults to 1 second. Minimum value is 1.

  - `failureThreshold`: (Optional) The number of times the health check has to return a failed response for the health check to be assigned a failed status. Defaults to 3 tries.

## Health Check Example

Below is a deployment spec and a Python script that use health checks to monitor a FastAPI application. On startup the application downloads a model, checks that it can make a connection to an S3 bucket, and waits to be marked healthy before serving requests.

```yaml
# Deployment Spec Example using HTTP.
healthChecks: # health checks allow you to define a set of probes to check the health of your app
  readiness:
    path: /readiness
    port: 8000
    periodSeconds: 10
    timeoutSeconds: 5
  liveness:
    path: /liveness
    port: 8000
  startup:
    path: /startup
    port: 8000
    periodSeconds: 10
    failureThreshold: 6
```

```python
# FastAPI Application Example

from pydantic import BaseSettings
from fastapi import FastAPI, Response, status

class LoadStatus(BaseSettings):
    model_loaded: bool = False
    # Other statuses

load_status = LoadStatus()
app = FastAPI()

@app.on_event("startup")
async def model_load():
    # Download model
    load_status.model_loaded = True

@app.get("/liveness/", status_code=200)
def liveness_check():
    return "Liveness check succeeded."

@app.get("/readiness/", status_code=200)
def readiness_check(response: Response):
    s3_successful =  # S3 connection check

    if not s3_successful or not load_status.model_loaded:
      response.status_code = status.HTTP_503_SERVICE_UNAVAILABLE
      return "Readiness check failed."

    return "Readiness check succeeded."

@app.get("/startup/", status_code=200)
def startup_check():
    return "Startup check succeeded."

@app.post("/predict/")
def predict():
    # Make a prediction
    # Upload to S3 bucket
    # Return response
```

When the deployment spec is submitted, the container is pulled from the container registry. When finished, the deployment starts to build the container. As the container starts to build, the `startup` health check starts probing the application. The app has 60 seconds to startup before the container is marked as unhealthy by the `startup` health check and restarted `(periodSeconds*failureThreshold = 10*6 = 60 seconds)`.

The `readiness` health check ensures the model has been downloaded and the container can make a connection to the S3 bucket and then return a `200` status code which marks the container to be in a successful and ready state.

Once all health checks have passed, the container starts to receive incoming traffic (for example into the `/predict/` endpoint) and the `liveness` and `readiness` health checks continue to probe and monitor the container. In the case of the `readiness` probe, if at some point in the future the container can’t make a connection to the S3 bucket, it return a `503` status code to tell the deployment to no longer send traffic to this container until it can successfully makes a connection with the S3 bucket again.

Because the FastAPI app above defines a startup event process, that process (model download) has to finish before the container is considered to have a successful startup. When the model download finishes, assuming it’s within 60 seconds, the `startup` health check succeeds, stops probing, and the `liveness` and `readiness` health checks start to probe the container every 10 seconds (Kubernetes default) to monitor the health and readiness for the life of the container.

In this article...

- [Configure Health Checks](https://docs.digitalocean.com/products/paperspace/deployments/reference/health-checks/#configure-health-checks)
- [Health Check Example](https://docs.digitalocean.com/products/paperspace/deployments/reference/health-checks/#health-check-example)

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