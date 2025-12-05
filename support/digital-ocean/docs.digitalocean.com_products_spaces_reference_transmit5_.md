---
url: "https://docs.digitalocean.com/products/spaces/reference/transmit5/"
title: "Using Transmit 5 for macOS with DigitalOcean Spaces | DigitalOcean Documentation"
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

- [Reference](https://docs.digitalocean.com/products/spaces/reference/)
- Transmit 5

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Using Transmit 5 for macOS with DigitalOcean Spaces

Validated on 19 Jun 2018 • Last edited on 20 Feb 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

[Transmit](https://panic.com/transmit) is a macOS-only file transfer utility developed by [Panic, Inc.](https://panic.com/). It handles a wide variety of server types including FTP, SFTP, WebDAV, and S3-compatible servers.

## Setup

To use Transmit, you need:

- **Transmit 5**, which you can [download from Panic’s website](https://panic.com/transmit/).
- **An [access key](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys) pair for your Spaces buckets.** To generate these, visit the [Spaces Access Keys Page](https://cloud.digitalocean.com/spaces/access_keys) in the DigitalOcean Control Panel.

## Connect to Spaces

Launch the Transmit application by clicking on its icon in the dock, or double-clicking its icon in your **Applications** folder. Transmit opens and displays a window with your local filesystem on the left, and an SFTP connection pane on the right:

![Transmit default interface](https://docs.digitalocean.com/screenshots/spaces/transmit5/0-home-screen.6db88414a2d19fba7c341a25b74df14a3051b7de775ef2211b36c1e0e7632ff3.png)

Click the **Protocol** selection menu, highlighted above, then select **Amazon S3**. This brings up the form for connecting to an S3-compatible server. Fill in the following details:

- **Address:** This is the datacenter you created your bucket in, followed by `digitaloceanspaces.com`. For nyc3, for example, fill in `nyc3.digitaloceanspaces.com` for this value.
- **Access Key ID:**`your-access-key`
- **Secret:**`your-secret-key`
- **Remote Path:** this determines where Transmit navigates to upon connecting. You may put a bucket name (and subdirectory, if desired) here to connect directly to that location

When all filled out, the connection pane should look similar to this:

![Transmit S3 connection details](https://docs.digitalocean.com/screenshots/spaces/transmit5/2-s3-filled-out.215fb5fcf6c631f497a43f8846881275ad2b85dcaf081d737dd22aaade5f4cb2.png)

Click the green **Connect** button to connect to Spaces. Transmit connects, then displays a list of your Spaces (if you left the **Remote Path** option blank):

![Transmit default file listing](https://docs.digitalocean.com/screenshots/spaces/transmit5/3-default-listing.d08c9da3da342a661d1ac3ea5b19d751f101e5337246efb1188f7824ff1c70fe.png)

If you have not yet created a bucket, this is empty. In the above screenshot we have one bucket called **example-name**. Let’s use Transmit to make a bucket next.

## Create a New Bucket

To create a new bucket with Transmit 5, first move to the root directory where all your buckets are listed. You can do this by clicking the `____.digitaloceanspaces.com` item all the way on the left of the breadcrumb trail at the top of the right-hand pane:

![Transmit remote breadcrumb](https://docs.digitalocean.com/screenshots/spaces/transmit5/4-root-slash.31b37971c56b7326c1f8bbc508474986ad8911c0f4c70a6ad88386a440eba637.png)

Once you’ve done that, click the **File** menu, then choose **New Bucket…**.

A window opens asking for a bucket name and location.

![Transmit new bucket creation dialog](https://docs.digitalocean.com/screenshots/spaces/transmit5/6-new-bucket-sheet.eefdd943ab1c8a39f853ad5f95a71f110f6be8214acfc957a1789698b9247e7a.png)

Choose any name that fits the guidelines mentioned in the dialog. Leave the default **Location** value as is. Click **Create** and your new bucket is created and added to the list.

Note
Bucket names must be unique across all regions, so if your name is already in use anywhere on `digitaloceanspaces.com`, Transmit gives an error. If this happens, try another name.

Next, we’ll navigate into our new bucket and add some files.

## Create Some Content in Your Bucket

Double-click the folder that represents your bucket. This opens it and lists its contents in the right-hand pane:

![Transmit Space listing with welcome.html file](https://docs.digitalocean.com/screenshots/spaces/transmit5/7-space-welcome.18ca5d483cf79cccb723c6ced1387719561f53c856d8037635037d114e5389ea.png)

To upload a file, first navigate through your local filesystem using the left-hand side of the Transmit window. When you’ve found a suitable file to upload (pick something like a JPG or HTML file, so we can test in the browser), click and drag it from the left-hand pane to the right. It copies over to your bucket and shows up in the directory listing on the right-hand side.

You can also drag and drop files directly from the macOS Finder.

Next, we’ll test permissions and learn how to make files publicly accessible.

## Adjust Permissions and Test Public Access

By default, the files in your buckets are not made available to the public. Let’s find the public URL for a file and see what happens when we try to load it in a web browser. In the right-hand pane, after navigating to your bucket, clickce on a file you’d like to view. This selects the file. Then click the **Edit** menu and select **Copy URL**. The URL is copied to your clipboard. Alternately, you can right-click the item and select **Copy URL** from the contextual menu:

![Transmit 'Copy URL'](https://docs.digitalocean.com/screenshots/spaces/transmit5/8-copy-url.a11d8bd6988d0f2194ae03988f6d1f169945b110b3d22b0d9c9bdb995d881b2f.png)

Switch over to your browser, paste the URL into the location bar, and hit `ENTER`. An **AccessDenied** error loads:

![AccessDenied error in a browser](https://docs.digitalocean.com/screenshots/spaces/transmit5/9-denied.0b69aac2623ce4045a1131d640680888215bf024fd817add94ea0a5cb5d78533.png)

To remedy this, we need to change the **Read** permissions on this file. Back in Transmit, with the file still selected, use the **File** menu to choose **Get Info** (you could also use a right-click here). Depending on your settings, a panel slides out of the current window, or a new window opens. Either are labeled **Inspector** and have more details about the file, including its size, location, type, and **Read** and **Write** permissions:

![Transmit 'Inspector' pane with 'Read' permission set to 'Owner'](https://docs.digitalocean.com/screenshots/spaces/transmit5/11-owner-perms.d8ff1826980de280578fd70c30866636172a29f05a0028bee61e78c552b2444a.png)

Use the drop-down menu next to **Read:** to change the setting from **Owner** to **World**, then click the **Apply** button at the bottom of the Inspector:

![Transmit 'Inspector' pane with 'Read' permission set to 'World'](https://docs.digitalocean.com/screenshots/spaces/transmit5/12-world-perms.d4eb944475229482838f4022e8d39ba52277999faefdce19ac27c8069283b18c.png)

Transmit updates the file’s permissions. Return to your browser and reload the URL we tried before. Your file should successfully load.

In this article...

- [Setup](https://docs.digitalocean.com/products/spaces/reference/transmit5/#setup)
- [Connect to Spaces](https://docs.digitalocean.com/products/spaces/reference/transmit5/#connect-to-spaces)
- [Create a New Bucket](https://docs.digitalocean.com/products/spaces/reference/transmit5/#create-a-new-bucket)
- [Create Some Content in Your Bucket](https://docs.digitalocean.com/products/spaces/reference/transmit5/#create-some-content-in-your-bucket)
- [Adjust Permissions and Test Public Access](https://docs.digitalocean.com/products/spaces/reference/transmit5/#adjust-permissions-and-test-public-access)

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