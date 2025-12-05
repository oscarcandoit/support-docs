---
url: "https://docs.digitalocean.com/reference/"
title: "Reference Home | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- Reference

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Reference Home

Validated on 23 Dec 2020 • Last edited on 17 Apr 2025

Manage resources programmatically and integrate across the developer ecosystem with CLIs, APIs, and SDKs.

Most Viewed Reference Docs

01. [DigitalOcean API Reference](https://docs.digitalocean.com/reference/api/digitalocean/ "Complete reference documentation for the DigitalOcean API, including request samples in cURL, Python, Go, and Ruby.")
02. [How to Install and Configure doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/ "Install and configure doctl, the official DigitalOcean command-line client (CLI).")
03. [How to Create a Personal Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token/ "Create a personal access token for use with the DigitalOcean API.")
04. [Spaces API Reference Documentation](https://docs.digitalocean.com/reference/api/spaces/ "Complete reference documentation for the Spaces RESTful XML API, interoperable with Amazon S3.")
05. [DigitalOcean OAuth API](https://docs.digitalocean.com/reference/api/oauth/ "Complete reference documentation for the OAuth API, including application registration.")
06. [doctl auth init](https://docs.digitalocean.com/reference/doctl/reference/auth/init/ "This command allows you to initialize doctl with a token that allows it to query and manage your account details and resources.  The command requires and API token to authenticate, which you can generate in the control panel at https://cloud.digitalocean.com/account/api/tokens.  The `--context` flag allows you to add authentication for multiple accounts and then switch between them as needed. Provide a case-sensitive name for the context and then enter the API token you want use for that context when prompted. You can switch authentication contexts using `doctl auth switch`, which re-initializes doctl. You can also provide the `--context` flag when using any doctl command to specify the auth context for that command. This enables you to use multiple DigitalOcean accounts with doctl, or tokens that have different authentication scopes.  If the `--context` flag is not specified, doctl creates a default authentication context named `default`.  You can use doctl without initializing it by adding the `--access-token` flag to each command and providing an API token as the argument.")
07. [doctl databases maintenance-window update](https://docs.digitalocean.com/reference/doctl/reference/databases/maintenance-window/update/ "Updates the maintenance window for the specified database cluster.  Maintenance windows are hour-long blocks of time during which DigitalOcean performs automatic maintenance on databases every week. During this time, health checks, security updates, version upgrades, and more are performed.  To change the maintenance window for your database cluster, specify a day of the week and an hour of that day during which you would prefer such maintenance would occur.  To see a list of your databases and their IDs, run `doctl databases list`.")
08. [doctl registry login](https://docs.digitalocean.com/reference/doctl/reference/registry/login/ "Logs Docker into Container Registry making pull and push commands to your private container registry authenticated. ")
09. [How to Configure Terraform for DigitalOcean](https://docs.digitalocean.com/reference/terraform/getting-started/ "Install Terraform and configure it to deploy DigitalOcean resources.")
10. [DigitalOcean Libraries](https://docs.digitalocean.com/reference/libraries/ "")

DigitalOcean provides several command-line interfaces (CLIs) and application programming interfaces (APIs) for managing your resources. This section provides the reference materials for these offerings, as well as resources from the open source community.

![](https://docs.digitalocean.com/images/icons/doctl.svg)

doctl Command Line Interface (CLI)

Manage your DigitalOcean resources from the command line with doctl, our open-source command line interface (CLI).

![](https://docs.digitalocean.com/images/icons/api.svg)

API Overview

Programmatically manage your Droplets, Spaces, and other DigitalOcean resources using conventional HTTP requests. Use RESTful APIs to programmatically manage Droplets, Spaces, and other DigitalOcean resources.

![](https://docs.digitalocean.com/images/icons/ml.svg)

Paperspace APIs, CLIs, and SDKs Overview

Interact with Paperspace resources programmatically using the Paperspace API or CLI, and find documentation for legacy tools.

![](https://docs.digitalocean.com/images/icons/ansible.svg)

Ansible

Automate DigitalOcean infrastrucuture and configuration management using the open source Ansible framework.

![](https://docs.digitalocean.com/images/icons/terraform.svg)

Terraform

Deploy and change many resources simultaneously using the open source Terraform tool.

![](https://docs.digitalocean.com/images/icons/python.svg)

PyDo

PyDo is DigitalOcean’s official Python client library based on DigitalOcean’s OpenAPIv3 specification.

![](https://docs.digitalocean.com/images/icons/libraries.svg)

DigitalOcean Libraries

This is a list of official and community-created client libraries that let you use the DigitalOcean’s APIs in a variety of programming languages.

![](https://docs.digitalocean.com/images/icons/opensource.svg)

Open-Source Software

We use and contribute to open source software.

## Latest Updates

### 3 April 2025

- We previously announced an upcoming breaking change to the DigitalOcean API to fix an incomplete resource authorization issue. We have changed our approach so that this is no longer a breaking change.

Originally, some users would need to recreate API tokens with additional scopes to retain the same functionality. Now, API tokens created before we deploy the fix retain the same functionality and access to the API. No action is required to continue using these tokens as before.



Learn more on [**Breaking Change to Fix DigitalOcean API Incomplete Resource Authorization Issue**](https://docs.digitalocean.com/release-notes/upcoming/breaking-api-changes-resource-authorization/).


### 28 February 2025

- All managed databases except MongoDB now support up to 2,000 IP addresses as trusted sources. To add trusted sources, see our guides for [MySQL](https://docs.digitalocean.com/products/databases/mysql/how-to/secure/), [PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/), [Caching](https://docs.digitalocean.com/products/databases/redis/how-to/secure/), [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/how-to/secure/), [OpenSearch](https://docs.digitalocean.com/products/databases/opensearch/how-to/secure/), and [Kafka](https://docs.digitalocean.com/products/databases/kafka/how-to/secure/).


### 20 February 2025

- In April 2025, we are implementing a [breaking change to the DigitalOcean API](https://docs.digitalocean.com/notes/2025/breaking-api-changes-resource-authorization/) that fixes an incomplete resource authorization issue. You may need to recreate API tokens with additional scopes to retain the same functionality, depending on your use cases.


For more information, see [the full release notes](https://docs.digitalocean.com/release-notes/).

In this article...

[Reference Home](https://docs.digitalocean.com/reference/)

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