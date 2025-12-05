---
url: "https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/"
title: "deployments | DigitalOcean Documentation"
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
      - [Install Gradient CLI & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/install/)
      - [Command Reference](https://docs.digitalocean.com/reference/paperspace/gradient/commands/)
        - [clusters](https://docs.digitalocean.com/reference/paperspace/gradient/commands/clusters/)
        - [datasets](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/)
        - [deployments](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/)
        - [models](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/)
        - [notebooks](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/)
        - [projects](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/)
        - [secrets](https://docs.digitalocean.com/reference/paperspace/gradient/commands/secrets/)
        - [storage-providers](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/)
        - [workflows](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/)
    - [Core API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/core/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
- [Command Reference](https://docs.digitalocean.com/reference/paperspace/gradient/commands/)
- deployments

[Give Feedback](https://ideas.digitalocean.com/documentation)

# deployments

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Gradient API endpoints are deprecated and no longer available for Paperspace users.


## create

Create a deployment

#### Examples

CLI

```bash
gradient deployments create \
  --name "New Deployment" \
  --projectId "prjpkflqz" \
  --spec "deployment-spec.yaml"
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--name` | string | required | Deployment name |
| `--projectId` | string | required | Project ID |
| `--spec` | string | required | Path to a deployment spec file |
| `--clusterId` | string | optional | Cluster ID |
| `--apiKey` | string | optional | API key to use this time only |

#### Response

```text
Created deployment: 3ba79e98-0ead-42d1-9a8d-caa01dffe11b
```

## get

Get a deployment

#### Examples

CLI

```bash
gradient deployments get \
  --id "3b093c22-ebe8-4316-a9ff-90cac17ef6cf"
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Deployment ID |
| `--apiKey` | string | optional | API key to use this time only |

#### Response

```json
{
  "id": "3b093c22-ebe8-4316-a9ff-90cac17ef6cf",
  "name": "New Deployment",
  "deploymentSpecs": [\
    {\
      "id": "dd8b8f94-86e7-44e4-aa94-411b978ff523",\
      "data": {\
        "image": "lucone83/streamlit-nginx",\
        "port": 8080,\
        "resources": {\
          "instanceType": "C4",\
          "replicas": 1\
        },\
        "command": null,\
        "env": [\
          {\
            "name": "ENV",\
            "value": "VAR"\
          }\
        ],\
        "models": null\
      },\
      "endpointUrl": "d3b093c22ebe84316a9ff90cac17ef6cf.clg07azjl.paperspacegradient.com",\
      "actor": {\
        "avatarUrl": null,\
        "fullName": null\
      },\
      "cluster": {\
        "id": "clg07azjl"\
      },\
      "deploymentRuns": [\
        {\
          "id": "68d3ea2a-1b3a-4cb1-9bdd-a71dac724cb9",\
          "availableReplicas": 1,\
          "readyReplicas": 1,\
          "replicas": 1,\
          "deploymentRunInstances": [\
            {\
              "id": "f59d4292-4bf0-41be-a7c9-29494b5a5c1c",\
              "phase": "Running",\
              "dtStarted": "2022-03-15T01:04:18.000Z",\
              "dtFinished": null\
            }\
          ]\
        }\
      ]\
    }\
  ]
}
```

## list

List deployments

#### Examples

CLI

```bash
gradient deployments list
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--apiKey` | string | optional | API key to use this time only |

#### Response

```text
+----------------+--------------------------------------+
| Name           | ID                                   |
+----------------+--------------------------------------+
| New Deployment | 3b093c22-ebe8-4316-a9ff-90cac17ef6cf |
+----------------+--------------------------------------+
```

## update

Update a deployment

#### Examples

CLI

```bash
gradient deployments update \
  --id "3b093c22-ebe8-4316-a9ff-90cac17ef6cf" \
  --name "New Deployment Name"
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Deployment ID |
| `--name` | string | optional | Deployment name |
| `--projectId` | string | optional | Project ID |
| `--clusterId` | string | optional | Cluster ID |
| `--spec` | string | optional | Path to a deployment spec file |
| `--apiKey` | string | optional | API key to use this time only |

#### Response

```text
Updated deployment: 3b093c22-ebe8-4316-a9ff-90cac17ef6cf
```

## delete

Delete a deployment

#### Examples

CLI

```bash
gradient deployments delete \
  --id "3b093c22-ebe8-4316-a9ff-90cac17ef6cf"
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Deployment ID |
| `--apiKey` | string | optional | API key to use this time only |

#### Response

```text
Deleted deployment: 3b093c22-ebe8-4316-a9ff-90cac17ef6cf
```

In this article...

- [create](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#create)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#examples)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#options)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#response)
- [get](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#get)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#examples-1)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#options-1)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#response-1)
- [list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#examples-2)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#options-2)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#response-2)
- [update](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#update)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#examples-3)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#options-3)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#response-3)
- [delete](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#delete)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#examples-4)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#options-4)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/deployments/#response-4)

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