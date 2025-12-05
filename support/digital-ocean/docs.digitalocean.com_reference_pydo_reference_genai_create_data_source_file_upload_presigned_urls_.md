---
url: "https://docs.digitalocean.com/reference/pydo/reference/genai/create_data_source_file_upload_presigned_urls/"
title: "pydo.genai.create_data_source_file_upload_presigned_urls() | DigitalOcean Documentation"
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
      - [attach\_agent()](https://docs.digitalocean.com/reference/pydo/reference/genai/attach_agent/)
      - [attach\_agent\_function()](https://docs.digitalocean.com/reference/pydo/reference/genai/attach_agent_function/)
      - [attach\_knowledge\_base()](https://docs.digitalocean.com/reference/pydo/reference/genai/attach_knowledge_base/)
      - [attach\_knowledge\_bases()](https://docs.digitalocean.com/reference/pydo/reference/genai/attach_knowledge_bases/)
      - [cancel\_indexing\_job()](https://docs.digitalocean.com/reference/pydo/reference/genai/cancel_indexing_job/)
      - [create\_agent()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_agent/)
      - [create\_agent\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_agent_api_key/)
      - [create\_anthropic\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_anthropic_api_key/)
      - [create\_data\_source\_file\_upload\_presigned\_urls()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_data_source_file_upload_presigned_urls/)
      - [create\_evaluation\_dataset()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_evaluation_dataset/)
      - [create\_evaluation\_dataset\_file\_upload\_presigned\_urls()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_evaluation_dataset_file_upload_presigned_urls/)
      - [create\_evaluation\_test\_case()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_evaluation_test_case/)
      - [create\_indexing\_job()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_indexing_job/)
      - [create\_knowledge\_base()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_knowledge_base/)
      - [create\_knowledge\_base\_data\_source()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_knowledge_base_data_source/)
      - [create\_model\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_model_api_key/)
      - [create\_oauth2\_dropbox\_tokens()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_oauth2_dropbox_tokens/)
      - [create\_openai\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_openai_api_key/)
      - [create\_scheduled\_indexing()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_scheduled_indexing/)
      - [create\_workspace()](https://docs.digitalocean.com/reference/pydo/reference/genai/create_workspace/)
      - [delete\_agent()](https://docs.digitalocean.com/reference/pydo/reference/genai/delete_agent/)
      - [delete\_agent\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/delete_agent_api_key/)
      - [delete\_anthropic\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/delete_anthropic_api_key/)
      - [delete\_knowledge\_base()](https://docs.digitalocean.com/reference/pydo/reference/genai/delete_knowledge_base/)
      - [delete\_knowledge\_base\_data\_source()](https://docs.digitalocean.com/reference/pydo/reference/genai/delete_knowledge_base_data_source/)
      - [delete\_model\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/delete_model_api_key/)
      - [delete\_openai\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/delete_openai_api_key/)
      - [delete\_scheduled\_indexing()](https://docs.digitalocean.com/reference/pydo/reference/genai/delete_scheduled_indexing/)
      - [delete\_workspace()](https://docs.digitalocean.com/reference/pydo/reference/genai/delete_workspace/)
      - [detach\_agent()](https://docs.digitalocean.com/reference/pydo/reference/genai/detach_agent/)
      - [detach\_agent\_function()](https://docs.digitalocean.com/reference/pydo/reference/genai/detach_agent_function/)
      - [detach\_knowledge\_base()](https://docs.digitalocean.com/reference/pydo/reference/genai/detach_knowledge_base/)
      - [get\_agent()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_agent/)
      - [get\_agent\_children()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_agent_children/)
      - [get\_agent\_usage()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_agent_usage/)
      - [get\_anthropic\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_anthropic_api_key/)
      - [get\_evaluation\_run()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_evaluation_run/)
      - [get\_evaluation\_run\_prompt\_results()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_evaluation_run_prompt_results/)
      - [get\_evaluation\_run\_results()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_evaluation_run_results/)
      - [get\_evaluation\_test\_case()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_evaluation_test_case/)
      - [get\_indexing\_job()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_indexing_job/)
      - [get\_indexing\_job\_details\_signed\_url()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_indexing_job_details_signed_url/)
      - [get\_knowledge\_base()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_knowledge_base/)
      - [get\_oauth2\_url()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_oauth2_url/)
      - [get\_openai\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_openai_api_key/)
      - [get\_scheduled\_indexing()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_scheduled_indexing/)
      - [get\_workspace()](https://docs.digitalocean.com/reference/pydo/reference/genai/get_workspace/)
      - [list\_agent\_api\_keys()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_agent_api_keys/)
      - [list\_agent\_versions()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_agent_versions/)
      - [list\_agents()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_agents/)
      - [list\_agents\_by\_anthropic\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_agents_by_anthropic_key/)
      - [list\_agents\_by\_openai\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_agents_by_openai_key/)
      - [list\_agents\_by\_workspace()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_agents_by_workspace/)
      - [list\_anthropic\_api\_keys()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_anthropic_api_keys/)
      - [list\_datacenter\_regions()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_datacenter_regions/)
      - [list\_evaluation\_metrics()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_evaluation_metrics/)
      - [list\_evaluation\_runs\_by\_test\_case()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_evaluation_runs_by_test_case/)
      - [list\_evaluation\_test\_cases()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_evaluation_test_cases/)
      - [list\_evaluation\_test\_cases\_by\_workspace()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_evaluation_test_cases_by_workspace/)
      - [list\_indexing\_job\_data\_sources()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_indexing_job_data_sources/)
      - [list\_indexing\_jobs()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_indexing_jobs/)
      - [list\_indexing\_jobs\_by\_knowledge\_base()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_indexing_jobs_by_knowledge_base/)
      - [list\_knowledge\_base\_data\_sources()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_knowledge_base_data_sources/)
      - [list\_knowledge\_bases()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_knowledge_bases/)
      - [list\_model\_api\_keys()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_model_api_keys/)
      - [list\_models()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_models/)
      - [list\_openai\_api\_keys()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_openai_api_keys/)
      - [list\_workspaces()](https://docs.digitalocean.com/reference/pydo/reference/genai/list_workspaces/)
      - [regenerate\_agent\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/regenerate_agent_api_key/)
      - [regenerate\_model\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/regenerate_model_api_key/)
      - [rollback\_to\_agent\_version()](https://docs.digitalocean.com/reference/pydo/reference/genai/rollback_to_agent_version/)
      - [run\_evaluation\_test\_case()](https://docs.digitalocean.com/reference/pydo/reference/genai/run_evaluation_test_case/)
      - [update\_agent()](https://docs.digitalocean.com/reference/pydo/reference/genai/update_agent/)
      - [update\_agent\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/update_agent_api_key/)
      - [update\_agent\_deployment\_visibility()](https://docs.digitalocean.com/reference/pydo/reference/genai/update_agent_deployment_visibility/)
      - [update\_agent\_function()](https://docs.digitalocean.com/reference/pydo/reference/genai/update_agent_function/)
      - [update\_agents\_workspace()](https://docs.digitalocean.com/reference/pydo/reference/genai/update_agents_workspace/)
      - [update\_anthropic\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/update_anthropic_api_key/)
      - [update\_attached\_agent()](https://docs.digitalocean.com/reference/pydo/reference/genai/update_attached_agent/)
      - [update\_evaluation\_test\_case()](https://docs.digitalocean.com/reference/pydo/reference/genai/update_evaluation_test_case/)
      - [update\_knowledge\_base()](https://docs.digitalocean.com/reference/pydo/reference/genai/update_knowledge_base/)
      - [update\_model\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/update_model_api_key/)
      - [update\_openai\_api\_key()](https://docs.digitalocean.com/reference/pydo/reference/genai/update_openai_api_key/)
      - [update\_workspace()](https://docs.digitalocean.com/reference/pydo/reference/genai/update_workspace/)
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
- [genai](https://docs.digitalocean.com/reference/pydo/reference/genai/)
- create\_data\_source\_file\_upload\_presigned\_urls()

[Give Feedback](https://ideas.digitalocean.com/documentation)

# pydo.genai.create\_data\_source\_file\_upload\_presigned\_urls()

Generated on 25 Nov 2025
from `pydo` version
[`v0.21.0`](https://github.com/digitalocean/pydo/releases/tag/v0.21.0)

## Description

To create presigned URLs for knowledge base data source file upload, send a POST request to `/v2/gen-ai/knowledge_bases/data_sources/file_upload_presigned_urls`.

## More Information

See [the API spec for this endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_create_data_source_file_upload_presigned_urls) to view additional detail on responses, headers, parameters, and more.

In this article...

- [Description](https://docs.digitalocean.com/reference/pydo/reference/genai/create_data_source_file_upload_presigned_urls/#description)
- [More Information](https://docs.digitalocean.com/reference/pydo/reference/genai/create_data_source_file_upload_presigned_urls/#more-information)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

Cookie Preferences

GenAI Agent - DigitalOcean