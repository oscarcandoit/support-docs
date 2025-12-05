---
url: "https://docs.digitalocean.com/products/spaces/getting-started/quickstart/"
title: "Spaces Quickstart | DigitalOcean Documentation"
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

- [Getting Started](https://docs.digitalocean.com/products/spaces/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Spaces Quickstart

Validated on 29 Oct 2019 • Last edited on 18 Aug 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

## Create a Bucket

1. From the [control panel](https://cloud.digitalocean.com/), click **Create** in the top right, and then **Spaces**.
2. Optionally, enable the [Spaces CDN](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/) at no extra cost.
3. Choose a name, a datacenter region, and [the file listing permissions](https://docs.digitalocean.com/products/spaces/how-to/set-file-listing-permissions/) of your Space.
4. Click **Create a Space**. This takes you to the root of your new Space.

## Upload and Delete Files

To upload a file:

1. From the **Files** tab of your bucket, you can add files by dragging and dropping. To use the file selection tool instead, click **Upload Files**.
2. After you have selected your files for upload, [choose their permissions](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/). By default, it’s set to **Private**.
3. Click **Upload File**.

To delete a file:

1. In your Spaces page, click the file’s **More** menu and select **Delete**.
2. **Confirm** the deletion.

## Manage File Permissions

You can check the [permissions on files](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/) in your bucket by mousing over the filename. The tooltip that opens shows the **Permission**, which is either **Public** or **Private**.

To change a file’s permissions:

1. In your Spaces page, click the file’s **More** menu and select **Manage Permissions**.
2. Choose **Public** or **Private** and click **Update**.

## Create and Delete Folders

You can organize files using [folders](https://docs.digitalocean.com/products/spaces/how-to/use-folders/). To create a new folder:

1. Click the **New Folder** button from your bucket.
2. Enter a name for the folder and click the blue check mark.

To upload a folder:

1. From the **Files** tab of your bucket, click **Upload File**. From here, you can drag and drop nested directory structures.
2. After you have selected your folders for upload, choose their permissions. By default, it’s set to **Private**.
3. Click **Upload**.

To delete a folder:

1. In your Spaces page, click the folder’s **More** menu and select **Delete**.
2. **Confirm** the deletion.

All the contents in a deleted folder are also deleted.

## Enable the CDN

You can enable the CDN when creating a new bucket. To enable the CDN on an existing bucket:

1. From the **Settings** tab of your Space, in the **CDN (Content Delivery Network)** section, click **Edit**.
2. Click **Enable CDN**, choose your [TTL](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/), and add any subdomains.
3. Click **Save**.

## Delete a Space

1. From the **Settings** tab of your Space, select **Destroy**.
2. Click the red **Destroy** button, then the red **Confirm** button.

This destroys the bucket and all of its contents.

In this article...

- [Create a Bucket](https://docs.digitalocean.com/products/spaces/getting-started/quickstart/#create-a-bucket)
- [Upload and Delete Files](https://docs.digitalocean.com/products/spaces/getting-started/quickstart/#upload-and-delete-files)
- [Manage File Permissions](https://docs.digitalocean.com/products/spaces/getting-started/quickstart/#manage-file-permissions)
- [Create and Delete Folders](https://docs.digitalocean.com/products/spaces/getting-started/quickstart/#create-and-delete-folders)
- [Enable the CDN](https://docs.digitalocean.com/products/spaces/getting-started/quickstart/#enable-the-cdn)
- [Delete a Space](https://docs.digitalocean.com/products/spaces/getting-started/quickstart/#delete-a-space)

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