---
url: "https://docs.digitalocean.com/products/networking/vpc/"
title: "VPC | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/vpc.8e35a29c5ce11122208ae3824979d1635c2e67bfb31236328f0665502135db7e.svg)VPC](https://docs.digitalocean.com/products/networking/vpc/)
- [Getting Started](https://docs.digitalocean.com/products/networking/vpc/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/vpc/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/networking/vpc/how-to/)
  - [Create VPCs](https://docs.digitalocean.com/products/networking/vpc/how-to/create/)
  - [Destroy VPCs](https://docs.digitalocean.com/products/networking/vpc/how-to/destroy/)
  - [Add Resources](https://docs.digitalocean.com/products/networking/vpc/how-to/add-resources/)
  - [Migrate Resources](https://docs.digitalocean.com/products/networking/vpc/how-to/migrate-resources/)
  - [Enable on Existing Droplets](https://docs.digitalocean.com/products/networking/vpc/how-to/enable/)
  - [Set Default VPC](https://docs.digitalocean.com/products/networking/vpc/how-to/set-default-vpc/)
  - [Use VPC-local DNS](https://docs.digitalocean.com/products/networking/vpc/how-to/use-local-dns-resolver/)
  - [Create Peering](https://docs.digitalocean.com/products/networking/vpc/how-to/create-peering/)
  - [Destroy Peering](https://docs.digitalocean.com/products/networking/vpc/how-to/destroy-peering/)
  - [Update Peering Routes](https://docs.digitalocean.com/products/networking/vpc/how-to/update-peering-routes/)
  - [Create NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/create-nat-gateway/)
  - [Destroy NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/destroy-nat-gateway/)
  - [Configure Droplets for NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/configure-droplet-nat-gateway/)
  - [Configure DOKS for NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/configure-doks-nat-gateway/)
  - [Create Partner Attachment](https://docs.digitalocean.com/products/networking/vpc/how-to/create-partner-attachment/)
  - [Destroy Partner Attachment](https://docs.digitalocean.com/products/networking/vpc/how-to/destroy-partner-attachment/)
  - [Edit Partner Attachment VPC](https://docs.digitalocean.com/products/networking/vpc/how-to/edit-partner-attachment-vpc/)
  - [Add High Availability to Partner Attachment](https://docs.digitalocean.com/products/networking/vpc/how-to/add-ha-to-partner-attachment/)
  - [Troubleshoot Partner Attachment](https://docs.digitalocean.com/products/networking/vpc/how-to/troubleshoot-partner-attachment/)
- [Reference](https://docs.digitalocean.com/products/networking/vpc/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/VPCs)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/vpcs/)
- [Concepts](https://docs.digitalocean.com/products/networking/vpc/concepts/)
  - [Plan Custom VPC Network](https://docs.digitalocean.com/products/networking/vpc/concepts/plan-your-network/)
  - [VPC Best Practices](https://docs.digitalocean.com/products/networking/vpc/concepts/best-practices/)
- [Details](https://docs.digitalocean.com/products/networking/vpc/details/)
  - [Features](https://docs.digitalocean.com/products/networking/vpc/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/vpc/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/vpc/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/vpc/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/vpc/support/)

- VPC

[Give Feedback](https://ideas.digitalocean.com/documentation)

# VPC

Generated on 25 Nov 2025

A Virtual Private Cloud (VPC) is a private network interface for collections of DigitalOcean resources. VPC networks are inaccessible from the public internet and other VPC networks, and traffic on them doesn’t count against bandwidth usage. You can link VPC networks to each other using VPC peering connections.

Most Viewed VPC Articles

01. [How to Create a NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/create-nat-gateway/ "Create a NAT Gateway to centralize outbound access for resources on a VPC.")
02. [How to Create a VPC Peering](https://docs.digitalocean.com/products/networking/vpc/how-to/create-peering/ "Create a VPC peering to connect two VPCs.")
03. [How to Add New Resources to a VPC Network](https://docs.digitalocean.com/products/networking/vpc/how-to/add-resources/ "Automatically add new resources to a VPC network when you create them.")
04. [How to Enable VPC Networking on Existing Droplets](https://docs.digitalocean.com/products/networking/vpc/how-to/enable/ "Manually enable VPC networking on an existing Droplet.")
05. [VPC Pricing](https://docs.digitalocean.com/products/networking/vpc/details/pricing/ "")
06. [How to Configure DOKS for NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/configure-doks-nat-gateway/ "Use the routing agent to route DOKS traffic through a NAT gateway")
07. [How to Update Routes to Enable VPC Peering](https://docs.digitalocean.com/products/networking/vpc/how-to/update-peering-routes/ "Update routing tables to enable VPC peering.")
08. [How to Configure Droplets for NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/configure-droplet-nat-gateway/ "Configure IP routes to direct backend Droplet traffic through NAT gateway.")
09. [Use VPC Networks to Secure Your Servers and Other Best Practices](https://docs.digitalocean.com/products/networking/vpc/concepts/best-practices/ "Develop your infrastructure securely by isolating groups of resources using a VPC and implementing other best security practices.")
10. [How to Plan Your Custom VPC Network](https://docs.digitalocean.com/products/networking/vpc/concepts/plan-your-network/ "Determine the right size for your custom VPC network and learn how to calculate its IP range.")

![](https://docs.digitalocean.com/images/icons/vpc.svg)

Getting Started

Quickstarts and intermediate tutorials to get started.

![](https://docs.digitalocean.com/images/icons/vpc.svg)

How-Tos

How to accomplish specific tasks in detail, like creation/deletion, configuration, and management.

![](https://docs.digitalocean.com/images/icons/vpc.svg)

Reference

Native and third-party tools, troubleshooting, and answers to frequently asked questions.

![](https://docs.digitalocean.com/images/icons/vpc.svg)

Concepts

Explanations and definitions of core concepts in VPC.

![](https://docs.digitalocean.com/images/icons/vpc.svg)

Details

Features, plans and pricing, availability, limits, known issues, and more.

![](https://docs.digitalocean.com/images/icons/vpc.svg)

Support

Get help with technical support and answers to frequently asked questions.

## Latest Updates

### 19 November 2025

- VPC Network Address Translation (NAT) Gateways are now generally available. NAT gateways are a software-defined networking service that centralizes outbound internet access for VPC resources within a datacenter.

Read [How to Create a VPC NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/create-nat-gateway/) and [How to Configure Droplets for NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/configure-droplet-nat-gateway/) to get started.


### 30 September 2025

- VPC networks now provide an internal DNS resolver on the second-to-last IP address of the network. Configure your Droplets to use the internal resolver for better DNS performance and reliability. Read [How to Use the VPC-local DNS Resolver](https://docs.digitalocean.com/products/networking/vpc/how-to/use-local-dns-resolver/) for more information.


### 28 August 2025

- VPC Network Address Translation (NAT) Gateways are now available in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview). NAT gateways are a software-defined networking service that centralizes outbound internet access for VPC resources within a datacenter. Read [How to Create a VPC NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/create-nat-gateway/) to get started.


For more information, see [all VPC release notes](https://docs.digitalocean.com/release-notes/vpc/).

In this article...

[VPC](https://docs.digitalocean.com/products/networking/vpc/)

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