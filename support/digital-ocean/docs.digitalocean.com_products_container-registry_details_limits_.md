---
url: "https://docs.digitalocean.com/products/container-registry/details/limits/"
title: "Container Registry Limits | DigitalOcean Documentation"
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

- [Details](https://docs.digitalocean.com/products/container-registry/details/)
- Limits

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Container Registry Limits

Validated on 17 Nov 2025 • Last edited on 17 Nov 2025

The DigitalOcean Container Registry (DOCR) is a private Docker image registry that lets you store and manage private container images. DOCR integrates natively with Docker environments and DigitalOcean Kubernetes clusters.

- Each DigitalOcean account can only create one registry, although a registry may contain multiple repositories.

- Registry names must be globally unique and not collide with the registry names of other users.

- The Starter and Basic subscription plans are limited to one container registry. The Professional subscription plan is limited to 10 container registries.

- Untagged images are not displayed in the control panel. However, you can delete untagged manifests using [doctl](https://docs.digitalocean.com/reference/doctl/reference/registry/garbage-collection/) and free up space in your registry.

- Manifest lists (for example, multi-arch images) are supported but may not display correctly in the control panel.

- You cannot change the datacenter region of a registry after creation.

- The name of a registry must:
  - Be unique across all DigitalOcean container registries.
  - Be no more than 63 characters in length.
  - Contain only lowercase letters, numbers, and/or hyphens.
  - Begin with a letter.
  - End with a letter or number.
- You cannot upload images over 20 GB to a container registry. You are limited to a maximum size of 5 GB per image layer.


In this article...

[Container Registry Limits](https://docs.digitalocean.com/products/container-registry/details/limits/)

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