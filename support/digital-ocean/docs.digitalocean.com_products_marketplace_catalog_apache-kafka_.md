---
url: "https://docs.digitalocean.com/products/marketplace/catalog/apache-kafka/"
title: "Apache Kafka | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/apache-kafka/)
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

- Apache Kafka

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Apache Kafka

Generated on 15 Aug 2024
from [the Apache Kafka catalog page](https://marketplace.digitalocean.com/apps/apache-kafka)

Apache Kafka can be used to asynchronously process vast amounts of data, but it can be difficult to get started. This 1-Click App automatically configures a single-node Kafka cluster, so you can spend less time configuring it and more time developing the software that uses it.

**Note**: This app should **not** be used in production environments. Since it consists of a single-node cluster, it does not offer high availability, scaling, or any form of data-loss prevention. This app serves to provide an easy way to get started in development environments.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Apache Kafka](https://kafka.apache.org/) | [3.1.0](https://kafka.apache.org/31/documentation.html) | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) |
| [OpenJDK](https://openjdk.java.net/) | 11 | GPL-2.0 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-apachekafka)

## Creating an App using the API

In addition to creating a Droplet from the Apache Kafka 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Apache Kafka Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-apachekafka"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Apache Kafka

## Quickstart

Here’s a short example that uses [kcat](https://github.com/edenhill/kcat), an open-source command-line producer and consumer for Apache Kafka, to produce and consume events from your local machine. Because the server’s certificate authority (CA) certificate is self-signed, the CA certificate must be explicitly trusted by the client to properly verify the server’s identity:

1. Copy the example configuration and CA root certificate from your new Droplet to your local machine


```
scp root@your_droplet_public_ipv4:'/opt/kafka/one-click-ssl/{ca.crt,example.librdkafka.config}' .
```

2. Produce a message


```
echo 'Hello, TLS!' | kcat -P -b your_droplet_public_ipv4:9093 \
     -F ./example.librdkafka.config \
     -X ssl.ca.location=./ca.crt \
     -t quickstart
```

3. Consume the message


```
kcat -C -b your_droplet_public_ipv4:9093 \
     -F ./example.librdkafka.config \
     -X ssl.ca.location=./ca.crt \
     -t quickstart
```


Exit the consumer by pressing `Ctrl+c`.

## Additional Details

Your Kafka server is configured with two listeners:

- 127.0.0.1:9092 - PLAINTEXT and no authentication required
- 0.0.0.0:9093 - TLS/SSL using a self-signed certificate and SCRAM-SHA-256 authentication

PLAINTEXT connections are an easy way to get started, but transmitting PLAINTEXT data, especially login credentials, over the public internet leaves your information vulnerable. For security purposes, PLAINTEXT connections can only be established from inside the server:

1. Connect to your Droplet using SSH


```
ssh root@your_droplet_public_ipv4
```

2. Create a topic


```
/opt/kafka/bin/kafka-topics.sh \
     --create \
     --topic quickstart \
     --bootstrap-server localhost:9092
```

3. Produce your first event


```
echo 'Hello, World!' | /opt/kafka/bin/kafka-console-producer.sh \
     --topic quickstart \
     --bootstrap-server localhost:9092
```

4. Consume the event


```
/opt/kafka/bin/kafka-console-consumer.sh \
     --from-beginning \
     --max-messages 1 \
     --topic quickstart \
     --bootstrap-server localhost:9092
```


The configuration for this Kafka broker can be found in

`/opt/kafka/config/server.properties`.

The `/opt/kafka/one-click-ssl` directory contains the following:

| File | Contents |
| --- | --- |
| .keystore\_password | Password for Java KeyStores in this directory |
| ca.crt | Self-signed CA root certificate |
| ca.key | CA private key |
| example.librdkafka.config | Client authentication configuration |
| kafka.crt | Kafka server certificate signed by CA |
| kafka.keystore.jks | Java KeyStore containing ca.crt and kafka.crt |
| kafka.truststore.jks | Java KeyStore containing ca.crt |

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/apache-kafka/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/apache-kafka/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/apache-kafka/#creating-an-app-using-the-api)
- [Getting Started After Deploying Apache Kafka](https://docs.digitalocean.com/products/marketplace/catalog/apache-kafka/#getting-started-after-deploying-apache-kafka)
- [Quickstart](https://docs.digitalocean.com/products/marketplace/catalog/apache-kafka/#quickstart)
- [Additional Details](https://docs.digitalocean.com/products/marketplace/catalog/apache-kafka/#additional-details)

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