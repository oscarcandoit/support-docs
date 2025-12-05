---
url: "https://docs.digitalocean.com/products/spaces/reference/transmit4/"
title: "Using Transmit 4 for macOS with DigitalOcean Spaces | DigitalOcean Documentation"
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
- Transmit 4

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Using Transmit 4 for macOS with DigitalOcean Spaces

Validated on 19 Jun 2018 • Last edited on 20 Feb 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

[Transmit](https://panic.com/transmit) is a macOS-only file transfer utility developed by [Panic, Inc.](https://panic.com/). It handles a wide variety of server types including FTP, SFTP, WebDAV, and S3-compatible servers.

## Setup

To use Transmit, you need:

- **Transmit 4**, which you can [download in `.zip` format](https://download.panic.com/transmit/Transmit%204/Transmit%204.4.13.zip).
- **An [access key](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys) pair for your Spaces buckets.** To generate these, visit the [Spaces Access Keys Page](https://cloud.digitalocean.com/spaces/access_keys) in the DigitalOcean Control Panel.

## Connect to Spaces

Launch the Transmit application by clicking on its icon in the dock, or double-clicking its icon in your **Applications** folder. Transmit opens and displays a window with your local filesystem on the left, and an FTP connection pane on the right:

![Transmit default interface](https://docs.digitalocean.com/screenshots/spaces/transmit4/0-home-screen.e4187d4a56a469a9a5401b8d10660d6ff57efa3668e411fd953804daf61d5dcb.png)

At the top of the right-hand pane, Transmit 4 lists the different types of connections it supports, FTP, SFTP, S3, and WebDAV.

Click **S3** to bring up the form for connecting to an S3-compatible server and fill in the following details:

- **Server:** this should be the DigitalOcean datacenter region (`nyc3`, `ams3`, etc.) followed by `.digitaloceanspaces.com`. This tutorial uses `nyc3.digitaloceanspaces.com`.
- **Access Key ID:**`your-access-key`
- **Secret:**`your-secret-key`
- **Initial Path:** leave this blank to open a list of all your NYC3 buckets when you connect, or add the name of a pre-existing bucket here to navigate directly to it when connecting

Click the blue **Connect** button to connect to Spaces. Transmit connects, then displays a list of your buckets (if you left the **Initial Path** option blank):

![Screenshot of default listing](https://docs.digitalocean.com/screenshots/spaces/transmit4/3-default-listing.791fe43871a16dbdc6ad2b453b885b3d376c61f580f5436ef815e9c341236a5d.png)

If you have not yet created a bucket, this is empty.

## Create a New Bucket

To create a new bucket with Transmit 4, first move to the root directory where all your buckets are listed. You can do this by clicking the `/` slash all the way on the left of the breadcrumb trail at the top of the right-hand pane:

![Transmit directory breadcrumb trail with root highlighted](https://docs.digitalocean.com/screenshots/spaces/transmit4/13-root-slash.b76542c75056fad71d29e68e331cfd038c1b92242aa61260a1c2c5ce45a7f700.png)

Once you’ve done that, click the **Action** menu in the toolbar (it has a gear-shaped icon), then choose **New Bucket…**.

A window opens, asking for a bucket name and location.

![Transmit new bucket creation dialog](https://docs.digitalocean.com/screenshots/spaces/transmit4/12-new-bucket-dialog.16e3b6c6056616d1941b7455247a24075c28e0cf9cafc92c1297a1fa73f5b1cb.png)

Choose any name that fits the guidelines mentioned in the dialog. Leave the default **Location** value. Click **Create** and your new bucket is created and added to the list.

Note
Bucket names must be unique across all regions, so if your name is already in use anywhere on `digitaloceanspaces.com`, Transmit gives you an error. If this happens, try another name.

## Upload Files to Spaces

Double-click the folder that represents your bucket. This opens it and lists its contents in the right-hand pane:

![Screenshot of Space contents](https://docs.digitalocean.com/screenshots/spaces/transmit4/4-inside-space.bc474cbc0ce21867d86fd77b048d3b25ce0691e6993d34dc646b58b1d174b27f.png)

To upload a file, first navigate through your local filesystem using the left-hand side of the Transmit window, then click and drag the file from the left-hand pane to the right. It copies over to your bucket and shows up in the directory listing on the right-hand side. You can also drag and drop files directly from the macOS Finder.

## Adjust File Permissions

In the right-hand pane, after navigating to your bucket, clickce on a file you’d like to view. This selects the file. Then click the **Action** menu in the toolbar:

![Transmit selected 'Copy URL' option in the 'Action' menu](https://docs.digitalocean.com/screenshots/spaces/transmit4/5-alt-copy-url.04908707cf5af124df81e4b49ffe445a85d4addf9e53d9e2880337067cab21c2.png)

To change the permissions on your file, select **Get Info** from the **Action** menu. A window opens with more details about the file, including its size, location, kind, and **Read** and **Write** permissions:

![Transmit 'Get Info' window](https://docs.digitalocean.com/screenshots/spaces/transmit4/7-get-info-window.d484269d72b65aa3fdd589b0a983eaffe40cc9efce5b1b1205eb00b7035ff097.png)

Use the drop-down menu next to **Read:** to change the setting, then click the **Apply** button at the bottom of the info window:

![Transmit 'Get Info' window with 'Read' permissions set to 'World'](https://docs.digitalocean.com/screenshots/spaces/transmit4/9-world-read-results.1d12cfc7e7c5fd4e323780f64bd1ef5dd394c86e1ce158be19878379107a911d.png)

Transmit updates the permissions on the file.

## More Information

To learn more about other Transmit features that could help integrate Spaces into your macOS-based workflow, visit Panic’s [Transmit Documentation Library](https://library.panic.com/transmit/).

In this article...

- [Setup](https://docs.digitalocean.com/products/spaces/reference/transmit4/#setup)
- [Connect to Spaces](https://docs.digitalocean.com/products/spaces/reference/transmit4/#connect-to-spaces)
- [Create a New Bucket](https://docs.digitalocean.com/products/spaces/reference/transmit4/#create-a-new-bucket)
- [Upload Files to Spaces](https://docs.digitalocean.com/products/spaces/reference/transmit4/#upload-files-to-spaces)
- [Adjust File Permissions](https://docs.digitalocean.com/products/spaces/reference/transmit4/#adjust-file-permissions)
- [More Information](https://docs.digitalocean.com/products/spaces/reference/transmit4/#more-information)

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