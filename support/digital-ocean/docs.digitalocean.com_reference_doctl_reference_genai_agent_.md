---
url: "https://docs.digitalocean.com/reference/doctl/reference/genai/agent/"
title: "doctl genai agent | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
  - [How to Install doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/)
  - [Command Reference](https://docs.digitalocean.com/reference/doctl/reference/)
    - [doctl 1-click](https://docs.digitalocean.com/reference/doctl/reference/1-click/)
    - [doctl account](https://docs.digitalocean.com/reference/doctl/reference/account/)
    - [doctl apps](https://docs.digitalocean.com/reference/doctl/reference/apps/)
    - [doctl auth](https://docs.digitalocean.com/reference/doctl/reference/auth/)
    - [doctl balance](https://docs.digitalocean.com/reference/doctl/reference/balance/)
    - [doctl billing-history](https://docs.digitalocean.com/reference/doctl/reference/billing-history/)
    - [doctl compute](https://docs.digitalocean.com/reference/doctl/reference/compute/)
    - [doctl databases](https://docs.digitalocean.com/reference/doctl/reference/databases/)
    - [doctl genai](https://docs.digitalocean.com/reference/doctl/reference/genai/)
      - [agent](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/)
        - [apikeys](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/apikeys/)
        - [create](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/create/)
        - [delete](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/delete/)
        - [functionroute](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/functionroute/)
        - [get](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/get/)
        - [list](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/list/)
        - [list-versions](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/list-versions/)
        - [route](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/route/)
        - [update](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/update/)
        - [update-visibility](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/update-visibility/)
      - [knowledge-base](https://docs.digitalocean.com/reference/doctl/reference/genai/knowledge-base/)
      - [list-models](https://docs.digitalocean.com/reference/doctl/reference/genai/list-models/)
      - [list-regions](https://docs.digitalocean.com/reference/doctl/reference/genai/list-regions/)
      - [openai-key](https://docs.digitalocean.com/reference/doctl/reference/genai/openai-key/)
    - [doctl invoice](https://docs.digitalocean.com/reference/doctl/reference/invoice/)
    - [doctl kubernetes](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/)
    - [doctl monitoring](https://docs.digitalocean.com/reference/doctl/reference/monitoring/)
    - [doctl network](https://docs.digitalocean.com/reference/doctl/reference/network/)
    - [doctl nfs](https://docs.digitalocean.com/reference/doctl/reference/nfs/)
    - [doctl projects](https://docs.digitalocean.com/reference/doctl/reference/projects/)
    - [doctl registries](https://docs.digitalocean.com/reference/doctl/reference/registries/)
    - [doctl registry](https://docs.digitalocean.com/reference/doctl/reference/registry/)
    - [doctl serverless](https://docs.digitalocean.com/reference/doctl/reference/serverless/)
    - [doctl spaces](https://docs.digitalocean.com/reference/doctl/reference/spaces/)
    - [doctl version](https://docs.digitalocean.com/reference/doctl/reference/version/)
    - [doctl vpcs](https://docs.digitalocean.com/reference/doctl/reference/vpcs/)
  - [Manage Load Balancers with doctl](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/with-doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Command Reference](https://docs.digitalocean.com/reference/doctl/reference/)
- [doctl genai](https://docs.digitalocean.com/reference/doctl/reference/genai/)
- agent

[Give Feedback](https://ideas.digitalocean.com/documentation)

# doctl genai agent

Generated on 20 Oct 2025
from `doctl` version
[`v1.146.0`](https://github.com/digitalocean/doctl/releases/tag/v1.146.0)

## Aliases

```shell
agents, a
```

## Description

The subcommands of `doctl genai agent` manage your GenAI agents.

## Flags

| Option | Description |
| --- | --- |
| `--help`, `-h` | Help for this command |

## Related Commands

| Command | Description |
| --- | --- |
| [doctl genai](https://docs.digitalocean.com/reference/doctl/reference/genai) | Manage GenAI resources |
| [doctl genai agent apikeys](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/apikeys) | Display commands for working with API keys of GenAI agents |
| [doctl genai agent create](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/create) | Creates a GenAI agent |
| [doctl genai agent delete](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/delete) | Deletes a GenAI agent |
| [doctl genai agent functionroute](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/functionroute) | Display commands that manages function routes for GenAI Agents. |
| [doctl genai agent get](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/get) | Retrieve information about an agent |
| [doctl genai agent list](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/list) | List GenAI agents |
| [doctl genai agent list-versions](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/list-versions) | List versions for an agent |
| [doctl genai agent route](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/route) | Display commands for working with GenAI agent routes |
| [doctl genai agent update](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/update) | Updates a GenAI agent name and configuration |
| [doctl genai agent update-visibility](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/update-visibility) | Update visibility of a GenAI agent |

## Global Flags

| Option | Description |
| --- | --- |
| `--access-token`, `-t` | API V2 access token |
| `--api-url`, `-u` | Override default API endpoint |
| `--config`, `-c` | Specify a custom config file<br>Default: |
| `--context` | Specify a custom authentication context name |
| `--http-retry-max` | Set maximum number of retries for requests that fail with a 429 or 500-level error<br>Default: `5` |
| `--http-retry-wait-max` | Set the minimum number of seconds to wait before retrying a failed request<br>Default: `30` |
| `--http-retry-wait-min` | Set the maximum number of seconds to wait before retrying a failed request<br>Default: `1` |
| `--interactive` | Enable interactive behavior. Defaults to true if the terminal supports it (default false)<br>Default: `false` |
| `--output`, `-o` | Desired output format \[text\|json\]<br>Default: `text` |
| `--trace` | Show a log of network activity while performing a command<br>Default: `false` |
| `--verbose`, `-v` | Enable verbose output<br>Default: `false` |

In this article...

- [Aliases](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/#aliases)
- [Description](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/#description)
- [Flags](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/#flags)
- [Related Commands](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/#related-commands)
- [Global Flags](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/#global-flags)

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