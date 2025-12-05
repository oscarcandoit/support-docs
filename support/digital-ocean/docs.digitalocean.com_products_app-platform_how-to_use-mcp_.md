---
url: "https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/"
title: "Use the DigitalOcean MCP Server | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/app-platform.965eeb0520b4c178cc9bf64423065e5aa5c2f47ad6102384e37beca3c079f287.svg)App Platform](https://docs.digitalocean.com/products/app-platform/)
- [Getting Started](https://docs.digitalocean.com/products/app-platform/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/)
  - [Sample Apps](https://docs.digitalocean.com/products/app-platform/getting-started/sample-apps/)
  - [Sample Functions](https://docs.digitalocean.com/products/functions/getting-started/sample-functions/)
  - [Deploy Sample Apps](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-sample-apps/)
  - [Deploy an RSS Reader](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-rss-reader/)
  - [Deploy Etherpad](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-etherpad/)
- [How-Tos](https://docs.digitalocean.com/products/app-platform/how-to/)
  - [Create Apps](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/)
  - [Deploy from Container Images](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/)
  - [Deploy From Monorepos](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-monorepo/)
  - [Deploy Using GitHub Actions](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/)
  - [Scale Apps](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/)
  - [Manage Components](https://docs.digitalocean.com/products/app-platform/how-to/manage-components/)
  - [Manage Data Storage](https://docs.digitalocean.com/products/app-platform/how-to/manage-data-storage/)
  - [Manage App Settings](https://docs.digitalocean.com/products/app-platform/how-to/manage-settings/)
  - [Manage Networking](https://docs.digitalocean.com/products/app-platform/how-to/manage-networking/)
  - [Manage Observability](https://docs.digitalocean.com/products/app-platform/how-to/manage-observability/)
  - [Manage Deployments](https://docs.digitalocean.com/products/app-platform/how-to/manage-deployments/)
  - [Access Console](https://docs.digitalocean.com/products/app-platform/how-to/console/)
  - [Restart or Rebuild App](https://docs.digitalocean.com/products/app-platform/how-to/restart-rebuild-app/)
  - [Update App Spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/)
  - [Manage Source Repository](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/)
  - [Add "Deploy to DigitalOcean" Button](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/)
  - [Build Locally](https://docs.digitalocean.com/products/app-platform/how-to/build-locally/)
  - [Use MCP Server](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/)
  - [Destroy Apps](https://docs.digitalocean.com/products/app-platform/how-to/destroy-app/)
- [Reference](https://docs.digitalocean.com/products/app-platform/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Apps)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/apps/)
  - [Builds with Buildpacks](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/)
  - [Builds with Dockerfiles](https://docs.digitalocean.com/products/app-platform/reference/dockerfile/)
  - [App Spec Reference](https://docs.digitalocean.com/products/app-platform/reference/app-spec/)
  - [Dev Config Reference](https://docs.digitalocean.com/products/app-platform/reference/dev-config/)
  - [Error Code Reference](https://docs.digitalocean.com/products/app-platform/reference/error-codes/)
- [Concepts](https://docs.digitalocean.com/products/app-platform/concepts/)
  - [Choosing a Plan](https://docs.digitalocean.com/products/app-platform/concepts/choosing-a-plan/)
  - [Platform Upgrade Policy](https://docs.digitalocean.com/products/app-platform/concepts/platform-upgrade-policy/)
  - [Glossary](https://docs.digitalocean.com/glossary/app-platform/)
- [Details](https://docs.digitalocean.com/products/app-platform/details/)
  - [Introduction FAQ](https://docs.digitalocean.com/products/app-platform/details/intro-faq/)
  - [Features](https://docs.digitalocean.com/products/app-platform/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/app-platform/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/app-platform/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/app-platform/details/limits/)
  - [Maintenance](https://docs.digitalocean.com/products/app-platform/details/maintenance/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/app-platform)
- [Support](https://docs.digitalocean.com/products/app-platform/support/)

- [How-Tos](https://docs.digitalocean.com/products/app-platform/how-to/)
- Use MCP Server

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Use the DigitalOcean MCP Server

Validated on 6 Aug 2025 • Last edited on 18 Nov 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

You can integrate App Platform into AI development environments and tools using the App Platform MCP server and llms.txt. MCP and llms.txt both standardize how to provide context to LLMs:

- The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) is a standardized protocol for providing context to large language models. The App Platform MCP server provides context for AI clients to make requests to the DigitalOcean API.
- [llms.txt](https://llmstxt.org/) is a standardized Markdown file format. [App Platform’s llms.txt](https://docs.digitalocean.com/products/app-platform/llms.txt) provides relevant context to large language models (LLMs) with our product documentation. Using App Platform’s AI development integrations can help you generate, refactor, and optimize code with AI assistance rather than manually.

MCP clients are applications (like Windsurf, Cursor, Claude, or VS Code Copilot) that connect to MCP servers. MCP servers provide context and tools for code agents to use.

You can use [DigitalOcean’s MCP server](https://github.com/digitalocean-labs/mcp-digitalocean) to provide context about App Platform, which enables AI tools to interface with the DigitalOcean API to manage your resources.

## Prerequisites

To use the DigitalOcean MCP server you need the following:

- Node.js v18 or later
- npm v8 or later
- An MCP client such as [Claude](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#claude), [Cursor](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#cursor), [VS Code](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#vs-code), or [Windsurf](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#windsurf)
- A [DigitalOcean API token](https://docs.digitalocean.com/reference/api/create-personal-access-token/)

Warning

Do not commit access tokens to your Git repository. Many MCP clients require you to put access tokens directly in their configuration files. This can be safe if the configuration file is not checked into a Git repository and the file has appropriately restricted `read` permissions.

If the configuration file is in a Git repository, add the file to `.gitignore` or use any available client-specific techniques (such as VS Code’s [input variable substitution](https://code.visualstudio.com/docs/reference/variables-reference#_input-variables)) to avoid exposing your access token.

The DigitalOcean MCP server runs locally using npm’s `npx` command and requires no further installation.

## Add the DigitalOcean MCP Server to MCP Clients

MCP clients use a standard JSON format to configure MCP servers. Use the following DigitalOcean MCP server configuration and MCP client instructions for [Claude](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#claude), [Cursor](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#cursor), [VS Code](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#vs-code), and [Windsurf](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#windsurf) to finish the configuration.

To find other MCP clients not listed here, refer to the official Model Context Protocol website’s [Example Clients list](https://modelcontextprotocol.io/clients).

## Example DigitalOcean MCP Configuration

The following JSON snippet configures the DigitalOcean MCP server with `<your_api_token>` and access to only the `apps` App Platform service.

```json
{
  "mcpServers": {
    "digitalocean": {
      "command": "npx",
      "args": ["-y", "@digitalocean/mcp", "--services", "apps"],
      "env": {
        "DIGITALOCEAN_API_TOKEN": "<your_api_token>"
      }
    }
  }
}
```

Replace `<your_api_token>` with your DigitalOcean API token, or use the client-specific method of variable substitution (if available) to keep your token out of the configuration file.

Refer to the [`mcp-digitalocean` repository](https://github.com/digitalocean-labs/mcp-digitalocean) for more information on other supported DigitalOcean services and detailed lists and descriptions of their available tools.

### Claude

Use `claude mcp add` to add MCP servers to Claude Code. You should have your DigitalOcean API token set as the `DIGITALOCEAN_API_TOKEN` environment variable before running this command:

```shell
claude mcp add digitalocean \
  --env DIGITALOCEAN_API_TOKEN=${DIGITALOCEAN_API_TOKEN} \
  -- npx -y "@digitalocean/mcp"
```

Check if the addition was successful by listing your available MCP servers:

```shell
claude mcp list
```

Read the official Claude Code [Installing MCP servers](https://docs.anthropic.com/en/docs/claude-code/mcp#installing-mcp-servers) docs for more information.

For Claude Desktop, refer to [Getting started with Local MCP Servers on Claude Desktop](https://support.anthropic.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop).

### Cursor

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=digitalocean&config=eyJjb21tYW5kIjoibnB4IEBkaWdpdGFsb2NlYW4vbWNwIC0tc2VydmljZXMgYXBwcyIsImVudiI6eyJESUdJVEFMT0NFQU5fQVBJX1RPS0VOIjoiIn19)

Use the **Add to Cursor** badge or read [Cursor’s Model Context Protocol docs](https://docs.cursor.com/context/model-context-protocol) to add the DigitalOcean MCP server to Cursor.

### Visual Studio Code

Read [Use MCP servers in VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) to add the DigitalOcean MCP server to Visual Studio Code.

### Windsurf

Read the [Windsurf Cascade MCP docs](https://docs.windsurf.com/windsurf/cascade/mcp) to learn how to add the DigitalOcean MCP server to Windsurf.

## Troubleshooting

If your DigitalOcean MCP server is not working as expected, check the following common issues.

### Authentication Issues

The DigitalOcean MCP server requires an active and properly-scoped access token:

- Ensure the `DIGITALOCEAN_API_TOKEN` variable is correctly set in the MCP server’s environment.
- Verify the access token has appropriate permissions for the services you’re using.
- Check that the access token hasn’t expired.

### Invalid Specifications

If the MCP server is functioning but giving you code or configurations that result in errors, check that the generated code or configuration files match the relevant API specification or platform availability:

- Refer to the [DigitalOcean API documentation](https://docs.digitalocean.com/reference/api/digitalocean/) for valid values.
- Ensure required parameters are included.

### Unsupported Region or Service

An LLM may configure services or features that are not available in the specified region:

- Check [regional availability](https://docs.digitalocean.com/platform/regional-availability/) for the service you’re setting up.
- Verify the service is available in your selected region.
- Use `doctl compute region list` to see available regions.

### Debugging Best Practices

When debugging issues with LLMs and the DigitalOcean MCP server, consider the following:

- **Keep Logs**: Save the MCP request/response logs for reproducibility.
- **Start Small**: Test with small and focused operations first before moving on to complex workflows.
- **Check Permissions**: Ensure your API token has the necessary scopes.

In this article...

- [Prerequisites](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#prerequisites)
- [Add the DigitalOcean MCP Server to MCP Clients](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#add-the-digitalocean-mcp-server-to-mcp-clients)
- [Example DigitalOcean MCP Configuration](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#example-digitalocean-mcp-configuration)
  - [Claude](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#claude)
  - [Cursor](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#cursor)
  - [Visual Studio Code](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#vs-code)
  - [Windsurf](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#windsurf)
- [Troubleshooting](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#troubleshooting)
  - [Authentication Issues](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#authentication-issues)
  - [Invalid Specifications](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#invalid-specifications)
  - [Unsupported Region or Service](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#unsupported-region-or-service)
  - [Debugging Best Practices](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/#debugging-best-practices)

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