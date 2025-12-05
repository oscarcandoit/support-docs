---
url: "https://docs.digitalocean.com/products/spaces/how-to/configure-bucket-policies/"
title: "How to Configure Bucket Policies | DigitalOcean Documentation"
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
- Configure Bucket Policies

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Configure Bucket Policies

Validated on 14 Mar 2025 • Last edited on 16 Apr 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

[Bucket policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html) define access control rules for Spaces buckets using JSON-based policies. They specify who can access the bucket and what actions they can perform, such as setting access permissions, modifying ACLs, or configuring CORS settings. You can configure and set bucket policies using the Spaces API, AWS CLI, or [`s3cmd`](https://docs.digitalocean.com/products/spaces/how-to/configure-bucket-policies/#configure-bucket-policies-using-s3cmd).

While [Access Control Lists (ACLs)](https://docs.digitalocean.com/reference/api/spaces/#set-a-buckets-acls) provide basic, predefined permissions for individual users or groups, bucket policies offer more flexible, JSON-based rules that enable fine-grained access control for Spaces buckets. Bucket policies are recommended for managing complex permissions and conditional access, while ACLs work well for simple permission settings.

To configure bucket policies with the API, see [Configure a Bucket’s Bucket Policies](https://docs.digitalocean.com/reference/api/spaces/#configure-a-buckets-bucket-policies). Alternatively, you can use AWS CLI to [configure bucket policies](https://docs.aws.amazon.com/cli/latest/reference/s3api/put-bucket-policy.html).

## Configure Bucket Policies Using `s3cmd`

You can also configure bucket permissions using `s3cmd`. Below are examples for [setting a public read policy](https://docs.digitalocean.com/products/spaces/how-to/configure-bucket-policies/#set-a-public-read-policy) and [setting a private access policy](https://docs.digitalocean.com/products/spaces/how-to/configure-bucket-policies/#set-a-private-access-policy). Substitute the variables as needed.

#### Set a Public Read Policy

To allow public read access to all objects in a Space, first create a `public-policy.json` file with the following content to allow public read access:

```json
{
  "Version": "2012-10-17",
  "Statement": [\
    {\
      "Effect": "Allow",\
      "Principal": "*",\
      "Action": "s3:GetObject",\
      "Resource": "arn:aws:s3:::your-space-name/*"\
    }\
  ]
}
```

This `public-policy.json` file contains a valid JSON policy granting public read access to all objects in your specified Space. Set the policy using the following command:

```shell
s3cmd setpolicy public-policy.json s3://your-space-name
```

#### Set a Private Access Policy

To restrict access to only the bucket owner, create a file `private-policy.json` with the following content to restrict access:

```json
{
  "Version": "2012-10-17",
  "Statement": [\
    {\
      "Effect": "Deny",\
      "Principal": "*",\
      "Action": "s3:GetObject",\
      "Resource": "arn:aws:s3:::your-space-name/*"\
    }\
  ]
}
```

This `private-policy.json` file applies a policy that ensures only the owner has access to the objects in the Space. Set the policy using the following command:

```shell
s3cmd setpolicy private-policy.json s3://your-space-name
```

For more details, see the [s3cmd documentation](https://docs.digitalocean.com/products/spaces/reference/s3cmd/).

In this article...

- [Configure Bucket Policies Using `s3cmd`](https://docs.digitalocean.com/products/spaces/how-to/configure-bucket-policies/#configure-bucket-policies-using-s3cmd)
  - [Set a Public Read Policy](https://docs.digitalocean.com/products/spaces/how-to/configure-bucket-policies/#set-a-public-read-policy)
  - [Set a Private Access Policy](https://docs.digitalocean.com/products/spaces/how-to/configure-bucket-policies/#set-a-private-access-policy)

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