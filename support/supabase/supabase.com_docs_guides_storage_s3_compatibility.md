---
url: "https://supabase.com/docs/guides/storage/s3/compatibility"
title: "S3 Compatibility | Supabase Docs"
---

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Main menu

[Storage](https://supabase.com/docs/guides/storage)

[Overview](https://supabase.com/docs/guides/storage)

File Buckets[Quickstart](https://supabase.com/docs/guides/storage/quickstart)
[Fundamentals](https://supabase.com/docs/guides/storage/buckets/fundamentals)
[Creating Buckets](https://supabase.com/docs/guides/storage/buckets/creating-buckets)

Security

Uploads

Serving

Management

S3

[Authentication](https://supabase.com/docs/guides/storage/s3/authentication)
[API Compatibility](https://supabase.com/docs/guides/storage/s3/compatibility)

CDN

Debugging

Schema

Going to production

[Pricing](https://supabase.com/docs/guides/storage/pricing)

Analytics Buckets[Introduction](https://supabase.com/docs/guides/storage/analytics/introduction)
[Creating Buckets](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets)
[Iceberg Catalog](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket)
[Realtime Data-Sync](https://supabase.com/docs/guides/storage/analytics/replication)
[Query with Postgres](https://supabase.com/docs/guides/storage/analytics/query-with-postgres)

Examples

[Limits](https://supabase.com/docs/guides/storage/analytics/limits)
[Pricing](https://supabase.com/docs/guides/storage/analytics/pricing)

Vector Buckets[Introduction](https://supabase.com/docs/guides/storage/vector/introduction)
[Creating Buckets](https://supabase.com/docs/guides/storage/vector/creating-vector-buckets)
[Working with Indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes)
[Storing Vectors](https://supabase.com/docs/guides/storage/vector/storing-vectors)
[Querying Vectors](https://supabase.com/docs/guides/storage/vector/querying-vectors)
[Limits](https://supabase.com/docs/guides/storage/vector/limits)

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Storage

1. [Storage](https://supabase.com/docs/guides/storage)
3. More
5. [S3](https://supabase.com/docs/guides/storage/s3)
7. [API Compatibility](https://supabase.com/docs/guides/storage/s3/compatibility)

# S3 Compatibility

## Learn about the compatibility of Supabase Storage with S3.

* * *

Supabase Storage is compatible with the S3 protocol. You can use any S3 client to interact with your Storage objects.

Storage supports [standard](https://supabase.com/docs/guides/storage/uploads/standard-uploads), [resumable](https://supabase.com/docs/guides/storage/uploads/resumable-uploads) and [S3 uploads](https://supabase.com/docs/guides/storage/uploads/s3-uploads) and all these protocols are interoperable. You can upload a file with the S3 protocol and list it with the REST API or upload with Resumable uploads and list with S3.

Storage supports presigning a URL using query parameters. Specifically, Supabase Storage expects requests to be made using [AWS Signature Version 4](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html). To enable this feature, enable the S3 connection via S3 protocol in the Settings page for Supabase Storage.

The S3 protocol is currently in Public Alpha. If you encounter any issues or have feature requests, [contact us](https://supabase.com/dashboard/support/new).

## Implemented endpoints [\#](https://supabase.com/docs/guides/storage/s3/compatibility\#implemented-endpoints)

The most commonly used endpoints are implemented, and more will be added. Implemented S3 endpoints are marked with ✅ in the following tables.

### Bucket operations [\#](https://supabase.com/docs/guides/storage/s3/compatibility\#bucket-operations)

| API Name | Feature |
| --- | --- |
| ✅ [ListBuckets](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html) |  |
| ✅ [HeadBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html) | ❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ✅ [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html) | ❌ ACL:<br> ❌ x-amz-acl<br> ❌ x-amz-grant-full-control<br> ❌ x-amz-grant-read<br> ❌ x-amz-grant-read-acp<br> ❌ x-amz-grant-write<br> ❌ x-amz-grant-write-acp<br>❌ Object Locking:<br> ❌ x-amz-bucket-object-lock-enabled<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ✅ [DeleteBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html) | ❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ✅ [GetBucketLocation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html) | ❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ❌ [DeleteBucketCors](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html) | ❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ❌ [GetBucketEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html) | ❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ❌ [GetBucketLifecycleConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html) | ❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ❌ [GetBucketCors](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html) | ❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ❌ [PutBucketCors](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html) | ❌ Checksums:<br> ❌ x-amz-sdk-checksum-algorithm<br> ❌ x-amz-checksum-algorithm<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ❌ [PutBucketLifecycleConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html) | ❌ Checksums:<br> ❌ x-amz-sdk-checksum-algorithm<br> ❌ x-amz-checksum-algorithm<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |

### Object operations [\#](https://supabase.com/docs/guides/storage/s3/compatibility\#object-operations)

| API Name | Feature |
| --- | --- |
| ✅ [HeadObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html) | ✅ Conditional Operations:<br> ✅ If-Match<br> ✅ If-Modified-Since<br> ✅ If-None-Match<br> ✅ If-Unmodified-Since<br>✅ Range:<br> ✅ Range (has no effect in HeadObject)<br> ✅ partNumber<br>❌ SSE-C:<br> ❌ x-amz-server-side-encryption-customer-algorithm<br> ❌ x-amz-server-side-encryption-customer-key<br> ❌ x-amz-server-side-encryption-customer-key-MD5<br>❌ Request Payer:<br> ❌ x-amz-request-payer<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ✅ [ListObjects](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html) | Query Parameters:<br> ✅ delimiter<br> ✅ encoding-type<br> ✅ marker<br> ✅ max-keys<br> ✅ prefix<br>❌ Request Payer:<br> ❌ x-amz-request-payer<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ✅ [ListObjectsV2](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html) | Query Parameters:<br> ✅ list-type<br> ✅ continuation-token<br> ✅ delimiter<br> ✅ encoding-type<br> ✅ fetch-owner<br> ✅ max-keys<br> ✅ prefix<br> ✅ start-after<br>❌ Request Payer:<br> ❌ x-amz-request-payer<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ✅ [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html) | ✅ Conditional Operations:<br> ✅ If-Match<br> ✅ If-Modified-Since<br> ✅ If-None-Match<br> ✅ If-Unmodified-Since<br>✅ Range:<br> ✅ Range<br> ✅ PartNumber<br>❌ SSE-C:<br> ❌ x-amz-server-side-encryption-customer-algorithm<br> ❌ x-amz-server-side-encryption-customer-key<br> ❌ x-amz-server-side-encryption-customer-key-MD5<br>❌ Request Payer:<br> ❌ x-amz-request-payer<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ✅ [PutObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html) | System Metadata:<br> ✅ Content-Type<br> ✅ Cache-Control<br> ✅ Content-Disposition<br> ✅ Content-Encoding<br> ✅ Content-Language<br> ✅ Expires<br> ❌ Content-MD5<br>❌ Object Lifecycle<br>❌ Website:<br> ❌ x-amz-website-redirect-location<br>❌ SSE-C:<br> ❌ x-amz-server-side-encryption<br> ❌ x-amz-server-side-encryption-customer-algorithm<br> ❌ x-amz-server-side-encryption-customer-key<br> ❌ x-amz-server-side-encryption-customer-key-MD5<br> ❌ x-amz-server-side-encryption-aws-kms-key-id<br> ❌ x-amz-server-side-encryption-context<br> ❌ x-amz-server-side-encryption-bucket-key-enabled<br>❌ Request Payer:<br> ❌ x-amz-request-payer<br>❌ Tagging:<br> ❌ x-amz-tagging<br>❌ Object Locking:<br> ❌ x-amz-object-lock-mode<br> ❌ x-amz-object-lock-retain-until-date<br> ❌ x-amz-object-lock-legal-hold<br>❌ ACL:<br> ❌ x-amz-acl<br> ❌ x-amz-grant-full-control<br> ❌ x-amz-grant-read<br> ❌ x-amz-grant-read-acp<br> ❌ x-amz-grant-write-acp<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ✅ [DeleteObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html) | ❌ Multi-factor authentication:<br> ❌ x-amz-mfa<br>❌ Object Locking:<br> ❌ x-amz-bypass-governance-retention<br>❌ Request Payer:<br> ❌ x-amz-request-payer<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ✅ [DeleteObjects](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html) | ❌ Multi-factor authentication:<br> ❌ x-amz-mfa<br>❌ Object Locking:<br> ❌ x-amz-bypass-governance-retention<br>❌ Request Payer:<br> ❌ x-amz-request-payer<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ✅ [ListMultipartUploads](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html) | ✅ Query Parameters:<br> ✅ delimiter<br> ✅ encoding-type<br> ✅ key-marker<br> ✅️ max-uploads<br> ✅ prefix<br> ✅ upload-id-marker |
| ✅ [CreateMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html) | ✅ System Metadata:<br> ✅ Content-Type<br> ✅ Cache-Control<br> ✅ Content-Disposition<br> ✅ Content-Encoding<br> ✅ Content-Language<br> ✅ Expires<br> ❌ Content-MD5<br>❌ Website:<br> ❌ x-amz-website-redirect-location<br>❌ SSE-C:<br> ❌ x-amz-server-side-encryption<br> ❌ x-amz-server-side-encryption-customer-algorithm<br> ❌ x-amz-server-side-encryption-customer-key<br> ❌ x-amz-server-side-encryption-customer-key-MD5<br> ❌ x-amz-server-side-encryption-aws-kms-key-id<br> ❌ x-amz-server-side-encryption-context<br> ❌ x-amz-server-side-encryption-bucket-key-enabled<br>❌ Request Payer:<br> ❌ x-amz-request-payer<br>❌ Tagging:<br> ❌ x-amz-tagging<br>❌ Object Locking:<br> ❌ x-amz-object-lock-mode<br> ❌ x-amz-object-lock-retain-until-date<br> ❌ x-amz-object-lock-legal-hold<br>❌ ACL:<br> ❌ x-amz-acl<br> ❌ x-amz-grant-full-control<br> ❌ x-amz-grant-read<br> ❌ x-amz-grant-read-acp<br> ❌ x-amz-grant-write-acp<br>❌ Storage class:<br> ❌ x-amz-storage-class<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ✅ [CompleteMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html) | ❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner<br>❌ Request Payer:<br> ❌ x-amz-request-payer |
| ✅ [AbortMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html) | ❌ Request Payer:<br> ❌ x-amz-request-payer |
| ✅ [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html) | ✅ Operation Metadata:<br> ⚠️ x-amz-metadata-directive<br>✅ System Metadata:<br> ✅ Content-Type<br> ✅ Cache-Control<br> ✅ Content-Disposition<br> ✅ Content-Encoding<br> ✅ Content-Language<br> ✅ Expires<br>✅ Conditional Operations:<br> ✅ x-amz-copy-source<br> ✅ x-amz-copy-source-if-match<br> ✅ x-amz-copy-source-if-modified-since<br> ✅ x-amz-copy-source-if-none-match<br> ✅ x-amz-copy-source-if-unmodified-since<br>❌ ACL:<br> ❌ x-amz-acl<br> ❌ x-amz-grant-full-control<br> ❌ x-amz-grant-read<br> ❌ x-amz-grant-read-acp<br> ❌ x-amz-grant-write-acp<br>❌ Website:<br> ❌ x-amz-website-redirect-location<br>❌ SSE-C:<br> ❌ x-amz-server-side-encryption<br> ❌ x-amz-server-side-encryption-customer-algorithm<br> ❌ x-amz-server-side-encryption-customer-key<br> ❌ x-amz-server-side-encryption-customer-key-MD5<br> ❌ x-amz-server-side-encryption-aws-kms-key-id<br> ❌ x-amz-server-side-encryption-context<br> ❌ x-amz-server-side-encryption-bucket-key-enabled<br> ❌ x-amz-copy-source-server-side-encryption-customer-algorithm<br> ❌ x-amz-copy-source-server-side-encryption-customer-key<br> ❌ x-amz-copy-source-server-side-encryption-customer-key-MD5<br>❌ Request Payer:<br> ❌ x-amz-request-payer<br>❌ Tagging:<br> ❌ x-amz-tagging<br> ❌ x-amz-tagging-directive<br>❌ Object Locking:<br> ❌ x-amz-object-lock-mode<br> ❌ x-amz-object-lock-retain-until-date<br> ❌ x-amz-object-lock-legal-hold<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner<br> ❌ x-amz-source-expected-bucket-owner<br>❌ Checksums:<br> ❌ x-amz-checksum-algorithm |
| ✅ [UploadPart](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html) | ✅ System Metadata:<br>❌ Content-MD5<br>❌ SSE-C:<br> ❌ x-amz-server-side-encryption<br> ❌ x-amz-server-side-encryption-customer-algorithm<br> ❌ x-amz-server-side-encryption-customer-key<br> ❌ x-amz-server-side-encryption-customer-key-MD5<br>❌ Request Payer:<br> ❌ x-amz-request-payer<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |
| ✅ [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html) | ❌ Conditional Operations:<br> ❌ x-amz-copy-source<br> ❌ x-amz-copy-source-if-match<br> ❌ x-amz-copy-source-if-modified-since<br> ❌ x-amz-copy-source-if-none-match<br> ❌ x-amz-copy-source-if-unmodified-since<br>✅ Range:<br> ✅ x-amz-copy-source-range<br>❌ SSE-C:<br> ❌ x-amz-server-side-encryption-customer-algorithm<br> ❌ x-amz-server-side-encryption-customer-key<br> ❌ x-amz-server-side-encryption-customer-key-MD5<br> ❌ x-amz-copy-source-server-side-encryption-customer-algorithm<br> ❌ x-amz-copy-source-server-side-encryption-customer-key<br> ❌ x-amz-copy-source-server-side-encryption-customer-key-MD5<br>❌ Request Payer:<br> ❌ x-amz-request-payer<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner<br> ❌ x-amz-source-expected-bucket-owner |
| ✅ [ListParts](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html) | Query Parameters:<br> ✅ max-parts<br> ✅ part-number-marker<br>❌ Request Payer:<br> ❌ x-amz-request-payer<br>❌ Bucket Owner:<br> ❌ x-amz-expected-bucket-owner |

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/s3/compatibility.mdx)

### Is this helpful?

NoYes

### On this page

[Implemented endpoints](https://supabase.com/docs/guides/storage/s3/compatibility#implemented-endpoints) [Bucket operations](https://supabase.com/docs/guides/storage/s3/compatibility#bucket-operations) [Object operations](https://supabase.com/docs/guides/storage/s3/compatibility#object-operations)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)