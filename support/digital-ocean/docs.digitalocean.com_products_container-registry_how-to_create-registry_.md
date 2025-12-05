---
url: "https://docs.digitalocean.com/products/container-registry/how-to/create-registry/"
title: "How to Create a Container Registry | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/container-registry.9233118a7fd14376bbb94aedab28b1762ed7cb822f6df9ae7f66db21052e45d6.svg)Container Registry](https://docs.digitalocean.com/products/container-registry/)
- [Getting Started](https://docs.digitalocean.com/products/container-registry/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/)
  - [Deploy Image to Cluster](https://docs.digitalocean.com/products/kubernetes/getting-started/deploy-image-to-cluster/)
- [How-Tos](https://docs.digitalocean.com/products/container-registry/how-to/)
  - [Create Registry](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/)
  - [Use Docker and Kubernetes](https://docs.digitalocean.com/products/container-registry/how-to/use-registry-docker-kubernetes/)
  - [Clean Up Container Registry](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/)
  - [Integrate with CI/CD](https://docs.digitalocean.com/products/container-registry/how-to/set-up-ci-cd/)
  - [Enable Push-to-Deploy](https://docs.digitalocean.com/products/container-registry/how-to/enable-push-to-deploy/)
- [Reference](https://docs.digitalocean.com/products/container-registry/reference/)
  - [API Reference (Container Registry)](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Container-Registry)
  - [API Reference (Container Registries)](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Container-Registries)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/registry/repository/)
- [Details](https://docs.digitalocean.com/products/container-registry/details/)
  - [Features](https://docs.digitalocean.com/products/container-registry/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/container-registry/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/container-registry/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/container-registry/details/limits/)
- [Support](https://docs.digitalocean.com/products/container-registry/support/)

- [How-Tos](https://docs.digitalocean.com/products/container-registry/how-to/)
- Create Registry

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create a Container Registry

Validated on 17 Nov 2025 • Last edited on 17 Nov 2025

The DigitalOcean Container Registry (DOCR) is a private Docker image registry that lets you store and manage private container images. DOCR integrates natively with Docker environments and DigitalOcean Kubernetes clusters.

You can create a new container registry using the control panel, API, or CLI. It requires a name, datacenter region, and subscription plan.
If you use the [Professional subscription plan](https://docs.digitalocean.com/products/container-registry/details/pricing/), you can create up to nine additional registries (for a total maximum of 10) per team.

After creating a registry, you can [configure it](https://docs.digitalocean.com/products/container-registry/how-to/use-registry-docker-kubernetes/) to push and pull from Docker and DigitalOcean Kubernetes.

## Create a Container Registry Using the Control Panel

To create a container registry from the DigitalOcean Control Panel, in the left menu, click **Container Registry**. Then, click the **Create a Container Registry** button to go to the **Create a container registry** page.

### Choose a Subscription Plan

Choose from the Starter, Basic, or Professional subscription plan. For more details on the different plans, see the [pricing page](https://docs.digitalocean.com/products/container-registry/details/pricing/).

![The plan selection menu](https://docs.digitalocean.com/screenshots/container-registry/choose-plan.56cfeb52a9405cbeaa340be86f8ff8acc6e9e67fa17fbb846dba7c53d048d7f5.png)

### Choose a Datacenter Region

Use the drop-down menu to select your registry’s datacenter region. For the best performance, we recommend you select a region close to your other DigitalOcean resources.

![The datacenter drop-down menu](https://docs.digitalocean.com/screenshots/container-registry/choose-region.890e12fc4cf57cfdee9044c6eb7c54206cc6795a92afab3cabb08e3816eb6082.png)

### Name Your Container Registry

Enter a custom name for your container registry. Names must be unique, be between 3 and 63 characters long, and only contain alphanumeric characters and dashes. You cannot change a registry’s name after creation.

![The name selection text box](https://docs.digitalocean.com/screenshots/container-registry/choose-name.fa32bf0a55fa5a86cf27c45fccac79832d3e6cef35b595c01c35222c44dfdaa9.png)

### Create Registry

Create the registry by clicking **Create Registry**.

Once your registry is created, the **Repositories** tab opens where you can view registry information such as stored images and monitor unused data.

After creation, you can change the subscription plan of an existing registry. For example, you can change the plan from the Starter plan to the Professional plan, which allows you to [create additional registries](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-additional-registries-using-the-control-panel). To do this, from the [control panel](https://cloud.digitalocean.com/registry), in the left menu, click **Container Registry**. On the **Container Registries** page, in the **Plan details** section, click **Edit plan**. After you select the subscription plan, click **Update plan**.

## Create Additional Container Registries Using the Control Panel

With the Professional subscription plan, you can create additional container registries. From the DigitalOcean Control Panel, in the left menu, click **Container Registry**. On the **Container Registries** page, click the **Create Registry** button.

![Create additional registry](https://docs.digitalocean.com/screenshots/container-registry/create-additional-registry.9da9b6d4ba1398b0f3e0b6a8b12843b372b818ee29d8f9d484a2d875922602bc.png)

If your existing registry is already on the Professional subscription plan, specify a region and name for your registry, and then click **Create Registry** to create an additional registry.

If your current registry is not on the Professional subscription plan, you need to upgrade to the Professional plan. Then, specify a region and name for your registry, and click **Create Registry**.

Note
Before you can downgrade the plan, you need to delete the additional registries.
![Upgrade plan for multiple registry](https://docs.digitalocean.com/screenshots/container-registry/multiple-registry-plan-upgrade.530b31242f5998844ebd63fa091f4f61c50eaae85ac479a9b145a23944fef16f.png)

## Create Container Registry Using the API

How to Create a Container Registry Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/registry`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/registry_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name": "example", "subscription_tier_slug": "basic", "region": "fra1"}' \
  "https://api.digitalocean.com/v2/registry"
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "name": "example",
  "subscription_tier_slug": "basic",
  "region": "fra1"
}

resp = client.registry.create(body=req)
```

If your container registry uses the [Professional subscription plan](https://docs.digitalocean.com/products/container-registry/details/pricing/), you can use the API to create up to nine additional registries (for a total maximum of 10).

How to Create Additional Registries on the Professional Plan Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/registries`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/registries_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name": "example", "region": "fra1"}' \
  "https://api.digitalocean.com/v2/registries"
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "name": "example",
  "region": "fra1"
}

resp = client.registries.create(body=req)
```

## Create a Container Registry Using the CLI

How to Create a Container Registry Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl registry create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/registry/create/) for more details:




```shell
doctl registry create <registry-name> [flags]
```



The following example creates a registry named `example-registry` in the NYC3 region:




```shell
doctl registry create example-registry --region=nyc3
```


If your container registry uses the [Professional subscription plan](https://docs.digitalocean.com/products/container-registry/details/pricing/), you can use `doctl` to create up to nine additional registries (for a total maximum of 10).

How to Create a Container Registry Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl registries create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/registries/create/) for more details:




```shell
doctl registries create <registry-name> [flags]
```



The following example creates a registry named `example-registry` in the NYC3 region:




```shell
doctl registries create example-registry --region=nyc3
```


In this article...

- [Create a Container Registry Using the Control Panel](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-a-container-registry-using-the-control-panel)
  - [Choose a Subscription Plan](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#choose-a-subscription-plan)
  - [Choose a Datacenter Region](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#choose-a-datacenter-region)
  - [Name Your Container Registry](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#name-your-container-registry)
  - [Create Registry](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-registry)
- [Create Additional Container Registries Using the Control Panel](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-additional-registries-using-the-control-panel)
- [Create Container Registry Using the API](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-container-registry-using-the-api)
- [Create a Container Registry Using the CLI](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-a-container-registry-using-the-cli)

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