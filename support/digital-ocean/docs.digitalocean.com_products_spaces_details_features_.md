---
url: "https://docs.digitalocean.com/products/spaces/details/features/"
title: "Spaces Features | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/spaces.77fdb5bd2197bad96040b9d1e46f6a66a0cb7b3c03213c5f52b42f43e268affa.svg)Spaces Object Storage](https://docs.digitalocean.com/products/spaces/)
- [Getting Started](https://docs.digitalocean.com/products/spaces/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/spaces/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/spaces/how-to/)
  - [Create Spaces Bucket](https://docs.digitalocean.com/products/spaces/how-to/create/)
  - [Add and Remove Files](https://docs.digitalocean.com/products/spaces/how-to/add-and-remove-files/)
  - [Organize Files with Folders](https://docs.digitalocean.com/products/spaces/how-to/use-folders/)
  - [Destroy Spaces](https://docs.digitalocean.com/products/spaces/how-to/destroy/)
  - [Migrate with Flexify.IO](https://docs.digitalocean.com/products/spaces/how-to/migrate/)
  - [Transfer Buckets between Regions](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/)
  - [Share Links to Files](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/)
  - [Set File Listing Permissions](https://docs.digitalocean.com/products/spaces/how-to/set-file-listing-permissions/)
  - [Manage Access](https://docs.digitalocean.com/products/spaces/how-to/manage-access/)
  - [Configure Access Logs](https://docs.digitalocean.com/products/spaces/how-to/access-logs/)
  - [Enable the CDN](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/)
  - [Manage the CDN Cache](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/)
  - [Customize the CDN Endpoint](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/)
  - [Configure Bucket Policies](https://docs.digitalocean.com/products/spaces/how-to/configure-bucket-policies/)
  - [Configure Lifecycle Rules](https://docs.digitalocean.com/products/spaces/how-to/configure-lifecycle-rules/)
  - [Enable Versioning](https://docs.digitalocean.com/products/spaces/how-to/enable-versioning/)
  - [Set File Metadata](https://docs.digitalocean.com/products/spaces/how-to/set-file-metadata/)
  - [Configure CORS](https://docs.digitalocean.com/products/spaces/how-to/configure-cors/)
  - [Use AWS S3 SDKs](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/)
- [Reference](https://docs.digitalocean.com/products/spaces/reference/)
  - [Reference](https://docs.digitalocean.com/reference/api/spaces/)
  - [S3 Compatibility](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/)
  - [s3cmd 2.x Setup](https://docs.digitalocean.com/products/spaces/reference/s3cmd/)
  - [s3cmd 2.x Usage](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/)
  - [Transmit 4](https://docs.digitalocean.com/products/spaces/reference/transmit4/)
  - [Transmit 5](https://docs.digitalocean.com/products/spaces/reference/transmit5/)
  - [Cyberduck 6.2.x](https://docs.digitalocean.com/products/spaces/reference/cyberduck/)
  - [Terraform Backend](https://docs.digitalocean.com/products/spaces/reference/terraform-backend/)
- [Concepts](https://docs.digitalocean.com/products/spaces/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/spaces/concepts/best-practices/)
- [Details](https://docs.digitalocean.com/products/spaces/details/)
  - [Features](https://docs.digitalocean.com/products/spaces/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/spaces/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/spaces/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/spaces/details/limits/)

- [Details](https://docs.digitalocean.com/products/spaces/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Spaces Features

Validated on 19 Jun 2018 • Last edited on 18 Aug 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

DigitalOcean Spaces provide S3-compatible object storage which lets you store and serve large amounts of data. You can create them in a few seconds and use them immediately with no configuration. Data transfer is automatically secured with HTTPS, and the available storage capacity scales seamlessly.

Spaces buckets are ideal for storing static, unstructured data like audio, video, and images as well as large amounts of text. Because buckets are an [object storage](https://www.digitalocean.com/community/tutorials/object-storage-vs-block-storage-services) implementation, use cases like databases, applications written in server-side languages, and mission-critical applications will work best with local storage or [block storage](https://docs.digitalocean.com/products/volumes/).

If you use Spaces to serve static or dynamic content for your website, you can also benefit from using the Spaces CDN ( [Content Delivery Network](https://www.digitalocean.com/community/tutorials/using-a-cdn-to-speed-up-static-content-delivery)), which is available at no additional cost. CDNs reduce page load times, improve performance, and reduce your bandwidth and infrastructure costs by caching your assets across a set of geographically distributed servers.

### Unique URLs

A Spaces subscription gives you the ability to create multiple buckets to use as logical units for segmenting content. Each bucket has its own unique URL.

The Spaces URL naming pattern is `spacename.region.digitaloceanspaces.com` and `region.digitaloceanspaces.com/spacename`, where `spacename` is the name of your Space and `region` is the region your Space is in.

### High Availability

Spaces is built with Ceph, like [block storage](https://docs.digitalocean.com/products/volumes/). As we describe in our [blog post on why we chose Ceph](https://blog.digitalocean.com/why-we-chose-ceph-to-build-block-storage/):

> Ceph is built for redundancy, and we carefully ensure that the loss of a single drive, server, or even an entire datacenter rack does not compromise data integrity or availability.

> Ceph gracefully heals itself when individual components fail, ensuring continuity of service with uncompromised data protection. Additionally, we use sophisticated monitoring systems built around tools including Icinga, Prometheus, and our own open-source [`ceph_exporter`](https://github.com/digitalocean/ceph_exporter). These help us respond immediately to any issues with our Ceph infrastructure to ensure continuous availability.

Ceph is also compatible with a large subset of the [S3 RESTful API](https://docs.ceph.com/en/latest/radosgw/s3/), which allows you to use many familiar tools and commands.

### CDN (Content Delivery Network)

Spaces Object Storage provides a built-in CDN that you can enable with a few clicks. If you’ve enabled the Spaces CDN for your bucket, you can access the contents of your bucket using the edge URL `<spacename>.<region>.cdn.digitaloceanspaces.com` instead of the origin URL.

A [CDN](https://www.digitalocean.com/community/tutorials/using-a-cdn-to-speed-up-static-content-delivery) is a network of edge servers that deliver content to users. Each point of presence (PoP), the location of a group of edge servers, sends content to the users that are physically closest to it.

CDNs help deliver static and dynamic online content faster and more reliably. Because most search engines factor page load time into their algorithm, using a CDN can also provide an SEO advantage. Using a CDN additionally provides a layer of redundancy for websites; a CDN PoP can serve cached content to users even if the origin or other PoPs are down.

You can control how long your CDN content is cached using the [TTL settings](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/#ttl), either for all the content in your bucket or for individual objects. You can similarly choose to [purge the cache](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/#purge) for the entire bucket or individual objects at any time. Each request with a unique URL, including the query string, is treated as a unique asset and has its own cache.

If you don’t want to use the default edge URL, you can [use a custom subdomain](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/), like `images.example.com`. Subdomains you use with the Spaces CDN must have an SSL certificate for security reasons. If you’ve added your domain to DigitalOcean, you use DigitalOcean’s Let’s Encrypt certificates, which are fully managed and renewed on your behalf every 60 days. You also have the option to manually upload an SSL certificate if you use a different DNS provider or want to upload an existing certificate.

In this article...

- [Unique URLs](https://docs.digitalocean.com/products/spaces/details/features/#unique-urls)
- [High Availability](https://docs.digitalocean.com/products/spaces/details/features/#high-availability)
- [CDN (Content Delivery Network)](https://docs.digitalocean.com/products/spaces/details/features/#cdn)

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