---
url: "https://docs.digitalocean.com/products/networking/ipv6/"
title: "IPv6 | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/ipv6.5328c5b0b5ae17c7784679c40c051945e4799cda74d004c85a41eba70b6a07f9.svg)IPv6](https://docs.digitalocean.com/products/networking/ipv6/)
- [Getting Started](https://docs.digitalocean.com/products/networking/ipv6/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/ipv6/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/networking/ipv6/how-to/)
  - [Enable IPv6](https://docs.digitalocean.com/products/networking/ipv6/how-to/enable/)
  - [Use Additional Addresses](https://docs.digitalocean.com/products/networking/ipv6/how-to/configure-additional-addresses/)
  - [Disable IPv4](https://docs.digitalocean.com/products/networking/ipv6/how-to/disable-ipv4/)
- [Reference](https://docs.digitalocean.com/products/networking/ipv6/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#operation/dropletActions_post_byTag)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/enable-ipv6/)
- [Concepts](https://docs.digitalocean.com/products/networking/ipv6/concepts/)
- [Details](https://docs.digitalocean.com/products/networking/ipv6/details/)
  - [Features](https://docs.digitalocean.com/products/networking/ipv6/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/ipv6/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/ipv6/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/ipv6/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/ipv6/support/)

- IPv6

[Give Feedback](https://ideas.digitalocean.com/documentation)

# IPv6

Generated on 25 Nov 2025

[IP addresses](https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking) let machines communicate across a network. DigitalOcean Droplets are assigned IPv4 addresses by default. Enabling IPv6 on a Droplet gives you access to its 16 additional IPv6 addresses.

Most Viewed IPv6 Articles

01. [How to Enable IPv6 on Droplets](https://docs.digitalocean.com/products/networking/ipv6/how-to/enable/ "Enable IPv6 on a Droplet to gain access to its 16 configurable IPv6 addresses.")
02. [How do I debug a firewall causing connection problems with my Droplet?](https://docs.digitalocean.com/support/how-do-i-debug-a-firewall-causing-connection-problems-with-my-droplet/ "Diagnose and troubleshoot firewall issues that could be causing network connectivity issues.")
03. [Are my Droplet's IP addresses static?](https://docs.digitalocean.com/support/are-my-droplets-ip-addresses-static/ "Addresses assigned to a Droplet remain static for the life of the Droplet.")
04. [My firewalls are not working correctly](https://docs.digitalocean.com/support/my-firewalls-are-not-working-correctly/ "Use this guide to gather information about your firewalls and diagnose problems.")
05. [How can I allowlist the DigitalOcean metrics agent with my firewall?](https://docs.digitalocean.com/support/how-can-i-allowlist-the-digitalocean-metrics-agent-with-my-firewall/ "Configure your firewall to allow outgoing traffic through ports 80 and 443.")
06. [How do I disable IPv6?](https://docs.digitalocean.com/support/how-do-i-disable-ipv6/ "You can disable IPv6 by modifying your Droplet's network interface configuration.")
07. [IPv6 Pricing](https://docs.digitalocean.com/products/networking/ipv6/details/pricing/ "")
08. [IPv6 Concepts](https://docs.digitalocean.com/products/networking/ipv6/concepts/ "Explanations and definitions of core concepts in IPv6.")
09. [IPv6 Limits](https://docs.digitalocean.com/products/networking/ipv6/details/limits/ "Limits and known issues for IPv6.")
10. [How to Disable IPv4 and Only Use IPv6](https://docs.digitalocean.com/products/networking/ipv6/how-to/disable-ipv4/ "Disable IPv4 to rely solely on IPv6.")

![](https://docs.digitalocean.com/images/icons/ipv6.svg)

Getting Started

Quickstarts and intermediate tutorials to get started.

![](https://docs.digitalocean.com/images/icons/ipv6.svg)

How-Tos

How to accomplish specific tasks in detail, like creation/deletion, configuration, and management.

![](https://docs.digitalocean.com/images/icons/ipv6.svg)

Reference

Native and third-party tools, troubleshooting, and answers to frequently asked questions.

![](https://docs.digitalocean.com/images/icons/ipv6.svg)

Concepts

Explanations and definitions of core concepts in IPv6.

![](https://docs.digitalocean.com/images/icons/ipv6.svg)

Details

Features, plans and pricing, availability, limits, known issues, and more.

![](https://docs.digitalocean.com/images/icons/ipv6.svg)

Support

Get help with technical support and answers to frequently asked questions.

In this article...

[IPv6](https://docs.digitalocean.com/products/networking/ipv6/)

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