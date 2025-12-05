---
url: "https://docs.digitalocean.com/reference/terraform/"
title: "Terraform | DigitalOcean Documentation"
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
  - [Configure Terraform](https://docs.digitalocean.com/reference/terraform/getting-started/)
  - [Provider Reference](https://docs.digitalocean.com/reference/terraform/reference/)
  - [Deploy a Web App](https://docs.digitalocean.com/reference/terraform/deploy-web-app/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- Terraform

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Terraform

Validated on 25 Sep 2020 • Last edited on 17 Apr 2025

Terraform is a powerful open-source tool that allows you to build, version, and automate the deployment of cloud infrastructure. You can use Terraform to set up basic or complex architectures for your web applications in your DigitalOcean account with a few commands on the command line. This gives you the benefit of increased efficiency when setting up and scaling your web application’s infrastructure.

## Getting Started

![](https://docs.digitalocean.com/images/icons/terraform.svg)

How to Configure Terraform for DigitalOcean

Install Terraform and configure it to deploy DigitalOcean resources.

![](https://docs.digitalocean.com/images/icons/terraform.svg)

DigitalOcean Terraform Provider Reference

A complete reference for the DigitalOcean Terraform provider.

![](https://docs.digitalocean.com/images/icons/terraform.svg)

Deploy A Sample Web Application on DigitalOcean Using Terraform

Deploy three Droplets, a database, and a load balancer into a VPC network using Terraform and this interactive tutorial.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Use DigitalOcean Spaces as a Terraform Remote State Backend

Store Terraform state remotely on DigitalOcean Spaces to enable team collaboration.

## Resources

![](https://docs.digitalocean.com/images/icons/community.svg)

How To Use Terraform with DigitalOcean

A Community tutorial introducing Terraform and the DigitalOcean provider.

digitalocean.com/community![](https://docs.digitalocean.com/images/icons/community.svg)

How To Import Existing DigitalOcean Assets into Terraform

A Community tutorial about using Terraform to work with existing DigitalOcean infrastructure.

digitalocean.com/community![](https://docs.digitalocean.com/images/icons/default.svg)

Terraform's Official Documentation

Documentation for Terraform, including Terraform CLI, Terraform Cloud, and Terraform Enterprise.

www.terraform.io

## Latest Updates

### 29 March 2022

- [v2.19.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.19.0) of the DigitalOcean Terraform Provider is now available. This release adds custom region support of the `digitalocean_container_registry` resource.


### 8 March 2022

- [v2.18.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.18.0) of the DigitalOcean Terraform Provider is now available. This release adds a new `digitalocean_spaces_bucket_policy` resource as well as support for configuring log destinations and alert policies in the `digitalocean_app` resource.


### 14 January 2022

- [v2.17.0](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.17.0) of the DigitalOcean Terraform Provider is now available. This release adds support for:


  - Fetching load balancer resources by ID in a datasource.
  - Updating the name and description for default VPC networks.

It also includes bug fixes.

For more information, see [the full release notes](https://docs.digitalocean.com/release-notes/).

In this article...

- [Getting Started](https://docs.digitalocean.com/reference/terraform/#getting-started)
- [Resources](https://docs.digitalocean.com/reference/terraform/#resources)

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