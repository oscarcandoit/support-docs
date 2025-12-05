---
url: "https://docs.digitalocean.com/reference/api/"
title: "API Overview | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
  - [DigitalOcean API](https://docs.digitalocean.com/reference/api/#digitalocean)
    - [Reference](https://docs.digitalocean.com/reference/api/digitalocean/)
    - [Create an Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token/)
  - [Spaces API](https://docs.digitalocean.com/reference/api/#spaces)
    - [Reference](https://docs.digitalocean.com/reference/api/spaces/)
    - [Manage Access](https://docs.digitalocean.com/products/spaces/how-to/manage-access/)
    - [Use AWS S3 SDKs](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/)
  - [OAuth API](https://docs.digitalocean.com/reference/api/oauth/)
  - [Metadata API](https://docs.digitalocean.com/reference/api/#metadata)
    - [Reference](https://docs.digitalocean.com/reference/api/metadata/)
    - [Access Metadata](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/)
  - [Token Scopes](https://docs.digitalocean.com/reference/api/scopes/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- APIs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# API Overview

Validated on 23 Jan 2025 • Last edited on 17 Apr 2025

DigitalOcean has four APIs that let you programmatically manage and interact with various products and parts of the platform.

## DigitalOcean API

The DigitalOcean API lets you programmatically manage Droplets and other DigitalOcean resources using conventional HTTP requests.

![](https://docs.digitalocean.com/images/icons/api.svg)

DigitalOcean API Reference

Complete reference documentation for the DigitalOcean API, including request samples in cURL, Python, Go, and Ruby.

![](https://docs.digitalocean.com/images/icons/api.svg)

How to Create a Personal Access Token

Create a personal access token for use with the DigitalOcean API.

## Spaces API

Spaces provides a RESTful XML API for programmatically managing the data you store through standard HTTP requests. The API is interoperable with Amazon’s AWS S3 API, allowing you to interact with the service with any S3-compatible tools.

![](https://docs.digitalocean.com/images/icons/api.svg)

Spaces API Reference Documentation

Complete reference documentation for the Spaces RESTful XML API, interoperable with Amazon S3.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Manage Access to Spaces

Allow people or programs to co-manage Spaces with the owner of the Spaces bucket using access keys or DigitalOcean Teams.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Use DigitalOcean Spaces with AWS S3 SDKs

The Spaces API is interoperable with the AWS S3 API, meaning you can use existing S3 tools and libraries with it. These examples demonstrate how to perform common Spaces operations in JavaScript, Go, PHP, Python 3, and Ruby.

## OAuth API

The OAuth API is a secure method for authenticating users and allowing third-party applications limited access to your servers or DigitalOcean user accounts.

![](https://docs.digitalocean.com/images/icons/api.svg)

DigitalOcean OAuth API

Complete reference documentation for the OAuth API, including application registration.

## Metadata API

The metadata API allows a Droplet to access information about itself including user data, Droplet ID, datacenter region, and IP addresses. Droplets can access the metadata service using the static, link-local IP address `169.254.169.254`.

![](https://docs.digitalocean.com/images/icons/api.svg)

DigitalOcean Metadata API Reference

Complete reference documentation for the Metadata API for Droplets.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Access Information about a Droplet using the Metadata API

Use the Droplet metadata service to programmatically query a Droplet for information about itself.

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

- [DigitalOcean API](https://docs.digitalocean.com/reference/api/#digitalocean)
- [Spaces API](https://docs.digitalocean.com/reference/api/#spaces)
- [OAuth API](https://docs.digitalocean.com/reference/api/#oauth)
- [Metadata API](https://docs.digitalocean.com/reference/api/#metadata)

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