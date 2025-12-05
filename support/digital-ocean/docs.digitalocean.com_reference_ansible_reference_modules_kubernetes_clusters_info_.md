---
url: "https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_clusters_info/"
title: "kubernetes_clusters_info | DigitalOcean Documentation"
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
- kubernetes\_clusters\_info

[Give Feedback](https://ideas.digitalocean.com/documentation)

# kubernetes\_clusters\_info

Generated on 25 Nov 2025
from `digitalocean.cloud` version
[`v1.2.1`](https://github.com/digitalocean/ansible-collection/releases/tag/v1.2.1)

## Synopsis

Retrieve a list of all of the Kubernetes clusters kin your account. View the API documentation at ( [https://docs.digitalocean.com/reference/api/api-reference/#operation/kubernetes\_list\_clusters)](https://docs.digitalocean.com/reference/api/api-reference/#operation/kubernetes_list_clusters)).

## Requirements

- pydo >= 0.1.3
- azure-core >= 1.26.1

## Parameters

| Parameter | Choices / Default | Description |
| --- | --- | --- |
| `client_override_options`<br>dict |  | Client override options (developer use). For example, can be used to override the DigitalOcean API endpoint for an internal test suite. If provided, these options will knock out existing options. |
| `module_override_options`<br>dict |  | Module override options (developer use). Can be used to override module options to support experimental or future options. If provided, these options will knock out existing options. |
| `state`<br>str | Choices:<br>- `present` (default)<br>- `absent` | State of the resource, `present` to create, `absent` to destroy. |
| `timeout`<br>int | Default: `300` | Polling timeout in seconds. |
| `token`<br>str |  | DigitalOcean API token. There are several environment variables which can be used to provide this value. `DIGITALOCEAN_ACCESS_TOKEN`, `DIGITALOCEAN_TOKEN`, `DO_API_TOKEN`, `DO_API_KEY`, `DO_OAUTH_TOKEN` and `OAUTH_TOKEN` |

## Examples

```yaml
- name: Get Kubernetes clusters
  digitalocean.cloud.kubernetes_clusters_info:
    token: "{{ token }}"
```

## Return Values

| Key | Returned | Description |
| --- | --- | --- |
| `error`<br>dict | failure | DigitalOcean API error.<br>Sample:<br>```json<br>{<br>  "Message": "Informational error message.",<br>  "Reason": "Unauthorized",<br>  "Status Code": 401<br>}<br>``` |
| `kubernetes_clusters`<br>list | always | Kubernetes clusters.<br>Sample:<br>```json<br>[<br>  {<br>    "auto_upgrade": false,<br>    "cluster_subnet": "10.244.0.0/16",<br>    "created_at": "2018-11-15T16:00:11Z",<br>    "endpoint": "https://bd5f5959-5e1e-4205-a714-a914373942af.k8s.ondigitalocean.com",<br>    "ha": false,<br>    "id": "bd5f5959-5e1e-4205-a714-a914373942af",<br>    "ipv4": "68.183.121.157",<br>    "maintenance_policy": {<br>      "day": "any",<br>      "duration": "4h0m0s",<br>      "start_time": "00:00"<br>    },<br>    "name": "prod-cluster-01",<br>    "node_pools": [<br>      {<br>        "auto_scale": false,<br>        "count": 3,<br>        "id": "cdda885e-7663-40c8-bc74-3a036c66545d",<br>        "labels": null,<br>        "max_nodes": 0,<br>        "min_nodes": 0,<br>        "name": "frontend-pool",<br>        "nodes": [<br>          {<br>            "created_at": "2018-11-15T16:00:11Z",<br>            "droplet_id": "205545370",<br>            "id": "478247f8-b1bb-4f7a-8db9-2a5f8d4b8f8f",<br>            "name": "adoring-newton-3niq",<br>            "status": {<br>              "state": "provisioning"<br>            },<br>            "updated_at": "2018-11-15T16:00:11Z"<br>          },<br>          {<br>            "created_at": "2018-11-15T16:00:11Z",<br>            "droplet_id": "205545371",<br>            "id": "ad12e744-c2a9-473d-8aa9-be5680500eb1",<br>            "name": "adoring-newton-3nim",<br>            "status": {<br>              "state": "provisioning"<br>            },<br>            "updated_at": "2018-11-15T16:00:11Z"<br>          },<br>          {<br>            "created_at": "2018-11-15T16:00:11Z",<br>            "droplet_id": "205545372",<br>            "id": "e46e8d07-f58f-4ff1-9737-97246364400e",<br>            "name": "adoring-newton-3ni7",<br>            "status": {<br>              "state": "provisioning"<br>            },<br>            "updated_at": "2018-11-15T16:00:11Z"<br>          }<br>        ],<br>        "size": "s-1vcpu-2gb",<br>        "tags": [<br>          "production",<br>          "web-team",<br>          "k8s",<br>          "k8s:bd5f5959-5e1e-4205-a714-a914373942af",<br>          "k8s:worker"<br>        ],<br>        "taints": []<br>      },<br>      {<br>        "auto_scale": true,<br>        "count": 2,<br>        "id": "f49f4379-7e7f-4af5-aeb6-0354bd840778",<br>        "labels": {<br>          "priority": "high",<br>          "service": "backend"<br>        },<br>        "max_nodes": 5,<br>        "min_nodes": 2,<br>        "name": "backend-pool",<br>        "nodes": [<br>          {<br>            "created_at": "2018-11-15T16:00:11Z",<br>            "droplet_id": "205545373",<br>            "id": "3385619f-8ec3-42ba-bb23-8d21b8ba7518",<br>            "name": "affectionate-nightingale-3nif",<br>            "status": {<br>              "state": "provisioning"<br>            },<br>            "updated_at": "2018-11-15T16:00:11Z"<br>          },<br>          {<br>            "created_at": "2018-11-15T16:00:11Z",<br>            "droplet_id": "205545374",<br>            "id": "4b8f60ff-ba06-4523-a6a4-b8148244c7e6",<br>            "name": "affectionate-nightingale-3niy",<br>            "status": {<br>              "state": "provisioning"<br>            },<br>            "updated_at": "2018-11-15T16:00:11Z"<br>          }<br>        ],<br>        "size": "g-4vcpu-16gb",<br>        "tags": [<br>          "production",<br>          "web-team",<br>          "k8s",<br>          "k8s:bd5f5959-5e1e-4205-a714-a914373942af",<br>          "k8s:worker"<br>        ],<br>        "taints": []<br>      }<br>    ],<br>    "region": "nyc1",<br>    "registry_enabled": false,<br>    "service_subnet": "10.245.0.0/16",<br>    "status": {<br>      "message": "provisioning",<br>      "state": "provisioning"<br>    },<br>    "surge_upgrade": false,<br>    "tags": [<br>      "production",<br>      "web-team",<br>      "k8s",<br>      "k8s:bd5f5959-5e1e-4205-a714-a914373942af"<br>    ],<br>    "updated_at": "2018-11-15T16:00:11Z",<br>    "version": "1.18.6-do.0",<br>    "vpc_uuid": "c33931f2-a26a-4e61-b85c-4e95a2ec431b"<br>  }<br>]<br>``` |
| `msg`<br>str | always | Kubernetes clusters result information.<br>Sample:<br>```json<br>[<br>  "Current domains",<br>  "No domains"<br>]<br>``` |

In this article...

- [Synopsis](https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_clusters_info/#synopsis)
- [Requirements](https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_clusters_info/#requirements)
- [Parameters](https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_clusters_info/#parameters)
- [Examples](https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_clusters_info/#examples)
- [Return Values](https://docs.digitalocean.com/reference/ansible/reference/modules/kubernetes_clusters_info/#return-values)

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