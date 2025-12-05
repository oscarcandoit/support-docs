---
url: "https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/"
title: "Spaces S3 Compatibility | DigitalOcean Documentation"
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
- S3 Compatibility

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Spaces S3 Compatibility

Validated on 29 Aug 2025 • Last edited on 23 Oct 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

DigitalOcean Spaces provides an S3-compatible API with partial support for Amazon S3 features.

## Feature Compatibility

The following table lists supported S3 features and restrictions:

| Feature | Notes |
| --- | --- |
| **Object Copy** | Supported with `CopyObject`. Cross-region and cross-cluster copies are not supported. |
| **Multipart Uploads** | Supported for large objects. `UploadPartCopy` is not supported across regions or clusters. |
| **Presigned URLs** | Supported with both Signature Version 2 and Version 4. |
| **Bucket Policies** | Supported only through the API (not configurable in the control panel). |
| **Bucket Versioning** | Supported only through the API (not configurable in the control panel). |
| **Bucket Lifecycle** | Supported for time-based expiration and removing incomplete multipart uploads. Tag-based lifecycle rules are not supported. |
| **Bucket Access Logging** | Supported only through the API. The source and destination buckets must be different. |
| **Object Encryption** | Supported with SSE-C (server-side encryption with customer-provided keys). Bucket-level encryption settings are not supported. |
| **Bucket Websites** | Supported at `https://[bucket-name].[region]-static.digitaloceanspaces.com`. CDN is not supported for bucket websites. |
| **List Objects** | Both `ListObjects` (legacy) and `ListObjectsV2` are supported. Use `ListObjectsV2` for new applications. |
| **Preflight Requests** | `OPTIONS` preflight requests require no permissions, but the bucket policy or ACL must still allow the subsequent request. |
| **Unsupported API Calls** | Unsupported S3 operations return a standard `NotImplemented` error. |
| **Authentication** | Spaces supports AWS Signature Version 4 (recommended) and Signature Version 2 for legacy clients. |

For more information on product-wide usage limits, see [Spaces Limits](https://docs.digitalocean.com/products/spaces/details/limits/).

## Access Control Lists (ACLs)

Spaces supports a limited set of canned ACLs for buckets and objects. Only two ACLs are available:

- `private`: Grants `FULL_CONTROL` to the bucket or object owner. Blocks public access.
- `public-read`: Grants `FULL_CONTROL` to the owner and allows unauthenticated read access to anyone on the internet.

You can apply an ACL in two ways:

1. Send a `PUT ?acl` request with an XML `AccessControlPolicy`.
2. Use the `x-amz-acl` header with a canned ACL (simpler and recommended).

### Private ACL Example

To restrict access so only the bucket owner has full control, set the ACL to private. You can apply this setting either by adding the `x-amz-acl` header or by using an XML access control policy:

x-amz-acl Header

```shell
curl -X PUT "https://example-space.nyc3.digitaloceanspaces.com/example.txt" \
  -H "Authorization: ..." \
  -H "Date: ..." \
  -H "x-amz-acl: private" \
  --upload-file ./example.txt
```

XML Policy

```xml
<AccessControlPolicy xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <Owner><ID>6174283</ID></Owner>
  <AccessControlList>
    <Grant>
      <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser">
        <ID>6174283</ID>
      </Grantee>
      <Permission>FULL_CONTROL</Permission>
    </Grant>
  </AccessControlList>
</AccessControlPolicy>
```

### Public Read ACL Example

To make objects readable by anyone on the internet while still retaining full control as the owner, set the ACL to public-read. You can configure this either with the `x-amz-acl` header or with an XML access control policy:

x-amz-acl Header

```shell
curl -X PUT "https://example-space.nyc3.digitaloceanspaces.com/example.txt" \
  -H "Authorization: ..." \
  -H "Date: ..." \
  -H "x-amz-acl: public-read" \
  --upload-file ./example.txt
```

XML Policy

```xml
<AccessControlPolicy xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <Owner><ID>6174283</ID><DisplayName>6174283</DisplayName></Owner>
  <AccessControlList>
    <Grant>
      <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group">
        <URI>http://acs.amazonaws.com/groups/global/AllUsers</URI>
      </Grantee>
      <Permission>READ</Permission>
    </Grant>
    <Grant>
      <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser">
        <ID>6174283</ID>
      </Grantee>
      <Permission>FULL_CONTROL</Permission>
    </Grant>
  </AccessControlList>
</AccessControlPolicy>
```

In this article...

- [Feature Compatibility](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/#feature-compatibility)
- [Access Control Lists (ACLs)](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/#access-control-lists-acls)
  - [Private ACL Example](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/#private-acl-example)
  - [Public Read ACL Example](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/#public-read-acl-example)

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