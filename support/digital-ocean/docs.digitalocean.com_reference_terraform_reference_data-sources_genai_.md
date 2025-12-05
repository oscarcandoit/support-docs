---
url: "https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/"
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
    - [Data Sources](https://docs.digitalocean.com/reference/terraform/reference/data-sources/)
      - [digitalocean\_account](https://docs.digitalocean.com/reference/terraform/reference/data-sources/account/)
      - [digitalocean\_app](https://docs.digitalocean.com/reference/terraform/reference/data-sources/app/)
      - [digitalocean\_certificate](https://docs.digitalocean.com/reference/terraform/reference/data-sources/certificate/)
      - [digitalocean\_container\_registry](https://docs.digitalocean.com/reference/terraform/reference/data-sources/container_registry/)
      - [digitalocean\_database\_ca](https://docs.digitalocean.com/reference/terraform/reference/data-sources/database_ca/)
      - [digitalocean\_database\_cluster](https://docs.digitalocean.com/reference/terraform/reference/data-sources/database_cluster/)
      - [digitalocean\_database\_connection\_pool](https://docs.digitalocean.com/reference/terraform/reference/data-sources/database_connection_pool/)
      - [digitalocean\_database\_metrics\_credentials](https://docs.digitalocean.com/reference/terraform/reference/data-sources/database_metrics_credentials/)
      - [digitalocean\_database\_replica](https://docs.digitalocean.com/reference/terraform/reference/data-sources/database_replica/)
      - [digitalocean\_database\_user](https://docs.digitalocean.com/reference/terraform/reference/data-sources/database_user/)
      - [digitalocean\_domain](https://docs.digitalocean.com/reference/terraform/reference/data-sources/domain/)
      - [digitalocean\_domains](https://docs.digitalocean.com/reference/terraform/reference/data-sources/domains/)
      - [digitalocean\_droplet](https://docs.digitalocean.com/reference/terraform/reference/data-sources/droplet/)
      - [digitalocean\_droplet\_autoscale](https://docs.digitalocean.com/reference/terraform/reference/data-sources/droplet_autoscale/)
      - [digitalocean\_droplet\_snapshot](https://docs.digitalocean.com/reference/terraform/reference/data-sources/droplet_snapshot/)
      - [digitalocean\_droplets](https://docs.digitalocean.com/reference/terraform/reference/data-sources/droplets/)
      - [digitalocean\_firewall](https://docs.digitalocean.com/reference/terraform/reference/data-sources/firewall/)
      - [digitalocean\_floating\_ip](https://docs.digitalocean.com/reference/terraform/reference/data-sources/floating_ip/)
      - [digitalocean\_genai\_agent](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/)
      - [digitalocean\_image](https://docs.digitalocean.com/reference/terraform/reference/data-sources/image/)
      - [digitalocean\_images](https://docs.digitalocean.com/reference/terraform/reference/data-sources/images/)
      - [digitalocean\_kubernetes\_cluster](https://docs.digitalocean.com/reference/terraform/reference/data-sources/kubernetes_cluster/)
      - [digitalocean\_kubernetes\_versions](https://docs.digitalocean.com/reference/terraform/reference/data-sources/kubernetes_versions/)
      - [digitalocean\_loadbalancer](https://docs.digitalocean.com/reference/terraform/reference/data-sources/loadbalancer/)
      - [digitalocean\_partner\_attachment](https://docs.digitalocean.com/reference/terraform/reference/data-sources/partner_network_connect/)
      - [digitalocean\_partner\_attachment\_service\_key](https://docs.digitalocean.com/reference/terraform/reference/data-sources/partner_network_connect_service_key/)
      - [digitalocean\_project](https://docs.digitalocean.com/reference/terraform/reference/data-sources/project/)
      - [digitalocean\_projects](https://docs.digitalocean.com/reference/terraform/reference/data-sources/projects/)
      - [digitalocean\_record](https://docs.digitalocean.com/reference/terraform/reference/data-sources/record/)
      - [digitalocean\_records](https://docs.digitalocean.com/reference/terraform/reference/data-sources/records/)
      - [digitalocean\_region](https://docs.digitalocean.com/reference/terraform/reference/data-sources/region/)
      - [digitalocean\_regions](https://docs.digitalocean.com/reference/terraform/reference/data-sources/regions/)
      - [digitalocean\_reserved\_ip](https://docs.digitalocean.com/reference/terraform/reference/data-sources/reserved_ip/)
      - [digitalocean\_reserved\_ipv6](https://docs.digitalocean.com/reference/terraform/reference/data-sources/reserved_ipv6/)
      - [digitalocean\_sizes](https://docs.digitalocean.com/reference/terraform/reference/data-sources/sizes/)
      - [digitalocean\_spaces\_bucket](https://docs.digitalocean.com/reference/terraform/reference/data-sources/spaces_bucket/)
      - [digitalocean\_spaces\_bucket\_object](https://docs.digitalocean.com/reference/terraform/reference/data-sources/spaces_bucket_object/)
      - [digitalocean\_spaces\_bucket\_objects](https://docs.digitalocean.com/reference/terraform/reference/data-sources/spaces_bucket_objects/)
      - [digitalocean\_spaces\_buckets](https://docs.digitalocean.com/reference/terraform/reference/data-sources/spaces_buckets/)
      - [digitalocean\_spaces\_key](https://docs.digitalocean.com/reference/terraform/reference/data-sources/spaces_key/)
      - [digitalocean\_ssh\_key](https://docs.digitalocean.com/reference/terraform/reference/data-sources/ssh_key/)
      - [digitalocean\_ssh\_keys](https://docs.digitalocean.com/reference/terraform/reference/data-sources/ssh_keys/)
      - [digitalocean\_tag](https://docs.digitalocean.com/reference/terraform/reference/data-sources/tag/)
      - [digitalocean\_tags](https://docs.digitalocean.com/reference/terraform/reference/data-sources/tags/)
      - [digitalocean\_volume](https://docs.digitalocean.com/reference/terraform/reference/data-sources/volume/)
      - [digitalocean\_volume\_snapshot](https://docs.digitalocean.com/reference/terraform/reference/data-sources/volume_snapshot/)
      - [digitalocean\_vpc](https://docs.digitalocean.com/reference/terraform/reference/data-sources/vpc/)
      - [digitalocean\_vpc\_nat\_gateway](https://docs.digitalocean.com/reference/terraform/reference/data-sources/vpc_nat_gateway/)
      - [digitalocean\_vpc\_peering](https://docs.digitalocean.com/reference/terraform/reference/data-sources/vpc_peering/)
  - [Deploy a Web App](https://docs.digitalocean.com/reference/terraform/deploy-web-app/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Provider Reference](https://docs.digitalocean.com/reference/terraform/reference/)
- [Data Sources](https://docs.digitalocean.com/reference/terraform/reference/data-sources/)
- digitalocean\_genai\_agent

[Give Feedback](https://ideas.digitalocean.com/documentation)

# digitalocean\_genai\_agent

Generated on 13 Nov 2025
from Terraform version
[`v2.69.0`](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.69.0)

Provides a data source that retrieves details about an existing DigitalOcean GenAI Agent. Use this data source to query an agent by its unique identifier.

## Example Usage

```hcl
data "digitalocean_genai_agent" "example" {
  agent_id = "79292fb6-3627-11f0-bf8f-4e013e2ddde4"
}

output "agent_detail" {
  value = data.digitalocean_genai_agent.example
}
```

## Argument Reference

The following argument is supported:

- **agent\_id** (Required) – The unique identifier of the agent to retrieve.

## Attributes Reference

All fields below are exported and may be referenced:

- **uuid** – The unique identifier of the agent.
- **name** – The name assigned to the agent.
- **instruction** – The instruction configured for the agent.
- **model\_uuid** – The UUID of the agent’s associated model.
- **project\_id** – The project identifier linked with the agent.
- **region** – The region where the agent is deployed.
- **description** – A description for the agent.
- **tags** – A list of tags associated with the agent.
- **visibility** – The visibility of the agent (e.g., public or private).
- **anthropic\_key\_uuid** – Anthropic API key UUID to use with Anthropic models.
- **knowledge\_base\_uuid**– List of knowledge base UUIDs attached to the agent.
- **open\_ai\_key\_uuid** – OpenAI API key UUID to use with OpenAI models.
- **anthropic\_api\_key** – Anthropic API Key information block.
- **api\_key\_infos** – List of API Key Info blocks.
- **api\_keys** – List of API Key blocks.
- **chatbot\_identifiers**– List of chatbot identifiers.
- **deployment** – List of deployment blocks.
- **functions** – List of function blocks.
- **agent\_guardrail** – List of agent guardrail blocks.
- **chatbot** – Chatbot configuration block.
- **if\_case** – If case condition.
- **k** – K value.
- **knowledge\_bases** – List of knowledge base blocks.
- **max\_tokens** – Maximum tokens allowed.
- **model** – Model block.
- **open\_ai\_api\_key** – OpenAI API Key information block.
- **provide\_citations** – Whether the agent should provide citations.
- **retrieval\_method** – Retrieval method used.
- **route\_created\_by** – User who created the route.
- **route\_created\_at** – Timestamp when the route was created.
- **route\_uuid** – Route UUID.
- **route\_name** – Route name.
- **template** – Agent template block.
- **temperature** – Temperature setting.
- **top\_p** – Top-p sampling parameter.
- **url** – URL for the agent.
- **user\_id** – User ID linked with the agent.
- **created\_at** – The timestamp when the agent was created (in RFC3339 format).
- **updated\_at** – The timestamp when the agent was last updated (in RFC3339 format).

## Usage Notes

This data source can be used to dynamically fetch the details of an existing agent into your Terraform configuration. You may reference exported attributes in other resources or outputs.

For example, to reference the agent’s name:

This data source is useful for integrating agent details into your workflow or for performing validations against current configurations.

# digitalocean\_genai\_knowledge\_base

Provides a data source that retrieves details about an existing DigitalOcean GenAI Knowledge Base. Use this data source to query a knowledge base by its unique identifier (UUID).

## Example Usage

```hcl
data "digitalocean_genai_knowledge_base" "example" {
  uuid = "a1b2c3d4-5678-90ab-cdef-1234567890ab"
}

output "kb_details" {
  value = data.digitalocean_genai_knowledge_base.example
}
```

## Argument Reference

The following argument is supported:

- **uuid** (Required) – The unique identifier of the knowledge base to retrieve.

## Attributes Reference

All fields below are exported and may be referenced:

- **id** \- The unique identifier of the knowledge base (same as uuid).
- **name** \- The name assigned to the knowledge base.
- **project\_id** \- The unique identifier of the project to which the knowledge base belongs.
- **region** \- The region where the knowledge base is deployed.
- **vpc\_uuid** \- The unique identifier of the VPC to which the knowledge base belongs (if applicable).
- **created\_at** \- The timestamp when the knowledge base was created (in RFC3339 format).
- **updated\_at** \- The timestamp when the knowledge base was last updated (in RFC3339 format).
- **added\_to\_agent\_at** \- The timestamp when the knowledge base was added to an agent (if applicable).
- **database\_id** \- The unique identifier of the DigitalOcean OpenSearch database used by this knowledge base.
- **embedding\_model\_uuid** \- The unique identifier of the embedding model used by the knowledge base.
- **is\_public** \- Indicates whether the knowledge base is public or private.
- **tags** \- A list of tags associated with the knowledge base.
- **datasources** \- A list of data sources configured for the knowledge base, each containing:

  - **web\_crawler\_data\_source** \- Details of web crawler data sources:

    - **base\_url** \- The base URL for the web crawler to index.
    - **crawling\_option** \- The crawling option (e.g., “SCOPED”).
    - **embed\_media** \- Whether to embed media content.
  - **spaces\_data\_source** \- Details of Spaces data sources:

    - **bucket\_name** \- The name of the Spaces bucket.
    - **item\_path** \- The path to items within the bucket.
    - **region** \- The region of the Spaces bucket.
  - **file\_upload\_data\_source** \- Details of file upload data sources.
- **last\_indexing\_job** \- Information about the last indexing job for the knowledge base

## Usage Notes

This data source can be used to dynamically fetch the details of an existing knowledge base into your Terraform configuration. You may reference exported attributes in other resources or outputs.

For example, to create an agent with an existing knowledge base:

```hcl
data "digitalocean_genai_knowledge_base" "existing" {
  uuid = "a1b2c3d4-5678-90ab-cdef-1234567890ab"
}

resource "digitalocean_genai_agent_knowledge_base_attachment" "example" {
  agent_uuid          = digitalocean_genai_agent.example.id
  knowledge_base_uuid = data.digitalocean_genai_knowledge_base.existing.id
}
```

## Example Usage: Fetching a Knowledge Base

```hcl
data "digitalocean_genai_knowledge_base" "example" {
  uuid = "a1b2c3d4-5678-90ab-cdef-1234567890ab"
}

output "kb_details" {
  value = data.digitalocean_genai_knowledge_base.example
}
```

## Example Usage: Fetching Knowledge Base Data Sources

```hcl
data "digitalocean_genai_knowledge_base_data_sources" "example" {
  knowledge_base_uuid = "a1b2c3d4-5678-90ab-cdef-1234567890ab"
}

output "kb_datasources" {
  value = data.digitalocean_genai_knowledge_base_data_sources.example.datasources
}
```

# digitalocean\_genai\_agent\_versions

Provides a data source that retrieves all versions of an existing DigitalOcean GenAI Agent. Use this data source to query an agent by its unique identifier.

## Example Usage

```hcl
data "digitalocean_genai_agent_versions" "example" {
  agent_id = "79292fb6-3627-11f0-bf8f-4e013e2ddde4"
}

output "agent_detail" {
  value = data.digitalocean_genai_agent_versions.example
}
```

# digitalocean\_genai\_openai\_api\_keys

Provides a data source that lists all OpenAI API keys in your DigitalOcean account.

### Example Usage

```hcl
data "digitalocean_genai_openai_api_keys" "all" {}

output "all_openai_api_keys" {
  value = data.digitalocean_genai_openai_api_keys.all.openai_api_keys
}
```

### Attributes Reference

- **openai\_api\_keys** – List of OpenAI API keys.

* * *

## digitalocean\_genai\_openai\_api\_key

Provides a data source that retrieves a single OpenAI API key by UUID.

### Example Usage

```hcl
data "digitalocean_genai_openai_api_key" "by_id" {
  uuid = "your-openai-api-key-uuid"
}

output "openai_api_key_info" {
  value = data.digitalocean_genai_openai_api_key.by_id
}
```

### Argument Reference

- **uuid** (Required) – The UUID of the OpenAI API key.

### Attributes Reference

- **id** \- The unique identifier of the OpenAI API key (same as uuid).
- **uuid** \- The UUID of the OpenAI API key.
- **name** \- The name of the API key.
- **created\_at** \- The timestamp when the API key was created.
- **updated\_at** \- The timestamp when the API key was last updated.
- **deleted\_at** \- The timestamp when the API key was deleted (if applicable).
- **created\_by** \- The user who created the API key.
- **models** \- The list of models associated with the API key.

* * *

### digitalocean\_genai\_agents\_by\_openai\_api\_key

Provides a data source that lists all agents associated with a specific OpenAI API key.

### Example Usage

```hcl
data "digitalocean_genai_agents_by_openai_api_key" "by_key" {
  uuid = "your-openai-api-key-uuid"
}

output "agents_by_openai_key" {
  value = data.digitalocean_genai_agents_by_openai_api_key.by_key.agents
}
```

### Argument Reference

- **uuid** (Required) – The UUID of the OpenAI API key.

### Attributes Reference

- **agents** – List of agents associated with the OpenAI API key.

* * *

## Usage Notes

These data sources can be used to dynamically fetch details of existing GenAI resources into your Terraform configuration. You may reference exported attributes in other resources or outputs.

* * *

# digitalocean\_genai\_models

Provides a data source that lists all available GenAI models in DigitalOcean.

## Example Usage

```hcl
data "digitalocean_genai_models" "available_models" {}

output "all_models" {
  value = data.digitalocean_genai_models.available_models.models
}

output "model_names" {
  description = "Names of available models"
  value       = [for model in data.digitalocean_genai_models.available_models.models : model.name]
}
```

## Attributes Reference

- **models** – List of available GenAI models. Each model contains:

  - **id** \- The human-readable unique identifier of the model
  - **uuid** \- The UUID of the model
  - **name** \- The name of the model
  - **is\_foundational** \- Whether the model is a foundational model
  - **parent\_uuid** \- The UUID of the parent model (if applicable)
  - **upload\_complete** \- Whether the model upload is complete
  - **url** \- The URL of the model
  - **created\_at** \- When the model was created
  - **updated\_at** \- When the model was last updated
  - **agreement** \- License agreement information for the model:

    - **description** \- Description of the agreement
    - **name** \- Name of the agreement
    - **url** \- URL to the full license text
    - **uuid** \- UUID of the agreement
  - **version** \- Version information of the model:

    - **major** \- Major version number
    - **minor** \- Minor version number
    - **patch** \- Patch version number

## Usage Notes

This data source can be used to discover available GenAI models for use with agents or other GenAI resources.

* * *

# digitalocean\_genai\_regions

Provides a data source that lists all available GenAI regions in DigitalOcean.

## Example Usage

```hcl
data "digitalocean_genai_regions" "available_regions" {}

output "all_regions" {
  value = data.digitalocean_genai_regions.available_regions.regions
}

output "region_names" {
  description = "Names of available regions"
  value       = [for region in data.digitalocean_genai_regions.available_regions.regions : region.region]
}
```

## Attributes Reference

- **regions** – List of available GenAI regions. Each region contains:

  - **region** \- The region identifier (e.g., “tor1”)
  - **inference\_url** \- The inference URL for the region
  - **serves\_batch** \- Whether the region supports batch processing
  - **serves\_inference** \- Whether the region supports inference requests
  - **stream\_inference\_url** \- The streaming inference URL for the region

## Usage Notes

This data source can be used to discover available regions for deploying GenAI resources like agents or knowledge bases.

* * *

# digitalocean\_genai\_knowledge\_base\_indexing\_jobs

Provides a data source that lists all indexing jobs for a specific DigitalOcean GenAI Knowledge Base. Use this data source to monitor and track indexing operations within a knowledge base.

## Example Usage

```hcl
data "digitalocean_genai_knowledge_base_indexing_jobs" "kb_jobs" {
  knowledge_base_uuid = "a1b2c3d4-5678-90ab-cdef-1234567890ab"
}

output "indexing_jobs" {
  value = data.digitalocean_genai_knowledge_base_indexing_jobs.kb_jobs.jobs
}

# Filter for running jobs
output "running_jobs" {
  value = [for job in data.digitalocean_genai_knowledge_base_indexing_jobs.kb_jobs.jobs : job if job.status == "running"]
}
```

## Argument Reference

The following argument is supported:

- **knowledge\_base\_uuid** (Required) – The unique identifier of the knowledge base to retrieve indexing jobs for.

## Attributes Reference

- **jobs** – List of indexing jobs for the knowledge base. Each job contains:

  - **id** \- The unique identifier of the indexing job
  - **uuid** \- The UUID of the indexing job
  - **knowledge\_base\_uuid** \- The UUID of the associated knowledge base
  - **status** \- The current status of the indexing job (e.g., “pending”, “running”, “completed”, “failed”, “cancelled”)
  - **created\_at** \- The timestamp when the indexing job was created (in RFC3339 format)
  - **started\_at** \- The timestamp when the indexing job started processing (in RFC3339 format)
  - **finished\_at** \- The timestamp when the indexing job finished (in RFC3339 format)
  - **progress** \- The current progress percentage (0-100)
  - **error\_message** \- Error message if the job failed
  - **total\_documents** \- Total number of documents to be indexed
  - **processed\_documents** \- Number of documents processed so far
  - **data\_source\_count** \- Number of data sources in this indexing job

## Usage Notes

This data source is useful for:

- Monitoring the progress of knowledge base indexing operations
- Identifying failed indexing jobs that may need attention
- Building automation around indexing job completion

* * *

# digitalocean\_genai\_indexing\_job\_data\_sources

Provides a data source that lists all data sources within a specific indexing job for a DigitalOcean GenAI Knowledge Base. Use this data source to understand what content is being processed in a particular indexing operation.

## Example Usage

```hcl
data "digitalocean_genai_indexing_job_data_sources" "job_sources" {
  indexing_job_uuid = "f1e2d3c4-5678-90ab-cdef-1234567890ab"
}

output "data_sources" {
  value = data.digitalocean_genai_indexing_job_data_sources.job_sources.indexed_data_sources
}

# Filter for web crawler sources
output "web_sources" {
  value = [for ds in data.digitalocean_genai_indexing_job_data_sources.job_sources.indexed_data_sources : ds if ds.type == "web_crawler"]
}
```

## Argument Reference

The following argument is supported:

- **indexing\_job\_uuid** (Required) – The unique identifier of the indexing job to retrieve data sources for.

## Attributes Reference

- **indexed\_data\_sources** – List of data sources within the indexing job. Each data source contains:

  - **id** \- The unique identifier of the data source
  - **uuid** \- The UUID of the data source
  - **type** \- The type of data source (e.g., “web\_crawler”, “spaces”, “file\_upload”)
  - **status** \- The current status of this data source processing (e.g., “pending”, “processing”, “completed”, “failed”)
  - **created\_at** \- The timestamp when the data source was added (in RFC3339 format)
  - **updated\_at** \- The timestamp when the data source was last updated (in RFC3339 format)
  - **processed\_documents** \- Number of documents processed from this data source
  - **total\_documents** \- Total number of documents found in this data source
  - **error\_message** \- Error message if processing failed
  - **web\_crawler\_data\_source** \- Details for web crawler data sources:

    - **base\_url** \- The base URL being crawled
    - **crawling\_option** \- The crawling scope option
    - **embed\_media** \- Whether media content is being embedded
    - **pages\_discovered** \- Number of pages discovered during crawling
  - **spaces\_data\_source** \- Details for Spaces data sources:

    - **bucket\_name** \- The name of the Spaces bucket
    - **item\_path** \- The path within the bucket
    - **region** \- The region of the Spaces bucket
    - **files\_discovered** \- Number of files discovered in the bucket
  - **file\_upload\_data\_source** \- Details for file upload data sources:

    - **files\_uploaded** \- Number of files uploaded
    - **total\_size\_bytes** \- Total size of uploaded files in bytes

## Usage Notes

This data source is useful for:

- Debugging indexing jobs by examining individual data source progress
- Understanding the composition of an indexing job
- Monitoring processing status of different content types

* * *

# digitalocean\_genai\_indexing\_job

Provides a data source that retrieves detailed information about a specific indexing job for a DigitalOcean GenAI Knowledge Base. Use this data source to get comprehensive status and progress information for an indexing operation.

## Example Usage

```hcl
data "digitalocean_genai_indexing_job" "specific_job" {
  uuid = "f1e2d3c4-5678-90ab-cdef-1234567890ab"
}

output "job_details" {
  value = data.digitalocean_genai_indexing_job.specific_job
}

# Check if job is complete
output "is_complete" {
  value = contains(["completed", "failed", "cancelled"], data.digitalocean_genai_indexing_job.specific_job.status)
}
```

## Argument Reference

The following argument is supported:

- **uuid** (Required) – The unique identifier of the indexing job to retrieve.

## Attributes Reference

All fields below are exported and may be referenced:

- **id** \- The unique identifier of the indexing job (same as uuid)
- **uuid** \- The UUID of the indexing job
- **knowledge\_base\_uuid** \- The UUID of the associated knowledge base
- **status** \- The current status of the indexing job (e.g., “pending”, “running”, “completed”, “failed”, “cancelled”)
- **created\_at** \- The timestamp when the indexing job was created (in RFC3339 format)
- **started\_at** \- The timestamp when the indexing job started processing (in RFC3339 format)
- **finished\_at** \- The timestamp when the indexing job finished (in RFC3339 format)
- **progress** \- The current progress percentage (0-100)
- **error\_message** \- Error message if the job failed
- **total\_documents** \- Total number of documents to be indexed
- **processed\_documents** \- Number of documents processed so far
- **failed\_documents** \- Number of documents that failed to process
- **data\_source\_count** \- Number of data sources in this indexing job
- **estimated\_completion\_time** \- Estimated completion time (in RFC3339 format)
- **processing\_time\_seconds** \- Total processing time in seconds (for completed jobs)
- **knowledge\_base** \- Information about the associated knowledge base:

  - **name** \- Name of the knowledge base
  - **uuid** \- UUID of the knowledge base
  - **project\_id** \- Project ID of the knowledge base
  - **region** \- Region where the knowledge base is located
- **data\_sources** \- List of data sources included in this indexing job
- **logs** \- Processing logs and events for the indexing job:

  - **timestamp** \- When the log entry was created
  - **level** \- Log level (e.g., “info”, “warning”, “error”)
  - **message** \- Log message content
  - **data\_source\_uuid** \- Associated data source UUID (if applicable)

## Usage Notes

This data source is useful for:

- Monitoring the detailed progress of a specific indexing job
- Building conditional logic based on job status in Terraform configurations
- Retrieving comprehensive diagnostics for troubleshooting failed jobs
- Getting accurate completion estimates for long-running indexing operations

In this article...

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#argument-reference)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#attributes-reference)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#usage-notes)

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage-1)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#argument-reference-1)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#attributes-reference-1)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#usage-notes-1)
- [Example Usage: Fetching a Knowledge Base](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage-fetching-a-knowledge-base)
- [Example Usage: Fetching Knowledge Base Data Sources](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage-fetching-knowledge-base-data-sources)

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage-2)

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage-3)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#attributes-reference-2)
- [digitalocean\_genai\_openai\_api\_key](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#digitalocean_genai_openai_api_key)
- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage-4)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#argument-reference-2)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#attributes-reference-3)
- [digitalocean\_genai\_agents\_by\_openai\_api\_key](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#digitalocean_genai_agents_by_openai_api_key)
- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage-5)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#argument-reference-3)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#attributes-reference-4)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#usage-notes-2)

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage-6)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#attributes-reference-5)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#usage-notes-3)

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage-7)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#attributes-reference-6)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#usage-notes-4)

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage-8)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#argument-reference-4)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#attributes-reference-7)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#usage-notes-5)

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage-9)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#argument-reference-5)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#attributes-reference-8)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#usage-notes-6)

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#example-usage-10)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#argument-reference-6)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#attributes-reference-9)
- [Usage Notes](https://docs.digitalocean.com/reference/terraform/reference/data-sources/genai/#usage-notes-7)

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