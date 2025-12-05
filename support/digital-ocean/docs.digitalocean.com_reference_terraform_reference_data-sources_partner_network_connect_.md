---
url: "https://docs.digitalocean.com/reference/terraform/reference/data-sources/partner_network_connect/"
title: "digitalocean_partner_attachment | DigitalOcean Documentation"
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
      - [digitalocean\_account](https://docs.digitalocean.com/reference/terraform/reference/data-sources/account/)
      - [digitalocean\_app](https://docs.digitalocean.com/reference/terraform/reference/data-sources/app/)
      - [digitalocean\_certificate](https://docs.digitalocean.com/reference/terraform/reference/data-sources/certificate/)
      - [digitalocean\_container\_registry](https://docs.digitalocean.com/reference/terraform/reference/data-sources/container_registry/)
      - [digitalocean\_database\_ca](https://docs.digitalocean.com/reference/terraform/reference/data-sources/database_ca/)
      - [digitalocean\_database\_cluster](https://docs.digitalocean.com/reference/terraform/reference/data-sources/database_cluster/)
      - [digitalocean\_database\_connection\_pool](https://docs.digitalocean.com/reference/terraform/reference/data-sources/database_connection_pool/)
      - [digitalocean\_database\_metrics\_credentials](https://docs.digitalocean.com/reference/terraform/reference/data-sources/database_metrics_credentials/)
      - [digitalocean\_database\_replica](https://docs.digitalocean.com/reference/terraform/reference/data-sources/database_replica/)
      - [digitalocean\_database\_user](https://docs.digitalocean.com/reference/terraform/reference/data-sources/database_user/)
      - [digitalocean\_domain](https://docs.digitalocean.com/reference/terraform/reference/data-sources/domain/)
      - [digitalocean\_domains](https://docs.digitalocean.com/reference/terraform/reference/data-sources/domains/)
      - [digitalocean\_droplet](https://docs.digitalocean.com/reference/terraform/reference/data-sources/droplet/)
      - [digitalocean\_droplet\_autoscale](https://docs.digitalocean.com/reference/terraform/reference/data-sources/droplet_autoscale/)
      - [digitalocean\_droplet\_snapshot](https://docs.digitalocean.com/reference/terraform/reference/data-sources/droplet_snapshot/)
      - [digitalocean\_droplets](https://docs.digitalocean.com/reference/terraform/reference/data-sources/droplets/)
      - [digitalocean\_firewall](https://docs.digitalocean.com/reference/terraform/reference/data-sources/firewall/)
      - [digitalocean\_floating\_ip](https://docs.digitalocean.com/reference/terraform/reference/data-sources/floating_ip/)
      - [digitalocean\_genai\_agent](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/)
      - [digitalocean\_image](https://docs.digitalocean.com/reference/terraform/reference/data-sources/image/)
      - [digitalocean\_images](https://docs.digitalocean.com/reference/terraform/reference/data-sources/images/)
      - [digitalocean\_kubernetes\_cluster](https://docs.digitalocean.com/reference/terraform/reference/data-sources/kubernetes_cluster/)
      - [digitalocean\_kubernetes\_versions](https://docs.digitalocean.com/reference/terraform/reference/data-sources/kubernetes_versions/)
      - [digitalocean\_loadbalancer](https://docs.digitalocean.com/reference/terraform/reference/data-sources/loadbalancer/)
      - [digitalocean\_partner\_attachment](https://docs.digitalocean.com/reference/terraform/reference/data-sources/partner_network_connect/)
      - [digitalocean\_partner\_attachment\_service\_key](https://docs.digitalocean.com/reference/terraform/reference/data-sources/partner_network_connect_service_key/)
      - [digitalocean\_project](https://docs.digitalocean.com/reference/terraform/reference/data-sources/project/)
      - [digitalocean\_projects](https://docs.digitalocean.com/reference/terraform/reference/data-sources/projects/)
      - [digitalocean\_record](https://docs.digitalocean.com/reference/terraform/reference/data-sources/record/)
      - [digitalocean\_records](https://docs.digitalocean.com/reference/terraform/reference/data-sources/records/)
      - [digitalocean\_region](https://docs.digitalocean.com/reference/terraform/reference/data-sources/region/)
      - [digitalocean\_regions](https://docs.digitalocean.com/reference/terraform/reference/data-sources/regions/)
      - [digitalocean\_reserved\_ip](https://docs.digitalocean.com/reference/terraform/reference/data-sources/reserved_ip/)
      - [digitalocean\_reserved\_ipv6](https://docs.digitalocean.com/reference/terraform/reference/data-sources/reserved_ipv6/)
      - [digitalocean\_sizes](https://docs.digitalocean.com/reference/terraform/reference/data-sources/sizes/)
      - [digitalocean\_spaces\_bucket](https://docs.digitalocean.com/reference/terraform/reference/data-sources/spaces_bucket/)
      - [digitalocean\_spaces\_bucket\_object](https://docs.digitalocean.com/reference/terraform/reference/data-sources/spaces_bucket_object/)
      - [digitalocean\_spaces\_bucket\_objects](https://docs.digitalocean.com/reference/terraform/reference/data-sources/spaces_bucket_objects/)
      - [digitalocean\_spaces\_buckets](https://docs.digitalocean.com/reference/terraform/reference/data-sources/spaces_buckets/)
      - [digitalocean\_spaces\_key](https://docs.digitalocean.com/reference/terraform/reference/data-sources/spaces_key/)
      - [digitalocean\_ssh\_key](https://docs.digitalocean.com/reference/terraform/reference/data-sources/ssh_key/)
      - [digitalocean\_ssh\_keys](https://docs.digitalocean.com/reference/terraform/reference/data-sources/ssh_keys/)
      - [digitalocean\_tag](https://docs.digitalocean.com/reference/terraform/reference/data-sources/tag/)
      - [digitalocean\_tags](https://docs.digitalocean.com/reference/terraform/reference/data-sources/tags/)
      - [digitalocean\_volume](https://docs.digitalocean.com/reference/terraform/reference/data-sources/volume/)
      - [digitalocean\_volume\_snapshot](https://docs.digitalocean.com/reference/terraform/reference/data-sources/volume_snapshot/)
      - [digitalocean\_vpc](https://docs.digitalocean.com/reference/terraform/reference/data-sources/vpc/)
      - [digitalocean\_vpc\_nat\_gateway](https://docs.digitalocean.com/reference/terraform/reference/data-sources/vpc_nat_gateway/)
      - [digitalocean\_vpc\_peering](https://docs.digitalocean.com/reference/terraform/reference/data-sources/vpc_peering/)
  - [Deploy a Web App](https://docs.digitalocean.com/reference/terraform/deploy-web-app/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Provider Reference](https://docs.digitalocean.com/reference/terraform/reference/)
- [Data Sources](https://docs.digitalocean.com/reference/terraform/reference/data-sources/)
- digitalocean\_partner\_attachment

[Give Feedback](https://ideas.digitalocean.com/documentation)

# digitalocean\_partner\_attachment

Generated on 13 Nov 2025
from Terraform version
[`v2.69.0`](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.69.0)

Retrieve information about a Partner Attachment for use in other resources.

This data source provides all of the Partner Attachment’s properties as configured on your
DigitalOcean account. This is useful if the Partner Attachment in question is not managed by
Terraform or you need to utilize any of the Partner Attachment’s data.

Partner Attachment may be looked up by `id` or `name`.

## Example Usage

### Partner Attachment By Id

```hcl
data "digitalocean_partner_attachment" "example" {
  id = "example-id"
}
```

### Partner Attachment By Name

```hcl
data "digitalocean_partner_attachment" "example" {
  name = "example-pia"
}
```

## Argument Reference

The following arguments are supported and are mutually exclusive:

- `id` \- The unique identifier of an existing Partner Attachment.
- `name` \- The name of an existing Partner Attachment.

## Attributes Reference

- `id` \- The unique identifier of an existing Partner Attachment.
- `name` \- The name of the Partner Attachment.
- `connection_bandwidth_in_mbps` \- The bandwidth in megabits per second of the connection.
- `region` \- The region where the Partner Attachment is located.
- `naas_provider` \- The network as a service provider for the Partner Attachment.
- `vpc_ids` \- The list of VPC IDs involved in the Partner Attachment.
- `bgp` \- The BGP configuration for the Partner Attachment.

  - `local_router_ip` \- The local router IP address in CIDR notation.
  - `peer_router_asn` \- The peer autonomous system number.
  - `peer_router_ip` \- The peer router IP address in CIDR notation.
  - `auth_key` \- The authentication key for the BGP session.
- `state` \- The state of the Partner Attachment.
- `created_at` \- The date and time of when the Partner Attachment was created.
- `redundancy_zone` \- The redundancy zone of the Partner Attachment.
- `parent_uuid` \- The UUID of the parent Partner Attachment, if applicable.
- `children` \- The UUIDs of Partner Attachment children, if applicable.

In this article...

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/data-sources/partner_network_connect/#example-usage)
  - [Partner Attachment By Id](https://docs.digitalocean.com/reference/terraform/reference/data-sources/partner_network_connect/#partner-attachment-by-id)
  - [Partner Attachment By Name](https://docs.digitalocean.com/reference/terraform/reference/data-sources/partner_network_connect/#partner-attachment-by-name)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/partner_network_connect/#argument-reference)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/partner_network_connect/#attributes-reference)

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