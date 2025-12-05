---
url: "https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/"
title: "datasets | DigitalOcean Documentation"
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
- datasets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# datasets

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Gradient API endpoints are deprecated and no longer available for Paperspace users.


## create

Create dataset

#### Examples

CLI

```bash
gradient datasets create \
  --name "new_dataset_1" \
  --storageProviderId "sp65qbxcrsgiv43"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/datasets' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "storageProviderId": "sp65qbxcrsgiv43",
    "name": "new_dataset_1"
}'
```

Python

```python
from gradient import DatasetsClient

api_key='d44808a2785d6a...'

datasets_client = DatasetsClient(api_key)

print(datasets_client.create(
    name='new_dataset_1',
    storage_provider_id='sp65qbxcrsgiv43'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--name` | string | required | Dataset name |
| `--storageProviderId` | string | required | Storage provider ID |
| `--description` | string | optional | Dataset description |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Created dataset: ds7diuwj0av3tqy
```

cURL

```json
{
  "id": "ds7diuwj0av3tqy",
  "name": "new_dataset_1",
  "description": null,
  "isPublic": false,
  "mlObjectTypeId": 2,
  "dtCreated": "2022-03-21T23:26:59.475Z",
  "dtModified": "2022-03-21T23:26:59.475Z",
  "storageProvider": {
    "name": "Gradient Managed",
    "config": {
      "bucket": "tewr3st2z",
      "endpoint": "https://osg-ny2.paperspace.io/",
      "accessKey": "6P0NXXIKSB49ZW7ZXESL",
      "retainData": false,
      "secretAccessKey": "********"
    },
    "dtCreated": "2022-03-14T15:00:11.060Z",
    "dtModified": "2022-03-14T15:00:11.060Z",
    "isTeamDefault": true,
    "isGradientManaged": true,
    "id": "sp65qbxcrsgiv43",
    "type": "s3"
  }
}
```

Python

```python
ds7diuwj0av3tqy
```

## details

Show dataset details

#### Examples

CLI

```bash
gradient datasets details \
  --id "ds7diuwj0av3tqy"
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/datasets/ds7diuwj0av3tqy' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import DatasetsClient

api_key='d44808a2785d6a...'

datasets_client = DatasetsClient(api_key)

print(datasets_client.get(
    dataset_id="ds7diuwj0av3tqy"
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+-----------------+------------------------------------+
| Name            | new_dataset_1                      |
+-----------------+------------------------------------+
| ID              | ds7diuwj0av3tqy                    |
| Description     |                                    |
| StorageProvider | Gradient Managed (sp65qbxcrsgiv43) |
+-----------------+------------------------------------+
```

cURL

```json
{
  "id": "ds7diuwj0av3tqy",
  "name": "new_dataset_1",
  "description": "Dataset description",
  "isPublic": false,
  "mlObjectTypeId": 2,
  "dtCreated": "2022-03-21T19:05:04.485Z",
  "dtModified": "2022-03-21T19:21:22.839Z",
  "storageProvider": {
    "name": "Gradient Managed",
    "config": {
      "bucket": "tewr3st2z",
      "endpoint": "https://osg-ny2.paperspace.io/",
      "accessKey": "6P0NXXIKSB49ZW7ZXESL",
      "retainData": false,
      "secretAccessKey": "********"
    },
    "dtCreated": "2022-03-14T15:00:11.060Z",
    "dtModified": "2022-03-14T15:00:11.060Z",
    "isTeamDefault": true,
    "isGradientManaged": true,
    "id": "sp65qbxcrsgiv43",
    "type": "s3"
  }
}
```

Python

```python
Dataset(
  (id = "ds7diuwj0av3tqy"),
  (name = "new_dataset_1"),
  (description = None),
  (storage_provider_id = None),
  (storage_provider = StorageProvider(
    (id = "sp65qbxcrsgiv43"),
    (type = "s3"),
    (name = "Gradient Managed"),
    (config = {
      bucket: "tewr3st2z",
      endpoint: "https://osg-ny2.paperspace.io/",
      accessKey: "6P0NXXIKSB49ZW7ZXESL",
      retainData: False,
      secretAccessKey: "********",
    })
  ))
);
```

## list

List datasets

#### Examples

CLI

```bash
gradient datasets list
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/datasets' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import DatasetsClient

api_key='d44808a2785d6a...'

datasets_client = DatasetsClient(api_key)

print(datasets_client.list())
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+---------------+-----------------+------------------------------------+
| Name          | ID              | Storage Provider                   |
+---------------+-----------------+------------------------------------+
| new_dataset_1 | ds7diuwj0av3tqy | Gradient Managed (sp65qbxcrsgiv43) |
+---------------+-----------------+------------------------------------+
```

cURL

```bash
[\
  {\
    id: "ds7diuwj0av3tqy",\
    name: "new_dataset_1",\
    description: "Dataset description",\
    isPublic: false,\
    mlObjectTypeId: 2,\
    dtCreated: "2022-03-15T00:23:00.481Z",\
    dtModified: "2022-03-15T00:49:20.202Z",\
    storageProvider: {\
      name: "Gradient Managed",\
      config: {\
        bucket: "tewr3st2z",\
        endpoint: "https://osg-ny2.paperspace.io/",\
        accessKey: "6P0NXXIKSB49ZW7ZXESL",\
        retainData: false,\
        secretAccessKey: "********",\
      },\
      dtCreated: "2022-03-14T15:00:11.060Z",\
      dtModified: "2022-03-14T15:00:11.060Z",\
      isTeamDefault: true,\
      isGradientManaged: true,\
      id: "sp65qbxcrsgiv43",\
      type: "s3",\
    },\
  },\
]
```

Python

```python
[\
  Dataset(\
    (id = "ds7diuwj0av3tqy"),\
    (name = "new_dataset_1"),\
    (description = "Updated dataset description"),\
    (storage_provider_id = None),\
    (storage_provider = StorageProvider(\
      (id = "sp65qbxcrsgiv43"),\
      (type = "s3"),\
      (name = "Gradient Managed"),\
      (config = {\
        bucket: "tewr3st2z",\
        endpoint: "https://osg-ny2.paperspace.io/",\
        accessKey: "6P0NXXIKSB49ZW7ZXESL",\
        retainData: False,\
        secretAccessKey: "********",\
      })\
    ))\
  ),\
];
```

## update

Update dataset

#### Examples

CLI

```bash
gradient datasets update \
  --id "ds7diuwj0av3tqy" \
  --description "Updated dataset description"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/datasets/ds7diuwj0av3tqy' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "description": "Updated dataset description"
}'
```

Python

```python
from gradient import DatasetsClient

api_key='d44808a2785d6a...'

datasets_client = DatasetsClient(api_key)

print(datasets_client.update(
    dataset_id="ds7diuwj0av3tqy",
    description="Updated dataset description"
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset ID |
| `--name` | string | optional | Dataset name |
| `--description` | string | optional | Dataset description |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Updated dataset: ds7diuwj0av3tqy
```

cURL

```json
{
  "id": "ds7diuwj0av3tqy",
  "name": "new_name",
  "description": "Updated dataset description",
  "isPublic": false,
  "mlObjectTypeId": 2,
  "dtCreated": "2022-03-21T19:05:04.485Z",
  "dtModified": "2022-03-21T23:44:36.440Z",
  "storageProvider": {
    "name": "Gradient Managed",
    "config": {
      "bucket": "tewr3st2z",
      "endpoint": "https://osg-ny2.paperspace.io/",
      "accessKey": "6P0NXXIKSB49ZW7ZXESL",
      "retainData": false,
      "secretAccessKey": "********"
    },
    "dtCreated": "2022-03-14T15:00:11.060Z",
    "dtModified": "2022-03-14T15:00:11.060Z",
    "isTeamDefault": true,
    "isGradientManaged": true,
    "id": "sp65qbxcrsgiv43",
    "type": "s3"
  }
}
```

Python

```text
None
```

## delete

Delete dataset

#### Examples

CLI

```bash
gradient datasets delete \
  --id "dsltzdafwejmqlq"
```

cURL

```bash
curl -X DELETE 'https://api.paperspace.io/datasets/dsltzdafwejmqlq' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import DatasetsClient

api_key='d44808a2785d6a...'

datasets_client = DatasetsClient(api_key)

print(datasets_client.delete(
    dataset_id='ds7diuwj0av3tqy',
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Deleted dataset: dsltzdafwejmqlq
```

cURL

```text

```

Python

```text
None
```

## files get

Get files

#### Examples

CLI

```bash
gradient datasets files get \
  --id "dsj1g16f1z67jai:0z7o247" \
  --target-path "~/downloads"
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset version ID |
| `--source-path` | string | optional | File or directory to get |
| `--target-path` | string | required | Target directory path |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

## files list

List files

#### Examples

CLI

```bash
gradient datasets files list \
  --id "dsj1g16f1z67jai:xbreynt"
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset version ID |
| `--path` | string | optional | Sub-directory to delete |
| `--recursive` | string | optional | Recursive list content |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

```text
+----------+------+
| Name     | Size |
+----------+------+
| data.txt | 4    |
+----------+------+
```

## files put

Put files

#### Examples

CLI

```bash
gradient datasets files put \
  --id "dsj1g16f1z67jai:xbreynt" \
  --source-path "data.txt"
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset version ID |
| `--source-path` | string | required | File or directory to get |
| `--target-path` | string | optional | Target directory path |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

## files delete

Delete files

#### Examples

CLI

```bash
gradient datasets files delete \
  --id "dsj1g16f1z67jai:0z7o247"
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset version ID |
| `--path` | string | optional | Sub-directory to delete |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

## versions create

Create dataset version

#### Examples

CLI

```bash
gradient datasets versions create \
  --id "ds7diuwj0av3tqy"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/datasets/ds7diuwj0av3tqy/versions' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import DatasetVersionsClient

api_key = 'd44808a2785d6a...'

datasetVersions_client = DatasetVersionsClient(api_key)

print(datasetVersions_client.create(
    dataset_id="ds7diuwj0av3tqy"
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset version ID |
| `--message` | string | optional | Dataset version message |
| `--source-path` | string | optional | Files to put into dataset versioning (setting this commits the version) |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Created dataset version: ds7diuwj0av3tqy:dk0c3k1
```

cURL

```json
{
  "datasetId": "513d7d32-6a9d-4fbb-8c26-f1fd1f989ddd",
  "version": "dk0c3k1",
  "url": "s3://tewr3st2z/tewr3st2z/datasets/ds7diuwj0av3tqy/versions/dk0c3k1",
  "isCommitted": false,
  "message": null,
  "metadata": null,
  "dtCreated": "2022-03-21T23:51:56.952Z",
  "dtModified": "2022-03-21T23:51:56.952Z",
  "tags": [],
  "inputOutputs": [],
  "models": []
}
```

Python

```text
dk0c3k1
```

## versions commit

Commit dataset version

#### Examples

CLI

```bash
gradient datasets versions commit \
  --id "ds7diuwj0av3tqy:dk0c3k1"
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset version ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Committed dataset version: ds7diuwj0av3tqy:dk0c3k1
```

## versions details

Show dataset version details

#### Examples

CLI

```bash
gradient datasets versions details \
  --id "ds7diuwj0av3tqy:dk0c3k1"
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/datasets/ds7diuwj0av3tqy/versions/dk0c3k1' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import DatasetVersionsClient

api_key = 'd44808a2785d6a...'

datasetVersions_client = DatasetVersionsClient(api_key)

print(datasetVersions_client.get(
    dataset_version_id="ds7diuwj0av3tqy:dk0c3k1"
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset version ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+-----------+-------------------------+
| ID        | ds7diuwj0av3tqy:dk0c3k1 |
+-----------+-------------------------+
| Message   |                         |
| Committed | true                    |
| Tags      |                         |
+-----------+-------------------------+
```

cURL

```json
{
  "datasetId": "513d7d32-6a9d-4fbb-8c26-f1fd1f989ddd",
  "version": "dk0c3k1",
  "url": "s3://tewr3st2z/tewr3st2z/datasets/ds7diuwj0av3tqy/versions/dk0c3k1",
  "isCommitted": true,
  "message": null,
  "metadata": null,
  "dtCreated": "2022-03-21T23:51:56.952Z",
  "dtModified": "2022-03-22T00:03:38.917Z",
  "tags": [],
  "inputOutputs": [],
  "models": []
}
```

Python

```text
DatasetVersion(version='dk0c3k1', message=None, is_committed=True, tags=[], dataset_id=None)
```

## versions list

List dataset versions

#### Examples

CLI

```bash
gradient datasets versions list \
  --id "ds7diuwj0av3tqy"
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/datasets/ds7diuwj0av3tqy/versions' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import DatasetVersionsClient

api_key = 'd44808a2785d6a...'

datasetVersions_client = DatasetVersionsClient(api_key)

print(datasetVersions_client.list(
    dataset_id="ds7diuwj0av3tqy"
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset ID |
| `--isCommitted` | boolean | optional | Show filter by committed status |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+-------------------------+---------+------+
| ID                      | Message | Tags |
+-------------------------+---------+------+
| ds7diuwj0av3tqy:dk0c3k1 |         |      |
+-------------------------+---------+------+
```

cURL

```json
{
  "datasetId": "513d7d32-6a9d-4fbb-8c26-f1fd1f989ddd",
  "version": "dk0c3k1",
  "url": "s3://tewr3st2z/tewr3st2z/datasets/ds7diuwj0av3tqy/versions/dk0c3k1",
  "isCommitted": true,
  "message": null,
  "metadata": null,
  "dtCreated": "2022-03-21T23:51:56.952Z",
  "dtModified": "2022-03-22T00:03:38.917Z",
  "tags": [],
  "inputOutputs": [],
  "models": []
}
```

Python

```js
[\
  DatasetVersion(\
    (version = "dk0c3k1"),\
    (message = None),\
    (is_committed = True),\
    (tags = []),\
    (dataset_id = None)\
  ),\
];
```

## versions update

Update dataset version

#### Examples

CLI

```bash
gradient datasets versions update \
  --id "ds7diuwj0av3tqy:dk0c3k1"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/datasets/ds7diuwj0av3tqy/versions/dk0c3k1' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import DatasetVersionsClient

api_key = 'd44808a2785d6a...'

datasetVersions_client = DatasetVersionsClient(api_key)

print(datasetVersions_client.update(
    dataset_version_id="ds7diuwj0av3tqy:dk0c3k1"
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset version ID |
| `--message` | string | optional | Dataset version message |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Updated dataset version: ds7diuwj0av3tqy:dk0c3k1
```

cURL

```json
{
  "datasetId": "513d7d32-6a9d-4fbb-8c26-f1fd1f989ddd",
  "version": "dk0c3k1",
  "url": "s3://tewr3st2z/tewr3st2z/datasets/ds7diuwj0av3tqy/versions/dk0c3k1",
  "isCommitted": true,
  "message": null,
  "metadata": null,
  "dtCreated": "2022-03-21T23:51:56.952Z",
  "dtModified": "2022-03-22T00:03:38.917Z",
  "tags": [],
  "inputOutputs": [],
  "models": []
}
```

Python

```text
None
```

## versions delete

Delete dataset version

#### Examples

CLI

```bash
gradient datasets versions delete \
  --id "ds7diuwj0av3tqy:dk0c3k1"
```

cURL

```bash
curl -X DELETE 'https://api.paperspace.io/datasets/ds7diuwj0av3tqy/versions/dk0c3k1' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import DatasetVersionsClient

api_key = 'd44808a2785d6a...'

datasetVersions_client = DatasetVersionsClient(api_key)

print(datasetVersions_client.delete(
    dataset_version_id="ds7diuwj0av3tqy:8vkjy15"
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Dataset version ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Deleted dataset version: ds7diuwj0av3tqy:dk0c3k1
```

cURL

```text

```

Python

```text
None
```

In this article...

- [create](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#create)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#response)
- [details](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#details)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-1)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-1)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#response-1)
- [list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-2)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-2)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#response-2)
- [update](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#update)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-3)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-3)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#response-3)
- [delete](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#delete)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-4)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-4)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#response-4)
- [files get](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#files-get)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-5)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-5)
- [files list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#files-list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-6)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-6)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#response-5)
- [files put](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#files-put)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-7)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-7)
- [files delete](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#files-delete)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-8)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-8)
- [versions create](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#versions-create)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-9)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-9)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#response-6)
- [versions commit](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#versions-commit)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-10)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-10)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#response-7)
- [versions details](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#versions-details)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-11)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-11)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#response-8)
- [versions list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#versions-list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-12)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-12)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#response-9)
- [versions update](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#versions-update)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-13)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-13)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#response-10)
- [versions delete](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#versions-delete)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#examples-14)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#options-14)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/datasets/#response-11)

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