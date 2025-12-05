---
url: "https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/"
title: "How to Import MongoDB Data | DigitalOcean Documentation"
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
- Import MongoDB Data

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Import MongoDB Data

Validated on 18 Mar 2024 • Last edited on 16 Apr 2025

MongoDB is a source-available cross-platform document-oriented database program for high-volume storage. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

To import databases with the DigitalOcean Managed Databases MongoDB engine, you need:

- A **MongoDB client**, like the [mongo Shell](https://www.mongodb.com/docs/mongodb-shell/) or [`mongoimport`](https://www.mongodb.com/try/download/database-tools) which is part of MongoDB Database Tools.

- The database file stored locally on the same machine as your MongoDB client. If you are experimenting with MongoDB, you can download a [sample database file](https://docs.atlas.mongodb.com/sample-data/available-sample-datasets) from MongoDB’s official website. Otherwise, see how to [export data from your database](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/#export-data).

- The database’s connection details. To get the database’s connection parameters from your control panel, visit [the Databases page](https://cloud.digitalocean.com/databases) for your database. On the **Overview** tab, the Connection Details panel has your **Connection string**.


![Databases Overview screen showing connection string](https://docs.digitalocean.com/screenshots/databases/mongodb-connection-details.172d40650dd0c1a55ab20b9a47e443a62548e3f6599ff0ce5dedbe252a52f836.png)

## Import Data

To import data to a MongoDB database, you can [use `mongoimport`](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/#import-with-mongoimport) to import specific collections data, or you can [use `mongorestore`](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/#import-with-mongorestore) to import a binary (BSON) full database backup. The exported database file must be stored locally on the same machine as your client.

### Import with `mongoimport`

The `mongoimport` command imports content from a JSON, CSV, or TSV export to your database. It requires values for the following flags:

- `--uri`: The cluster’s connection string to the target database.
- `--collection`: The name of the new collection you are creating.

You can find the cluster’s connection string by referencing the [connection details](https://docs.digitalocean.com/products/databases/mongodb/how-to/connect/#connection-details) of your cluster.

The `mongoimport` command uses the following syntax:

```shell
mongoimport --uri "<cluster-connection-string>"  --collection test  test.json
```

An example command looks like this:

```shell
mongoimport --uri "mongodb+srv://doadmin:<replace-with-your-password>@db-mongodb-nyc3-73883-4aef1b0f.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=db-mongodb-nyc3-73883&tls=true"  --collection test  test.json
```

A successful import returns:

```shell
2022-07-18T14:39:42.151-0400	connected to: mongodb://db-mongodb-nyc3-73883-4aef1b0f.mongo.ondigitalocean.com:27017/
2022-07-18T14:39:42.151-0400	1 document(s) imported successfully. 0 document(s) failed to import.
```

Once you have imported the database file, you can verify it imported by [connecting to the cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/connect/#connection-details) and running the following command from the MongoDB shell:

```shell
show collections
```

The command returns a list of collection names.

### Import with `mongorestore`

The `mongoimport` command imports content from a JSON, CSV, or TSV export to your database. It requires values for the following flags:

- `--uri`: The cluster’s connection string to the target database.

You can find the cluster’s connection string by referencing the [connection details](https://docs.digitalocean.com/products/databases/mongodb/how-to/connect/#connection-details) of your cluster.

The `mongoimport` command uses the following syntax:

```shell
mongorestore --uri "<cluster-connection-string>" /path/of/dump
```

An example command looks like this:

```shell
mongorestore --uri "mongodb+srv://doadmin:<replace-with-your-password>@db-mongodb-nyc3-73883-4aef1b0f.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=db-mongodb-nyc3-73883&tls=true" /path/of/dump
```

A successful import returns:

```shell
2022-07-18T14:39:42.151-0400	0 document(s) restored successfully. 0 document(s) failed to restore.
```

Once you have imported the database file, you can verify it imported by [connecting to the cluster](https://docs.digitalocean.com/products/databases/mongodb/how-to/connect/#connection-details) and running the following command from the MongoDB shell:

```shell
show collections
```

The command returns a list of collection names.

## Export Data

To export data from a MongoDB database, you can [use `mongoexport`](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/#export-with-mongoexport) to export specific collections data, or you can [use `mongodump`](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/#export-with-mongodump) to export a binary (BSON) full database backup.

### Export with `mongoexport`

The `mongoexport` command produces a JSON, CSV, or TSV export from your database. It requires values for the following flags:

- `--uri`: The cluster’s connection string to the target database.
- `--collection`: The name of the new collection you are creating.
- `--out`: The export’s file format (JSON, CSV, or TSV).

You can find the cluster’s connection string by referencing the [connection details](https://docs.digitalocean.com/products/databases/mongodb/how-to/connect/#connection-details) of your cluster.

The `mongoexport` command uses the following syntax:

```shell
mongoexport --uri "<cluster-connection-string>" --collection test --out test.json
```

An example command looks like this:

```shell
mongoexport --uri "mongodb+srv://doadmin:<replace-with-your-password>@db-mongodb-nyc3-73883-4aef1b0f.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=db-mongodb-nyc3-73883&tls=true" --collection test --out test.json
```

A successful export returns:

```shell
2022-07-18T14:39:42.151-0400	connected to: mongodb://db-mongodb-nyc3-73883-4aef1b0f.mongo.ondigitalocean.com:27017/
2022-07-18T14:39:42.151-0400	exported X records
```

### Export with `mongodump`

The `mongodump` command produces a binary (BSON) full backup of your database. It requires values for the following flags:

- `--uri`: The cluster’s connection string to the target database.
- `--out`: The export’s file format (JSON, CSV, or TSV).

You can find the cluster’s connection string by referencing the [connection details](https://docs.digitalocean.com/products/databases/mongodb/how-to/connect/#connection-details) of your cluster.

The `mongodump` command uses the following syntax:

```shell
mongodump --uri "<cluster-connection-string>" --out databasedump
```

An example command looks like this:

```shell
mongodump --uri "mongodb+srv://doadmin:<replace-with-your-password>@db-mongodb-nyc3-73883-4aef1b0f.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=db-mongodb-nyc3-73883&tls=true" --out databasedump
```

A successful export returns:

```shell
2022-07-18T14:32:43.032-0400	writing admin.system.users to databasedump/admin/system.users.bson
2022-07-18T14:32:43.140-0400	done dumping admin.system.users (2 documents)
2022-07-18T14:32:43.196-0400	writing admin.system.version to databasedump/admin/system.version.bson
2022-07-18T14:32:43.301-0400	done dumping admin.system.version (2 documents)
```

To upload multiple databases simultaneously, see the [`mongodump`](https://www.mongodb.com/docs/database-tools/mongodump/) and [`mongorestore`](https://www.mongodb.com/docs/database-tools/mongorestore/) commands. See MongoDB’s documentation to learn [more about how to import your data](https://docs.mongodb.com/database-tools/mongoimport/) or [query your collections](https://docs.mongodb.com/manual/tutorial/query-documents/).

In this article...

- [Import Data](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/#import-data)
  - [Import with `mongoimport`](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/#import-with-mongoimport)
  - [Import with `mongorestore`](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/#import-with-mongorestore)
- [Export Data](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/#export-data)
  - [Export with `mongoexport`](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/#export-with-mongoexport)
  - [Export with `mongodump`](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/#export-with-mongodump)

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