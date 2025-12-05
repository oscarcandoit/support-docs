---
url: "https://docs.digitalocean.com/reference/terraform/reference/resources/database_opensearch_config/"
title: "digitalocean_database_opensearch_config | DigitalOcean Documentation"
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
- digitalocean\_database\_opensearch\_config

[Give Feedback](https://ideas.digitalocean.com/documentation)

# digitalocean\_database\_opensearch\_config

Generated on 13 Nov 2025
from Terraform version
[`v2.69.0`](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.69.0)

Provides a virtual resource that can be used to change advanced configuration
options for a DigitalOcean managed Opensearch database cluster.

-\> **Note** Opensearch configurations are only removed from state when destroyed. The remote configuration is not unset.

## Example Usage

```hcl
resource "digitalocean_database_opensearch_config" "example" {
  cluster_id                                            = digitalocean_database_cluster.example.id
  ism_enabled                                           = true
  ism_history_enabled                                   = true
  ism_history_max_age_hours                             = 24
  ism_history_max_docs                                  = 2500000
  ism_history_rollover_check_period_hours               = 8
  ism_history_rollover_retention_period_days            = 30
  http_max_content_length_bytes                         = 100000000
  http_max_header_size_bytes                            = 8192
  http_max_initial_line_length_bytes                    = 4096
  indices_query_bool_max_clause_count                   = 1024
  search_max_buckets                                    = 10000
  indices_fielddata_cache_size_percentage               = 3
  indices_memory_index_buffer_size_percentage           = 10
  indices_memory_min_index_buffer_size_mb               = 48
  indices_memory_max_index_buffer_size_mb               = 3
  indices_queries_cache_size_percentage                 = 10
  indices_recovery_max_mb_per_sec                       = 40
  indices_recovery_max_concurrent_file_chunks           = 2
  action_auto_create_index_enabled                      = true
  action_destructive_requires_name                      = false
  enable_security_audit                                 = false
  thread_pool_search_size                               = 1
  thread_pool_search_throttled_size                     = 1
  thread_pool_search_throttled_queue_size               = 10
  thread_pool_search_queue_size                         = 10
  thread_pool_get_size                                  = 1
  thread_pool_get_queue_size                            = 10
  thread_pool_analyze_size                              = 1
  thread_pool_analyze_queue_size                        = 10
  thread_pool_write_size                                = 1
  thread_pool_write_queue_size                          = 10
  thread_pool_force_merge_size                          = 1
  override_main_response_version                        = false
  script_max_compilations_rate                          = "use-context"
  cluster_max_shards_per_node                           = 100
  cluster_routing_allocation_node_concurrent_recoveries = 2
  plugins_alerting_filter_by_backend_roles_enabled      = false
  reindex_remote_whitelist                              = ["cloud.digitalocean.com:8080"]
}

resource "digitalocean_database_cluster" "example" {
  name       = "example-opensearch-cluster"
  engine     = "opensearch"
  version    = "2"
  size       = "db-s-1vcpu-2gb"
  region     = "nyc3"
  node_count = 1
}
```

## Argument Reference

The following arguments are supported. See the [DigitalOcean API documentation](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases/operation/databases_patch_config)
for additional details on each option.

- `cluster_id` \- (Required) The ID of the target Opensearch cluster.
- `ism_enabled` \- (Optional) Specifies whether ISM is enabled or not. Default: `true`
- `ism_history_enabled` \- (Optional) Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document. Default: `true`
- `ism_history_max_age_hours` \- (Optional) Maximum age before rolling over the audit history index, in hours. Default: `24`
- `ism_history_max_docs` \- (Optional) Maximum number of documents before rolling over the audit history index. Default: `2500000`
- `ism_history_rollover_check_period_hours` \- (Optional) The time between rollover checks for the audit history index, in hours. Default: `8`
- `ism_history_rollover_retention_period_days` \- (Optional) Length of time long audit history indices are kept, in days. Default: `30`
- `http_max_content_length_bytes` \- (Optional) Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes. Default: `100000000`
- `http_max_header_size_bytes` \- (Optional) Maximum size of allowed headers, in bytes. Default: `8192`
- `http_max_initial_line_length_bytes` \- (Optional) Maximum length of an HTTP URL, in bytes. Default: `4096`
- `indices_query_bool_max_clause_count` \- (Optional) Maximum number of clauses Lucene BooleanQuery can have. Only increase it if necessary, as it may cause performance issues. Default: `1024`
- `search_max_buckets` \- (Optional) Maximum number of aggregation buckets allowed in a single response. Default: `10000`
- `indices_fielddata_cache_size_percentage` \- (Optional) Maximum amount of heap memory used for field data cache, expressed as a percentage. Decreasing the value too much will increase overhead of loading field data. Increasing the value too much will decrease amount of heap available for other operations.
- `indices_memory_index_buffer_size_percentage` \- (Optional) Total amount of heap used for indexing buffer before writing segments to disk, expressed as a percentage. Too low value will slow down indexing; too high value will increase indexing performance but causes performance issues for query performance. Default: `10`
- `indices_memory_min_index_buffer_size_mb` \- (Optional) Minimum amount of heap used for indexing buffer before writing segments to disk, in mb. Works in conjunction with indices\_memory\_index\_buffer\_size\_percentage, each being enforced. Default: `48`
- `indices_memory_max_index_buffer_size_mb` \- (Optional) Maximum amount of heap used for indexing buffer before writing segments to disk, in mb. Works in conjunction with indices\_memory\_index\_buffer\_size\_percentage, each being enforced. The default is unbounded.
- `indices_queries_cache_size_percentage` \- (Optional) Maximum amount of heap used for query cache. Too low value will decrease query performance and increase performance for other operations; too high value will cause issues with other functionality. Default: `10`
- `indices_recovery_max_mb_per_sec` \- (Optional) Limits total inbound and outbound recovery traffic for each node, expressed in mb per second. Applies to both peer recoveries as well as snapshot recoveries (i.e., restores from a snapshot). Default: `40`
- `indices_recovery_max_concurrent_file_chunks` \- (Optional) Maximum number of file chunks sent in parallel for each recovery. Default: `2`
- `action_auto_create_index_enabled` \- (Optional) Specifices whether to allow automatic creation of indices. Default: `true`
- `action_destructive_requires_name` \- (Optional) Specifies whether to require explicit index names when deleting indices.
- `enable_security_audit` \- (Optional) Specifies whether to allow security audit logging. Default: `false`
- `thread_pool_search_size` \- (Optional) Number of workers in the search operation thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
- `thread_pool_search_throttled_size` \- (Optional) Number of workers in the search throttled operation thread pool. This pool is used for searching frozen indices. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
- `thread_pool_search_throttled_queue_size` \- (Optional) Size of queue for operations in the search throttled thread pool.
- `thread_pool_search_queue_size` \- (Optional) Size of queue for operations in the search thread pool.
- `thread_pool_get_size` \- (Optional) Number of workers in the get operation thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
- `thread_pool_get_queue_size` \- (Optional) Size of queue for operations in the get thread pool.
- `thread_pool_analyze_size` \- (Optional) Number of workers in the analyze operation thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
- `thread_pool_analyze_queue_size` \- (Optional) Size of queue for operations in the analyze thread pool.
- `thread_pool_write_size` \- (Optional) Number of workers in the write operation thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
- `thread_pool_write_queue_size` \- (Optional) Size of queue for operations in the write thread pool.
- `thread_pool_force_merge_size` \- (Optional) Number of workers in the force merge operation thread pool. This pool is used for forcing a merge between shards of one or more indices. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
- `override_main_response_version` \- (Optional) Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default: `false`
- `script_max_compilations_rate` \- (Optional) Limits the number of inline script compilations within a period of time. Default is `use-context`
- `cluster_max_shards_per_node` \- (Optional) Maximum number of shards allowed per data node.
- `cluster_routing_allocation_node_concurrent_recoveries` \- (Optional) Maximum concurrent incoming/outgoing shard recoveries (normally replicas) are allowed to happen per node. Default: `2`
- `plugins_alerting_filter_by_backend_roles_enabled` \- (Optional) Enable or disable filtering of alerting by backend roles. Default: `false`
- `reindex_remote_whitelist` \- (Optional) Allowlist of remote IP addresses for reindexing. Changing this value will cause all OpenSearch instances to restart.

## Attributes Reference

All above attributes are exported. If an attribute was set outside of Terraform, it will be computed.

## Import

A Opensearch database cluster’s configuration can be imported using the `id` the parent cluster, e.g.

```
terraform import digitalocean_database_opensearch_config.example 4b62829a-9c42-465b-aaa3-84051048e712
```

In this article...

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/resources/database_opensearch_config/#example-usage)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/database_opensearch_config/#argument-reference)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/database_opensearch_config/#attributes-reference)
- [Import](https://docs.digitalocean.com/reference/terraform/reference/resources/database_opensearch_config/#import)

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