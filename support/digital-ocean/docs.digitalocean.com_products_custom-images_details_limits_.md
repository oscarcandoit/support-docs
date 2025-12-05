---
url: "https://docs.digitalocean.com/products/custom-images/details/limits/"
title: "Custom Images Limits | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/custom-images.18f81d068bba467745996fcd3b0f4b004a425f0203fdc37728497614b9531dbf.svg)Custom Images](https://docs.digitalocean.com/products/custom-images/)
- [Getting Started](https://docs.digitalocean.com/products/custom-images/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/custom-images/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/custom-images/how-to/)
  - [Upload Custom Images](https://docs.digitalocean.com/products/custom-images/how-to/upload/)
  - [Add Additional Regions](https://docs.digitalocean.com/products/custom-images/how-to/add-regions/)
  - [Delete Custom Images](https://docs.digitalocean.com/products/custom-images/how-to/delete/)
  - [Create Droplets](https://docs.digitalocean.com/products/custom-images/how-to/create-droplets/)
- [Reference](https://docs.digitalocean.com/products/custom-images/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Images)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/image/)
- [Details](https://docs.digitalocean.com/products/custom-images/details/)
  - [Features](https://docs.digitalocean.com/products/custom-images/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/custom-images/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/custom-images/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/custom-images/details/limits/)

- [Details](https://docs.digitalocean.com/products/custom-images/details/)
- Limits

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Custom Images Limits

Validated on 23 Oct 2025 • Last edited on 28 Oct 2025

Custom images are Linux and Unix-like images you import to DigitalOcean. You can create Droplets based custom images, which lets you migrate and scale your workloads without spending time recreating your environment from scratch.

- Images must be less than 100 GB uncompressed.

- UEFI boot is not supported. Custom images must boot using BIOS.

- Windows images are not supported.

- ISO images are not currently supported, but we’re considering ISO support in the future. In the interim, if you have an ISO image you want to use, you can create a new image using your VM software of choice and save it again in a supported format. For a detailed walk-through, see [How to Create a DigitalOcean Droplet from an Ubuntu ISO Format Image](https://www.digitalocean.com/community/tutorials/how-to-create-a-digitalocean-droplet-from-an-ubuntu-iso-format-image).

- Unlike stock images provided by DigitalOcean, Droplets created from custom images use DHCP to obtain an IP address from the DigitalOcean platform. The custom image’s network configuration doesn’t require any additional setup to use DHCP.

- You cannot use [IPv6](https://docs.digitalocean.com/products/networking/ipv6/) with Droplets created from custom images.

- You cannot enable [monitoring](https://docs.digitalocean.com/products/monitoring/) automatically during Droplet creation when using a custom image. Instead, [enable monitoring manually](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install).

- You must add an SSH key when creating Droplets from a custom image. These Droplets have password authentication disabled by default and you cannot use the control panel to reset the root password.

- Importing a custom image by URL fails if the image is served by a CDN that doesn’t support HEAD requests. If you have trouble importing an image via a URL, try downloading the file and uploading it directly.

- Droplets created from a [custom image](https://docs.digitalocean.com/products/custom-images/) do not receive an [anchor IP address](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/find-anchor-ips/) and do not require one to use a [reserved IP](https://docs.digitalocean.com/products/networking/reserved-ips/). When you assign a reserved IP address to a Droplet created from a custom image, the reserved IP is automatically mapped to the Droplet’s public IPv4 address instead of an anchor IP.

- DigitalOcean uses DHCP on port `67` to configure networking for Droplets using custom images. If you put a Droplet created from a custom image behind a firewall, including a [DIgitalOcean Cloud Firewall](https://docs.digitalocean.com/products/networking/firewalls/), you need to [create an outbound UDP rule](https://docs.digitalocean.com/products/networking/firewalls/how-to/configure-rules/) that opens port `67`.


## Known Issues

- You cannot see the total storage used by custom images.

- The image upload window does not correctly display the size of the image.


In this article...

- [Known Issues](https://docs.digitalocean.com/products/custom-images/details/limits/#known-issues)

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