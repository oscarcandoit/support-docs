---
url: "https://docs.digitalocean.com/release-notes/load-balancers/"
title: " | DigitalOcean Documentation"
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
- Load Balancers

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Load Balancers Release Notes

Validated on 27 Mar 2025 • Last edited on 28 Mar 2024

## March 2025

### 27 March

- Network load balancers are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Network load balancers are regional load balancers that route traffic at the TCP/UDP transport level. Read [How to Create Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/) to get started.


## February 2025

### 28 February

- IPv6 support for regional external load balancers is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). You may now choose between IPv4-only or dual-stack IPv4 and IPv6 networking when you [create standalone load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/). All [DOKS regional HTTPS load balancers](https://docs.digitalocean.com/products/kubernetes/how-to/add-load-balancers/) created after 28 February 2025 are dual-stack. Network load balancers on DOKS do not support IPv6.

- Network load balancers are now in [public preview](https://cloud.digitalocean.com/account/feature-preview/). Network load balancers are regional load balancers that route traffic at the TCP/UDP transport level. You must opt-in to the [public preview](https://cloud.digitalocean.com/account/feature-preview/) to create network load balancers.


## December 2024

### 12 December

- Internal-only [regional load balancers](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#regional-load-balancers) are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Internal load balancers have no public IP address and are only accessible to resources in the same [VPC](https://docs.digitalocean.com/products/networking/vpc/) network. Read [How to Create Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/) for more details. To learn how to add internal load balancers to DOKS clusters, see [Configure Load Balancers](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/#internal-load-balancer) in the DOKS documentation.


## October 2024

### 15 October

- You can now create internal-only [regional load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/). Internal load balancers have no public IP address and are only accessible by resources in the same [VPC](https://docs.digitalocean.com/products/networking/vpc/). This feature is [currently in early availability](https://docs.digitalocean.com/platform/product-lifecycle/#early-availability) and only available through the [CLI](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/#create-a-load-balancer-using-the-cli) and [API](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/#create-a-load-balancer-using-the-api).


## September 2024

### 18 September

- The ability to connect DOKS clusters to [global load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create-global-load-balancer/) via [regional load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/) is now in [beta](https://docs.digitalocean.com/platform/product-lifecycle/#beta).

- [DigitalOcean Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create-global-load-balancer/) are now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Global load balancers allow you to distribute traffic to backend resources in different regions for high availability and performance.


## July 2024

### 8 July

- [DigitalOcean Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create-global-load-balancer/) are now in beta. Global load balancers allow you to distribute traffic to Droplets in different regions for high availability and performance.


## January 2023

### 24 January

- We have deprecated our legacy load balancer scaling system in all datacenter regions. This includes the deprecation of the `do-loadbalancer-size-slug` annotation for DigitalOcean Kubernetes load balancers.

[Horizontal scaling](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/) is now available in all regions.


## December 2022

### 6 December

- You can now [customize the amount of time](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#http-idle-timeout) a load balancer allows HTTP connections to remain idle before closing it. The maximum amount time you can set is 600 seconds (10 minutes).

Setting a custom time out length has no effect on HTTPS and HTTP/2 forwarding rules using TLS passthrough.


## November 2022

### 30 November

- [DigitalOcean Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#http3) and [DOKS load balancers](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/#http3-ports) now support the HTTP/3 protocol.


## July 2022

### 1 July

- The following pricing changes are now in effect:


  - A new $4 Droplet with 512MB of memory, 10GB of storage, 1 vCPU, and 500GB of outbound data transfer is now available in NYC1, FRA1, SFO3, SGP1, and AMS3. The slug is `s-1vcpu-512mb-10gb`.

  - We have simplified pricing for DigitalOcean Kubernetes and some managed databases for better accuracy and predictibility.

  - The prices of Droplets, Snapshots, Load Balancers, Reserved IPs, and Custom Images have increased.


There is no change to pricing for Spaces, backups, volumes, DigitalOcean Container Registry, or App Platform. There are also no changes to inbound data transfer or bandwidth pricing.

This is our first major price change in 10 years, and we believe the new model better fits our understanding of our customers and the expanded breadth of our offerings. For a more detailed breakdown of the changes, see [our blog post on our new pricing](https://www.digitalocean.com/blog/new-4-dollar-droplet-updated-pricing).

## June 2022

### 27 June

- To improve security, DigitalOcean no longer accepts TLS 1.0 and TLS 1.1 connections. This includes connections to `www.digitalocean.com`, `cloud.digitalocean.com`, and `api.digitalocean.com`.


### 15 June

- [UDP support](https://docs.digitalocean.com/products/networking/load-balancers/#protocol-support) is now available for all DigitalOcean Load Balancers. This includes UDP support for [DOKS load balancers](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/).

To use UDP for DOKS load balancers, clusters must use Kubernetes version `1.21.11-do.1`, `1.22.8-do.1`, or higher.


## April 2022

### 15 April

- We have started rolling out [UDP support](https://docs.digitalocean.com/products/networking/load-balancers/#protocol-support) for DigitalOcean Load Balancers. This includes UDP support for [DOKS load balancers](https://docs.digitalocean.com/products/kubernetes/how-to/configure-load-balancers/).


## January 2022

### 19 January

- Managed Let’s Encrypt certificates will begin using Elliptic Curve Digital Signature Algorithm (ECDSA) instead of RSA. ECDSA is equally secure and more computationally efficient than RSA. ECDSA certificates follow the shorter root chain and aren’t rooted using the [DST Root CA X3 cross-sign which expired on 30 September 2021](https://letsencrypt.org/docs/dst-root-ca-x3-expiration-september-2021/#:~:text=DST%20Root%20CA%20X3%20will,that%20use%20Let's%20Encrypt%20certificates.).

As we roll out this change, new Let’s Encrypt certificates provisioned for DigitalOcean [Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/) and [Spaces](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/) will increasingly use ECDSA and existing certificiates secured with RSA will be secured with ECDSA upon auto-renewal. This change doesn’t require any action from DigitalOcean customers.


### 10 January

- You can now [resize load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/) once per minute, instead of once per hour. The cost is prorated based on how long the load balancer operates at each size, with a minimum charge of $0.01.


## November 2021

### 9 November

- You can now [scale load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/) with more granularity by adding or removing nodes. The number of nodes a load balancer contains determines how many simultaneous connections and requests per second it can manage.

Each additional node increases the load balancer’s maximum:


  - Requests per second, up to 10,000
  - Simultaneous connections, up to 10,000
  - New SSL connections per second by 250 (or 50 for certificates using 4096-bit RSA keys)

You can add up to 200 nodes to a load balancer if your account limits allow it. To request a limit increase, [contact support](https://cloudsupport.digitalocean.com/).

## October 2021

### 27 October

- We have deprecated TLS DHE ciphers for all load balancers.


### 12 October

- Released [v1.65.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.65.0), the official DigitalOcean CLI. This release includes a number of new features:


  - The `--ha` flag was added to the `kubernetes cluster create` sub-command to optionally create a cluster configured with a highly-available control plane. This feature is in early availability
  - The `kubernetes cluster` sub-commands now include a “Support Features” field when displaying version options
  - The `--disable-lets-encrypt-dns-records` flag was added to the `compute load-balancer create` sub-command to optionally disable automatic DNS record creation for Let’s Encrypt certificates that are added to the load balancer

- You can now opt out of DigitalOcean automatically creating DNS records for Let’s Encrypt certificates during [SSL certificate creation](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/), [load balancer creation](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/), and [SSL forwarding rule management](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/).


## September 2021

### 21 September

- The [load balancer](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/#add-an-ssl-certificate) and [Spaces](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/#add-a-custom-subdomain) services now support [wildcard Let’s Encrypt certificates](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/).


## March 2021

### 16 March

- You can now [resize load balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/) to better match their performance to their workload.


### 1 March

- Fixed a bug with DigitalOcean Load Balancers that prevented outbound data transfer from Droplets from being added to bandwidth usage totals. Any inconsistencies will be updated on the April invoice.


## December 2020

### 7 December

- Load balancers now come in [small, medium, and large sizes](https://docs.digitalocean.com/products/networking/load-balancers/#plans-and-pricing). The larger the load balancer, the more simultaneous connections and requests per second it can manage. Existing load balancers are now considered “small” load balancers and are unaffected by this change.


## July 2020

### 8 July

- Load balancer health checks [now support the HTTPS protocol](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#health-checks). You can now configure load balancers to verify the health of your Droplets’ HTTPS endpoints.


## May 2020

### 5 May

- [v1.18.0](https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/CHANGELOG.md#1180-may-05-2020) of the DigitalOcean Terraform Provider is now available. This release includes support for the backend keepalive option for the load balancer resource and data source.


## April 2020

### 28 April

- Load balancers now allow you to set a [keepalive option](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#backend-keepalive) for target Droplets.

- The DigitalOcean [Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service is now available for all customers. VPC replaces the private networking service. Existing private networks will continue to function as normal but with the enhanced security and features of the VPC service. See the description of [VPC features](https://docs.digitalocean.com/products/networking/vpc/#features) for more information.


### 7 April

- We began the incremental release of the [DigitalOcean Virtual Private Cloud (VPC)](https://docs.digitalocean.com/products/networking/vpc/) service. It will be available for all customers soon. VPC replaces the private networking service.


## October 2019

### 23 October

- [DigitalOcean Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/) no longer support downgrading TLS connections to TLS 1.1.


## August 2019

### 20 August

- [DigitalOcean Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/) no longer support downgrading TLS connections to TLS 1.0. We will stop supporting TLS 1.1 later this year.


## March 2019

### 19 March

- [DigitalOcean Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/) now support PROXY protocol version 1.


## October 2018

### 1 October

- [Pricing for load balancers](https://docs.digitalocean.com/products/networking/load-balancers/#plans-and-pricing) has decreased from $20/month to $10/month.


## May 2018

### 8 May

- Load Balancers v1.5 is [released to general availability](https://blog.digitalocean.com/introducing-load-balancer-upgrades/) in all regions, including backend upgrades, Let’s Encrypt Integration, and HTTP/2 Support.


In this article...

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