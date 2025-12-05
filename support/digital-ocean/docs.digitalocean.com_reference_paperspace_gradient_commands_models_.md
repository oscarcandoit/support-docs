---
url: "https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/"
title: "models | DigitalOcean Documentation"
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
- models

[Give Feedback](https://ideas.digitalocean.com/documentation)

# models

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Gradient API endpoints are deprecated and no longer available for Paperspace users.


## create

Create a model for a URL or Dataset ID

#### Examples

CLI

```bash
gradient models create \
  --name "New Model" \
  --modelType "Tensorflow" \
  --datasetRef "dsj1g16f1z67jai"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/mlModels/createModelV2' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
   "name": "New Model",
   "datasetRef": "dsj1g16f1z67jai",
   "modelType": "Tensorflow"
}'
```

Python

```python
from gradient import ModelsClient

api_key='d44808a2785d6a...'

models_client = ModelsClient(api_key)

print(models_client.create(
    name='New Model',
    dataset_ref='dsj1g16f1z67jai',
    model_type='Tensorflow'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--name` | string | required | Model name |
| `--modelType` | string | required | Model type: `Tensorflow`, `ONNX`, `Custom` |
| `--datasetRef` | string | required | Dataset ref to associate model with |
| `--projectId` | string | optional | ID of a project |
| `--modelSummary` | string | optional | Model summary |
| `--notes` | string | optional | Additional notes |
| `--tag` | string | optional | One or many tags that you want to add |
| `--tags` | string | optional | Tags separated by comma |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Model created with ID: moseiu8dirfro8k
```

cURL

```json
{
  "id": "moseiu8dirfro8k",
  "projectId": null,
  "updatedByUserId": "ubx9ce8k",
  "updatedByUserEmail": "david+test@paperspace.com",
  "accessorHandles": null,
  "modelType": "Tensorflow",
  "name": "New Model",
  "tag": null,
  "summary": null,
  "detail": null,
  "params": null,
  "url": null,
  "notes": null,
  "isDeleted": false,
  "isPublic": false,
  "dtCreated": "2022-03-22T01:41:44.850Z",
  "dtModified": "2022-03-22T01:41:44.850Z",
  "dtUploaded": null,
  "dtDeleted": null,
  "modelPath": null,
  "deploymentState": null,
  "tags": null,
  "datasetId": null,
  "datasetVersion": null,
  "datasetRef": "dsj1g16f1z67jai"
}
```

Python

```text
moseiu8dirfro8k
```

## details

Show model details

#### Examples

CLI

```bash
gradient models details \
  --id "moseiu8dirfro8k"
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/mlModels/getModelList/' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "filter": {
        "where": {
            "and": [\
                {\
                "id": "moseiu8dirfro8k"\
                }\
            ]
        }
    }
}'
```

Python

```python
from gradient import ModelsClient

api_key='d44808a2785d6a...'

models_client = ModelsClient(api_key)

print(models_client.get(
    model_id='moseiu8dirfro8k'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Model ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+------------------+-----------------+
| ID               | moseiu8dirfro8k |
+------------------+-----------------+
| Name             | New Model       |
| Project ID       | None            |
| Model Type       | Tensorflow      |
| URL              | None            |
| Deployment State | None            |
| Tags             |                 |
+------------------+-----------------+
```

cURL

```json
{
  "modelList": [\
    {\
      "id": "moseiu8dirfro8k",\
      "projectId": null,\
      "updatedByUserId": "ubx9ce8k",\
      "updatedByUserEmail": "da...@paperspace.com",\
      "accessorHandles": null,\
      "modelType": "Tensorflow",\
      "name": "New Model",\
      "tag": null,\
      "summary": null,\
      "detail": null,\
      "params": null,\
      "url": null,\
      "notes": null,\
      "isDeleted": false,\
      "isPublic": false,\
      "dtCreated": "2022-03-22T01:41:44.850Z",\
      "dtModified": "2022-03-22T01:41:44.850Z",\
      "dtUploaded": null,\
      "dtDeleted": null,\
      "modelPath": null,\
      "deploymentState": null,\
      "tags": null,\
      "datasetVersionId": null,\
      "datasetId": null,\
      "datasetVersion": null,\
      "datasetRef": null\
    }\
  ],
  "total": 5,
  "displayTotal": 1
}
```

Python

```js
Model(
  (id = "moseiu8dirfro8k"),
  (name = "New Model"),
  (project_id = None),
  (cluster_id = None),
  (tags = []),
  (model_type = "Tensorflow"),
  (url = None),
  (model_path = None),
  (deployment_state = None),
  (summary = None),
  (detail = None),
  (notes = None),
  (dataset_ref = None)
);
```

## list

List models with optional filtering

#### Examples

CLI

```bash
gradient models list
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/mlModels/getModelList/' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import ModelsClient

api_key='d44808a2785d6a...'

models_client = ModelsClient(api_key)

print(models_client.list())
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--projectId` | string | optional | Filter by project ID |
| `--tag` | string | optional | Filter by tag |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+-----------+-----------------+------------+------------+
| Name      | ID              | Model Type | Project ID |
+-----------+-----------------+------------+------------+
| New Model | moseiu8dirfro8k | Tensorflow | None       |
+-----------+-----------------+------------+------------+
```

cURL

```json
{
  "modelList": [\
    {\
      "id": "moseiu8dirfro8k",\
      "projectId": null,\
      "updatedByUserId": "ubx9ce8k",\
      "updatedByUserEmail": "da...@paperspace.com",\
      "accessorHandles": null,\
      "modelType": "Tensorflow",\
      "name": "New Model",\
      "tag": null,\
      "summary": null,\
      "detail": null,\
      "params": null,\
      "url": null,\
      "notes": null,\
      "isDeleted": false,\
      "isPublic": false,\
      "dtCreated": "2022-03-22T01:41:44.850Z",\
      "dtModified": "2022-03-22T01:41:44.850Z",\
      "dtUploaded": null,\
      "dtDeleted": null,\
      "modelPath": null,\
      "deploymentState": null,\
      "tags": null,\
      "datasetVersionId": null,\
      "datasetId": null,\
      "datasetVersion": null,\
      "datasetRef": null\
    }\
  ],
  "total": 1,
  "displayTotal": 1
}
```

Python

```js
[\
  Model(\
    (id = "moseiu8dirfro8k"),\
    (name = "New Model"),\
    (project_id = None),\
    (cluster_id = None),\
    (tags = []),\
    (model_type = "Tensorflow"),\
    (url = None),\
    (model_path = None),\
    (deployment_state = None),\
    (summary = None),\
    (detail = None),\
    (notes = None),\
    (dataset_ref = None)\
  ),\
];
```

## download

Download model

#### Examples

CLI

```bash
gradient models download \
  --id "moseiu8dirfro8k" \
  --destinationDir "./"
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/mlModels/listFiles/' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "id": "moseiu8dirfro8k",
    "links": "True"
}'
```

Python

```python
from gradient import ModelsClient

api_key='d44808a2785d6a...'

models_client = ModelsClient(api_key)

print(models_client.get_model_files(
    model_id='moseiu8dirfro8k',
    links=True
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Model ID |
| `--destinationDir` | string | required | Destination directory |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Downloading: data.txt
```

cURL

```json
[\
  {\
    file: "data.txt",\
    url: "https://osg-ny2.paperspace.io/tewr3st2z/tewr3st2z/datasets/dsj1g16f1z67jai/versions/xbreynt/data/data.txt?AWSAccessKeyId=6P0NXXIKSB49ZW7ZXESL&Expires=1647944273&Signature=h6MrW%2B2WJuA%2FqE3MyAg9Qxpq4HQ%3D&response-content-disposition=attachment%3Bfilename%3D%22data.txt%22",\
  },\
];
```

Python

```js
[\
  ModelFile(\
    (file = "data.txt"),\
    (url =\
      "https://osg-ny2.paperspace.io/tewr3st2z/tewr3st2z/datasets/dsj1g16f1z67jai/versions/xbreynt/data/data.txt?AWSAccessKeyId=6P0NXXIKSB49ZW7ZXESL&Expires=1647944439&Signature=Ji%2Fsc0tJYuGGMcgxvQFtRnS4Wio%3D&response-content-disposition=attachment%3Bfilename%3D%22data.txt%22"),\
    (size = None)\
  ),\
];
```

## upload

Upload a model file or directory

#### Examples

CLI

```bash
gradient models upload fashion-mnist.onnx \
  --name "New Model" \
  --modelType "ONNX"
```

cURL

```text
This command is not available via CURL.
```

Python

```python
from gradient import ModelsClient

api_key='d44808a2785d6a...'

models_client = ModelsClient(api_key)

print(models_client.upload(
    path='./fashion-mnist.onnx',
    name='New Model',
    model_type='ONNX'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--name` | string | required | Model name |
| `--modelType` | string | required | Model type: `Tensorflow`, `ONNX`, `Custom` |
| `--projectId` | string | optional | ID of a project |
| `--clusterID` | string | optional | ID of a cluster |
| `--modelSummary` | string | optional | Model summary |
| `--notes` | string | optional | Additional notes |
| `--tag` | string | optional | One or many tags that you want to add |
| `--tags` | string | optional | Tags separated by comma |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
100% (408542 of 408542) |#####################################################################################################################| Elapsed Time: 0:00:00 Time:  0:00:00
Model uploaded with ID: moc0ackf1ivmmy
```

cURL

```
This command is not available via CURL.
```

Python

```text
moc0ackf1ivmmy
```

## delete

Delete a model

#### Examples

CLI

```bash
gradient models delete \
  --id "moseiu8dirfro8k"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/mlModels/deleteModel/' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '	{
        "id": "moseiu8dirfro8k"
    }'
```

Python

```python
from gradient import ModelsClient

api_key='d44808a2785d6a...'

models_client = ModelsClient(api_key)

print(models_client.delete(
    model_id='moseiu8dirfro8k'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Model ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Model deleted
```

cURL

```text

```

Python

```text
None
```

## tags add

Add tags to ml model

#### Examples

CLI

```bash
gradient models tags add \
  --id "moseiu8dirfro8k" \
  --tag "import202203"
```

cURL

```bash
curl -X PUT 'https://api.paperspace.io/entityTags/updateTags' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "entity": "mlModel",
    "entityId": "moseiu8dirfro8k",
    "tags": [\
        "import202203"\
    ]
}'
```

Python

```python
from gradient import ModelsClient

api_key='d44808a2785d6a...'

models_client = ModelsClient(api_key)

print(models_client.add_tags(
    entity_id='moseiu8dirfro8k',
    tags=['import202203']
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Model ID |
| `--tag` | string | optional | One or more tags that you want to add to ml model |
| `--tags` | string | optional | Separated by comma tags that you want to add to ml model |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Tags added to ml model
```

cURL

```json
[\
  {\
    "tagId": 680,\
    "entity": "mlModel",\
    "entityId": 32023,\
    "dtCreated": "2022-03-22T02:37:43.788Z",\
    "dtDeleted": null,\
    "userId": 750386,\
    "id": 7550,\
    "entity_id": 32023,\
    "tag": {\
      "name": "import202203",\
      "dtCreated": "2022-03-15T01:29:39.877Z",\
      "id": 680\
    }\
  }\
]
```

Python

```text
None
```

## tags remove

Remove tags from ml model

#### Examples

CLI

```bash
gradient models tags remove \
  --id "moseiu8dirfro8k" \
  --tag "import202203"
```

cURL

```bash
curl -X PUT 'https://api.paperspace.io/entityTags/updateTags' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "entity": "mlModel",
    "entityId": "moseiu8dirfro8k",
    "tags": []
}'
```

Python

```python
from gradient import ModelsClient

api_key='d44808a2785d6a...'

models_client = ModelsClient(api_key)

print(models_client.remove_tags(
    entity_id='moseiu8dirfro8k',
    tags=['import202203']
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Model ID |
| `--tag` | string | optional | One or more tags that you want to add to ml model |
| `--tags` | string | optional | Separated by comma tags that you want to add to ml model |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Tags removed from ml model
```

cURL

```
[]
```

Python

```text
None
```

In this article...

- [create](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#create)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#examples)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#options)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#response)
- [details](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#details)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#examples-1)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#options-1)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#response-1)
- [list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#examples-2)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#options-2)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#response-2)
- [download](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#download)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#examples-3)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#options-3)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#response-3)
- [upload](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#upload)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#examples-4)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#options-4)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#response-4)
- [delete](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#delete)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#examples-5)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#options-5)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#response-5)
- [tags add](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#tags-add)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#examples-6)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#options-6)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#response-6)
- [tags remove](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#tags-remove)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#examples-7)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#options-7)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/models/#response-7)

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