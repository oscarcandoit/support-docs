---
url: "https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/"
title: "How to Enable the Spaces CDN | DigitalOcean Documentation"
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

- [How-Tos](https://docs.digitalocean.com/products/spaces/how-to/)
- Enable the CDN

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Enable the Spaces CDN

Validated on 28 Mar 2019 • Last edited on 18 Aug 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

Spaces provides a built-in content delivery network (CDN), which is a network of edge servers that deliver content to users. Each point of presence (PoP), the location of a group of edge servers, sends content to the users that are physically closest to it. CDNs help deliver static and dynamic online content faster and more reliably, and provides a layer of redundancy for websites. The Spaces CDN is subject to the same [transfer charges](https://www.digitalocean.com/pricing/spaces-object-storage) as Spaces.

You can enable the Spaces CDN either when [creating a new Space](https://docs.digitalocean.com/products/spaces/how-to/create/) or on an existing Spaces bucket’s **Settings** tab, in the **CDN (Content Delivery Network)** section.

Once you’ve enabled the Spaces CDN for a bucket, you can access the contents of that bucket using the edge URL `<spacename>.<region>.cdn.digitaloceanspaces.com` in addition to the existing origin URL. You can also [customize the CDN endpoint](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/) with a secure subdomain you own. This lets you use a URL like `images.example.com` in addition to `<spacename>.<region>.cdn.digitaloceanspaces.com`.

You can also [use presigned URLs with the Spaces CDN](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/). To do so, configure your SDK or S3 tool to use the non-CDN endpoint, generate a presigned URL for a GetObject request, then modify the hostname in the URL to be the CDN hostname (`<space-name>.<region>.cdn.digitaloceanspaces.com`, unless the bucket uses a custom hostname).

Learn more about [best practices when using the Spaces CDN](https://docs.digitalocean.com/products/spaces/concepts/best-practices/#cdn).

Using presigned URLs does not allow transferred files to be cached when using the Spaces CDN. Attempting to do so may result in double the bandwidth charge without the CDN’s performance benefit.

## Enable the CDN During Bucket Creation

To enable the CDN when creating a new bucket, on the [Spaces create page](https://cloud.digitalocean.com/spaces/new), look for the **CDN (Content Delivery Network)** section.

![The CDN section of the Spaces create page](https://docs.digitalocean.com/screenshots/spaces/create-cdn-section.4af9d2cc39c1f62f81f46b2164a0e79cc3b88d3dc0d69b063306831de5684a75.png)

Click **Enable CDN**. An **Edge Cache TTL** drop-down menu will appear. This setting determines the amount of time that the content is cached. You can keep the default of **1 hour** or choose another value. You can also [customize the CDN endpoint](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/) with a secure subdomain you own.

Finish choosing the rest of the settings for the bucket, then click **Create a Space**. Once the bucket is created, you can modify the edge cache TTL setting and custom subdomain at any time on the bucket’s **Settings** page.

## Enable the CDN for an Existing Bucket

From the [control panel](https://cloud.digitalocean.com/), navigate to the bucket’s detail page by clicking the name of the bucket. From there, click the **Settings** tab. The text in the **CDN (Content Delivery Network)** section will tell you if the CDN is currently **Enabled** or **Disabled** for the bucket.

To enable the CDN, in the same **CDN (Content Delivery Network)** section, click **Edit**. In the options that open, click **Enable CDN**. When you do, several options for the CDN will appear.

![The Settings tab for a bucket with CDN settings opened](https://docs.digitalocean.com/screenshots/spaces/cdn-settings.603eb83e5801ed36e6cf270b8b1c490509884a6ce45727479114ad86a7f9ec4c.png)

You can [customize the CDN endpoint](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/) with a secure subdomain you own using the **Use a custom subdomain** menu. The **Edge Cache TTL** determines the amount of time that the content is cached. You can keep the default of **1 hour** or choose another value.

When you’re done choosing options, click **Save**. Once the CDN is enabled, you can return to this page to modify the edge cache TTL setting and custom subdomain.

## Disable the CDN

From the [control panel](https://cloud.digitalocean.com/), navigate to that bucket’s detail page by clicking the name of the bucket. From there, click the **Settings** tab. The text in the **CDN (Content Delivery Network)** section will tell you if the CDN is currently **Enabled** or **Disabled** for the bucket.

To disable the CDN for an existing bucket from the [control panel](https://cloud.digitalocean.com/), navigate to that bucket’s detail page by clicking the name of the bucket. From there, click the **Settings** tab.

In the **CDN (Content Delivery Network)** section, click **Edit**. In the options that open, click **Disable CDN** and then **Save**.

Click **Confirm** to disable the CDN, which removes all files and certificates from the edge servers, and all CDN and edge server endpoints.

In this article...

- [Enable the CDN During Bucket Creation](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/#during-creation)
- [Enable the CDN for an Existing Bucket](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/#existing-space)
- [Disable the CDN](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/#disable-the-cdn)

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