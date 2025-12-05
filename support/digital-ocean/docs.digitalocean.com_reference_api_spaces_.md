---
url: "https://docs.digitalocean.com/reference/api/spaces/"
title: "Spaces API Reference Documentation | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
  - [DigitalOcean API](https://docs.digitalocean.com/reference/api/#digitalocean)
    - [Reference](https://docs.digitalocean.com/reference/api/digitalocean/)
    - [Create an Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token/)
  - [Spaces API](https://docs.digitalocean.com/reference/api/#spaces)
    - [Reference](https://docs.digitalocean.com/reference/api/spaces/)
    - [Manage Access](https://docs.digitalocean.com/products/spaces/how-to/manage-access/)
    - [Use AWS S3 SDKs](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/)
  - [OAuth API](https://docs.digitalocean.com/reference/api/oauth/)
  - [Metadata API](https://docs.digitalocean.com/reference/api/#metadata)
    - [Reference](https://docs.digitalocean.com/reference/api/metadata/)
    - [Access Metadata](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/)
  - [Token Scopes](https://docs.digitalocean.com/reference/api/scopes/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [APIs](https://docs.digitalocean.com/reference/api/)
- [Spaces API](https://docs.digitalocean.com/reference/api/#spaces)
- Reference

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Spaces API Reference Documentation

Validated on 21 Aug 2025 • Last edited on 23 Oct 2025

Spaces exposes an S3-compatible RESTful XML API over HTTP. You can access the Spaces API in two ways:

- **S3-compatible tools**: Set the endpoint to `${REGION}.digitaloceanspaces.com` and use a Spaces key pair. See [Using DigitalOcean Spaces with AWS SDKs](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/).
- **Direct API calls**: Sign requests with an `Authorization` header, add common headers, and call bucket or object operations.

The API accepts standard HTTP/1.1 and HTTP/2 requests. The API returns HTTP/2 responses when supported by the client and otherwise returns HTTP/1.1 responses. Some HTTP/2 requests are downgraded to HTTP/1.1 for operational reasons, as permitted by the HTTP/2 specification.

## Authentication

Requests to the Spaces API must include an HTTP `Authorization` header. Spaces supports [AWS Signature Version 4 (SigV4)](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) (recommended) and [Signature Version 2 (SigV2)](https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html) for legacy clients. Throughout the examples below, SigV4 is used. When using a client library, signatures are generated automatically.

To authenticate manually, [create a Spaces access key and secret](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys).

A SigV4 signature consists of several parts. The table below describes each component:

| Signature component | Description |
| --- | --- |
| `AWS4-HMAC-SHA256` | Indicates AWS Signature Version 4 (AWS4) and the signing algorithm (HMAC-SHA256). |
| `Credential` | Contains your access key and request information in the format: `${ACCESS_KEY}/${YYYYMMDD}/${REGION_SLUG}/s3/aws4_request`. |
| `SignedHeaders` | A lower-cased list of the request headers used when computing the signature. For example, `host;x-amz-acl;x-amz-content-sha256;x-amz-date`. |
| `Signature` | A signed hash consisting of a hash of the request body, your secret key, and request information (the canonical request). |

The canonical request included in the signature is made up of:

- The HTTP request method used.
- The path component of the request URI.
- The query string parameters included in the request.
- The list of request headers and their values, newline separated, lower-cased, and trimmed of whitespace.
- The list of header names without their values, sorted alphabetically, lower-cased, and semicolon-separated.
- The SHA256 hash of the request body.

### Example Canonical Request

Start with the original, unsigned HTTP request:

```http
GET /?acl HTTP/1.1
Host: static-images.nyc3.digitaloceanspaces.com
x-amz-content-sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
x-amz-date: 20170804T221549Z
```

Convert that into the canonical request (method, path, canonical headers, signed headers list, and payload hash):

```
GET
/
acl=
host:static-images.nyc3.digitaloceanspaces.com
x-amz-content-sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
x-amz-date:20170804T221549Z

host;x-amz-content-sha256;x-amz-date
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

### Example Authorization Header

After computing the signature, the client sends an `Authorization` header like this:

```
Authorization: AWS4-HMAC-SHA256
Credential=II5JDQBAN3JYM4DNEB6C/20170710/nyc3/s3/aws4_request,
SignedHeaders=host;x-amz-content-sha256;x-amz-date,
Signature=6cab03bef74a80a0441ab7fd33c829a2cdb46bba07e82da518cdb78ac238fda5
```

### Signing Example (pseudo-code)

The following pseudo-code shows how to build the string to sign and compute the SigV4 signature:

```
canonicalRequest = `
${HTTPMethod}\n
${canonicalURI}\n
${canonicalQueryString}\n
${canonicalHeaders}\n
${signedHeaders}\n
${hashedPayload}
`

stringToSign = "AWS4-HMAC-SHA256" + "\n" +
    date(format=ISO8601) + "\n" +
    date(format=YYYYMMDD) + "/" + ${REGION} + "/" + "s3/aws4_request" + "\n" +
    Hex(SHA256Hash(canonicalRequest))

dateKey = HMAC-SHA256("AWS4" + ${SECRET_KEY}, date(format=YYYYMMDD))
dateRegionKey = HMAC-SHA256(dateKey, ${REGION})
dateRegionServiceKey = HMAC-SHA256(dateRegionKey, "s3")
signingKey = HMAC-SHA256(dateRegionServiceKey, "aws4_request")

signature = Hex(HMAC-SHA256(signingKey, stringToSign))
```

## Common Headers

Spaces supports a set of standard request and response headers. These headers control authentication, content metadata, and connection behavior.

### Request Headers

The following table lists the most common request headers supported by Spaces:

| Name | Description |
| --- | --- |
| `Authorization` | Contains AWS Signature Version 4 (SigV4) or Version 2 (SigV2) authentication details. |
| `Content-Length` | Size of the request body in bytes. Required for `PUT` requests with an XML body. |
| `Content-Type` | MIME type of the request body, for example `text/plain`. |
| `Date` | RFC 2822–formatted UTC timestamp, for example `Mon, 10 Jul 2017 19:05:09 +0000`. |
| `Host` | Endpoint of the request, either `${REGION}.digitaloceanspaces.com` or `${BUCKET}.${REGION}.digitaloceanspaces.com`. |
| `x-amz-content-sha256` | SHA256 hash of the request payload. Required for SigV4 authentication. |
| `x-amz-date` | ISO 8601–formatted timestamp, for example `20170803T172753Z`. |

### Response Headers

The following table lists the response headers you may see in a Spaces API response:

| Name | Description |
| --- | --- |
| `Content-Length` | Size of the response body in bytes. |
| `Content-Type` | MIME type of the response body. |
| `Connection` | Indicates whether the connection remains open or closes after the response. |
| `Date` | Date and time of the response in UTC. |
| `ETag` | MD5 hash of the object. |
| `x-amz-request-id` | Unique identifier for the request. |

## Permissions and Access Levels

In the DigitalOcean Control Panel, you can scope Spaces access keys to three high-level permission levels. Each S3 operation below lists the minimum required level. When possible, use the least-privileged key that meets your needs.

Every request requires a key with at least one of these permission levels:

| Level | Scope | Examples |
| --- | --- | --- |
| **Read (Objects)** | Read objects and some bucket read metadata | `GetObject`, `HeadObject`, `ListObjectsV2`, `GetObjectTagging`, `HeadBucket`, `GetBucketLocation`, `ListMultipartUploads`, `ListParts`, `GetBucketVersioning` |
| **Read/Write/Delete (Objects)** | Full object-level R/W/D | `PutObject`, `DeleteObject`, `AbortMultipartUpload`, `CompleteMultipartUpload`, `CreateMultipartUpload`, `UploadPart`, `UploadPartCopy`, `CopyObject`, `PutObjectTagging`, `DeleteObjectTagging`, `PutObjectAcl`, `DeleteObjects`, `PostObject` |
| **All (Buckets and Objects)** | Bucket-level config and all object ops | `CreateBucket`, `DeleteBucket`, `ListBuckets`, bucket CORS/Lifecycle/Policy/Website get/put/delete, `PutBucketVersioning`, etc. |

## Supported S3 API Commands

Spaces implements a subset of the Amazon S3 API. Each command below lists the minimum permissions, supported headers, and an example request/response.

### Bucket Management

Use these commands to create, delete, and check the status of buckets.

CreateBucket

Creates a new Space (bucket). Requires All (Buckets and Objects) permissions. The region comes from the endpoint. Bucket names must be DNS-compliant and unique per region. Based on AWS [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html).

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT |  | • x-amz-acl |

This request creates a new bucket with a private ACL:

```http
PUT / HTTP/1.1
Host: my-space.nyc3.digitaloceanspaces.com
x-amz-acl: private
Authorization: AWS4-HMAC-SHA256 ...
```

The server responds with success if the bucket is created:

```http
HTTP/1.1 200 OK
Content-Length: 0
```

DeleteBucket

Deletes a bucket. Based on AWS [DeleteBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html). Requires All (Buckets and Objects) permissions. The bucket must be empty before deletion.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| DELETE |  | • x-amz-expected-bucket-owner |

This request deletes a bucket. The bucket must be empty before deletion:

```http
DELETE / HTTP/1.1
Host: my-space.nyc3.digitaloceanspaces.com
Authorization: AWS4-HMAC-SHA256 ...
```

The server responds with success if the bucket is deleted:

```http
HTTP/1.1 204 No Content
```

ListBuckets

Lists all buckets in an account. Based on AWS [ListBuckets](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html). Requires All (Buckets and Objects) permissions.

This request lists all buckets in an account:

```http
GET / HTTP/1.1
Host: nyc3.digitaloceanspaces.com
Authorization: AWS4-HMAC-SHA256 ...
```

The server responds with a list of buckets:

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<ListAllMyBucketsResult>
  <Buckets>
    <Bucket>
      <Name>my-space</Name>
      <CreationDate>2023-05-01T12:00:00.000Z</CreationDate>
    </Bucket>
  </Buckets>
</ListAllMyBucketsResult>
```

HeadBucket

Checks whether a bucket exists and is accessible. Based on AWS [HeadBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadBucket.html). Requires Read (Objects) permissions or higher.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| HEAD |  | • x-amz-expected-bucket-owner |

GetBucketLocation

Returns the region of a bucket. Based on AWS [GetBucketLocation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html). Requires Read (Objects) permissions or higher.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner |

### Object Operations

Use these commands to upload, retrieve, and manage objects inside a bucket. Permissions vary by action: read, write, or delete.

GetObject

Retrieves an object. Based on AWS [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html). Requires Read (Objects) permissions. Supports range requests.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • Range<br>• If-Match<br>• If-None-Match<br>• If-Modified-Since<br>• If-Unmodified-Since<br>• x-amz-checksum-mode<br>• x-amz-expected-bucket-owner<br>• x-amz-request-payer<br>• x-amz-server-side-encryption-customer-algorithm<br>• x-amz-server-side-encryption-customer-key<br>• x-amz-server-side-encryption-customer-key-MD5 |

This request retrieves an object from a bucket:

```http
GET /hello.txt HTTP/1.1
Host: my-space.nyc3.digitaloceanspaces.com
Authorization: AWS4-HMAC-SHA256 ...
```

The server responds with the object if it exists:

```http
HTTP/1.1 200 OK
Content-Length: 13
Content-Type: text/plain

Hello, World!
```

HeadObject

Retrieves metadata for an object. Based on AWS [HeadObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html). Requires Read (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| HEAD |  | • Range<br>• If-\* (subset)<br>• If-Match<br>• If-Modified-Since<br>• If-None-Match<br>• If-Unmodified-Since<br>• x-amz-checksum-mode<br>• x-amz-expected-bucket-owner<br>• x-amz-request-payer<br>• x-amz-server-side-encryption-customer-algorithm<br>• x-amz-server-side-encryption-customer-key<br>• x-amz-server-side-encryption-customer-key-MD5 |

ListObjects

Lists objects in a bucket (legacy). Based on AWS [ListObjects](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html). Requires Read (Objects) permissions. For guidance on when to use legacy ListObjects versus ListObjectsV2, see [S3 Compatibility](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/).

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner<br>• x-amz-request-payer |

ListObjectsV2

Lists objects in a bucket. Based on AWS [ListObjectsV2](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html). Requires Read (Objects) permissions. For guidance on when to use legacy ListObjects versus ListObjectsV2, see [S3 Compatibility](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/).

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner<br>• x-amz-request-payer |

This request lists objects in a bucket:

```http
GET /?list-type=2 HTTP/1.1
Host: my-space.nyc3.digitaloceanspaces.com
Authorization: AWS4-HMAC-SHA256 ...
```

The server responds with object listings:

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<ListBucketResult>
  <Contents>
    <Key>hello.txt</Key>
    <Size>13</Size>
  </Contents>
</ListBucketResult>
```

ListObjectVersions

Lists object versions in a bucket. Based on AWS [ListObjectVersions](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html). Requires Read (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner |

GetObjectTagging

Retrieves the tags applied to an object. Based on AWS [GetObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html). Requires Read (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner<br>• x-amz-request-payer |

GetObjectAcl

Retrieves the access control list (ACL) for an object. Based on AWS [GetObjectAcl](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html). Requires Read (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner<br>• x-amz-request-payer |

PutObject

Uploads an object. Based on AWS [PutObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html). Requires Read/Write/Delete (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT | • Content-Length (when body present) | • Cache-Control<br>• Content-Disposition<br>• Content-Encoding<br>• Content-Language<br>• Content-Length<br>• Content-MD5<br>• Content-Type<br>• Expires<br>• x-amz-acl<br>• x-amz-checksum-crc32<br>• x-amz-checksum-crc32c<br>• x-amz-checksum-sha1<br>• x-amz-checksum-sha256<br>• x-amz-expected-bucket-owner<br>• x-amz-grant-full-control<br>• x-amz-grant-read<br>• x-amz-grant-read-acp<br>• x-amz-grant-write-acp<br>• x-amz-object-lock-legal-hold<br>• x-amz-object-lock-mode<br>• x-amz-object-lock-retain-until-date<br>• x-amz-request-payer<br>• x-amz-sdk-checksum-algorithm<br>• x-amz-server-side-encryption<br>• x-amz-server-side-encryption-aws-kms-key-id<br>• x-amz-server-side-encryption-bucket-key-enabled<br>• x-amz-server-side-encryption-context<br>• x-amz-server-side-encryption-customer-algorithm<br>• x-amz-server-side-encryption-customer-key<br>• x-amz-server-side-encryption-customer-key-MD5<br>• x-amz-storage-class<br>• x-amz-tagging<br>• x-amz-website-redirect-location |

This request uploads an object with a private ACL:

```http
PUT /hello.txt HTTP/1.1
Host: my-space.nyc3.digitaloceanspaces.com
x-amz-acl: private
Content-Length: 13
Authorization: AWS4-HMAC-SHA256 ...

Hello, World!
```

The server responds with success:

```http
HTTP/1.1 200 OK
ETag: "65a8e27d8879283831b664bd8b7f0ad4"
```

CopyObject

Copies an object. Based on AWS [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html). Requires Read/Write/Delete (Objects) permissions. For copy constraints, see [S3 Compatibility](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/).

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT | • x-amz-copy-source | • Cache-Control<br>• Content-Disposition<br>• Content-Type<br>• Expires<br>• x-amz-acl<br>• x-amz-checksum-algorithm<br>• x-amz-copy-if-match<br>• x-amz-copy-if-modified-since<br>• x-amz-copy-if-none-match<br>• x-amz-copy-if-unmodified-since<br>• x-amz-copy-source<br>• x-amz-copy-source-if-match<br>• x-amz-copy-source-if-modified-since<br>• x-amz-copy-source-if-none-match<br>• x-amz-copy-source-if-unmodified-since<br>• x-amz-copy-source-server-side-encryption-customer-algorithm<br>• x-amz-copy-source-server-side-encryption-customer-key<br>• x-amz-copy-source-server-side-encryption-customer-key-MD5<br>• x-amz-expected-bucket-owner<br>• x-amz-grant-full-control<br>• x-amz-grant-read<br>• x-amz-grant-read-acp<br>• x-amz-grant-write-acp<br>• x-amz-metadata-directive<br>• x-amz-request-payer<br>• x-amz-server-side-encryption<br>• x-amz-server-side-encryption-aws-kms-key-id<br>• x-amz-server-side-encryption-bucket-key-enabled<br>• x-amz-server-side-encryption-context<br>• x-amz-server-side-encryption-customer-algorithm<br>• x-amz-server-side-encryption-customer-key<br>• x-amz-server-side-encryption-customer-key-MD5<br>• x-amz-source-expected-bucket-owner<br>• x-amz-storage-class<br>• x-amz-tagging<br>• x-amz-tagging-directive<br>• x-amz-website-redirect-location |

This request copies an object into the same bucket:

```http
PUT /copy.txt HTTP/1.1
Host: my-space.nyc3.digitaloceanspaces.com
x-amz-copy-source: /my-space/hello.txt
Authorization: AWS4-HMAC-SHA256 ...
```

The server responds with copy metadata:

```http
HTTP/1.1 200 OK
Content-Length: 0
```

DeleteObject

Deletes an object. Based on AWS [DeleteObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html). Requires Read/Write/Delete (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| DELETE |  | • x-amz-expected-bucket-owner |

This request deletes an object:

```http
DELETE /hello.txt HTTP/1.1
Host: my-space.nyc3.digitaloceanspaces.com
Authorization: AWS4-HMAC-SHA256 ...
```

The server responds with confirmation:

```http
HTTP/1.1 204 No Content
```

DeleteObjects

Deletes multiple objects. Based on AWS [DeleteObjects](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html). Requires Read/Write/Delete (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| POST |  | • x-amz-expected-bucket-owner |

PutObjectTagging

Adds or replaces tags on an object. Based on AWS [PutObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html). Requires Read/Write/Delete (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT | • Content-MD5 | • x-amz-expected-bucket-owner<br>• x-amz-sdk-checksum-algorithm<br>• x-amz-request-payer |

DeleteObjectTagging

Removes tags from an object. Based on AWS [DeleteObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html). Requires Read/Write/Delete (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| DELETE |  | • x-amz-expected-bucket-owner |

PutObjectAcl

Sets the access control list (ACL) for an object. Based on AWS [PutObjectAcl](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html). Requires Read/Write/Delete (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT | • Content-MD5 | • x-amz-acl<br>• x-amz-expected-bucket-owner<br>• x-amz-grant-\*<br>• x-amz-sdk-checksum-algorithm<br>• x-amz-request-payer |

PostObject

Uploads an object using a browser-based form POST. Based on AWS [RESTObjectPOST](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOST.html). Requires Read/Write/Delete (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| POST |  | • Policy form fields per AWS |

PutBucketLogging

Enables server access logging for a bucket. Based on AWS [PutBucketLogging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html). Requires All (Buckets and Objects) permissions. For logging restrictions, such as target bucket requirements, see [S3 Compatibility](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/).

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT | • Content-MD5 | • x-amz-expected-bucket-owner<br>• x-amz-sdk-checksum-algorithm |

This request enables access logging for `source-bucket` and delivers logs to `log-target-bucket`:

```http
PUT /?logging HTTP/1.1
Host: source-bucket.nyc3.digitaloceanspaces.com
Authorization: AWS4-HMAC-SHA256 ...
Content-MD5: ...
Content-Type: application/xml

<BucketLoggingStatus xmlns="http://doc.s3.amazonaws.com/2006-03-01">
  <LoggingEnabled>
    <TargetBucket>log-target-bucket</TargetBucket>
    <TargetPrefix>logs/</TargetPrefix>
  </LoggingEnabled>
</BucketLoggingStatus>
```

The server responds with success if logging is enabled:

```http
HTTP/1.1 200 OK
Content-Length: 0
```

### Advanced Object Uploads

Use these commands to upload large objects in smaller parts. Multipart uploads allow parallel transfers, resumable uploads, and files larger than the single-upload limit.

CreateMultipartUpload

Starts a multipart upload. Based on AWS [CreateMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html). Requires Read/Write/Delete (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| POST |  | • Cache-Control<br>• Content-Disposition<br>• Content-Encoding<br>• Content-Language<br>• Content-Type<br>• Expires<br>• x-amz-acl<br>• x-amz-checksum-algorithm<br>• x-amz-expected-bucket-owner<br>• x-amz-grant-full-control<br>• x-amz-grant-read<br>• x-amz-grant-read-acp<br>• x-amz-grant-write-acp<br>• x-amz-object-lock-legal-hold<br>• x-amz-object-lock-mode<br>• x-amz-object-lock-retain-until-date<br>• x-amz-server-side-encryption<br>• x-amz-server-side-encryption-aws-kms-key-id<br>• x-amz-server-side-encryption-bucket-key-enabled<br>• x-amz-server-side-encryption-context<br>• x-amz-server-side-encryption-customer-algorithm<br>• x-amz-server-side-encryption-customer-key<br>• x-amz-server-side-encryption-customer-key-MD5<br>• x-amz-storage-class<br>• x-amz-tagging<br>• x-amz-website-redirect-location |

This request starts a multipart upload:

```http
POST /large-file.bin?uploads HTTP/1.1
Host: my-space.nyc3.digitaloceanspaces.com
Authorization: AWS4-HMAC-SHA256 ...
```

The server responds with an upload ID:

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<InitiateMultipartUploadResult>
  <UploadId>abcd1234</UploadId>
</InitiateMultipartUploadResult>
```

UploadPart

Uploads a part of an object. Based on AWS [UploadPart](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html). Requires Read/Write/Delete (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT | • Content-Length | • Content-MD5<br>• x-amz-checksum-crc32<br>• x-amz-checksum-crc32c<br>• x-amz-checksum-sha1<br>• x-amz-checksum-sha256<br>• x-amz-expected-bucket-owner<br>• x-amz-request-payer<br>• x-amz-sdk-checksum-algorithm<br>• x-amz-server-side-encryption-customer-algorithm<br>• x-amz-server-side-encryption-customer-key<br>• x-amz-server-side-encryption-customer-key-MD5 |

This request uploads one part of a multipart upload:

```http
PUT /large-file.bin?partNumber=1&uploadId=abcd1234 HTTP/1.1
Host: my-space.nyc3.digitaloceanspaces.com
Content-Length: 5242880
Authorization: AWS4-HMAC-SHA256 ...

...
```

The server responds with an ETag for the part:

```http
HTTP/1.1 200 OK
ETag: "d41d8cd98f00b204e9800998ecf8427e"
```

UploadPartCopy

Uploads a part by copying data from an existing object. Based on AWS [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html). Requires Read/Write/Delete (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT | • x-amz-copy-source | • x-amz-copy-source<br>• x-amz-copy-source-if-match<br>• x-amz-copy-source-if-modified-since<br>• x-amz-copy-source-if-none-match<br>• x-amz-copy-source-if-unmodified-since<br>• x-amz-copy-source-range<br>• x-amz-copy-source-server-side-encryption-customer-algorithm<br>• x-amz-copy-source-server-side-encryption-customer-key<br>• x-amz-copy-source-server-side-encryption-customer-key-MD5<br>• x-amz-expected-bucket-owner<br>• x-amz-request-payer<br>• x-amz-server-side-encryption-customer-algorithm<br>• x-amz-server-side-encryption-customer-key<br>• x-amz-server-side-encryption-customer-key-MD5<br>• x-amz-source-expected-bucket-owner |

CompleteMultipartUpload

Completes a multipart upload. Based on AWS [CompleteMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html). Requires Read/Write/Delete (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| POST |  | • x-amz-checksum-crc32<br>• x-amz-checksum-crc32c<br>• x-amz-checksum-sha1<br>• x-amz-checksum-sha256<br>• x-amz-expected-bucket-owner<br>• x-amz-request-payer<br>• x-amz-server-side-encryption-customer-algorithm<br>• x-amz-server-side-encryption-customer-key<br>• x-amz-server-side-encryption-customer-key-MD5 |

This request completes a multipart upload with multiple parts:

```http
POST /large-file.bin?uploadId=abcd1234 HTTP/1.1
Host: my-space.nyc3.digitaloceanspaces.com
Authorization: AWS4-HMAC-SHA256 ...
Content-Type: application/xml

<CompleteMultipartUpload>
  <Part>
    <PartNumber>1</PartNumber>
    <ETag>"d41d8cd98f00b204e9800998ecf8427e"</ETag>
  </Part>
</CompleteMultipartUpload>
```

The server responds with the final object details:

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<CompleteMultipartUploadResult>
  <Location>https://my-space.nyc3.digitaloceanspaces.com/large-file.bin</Location>
  <Bucket>my-space</Bucket>
  <Key>large-file.bin</Key>
</CompleteMultipartUploadResult>
```

AbortMultipartUpload

Aborts a multipart upload. Based on AWS [AbortMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html). Requires Read/Write/Delete (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| DELETE |  | • x-amz-expected-bucket-owner<br>• x-amz-request-payer |

ListMultipartUploads

Lists in-progress multipart uploads. Based on AWS [ListMultipartUploads](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html). Requires Read (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner |

ListParts

Lists the parts already uploaded for a multipart upload. Based on AWS [ListParts](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html). Requires Read (Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner<br>• x-amz-\* |

### Policies and ACL

Use these commands to manage bucket-level and object-level permissions. For API and control panel availability and product limits, see [S3 Compatibility](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/).

PutBucketPolicy

Applies an IAM-style policy to a bucket. Based on AWS [PutBucketPolicy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT |  | • Content-MD5<br>• x-amz-expected-bucket-owner<br>• x-amz-sdk-checksum-algorithm |

GetBucketPolicy

Retrieves the policy applied to a bucket. Based on AWS [GetBucketPolicy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner |

DeleteBucketPolicy

Deletes the policy from a bucket. Based on AWS [DeleteBucketPolicy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| DELETE |  | • x-amz-expected-bucket-owner |

This request deletes a bucket. The bucket must be empty before deletion:

```http
DELETE / HTTP/1.1
Host: my-space.nyc3.digitaloceanspaces.com
Authorization: AWS4-HMAC-SHA256 ...
```

The server responds with success if the bucket is deleted:

```http
HTTP/1.1 204 No Content
```

PutBucketAcl

Sets the access control list (ACL) for a bucket. Based on AWS [PutBucketAcl](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT | • Content-MD5 | • x-amz-acl<br>• x-amz-expected-bucket-owner<br>• x-amz-grant-\*<br>• x-amz-sdk-checksum-algorithm |

GetBucketAcl

Retrieves the access control list (ACL) for a bucket. Based on AWS [GetBucketAcl](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner |

### Versioning and Lifecycle

Use these commands to control object version history and apply lifecycle rules for automated cleanup. For lifecycle feature limits, see [S3 Compatibility](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/).

PutBucketVersioning

Enables or suspends versioning for a bucket. Based on AWS [PutBucketVersioning](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT |  | • x-amz-expected-bucket-owner |

GetBucketVersioning

Retrieves the versioning state of a bucket. Based on AWS [GetBucketVersioning](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html). Requires Read (Objects) permissions or higher.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner |

PutBucketLifecycleConfiguration

Applies lifecycle rules to a bucket. Based on AWS [PutBucketLifecycleConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT |  | • x-amz-expected-bucket-owner<br>• x-amz-sdk-checksum-algorithm |

GetBucketLifecycle

Retrieves lifecycle rules for a bucket (legacy). Based on AWS [GetBucketLifecycle](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycle.html). Requires All (Buckets and Objects) permissions. Use `GetBucketLifecycleConfiguration` for new applications.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner |

GetBucketLifecycleConfiguration

Retrieves lifecycle rules for a bucket. Based on AWS [GetBucketLifecycleConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner |

DeleteBucketLifecycle

Deletes lifecycle rules from a bucket. Based on AWS [DeleteBucketLifecycle](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| DELETE |  | • x-amz-expected-bucket-owner |

PutBucketLifecycle

Applies lifecycle rules to a bucket (legacy). Based on AWS [PutBucketLifecycle](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycle.html). Requires All (Buckets and Objects) permissions. Use `PutBucketLifecycleConfiguration` for new applications.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT | • Content-MD5 | • x-amz-expected-bucket-owner<br>• x-amz-sdk-checksum-algorithm |

### Website Configuration

Use these commands to configure static website hosting for a bucket. For website endpoints and CDN support, see [S3 Compatibility](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/).

PutBucketWebsite

Configures static website hosting for a bucket. Based on AWS [PutBucketWebsite](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT | • Content-MD5 | • x-amz-expected-bucket-owner<br>• x-amz-sdk-checksum-algorithm |

GetBucketWebsite

Retrieves the website configuration for a bucket. Based on AWS [GetBucketWebsite](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner |

DeleteBucketWebsite

Removes the website configuration from a bucket. Based on AWS [DeleteBucketWebsite](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| DELETE |  | • x-amz-expected-bucket-owner |

### CORS

Use these commands to configure cross-origin resource sharing (CORS) rules for a bucket.

PutBucketCors

Sets CORS rules for a bucket. Based on AWS [PutBucketCors](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| PUT | • Content-MD5 | • x-amz-expected-bucket-owner<br>• x-amz-sdk-checksum-algorithm |

GetBucketCors

Retrieves the CORS rules for a bucket. Based on AWS [GetBucketCors](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| GET |  | • x-amz-expected-bucket-owner |

DeleteBucketCors

Deletes the CORS rules from a bucket. Based on AWS [DeleteBucketCors](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html). Requires All (Buckets and Objects) permissions.

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| DELETE |  | • x-amz-expected-bucket-owner |

PreflightObject

Performs a CORS preflight check. Browsers automatically send this request to verify CORS rules before an actual request. Requires no permissions. For related request behavior, see [S3 Compatibility](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/).

| Request Method | Required Headers | Supported Headers |
| --- | --- | --- |
| OPTIONS |  | • Standard CORS preflight headers |

In this article...

- [Authentication](https://docs.digitalocean.com/reference/api/spaces/#authentication)
  - [Example Canonical Request](https://docs.digitalocean.com/reference/api/spaces/#example-canonical-request)
  - [Example Authorization Header](https://docs.digitalocean.com/reference/api/spaces/#example-authorization-header)
  - [Signing Example (pseudo-code)](https://docs.digitalocean.com/reference/api/spaces/#signing-example-pseudo-code)
- [Common Headers](https://docs.digitalocean.com/reference/api/spaces/#common-headers)
  - [Request Headers](https://docs.digitalocean.com/reference/api/spaces/#request-headers)
  - [Response Headers](https://docs.digitalocean.com/reference/api/spaces/#response-headers)
- [Permissions and Access Levels](https://docs.digitalocean.com/reference/api/spaces/#permissions-and-access-levels)
- [Supported S3 API Commands](https://docs.digitalocean.com/reference/api/spaces/#supported-s3-api-commands)
  - [Bucket Management](https://docs.digitalocean.com/reference/api/spaces/#bucket-management)
  - [Object Operations](https://docs.digitalocean.com/reference/api/spaces/#object-operations)
  - [Advanced Object Uploads](https://docs.digitalocean.com/reference/api/spaces/#advanced-object-uploads)
  - [Policies and ACL](https://docs.digitalocean.com/reference/api/spaces/#policies-and-acl)
  - [Versioning and Lifecycle](https://docs.digitalocean.com/reference/api/spaces/#versioning-and-lifecycle)
  - [Website Configuration](https://docs.digitalocean.com/reference/api/spaces/#website-configuration)
  - [CORS](https://docs.digitalocean.com/reference/api/spaces/#cors)

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