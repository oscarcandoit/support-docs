---
url: "https://docs.digitalocean.com/platform/regional-availability/"
title: "Regional Availability | DigitalOcean Documentation"
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

- Regional Availability

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Regional Availability

Validated on 26 Sep 2024 • Last edited on 20 Nov 2025

DigitalOcean has 13 datacenters across nine regions. Paperspace has three datacenters across three regions.

DigitalOcean Datacenters

The following table lists each DigitalOcean datacenter, its region, and its [API](https://docs.digitalocean.com/reference/api/)/ [CLI](https://docs.digitalocean.com/reference/doctl/) slug:

| Datacenter | Region | Slug |
| --- | --- | --- |
| NYC1 | New York City, United States | `nyc1` |
| NYC2 | New York City, United States | `nyc2` |
| NYC3 | New York City, United States | `nyc3` |
| AMS3 | Amsterdam, the Netherlands | `ams3` |
| SFO2 | San Francisco, United States | `sfo2` |
| SFO3 | San Francisco, United States | `sfo3` |
| SGP1 | Singapore | `sgp1` |
| LON1 | London, United Kingdom | `lon1` |
| FRA1 | Frankfurt, Germany | `fra1` |
| TOR1 | Toronto, Canada | `tor1` |
| BLR1 | Bangalore, India | `blr1` |
| SYD1 | Sydney, Australia | `syd1` |
| ATL1 | Atlanta, United States | `atl1` |

DigitalOcean additionally has two legacy datacenters, AMS2 and SFO1. However, we have restricted resource creation in legacy datacenters because they have no remaining physical space to expand.

Users who have existing Droplets in these datacenters can continue to create additional Droplets there, but we strongly recommend using another datacenter in the same geographical region, like AMS3, NYC3, or SFO3.

Paperspace Datacenters

The following table lists each Paperspace datacenter and its region:

| Datacenter | Region |
| --- | --- |
| NY2 | United States, near New York City, NY |
| CA1 | United States, near Santa Clara, CA |
| AMS1 | The Netherlands, near Amsterdam |

You can check the status of Paperspace datacenters on the [Paperspace status page](https://status.paperspace.com/).

The tables below summarize our product availability using the following key:

- **Full availability**. All users can create this resource in this datacenter.

- **Limited availability**. There may be limited capacity in this datacenter, or the product may be in an earlier phase of [the product lifecycle](https://docs.digitalocean.com/platform/product-lifecycle/). Hover for a tooltip with more information.

- **Future availability**. We intend to offer the product in this datacenter in the future, but don’t currently. Hover for a tooltip with more information.


## Droplets

| Droplet Plans | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Basic |  |  |  |  |  |  |  |  |  |  |  |  |  |
| General Purpose |  |  |  |  |  |  |  |  |  |  |  |  |  |
| CPU-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Memory-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Storage-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |

## GPU Droplets

| GPU Droplet Plans | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AMD Instinct MI300X |  |  |  |  |  |  |  |  |  |  |  |  |  |
| AMD Instinct MI325X |  |  |  |  |  |  |  |  |  |  |  |  |  |
| NVIDIA H100 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| NVIDIA H200 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| NVIDIA L40S |  |  |  |  |  |  |  |  |  |  |  |  |  |
| NVIDIA RTX 4000 Ada |  |  |  |  |  |  |  |  |  |  |  |  |  |
| NVIDIA RTX 6000 Ada |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Droplet Backups

| Droplet Backups | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Weekly |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Daily |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Managed Databases

| Database Engine | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PostgreSQL |  |  |  |  |  |  |  |  |  |  |  |  |  |
| MySQL |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Caching |  |  |  |  |  |  |  |  |  |  |  |  |  |
| MongoDB |  |  |  |  |  |  |  |  |  |  |  |  |  |
| OpenSearch |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Kafka |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Valkey |  |  |  |  |  |  |  |  |  |  |  |  |  |

MySQL

| MySQL Machine Type | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Shared CPU |  |  |  |  |  |  |  |  |  |  |  |  |  |
| General Purpose |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Storage-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Memory-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |

PostgreSQL

| PostgreSQL Machine Type | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Shared CPU |  |  |  |  |  |  |  |  |  |  |  |  |  |
| General Purpose |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Storage-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Memory-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |

Caching

| Caching Machine Type | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Shared CPU |  |  |  |  |  |  |  |  |  |  |  |  |  |
| General Purpose |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Storage-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Memory-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |

MongoDB

| MongoDB Machine Type | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Shared CPU |  |  |  |  |  |  |  |  |  |  |  |  |  |
| General Purpose |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Storage-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Memory-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |

Kafka

| Kafka Machine Type | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Shared CPU |  |  |  |  |  |  |  |  |  |  |  |  |  |
| General Purpose |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Storage-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Memory-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |

OpenSearch

| OpenSearch Machine Type | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Shared CPU |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Memory-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |

Valkey

| Valkey Machine Type | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Shared CPU |  |  |  |  |  |  |  |  |  |  |  |  |  |
| General Purpose |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Storage-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Memory-Optimized |  |  |  |  |  |  |  |  |  |  |  |  |  |

## App Platform

Availability on App Platform is by region, not by datacenter. The Cloudflare CDN caches static sites globally and routes cache misses to the serving region.

| App Type | NYC | AMS | SFO | SGP | LON | FRA | TOR | BLR | SYD | ATL |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dynamic |  |  |  |  |  |  |  |  |  |  |
| Static Site |  |  |  |  |  |  |  |  |  |  |

## DigitalOcean Kubernetes

| DigitalOcean Kubernetes (DOKS) | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DOKS Clusters |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Shared CPU Worker Nodes |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Dedicated CPU Worker Nodes |  |  |  |  |  |  |  |  |  |  |  |  |  |
| GPU Worker Nodes |  |  |  |  |  |  |  |  |  |  |  |  |  |

## DigitalOcean Load Balancers

| Load Balancers | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Regional |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Global |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Virtual Private Cloud (VPC)

| Feature | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Networking |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Peering Within DCs |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Peering Between DCs |  |  |  |  |  |  |  |  |  |  |  |  |  |
| NAT Gateway |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Feature | NYC | AMS | SFO | SGP | LON | FRA | TOR | BLR | SYD | ATL |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Partner Network Connect |  |  |  |  |  |  |  |  |  |  |

## Other DigitalOcean Products

| Product | NYC1 | NYC2 | NYC3 | AMS3 | SFO2 | SFO3 | SGP1 | LON1 | FRA1 | TOR1 | BLR1 | SYD1 | ATL1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Volumes |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Spaces |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Network File Storage |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Container Registry |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Functions |  |  |  |  |  |  |  |  |  |  |  |  |  |

Gradient AI Bare Metal GPUs are available in the AMS and NYC regions.

## Paperspace Products

Paperspace products are available in the following Paperspace datacenters:

| Paperspace Product | NY2 | AMS1 | CA1 |
| --- | --- | --- | --- |
| Machines |  |  |  |
| Notebooks |  |  |  |
| Deployments |  |  |  |
| Workflows |  |  |  |

Paperspace’s CPU machines are available in all Paperspace datacenter regions. Paperspace’s GPU machines are available in the following Paperspace datacenters:

| GPU Machine | NY2 | AMS1 | CA1 |
| --- | --- | --- | --- |
| GPU+ (M4000) |  |  |  |
| P4000 |  |  |  |
| P5000 |  |  |  |
| P6000 |  |  |  |
| RTX4000 |  |  |  |
| RTX5000 |  |  |  |
| A4000 |  |  |  |
| A5000 |  |  |  |
| A6000 |  |  |  |
| V100 |  |  |  |
| V100-32G |  |  |  |
| A100 |  |  |  |
| A100-80G |  |  |  |
| H100 |  |  |  |

In this article...

- [Droplets](https://docs.digitalocean.com/platform/regional-availability/#droplets)
- [GPU Droplets](https://docs.digitalocean.com/platform/regional-availability/#gpu-droplets)
- [Droplet Backups](https://docs.digitalocean.com/platform/regional-availability/#droplet-backups)
- [Managed Databases](https://docs.digitalocean.com/platform/regional-availability/#managed-databases)
- [App Platform](https://docs.digitalocean.com/platform/regional-availability/#app-platform)
- [DigitalOcean Kubernetes](https://docs.digitalocean.com/platform/regional-availability/#digitalocean-kubernetes)
- [DigitalOcean Load Balancers](https://docs.digitalocean.com/platform/regional-availability/#digitalocean-load-balancers)
- [Virtual Private Cloud (VPC)](https://docs.digitalocean.com/platform/regional-availability/#virtual-private-cloud-vpc)
- [Other DigitalOcean Products](https://docs.digitalocean.com/platform/regional-availability/#other-digitalocean-products)
- [Paperspace Products](https://docs.digitalocean.com/platform/regional-availability/#paperspace-products)

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