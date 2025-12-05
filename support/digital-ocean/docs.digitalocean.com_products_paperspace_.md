---
url: "https://docs.digitalocean.com/products/paperspace/"
title: "Paperspace | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [Products](https://docs.digitalocean.com/products/paperspace/#products)
  - [![](https://docs.digitalocean.com/images/icons/machines.4f455a935c3878c20e9d35654c24e34c18f052727b612061b52fbe7c0467d808.svg)Machines](https://docs.digitalocean.com/products/paperspace/machines/)
  - [![](https://docs.digitalocean.com/images/icons/notebooks.32e19af09a55fd5cd33aebcce8d997fae35ad696d0312f02ea32fbd1031df490.svg)Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
  - [![](https://docs.digitalocean.com/images/icons/deployments.3b7f4d8d82c236b51d91c8becee94bb424055a671131be322532b5d1cd26cc20.svg)Deployments](https://docs.digitalocean.com/products/paperspace/deployments/)
  - [![](https://docs.digitalocean.com/images/icons/workflows.3b7ab56ba05e74ff45c932896583f0781174b87ebd9e2feb4560ab9be20c2bb9.svg)Workflowsprivate](https://docs.digitalocean.com/products/paperspace/workflows/)
- [Accounts & Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/)
  - [Manage Accounts](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/)
  - [Add SSH Keys](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/)
  - [Use Secrets](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/)
  - [Manage Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/)
  - [Enable SSO](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/enable-sso/)
- [Pricing](https://docs.digitalocean.com/products/paperspace/pricing/)
- [Developer Tools](https://docs.digitalocean.com/products/paperspace/reference/)
  - [API Keys](https://docs.digitalocean.com/reference/paperspace/api-keys/)
  - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
  - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
  - [Legacy Tools](https://docs.digitalocean.com/products/paperspace/reference/legacy/)

- Paperspace

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Paperspace

Validated on 14 Dec 2023 • Last edited on 15 Aug 2025

Paperspace is a cloud-based machine learning platform that offers GPU-powered virtual machines and a Kubernetes-based container service.

## Products

Paperspace offers Notebooks, Deployments, Workflows, and Machines for developing, training, and deploying AI applications.

![](https://docs.digitalocean.com/images/icons/notebooks.svg)

Notebooks

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated machines.

![](https://docs.digitalocean.com/images/icons/deployments.svg)

Deployments

Deployments are containers-as-a-service that let you run container images and serve machine learning models.

![](https://docs.digitalocean.com/images/icons/workflows.svg)

Workflows

Workflows automate machine learning tasks, combining GPU instances with an expressive syntax to generate production-ready machine learning pipelines with a few lines of code.

![](https://docs.digitalocean.com/images/icons/machines.svg)

Machines

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

## Developer Tools

![](https://docs.digitalocean.com/images/icons/ml.svg)

Paperspace API Keys

API keys let you interact with Paperspace through the Core RESTful API, the Core Javascript SDK, and Gradient command-line utility (CLI). API Keys have team-scoped permissions and are associated with your user account.

![](https://docs.digitalocean.com/images/icons/ml.svg)

Paperspace API Reference

Programmatically manage Paperspace resources using conventional HTTP requests.

![](https://docs.digitalocean.com/images/icons/ml.svg)

Paperspace CLI Reference

Install and use the new Paperspace Command Line Interface.

![](https://docs.digitalocean.com/images/icons/ml.svg)

Paperspace Legacy Tools Reference

Documentation for the legacy Paperspace CLI and API, including example requests and available parameters.

## Paperspace Resources

![](https://docs.digitalocean.com/images/icons/default.svg)

Register for Paperspace

Create a Paperspace account.

paperspace.com![](https://docs.digitalocean.com/images/icons/default.svg)

ML Showcase

Curated list of interactive ML sample projects.

paperspace.com![](https://docs.digitalocean.com/images/icons/default.svg)

Paperspace Community

View and post questions.

paperspace.com

![](https://docs.digitalocean.com/images/icons/default.svg)

Paperspace Accounts and Teams

Paperspace personal accounts provide each user with a private workspace that has a unique namespace. Teams let you collaborate with others.

![](https://docs.digitalocean.com/images/icons/default.svg)

Paperspace Pricing

Billing and pricing information for Paperspace Machines, storage, networking, and Gradient Subscription Plans.

## Latest Updates

### 1 July 2024

- We have deprecated Windows-based templates, so they are unavailable for new Paperspace users. Users who joined Paperspace prior to 1 July 2024 can still start, create, and manage Windows-based template machines. We continue to support Windows streaming updates for existing users.

- Paperspace NVIDIA GRID machines are now retired and therefore unavailable for new and existing Paperspace users. NVIDIA GRID machine types are Air, Standard, Advanced, Pro, ProL, and ProXL.


### 15 May 2024

- A [new API](https://docs.digitalocean.com/reference/paperspace/api-reference/) for managing Paperspace resources is now available. The API provides:


  - A unified and predictable endpoint schema

  - Improved performance and scalability

  - Documented support for API endpoints


We have deprecated the legacy Gradient and Core API endpoints, so they are now unavailable for Paperspace users. Applications must use the new API to retain functionality. You can [submit a support ticket](https://docs.digitalocean.com/support/paperspace/#open-a-ticket) for questions or assistance.

### 13 May 2024

- We have simplified how you [create machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/) and made the following improvements:


  - Operating system (OS) templates are auto-selected for machines. When you select a machine, only the supported templates for that machine type are shown. This pairing of machines and templates ensures that you choose a template that works with your machine.

  - Machine approval and fraud detection processes have been improved. This reduces the number of machine approval requests you make. You can request approval for a machine when selecting a machine in the Paperspace console.


For more information, see [the full release notes](https://docs.digitalocean.com/release-notes/).

In this article...

- [Products](https://docs.digitalocean.com/products/paperspace/#products)
- [Developer Tools](https://docs.digitalocean.com/products/paperspace/#developer-tools)
- [Paperspace Resources](https://docs.digitalocean.com/products/paperspace/#paperspace-resources)

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