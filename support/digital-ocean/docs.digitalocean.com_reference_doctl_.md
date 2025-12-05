---
url: "https://docs.digitalocean.com/reference/doctl/"
title: "doctl Command Line Interface (CLI) | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
  - [How to Install doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/)
  - [Command Reference](https://docs.digitalocean.com/reference/doctl/reference/)
  - [Manage Load Balancers with doctl](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/with-doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- doctl CLI

[Give Feedback](https://ideas.digitalocean.com/documentation)

# doctl Command Line Interface (CLI)

Validated on 15 Apr 2020 • Last edited on 17 Apr 2025

`doctl` is the official DigitalOcean command line interface (CLI).

## Features

`doctl` allows you to interact with the DigitalOcean API via the command line. It supports most functionality found in the control panel. You can create, configure, and destroy DigitalOcean resources like Droplets, Kubernetes clusters, firewalls, load balancers, database clusters, domains, and more.

Official `doctl` [builds are available](https://github.com/digitalocean/doctl/releases) for Windows, macOS, and Linux.

## Documentation

![](https://docs.digitalocean.com/images/icons/default.svg)

How to Install and Configure doctl

Install and configure doctl, the official DigitalOcean command-line client (CLI).

![](https://docs.digitalocean.com/images/icons/reference.svg)

Command Line Interface (CLI) Reference for doctl

A complete reference for every command provided by the doctl command line interface (CLI).

## Resources

`doctl` is open source software. Find the source code or report issues at the [`digitalocean/doctl` repository on GitHub](https://github.com/digitalocean/doctl).

Find additional tutorials on the DigitalOcean community site:

- [How To Work with DigitalOcean Load Balancers Using doctl](https://www.digitalocean.com/community/tutorials/how-to-work-with-digitalocean-load-balancers-using-doctl)
- [How To Secure Web Server Infrastructure With DigitalOcean Cloud Firewalls Using doctl](https://www.digitalocean.com/community/tutorials/how-to-secure-web-server-infrastructure-with-digitalocean-cloud-firewalls-using-doctl)
- [How To Work with DigitalOcean Block Storage Using doctl](https://www.digitalocean.com/community/tutorials/how-to-work-with-digitalocean-block-storage-using-doctl)

## Limits

- `doctl` does not support the DigitalOcean Spaces API. However, because the Spaces API is S3-compatible, you can use S3-compatible command line tools like [`s3cmd`](https://docs.digitalocean.com/products/spaces/reference/s3cmd/) to manage Spaces.

## Latest Updates

### 8 December 2023

- Released [v1.101.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.101.0), the official DigitalOcean CLI. This release adds support for scalable storage for PostgreSQL and MySQL databases and Kafka topic management.


### 17 October 2023

- Released [v1.100.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.100.0), the official DigitalOcean CLI. This release adds new commands for managing uptime alerts and retrieving advanced database configuration options.


### 18 August 2023

- Released [v1.98.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.98.0), the official DigitalOcean CLI. This release adds support for automatically retrying API requests that fail with a 429 or 500-level error. The number of attempts can be configured using the `--http-retry-max` flag or `DIGITALOCEAN_HTTP_RETRY_MAX` environment variable. To disable retries altogether, set to `0`.


For more information, see [the full release notes](https://docs.digitalocean.com/release-notes/).

In this article...

- [Features](https://docs.digitalocean.com/reference/doctl/#features)
- [Documentation](https://docs.digitalocean.com/reference/doctl/#documentation)
- [Resources](https://docs.digitalocean.com/reference/doctl/#resources)
- [Limits](https://docs.digitalocean.com/reference/doctl/#limits)

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