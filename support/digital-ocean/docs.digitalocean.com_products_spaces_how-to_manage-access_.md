---
url: "https://docs.digitalocean.com/products/spaces/how-to/manage-access/"
title: "How to Manage Access to Spaces | DigitalOcean Documentation"
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
- Manage Access

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage Access to Spaces

Validated on 17 Mar 2025 • Last edited on 23 Oct 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

As a Spaces owner, you limit others’ access to your buckets using Spaces access keys or DigitalOcean teams:

- **Access keys** allow people or programs to connect to buckets using third-party clients and the DigitalOcean API. However, they do not grant access to the control panel or other DigitalOcean resources.
- [**DigitalOcean Teams**](https://docs.digitalocean.com/platform/teams/) allow members to use the control panel, including creating and managing buckets and access keys as well as other DigitalOcean resources (like billing information, Droplets, and more).

## Sharing Access to Buckets with Access Keys

Access keys can provide several levels of permissions to create, destroy, read, and write to specific associated buckets. However, access keys only limit access [to certain commands](https://docs.digitalocean.com/reference/api/spaces/) using the S3 API or CLI, not the control panel or other DigitalOcean resources.

By default, you can create up to 200 keys for your account using the control panel. This allows you to generate unique key pairs for each team member or application, so that you can later revoke a member’s access without affecting other users. To temporarily revoke access, edit an access key’s permissions and deselect all buckets. To permanently revoke access, delete the access key altogether.
If you need to raise this limit, [contact support](https://cloudsupport.digitalocean.com/). You currently cannot create keys using the DigitalOcean API or CLI.

To generate Spaces access keys, go to the [Spaces Access Keys page](https://cloud.digitalocean.com/spaces/access_keys) and click **Create Access Key**. This opens the **New Spaces Access Key** window.

![The Spaces Access Key window](https://docs.digitalocean.com/screenshots/spaces/new-spaces-access-key.c936479b529ee57a0d5f27db252818fe8cfae4a4f277678e378ad946bbcb17cd.png)

First, select the key’s access scope. Full access allows all supported S3 API commands on all buckets. Limited access lets you set more specific Read or Read/Write/Delete permissions for each bucket.

If you selected limited access, check the boxes for the buckets you’d like the key to provide access to. For each bucket, use the corresponding dropdown menu to select a level of permissions: Read or Read/Write/Delete. Name the key, then click **Create Access Key** to confirm.

Once you generate the key, you see the access key and the secret key. This is the only time the secret key is displayed, so copy it immediately and store it in a secure place.

If a secret gets lost, forgotten, or compromised, you can open its **More (…)** menu, click **Edit** and choose **Regenerate Key** to create a new secret. When you regenerate a secret, you also need to reconfigure any scripts or clients that use the key to use the new secret value.

Currently, per-bucket access keys are incompatible with S3-compatible bucket policies. In other words, you cannot currently create a limited access key on a bucket if it is configured with a PutBucketPolicy-based bucket policy, and you cannot use the PutBucketPolicy S3 API on any bucket that a limited access key has access to.

### Edit Key Permissions in the Control Panel

To edit a limited access Spaces key’s permissions, go to the [Spaces Access Keys](https://cloud.digitalocean.com/spaces/access_keys) page. Find the key, click its **More** (…) menu, then select **Edit Permissions** to open the **Edit Permissions** window.

![The Edit Permissions window](https://docs.digitalocean.com/screenshots/spaces/edit-spaces-key-permissions.a771af42e8ccc683b3c136d27576150928eb5c94334fb849080bee31d2369059.png)

Check the boxes for the buckets you’d like the key to provide access to. For each bucket, choose a permission level from the dropdown: Read or Read/Write/Delete. Name the key, then click **Save** to confirm.

## Sharing Access to the Control Panel with Teams

[DigitalOcean Teams](https://docs.digitalocean.com/platform/teams/), like Spaces access keys, allow members to create, manage, and destroy buckets associated with the team account using the control panel’s web interface. Members can also create, delete, and regenerate access keys for buckets.

However, unlike Spaces access keys, members of a team can also access other team resources, like Droplets, firewalls, and more.

Warning
Because buckets cannot be transferred directly between accounts, we recommend you create the team first, then create the buckets.

To give one or more people access to co-manage buckets using the control panel, open the User menu and [choose **Create a team**](https://docs.digitalocean.com/platform/teams/), then follow the setup steps.

Once a user is a member of the team, they can manage buckets with the web interface as well as generate their own keys for API or third-party clients.

In this article...

- [Sharing Access to Buckets with Access Keys](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys)
  - [Edit Key Permissions in the Control Panel](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#edit-key-permissions-in-the-control-panel)
- [Sharing Access to the Control Panel with Teams](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#sharing-access-to-the-control-panel-with-teams)

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