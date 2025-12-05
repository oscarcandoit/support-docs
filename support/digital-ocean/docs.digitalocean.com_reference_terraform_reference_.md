---
url: "https://docs.digitalocean.com/reference/terraform/reference/"
title: "DigitalOcean Terraform Provider Reference | DigitalOcean Documentation"
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
    - [Resources](https://docs.digitalocean.com/reference/terraform/reference/resources/)
    - [Data Sources](https://docs.digitalocean.com/reference/terraform/reference/data-sources/)
  - [Deploy a Web App](https://docs.digitalocean.com/reference/terraform/deploy-web-app/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Terraform](https://docs.digitalocean.com/reference/terraform/)
- Provider Reference

[Give Feedback](https://ideas.digitalocean.com/documentation)

# DigitalOcean Terraform Provider Reference

Generated on 13 Nov 2025
from Terraform version
[`v2.69.0`](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.69.0)

The DigitalOcean Terraform provider is used to interact with the
resources supported by DigitalOcean. The provider needs to be configured
with the proper credentials before it can be used.

For a step-by-step guide to installing and configuring Terraform, please see [How to Configure Terraform for DigitalOcean](https://docs.digitalocean.com/reference/terraform/getting-started/).

## Example Usage

```hcl
terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

# Set the variable value in *.tfvars file
# or using -var="do_token=..." CLI option
variable "do_token" {}

# Configure the DigitalOcean Provider
provider "digitalocean" {
  token = var.do_token
}

# Create a web server
resource "digitalocean_droplet" "web" {
  # ...
}
```

## Argument Reference

The following arguments are supported:

- `token` \- (Required) This is the DO API token. Alternatively, this can also be specified
using environment variables ordered by precedence:

  - `DIGITALOCEAN_TOKEN`
  - `DIGITALOCEAN_ACCESS_TOKEN`
- `spaces_access_id` \- (Optional) The access key ID used for Spaces API
operations (Defaults to the value of the `SPACES_ACCESS_KEY_ID` environment
variable).
- `spaces_secret_key` \- (Optional) The secret access key used for Spaces API
operations (Defaults to the value of the `SPACES_SECRET_ACCESS_KEY`
environment variable).
- `api_endpoint` \- (Optional) This can be used to override the base URL for
DigitalOcean API requests (Defaults to the value of the `DIGITALOCEAN_API_URL`
environment variable or `https://api.digitalocean.com` if unset).
- `spaces_endpoint` \- (Optional) This can be used to override the endpoint URL
used for DigitalOcean Spaces requests. (It defaults to the value of the
`SPACES_ENDPOINT_URL` environment variable or `https://{{.Region}}.digitaloceanspaces.com`
if unset.) The provider will replace `{{.Region}}` (via Go’s templating engine) with the slug
of the applicable Spaces region.
- `requests_per_second` \- (Optional) This can be used to enable throttling, overriding the limit
of API calls per second to avoid rate limit errors, can be disabled by setting the value
to `0.0` (Defaults to the value of the `DIGITALOCEAN_REQUESTS_PER_SECOND` environment
variable or `0.0` if unset).
- `http_retry_max` \- (Optional) This can be used to override the maximum number
of retries on a failed API request (client errors, 429, 500, 502…), the exponential
backoff can be configured by the `http_retry_wait_min` and `http_retry_wait_max` arguments
(Defaults to the value of the `DIGITALOCEAN_HTTP_RETRY_MAX` environment variable or
`4` if unset).
- `http_retry_wait_min` \- (Optional) This can be used to configure the minimum
waiting time ( **in seconds**) between failed requests for the backoff strategy
(Defaults to the value of the `DIGITALOCEAN_HTTP_RETRY_WAIT_MIN` environment
variable or `1.0` if unset).
- `http_retry_wait_max` \- (Optional) This can be used to configure the maximum
waiting time ( **in seconds**) between failed requests for the backoff strategy
(Defaults to the value of the `DIGITALOCEAN_HTTP_RETRY_WAIT_MAX` environment
variable or `30.0` if unset).


## Resources and Data Sources

The following resources and data sources are available:

![](https://docs.digitalocean.com/images/icons/terraform.svg)

Resources Reference for the DigitalOcean Terraform Provider

A complete reference for every resource available to the DigitalOcean Terraform provider.

![](https://docs.digitalocean.com/images/icons/terraform.svg)

Data Sources Reference for the DigitalOcean Terraform Provider

A complete reference for every data source available to the DigitalOcean Terraform provider.

In this article...

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/#example-usage)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/#argument-reference)
- [Resources and Data Sources](https://docs.digitalocean.com/reference/terraform/reference/#resources-and-data-sources)

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