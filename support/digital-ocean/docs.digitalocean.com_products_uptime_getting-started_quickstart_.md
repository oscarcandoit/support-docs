---
url: "https://docs.digitalocean.com/products/uptime/getting-started/quickstart/"
title: "Uptime Monitoring Quickstart | DigitalOcean Documentation"
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

- [Getting Started](https://docs.digitalocean.com/products/uptime/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Uptime Monitoring Quickstart

Validated on 21 Jun 2024 • Last edited on 23 Jan 2025

DigitalOcean Uptime is a monitoring service that checks the health of any URL or IP address. Use Uptime to monitor the latency, uptime, and SSL certificates of any website or host, and receive email or Slack alerts at thresholds you choose.

You can create Uptime checks and alerts using the DigitalOcean Control Panel. An Uptime check tests and measures a single URL or IP endpoint, and alerts are configured to be sent based on the results of these tests.

## Create a Check

1. After logging in to your DigitalOcean account, navigate to Uptime by first clicking the **Monitoring** link in the menu. Next, click the **Uptime** tab underneath the **Monitoring** headline.

You can also [navigate directly to Uptime using this link](https://cloud.digitalocean.com/monitors/uptime/checks).

2. Click **Create a new Uptime Check** to start creating your first check. This takes you to the **Create Uptime Check** page. See [How to Create Checks](https://docs.digitalocean.com/products/uptime/how-to/create-checks/) for detailed information on the options available.

3. Choose from an **HTTPS**, **HTTP**, or **PING** check type.

4. Set the endpoint URL or IP to check.

5. Choose the regions to perform the checks from.

6. Set a name for the check.

7. Click the **Create Uptime Check** button. Your Uptime check is created and its status page loads, pending data from the first checks:


![screenshot of an example Uptime check with a blank dashboard](https://docs.digitalocean.com/screenshots/uptime/check-dashboard.cabdd3cc0c9e5daad2682baced5ef2089cefb23a45141e807d5f18584cc97ece.png)

As results start coming in, the latency graph populates with data. Refresh the page to get up-to-date status information.

## Create an Alert

1. Navigate to your Uptime check’s status page if you’re not already there.
2. Click the **Create Uptime Alert** button. This takes you to the **Create Uptime Alert** page. See [How to Create Alerts](https://docs.digitalocean.com/products/uptime/how-to/create-alerts/) for details on the alert options available.
3. Select your alert type from the **Latency**, **Downtime**, and **SSL Cert Expire** options.
4. Set your threshold for triggering the alert.
5. Set your email and Slack notification preferences.
6. Set a name for the alert.
7. Click the **Create Uptime Alert** button.

Now, when an alert triggers in one of the check’s selected regions, it sends notifications of the issue to all added email addresses and Slack channels.

When the uptime or latency returns to acceptable levels, Uptime sends follow-up notifications to all email addresses and Slack channels.

## Destroy the Check

To destroy an Uptime check and all associated alerts, navigate to [the main Uptime page](https://cloud.digitalocean.com/monitors/uptime/checks). This displays a list of your checks:

![screenshot of the Uptime check listing, with the 'more' menu extended, showing the 'Delete' option highlighted](https://docs.digitalocean.com/screenshots/uptime/check-delete.cde61d15832449693dc1ca19c6665ebfdff1d8bdf2b77d985c9e5f59a85b9fbc.png)

Use the drop-down menu to select **Delete** for the check you’d like to delete. A confirmation dialog pops up. Confirm the action by pressing the **Delete** button.

In this article...

- [Create a Check](https://docs.digitalocean.com/products/uptime/getting-started/quickstart/#create-a-check)
- [Create an Alert](https://docs.digitalocean.com/products/uptime/getting-started/quickstart/#create-an-alert)
- [Destroy the Check](https://docs.digitalocean.com/products/uptime/getting-started/quickstart/#destroy-the-check)

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