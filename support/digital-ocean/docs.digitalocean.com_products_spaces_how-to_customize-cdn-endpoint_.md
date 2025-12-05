---
url: "https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/"
title: "How to Customize the Spaces CDN Endpoint with a Subdomain | DigitalOcean Documentation"
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
- Customize the CDN Endpoint

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Customize the Spaces CDN Endpoint with a Subdomain

Validated on 22 Oct 2021 • Last edited on 16 Apr 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

After you [enable the Spaces CDN](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/), the CDN’s edge servers begin caching and serving the contents of the Spaces bucket from the default CDN endpoint, `<spacename>.<region>.cdn.digitaloceanspaces.com`. Optionally, you can also configure a secure subdomain you own as an alternative endpoint, like `images.example.com`.

For security, any subdomain you use with the Spaces CDN must have an SSL certificate. When you configure a custom endpoint, you can either create a new certificate during setup, upload an existing certificate during setup, or choose a certificate that is already uploaded to your DigitalOcean account.

## Add a Custom Subdomain

You can add a custom subdomain to the Spaces CDN either when you [create a new bucket with the CDN enabled](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/#during-creation) or [in an existing Space’s CDN settings](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/#existing-space).

The [Spaces creation page](https://cloud.digitalocean.com/spaces/new) and existing buckets’ **Settings** pages have the same **CDN (Content Delivery Network)** section. In this section, the **Use a custom subdomain** drop-down menu lists any subdomain SSL certificates already uploaded to your account.

![A bucket's CDN settings with the custom subdomain drop-down menu open and one existing certificate visible](https://docs.digitalocean.com/screenshots/spaces/cdn-subdomain-drop-down.b5924a07501b3a68b4051457539ffd994a7a54298a43b25fbeba14365975e379.png)

If you already have a certificate for the subdomain you want to use, select it from the menu and click **Save** to finish configuring the custom endpoint. We automatically create a CNAME record for it if necessary and start serving content from that subdomain.

If you don’t already have a certificate uploaded for the subdomain you want to use, click the **+Add a new subdomain certificate** option. This opens a window that gives you two options:

- **Use Let’s Encrypt**. If you [manage your domain’s DNS with DigitalOcean](https://docs.digitalocean.com/products/networking/dns/), you can create a free, fully managed SSL certificate with our Let’s Encrypt integration. This option requires the least amount of manual setup.

- **Bring your own certificate**. If you host your domain’s DNS with a provider other than DigitalOcean, you can manually create and upload a certificate. This option is best if you don’t want to use DigitalOcean to manage your DNS, if you want to generate your own certificate, or if you want to upload an existing certificate.


Use Let's Encrypt

After you click the **Use Let’s Encrypt** tab, select the domain you want to use. When you do, the **Which subdomain would you like to use with this Space?** option appears. You can select an existing subdomain or choose a new one.

![The Spaces CDN custom endpoint Add Custom Subdomain window opened to the Use Let's Encrypt tab](https://docs.digitalocean.com/screenshots/spaces/cdn-subdomain-lets-encrypt.f4ff5b347a6d51b037656e1bc38e66864901d094fd29344e5caadda7c45dd673.png)

Enter a name for the certificate, then click **Generate Certificate and Use Subdomain**. This automatically creates the necessary CNAME for the subdomain and verifies the SSL certificate. When your subdomain is ready to use, which typically takes a few seconds, you will receive a notification in the control panel.

Bring Your Own Certificate

After you click the **Bring your own certificate** tab, the window displays several fields for you to upload your certificate.

Note
You cannot secure a CDN’s subdomain with a CloudFlare Origin CA certificate or with a custom wildcard SSL certificate that you are already using elsewhere in your account. In these cases, add a new custom certificate during the custom subdomain set up for your CDN.
![The Spaces CDN custom endpoint Add Custom Subdomain window opened to the Bring Your Own Certificate tab](https://docs.digitalocean.com/screenshots/spaces/cdn-subdomain-bring-your-own.4fe78af63033e54d5c3312090c26643df15622706b7eda12506d3314f20d85c3.png)

Enter the name, certificate, private key, and certificate chain in the respective fields, then click **Add Certificate and Use Subdomain**.

Where you can find this information depends on where and how you generated your key. For example, if you manually created a key with [Certbot](https://certbot.eff.org/docs/using.html#where-are-my-certificates), your keys and certificates are typically in `/etc/letsencrypt/live`.

Finally, using your DNS management provider, add a CNAME record pointing from the subdomain to the default CDN endpoint to start serving content from the custom subdomain.

## Edit or Remove a Custom Subdomain

From the bucket’s **Settings** page, in the **CDN (Content Delivery Network)** section, open the drop-down menu with the current subdomain.

![The Spaces CDN endpoint settings with the pulldown menu open to show the Remove Subdomain option](https://docs.digitalocean.com/screenshots/spaces/cdn-subdomain-edit-or-remove.b5924a07501b3a68b4051457539ffd994a7a54298a43b25fbeba14365975e379.png)

To switch subdomains, you can choose another certificate or add a new subdomain certificate here.

To remove the subdomain entirely and serve content only from the default CDN endpoint, click **Remove Custom Subdomain**, then click **Save**. In the window that opens, confirm the removal by typing the name of the subdomain and clicking **Remove subdomain**.

In this article...

- [Add a Custom Subdomain](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/#add-a-custom-subdomain)
- [Edit or Remove a Custom Subdomain](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/#edit-or-remove-a-custom-subdomain)

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