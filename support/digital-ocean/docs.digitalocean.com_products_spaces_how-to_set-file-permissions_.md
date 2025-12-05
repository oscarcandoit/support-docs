---
url: "https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/"
title: "How to Share Links to Files with File Permissions and Presigned URLs | DigitalOcean Documentation"
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
- Share Links to Files

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Share Links to Files with File Permissions and Presigned URLs

Validated on 10 Dec 2024 • Last edited on 16 Apr 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

To share links to files in a Spaces bucket, you can set the visibility permissions of individual files:

- **Public** permissions let anyone on the internet view the file.
- **Private** permissions only allow owners of the bucket to view the file.

You can set file permissions when you upload them, and you can change the permissions of files at any time after uploading. By default, file permissions are set to private. Bucket owners can also create [presigned URLs](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/#presigned-urls) to provide time-bound access to a private file.

To share or hide the full list of all files in a bucket, [set the bucket’s file listing permissions](https://docs.digitalocean.com/products/spaces/how-to/set-file-listing-permissions/). To grant programmatic access to a bucket, [use Spaces access keys](https://docs.digitalocean.com/products/spaces/how-to/manage-access/) with S3-compatible tools, like [AWS SDKs](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/) or [Cyberduck](https://docs.digitalocean.com/products/spaces/reference/cyberduck/).

## Change File Permissions

On the bucket’s **Files** page, you can change an individual file’s permission by opening its **More** menu:

![The manage permissions option in a file's more menu](https://docs.digitalocean.com/screenshots/spaces/manage-file-permissions.a7fd1757182f47f010a052995aa0f8397e1f5375066e4ca8d2da1fb42744f1d6.png)

Click **Manage Permissions** to open the **Manage Permissions** window, then choose **Public** or **Private** and click **Update**.

You can also [set metadata](https://docs.digitalocean.com/products/spaces/how-to/set-file-metadata/) for multiple files at once by selecting them, opening the **Actions** menu, and choosing **Manage Permissions**.

## Create Presigned URL

Bucket owners can give time-bound permission to view a private file by creating a presigned URL for it. The sharing duration can last 1 hour, 6 hours, 1 day, 3 days, or 7 days, and anyone with the link can able to view the private file during that time.

A presigned URL for DigitalOcean Spaces has `GET` parameters embedded for headers that begin with `X-Amz-`. These headers define parameters for the URL, like its credentials and expiration date.

### Using the Control Panel

To create a presigned URL, from the file’s **More** menu, click **Quick Share**. In the window that opens, choose the sharing duration.

![The Quick Share window with sharing duration options and the file URL](https://docs.digitalocean.com/screenshots/spaces/quick-share.4c736ef65c35f04f1fe48db2bd27fb13d7e3ed145f55f0b7965f1d28c79af37c.png)

The link appears in the **File URL** field and includes a Unix timestamp in the `Expires` parameter.

This feature is intended to provide time-bound access to a private resource. The presigned URL for a **Public** file is the same as the file’s public URL and has no expiration date. If you make the file private, the link no longer grants access.

### Using s3cmd

To create a presigned URL using `s3cmd`, you can use a command like the following. Substitute the variables for your bucket.

```shell
aws s3 presign s3://your-space-name/your-object-key --expires-in 3600 --endpoint-url https://nyc3.digitaloceanspaces.com
```

You can add query parameters to control which resources are available. For example, when generating your presigned URL using the AWS CLI, you can use the `--response-content-type` parameter to specify the `Content-Type` header for the response:

```shell
aws s3 presign s3://your-bucket-name/your-object-key --response-content-type text/plain
```

However, `s3cmd` doesn’t support specifying response headers like `Content-Type` when generating presigned URLs, and the AWS CLI doesn’t support specifying the endpoint URL in the `presign` command. You can generate a presigned URL with specific parameters using the DigitalOcean Spaces API and an s3-compatible client library such as Boto3 for Python:

```python
import boto3
from botocore.client import Config

# Initialize a session using DigitalOcean Spaces
session = boto3.session.Session()
client = session.client('s3',
                        region_name='nyc3',
                        endpoint_url='https://nyc3.digitaloceanspaces.com',
                        aws_access_key_id='YOUR_ACCESS_KEY',
                        aws_secret_access_key='YOUR_SECRET_KEY')

# Generate presigned URL with query parameters
url = client.generate_presigned_url(ClientMethod='get_object',
                                    Params={
                                        'Bucket': 'your-space-name',
                                        'Key': 'your-object-key',
                                        'ResponseContentType': 'text/plain',
                                        # You can add more parameters if needed, such as 'ResponseContentDisposition': 'attachment; filename=filename.txt'
                                    },
                                    ExpiresIn=3600)
```

To add query parameters to an existing presigned URL, you can use `&` to specify the queries at the end of the URL. For example, to serve your resource as `text/plain`, you can append `&response-content-type=text/plain` to the end of the presigned URL.

In this article...

- [Change File Permissions](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/#change-file-permissions)
- [Create Presigned URL](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/#presigned-url)
  - [Using the Control Panel](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/#using-the-control-panel)
  - [Using s3cmd](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/#using-s3cmd)

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