---
url: "https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/"
title: "How to Pause or Resume BYOIP Prefix Advertisement | DigitalOcean Documentation"
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
- Manage BYOIP Advertisement

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Pause or Resume BYOIP Prefix Advertisement

Validated on 18 Sep 2025 • Last edited on 13 Nov 2025

DigitalOcean Reserved IPs are publicly-accessible static IPv4 and IPv6 addresses. Assign and reassign reserved IP addresses to Droplets as needed, or implement an automated failover mechanism with reserved IPs to build a high availability infrastructure.

You may pause the advertisement of a BYOIP prefix to disable it without deleting it from your team account. You can also resume advertisement to make a paused or newly provisioned prefix accessible from the internet.

Note **Newly provisioned BYOIP prefixes are not advertised by default.** After your prefix is successfully provisioned and shows a status of **Active**, you must resume advertisement (set `advertise: true`) to make it fully usable and accessible from the internet.

## Pause the Advertisement of a BYOIP Prefix

### Using the CLI

To pause the advertisement of a prefix, use the `doctl network byoip-prefix update` command with the ID of your BYOIP prefix and the flag `--advertisement=false`. To find the ID of your prefix, use `doctl network byoip-prefix list` to list all of your prefixes and their IDs.

```shell
doctl network byoip-prefix update <your_prefix_id> --advertise=false
```

Replace `<your_prefix_id>` with the ID of the prefix you are pausing.

### Using the API

Send a `PATCH` request to the `/v2/byoip_prefixes/<your_prefix_id>` endpoint with `{"advertise": false}` as the request body. To find the ID of your prefix send a `GET` request to the `/v2/byoip_prefixes` endpoint to list all of your prefixes and their IDs.

```shell
curl -X PATCH \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"advertise": false}' \
  "https://api.digitalocean.com/v2/byoip_prefixes/<your_prefix_id>"
```

Replace `<your_prefix_id>` with the ID of the prefix you are pausing.

The API sends a `202` response with the current state of the BYOIP prefix on success.

### Using the Control Panel

To pause the advertisement of a BYOIP prefix, go to the [control panel](https://cloud.digitalocean.com/), in the main menu, click **Networking**, and then click the **Reserved IPs** tab.

In the **Bring Your Own IP** section of the page, find the BYOIP prefix you’d like to pause, click its **…** context menu, and then click **Pause advertisement**.

A confirmation window pops up. Type the confirmation text into the text box, and then click **Pause advertisement** to complete the process.

## Resume the Advertisement of a BYOIP Prefix

### Using the CLI

To resume the advertisement of a paused or newly provisioned prefix, use the `doctl network byoip-prefix update` command with the ID of your BYOIP prefix and the flag `--advertise=true`. To find the ID of your prefix, use `doctl network byoip-prefix list` to list all of your prefixes and their IDs.

```shell
doctl network byoip-prefix update <your_prefix_id> --advertise=true
```

Replace `<your_prefix_id>` with the ID of the prefix you are resuming.

### Using the API

Send a `PATCH` request to the `/v2/byoip_prefixes/<your_prefix_id>` endpoint with `{"advertise": true}` as the request body. To find the ID of your prefix send a `GET` request to the `/v2/byoip_prefixes` endpoint to list all of your prefixes and their IDs.

```shell
curl -X PATCH \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"advertise": true}' \
  "https://api.digitalocean.com/v2/byoip_prefixes/<your_prefix_id>"
```

Replace `<your_prefix_id>` with the ID of the prefix you are resuming.

The API sends a `202` response with the current state of the BYOIP prefix on success.

### Using the Control Panel

To resume advertisement of a paused or newly provisioned prefix, go to the [control panel](https://cloud.digitalocean.com/), in the main menu, click **Networking**, and then click the **Reserved IPs** tab.

In the **Bring Your Own IP** section of the page, find the BYOIP prefix you’d like to resume and click **Resume advertisement**.

In this article...

- [Pause the Advertisement of a BYOIP Prefix](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/#pause-the-advertisement-of-a-byoip-prefix)
  - [Using the CLI](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/#using-the-cli)
  - [Using the API](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/#using-the-api)
  - [Using the Control Panel](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/#using-the-control-panel)
- [Resume the Advertisement of a BYOIP Prefix](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/#resume)
  - [Using the CLI](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/#using-the-cli-1)
  - [Using the API](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/#using-the-api-1)
  - [Using the Control Panel](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/#using-the-control-panel-1)

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