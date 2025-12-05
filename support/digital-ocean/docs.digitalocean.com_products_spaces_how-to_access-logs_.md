---
url: "https://docs.digitalocean.com/products/spaces/how-to/access-logs/"
title: "How to Configure Spaces Access Logs | DigitalOcean Documentation"
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
- Configure Access Logs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Configure Spaces Access Logs

Validated on 18 Aug 2025 • Last edited on 5 Sep 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

Spaces can automatically generate access logs for buckets and store the logs in a bucket you specify. Access logs include:

- Reads, writes, and deletions of objects in the bucket
- Requests to origin endpoints
- Accesses to the bucket’s [CDN endpoints](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/), if enabled

Access logs are in [Amazon’s S3 server access log format](https://docs.aws.amazon.com/AmazonS3/latest/userguide/LogFormat.html). CDN access logs are in [Amazon’s CloudFront access logs format](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/standard-logs-reference.html).

Access logs are delivered asynchronously. They usually appear in the destination bucket within an hour of activity, but delivery may take two hours or longer.

Access logs are disabled by default. You can view whether logs are enabled or disabled in the control panel. To enable or disable access logs, use the S3-compatible API (for example, with the AWS CLI) or [Terraform](https://registry.terraform.io/providers/digitalocean/digitalocean/latest/docs/resources/spaces_bucket_logging).

## Check the Status of Access Logs

To check whether access logs are enabled for a bucket, go to the [DigitalOcean Control Panel](https://cloud.digitalocean.com/). In the left menu, click **Spaces Object Storage**, and then click the bucket you want to check to go to its overview page. On the bucket’s overview page, click its **Settings** tab. The **Access Logs** section displays **Enabled** or **Disabled**.

![Bucket settings page showing the project and disabled object versioning and disabled access logs.](https://docs.digitalocean.com/screenshots/spaces/bucket-versioning-access-settings.90bb0df1bd9bb778606d666f757ecc746bebe87d50244d743d8af068b4801bca.png)

## Manage Access Logs Using the AWS CLI

You can enable or disable access logs using the S3-compatible API with the AWS CLI (`aws`).

### Enable Access Logs

Create a JSON file that sets the logging configuration. Specify the target bucket (where logs are stored) and a target prefix (the prefix for log objects). The target bucket must be different from the source bucket. Currently, we do not support writing access logs into the same bucket that is generating them.

Example logging configuration

```json
{
  "LoggingEnabled": {
    "TargetBucket": "use_your_destination_bucket",
    "TargetPrefix": "example_log_prefix/"
  }
}
```

Apply the configuration:

```shell
aws --endpoint-url https://use_your_region.digitaloceanspaces.com \
    s3api put-bucket-logging \
    --bucket use_your_source_bucket \
    --bucket-logging-status file://use_your_logging_config_path.json
```

This call sets the bucket’s logging configuration to the state you provide. On success, the command returns no output and exits with code `0`.

You can verify that logging is enabled by checking your configuration in [Verify Your Logging Configuration](https://docs.digitalocean.com/products/spaces/how-to/access-logs/#verify).

### Disable Access Logs

To disable access logs, send an empty logging configuration. This removes the `LoggingEnabled` section entirely:

```shell
aws --endpoint-url https://use_your_region.digitaloceanspaces.com \
    s3api put-bucket-logging \
    --bucket use_your_source_bucket \
    --bucket-logging-status '{}'
```

After this, the source bucket no longer writes access logs. You can verify that logging is disabled by checking your configuration in [Verify Your Logging Configuration](https://docs.digitalocean.com/products/spaces/how-to/access-logs/#verify).

### Verify Your Logging Configuration

Check the current logging configuration:

```shell
aws --endpoint-url https://use_your_region.digitaloceanspaces.com \
    s3api get-bucket-logging \
    --bucket use_your_source_bucket
```

If logging is **enabled**, the response includes a `LoggingEnabled` object with your `TargetBucket` and `TargetPrefix`, for example:

```json
{
  "LoggingEnabled": {
    "TargetBucket": "your-log-bucket",
    "TargetPrefix": "example_log_prefix/"
  }
}
```

If logging is **disabled**, the response is an empty JSON object.

## Manage Access Logs Using Terraform

You can also configure access logs with Terraform using the `digitalocean_spaces_bucket_logging` resource. The destination bucket must be in the same region as the source bocket, and your access key must include permission to write to it.

![](https://docs.digitalocean.com/images/icons/terraform.svg)

digitalocean\_spaces\_bucket\_logging

Provides a bucket logging resource for Spaces, DigitalOcean’s object storage product. The `digitalocean_spaces_bucket_logging` resource allows Terraform to configure access logging for Spaces buckets. For more information, see: How to Configure Spaces Access Logs

In this article...

- [Check the Status of Access Logs](https://docs.digitalocean.com/products/spaces/how-to/access-logs/#check-the-status-of-access-logs)
- [Manage Access Logs Using the AWS CLI](https://docs.digitalocean.com/products/spaces/how-to/access-logs/#manage-access-logs-using-the-aws-cli)
  - [Enable Access Logs](https://docs.digitalocean.com/products/spaces/how-to/access-logs/#enable-access-logs)
  - [Disable Access Logs](https://docs.digitalocean.com/products/spaces/how-to/access-logs/#disable-access-logs)
  - [Verify Your Logging Configuration](https://docs.digitalocean.com/products/spaces/how-to/access-logs/#verify)
- [Manage Access Logs Using Terraform](https://docs.digitalocean.com/products/spaces/how-to/access-logs/#manage-access-logs-using-terraform)

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

Cookie Preferences