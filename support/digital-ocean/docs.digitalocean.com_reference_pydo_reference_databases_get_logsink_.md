---
url: "https://docs.digitalocean.com/reference/pydo/reference/databases/get_logsink/"
title: "pydo.databases.get_logsink() | DigitalOcean Documentation"
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
  - [Library Reference](https://docs.digitalocean.com/reference/pydo/reference/)
    - [account](https://docs.digitalocean.com/reference/pydo/reference/account/)
    - [actions](https://docs.digitalocean.com/reference/pydo/reference/actions/)
    - [addons](https://docs.digitalocean.com/reference/pydo/reference/addons/)
    - [apps](https://docs.digitalocean.com/reference/pydo/reference/apps/)
    - [autoscalepools](https://docs.digitalocean.com/reference/pydo/reference/autoscalepools/)
    - [balance](https://docs.digitalocean.com/reference/pydo/reference/balance/)
    - [billing\_history](https://docs.digitalocean.com/reference/pydo/reference/billing_history/)
    - [byoip\_prefixes](https://docs.digitalocean.com/reference/pydo/reference/byoip_prefixes/)
    - [cdn](https://docs.digitalocean.com/reference/pydo/reference/cdn/)
    - [certificates](https://docs.digitalocean.com/reference/pydo/reference/certificates/)
    - [databases](https://docs.digitalocean.com/reference/pydo/reference/databases/)
      - [add()](https://docs.digitalocean.com/reference/pydo/reference/databases/add/)
      - [add\_connection\_pool()](https://docs.digitalocean.com/reference/pydo/reference/databases/add_connection_pool/)
      - [add\_user()](https://docs.digitalocean.com/reference/pydo/reference/databases/add_user/)
      - [create\_cluster()](https://docs.digitalocean.com/reference/pydo/reference/databases/create_cluster/)
      - [create\_kafka\_schema()](https://docs.digitalocean.com/reference/pydo/reference/databases/create_kafka_schema/)
      - [create\_kafka\_topic()](https://docs.digitalocean.com/reference/pydo/reference/databases/create_kafka_topic/)
      - [create\_logsink()](https://docs.digitalocean.com/reference/pydo/reference/databases/create_logsink/)
      - [create\_replica()](https://docs.digitalocean.com/reference/pydo/reference/databases/create_replica/)
      - [delete()](https://docs.digitalocean.com/reference/pydo/reference/databases/delete/)
      - [delete\_connection\_pool()](https://docs.digitalocean.com/reference/pydo/reference/databases/delete_connection_pool/)
      - [delete\_kafka\_schema()](https://docs.digitalocean.com/reference/pydo/reference/databases/delete_kafka_schema/)
      - [delete\_kafka\_topic()](https://docs.digitalocean.com/reference/pydo/reference/databases/delete_kafka_topic/)
      - [delete\_logsink()](https://docs.digitalocean.com/reference/pydo/reference/databases/delete_logsink/)
      - [delete\_online\_migration()](https://docs.digitalocean.com/reference/pydo/reference/databases/delete_online_migration/)
      - [delete\_opensearch\_index()](https://docs.digitalocean.com/reference/pydo/reference/databases/delete_opensearch_index/)
      - [delete\_user()](https://docs.digitalocean.com/reference/pydo/reference/databases/delete_user/)
      - [destroy\_cluster()](https://docs.digitalocean.com/reference/pydo/reference/databases/destroy_cluster/)
      - [destroy\_replica()](https://docs.digitalocean.com/reference/pydo/reference/databases/destroy_replica/)
      - [get()](https://docs.digitalocean.com/reference/pydo/reference/databases/get/)
      - [get\_autoscale()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_autoscale/)
      - [get\_ca()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_ca/)
      - [get\_cluster()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_cluster/)
      - [get\_cluster\_metrics\_credentials()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_cluster_metrics_credentials/)
      - [get\_config()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_config/)
      - [get\_connection\_pool()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_connection_pool/)
      - [get\_eviction\_policy()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_eviction_policy/)
      - [get\_kafka\_schema()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_kafka_schema/)
      - [get\_kafka\_schema\_config()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_kafka_schema_config/)
      - [get\_kafka\_schema\_subject\_config()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_kafka_schema_subject_config/)
      - [get\_kafka\_schema\_version()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_kafka_schema_version/)
      - [get\_kafka\_topic()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_kafka_topic/)
      - [get\_logsink()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_logsink/)
      - [get\_migration\_status()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_migration_status/)
      - [get\_replica()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_replica/)
      - [get\_sql\_mode()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_sql_mode/)
      - [get\_user()](https://docs.digitalocean.com/reference/pydo/reference/databases/get_user/)
      - [install\_update()](https://docs.digitalocean.com/reference/pydo/reference/databases/install_update/)
      - [list()](https://docs.digitalocean.com/reference/pydo/reference/databases/list/)
      - [list\_backups()](https://docs.digitalocean.com/reference/pydo/reference/databases/list_backups/)
      - [list\_clusters()](https://docs.digitalocean.com/reference/pydo/reference/databases/list_clusters/)
      - [list\_connection\_pools()](https://docs.digitalocean.com/reference/pydo/reference/databases/list_connection_pools/)
      - [list\_events\_logs()](https://docs.digitalocean.com/reference/pydo/reference/databases/list_events_logs/)
      - [list\_firewall\_rules()](https://docs.digitalocean.com/reference/pydo/reference/databases/list_firewall_rules/)
      - [list\_kafka\_schemas()](https://docs.digitalocean.com/reference/pydo/reference/databases/list_kafka_schemas/)
      - [list\_kafka\_topics()](https://docs.digitalocean.com/reference/pydo/reference/databases/list_kafka_topics/)
      - [list\_logsink()](https://docs.digitalocean.com/reference/pydo/reference/databases/list_logsink/)
      - [list\_opeasearch\_indexes()](https://docs.digitalocean.com/reference/pydo/reference/databases/list_opeasearch_indexes/)
      - [list\_options()](https://docs.digitalocean.com/reference/pydo/reference/databases/list_options/)
      - [list\_replicas()](https://docs.digitalocean.com/reference/pydo/reference/databases/list_replicas/)
      - [list\_users()](https://docs.digitalocean.com/reference/pydo/reference/databases/list_users/)
      - [patch\_config()](https://docs.digitalocean.com/reference/pydo/reference/databases/patch_config/)
      - [promote\_replica()](https://docs.digitalocean.com/reference/pydo/reference/databases/promote_replica/)
      - [reset\_auth()](https://docs.digitalocean.com/reference/pydo/reference/databases/reset_auth/)
      - [update\_autoscale()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_autoscale/)
      - [update\_cluster\_metrics\_credentials()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_cluster_metrics_credentials/)
      - [update\_cluster\_size()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_cluster_size/)
      - [update\_connection\_pool()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_connection_pool/)
      - [update\_eviction\_policy()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_eviction_policy/)
      - [update\_firewall\_rules()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_firewall_rules/)
      - [update\_kafka\_schema\_config()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_kafka_schema_config/)
      - [update\_kafka\_schema\_subject\_config()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_kafka_schema_subject_config/)
      - [update\_kafka\_topic()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_kafka_topic/)
      - [update\_logsink()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_logsink/)
      - [update\_maintenance\_window()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_maintenance_window/)
      - [update\_major\_version()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_major_version/)
      - [update\_online\_migration()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_online_migration/)
      - [update\_region()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_region/)
      - [update\_sql\_mode()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_sql_mode/)
      - [update\_user()](https://docs.digitalocean.com/reference/pydo/reference/databases/update_user/)
    - [domains](https://docs.digitalocean.com/reference/pydo/reference/domains/)
    - [droplet\_actions](https://docs.digitalocean.com/reference/pydo/reference/droplet_actions/)
    - [droplets](https://docs.digitalocean.com/reference/pydo/reference/droplets/)
    - [firewalls](https://docs.digitalocean.com/reference/pydo/reference/firewalls/)
    - [functions](https://docs.digitalocean.com/reference/pydo/reference/functions/)
    - [genai](https://docs.digitalocean.com/reference/pydo/reference/genai/)
    - [image\_actions](https://docs.digitalocean.com/reference/pydo/reference/image_actions/)
    - [images](https://docs.digitalocean.com/reference/pydo/reference/images/)
    - [invoices](https://docs.digitalocean.com/reference/pydo/reference/invoices/)
    - [kubernetes](https://docs.digitalocean.com/reference/pydo/reference/kubernetes/)
    - [load\_balancers](https://docs.digitalocean.com/reference/pydo/reference/load_balancers/)
    - [monitoring](https://docs.digitalocean.com/reference/pydo/reference/monitoring/)
    - [nfs](https://docs.digitalocean.com/reference/pydo/reference/nfs/)
    - [one\_clicks](https://docs.digitalocean.com/reference/pydo/reference/one_clicks/)
    - [partner\_attachments](https://docs.digitalocean.com/reference/pydo/reference/partner_attachments/)
    - [projects](https://docs.digitalocean.com/reference/pydo/reference/projects/)
    - [regions](https://docs.digitalocean.com/reference/pydo/reference/regions/)
    - [registries](https://docs.digitalocean.com/reference/pydo/reference/registries/)
    - [registry](https://docs.digitalocean.com/reference/pydo/reference/registry/)
    - [reserved\_ips](https://docs.digitalocean.com/reference/pydo/reference/reserved_ips/)
    - [reserved\_ips\_actions](https://docs.digitalocean.com/reference/pydo/reference/reserved_ips_actions/)
    - [reserved\_ipv6](https://docs.digitalocean.com/reference/pydo/reference/reserved_ipv6/)
    - [reserved\_ipv6\_actions](https://docs.digitalocean.com/reference/pydo/reference/reserved_ipv6_actions/)
    - [sizes](https://docs.digitalocean.com/reference/pydo/reference/sizes/)
    - [snapshots](https://docs.digitalocean.com/reference/pydo/reference/snapshots/)
    - [spaces\_key](https://docs.digitalocean.com/reference/pydo/reference/spaces_key/)
    - [ssh\_keys](https://docs.digitalocean.com/reference/pydo/reference/ssh_keys/)
    - [tags](https://docs.digitalocean.com/reference/pydo/reference/tags/)
    - [uptime](https://docs.digitalocean.com/reference/pydo/reference/uptime/)
    - [volume\_actions](https://docs.digitalocean.com/reference/pydo/reference/volume_actions/)
    - [volume\_snapshots](https://docs.digitalocean.com/reference/pydo/reference/volume_snapshots/)
    - [volumes](https://docs.digitalocean.com/reference/pydo/reference/volumes/)
    - [vpc\_peerings](https://docs.digitalocean.com/reference/pydo/reference/vpc_peerings/)
    - [vpcnatgateways](https://docs.digitalocean.com/reference/pydo/reference/vpcnatgateways/)
    - [vpcs](https://docs.digitalocean.com/reference/pydo/reference/vpcs/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Library Reference](https://docs.digitalocean.com/reference/pydo/reference/)
- [databases](https://docs.digitalocean.com/reference/pydo/reference/databases/)
- get\_logsink()

[Give Feedback](https://ideas.digitalocean.com/documentation)

# pydo.databases.get\_logsink()

Generated on 25 Nov 2025
from `pydo` version
[`v0.21.0`](https://github.com/digitalocean/pydo/releases/tag/v0.21.0)

## Description

To get a logsink for a database cluster, send a GET request to
`/v2/databases/$DATABASE_ID/logsink/$LOGSINK_ID`.

## Parameters

| Name | Type | Required | Description | Default Value |
| --- | --- | --- | --- | --- |
| `database_cluster_uuid` | string | True | A unique identifier for a database cluster. |  |
| `logsink_id` | string | True | A unique identifier for a logsink of a database cluster |  |

## More Information

See [the API spec for this endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/databases_get_logsink) to view additional detail on responses, headers, parameters, and more.

In this article...

- [Description](https://docs.digitalocean.com/reference/pydo/reference/databases/get_logsink/#description)
- [Parameters](https://docs.digitalocean.com/reference/pydo/reference/databases/get_logsink/#parameters)
- [More Information](https://docs.digitalocean.com/reference/pydo/reference/databases/get_logsink/#more-information)

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