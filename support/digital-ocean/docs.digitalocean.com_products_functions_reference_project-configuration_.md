---
url: "https://docs.digitalocean.com/products/functions/reference/project-configuration/"
title: "Project Configuration YAML File | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/functions.b0bb037d0e06c09d659cd32aeb2b48c4195d6e824680f25a98d7ed1c24010331.svg)Functions](https://docs.digitalocean.com/products/functions/)
- [Getting Started](https://docs.digitalocean.com/products/functions/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/functions/getting-started/quickstart/)
  - [Sample Functions](https://docs.digitalocean.com/products/functions/getting-started/sample-functions/)
  - [Serverless Jamstack Site](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/)
- [How-Tos](https://docs.digitalocean.com/products/functions/how-to/)
  - [Create Functions](https://docs.digitalocean.com/products/functions/how-to/create-functions/)
  - [Develop Functions](https://docs.digitalocean.com/products/functions/how-to/develop-functions/)
  - [Configure Functions](https://docs.digitalocean.com/products/functions/how-to/configure-functions/)
  - [Schedule Functionsprivate](https://docs.digitalocean.com/products/functions/how-to/schedule-functions/)
  - [Call Async Functions](https://docs.digitalocean.com/products/functions/how-to/async-functions/)
  - [Destroy Functions](https://docs.digitalocean.com/products/functions/how-to/destroy/)
  - [Include Static Files](https://docs.digitalocean.com/products/functions/how-to/include-files/)
  - [Create Namespaces](https://docs.digitalocean.com/products/functions/how-to/create-namespaces/)
  - [Destroy Namespaces](https://docs.digitalocean.com/products/functions/how-to/destroy-namespaces/)
  - [Structure Projects](https://docs.digitalocean.com/products/functions/how-to/structure-projects/)
  - [Forward Logs](https://docs.digitalocean.com/products/functions/how-to/forward-logs/)
  - [Deploy to App Platform](https://docs.digitalocean.com/products/functions/how-to/deploy-to-app-platform/)
- [Reference](https://docs.digitalocean.com/products/functions/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Functions)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/serverless/)
  - [Activation Records](https://docs.digitalocean.com/products/functions/reference/activation-records/)
  - [HTTP Headers](https://docs.digitalocean.com/products/functions/reference/http-headers/)
  - [Parameters and Responses](https://docs.digitalocean.com/products/functions/reference/parameters-responses/)
  - [Project Configuration](https://docs.digitalocean.com/products/functions/reference/project-configuration/)
  - [Supported Runtimes](https://docs.digitalocean.com/products/functions/reference/runtimes/)
    - [Go](https://docs.digitalocean.com/products/functions/reference/runtimes/go/)
    - [Node.js](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/)
    - [PHP](https://docs.digitalocean.com/products/functions/reference/runtimes/php/)
    - [Python](https://docs.digitalocean.com/products/functions/reference/runtimes/python/)
  - [Build Process](https://docs.digitalocean.com/products/functions/reference/build-process/)
- [Concepts](https://docs.digitalocean.com/products/functions/concepts/)
  - [Glossary](https://docs.digitalocean.com/glossary/functions/)
- [Details](https://docs.digitalocean.com/products/functions/details/)
  - [Features](https://docs.digitalocean.com/products/functions/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/functions/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/functions/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/functions/details/limits/)

- [Reference](https://docs.digitalocean.com/products/functions/reference/)
- Project Configuration

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Project Configuration YAML File

Validated on 23 May 2022 • Last edited on 17 Apr 2025

Functions are blocks of code that run on demand without the need to manage any infrastructure. Develop on your local machine, test your code from the command line (using `doctl`), then deploy to a production namespace or App Platform — no servers required.

The `project.yml` file is a YAML configuration file in the root directory of a project which lets you define environment variables, parameters, and other properties for the project and the packages and functions within it.

The structure of the information in `project.yml` is aligned with the [structure of the project](https://docs.digitalocean.com/products/functions/how-to/structure-projects/). Using this structure, you can scope the properties you define in `project.yml` to one of three different levels:

- Scoped to the _project_, which is the top-level collection of resources, including at least one package
- Scoped to a _package_, which is a collection of functions
- Scoped to individual _functions_, which may be called _actions_ in the configuration file.

Additionally, the build process for `project.yml` uses a [templating](https://docs.digitalocean.com/products/functions/reference/project-configuration/#templating) syntax which supports including variables from local `.env` files or [App Platform environment variables](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/).

## Properties

### Parameters

Parameters are passed into function invocations alongside query or POST parameters from the HTTP request.

- **Scope**: Projects, packages, and functions.

- **Valid values**: Any structure that converts to valid JSON, including nested lists and objects.


This `parameters` example defines two parameters: `param1`, which has a single value, and `param2`, which is a list of two values:

```yaml
parameters:
  param1: <value>
  param2:
    - <value>
    - <value>
```

### Environment

Environment values defined in the configuration are added as the environment variables of the process that runs the function.

- **Scope**: Projects, packages, and functions.

- **Valid values**: Must be a string.


You can statically define environment variables in the `project.yml` file, as in this example:

```yaml
environment:
  env1: <value>
  env2: <value>
```

You can also [template](https://docs.digitalocean.com/products/functions/reference/project-configuration/#templating) environment variables from an `.env` file in the project filesystem or from App Platform’s environment variable configuration.

### Main

The `main` parameter defines the entry point for a function.

- **Scope**: Functions.

- **Valid values**: Must be a string.


```yaml
packages:
  - name: <package-name>
    functions:
      - name: <function-name>
        main: <main-entry-point>
```

If you don’t specify a `main` for a function, the build process tries to detect the correct entry point.

### Runtime

The `runtime` parameter specifies the runtime package used by the function.

- **Scope**: Functions.

- **Valid values**: Any [supported runtime](https://docs.digitalocean.com/products/functions/reference/runtimes/). You can use the value `default` in place of the runtime version (for example, `go:default` instead of `go:1.15`).


```yaml
packages:
  - name: <package-name>
    functions:
      - name: <function-name>
        runtime: <runtime>
```

If you do not specify a `runtime`, the build process tries to detect it.

### Limits

The `limits` parameter lets you override the function’s default limits for timeout time, memory allocation, and total log size.

- **Scope**: Functions.

- **Valid fields and values**: An object with at least one field.
  - `timeout`: Timeout time in milliseconds.
  - `memory`: Memory allocation in megabytes.
  - `logs`: Total log size in kilobytes.

```yaml
packages:
- name: <package-name>
  functions:
    - name: <function-name>
      limits:
        timeout: <milliseconds>
        memory: <megabytes>
        logs: <kilobytes>
```

### Triggers

The `triggers` parameter lets you create scheduled function triggers.

- **Scope**: Functions.

- **Valid fields and values**:
  - `name`: A name for the trigger.
  - `sourceType`: Currently only the `scheduler` type of trigger is supported.
  - `sourceDetails`
    - `cron`: A string using cron syntax to set the trigger schedule.
    - `withBody`: Optional. An object to be passed as input to the function via POST.

```yaml
packages:
- name: <package-name>
  functions:
    - name: <function-name>
      triggers:
      - name: <trigger-name>
        sourceType: scheduler
        sourceDetails:
          cron: <string>
          withBody:  <object>
```

### Web

The `web` parameter lets you create a _web function_, meaning you can access it using normal HTTP methods outside of the authenticated REST API. You can also set your web function to receive the request body as raw `base64`-encoded text by using `web: raw`. To secure your web function, use [the `webSecure` parameter](https://docs.digitalocean.com/products/functions/reference/project-configuration/#websecure).

- **Scope**: Functions.

- **Valid values**: Either `true`, `false`, or `raw`. A `true` value enables web access to the function, and `false` disables access. A `raw` value enables web access and also passes in request bodies as raw, `base64`-encoded text. If you omit the `web` parameter entirely, it defaults to `true`.


```yaml
packages:
- name: <package-name>
  functions:
    - name: <function-name>
      web: true
```

### WebSecure

The `webSecure` parameter enables authentication for web functions and sets the secret token to the given value. You must provide the secret during HTTP requests by using the `X-Require-Whisk-Auth: <secret-token>` header.

- **Scope**: Functions.

- **Valid values**: Any string.


```yaml
packages:
- name: <package-name>
  functions:
    - name: <function-name>
      web: true
      webSecure: <secret-token>
```

## Templating

You can template variables in `project.yml` from local `.env` files or [App Platform environment variables](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/). This is especially useful in combination with App Platform’s encrypted variables for secret storage.

You can substitute in variables from the runtime environment using the format `"${SYMBOL}"`, where `SYMBOL` is the name of the variable specified in App Platform. We recommend using quotes around the variable substitution to ensure proper parsing.

## Examples

### Basic

Here is a simplified example of a `project.yml` file:

Example `project.yml`

```yaml
parameters: # project scope
    param1: value
environment:
    env1: value
packages:
  - name: package1
    parameters: # package scope
    environment:
    functions:
      - name: function1
        parameters: # function scope
        environment:
        limits:
        runtime: 'nodejs:default'
        main: ''
```

This example defines a single package, `package1`, and a single function within it, `function1`, which uses the `nodejs:default` runtime. This example also defines one parameter, `param1,` and one environment variable, `env1`, at the package scope.

### With Templating

The following simplified YAML example includes some templated variables:

Example `project.yml` with templated variables

```yaml
environment:
  # ENV is statically defined as "production" in this example:
  ENV: production
packages:
  - name: store
    environment:
      # DATABASE_URL will be substituted to the DATABASE_URL_READ_ONLY value
      # defined in App Platform's environment variable configuration.
      # NOTE: The receiving variable name does not need to match the name as
      # defined in the app / component config. This facilitates narrowly
      # scoped or overlapping values.
      DATABASE_URL: "${DATABASE_URL_READ_ONLY}"
    functions:
      - name: buy
        environment:
          # PAYMENT_API_KEY will substitute the PAYMENT_API_KEY variable
          # from App Platform's runtime variable configuration.
          PAYMENT_API_KEY: "${PAYMENT_API_KEY}"
          # DATABASE_URL will be substituted with the DATABASE_URL_WRITE
          # value defined in App Platform's environment variable config.
          DATABASE_URL: "${DATABASE_URL_WRITE}"
```

By default, the `doctl serverless deploy` command looks for an `.env` file in the same directory as the `project.yml` file. You can also add an `--env <path to .env-formatted file>` flag to specify an alternate file name and location anywhere on the filesystem.

## Learn More

![](https://docs.digitalocean.com/images/icons/functions.svg)

How to Structure Projects

Projects contain functions that are grouped into packages and configured by a project.yml file.

![](https://docs.digitalocean.com/images/icons/app-platform.svg)

How to Use Environment Variables in App Platform

Use and encrypt environment variables in App Platform.

![](https://docs.digitalocean.com/images/icons/app-platform.svg)

How to Manage Functions in App Platform

Create and configure functions in App Platform. Functions are blocks of code that run on demand without the need to manage any infrastructure.

In this article...

- [Properties](https://docs.digitalocean.com/products/functions/reference/project-configuration/#properties)
  - [Parameters](https://docs.digitalocean.com/products/functions/reference/project-configuration/#parameters)
  - [Environment](https://docs.digitalocean.com/products/functions/reference/project-configuration/#environment)
  - [Main](https://docs.digitalocean.com/products/functions/reference/project-configuration/#main)
  - [Runtime](https://docs.digitalocean.com/products/functions/reference/project-configuration/#runtime)
  - [Limits](https://docs.digitalocean.com/products/functions/reference/project-configuration/#limits)
  - [Triggers](https://docs.digitalocean.com/products/functions/reference/project-configuration/#triggers)
  - [Web](https://docs.digitalocean.com/products/functions/reference/project-configuration/#web)
  - [WebSecure](https://docs.digitalocean.com/products/functions/reference/project-configuration/#websecure)
- [Templating](https://docs.digitalocean.com/products/functions/reference/project-configuration/#templating)
- [Examples](https://docs.digitalocean.com/products/functions/reference/project-configuration/#examples)
  - [Basic](https://docs.digitalocean.com/products/functions/reference/project-configuration/#basic)
  - [With Templating](https://docs.digitalocean.com/products/functions/reference/project-configuration/#with-templating)
- [Learn More](https://docs.digitalocean.com/products/functions/reference/project-configuration/#learn-more)

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