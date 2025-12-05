---
url: "https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_topic/"
title: "digitalocean_database_kafka_topic | DigitalOcean Documentation"
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
- digitalocean\_database\_kafka\_topic

[Give Feedback](https://ideas.digitalocean.com/documentation)

# digitalocean\_database\_kafka\_topic

Generated on 13 Nov 2025
from Terraform version
[`v2.69.0`](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.69.0)

Provides a DigitalOcean Kafka topic for Kafka clusters.

## Example Usage

### Create a new Kafka topic

```hcl
resource "digitalocean_database_kafka_topic" "topic-01" {
  cluster_id         = digitalocean_database_cluster.kafka-example.id
  name               = "topic-01"
  partition_count    = 3
  replication_factor = 2
  config {
    cleanup_policy                      = "compact"
    compression_type                    = "uncompressed"
    delete_retention_ms                 = 14000
    file_delete_delay_ms                = 170000
    flush_messages                      = 92233
    flush_ms                            = 92233720368
    index_interval_bytes                = 40962
    max_compaction_lag_ms               = 9223372036854775807
    max_message_bytes                   = 1048588
    message_down_conversion_enable      = true
    message_format_version              = "3.0-IV1"
    message_timestamp_difference_max_ms = 9223372036854775807
    message_timestamp_type              = "log_append_time"
    min_cleanable_dirty_ratio           = 0.5
    min_compaction_lag_ms               = 20000
    min_insync_replicas                 = 2
    preallocate                         = false
    retention_bytes                     = -1
    retention_ms                        = -1
    segment_bytes                       = 209715200
    segment_index_bytes                 = 10485760
    segment_jitter_ms                   = 0
    segment_ms                          = 604800000
  }
}

resource "digitalocean_database_cluster" "kafka-example" {
  name       = "example-kafka-cluster"
  engine     = "kafka"
  version    = "3.5"
  size       = "db-s-2vcpu-2gb"
  region     = "nyc1"
  node_count = 3
  tags       = ["production"]
}
```

## Argument Reference

The following arguments are supported:

- `cluster_id` \- (Required) The ID of the source database cluster. Note: This must be a Kafka cluster.
- `name` \- (Required) The name for the topic.
- `partition_count` \- (Optional) The number of partitions for the topic. Default and minimum set at 3, maximum is 2048.
- `replication_factor` \- (Optional) The number of nodes that topics are replicated across. Default and minimum set at 2, maximum is the number of nodes in the cluster.
- `config` \- (Optional) A set of advanced configuration parameters. Defaults will be set for any of the parameters that are not included.
The `config` block is documented below.

`config` supports the following:

- `cleanup_policy` \- (Optional) The topic cleanup policy that describes whether messages should be deleted, compacted, or both when retention policies are violated.
This may be one of “delete”, “compact”, or “compact\_delete”.
- `compression_type` \- (Optional) The topic compression codecs used for a given topic.
This may be one of “uncompressed”, “gzip”, “snappy”, “lz4”, “producer”, “zstd”. “uncompressed” indicates that there is no compression and “producer” retains the original compression codec set by the producer.
- `delete_retention_ms` \- (Optional) The amount of time, in ms, that deleted records are retained.
- `file_delete_delay_ms` \- (Optional) The amount of time, in ms, to wait before deleting a topic log segment from the filesystem.
- `flush_messages` \- (Optional) The number of messages accumulated on a topic partition before they are flushed to disk.
- `flush_ms` \- (Optional) The maximum time, in ms, that a topic is kept in memory before being flushed to disk.
- `index_interval_bytes` \- (Optional) The interval, in bytes, in which entries are added to the offset index.
- `max_compaction_lag_ms` \- (Optional) The maximum time, in ms, that a particular message will remain uncompacted. This will not apply if the `compression_type` is set to “uncompressed” or it is set to `producer` and the producer is not using compression.
- `max_message_bytes` \- (Optional) The maximum size, in bytes, of a message.
- `message_down_conversion_enable` \- (Optional) Determines whether down-conversion of message formats for consumers is enabled.
- `message_format_version` \- (Optional) The version of the inter-broker protocol that will be used. This may be one of “0.8.0”, “0.8.1”, “0.8.2”, “0.9.0”, “0.10.0”, “0.10.0-IV0”, “0.10.0-IV1”, “0.10.1”, “0.10.1-IV0”, “0.10.1-IV1”, “0.10.1-IV2”, “0.10.2”, “0.10.2-IV0”, “0.11.0”, “0.11.0-IV0”, “0.11.0-IV1”, “0.11.0-IV2”, “1.0”, “1.0-IV0”, “1.1”, “1.1-IV0”, “2.0”, “2.0-IV0”, “2.0-IV1”, “2.1”, “2.1-IV0”, “2.1-IV1”, “2.1-IV2”, “2.2”, “2.2-IV0”, “2.2-IV1”, “2.3”, “2.3-IV0”, “2.3-IV1”, “2.4”, “2.4-IV0”, “2.4-IV1”, “2.5”, “2.5-IV0”, “2.6”, “2.6-IV0”, “2.7”, “2.7-IV0”, “2.7-IV1”, “2.7-IV2”, “2.8”, “2.8-IV0”, “2.8-IV1”, “3.0”, “3.0-IV0”, “3.0-IV1”, “3.1”, “3.1-IV0”, “3.2”, “3.2-IV0”, “3.3”, “3.3-IV0”, “3.3-IV1”, “3.3-IV2”, “3.3-IV3”, “3.4”, “3.4-IV0”, “3.5”, “3.5-IV0”, “3.5-IV1”, “3.5-IV2”, “3.6”, “3.6-IV0”, “3.6-IV1”, “3.6-IV2”.
- `message_timestamp_difference_max_ms` \- (Optional) The maximum difference, in ms, between the timestamp specific in a message and when the broker receives the message.
- `message_timestamp_type` \- (Optional) Specifies which timestamp to use for the message. This may be one of “create\_time” or “log\_append\_time”.
- `min_cleanable_dirty_ratio` \- (Optional) A scale between 0.0 and 1.0 which controls the frequency of the compactor. Larger values mean more frequent compactions. This is often paired with `max_compaction_lag_ms` to control the compactor frequency.
- `min_insync_replicas` \- (Optional) The number of replicas that must acknowledge a write before it is considered successful. -1 is a special setting to indicate that all nodes must ack a message before a write is considered successful. Default is 1, indicating at least 1 replica must acknowledge a write to be considered successful.
- `preallocate` \- (Optional) Determines whether to preallocate a file on disk when creating a new log segment within a topic.
- `retention_bytes` \- (Optional) The maximum size, in bytes, of a topic before messages are deleted. -1 is a special setting indicating that this setting has no limit.
- `retention_ms` \- (Optional) The maximum time, in ms, that a topic log file is retained before deleting it. -1 is a special setting indicating that this setting has no limit.
- `segment_bytes` \- (Optional) The maximum size, in bytes, of a single topic log file.
- `segment_index_bytes` \- (Optional) The maximum size, in bytes, of the offset index.
- `segment_jitter_ms` \- (Optional) The maximum time, in ms, subtracted from the scheduled segment disk flush time to avoid the thundering herd problem for segment flushing.
- `segment_ms` \- (Optional) The maximum time, in ms, before the topic log will flush to disk.

## Attributes Reference

In addition to the above arguments, the following attributes are exported:

- `state` \- The current status of the topic. Possible values are ‘active’, ‘configuring’, and ‘deleting’.

## Import

Topics can be imported using the `id` of the source cluster and the `name` of the topic joined with a comma. For example:

```
terraform import digitalocean_database_kafka_topic.topic-01 245bcfd0-7f31-4ce6-a2bc-475a116cca97,topic-01
```

In this article...

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_topic/#example-usage)
  - [Create a new Kafka topic](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_topic/#create-a-new-kafka-topic)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_topic/#argument-reference)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_topic/#attributes-reference)
- [Import](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_topic/#import)

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