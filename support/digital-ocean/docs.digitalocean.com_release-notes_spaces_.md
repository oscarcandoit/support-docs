---
url: "https://docs.digitalocean.com/release-notes/spaces/"
title: "Spaces | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/release-notes.5fbb164636ab961df9e08f892a39623e2bf7848be659fb300d6b0bab87a060dd.svg)Release Notes](https://docs.digitalocean.com/release-notes/)
- [![](https://docs.digitalocean.com/images/icons/regional-availability.32459447c00bfdb1c07abebcc0fdd721a4cbd93143cb616b0fbe5c629e4a938c.svg)Regional Availability](https://docs.digitalocean.com/platform/regional-availability/)
- [![](https://docs.digitalocean.com/images/icons/accounts.7c3a46a4e139957c37b1ba530846464f3b7432b7bc00793db0d8e788940ddf69.svg)Accounts](https://docs.digitalocean.com/platform/accounts/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Release Notes](https://docs.digitalocean.com/release-notes/)
- Spaces

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Spaces Release Notes

Validated on 10 Jun 2025

## June 2025

### 10 June

- [Spaces access logs](https://docs.digitalocean.com/products/spaces/how-to/access-logs/) are now in general availability.


## May 2025

### 30 May

- Now in public preview, Spaces buckets automatically [generate CDN logs](https://docs.digitalocean.com/products/spaces/how-to/access-logs/) if you have [enabled the bucket’s CDN](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/).

- You can now configure Spaces access logs using [Terraform](https://registry.terraform.io/providers/digitalocean/digitalocean/latest/docs/resources/spaces_bucket_logging).


## March 2025

### 18 March

- You can now configure Spacess access keys to provide different levels of permissions to multiple buckets. To create or edit access keys, see [How to Manage Access Keys](https://docs.digitalocean.com/products/spaces/how-to/manage-access/).


## January 2025

### 29 January

- Spaces now supports streaming uploads that use trailing SigV4 signatures with signed payloads (`STREAMING-AWS4-HMAC-SHA256-PAYLOAD-TRAILER`). This enables S3 compatibility with AWS SDK for .NET versions released on or after 15 January 2025 (and with applications built on those versions).


### 21 January

- Spaces now supports streaming uploads that use trailing SigV4 signatures with unsigned payloads (`STREAMING-UNSIGNED-PAYLOAD-TRAILER`). This enables S3 compatibility with versions of the AWS CLI and AWS SDKs (other than the AWS SDK for .NET) released on or after 15 January 2025 and with applications built on them.


## December 2024

### 6 December

- You can now [limit Spaces access keys to specific buckets](https://docs.digitalocean.com/products/spaces/how-to/manage-access/) with your choice of read-only, read-write, or full access permissions, compatible with access control lists (ACLs).


## October 2024

### 11 October

- Spaces is now available in TOR1. You can view the availability of all of our products by datacenter in the [regional availability matrix](https://docs.digitalocean.com/platform/regional-availability/). See our documentation on [creating a new Spaces bucket](https://docs.digitalocean.com/products/spaces/how-to/create/), [relocating an existing one](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/), or [migrating a bucket from another cloud service provider](https://docs.digitalocean.com/products/spaces/how-to/migrate/).


## August 2024

### 26 August

- Spaces is now available in LON1. You can view the availability of all of our products by datacenter in the [regional availability matrix](https://docs.digitalocean.com/platform/regional-availability/).


### 1 August

- Invoices now include a breakdown of bandwidth usage and cost per Spaces bucket. If you have 100 or more Spaces buckets, you can only view this breakdown in the CSV version of the invoice. To view or download invoices, see our [Invoices billing page](https://docs.digitalocean.com/platform/billing/invoices/).


## November 2023

### 21 November

- Additional Spaces CDN PoPs are now available. For the full list, see [Spaces availability](https://docs.digitalocean.com/products/spaces/details/availability/).


## October 2023

### 30 October

- We are incrementally making additional Spaces CDN PoPs available for existing customers, starting on 6 November 2023 and finishing on 21 November 2023. For the full upcoming list, see [Spaces availability](https://docs.digitalocean.com/products/spaces/details/availability/).


## July 2023

### 7 July

- Spaces is now available in BLR1. You can view the availability of all of our products by datacenter in the [regional availability matrix](https://docs.digitalocean.com/platform/regional-availability/).


## March 2023

### 1 March

- Spaces now automatically delete any incomplete [multipart uploads](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html) older than 90 days to prevent billing and to free up storage.


## February 2023

### 2 February

- Newer Spaces buckets now have an improved limit of 800 total operations per second. To check whether a bucket has this new limit, see our [Spaces rate limits](https://docs.digitalocean.com/products/spaces/details/limits/#rate-limits).


## October 2022

### 28 October

- All Spaces rate limits have increased to double their previous amount. For a list of the current rate limits, see [our Limits page](https://docs.digitalocean.com/products/spaces/details/limits/#rate-limits).


## July 2022

### 14 July

- Spaces and the Spaces CDN now support HTTP/2 clients. HTTP/2-conformant clients now receive HTTP/2 responses, while others receive HTTP/1.1 responses. In certain cases, such as when an HTTP/2 request has a formatting error, it may downgrade to HTTP/1.1 for operational reasons, as permitted by the HTTP/2 specification.


## June 2022

### 27 June

- To improve security, DigitalOcean no longer accepts TLS 1.0 and TLS 1.1 connections. This includes connections to `www.digitalocean.com`, `cloud.digitalocean.com`, and `api.digitalocean.com`.


### 8 June

- You can now cancel a Space’s scheduled deletion in the [control panel](https://cloud.digitalocean.com/spaces). For more details, see [How to Destroy Spaces](https://docs.digitalocean.com/products/spaces/how-to/destroy/).


## May 2022

### 13 May

- Spaces no longer supports downgrading TLS connections to TLS 1.1 or using cipher suites with SHA1 or DHE. Spaces currently returns soft S3 error messages and will gradually transition to hard TLS errors over a 4-6 week period.


## March 2022

### 28 March

- Spaces no longer supports downgrading TLS connections to TLS 1.0, and will transition from returning soft S3 error messages to hard TLS errors over the next month.


## January 2022

### 19 January

- Managed Let’s Encrypt certificates will begin using Elliptic Curve Digital Signature Algorithm (ECDSA) instead of RSA. ECDSA is equally secure and more computationally efficient than RSA. ECDSA certificates follow the shorter root chain and aren’t rooted using the [DST Root CA X3 cross-sign which expired on 30 September 2021](https://letsencrypt.org/docs/dst-root-ca-x3-expiration-september-2021/#:~:text=DST%20Root%20CA%20X3%20will,that%20use%20Let's%20Encrypt%20certificates.).

As we roll out this change, new Let’s Encrypt certificates provisioned for DigitalOcean [Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/) and [Spaces](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/) will increasingly use ECDSA and existing certificiates secured with RSA will be secured with ECDSA upon auto-renewal. This change doesn’t require any action from DigitalOcean customers.


## October 2021

### 27 October

- We have deprecated TLS DHE ciphers for all load balancers.


### 12 October

- You can now opt out of DigitalOcean automatically creating DNS records for Let’s Encrypt certificates during [SSL certificate creation](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/), [load balancer creation](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/), and [SSL forwarding rule management](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/).


## September 2021

### 21 September

- The [load balancer](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/#add-an-ssl-certificate) and [Spaces](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/#add-a-custom-subdomain) services now support [wildcard Let’s Encrypt certificates](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/).


## March 2021

### 3 March

- With the completion of the SGP1 capacity augmentation, we have re-enabled the creation of new Spaces in SGP1.


## February 2021

### 1 February

- Spaces are now available in SFO3.


## September 2020

### 30 September

- We have updated capacity in FRA1 and have resumed the [creation of Spaces](https://docs.digitalocean.com/products/spaces/how-to/create/) in that region.


### 25 September

- We have temporarily disabled the creation of new Spaces in SGP1 while we update capacity in this region.



Learn more on [**Creation of New Spaces in SGP1 Disabled Until 2021**](https://docs.digitalocean.com/release-notes/upcoming/spaces-sgp1/).


## July 2020

### 22 July

- We have [reenabled the creation of Spaces in NYC3](https://docs.digitalocean.com/release-notes/upcoming/spaces-fra1-nyc3/) now that the datacenter’s capacity upgrade is complete. The ability to create new Spaces in FRA1 remains disabled while we finish that datacenter capacity upgrade.


## June 2020

### 9 June

- We have temporarily disabled the creation of new Spaces in FRA1 and NYC3 while we update capacity in these regions. [Learn more about Spaces in FRA1 and NYC3](https://docs.digitalocean.com/release-notes/upcoming/spaces-fra1-nyc3/).



Learn more on [**Creation of New Spaces in FRA1 and NYC3 Disabled Until Late 2020**](https://docs.digitalocean.com/release-notes/upcoming/spaces-fra1-nyc3/).


## April 2020

### 28 April

- [v1.17.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1170-april-28-2020) of the DigitalOcean Terraform Provider is now available. This release includes bug fixes and new Spaces data sources.


### 14 April

- [v1.16.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1160-april-14-2020) of the DigitalOcean Terraform Provider is now available. This release includes VPC support and expanded Spaces support.


## March 2020

### 19 March

- The Spaces CDN now has [separate caches for unique URLs, including query strings](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/).


### 11 March

- We have finished expanding the AMS3 datacenter to address capacity and load issues with Spaces in that region. As a result, we have reenabled the creation of new Spaces in AMS3. The allowance and rate limits on uploads to Spaces in AMS3 will stay in place to ensure high performance.



Learn more on [**Restrictions on Spaces in AMS3 Applied Until Datacenter Expansion Planned for Early 2020**](https://docs.digitalocean.com/release-notes/upcoming/spaces-ams3/).


## July 2019

### 19 July

- We’ve disabled creating new Spaces in AMS3 until we complete maintenance on the datacenter as part of addressing Spaces performance concerns. [Learn more about Spaces AMS3 availability](https://docs.digitalocean.com/release-notes/upcoming/spaces-ams3/).


### 3 July

- The installation repo for the [metrics agent](https://docs.digitalocean.com/products/monitoring/how-to/install-metrics-agent/#install) has been moved to DigitalOcean Spaces.


## May 2019

### 9 May

- [Spaces](https://docs.digitalocean.com/products/spaces/) are now available in the Frankfurt (FRA1) region.


### 7 May

- Creating Spaces in NYC3 is now re-enabled.


## September 2018

### 27 September

- Released the [Spaces content delivery network (CDN)](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/).

- Deprecated the Spaces free trial.


### 10 September

- [Spaces](https://docs.digitalocean.com/products/spaces/#regional-availability) are now available in SFO2.


## June 2018

### 22 June

- [Spaces](https://docs.digitalocean.com/products/spaces/) will send billing data for active users within 2 hours of usage, down from a 4-5 day processing time. Previously, some users who were not billed for overages because of the processing delay may see their bill go up based on their actual usage.


## April 2018

### 17 April

- [Spaces](https://docs.digitalocean.com/products/spaces/) users no longer need to cancel their Spaces subscription via the Spaces UI when they want to stop using Spaces. Now, any time a Spaces user destroys their last Space, their pro-rated $5/month billing (if not in the free trial period) stops. Overage charges still apply if they were incurred before deletion of the last Space.


## February 2018

### 15 February

- Resolved an issue where some Spaces customers were being rate limited even though they were well below the [rate limiting threshold](https://docs.digitalocean.com/products/spaces/).


### 12 February

- Added improvements to reduce timeouts on the Spaces API.

- Number of days left in your [60-day Spaces free trial](https://docs.digitalocean.com/products/spaces/#plans-and-pricing) is now shown on trial opt-in page and on details window.


### 2 February

- [Deletion of a Space via the control panel is disallowed](https://docs.digitalocean.com/products/spaces/#limits) if there are 100,000 or more objects in the Space. Once the Space has less than 100,000 objects within, it can be deleted by the control panel.


## January 2018

### 29 January

- [Spaces](https://docs.digitalocean.com/products/spaces/) now support:


  - Version 4 of presigned URLs, allowing for easier use of 3rd party S3 compatible libraries.
  - Scheduled deletion of objects via bucket lifecycle methods in the Spaces API.
  - Previews of image, audio, and video files that are moused over in the control panel file browser.

### 25 January

- [Spaces](https://docs.digitalocean.com/products/spaces/) are now available in the Singapore (SGP1) region.


### 17 January

- Static site hosting and custom domains for Spaces have been released in private beta. Email [jgannon+static@do.co](mailto:jgannon+static@do.co) to participate.


In this article...

[Spaces](https://docs.digitalocean.com/release-notes/spaces/)

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