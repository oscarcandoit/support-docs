---
url: "https://docs.digitalocean.com/products/marketplace/catalog/cagent/"
title: "cagent | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/marketplace.6eb4c8240f6fd707ebe2218018dc699d375e2e3e9885d7fb3e760a9fc120a68e.svg)Marketplace](https://docs.digitalocean.com/products/marketplace/)
- [Droplet 1-Click Apps](https://docs.digitalocean.com/products/marketplace/droplet-1-click-apps/)
- [Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/marketplace/kubernetes-1-click-apps/)
- [SaaS Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/)
- [1-Click Models](https://docs.digitalocean.com/products/marketplace/1-click-models/)
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/cagent/)
  - [Add-Ons](https://docs.digitalocean.com/products/marketplace/categories/add-ons/)
  - [Analytics](https://docs.digitalocean.com/products/marketplace/categories/analytics/)
  - [Blogs and Forums](https://docs.digitalocean.com/products/marketplace/categories/blogs-and-forums/)
  - [Business Apps](https://docs.digitalocean.com/products/marketplace/categories/business-apps/)
  - [Chat](https://docs.digitalocean.com/products/marketplace/categories/chat/)
  - [Data Science](https://docs.digitalocean.com/products/marketplace/categories/data-science/)
  - [Databases](https://docs.digitalocean.com/products/marketplace/categories/databases/)
  - [Developer Tools](https://docs.digitalocean.com/products/marketplace/categories/developer-tools/)
  - [eCommerce](https://docs.digitalocean.com/products/marketplace/categories/ecommerce/)
  - [eLearning](https://docs.digitalocean.com/products/marketplace/categories/elearning/)
  - [Email](https://docs.digitalocean.com/products/marketplace/categories/email/)
  - [Frameworks](https://docs.digitalocean.com/products/marketplace/categories/frameworks/)
  - [Functions](https://docs.digitalocean.com/products/marketplace/categories/functions/)
  - [Gaming](https://docs.digitalocean.com/products/marketplace/categories/gaming/)
  - [Kubernetes](https://docs.digitalocean.com/products/marketplace/categories/kubernetes/)
  - [Logging](https://docs.digitalocean.com/products/marketplace/categories/logging/)
  - [Media](https://docs.digitalocean.com/products/marketplace/categories/media/)
  - [Monitoring](https://docs.digitalocean.com/products/marketplace/categories/monitoring/)
  - [Network Tools](https://docs.digitalocean.com/products/marketplace/categories/network-tools/)
  - [Security](https://docs.digitalocean.com/products/marketplace/categories/security/)
  - [Storage](https://docs.digitalocean.com/products/marketplace/categories/storage/)
- [Glossary](https://docs.digitalocean.com/glossary/marketplace/)
- [Service-Level Agreement](https://www.digitalocean.com/sla/marketplace)

- cagent

[Give Feedback](https://ideas.digitalocean.com/documentation)

# cagent

Generated on 10 Nov 2025
from [the cagent catalog page](https://marketplace.digitalocean.com/apps/cagent)

## What is cagent?

cagent is Docker’s cutting-edge AI agent framework that lets you create and run intelligent AI agents with specialized knowledge, tools, and capabilities. Think of it as building a team of virtual experts that work together to solve problems for you.

Built on modern AI technologies, cagent offers:

- **Multi-agent architecture** \- Create specialized agents for different domains
- **Rich tool ecosystem** \- Agents can use external tools and APIs via the MCP protocol
- **Smart delegation** \- Agents automatically route tasks to the most suitable specialist
- **YAML configuration** \- Simple, declarative model and agent configuration
- **Advanced reasoning** \- Built-in “think”, “todo” and “memory” tools for complex problem-solving
- **Multiple AI providers** \- Support for OpenAI, Anthropic, Google Gemini, and Docker Model Runner

## Key Features

- Create intelligent AI agents with specialized capabilities
- Build multi-agent teams that collaborate on complex tasks
- Use Model Context Protocol (MCP) tools for extended functionality
- Simple YAML-based configuration
- Support for both cloud-based and local AI models
- Push and pull agents from Docker Hub
- Built-in reasoning and memory capabilities
- Docker-based deployment for easy management

## System Requirements

cagent is installed as a binary on Ubuntu 24.04 and requires Docker for containerized AI models and tools.

| Use Case | RAM | CPU |
| --- | --- | --- |
| Basic agents with cloud APIs | 1GB | 1CPU |
| Local models (small) | 4GB | 2CPU |
| Local models (medium) | 8GB | 4CPU |
| Local models (large) | 16GB+ | 8CPU+ |

**Note**: Using cloud AI providers (OpenAI, Anthropic, Google) requires minimal resources. Running local models via Docker Model Runner requires more resources depending on model size.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [cagent](https://github.com/docker/cagent) | v1.9.10 | [Apache License 2.0](https://github.com/docker/cagent/blob/main/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=cagent)

## Creating an App using the API

In addition to creating a Droplet from the cagent 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB cagent Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"cagent"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying cagent

### Quick Start

1. **Deploy the Droplet** \- Deploy a droplet using this 1-Click app from the DigitalOcean Marketplace
2. **SSH into your Droplet** \- `ssh root@your-droplet-ip`
3. **Set your API key** \- Configure access to your preferred AI provider
4. **Run an agent** \- Start with example configurations or create your own

### Setting Up API Keys

Based on the AI models you plan to use, set the corresponding provider API key:

```
# For OpenAI models (GPT-4, GPT-3.5, etc.)
export OPENAI_API_KEY=your_openai_key_here

# For Anthropic models (Claude)
export ANTHROPIC_API_KEY=your_anthropic_key_here

# For Google Gemini models
export GOOGLE_API_KEY=your_google_key_here
```

**Note**: You only need API keys for the providers you intend to use. For local models via Docker Model Runner, no API key is required.

### Running Your First Agent

Try the included example agents:

```
# Run a basic agent (requires OPENAI_API_KEY)
cagent run /opt/cagent/examples/basic_agent.yaml

# Run a local agent using Docker Model Runner (no API key needed)
cagent run /opt/cagent/examples/dmr.yaml

# Try other examples
cagent run /opt/cagent/examples/pirate.yaml      # Fun pirate assistant
cagent run /opt/cagent/examples/pythonist.yaml   # Python programming expert
cagent run /opt/cagent/examples/todo.yaml        # Task manager with memory
```

### Creating Custom Agents

Use the interactive agent builder:

```
# Interactive mode - follow the prompts
cagent new

# Generate with a specific model
cagent new --model openai/gpt-4o-mini

# Generate with a local model via DMR
cagent new --model dmr/ai/gemma3:2B-Q4_0
```

### Using Docker Model Runner (DMR)

Docker Model Runner allows you to run AI models locally without API keys:

1. **Enable DMR** in Docker Engine (may be enabled by default)
2. **Pull a model**: Docker will automatically pull models when needed
3. **Run agents** using the `dmr` provider in your configuration

Example DMR configuration:

```
version: "2"

agents:
  root:
    model: local-model
    description: A helpful AI assistant
    instruction: You are a knowledgeable assistant.

models:
  local-model:
    provider: dmr
    model: ai/gemma3:2B-Q4_0
    max_tokens: 8192
```

### Agent Store - Push and Pull Agents

Share your agents via Docker Hub:

```
# Pull an agent from Docker Hub
cagent pull docker.io/username/my-agent:latest

# Push your agent to Docker Hub
cagent push ./my-agent.yaml docker.io/username/my-agent:latest

# Run an agent directly from Docker Hub
cagent run creek/pirate
```

## Configuration

### Basic Agent Configuration

Agents are configured using YAML files. Here’s a minimal example:

```
version: "2"

agents:
  root:
    model: openai/gpt-4o-mini
    description: A helpful AI assistant
    instruction: |
      You are a knowledgeable assistant that helps users with various tasks.
      Be helpful, accurate, and concise in your responses.

models:
  openai:
    provider: openai
    model: gpt-4o-mini
    max_tokens: 4096
```

### Multi-Agent Teams

Create specialized agents that work together:

```
version: "2"

agents:
  root:
    model: coordinator
    description: Main coordinator agent
    instruction: |
      You coordinate tasks and delegate to specialized agents.
    sub_agents: ["researcher", "writer"]

  researcher:
    model: research-model
    description: Research specialist
    instruction: |
      You research topics and gather information.

  writer:
    model: writing-model
    description: Writing specialist
    instruction: |
      You create well-written content based on research.

models:
  coordinator:
    provider: anthropic
    model: claude-sonnet-4-0
  research-model:
    provider: openai
    model: gpt-4o
  writing-model:
    provider: anthropic
    model: claude-sonnet-4-0
```

### Adding Tools via MCP

Extend agent capabilities with Model Context Protocol tools:

```
version: "2"

agents:
  root:
    model: assistant
    description: Assistant with web search capabilities
    instruction: You help users by searching the web when needed.
    toolsets:
      - type: mcp
        ref: docker:duckduckgo  # Web search via containerized MCP server

models:
  assistant:
    provider: openai
    model: gpt-4o-mini
    max_tokens: 4096
```

## Common Commands

```
# View all available commands
cagent --help

# Run an agent
cagent run ./my-agent.yaml

# Create a new agent interactively
cagent new

# Build a Docker image for your agent
cagent build ./my-agent.yaml my-agent:latest

# Pull an agent from Docker Hub
cagent pull creek/pirate

# Push your agent to Docker Hub
cagent push ./my-agent.yaml username/my-agent:latest

# View agent readme
cagent readme ./my-agent.yaml
```

## Examples and Documentation

Example agent configurations are available in:

- `/opt/cagent/examples/` \- Local example configurations
- `/opt/cagent/README.txt` \- Quick reference guide
- [GitHub Examples](https://github.com/docker/cagent/tree/main/examples) \- Comprehensive examples

Categories of examples:

- **Basic**: Simple single-agent configurations
- **Advanced**: Agents with specialized tools and capabilities
- **Multi-agent**: Agent teams that collaborate on complex tasks

## Use Cases

- **Code Assistance**: Specialized agents for different programming languages
- **Research and Analysis**: Agents that search, analyze, and summarize information
- **Content Creation**: Multi-agent teams for research, writing, and editing
- **Task Automation**: Agents with tools for filesystem, git, and system operations
- **Custom Workflows**: Build specialized agent teams for your specific needs

## Support and Resources

- **GitHub Repository**: [https://github.com/docker/cagent](https://github.com/docker/cagent)
- **Documentation**: [https://github.com/docker/cagent/blob/main/docs/USAGE.md](https://github.com/docker/cagent/blob/main/docs/USAGE.md)
- **Contributing Guide**: [https://github.com/docker/cagent/blob/main/docs/CONTRIBUTING.md](https://github.com/docker/cagent/blob/main/docs/CONTRIBUTING.md)
- **DigitalOcean Community**: [https://www.digitalocean.com/community](https://www.digitalocean.com/community)
- **Docker Community Slack**: [https://dockercommunity.slack.com/archives/C09DASHHRU4](https://dockercommunity.slack.com/archives/C09DASHHRU4)

## Post-Deployment Notes

After deployment, you’ll have:

- cagent binary installed at `/usr/local/bin/cagent`
- Docker pre-installed for running containerized models and tools
- Example agent configurations in `/opt/cagent/examples/`
- Quick reference guide at `/opt/cagent/README.txt`

### Next Steps

1. Set up your preferred AI provider API key
2. Try the example agents
3. Create your first custom agent with `cagent new`
4. Explore the MCP tool ecosystem
5. Build specialized agent teams for your workflows

### Important Notes

- **API Keys**: Store API keys securely in environment variables
- **Docker Model Runner**: Requires sufficient RAM for local model inference
- **Tool Installation**: Some MCP tools may require additional installation (npm, cargo)
- **Networking**: cagent primarily operates via CLI; no open ports required for basic usage
- **Updates**: Run `cagent --version` to check your version; update by downloading new releases

Perfect for developers, researchers, and teams looking to harness the power of AI agents for complex problem-solving and automation.

In this article...

- [What is cagent?](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#what-is-cagent)
- [Key Features](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#key-features)
- [System Requirements](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#system-requirements)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#creating-an-app-using-the-api)
- [Getting Started After Deploying cagent](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#getting-started-after-deploying-cagent)
  - [Quick Start](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#quick-start)
  - [Setting Up API Keys](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#setting-up-api-keys)
  - [Running Your First Agent](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#running-your-first-agent)
  - [Creating Custom Agents](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#creating-custom-agents)
  - [Using Docker Model Runner (DMR)](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#using-docker-model-runner-dmr)
  - [Agent Store - Push and Pull Agents](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#agent-store---push-and-pull-agents)
- [Configuration](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#configuration)
  - [Basic Agent Configuration](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#basic-agent-configuration)
  - [Multi-Agent Teams](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#multi-agent-teams)
  - [Adding Tools via MCP](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#adding-tools-via-mcp)
- [Common Commands](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#common-commands)
- [Examples and Documentation](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#examples-and-documentation)
- [Use Cases](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#use-cases)
- [Support and Resources](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#support-and-resources)
- [Post-Deployment Notes](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#post-deployment-notes)
  - [Next Steps](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#next-steps)
  - [Important Notes](https://docs.digitalocean.com/products/marketplace/catalog/cagent/#important-notes)

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