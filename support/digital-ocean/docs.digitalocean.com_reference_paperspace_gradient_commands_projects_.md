---
url: "https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/"
title: "projects | DigitalOcean Documentation"
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
- projects

[Give Feedback](https://ideas.digitalocean.com/documentation)

# projects

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Gradient API endpoints are deprecated and no longer available for Paperspace users.


## create

Create new project

#### Examples

CLI

```bash
gradient projects create \
  --name "New Project"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/projects' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "name": "New Project"
}'
```

Python

```python
from gradient import ProjectsClient

api_key='d44808a2785d6a...'

projects_client = ProjectsClient(api_key)

print(projects_client.create(
    name='New Project'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--name` | string | required | Project name |
| `--repositoryName` | string | optional | Name of the repository |
| `--repositoryUrl` | string | optional | URL to the repository |
| `--tag` | string | optional | One or many tags that you want to add |
| `--tags` | string | optional | Tags separated by comma |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Project created with ID: prmximcci
https://console.paperspace.com/paperspace-docs-team/projects/prmximcci
```

cURL

```json
{
  "name": "New Project",
  "handle": "prmximcci",
  "dtCreated": "2022-03-22T06:34:52.360Z",
  "dtDeleted": null,
  "lastJobSeqNum": 0,
  "repoNodeId": null,
  "repoName": null,
  "repoUrl": null
}
```

Python

```text
prmximcci
```

## details

Show details of a project

#### Examples

CLI

```bash
gradient projects details \
  --id "prmximcci"
```

cURL

```bash
curl -g -X GET 'https://api.paperspace.io/projects/?filter={"where":{"handle":"prmximcci"}}' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import ProjectsClient

api_key='d44808a2785d6a...'

projects_client = ProjectsClient(api_key)

print(projects_client.get(
    project_id='prmximcci'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Project ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+-----------------+-------------+
| Name            | New Project |
+-----------------+-------------+
| ID              | prmximcci   |
| Repository name | None        |
| Repository url  | None        |
| Tags            |             |
+-----------------+-------------+
```

cURL

```json
{
  "data": [\
    {\
      "name": "New Project",\
      "handle": "prmximcci",\
      "dtCreated": "2022-03-22T06:34:52.360Z",\
      "dtDeleted": null,\
      "accessorHandles": ["ubx9ce8k"],\
      "lastJobSeqNum": 0,\
      "repoNodeId": null,\
      "repoName": null,\
      "repoUrl": null,\
      "tags": null,\
      ...\
    }\
  ],
  "meta": { "where": { "handle": "prmximcci" }, "limit": 100, "totalItems": 1 },
  "tagFilter": []
}
```

Python

```js
Project(
  (id = "prmximcci"),
  (name = "New Project"),
  (repository_name = None),
  (repository_url = None),
  (created = datetime.datetime(
    2022,
    3,
    22,
    6,
    34,
    52,
    360000,
    (tzinfo = tzutc())
  )),
  (tags = [])
);
```

## list

Show details of a project

#### Examples

CLI

```bash
gradient projects list
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/projects' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import ProjectsClient

api_key='d44808a2785d6a...'

projects_client = ProjectsClient(api_key)

print(projects_client.list())
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--tag` | string | optional | Filter by tags |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+-----------+----------------+------------+----------------------------+
| ID        | Name           | Repository | Created                    |
+-----------+----------------+------------+----------------------------+
| prmximcci | New Project    | None       | 2022-03-22 06:34:52.360000 |
+-----------+----------------+------------+----------------------------+
```

cURL

```json
{
  "data": [\
    {\
      "name": "New Project",\
      "handle": "prmximcci",\
      "dtCreated": "2022-03-22T06:34:52.360Z",\
      "dtDeleted": null,\
      "accessorHandles": ["ubx9ce8k"],\
      "lastJobSeqNum": 0,\
      "repoNodeId": null,\
      "repoName": null,\
      "repoUrl": null,\
      "tags": null,\
      ...\
    }\
  ],
  "meta": { "totalItems": 1 },
  "tagFilter": []
}
```

Python

```js
[\
  Project(\
    (id = "prmximcci"),\
    (name = "New Project"),\
    (repository_name = None),\
    (repository_url = None),\
    (created = datetime.datetime(\
      2022,\
      3,\
      22,\
      6,\
      34,\
      52,\
      360000,\
      (tzinfo = tzutc())\
    )),\
    (tags = [])\
  ),\
];
```

## delete

Delete project

#### Examples

CLI

```bash
gradient projects delete \
  --id "prmximcci"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/projects/prmximcci/deleteProject' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import ProjectsClient

api_key='d44808a2785d6a...'

projects_client = ProjectsClient(api_key)

print(projects_client.delete(
    project_id='prmximcci'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Project ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Project deleted
```

cURL

```

```

Python

```text
None
```

## tags add

Add tags to project

#### Examples

CLI

```bash
gradient projects tags add \
  --id "prmximcci" \
  --tag "PyTorch"
```

cURL

```bash
curl -X PUT 'https://api.paperspace.io/entityTags/updateTags' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "entity": "project",
    "entityId": "prmximcci",
    "tags": [\
        "PyTorch"\
    ]
}'
```

Python

```python
from gradient import ProjectsClient

api_key='d44808a2785d6a...'

projects_client = ProjectsClient(api_key)

print(projects_client.add_tags(
    entity_id='prmximcci',
    tags=['PyTorch']
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Project ID |
| `--tag` | string | optional | One or many tags you want to add to project |
| `--tags` | string | optional | Separated by comma tags that you want to add to project |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Tags added to project
```

cURL

```json
[\
  {\
    "tagId": 47,\
    "entity": "project",\
    "entityId": 272292,\
    "dtCreated": "2022-03-22T07:03:30.564Z",\
    "dtDeleted": null,\
    "userId": 750386,\
    "id": 7555,\
    "entity_id": 272292,\
    "tag": {\
      "name": "PyTorch",\
      "dtCreated": "2020-02-13T18:16:58.406Z",\
      "id": 47\
    }\
  }\
]
```

Python

```text
None
```

## tags remove

Remove tags from project

#### Examples

CLI

```bash
gradient projects tags remove \
  --id "prmximcci" \
  --tag "PyTorch"
```

cURL

```bash
curl -X PUT 'https://api.paperspace.io/entityTags/updateTags' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "entity": "project",
    "entityId": "prmximcci",
    "tags": []
}'
```

Python

```python
from gradient import ProjectsClient

api_key='d44808a2785d6a...'

projects_client = ProjectsClient(api_key)

print(projects_client.remove_tags(
    entity_id='prmximcci',
    tags=['PyTorch']
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Project ID |
| `--tag` | string | optional | One or many tags you want to add to project |
| `--tags` | string | optional | Separated by comma tags that you want to add to project |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Tags removed from project
```

cURL

```json
[]
```

Python

```text
None
```

In this article...

- [create](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#create)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#examples)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#options)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#response)
- [details](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#details)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#examples-1)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#options-1)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#response-1)
- [list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#examples-2)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#options-2)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#response-2)
- [delete](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#delete)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#examples-3)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#options-3)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#response-3)
- [tags add](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#tags-add)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#examples-4)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#options-4)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#response-4)
- [tags remove](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#tags-remove)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#examples-5)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#options-5)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/projects/#response-5)

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