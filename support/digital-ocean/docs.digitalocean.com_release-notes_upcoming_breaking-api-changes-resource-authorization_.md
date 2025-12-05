---
url: "https://docs.digitalocean.com/release-notes/upcoming/breaking-api-changes-resource-authorization/"
title: "Breaking Change to Fix DigitalOcean API Incomplete Resource Authorization Issue | DigitalOcean Documentation"
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

- Breaking Change to Fix DigitalOcean API Incomplete Resource Authorization Issue

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Breaking Change to Fix DigitalOcean API Incomplete Resource Authorization Issue

Validated on 18 Jun 2025 • Last edited on 19 Jun 2025

## 3 April 2025

We have changed our approach so that this is no longer a breaking change:

- API tokens created before the fix retain the same functionality and access to the API. No action is required to continue using these tokens as before.

- All tokens created after the fix must have all necessary scopes to interact with resources, regardless of the endpoint.


We plan to implement the fix as part of [custom roles](https://docs.digitalocean.com/platform/teams/roles/custom/) becoming [generally available](https://docs.digitalocean.com/platform/product-lifecycle/).

## 20 February 2025

In April 2025, we are implementing a breaking change to the DigitalOcean API that fixes an incomplete resource authorization issue. You may need to recreate API tokens with additional scopes to retain the same functionality, depending on your use cases.

Currently, customers can use endpoints for one resource type to perform actions on other resource types, even if their API token lacks the necessary scopes for the other resource types. For example, using an API token that has [`droplet:create`](https://docs.digitalocean.com/platform/teams/roles/permissions/droplet/create/) but not [`tag:create`](https://docs.digitalocean.com/platform/teams/roles/permissions/tag/create/), you can call `POST /v2/droplets` to create a new tag along with the new Droplet.

When the fix is implemented, API tokens must have all necessary scopes to interact with resources, regardless of the endpoint.

Before April 2025, when this fix is implemented, you should:

- Find any instances where you’re using the DigitalOcean API to create, view, update, or delete resources of one type through endpoints for another resource type (like creating a tag while creating a Droplet).

- Based on those instances, [review the scopes on your API tokens](https://cloud.digitalocean.com/account/api/tokens). Your token needs to have all appropriate scopes to interact with those resources, regardless of the endpoint.

- If necessary, [create a new API token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) with the additional scopes you need, then update any token integrations with the new token and revoke the old token.


Existing tokens will continue to work until their assigned expiration, but will have appropriately restricted access based on their scopes.

In this article...

- [3 April 2025](https://docs.digitalocean.com/release-notes/upcoming/breaking-api-changes-resource-authorization/#3-april-2025)
- [20 February 2025](https://docs.digitalocean.com/release-notes/upcoming/breaking-api-changes-resource-authorization/#20-february-2025)

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