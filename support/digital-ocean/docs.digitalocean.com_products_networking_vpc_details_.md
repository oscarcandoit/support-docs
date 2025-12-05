---
url: "https://docs.digitalocean.com/products/networking/vpc/details/"
title: "VPC Details | DigitalOcean Documentation"
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

- Details

[Give Feedback](https://ideas.digitalocean.com/documentation)

# VPC Details

Generated on 25 Nov 2025

A Virtual Private Cloud (VPC) is a private network interface for collections of DigitalOcean resources. VPC networks are inaccessible from the public internet and other VPC networks, and traffic on them doesn’t count against bandwidth usage. You can link VPC networks to each other using VPC peering connections.

![](https://docs.digitalocean.com/images/icons/vpc.svg)

VPC Features

A Virtual Private Cloud (VPC) is a private network interface for collections of DigitalOcean resources. VPC networks are private networks that contain collections of resources that are isolated from the public internet and other VPC networks within your account, [project](https://docs.digitalocean.com/products/projects/) or between [teams](https://docs.digitalocean.com/platform/teams/) in the same datacenter region. This means your resources, such as Droplets and databases, can reside in a network that is only accessible to other resources in the same network.

![](https://docs.digitalocean.com/images/icons/vpc.svg)

VPC Pricing

## VPC Networks

Network traffic is free within a VPC network or between peered VPC networks in the same datacenter.

![](https://docs.digitalocean.com/images/icons/vpc.svg)

VPC Availability

Regional datacenter availability for VPC networks, VPC peering, and Partner Network Connect.

![](https://docs.digitalocean.com/images/icons/vpc.svg)

VPC Limit

Limits and known issues for VPC.

In this article...

[VPC Details](https://docs.digitalocean.com/products/networking/vpc/details/)

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