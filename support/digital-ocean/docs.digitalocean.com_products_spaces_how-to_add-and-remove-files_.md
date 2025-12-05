---
url: "https://docs.digitalocean.com/products/spaces/how-to/add-and-remove-files/"
title: "How to Upload, Download, and Delete Files | DigitalOcean Documentation"
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
- Add and Remove Files

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Upload, Download, and Delete Files

Validated on 16 May 2024 • Last edited on 16 Apr 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

You can [upload](https://docs.digitalocean.com/products/spaces/how-to/add-and-remove-files/#upload-files), [download](https://docs.digitalocean.com/products/spaces/how-to/add-and-remove-files/#download-files), and [delete](https://docs.digitalocean.com/products/spaces/how-to/add-and-remove-files/#delete-files) files from your Spaces buckets using the control panel or the API.

## Upload Files

You can upload one or more files to a bucket via the control panel or the DigitalOcean API.

Because of browser limitations, control panel uploads work best with files smaller than 2GB and batches of less than 100 files. We recommend using a [third-party client or the DigitalOcean API](https://docs.digitalocean.com/products/spaces/reference/) for large files and batches.

To upload a file with the API, see [Upload an Object](https://docs.digitalocean.com/reference/api/spaces/#upload-an-object-put) or [Begin a Multi-Part Upload](https://docs.digitalocean.com/reference/api/spaces/#begin-a-multi-part-upload).

In the DigitalOcean Control Panel, from [**Spaces** overview page](https://cloud.digitalocean.com/spaces), click the bucket you want to work with. From the bucket’s detail page, you can stage files for upload in two ways:

1. By dragging and dropping items to your browser, which allows you to add files, [folders](https://docs.digitalocean.com/products/spaces/how-to/use-folders/), and items nested inside folders.
2. By clicking **Upload Files**, which opens a window to add files from your local computer, but doesn’t support adding folders.

Everything you stage is visible in the Spaces selection window, which stays open to allow you to continue to stage more files.

![The Upload File window](https://docs.digitalocean.com/screenshots/spaces/upload-file.61490b661bc2b6cc9136cc05d9adeed62e2e7b2b0240378c00d3540eb7be9781.png)

This window also lets you set the [file permissions](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/) for all staged files. The **X** button to the right of each item unstages that file or folder. Folders and their contents are treated as a unit, so removing a folder here unstages the folder and all the files and folders within it.

Click **Upload Files** to upload the items you’ve staged with the permissions you’ve selected.

## Download Files

You can download files using the Spaces API or the control panel.

To download a file with the API, see [Get an Object](https://docs.digitalocean.com/reference/api/spaces/#get-an-object).

To download a file from a bucket to your local computer with the control panel, open the **More** menu of the file.

![The more menu of a file in a bucket](https://docs.digitalocean.com/screenshots/spaces/file-more-menu.a7fd1757182f47f010a052995aa0f8397e1f5375066e4ca8d2da1fb42744f1d6.png)

Select **Download** to start a download of the item to your local machine. Depending on your browser’s preferences, the download may start automatically or you may be prompted to save the file first. The item may also open in your browser, depending upon the file type and your browser.

## Delete Files

You can delete files using the Spaces API or the control panel.

To delete a file with the API, see [Delete an Object](https://docs.digitalocean.com/reference/api/spaces/#delete-an-object).

To delete a file from a bucket with the control panel, open the **More** menu of the file.

![The more menu of a file in a bucket](https://docs.digitalocean.com/screenshots/spaces/file-more-menu.a7fd1757182f47f010a052995aa0f8397e1f5375066e4ca8d2da1fb42744f1d6.png)

Select **Delete** to delete the file. Deletions are permanent, so you need to confirm the deletion in the window that opens before the item is actually deleted.

You can delete multiple files at once by selecting them, opening the **Actions** menu, and clicking **Delete**. This will similarly prompt you to confirm the deletion.

## Search Files

To search a bucket for a specific file, go to the bucket’s **Files** tab and enter the filename into the search bar. This displays all files that begin with a matching string in the current directory.

![The search bar in the bucket's Files page](https://docs.digitalocean.com/screenshots/spaces/search.6ed8c420b7d7c66dbd4fbffb5061e19151e50f5d3a939884cd1b498c9bbda95b.png)

The search feature only supports prefix searching, meaning that it only returns files with names that begin with the string you searched for. There is no wildcard search character. Additionally, it only returns files in your current directory, meaning it cannot search within folders.

In this article...

- [Upload Files](https://docs.digitalocean.com/products/spaces/how-to/add-and-remove-files/#upload-files)
- [Download Files](https://docs.digitalocean.com/products/spaces/how-to/add-and-remove-files/#download-files)
- [Delete Files](https://docs.digitalocean.com/products/spaces/how-to/add-and-remove-files/#delete-files)
- [Search Files](https://docs.digitalocean.com/products/spaces/how-to/add-and-remove-files/#search-files)

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