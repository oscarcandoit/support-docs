---
url: "https://docs.digitalocean.com/release-notes/container-registry/"
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
- Container Registry

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Container Registry Release Notes

Validated on 17 Nov 2025 • Last edited on 27 Sep 2023

## November 2025

### 17 November

- Support for multiple registries when using the [Professional subscription plan](https://docs.digitalocean.com/products/container-registry/details/pricing/) is now in [general availability](https://docs.digitalocean.com/platform/product-lifecycle/). You can create the registries using the [DigitalOcean Control Panel](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-additional-container-registries-using-the-control-panel), [CLI](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-a-container-registry-using-the-cli), or [API](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-container-registry-using-the-api).


## September 2025

### 29 September

- We have increased the size limit of images from 5 GB to 20 GB with a maximum size of 5 GB per image layer.


## June 2025

### 11 June

- If your container registry uses the [Professional subscription plan](https://docs.digitalocean.com/products/container-registry/details/pricing/), you can now create up to nine additional registries (for a total maximum of 10) per team using the [DigitalOcean Control Panel](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-additional-container-registries-using-the-control-panel) or [API](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/#create-container-registry-using-the-api). You can create these registries in different regions and the storage is shared among them. This feature is in [public preview](https://docs.digitalocean.com/platform/product-lifecycle/).


## August 2024

### 1 August

- The API call to [get Docker credentials for DOCR](https://docs.digitalocean.com/reference/api/digitalocean/#operation/registry_get_dockerCredentials) now requires the permission `registry:update` instead of `registry:create`.


## November 2023

### 14 November

- You can now [deploy container images to App Platform using digests](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#deploy-container-using-an-image-digest). Digests are immutable references to container images. Unlike tags, digests permanently refer to a specific iteration of an image.

You can only deploy an image using a digest by updating your app’s spec at this time.


## October 2023

### 20 October

- DigitalOcean Container Registry (DOCR) is now available in BLR1. You can view the availability of all of our products by datacenter in the [regional availability page](https://docs.digitalocean.com/platform/regional-availability/).


## June 2022

### 27 June

- To improve security, DigitalOcean no longer accepts TLS 1.0 and TLS 1.1 connections. This includes connections to `www.digitalocean.com`, `cloud.digitalocean.com`, and `api.digitalocean.com`.


## March 2022

### 9 March

- When [creating a Container Registry](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/#create-a-registry), you can now choose one of the following [datacenter regions](https://docs.digitalocean.com/platform/regional-availability/) to host it in: NYC3, SFO3, AMS3, SGP1, and FRA1. However, you cannot change a registry’s datacenter after creation.


## November 2021

### 30 November

- You can now optimize your storage space in Container Registry with [garbage collection](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/) and [more management options for images and tags](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/#manage-images).


## January 2021

### 5 January

- You can now do the following on [App Platform](https://docs.digitalocean.com/products/app-platform/):


  - [Deploy apps from a registry that has been uploaded to a DigitalOcean Container Registry](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/).

  - Deploy apps from source code contained in a GitLab repository.

  - [Edit CORS policies](https://docs.digitalocean.com/products/app-platform/how-to/configure-cors-policies/) for your app.


## November 2020

### 24 November

- Released [v1.53.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.53.0), the official DigitalOcean CLI. This release adds support for container registry garbage collection of untagged manifests.


### 2 November

- DigitalOcean Container Registry is now in [General Availability](https://docs.digitalocean.com/platform/product-lifecycle/#general-availability). Highlights include:


  - Three [subscription plans](https://docs.digitalocean.com/products/container-registry/#plans-and-pricing) that offer different allowances for repositories, storage, and bandwidth
  - 1-click method to [configure DigitalOcean Kubernetes Cluster to use the registry](https://docs.digitalocean.com/products/container-registry/how-to/use-registry-docker-kubernetes/#add-secret-control-panel)
  - [Garbage collection](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/) using the command line or the API
  - Ability to see the current storage usage in the control panel

## April 2020

### 28 April

- Released [v1.43.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.43.0), the official DigitalOcean CLI. This release updates container registry features from beta to early access.


### 23 April

- Released [v1.42.0 of doctl](https://github.com/digitalocean/doctl/releases/tag/v1.42.0), the official DigitalOcean CLI. This release includes a number of small UI improvements and support for additional container registry beta features.


## November 2019

### 19 November

- DigitalOcean Container Registry has been released in Beta. To request early access, visit [the homepage for Container Registry](https://www.digitalocean.com/products/container-registry/).


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

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices