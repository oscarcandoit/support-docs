---
url: "https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify-byoip-ip/"
title: "How to Reassign or Unassign BYOIP IPs | DigitalOcean Documentation"
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
- Modify BYOIP IPs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Reassign or Unassign BYOIP IPs

Validated on 18 Sep 2025 • Last edited on 18 Sep 2025

DigitalOcean Reserved IPs are publicly-accessible static IPv4 and IPv6 addresses. Assign and reassign reserved IP addresses to Droplets as needed, or implement an automated failover mechanism with reserved IPs to build a high availability infrastructure.

## Reassign a BYOIP IP Address Using Automation

Use the standard reserved IP `assign` actions to reassign BYOIP IP addresses. Substitute the address you’d like to reassign for any `<reserved-ip>` placeholders. You can only reassign BYOIP IPs to Droplets in the same datacenter.

How to Reassign a BYOIP Address Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute reserved-ip-action assign`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip-action/assign/) for more details:




```shell
doctl compute reserved-ip-action assign <reserved-ip> <droplet-id> [flags]
```



The following example assigns the reserved IP address `203.0.113.25` to a Droplet with the ID `386734086`:




```shell
doctl compute reserved-ip-action assign 203.0.113.25 386734086
```


How to Reassign a BYOIP Address Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/reserved_ips/<reserved-ip>/actions`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/%25!s(%3Cnil%3E)).

## Reassign a BYOIP IP Address Using the Control Panel

To reassign a BYOIP IP address from the [control panel](https://cloud.digitalocean.com/), in the main menu, click **Networking**, click **Reserved IPs** to see a list of your reserved IPs and BYOIP prefixes.

Click the prefix that contains the IP address you’d like to reassign. You’re taken to a page with details about your BYOIP prefix, including a list of IP address that are assigned to Droplets.

Find the IP address in the list, click its **…** context menu, and then click **Reassign**.

In the **Reassign** window, select a Droplet to reassign the IP address to, and then click **Reassign Reserved IP**. You can only reassign BYOIP IPs to Droplets in the same datacenter.

## Unassign a BYOIP IP Address Using Automation

Use the standard reserved IP `unassign` actions to unassign BYOIP IP addresses. Substitute the address you’d like to unassign for any `<reserved-ip>` placeholders.

How to Unassign a BYOIP Address Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute reserved-ip-action unassign`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip-action/unassign/) for more details:




```shell
doctl compute reserved-ip-action unassign <reserved-ip> [flags]
```



The following example unassigns the reserved IP address `203.0.113.25` from a resource:




```shell
doctl compute reserved-ip-action unassign 203.0.113.25
```


How to Unassign a BYOIP Address Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/reserved_ips/<reserved-ip>/actions`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/%25!s(%3Cnil%3E)).

## Unassign a BYOIP IP Address Using the Control Panel

To unassign a BYOIP IP address from the [control panel](https://cloud.digitalocean.com/), in the main menu, click **Networking**, and then click **Reserved IPs** to a list of your reserved IPs and BYOIP prefixes.

Click the prefix that contains the IP address you’d like to unassign. A page with details about your BYOIP prefix loads, including a list of IP address that are assigned to Droplets.

Find the IP address in the list, click its **…** context menu, and then click **Unassign**.

In the **Unassign** window, type the name of the currently assigned Droplet to confirm, and then click **Unassign IP address**.

In this article...

- [Reassign a BYOIP IP Address Using Automation](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify-byoip-ip/#reassign-a-byoip-ip-address-using-automation)
- [Reassign a BYOIP IP Address Using the Control Panel](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify-byoip-ip/#reassign-a-byoip-ip-address-using-the-control-panel)
- [Unassign a BYOIP IP Address Using Automation](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify-byoip-ip/#unassign-a-byoip-ip-address-using-automation)
- [Unassign a BYOIP IP Address Using the Control Panel](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify-byoip-ip/#unassign-a-byoip-ip-address-using-the-control-panel)

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