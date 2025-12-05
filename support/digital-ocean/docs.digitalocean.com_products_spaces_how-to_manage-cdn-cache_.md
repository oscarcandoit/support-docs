---
url: "https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/"
title: "How to Manage the Spaces CDN Cache | DigitalOcean Documentation"
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
- Manage the CDN Cache

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage the Spaces CDN Cache

Validated on 19 Mar 2020 • Last edited on 18 Aug 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

After you [enable the Spaces CDN](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/), the CDN’s edge servers will begin caching and serving the contents of the Spaces bucket.

Using presigned URLs does not allow transferred files to be cached when using the Spaces CDN. Attempting to do so may result in double the bandwidth charge without the CDN’s performance benefit.

Each request with a unique URL, including the URL’s query string, is treated as a unique asset and has its own cache. Requests with identical URLs will return the same cached value. For example, the caches for the following two URLs are separate because the query strings are different:

Example Spaces CDN URLs with different query strings

```
nyc3.cdn.digitaloceanspaces.com/examplefile.jpg?query=examplequery
nyc3.cdn.digitaloceanspaces.com/examplefile.jpg?query=differentquery
```

This URL is based on the datacenter you created your bucket in, followed by `digitaloceanspaces.com`. For nyc3, for example, use `nyc3.digitaloceanspaces.com/...`.

There are two ways you can control the CDN cache:

- [**Set the edge cache TTL**](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/#ttl). The edge cache TTL determines how long the CDN’s edge servers keep a particular copy of your files before getting the current version from the origin. A longer TTL gives better performance with the tradeoff that users won’t see updated content until the existing content expires.

You may want to set a longer TTL for static content and content that is not changed often. You may want to use a shorter TTL for dynamic content and content that changes frequently. You may also want to set a longer edge cache TTL if you anticipate a large increase in traffic.

- [**Purge the cache**](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/#purge). Purging files from the CDN cache makes all edge servers immediately clear their versions of those files and request the current version from buckets.

You may want to purge files to quickly correct errors, fully remove deleted content, or deploy urgent fixes.


## Set the Edge Cache TTL

You can set the default edge cache TTL for the entire bucket and customize the TTL for specific files.

### Change the Bucket’s Default Edge Cache TTL

The edge cache TTL for Spaces is set to 1 hour by default. You can change this when you first enable the CDN and modify it at any time after.

To change a bucket’s edge cache TTL from the [control panel](https://cloud.digitalocean.com/), navigate to the bucket’s detail page by clicking the name of the bucket. From there, click the **Settings** tab. In the **CDN (Content Delivery Network)** section, click **Edit** to open the options.

![The Settings tab for a bucket with CDN settings opened](https://docs.digitalocean.com/screenshots/spaces/cdn-settings.603eb83e5801ed36e6cf270b8b1c490509884a6ce45727479114ad86a7f9ec4c.png)

In the **Edge Cache TTL** drop-down menu, choose a time. The options are:

- 1 minute
- 10 minutes
- 1 hour (the default)
- 1 day
- 1 week

After you make your choice, click **Save**.

### Customize the Edge Cache TTL for Specific Files

If you want the TTL for specific files to differ from the default of the bucket, you can [add a custom key-value pair to the file’s metadata](https://docs.digitalocean.com/products/spaces/how-to/set-file-metadata/).

From the file’s **More** menu (or, after selecting multiple files, from the **Actions** menu), choose **Manage Metadata**. Click **Add Custom Pairing**, and enter `max-age` as the **Key** and the TTL you want in seconds as the **Value**. Then, click **Save**.

## Purge Files from the Cache

You can purge individual files, recursively purge folders, or purge the entire contents of a bucket using the same method. From the [control panel](https://cloud.digitalocean.com/), navigate to the bucket’s detail page by clicking the name of the bucket. This will bring you to the **Files** tab.

To purge a single item from the cache, open its **More** menu and select **Purge from CDN Cache**. To purge multiple items, select the items you want to purge, then open the **Action** menu and select **Purge from CDN Cache**. You can select the full contents of the Space by clicking the checkbox in the header, to the left of the **Name** column.

Either way, you’ll see a prompt to confirm the purge:

![The confirmation window to purge files from the cache](https://docs.digitalocean.com/screenshots/spaces/purge-selected.037cc4cffb9dac7082538b65537506df7cfaa7e571bacaac19b986c87cc433b3.png)

Click **Purge Item/Selected/Space from CDN Cache**. (The text will vary depending on if you’ve selected a single item, multiple items, or the entire contents of the bucket.) Clicking this button will send the invalidation request to the CDN edge servers.

For an alternative way to recursively purge folder contents or the entire bucket from the CDN cache, navigate to the bucket’s **Settings** tab. In the **CDN (Content Delivery Network)** section, click **Purge Cache**.

![The Purge Cache window to purge selected directories from a Space](https://docs.digitalocean.com/screenshots/spaces/purge-cache.9d4674b356d2d01b636b9b19ac7454df64b3863f36cfd51e27b4dd7c4665889f.png)

Here, you can choose a single directory or the entire bucket to remove the files they contain from the cache. After you make your selection, click **Purge Selected Directories** to send the invalidation request to the edge servers.

In this article...

- [Set the Edge Cache TTL](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/#ttl)
  - [Change the Bucket’s Default Edge Cache TTL](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/#space-ttl)
  - [Customize the Edge Cache TTL for Specific Files](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/#customize-the-edge-cache-ttl-for-specific-files)
- [Purge Files from the Cache](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/#purge)

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