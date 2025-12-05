---
url: "https://docs.digitalocean.com/release-notes/upcoming/spaces-ams3/"
title: "Restrictions on Spaces in AMS3 Applied Until Datacenter Expansion Planned for Early 2020 | DigitalOcean Documentation"
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

- Restrictions on Spaces in AMS3 Applied Until Datacenter Expansion Planned for Early 2020

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Restrictions on Spaces in AMS3 Applied Until Datacenter Expansion Planned for Early 2020

Validated on 12 Nov 2021 • Last edited on 20 Feb 2024

## 12 Nov 2021

We have removed the daily allowance and rate limits for uploads to Spaces in AMS3

## 11 Mar 2020

We have completed the AMS3 expansion and reenabled the creation of new Spaces in AMS3. The allowance and rate limits on uploads to Spaces in AMS3 will stay in place to ensure high performance.

## 3 Mar 2020

Our storage engineering team has finished building and deploying the AMS3 expansion. The majority of the work is complete, and our engineers are now completing pre-release testing.

We expect to finish our final tests soon, at which point we will remove restrictions on Spaces in AMS3. We will continue to update this page with progress.

## 4 Dec 2019

Due to unforeseen delays, we were not able complete AMS3’s capacity expansion by November as originally planned.

Our revised timeline for completing the region’s new cluster deployment is February 2020, at which point we’ll lift the temporary limits on upload allowance and bandwidth rates and reenable the creation of new Spaces in AMS3.

## 5 Aug 2019

Starting in September, we are applying an allowance and bandwidth rate limit on uploads to existing Spaces in AMS3:

- Uploading up to 150 GB of data in 24 hours is unthrottled.

- If uploads to a bucket exceed 150 GB of data in 24 hours, that bucket’s upload bandwidth is gradually throttled until its 24-hour accumulated uploads return to 150 GB or less.

- If uploads to a bucket exceed 270 GB of data in 24 hours, that bucket’s upload bandwidth is set to 1MB/s for the next 24 hours.


The upload allowance and rate limiting will remain in place until the datacenter expansion later this year.

## 19 July 2019

Over the last few weeks, some customers have reported intermittent performance issues with Spaces in AMS3. Our engineering team identified two primary causes: the way the cluster manages available system memory and the overall load on the cluster.

We’re taking the following actions:

- On **4 June**, we deployed a fix that resolves the memory management issues.

- Starting at **9 PM UTC on 19 July**, we will be performing maintenance on the cluster to alleviate the load issues. We will be temporarily disabling the creation of new Spaces in AMS3 until this maintenance is complete.

During the maintenance, existing Spaces in AMS3 will continue to serve content as normal, and you can still create new Spaces in [any other Spaces-compatible datacenter](https://docs.digitalocean.com/products/spaces/#regional-availability).

- Starting at **9 PM UTC on 19 July**, we may also selectively throttle some operations from Spaces in AMS3 for a limited number of customer accounts.

This will not affect most accounts, and we will reach out beforehand if we identify your Space as a candidate.

- In **November of this year**, we plan to expand AMS3’s capacity as a long-term solution to handle the cluster’s load.


We will continue to update this page with our progress on the AMS3 maintenance and expansion.

In this article...

- [12 Nov 2021](https://docs.digitalocean.com/release-notes/upcoming/spaces-ams3/#12-nov-2021)
- [11 Mar 2020](https://docs.digitalocean.com/release-notes/upcoming/spaces-ams3/#11-mar-2020)
- [3 Mar 2020](https://docs.digitalocean.com/release-notes/upcoming/spaces-ams3/#3-mar-2020)
- [4 Dec 2019](https://docs.digitalocean.com/release-notes/upcoming/spaces-ams3/#4-dec-2019)
- [5 Aug 2019](https://docs.digitalocean.com/release-notes/upcoming/spaces-ams3/#5-aug-2019)
- [19 July 2019](https://docs.digitalocean.com/release-notes/upcoming/spaces-ams3/#19-july-2019)

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