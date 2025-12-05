---
url: "https://docs.digitalocean.com/reference/paperspace/core/install/"
title: "How to Generate a Core API Key and Install the CLI and SDKs | DigitalOcean Documentation"
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
  - [API Keys](https://docs.digitalocean.com/reference/paperspace/api-keys/)
  - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
  - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
  - [Legacy Tools](https://docs.digitalocean.com/reference/paperspace/legacy/)
    - [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
    - [Core API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/core/)
      - [Install Core CLI & SDK](https://docs.digitalocean.com/reference/paperspace/core/install/)
      - [Command Reference](https://docs.digitalocean.com/reference/paperspace/core/commands/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Legacy Tools](https://docs.digitalocean.com/reference/paperspace/legacy/)
- [Core API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/core/)
- Install Core CLI & SDK

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Generate a Core API Key and Install the CLI and SDKs

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Core API endpoints are deprecated and no longer available for Paperspace users.


Core provides a RESTful API and a number of client libraries to manage compute resources programmatically. A new GraphQL API is under development and in use for some resources.

![Banner](https://docs.digitalocean.com/screenshots/paperspace/core/core-api-banner.4a5eea09288ee1be89e20bfbb9e1bca9971746a2a8194a739ec675e929951c23.jpg)

## How to Generate an API Key

To use the Paperspace Core API you first need to generate an API key.

API keys are available from the `API Keys` tab in the `Team Settings` menu of the Paperspace console.

![Navigate to the API Keys tab](https://docs.digitalocean.com/screenshots/paperspace/core/navigate-api-keys.9f3709240f7cbab2c48ae06b884c49bff5d3f83b728468ad41aa3ec59c6315e1.gif)

Once in the API Keys tab, create an API key with a memorable name.

![API Keys](https://docs.digitalocean.com/screenshots/paperspace/core/api-key-menu.05d6544e7f3f9cc59ab1e1756570d0c82b94e0758f8e36f88e6be3ea361fbb37.png)

The only time the API Key is available to copy is during creation of the key. So be sure to copy the key at this time.

![Copy API Key](https://docs.digitalocean.com/screenshots/paperspace/core/api-key-copy-paste.3bac9fa31c6837e395bf5c5e2bf101dca59b5ec69983807482ce40eabc07f4e0.png)

After the key is copied, the name of the key is available in the list of API Keys.

![List of API Keys](https://docs.digitalocean.com/screenshots/paperspace/core/api-key-list.5c7ff119f51c1f5db3a0ee3d887267096c10562990c3c0285c5b4fdd106e3402.png)

## How to install the CLI

To install the Paperspace CLI, you need to have [Node.js](https://nodejs.org/en/) v8.12.0 or later installed.

Once Node is installed, check the Node version:

```bash
node -v
```

Node.js comes bundled with [npm](https://www.npmjs.com/), the Node package management tool.

To install the CLI, you need to install the package globally with `-g` flag:

```bash
npm install -g paperspace-node
```

We can now invoke the Paperspace CLI from the command line. To check the version of the package:

```bash
paperspace -v
```

Now that the CLI is installed, we can now run commands in the `CLI` tab.

## How to install the Node client library

The Paperspace Node.js client library is bundled with the CLI, so the installation method is similar.

To install the Node.js client library, you need to have [Node.js](https://nodejs.org/) v8.12.0 or later installed.

To check the version of Node.js installed on your machine run:

```bash
node -v
```

Node.js comes bundled with [npm](https://www.npmjs.com/), the Node.js package management tool.

We then install the Node.js client library without using the `-g` flag:

```bash
npm install paperspace-node
```

We recommend installing the paperspace-node package globally so that the `paperspace` command is available on your command line everywhere on your system. If you want to make it available only within an individual Node.js project, you can install it for use only in the current directory by omitting the `-g` flag.

To use the Node.js library within your Node.js app, import the package:

```js
var paperspace_node = require("paperspace-node");
```

Then create an instance of the client, optionally passing in your API key:

```js
var paperspace = paperspace_node({
  apiKey: "1ba4f98e7c0...", // <- paste your api key here
});
```

If you do not pass an `apiKey` parameter, the paperspace-node module looks for the environment variable value named `PAPERSPACE_API_KEY`.

It’s also possible to use the cached api key location created by the `paperspace login` command which is stored at `~/.paperspace/config.json`.

```js
var paperspace = paperspace_node();
```

You can get the paperspace-node version programmatically via the VERSION attribute:

```js
var version = paperspace_node.VERSION;
```

Now that the Node.js client is installed, refer to the API reference for command details.

## How to install the Go client library

```go
package main

import (
    paperspace "github.com/Paperspace/paperspace-go"
)

func getClient() *paperspace.Client {
    client := paperspace.NewClient()
    client.APIKey = p.APIKey
    return client
}
```

Environment variables

```text
PAPERSPACE_APIKEY: Paperspace API key
PAPERSPACE_BASEURL: Paperspace API url
PAPERSPACE_DEBUG: Enable debugging
PAPERSPACE_DEBUG_BODY: Enable debug for response body
```

Now that the Go client is installed, refer to the API reference for command details.

In this article...

- [How to Generate an API Key](https://docs.digitalocean.com/reference/paperspace/core/install/#how-to-generate-an-api-key)
- [How to install the CLI](https://docs.digitalocean.com/reference/paperspace/core/install/#how-to-install-the-cli)
- [How to install the Node client library](https://docs.digitalocean.com/reference/paperspace/core/install/#how-to-install-the-node-client-library)
- [How to install the Go client library](https://docs.digitalocean.com/reference/paperspace/core/install/#how-to-install-the-go-client-library)

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