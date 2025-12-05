---
url: "https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/"
title: "workflows | DigitalOcean Documentation"
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
- workflows

[Give Feedback](https://ideas.digitalocean.com/documentation)

# workflows

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Gradient API endpoints are deprecated and no longer available for Paperspace users.


## create

Create workflow

#### Examples

CLI

```bash
gradient workflows create \
  --name "NewWorkflow" \
  --projectId "prjpkflqz"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/workflows' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
    "name": "New-Workflow",
    "projectId": "prjpkflqz"
}'
```

Python

```python
from gradient import WorkflowsClient

api_key='d44808a2785d6a...'

workflow_client = WorkflowsClient(api_key)

print(workflow_client.create(
    name='New-Workflow',
    project_id='prjpkflqz'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--name` | string | required | Workflow name |
| `--projectId` | string | required | Project ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+--------------+--------------------------------------+
| Name         | ID                                   |
+--------------+--------------------------------------+
| New-Workflow | 075615ac-a036-408c-a95e-36e5b18c73aa |
+--------------+--------------------------------------+
```

cURL

```json
{
  "id": "075615ac-a036-408c-a95e-36e5b18c73aa",
  "name": "New-Workflow",
  "dtCreated": "2022-03-22T08:15:17.147Z",
  "dtModified": "2022-03-22T08:15:17.147Z"
}
```

Python

```python
{
  "id": "075615ac-a036-408c-a95e-36e5b18c73aa",
  "name": "New-Workflow",
  "dtCreated": "2022-03-22T08:15:17.147Z",
  "dtModified": "2022-03-22T08:15:17.147Z"
}
```

## get

Get workflow info

#### Examples

CLI

```bash
gradient workflows get \
  --id "075615ac-a036-408c-a95e-36e5b18c73aa"
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/workflows/075615ac-a036-408c-a95e-36e5b18c73aa' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import WorkflowsClient

api_key='d44808a2785d6a...'

workflow_client = WorkflowsClient(api_key)

print(workflow_client.get(
    workflow_id='075615ac-a036-408c-a95e-36e5b18c73aa'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Workflow ID |
| `--show-runs` |  | optional | Fetch runs |
| `--run` | string | optional | Specify workload run |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```json
{
  "id": "075615ac-a036-408c-a95e-36e5b18c73aa",
  "name": "New-Workflow",
  "dtCreated": "2022-03-22T08:10:29.677Z",
  "dtModified": "2022-03-22T08:10:29.677Z"
}
```

cURL

```json
{
  "id": "075615ac-a036-408c-a95e-36e5b18c73aa",
  "name": "New-Workflow",
  "dtCreated": "2022-03-22T08:10:29.677Z",
  "dtModified": "2022-03-22T08:10:29.677Z"
}
```

Python

```json
{
  "id": "075615ac-a036-408c-a95e-36e5b18c73aa",
  "name": "New-Workflow",
  "dtCreated": "2022-03-22T08:10:29.677Z",
  "dtModified": "2022-03-22T08:10:29.677Z"
}
```

## list

List workflows

#### Examples

CLI

```bash
gradient workflows list \
  --projectId "prjpkflqz"
```

cURL

```bash
curl -g -X GET 'https://api.paperspace.io/workflows?filter[where][projectId]=prjpkflqz' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import WorkflowsClient

api_key='d44808a2785d6a...'

workflow_client = WorkflowsClient(api_key)

print(workflow_client.list(
    project_id='prjpkflqz'
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--projectId` | string | required | Project ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+---------------+--------------------------------------+
| Name          | ID                                   |
+---------------+--------------------------------------+
| New-Workflow  | 075615ac-a036-408c-a95e-36e5b18c73aa |
+---------------+--------------------------------------+
```

cURL

```json
[\
  {\
    "id": "075615ac-a036-408c-a95e-36e5b18c73aa",\
    "name": "New-Workflow",\
    "dtCreated": "2022-03-22T08:10:29.677Z",\
    "dtModified": "2022-03-22T08:10:29.677Z"\
  }\
]
```

Python

```js
[\
  Workflow(\
    (id = "075615ac-a036-408c-a95e-36e5b18c73aa"),\
    (team_id = None),\
    (project_id = None),\
    (name = "New-Workflow"),\
    (workflow_spec_id = None),\
    (dt_deleted = None),\
    (dt_created = datetime.datetime(\
      2022,\
      3,\
      22,\
      8,\
      10,\
      29,\
      677000,\
      (tzinfo = tzutc())\
    )),\
    (dt_modified = datetime.datetime(\
      2022,\
      3,\
      22,\
      8,\
      10,\
      29,\
      677000,\
      (tzinfo = tzutc())\
    ))\
  ),\
];
```

## logs

List logs for specific workflow

#### Examples

CLI

```bash
gradient workflows logs \
  --id "075615ac-a036-408c-a95e-36e5b18c73aa" \
  --run 1
```

cURL

```bash
# First query to get logId values which is used for jobId in subsequent steps

curl -X GET 'https://api.paperspace.io/workflows/075615ac-a036-408c-a95e-36e5b18c73aa/runs/1' \
-H 'x-api-key: d44808a2785d6a...'

# Subsequent queries to get logs for each job

curl -X GET 'https://logs.paperspace.io/jobs/logs?jobId=wfrj67d8451ea1bf49749925755f5e61a46e' \
-H 'x-api-key: d44808a2785d6a...'

# Another query

curl -X GET 'https://logs.paperspace.io/jobs/logs?jobId=wfrjaedc275373ec4d239f3ea1af029dfd60' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import WorkflowsClient

api_key = 'd44808a2785d6a...'

workflow_client = WorkflowsClient(api_key)

print(
    workflow_client.logs(job_id='wfrj67d8451ea1bf49749925755f5e61a46e'),
    workflow_client.logs(job_id='wfrjaedc275373ec4d239f3ea1af029dfd60')
)
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Workflow ID |
| `--run` | string | required | Specify workload run |
| `--logId` | string | optional | Workflow log ID |
| `--line` | integer | optional | Specific line number of logs |
| `--limit` | integer | optional | Limit of logs to fetch |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+Workflows wfrjaedc275373ec4d239f3ea1af029dfd60 logs------------------------------------------------------------------------------------------------------------------------------------+
| LINE | MESSAGE                                                                                                                                                                        |
+------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 1    | Collecting scipy==1.3.3                                                                                                                                                        |
| 2    |   Downloading https://files.pythonhosted.org/packages/54/18/d7c101d5e93b6c78dc206fcdf7bd04c1f8138a7b1a93578158fa3b132b08/scipy-1.3.3-cp36-cp36m-manylinux1_x86_64.whl (25.2MB) |
| 3    | Requirement already satisfied: numpy>=1.13.3 in /usr/local/lib/python3.6/dist-packages (from scipy==1.3.3) (1.16.4)                                                            |
| 4    | Installing collected packages: scipy                                                                                                                                           |
| 5    | Successfully installed scipy-1.3.3                                                                                                                                             |
| 6    | WARNING: You are using pip version 19.1.1, however version 21.3.1 is available.                                                                                                |
| 7    | You should consider upgrading via the 'pip install --upgrade pip' command.                                                                                                     |
| 8    | Collecting requests==2.22.0                                                                                                                                                    |
| 9    |   Downloading https://files.pythonhosted.org/packages/51/bd/23c926cd341ea6b7dd0b2a00aba99ae0f828be89d72b2190f27c11d4b7fb/requests-2.22.0-py2.py3-none-any.whl (57kB)           |
| 10   | Collecting chardet<3.1.0,>=3.0.2 (from requests==2.22.0)                                                                                                                       |
| 11   |   Downloading https://files.pythonhosted.org/packages/bc/a9/01ffebfb562e4274b6487b4bb1ddec7ca55ec7510b22e4c51f14098443b8/chardet-3.0.4-py2.py3-none-any.whl (133kB)            |
| 12   | Collecting certifi>=2017.4.17 (from requests==2.22.0)                                                                                                                          |
| 13   |   Downloading https://files.pythonhosted.org/packages/37/45/946c02767aabb873146011e665728b680884cd8fe70dde973c640e45b775/certifi-2021.10.8-py2.py3-none-any.whl (149kB)        |
| 14   | Collecting urllib3!=1.25.0,!=1.25.1,<1.26,>=1.21.1 (from requests==2.22.0)                                                                                                     |
| 15   |   Downloading https://files.pythonhosted.org/packages/56/aa/4ef5aa67a9a62505db124a5cb5262332d1d4153462eb8fd89c9fa41e5d92/urllib3-1.25.11-py2.py3-none-any.whl (127kB)          |
| 16   | Requirement already satisfied: idna<2.9,>=2.5 in /usr/lib/python3/dist-packages (from requests==2.22.0) (2.6)                                                                  |
| 17   | Installing collected packages: chardet, certifi, urllib3, requests                                                                                                             |
| 18   | Successfully installed certifi-2021.10.8 chardet-3.0.4 requests-2.22.0 urllib3-1.25.11                                                                                         |
| 19   | WARNING: You are using pip version 19.1.1, however version 21.3.1 is available.                                                                                                |
| 20   | You should consider upgrading via the 'pip install --upgrade pip' command.                                                                                                     |
| 21   | Collecting Pillow==6.2.1                                                                                                                                                       |
| 22   |   Downloading https://files.pythonhosted.org/packages/10/5c/0e94e689de2476c4c5e644a3bd223a1c1b9e2bdb7c510191750be74fa786/Pillow-6.2.1-cp36-cp36m-manylinux1_x86_64.whl (2.1MB) |
| 23   | Installing collected packages: Pillow                                                                                                                                          |
| 24   | Successfully installed Pillow-6.2.1                                                                                                                                            |
| 25   | WARNING: You are using pip version 19.1.1, however version 21.3.1 is available.                                                                                                |
| 26   | You should consider upgrading via the 'pip install --upgrade pip' command.                                                                                                     |
+------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

cURL

```json
// Response to first query
{
  "id": 1,
  "uuid": "4dbd74f4-03d1-46fc-97cb-15a76805f3a1",
  "meta": {},
  "cluster": { "id": "clg07azjl" },
  "spec": {
    "jobs": {
      "CloneRepo": {
        "uses": "git-checkout@v1",
        "with": { "url": "https://github.com/NVlabs/stylegan2.git" },
        "outputs": { "repo": { "type": "volume" } },
        "resources": { "instance-type": "C5" }
      },
      "StyleGan2": {
        "uses": "script@v1",
        "with": {
          "image": "tensorflow/tensorflow:1.14.0-gpu-py3",
          "script": "pip install scipy==1.3.3\npip install requests==2.22.0\npip install Pillow==6.2.1\ncd /inputs/repo\npython run_generator.py generate-images \\\n  --network=gdrive:networks/stylegan2-ffhq-config-f.pkl \\\n  --seeds=6600-6605 \\\n  --truncation-psi=0.5 \\\n  --result-dir=/outputs/generatedFaces"
        },
        "needs": ["CloneRepo"],
        "inputs": { "repo": "CloneRepo.outputs.repo" },
        "outputs": {
          "generatedFaces": {
            "type": "dataset",
            "with": { "ref": "dsx8kjbbkxtc5v3" }
          }
        },
        "resources": { "instance-type": "P4000" }
      }
    }
  },
  "status": {
    "phase": "SUCCEEDED",
    "logId": "wfr4dbd74f403d146fc97cb15a76805f3a1",
    "started": "2022-03-22T08:28:53.000Z",
    "finished": "2022-03-22T08:31:37.833Z",
    "jobs": {
      "CloneRepo": {
        "phase": "SUCCEEDED",
        "logId": "wfrj67d8451ea1bf49749925755f5e61a46e",
        "started": "2022-03-22T08:29:07.000Z",
        "finished": "2022-03-22T08:29:22.000Z"
      },
      "StyleGan2": {
        "phase": "SUCCEEDED",
        "logId": "wfrjaedc275373ec4d239f3ea1af029dfd60",
        "started": "2022-03-22T08:29:23.000Z",
        "finished": "2022-03-22T08:31:16.000Z",
        "outputs": {
          "generatedFaces": {
            "dataset": { "id": "demo-dataset:3w8iqvi", "isCommitted": true }
          }
        }
      }
    }
  }
}

// Response to second query

[\
  {\
    "jobId": "wfrj67d8451ea1bf49749925755f5e61a46e",\
    "line": 1,\
    "timestamp": "2022-03-22T08:29:20.836Z",\
    "message": "Cloning into '/outputs/repo'...\n",\
    "instanceName": {\
      "String": "wf4dbd74f403d146fc97cb15a76805f3a1-3308432544",\
      "Valid": true\
    },\
    "uuid": { "String": "", "Valid": true },\
    "instanceCount": { "Int64": 0, "Valid": false }\
  }\
]

// Response to third query

[\
  {\
    "jobId": "wfrjaedc275373ec4d239f3ea1af029dfd60",\
    "line": 1,\
    "timestamp": "2022-03-22T08:29:42.347Z",\
    "message": "Collecting scipy==1.3.3\n",\
    "instanceName": {\
      "String": "wf4dbd74f403d146fc97cb15a76805f3a1-1115298116",\
      "Valid": true\
    },\
    "uuid": { "String": "", "Valid": true },\
    "instanceCount": { "Int64": 0, "Valid": false }\
  },\
  {\
    "jobId": "wfrjaedc275373ec4d239f3ea1af029dfd60",\
    "line": 2,\
    "timestamp": "2022-03-22T08:29:42.873Z",\
    "message": "  Downloading https://files.pythonhosted.org/packages/54/18/d7c101d5e93b6c78dc206fcdf7bd04c1f8138a7b1a93578158fa3b132b08/scipy-1.3.3-cp36-cp36m-manylinux1_x86_64.whl (25.2MB)\n",\
    "instanceName": {\
      "String": "wf4dbd74f403d146fc97cb15a76805f3a1-1115298116",\
      "Valid": true\
    },\
    "uuid": { "String": "", "Valid": true },\
    "instanceCount": { "Int64": 0, "Valid": false }\
  },\
  {\
    "jobId": "wfrjaedc275373ec4d239f3ea1af029dfd60",\
    "line": 3,\
    "timestamp": "2022-03-22T08:29:44.778Z",\
    "message": "Requirement already satisfied: numpy\u003e=1.13.3 in /usr/local/lib/python3.6/dist-packages (from scipy==1.3.3) (1.16.4)\n",\
    "instanceName": {\
      "String": "wf4dbd74f403d146fc97cb15a76805f3a1-1115298116",\
      "Valid": true\
    },\
    "uuid": { "String": "", "Valid": true },\
    "instanceCount": { "Int64": 0, "Valid": false }\
  },\
  ...\
]
```

Python

```js
[\
  (LogRow(\
    (line = 1),\
    (message =\
      "Cloning into '/outputs/repo'...\n"),\
    (timestamp = "2022-03-22T08:29:20.836Z")\
  )\
]
[\
  (LogRow(\
    (line = 2),\
    (message =\
      "  Downloading https://files.pythonhosted.org/packages/54/18/d7c101d5e93b6c78dc206fcdf7bd04c1f8138a7b1a93578158fa3b132b08/scipy-1.3.3-cp36-cp36m-manylinux1_x86_64.whl (25.2MB)"),\
    (timestamp = "2022-03-22T08:29:42.873Z")\
  ),\
  LogRow(\
    (line = 3),\
    (message =\
      "Requirement already satisfied: numpy>=1.13.3 in /usr/local/lib/python3.6/dist-packages (from scipy==1.3.3) (1.16.4)"),\
    (timestamp = "2022-03-22T08:29:44.778Z")\
  ),\
  ...\
];
```

## run

Run workflow spec

#### Examples

CLI

```bash
gradient workflows run \
  --id "075615ac-a036-408c-a95e-36e5b18c73aa" \
  --path "workflow-spec.yaml"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/workflows/075615ac-a036-408c-a95e-36e5b18c73aa/runs' \
-H 'x-api-key: d44808a2785d6a...' \
-H 'Content-Type: application/json' \
--data-raw '{
	"spec": {
		"jobs": {
			"CloneRepo": {
				"resources": {
					"instance-type": "C5"
				},
				"outputs": {
					"repo": {
						"type": "volume"
					}
				},
				"uses": "git-checkout@v1",
				"with": {
					"url": "https://github.com/NVlabs/stylegan2.git"
				}
			},
			"StyleGan2": {
				"resources": {
					"instance-type": "P4000"
				},
				"needs": ["CloneRepo"],
				"inputs": {
					"repo": "CloneRepo.outputs.repo"
				},
				"outputs": {
					"generatedFaces": {
						"type": "dataset",
						"with": {
							"ref": "dsx8kjbbkxtc5v3"
						}
					}
				},
				"uses": "script@v1",
				"with": {
					"script": "pip install scipy==1.3.3\npip install requests==2.22.0\npip install Pillow==6.2.1\ncd /inputs/repo\npython run_generator.py generate-images \\\n  --network=gdrive:networks/stylegan2-ffhq-config-f.pkl \\\n  --seeds=6600-6605 \\\n  --truncation-psi=0.5 \\\n  --result-dir=/outputs/generatedFaces",
					"image": "tensorflow/tensorflow:1.14.0-gpu-py3"
				}
			}
		}
	},
	"cluster": {
        "id": "clg07azjl"
    },
	"run": "True",
	"markDefault": "False"
}'
```

Python

```python
from gradient import WorkflowsClient
import yaml

api_key = 'd44808a2785d6a...'

workflow_client = WorkflowsClient(api_key)

spec_path = "./workflow-spec.yaml"

yaml_spec = open(spec_path, 'r')
spec = yaml.safe_load(yaml_spec)

print(workflow_client.run_workflow(
    workflow_id='553d666c-2306-4bf3-a3db-9bd1275a9657',
    spec=spec,
    cluster_id='clg07azjl',
    inputs=None
))
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--id` | string | required | Workflow ID |
| `--clusterId` | string | optional | Cluster ID |
| `--path` | string | required | Path to workflow specification |
| `--inputPath` | string | optional | Path to inputs |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
Created workflow run wfr627e7d055e0146ad94677d32f9380991
```

cURL

```json
{
  "id": 2,
  "uuid": "627e7d05-5e01-46ad-9467-7d32f9380991",
  "meta": {},
  "cluster": { "id": "clg07azjl" },
  "spec": {
    "jobs": {
      "CloneRepo": {
        "uses": "git-checkout@v1",
        "with": { "url": "https://github.com/NVlabs/stylegan2.git" },
        "outputs": { "repo": { "type": "volume" } },
        "resources": { "instance-type": "C5" }
      },
      "StyleGan2": {
        "uses": "script@v1",
        "with": {
          "image": "tensorflow/tensorflow:1.14.0-gpu-py3",
          "script": "pip install scipy==1.3.3\\npip install requests==2.22.0\\npip install Pillow==6.2.1\\ncd /inputs/repo\\npython run_generator.py generate-images \\\\\\n  --network=gdrive:networks/stylegan2-ffhq-config-f.pkl \\\\\\n  --seeds=6600-6605 \\\\\\n  --truncation-psi=0.5 \\\\\\n  --result-dir=/outputs/generatedFaces"
        },
        "needs": ["CloneRepo"],
        "inputs": { "repo": "CloneRepo.outputs.repo" },
        "outputs": {
          "generatedFaces": {
            "type": "dataset",
            "with": { "ref": "dsx8kjbbkxtc5v3" }
          }
        },
        "resources": { "instance-type": "P4000" }
      }
    }
  },
  "status": {
    "phase": "SUBMITTING",
    "logId": "wfr627e7d055e0146ad94677d32f9380991",
    "jobs": {
      "CloneRepo": {
        "phase": "SUBMITTING",
        "logId": "wfrj2ac144f8c3174efeac14aea8f522edaf"
      },
      "StyleGan2": {
        "phase": "SUBMITTING",
        "logId": "wfrj5634fae547234e7598741a17126a174e",
        "outputs": {
          "generatedFaces": {
            "dataset": { "id": "demo-dataset:hypjdmy", "isCommitted": false }
          }
        }
      }
    }
  }
}
```

Python

```js
[\
  Workflow(\
    (id = "075615ac-a036-408c-a95e-36e5b18c73aa"),\
    (team_id = None),\
    (project_id = None),\
    (name = "New-Workflow"),\
    (workflow_spec_id = None),\
    (dt_deleted = None),\
    (dt_created = datetime.datetime(\
      2022,\
      3,\
      22,\
      8,\
      10,\
      29,\
      677000,\
      (tzinfo = tzutc())\
    )),\
    (dt_modified = datetime.datetime(\
      2022,\
      3,\
      22,\
      9,\
      21,\
      29,\
      214000,\
      (tzinfo = tzutc())\
    ))\
  ),\
];
```

In this article...

- [create](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#create)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#examples)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#options)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#response)
- [get](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#get)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#examples-1)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#options-1)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#response-1)
- [list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#examples-2)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#options-2)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#response-2)
- [logs](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#logs)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#examples-3)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#options-3)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#response-3)
- [run](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#run)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#examples-4)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#options-4)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/workflows/#response-4)

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