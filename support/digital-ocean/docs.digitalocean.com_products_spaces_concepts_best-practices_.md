---
url: "https://docs.digitalocean.com/products/spaces/concepts/best-practices/"
title: "Best Practices for Performance with DigitalOcean Spaces | DigitalOcean Documentation"
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

- [Concepts](https://docs.digitalocean.com/products/spaces/concepts/)
- Best Practices

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Best Practices for Performance with DigitalOcean Spaces

Validated on 23 Mar 2021 • Last edited on 18 Aug 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

Here are some recommendations on how to get the best performance from Spaces based on your use case and application architecture.

## Use a Content Delivery Network (CDN)

**When Should I Do This?**

A CDN, or content delivery network, caches your assets in geographically distributed locations to make downloads and page loads faster for your users.

You should use a CDN in front of Spaces if:

- Your use case is mostly serving GET requests from the internet, especially for frequent requests to small files.

For example, web-facing applications and media servers are especially likely to see significant performance improvements with the addition of a CDN.

**How Does This Improve Performance?**

By integrating a CDN with Spaces, you can distribute content to your users with low latency and a higher data transfer rate than you could get by serving your content directly from Spaces.

A CDN fetches requested files from Spaces and caches them closer to your end users. By serving future requests for the same files from the CDN’s cache, you reduce the number of GET requests sent to Spaces and therefore reduce the user’s overall latency when interacting with your application.

**How Do I Implement This?**

You can use the free [Spaces CDN](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/), which is available as part of your Spaces subscription at no additional cost.

Several third party CDNs have documentation specifically for Spaces, like [Fastly](https://docs.fastly.com/en/guides/digitalocean-spaces) and [KeyCDN](https://www.keycdn.com/support/digitalocean-spaces-cdn), and most other CDNs work with Spaces with minimal configuration. However, to use Cloudflare as a CDN, you need to either [use a Cloudflare worker](https://developers.cloudflare.com/workers/runtime-apis/fetch/) (which is a paid service) or use a tier that supports [host header rewrites](https://developers.cloudflare.com/rules/page-rules/how-to/rewrite-host-headers/) (which the free tier currently does not).

## Name Objects Optimally

**When Should I Do This?**

We recommend the following object naming convention if you expect to use the ListObject API call and store a substantial amount of objects in your Spaces bucket. This threshold might be anywhere between 10 thousand and 1 million objects, depending on your specific workload and level of activity.

**How Does This Improve Performance?**

The ListObject API call, with its delimiter argument, operates considerably faster when the start of each object key name in your bucket is different. This is useful when your Space has a substantial amount of objects, which naturally slows the ListObject call.

**How Do I Implement This?**

Prefix each object key name in your bucket with 6-8 characters and pass the delimiter argument when calling ListObject. For example, you can prefix each name with random characters, such as `abcdef-filename`, or, if you don’t upload too many files per day, with the current date, such as `2022-05-25-filename`.

Warning
Do not use personally identifiable or other private information in any in any of bucket names, bucket metadata (`BucketPolicy`, `BucketLifecycle`), object names, object metadata (tagging, `x-amz-meta-`, etc.). This data is not encrypted using server-side encryption and is not typically encrypted in client-side encryption designs.

## Avoid Small Files and Use Multi-Part Uploads for Large Files

**When Should I Do This?**

You should consider the size of your files and the way you upload them to Spaces if you are:

- Handling files smaller than 1 MB.
- Uploading files larger than 500 MB.

**How Does This Improve Performance?**

Spaces is designed for storing and serving moderate to large files. Files 20 MB to 200 MB in size give the best performance for both writes and reads. Additionally, combining small files into one larger file greatly reduces the overall number of requests to your Space compared to handling many small files individually.

**How Do I Implement This?**

When uploading files larger than 500 MB, you should use [multi-part uploads](https://docs.digitalocean.com/reference//api/spaces/#begin-a-multi-part-upload).

We recommend combining files less than 1 MB together into a single, larger file. How you do this is specific to your particular files and use case, but one example is concatenating daily log files into a monthly file.

## Choose the Right Datacenter for Your Resources

**When Should I Do This?**

Choosing the right datacenter location for your buckets depends on where the connections to your buckets come from.

If the connections to your buckets are from Droplets, you see the best performance when you:

- Ideally, put your Droplets and buckets in the same datacenter.
- Alternatively, put your Droplets and buckets in datacenters connected by DigitalOcean’s global backbone.

If the connections to your buckets are from end users on the internet, you see the best performance when you [use a CDN](https://docs.digitalocean.com/products/spaces/concepts/best-practices/#cdn), regardless of which region your buckets are in.

**How Does This Improve Performance?**

Droplets and Spaces buckets in the same datacenter have the least amount of latency, but if your application requires connectivity across multiple regions, choose datacenter locations connected by DigitalOcean global backbone.

Traffic between Spaces in NYC3, AMS3, SFO2 and Droplets in NYC1, NYC2, NYC3, AMS3, LON1, FRA1, TOR1, SFO1, AMS2, all go over the global backbone. This provides predictable and stable latency with no packet loss because these connections use our dedicated links instead of the public internet.

**How Do I Implement This?**

You can choose the regions for your resources at creation time. For existing infrastructure, you can [migrate your Droplets](https://docs.digitalocean.com/products/snapshots/how-to/migrate-droplets/) to a new region.

Traffic between buckets in NYC3 and Droplets in NYC1, NYC2, and NYC3 go over our Northeast regional backbone; traffic between buckets in AMS3 and Droplets in AMS2, LON1, and FRA1 go over our European regional backbone.

## Handle 50x Errors Properly

**When Should I Do This?**

This recommendation applies any time you upload files to Spaces. Your upload application or library should correctly handle 50x errors.

**How Does This Improve Performance?**

With correct error handling and retry logic, your dataset uploads faster and require less human intervention. Additionally, without this functionality, any 50x errors during uploads create gaps in your data.

**How Do I Implement This?**

Spaces has a very high degree of compatibility with S3, so one option is to use a well-established S3-compatible client or library for your uploads, like [s3cmd](https://docs.digitalocean.com/products/spaces/reference/s3cmd/).

If you’re writing your own code, implement retry logic with [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) to handle 503 Slow Down responses.

## Optimize Your Request Rate

**When Should I Do This?**

You should consider ways to optimize the number of requests you send to Spaces if:

- You send more than 150 requests per second.
- Your requests are being rate limited.
- You frequently encounter 503 Slow Down responses.

**How Does This Improve Performance?**

To ensure all customers receive a fair share of Spaces’ available throughput in any region, we apply rate limiting at the Space level. Making sure your uploads stay within the threshold prevents unexpected throttling.

**How Do I Implement This?**

There are several ways to begin optimizing the number of requests you send depending on your use case.

- If you’re uploading many small files at a high rate, consider [combining small files into larger files](https://docs.digitalocean.com/products/spaces/concepts/best-practices/#file-size).
- If you’re running into throttling issues, make sure your upload application or library is [handling 50x errors correctly](https://docs.digitalocean.com/products/spaces/concepts/best-practices/#50x-errors).
- If you plan to push more than 150 requests/second to Spaces (regularly or as part of a one-time upload), [open a support ticket](https://cloudsupport.digitalocean.com/) so we can help you prepare for the workload and avoid any temporary limits on your request rate.

## Use Local or Block Storage Instead

**When Should I Do This?**

Not all use cases are appropriate for Spaces. Like all object stores, Spaces are best used for static, unstructured data.

You should use local or block storage if:

- You’re storing dynamic or structured data, like low-latency key/value stores and other databases.
- You need traditional filesystem access or POSIX-like semantics.

We don’t recommend Spaces for use with filesystem-on-S3 services, like S3FS or S3QL.

**How Does This Improve Performance?**

Using local storage or block storage gives you better performance in certain cases because the underlying hardware devices provide low-latency I/O. You can visit [Object Storage vs. Block Storage Services](https://www.digitalocean.com/community/tutorials/object-storage-vs-block-storage-services) to learn more.

**How Do I Implement This?**

You can [get started with Volumes](https://docs.digitalocean.com/products/volumes/getting-started/), or learn more about [Linux storage concepts and terminology](https://www.digitalocean.com/community/tutorials/an-introduction-to-storage-terminology-and-concepts-in-linux) first.

If you need a database solution, you can look into a [Redis](https://www.digitalocean.com/community/tutorials/how-to-configure-redis-replication-on-ubuntu-16-04) or [Cassandra cluster](https://www.digitalocean.com/community/tutorials/how-to-run-a-multi-node-cluster-database-with-cassandra-on-ubuntu-14-04).

In this article...

- [Use a Content Delivery Network (CDN)](https://docs.digitalocean.com/products/spaces/concepts/best-practices/#cdn)
- [Name Objects Optimally](https://docs.digitalocean.com/products/spaces/concepts/best-practices/#name-objects-optimally)
- [Avoid Small Files and Use Multi-Part Uploads for Large Files](https://docs.digitalocean.com/products/spaces/concepts/best-practices/#file-size)
- [Choose the Right Datacenter for Your Resources](https://docs.digitalocean.com/products/spaces/concepts/best-practices/#choose-the-right-datacenter-for-your-resources)
- [Handle 50x Errors Properly](https://docs.digitalocean.com/products/spaces/concepts/best-practices/#50x-errors)
- [Optimize Your Request Rate](https://docs.digitalocean.com/products/spaces/concepts/best-practices/#optimize-your-request-rate)
- [Use Local or Block Storage Instead](https://docs.digitalocean.com/products/spaces/concepts/best-practices/#use-local-or-block-storage-instead)

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