---
url: "https://docs.digitalocean.com/products/spaces/how-to/migrate/"
title: "How to Migrate Spaces with Flexify.IO | DigitalOcean Documentation"
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
- Migrate with Flexify.IO

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Migrate Spaces with Flexify.IO

Validated on 24 May 2023 • Last edited on 16 Apr 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

To get started with Spaces, you may have some existing data that you need to move into Spaces “buckets” from other locations outside of DigitalOcean. While you cannot natively import or export buckets with DigitalOcean Spaces, you can do so with [Flexify.IO](https://flexify.io/). This platform allows you to migrate data between different online storage accounts and virtual endpoints.

## Set Up Flexify.IO

You can set up Flexify.IO for migration with either of the following methods:

- Visit [the Flexify.IO website](https://flexify.io/) and set up a paid self-service or managed service subscription. This method has no data limits and provides the maximum transfer rate supported by the network. This method is best for migrating 1 TB of data or more.
- Click the **Deploy to DO** button below to create a new Droplet with a free version of Flexify from the DigitalOcean Marketplace. This method is limited by the transfer rate of the Droplet you select and is typically best for migrating less than 1 TB of data.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?type=application&appId=155900566&image=flexifyio-flexifyiomulticl-20-04&source=pdocs)

If you clicked the button above, create the Droplet as you normally would. For additional details on this process, see [How to Create a Droplet](https://docs.digitalocean.com/products/droplets/how-to/create/). Once the Droplet is finished creating, go to the [control panel](https://cloud.digitalocean.com/droplets/), find the newly-created Droplet, and click **Get Started** next to the Flexify.IO logo and create a Flexify.IO account.

![The Droplets page in the DigitalOcean control panel, which shows clickable text reading Get started](https://docs.digitalocean.com/screenshots/spaces/flexify/get-started.976bf7d0c2f7675dadbb5ca98ea47e68ea7ce5bf0b3094da74f838ee2527927a.png)

## Set Up Storage Accounts

If you deployed to DigitalOcean with the button above, log in to the Flexify.IO dashboard by entering the Droplet’s IP address into the browser and entering your login information. Otherwise, follow Flexify.IO’s instructions based on your chosen plan to log in to the dashboard.

Once in the dashboard, you can add your Spaces buckets. Go to the **Data** page in the left menu and click **Add Storage Account**.

![The add storage account window in the Flexify.IO dashboard](https://docs.digitalocean.com/screenshots/spaces/flexify/add-storage-account.2d8a21adede6f84b815f4e8ff6f229ae1da6b9bd7d38b3503c992bc7e2d27022.png)

Then, enter the following information:

1. In the **Storage Provider** drop-down, select DigitalOcean.
2. In the **Product** drop-down that appears, select Spaces in your bucket’s region.
3. Under **Access Key ID** and **Secret Access Key**, enter your Spaces access key and secret key. For more information on these, see [our guide on access keys](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys).
4. Optionally, using each bucket’s name, specify which buckets you want to migrate to or from. If you do not specify, Flexify.IO still lists all bucket associated with your access keys in the following step.

Finally, click **Add Storage Account** and wait for the process to complete.

Repeat this same process to add any other storage accounts from other providers that you want to migrate to or from.

## Create Endpoints

Flexify.IO also allows you to create virtual endpoints, which can serve files from all attached storage accounts. By using a virtual endpoint, your S3 application can always access all files regardless of where they are in the migration process. To create an endpoint, go to the _Endpoints_ page in the left menu and click _New Endpoint_. Here, you can click the _Attach_ button to attach any number of storage accounts to the endpoint.

After creating an endpoint, you can access its IP and access keys by clicking **Settings**.

## Migrate Data

After you have added all storage accounts and endpoints, you can begin migration. Go to the **Migrations** page in the left menu and click **New Migration**.

Click the **From** drop-down and select the bucket or endpoint to migrate data from. Then, click the **To** drop-down and select the bucket or endpoint to migrate data to.

![The copy data/migration window in the Flexify.IO dashboard](https://docs.digitalocean.com/screenshots/spaces/flexify/copy-data.7d48c834df52e5a87c8f6f7a0a7e988b84940942577b0e95bd9b939982c53070.png)

By default, Flexify.IO copies all data from the source bucket to the target bucket or endpoint, which is suitable for full migrations. However, if you would like to only transfer certain data, you can click **Advanced settings** further configure the migration.

Once you have configured the migration to your liking, click **Start Migration**. To monitor the migration process, find the migration in the **Migrations** page and click the **Log** button. Once the migration is finished, verify that the target bucket or endpoint has all the data you designated for transfer.

If you do not want to migrate any more data, you can delete the Droplet you created by following our guide, [How to Destroy a Droplet](https://docs.digitalocean.com/products/droplets/how-to/destroy/).

In this article...

- [Set Up Flexify.IO](https://docs.digitalocean.com/products/spaces/how-to/migrate/#set-up-flexifyio)
- [Set Up Storage Accounts](https://docs.digitalocean.com/products/spaces/how-to/migrate/#set-up-storage-accounts)
- [Create Endpoints](https://docs.digitalocean.com/products/spaces/how-to/migrate/#create-endpoints)
- [Migrate Data](https://docs.digitalocean.com/products/spaces/how-to/migrate/#migrate-data)

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