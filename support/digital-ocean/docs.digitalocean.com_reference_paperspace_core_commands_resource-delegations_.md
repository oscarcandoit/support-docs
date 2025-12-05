---
url: "https://docs.digitalocean.com/reference/paperspace/core/commands/resource-delegations/"
title: "resourceDelegations | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
  - [API Keys](https://docs.digitalocean.com/reference/paperspace/api-keys/)
  - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
  - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
  - [Legacy Tools](https://docs.digitalocean.com/reference/paperspace/legacy/)
    - [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
    - [Core API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/core/)
      - [Install Core CLI & SDK](https://docs.digitalocean.com/reference/paperspace/core/install/)
      - [Command Reference](https://docs.digitalocean.com/reference/paperspace/core/commands/)
        - [machines](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/)
        - [networks](https://docs.digitalocean.com/reference/paperspace/core/commands/networks/)
        - [resourceDelegations](https://docs.digitalocean.com/reference/paperspace/core/commands/resource-delegations/)
        - [shared drives](https://docs.digitalocean.com/reference/paperspace/core/commands/shared-drives/)
        - [templates](https://docs.digitalocean.com/reference/paperspace/core/commands/templates/)
        - [users](https://docs.digitalocean.com/reference/paperspace/core/commands/users/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Core API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/core/)
- [Command Reference](https://docs.digitalocean.com/reference/paperspace/core/commands/)
- resourceDelegations

[Give Feedback](https://ideas.digitalocean.com/documentation)

# resourceDelegations

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Core API endpoints are deprecated and no longer available for Paperspace users.


Create `resourceDelegations` with limited access, for example for users who needs to stream a machine you created. The create method takes a delegation object as the only argument with resource name as key and an object with ids to list resource ids to give access to.

Note
Resource delegations expire after 4 hours.

## create

#### Examples

CLI

```bash
paperspace resourceDelegations create \
  --machine '{ "ids": ["psec02yp2"] }' \
  --apiKey "edc20a51d9b2145..."
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/resourceDelegations/create' \
-H 'X-Api-Key: edc20a51d9b2145...' \
-H 'Content-Type: application/json' \
--data-raw '{
  "machine": {
    "ids": ["psec02yp2"]
  }
}'
```

Node

```js
var delegation = {
  machine: {
    ids: ["psec02yp2"],
  },
};
paperspace.resourceDelegations.create(delegation, function (err, res) {
  // handle error or result
});
```

#### Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `machine` | object | optional | Optional resource ‘machine’ to grant access to. |
| `ids` | array | optional | Optional list of machine ids to grant access to. |

#### Response

Type `object`

```json
{
  "delegation": {
    "machine": {
      "ids": ["psec02yp2"]
    }
  },
  "isEnabled": true,
  "accessTokenId": "resource-delegation-token-34d7e42302bf7c69013eb0e778991d21587fb73ba1d127608d0625a46d5b",
  "dtCreated": "2022-03-14T18:57:12.986Z",
  "id": 500908
}
```

In this article...

- [create](https://docs.digitalocean.com/reference/paperspace/core/commands/resource-delegations/#create)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/resource-delegations/#examples)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/resource-delegations/#parameters)
  - [Response](https://docs.digitalocean.com/reference/paperspace/core/commands/resource-delegations/#response)

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