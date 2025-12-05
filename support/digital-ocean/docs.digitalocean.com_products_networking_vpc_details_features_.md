---
url: "https://docs.digitalocean.com/products/networking/vpc/details/features/"
title: "VPC Features | DigitalOcean Documentation"
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

- [Details](https://docs.digitalocean.com/products/networking/vpc/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# VPC Features

Validated on 19 Nov 2025 • Last edited on 19 Nov 2025

A Virtual Private Cloud (VPC) is a private network interface for collections of DigitalOcean resources. VPC networks are inaccessible from the public internet and other VPC networks, and traffic on them doesn’t count against bandwidth usage. You can link VPC networks to each other using VPC peering connections.

A Virtual Private Cloud (VPC) is a private network interface for collections of DigitalOcean resources. VPC networks are private networks that contain collections of resources that are isolated from the public internet and other VPC networks within your account, [project](https://docs.digitalocean.com/products/projects/) or between [teams](https://docs.digitalocean.com/platform/teams/) in the same datacenter region. This means your resources, such as Droplets and databases, can reside in a network that is only accessible to other resources in the same network.

You can use VPC networks to organize and isolate resources in a more secure infrastructure for your applications, execution environments, and tenancies. VPC networks provide control over your networking environment: you can choose your network’s IP range, set up cloud firewalls, configure NAT gateways, connect VPC networks through peering, and connect to external networks through Partner Network Connect.

You can create a variety of new resources in a VPC network, but you can’t migrate all kinds of resources between networks. The following table lists DigitalOcean resources compatible with VPC networks and which ones support migration:

| Resource Type | Create within VPCs | Migrate between VPCs |
| --- | --- | --- |
| Droplets | [Creation supported](https://docs.digitalocean.com/products/networking/vpc/how-to/add-resources/). | [Migration supported using snapshots](https://docs.digitalocean.com/products/networking/vpc/how-to/migrate-resources/#migrate-your-droplet-to-a-different-vpc-network). |
| Managed databases | [Creation supported](https://docs.digitalocean.com/products/networking/vpc/how-to/add-resources/). | [Native migration supported](https://docs.digitalocean.com/products/networking/vpc/how-to/migrate-resources/#migrate-your-database-to-a-different-vpc-network). |
| Kubernetes clusters | [Creation supported](https://docs.digitalocean.com/products/networking/vpc/how-to/add-resources/). | Not supported. |
| Load balancers | [Creation supported](https://docs.digitalocean.com/products/networking/vpc/how-to/add-resources/). | Not supported. |
| NAT gateways (currently in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/#public-preview)) | [Creation supported](https://docs.digitalocean.com/products/networking/vpc/how-to/create-nat-gateway/). | Not supported. |
| Spaces | Not applicable. | Not applicable. |
| Volumes | Not applicable. | Not applicable. |

Note [Cloud Firewalls](https://docs.digitalocean.com/products/networking/firewalls/) affect both public and VPC network traffic. Rules specific to either must specify the public or private IP range.

## Internet Gateways

Internet gateways route traffic between your VPC resources and the public internet. This enables isolating backend resources while maintaining controlled internet connectivity.

### NAT Gateways

DigitalOcean provides a managed Network Address Translation (NAT) Gateway service that centralizes outbound internet access for resources within a VPC network in a datacenter.

[NAT Gateways](https://docs.digitalocean.com/products/networking/vpc/how-to/create-nat-gateway/) provide:

- Fully managed service maintained by DigitalOcean
- High availability and scalability
- Simple configuration and maintenance
- Enhanced security features

The following diagrams contrast how traffic is routed without and with a NAT Gateway.

**Network without Internet Gateway**

```
Datacenter Region

VPC 10.0.220.0/16

   Web Server

   Web Server

   Web Server

   Internet
```

**Network with NAT Gateway**

```
Datacenter Region

VPC 10.0.220.0/16

   Web Server

   NAT Gateway

   Web Server

   Web Server

   Internet
```

#### NAT Gateway Features

The following table details the specific features and functionality of NAT Gateways:

| Feature | Description |
| --- | --- |
| Size tiers | Available in 1-16 increments. Each increment provides 25 Mbps of symmetrical bandwidth and 100 GiB of outbound data transfer per month. |
| Timeouts | Configure idle timeout values for TCP, UDP, and ICMP connections. |
| Default gateway | Set one NAT gateway as the [default gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/configure-droplet-nat-gateway/#default-gateway-routing) for a VPC. Droplets configured to use the VPC gateway IP automatically route through the default NAT gateway without requiring manual route updates when switching gateways. |
| Redundancy | Create multiple NAT gateways in a single VPC for redundancy or capacity scaling. Only one can be set as the default gateway at a time. |
| Static egress IPs | Each NAT gateway receives one or more static public IP addresses for outbound traffic, simplifying firewall allowlist management. |

To learn how to set up NAT Gateways, see [How to Create a NAT Gateway](https://docs.digitalocean.com/products/networking/vpc/how-to/create-nat-gateway/). For implementation guidance and security considerations, see [VPC Best Practices](https://docs.digitalocean.com/products/networking/vpc/concepts/best-practices/#internet-gateways).

In this article...

- [Internet Gateways](https://docs.digitalocean.com/products/networking/vpc/details/features/#internet-gateways)
  - [NAT Gateways](https://docs.digitalocean.com/products/networking/vpc/details/features/#nat-gateways)
    - [NAT Gateway Features](https://docs.digitalocean.com/products/networking/vpc/details/features/#nat-gateway-features)

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