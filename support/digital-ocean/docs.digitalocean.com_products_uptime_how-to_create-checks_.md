---
url: "https://docs.digitalocean.com/products/uptime/how-to/create-checks/"
title: "How to Create Checks | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/uptime.9beac4529484c4f40aaa4d087e7352ef854dd1be4c2b7a3ed946c54de1c9a383.svg)Uptime](https://docs.digitalocean.com/products/uptime/)
- [Getting Started](https://docs.digitalocean.com/products/uptime/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/uptime/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/uptime/how-to/)
  - [Create Checks](https://docs.digitalocean.com/products/uptime/how-to/create-checks/)
  - [Edit Checks](https://docs.digitalocean.com/products/uptime/how-to/edit-checks/)
  - [Destroy Checks](https://docs.digitalocean.com/products/uptime/how-to/destroy-checks/)
  - [Create Alerts](https://docs.digitalocean.com/products/uptime/how-to/create-alerts/)
  - [Edit Alerts](https://docs.digitalocean.com/products/uptime/how-to/edit-alerts/)
  - [Destroy Alerts](https://docs.digitalocean.com/products/uptime/how-to/destroy-alerts/)
  - [View the Dashboard](https://docs.digitalocean.com/products/uptime/how-to/view-dashboard/)
- [Reference](https://docs.digitalocean.com/products/uptime/reference/)
- [Details](https://docs.digitalocean.com/products/uptime/details/)
  - [Features](https://docs.digitalocean.com/products/uptime/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/uptime/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/uptime/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/uptime/details/limits/)

- [How-Tos](https://docs.digitalocean.com/products/uptime/how-to/)
- Create Checks

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Checks

Validated on 21 Jun 2024 • Last edited on 18 Dec 2024

DigitalOcean Uptime is a monitoring service that checks the health of any URL or IP address. Use Uptime to monitor the latency, uptime, and SSL certificates of any website or host, and receive email or Slack alerts at thresholds you choose.

1. To create your first Uptime Check, click the **Create a new Uptime Check** button on the Uptime landing page. If you’ve already created a check, the **Create Uptime Check** button is in the upper portion of the page, above your list of existing checks.
![screenshot of the 'Create Uptime Check' button above the Uptime Checks list](https://docs.digitalocean.com/screenshots/uptime/create-uptime-check.4410d1c710d74737c484289d7e082722b6d46184c22751bcbc905ceb51e784a2.png)
This takes you to the **Create Uptime Check** page.
![screenshot of ](https://docs.digitalocean.com/screenshots/uptime/check-create-dialog.c7d81bfe5889a91025cfb627da634d07d0b23c31527deb2aa36b05e8f1208a1a.png)
2. Choose the type of check to perform. The default is **HTTPS**. The options are:
   - **HTTPS**: perform checks over HTTPS, including certificate expiry monitoring. Any HTTP response code outside of the 200–299 “success” range counts as an outage.
   - **HTTP**: perform checks over plain HTTP. Any HTTP response code outside of the 200–299 “success” range counts as an outage.
   - **PING**: perform an ICMP ping check, useful for hosts that aren’t running a web server.
3. Specify the check endpoint. This is typically an **HTTPS** or **HTTP** URL. For **PING** checks, it is a hostname ( **example.com**) or IP address ( **203.0.113.4**).

4. Choose the regions you’d like to perform the check from. By default, all regions are selected. If you have no customers or users in a particular region, you can deselect that region to reduce the possibility of alert fatigue from unimportant events.

The following regions are available:


   - Asia East
   - Europe
   - USA East
   - USA West

You must select one or more regions.

5. Enter a name for the check.

6. Press the **Create Uptime Check** button. Your Uptime check is created and its status page loads, pending data from the first checks.
![screenshot of an example Uptime check with a blank dashboard](https://docs.digitalocean.com/screenshots/uptime/check-dashboard.cabdd3cc0c9e5daad2682baced5ef2089cefb23a45141e807d5f18584cc97ece.png)
As results start coming in, the latency graph populates with data. Refresh the page to get up-to-date check status information.


In this article...

[How to Create Checks](https://docs.digitalocean.com/products/uptime/how-to/create-checks/)

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