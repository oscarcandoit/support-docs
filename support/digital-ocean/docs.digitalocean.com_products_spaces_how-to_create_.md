---
url: "https://docs.digitalocean.com/products/spaces/how-to/create/"
title: "How to Create a Spaces Bucket | DigitalOcean Documentation"
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
- Create Spaces Bucket

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create a Spaces Bucket

Validated on 28 Mar 2019 • Last edited on 18 Aug 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

DigitalOcean Spaces allows you to store and serve large amounts of data. Each Spaces bucket you create within an account has its own URL and can be used as a logical unit for segmenting content.

Creating your first bucket automatically starts your [Spaces subscription](https://docs.digitalocean.com/products/spaces/#plans-and-pricing). Your subscription automatically ends when you [destroy all of your buckets](https://docs.digitalocean.com/products/spaces/how-to/destroy/).

You can create a bucket at any time from the **Create** menu by selecting **Spaces**. This takes you to the **Create a Spaces Bucket** page.

![The Spaces create page](https://docs.digitalocean.com/screenshots/spaces/create-page.702559702603a2404006925c7a4e1bb3b9234d03b1ec320f3fa91764fe7f07b9.png)

From here, you need to:

1. **Choose a datacenter region**. The datacenter region you choose also becomes part of a bucket’s endpoint URL. See [regional availability for Spaces](https://docs.digitalocean.com/platform/regional-availability/#other-products) for more information on the available options.

2. Optionally, enable the [Spaces **CDN (Content Delivery Network)**](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/). If you click **Enable CDN**, you can customize the **Edge Cache TTL**, which is the amount of time the edge servers cache your content.

3. Choose to **restrict file listing** or **enable file listing**. The visibility of a bucket’s file listing has no effect on the visibility of the files themselves. You can [change the file listing visibility](https://docs.digitalocean.com/products/spaces/how-to/set-file-listing-permissions/) at any time after creation.

4. **Choose a unique name for your bucket**. The name of the bucket makes up part of its endpoint URL and cannot be changed once it is created. Names must:
   - Be unique among all users in all regions. If the name you choose is already in use, a message appears which says **Space already exists.**
   - Be between 3 and 63 characters long.
   - Contain only lowercase letters, numbers, and dashes.
   - Begin with a letter or number.
     Warning
      Because bucket names are not typically encrypted in client-side designs, do not use personally identifiable data or other private information in bucket names.
5. **Select a [project](https://docs.digitalocean.com/products/projects/)** to add the bucket to.


After choosing your settings, click **Create a Spaces Bucket**. This takes you to the newly-created bucket’s **Files** tab, which displays the files and folders in its root.

![The index page of an empty bucket](https://docs.digitalocean.com/screenshots/spaces/empty-space.796315f0fa15d27d5b93c87cb150801e37a5f8b3ad2c2fc5e1689e17951d3cbc.png)

After creation, the **Settings** page of a bucket displays its **Endpoint** value, which is used to configure third-party clients. The **Index** page displays its name, size, and creation date.

In this article...

[How to Create a Spaces Bucket](https://docs.digitalocean.com/products/spaces/how-to/create/)

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