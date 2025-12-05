---
url: "https://docs.digitalocean.com/products/spaces/how-to/configure-cors/"
title: "How to Configure CORS on DigitalOcean Spaces | DigitalOcean Documentation"
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
- Configure CORS

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Configure CORS on DigitalOcean Spaces

Validated on 16 May 2023 • Last edited on 16 Apr 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

Client web applications loaded in one domain can interact with resources in a Spaces bucket with [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) configured.

You can configure CORS [via the control panel](https://docs.digitalocean.com/products/spaces/how-to/configure-cors/#control-panel), which you can use from any web browser, or by [uploading a configuration XML file](https://docs.digitalocean.com/products/spaces/how-to/configure-cors/#xml) to your bucket, which supports more configuration options.

## Configure via the Control Panel

To configure CORS for a bucket via the control panel, navigate to its **Settings** page. In the **CORS Configurations** section, click **Add**.

![The Advanced CORS Options window](https://docs.digitalocean.com/screenshots/spaces/cors.420c4702875ff270c21324605b8fa7475925e959b65146513d879682d3cc592e.png)

This opens the **Advanced CORS Options** window, which lets you set the following advanced CORS options:

- **Origin**: Specifies the complete domain of the client you want to access your bucket’s resources. The domain should start with a protocol identifier, such as `http`, end with a hostname or hostname and port, and optionally include a wildcard character (`*`) at the start of the hostname. For example, `https://*.example.com`. All other settings are only applied to requests from this Origin.

- **Allowed Methods**: Determines which API methods can interact with your bucket. You can allow or prohibit the following methods:
  - **GET**: Downloads a resource.
  - **PUT**: Updates a resource’s properties or information.
  - **DELETE**: Deletes a resource.
  - **POST**: Creates a new resource.
  - **HEAD**: Retrieves a resource’s metadata, such as its file size.
- **Allowed Headers**: Determines which non-default headers are accepted in your bucket. To verify that an incoming HTTP request abides by your CORS settings, your bucket checks the request’s list of headers. Each header describes a property of the request. For example, `Content-Length` and `Content-Type` are some of the default headers that CORS automatically accepts. However, if your client sends any non-default headers, you must first add them in your CORS configuration.

- **Access Control Max Age**: Determines how long a request’s verification is cached, in seconds. While verification is cached, the bucket can accept more requests from the same origin without needing to be verified, which improves performance. The recommended value is 5 seconds. Lower values may be useful during development, and higher values may be useful if a single browser is issuing many requests at once. Some browsers may also limit this value to as high as 10 minutes.


## Configure by Uploading XML Configuration File

In order to set certain configuration options not available in the control panel, such as `ExposeHeaders`, you can upload a CORS XML configuration file via s3cmd. You can [set up s3cmd with our tutorial](https://docs.digitalocean.com/products/spaces/reference/s3cmd/).

For example, the following XML file sets `ExposeHeaders` to `ETag`, alongside other configuration options:

```
    <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
        <CORSRule>
            <AllowedOrigin>*</AllowedOrigin>
            <AllowedMethod>POST</AllowedMethod>
            <AllowedMethod>PUT</AllowedMethod>
            <AllowedMethod>DELETE</AllowedMethod>
            <MaxAgeSeconds>3000</MaxAgeSeconds>
            <ExposeHeader>ETag</ExposeHeader>
            <AllowedHeader>*</AllowedHeader>
        </CORSRule>
    </CORSConfiguration>
```

You can then upload an XML configuration file to your bucket with the following s3cmd command:

```
s3cmd setcors /path/to/config.xml s3://BUCKET_NAME
```

In this article...

- [Configure via the Control Panel](https://docs.digitalocean.com/products/spaces/how-to/configure-cors/#control-panel)
- [Configure by Uploading XML Configuration File](https://docs.digitalocean.com/products/spaces/how-to/configure-cors/#xml)

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