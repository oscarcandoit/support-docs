---
url: "https://docs.digitalocean.com/products/spaces/how-to/use-folders/"
title: "How to Organize Files with Folders | DigitalOcean Documentation"
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
- Organize Files with Folders

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Organize Files with Folders

Validated on 28 Mar 2019 • Last edited on 16 Apr 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

The control panel and many third-party clients present files in a Space using the metaphor of folders. This helps people organize and think about their assets.

However, object stores are not actually hierarchical; they are flat key/value file systems, which gives them their characteristic scalability, redundancy, and reliability. This also means that folders in an object store behave differently than folders in branching, directory-based file systems.

In Spaces, folders don’t actually exist in the backend. Their existence is implied by the names of objects in the Space. This means folders can’t have permissions, metadata, or information about what they contain.

## Create a New Folder

From the main page of your Space, the **New Folder** button adds a new folder in the directory you’re in and opens a text box where you can fill in its name.

![Creating a new folder in a Space with the text box for the name of the folder open](https://docs.digitalocean.com/screenshots/spaces/new-folder.945605675736b98f1499d0df3a668fece23d988137aa837c21e622bcfc4cf416.png)

When you’ve entered the name, press the return key or click the checkmark to close the editing box.

## Move Items into a Folder

Folders can contain both files and other nested folders. You can move an individual item into a folder by opening its **More** menu and selecting **Move to Folder**. You can also move multiple items at once by selecting them, opening the **Action** menu, and selecting **Move to Folder**.

![The Move item to folder window](https://docs.digitalocean.com/screenshots/spaces/move-into-folder.abb3fcfb066b7e6e21263f73b7e938fc1652058a4940c4843fba3c54b7a91b94.png)

In the **Move to Folder** window, you can choose a target folder for your items by either selecting an existing folder in the Space or creating a **New Folder**.

Note
You can set permissions for all the files in a folder, but currently you’ll need to use a third-party client to set permissions recursively.

## Filter Files in the Current Folder

The **Start typing to filter…** box performs a “Begins with” filter on the files and folders at the current level. This means you can start typing the first few characters of a file’s name and progressively filter what is displayed rather than scrolling down and waiting for more files to load.

The filter is limited to the file and folder names as they are displayed in the current level. The one exception is that filtering by a complete file name when at the root of a Space will show the file in the results.

![An example of using the Start typing to filter... text box](https://docs.digitalocean.com/screenshots/spaces/type-to-filter.f5a774f41a1e060596823b0c32975327b13befddb587369ccc650890915ecca0.png)

This lets you avoid clicking through nested folders to manage a specific file.

## Deleting a Folder

Deleting a folder will recursively delete all the content inside.

You can delete folders the same way you delete files: by opening an individual folder’s **More** menu and clicking **Delete**, or by selecting multiple folders, opening the **Actions** menu, and clicking **Delete**.

![The confirmation window to delete multiple items from the Actions menu](https://docs.digitalocean.com/screenshots/spaces/delete-folder.e47e8defb1e4c5d42329f79955300f2f80a5b2a986167a80c10e0cfe69427f3e.png)

Like files, deletions are permanent, so you’ll be asked to confirm before the folder is actually deleted.

In this article...

- [Create a New Folder](https://docs.digitalocean.com/products/spaces/how-to/use-folders/#create-a-new-folder)
- [Move Items into a Folder](https://docs.digitalocean.com/products/spaces/how-to/use-folders/#move-items-into-a-folder)
- [Filter Files in the Current Folder](https://docs.digitalocean.com/products/spaces/how-to/use-folders/#filter-files-in-the-current-folder)
- [Deleting a Folder](https://docs.digitalocean.com/products/spaces/how-to/use-folders/#deleting-a-folder)

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