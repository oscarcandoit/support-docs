---
url: "https://docs.digitalocean.com/reference/ansible/reference/modules/load_balancer/"
title: "load_balancer | DigitalOcean Documentation"
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
- load\_balancer

[Give Feedback](https://ideas.digitalocean.com/documentation)

# load\_balancer

Generated on 25 Nov 2025
from `digitalocean.cloud` version
[`v1.2.1`](https://github.com/digitalocean/ansible-collection/releases/tag/v1.2.1)

## Synopsis

Create or delete load balancers. DigitalOcean Load Balancers provide a way to distribute traffic across multiple Droplets. View the API documentation at [https://docs.digitalocean.com/reference/api/api-reference/#tag/Load-Balancers](https://docs.digitalocean.com/reference/api/api-reference/#tag/Load-Balancers).

## Requirements

- pydo >= 0.1.3
- azure-core >= 1.26.1

## Parameters

| Parameter | Choices / Default | Description |
| --- | --- | --- |
| `client_override_options`<br>dict |  | Client override options (developer use). For example, can be used to override the DigitalOcean API endpoint for an internal test suite. If provided, these options will knock out existing options. |
| `disable_lets_encrypt_dns_records`<br>bool |  | A boolean value indicating whether to disable automatic DNS record creation for Let’s Encrypt certificates that are added to the load balancer. |
| `droplet_ids`<br>list / elements=int |  | An array containing the IDs of the Droplets assigned to the load balancer. |
| `enable_backend_keepalive`<br>bool |  | A boolean value indicating whether HTTP keepalive connections are maintained to target Droplets. |
| `enable_proxy_protocol`<br>bool |  | A boolean value indicating whether PROXY Protocol is in use. |
| `firewall`<br>dict |  | An object specifying allow and deny rules to control traffic to the load balancer. |
| `forwarding_rules`<br>list / elements=dict |  | An array of objects specifying the forwarding rules for a load balancer. |
| `health_checks`<br>dict |  | An object specifying health check settings for the load balancer. |
| `http_idle_timeout_seconds`<br>int | Default: `60` | An integer value which configures the idle timeout for HTTP requests to the target droplets. |
| `module_override_options`<br>dict |  | Module override options (developer use). Can be used to override module options to support experimental or future options. If provided, these options will knock out existing options. |
| `name`<br>str |  | A human-readable name for a load balancer instance. |
| `project_id`<br>str |  | The ID of the project that the load balancer is associated with. If no ID is provided at creation, the load balancer associates with the user’s default project. If an invalid project ID is provided, the load balancer will not be created. |
| `redirect_http_to_https`<br>bool |  | A boolean value indicating whether HTTP requests to the load balancer on port 80 will be redirected to HTTPS on port 443. |
| `region`<br>str / **required** |  | The slug identifier for the region where the resource will initially be available. |
| `size`<br>str | Choices:<br>- `lb-small` (default)<br>- `lb-medium`<br>- `lb-large` | Deprecated. This field has been replaced by the size\_unit field for all regions except in AMS2, NYC2, and SFO1. Each available load balancer size now equates to the load balancer having a set number of nodes. `lb-small` = 1 node, `lb-medium` = 3 nodes, `lb-large` = 6 nodes. |
| `size_unit`<br>int | Default: `1` | How many nodes the load balancer contains. Each additional node increases the load balancer’s ability to manage more connections. Load balancers can be scaled up or down, and you can change the number of nodes after creation up to once per hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions. Use the size field to scale load balancers that reside in these regions. |
| `state`<br>str | Choices:<br>- `present` (default)<br>- `absent` | State of the resource, `present` to create, `absent` to destroy. |
| `sticky_sessions`<br>dict |  | An object specifying sticky sessions settings for the load balancer. |
| `timeout`<br>int | Default: `300` | Polling timeout in seconds. |
| `token`<br>str |  | DigitalOcean API token. There are several environment variables which can be used to provide this value. `DIGITALOCEAN_ACCESS_TOKEN`, `DIGITALOCEAN_TOKEN`, `DO_API_TOKEN`, `DO_API_KEY`, `DO_OAUTH_TOKEN` and `OAUTH_TOKEN` |
| `vpc_uuid`<br>str |  | A string specifying the UUID of the VPC to which the load balancer is assigned. |

## Examples

```yaml
- name: Create load balancer
  digitalocean.cloud.load_balancer:
    token: "{{ token }}"
    state: present
    name: example-lb1
    region: nyc3
    forwarding_rules:
      - entry_protocol: http
        entry_port: 80
        target_protocol: http
        target_port: 80
      - entry_protocol: https
        entry_port: 443
        target_protocol: https
        target_port: 443
        tls_passthrough: true
    droplet_ids:
      - 11223344
    disable_lets_encrypt_dns_records: true
    http_idle_timeout_seconds: 60
    firewall:
      deny:
        - cidr:1.2.0.0/16
        - ip:2.3.4.5
      allow:
        - ip:1.2.3.4
        - cidr:2.3.4.0/24
```

## Return Values

| Key | Returned | Description |
| --- | --- | --- |
| `error`<br>dict | failure | DigitalOcean API error.<br>Sample:<br>```json<br>{<br>  "Message": "Informational error message.",<br>  "Reason": "Unauthorized",<br>  "Status Code": 401<br>}<br>``` |
| `load_balancer`<br>dict | always | Load balancer information. |
| `msg`<br>str | always | Droplet result information.<br>Sample:<br>```json<br>[<br>  "Created load balancer example-lb-01 (e23647ff-4b57-4da0-8f31-72616d932c0d)",<br>  "Deleted load balancer example-lb-01 (e23647ff-4b57-4da0-8f31-72616d932c0d)",<br>  "Load balancer example-lb-01 would be created",<br>  "Load balancer example-lb-01 (e23647ff-4b57-4da0-8f31-72616d932c0d) exists",<br>  "Load balancer example-lb-01 does not exist",<br>  "Load balancer example-lb-01 (e23647ff-4b57-4da0-8f31-72616d932c0d) would be deleted"<br>]<br>``` |

In this article...

- [Synopsis](https://docs.digitalocean.com/reference/ansible/reference/modules/load_balancer/#synopsis)
- [Requirements](https://docs.digitalocean.com/reference/ansible/reference/modules/load_balancer/#requirements)
- [Parameters](https://docs.digitalocean.com/reference/ansible/reference/modules/load_balancer/#parameters)
- [Examples](https://docs.digitalocean.com/reference/ansible/reference/modules/load_balancer/#examples)
- [Return Values](https://docs.digitalocean.com/reference/ansible/reference/modules/load_balancer/#return-values)

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