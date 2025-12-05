---
url: "https://docs.digitalocean.com/products/spaces/how-to/enable-versioning/"
title: "How to Enable Spaces Versioning | DigitalOcean Documentation"
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
- Enable Versioning

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Enable Spaces Versioning

Validated on 2 Sep 2025 • Last edited on 5 Sep 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

S3 Versioning maintains previous versions of objects in your buckets, which allows you to restore a previous version of an object if a user or application overwrites or deletes it.

Spaces [supports S3 Versioning](https://docs.digitalocean.com/reference/api/spaces/#aws-s3-compatibility). By default, versioning is disabled on all buckets. You must use the Spaces API to enable or disable versioning.

## Check the Status of Versioning

To check whether versioning is enabled for a bucket, go to the [DigitalOcean Control Panel](https://cloud.digitalocean.com/). In the left menu, click **Spaces Object Storage**, and then click the bucket you want to check to go to its overview page. On the bucket’s overview page, click its **Settings** tab. The **Object Versioning** section displays **Enabled** or **Disabled**.

![Bucket settings page showing the project and disabled object versioning and disabled access logs.](https://docs.digitalocean.com/screenshots/spaces/bucket-versioning-access-settings.90bb0df1bd9bb778606d666f757ecc746bebe87d50244d743d8af068b4801bca.png)

## Enable Spaces Versioning

Before you enable Spaces Versioning, you need a DigitalOcean Spaces API key and the endpoint for your bucket.

First, [create a DigitalOcean Spaces API key](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys) if you don’t already have one. Save the access key ID and the secret key. Use these keys to configure the AWS CLI to access your team.

Next, find the endpoint for your bucket. From the [**Spaces** section of the control panel](https://cloud.digitalocean.com/spaces), click your bucket to open its detail page. Click the **Settings** tab, and then scroll to the **Endpoint** section.

![Screenshot of 'Endpoint' menu option](https://docs.digitalocean.com/screenshots/spaces/rclone-tutorial/image1.52c661c6091e8881417193e6a19856cbd5765137963896eb6fcb0abb2febf8f3.png)

The endpoint is always your bucket’s region followed by `.digitaloceanspaces.com`. Click **Copy** to copy the endpoint to your clipboard.

Finally, configure the AWS CLI to use your Spaces access key with `aws configure`.

Then, enable versioning on your bucket using the following command, replacing `your_bucket_name` with your bucket name and `your_endpoint` with your endpoint:

```bash
aws s3api put-bucket-versioning --bucket your_bucket_name --endpoint=https://your_endpoint --versioning-configuration Status=Enabled
```

Check whether the command was successful by running:

```bash
aws s3api get-bucket-versioning --bucket your_bucket_name --endpoint=https://your_endpoint
```

If it was successful, it returns:

```json
{
    "Status": "Enabled",
    "MFADelete": "Disabled"
}
```

## Retrieve a Deleted Object in a Versioning-Enabled Bucket

Spaces creates a delete marker when you delete an object from a version-enabled bucket. In this case, the delete marker becomes the current version of the object, and the actual object becomes the previous version.

First, find the deleted object’s delete marker:

```bash
aws s3api list-object-versions --prefix your_filename --bucket your_bucket_name --endpoint=https://your_endpoint
```

This example returns all object versions for files with `your_filename` in their name:

```json
{
    "Versions": [\
        {\
            "ETag": "\"3a38169a722a5ac103d758ede3e13be6\"",\
            "Size": 701918,\
            "StorageClass": "STANDARD",\
            "Key": "sammy.png",\
            "VersionId": "WT3RrRINHbSmi9o4CUJwtMRMMxg0Wx7",\
            "IsLatest": false,\
            "LastModified": "2023-04-05T10:00:09.059000+00:00",\
            "Owner": {\
                "DisplayName": "12148280",\
                "ID": "12148280"\
            }\
        }\
    ],
    "DeleteMarkers": [\
        {\
            "Owner": {\
                "DisplayName": "12148280",\
                "ID": "12148280"\
            },\
            "Key": "sammy.png",\
            "VersionId": "xod2CHTniex2vcATz0ByCLJzweygEJl",\
            "IsLatest": true,\
            "LastModified": "2023-04-05T10:01:32.610000+00:00"\
        }\
    ]
}
```

Then, remove the delete marker:

```bash
aws s3api delete-object --bucket your_bucket_name --endpoint=https://your_endpoint --key your_filename --version-id xod2CHTniex2vcATz0ByCLJzweygEJl
```

On success, the response is:

```json
{
    "DeleteMarker": true,
    "VersionId": "xod2CHTniex2vcATz0ByCLJzweygEJl"
}
```

Check the VersionID to ensure that it is the VersionID of the delete marker. DO NOT use the VersionID of one of the object versions as it will cause that version of the object to be deleted.

The file is now restored.

## Permanently Delete a Specific Version

Use the following command to return all object versions:

```bash
aws s3api list-object-versions --prefix your_filename --bucket your_bucket_name --endpoint=https://your_endpoint
```

This returns all object versions for files with `your_filename` in their name. In this instance, the object has three versions:

```json
{
    "Versions": [\
        {\
            "ETag": "\"f0cfd2bdaa82e1a5ff0a32537c5d3b9a\"",\
            "Size": 51730,\
            "StorageClass": "STANDARD",\
            "Key": "shark.png",\
            "VersionId": "DcntGSvYg-oI..sID8OM7W524Ejofkf",\
            "IsLatest": true,\
            "LastModified": "2023-04-11T10:29:22.772000+00:00",\
            "Owner": {\
                "DisplayName": "12148280",\
                "ID": "12148280"\
            }\
        },\
        {\
            "ETag": "\"a9d268788d4562567ce01136cc382ac4\"",\
            "Size": 87721,\
            "StorageClass": "STANDARD",\
            "Key": "shark.png",\
            "VersionId": "DqZI-H8.1BAnrXA7Py3jNNBRrcm4eu8",\
            "IsLatest": false,\
            "LastModified": "2023-04-11T10:28:58.990000+00:00",\
            "Owner": {\
                "DisplayName": "12148280",\
                "ID": "12148280"\
            }\
        },\
        {\
            "ETag": "\"137057b79e68b856bb5f6a203f0c98eb\"",\
            "Size": 190179,\
            "StorageClass": "STANDARD",\
            "Key": "shark.png",\
            "VersionId": "j-pjg8GhKzotq1rG5XiT12Jhobj9kR7",\
            "IsLatest": false,\
            "LastModified": "2023-04-11T10:28:33.359000+00:00",\
            "Owner": {\
                "DisplayName": "12148280",\
                "ID": "12148280"\
            }\
        }\
    ]
}
```

Then, you can delete a specific version:

```bash
aws s3api delete-object --bucket your_bucket_name --endpoint=https://your_endpoint --key your_filename --version-id DqZI-H8.1BAnrXA7Py3jNNBRrcm4eu8
```

The command returns the following output:

```json
{
    "VersionId": "DqZI-H8.1BAnrXA7Py3jNNBRrcm4eu8"
}
```

In this article...

- [Check the Status of Versioning](https://docs.digitalocean.com/products/spaces/how-to/enable-versioning/#check-the-status-of-versioning)
- [Enable Spaces Versioning](https://docs.digitalocean.com/products/spaces/how-to/enable-versioning/#enable-spaces-versioning)
- [Retrieve a Deleted Object in a Versioning-Enabled Bucket](https://docs.digitalocean.com/products/spaces/how-to/enable-versioning/#retrieve-a-deleted-object-in-a-versioning-enabled-bucket)
- [Permanently Delete a Specific Version](https://docs.digitalocean.com/products/spaces/how-to/enable-versioning/#permanently-delete-a-specific-version)

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