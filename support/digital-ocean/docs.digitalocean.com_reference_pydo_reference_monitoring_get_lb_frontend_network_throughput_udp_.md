---
url: "https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_network_throughput_udp/"
title: "pydo.monitoring.get_lb_frontend_network_throughput_udp() | DigitalOcean Documentation"
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
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
  - [Library Reference](https://docs.digitalocean.com/reference/pydo/reference/)
    - [account](https://docs.digitalocean.com/reference/pydo/reference/account/)
    - [actions](https://docs.digitalocean.com/reference/pydo/reference/actions/)
    - [addons](https://docs.digitalocean.com/reference/pydo/reference/addons/)
    - [apps](https://docs.digitalocean.com/reference/pydo/reference/apps/)
    - [autoscalepools](https://docs.digitalocean.com/reference/pydo/reference/autoscalepools/)
    - [balance](https://docs.digitalocean.com/reference/pydo/reference/balance/)
    - [billing\_history](https://docs.digitalocean.com/reference/pydo/reference/billing_history/)
    - [byoip\_prefixes](https://docs.digitalocean.com/reference/pydo/reference/byoip_prefixes/)
    - [cdn](https://docs.digitalocean.com/reference/pydo/reference/cdn/)
    - [certificates](https://docs.digitalocean.com/reference/pydo/reference/certificates/)
    - [databases](https://docs.digitalocean.com/reference/pydo/reference/databases/)
    - [domains](https://docs.digitalocean.com/reference/pydo/reference/domains/)
    - [droplet\_actions](https://docs.digitalocean.com/reference/pydo/reference/droplet_actions/)
    - [droplets](https://docs.digitalocean.com/reference/pydo/reference/droplets/)
    - [firewalls](https://docs.digitalocean.com/reference/pydo/reference/firewalls/)
    - [functions](https://docs.digitalocean.com/reference/pydo/reference/functions/)
    - [genai](https://docs.digitalocean.com/reference/pydo/reference/genai/)
    - [image\_actions](https://docs.digitalocean.com/reference/pydo/reference/image_actions/)
    - [images](https://docs.digitalocean.com/reference/pydo/reference/images/)
    - [invoices](https://docs.digitalocean.com/reference/pydo/reference/invoices/)
    - [kubernetes](https://docs.digitalocean.com/reference/pydo/reference/kubernetes/)
    - [load\_balancers](https://docs.digitalocean.com/reference/pydo/reference/load_balancers/)
    - [monitoring](https://docs.digitalocean.com/reference/pydo/reference/monitoring/)
      - [create\_alert\_policy()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/create_alert_policy/)
      - [create\_destination()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/create_destination/)
      - [create\_sink()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/create_sink/)
      - [delete\_alert\_policy()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/delete_alert_policy/)
      - [delete\_destination()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/delete_destination/)
      - [delete\_sink()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/delete_sink/)
      - [get\_alert\_policy()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_alert_policy/)
      - [get\_app\_cpupercentage\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_app_cpupercentage_metrics/)
      - [get\_app\_memory\_percentage\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_app_memory_percentage_metrics/)
      - [get\_app\_restart\_count\_metrics.yml()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_app_restart_count_metrics.yml/)
      - [get\_destination()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_destination/)
      - [get\_droplet\_autoscale\_current\_cpu\_utilization.yml()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_autoscale_current_cpu_utilization.yml/)
      - [get\_droplet\_autoscale\_current\_instances()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_autoscale_current_instances/)
      - [get\_droplet\_autoscale\_current\_memory\_utilization()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_autoscale_current_memory_utilization/)
      - [get\_droplet\_autoscale\_target\_cpu\_utilization()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_autoscale_target_cpu_utilization/)
      - [get\_droplet\_autoscale\_target\_instances()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_autoscale_target_instances/)
      - [get\_droplet\_autoscale\_target\_memory\_utilization()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_autoscale_target_memory_utilization/)
      - [get\_droplet\_bandwidth\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_bandwidth_metrics/)
      - [get\_droplet\_cpu\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_cpu_metrics/)
      - [get\_droplet\_filesystem\_free\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_filesystem_free_metrics/)
      - [get\_droplet\_filesystem\_size\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_filesystem_size_metrics/)
      - [get\_droplet\_load15\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_load15_metrics/)
      - [get\_droplet\_load1\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_load1_metrics/)
      - [get\_droplet\_load5\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_load5_metrics/)
      - [get\_droplet\_memory\_available\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_memory_available_metrics/)
      - [get\_droplet\_memory\_cached\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_memory_cached_metrics/)
      - [get\_droplet\_memory\_free\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_memory_free_metrics/)
      - [get\_droplet\_memory\_total\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_droplet_memory_total_metrics/)
      - [get\_lb\_droplets\_connections()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_droplets_connections/)
      - [get\_lb\_droplets\_downtime()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_droplets_downtime/)
      - [get\_lb\_droplets\_health\_checks()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_droplets_health_checks/)
      - [get\_lb\_droplets\_http\_response\_time\_50p()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_droplets_http_response_time_50p/)
      - [get\_lb\_droplets\_http\_response\_time\_95p()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_droplets_http_response_time_95p/)
      - [get\_lb\_droplets\_http\_response\_time\_99p()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_droplets_http_response_time_99p/)
      - [get\_lb\_droplets\_http\_response\_time\_avg()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_droplets_http_response_time_avg/)
      - [get\_lb\_droplets\_http\_responses()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_droplets_http_responses/)
      - [get\_lb\_droplets\_http\_session\_duration\_50p()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_droplets_http_session_duration_50p/)
      - [get\_lb\_droplets\_http\_session\_duration\_95p()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_droplets_http_session_duration_95p/)
      - [get\_lb\_droplets\_http\_session\_duration\_avg()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_droplets_http_session_duration_avg/)
      - [get\_lb\_droplets\_queue\_size()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_droplets_queue_size/)
      - [get\_lb\_frontend\_connections\_current()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_connections_current/)
      - [get\_lb\_frontend\_connections\_limit()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_connections_limit/)
      - [get\_lb\_frontend\_cpu\_utilization()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_cpu_utilization/)
      - [get\_lb\_frontend\_firewall\_dropped\_bytes()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_firewall_dropped_bytes/)
      - [get\_lb\_frontend\_firewall\_dropped\_packets()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_firewall_dropped_packets/)
      - [get\_lb\_frontend\_http\_requests\_per\_second()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_http_requests_per_second/)
      - [get\_lb\_frontend\_http\_responses()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_http_responses/)
      - [get\_lb\_frontend\_network\_throughput\_http()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_network_throughput_http/)
      - [get\_lb\_frontend\_network\_throughput\_tcp()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_network_throughput_tcp/)
      - [get\_lb\_frontend\_network\_throughput\_udp()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_network_throughput_udp/)
      - [get\_lb\_frontend\_nlb\_tcp\_network\_throughput()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_nlb_tcp_network_throughput/)
      - [get\_lb\_frontend\_nlb\_udp\_network\_throughput()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_nlb_udp_network_throughput/)
      - [get\_lb\_frontend\_tls\_connections\_current()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_tls_connections_current/)
      - [get\_lb\_frontend\_tls\_connections\_exceeding\_rate\_limit()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_tls_connections_exceeding_rate_limit/)
      - [get\_lb\_frontend\_tls\_connections\_limit()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_tls_connections_limit/)
      - [get\_sink()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_sink/)
      - [list\_alert\_policy()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/list_alert_policy/)
      - [list\_destinations()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/list_destinations/)
      - [list\_sinks()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/list_sinks/)
      - [update\_alert\_policy()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/update_alert_policy/)
      - [update\_destination()](https://docs.digitalocean.com/reference/pydo/reference/monitoring/update_destination/)
    - [nfs](https://docs.digitalocean.com/reference/pydo/reference/nfs/)
    - [one\_clicks](https://docs.digitalocean.com/reference/pydo/reference/one_clicks/)
    - [partner\_attachments](https://docs.digitalocean.com/reference/pydo/reference/partner_attachments/)
    - [projects](https://docs.digitalocean.com/reference/pydo/reference/projects/)
    - [regions](https://docs.digitalocean.com/reference/pydo/reference/regions/)
    - [registries](https://docs.digitalocean.com/reference/pydo/reference/registries/)
    - [registry](https://docs.digitalocean.com/reference/pydo/reference/registry/)
    - [reserved\_ips](https://docs.digitalocean.com/reference/pydo/reference/reserved_ips/)
    - [reserved\_ips\_actions](https://docs.digitalocean.com/reference/pydo/reference/reserved_ips_actions/)
    - [reserved\_ipv6](https://docs.digitalocean.com/reference/pydo/reference/reserved_ipv6/)
    - [reserved\_ipv6\_actions](https://docs.digitalocean.com/reference/pydo/reference/reserved_ipv6_actions/)
    - [sizes](https://docs.digitalocean.com/reference/pydo/reference/sizes/)
    - [snapshots](https://docs.digitalocean.com/reference/pydo/reference/snapshots/)
    - [spaces\_key](https://docs.digitalocean.com/reference/pydo/reference/spaces_key/)
    - [ssh\_keys](https://docs.digitalocean.com/reference/pydo/reference/ssh_keys/)
    - [tags](https://docs.digitalocean.com/reference/pydo/reference/tags/)
    - [uptime](https://docs.digitalocean.com/reference/pydo/reference/uptime/)
    - [volume\_actions](https://docs.digitalocean.com/reference/pydo/reference/volume_actions/)
    - [volume\_snapshots](https://docs.digitalocean.com/reference/pydo/reference/volume_snapshots/)
    - [volumes](https://docs.digitalocean.com/reference/pydo/reference/volumes/)
    - [vpc\_peerings](https://docs.digitalocean.com/reference/pydo/reference/vpc_peerings/)
    - [vpcnatgateways](https://docs.digitalocean.com/reference/pydo/reference/vpcnatgateways/)
    - [vpcs](https://docs.digitalocean.com/reference/pydo/reference/vpcs/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Library Reference](https://docs.digitalocean.com/reference/pydo/reference/)
- [monitoring](https://docs.digitalocean.com/reference/pydo/reference/monitoring/)
- get\_lb\_frontend\_network\_throughput\_udp()

[Give Feedback](https://ideas.digitalocean.com/documentation)

# pydo.monitoring.get\_lb\_frontend\_network\_throughput\_udp()

Generated on 25 Nov 2025
from `pydo` version
[`v0.21.0`](https://github.com/digitalocean/pydo/releases/tag/v0.21.0)

## Description

To retrieve frontend UDP throughput in bytes per second for a given load balancer, send a GET request to `/v2/monitoring/metrics/load_balancer/frontend_network_throughput_udp`.

## Parameters

| Name | Type | Required | Description | Default Value |
| --- | --- | --- | --- | --- |
| `lb_id` | string | True | A unique identifier for a load balancer. |  |
| `start` | string | True | UNIX timestamp to start metric window. |  |
| `end` | string | True | UNIX timestamp to end metric window. |  |

## More Information

See [the API spec for this endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/monitoring_get_lb_frontend_network_throughput_udp) to view additional detail on responses, headers, parameters, and more.

In this article...

- [Description](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_network_throughput_udp/#description)
- [Parameters](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_network_throughput_udp/#parameters)
- [More Information](https://docs.digitalocean.com/reference/pydo/reference/monitoring/get_lb_frontend_network_throughput_udp/#more-information)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

Cookie Preferences