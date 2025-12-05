---
url: "https://docs.digitalocean.com/reference/pydo/reference/registry/validate_name/"
title: "pydo.registry.validate_name() | DigitalOcean Documentation"
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
    - [nfs](https://docs.digitalocean.com/reference/pydo/reference/nfs/)
    - [one\_clicks](https://docs.digitalocean.com/reference/pydo/reference/one_clicks/)
    - [partner\_attachments](https://docs.digitalocean.com/reference/pydo/reference/partner_attachments/)
    - [projects](https://docs.digitalocean.com/reference/pydo/reference/projects/)
    - [regions](https://docs.digitalocean.com/reference/pydo/reference/regions/)
    - [registries](https://docs.digitalocean.com/reference/pydo/reference/registries/)
    - [registry](https://docs.digitalocean.com/reference/pydo/reference/registry/)
      - [create()](https://docs.digitalocean.com/reference/pydo/reference/registry/create/)
      - [delete()](https://docs.digitalocean.com/reference/pydo/reference/registry/delete/)
      - [delete\_repository\_manifest()](https://docs.digitalocean.com/reference/pydo/reference/registry/delete_repository_manifest/)
      - [delete\_repository\_tag()](https://docs.digitalocean.com/reference/pydo/reference/registry/delete_repository_tag/)
      - [get()](https://docs.digitalocean.com/reference/pydo/reference/registry/get/)
      - [get\_docker\_credentials()](https://docs.digitalocean.com/reference/pydo/reference/registry/get_docker_credentials/)
      - [get\_garbage\_collection()](https://docs.digitalocean.com/reference/pydo/reference/registry/get_garbage_collection/)
      - [get\_options()](https://docs.digitalocean.com/reference/pydo/reference/registry/get_options/)
      - [get\_subscription()](https://docs.digitalocean.com/reference/pydo/reference/registry/get_subscription/)
      - [list\_garbage\_collections()](https://docs.digitalocean.com/reference/pydo/reference/registry/list_garbage_collections/)
      - [list\_repositories()](https://docs.digitalocean.com/reference/pydo/reference/registry/list_repositories/)
      - [list\_repositories\_v2()](https://docs.digitalocean.com/reference/pydo/reference/registry/list_repositories_v2/)
      - [list\_repository\_manifests()](https://docs.digitalocean.com/reference/pydo/reference/registry/list_repository_manifests/)
      - [list\_repository\_tags()](https://docs.digitalocean.com/reference/pydo/reference/registry/list_repository_tags/)
      - [run\_garbage\_collection()](https://docs.digitalocean.com/reference/pydo/reference/registry/run_garbage_collection/)
      - [update\_garbage\_collection()](https://docs.digitalocean.com/reference/pydo/reference/registry/update_garbage_collection/)
      - [update\_subscription()](https://docs.digitalocean.com/reference/pydo/reference/registry/update_subscription/)
      - [validate\_name()](https://docs.digitalocean.com/reference/pydo/reference/registry/validate_name/)
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
- [registry](https://docs.digitalocean.com/reference/pydo/reference/registry/)
- validate\_name()

[Give Feedback](https://ideas.digitalocean.com/documentation)

# pydo.registry.validate\_name()

Generated on 25 Nov 2025
from `pydo` version
[`v0.21.0`](https://github.com/digitalocean/pydo/releases/tag/v0.21.0)

## Description

To validate that a container registry name is available for use, send a POST
request to `/v2/registry/validate-name`.

If the name is both formatted correctly and available, the response code will
be 204 and contain no body. If the name is already in use, the response will
be a 409 Conflict.

## Request Sample

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "name": "example"
}

resp = client.registry.validate_name(body=req)
```

## More Information

See [the API spec for this endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/registry_validate_name) to view additional detail on responses, headers, parameters, and more.

In this article...

- [Description](https://docs.digitalocean.com/reference/pydo/reference/registry/validate_name/#description)
- [Request Sample](https://docs.digitalocean.com/reference/pydo/reference/registry/validate_name/#request-sample)
- [More Information](https://docs.digitalocean.com/reference/pydo/reference/registry/validate_name/#more-information)

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