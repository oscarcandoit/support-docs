---
url: "https://docs.digitalocean.com/products/uptime/how-to/create-alerts/"
title: "How to Create Alerts | DigitalOcean Documentation"
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
- Create Alerts

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Alerts

Validated on 21 Jun 2024 • Last edited on 23 Jan 2025

DigitalOcean Uptime is a monitoring service that checks the health of any URL or IP address. Use Uptime to monitor the latency, uptime, and SSL certificates of any website or host, and receive email or Slack alerts at thresholds you choose.

1. To create a new Uptime Alert, go to your Uptime check’s status page and click **Create Uptime Alert** in the corner of the page.
![screenshot of the header of an uptime check, with the check's name, endpoint, and a button for 'Create Uptime Alert'](https://docs.digitalocean.com/screenshots/uptime/create-alert-button.726bed3429561ff2c14987fb2a12c00b146e2f5f48004abda1bbcec9c715bcc6.png)
This takes you to the **Create Uptime Alert** page.
![screenshot of the 'Create Uptime Alert' dialog, with sections for alert type, alert name, and delivery options](https://docs.digitalocean.com/screenshots/uptime/alert-create-dialog.a64c604038479b2c7cf51e3eb0162978f261cabfbb8fc8e063be74324689ee8e.png)
2. Select your alert type:


   - **Latency** alerts notify you if your check endpoint is experiencing latency above a specified threshold for a set amount of time.
   - **Downtime** alerts notify you if your check endpoint cannot be reached for a set amount of time.
   - **SSL Cert Expire** alerts notify you if your check endpoint has an SSL certificate that expires within the set amount of days.

Note
Latency alerts do not notify you if your check endpoint cannot be reached. To test for downtime, you need to create a separate downtime alert.

3. Set the threshold for your alert to trigger. This section has different fields for each alert type:
   - For latency alerts, enter a latency threshold, in milliseconds (5,000 maximum), and a time period, in minutes. If the latency to your check endpoint is greater than the chosen threshold for an amount of time equal to the chosen time period, the alert triggers.
   - For downtime alerts, enter a time period, in minutes. If the Uptime check can’t reach your check endpoint for an amount of time equal to the chosen time period, the alert triggers.
   - For SSL certificate expiry alerts, enter a time period, in days. If the certificate is set to expire within that time period when the Uptime check is performed, the alert triggers.
4. Select where you want to receive notifications when the alert triggers. By default, you receive email notifications to the email used for your DigitalOcean account. To receive notifications to more email addresses, type them one by one into the **Add additional emails** text box and hit **Enter** for each. You can add up to 9 additional email addresses in this way.

You can also receive notifications in one or more Slack channels.

To receive notifications in a Slack channel, click the **Connect Slack** button to open the Slack authentication pop-up window. In the **Where should DigitalOcean post?** section, type or select a specific Slack channel for the DigitalOcean integration to send notifications to. Click **Allow**. Then, back in the alert creation page, check the box next to your chosen Slack channel.
![screenshot of the Slack permissions dialog, showing the access DigitalOcean is requesting, options for which channel to post alerts to, and 'Cancel' and 'Allow' buttons](https://docs.digitalocean.com/screenshots/uptime/alert-slack-permissions.126d6816fe373ff2b4480ac0e7d086a0968ee436d814456cfd2741df0a041211.png)
To add another channel, click **Connect Slack** and go through the process again.

5. Set a name for your alert.

6. Click the **Create** button.


Now, when an alert triggers in one of the check’s selected regions, it sends notifications of the issue to all added email addresses and Slack channels. Then, when the uptime or latency returns to acceptable levels, Uptime sends follow-up notifications to all email addresses and Slack channels.

In this article...

[How to Create Alerts](https://docs.digitalocean.com/products/uptime/how-to/create-alerts/)

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