---
url: "https://docs.digitalocean.com/products/networking/vpc/getting-started/quickstart/"
title: "VPC Quickstart | DigitalOcean Documentation"
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

- [Getting Started](https://docs.digitalocean.com/products/networking/vpc/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# VPC Quickstart

Validated on 28 Apr 2020 • Last edited on 8 May 2024

A Virtual Private Cloud (VPC) is a private network interface for collections of DigitalOcean resources. VPC networks are inaccessible from the public internet and other VPC networks, and traffic on them doesn’t count against bandwidth usage. You can link VPC networks to each other using VPC peering connections.

## Create a VPC Network

To create a VPC network:

1. From the [control panel](https://cloud.digitalocean.com/), click **Networking** in the main menu, then click the **VPC** tab. In the **VPC** tab, click **Create VPC Network**.

2. Choose a [datacenter region](https://docs.digitalocean.com/products/droplets/#regional-availability). You cannot add resources to VPC networks that reside in different datacenter regions.

3. Select how you want your network’s IP range to be generated. We strongly recommend choosing **Generate an IP range for me** to avoid overlapping network ranges.

4. Name the network and, optionally, add a description. You can change the name and description after creation.

5. Click **Create VPC Network**.


## Add a New Resource to a VPC

To add a new resource to a VPC network:

1. From the **Create** menu in the top right of the [control panel](https://cloud.digitalocean.com/), click the kind of resource you want to create, either **Droplets**, **Clusters**, **Databases**, or **Load Balancers**.

2. On the create page, choose the specifications for your resource, including the VPC network. You must create the resource in the same [datacenter region](https://docs.digitalocean.com/products/droplets/#regional-availability) as the VPC network.

3. Enter a name for the resource, then click **Create**.


The new resource is automatically added to the VPC network on creation.

## Migrate an Existing Droplet to a VPC Network

To migrate an existing Droplet to a different VPC network, you need to create a [snapshot](https://docs.digitalocean.com/products/snapshots/) of the Droplet and then recreate the Droplet in the network:

1. Shut down the Droplet with `sudo shutdown -h now`.

2. From the [control panel](https://cloud.digitalocean.com/), click the Droplet you want to snapshot.

3. From the Droplet’s details page, click **Snapshots**, then click **Take Snapshot**. This creates an image of the Droplet in its current state that can be used to create new Droplets.

4. From the **Create** menu, click **Droplets**.

5. On the **Create Droplets** page, click the **Snapshots** tab and select the snapshot you want to create a new Droplet from.

6. Choose a plan for the Droplet.

7. Under **Choose datacenter region**, choose the region that your VPC network resides in, then select the target VPC network from the **Choose a VPC network** menu.

8. Fill out the rest of the choices on the create page, then click **Create**. The new Droplet is created within your VPC network.


In this article...

- [Create a VPC Network](https://docs.digitalocean.com/products/networking/vpc/getting-started/quickstart/#create-a-vpc-network)
- [Add a New Resource to a VPC](https://docs.digitalocean.com/products/networking/vpc/getting-started/quickstart/#add-a-new-resource-to-a-vpc)
- [Migrate an Existing Droplet to a VPC Network](https://docs.digitalocean.com/products/networking/vpc/getting-started/quickstart/#migrate-an-existing-droplet-to-a-vpc-network)

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