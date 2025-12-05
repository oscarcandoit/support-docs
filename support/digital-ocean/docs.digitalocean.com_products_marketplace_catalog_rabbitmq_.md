---
url: "https://docs.digitalocean.com/products/marketplace/catalog/rabbitmq/"
title: "RabbitMQ | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/rabbitmq/)
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

- RabbitMQ

[Give Feedback](https://ideas.digitalocean.com/documentation)

# RabbitMQ

Generated on 25 Aug 2025
from [the RabbitMQ catalog page](https://marketplace.digitalocean.com/apps/rabbitmq)

RabbitMQ is an open-source message broker software that facilitates communication between distributed systems. It acts as an intermediary platform to enable seamless data exchange between various components of modern applications.

Key Features:

1. Messaging Protocol Support: RabbitMQ supports multiple messaging protocols, including Advanced Message Queuing Protocol (AMQP), Message Queue Telemetry Transport (MQTT), and more. This flexibility allows developers to choose the most suitable protocol for their specific use case.

2. Queuing System: RabbitMQ implements a robust queuing system, where messages are stored in queues until they are consumed by the intended recipients. This decouples application components and helps manage message flow efficiently.

3. Exchange Mechanism: The exchange mechanism in RabbitMQ allows messages to be routed to specific queues based on predefined rules or message attributes. This feature enhances the flexibility and scalability of the message processing.

4. Pub/Sub Model: RabbitMQ supports the Publish/Subscribe model, enabling multiple consumers to subscribe to specific topics or message types. This ensures that messages are efficiently delivered to relevant recipients.

5. High Availability: RabbitMQ offers clustering and replication capabilities, ensuring high availability and fault tolerance. In case of node failures, the system continues to function without data loss or interruption.

6. Easy Integration: RabbitMQ can be easily integrated with various programming languages and platforms, making it a versatile choice for different application architectures.


Use Cases:

- Microservices Communication: RabbitMQ is an excellent choice for enabling communication between microservices, allowing them to interact asynchronously and scale independently.

- Task Queueing: Applications can use RabbitMQ to distribute tasks across a network of workers, ensuring efficient task processing and load balancing.

Real-time Data Streaming: With support for protocols like MQTT, RabbitMQ is well-suited for real-time data streaming and Internet of Things (IoT) applications.

- Event-Driven Architecture: RabbitMQ facilitates the implementation of event-driven systems, where components react to events and changes in the system asynchronously.

In conclusion, RabbitMQ offers a reliable, scalable, and flexible messaging solution for modern applications, making it an essential component of distributed and event-driven architectures. Its versatility and robustness make it a popular choice for developers and enterprises seeking to build resilient and efficient communication systems.


## Software Included

| Package | Version | License |
| --- | --- | --- |
| RabbitMQ | 3.12 | [Apache 2](https://github.com/rabbitmq/rabbitmq-server/blob/main/LICENSE-APACHE2) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=rabbitmq)

## Creating an App using the API

In addition to creating a Droplet from the RabbitMQ 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB RabbitMQ Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"rabbitmq"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying RabbitMQ

After you create a RabbitMQ One-Click Droplet the queue manager springs to life effortlessly. Once the Droplet is created, you can SSH to the server as root. Make sure to substitute the Droplet’s IP address.

```
ssh root@your_droplet_public_ipv4
```

For further assistance and in-depth details, you can refer to the official documentation of RabbitMQ. It contains comprehensive guides, tutorials, and references to help you make the most out of this powerful message broker.

RabbitMQ Documentation: [https://www.rabbitmq.com/documentation.html](https://www.rabbitmq.com/documentation.html)

Explore the documentation to gain a deeper understanding of RabbitMQ’s features, best practices, and configuration options. It serves as an invaluable resource to address any specific questions or delve into advanced topics. Happy messaging with RabbitMQ!

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/rabbitmq/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/rabbitmq/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/rabbitmq/#creating-an-app-using-the-api)
- [Getting Started After Deploying RabbitMQ](https://docs.digitalocean.com/products/marketplace/catalog/rabbitmq/#getting-started-after-deploying-rabbitmq)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)