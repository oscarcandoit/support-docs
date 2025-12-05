---
url: "https://docs.digitalocean.com/release-notes/vpc/"
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
- VPC

[Give Feedback](https://ideas.digitalocean.com/documentation)

# VPC Release Notes

Validated on 19 Nov 2025 • Last edited on 27 Sep 2023

## November 2025

### 19 November

- VPC Network Address Translation (NAT) Gateways are now generally available. NAT gateways are a software-defined networking service that centralizes outbound internet access for VPC resources within a datacenter.

Read [How to Create a VPC NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/create-nat-gateway/) and [How to Configure Droplets for NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/configure-droplet-nat-gateway/) to get started.


## September 2025

### 30 September

- VPC networks now provide an internal DNS resolver on the second-to-last IP address of the network. Configure your Droplets to use the internal resolver for better DNS performance and reliability. Read [How to Use the VPC-local DNS Resolver](https://docs.digitalocean.com/products/networking/vpc/how-to/use-local-dns-resolver/) for more information.


## August 2025

### 28 August

- VPC Network Address Translation (NAT) Gateways are now available in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview). NAT gateways are a software-defined networking service that centralizes outbound internet access for VPC resources within a datacenter. Read [How to Create a VPC NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/create-nat-gateway/) to get started.


## July 2025

### 17 July

- [Partner Network Connect](https://docs.digitalocean.com/products/networking/vpc/how-to/create-partner-attachment/) is now available in the LON (London) region.


## June 2025

### 17 June

- [Partner Network Connect](https://docs.digitalocean.com/products/networking/vpc/how-to/create-partner-attachment/) now supports [high availability partner attachments](https://docs.digitalocean.com/products/networking/vpc/how-to/add-ha-to-partner-attachment/) which use redundant connections to your network as a service (NaaS) provider to enable automatic traffic failover whenever the primary connection fails.


## April 2025

### 25 April

- [Partner Network Connect](https://docs.digitalocean.com/products/networking/vpc/how-to/create-partner-attachment/) now supports traffic to and from [VPC-native DOKS clusters](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking).


### 1 April

- Partner Network Connect is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). [Create a partner attachment](https://docs.digitalocean.com/products/networking/vpc/how-to/create-partner-attachment/) to establish high-bandwidth, low-latency network connections directly between DigitalOcean VPC networks and other public cloud providers or on-premises datacenters.


## March 2025

### 7 March

- The `10.229.0.0/16` VPC IP address range is now reserved in all regions for DigitalOcean internal use. You may not create new VPC networks with subnets that overlap this range.


## December 2024

### 12 December

- [VPC-native networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability) for all DigitalOcean Kubernetes (DOKS) customers. VPC-native networking allows customers to route traffic directly between DOKS pods, services, and other resources on VPC networks. For more information, refer to [the DOKS Features page](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking).

- [DigitalOcean Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) peering is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/##general-availability). VPC peering allows you to join two VPC networks with a secure, private connection. Read [How to Create a VPC Peering](https://docs.digitalocean.com/products/networking/vpc/how-to/create-peering/) to get started.


## October 2024

### 15 October

- [VPC-native networking](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking) is now available in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/#summary) for all DigitalOcean Managed Kubernetes (DOKS) customers. VPC-native networking allows customers to route traffic directly between DOKS pods, services, and other resources on VPC networks. For more information, see [the DOKS Features page](https://docs.digitalocean.com/products/kubernetes/details/features/#vpc-native-networking).

- [DigitalOcean Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) peering is now in [early availability](https://docs.digitalocean.com/platform/product-lifecycle/#early-availability). VPC peering allows you to join two VPC networks with a secure, private connection. See [How to Create a VPC Peering](https://docs.digitalocean.com/products/networking/vpc/how-to/create-peering/) to get started.


## October 2020

### 26 October

- You can now [change the default VPC network for a region](https://docs.digitalocean.com/products/networking/vpc/how-to/set-default-vpc/). When you change the default VPC network for a region, the new default network will be automatically selected during applicable resource set ups unless otherwise specified.


### 1 October

- All Droplets created after 1 October 2020 are [placed into a VPC network by default](https://docs.digitalocean.com/products/networking/vpc/). You can no longer manually enable VPC networking on existing Droplets. You can [migrate existing Droplets into VPC networks using Snapshots](https://docs.digitalocean.com/products/networking/vpc/how-to/migrate-resources/).


## April 2020

### 28 April

- The DigitalOcean [Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service is now available for all customers. VPC replaces the private networking service. Existing private networks will continue to function as normal but with the enhanced security and features of the VPC service. See the description of [VPC features](https://docs.digitalocean.com/products/networking/vpc/#features) for more information.


### 14 April

- [v1.16.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1160-april-14-2020) of the DigitalOcean Terraform Provider is now available. This release includes VPC support and expanded Spaces support.


### 7 April

- We began the incremental release of the [DigitalOcean Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service. It will be available for all customers soon. VPC replaces the private networking service.


## May 2019

### 29 May

- [DigitalOcean Managed Databases](https://docs.digitalocean.com/products/databases/) now support [private networking](https://docs.digitalocean.com/products/networking/vpc/). New database clusters will provision with private networking enabled. Existing clusters will require an update to connect over the private network.


## July 2018

### 18 July

- With the release of [private networking isolation](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/) in NYC3, private networks are restricted to each user account in all regions.


### 17 July

- We have released [private networking isolation](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/) in NYC2.


### 16 July

- We have released [private networking isolation](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/) in NYC1.


### 12 July

- We released [private networking isolation](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/) in SFO1 and SGP1.


### 11 July

- [Private networking isolation](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/) continued with releases in LON1, AMS3, FRA1, and SFO2.


### 10 July

- We have released [private networking isolation](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/) in AMS2, BLR1, and TOR1. Communication over the private network in those datacenters is now restricted to other resources within an account or team.


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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)