---
url: "https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/"
title: "Apache Airflow Blueprint | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/marketplace.6eb4c8240f6fd707ebe2218018dc699d375e2e3e9885d7fb3e760a9fc120a68e.svg)Marketplace](https://docs.digitalocean.com/products/marketplace/)
- [Droplet 1-Click Apps](https://docs.digitalocean.com/products/marketplace/droplet-1-click-apps/)
- [Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/marketplace/kubernetes-1-click-apps/)
- [SaaS Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/)
- [1-Click Models](https://docs.digitalocean.com/products/marketplace/1-click-models/)
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/)
  - [Add-Ons](https://docs.digitalocean.com/products/marketplace/categories/add-ons/)
  - [Analytics](https://docs.digitalocean.com/products/marketplace/categories/analytics/)
  - [Blogs and Forums](https://docs.digitalocean.com/products/marketplace/categories/blogs-and-forums/)
  - [Business Apps](https://docs.digitalocean.com/products/marketplace/categories/business-apps/)
  - [Chat](https://docs.digitalocean.com/products/marketplace/categories/chat/)
  - [Data Science](https://docs.digitalocean.com/products/marketplace/categories/data-science/)
  - [Databases](https://docs.digitalocean.com/products/marketplace/categories/databases/)
  - [Developer Tools](https://docs.digitalocean.com/products/marketplace/categories/developer-tools/)
  - [eCommerce](https://docs.digitalocean.com/products/marketplace/categories/ecommerce/)
  - [eLearning](https://docs.digitalocean.com/products/marketplace/categories/elearning/)
  - [Email](https://docs.digitalocean.com/products/marketplace/categories/email/)
  - [Frameworks](https://docs.digitalocean.com/products/marketplace/categories/frameworks/)
  - [Functions](https://docs.digitalocean.com/products/marketplace/categories/functions/)
  - [Gaming](https://docs.digitalocean.com/products/marketplace/categories/gaming/)
  - [Kubernetes](https://docs.digitalocean.com/products/marketplace/categories/kubernetes/)
  - [Logging](https://docs.digitalocean.com/products/marketplace/categories/logging/)
  - [Media](https://docs.digitalocean.com/products/marketplace/categories/media/)
  - [Monitoring](https://docs.digitalocean.com/products/marketplace/categories/monitoring/)
  - [Network Tools](https://docs.digitalocean.com/products/marketplace/categories/network-tools/)
  - [Security](https://docs.digitalocean.com/products/marketplace/categories/security/)
  - [Storage](https://docs.digitalocean.com/products/marketplace/categories/storage/)
- [Glossary](https://docs.digitalocean.com/glossary/marketplace/)
- [Service-Level Agreement](https://www.digitalocean.com/sla/marketplace)

- Apache Airflow Blueprint

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Apache Airflow Blueprint

Generated on 30 May 2024
from [the Apache Airflow Blueprint catalog page](https://marketplace.digitalocean.com/apps/apache-airflow-blueprint)

This Terraform blueprint deploys Apache Airflow on DigitalOcean, streamlining workflow orchestration and management. It includes a managed PostgreSQL database for reliable data storage, a managed Redis instance for efficient caching and message brokering, and a DigitalOcean Spaces bucket for object storage and remote logging.

Apache Airflow is a powerful tool for scheduling and monitoring workflows. This blueprint simplifies the setup, allowing you to focus on developing and optimizing your workflows without worrying about infrastructure. Leveraging DigitalOcean’s managed services ensures high availability, security, and performance.

Ideal for data engineers, data scientists, and developers, this solution minimizes operational overhead while providing a robust environment for your data pipelines. Get started quickly with this preconfigured setup and streamline your workflow orchestration on DigitalOcean.

## Software Included

_This Marketplace listing does not include a detailed software list._

## Deploying this Offering using the Control Panel

Click the **Deploy to DigitalOcean** button to deploy this offering. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy Apache Airflow Blueprint to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://github.com/digitalocean/marketplace-blueprints/tree/master/blueprints/airflow)

## Getting Started After Deploying Apache Airflow Blueprint

## Welcome to the DigitalOcean Airflow Terraform Stack!

This stack will deploy the following resources:

- A droplet with an Airflow installation pre-configured with basic connections.
- DBaaS PostgreSQL database instance.
- DBaaS Redis instance.
- Spaces Block Storage bucket for remote logging.

The connections for PostgreSQL, Spaces Block Storage, and Redis are configured out of the box.

## How to use this blueprint?

### Install Terraform

Head to the [Terraform install page](https://developer.hashicorp.com/terraform/downloads) and follow the instructions for your platform.

You can validate your local Terraform installation by running:

```
$ terraform -v
Terraform v1.5.7
...
```

### Create DigitalOcean API token

Head to the [Applications & API](https://cloud.digitalocean.com/account/api/tokens) page and create a new personal access token (PAT) by clicking the **Generate New Token** button. Ensure to check **Write** scope for the token, as Terraform needs it to create new resources. Save the token as it disappears forever if you close the page. If lost, delete it and create a new one.

### Set up a blueprint

Clone this repository to the machine where Terraform is installed:

```
$ git clone https://github.com/digitalocean/marketplace-blueprints.git
```

Navigate to the blueprint you’re interested in, for example, Airflow:

```
$ cd marketplace-blueprints/blueprints/airflow/
```

### Define your variables

Edit `variables.tf` file and specify your API token like this:

```
variable "do_token" {
  default = "dop_v1_your_beautiful_token_here"
}
```

**(Optional but Recommended)** Use SSH keys to deploy your Droplets instead of passwords. Retrieve your list of SSH Key IDs using [doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/).

Retrieve your SSH Key IDs:

```
doctl compute ssh-key list
```

Specify which SSH keys to use:

```
variable "ssh_key_ids" {
  default = [123, 456, 789] # Replace these numbers with actual SSH key IDs
  type = list(number)
}
```

**(Optional but Recommended)** Specify the [region](https://docs.digitalocean.com/products/platform/availability-matrix/#available-datacenters) you want your Droplets to deploy:

```
variable "region" {
  default = "nyc3"
}
```

Below is a table of configurable variables along with their default values and descriptions:

| Variable Name | Default Value | Description |
| --- | --- | --- |
| `do_token` | `"dop_v1_your_token"` | DigitalOcean API token. Create one [here](https://docs.digitalocean.com/reference/api/create-personal-access-token/). |
| `ssh_key_ids` | `[]` | List of SSH Key IDs. Retrieve your list of SSH Key IDs using [doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/). |
| `region` | `"nyc3"` | DigitalOcean region. See [regions](https://docs.digitalocean.com/products/platform/availability-matrix/) for available regions. |
| `spaces_access_id` | `"your_spaces_access_key_here"` | Access key for DigitalOcean Spaces. Create one [here](https://docs.digitalocean.com/products/spaces/how-to/generate-keys/). |
| `spaces_secret_key` | `"your_spaces_secret_key_here"` | Secret key for DigitalOcean Spaces. |
| `spaces_bucket_name` | `"airflow-bucket"` | Name of the Spaces bucket. |
| `spaces_host` | `"https://sfo3.digitaloceanspaces.com"` | Host URL for DigitalOcean Spaces. Find the region-specific host URL [here](https://www.digitalocean.com/docs/spaces/#space-access-keys). |
| `droplet_name` | `"airflow-droplet"` | Name of the Airflow droplet. |
| `droplet_size_slug` | `"s-4vcpu-8gb"` | Size slug for the Airflow droplet. See [sizes](https://docs.digitalocean.com/products/droplets/details/sizes/) for available sizes. |
| `db_node_count` | `1` | Number of nodes in the database cluster. |
| `db_cluster_name` | `"airflow-stack-db-cluster"` | Name of the database cluster. |
| `db_size_slug` | `"db-s-1vcpu-2gb"` | Size slug for the database cluster. See [sizes](https://docs.digitalocean.com/products/databases/details/#overview) for available sizes. |
| `keystore_node_count` | `1` | Number of nodes in the keystore cluster. |
| `keystore_name` | `"airflow-stack-kv-cluster"` | Name of the keystore cluster. |
| `keystore_size_slug` | `"db-s-1vcpu-2gb"` | Size slug for the keystore cluster. See [sizes](https://docs.digitalocean.com/products/databases/details/#overview) for available sizes. |

### Initialize and Apply the Blueprint

Initialize the Terraform project by running:

```
$ terraform init
```

Finally, after the project is initialized, run Terraform apply to spin the blueprint:

```
$ terraform apply
```

It can take a few minutes to spin the droplets, and some blueprints require extra time after the creation to finish the configuration.

## Getting started with Airflow

After the stack is deployed, you can access the Airflow dashboard at `http://your_droplet_public_ipv4`. You should see the Login screen:

![Airflow Login](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/airflow-1.png)

After you log in, you will have access to the Airflow dashboard!

There are two example DAGs preinstalled to test connectivity with the Spaces bucket used for remote logging and with Redis.

![Sample DAGS](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/airflow-3.png)

To view the connection details, go to the Connections option under Admin.

![Connection Details](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/airflow-2.png)

## Stack details

- Latest versions of Airflow, PostgreSQL, and Redis.
- Airflow server and scheduler run as systemctl services.
- Remote logging is pre-configured out of the box and is available at `https://<bucket-name>.<region>.digitaloceanspaces.com/logs/`.

## Security

Certbot is preinstalled. Run it to configure HTTPS. To make your Airflow droplet more secure, please refer to the [Airflow Docs](https://airflow.apache.org/docs/apache-airflow/stable/security.html).

* * *

This guide should help you get started with deploying and configuring the Apache Airflow Terraform stack on DigitalOcean.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#software-included)
- [Deploying this Offering using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#deploying-this-offering-using-the-control-panel)
- [Getting Started After Deploying Apache Airflow Blueprint](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#getting-started-after-deploying-apache-airflow-blueprint)
- [Welcome to the DigitalOcean Airflow Terraform Stack!](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#welcome-to-the-digitalocean-airflow-terraform-stack)
- [How to use this blueprint?](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#how-to-use-this-blueprint)
  - [Install Terraform](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#install-terraform)
  - [Create DigitalOcean API token](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#create-digitalocean-api-token)
  - [Set up a blueprint](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#set-up-a-blueprint)
  - [Define your variables](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#define-your-variables)
  - [Initialize and Apply the Blueprint](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#initialize-and-apply-the-blueprint)
- [Getting started with Airflow](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#getting-started-with-airflow)
- [Stack details](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#stack-details)
- [Security](https://docs.digitalocean.com/products/marketplace/catalog/apache-airflow-blueprint/#security)

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