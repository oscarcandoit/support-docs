---
url: "https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/"
title: "How to Forward Logs from a MongoDB Cluster | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/mongodb.15f32316da2692011abce02f393a1ee6db469250230cf1ea962c181c0e9e7de5.svg)MongoDB](https://docs.digitalocean.com/products/databases/mongodb/)
- [Getting Started](https://docs.digitalocean.com/products/databases/mongodb/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/mongodb/getting-started/quickstart/)
  - [Serverless Jamstack Site](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/)
- [How-Tos](https://docs.digitalocean.com/products/databases/mongodb/how-to/)
  - [Create MongoDB Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/create/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/)
  - [Connect to MongoDB Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/connect/)
  - [Import MongoDB Data](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/)
  - [Secure MongoDB Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/secure/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/mongodb/how-to/schedule-updates/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/tag/)
  - [Manage Users and Databases](https://docs.digitalocean.com/products/databases/mongodb/how-to/manage-users-and-databases/)
  - [Upgrade Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/upgrade/)
  - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/mongodb/how-to/add-standby-nodes/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/mongodb/how-to/monitor-clusters/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/mongodb/how-to/set-up-alerts/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/fork-clusters/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/reconfigure/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/mongodb/how-to/restore-from-backups/)
  - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/databases/mongodb/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/mongodb/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/mongodb/concepts/best-practices/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/mongodb/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/mongodb/details/)
  - [Features](https://docs.digitalocean.com/products/databases/mongodb/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/mongodb/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/mongodb/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/mongodb/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/mongodb/details/notifications/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)
- [Support](https://docs.digitalocean.com/products/databases/mongodb/support/)

- [How-Tos](https://docs.digitalocean.com/products/databases/mongodb/how-to/)
- Forward Logs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Forward Logs from a MongoDB Cluster

Validated on 11 Jun 2024 • Last edited on 17 Jun 2025

MongoDB is a source-available cross-platform document-oriented database program for high-volume storage. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

Log forwarding allows you to transmit log data from any number of sources to a centralized database cluster. You can do so by creating and managing log sinks for your database clusters via the [control panel](https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/#forward-logs-using-the-control-panel) or the [API](https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/#create-a-log-sink-using-the-api). MongoDB supports forwarding to OpenSearch and Elasticsearch. You can 1-Click deploy these tools to a Droplet from [the Databases section of the DigitalOcean Marketplace](https://marketplace.digitalocean.com/category/databases).

When forwarding logs to or from Managed Databases, all default configuration options, such as the default logging message level, are determined by the forwarding database engine.

You can only forward logs from Managed MongoDB to Managed OpenSearch if you add the MongoDB cluster’s node IPs to the OpenSearch cluster’s trusted sources.

## Create a Log Sink Using the API

To create a database using the API, you need to provide values for the `sink_name`, `sink_type`, and `config` fields, which specify the name of the log sink, its type (`elasticsearch` or `opensearch`), and your desired URL or server/port configuration, respectively.

How to create a log sink using the DigitalOcean API

To set up log forwarding:

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) with the appropriate scope, and save it for use with the API.

2. Send a POST request to `/v2/databases/$DATABASE_ID/logsink`.


### Payload

```shell
{
  "config": {
    "server": "192.168.0.1",
    "port": 514,
    "tls": false,
    "format": "rfc5424"
  }
}
```

### cURL

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"sink_name": "logsink", "sink_type": "elasticsearch", "config": {"server": "192.168.10.1", "port": 514, "tls": false, "format": "rfc5424"}}' \
  "https://api.digitalocean.com/v2/databases/9cc10173-e9ea-4176-9dbc-a4cee4c4ff30/logsink"
```

## Forward Logs Using the Control Panel

To forward logs from a database cluster in the control panel, go to the [**Databases** page](https://cloud.digitalocean.com/databases), then select your database cluster. Click the name of the cluster to go to its **Overview** page, then click the **Settings** tab.

![Cluster settings page.](https://docs.digitalocean.com/screenshots/databases/mongodb-settings.f2e50a2e41b3bf6613b34bb43b4a7a00e24a4a177b4c9e3273265124ce8ac195.png)

On the **Settings** page, in the **Log forwarding** section, click **Edit**. Select the service you want to forward logs to.

![Log forwarding service selection screen.](https://docs.digitalocean.com/screenshots/databases/mongodb-log-forwarding-services.065e99865b9c4c81a3de28b5f3c787c46d7c6f6719c19ba86b15fd3e65267d6f.png)

Enter your destination name, endpoint URL, and index prefix. You can also click **Show advanced configuration options** to edit the log sink’s maximum days to store logs, request timeout (in seconds), and CA certificate for authentication. To confirm your changes, click **Add destination**.

![Forward logs to OpenSearch popup.](https://docs.digitalocean.com/screenshots/databases/forward-logs-to-opensearch.d46b2b9299c4f0c7a12a7398b3ece165caa4fab083414fb2874f9e0d8fc8a081.png)

In this article...

- [Create a Log Sink Using the API](https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/#create-a-log-sink-using-the-api)
- [Forward Logs Using the Control Panel](https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/#forward-logs-using-the-control-panel)

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