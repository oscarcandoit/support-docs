---
url: "https://docs.digitalocean.com/release-notes/volumes/"
title: "Volumes | DigitalOcean Documentation"
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
- Volumes

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Volumes Release Notes

Validated on 29 Aug 2024

## August 2024

### 29 August

- We have increased the volume attach limit for DOKS nodes from 7 to 15.


### 12 August

- We have increased the volume attach limit for Droplets from 7 to 15. The limit for DOKS nodes is still 7, but we’re working to increase this as well.


## March 2023

### 9 March

- We have finished rolling out NVMe for volumes in all regions. Newly-created volumes in all regions are now on NVMe-based storage.


## October 2022

### 7 October

- The IOPS and throughput limits for volumes are now 50% higher. For a list of the new limits by Droplet type, see our [updated limits page](https://docs.digitalocean.com/products/volumes/details/limits/). To reach the new limits, you must power cycle the Droplet with the attached volume or detach and reattach the volume.


## July 2022

### 12 July

- Newly-created volumes in NYC1, NYC3, SFO2, SFO3, FRA1, SGP1, LON1, and AMS3 are now on NVMe-based storage. Most existing volumes and volumes in BLR1 and TOR1 remain on SSD-based storage. We’re continuing to roll out NVMe across all volumes in all regions. In the interim, you can migrate volumes using `rsync` or similar tools to copy data.


## June 2022

### 27 June

- To improve security, DigitalOcean no longer accepts TLS 1.0 and TLS 1.1 connections. This includes connections to `www.digitalocean.com`, `cloud.digitalocean.com`, and `api.digitalocean.com`.


## August 2019

### 26 August

- Volume limits for verified accounts have been raised from 10 volumes per account/500 GB of volume data per region to 100 volumes per account/16 TB per region. Unverified accounts are still limited to 10 volumes/500 GB. Learn more about [account verification](https://docs.digitalocean.com/platform/accounts/#verification).


### 19 August

- Began the incremental release of new [block storage volume](https://docs.digitalocean.com/products/volumes/) limits. By the end of the release, all verified accounts will be able to create up to 100 volumes or use a total of 16 TB of volume data per region. Unverified accounts will be allowed 10 volumes or to use a total of 500 GB per region.

- You can now create a maximum of one snapshot of a volume every 10 minutes. See [the snapshots overview](https://docs.digitalocean.com/products/snapshots/) for more details.


## May 2018

### 22 May

- Volumes for Ubuntu, Fedora, Debian 8+, CentOS, and Fedora Atomic can be [automatically formatted and mounted](https://docs.digitalocean.com/products/volumes/how-to/create/#format-and-mount-volumes) when they are created.


## April 2018

### 30 April

- Burst support rolled out to all nine [block storage](https://docs.digitalocean.com/products/volumes/) regions.

**Performance Expectations**



| Droplet Type | IOPS | Throughput |
| --- | --- | --- |
| Standard | 5K | 200 MB/s |
| Std (Burst) | 7.5K | 300 MB/s |
| Optimized | 7.5K | 300 MB/s |
| Optimized (Burst) | 10K | 350 MB/s |


## February 2018

### 6 February

- We have upgraded the [block storage](https://docs.digitalocean.com/products/volumes/) clusters in Bangalore and London to Ceph Luminous, reducing median cluster latency by 50%.


## January 2018

### 9 January

- With the release in AMS3, we now have [volumes](https://docs.digitalocean.com/products/volumes/#regional-availability) in all regions.


In this article...

[Volumes](https://docs.digitalocean.com/release-notes/volumes/)

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