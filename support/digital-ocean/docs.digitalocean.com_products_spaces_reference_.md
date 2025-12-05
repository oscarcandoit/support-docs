---
url: "https://docs.digitalocean.com/products/spaces/reference/"
title: "Spaces Reference | DigitalOcean Documentation"
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

- Reference

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Spaces Reference

Validated on 17 Jul 2025 • Last edited on 18 Aug 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

## The DigitalOcean API

The [DigitalOcean API](https://docs.digitalocean.com/reference/) lets you manage resources programmatically with standard HTTP requests. All actions available in the control panel are also available through the API.

![](https://docs.digitalocean.com/images/icons/api.svg)

Spaces API Reference Documentation

Complete reference documentation for the Spaces RESTful XML API, interoperable with Amazon S3.

## Third-Party Clients

In addition to the DigitalOcean Control Panel and Spaces API, you can use any S3-compatible third-party client to connect to and manage Spaces.

### Graphical Clients

Like the control panel, graphical clients provide a graphical interface for managing Spaces buckets. Unlike the control panel, they avoid browser limitations and they require configuration to connect.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

Using Transmit 4 for macOS with DigitalOcean Spaces

Transmit 4 is a macOS-only file transfer utility that is fully compatible with Spaces.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

Using Transmit 5 for macOS with DigitalOcean Spaces

Transmit 5 is the latest version of the macOS-only file transfer utility. It’s largely compatible with Spaces, but Transmit 4 is fully compatible.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

Using Cyberduck 6.2.x for Windows and macOS with DigitalOcean Spaces

Cyberduck is an open-source file transfer client for Windows and macOS that supports S3.

### Command-Line Tools

Command-line tools work in a terminal and let you interact with Spaces buckets in scripts and automation.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

Setting Up s3cmd 2.x with DigitalOcean Spaces

s3cmd is a cross-platform command-line tool for managing S3 and S3-compatible object stores.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

Examples of s3cmd 2.x Usage with DigitalOcean Spaces

Examples of s3cmd commands for common actions with Spaces, like uploading and managing files, setting permissions, and encryption.

### API Client Libraries

SDKs and API client libraries let you manage Spaces buckets programmatically. Spaces supports the AWS S3 SDKs and other S3-compatible libraries.

![](https://docs.digitalocean.com/images/icons/spaces.svg)

How to Use DigitalOcean Spaces with AWS S3 SDKs

The Spaces API is interoperable with the AWS S3 API, meaning you can use existing S3 tools and libraries with it. These examples demonstrate how to perform common Spaces operations in JavaScript, Go, PHP, Python 3, and Ruby.

In this article...

- [The DigitalOcean API](https://docs.digitalocean.com/products/spaces/reference/#the-digitalocean-api)
- [Third-Party Clients](https://docs.digitalocean.com/products/spaces/reference/#third-party-clients)
  - [Graphical Clients](https://docs.digitalocean.com/products/spaces/reference/#graphical-clients)
  - [Command-Line Tools](https://docs.digitalocean.com/products/spaces/reference/#command-line-tools)
  - [API Client Libraries](https://docs.digitalocean.com/products/spaces/reference/#api-client-libraries)

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