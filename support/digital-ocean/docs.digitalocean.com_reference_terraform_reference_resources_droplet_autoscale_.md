---
url: "https://docs.digitalocean.com/reference/terraform/reference/resources/droplet_autoscale/"
title: "digitalocean_droplet_autoscale | DigitalOcean Documentation"
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
      - [digitalocean\_app](https://docs.digitalocean.com/reference/terraform/reference/resources/app/)
      - [digitalocean\_cdn](https://docs.digitalocean.com/reference/terraform/reference/resources/cdn/)
      - [digitalocean\_certificate](https://docs.digitalocean.com/reference/terraform/reference/resources/certificate/)
      - [digitalocean\_container\_registry](https://docs.digitalocean.com/reference/terraform/reference/resources/container_registry/)
      - [digitalocean\_container\_registry\_docker\_credentials](https://docs.digitalocean.com/reference/terraform/reference/resources/container_registry_docker_credentials/)
      - [digitalocean\_custom\_image](https://docs.digitalocean.com/reference/terraform/reference/resources/custom_image/)
      - [digitalocean\_database\_cluster](https://docs.digitalocean.com/reference/terraform/reference/resources/database_cluster/)
      - [digitalocean\_database\_connection\_pool](https://docs.digitalocean.com/reference/terraform/reference/resources/database_connection_pool/)
      - [digitalocean\_database\_db](https://docs.digitalocean.com/reference/terraform/reference/resources/database_db/)
      - [digitalocean\_database\_firewall](https://docs.digitalocean.com/reference/terraform/reference/resources/database_firewall/)
      - [digitalocean\_database\_kafka\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_config/)
      - [digitalocean\_database\_kafka\_schema\_registry](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_schema_registry/)
      - [digitalocean\_database\_kafka\_topic](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_topic/)
      - [digitalocean\_database\_mongodb\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_mongodb_config/)
      - [digitalocean\_database\_mysql\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_mysql_config/)
      - [digitalocean\_database\_online\_migration](https://docs.digitalocean.com/reference/terraform/reference/resources/database_online_migration/)
      - [digitalocean\_database\_opensearch\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_opensearch_config/)
      - [digitalocean\_database\_postgresql\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_postgresql_config/)
      - [digitalocean\_database\_redis\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_redis_config/)
      - [digitalocean\_database\_replica](https://docs.digitalocean.com/reference/terraform/reference/resources/database_replica/)
      - [digitalocean\_database\_user](https://docs.digitalocean.com/reference/terraform/reference/resources/database_user/)
      - [digitalocean\_database\_valkey\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_valkey_config/)
      - [digitalocean\_domain](https://docs.digitalocean.com/reference/terraform/reference/resources/domain/)
      - [digitalocean\_droplet](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet/)
      - [digitalocean\_droplet\_autoscale](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet_autoscale/)
      - [digitalocean\_droplet\_snapshot](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet_snapshot/)
      - [digitalocean\_firewall](https://docs.digitalocean.com/reference/terraform/reference/resources/firewall/)
      - [digitalocean\_floating\_ip](https://docs.digitalocean.com/reference/terraform/reference/resources/floating_ip/)
      - [digitalocean\_floating\_ip\_assignment](https://docs.digitalocean.com/reference/terraform/reference/resources/floating_ip_assignment/)
      - [digitalocean\_genai\_agent](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/)
      - [digitalocean\_kubernetes\_cluster](https://docs.digitalocean.com/reference/terraform/reference/resources/kubernetes_cluster/)
      - [digitalocean\_kubernetes\_node\_pool](https://docs.digitalocean.com/reference/terraform/reference/resources/kubernetes_node_pool/)
      - [digitalocean\_loadbalancer](https://docs.digitalocean.com/reference/terraform/reference/resources/loadbalancer/)
      - [digitalocean\_monitor\_alert](https://docs.digitalocean.com/reference/terraform/reference/resources/monitor_alert/)
      - [digitalocean\_partner\_attachment](https://docs.digitalocean.com/reference/terraform/reference/resources/partner_network_connect/)
      - [digitalocean\_project](https://docs.digitalocean.com/reference/terraform/reference/resources/project/)
      - [digitalocean\_project\_resources](https://docs.digitalocean.com/reference/terraform/reference/resources/project_resources/)
      - [digitalocean\_record](https://docs.digitalocean.com/reference/terraform/reference/resources/record/)
      - [digitalocean\_reserved\_ip](https://docs.digitalocean.com/reference/terraform/reference/resources/reserved_ip/)
      - [digitalocean\_reserved\_ip\_assignment](https://docs.digitalocean.com/reference/terraform/reference/resources/reserved_ip_assignment/)
      - [digitalocean\_reserved\_ipv6](https://docs.digitalocean.com/reference/terraform/reference/resources/reserved_ipv6/)
      - [digitalocean\_reserved\_ipv6\_assignment](https://docs.digitalocean.com/reference/terraform/reference/resources/reserved_ipv6_assignment/)
      - [digitalocean\_spaces\_bucket](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket/)
      - [digitalocean\_spaces\_bucket\_logging](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket_logging/)
      - [digitalocean\_spaces\_bucket\_object](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket_object/)
      - [digitalocean\_spaces\_bucket\_policy](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket_policy/)
      - [digitalocean\_spaces\_cors\_configuration](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket_cors_configuration/)
      - [digitalocean\_spaces\_key](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_key/)
      - [digitalocean\_ssh\_key](https://docs.digitalocean.com/reference/terraform/reference/resources/ssh_key/)
      - [digitalocean\_tag](https://docs.digitalocean.com/reference/terraform/reference/resources/tag/)
      - [digitalocean\_uptime\_alert](https://docs.digitalocean.com/reference/terraform/reference/resources/uptime_alert/)
      - [digitalocean\_uptime\_check](https://docs.digitalocean.com/reference/terraform/reference/resources/uptime_check/)
      - [digitalocean\_volume](https://docs.digitalocean.com/reference/terraform/reference/resources/volume/)
      - [digitalocean\_volume\_attachment](https://docs.digitalocean.com/reference/terraform/reference/resources/volume_attachment/)
      - [digitalocean\_volume\_snapshot](https://docs.digitalocean.com/reference/terraform/reference/resources/volume_snapshot/)
      - [digitalocean\_vpc](https://docs.digitalocean.com/reference/terraform/reference/resources/vpc/)
      - [digitalocean\_vpc\_nat\_gateway](https://docs.digitalocean.com/reference/terraform/reference/resources/vpc_nat_gateway/)
      - [digitalocean\_vpc\_peering](https://docs.digitalocean.com/reference/terraform/reference/resources/vpc_peering/)
    - [Data Sources](https://docs.digitalocean.com/reference/terraform/reference/data-sources/)
  - [Deploy a Web App](https://docs.digitalocean.com/reference/terraform/deploy-web-app/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Provider Reference](https://docs.digitalocean.com/reference/terraform/reference/)
- [Resources](https://docs.digitalocean.com/reference/terraform/reference/resources/)
- digitalocean\_droplet\_autoscale

[Give Feedback](https://ideas.digitalocean.com/documentation)

# digitalocean\_droplet\_autoscale

Generated on 13 Nov 2025
from Terraform version
[`v2.69.0`](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.69.0)

Provides a DigitalOcean Droplet Autoscale resource. This can be used to create, modify,
read and delete Droplet Autoscale pools.

## Example Usage

```hcl
resource "digitalocean_ssh_key" "my-ssh-key" {
  name       = "terraform-example"
  public_key = file("/Users/terraform/.ssh/id_rsa.pub")
}

resource "digitalocean_tag" "my-tag" {
  name = "terraform-example"
}

resource "digitalocean_droplet_autoscale" "my-autoscale-pool" {
  name = "terraform-example"

  config {
    min_instances             = 10
    max_instances             = 50
    target_cpu_utilization    = 0.5
    target_memory_utilization = 0.5
    cooldown_minutes          = 5
  }

  droplet_template {
    size               = "c-2"
    region             = "nyc3"
    image              = "ubuntu-24-04-x64"
    tags               = [digitalocean_tag.my-tag.id]
    ssh_keys           = [digitalocean_ssh_key.my-ssh-key.id]
    with_droplet_agent = true
    ipv6               = true
    user_data          = "\n#cloud-config\nruncmd:\n- apt-get update\n- apt-get install -y stress-ng\n"
  }
}
```

## Argument Reference

The following arguments are supported:

- `name` \- (Required) The name of the Droplet Autoscale pool.
- `config` \- (Required) The configuration parameters for Droplet Autoscale pool, the supported arguments are
documented below.
- `droplet_template` \- (Required) The droplet template parameters for Droplet Autoscale pool, the supported arguments
are documented below.

`config` supports the following:

- `min_instances` \- The minimum number of instances to maintain in the Droplet Autoscale pool.
- `max_instances` \- The maximum number of instances to maintain in the Droplet Autoscale pool.
- `target_cpu_utilization` \- The target average CPU load (in range `[0, 1]`) to maintain in the Droplet Autoscale pool.
- `target_memory_utilization` \- The target average Memory load (in range `[0, 1]`) to maintain in the Droplet Autoscale
pool.
- `cooldown_minutes` \- The cooldown duration between scaling events for the Droplet Autoscale pool.
- `target_number_instances` \- The static number of instances to maintain in the pool Droplet Autoscale pool. This
argument cannot be used with any other config options.

`droplet_template` supports the following:

- `size` \- (Required) Size slug of the Droplet Autoscale pool underlying resource(s).
- `region` \- (Required) Region slug of the Droplet Autoscale pool underlying resource(s).
- `image` \- (Required) Image slug of the Droplet Autoscale pool underlying resource(s).
- `tags` \- List of tags to add to the Droplet Autoscale pool underlying resource(s).
- `ssh_keys` \- (Required) SSH fingerprints to add to the Droplet Autoscale pool underlying resource(s).
- `vpc_uuid` \- VPC UUID to create the Droplet Autoscale pool underlying resource(s). If not provided, this is inferred
from the specified `region` (default VPC).
- `with_droplet_agent` \- Boolean flag to enable metric agent on the Droplet Autoscale pool underlying resource(s). The
metric agent enables collecting resource utilization metrics, which allows making resource based scaling decisions.
- `project_id` \- Project UUID to create the Droplet Autoscale pool underlying resource(s).
- `ipv6` \- Boolean flag to enable IPv6 networking on the Droplet Autoscale pool underlying resource(s).
- `user_data` \- Custom user data that can be added to the Droplet Autoscale pool underlying resource(s). This can be a
cloud init script that user may configure to setup their application workload.

## Attributes Reference

The following attributes are exported:

- `id` \- The ID of the Droplet Autoscale pool.
- `current_utilization` \- The current average resource utilization of the Droplet Autoscale pool, this attribute further
embeds `memory` and `cpu` attributes to respectively report utilization data.
- `status` \- Droplet Autoscale pool health status; this reflects if the pool is currently healthy and ready to accept
traffic, or in an error state and needs user intervention.
- `created_at` \- Created at timestamp for the Droplet Autoscale pool.
- `updated_at` \- Updated at timestamp for the Droplet Autoscale pool.

## Import

Droplet Autoscale pools can be imported using their `id`, e.g.

```
terraform import digitalocean_droplet_autoscale.my-autoscale-pool 38e66834-d741-47ec-88e7-c70cbdcz0445
```

In this article...

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet_autoscale/#example-usage)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet_autoscale/#argument-reference)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet_autoscale/#attributes-reference)
- [Import](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet_autoscale/#import)

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