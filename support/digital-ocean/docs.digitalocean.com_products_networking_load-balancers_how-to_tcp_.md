---
url: "https://docs.digitalocean.com/products/networking/load-balancers/how-to/tcp/"
title: "How to Balance TCP Traffic | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/load-balancers.1b5f8a9d40bf92d2798a187032a28a29572afdd5e74855e5b1c1d30dfffc07ed.svg)Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/)
- [Getting Started](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/quickstart/)
  - [Manage Load Balancers with doctl](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/with-doctl/)
- [How-Tos](https://docs.digitalocean.com/products/networking/load-balancers/how-to/)
  - [Create Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/)
  - [Create Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create-global-load-balancer/)
  - [Manage Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/)
  - [Manage Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage-global-load-balancers/)
  - [Scale Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/)
  - [Configure SSL Passthrough](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-passthrough/)
  - [Balance TCP Traffic](https://docs.digitalocean.com/products/networking/load-balancers/how-to/tcp/)
  - [Configure Backend Droplets](https://docs.digitalocean.com/products/networking/load-balancers/how-to/configure-droplets-for-nlb/)
  - [Destroy Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/destroy/)
  - [Configure SSL Termination](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/)
- [Reference](https://docs.digitalocean.com/products/networking/load-balancers/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Load-Balancers)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/)
- [Concepts](https://docs.digitalocean.com/products/networking/load-balancers/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/)
  - [Load Balancer Status](https://docs.digitalocean.com/products/networking/load-balancers/concepts/load-balancer-status/)
- [Details](https://docs.digitalocean.com/products/networking/load-balancers/details/)
  - [Features](https://docs.digitalocean.com/products/networking/load-balancers/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/load-balancers/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/load-balancers/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/load-balancers/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/load-balancers/support/)

- [How-Tos](https://docs.digitalocean.com/products/networking/load-balancers/how-to/)
- Balance TCP Traffic

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Balance TCP Traffic

Validated on 28 Oct 2019 • Last edited on 17 Apr 2025

DigitalOcean fully manages Regional Load Balancers and Global Load Balancers, ensuring they are highly available load balancing services. Load balancers distribute traffic to groups of backend resources in specific regions or across different regions, which prevents the health of a service from depending on the health of a single server, cluster, or region.

Regional load balancers support TCP balancing for applications that do not speak HTTP. To set up TCP balancing, you need:

- A TCP application, like a [Galera cluster spanning several Droplets](https://www.digitalocean.com/community/tutorials/how-to-configure-a-galera-cluster-with-mariadb-10-1-on-ubuntu-16-04-servers). The details of your backend configuration depend on what software you’re using.

- [A DigitalOcean Load Balancer](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/) with those Droplets added to its backend.


To configure the load balancer to balance TCP, you need to add a TCP forwarding rule and a TCP health check.

## Add the TCP Forwarding Rule

From the [control panel](https://cloud.digitalocean.com/), click **Networking**, then click **Load Balancers** to go to the load balancer index page. From there, click your load balancer’s name to view its detail page.

On the detail page, click **Settings**.

![Load Balancer Settings page](https://docs.digitalocean.com/screenshots/load-balancers/settings.fddc0d8f993d1996c627c8af847a85c91ef7fb5a58d4704a234b5b2068641ecd.png)

In the **Forwarding rules** section, modify the existing rule by clicking the drop down menu in the first field and changing it from HTTP to **TCP**.

Change the port in both the **Load Balancer** side and the **Droplet** side from 80 to the listening port of your application. For example, when using a Galera cluster, use the MariaDB port 3306.

![The forwarding rules for a load balancer with an example TCP to TCP rule filled in](https://docs.digitalocean.com/screenshots/load-balancers/forwarding-rules-tcp.63c78c20f806ecd1e2ce73bf4b02a8321f10671aad3ed8bf96beea731dd5aa4f.png)

When you’re done, click **Save**.

## Add the TCP Health Check

On the same settings page, open the **Health checks** section. An HTTP health check is defined by default.

Modify the health check by choosing **TCP** from the drop down in the first field. In the **Port** field, change the value from 80 to the listening port of your application.

![Change health checks](https://docs.digitalocean.com/screenshots/load-balancers/settings-health-checks.ae671c61dd1649c78163251df4f76dd3f090a476f675974eb9879354d278e62a.png)

Click **Save** to implement the change.

In this article...

- [Add the TCP Forwarding Rule](https://docs.digitalocean.com/products/networking/load-balancers/how-to/tcp/#add-the-tcp-forwarding-rule)
- [Add the TCP Health Check](https://docs.digitalocean.com/products/networking/load-balancers/how-to/tcp/#add-the-tcp-health-check)

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