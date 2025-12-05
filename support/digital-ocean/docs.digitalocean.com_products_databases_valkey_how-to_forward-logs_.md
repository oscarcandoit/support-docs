---
url: "https://docs.digitalocean.com/products/databases/valkey/how-to/forward-logs/"
title: "How to Forward Logs from a Valkey Cluster | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/valkey.f170106c44632502ecb41bfb74b6d22d99f94ad223afccd11be669fedac30b18.svg)Valkey](https://docs.digitalocean.com/products/databases/valkey/)
  - [Getting Started](https://docs.digitalocean.com/products/databases/valkey/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/databases/valkey/getting-started/quickstart/)
    - [Convert Caching to Valkey](https://docs.digitalocean.com/products/databases/valkey/getting-started/convert/)
  - [How-Tos](https://docs.digitalocean.com/products/databases/valkey/how-to/)
    - [Connect to Valkey Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/connect/)
    - [Secure Valkey Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/secure/)
    - [Migrate Valkey Databases](https://docs.digitalocean.com/products/databases/valkey/how-to/migrate/)
    - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/valkey/how-to/schedule-updates/)
    - [Choose Eviction Policies](https://docs.digitalocean.com/products/databases/valkey/how-to/choose-eviction-policies/)
    - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/tag/)
    - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/valkey/how-to/monitor-clusters/)
    - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/valkey/how-to/add-standby-nodes/)
    - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/valkey/how-to/set-up-alerts/)
    - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/relocate/)
    - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/resize/)
    - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/destroy/)
    - [Monitor Valkey Performance](https://docs.digitalocean.com/products/databases/valkey/how-to/monitor-databases/)
    - [Forward Logs](https://docs.digitalocean.com/products/databases/valkey/how-to/forward-logs/)
    - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/reconfigure/)
    - [Create Valkey Clusters](https://docs.digitalocean.com/products/databases/valkey/how-to/create/)
  - [Reference](https://docs.digitalocean.com/products/databases/valkey/reference/)
    - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
    - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
  - [Concepts](https://docs.digitalocean.com/products/databases/valkey/concepts/)
    - [Best Practices](https://docs.digitalocean.com/products/databases/valkey/concepts/best-practices/)
    - [Migration Strategies](https://docs.digitalocean.com/products/databases/valkey/concepts/migration-strategies/)
    - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/valkey/concepts/responsibility-model/)
  - [Details](https://docs.digitalocean.com/products/databases/valkey/details/)
    - [Features](https://docs.digitalocean.com/products/databases/valkey/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/databases/valkey/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/databases/valkey/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/databases/valkey/details/limits/)
    - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)

- [Valkey](https://docs.digitalocean.com/products/databases/valkey/)
- [How-Tos](https://docs.digitalocean.com/products/databases/valkey/how-to/)
- Forward Logs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Forward Logs from a Valkey Cluster

Validated on 24 Apr 2025 • Last edited on 17 Jun 2025

Valkey is a high-performance, open-source database that stores key-value data in memory, and is designed for caching, message queues, and primary database use. Fully compatible with Redis, Valkey serves as a drop-in replacement.

Log forwarding allows you to transmit log data from any number of sources to a centralized database cluster. You can do so by creating and managing log sinks for your database clusters via the [control panel](https://docs.digitalocean.com/products/databases/valkey/how-to/forward-logs/#forward-logs-using-the-control-panel) or the [API](https://docs.digitalocean.com/products/databases/valkey/how-to/forward-logs/#create-a-log-sink-using-the-api). Log forwarding for Valkey supports forwarding to OpenSearch, Elasticsearch, and Rsyslog. You can 1-Click deploy these tools to a Droplet from [the Databases section of the DigitalOcean Marketplace](https://marketplace.digitalocean.com/category/databases).

When forwarding logs to or from Managed Databases, all default configuration options, such as the default logging message level, are determined by the forwarding database engine.

## Create a Log Sink Using the API

To forward logs from managed database clusters, you need to create a log sink using the DigitalOcean API.

Note
To create a log sink using the API, you need to provide values for the `sink_name`, `sink_type`, and `config` fields, which specify the name of the log sink, its type (`rsyslog`, `elasticsearch`, or `opensearch`), and your desired URL or server/port configuration, respectively.
How to Create a Log Sink Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/databases/{database_cluster_uuid}/logsink`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/databases_create_logsink).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"sink_name": "logsink", "sink_type": "rsyslog", "config": {"server": "192.168.10.1", "port": 514, "tls": false, "format": "rfc5424"}}' \
  "https://api.digitalocean.com/v2/databases/9cc10173-e9ea-4176-9dbc-a4cee4c4ff30/logsink"
```

## Forward Logs Using the Control Panel

To forward logs from a database cluster in the control panel, go to the [**Databases** page](https://cloud.digitalocean.com/databases), then select your database cluster. Click the name of the cluster to go to its **Overview** page, then click the **Settings** tab.

![Cluster settings page.](https://docs.digitalocean.com/screenshots/databases/valkey-cluster-settings.628e725968226c9ba0980f2cab426d1b8594ceb4f262ddb1b89e98ed2e4579e2.png)

On the **Settings** page, in the **Log forwarding** section, click **Edit**. Select the service you want to forward logs to.

![Log forwarding service selection screen.](https://docs.digitalocean.com/screenshots/databases/log-forwarding-services.bbbade08490db3970b371fdeb218f6a71124cc8ef885ea6178b967b2c202d074.png)

For OpenSearch and Elasticsearch, enter your destination name, endpoint URL, and index prefix. You can also click **Show advanced configuration options** to edit the log sink’s maximum days to store logs, request timeout (in seconds), and CA certificate for authentication. To confirm your changes, click **Add destination**.

For Rsyslog, enter your destination name, endpoint URL, endpoint port, and message format (RFC5424, RFC3164, or custom). You can also click **Show advanced configuration options** to edit the log sink’s structured data, CA certificate, client key, and client certificate. To confirm your changes, click **Add destination**.

![Forward logs to OpenSearch popup.](https://docs.digitalocean.com/screenshots/databases/forward-logs-to-opensearch.d46b2b9299c4f0c7a12a7398b3ece165caa4fab083414fb2874f9e0d8fc8a081.png)

### Customize Rsyslog Format

If you choose a custom message format for your logsink to Rsyslog, you can use the following tags in limited Rsyslog style templating (`%tag%`): `HOSTNAME`, `app-name`, `msg`, `msgid`, `pri`, `procid`, `structured-data`, `timestamp`, and `timestamp:::date-rfc3339`.

For a list of examples, see the official [Rsyslog documentation](https://www.rsyslog.com/doc/configuration/examples.html).

In this article...

- [Create a Log Sink Using the API](https://docs.digitalocean.com/products/databases/valkey/how-to/forward-logs/#create-a-log-sink-using-the-api)
- [Forward Logs Using the Control Panel](https://docs.digitalocean.com/products/databases/valkey/how-to/forward-logs/#forward-logs-using-the-control-panel)
  - [Customize Rsyslog Format](https://docs.digitalocean.com/products/databases/valkey/how-to/forward-logs/#customize-rsyslog-format)

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