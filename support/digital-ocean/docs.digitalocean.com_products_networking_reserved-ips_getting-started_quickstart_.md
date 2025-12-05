---
url: "https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/quickstart/"
title: "Reserved IP Quickstart | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/reserved-ips.c9c9b721d99d9592de022671f4dd4b27147dea7162dbfa52ee239edccf9d612f.svg)Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/)
- [Getting Started](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/)
  - [Create Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/)
  - [Delete Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/delete/)
  - [Reassign Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify/)
  - [Manually Enable Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/)
  - [Find Droplet Anchor IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/find-anchor-ips/)
  - [Send Outbound Traffic](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/outbound-traffic/)
  - [Provision BYOIP](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/)
  - [Deprovision BYOIP](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/deprovision-byoip/)
  - [Manage BYOIP Advertisement](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/)
  - [Assign BYOIP IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/assign-byoip-ip/)
  - [Modify BYOIP IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify-byoip-ip/)
- [Reference](https://docs.digitalocean.com/products/networking/reserved-ips/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Floating-IPs)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip/)
- [Concepts](https://docs.digitalocean.com/products/networking/reserved-ips/concepts/)
  - [Glossary](https://docs.digitalocean.com/glossary/reserved-ips/)
- [Details](https://docs.digitalocean.com/products/networking/reserved-ips/details/)
  - [Features](https://docs.digitalocean.com/products/networking/reserved-ips/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/reserved-ips/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/reserved-ips/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/reserved-ips/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/reserved-ips/support/)

- [Getting Started](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Reserved IP Quickstart

Validated on 27 Feb 2025 • Last edited on 28 Feb 2025

DigitalOcean Reserved IPs are publicly-accessible static IPv4 and IPv6 addresses. Assign and reassign reserved IP addresses to Droplets as needed, or implement an automated failover mechanism with reserved IPs to build a high availability infrastructure.

## Create and Assign Reserved IPs

To create a reserved IP:

1. From the [control panel](https://cloud.digitalocean.com/), open the **Create** menu, then click **Reserved IPs**.
2. Click **Add a Reserved IP**.
3. If you’ve enrolled in the reserved IPv6 [public preview](https://cloud.digitalocean.com/account/feature-preview/), select which address type to create.
4. Select whether to assign the reserved IP to an existing Droplet, or reserve it for later use in a particular datacenter.
5. Choose a Droplet or datacenter and project, then click **Add a Reserved IP to this Droplet** or **Add an Unassigned Reserved IP**.

## Reassign Reserved IPs

To reassign a reserved IP to a different Droplet:

1. From the **Networking** page, click the **Reserved IPs** tab.
2. Open the **More** menu of the reserved IP you want to reassign and click **Reassign**.
3. In **Search for a Droplet**, choose the new target Droplet.

## Unassign Reserved IPs

To unassign a reserved IP:

1. From the **Networking** page, click the **Reserved IPs** tab.
2. Open the **More** menu of the reserved IP you want to reassign and click **Unassign**.

Assigned reserved IPv4 addresses are free, but unassigned reserved IPv4 addresses are not. [Learn more about reserved IP pricing](https://docs.digitalocean.com/products/networking/reserved-ips/details/pricing/).

## Delete Reserved IPs

To delete a reserved IP:

1. From the **Networking** page, click the **Reserved IPs** tab.
2. Open the **More** menu of the reserved IP you want to delete and click **Delete**.
3. Confirm that you want to **Delete the Reserved IP** in the confirmation window.

In this article...

- [Create and Assign Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/quickstart/#create-and-assign-reserved-ips)
- [Reassign Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/quickstart/#reassign-reserved-ips)
- [Unassign Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/quickstart/#unassign-reserved-ips)
- [Delete Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/quickstart/#delete-reserved-ips)

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