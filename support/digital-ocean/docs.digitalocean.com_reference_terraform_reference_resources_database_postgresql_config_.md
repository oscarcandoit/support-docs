---
url: "https://docs.digitalocean.com/reference/terraform/reference/resources/database_postgresql_config/"
title: "digitalocean_database_postgresql_config | DigitalOcean Documentation"
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
- digitalocean\_database\_postgresql\_config

[Give Feedback](https://ideas.digitalocean.com/documentation)

# digitalocean\_database\_postgresql\_config

Generated on 13 Nov 2025
from Terraform version
[`v2.69.0`](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.69.0)

Provides a virtual resource that can be used to change advanced configuration
options for a DigitalOcean managed PostgreSQL database cluster.

-\> **Note** PostgreSQL configurations are only removed from state when destroyed. The remote configuration is not unset.

## Example Usage

```hcl
resource "digitalocean_database_postgresql_config" "example" {
  cluster_id = digitalocean_database_cluster.example.id
  timezone   = "UTC"
  work_mem   = 16
}

resource "digitalocean_database_cluster" "example" {
  name       = "example-postgresql-cluster"
  engine     = "pg"
  version    = "15"
  size       = "db-s-1vcpu-1gb"
  region     = "nyc1"
  node_count = 1
}
```

## Argument Reference

The following arguments are supported. See the [DigitalOcean API documentation](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases/operation/databases_patch_config)
for additional details on each option.

- `cluster_id` \- (Required) The ID of the target PostgreSQL cluster.
- `autovacuum_freeze_max_age` \- (Optional) Specifies the maximum age (in transactions) that a table’s pg\_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted.
- `autovacuum_max_workers` \- (Optional) Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. The default is three. This parameter can only be set at server start.
- `autovacuum_naptime` \- (Optional) Specifies the minimum delay, in seconds, between autovacuum runs on any given database. The default is one minute.
- `autovacuum_vacuum_threshold` \- (Optional) Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. The default is 50 tuples.
- `autovacuum_analyze_threshold` \- (Optional) Specifies the minimum number of inserted, updated, or deleted tuples needed to trigger an ANALYZE in any one table. The default is 50 tuples.
- `autovacuum_vacuum_scale_factor` \- (Optional) Specifies a fraction, in a decimal value, of the table size to add to autovacuum\_vacuum\_threshold when deciding whether to trigger a VACUUM. The default is 0.2 (20% of table size).
- `autovacuum_analyze_scale_factor` \- (Optional) Specifies a fraction, in a decimal value, of the table size to add to autovacuum\_analyze\_threshold when deciding whether to trigger an ANALYZE. The default is 0.2 (20% of table size).
- `autovacuum_vacuum_cost_delay` \- (Optional) Specifies the cost delay value, in milliseconds, that will be used in automatic VACUUM operations. If -1, uses the regular vacuum\_cost\_delay value, which is 20 milliseconds.
- `autovacuum_vacuum_cost_limit` \- (Optional) Specifies the cost limit value that will be used in automatic VACUUM operations. If -1 is specified (which is the default), the regular vacuum\_cost\_limit value will be used.
- `bgwriter_delay` \- (Optional) Specifies the delay, in milliseconds, between activity rounds for the background writer. Default is 200 ms.
- `bgwriter_flush_after` \- (Optional) The amount of kilobytes that need to be written by the background writer before attempting to force the OS to issue these writes to underlying storage. Specified in kilobytes, default is 512. Setting of 0 disables forced writeback.
- `bgwriter_lru_maxpages` \- (Optional) The maximum number of buffers that the background writer can write. Setting this to zero disables background writing. Default is 100.
- `bgwriter_lru_multiplier` \- (Optional) The average recent need for new buffers is multiplied by bgwriter\_lru\_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter\_lru\_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is 2.0.
- `deadlock_timeout` \- (Optional) The amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.
- `default_toast_compression` \- (Optional) Specifies the default TOAST compression method for values of compressible columns (the default is lz4). Supported values are: `lz4`, `pglz`.
- `idle_in_transaction_session_timeout` \- (Optional) Time out sessions with open transactions after this number of milliseconds
- `jit` \- (Optional) Activates, in a boolean, the system-wide use of Just-in-Time Compilation (JIT).
- `log_autovacuum_min_duration` \- (Optional) Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. Setting this to zero logs all autovacuum actions. Minus-one (the default) disables logging autovacuum actions.
- `log_error_verbosity` \- (Optional) Controls the amount of detail written in the server log for each message that is logged. Supported values are: `TERSE`, `DEFAULT`, `VERBOSE`.
- `log_line_prefix` \- (Optional) Selects one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze, etc. Supported values are: `pid=%p,user=%u,db=%d,app=%a,client=%h`, `%m [%p] %q[user=%u,db=%d,app=%a]`, `%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h`.
- `log_min_duration_statement` \- (Optional) Log statements that take more than this number of milliseconds to run. If -1, disables.
- `max_files_per_process` \- (Optional) PostgreSQL maximum number of files that can be open per process.
- `max_prepared_transactions` \- (Optional) PostgreSQL maximum prepared transactions. Once increased, this parameter cannot be lowered from its set value.
- `max_pred_locks_per_transaction` \- (Optional) PostgreSQL maximum predicate locks per transaction.
- `max_locks_per_transaction` \- (Optional) PostgreSQL maximum locks per transaction. Once increased, this parameter cannot be lowered from its set value.
- `max_stack_depth` \- (Optional) Maximum depth of the stack in bytes.
- `max_standby_archive_delay` \- (Optional) Max standby archive delay in milliseconds.
- `max_standby_streaming_delay` \- (Optional) Max standby streaming delay in milliseconds.
- `max_replication_slots` \- (Optional) PostgreSQL maximum replication slots.
- `max_logical_replication_workers` \- (Optional) PostgreSQL maximum logical replication workers (taken from the pool of max\_parallel\_workers).
- `max_parallel_workers` \- (Optional) Sets the maximum number of workers that the system can support for parallel queries.
- `max_parallel_workers_per_gather` \- (Optional) Sets the maximum number of workers that can be started by a single Gather or Gather Merge node.
- `max_worker_processes` \- (Optional) Sets the maximum number of background processes that the system can support. Once increased, this parameter cannot be lowered from its set value.
- `pg_partman_bgw_role` \- (Optional) Controls which role to use for pg\_partman’s scheduled background tasks. Must consist of alpha-numeric characters, dots, underscores, or dashes. May not start with dash or dot. Maximum of 64 characters.
- `pg_partman_bgw_interval` \- (Optional) Sets the time interval to run pg\_partman’s scheduled tasks.
- `pg_stat_statements_track` \- (Optional) Controls which statements are counted. Specify ’top’ to track top-level statements (those issued directly by clients), ‘all’ to also track nested statements (such as statements invoked within functions), or ’none’ to disable statement statistics collection. The default value is top. Supported values are: `all`, `top`, `none`.
- `temp_file_limit` \- (Optional) PostgreSQL temporary file limit in KiB. If -1, sets to unlimited.
- `timezone` \- (Optional) PostgreSQL service timezone
- `track_activity_query_size` \- (Optional) Specifies the number of bytes reserved to track the currently executing command for each active session.
- `track_commit_timestamp` \- (Optional) Record commit time of transactions. The default value is top. Supported values are: `off`, `on`.
- `track_functions` \- (Optional) Enables tracking of function call counts and time used. The default value is top. Supported values are: `all`, `pl`, `none`.
- `track_io_timing` \- (Optional) Enables timing of database I/O calls. This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms. The default value is top. Supported values are: `off`, `on`.
- `max_wal_senders` \- (Optional) PostgreSQL maximum WAL senders. Once increased, this parameter cannot be lowered from its set value.
- `wal_sender_timeout` \- (Optional) Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. Setting this value to zero disables the timeout. Must be either 0 or between 5000 and 10800000.
- `wal_writer_delay` \- (Optional) WAL flush interval in milliseconds. Note that setting this value to lower than the default 200ms may negatively impact performance
- `shared_buffers_percentage` \- (Optional) Percentage of total RAM that the database server uses for shared memory buffers. Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the shared\_buffers configuration value.
- `pgbouncer` \- (Optional) PGBouncer connection pooling settings
- `backup_hour` \- (Optional) The hour of day (in UTC) when backup for the service starts. New backup only starts if previous backup has already completed.
- `backup_minute` \- (Optional) The minute of the backup hour when backup for the service starts. New backup is only started if previous backup has already completed.
- `work_mem` \- (Optional) The maximum amount of memory, in MB, used by a query operation (such as a sort or hash table) before writing to temporary disk files. Default is 1MB + 0.075% of total RAM (up to 32MB).
- `timescaledb` \- (Optional) TimescaleDB extension configuration values

## Attributes Reference

All above attributes are exported. If an attribute was set outside of Terraform, it will be computed.

## Import

A PostgreSQL database cluster’s configuration can be imported using the `id` the parent cluster, e.g.

```bash
terraform import digitalocean_database_postgresql_config.example 52556c07-788e-4d41-b8a7-c796432197d1
```

In this article...

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/resources/database_postgresql_config/#example-usage)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/database_postgresql_config/#argument-reference)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/database_postgresql_config/#attributes-reference)
- [Import](https://docs.digitalocean.com/reference/terraform/reference/resources/database_postgresql_config/#import)

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