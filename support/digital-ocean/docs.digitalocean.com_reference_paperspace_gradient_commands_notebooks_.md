---
url: "https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/"
title: "notebooks | DigitalOcean Documentation"
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
- notebooks

[Give Feedback](https://ideas.digitalocean.com/documentation)

# notebooks

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Gradient API endpoints are deprecated and no longer available for Paperspace users.


## create

Create new notebook

#### Examples

CLI

```bash
gradient notebooks create \
  --machineType "P4000" \
  --container "paperspace/nb-pytorch:22.02-py3" \
  --projectId "prjpkflqz" \
  --name "New Notebook"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/notebooks/v2/createNotebook' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "machineType": "P4000",
    "container": "paperspace/nb-pytorch:22.02-py3",
    "projectId": "prjpkflqz",
    "name": "New Notebook"
}'
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

print(notebooks_client.create(
    machine_type='P4000',
    container='paperspace/nb-pytorch:22.02-py3',
    project_id='prjpkflqz',
    name='New Notebook'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--machineType` | string | required | Virtual machine type label. For example `P5000` |
| `--container` | string | required | Container name |
| `--projectId` | string | required | ID of a project |
| `--clusterID` | string | optional | ID of a cluster |
| `--name` | string | optional | Notebook name |
| `--registryUsername` | string | optional | Registry username |
| `--registryPassword` | string | optional | Registry password |
| `--command` | string | optional | Command (executed as /bin/sh -c ‘YOUR COMMAND’) |
| `--containerUser` | string | optional | Container user |
| `--shutdownTimeout` | string | optional | Shutdown timeout in hours |
| `--isPreemptible` | string | optional | Is preemptible |
| `--isPublic` | string | optional | Is publicly viewable |
| `--environment` | string | optional | Environmental variables |
| `--workspace` | string | optional | S3 url or git repository. Directory uploads are not yet supported |
| `--workspaceRef` | string | optional | Git commit hash, branch name or tag |
| `--workspaceUsername` | string | optional | Workspace username |
| `--workspacePassword` | string | optional | Workspace password |
| `--tag` | string | optional | One or many tags that you want to add |
| `--tags` | string | optional | Tags separated by comma |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Created new notebook with id: np8pihaie5
https://console.paperspace.com/paperspace-docs-team/notebook/rgvieperm1lipwe
```

cURL

```json
{
  "name": "New Notebook",
  "handle": "np8pihaie5",
  "jobHandle": "jobubwtlnhafghbw",
  "project": "phoebe-dropout",
  "projectHandle": "prjpkflqz",
  "state": "Pending",
  "token": "7055294e8f2054b183db27e7621bba6f",
  "container": "paperspace/nb-pytorch:22.02-py3",
  "containerUrl": "paperspace/nb-pytorch:22.02-py3",
  "baseContainer": "paperspace/nb-pytorch:22.02-py3",
  "baseContainerUrl": "paperspace/nb-pytorch:22.02-py3",
  "vmType": "P4000",
  "cluster": "gradient01-ny2",
  "clusterId": "clg07azjl",
  ...
}
```

Python

```text
np8pihaie5
```

## details

Gradient notebooks details

#### Examples

CLI

```bash
gradient notebooks details \
  --id "np8pihaie5"
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/notebooks/getNotebook' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "notebookId": "np8pihaie5"
}'
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

print(notebooks_client.get(
    id='np8pihaie5'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Notebook ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+---------+---------------------------------------------+
| Name    | New Notebook                                |
+---------+---------------------------------------------+
| ID      | np8pihaie5                                  |
| Project | prjpkflqz                                   |
| VM Type | P4000                                       |
| State   | Running                                     |
| FQDN    | np8pihaie5.clg07azjl.paperspacegradient.com |
| Tags    |                                             |
+---------+---------------------------------------------+
```

cURL

```json
{
  "name": "New Notebook",
  "handle": "np8pihaie5",
  "jobHandle": "jobubwtlnhafghbw",
  "project": "phoebe-dropout",
  "projectHandle": "prjpkflqz",
  "state": "Running",
  "token": "7055294e8f2054b183db27e7621bba6f",
  "container": "paperspace/nb-pytorch:22.02-py3",
  "containerUrl": "paperspace/nb-pytorch:22.02-py3",
  "baseContainer": "paperspace/nb-pytorch:22.02-py3",
  "baseContainerUrl": "paperspace/nb-pytorch:22.02-py3",
  "vmType": "P4000",
  "cluster": "gradient01-ny2",
  "clusterId": "clg07azjl",
  ...
}
```

Python

```js
Notebook(
  (id = "np8pihaie5"),
  (machine_type = None),
  (vm_type_id = None),
  (vm_type_label = None),
  (container_id = None),
  (container_name = None),
  (name = "New Notebook"),
  (cluster_id = "clg07azjl"),
  (registry_username = None),
  (registry_password = None),
  (command = None),
  (default_entrypoint = None),
  (container_user = None),
  (shutdown_timeout = None),
  (is_preemptible = False),
  ...
);
```

## list

List notebooks

#### Examples

CLI

```bash
gradient notebooks list
```

cURL

```bash
curl -g -X GET 'https://api.paperspace.io/notebooks/getNotebooks?filter={}' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

print(notebooks_client.list(
    tags=[]
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--limit` | integer | optional | Limit response |
| `--offset` | integer | optional | Offset response |
| `--tag` | string | optional | Filter by tag |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+--------------+------------+
| Name         | ID         |
+--------------+------------+
| New Notebook | np8pihaie5 |
+--------------+------------+
```

cURL

```json
{
  "notebookList": [\
    {\
      "name": "New Notebook",\
      "handle": "np8pihaie5",\
      "jobHandle": "jobubwtlnhafghbw",\
      "project": "phoebe-dropout",\
      "projectHandle": "prjpkflqz",\
      "state": "Running",\
      "token": "7055294e8f2054b183db27e7621bba6f",\
      "container": "paperspace/nb-pytorch:22.02-py3",\
      "containerUrl": "paperspace/nb-pytorch:22.02-py3",\
      "baseContainer": "paperspace/nb-pytorch:22.02-py3",\
      "baseContainerUrl": "paperspace/nb-pytorch:22.02-py3",\
      "vmType": "P4000",\
      "cluster": "gradient01-ny2",\
      "clusterId": "clg07azjl",\
      ...\
    }\
  ],
  "total": 1,
  "runningTotal": 1,
  "freeTierRunningTotal": 0,
  "displayTotal": 1
}
```

Python

```js
[\
  Notebook(\
    (id = "np8pihaie5"),\
    (machine_type = None),\
    (vm_type_id = None),\
    (vm_type_label = None),\
    (container_id = None),\
    (container_name = None),\
    (name = "New Notebook"),\
    (cluster_id = "clg07azjl"),\
    (registry_username = None),\
    (registry_password = None),\
    (command = None),\
    (default_entrypoint = None),\
    (container_user = None),\
    (shutdown_timeout = None),\
    (is_preemptible = False),\
    ...\
  ),\
];
```

## logs

List notebook logs

#### Examples

CLI

```bash
gradient notebooks logs \
  --id "np8pihaie5"
```

cURL

```bash
# First get jobId value

curl -X GET 'https://api.paperspace.io/notebooks/getNotebook' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "notebookId": "np8pihaie5"
}'

# Then call logs method

curl -X GET 'https://logs.paperspace.io/jobs/logs?jobId=jobubwtlnhafghbw&notebookId=np8pihaie5' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

print(notebooks_client.logs(
    notebook_id='np8pihaie5',
    line=0
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Notebook ID |
| `--line` | integer | optional | Line of logs output |
| `--limit` | integer | optional | Limit response |
| `--follow` | boolean | optional |  |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+Notebook np8pihaie5 logs------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| LINE | MESSAGE                                                                                                                                                                                                   |
+------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 1    |                                                                                                                                                                                                           |
| 2    | =============                                                                                                                                                                                             |
| 3    | == PyTorch ==                                                                                                                                                                                             |
| 4    | =============                                                                                                                                                                                             |
| 5    |                                                                                                                                                                                                           |
| 6    | NVIDIA Release 22.02 (build 32255746)                                                                                                                                                                     |
| 7    | PyTorch Version 1.11.0a0+17540c5                                                                                                                                                                          |
| 8    |                                                                                                                                                                                                           |
| 9    | Container image Copyright (c) 2022, NVIDIA CORPORATION & AFFILIATES. All rights reserved.                                                                                                                 |
| 10   |                                                                                                                                                                                                           |
| 11   | Copyright (c) 2014-2022 Facebook Inc.                                                                                                                                                                     |
| 12   | Copyright (c) 2011-2014 Idiap Research Institute (Ronan Collobert)                                                                                                                                        |
| 13   | Copyright (c) 2012-2014 Deepmind Technologies    (Koray Kavukcuoglu)                                                                                                                                      |
| 14   | Copyright (c) 2011-2012 NEC Laboratories America (Koray Kavukcuoglu)                                                                                                                                      |
| 15   | Copyright (c) 2011-2013 NYU                      (Clement Farabet)                                                                                                                                        |
| 16   | Copyright (c) 2006-2010 NEC Laboratories America (Ronan Collobert, Leon Bottou, Iain Melvin, Jason Weston)                                                                                                |
| 17   | Copyright (c) 2006      Idiap Research Institute (Samy Bengio)                                                                                                                                            |
| 18   | Copyright (c) 2001-2004 Idiap Research Institute (Ronan Collobert, Samy Bengio, Johnny Mariethoz)                                                                                                         |
| 19   | Copyright (c) 2015      Google Inc.                                                                                                                                                                       |
| 20   | Copyright (c) 2015      Yangqing Jia                                                                                                                                                                      |
| 21   | Copyright (c) 2013-2016 The Caffe contributors                                                                                                                                                            |
| 22   | All rights reserved.                                                                                                                                                                                      |
| 23   |                                                                                                                                                                                                           |
| 24   | Various files include modifications (c) NVIDIA CORPORATION & AFFILIATES.  All rights reserved.                                                                                                            |
| 25   |                                                                                                                                                                                                           |
| 26   | This container image and its contents are governed by the NVIDIA Deep Learning Container License.                                                                                                         |
| 27   | By pulling and using the container, you accept the terms and conditions of this license:                                                                                                                  |
| 28   | https://developer.nvidia.com/ngc/nvidia-deep-learning-container-license
...
```

cURL

```json
[\
  {\
    "jobId": "np8pihaie5",\
    "line": 1,\
    "timestamp": "2022-03-22T03:20:55.272Z",\
    "message": "\n",\
    "instanceName": { "String": "np8pihaie5", "Valid": true },\
    "uuid": { "String": "", "Valid": true },\
    "instanceCount": { "Int64": 0, "Valid": false }\
  },\
  {\
    "jobId": "np8pihaie5",\
    "line": 2,\
    "timestamp": "2022-03-22T03:20:55.272Z",\
    "message": "=============\n",\
    "instanceName": { "String": "np8pihaie5", "Valid": true },\
    "uuid": { "String": "", "Valid": true },\
    "instanceCount": { "Int64": 0, "Valid": false }\
  },\
  {\
    "jobId": "np8pihaie5",\
    "line": 3,\
    "timestamp": "2022-03-22T03:20:55.272Z",\
    "message": "== PyTorch ==\n",\
    "instanceName": { "String": "np8pihaie5", "Valid": true },\
    "uuid": { "String": "", "Valid": true },\
    "instanceCount": { "Int64": 0, "Valid": false }\
  },\
  ...\
]
```

Python

```js
[\
  LogRow(\
    (line = 1),\
    (message = ""),\
    (timestamp = "2022-03-22T03:20:55.272Z")\
  ),\
  LogRow(\
    (line = 2),\
    (message = "============="),\
    (timestamp = "2022-03-22T03:20:55.272Z")\
  ),\
  LogRow(\
    (line = 3),\
    (message = "== PyTorch =="),\
    (timestamp = "2022-03-22T03:20:55.272Z")\
  ...\
];
```

## start

Start notebook

#### Examples

CLI

```bash
gradient notebooks start \
  --id "ncbf3hcmao" \
  --machineType "P4000"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/notebooks/v2/startNotebook' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "notebookId": "ncbf3hcmao",
    "machineType": "P4000"
}'
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

print(notebooks_client.start(
    id='ncbf3hcmao',
    machine_type='P4000'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Notebook ID |
| `--machineType` | string | required | Virtual machine type label. For example `P5000` |
| `--clusterID` | string | optional | ID of a cluster |
| `--shutdownTimeout` | string | optional | Shutdown timeout in hours |
| `--isPreemptible` | string | optional | Is preemptible |
| `--tag` | string | optional | One or many tags that you want to add |
| `--tags` | string | optional | Tags separated by comma |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Started notebook with id: n48rz1nszs
https://console.paperspace.com/paperspace-docs-team/notebook/rgvieperm1lipwe
```

cURL

```json
{
  "name": "ncbf3hcmao",
  "handle": "n4lwwzwf6h",
  "jobHandle": "jjve42jl22ypx7qk",
  "project": "phoebe-dropout",
  "projectHandle": "prjpkflqz",
  "state": "Pending",
  "token": "75c874129669c3a2cd355f1c618a1cac",
  "container": "paperspace/nb-pytorch:22.02-py3",
  "containerUrl": "paperspace/nb-pytorch:22.02-py3",
  "baseContainer": "paperspace/nb-pytorch:22.02-py3",
  "baseContainerUrl": "paperspace/nb-pytorch:22.02-py3",
  "vmType": "P4000",
  "cluster": "gradient01-ny2",
  "clusterId": "clg07azjl",
  ...
}
```

Python

```text
n48rz1nszs
```

## stop

Stop notebook

#### Examples

CLI

```bash
gradient notebooks stop \
  --id "n48rz1nszs"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/notebooks/v2/stopNotebook' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "notebookId": "n48rz1nszs"
}'
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

print(notebooks_client.stop(
    id='n48rz1nszs'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Notebook ID |
| `--apiKey` | string | optional | API key to use this time only |

#### Response

CLI

```text
Stopping notebook with id: np8pihaie5
```

cURL

```text

```

Python

```text
None
```

## fork

Fork existing notebook

#### Examples

CLI

```bash
gradient notebooks fork \
  --id "n4lwwzwf6h" \
  --projectId "prjpkflqz"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/notebooks/v2/forkNotebook' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "notebookId": "n4lwwzwf6h",
    "projectId": "prjpkflqz"
}'
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

print(notebooks_client.fork(
    id='n4lwwzwf6h',
    project_id='prjpkflqz'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Notebook ID |
| `--projectId` | string | required | Project ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Notebook forked to id: n893mxu6zw
```

cURL

```json
{
  "name": "New Notebook - Fork",
  "handle": "n4wzypwu02",
  "jobHandle": "jhivt2v46bb1ijiw",
  "project": "phoebe-dropout",
  "projectHandle": "prjpkflqz",
  "state": "Stopped",
  "token": null,
  "container": "paperspace/nb-pytorch:22.02-py3",
  "containerUrl": "paperspace/nb-pytorch:22.02-py3",
  "baseContainer": "paperspace/nb-pytorch:22.02-py3",
  "baseContainerUrl": "paperspace/nb-pytorch:22.02-py3",
  "vmType": null,
  "cluster": "gradient01-ny2",
  "clusterId": "clg07azjl",
  ...
}
```

Python

```text
n893mxu6zw
```

## delete

Delete notebook

#### Examples

CLI

```bash
gradient notebooks delete \
  --id "np8pihaie5"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/notebooks/v2/deleteNotebook' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "notebookId": "np8pihaie5"
}'
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

print(notebooks_client.delete(
    id='np8pihaie5'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Notebook ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Notebook deleted
```

cURL

```

```

Python

```text
None
```

## artifacts list

List notebook’s artifacts

#### Examples

CLI

```bash
gradient notebooks artifacts list \
  --id "n4lwwzwf6h"
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/notebooks/artifactsList?notebookId=n4lwwzwf6h' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

print(notebooks_client.artifacts_list(
    notebook_id='n4lwwzwf6h'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | ID of the notebook |
| `--size` | boolean | optional | Show file size |
| `--links` | boolean | optional | Show file URL |
| `--files` | string | optional | Get only given file (use \* as a wildcard) |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

## metrics get

Get notebook metrics. Shows CPU and RAM usage by default.

#### Examples

CLI

```bash
gradient notebooks metrics get \
  --id "n4lwwzwf6h"
```

cURL

```bash
# First get dtStarted value to use in the next query

curl -X GET 'https://api.paperspace.io/notebooks/getNotebook' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "notebookId": "n4lwwzwf6h"
}'

# Then set start value in this query to dtStarted value from previous query

curl -X GET 'https://clg07azjl.paperspacegradient.com/metrics/api/v1/range?charts=cpuPercentage,memoryUsage&start=2022-03-22T04:31:59.000Z&interval=30s&objecttype=notebook&handle=n4lwwzwf6h' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python

```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Notebook ID |
| `--metric` | string | optional | One or more metrics that you want to read. `cpuPercentage`, `memoryUsage`, `gpuMemoryFree`, `gpuMemoryUsed`, `gpuPowerDraw`, `gpuTemp`, `gpuUtilization`, `gpuMemoryUtilization` |
| `--interval` | string | optional | Interval |
| `--start` | string | optional | Timestamp of first time series metric to collect |
| `--end` | string | optional | Timestamp of last time series metric to collect |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
{
  "cpuPercentage": {
    "n4lwwzwf6h": [\
      {\
        "time_stamp": 1647923579,\
        "value": "0.02326348333333339"\
      },\
      {\
        "time_stamp": 1647923609,\
        "value": "0.022861235000000146"\
      },\
      {\
        "time_stamp": 1647923639,\
        "value": "0.023488911666666817"\
      },\
      {\
        "time_stamp": 1647923669,\
        "value": "0.09286078499999999"\
      },\
      {\
        "time_stamp": 1647923699,\
        "value": "0.0916106966666665"\
      },\
      {\
        "time_stamp": 1647923729,\
        "value": "0.023709778333333247"\
      },\
      {\
        "time_stamp": 1647923759,\
        "value": "0.09410035000000003"\
      },\
      {\
        "time_stamp": 1647923789,\
        "value": "0.16279980333333333"\
      }\
    ]
  },
  "memoryUsage": {
    "n4lwwzwf6h": [\
      {\
        "time_stamp": 1647923519,\
        "value": "0"\
      },\
      {\
        "time_stamp": 1647923549,\
        "value": "126480384"\
      },\
      {\
        "time_stamp": 1647923579,\
        "value": "126537728"\
      },\
      {\
        "time_stamp": 1647923609,\
        "value": "126644224"\
      },\
      {\
        "time_stamp": 1647923639,\
        "value": "126742528"\
      },\
      {\
        "time_stamp": 1647923669,\
        "value": "125550592"\
      },\
      {\
        "time_stamp": 1647923699,\
        "value": "125661184"\
      },\
      {\
        "time_stamp": 1647923729,\
        "value": "125726720"\
      },\
      {\
        "time_stamp": 1647923759,\
        "value": "124112896"\
      }\
    ]
  }
}
```

cURL

```json
{
  "handle": "n4lwwzwf6h",
  "object_type": "notebook",
  "charts": {
    "cpuPercentage": {
      "n4lwwzwf6h": [\
        { "time_stamp": 1647923579, "value": "0.02326348333333339" },\
        { "time_stamp": 1647923609, "value": "0.022861235000000146" },\
        { "time_stamp": 1647923639, "value": "0.023488911666666817" },\
        { "time_stamp": 1647923669, "value": "0.09286078499999999" },\
        { "time_stamp": 1647923699, "value": "0.0916106966666665" },\
        { "time_stamp": 1647923729, "value": "0.023709778333333247" },\
        { "time_stamp": 1647923759, "value": "0.09410035000000003" },\
        { "time_stamp": 1647923789, "value": "0.16279980333333333" }\
      ]
    },
    "memoryUsage": {
      "n4lwwzwf6h": [\
        { "time_stamp": 1647923519, "value": "0" },\
        { "time_stamp": 1647923549, "value": "126480384" },\
        { "time_stamp": 1647923579, "value": "126537728" },\
        { "time_stamp": 1647923609, "value": "126644224" },\
        { "time_stamp": 1647923639, "value": "126742528" },\
        { "time_stamp": 1647923669, "value": "125550592" },\
        { "time_stamp": 1647923699, "value": "125661184" },\
        { "time_stamp": 1647923729, "value": "125726720" },\
        { "time_stamp": 1647923759, "value": "124112896" }\
      ]
    }
  }
}
```

Python

```json
{
  "cpuPercentage": {
    "n4lwwzwf6h": [\
      { "time_stamp": 1647923580, "value": "0.02326348333333339" },\
      { "time_stamp": 1647923610, "value": "0.022861235000000146" },\
      { "time_stamp": 1647923640, "value": "0.023488911666666817" },\
      { "time_stamp": 1647923670, "value": "0.09286078499999999" },\
      { "time_stamp": 1647923700, "value": "0.0916106966666665" },\
      { "time_stamp": 1647923730, "value": "0.023709778333333247" },\
      { "time_stamp": 1647923760, "value": "0.09410035000000003" }\
    ]
  },
  "memoryUsage": {
    "n4lwwzwf6h": [\
      { "time_stamp": 1647923520, "value": "0" },\
      { "time_stamp": 1647923550, "value": "126480384" },\
      { "time_stamp": 1647923580, "value": "126537728" },\
      { "time_stamp": 1647923610, "value": "126644224" },\
      { "time_stamp": 1647923640, "value": "126742528" },\
      { "time_stamp": 1647923670, "value": "125550592" },\
      { "time_stamp": 1647923700, "value": "125661184" },\
      { "time_stamp": 1647923730, "value": "125726720" },\
      { "time_stamp": 1647923760, "value": "124112896" }\
    ]
  }
}
```

## metrics list

List notebook metrics.

#### Examples

CLI

```bash
gradient notebooks metrics list \
  --id "n4lwwzwf6h"
```

cURL

```bash
# First get dtStarted value to use in the next query

curl -X GET 'https://api.paperspace.io/notebooks/getNotebook' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "notebookId": "n4lwwzwf6h"
}'

# Then set start value in this query to dtStarted value from previous query

curl -X GET 'https://clg07azjl.paperspacegradient.com/metrics/api/v1/list?start=2022-03-22T04:31:59.000Z&interval=30s&objecttype=notebook&handle=n4lwwzwf6h' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

print(notebooks_client.list_metrics(
    notebook_id='n4lwwzwf6h'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Notebook ID |
| `--interval` | string | optional | Interval |
| `--start` | string | optional | Timestamp of first time series metric to collect |
| `--end` | string | optional | Timestamp of last time series metric to collect |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

## metrics stream

Stream notebook metrics.

#### Examples

CLI

```bash
gradient notebooks metrics stream \
  --id "n8zgov68mw"
```

cURL

```text
This command is not available via CURL.
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

notebooks_client.stream_metrics(
    notebook_id='n8zgov68mw'
)
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Notebook ID |
| `--metric` | string | optional | One or more metrics that you want to read. `cpuPercentage`, `memoryUsage`, `gpuMemoryFree`, `gpuMemoryUsed`, `gpuPowerDraw`, `gpuTemp`, `gpuUtilization`, `gpuMemoryUtilization` |
| `--interval` | string | optional | Interval |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

## tags add

Add tags to notebook

#### Examples

CLI

```bash
gradient notebooks tags add \
  --id "n1vswe1grw" \
  --tag "PyTorch"
```

cURL

```bash
curl -X PUT 'https://api.paperspace.io/entityTags/updateTags' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "entity": "notebook",
    "entityId": "n1vswe1grw",
    "tags": [\
        "PyTorch"\
    ]
}'
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

print(notebooks_client.add_tags(
    entity_id='n8zgov68mw',
    tags=['PyTorch']
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Notebook ID |
| `--tag` | string | required | One or many tags that you want to add |
| `--tags` | string | optional | Tags separated by comma |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Tags added to notebook
```

cURL

```json
[\
  {\
    "tagId": 47,\
    "entity": "notebook",\
    "entityId": 938190,\
    "dtCreated": "2022-03-22T05:26:53.808Z",\
    "dtDeleted": null,\
    "userId": 750386,\
    "id": 7551,\
    "entity_id": 938190,\
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

Remove tags from notebook

#### Examples

CLI

```bash
gradient notebooks tags remove \
  --id "n1vswe1grw" \
  --tag "PyTorch"
```

cURL

```bash
curl -X PUT 'https://api.paperspace.io/entityTags/updateTags' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "entity": "notebook",
    "entityId": "n1vswe1grw",
    "tags": []
}'
```

Python

```python
from gradient import NotebooksClient

api_key='d44808a2785d6a...'

notebooks_client = NotebooksClient(api_key)

print(notebooks_client.remove_tags(
    entity_id='n1vswe1grw',
    tags=['PyTorch']
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Notebook ID |
| `--tag` | string | required | One or many tags that you want to add |
| `--tags` | string | optional | Tags separated by comma |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Tags removed from notebook
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

- [create](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#create)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#response)
- [details](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#details)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-1)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-1)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#response-1)
- [list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-2)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-2)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#response-2)
- [logs](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#logs)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-3)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-3)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#response-3)
- [start](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#start)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-4)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-4)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#response-4)
- [stop](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#stop)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-5)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-5)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#response-5)
- [fork](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#fork)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-6)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-6)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#response-6)
- [delete](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#delete)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-7)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-7)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#response-7)
- [artifacts list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#artifacts-list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-8)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-8)
- [metrics get](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#metrics-get)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-9)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-9)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#response-8)
- [metrics list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#metrics-list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-10)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-10)
- [metrics stream](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#metrics-stream)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-11)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-11)
- [tags add](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#tags-add)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-12)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-12)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#response-9)
- [tags remove](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#tags-remove)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#examples-13)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#options-13)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/notebooks/#response-10)

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