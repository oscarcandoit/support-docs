---
url: "https://docs.digitalocean.com/products/networking/reserved-ips/how-to/deprovision-byoip/"
title: "How to Deprovision a BYOIP Prefix | DigitalOcean Documentation"
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

- [How-Tos](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/)
- Deprovision BYOIP

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Deprovision a BYOIP Prefix

Validated on 18 Sep 2025 • Last edited on 18 Sep 2025

DigitalOcean Reserved IPs are publicly-accessible static IPv4 and IPv6 addresses. Assign and reassign reserved IP addresses to Droplets as needed, or implement an automated failover mechanism with reserved IPs to build a high availability infrastructure.

You can deprovision Bring Your Own IP (BYOIP) prefixes with [`doctl`](https://docs.digitalocean.com/reference/doctl/), the [DigitalOcean API](https://docs.digitalocean.com/reference/api/#digitalocean), or the control panel.

Note
A BYOIP prefix cannot be deprovisioned while it has addresses assigned to Droplets. Unassign all addresses before deprovisioning.

## Deprovision a BYOIP Prefix Using the CLI

To deprovision a prefix, use the `doctl network byoip-prefix delete` command with the ID of your BYOIP prefix. To find the ID of your prefix, use `doctl network byoip-prefix list` to list all of your prefixes and their IDs.

```shell
doctl network byoip-prefix delete <your_prefix_id>
```

Replace `<your_prefix_id>` with the ID of the prefix you are deprovisioning.

The command prompts for confirmation before deprovisioning the prefix.

## Deprovision a BYOIP Prefix Using the API

Send a `DELETE` request to the `/v2/byoip_prefixes/<your_prefix_id>` endpoint. To find the ID of your prefix send a `GET` request to the `/v2/byoip_prefixes` endpoint to list all of your prefixes and their IDs.

```shell
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/byoip_prefixes/<your_prefix_id>"
```

Replace `<your_prefix_id>` with the ID of the prefix you are deprovisioning.

The API sends an empty `202` response on success.

## Deprovision a BYOIP Prefix Using the Control Panel

To deprovision a BYOIP prefix, go to the [control panel](https://cloud.digitalocean.com/), in the main menu, click **Networking**, and then click the **Reserved IPs** tab.

In the **Bring Your Own IP** section of the page, find the BYOIP prefix you want to delete, click its **…** context menu, and then click **Delete from DigitalOcean** to open the confirmation window.

In the confirmation window, type the confirmation text into the text box, and then click **Delete from DigitalOcean** to complete the process.

In this article...

- [Deprovision a BYOIP Prefix Using the CLI](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/deprovision-byoip/#deprovision-a-byoip-prefix-using-the-cli)
- [Deprovision a BYOIP Prefix Using the API](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/deprovision-byoip/#deprovision-a-byoip-prefix-using-the-api)
- [Deprovision a BYOIP Prefix Using the Control Panel](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/deprovision-byoip/#deprovision-a-byoip-prefix-using-the-control-panel)

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