---
url: "https://docs.digitalocean.com/reference/paperspace/core/commands/templates/"
title: "templates | DigitalOcean Documentation"
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
- templates

[Give Feedback](https://ideas.digitalocean.com/documentation)

# templates

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Core API endpoints are deprecated and no longer available for Paperspace users.


## list

#### Examples

CLI

```bash
paperspace templates list \
  --apiKey "edc20a51d9b2145..."
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/templates/getTemplates' \
-H 'X-Api-Key: edc20a51d9b2145...'
```

Node

```js
paperspace.templates.list(function (err, res) {
  // handle error or result
});
```

#### Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `id` | string | optional | template id to match on |
| `name` | string | optional | name to match on |
| `label` | string | optional | label to match on |
| `os` | string | optional | OS to match on |
| `dtCreated` | string | optional | datetime created value to match on |
| `teamId` | string | optional | teamId to match on |
| `userId` | string | optional | userId to match on |
| `region` | string | optional | region to match on |

#### Response

```json
[\
  {\
    "id": "ta1b3le7",\
    "name": "paperspace/ta1b3le7",\
    "label": "Windows 10 Pro",\
    "os": "Windows 10 (Pro) - Unlicensed",\
    "dtCreated": "2019-05-31T15:46:57.423Z"\
  },\
  {\
    "id": "tpx5mr6b",\
    "name": "paperspace/tpx5mr6b",\
    "label": "RStudio",\
    "os": "Ubuntu 16.04 Desktop",\
    "dtCreated": "2018-04-06T02:55:42.105Z"\
  },\
  {\
    "id": "t9taj00e",\
    "name": "paperspace/t9taj00e",\
    "label": null,\
    "os": "Centos 7 Server",\
    "dtCreated": "2022-01-23T20:47:06.707Z"\
  },\
  {\
    "id": "tz0ireoj",\
    "name": "paperspace/tz0ireoj",\
    "label": "Ubuntu 20.04 Desktop",\
    "os": "Ubuntu 20.04 Desktop",\
    "dtCreated": "2021-10-21T05:52:13.579Z"\
  },\
  {\
    "id": "tv00h6iv",\
    "name": "paperspace/tv00h6iv",\
    "label": "Windows 2012 R2 Grid",\
    "os": "Windows 2012 R2 - Licensed",\
    "dtCreated": "2020-07-30T17:34:04.385Z"\
  },\
  {\
    "id": "tnr2oh1m",\
    "name": "paperspace/tnr2oh1m",\
    "label": "Windows 10",\
    "os": "Windows 10 (Server 2022) - Licensed",\
    "dtCreated": "2021-04-08T16:39:03.908Z"\
  },\
  {\
    "id": "tzd1e8km",\
    "name": "paperspace/tzd1e8km",\
    "label": "Fast.ai",\
    "os": "Ubuntu 16.04 Server",\
    "dtCreated": "2020-03-16T03:55:18.513Z"\
  },\
  {\
    "id": "tmun4o2g",\
    "name": "paperspace/tmun4o2g",\
    "label": "Ubuntu 18.04 GPU Worker Cuda 11",\
    "os": "Ubuntu 18.04 Server",\
    "dtCreated": "2020-06-21T20:35:00.467Z"\
  },\
  {\
    "id": "tkni3aa4",\
    "name": "paperspace/tkni3aa4",\
    "label": "Ubuntu 20.04 Server",\
    "os": "Ubuntu 20.04 Server",\
    "dtCreated": "2021-10-20T00:50:49.780Z"\
  },\
  {\
    "id": "t04azgph",\
    "name": "paperspace/t04azgph",\
    "label": "Ubuntu 18.04 Server",\
    "os": "Ubuntu 18.04 Server",\
    "dtCreated": "2018-06-15T06:00:34.531Z"\
  },\
  {\
    "id": "tpi7gqht",\
    "name": "paperspace/tpi7gqht",\
    "label": "Ubuntu 18.04 CPU Worker",\
    "os": "Ubuntu 18.04 Server",\
    "dtCreated": "2020-07-08T18:18:08.248Z"\
  },\
  {\
    "id": "twnlo3zj",\
    "name": "paperspace/twnlo3zj",\
    "label": "Ml in a Box 20.04",\
    "os": "Ubuntu 20.04 MLiaB",\
    "dtCreated": "2021-10-14T23:50:00.225Z"\
  },\
  {\
    "id": "tl1h5hec",\
    "name": "paperspace/tl1h5hec",\
    "label": "Windows 10 Pro",\
    "os": "Windows 10 (Pro) - Unlicensed",\
    "dtCreated": "2019-05-16T17:41:22.919Z"\
  },\
  {\
    "id": "tk9izniv",\
    "name": "paperspace/tk9izniv",\
    "label": "Windows 10",\
    "os": "Windows 10 (Server 2022) - Licensed",\
    "dtCreated": "2019-02-08T17:59:04.036Z"\
  },\
  {\
    "id": "taoz1uxr",\
    "name": "paperspace/taoz1uxr",\
    "label": "Windows 10",\
    "os": "Windows 10 (Server 2022) - Licensed",\
    "dtCreated": "2019-02-08T18:00:34.729Z"\
  }\
]
```

In this article...

- [list](https://docs.digitalocean.com/reference/paperspace/core/commands/templates/#list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/templates/#examples)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/templates/#parameters)
  - [Response](https://docs.digitalocean.com/reference/paperspace/core/commands/templates/#response)

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