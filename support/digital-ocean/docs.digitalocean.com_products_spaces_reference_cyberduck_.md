---
url: "https://docs.digitalocean.com/products/spaces/reference/cyberduck/"
title: "Using Cyberduck 6.2.x for Windows and macOS with DigitalOcean Spaces | DigitalOcean Documentation"
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
- Cyberduck 6.2.x

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Using Cyberduck 6.2.x for Windows and macOS with DigitalOcean Spaces

Validated on 22 Jul 2019 • Last edited on 20 Feb 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

Cyberduck is an open-source tool for Windows and macOS that provides a graphical interface to manage files for a wide variety of protocols and services, including FTP, SFTP, WebDav, and S3.

To use Cyberduck, you will need:

- **Cyberduck version 6.2.x.** Visit the [Cyberduck website](https://cyberduck.io/) to download.
- **An [access key](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys) pair for your Spaces.** To generate these, visit the [Spaces Access Keys Page](https://cloud.digitalocean.com/spaces/access_keys) in the DigitalOcean Control Panel.

## Connect to DigitalOcean

To connect to DigitalOcean from Cyberduck, click the **Open Connection** icon, then select **Amazon S3**.

![Open Connection menu with Amazon S3 selected](https://docs.digitalocean.com/screenshots/spaces/cyberduck/choose-s3.21d0b0e6cc3a63d52acfa08c2abc03f5f3efbc11a22bb000368e5c907112edf5.png)

When you select Amazon S3, a new window opens:

![Open Connection window with the values filled in](https://docs.digitalocean.com/screenshots/spaces/cyberduck/connect.13249ee499787f3a370d3e124f4e32c69b1c70a2cdf487918b635bb9023d87c7.png)

For the **Server** field, use a combination of the region, for example, `nyc3`, and `digitaloceanspaces.com`, so that the complete address looks like `nyc3.digitaloceanspaces.com`. Then enter your access key and secret key for the **Access Key ID** and **Password** fields respectively. Once the values are filled in, select **Connect**.

You can check the **Save password** box to avoid being prompted for the Secret Key each time you connect. This can be appropriate on a personal computer, but on a shared machine, it would allow anyone to connect with administrative powers.

## Create a New Spaces Bucket

If a bucket already exists, it’ll appear in the main window. Otherwise, this workspace will be blank.

Double-click the **Action** icon and select **Create a New Folder**. Folders created here at the root level are new buckets.

![Create new folder window](https://docs.digitalocean.com/screenshots/spaces/cyberduck/space-name.b455202962f4c02bb53da937c64f29f6d261e4592a4f31feaa15ebd599ee1d5c.png)Note
The bucket name must be unique across all regions. If the name is already in use anywhere on `digitaloceanspaces.com`, the dialogue will stay open without providing feedback. If this happens, try another name.

The blue icon next to the bucket name serves as a reminder that this is a bucket.

![A newly-created Space and its icon](https://docs.digitalocean.com/screenshots/spaces/cyberduck/space-name-created.9585657150cdaf44aebce0366655041b894cb56f6aa5bfd2144f3ecb99529b88.png)

Once you’re connected to your account and have created a bucket, you can add content.

## Upload Files and Create Folders

To create a new folder, either highlight the bucket name or double-click it, then click the **Action** icon to create the new folder within.

Enter a name for the folder, then click **Create** to add it.

![The Create new folder window with 'folder-name' filled in](https://docs.digitalocean.com/screenshots/spaces/cyberduck/folder-name.10eb2e801308eb3cc451046cba903e1d3dd4b29cd034fc46c0e142508fa164cb.png)

To upload a file, drag and drop it into the folder or use the **Action** menu to navigate the local file system and select the file.

![Dropping sammy.png into the folder when its name is highlighted](https://docs.digitalocean.com/screenshots/spaces/cyberduck/sammy.0208813999167afe149b787d7b88ca60e592ac37f8a80b6ebebfa483b969e17b.png)

## Set File Permissions

You can check a file’s permissions from the **Get info** menu’s **Permissions** tab:

![Default permissions on sammy.png](https://docs.digitalocean.com/screenshots/spaces/cyberduck/sammy-permissions.2ae251330f5c0a1c8347ab3ec3acf55690c68397304f88f678bd6758a6ddd2ad.png)

When authenticated with access keys, the first line in the permissions has your user ID and has `FULL_CONTROL`. By default, Cyberduck gives `READ` permissions to everyone. If you want to make a file private, highlight the `Everyone` row and press `DELETE`. If you want to make a file public, leave it readable for `Everyone`.

Cyberduck also adds a row of group permissions which aren’t relevant to buckets. You can remove the irrelevant row by highlighting it and pressing `DELETE`.

## Changing Default File Permissions

You can change the default file permissions by selecting **Edit** from the top menu, then selecting **Preferences**. In the window that opens, select the **Transfers** icon, then switch to the **Permissions** tab.

![New default permissions: FULL_CONTROL for the owner and READ for Everyone](https://docs.digitalocean.com/screenshots/spaces/cyberduck/new-default-permissions.c3d33e6af645119dd062b49240b22f32a3c6cfcd953087e5eb69615b5632c552.png)

Uncheck all the boxes in the **Group** permissions row. If you want files to be private by default, you can uncheck all the boxes for **Others**. When you’re done, use the **x** in the upper-right of the pane to save and exit.

## More Information

To learn more about using Cyberduck, visit the [Cyberduck wiki](https://trac.cyberduck.io/wiki/help/en).

In this article...

- [Connect to DigitalOcean](https://docs.digitalocean.com/products/spaces/reference/cyberduck/#connect-to-digitalocean)
- [Create a New Spaces Bucket](https://docs.digitalocean.com/products/spaces/reference/cyberduck/#create-a-new-spaces-bucket)
- [Upload Files and Create Folders](https://docs.digitalocean.com/products/spaces/reference/cyberduck/#upload-files-and-create-folders)
- [Set File Permissions](https://docs.digitalocean.com/products/spaces/reference/cyberduck/#set-file-permissions)
- [Changing Default File Permissions](https://docs.digitalocean.com/products/spaces/reference/cyberduck/#changing-default-file-permissions)
- [More Information](https://docs.digitalocean.com/products/spaces/reference/cyberduck/#more-information)

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