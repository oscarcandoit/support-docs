---
url: "https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/"
title: "storage-providers | DigitalOcean Documentation"
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
- storage-providers

[Give Feedback](https://ideas.digitalocean.com/documentation)

# storage-providers

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Gradient API endpoints are deprecated and no longer available for Paperspace users.


## create s3

Create storage providers

#### Examples

CLI

```bash
gradient storageProviders create s3 \
  --name "NewStorageProvider" \
  --bucket "new-storage-provider" \
  --accessKey "AKIAVWO7J5OJ47KDBSIV" \
  --secretAccessKey "K8j7Qbh/rofyNRoIZotjlm..."
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/storageProviders' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "name": "NewStorageProvider",
    "type": "s3",
    "config": {
        "bucket": "new-storage-provider",
        "accessKey": "AKIAVWO7J5OJ47KDBSIV",
        "secretAccessKey": "K8j7Qbh/rofyNRoIZotjlm..."
    }
}'
```

Python

```python
from gradient import StorageProvidersClient

api_key='d44808a2785d6a...'

storage_provider_client = StorageProvidersClient(api_key)

print(storage_provider_client.create_s3(
    name='NewStorageProvider',
    bucket='new-storage-provider',
    access_key='AKIAVWO7J5OJ47KDBSIV',
    secret_access_key='K8j7Qbh/rofyNRoIZotjlm...'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--name` | string | required | Storage provider name |
| `--bucket` | string | required | S3 bucket |
| `--accessKey` | string | required | S3 access key ID |
| `--secretAccessKey` | string | required | S3 secret access key |
| `--endpoint` | string | optional | S3 endpoint URL |
| `--region` | string | optional | S3 region |
| `--signatureVersion` | string | optional | S3 signature version |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Created new storage provider with id: splia57f7o5jqke
```

cURL

```json
{
  "name": "NewStorageProvider",
  "config": {
    "bucket": "new-storage-provider",
    "accessKey": "AKIAVWO7J5OJ47KDBSIV",
    "retainData": false,
    "secretAccessKey": "********"
  },
  "dtCreated": "2022-03-22T07:46:38.426Z",
  "dtModified": "2022-03-22T07:46:38.426Z",
  "isTeamDefault": false,
  "isGradientManaged": false,
  "id": "splia57f7o5jqke",
  "type": "s3"
}
```

Python

```text
splia57f7o5jqke
```

## details

Show storage provider details

#### Examples

CLI

```bash
gradient storageProviders details \
  --id "splia57f7o5jqke"
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/storageProviders/splia57f7o5jqke' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import StorageProvidersClient

api_key='d44808a2785d6a...'

storage_provider_client = StorageProvidersClient(api_key)

print(storage_provider_client.get(
    storage_provider_id='splia57f7o5jqke'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Storage provider ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+--------+---------------------------------+
| Name   | NewStorageProvider              |
+--------+---------------------------------+
| ID     | splia57f7o5jqke                 |
| Type   | s3                              |
| Config | accessKey: AKIAVWO7J5OJ47KDBSIV |
|        | bucket: new-storage-provider    |
|        | retainData: False               |
|        | secretAccessKey: ********       |
+--------+---------------------------------+
```

cURL

```json
{
  "name": "NewStorageProvider",
  "config": {
    "bucket": "new-storage-provider",
    "accessKey": "AKIAVWO7J5OJ47KDBSIV",
    "retainData": false,
    "secretAccessKey": "********"
  },
  "dtCreated": "2022-03-22T07:46:38.426Z",
  "dtModified": "2022-03-22T07:46:38.426Z",
  "isTeamDefault": false,
  "isGradientManaged": false,
  "id": "splia57f7o5jqke",
  "type": "s3"
}
```

Python

```js
StorageProvider(
  (id = "splia57f7o5jqke"),
  (type = "s3"),
  (name = "NewStorageProvider"),
  (config = {
    bucket: "new-storage-provider",
    accessKey: "AKIAVWO7J5OJ47KDBSIV",
    retainData: False,
    secretAccessKey: "********",
  })
);
```

## list

List storage providers

#### Examples

CLI

```bash
gradient storageProviders list
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/storageProviders' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import StorageProvidersClient

api_key='d44808a2785d6a...'

storage_provider_client = StorageProvidersClient(api_key)

print(storage_provider_client.list())
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
+--------------------+-----------------+------+------------------------------------------+
| Name               | ID              | Type | Config                                   |
+--------------------+-----------------+------+------------------------------------------+
| Gradient Managed   | sp65qbxcrsgiv43 | s3   | accessKey: 6P0NXXIKSB49ZW7ZXESL          |
|                    |                 |      | bucket: tewr3st2z                        |
|                    |                 |      | endpoint: https://osg-ny2.paperspace.io/ |
|                    |                 |      | retainData: False                        |
|                    |                 |      | secretAccessKey: ********                |
| NewStorageProvider | splia57f7o5jqke | s3   | accessKey: AKIAVWO7J5OJ47KDBSIV          |
|                    |                 |      | bucket: new-storage-provider             |
|                    |                 |      | retainData: False                        |
|                    |                 |      | secretAccessKey: ********                |
+--------------------+-----------------+------+------------------------------------------+
```

cURL

```json
[\
  {\
    "name": "Gradient Managed",\
    "config": {\
      "bucket": "tewr3st2z",\
      "endpoint": "https://osg-ny2.paperspace.io/",\
      "accessKey": "6P0NXXIKSB49ZW7ZXESL",\
      "retainData": false,\
      "secretAccessKey": "********"\
    },\
    "dtCreated": "2022-03-14T15:00:11.060Z",\
    "dtModified": "2022-03-14T15:00:11.060Z",\
    "isTeamDefault": true,\
    "isGradientManaged": true,\
    "id": "sp65qbxcrsgiv43",\
    "type": "s3"\
  },\
  {\
    "name": "NewStorageProvider",\
    "config": {\
      "bucket": "new-storage-provider",\
      "accessKey": "AKIAVWO7J5OJ47KDBSIV",\
      "retainData": false,\
      "secretAccessKey": "********"\
    },\
    "dtCreated": "2022-03-22T07:46:38.426Z",\
    "dtModified": "2022-03-22T07:46:38.426Z",\
    "isTeamDefault": false,\
    "isGradientManaged": false,\
    "id": "splia57f7o5jqke",\
    "type": "s3"\
  }\
]
```

Python

```js
[\
  StorageProvider(\
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
  ),\
  StorageProvider(\
    (id = "splia57f7o5jqke"),\
    (type = "s3"),\
    (name = "NewStorageProvider"),\
    (config = {\
      bucket: "new-storage-provider",\
      accessKey: "AKIAVWO7J5OJ47KDBSIV",\
      retainData: False,\
      secretAccessKey: "********",\
    })\
  ),\
];
```

## update s3

Update s3 storage provider

#### Examples

CLI

```bash
gradient storageProviders update s3 \
  --id "splia57f7o5jqke" \
  --name "NewNameStorageProvider"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/storageProviders/splia57f7o5jqke' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "name": "NewNameStorageProvider"
}'
```

Python

```python
from gradient import StorageProvidersClient

api_key='d44808a2785d6a...'

storage_provider_client = StorageProvidersClient(api_key)

print(storage_provider_client.update_s3(
    storage_provider_id='splia57f7o5jqke',
    name='NewNameStorageProvider'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Storage provider ID |
| `--name` | string | optional | Storage provider name |
| `--bucket` | string | optional | S3 bucket |
| `--accessKey` | string | optional | S3 access key ID |
| `--secretAccessKey` | string | optional | S3 secret access key |
| `--endpoint` | string | optional | S3 endpoint URL |
| `--region` | string | optional | S3 region |
| `--signatureVersion` | string | optional | S3 signature version |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Updated storage provider
```

cURL

```json
{
  "name": "NewNameStorageProvider",
  "config": {
    "bucket": "new-storage-provider",
    "accessKey": "AKIAVWO7J5OJ47KDBSIV",
    "retainData": false,
    "secretAccessKey": "********"
  },
  "dtCreated": "2022-03-22T07:46:38.426Z",
  "dtModified": "2022-03-22T08:01:57.489Z",
  "isTeamDefault": false,
  "isGradientManaged": false,
  "id": "splia57f7o5jqke",
  "type": "s3"
}
```

Python

```text
None
```

## delete

Delete storage providers

#### Examples

CLI

```bash
gradient storageProviders delete \
  --id "splia57f7o5jqke"
```

cURL

```bash
curl -X DELETE 'https://api.paperspace.io/storageProviders/splia57f7o5jqke' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import StorageProvidersClient

api_key='d44808a2785d6a...'

storage_provider_client = StorageProvidersClient(api_key)

print(storage_provider_client.delete(
    storage_provider_id='splia57f7o5jqke',
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Storage provider ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Deleted storage provider: splromkivaz8ztg
```

cURL

```

```

Python

```text
None
```

In this article...

- [create s3](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#create-s3)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#examples)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#options)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#response)
- [details](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#details)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#examples-1)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#options-1)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#response-1)
- [list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#examples-2)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#options-2)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#response-2)
- [update s3](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#update-s3)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#examples-3)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#options-3)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#response-3)
- [delete](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#delete)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#examples-4)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#options-4)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/storage-providers/#response-4)

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