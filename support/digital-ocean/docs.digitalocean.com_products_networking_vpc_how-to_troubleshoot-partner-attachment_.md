---
url: "https://docs.digitalocean.com/products/networking/vpc/how-to/troubleshoot-partner-attachment/"
title: "How to Troubleshoot a Partner Attachment | DigitalOcean Documentation"
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

- [How-Tos](https://docs.digitalocean.com/products/networking/vpc/how-to/)
- Troubleshoot Partner Attachment

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Troubleshoot a Partner Attachment

Validated on 1 Apr 2025 • Last edited on 28 May 2025

A Virtual Private Cloud (VPC) is a private network interface for collections of DigitalOcean resources. VPC networks are inaccessible from the public internet and other VPC networks, and traffic on them doesn’t count against bandwidth usage. You can link VPC networks to each other using VPC peering connections.

Refer to the following documentation and resources when troubleshooting your partner attachment.

## Troubleshoot with Megaport Cloud Router Looking Glass

If you are using a Megaport Cloud Router, its Looking Glass tool provides information about connections and routing tables. Refer to the [Megaport Cloud Router Looking Glass docs](https://docs.megaport.com/mcr/mcr-looking-glass/) for information about how to launch the tool and what information it provides.

## Troubleshoot Using the DigitalOcean Control Panel

Go to the [**Multi-cloud Integrations**](https://cloud.digitalocean.com/networking/multi-cloud-integrations/) tab in the **Networking** section of the control panel. All of your partner attachments are listed under **Partner Network Connect**. The **Status** column shows **Up** or **Down**, where **Down** indicates there is a problem with Megaport or your Megaport configuration. Configuration errors are often made while copying BGP info between platforms. Double-check your BGP configuration.

Click on the **Remote Routes** tab. This tab lists the partner attachment’s learned routes. There are no routes shown until you complete the full end-to-end connection. If you’ve set up the full connection and still see no routes, double-check your BGP settings.

## View Megaport Maintenance and Outage Status

Megaport provides service status updates through its service portal. If your partner attachment shows as **Down** but your configuration is correct, check the [maintenance or outage events](https://docs.megaport.com/portal-admin/monitoring-events/) to see if there’s a known issue.

## Regenerate an Expired Service Key

Service keys expire after 90 days. When you use an expired service key to connect Megaport to your partner attachment, you receive the error message `This service key is no longer valid.`.

To fix this, regenerate the service key. First go to the [**Multi-cloud Integrations**](https://cloud.digitalocean.com/networking/multi-cloud-integrations/) tab in the **Networking** section of the control panel. Click the **…** “More” menu to the right of the partner attachment you are setting up. Select **Regenerate service key** from the menu. The service key is regenerated.

In this article...

- [Troubleshoot with Megaport Cloud Router Looking Glass](https://docs.digitalocean.com/products/networking/vpc/how-to/troubleshoot-partner-attachment/#troubleshoot-with-megaport-cloud-router-looking-glass)
- [Troubleshoot Using the DigitalOcean Control Panel](https://docs.digitalocean.com/products/networking/vpc/how-to/troubleshoot-partner-attachment/#troubleshoot-using-the-digitalocean-control-panel)
- [View Megaport Maintenance and Outage Status](https://docs.digitalocean.com/products/networking/vpc/how-to/troubleshoot-partner-attachment/#view-megaport-maintenance-and-outage-status)
- [Regenerate an Expired Service Key](https://docs.digitalocean.com/products/networking/vpc/how-to/troubleshoot-partner-attachment/#regenerate-an-expired-service-key)

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