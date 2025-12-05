---
url: "https://docs.digitalocean.com/products/marketplace/catalog/acra/"
title: "Acra | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/acra/)
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

- Acra

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Acra

Generated on 18 Jun 2020
from [the Acra catalog page](https://marketplace.digitalocean.com/apps/acra)

[Acra encryption suite](https://www.cossacklabs.com/acra/) — data protection in distributed applications, web and mobile apps that use PostgreSQL/MySQL RDBMS.

Acra provides selective encryption, multi-layered access control, SQL firewall (SQL injections prevention), database leakage prevention, and intrusion detection capabilities in a convenient, developer-friendly package. See the full list of features in [Acra repository](https://github.com/cossacklabs/acra).

Acra’s cryptographic design ensures that no secret (password, key, etc.) leaked from the application or database will be sufficient for decryption of the protected data chunks that originate from it.

Acra minimises the attack surface, detects unauthorised behaviour, and prevents the leakage, informing operators of the incident underway. Acra provides a solid foundation for encryption-demanding regulations. As an additional configuration for better security, Acra supports client-side encryption (using client-side AcraWriter libraries).

AcraServer is a network service that works as a database proxy: it transparently sits between your application and the database and silently listens to all the traffic coming to and from the database. AcraServer monitors the incoming SQL requests and blocks the unwanted ones using the built-in configurable SQL firewall. On receiving SQL queries, AcraServer parses each query, encrypts the desired values into AcraStructs (special cryptographic containers), and passes the modified queries to the database and the database response – back to the client application.

When the client application wants to read the data, it sends a read query to the database (via AcraServer). Upon retrieving the database response, AcraServer tries to detect AcraStructs, decrypts them, and returns the decrypted data to the application.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [AcraServer CE](https://www.cossacklabs.com/acra) | [0.85.0](https://github.com/cossacklabs/acra/releases/tag/0.85.0) | [Apache 2.0](https://github.com/cossacklabs/acra/blob/master/LICENSE) |
| [Docker CE](https://docker.com/) | [18.09.3](https://docs.docker.com/release-notes/docker-ce/) | [Apache 2](https://github.com/docker/docker/blob/master/LICENSE) |
| [OpenSSL](https://www.openssl.org/) | [1.1.0g](https://www.openssl.org/news/changelog.html) | [Apache 2](https://www.openssl.org/source/apache-license-2.0.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=acra-18-04#choose-droplet-size)

## Creating an App using the API

In addition to creating a Droplet from the Acra 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Acra Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"acra-18-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Acra

This 1-Click App contains the most important component of Acra encryption suite — AcraServer (there exist more Acra components that allow supporting extra security features like client-side encryption, NoSQL databases, stronger transport encryption, key rotation, and rollback). Acra 1-Click app is the ideal minimum for learning and exploring with Acra.

There is a detailed [tutorial to help you install Acra 1-click App through DigitalOcean Marketplace](https://www.cossacklabs.com/blog/install-acra-digitalocean-marketplace-tutorial.html) in our blog.

### AcraServer configuration options

AcraServer can work in different modes, depending on the infrastructure: server-side encryption (Transparent proxy mode, where AcraServer both encrypts and decrypts the data) or client-side encryption (where client application encrypts the data and AcraServer only decrypts it).

Acra 1-Click App has an interactive configuration script that prepares AcraServer for work as a Transparent encryption proxy with PostgreSQL database.

Read about other possible configuration options in [Acra’s GitHub repository](https://github.com/cossacklabs/acra#protecting-data-in-sql-databases-using-acraserver) or check out the [example applications](https://github.com/cossacklabs/acra-engineering-demo/) for typical infrastructures (using Python and Ruby web applications, AcraServer and various databases).

### Configuring AcraServer in Transparent encryption mode with an interactive script

In Transparent encryption mode, AcraServer works as database proxy, encrypting and decrypting sensitive data from SQL requests.

The high-level scheme looks like this:

![](https://www.cossacklabs.com/files/img/acraserver-digital-ocean-scheme-cossack-labs.png)

We used DigitalOcean PostgreSQL as a database.

To get this scheme to work, we will configure each component step-by-step:

- VM

- hostname
- firewall

- AcraServer (with the help of this script):

- encryption keys
- TLS certificates
- connection to DB
- tables and columns that will be encrypted (special configuration file known as `encryptor_config_file`)

- Database:

- convert columns that you plan to encrypt to binary type

- Application:

- connection to AcraServer instead of Database

### Configuring DigitalOcean PostgreSQL database

### 1\. Create [DigitalOcean cloud PostgreSQL database](https://www.digitalocean.com/products/managed-databases/), create a role and a database with desired names.

You’ll get credentials that we’ll use in the next steps:

```

* DB host
* DB port
* DB name
* ROLE name
* ROLE password
* TLS CA certificate
```

### 2\. Connect directly to the database and create a test table.

```

PGSQL_USER="your_login"
PGSQL_PASSWORD="your_pgsql_password"
PGSQL_HOST="DB_host"
PGSQL_PORT="DB_port"
psql "postgresql://${PGSQL_USER}:${PGSQL_PASSWORD}@${PGSQL_HOST}:${PGSQL_PORT}/${PGSQL_USER}?sslmode=require"
```

Create a table that we’ll use in this example:

```

CREATE TABLE users(
 id serial PRIMARY KEY,
 name VARCHAR (50) UNIQUE NOT NULL,
 password VARCHAR (50) NOT NULL,
 email VARCHAR (355) UNIQUE NOT NULL
);
```

### Configuring AcraServer

Connect to the newly created AcraServer 1-Click App:

```

AS_HOST="AcraServer_VM_IP"
ssh root@$AS_HOST
```

Right after the automatic connection is established, configuration script will start. This script will perform most of these actions for you. You can run this configurer as many times as necessary, in case you need to change something: `server_configure.py`

### Step by step answer the questions:

1.1. Hostname

1.2. Hosts that are allowed to connect. Put here the host, which will be connected to the database through AcraServer. Do not forget to include your own host if you plan to play with the infrastructure manually.

You can get your external IP using:

```

dig @resolver1.opendns.com ANY myip.opendns.com +short
```

1.3. Configure TLS. DigitalOcean generates individual TLS chain for each PostgreSQL instance. That chain use self-signed CA certificate. AcraServer needs this CA to be able to verify the certificate of the database server. Paste the certificate into the configurator when you’re prompted for it.

1.4. Configure the connection to the database: host and port.

1.5. Configure the structure of tables in your database. For this example, use:

- Table: `users`
- Columns (`column1 column2 ...`): `id name password email`
- Encrypted columns (`column1 column2 ...`): `name password email`

After that, you’ll get a server that’s fully configured and is ready to work.

### Configuring client application

Convert the fields in the database table that you plan to encrypt into binary format:

```

PGSQL_USER="your_login"
PGSQL_PASSWORD="your_pgsql_password"
PGSQL_HOST="DB_host"
PGSQL_PORT="DB_port"
psql "postgresql://${PGSQL_USER}:${PGSQL_PASSWORD}@${PGSQL_HOST}:${PGSQL_PORT}/${PGSQL_USER}?sslmode=require"
```

```

ALTER TABLE users
ALTER COLUMN name TYPE bytea USING name::bytea,
ALTER COLUMN password TYPE bytea USING password::bytea,
ALTER COLUMN email TYPE bytea USING email::bytea;
```

You can now work with your database transparently through AcraServer. Just like if you were working with it directly.

```

PGSQL_USER="your_login"
PGSQL_PASSWORD="your_pgsql_password"
AS_HOST_FQDN="FQDN_of_host"
psql "postgres://${PGSQL_USER}:${PGSQL_PASSWORD}@${AS_HOST_FQDN}:9393/defaultdb?sslmode=require"
```

### Using AcraServer 1-Click App in production settings

Configure Acra 1-Click App to use it for your exact needs and situation.

If you use **MySQL, PostgreSQL, or MariaDB** – configure AcraServer to connect to your specific database. If you configure server-side encryption, almost no changes in your backend app are required (you only need to change the type of all encrypted fields to binary). If you prefer client-side encryption, Acra has [client-side libraries (AcraWriter)](https://github.com/cossacklabs/acra#availability) for 10+ languages and platforms (with new ones being added frequently).

If you use **NoSQL database or any other file storage**, you can use Acra for client-side encryption. Download [AcraWriter library](https://github.com/cossacklabs/acra#availability) for your backend app and deploy [AcraTranslator](https://github.com/cossacklabs/acra#protecting-data-in-any-file-storage-using-acrawriter-and-acratranslator) into your infrastructure to decrypt the data.

For production use, we suggest that you configure Acra directly from configuration files and follow the configuration-as-a-code approach (instead of using the `server_configure.py` script above). You’ll need to generate your own keys, connect to your own database, use strong TLS, configure the SQL firewall, and preferably use client-side encryption.

Please refer to [Acra’s configuration guides and examples](https://github.com/cossacklabs/acra) and [Acra’s documentation](https://docs.cossacklabs.com/products/acra/).

Head over to a detailed [tutorial for an easy start with Acra 1-click App on DigitalOcean Marketplace](https://www.cossacklabs.com/blog/install-acra-digitalocean-marketplace-tutorial.html).

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/acra/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/acra/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/acra/#creating-an-app-using-the-api)
- [Getting Started After Deploying Acra](https://docs.digitalocean.com/products/marketplace/catalog/acra/#getting-started-after-deploying-acra)
  - [AcraServer configuration options](https://docs.digitalocean.com/products/marketplace/catalog/acra/#acraserver-configuration-options)
  - [Configuring AcraServer in Transparent encryption mode with an interactive script](https://docs.digitalocean.com/products/marketplace/catalog/acra/#configuring-acraserver-in-transparent-encryption-mode-with-an-interactive-script)
  - [Configuring DigitalOcean PostgreSQL database](https://docs.digitalocean.com/products/marketplace/catalog/acra/#configuring-digitalocean-postgresql-database)
  - [1\. Create](https://docs.digitalocean.com/products/marketplace/catalog/acra/#1-create-digitalocean-cloud-postgresql-database-create-a-role-and-a-database-with-desired-names) [DigitalOcean cloud PostgreSQL database](https://www.digitalocean.com/products/managed-databases/), create a role and a database with desired names.
  - [2\. Connect directly to the database and create a test table.](https://docs.digitalocean.com/products/marketplace/catalog/acra/#2-connect-directly-to-the-database-and-create-a-test-table)
  - [Configuring AcraServer](https://docs.digitalocean.com/products/marketplace/catalog/acra/#configuring-acraserver)
  - [Step by step answer the questions:](https://docs.digitalocean.com/products/marketplace/catalog/acra/#step-by-step-answer-the-questions)
  - [Configuring client application](https://docs.digitalocean.com/products/marketplace/catalog/acra/#configuring-client-application)
  - [Using AcraServer 1-Click App in production settings](https://docs.digitalocean.com/products/marketplace/catalog/acra/#using-acraserver-1-click-app-in-production-settings)

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