---
url: "https://docs.digitalocean.com/reference/terraform/reference/resources/genai/"
title: "digitalocean_genai_agent | DigitalOcean Documentation"
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
  - [Configure Terraform](https://docs.digitalocean.com/reference/terraform/getting-started/)
  - [Provider Reference](https://docs.digitalocean.com/reference/terraform/reference/)
    - [Resources](https://docs.digitalocean.com/reference/terraform/reference/resources/)
      - [digitalocean\_app](https://docs.digitalocean.com/reference/terraform/reference/resources/app/)
      - [digitalocean\_cdn](https://docs.digitalocean.com/reference/terraform/reference/resources/cdn/)
      - [digitalocean\_certificate](https://docs.digitalocean.com/reference/terraform/reference/resources/certificate/)
      - [digitalocean\_container\_registry](https://docs.digitalocean.com/reference/terraform/reference/resources/container_registry/)
      - [digitalocean\_container\_registry\_docker\_credentials](https://docs.digitalocean.com/reference/terraform/reference/resources/container_registry_docker_credentials/)
      - [digitalocean\_custom\_image](https://docs.digitalocean.com/reference/terraform/reference/resources/custom_image/)
      - [digitalocean\_database\_cluster](https://docs.digitalocean.com/reference/terraform/reference/resources/database_cluster/)
      - [digitalocean\_database\_connection\_pool](https://docs.digitalocean.com/reference/terraform/reference/resources/database_connection_pool/)
      - [digitalocean\_database\_db](https://docs.digitalocean.com/reference/terraform/reference/resources/database_db/)
      - [digitalocean\_database\_firewall](https://docs.digitalocean.com/reference/terraform/reference/resources/database_firewall/)
      - [digitalocean\_database\_kafka\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_config/)
      - [digitalocean\_database\_kafka\_schema\_registry](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_schema_registry/)
      - [digitalocean\_database\_kafka\_topic](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_topic/)
      - [digitalocean\_database\_mongodb\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_mongodb_config/)
      - [digitalocean\_database\_mysql\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_mysql_config/)
      - [digitalocean\_database\_online\_migration](https://docs.digitalocean.com/reference/terraform/reference/resources/database_online_migration/)
      - [digitalocean\_database\_opensearch\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_opensearch_config/)
      - [digitalocean\_database\_postgresql\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_postgresql_config/)
      - [digitalocean\_database\_redis\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_redis_config/)
      - [digitalocean\_database\_replica](https://docs.digitalocean.com/reference/terraform/reference/resources/database_replica/)
      - [digitalocean\_database\_user](https://docs.digitalocean.com/reference/terraform/reference/resources/database_user/)
      - [digitalocean\_database\_valkey\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_valkey_config/)
      - [digitalocean\_domain](https://docs.digitalocean.com/reference/terraform/reference/resources/domain/)
      - [digitalocean\_droplet](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet/)
      - [digitalocean\_droplet\_autoscale](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet_autoscale/)
      - [digitalocean\_droplet\_snapshot](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet_snapshot/)
      - [digitalocean\_firewall](https://docs.digitalocean.com/reference/terraform/reference/resources/firewall/)
      - [digitalocean\_floating\_ip](https://docs.digitalocean.com/reference/terraform/reference/resources/floating_ip/)
      - [digitalocean\_floating\_ip\_assignment](https://docs.digitalocean.com/reference/terraform/reference/resources/floating_ip_assignment/)
      - [digitalocean\_genai\_agent](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/)
      - [digitalocean\_kubernetes\_cluster](https://docs.digitalocean.com/reference/terraform/reference/resources/kubernetes_cluster/)
      - [digitalocean\_kubernetes\_node\_pool](https://docs.digitalocean.com/reference/terraform/reference/resources/kubernetes_node_pool/)
      - [digitalocean\_loadbalancer](https://docs.digitalocean.com/reference/terraform/reference/resources/loadbalancer/)
      - [digitalocean\_monitor\_alert](https://docs.digitalocean.com/reference/terraform/reference/resources/monitor_alert/)
      - [digitalocean\_partner\_attachment](https://docs.digitalocean.com/reference/terraform/reference/resources/partner_network_connect/)
      - [digitalocean\_project](https://docs.digitalocean.com/reference/terraform/reference/resources/project/)
      - [digitalocean\_project\_resources](https://docs.digitalocean.com/reference/terraform/reference/resources/project_resources/)
      - [digitalocean\_record](https://docs.digitalocean.com/reference/terraform/reference/resources/record/)
      - [digitalocean\_reserved\_ip](https://docs.digitalocean.com/reference/terraform/reference/resources/reserved_ip/)
      - [digitalocean\_reserved\_ip\_assignment](https://docs.digitalocean.com/reference/terraform/reference/resources/reserved_ip_assignment/)
      - [digitalocean\_reserved\_ipv6](https://docs.digitalocean.com/reference/terraform/reference/resources/reserved_ipv6/)
      - [digitalocean\_reserved\_ipv6\_assignment](https://docs.digitalocean.com/reference/terraform/reference/resources/reserved_ipv6_assignment/)
      - [digitalocean\_spaces\_bucket](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket/)
      - [digitalocean\_spaces\_bucket\_logging](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket_logging/)
      - [digitalocean\_spaces\_bucket\_object](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket_object/)
      - [digitalocean\_spaces\_bucket\_policy](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket_policy/)
      - [digitalocean\_spaces\_cors\_configuration](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket_cors_configuration/)
      - [digitalocean\_spaces\_key](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_key/)
      - [digitalocean\_ssh\_key](https://docs.digitalocean.com/reference/terraform/reference/resources/ssh_key/)
      - [digitalocean\_tag](https://docs.digitalocean.com/reference/terraform/reference/resources/tag/)
      - [digitalocean\_uptime\_alert](https://docs.digitalocean.com/reference/terraform/reference/resources/uptime_alert/)
      - [digitalocean\_uptime\_check](https://docs.digitalocean.com/reference/terraform/reference/resources/uptime_check/)
      - [digitalocean\_volume](https://docs.digitalocean.com/reference/terraform/reference/resources/volume/)
      - [digitalocean\_volume\_attachment](https://docs.digitalocean.com/reference/terraform/reference/resources/volume_attachment/)
      - [digitalocean\_volume\_snapshot](https://docs.digitalocean.com/reference/terraform/reference/resources/volume_snapshot/)
      - [digitalocean\_vpc](https://docs.digitalocean.com/reference/terraform/reference/resources/vpc/)
      - [digitalocean\_vpc\_nat\_gateway](https://docs.digitalocean.com/reference/terraform/reference/resources/vpc_nat_gateway/)
      - [digitalocean\_vpc\_peering](https://docs.digitalocean.com/reference/terraform/reference/resources/vpc_peering/)
    - [Data Sources](https://docs.digitalocean.com/reference/terraform/reference/data-sources/)
  - [Deploy a Web App](https://docs.digitalocean.com/reference/terraform/deploy-web-app/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Provider Reference](https://docs.digitalocean.com/reference/terraform/reference/)
- [Resources](https://docs.digitalocean.com/reference/terraform/reference/resources/)
- digitalocean\_genai\_agent

[Give Feedback](https://ideas.digitalocean.com/documentation)

# digitalocean\_genai\_agent

Generated on 13 Nov 2025
from Terraform version
[`v2.69.0`](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.69.0)

Provides a resource to manage a DigitalOcean GenAI Agent. With this resource you can create, update, and delete agents, as well as update the agent’s visibility status.

## Example Usage

```hcl
resource "digitalocean_genai_agent" "terraform-testing" {
  description = "Agent for testing update and delete functionality."
  instruction = "You are DigitalOcean's Solutions Architect Assistant, designed to help users find the perfect solution for their technical needs."
  model_uuid  = "d754f2d7-d1f0-11ef-bf8f-4e013e2ddde4"
  name        = "terraform-testing"
  project_id  = "84e1e297-ee40-41ac-95ff-1067cf2206e9"
  region      = "tor1"
  tags        = ["marketplace-agent-terraform"]
}
```

## Argument Reference

The following arguments are supported:

- **description** (Optional) - A description for the agent.
- **instruction** (Required) - The detailed instruction for the agent.
- **model\_uuid** (Required) - The UUID of the agent’s associated model.
- **name** (Required) - The name assigned to the agent.
- **project\_id** (Required) - The project identifier for the agent.
- **region** (Required) - The region where the agent is deployed.
- **tags** (Optional) - A list of tags associated with the agent.
- **visibility** (Optional) - The visibility of the agent (e.g., “public” or “private”).
- **anthropic\_key\_uuid** (Optional) - Anthropic API key UUID to use with Anthropic models.
- **knowledge\_base\_uuid** (Optional) - List of knowledge base UUIDs to attach to the agent.
- **open\_ai\_key\_uuid** (Optional) - OpenAI API key UUID to use with OpenAI models.
- **anthropic\_api\_key** (Optional) - Anthropic API Key information block.
- **api\_key\_infos** (Optional) - List of API Key Info blocks.
- **api\_keys** (Optional) - List of API Key blocks.
- **chatbot\_identifiers** (Optional) - List of chatbot identifiers.
- **deployment** (Optional) - List of deployment blocks.
- **functions** (Optional) - List of function blocks.
- **agent\_guardrail** (Optional) - List of agent guardrail blocks.
- **chatbot** (Optional) - Chatbot configuration block.
- **if\_case** (Optional) - If case condition.
- **k** (Optional) - K value.
- **knowledge\_bases** (Optional, Computed) - List of knowledge base blocks.
- **max\_tokens** (Optional) - Maximum tokens allowed.
- **model** (Optional, Computed) - Model block.
- **open\_ai\_api\_key** (Optional) - OpenAI API Key information block.
- **provide\_citations** (Optional) - Whether the agent should provide citations.
- **retrieval\_method** (Optional) - Retrieval method used.
- **route\_created\_by** (Optional) - User who created the route.
- **route\_created\_at** (Optional) - Timestamp when the route was created.
- **route\_uuid** (Optional) - Route UUID.
- **route\_name** (Optional) - Route name.
- **template** (Optional) - Agent template block.
- **temperature** (Optional) - Temperature setting.
- **top\_p** (Optional) - Top-p sampling parameter.
- **url** (Optional) - URL for the agent.
- **user\_id** (Optional) - User ID linked with the agent.

## Attributes Reference

After creation, the following attributes are exported:

- **agent\_id** \- The unique identifier of the agent.
- **created\_at** \- The timestamp when the agent was created.
- **updated\_at** \- The timestamp when the agent was last updated.
- **instruction** \- The instruction used with the agent.
- **model\_uuid** \- The UUID of the agent’s model.
- **name** \- The name of the agent.
- **project\_id** \- The project associated with the agent.
- **region** \- The region where the agent is deployed.
- **description** \- The agent’s description.
- **visibility** \- The agent’s visibility status.
- **tags** \- The list of tags assigned to the agent.
- **if\_case** \- A condition parameter for agent behavior.
- **k** \- An integer representing the “k” value.
- **max\_tokens** \- Maximum tokens allowed.
- **retrieval\_method** \- The retrieval method used.
- **route\_created\_at** \- Timestamp for when the agent route was created.
- **route\_created\_by** \- Who created the route.
- **route\_uuid** \- The unique identifier for the route.
- **route\_name** \- The name of the route.
- **temperature** \- The temperature setting of the agent.
- **top\_p** \- The top-p sampling parameter.
- **url** \- The URL associated with the agent.
- **user\_id** \- The user ID linked with the agent.
- **anthropic\_key\_uuid** \- Anthropic API key UUID.
- **knowledge\_base\_uuid** \- List of knowledge base UUIDs.
- **open\_ai\_key\_uuid** \- OpenAI API key UUID.
- **anthropic\_api\_key** \- Anthropic API Key information.
- **api\_key\_infos** \- List of API Key Info blocks.
- **api\_keys** \- List of API Key blocks.
- **chatbot\_identifiers** \- List of chatbot identifiers.
- **deployment** \- List of deployment blocks.
- **functions** \- List of function blocks.
- **agent\_guardrail** \- List of agent guardrail blocks.
- **chatbot** \- Chatbot configuration block.
- **knowledge\_bases** \- List of knowledge base blocks.
- **model** \- Model block.
- **open\_ai\_api\_key** \- OpenAI API Key information block.
- **provide\_citations** \- Whether the agent provides citations.
- **template** \- Agent template block.

## Update Behavior

When the **visibility**, **description**, **instruction**, **k**, **max\_tokens**, **model\_uuid**, **name**, **open\_ai\_key\_uuid**, **project\_id**, **retrieval\_method**, **region**, **tags**, **temperature**, or **top\_p** attribute is changed, the provider invokes the update API endpoint to adjust the agent’s configuration.

# digitalocean\_genai\_function

We can pick up the agent id from the agent terraform resource and input, output schema have json values as currently there is no defined schema available.
Checkout the following API docs - [https://docs.digitalocean.com/reference/api/digitalocean/#tag/GradientAI-Platform/operation/genai\_attach\_agent\_function](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GradientAI-Platform/operation/genai_attach_agent_function)

```hcl

resource "digitalocean_genai_function" "check" {
  agent_id       = digitalocean_genai_agent.terraform-testing.id
  description    = "Adding a function route and this will also tell temperature"
  faas_name      = "default/testing"
  faas_namespace = "fn-b90faf52-2b42-49c2-9792-75edfbb6f397"
  function_name  = "terraform-tf-complete"
  input_schema   = <<EOF
  {
      "parameters": [\
          {\
          "in": "query",\
          "name": "zipCode",\
          "schema": {\
              "type": "string"\
          },\
          "required": false,\
          "description": "The ZIP code for which to fetch the weather"\
          },\
          {\
          "name": "measurement",\
          "schema": {\
              "enum": [\
              "F",\
              "C"\
              ],\
              "type": "string"\
          },\
          "required": false,\
          "description": "The measurement unit for temperature (F or C)",\
          "in": "query"\
          }\
      ]
  }
  EOF

  output_schema = <<EOF
  {
      "properties": [\
          {\
          "name": "temperature",\
          "type": "number",\
          "description": "The temperature for the specified location"\
          },\
          {\
          "name": "measurement",\
          "type": "string",\
          "description": "The measurement unit used for the temperature (F or C)"\
          },\
          {\
          "name": "conditions",\
          "type": "string",\
          "description": "A description of the current weather conditions (Sunny, Cloudy, etc)"\
          }\
      ]
  }
  EOF
}
```

## Attributes Reference

After creation, the following attributes are exported:

- **agent\_id** \- The unique identifier of the agent.
- **description** \- Description for the function
- **faas\_name** \- The name of the function in the DigitalOcean functions platform
- **faas\_namespace** \- The namespace of the function in the DigitalOcean functions platform
- **function\_name** \- The name for function to be assigned inside agent, two functions inside agent cannot have same name
- **input\_schema** \- The input schema associated with the function.
- **output\_schema** \- The output schema associated with the function.

**input\_schema** and **output\_schema** have a json input please check out this docs for more clarity - [https://docs.digitalocean.com/reference/api/digitalocean/#tag/GradientAI-Platform/operation/genai\_attach\_agent\_function](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GradientAI-Platform/operation/genai_attach_agent_function)

## Import

A DigitalOcean GenAI Agent can be imported using its UUID. For example:

```sh
terraform import digitalocean_genai_agent.terraform-testing 79292fb6-3627-11f0-bf8f-4e013e2ddde4
```

## Usage Notes

Changes to the agent’s configuration, such as updating the instruction, description, or visibility, will trigger the corresponding update functions in the provider. This resource enables you to manage the complete lifecycle of a DigitalOcean GenAI Agent within your Terraform configuration.

* * *

# digitalocean\_genai\_knowledge\_base

Provides a resource to manage a DigitalOcean GenAI Knowledge Base. With this resource you can create, update, and delete knowledge bases, as well as configure their data sources.

## Example Usage

```hcl
resource "digitalocean_genai_knowledge_base" "example" {
  name                 = "terraform-kb-example"
  project_id           = "84e1e297-ee40-41ac-95ff-1067cf2206e9"
  region               = "tor1"
  embedding_model_uuid = "22653204-79ed-11ef-bf8f-4e013e2ddde4"
  tags                 = ["documentation", "terraform-managed"]

  datasources {
    web_crawler_data_source {
      base_url        = "https://docs.digitalocean.com/products/kubernetes/"
      crawling_option = "SCOPED"
      embed_media     = true
    }
  }
}
```

## Argument Reference

The following arguments are supported:

- **name** (Required) - The name of the knowledge base (between 2-32 characters).
- **project\_id** (Required) - The unique identifier of the project to which the - \*\*knowledge base belongs.
- **region** (Required) - The region where the knowledge base is deployed.
- **embedding\_model\_uuid** (Required) - The unique identifier of the - \*\*embedding model.
- **datasources** (Required) - One or more data source configurations - \*\*for the knowledge base.

  - **web\_crawler\_data\_source** \- Web crawler data source configuration:

    - **base\_url** \- The base URL for the web crawler to index.
    - **crawling\_option** \- The crawling option (e.g., “SCOPED”).
    - **embed\_media** \- Whether to embed media content.
  - **spaces\_data\_source** \- Spaces data source configuration:

    - **bucket\_name** \- The name of the Spaces bucket.
    - **item\_path** \- The path to items within the bucket.
    - **region** \- The region of the Spaces bucket.
  - **file\_upload\_data\_source** \- File upload data source configuration.
- **vpc\_uuid** (Optional) - The unique identifier of the VPC to which - \*\*the knowledge base belongs.
- **database\_id** (Optional) - The unique identifier of the DigitalOcean - \*\*OpenSearch database this knowledge base will use.
- **is\_public** (Optional) - Indicates whether the knowledge base is public or - \*\*private.
- **tags** (Optional) - A list of tags associated with the knowledge base.

## Attributes Reference

After creation, the following attributes are exported:

- **id** \- The unique identifier of the knowledge base.
- **name** \- The name of the knowledge base.
- **project\_id** \- The project associated with the knowledge base.
- **region** \- The region where the knowledge base is deployed.
- **vpc\_uuid** \- The VPC identifier associated with the knowledge base.
- **embedding\_model\_uuid** \- The UUID of the embedding model used by the knowledge base.
- **datasources** \- The data sources configured for the knowledge base.
- **created\_at** \- The timestamp when the knowledge base was created.
- **updated\_at** \- The timestamp when the knowledge base was last updated.
- **added\_to\_agent\_at** \- The timestamp when the knowledge base was added to an agent (if applicable).
- **database\_id** \- The OpenSearch database identifier.
- **is\_public** \- Whether the knowledge base is public.
- **last\_indexing\_job** \- Information about the last indexing job:

  - **status** \- The status of the indexing job.
  - **created\_at** \- When the indexing job was created.
  - **finished\_at** \- When the indexing job finished (if completed).
- **tags** \- The list of tags assigned to the knowledge base.

## Update Behavior

When the **database\_id**, **embedding\_model\_uuid**, **name**, **project\_id**, **tags** or **uuid** attributes are changed, the provider invokes the update API endpoint to adjust the knowledge base’s configuration.

## Import

A DigitalOcean GenAI Knowledge Base can be imported using its UUID. For example:

```sh
terraform import digitalocean_genai_knowledge_base.example a1b2c3d4-5678-90ab-cdef-1234567890ab
```

## Usage Notes

- Changes to **datasources**, **embedding\_model\_uuid**, **spaces\_data\_source**, **web\_crawler\_data\_source**, **agent\_uuid** and **vpc\_uuid** will force recreation of the knowledge base.
- To add additional data sources after creation, use the `digitalocean_genai_knowledge_base_data_source` resource.
- To attach a knowledge base to an agent, use the `digitalocean_genai_agent_knowledge_base_attachment` resource.

# digitalocean\_genai\_openai\_api\_key

Provides a resource to manage a DigitalOcean GenAI OpenAI API Key. With this resource you can create, update, and delete OpenAI API keys, as well as reference them in other GenAI resources (such as agents).

## Example Usage

```hcl
resource "digitalocean_genai_openai_api_key" "example" {
  api_key = "sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  name    = "Production Key"
}

data "digitalocean_genai_openai_api_keys" "all" {}

output "all_openai_api_keys" {
  value = data.digitalocean_genai_openai_api_keys.all.openai_api_keys
}

data "digitalocean_genai_openai_api_key" "by_id" {
  uuid = digitalocean_genai_openai_api_key.example.uuid
}

output "openai_api_key_info" {
  value = data.digitalocean_genai_openai_api_key.by_id
}
```

## Argument Reference

The following arguments are supported:

- **api\_key** (Required) - The OpenAI API key string.
- **name** (Required) - The name assigned to the API key.

## Attributes Reference

After creation, the following attributes are exported:

- **id** \- The unique identifier of the OpenAI API key (same as `uuid`).
- **uuid** \- The UUID of the OpenAI API key.
- **name** \- The name of the API key.
- **created\_at** \- The timestamp when the API key was created.
- **updated\_at** \- The timestamp when the API key was last updated.
- **deleted\_at** \- The timestamp when the API key was deleted (if applicable).
- **created\_by** \- The user who created the API key.
- **models** \- The list of models associated with the API key.

### List All OpenAI API Keys

```hcl
data "digitalocean_genai_openai_api_keys" "all" {}

output "all_openai_api_keys" {
  value = data.digitalocean_genai_openai_api_keys.all.openai_api_keys
}
```

### Get OpenAI API Key by UUID

```hcl
data "digitalocean_genai_openai_api_key" "by_id" {
  uuid = "your-openai-api-key-uuid"
}

output "openai_api_key_info" {
  value = data.digitalocean_genai_openai_api_key.by_id
}
```

### List Agents by OpenAI API Key

```hcl
data "digitalocean_genai_agents_by_openai_api_key" "by_key" {
  uuid = digitalocean_genai_openai_api_key.example.uuid
}

output "agents_by_openai_key" {
  value = data.digitalocean_genai_agents_by_openai_api_key.by_key.agents
}
```

## Update Behavior

When the **name** attribute is changed, the provider invokes the update API endpoint to adjust the OpenAI API key’s configuration.

## Import

A DigitalOcean GenAI OpenAI API Key can be imported using its UUID. For example:

```sh
terraform import digitalocean_genai_openai_api_key.example a1b2c3d4-5678-90ab-cdef-1234567890ab
```

## Usage Notes

- The OpenAI API key resource can be referenced by agents and other GenAI resources.
- Deleting the API key resource in Terraform will remove it from your DigitalOcean account.

# digitalocean\_genai\_agent\_route

Provides a resource to manage a DigitalOcean GenAI Agent Route. With this resource you can create, update, and delete agent routes to connect parent agents with child agents for routing functionality.

## Example Usage

```hcl

resource "digitalocean_genai_agent_route" "weather_route" {
  parent_agent_uuid = "b90e05b8-566f-11f0-bf8f-4e013e2ddde4"
  child_agent_uuid  = "01efac06-500e-11f0-bf8f-4e013e2ddde4"
  route_name        = "weather_route"
  if_case           = "use this to get weather information"
}
```

## Argument Reference

The following arguments are supported:

- **parent\_agent\_uuid** (Required) - The UUID of the parent agent that will route requests.
- **child\_agent\_uuid** (Required) - The UUID of the child agent that will handle routed requests.
- **route\_name** (Optional) - The name assigned to the route for identification.
- **if\_case** (Optional) - The condition or case description for when this route should be used.

## Attributes Reference

After creation, the following attributes are exported:

- **uuid** \- The unique identifier of the agent route.
- **parent\_agent\_uuid** \- The UUID of the parent agent.
- **child\_agent\_uuid** \- The UUID of the child agent.
- **route\_name** \- The name of the route.
- **if\_case** \- The condition for using this route.

## Update Behavior

When the **route\_name** or **if\_case** attributes are changed, the provider invokes the update API endpoint to adjust the route’s configuration. The **parent\_agent\_uuid** and **child\_agent\_uuid** cannot be changed after creation.

## Import

A DigitalOcean GenAI Agent Route can be imported using its UUID. For example:

```sh
terraform import digitalocean_genai_agent_route.weather_route 12345678-1234-1234-1234-123456789012
```

## Usage Notes

- Agent routes enable hierarchical agent structures where parent agents can route requests to appropriate child agents based on conditions.
- Both parent and child agents must exist before creating a route between them.
- Changes to **parent\_agent\_uuid** or **child\_agent\_uuid** will force recreation of the route.

* * *

# digitalocean\_genai\_indexing\_job\_cancel

Provides a resource to cancel running or pending indexing jobs for DigitalOcean GenAI Knowledge Bases. This resource is useful for managing long-running indexing operations that need to be stopped before completion.

## Example Usage

```hcl
# Cancel a specific indexing job
resource "digitalocean_genai_indexing_job_cancel" "cancel_job" {
  uuid = "f1e2d3c4-5678-90ab-cdef-1234567890ab"
}

# Cancel a job conditionally based on its status
data "digitalocean_genai_indexing_job" "monitor_job" {
  uuid = "f1e2d3c4-5678-90ab-cdef-1234567890ab"
}

resource "digitalocean_genai_indexing_job_cancel" "conditional_cancel" {
  count = data.digitalocean_genai_indexing_job.monitor_job.status == "running" && data.digitalocean_genai_indexing_job.monitor_job.phase == "processing" ? 1 : 0

  uuid = data.digitalocean_genai_indexing_job.monitor_job.uuid
}
```

## Argument Reference

The following arguments are supported:

- **uuid** (Required) - The unique identifier of the indexing job to cancel.

## Attributes Reference

After creation, the following attributes are exported:

- **id** \- The unique identifier of the indexing job (same as uuid).
- **uuid** \- The UUID of the indexing job.
- **status** \- The status of the indexing job after cancellation.
- **knowledge\_base\_uuid** \- The UUID of the knowledge base associated with this indexing job.
- **phase** \- Current phase of the indexing job.
- **completed\_datasources** \- Number of data sources that were completed before cancellation.
- **total\_datasources** \- Total number of data sources in the indexing job.
- **tokens** \- Number of tokens processed before cancellation.
- **total\_items\_failed** \- Total number of items that failed during indexing.
- **total\_items\_indexed** \- Total number of items that were successfully indexed.
- **total\_items\_skipped** \- Total number of items that were skipped during indexing.
- **data\_source\_uuids** \- List of data source UUIDs associated with this indexing job.
- **created\_at** \- When the indexing job was created (in RFC3339 format).
- **updated\_at** \- When the indexing job was last updated (in RFC3339 format).
- **started\_at** \- When the indexing job was started (in RFC3339 format).
- **finished\_at** \- When the indexing job was finished (in RFC3339 format).

## Behavior Notes

- **Immediate Effect**: Once this resource is created, the cancellation request is sent immediately to the DigitalOcean API.
- **Status Requirements**: Only indexing jobs with status “pending” or “running” can be cancelled. Attempting to cancel completed, failed, or already cancelled jobs will result in an error.

## Lifecycle Behavior

- **Creation**: Sends cancellation request to the specified indexing job.
- **Update**: This resource is immutable - changes to `uuid` will force recreation.
- **Deletion**: Removing this resource from Terraform configuration does not restore or restart the cancelled indexing job.

## Error Handling

The resource will fail with an error in the following scenarios:

- The indexing job UUID does not exist
- The indexing job is not in a cancellable state (“pending” or “running”)
- Insufficient permissions to cancel the indexing job
- The associated knowledge base has been deleted

## Import

A DigitalOcean GenAI Indexing Job Cancel operation cannot be imported as it represents a one-time action rather than a persistent resource state.

## Usage Notes

- **One-time Operation**: This resource represents a cancellation action. Once the job is cancelled, the resource serves as a record of the cancellation.
- **Monitoring**: Use with data sources like `digitalocean_genai_indexing_job` to monitor job status before and after cancellation.
- **Cleanup**: Consider using lifecycle rules or conditional logic to only cancel jobs when specific conditions are met.
- **Auditing**: The `reason` field is useful for maintaining an audit trail of why indexing jobs were cancelled.

## Example: Conditional Cancellation Based on Status

```hcl
# Monitor job status and cancel if in certain state
data "digitalocean_genai_indexing_job" "long_running" {
  uuid = var.indexing_job_uuid
}

# Cancel if job is running and in processing phase
resource "digitalocean_genai_indexing_job_cancel" "cancel_processing" {
  count = (
    data.digitalocean_genai_indexing_job.long_running.status == "running" &&
    data.digitalocean_genai_indexing_job.long_running.phase == "processing"
  ) ? 1 : 0

  uuid = data.digitalocean_genai_indexing_job.long_running.uuid
}
```

In this article...

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#example-usage)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#argument-reference)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#attributes-reference)
- [Update Behavior](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#update-behavior)

- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#attributes-reference-1)
- [Import](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#import)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#usage-notes)

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#example-usage-1)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#argument-reference-1)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#attributes-reference-2)
- [Update Behavior](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#update-behavior-1)
- [Import](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#import-1)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#usage-notes-1)

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#example-usage-2)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#argument-reference-2)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#attributes-reference-3)
  - [List All OpenAI API Keys](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#list-all-openai-api-keys)
  - [Get OpenAI API Key by UUID](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#get-openai-api-key-by-uuid)
  - [List Agents by OpenAI API Key](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#list-agents-by-openai-api-key)
- [Update Behavior](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#update-behavior-2)
- [Import](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#import-2)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#usage-notes-2)

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#example-usage-3)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#argument-reference-3)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#attributes-reference-4)
- [Update Behavior](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#update-behavior-3)
- [Import](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#import-3)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#usage-notes-3)

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#example-usage-4)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#argument-reference-4)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#attributes-reference-5)
- [Behavior Notes](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#behavior-notes)
- [Lifecycle Behavior](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#lifecycle-behavior)
- [Error Handling](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#error-handling)
- [Import](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#import-4)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#usage-notes-4)
- [Example: Conditional Cancellation Based on Status](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/#example-conditional-cancellation-based-on-status)

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