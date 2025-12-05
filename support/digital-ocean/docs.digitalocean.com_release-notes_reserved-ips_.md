---
url: "https://docs.digitalocean.com/release-notes/reserved-ips/"
title: " | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/release-notes.5fbb164636ab961df9e08f892a39623e2bf7848be659fb300d6b0bab87a060dd.svg)Release Notes](https://docs.digitalocean.com/release-notes/)
- [![](https://docs.digitalocean.com/images/icons/regional-availability.32459447c00bfdb1c07abebcc0fdd721a4cbd93143cb616b0fbe5c629e4a938c.svg)Regional Availability](https://docs.digitalocean.com/platform/regional-availability/)
- [![](https://docs.digitalocean.com/images/icons/accounts.7c3a46a4e139957c37b1ba530846464f3b7432b7bc00793db0d8e788940ddf69.svg)Accounts](https://docs.digitalocean.com/platform/accounts/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Release Notes](https://docs.digitalocean.com/release-notes/)
- Reserved IPs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Reserved IPs Release Notes

Validated on 18 Sep 2025 • Last edited on 27 Sep 2023

## September 2025

### 18 September

- Bring Your Own IP (BYOIP) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). BYOIP enables bringing your own block of IPv4 addresses to DigitalOcean. Once provisioned, assign your addresses to Droplets using the same interface and APIs as [Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/).


## June 2025

### 25 June

- Bring Your Own IP (BYOIP) is now in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview). BYOIP allows you to bring your own block of IPv4 addresses to DigitalOcean. Once provisioned, assign your addresses to Droplets using the same interface and APIs as [Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/).


### 17 June

- Reserved IPv6 addresses are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Reserved IPv6 addresses are publicly-accessible static IPv6 addresses that you can assign to Droplets and instantly remap to other Droplets in the same datacenter. See [How to Create Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) to get started.


## February 2025

### 28 February

- Reserved IPv6 addresses are now available in [public preview](https://cloud.digitalocean.com/account/feature-preview/). Reserved IPv6 addresses are publicly-accessible static IPv6 addresses that you can assign to Droplets and instantly remap to other Droplets in the same datacenter. You must opt-in to the [public preview](https://cloud.digitalocean.com/account/feature-preview/) to create reserved IPv6 addresses.


## September 2022

### 23 September

- We have added the `project_id` field to the [Reserved IP](https://docs.digitalocean.com/products/networking/reserved-ips/) service’s API. The `project_id` field allows you to create and associate Reserved IPs with a [DigitalOcean Project](https://docs.digitalocean.com/products/projects/).

Use the `project_id` and `region` fields in a [Create a new Reserved IP request](https://docs.digitalocean.com/reference/api/digitalocean/#operation/reservedIPs_create) to create a Reserved IP within a project. You can assign the IP address to a Droplet later using a [Reserved IP action](https://docs.digitalocean.com/reference/api/digitalocean/#operation/reservedIPsActions_post) request.

We have added the `project_id` field to the following Reserved IP API responses:


  - [Create a new Reserved IP (POST)](https://docs.digitalocean.com/reference/api/digitalocean/#operation/reservedIPs_create)
  - [List Reserved IPs (GET)](https://docs.digitalocean.com/reference/api/digitalocean/#operation/reservedIPs_list)
  - [Retrieve an existing Reserved IP (GET)](https://docs.digitalocean.com/reference/api/digitalocean/#operation/reservedIPs_get)
  - [Initiate a Reserved IP action (POST)](https://docs.digitalocean.com/reference/api/digitalocean/#operation/reservedIPsActions_post)

## July 2022

### 1 July

- The following pricing changes are now in effect:


  - A new $4 Droplet with 512MB of memory, 10GB of storage, 1 vCPU, and 500GB of outbound data transfer is now available in NYC1, FRA1, SFO3, SGP1, and AMS3. The slug is `s-1vcpu-512mb-10gb`.

  - We have simplified pricing for DigitalOcean Kubernetes and some managed databases for better accuracy and predictibility.

  - The prices of Droplets, Snapshots, Load Balancers, Reserved IPs, and Custom Images have increased.


There is no change to pricing for Spaces, backups, volumes, DigitalOcean Container Registry, or App Platform. There are also no changes to inbound data transfer or bandwidth pricing.

This is our first major price change in 10 years, and we believe the new model better fits our understanding of our customers and the expanded breadth of our offerings. For a more detailed breakdown of the changes, see [our blog post on our new pricing](https://www.digitalocean.com/blog/new-4-dollar-droplet-updated-pricing).

## June 2022

### 27 June

- To improve security, DigitalOcean no longer accepts TLS 1.0 and TLS 1.1 connections. This includes connections to `www.digitalocean.com`, `cloud.digitalocean.com`, and `api.digitalocean.com`.


### 16 June

- We have renamed the Floating IP product to _[Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/)_. The Reserved IP service retains the same functionality as the prior service.

We have added new [API endpoints](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Reserved-IPs) and fields (`reserved_ips`) to reflect the name change, but the service’s original [Floating IP endpoints](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Floating-IPs) and fields (`floating_ips`) will remain available until the fall of 2023. Please update any automation, scripts, or services that use these endpoints to reflect these changes.

If you are using the Projects API to query Reserved IP resources, the endpoint still returns reserved IP addresses in the `floating_ips` field.


## August 2021

### 31 August

- You can now assign [floating IP addresses](https://docs.digitalocean.com/products/networking/reserved-ips/) to Droplets that use [custom images](https://docs.digitalocean.com/products/custom-images/).


## May 2021

### 5 May

- We have updated the [Floating IP API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Floating-IPs) responses to better align with our newer API models. The `droplet` and `region` fields now use the same response models used in the `/v2/droplets` and `/v2/regions` endpoints. Specifically:


  - The `private_networking` feature is now displayed under the `features` field under `droplet` instead of the `features` field under `region`.
  - The `vpc_uuid` field now populates with the correct values.
  - The Droplet’s `type` displays `base` when the Droplet uses a base image (i.e. Ubuntu, CentOS).
  - The Droplet’s `networks` field now includes private and floating IP addresses, if applicable.

## May 2020

### 15 May

- [Unassigned floating IP](https://docs.digitalocean.com/products/networking/reserved-ips/#plans-and-pricing) charges will now appear on invoices. The first charge will appear on July 2020 invoices for all floating IPs that were not assigned to Droplets during the month of June.


## August 2019

### 19 August

- Floating IP Address rate limit information was added to the [DigitalOcean API Documentation](https://developers.digitalocean.com/documentation/v2/#create-a-new-floating-ip-assigned-to-a-droplet).


## June 2018

### 11 June

- Expanded Droplet View allows customers using the Dashboard to click a Droplet and quickly view additional information about the Droplet without having to go to the Droplet Page. It also updates the list of Droplets to display at a glance whether Backups are on/off and if a Floating IP is attached.


In this article...

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