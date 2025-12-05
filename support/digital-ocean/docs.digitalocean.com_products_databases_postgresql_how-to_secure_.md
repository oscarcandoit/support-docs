---
url: "https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/"
title: "How to Secure PostgreSQL Managed Database Clusters | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/postgresql.855c43f1f82e98a24a05998729b39a9937438c7f77af3dc0c22da5a5739f5eb7.svg)PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/)
- [Getting Started](https://docs.digitalocean.com/products/databases/postgresql/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/postgresql/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/databases/postgresql/how-to/)
  - [Create PostgreSQL Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/)
  - [Connect to PostgreSQL Cluster](https://docs.digitalocean.com/products/databases/postgresql/how-to/connect/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/resize/)
  - [Import Databases](https://docs.digitalocean.com/products/databases/postgresql/how-to/import-databases/)
  - [Secure PostgreSQL Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/)
  - [Migrate External Databases](https://docs.digitalocean.com/products/databases/postgresql/how-to/migrate/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/postgresql/how-to/schedule-updates/)
  - [Manage Users and Databases](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-users-and-databases/)
  - [Modify User Privileges](https://docs.digitalocean.com/products/databases/postgresql/how-to/modify-user-privileges/)
  - [Monitor PostgreSQL Performance](https://docs.digitalocean.com/products/databases/postgresql/how-to/monitor-databases/)
  - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/postgresql/how-to/add-standby-nodes/)
  - [Add Read-Only Nodes](https://docs.digitalocean.com/products/databases/postgresql/how-to/add-read-only-nodes/)
  - [Manage Connection Pools](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-connection-pools/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/postgresql/how-to/monitor-clusters/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/postgresql/how-to/set-up-alerts/)
  - [Relocate Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/relocate/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/fork-clusters/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/postgresql/how-to/forward-logs/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/postgresql/how-to/restore-from-backups/)
  - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/destroy/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/tag/)
  - [Upgrade PostgreSQL](https://docs.digitalocean.com/products/databases/postgresql/how-to/upgrade-version/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/postgresql/how-to/reconfigure/)
- [Reference](https://docs.digitalocean.com/products/databases/postgresql/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/postgresql/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/postgresql/concepts/best-practices/)
  - [Migration Strategies](https://docs.digitalocean.com/products/databases/postgresql/concepts/migration-strategies/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/postgresql/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/postgresql/details/)
  - [Features](https://docs.digitalocean.com/products/databases/postgresql/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/postgresql/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/postgresql/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/postgresql/details/limits/)
  - [Supported Extensions](https://docs.digitalocean.com/products/databases/postgresql/details/supported-extensions/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/postgresql/details/notifications/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)
- [Support](https://docs.digitalocean.com/products/databases/postgresql/support/)

- [How-Tos](https://docs.digitalocean.com/products/databases/postgresql/how-to/)
- Secure PostgreSQL Clusters

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Secure PostgreSQL Managed Database Clusters

Validated on 8 Aug 2019 • Last edited on 17 Jun 2025

PostgreSQL is an open source, object-relational database built for extensibility, data integrity, and speed. Its concurrency support makes it fully ACID-compliant, and it supports dynamic loading and catalog-driven operations to let users customize its data types, functions, and more.

Data in PostgreSQL database clusters is encrypted at rest with LUKS (Linux Unified Key Setup) and in transit with SSL. However, there are additional steps you can take to ensure that your data is safe.

## Restrict Incoming Connections

You can greatly decrease the likelihood of a security breach by restricting which DigitalOcean resources or external IP addresses are allowed to access the nodes in a cluster. This prevents brute force password and denial-of-service attacks from any server not explicitly permitted to connect.

Typically, only the application servers are allowed to connect to the database cluster. Users access the public-facing site, and the public-facing server authenticates and manages database connections in turn.

## Add a Trusted Source Using the CLI

How to Add a Trusted Source Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl databases firewalls append`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/databases/firewalls/append/) for more details:




```shell
doctl databases firewalls append <database-cluster-id> --rule <type>:<value> [flags]
```



The following example appends a firewall rule to a database cluster with the ID `ca9f591d-f38h-5555-a0ef-1c02d1d1e35` that allows any resources with the `example-tag` to access the database:




```shell
doctl databases firewalls append ca9f591d-f38h-5555-a0ef-1c02d1d1e35 --rule tag:example-tag
```


## Add a Trusted Source Using the API

How to Add or Remove a Trusted Source Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a PUT request to [`https://api.digitalocean.com/v2/databases/{database_cluster_uuid}/firewall`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/databases_update_firewall_rules).

### cURL

Using cURL:

```shell
curl -X PUT \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"rules": [{"type": "ip_addr","value": "192.168.1.1"},{"type": "droplet","value": "163973392"},{"type": "k8s","value": "ff2a6c52-5a44-4b63-b99c-0e98e7a63d61"},{"type": "tag","value": "backend"}]}' \
  "https://api.digitalocean.com/v2/databases/9cc10173-e9ea-4176-9dbc-a4cee4c4ff30/firewall"
```

### Go

Using [Godo](https://github.com/digitalocean/godo), the official DigitalOcean API client for Go:

```go
import (
    "context"
    "os"

    "github.com/digitalocean/godo"
)

func main() {
    token := os.Getenv("DIGITALOCEAN_TOKEN")

    client := godo.NewFromToken(token)
    ctx := context.TODO()

    req := godo.DatabaseUpdateFirewallRulesRequest{
      Rules: []*godo.DatabaseFirewallRule{
        {
         Type:  "ip_addr",
         Value: "192.168.1.1",
       },
        {
         Type:  "droplet",
         Value: "163973392",
       },
        {
         Type:  "k8s",
         Value: "ff2a6c52-5a44-4b63-b99c-0e98e7a63d61",
        },
      },
    }
    _, err := client.Databases.UpdateFirewallRules(ctx, dbID, &req)
}
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "rules": [\
    {\
      "type": "ip_addr",\
      "value": "192.168.1.1"\
    },\
    {\
      "type": "k8s",\
      "value": "ff2a6c52-5a44-4b63-b99c-0e98e7a63d61"\
    },\
    {\
      "type": "droplet",\
      "value": "163973392"\
    },\
    {\
      "type": "tag",\
      "value": "backend"\
    }\
  ]
}
update_resp = client.databases.update_firewall_rules(database_cluster_uuid="a7a8bas", body=req)
```

## Add a Trusted Source using the Control Panel

To restrict access to a database cluster, click the name of the cluster in the control panel to go to its **Overview** page, then click the **Settings** tab.

![Screenshot of cluster settings page](https://docs.digitalocean.com/screenshots/databases/cluster-settings-page.1436bb24fe70137f02b3682bebce26cb95fa67f2c599884382912108a53489ea.png)

In the section titled **Trusted Sources**, click **Edit** to open the **Add trusted sources** text box.

![The open Trusted Sources section of the settings page](https://docs.digitalocean.com/screenshots/databases/trusted-sources.d160aa387bd895e79d0b13cfc701007609f7df56fa3f973f3727e317616a71d9.png)

You can enter Droplets, Kubernetes clusters, tags, apps, or specific IP addresses. Entering a tag provides access to the database for any Droplets or Kubernetes nodes containing that tag. At this time, DigitalOcean Cloud Firewalls are not supported.

Warning
You currently cannot add IPv6 rules to a database cluster’s trusted sources.

## Increase the SSL Mode Verification Level

By default, you must use SSL to transmit data because it prevents eavesdropping on administrative usernames and passwords as well as the data itself as it is transmitted. However, SSL doesn’t protect against man-in-the-middle (MITM) attacks or impersonation.

You can enable the `verify-ca` and `verify-full` SSL modes for PostgreSQL to check for these attacks. They’re disabled by default because they can affect performance.

To enable `verify-ca` or `verify-full`, update the value for `sslmode` in the `--set` flag when connecting. For example, to connect using the `verify-full` option, your connection string would look like this:

```
PGPASSWORD=paakjnfe10rsrsmf psql -U doadmin -h source-do-user-6607903-0.b.db.ondigitalocean.com -p 25060 -d defaultdb --set=sslmode=verify-full
```

Learn more in the [PostgreSQL documentation on SSL support](https://www.postgresql.org/docs/current/libpq-ssl.html).

In this article...

- [Restrict Incoming Connections](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/#firewalls)
- [Add a Trusted Source Using the CLI](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/#add-a-trusted-source-using-the-cli)
- [Add a Trusted Source Using the API](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/#add-a-trusted-source-using-the-api)
- [Add a Trusted Source using the Control Panel](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/#add-a-trusted-source-using-the-control-panel)
- [Increase the SSL Mode Verification Level](https://docs.digitalocean.com/products/databases/postgresql/how-to/secure/#increase-the-ssl-mode-verification-level)

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