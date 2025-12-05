---
url: "https://docs.digitalocean.com/products/marketplace/catalog/coreflux-mqtt-broker/"
title: "Coreflux MQTT Broker | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/coreflux-mqtt-broker/)
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

- Coreflux MQTT Broker

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Coreflux MQTT Broker

Generated on 24 Oct 2025
from [the Coreflux MQTT Broker catalog page](https://marketplace.digitalocean.com/apps/coreflux-mqtt-broker)

## Application Description

**Coreflux MQTT Broker** is a programmable automation platform built for Industrial IoT, smart manufacturing, and edge AI.

It enables real-time data routing, transformation, and automation through the **Language of Things (LOT)** — a human-readable logic system that runs directly inside the broker.

This 1-Click App deploys a fully functional Coreflux MQTT Broker with WebSocket, TLS, and LOT support.

Connect PLCs, sensors, and cloud systems securely, and start building industrial automation flows in minutes.

📘 **Documentation:** [https://docs.coreflux.org](https://docs.coreflux.org/)

🐳 **Docker Hub:** [https://hub.docker.com/r/coreflux/coreflux-mqtt-broker](https://hub.docker.com/r/coreflux/coreflux-mqtt-broker)

🌐 **Website:** [https://coreflux.org](https://coreflux.org/)

💬 **Discord:** [https://discord.gg/P9qjWQUt](https://discord.gg/P9qjWQUt)

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=coreflux-corefluxmqttbrok)

## Creating an App using the API

In addition to creating a Droplet from the Coreflux MQTT Broker 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Coreflux MQTT Broker Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"coreflux-corefluxmqttbrok"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Coreflux MQTT Broker

## Getting Started

## 🔐 Connect to Your Droplet

After the Droplet is created, connect via SSH:

```
ssh root@your_droplet_public_ipv4
```

Replace `your_droplet_public_ipv4` with the public IP address shown in your DigitalOcean dashboard.

On login, you’ll see the Coreflux welcome banner containing broker information and TLS setup instructions.

* * *

## 🚀 Accessing the Coreflux MQTT Broker

Your Coreflux MQTT Broker is already running and listening on these ports:

| Protocol | Port | Description |
| --- | --- | --- |
| MQTT (plain) | 1883 | Standard unencrypted MQTT |
| MQTT over TLS | 1884 | Secure MQTT (TLS) |
| WebSocket | 5000 | WebSocket connection (ws://) |
| WebSocket Secure | 443 | Secure WebSocket (wss://, TLS) |

To enable encryption, place your TLS certificate and key files in:

```
/opt/coreflux/tls/server.crt
/opt/coreflux/tls/server.key
```

Restart the broker after adding certificates:

```
sudo systemctl restart coreflux-broker
```

* * *

## 🧪 Test the Broker Using Mosquitto

Install the Mosquitto client locally:

```
sudo apt install -y mosquitto-clients
```

**Publish a test message:**

```
mosquitto_pub -h your_droplet_public_ipv4 -p 1883 -t "coreflux/test" -m "Hello from Coreflux"
```

**Subscribe to the same topic:**

```
mosquitto_sub -h your_droplet_public_ipv4 -p 1883 -t "coreflux/test"
```

Expected output:

```
Hello from Coreflux
```

* * *

## 📘 Learn More

- [Getting Started Guide](https://docs.coreflux.org/getting-started/)
- [Using MQTT Explorer with Coreflux Cloud Broker](https://docs.coreflux.org/getting-started/mqtt-explorer-and%20-coreflux-cloud-broker/)
- [Coreflux Docker Hub Repository](https://hub.docker.com/r/coreflux/coreflux-mqtt-broker)
- [Discord Channel](https://discord.gg/P9qjWQUt)

* * *

Your Coreflux broker is now ready to connect devices, sensors, and cloud systems using the **Language of Things (LOT)** for automation, routing, and real-time data transformation.

In this article...

- [Application Description](https://docs.digitalocean.com/products/marketplace/catalog/coreflux-mqtt-broker/#application-description)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/coreflux-mqtt-broker/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/coreflux-mqtt-broker/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/coreflux-mqtt-broker/#creating-an-app-using-the-api)
- [Getting Started After Deploying Coreflux MQTT Broker](https://docs.digitalocean.com/products/marketplace/catalog/coreflux-mqtt-broker/#getting-started-after-deploying-coreflux-mqtt-broker)
- [Getting Started](https://docs.digitalocean.com/products/marketplace/catalog/coreflux-mqtt-broker/#getting-started)
- [🔐 Connect to Your Droplet](https://docs.digitalocean.com/products/marketplace/catalog/coreflux-mqtt-broker/#-connect-to-your-droplet)
- [🚀 Accessing the Coreflux MQTT Broker](https://docs.digitalocean.com/products/marketplace/catalog/coreflux-mqtt-broker/#-accessing-the-coreflux-mqtt-broker)
- [🧪 Test the Broker Using Mosquitto](https://docs.digitalocean.com/products/marketplace/catalog/coreflux-mqtt-broker/#-test-the-broker-using-mosquitto)
- [📘 Learn More](https://docs.digitalocean.com/products/marketplace/catalog/coreflux-mqtt-broker/#-learn-more)

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