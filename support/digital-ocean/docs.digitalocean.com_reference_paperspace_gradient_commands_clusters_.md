---
url: "https://docs.digitalocean.com/reference/paperspace/gradient/commands/clusters/"
title: "clusters | DigitalOcean Documentation"
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
- clusters

[Give Feedback](https://ideas.digitalocean.com/documentation)

# clusters

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Gradient API endpoints are deprecated and no longer available for Paperspace users.


## list

List your team clusters

#### Examples

CLI

```bash
gradient clusters list
```

cURL

```bash
curl -g -X GET 'https://api.paperspace.io/clusters/getClusters?filter={"limit": 20, "offset": 0, "where": {"isPrivate": true}}' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import ClustersClient

api_key = 'd44808a2785d6a...'

clusters_client = ClustersClient(api_key)

print(clusters_client.list())
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--limit` | integer | optional | Limit listed clusters per page |
| `--offset` | integer | optional | Offset value |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML file with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+-----------+------------------+----------------------------+
| ID        | Name             | Type                       |
+-----------+------------------+----------------------------+
| cl9w..... | demo-cluster     | Kubernetes Processing Site |
+-----------+------------------+----------------------------+
```

cURL

```bash
[\
  {\
    id: "cl9w.....",\
    name: "demo-cluster",\
    type: "Kubernetes Processing Site",\
    region: "private",\
    cloud: "paperspace-cloud",\
    teamId: "tewr3st2z",\
    isDefault: false,\
    dtCreated: "2020-04-22T20:39:24.004Z",\
    dtModified: "2021-07-16T21:02:47.433Z",\
    ...\
  },\
]
```

Python

```python
[\
  Cluster(\
    (id = "cl9w....."),\
    (name = "demo-cluster"),\
    (type = "Kubernetes Processing Site")\
  ),\
];
```

## machineTypes list

List available machine types

#### Examples

CLI

```bash
gradient clusters machineTypes list
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/vmTypes/getVmTypesByClusters' \
-H 'x-api-key: d44808a2785d6a...'
```

Python

```python
from gradient import MachineTypesClient

api_key = 'd44808a2785d6a...'

machineTypes_client = MachineTypesClient(api_key)

print(machineTypes_client.list())
```

#### Options

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `--clusterId` | string | optional | Filter machine types by cluster ID |
| `--apiKey` | string | optional | API key to use this time only |
| `--optionsFile` | string | optional | Path to YAML file with predefined options |
| `--createOptionsFile` | string | optional | Generate template options file |

#### Response

CLI

```text
+-------------+--------------+-----------+--------------+-----------+--------------+--------------------------------------------+
| Name        | Kind         | CPU Count | RAM [Bytes]  | GPU Count | GPU Model    | Clusters                                   |
+-------------+--------------+-----------+--------------+-----------+--------------+--------------------------------------------+
| P4000       | p4000        | 8         | 32212254720  | 1         | Quadro P4000 | cl9w.....                                  |
| P5000       | p5000        | 8         | 32212254720  | 1         | Quadro P5000 | cl9w.....                                  |
| V100        | v100         | 8         | 32212254720  | 1         | Tesla V100   | cl9w.....                                  |
+-------------+--------------+-----------+--------------+-----------+--------------+--------------------------------------------+
```

cURL

```bash
[\
  VmType(\
    (label = "P4000"),\
    (kind = "p4000"),\
    (cpu_count = 8),\
    (ram_in_bytes = 32212254720),\
    (gpu_count = 1),\
    (gpu_model = VmTypeGpuModel(\
      (label = "Quadro P4000"),\
      (model = "passthrough"),\
      (memory_in_bytes = 8589934592)\
    )),\
    (is_preemptible = False),\
    (deployment_type = "gpu"),\
    (deployment_size = "small"),\
    (clusters = ["cl9w....."])\
  ),\
  VmType(\
    (label = "P5000"),\
    (kind = "p5000"),\
    (cpu_count = 8),\
    (ram_in_bytes = 32212254720),\
    (gpu_count = 1),\
    (gpu_model = VmTypeGpuModel(\
      (label = "Quadro P5000"),\
      (model = "passthrough"),\
      (memory_in_bytes = 17179869184)\
    )),\
    (is_preemptible = False),\
    (deployment_type = "gpu"),\
    (deployment_size = "medium"),\
    (clusters = ["cl92....."])\
  ),\
  VmType(\
    (label = "V100"),\
    (kind = "v100"),\
    (cpu_count = 8),\
    (ram_in_bytes = 32212254720),\
    (gpu_count = 1),\
    (gpu_model = VmTypeGpuModel(\
      (label = "Tesla V100"),\
      (model = "passthrough"),\
      (memory_in_bytes = 17179869184)\
    )),\
    (is_preemptible = False),\
    (deployment_type = "gpu"),\
    (deployment_size = "large"),\
    (clusters = ["cl9w....."])\
  ),\
];
```

Python

```bash
[\
  VmType(\
    (label = "P4000"),\
    (kind = "p4000"),\
    (cpu_count = 8),\
    (ram_in_bytes = 32212254720),\
    (gpu_count = 1),\
    (gpu_model = VmTypeGpuModel(\
      (label = "Quadro P4000"),\
      (model = "passthrough"),\
      (memory_in_bytes = 8589934592)\
    )),\
    (is_preemptible = False),\
    (deployment_type = "gpu"),\
    (deployment_size = "small"),\
    (clusters = ["cl9w....."])\
  ),\
  VmType(\
    (label = "P5000"),\
    (kind = "p5000"),\
    (cpu_count = 8),\
    (ram_in_bytes = 32212254720),\
    (gpu_count = 1),\
    (gpu_model = VmTypeGpuModel(\
      (label = "Quadro P5000"),\
      (model = "passthrough"),\
      (memory_in_bytes = 17179869184)\
    )),\
    (is_preemptible = False),\
    (deployment_type = "gpu"),\
    (deployment_size = "medium"),\
    (clusters = ["cl92....."])\
  ),\
  VmType(\
    (label = "V100"),\
    (kind = "v100"),\
    (cpu_count = 8),\
    (ram_in_bytes = 32212254720),\
    (gpu_count = 1),\
    (gpu_model = VmTypeGpuModel(\
      (label = "Tesla V100"),\
      (model = "passthrough"),\
      (memory_in_bytes = 17179869184)\
    )),\
    (is_preemptible = False),\
    (deployment_type = "gpu"),\
    (deployment_size = "large"),\
    (clusters = ["cl9w....."])\
  ),\
];
```

In this article...

- [list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/clusters/#list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/clusters/#examples)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/clusters/#options)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/clusters/#response)
- [machineTypes list](https://docs.digitalocean.com/reference/paperspace/gradient/commands/clusters/#machinetypes-list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/gradient/commands/clusters/#examples-1)
  - [Options](https://docs.digitalocean.com/reference/paperspace/gradient/commands/clusters/#options-1)
  - [Response](https://docs.digitalocean.com/reference/paperspace/gradient/commands/clusters/#response-1)

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