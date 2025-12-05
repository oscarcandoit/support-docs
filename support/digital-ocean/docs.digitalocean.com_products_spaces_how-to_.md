---
url: "https://docs.digitalocean.com/products/spaces/how-to/"
title: "Spaces How-Tos | DigitalOcean Documentation"
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

- How-Tos

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Spaces How-Tos

Generated on 25 Nov 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

## Getting Started

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Create a Spaces Bucket

Create a Spaces bucket to store and serve large amounts of data. Create multiple Spaces buckets at no additional cost to use as logical units for segmenting content.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Upload, Download, and Delete Files

Upload files from your local computer to make them available in a Spaces bucket, download files from a bucket to your local computer, and delete files from a bucket to stop serving them.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Organize Files with Folders

Use folders to organize files in a Space and make them conceptually easier to manage.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Destroy Spaces

Destroy a Spaces bucket to permanently and irrecoverably destroy the bucket and all of the files in it. Your Spaces subscription ends automatically when you destroy your last bucket.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Migrate Spaces with Flexify.IO

Migrate buckets to and from DigitalOcean Spaces with Flexify.IO

![](https://docs.digitalocean.com/images/icons/spaces.svg)

Transfer DigitalOcean Spaces Buckets Between Regions Using Rclone

Migrate data between regions by using Rclone to transfer data between two Spaces buckets.

## Access Control

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Share Links to Files with File Permissions and Presigned URLs

Choose how you share files by setting the file permissions to public (visible to the internet) or private (visible to owners of the bucket). Use presigned URLs to give time-bound access to private files.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Set File Listing Permissions for Spaces

Set the permissions of a Spaces bucket’s file listing, which is an XML list of the bucket’s contents, to public (visible to anyone on the internet) or private (visible only to users with access keys to the bucket).

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Manage Access to Spaces

Allow people or programs to co-manage Spaces with the owner of the Spaces bucket using access keys or DigitalOcean Teams.

## Content Delivery Network

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Enable the Spaces CDN

Enable the built-in Spaces content delivery network (CDN) to deliver content faster and more reliably and add an extra layer of redundancy for websites.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Manage the Spaces CDN Cache

Set the Spaces CDN’s edge cache TTL or purge the cache to manage when edge servers refresh their content.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Customize the Spaces CDN Endpoint with a Subdomain

Use a secure subdomain you own as an alternative endpoint for the Spaces CDN.

## Advanced

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Enable Spaces Versioning

You can preserve, retrieve, and restore every version of every object stored in your buckets using S3 Versioning.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Configure Bucket Policies

Configure bucket policies to control access and permissions for Spaces buckets using the Spaces API, AWS CLI, or s3cmd. Use bucket policies to define who can access your bucket and what actions they can perform.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Configure Lifecycle Rules

Configure lifecycle rules to automatically manage object storage in your Space using the Spaces API, AWS CLI, or s3cmd. Use lifecycle rules to delete objects after a set period or remove incomplete multipart uploads.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Set File Metadata

Set file metadata like Content-Type, Cache-Control, Content-Encoding, Content-Disposition, and custom key-value headers.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Configure CORS on DigitalOcean Spaces

Configure Cross-Origin Resource Sharing (CORS) to let client web applications loaded in one domain interact with resources in a Spaces bucket.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Use DigitalOcean Spaces with AWS S3 SDKs

The Spaces API is interoperable with the AWS S3 API, meaning you can use existing S3 tools and libraries with it. These examples demonstrate how to perform common Spaces operations in JavaScript, Go, PHP, Python 3, and Ruby.

In this article...

[Spaces How-Tos](https://docs.digitalocean.com/products/spaces/how-to/)

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