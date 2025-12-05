---
url: "https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/"
title: "How to Forward Logs from a MySQL Cluster | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/mysql.15f32316da2692011abce02f393a1ee6db469250230cf1ea962c181c0e9e7de5.svg)MySQL](https://docs.digitalocean.com/products/databases/mysql/)
- [Getting Started](https://docs.digitalocean.com/products/databases/mysql/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/mysql/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/databases/mysql/how-to/)
  - [Create MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/create/)
  - [Connect to MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/connect/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/resize/)
  - [Import Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/import-databases/)
  - [Secure MySQL Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/secure/)
  - [Migrate MySQL Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/migrate/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/mysql/how-to/schedule-updates/)
  - [Manage Users and Databases](https://docs.digitalocean.com/products/databases/mysql/how-to/manage-users-and-databases/)
  - [Modify User Privileges](https://docs.digitalocean.com/products/databases/mysql/how-to/modify-user-privileges/)
  - [Monitor MySQL Performance](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-databases/)
  - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/mysql/how-to/add-standby-nodes/)
  - [Add Read-Only Nodes](https://docs.digitalocean.com/products/databases/mysql/how-to/add-read-only-nodes/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/mysql/how-to/monitor-clusters/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/mysql/how-to/set-up-alerts/)
  - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/relocate/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/fork-clusters/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/mysql/how-to/restore-from-backups/)
  - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/destroy/)
  - [Set Global SQL Mode](https://docs.digitalocean.com/products/databases/mysql/how-to/set-sql-mode/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/tag/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mysql/how-to/reconfigure/)
  - [Create Primary Keys](https://docs.digitalocean.com/products/databases/mysql/how-to/create-primary-keys/)
- [Reference](https://docs.digitalocean.com/products/databases/mysql/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/mysql/concepts/)
  - [Migration Strategies](https://docs.digitalocean.com/products/databases/mysql/concepts/migration-strategies/)
  - [Sort Buffer Size](https://docs.digitalocean.com/products/databases/mysql/concepts/sort-buffer-size/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/mysql/concepts/best-practices/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/mysql/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/mysql/details/)
  - [Features](https://docs.digitalocean.com/products/databases/mysql/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/mysql/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/mysql/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/mysql/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/mysql/details/notifications/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)
- [Support](https://docs.digitalocean.com/products/databases/mysql/support/)

- [How-Tos](https://docs.digitalocean.com/products/databases/mysql/how-to/)
- Forward Logs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Forward Logs from a MySQL Cluster

Validated on 11 Jun 2024 • Last edited on 17 Jun 2025

MySQL is an open source, object-relational database built with speed and reliability in mind. Its large and active developer community has created many third-party applications, tools, and libraries that expand MySQL’s functionality.

Log forwarding allows you to transmit log data from any number of sources to a centralized database cluster. You can do so by creating and managing log sinks for your database clusters via the [control panel](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/#forward-logs-using-the-control-panel) or the [API](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/#create-a-log-sink-using-the-api). MySQL supports forwarding to OpenSearch, Elasticsearch, and Rsyslog. You can 1-Click deploy these tools to a Droplet from [the Databases section of the DigitalOcean Marketplace](https://marketplace.digitalocean.com/category/databases).

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

![Cluster settings page.](https://docs.digitalocean.com/screenshots/databases/mysql-settings.8e567339b4ab0f4f5db066b1b83fa2e01d2f4b9df6fbc99a1fae53f08649f2d2.png)

On the **Settings** page, in the **Log forwarding** section, click **Edit**. Select the service you want to forward logs to.

![Log forwarding service selection screen.](https://docs.digitalocean.com/screenshots/databases/log-forwarding-services.bbbade08490db3970b371fdeb218f6a71124cc8ef885ea6178b967b2c202d074.png)

For OpenSearch and Elasticsearch, enter your destination name, endpoint URL, and index prefix. You can also click **Show advanced configuration options** to edit the log sink’s maximum days to store logs, request timeout (in seconds), and CA certificate for authentication. To confirm your changes, click **Add destination**.

For Rsyslog, enter your destination name, endpoint URL, endpoint port, and message format (RFC5424, RFC3164, or custom). You can also click **Show advanced configuration options** to edit the log sink’s structured data, CA certificate, client key, and client certificate. To confirm your changes, click **Add destination**.

![Forward logs to OpenSearch popup.](https://docs.digitalocean.com/screenshots/databases/forward-logs-to-opensearch.d46b2b9299c4f0c7a12a7398b3ece165caa4fab083414fb2874f9e0d8fc8a081.png)

### Customize Rsyslog Format

If you choose a custom message format for your logsink to Rsyslog, you can use the following tags in limited Rsyslog style templating (`%tag%`): `HOSTNAME`, `app-name`, `msg`, `msgid`, `pri`, `procid`, `structured-data`, `timestamp`, and `timestamp:::date-rfc3339`.

For a list of examples, see the official [Rsyslog documentation](https://www.rsyslog.com/doc/configuration/examples.html).

In this article...

- [Create a Log Sink Using the API](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/#create-a-log-sink-using-the-api)
- [Forward Logs Using the Control Panel](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/#forward-logs-using-the-control-panel)
  - [Customize Rsyslog Format](https://docs.digitalocean.com/products/databases/mysql/how-to/forward-logs/#customize-rsyslog-format)

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