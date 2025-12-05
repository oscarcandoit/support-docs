---
url: "https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_cluster/"
title: "kubernetes_cluster | DigitalOcean Documentation"
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
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
  - [Collection Reference](https://docs.digitalocean.com/reference/ansible/reference/)
    - [Modules](https://docs.digitalocean.com/reference/ansible/reference/modules/)
      - [account\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/account_info/)
      - [balance\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/balance_info/)
      - [billing\_history\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/billing_history_info/)
      - [cdn\_endpoints](https://docs.digitalocean.com/reference/ansible/reference/modules/cdn_endpoints/)
      - [cdn\_endpoints\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/cdn_endpoints_info/)
      - [certificate](https://docs.digitalocean.com/reference/ansible/reference/modules/certificate/)
      - [certificates\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/certificates_info/)
      - [container\_registry\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/container_registry_info/)
      - [database\_cluster](https://docs.digitalocean.com/reference/ansible/reference/modules/database_cluster/)
      - [database\_clusters\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/database_clusters_info/)
      - [domain](https://docs.digitalocean.com/reference/ansible/reference/modules/domain/)
      - [domain\_record](https://docs.digitalocean.com/reference/ansible/reference/modules/domain_record/)
      - [domain\_records\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/domain_records_info/)
      - [domains\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/domains_info/)
      - [droplet](https://docs.digitalocean.com/reference/ansible/reference/modules/droplet/)
      - [droplet\_action\_power](https://docs.digitalocean.com/reference/ansible/reference/modules/droplet_action_power/)
      - [droplet\_action\_resize](https://docs.digitalocean.com/reference/ansible/reference/modules/droplet_action_resize/)
      - [droplet\_action\_snapshot](https://docs.digitalocean.com/reference/ansible/reference/modules/droplet_action_snapshot/)
      - [droplets\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/droplets_info/)
      - [firewall](https://docs.digitalocean.com/reference/ansible/reference/modules/firewall/)
      - [firewalls\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/firewalls_info/)
      - [images\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/images_info/)
      - [kubernetes\_cluster](https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_cluster/)
      - [kubernetes\_clusters\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_clusters_info/)
      - [load\_balancer](https://docs.digitalocean.com/reference/ansible/reference/modules/load_balancer/)
      - [load\_balancers\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/load_balancers_info/)
      - [monitoring\_alert\_policies\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/monitoring_alert_policies_info/)
      - [monitoring\_alert\_policy](https://docs.digitalocean.com/reference/ansible/reference/modules/monitoring_alert_policy/)
      - [one\_click](https://docs.digitalocean.com/reference/ansible/reference/modules/one_click/)
      - [one\_clicks\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/one_clicks_info/)
      - [project](https://docs.digitalocean.com/reference/ansible/reference/modules/project/)
      - [project\_resources\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/project_resources_info/)
      - [projects\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/projects_info/)
      - [regions\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/regions_info/)
      - [reserved\_ip](https://docs.digitalocean.com/reference/ansible/reference/modules/reserved_ip/)
      - [reserved\_ip\_assign](https://docs.digitalocean.com/reference/ansible/reference/modules/reserved_ip_assign/)
      - [reserved\_ips\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/reserved_ips_info/)
      - [sizes\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/sizes_info/)
      - [snapshot](https://docs.digitalocean.com/reference/ansible/reference/modules/snapshot/)
      - [snapshots\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/snapshots_info/)
      - [space](https://docs.digitalocean.com/reference/ansible/reference/modules/space/)
      - [spaces\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/spaces_info/)
      - [ssh\_key](https://docs.digitalocean.com/reference/ansible/reference/modules/ssh_key/)
      - [ssh\_keys\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/ssh_keys_info/)
      - [tag](https://docs.digitalocean.com/reference/ansible/reference/modules/tag/)
      - [tags\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/tags_info/)
      - [uptime\_check](https://docs.digitalocean.com/reference/ansible/reference/modules/uptime_check/)
      - [uptime\_checks\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/uptime_checks_info/)
      - [uptime\_checks\_state\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/uptime_checks_state_info/)
      - [volume](https://docs.digitalocean.com/reference/ansible/reference/modules/volume/)
      - [volume\_action](https://docs.digitalocean.com/reference/ansible/reference/modules/volume_action/)
      - [volume\_snapshot](https://docs.digitalocean.com/reference/ansible/reference/modules/volume_snapshot/)
      - [volumes\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/volumes_info/)
      - [vpc](https://docs.digitalocean.com/reference/ansible/reference/modules/vpc/)
      - [vpcs\_info](https://docs.digitalocean.com/reference/ansible/reference/modules/vpcs_info/)
    - [Plugins](https://docs.digitalocean.com/reference/ansible/reference/plugins/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Collection Reference](https://docs.digitalocean.com/reference/ansible/reference/)
- [Modules](https://docs.digitalocean.com/reference/ansible/reference/modules/)
- kubernetes\_cluster

[Give Feedback](https://ideas.digitalocean.com/documentation)

# kubernetes\_cluster

Generated on 25 Nov 2025
from `digitalocean.cloud` version
[`v1.2.1`](https://github.com/digitalocean/ansible-collection/releases/tag/v1.2.1)

## Synopsis

Create or delete Kubernetes clusters. View the API documentation at [https://docs.digitalocean.com/reference/api/api-reference/#tag/Kubernetes](https://docs.digitalocean.com/reference/api/api-reference/#tag/Kubernetes).

## Requirements

- pydo >= 0.1.3
- azure-core >= 1.26.1

## Parameters

| Parameter | Choices / Default | Description |
| --- | --- | --- |
| `auto_upgrade`<br>bool |  | A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window. |
| `client_override_options`<br>dict |  | Client override options (developer use). For example, can be used to override the DigitalOcean API endpoint for an internal test suite. If provided, these options will knock out existing options. |
| `ha`<br>bool |  | A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled. |
| `maintenance_policy`<br>dict |  | An object specifying the maintenance window policy for the Kubernetes cluster. |
| `module_override_options`<br>dict |  | Module override options (developer use). Can be used to override module options to support experimental or future options. If provided, these options will knock out existing options. |
| `name`<br>str / **required** |  | A human-readable name for a Kubernetes cluster. |
| `node_pools`<br>list / elements=dict |  | An object specifying the details of the worker nodes available to the Kubernetes cluster. |
| `region`<br>str / **required** |  | The slug identifier for the region where the Kubernetes cluster is located. |
| `state`<br>str | Choices:<br>- `present` (default)<br>- `absent` | State of the resource, `present` to create, `absent` to destroy. |
| `surge_upgrade`<br>bool |  | A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes. |
| `tags`<br>list / elements=str |  | An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`. |
| `timeout`<br>int | Default: `300` | Polling timeout in seconds. |
| `token`<br>str |  | DigitalOcean API token. There are several environment variables which can be used to provide this value. `DIGITALOCEAN_ACCESS_TOKEN`, `DIGITALOCEAN_TOKEN`, `DO_API_TOKEN`, `DO_API_KEY`, `DO_OAUTH_TOKEN` and `OAUTH_TOKEN` |
| `version`<br>str |  | The slug identifier for the version of Kubernetes used for the cluster. If set to a minor version (e.g. “1.14”), the latest version within it will be used (e.g. “1.14.6-do.1”). If set to “latest”, the latest published version will be used. See the `/v2/kubernetes/options endpoint` to find all currently available versions. |
| `vpc_uuid`<br>str |  | A string specifying the UUID of the VPC to which the Kubernetes cluster is assigned. |

## Examples

```yaml
- name: Create Kubernetes cluster
  digitalocean.cloud.kubernetes_cluster:
    token: "{{ token }}"
    state: present
    name: prod-cluster-01
    region: nyc1
    version: "1.18.6-do.0"
    node_pools:
      - size: s-1vcpu-2gb
        name: worker-pool
        count: 3
```

## Return Values

| Key | Returned | Description |
| --- | --- | --- |
| `error`<br>dict | failure | DigitalOcean API error.<br>Sample:<br>```json<br>{<br>  "Message": "Informational error message.",<br>  "Reason": "Unauthorized",<br>  "Status Code": 401<br>}<br>``` |
| `kubernetes_cluster`<br>dict | always | Kubernetes cluster information.<br>Sample:<br>```json<br>{<br>  "auto_upgrade": false,<br>  "cluster_subnet": "10.244.0.0/16",<br>  "created_at": "2018-11-15T16:00:11Z",<br>  "endpoint": "",<br>  "ha": false,<br>  "id": "bd5f5959-5e1e-4205-a714-a914373942af",<br>  "ipv4": "",<br>  "maintenance_policy": {<br>    "day": "any",<br>    "duration": "4h0m0s",<br>    "start_time": "00:00"<br>  },<br>  "name": "prod-cluster-01",<br>  "node_pools": [<br>    {<br>      "auto_scale": false,<br>      "count": 3,<br>      "id": "cdda885e-7663-40c8-bc74-3a036c66545d",<br>      "labels": null,<br>      "max_nodes": 0,<br>      "min_nodes": 0,<br>      "name": "worker-pool",<br>      "nodes": [<br>        {<br>          "created_at": "2018-11-15T16:00:11Z",<br>          "droplet_id": "",<br>          "id": "478247f8-b1bb-4f7a-8db9-2a5f8d4b8f8f",<br>          "name": "",<br>          "status": {<br>            "state": "provisioning"<br>          },<br>          "updated_at": "2018-11-15T16:00:11Z"<br>        },<br>        {<br>          "created_at": "2018-11-15T16:00:11Z",<br>          "droplet_id": "",<br>          "id": "ad12e744-c2a9-473d-8aa9-be5680500eb1",<br>          "name": "",<br>          "status": {<br>            "state": "provisioning"<br>          },<br>          "updated_at": "2018-11-15T16:00:11Z"<br>        },<br>        {<br>          "created_at": "2018-11-15T16:00:11Z",<br>          "droplet_id": "",<br>          "id": "e46e8d07-f58f-4ff1-9737-97246364400e",<br>          "name": "",<br>          "status": {<br>            "state": "provisioning"<br>          },<br>          "updated_at": "2018-11-15T16:00:11Z"<br>        }<br>      ],<br>      "size": "s-1vcpu-2gb",<br>      "tags": [<br>        "k8s",<br>        "k8s:bd5f5959-5e1e-4205-a714-a914373942af",<br>        "k8s:worker"<br>      ],<br>      "taints": []<br>    }<br>  ],<br>  "region": "nyc1",<br>  "registry_enabled": false,<br>  "service_subnet": "10.245.0.0/16",<br>  "status": {<br>    "message": "provisioning",<br>    "state": "provisioning"<br>  },<br>  "surge_upgrade": false,<br>  "tags": [<br>    "k8s",<br>    "k8s:bd5f5959-5e1e-4205-a714-a914373942af"<br>  ],<br>  "updated_at": "2018-11-15T16:00:11Z",<br>  "version": "1.18.6-do.0",<br>  "vpc_uuid": "c33931f2-a26a-4e61-b85c-4e95a2ec431b"<br>}<br>``` |
| `msg`<br>str | always | Kubernetes cluster result information.<br>Sample:<br>```json<br>[<br>  "Created Kubernetes cluster prod-cluster-01 (9cc10173-e9ea-4176-9dbc-a4cee4c4ff30) in nyc3",<br>  "Created Kubernetes cluster prod-cluster-01 (9cc10173-e9ea-4176-9dbc-a4cee4c4ff30) in nyc3 is not 'running', it is 'provisioning'",<br>  "Kubernetes cluster prod-cluster-01 in nyc3 would be created",<br>  "Kubernetes cluster prod-cluster-01 (9cc10173-e9ea-4176-9dbc-a4cee4c4ff30) in nyc3 exists",<br>  "Kubernetes cluster prod-cluster-01 in nyc3 does not exist",<br>  "Kubernetes cluster prod-cluster-01 (9cc10173-e9ea-4176-9dbc-a4cee4c4ff30) in nyc3 would be deleted"<br>]<br>``` |

In this article...

- [Synopsis](https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_cluster/#synopsis)
- [Requirements](https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_cluster/#requirements)
- [Parameters](https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_cluster/#parameters)
- [Examples](https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_cluster/#examples)
- [Return Values](https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_cluster/#return-values)

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